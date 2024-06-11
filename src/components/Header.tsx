'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, MouseEvent } from 'react';
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

    const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    };

    return (
        <nav className={`fixed left-0 w-full flex justify-between items-center p-4 h-16 z-50 transition-colors duration-300 text-white ${isScrolled || isMobileMenuOpen ? 'bg-gray-600' : 'bg-transparent'}`}>
            <div className="ml-6 flex items-center space-x-4">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo da Empresa" width={120} height={40} />
                </Link>
                <Link href="/">
                    <Image src="/logosamsung.png" alt="Logo da Empresa" width={80} height={30} />
                </Link>
                <Link href="/">
                    <Image src="/lg_logo.png" alt="Logo da Empresa" width={80} height={30} />
                </Link>
            </div>
            <div className="hidden md:flex space-x-8 mr-6">
                <Link href="/" className="text-lg hover:text-gray-300">Home</Link>
                <a href="#services-title" className="text-lg hover:text-gray-300" onClick={(e) => handleSmoothScroll(e, 'services-title')}>Serviços</a>
                <a href="#booking-form" className="text-lg hover:text-gray-300" onClick={(e) => handleSmoothScroll(e, 'booking-form')}>Contato</a>
            </div>
            <div className="md:hidden mr-6">
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-600 text-white flex flex-col items-center space-y-6 py-6 md:hidden">
                    <Link href="/" className="text-lg hover:text-gray-500" onClick={toggleMobileMenu}>Home</Link>
                    <a href="#services-title" className="text-lg hover:text-gray-500" onClick={(e) => handleSmoothScroll(e, 'services-title')}>Serviços</a>
                    <a href="#booking-form" className="text-lg hover:text-gray-500" onClick={(e) => handleSmoothScroll(e, 'booking-form')}>Contato</a>
                </div>
            )}
        </nav>
    );
}
