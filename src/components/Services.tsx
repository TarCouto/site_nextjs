'use client';

import BookingForm from "./BookingForm";
import StyledButton from "./StyledButton";
import Image from 'next/image';
import { useState, MouseEvent } from "react";
import Link from 'next/link';

export default function Services() {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const handleSmoothScroll = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        console.log(`Attempting to scroll to ${targetId}`);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('nav')?.clientHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            console.log(`Scrolling to position: ${offsetPosition}`);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.error(`Element with ID ${targetId} not found`);
        }
    };

    const questions = [
        {
            question: "Código: tE, LE",
            answer: "Código tE: Este código indica algum problema na secagem.Código LE: Se o ciclo de lavagem for interrompido e código de erro LE for exibido no painel de sua lavadora, é uma indicação que ocorreu uma falha de comunicação entre a placa de controle e o motor ou sobrecarga."
        },
        {
            question: "Código: AE, dE",
            answer: "Código AE: Esse código indica um transbordamento interno de água. Entre em contato imediatamente para agendar uma visita técnica.Código dE: Quando o código DE é exibido no painel da lavadora, significa que há um problema relacionado à porta.Em alguns casos específicos, podem aparecer os seguintes códigos adicionais:dE1: Indica que a porta está danificada.dE2: Indica que a porta não foi fechada corretamente."
        },
        {
            question: "Código: 4E, 3E6",
            answer: "Sugere-se obter assistência imediata de um técnico qualificado."
        },
        {
            question: "Código: 3E1, 3E",
            answer: "Sugere-se obter assistência imediata de um técnico qualificado."
        },
        {
            question: "Código: PE, Cd",
            answer: "Código PE: Caso ocorra uma falha no sensor do nível da água, o painel da lavadora exibirá o código de erro PE.Código Cd: Durante o processo de secagem, o tambor atinge altas temperaturas.Para garantir a segurança e evitar acidentes ao retirar as roupas, a porta trava automaticamente e o visor exibe o código CD."
        }
    ];

    return (
        <section id="services" className="py-16 bg-gray-100">
            <div id="booking-form">
                <BookingForm />
            </div>
            <div className="container mx-auto mt-24" >
                <StyledButton text="Nossos Serviços" />
                <h2 className="text-3xl font-bold mb-10 mt-3 text-center">Conheça a nossa empresa e entenda por que somos a melhor escolha para você</h2>
                <p className="mb-6 text-center">Somos uma assistência técnica que iniciou suas atividades em 1998, focada no conserto de toda a Linha Branca da LG e outras marcas nacionais. Em meados de 2001, passamos a nos especializar exclusivamente em Lava e Seca, Lavadoras e Secadoras das marcas LG e Samsung, devido à dificuldade que os consumidores enfrentavam para encontrar uma assistência técnica capaz de resolver os problemas com qualidade, agilidade e preço justo.

                    Trabalhamos dia e noite para proporcionar um serviço de excelente qualidade, mantendo nossa Taxa Zero de reclamações no Reclame Aqui.</p>
                <div className="bg-white p-10 rounded-lg shadow-lg flex items-center mb-16">
                    <div className="w-1/2 text-left">
                        <h3 className="text-3xl font-semibold mb-4">Por que escolher nosso serviço?</h3>
                        <div className="mb-6">
                            <p>
                                <strong>Expertise e Qualificação:</strong> Técnicos qualificados e treinados nas tecnologias LG e Samsung. Diagnóstico rápido e preciso.
                            </p>
                            <p>
                                <strong>Qualidade e Agilidade:</strong> Garantimos funcionamento perfeito da sua Lava e Seca no menor tempo possível.
                            </p>
                            <p>
                                <strong>Preço Justo:</strong> Serviços de alta qualidade a preços competitivos, sem surpresas.
                            </p>
                            <p>
                                <strong>Taxa Zero de Reclamações:</strong> Compromisso com a satisfação total dos nossos clientes e excelência no atendimento.
                            </p>
                            <p>
                                <strong>Nossos Serviços:</strong>
                                Manutenção Preventiva, Reparos, Instalação, Suporte Técnico.
                            </p>
                            <p>
                                Escolha nossa assistência técnica e tenha tranquilidade. Entre em contato conosco hoje mesmo!
                            </p>
                        </div>


                        <Link href="#booking-form">
                            <button onClick={(e) => handleSmoothScroll(e, 'booking-form')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">Contate-nos</button>
                        </Link>
                    </div>
                    <div className="w-1/2">
                        <Image src="/maquina.webp" alt="Tire" className="mx-auto" width={500} height={500} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="flex flex-col items-start">
                            <StyledButton text="FAQ" />
                            <h2 className="text-4xl font-bold mb-10 mt-3">Erros mais comuns em <span className="text-blue-500">Lava e Seca</span></h2>
                        </div>
                        <p className="mb-6">
                            Conheça os problemas mais frequentes nas máquinas de lavar e secar da LG e Samsung, e como nossa assistência técnica pode ajudar a resolvê-los.
                        </p>
                        <p className="mb-6">
                            Nossa equipe está preparada para diagnosticar e reparar esses e outros problemas, garantindo que sua Lava e Seca volte a funcionar perfeitamente.
                        </p>
                        <button onClick={(e) => handleSmoothScroll(e, 'services-title')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">Serviços</button>
                    </div>

                    <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg">
                        <ol className="list-decimal text-left">
                            {questions.map((item, index) => (
                                <li key={index} className="cursor-pointer text-lg mb-2 bg-gray-100 p-4 rounded-lg" onClick={() => toggleQuestion(index)}>
                                    <span className={`text-lg ${activeQuestion === index ? "text-blue-500" : "text-gray-800"}`}>{item.question}</span>
                                    {activeQuestion === index && (
                                        <div className="mt-2 text-gray-600">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
