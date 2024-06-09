'use client'
import BookingForm from "./BookingForm";
import StyledButton from "./StyledButton";
import Image from 'next/image';
import { useState } from "react";

export default function Services() {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const questions = [
        {
            question: "Why is seasonal tire replacement so important?",
            answer: "Seasonal tire replacement is important because different tires are designed to perform optimally under different conditions. Using the correct tires for the season improves safety and performance."
        },
        {
            question: "When should I replace my tires?",
            answer: "You should replace your tires when the tread depth is below the minimum recommended level, or if they show signs of damage such as cracks or bulges."
        },
        {
            question: "Why should I replace my tires with summer tires?",
            answer: "Summer tires are designed to provide optimal performance in warm weather conditions. They offer better handling and braking compared to all-season or winter tires during summer."
        },
        {
            question: "Why should I change to winter tires?",
            answer: "Winter tires are made with a rubber compound that remains flexible in cold weather, providing better traction and safety on snow and ice compared to all-season or summer tires."
        },
        {
            question: "Donec fermentum ut, sapien?",
            answer: "Fusce consequat nunc. Nulla nec magna. In laoreet feugiat. Cum sociis natoque penatibus et lectus. Ut wisi nec diam magna in turpis egestas."
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <BookingForm />
            <div className="container mx-auto mt-24">
                <StyledButton text="OUR SERVICES" />
                <h2 className="text-4xl font-bold mb-10 mt-3 text-center">Nos concertamos sua máquina de Lavar e Secar</h2>
                <p className="mb-6 text-center">Etiam amet nisl, accumsan ullamcorper amet neque. Cursus neque lacus, ac viverra pharetra hendrerit vitae vel amet. Natoque nam vitae non, a pharetra arcu quisque. Dapibus aliquet leo adipiscing egestas mus turpis tellus integer.</p>
                <div className="bg-white p-10 rounded-lg shadow-lg flex items-center mb-16">
                    <div className="w-1/2 text-left">
                        <h3 className="text-3xl font-semibold mb-4">Tire change</h3>
                        <p className="mb-6">Etiam amet nisl, accumsan ullamcorper amet neque. Cursus neque lacus, ac viverra pharetra hendrerit vitae vel amet. Natoque nam vitae non, a pharetra arcu quisque. Dapibus aliquet leo adipiscing egestas mus turpis tellus integer.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">Contact us</button>
                    </div>
                    <div className="w-1/2">
                        <Image src="/maquina.webp" alt="Tire" className="mx-auto" width={500} height={500} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="flex flex-col items-start">
                            <StyledButton text="FAQ" />
                            <h2 className="text-4xl font-bold mb-10 mt-3">Tire replacement <span className="text-blue-500">is important.</span> Check why</h2>
                        </div>
                        <p className="mb-6">Consequat sit sapien semper aliquam maecenas est enim hac habitant porttitor mollis vivamus vel porttitor ad enim eget dictum iaculis sodales nullam lectus iaculis vivamus.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">Services</button>
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
