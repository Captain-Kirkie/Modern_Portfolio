import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isScrolled }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Personal", href: "#personal" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 py-1" : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#home"
                        className={`font-bold transition-all duration-300 ${
                                isScrolled ? "text-primary-600" : "text-white drop-shadow-md"
                            } ${
                            isScrolled ? "text-lg" : "text-2xl"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Captain Kirkie!
                    </motion.a>

                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors duration-200 ${
                                    isScrolled ? "text-gray-700 hover:text-primary-600 text-sm" : "text-white/95 hover:text-white drop-shadow-sm text-sm"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className={`md:hidden focus:outline-none p-1 ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={isScrolled ? "w-5 h-5" : "w-6 h-6"}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden space-y-2 overflow-hidden ${
                                isScrolled ? "mt-1" : "mt-4"
                            }`}
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-gray-700 hover:text-primary-600 font-medium py-1 transition-colors duration-200 md:text-gray-700"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
