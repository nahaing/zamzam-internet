import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      title: "SPEED-UP Session",
      category: "Internet Booster",
      description: "Temporarily boost your internet speed up to 500 Mbps instantly for heavy downloads, gaming tournaments, or large backups.",
      icon: "⚡",
      badge: "Popular",
      bgColor: "bg-[#ffd6a5]",
      accentColor: "bg-[#f27423]",
    },
    {
      title: "Unlimited Social Bundle",
      category: "Streaming & Social",
      description: "Get dedicated high-speed bandwidth for YouTube, Netflix, Facebook, WhatsApp, and Instagram without touching your main data.",
      icon: "🍿",
      badge: "Best Value",
      bgColor: "bg-[#d3e3fd]",
      accentColor: "bg-[#5978f3]",
    },
    {
      title: "Zam Box (Smart 4K TV)",
      category: "Entertainment",
      description: "Transform any regular TV into a Smart TV with our Android 4K Set-Top Box featuring 180+ HD channels and catch-up TV.",
      icon: "📺",
      badge: "Entertainment",
      bgColor: "bg-[#e8f0fe]",
      accentColor: "bg-[#5978f3]",
    },
    {
      title: "Zam Watch CCTV",
      category: "Home Security",
      description: "Cloud-based AI security camera monitoring. Access live video streaming and recordings directly on your smartphone 24/7.",
      icon: "📹",
      badge: "Security",
      bgColor: "bg-gray-100",
      accentColor: "bg-gray-800",
    },
    {
      title: "Gaming Ping Booster",
      category: "Gaming",
      description: "Direct routing optimization for zero-lag online gaming on PUBG, Call of Duty, Valorant, and Fortnite servers.",
      icon: "🎮",
      badge: "Low Ping",
      bgColor: "bg-green-100",
      accentColor: "bg-green-600",
    },
    {
      title: "Safe Web",
      category: "Security & Control",
      description: "Advanced family filter and web protection that blocks malicious software, phishing websites, and unwanted content.",
      icon: "🛡️",
      badge: "Family Protection",
      bgColor: "bg-purple-100",
      accentColor: "bg-purple-600",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            Value Added Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-4">
            More Than Just Wi-Fi
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Supercharge your home internet with our suite of add-ons built for entertainment, security, gaming, and speed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center text-2xl shadow-sm`}>
                    {service.icon}
                  </div>
                  <span className={`${service.accentColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {service.badge}
                  </span>
                </div>

                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {service.category}
                </p>
                <h3 className="text-2xl font-bold text-[#333] mb-3 group-hover:text-[#f27423] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">Available on all plans</span>
                <Link
                  href="/contact"
                  className="text-[#f27423] font-bold text-sm hover:underline flex items-center gap-1"
                >
                  Subscribe →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#f27423] text-white rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 text-center flex flex-col items-center shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">Ready to upgrade your digital lifestyle?</h2>
          <p className="text-white/90 text-sm sm:text-base max-w-xl mb-8 font-medium">
            Contact our customer support team to add any of these value-added services to your existing connection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-white text-[#f27423] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition shadow-md text-sm text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}