import Link from "next/link";

export default function About() {
  const milestones = [
    { year: "2015", title: "Founded in Faisalabad", desc: "Started as a regional ISP delivering high-reliability connectivity to commercial clients." },
    { year: "2018", title: "100% FTTH Backbone", desc: "Upgraded our core network to pure Fiber-to-the-Home, replacing copper entirely." },
    { year: "2021", title: "Enterprise Expansion", desc: "Launched Dedicated Internet Access (DIA) & Cloud Services for commercial zones." },
    { year: "2026", title: "200,000+ Connections", desc: "Recognized as the premier optical fiber network operating in Faisalabad & Punjab." },
  ];

  const values = [
    { icon: "⚡", title: "Ultra-Low Latency", desc: "Direct route optimization ensuring peak performance for work, streaming, and gaming." },
    { icon: "🤝", title: "Customer-Centric", desc: "24/7 localized support engineers available to visit on-site in Faisalabad within hours." },
    { icon: "🛡️", title: "Uncompromising Quality", desc: "Built with 99.9% uptime SLA commitments and redundant fiber loops." },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-orange-100 text-[#f27423] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-4">
            Connecting Faisalabad to the Future
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Zam Zam Internet delivers high-speed fiber connectivity, enterprise cloud solutions, and digital entertainment powered by state-of-the-art FTTH technology.
          </p>
        </div>

        {/* Mission Banner */}
        <div className="bg-white rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 border border-gray-100 shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#333] mb-4">
              Empowering Homes & Businesses Since Day One
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
              We believe that seamless, high-speed internet is no longer a luxury—it is a fundamental utility for modern living, remote work, education, and commerce. Our team works tirelessly to bridge digital gaps with pure optical fiber infrastructure.
            </p>
            <div className="flex gap-4">
              <Link
                href="/signup"
                className="bg-[#f27423] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#d9651c] transition text-sm"
              >
                Join Our Network
              </Link>
              <Link
                href="/coverage"
                className="bg-gray-100 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition text-sm"
              >
                View Map
              </Link>
            </div>
          </div>
          <div className="bg-[#eef3f9] rounded-3xl h-64 sm:h-80 flex items-center justify-center text-gray-400 font-bold text-center p-4">
            [Image: Zam Zam Network Operations Center]
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333]">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-orange-50 text-3xl rounded-2xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones / Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333]">Our Growth Journey</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#f27423] block mb-2">{m.year}</span>
                  <h3 className="font-bold text-[#333] text-lg mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}