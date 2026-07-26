import Link from "next/link";

export default function Coverage() {
  const activeAreas = [
    { name: "Kohinoor City", status: "100% Fiber Active", badge: "bg-green-100 text-green-700" },
    { name: "People's Colony 1 & 2", status: "100% Fiber Active", badge: "bg-green-100 text-green-700" },
    { name: "Madina Town", status: "100% Fiber Active", badge: "bg-green-100 text-green-700" },
    { name: "Gulberg & D Ground", status: "100% Fiber Active", badge: "bg-green-100 text-green-700" },
    { name: "Canal Road & Executive Enclave", status: "100% Fiber Active", badge: "bg-green-100 text-green-700" },
    { name: "Civil Lines & Club Road", status: "100% Fiber Active", badge: "bg-green-100 text-green-700" },
    { name: "Samanabad & Batala Colony", status: "Expanding Soon", badge: "bg-amber-100 text-amber-700" },
    { name: "Faisalabad Industrial Estate (FIEDMC)", status: "Corporate Fiber Active", badge: "bg-blue-100 text-blue-700" },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-orange-100 text-[#f27423] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            Faisalabad Network Map
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#333] mt-4 mb-4">
            Coverage Areas
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore our ultra-fast FTTH fiber coverage across Faisalabad. Check active sectors or request coverage expansion to your street.
          </p>
        </div>

        {/* Embedded Map Section */}
        <div className="bg-white rounded-[30px] sm:rounded-[40px] p-4 sm:p-6 shadow-sm border border-gray-100 mb-16 overflow-hidden">
          <div className="w-full h-[400px] sm:h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden relative border border-gray-200 shadow-inner">
            <iframe
              title="Faisalabad Coverage Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108985.340034608!2d73.00392395!3d31.4187147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f889326dabd!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Active Sectors List */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333]">Active Fiber Sectors</h2>
              <p className="text-gray-500 text-sm font-medium">Key residential & commercial hubs connected to Zam Zam Fiber</p>
            </div>
            <Link
              href="/contact"
              className="bg-[#f27423] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-[#d9651c] transition-colors"
            >
              Request New Area
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#f27423] text-lg">📍</span>
                  <h3 className="font-bold text-[#333] text-base">{area.name}</h3>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full w-fit ${area.badge}`}>
                  {area.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Check CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Is your society or street missing?</h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl font-medium">
              We are constantly expanding our optical fiber backbone across Faisalabad. Submit your address details and we will notify you as soon as fiber goes live!
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#f27423] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#d9651c] transition shadow-md text-sm whitespace-nowrap"
          >
            Check Availability
          </Link>
        </div>

      </div>
    </main>
  );
}