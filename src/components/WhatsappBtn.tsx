// components/WhatsappButton.js
"use client"
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000); // 4 segundos

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed bottom-4 right-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a
                href="https://wa.me/551197813-7871"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg text-white text-2xl hover:bg-green-600"
            >
                <FaWhatsapp size={32} /> {/* Usando o ícone do WhatsApp */}
            </a>
        </div>
    );
}
