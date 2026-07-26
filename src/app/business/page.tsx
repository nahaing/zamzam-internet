import Link from "next/link";

export default function Business() {
  const businessPlans = [
    {
      name: "SME Starter",
      speed: "50 Mbps",
      badge: "Small Business",
      price: "Rs. 7,999",
      period: "/month + taxes",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      btnColor: "bg-[#5978f3] hover:bg-[#4563d9] text-white",
      features: [
        "Symmetrical Fiber Speed",
        "1 Free Public Static IP",
        "99.5% Uptime SLA Guarantee",
        "Business Hours On-Site Support",
        "Domain & Web Hosting (1 Year)"
      ],
    },
    {
      name: "Corporate Pro",
      speed: "200 Mbps",
      badge: "Most Popular",
      price: "Rs. 18,999",
      period: "/month + taxes",
      bgColor: "bg-white",
      borderColor: "border-[#f27423] border-2 shadow-xl scale-105",
      btnColor: "bg-[#f27423] hover:bg-[#d9651c] text-white",
      features: [
        "1:1 Dedicated Bandwidth",
        "2 Free Public Static IPs",
        "99.9% Network Uptime SLA",
        "24/7 Dedicated Account Engineer",
        "Cloud CCTV & Storage Integration",
        "Priority Field Support in 2 Hours"
      ],
    },
    {
      name: "Enterprise Fiber",
      speed: "1 Gbps+",
      badge: "Custom Bandwidth",
      price: "Custom Quote",
      period: "Tailored Billing",
      bgColor: "bg-gradient-to-b from-gray-900 to-gray-800 text-white",
      borderColor: "border-gray-900",
      btnColor: "bg-white hover:bg-gray-100 text-gray-900",
      features: [
        "Dedicated Internet Access (DIA)",
        "Sub-10ms Low Latency Routing",
        "Redundant Dual-Fiber Line",
        "Multiple Static IP Subnet Block",
        "DDoS Attack Mitigation",
        "24/7/365 Executive NOC Monitoring"
      ],
    },
  ];

  const enterpriseFeatures = [
    {
      icon: "🏢",
      title: "Dedicated Internet Access (DIA)",
      desc: "Guaranteed 1:1 CIR throughput with no contention or bandwidth sharing across commercial sectors."
    },
    {
      icon: "🔒",
      title: "Cloud & Cybersecurity",
      desc: "Protect your corporate network with built-in DDoS shielding, hardware firewalls, and encrypted cloud storage."
    },
    {
      icon: "⚡",
      title: "Strict SLA Warranties",
      desc: "We back our corporate backbone with 99.9% uptime Service Level Agreements and dedicated NOC monitoring."
    },
    {
      icon: "☎️",
      title: "Corporate PBX & Trunking",
      desc: "Crystal-clear SIP trunking and multi-line IP telephony tailored for call centers and corporate offices."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-blue-100 text-[#5978f3] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            Enterprise Fiber Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-4">
            Empower Your Business
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Reliable, high-capacity corporate connectivity designed for SMEs, call centers, industrial units, and corporate offices in Faisalabad.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {businessPlans.map((pkg, index) => (
            <div
              key={index}
              className={`${pkg.bgColor} ${pkg.borderColor} rounded-[30px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                    {pkg.badge}
                  </span>
                  {pkg.badge === "Most Popular" && (
                    <span className="bg-[#f27423] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-black text-[#5978f3] mb-4">
                  {pkg.speed}
                </div>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-3xl font-extrabold">{pkg.price}</span>
                  <span className="text-xs opacity-70 block mt-1">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 font-medium">
                      <span className="text-[#5978f3] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full text-center font-bold py-3.5 rounded-xl transition shadow-sm text-sm ${pkg.btnColor}`}
              >
                Get Corporate Quote
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise Advantages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333] mb-3">Why Businesses Trust Zam Zam</h2>
            <p className="text-gray-500 text-sm sm:text-base font-medium">Built for uptime, security, and scalability</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-2xl rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#333] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customized Consult Banner */}
        <div className="bg-[#ffcdb2] rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div>
            <span className="bg-white text-[#f27423] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Dedicated Account Executive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333] mb-2">Need a custom multi-office deployment?</h2>
            <p className="text-gray-700 text-sm sm:text-base font-medium max-w-xl">
              Connect directly with our corporate solutions team in Faisalabad to design a custom fiber topology or IP transit plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#333] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-black transition text-center shadow-md text-sm whitespace-nowrap"
          >
            Schedule Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}