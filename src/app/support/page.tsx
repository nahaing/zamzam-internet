"use client";

import { useState } from "react";
import Link from "next/link";

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const supportCategories = [
    {
      title: "Technical Support",
      icon: "🛠️",
      desc: "Troubleshoot slow speeds, Wi-Fi disconnections, or router configuration.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Billing & Payments",
      icon: "💳",
      desc: "Understand your bill, check due dates, or explore online payment options.",
      color: "bg-orange-50 text-[#f27423]",
    },
    {
      title: "Device Manuals",
      icon: "📖",
      desc: "Download step-by-step guides for ONU fiber devices, routers, and set-top boxes.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Complaint Tracking",
      icon: "📋",
      desc: "Track the real-time status of your registered support ticket or field request.",
      color: "bg-green-50 text-green-600",
    },
  ];

  const faqs = [
    {
      q: "How do I restart or reset my Zam Zam Wi-Fi router?",
      a: "To restart your router, unplug the power cable from the back, wait for 30 seconds, and plug it back in. Allow 2 to 3 minutes for all fiber indicator lights to turn stable green. Avoid pressing the red 'Reset' pinhole button unless instructed by a support engineer.",
    },
    {
      q: "What should I do if the LOS light on my fiber device flashes red?",
      a: "A flashing red LOS (Loss of Signal) light means the optical fiber signal is physically interrupted or bent. Check if the yellow fiber cable connected to your device is loose or damaged. If everything looks secure, please contact our 24/7 helpline at 111-926-926.",
    },
    {
      q: "How can I pay my monthly Zam Zam internet bill online?",
      a: "You can pay your bill instantly via 130+ banking apps, EasyPaisa, JazzCash, or the My Zam Zam Mobile App under the 'Pay Bill' section using your 10-digit Customer ID.",
    },
    {
      q: "How do I change my Wi-Fi password?",
      a: "You can easily change your Wi-Fi name (SSID) and password by logging into the My Zam Zam App, tapping 'Optimize Wi-Fi', and selecting 'Change Wi-Fi Password'.",
    },
    {
      q: "What is the typical response time for an engineer visit in Faisalabad?",
      a: "Our field support engineers are deployed across Faisalabad and generally reach customer premises within 2 to 4 hours of ticket generation.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            Customer Help Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-4">
            How Can We Support You?
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Get instant help with your fiber connection, device configurations, billing inquiries, or technical support 24 hours a day.
          </p>
        </div>

        {/* Support Quick Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {cat.desc}
                </p>
              </div>
              <Link
                href="/contact"
                className="text-sm font-bold text-[#f27423] hover:underline flex items-center gap-1"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* 24/7 Helpline Banner */}
        <div className="bg-[#ffcdb2] rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 mb-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div>
            <span className="bg-white text-[#f27423] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              24/7 Active Helpline
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333] mb-2">Need Urgent Assistance?</h2>
            <p className="text-gray-700 text-sm sm:text-base font-medium max-w-xl">
              Our support engineers are standing by 24/7/365 to resolve disconnections or network queries instantly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="tel:111926926"
              className="bg-[#333] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-black transition text-center shadow-md text-sm"
            >
              📞 Call 111-ZAM-ZAM
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-700 transition text-center shadow-md text-sm"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Interactive FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 border border-gray-100 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden transition-colors bg-[#f5f7fa]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 font-bold text-[#333] text-sm sm:text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#f27423] text-xl font-bold shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium border-t border-gray-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}