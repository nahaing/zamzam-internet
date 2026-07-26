export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] py-12 sm:py-20 px-4 md:px-8">
      <section className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#333] mb-3 sm:mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-base sm:text-lg font-medium px-4">Need a new connection or technical support? We are here to help 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 bg-white rounded-[30px] sm:rounded-[40px] shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100">
          
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#333] mb-6 sm:mb-8 text-center lg:text-left">Contact Information</h2>
            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <div className="flex gap-4 items-start justify-center lg:justify-start">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#e8f0fe] text-[#5978f3] rounded-full flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-sm">📍</div>
                <div className="text-left">
                  <h3 className="font-bold text-[#333] mb-1 text-sm sm:text-base">Head Office</h3>
                  <p className="font-medium text-gray-500 text-xs sm:text-sm leading-relaxed">123 Tech Avenue, Kohinoor City<br/>Faisalabad, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex gap-4 items-start justify-center lg:justify-start">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#ffd6a5] text-[#f27423] rounded-full flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-sm">📞</div>
                <div className="text-left">
                  <h3 className="font-bold text-[#333] mb-1 text-sm sm:text-base">Phone Support</h3>
                  <p className="font-medium text-gray-500 text-xs sm:text-sm leading-relaxed">UAN: 111-ZAM-ZAM (111-926-926)</p>
                </div>
              </div>
              <div className="flex gap-4 items-start justify-center lg:justify-start">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#d3e3fd] text-[#5978f3] rounded-full flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-sm">✉️</div>
                <div className="text-left">
                  <h3 className="font-bold text-[#333] mb-1 text-sm sm:text-base">Email</h3>
                  <p className="font-medium text-gray-500 text-xs sm:text-sm leading-relaxed break-all sm:break-normal">support@zamzaminternet.com.pk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 sm:space-y-5 order-1 lg:order-2 mb-8 lg:mb-0">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#333] mb-1 sm:mb-2">Full Name</label>
              <input type="text" className="w-full bg-[#f5f7fa] border-none rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#5978f3] font-medium text-gray-700 text-sm sm:text-base transition-shadow" placeholder="Ali Khan" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#333] mb-1 sm:mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-[#f5f7fa] border-none rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#5978f3] font-medium text-gray-700 text-sm sm:text-base transition-shadow" placeholder="0300-1234567" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#333] mb-1 sm:mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[#f5f7fa] border-none rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#5978f3] font-medium text-gray-700 text-sm sm:text-base resize-none transition-shadow" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-[#f27423] text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-[#d9651c] transition-colors shadow-md text-sm sm:text-base mt-2">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </main>
  );
}