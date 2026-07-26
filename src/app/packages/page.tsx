import Link from "next/link";

export default function Packages() {
  const homePackages = [
    {
      name: "Starter Fiber",
      speed: "20 Mbps",
      price: "Rs. 2,499",
      period: "/month + taxes",
      badge: "Basic",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      btnColor: "bg-gray-800 hover:bg-gray-900 text-white",
      features: [
        "Unlimited Data Volume",
        "Symmetrical Upload & Download",
        "Standard Wi-Fi Router Included",
        "24/7 Telephone Support",
        "HD Streaming Ready"
      ],
    },
    {
      name: "Family Fiber",
      speed: "50 Mbps",
      price: "Rs. 3,499",
      period: "/month + taxes",
      badge: "Most Popular",
      bgColor: "bg-white",
      borderColor: "border-[#f27423] border-2 shadow-xl scale-105",
      btnColor: "bg-[#f27423] hover:bg-[#d9651c] text-white",
      features: [
        "Unlimited Data Volume",
        "Symmetrical Upload & Download",
        "Dual-Band Gigabit Wi-Fi Router",
        "Free Zam Box Smart TV App Access",
        "Priority Support",
        "Multi-Device 4K Streaming"
      ],
    },
    {
      name: "Pro Gamer",
      speed: "100 Mbps",
      price: "Rs. 5,999",
      period: "/month + taxes",
      badge: "High Speed",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      btnColor: "bg-[#5978f3] hover:bg-[#4563d9] text-white",
      features: [
        "Unlimited Data Volume",
        "Symmetrical Upload & Download",
        "Wi-Fi 6 Ultra-Fast Router",
        "Direct Gaming Route (Zero Lag)",
        "1 Free Static IP Address",
        "24/7 VIP Support Engineer"
      ],
    },
    {
      name: "Ultra Power",
      speed: "350 Mbps",
      price: "Rs. 11,999",
      period: "/month + taxes",
      badge: "Maximum Speed",
      bgColor: "bg-gradient-to-b from-gray-900 to-gray-800 text-white",
      borderColor: "border-gray-900",
      btnColor: "bg-[#f27423] hover:bg-[#d9651c] text-white",
      features: [
        "Unlimited Data Volume",
        "350 Mbps Blazing Speed 🚀",
        "Mesh Wi-Fi Whole Home System",
        "Free Zam Box 4K Device Included",
        "Static IP + Free Ping Booster",
        "Dedicated Account Manager"
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-orange-100 text-[#f27423] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            Home Fiber Plans
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-4">
            Pick Your Perfect Speed
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Ultra-fast symmetrical upload and download speeds powered by 100% pure fiber-optic technology in Faisalabad.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-stretch">
          {homePackages.map((pkg, index) => (
            <div
              key={index}
              className={`${pkg.bgColor} ${pkg.borderColor} rounded-[30px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative`}
            >
              <div>
                {/* Badge */}
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

                {/* Plan Title & Speed */}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-black text-[#f27423] mb-4">
                  {pkg.speed}
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-3xl font-extrabold">{pkg.price}</span>
                  <span className="text-xs opacity-70 block mt-1">{pkg.period}</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8 text-sm">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 font-medium">
                      <span className="text-[#f27423] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href="/contact"
                className={`w-full text-center font-bold py-3.5 rounded-xl transition shadow-sm text-sm ${pkg.btnColor}`}
              >
                Order Connection
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}