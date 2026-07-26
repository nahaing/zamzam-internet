"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setSupportDropdown(false);
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased min-h-screen flex flex-col bg-white text-gray-900" suppressHydrationWarning>
        
        {/* 1. Global Top Promotional Banner */}
        <div className="bg-[#f27423] text-white text-xs sm:text-sm py-2 px-4 text-center w-full z-50">
          <p className="flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
            <span>Join today with our easy, new signup process. <Link href="/signup" className="underline font-bold">Sign up now.</Link></span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden sm:inline">Get a mega discount of 25% on 12 months advance payment. <Link href="/packages" className="underline font-bold">Learn how.</Link></span>
          </p>
        </div>

        {/* 2. Global Main Navigation Header */}
        <div className="w-full flex justify-center items-center sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-3 border-b border-gray-100">
          <div className="flex max-w-7xl w-full px-4 md:px-8">
            <header className="flex w-full items-center justify-between gap-4">
              
              {/* Logo & Desktop Navigation */}
              <div className="flex items-center gap-6 xl:gap-10">
                <Link href="/" onClick={closeMobileMenu} className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-800 cursor-pointer shrink-0">
                  ZAM<span className="text-[#f27423] font-light italic">zam</span>
                </Link>
                
                <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm">
                  {/* Internet Packages Link */}
                  <Link href="/packages" className="text-gray-600 font-medium hover:text-gray-900 transition-colors whitespace-nowrap">
                    Internet
                  </Link>

                  {/* Services Dropdown */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <button className="text-gray-600 font-medium hover:text-gray-900 flex items-center gap-1 transition-colors py-2 whitespace-nowrap">
                      Services <span className="text-[10px]">▼</span>
                    </button>
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <Link href="/services" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium">Value Added Services</Link>
                        <Link href="/business" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium">Business Solutions</Link>
                      </div>
                    )}
                  </div>

                  {/* Support Dropdown */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setSupportDropdown(true)}
                    onMouseLeave={() => setSupportDropdown(false)}
                  >
                    <button className="text-gray-600 font-medium hover:text-gray-900 flex items-center gap-1 transition-colors py-2 whitespace-nowrap">
                      Support <span className="text-[10px]">▼</span>
                    </button>
                    {supportDropdown && (
                      <div className="absolute top-full left-0 w-44 bg-white border border-gray-100 rounded-xl shadow-xl py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <Link href="/support" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium">Support Center</Link>
                        <Link href="/contact" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium">Contact Us</Link>
                        <Link href="/about" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium">About Us</Link>
                      </div>
                    )}
                  </div>

                  {/* Coverage Areas */}
                  <Link href="/coverage" className="text-gray-600 font-medium hover:text-gray-900 transition-colors whitespace-nowrap">
                    Coverage Areas
                  </Link>

                  {/* Contact Direct */}
                  <Link href="/contact" className="text-gray-600 font-medium hover:text-gray-900 transition-colors whitespace-nowrap">
                    Contact
                  </Link>
                </nav>
              </div>
              
              {/* Right Utility Buttons */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <div className="hidden xl:flex items-center gap-3 text-gray-500 text-lg mr-1">
                  <button className="hover:text-[#f27423] transition-colors p-1" title="Search">🔍</button>
                  <Link href="/support" className="hover:text-[#f27423] transition-colors p-1" title="Contact Support">📞</Link>
                  <Link href="/signup" className="hover:text-[#f27423] transition-colors p-1" title="Customer Signup">👤</Link>
                </div>
                
                <Link href="/signup" className="bg-[#f27423] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#d9651c] transition-colors shadow-sm whitespace-nowrap">
                  Get connection
                </Link>
                <Link href="/business" className="hidden sm:block bg-transparent text-blue-600 border border-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Business
                </Link>
                
                {/* Mobile Hamburger Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden text-gray-800 text-2xl ml-1 focus:outline-none p-1"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? "✕" : "☰"}
                </button>
              </div>

            </header>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[110px] z-40 bg-white border-b border-gray-200 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3 font-semibold text-gray-700 text-base">
              <Link href="/packages" onClick={closeMobileMenu} className="py-2 border-b border-gray-100 hover:text-[#f27423]">Internet Packages</Link>
              <Link href="/services" onClick={closeMobileMenu} className="py-2 border-b border-gray-100 hover:text-[#f27423]">Value Added Services</Link>
              <Link href="/support" onClick={closeMobileMenu} className="py-2 border-b border-gray-100 hover:text-[#f27423]">Support Center</Link>
              <Link href="/coverage" onClick={closeMobileMenu} className="py-2 border-b border-gray-100 hover:text-[#f27423]">Coverage Areas</Link>
              <Link href="/business" onClick={closeMobileMenu} className="py-2 border-b border-gray-100 hover:text-[#f27423]">Business Solutions</Link>
              <Link href="/about" onClick={closeMobileMenu} className="py-2 border-b border-gray-100 hover:text-[#f27423]">About Us</Link>
              <Link href="/contact" onClick={closeMobileMenu} className="py-2 hover:text-[#f27423]">Contact Us</Link>
            </nav>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/signup"
                onClick={closeMobileMenu}
                className="bg-[#f27423] text-white font-bold py-3 rounded-xl text-center text-sm shadow-md"
              >
                Get New Connection
              </Link>
            </div>
          </div>
        )}

        {/* 3. Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* 4. Global Main Footer */}
        <footer className="bg-[#f5f7fa] pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">
            
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <div className="text-3xl font-black tracking-tighter text-[#4267B2] mb-4">
                ZAM<span className="text-[#f27423] font-light italic">zam</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mx-auto lg:mx-0 max-w-md">
                Zam Zam Internet is the leading fiber internet and IT service provider in Pakistan, delivering high-speed connectivity along with reliable cloud computing, secure web and email hosting, crystal-clear HDTV, and advance digital solutions.
              </p>
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 text-center sm:text-left">
              <div>
                <h4 className="font-extrabold text-[#333] mb-4 text-sm sm:text-base">Explore</h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-gray-500">
                  <li><Link href="/about" className="hover:text-[#f27423] transition-colors">About Us</Link></li>
                  <li><Link href="/business" className="hover:text-[#f27423] transition-colors">Business</Link></li>
                  <li><Link href="/coverage" className="hover:text-[#f27423] transition-colors">Coverage Areas</Link></li>
                  <li><Link href="/packages" className="hover:text-[#f27423] transition-colors">Internet Packages</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-extrabold text-[#333] mb-4 text-sm sm:text-base">Support</h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-gray-500">
                  <li><Link href="/support" className="hover:text-[#f27423] transition-colors">Support Hub</Link></li>
                  <li><Link href="/contact" className="hover:text-[#f27423] transition-colors">Contact</Link></li>
                  <li><Link href="/support" className="hover:text-[#f27423] transition-colors">Manuals</Link></li>
                  <li><Link href="/support" className="hover:text-[#f27423] transition-colors">FAQs</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-extrabold text-[#333] mb-4 text-sm sm:text-base">My Zam Zam</h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-gray-500 mb-6 sm:mb-0">
                  <li><Link href="/signup" className="hover:text-[#f27423] transition-colors">Sign up</Link></li>
                  <li><Link href="/signup" className="hover:text-[#f27423] transition-colors">Log in</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-extrabold text-[#333] mb-4 text-sm sm:text-base hidden sm:block">Legal & Connect</h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-gray-500 mb-6 sm:mb-8">
                  <li><Link href="#" className="hover:text-[#f27423] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-[#f27423] transition-colors">HSE Policy</Link></li>
                </ul>
                <div className="flex gap-2 justify-center sm:justify-start text-gray-500">
                  <a href="#" className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#f27423] hover:text-white hover:border-[#f27423] transition-all text-xs sm:text-sm">X</a>
                  <a href="#" className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#f27423] hover:text-white hover:border-[#f27423] transition-all text-xs sm:text-sm">in</a>
                  <a href="#" className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#f27423] hover:text-white hover:border-[#f27423] transition-all text-xs sm:text-sm">f</a>
                  <a href="#" className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#f27423] hover:text-white hover:border-[#f27423] transition-all text-xs sm:text-sm">ig</a>
                </div>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}