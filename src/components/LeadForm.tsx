"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, User, Shield, Phone, Mail, User2, ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Zap } from "lucide-react";

interface LeadFormProps {
    city: string;
    domain: string;
    targetType?: string;
    themeColor?: string;
    initialProjectType?: string;
}

interface FormData {
    projectType: 'proprietaire_maison' | 'coproprietaire' | 'locataire' | null;
    monthlyBill: 'plus_150' | '100_150' | 'moins_100' | null;
    roofType: 'fioul' | 'gaz' | 'electricite' | 'bois' | null;
    solarLocation: 'radiateurs' | 'plancher' | 'air' | null;
    name: string;
    email: string;
    phone: string;
    zipCode: string;
}

const PHONE_REGEX = /^(?:\+?34)?\s*[6789](?:[\s.-]*\d){8}$/;
const ZIP_CODE_REGEX = /^\d{5}$/;

export default function LeadForm({ city, domain, initialProjectType }: LeadFormProps) {
    const router = useRouter();
    const [step, setStep] = useState(initialProjectType ? 2 : 1);
    const [formData, setFormData] = useState<FormData>({
        projectType: (initialProjectType as any) || null,
        monthlyBill: null,
        roofType: null,
        solarLocation: null,
        name: "",
        email: "",
        phone: "",
        zipCode: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    const handleOptionSelect = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage("");
        }
    };

    const canProceed = (): boolean => {
        switch (step) {
            case 1: return formData.projectType !== null;
            case 2: return formData.monthlyBill !== null;
            case 3: return formData.roofType !== null;
            case 4: return formData.solarLocation !== null;
            case 5:
                return (
                    formData.name.trim() !== "" &&
                    formData.email.includes("@") &&
                    ZIP_CODE_REGEX.test(formData.zipCode.trim()) &&
                    PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))
                );
            default: return false;
        }
    };

    const nextStep = () => { if (canProceed() && step < totalSteps) setStep(step + 1); };
    const prevStep = () => { if (step > 1) setStep(step - 1); };

    const getLeadScore = (): number => {
        let score = 50;
        if (formData.projectType === 'proprietaire_maison') score += 20;
        if (formData.roofType === 'fioul') score += 30; // Gasoil boiler RITE high ticket booster
        return score;
    };

    const handleSubmit = async () => {
        if (!canProceed()) {
            setStatus('error');
            setErrorMessage("Por favor, rellene todos los campos correctamente.");
            return;
        }

        setStatus('loading');
        try {
            const payload = {
                ...formData,
                city,
                postalCode: formData.zipCode,
                domain,
                niche: 'aerotermia',
                country: 'ES',
                leadScore: getLeadScore(),
                timestamp: new Date().toISOString()
            };

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Error al enviar');
            
            const data = await res.json();
            if (data?.vud?.devis_id) {
                router.push(`/success?devis_id=${data.vud.devis_id}&devis_hash=${data.vud.devis_hash || ''}`);
                return;
            }
            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-3xl p-8 text-center">
                <CheckCircle className="text-blue-500 mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-blue-800 mb-3">¡Solicitud recibida!</h3>
                <p className="text-neutral-700 mb-6">
                    Su solicitud ha sido registrada correctamente. Un especialista en aerotermia se pondrá en contacto con usted en **24 horas** para su proyecto en **{city}**.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden font-sans">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-white">
                <h3 className="font-bold text-lg">Simulador de Aerotermia 2026</h3>
                <div className="h-2 bg-white/20 rounded-full mt-4">
                    <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Cuál es su situación de vivienda?</h4>
                        <button onClick={() => { handleOptionSelect('projectType', 'proprietaire_maison'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-blue-500" />
                            <div>
                                <div className="font-bold">Propietario de chalet / casa unifamiliar</div>
                                <div className="text-sm text-neutral-500">Máxima elegibilidad para subvenciones NextGen</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('projectType', 'coproprietaire'); setStep(2); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Propietario de adosado / piso</div>
                                <div className="text-sm text-neutral-500">Requiere estudio de viabilidad técnica</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Qué sistema de calefacción utiliza actualmente?</h4>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'plus_150'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <TrendingUp className="text-blue-500" />
                            <div>
                                <div className="font-bold">Caldera de Gasoil / Carbón</div>
                                <div className="text-sm text-neutral-500">Reemplazo altamente recomendado y subvencionado</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', '100_150'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Caldera de Gas (Natural / Propano)</div>
                                <div className="text-sm text-neutral-500">Mejore la eficiencia energética de su hogar</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('monthlyBill', 'moins_100'); setStep(3); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Radiadores eléctricos</div>
                                <div className="text-sm text-neutral-500">Reduzca el consumo de luz drásticamente</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Cuánto paga aproximadamente al mes de calefacción?</h4>
                        <button onClick={() => { handleOptionSelect('roofType', 'fioul'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home className="text-blue-500" />
                            <div>
                                <div className="font-bold">Más de 150 € / mes</div>
                                <div className="text-sm text-neutral-500">Amortización rápida de la inversión</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('roofType', 'gaz'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Entre 100 y 150 € / mes</div>
                                <div className="text-sm text-neutral-500">Ahorro mensual visible desde el primer día</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('roofType', 'electricite'); setStep(4); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Home />
                            <div>
                                <div className="font-bold">Menos de 100 € / mes</div>
                                <div className="text-sm text-neutral-500">Estudio personalizado</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">¿Tipo de emisores de calefacción?</h4>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'radiateurs'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap className="text-blue-500" />
                            <div>
                                <div className="font-bold">Radiadores de agua caliente</div>
                                <div className="text-sm text-neutral-500">Aproveche su circuito existente</div>
                            </div>
                        </button>
                        <button onClick={() => { handleOptionSelect('solarLocation', 'plancher'); setStep(5); }} className="w-full p-4 border rounded-xl text-left hover:bg-neutral-50 flex items-center gap-4">
                            <Zap />
                            <div>
                                <div className="font-bold">Suelo radiante</div>
                                <div className="text-sm text-neutral-500">Máxima eficiencia y confort con aerotermia</div>
                            </div>
                        </button>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-4">Reciba su estudio de aerotermia gratuito</h4>
                        <input type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500" />
                        <input type="text" name="zipCode" placeholder="Código Postal (ej. 28001)" value={formData.zipCode} onChange={handleInputChange} maxLength={5} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500" />
                        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500" />
                        <input type="tel" name="phone" placeholder="Número de teléfono" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500" />
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        
                        <button onClick={handleSubmit} disabled={status === 'loading'} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition">
                            {status === 'loading' ? 'Enviando...' : 'Solicitar estudio gratuito'}
                        </button>
                    </div>
                )}

                <div className="flex gap-3 mt-6">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-6 py-2 border rounded-xl hover:bg-neutral-50">
                            Atrás
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
