export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-6 bg-blue-700 text-white shadow-md">
        <div className="text-2xl font-black tracking-tight">Zam Zam Internet</div>
        <div className="hidden md:flex gap-8 font-semibold">
          <a href="#" className="hover:text-blue-200 transition">Home</a>
          <a href="#" className="hover:text-blue-200 transition">Packages</a>
          <a href="#" className="hover:text-blue-200 transition">Services</a>
          <a href="#" className="hover:text-blue-200 transition">Contact Us</a>
        </div>
        <button className="bg-white text-blue-700 px-5 py-2 rounded-md font-bold hover:bg-gray-100 transition shadow-sm">
          Customer Portal
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white">
        <span className="text-blue-700 font-bold tracking-wider uppercase mb-4 text-sm">
          Faisalabad's Premier ISP
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Lightning Fast <span className="text-blue-700">Fiber Internet</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          Experience seamless streaming, lag-free gaming, and uninterrupted downloads with Zam Zam Internet. Reliable connectivity when you need it most.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
            View Packages
          </button>
          <button className="bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Check Coverage
          </button>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Choose Your Speed</h2>
          <p className="text-gray-600 text-lg">Unlimited data with symmetrical upload and download speeds.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          
          {/* 30 Mbps Plan */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-blue-700">30</span>
              <span className="text-xl font-bold text-gray-500">Mbps</span>
            </div>
            <p className="text-3xl font-bold mb-6">Rs. 2,499 <span className="text-sm font-normal text-gray-500">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">✓ Unlimited Data Volume</li>
              <li className="flex items-center gap-3">✓ Free Basic Router</li>
              <li className="flex items-center gap-3">✓ 24/7 Phone Support</li>
            </ul>
            <button className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-100 transition">
              Order Now
            </button>
          </div>

          {/* 50 Mbps Plan (Highlighted) */}
          <div className="bg-blue-700 text-white rounded-2xl shadow-xl border border-blue-600 p-8 transform scale-105 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Family</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white">50</span>
              <span className="text-xl font-bold text-blue-200">Mbps</span>
            </div>
            <p className="text-3xl font-bold mb-6">Rs. 3,499 <span className="text-sm font-normal text-blue-200">/month</span></p>
            <ul className="space-y-4 mb-8 text-blue-100">
              <li className="flex items-center gap-3">✓ Unlimited Data Volume</li>
              <li className="flex items-center gap-3">✓ Free Dual-Band Router</li>
              <li className="flex items-center gap-3">✓ Free Smart TV App</li>
              <li className="flex items-center gap-3">✓ Priority 24/7 Support</li>
            </ul>
            <button className="w-full bg-white text-blue-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition shadow-md">
              Order Now
            </button>
          </div>

          {/* 100 Mbps Plan */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">Pro Gamer</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-blue-700">100</span>
              <span className="text-xl font-bold text-gray-500">Mbps</span>
            </div>
            <p className="text-3xl font-bold mb-6">Rs. 5,999 <span className="text-sm font-normal text-gray-500">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">✓ Unlimited Data Volume</li>
              <li className="flex items-center gap-3">✓ Free Wi-Fi 6 Router</li>
              <li className="flex items-center gap-3">✓ Static IP Included</li>
            </ul>
            <button className="w-full bg-blue-50 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-100 transition">
              Order Now
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}