'use client'; // Adiciona essa linha no início do arquivo

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed left-0 w-full flex justify-between items-center p-6 z-50 transition-colors duration-300 text-white ${isScrolled || isMobileMenuOpen ? 'bg-gray-600' : 'bg-transparent'}`}>
            <div className="ml-6">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo da Empresa" width={160} height={50} />
                </Link>
            </div>
            <div className="hidden md:flex space-x-8 mr-6">
                <Link href="/" className="text-xl hover:text-gray-300">Home</Link>
                <Link href="/services" className="text-xl hover:text-gray-300">Serviços</Link>
                <Link href="/team" className="text-xl hover:text-gray-300">Equipe</Link>
                <Link href="/contact" className="text-xl hover:text-gray-300">Contato</Link>
            </div>
            <div className="md:hidden mr-6">
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-600 text-white flex flex-col items-center space-y-6 py-6 md:hidden">
                    <Link href="/" className="text-xl hover:text-gray-500" onClick={toggleMobileMenu}>Home</Link>
                    <Link href="/services" className="text-xl hover:text-gray-500" onClick={toggleMobileMenu}>Serviços</Link>
                    <Link href="/team" className="text-xl hover:text-gray-500" onClick={toggleMobileMenu}>Equipe</Link>
                    <Link href="/contact" className="text-xl hover:text-gray-500" onClick={toggleMobileMenu}>Contato</Link>
                </div>
            )}
        </nav>
    );
}
