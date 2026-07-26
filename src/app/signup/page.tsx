"use client";

import { useState } from "react";

export default function Signup() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    mobile: "",
    email: "",
    area: "Kohinoor City",
    streetAddress: "",
    package: "50 Mbps - Family Fiber (Rs. 3,499/mo)",
    addons: [] as string[],
    preferredDate: "",
  });

  const areasInFaisalabad = [
    "Kohinoor City",
    "People's Colony 1",
    "People's Colony 2",
    "Madina Town",
    "Gulberg",
    "D Ground",
    "Canal Road",
    "Executive Enclave",
    "Civil Lines",
    "Club Road",
    "Samanabad",
    "Batala Colony",
    "FIEDMC Industrial Estate",
  ];

  const packagesList = [
    "20 Mbps - Starter Fiber (Rs. 2,499/mo)",
    "50 Mbps - Family Fiber (Rs. 3,499/mo)",
    "100 Mbps - Pro Gamer (Rs. 5,999/mo)",
    "350 Mbps - Ultra Power (Rs. 11,999/mo)",
  ];

  const addonOptions = [
    "Zam Box 4K TV Set-Top Box (+Rs. 500/mo)",
    "SPEED-UP Session Booster",
    "Unlimited Social Media Bundle",
    "Zam Watch CCTV Cloud Storage",
  ];

  const handleAddonToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.addons.includes(option);
      return {
        ...prev,
        addons: exists
          ? prev.addons.filter((item) => item !== option)
          : [...prev.addons, option],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="bg-orange-100 text-[#f27423] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            New Connection
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-3">
            Apply for Zam Zam Fiber
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-medium max-w-xl mx-auto">
            Fill out the form below to get connected with ultra-fast fiber internet in Faisalabad within 24 hours.
          </p>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="bg-white rounded-[30px] p-8 sm:p-12 shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
              ✓
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333] mb-3">
              Application Received!
            </h2>
            <p className="text-gray-600 font-medium max-w-md mb-6 leading-relaxed text-sm sm:text-base">
              Thank you, <strong className="text-[#333]">{formData.fullName}</strong>. Our local Faisalabad installation engineer will call you at <strong className="text-[#333]">{formData.mobile}</strong> shortly to confirm fiber line feasibility and scheduling.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#f27423] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#d9651c] transition text-sm"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8"
          >
            {/* Step 1: Personal Details */}
            <div>
              <h2 className="text-xl font-bold text-[#333] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#f27423] text-white rounded-full text-xs flex items-center justify-center font-extrabold">1</span>
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                    placeholder="Muhammad Ali"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">CNIC Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.cnic}
                    onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                    className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                    placeholder="33100-1234567-1"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                    placeholder="0300-1234567"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                    placeholder="ali@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Address Selection */}
            <div>
              <h2 className="text-xl font-bold text-[#333] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#f27423] text-white rounded-full text-xs flex items-center justify-center font-extrabold">2</span>
                Installation Location (Faisalabad)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">Area / Sector *</label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                  >
                    {areasInFaisalabad.map((a, i) => (
                      <option key={i} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">House / Street Address *</label>
                <input
                  type="text"
                  required
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                  placeholder="House # 12, Street 4, Sector B"
                />
              </div>
            </div>

            {/* Step 3: Package Selection */}
            <div>
              <h2 className="text-xl font-bold text-[#333] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#f27423] text-white rounded-full text-xs flex items-center justify-center font-extrabold">3</span>
                Select Plan & Add-ons
              </h2>

              <div className="mb-6">
                <label className="block text-xs sm:text-sm font-bold text-[#333] mb-2">Fiber Package *</label>
                <select
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full bg-[#f5f7fa] border-none rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-[#f27423] text-sm font-medium text-gray-800"
                >
                  {packagesList.map((p, i) => (
                    <option key={i} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#333] mb-3">Optional Value Added Services</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {addonOptions.map((addon, index) => {
                    const isChecked = formData.addons.includes(addon);
                    return (
                      <div
                        key={index}
                        onClick={() => handleAddonToggle(addon)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 text-xs sm:text-sm font-medium ${
                          isChecked
                            ? "bg-orange-50 border-[#f27423] text-[#f27423]"
                            : "bg-[#f5f7fa] border-transparent text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="accent-[#f27423]"
                        />
                        <span>{addon}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#f27423] text-white font-bold py-4 rounded-xl hover:bg-[#d9651c] transition shadow-md text-base mt-4"
            >
              Submit Signup Application
            </button>
          </form>
        )}

      </div>
    </main>
  );
}