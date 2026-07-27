export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="bg-[#f5f7fa] pt-8 sm:pt-12 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#333] leading-[1.1] mb-4 w-full">
              Your trusted <br/>
              <span className="text-[#5978f3]">Internet</span> <br/>
              provider in Pakistan
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 font-medium">
              Explore premium fiber internet, phone, and cable TV packages and get connected today! Enjoy fast, reliable internet, crystal-clear voice services, entertainment, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start">
              <button className="bg-[#f27423] text-white px-6 py-3.5 sm:py-3 rounded-lg font-bold text-sm hover:bg-[#d9651c] transition-colors shadow-md w-full sm:w-auto">
                Sign up online
              </button>
              <button className="bg-transparent text-gray-800 border border-gray-400 px-6 py-3.5 sm:py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Check availability
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[400px] lg:h-[500px] flex justify-center items-center mt-8 lg:mt-0">
            <div className="absolute right-0 top-4 sm:top-10 w-[90%] lg:w-[80%] h-[90%] bg-[#5978f3] rounded-[30px] sm:rounded-[40px] rounded-tl-[60px] sm:rounded-tl-[100px]"></div>
            <div className="absolute right-4 sm:right-10 top-0 w-24 sm:w-32 h-16 sm:h-24 bg-[#4563d9] rounded-xl sm:rounded-2xl"></div>
            <div className="absolute left-4 sm:left-10 top-10 w-16 sm:w-24 h-16 sm:h-24 bg-[#ffb703] rounded-full flex items-center justify-center text-2xl sm:text-4xl shadow-lg z-20">🔔</div>
            <div className="relative z-10 w-full h-full flex items-end justify-center pb-6 sm:pb-10">
               <div className="w-48 sm:w-64 h-60 sm:h-80 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4 text-sm sm:text-base">
                 [Image: Girl on yellow retro phone]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#333] mb-1 sm:mb-2 tracking-tight">200,000+</h3>
            <p className="text-gray-500 font-medium text-xs sm:text-sm">happy customers</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#333] mb-1 sm:mb-2 tracking-tight">20</h3>
            <p className="text-gray-500 font-medium text-xs sm:text-sm">years and counting!</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#333] mb-1 sm:mb-2 tracking-tight flex items-center justify-center gap-1 sm:gap-2">4.6 <span className="text-xl sm:text-3xl">★</span></h3>
            <p className="text-gray-500 font-medium text-xs sm:text-sm">Rating on App store</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#333] mb-1 sm:mb-2 tracking-tight">40+</h3>
            <p className="text-gray-500 font-medium text-xs sm:text-sm">Value Added Services</p>
          </div>
        </div>
      </section>

      {/* 3. Internet Packages Preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 mb-4">
              <span className="bg-[#5978f3] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">Starting from</span>
              <span className="text-2xl sm:text-3xl font-black text-[#f27423]">20<span className="text-lg sm:text-xl font-bold">Mbps</span></span>
              <span className="text-gray-500 font-medium text-sm sm:text-base">upto</span>
            </div>
            <h2 className="text-6xl sm:text-[5rem] font-black text-[#f27423] leading-none mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4 justify-center lg:justify-start w-full">
              350<span className="text-3xl sm:text-5xl">Mbps</span> <span className="text-4xl sm:text-5xl">🚀</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#333] mb-6 sm:mb-8 font-medium max-w-md">
              Explore high-speed fiber internet packages for binging, streaming, gaming and working.
            </p>
            <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d9651c] transition-colors w-full sm:w-auto shadow-md">
              Explore packages
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="w-full aspect-video sm:aspect-[4/3] bg-[#eef3f9] rounded-bl-[40px] sm:rounded-bl-[80px] rounded-tr-[40px] sm:rounded-tr-[80px] overflow-hidden flex items-center justify-center text-gray-400 font-bold p-4 text-center">
              [Image: Family on couch looking at tablet]
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cable TV Full Width Section */}
      <section className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-900 relative flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600 text-sm sm:text-base text-center overflow-hidden">
           <div className="opacity-50">[Background Image: Guys cheering at TV]</div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center flex flex-col items-center w-full max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight drop-shadow-lg leading-tight">
            Stepping up your entertainment experience
          </h2>
          <button className="bg-[#f27423] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-[#d9651c] transition-colors shadow-lg">
            Explore Cable TV
          </button>
        </div>
      </section>

      {/* 5. Telephone Circular Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/3 text-center lg:text-left z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#333] mb-4 sm:mb-6 leading-tight">
              Cut the distortion, <br className="hidden lg:block"/> not the conversation
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 font-medium text-base sm:text-lg">
              Perfect for both personal and business use, our telephone services offers superior call quality, affordable rates, and advanced features like caller ID and call waiting.
            </p>
            <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d9651c] transition-colors w-full sm:w-auto shadow-md">
              Explore Telephone
            </button>
          </div>
          
          <div className="w-full lg:w-2/3 relative h-[350px] sm:h-[450px] lg:h-[500px] flex justify-center items-center mt-10 lg:mt-0">
            <div className="absolute w-[300px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px] border border-dashed border-[#5978f3] rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[200px] sm:w-[260px] lg:w-[300px] h-[200px] sm:h-[260px] lg:h-[300px] border border-dashed border-[#f27423] rounded-full opacity-30 animate-[spin_40s_linear_infinite_reverse]"></div>
            
            <div className="w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-gray-200 rounded-full z-10 overflow-hidden flex items-center justify-center text-gray-500 font-bold border-4 sm:border-8 border-white shadow-xl text-xs sm:text-base text-center p-2">
              [Image: Man on phone]
            </div>
            
            <div className="absolute top-0 lg:top-4 left-1/2 lg:left-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-gray-300 rounded-full border-2 sm:border-4 border-white shadow-md flex items-center justify-center text-[10px] sm:text-xs text-gray-500 z-20">Avatar</div>
            <div className="absolute bottom-0 lg:bottom-4 left-1/4 lg:left-1/2 w-12 sm:w-16 h-12 sm:h-16 bg-gray-300 rounded-full border-2 sm:border-4 border-white shadow-md flex items-center justify-center text-[10px] sm:text-xs text-gray-500 z-20">Avatar</div>
          </div>
        </div>
      </section>

      {/* 6. Business Partner Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-10 pb-16 lg:pb-24">
        <div className="w-full h-auto sm:h-[450px] lg:h-[550px] bg-gray-800 rounded-[30px] lg:rounded-[40px] rounded-br-[80px] lg:rounded-br-[150px] relative overflow-hidden flex items-center shadow-xl">
           <div className="absolute inset-0 bg-gray-700 flex justify-center lg:justify-end items-center text-gray-500 font-bold text-sm sm:text-xl p-8 lg:p-20 text-center lg:text-right opacity-40 lg:opacity-100">
             [Image: Businessmen shaking hands]
           </div>
           <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/40 lg:to-transparent"></div>
           
           <div className="relative z-10 w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 text-center lg:text-left mt-20 sm:mt-0">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
               Your trusted <br className="hidden sm:block"/> partner for business
             </h2>
             <p className="text-gray-300 mb-6 sm:mb-8 font-medium text-base sm:text-lg max-w-sm mx-auto lg:mx-0">
               Our comprehensive suite of tech solutions, from cloud infrastructure to advanced security, helps your business thrive in today's competitive world.
             </p>
             <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d9651c] transition-colors shadow-lg w-full sm:w-auto">
               Explore Business
             </button>
           </div>
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/4 pt-4 lg:pt-8 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333] mb-4 lg:mb-6">Why should you choose us?</h2>
            <p className="text-[#333] text-base lg:text-lg font-medium">This is why we are your reliable link to the world.</p>
          </div>
          
          <div className="w-full lg:w-3/4 flex gap-4 lg:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
            <div className="min-w-[280px] sm:min-w-[320px] bg-[#ffd6a5] p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] snap-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#f27423] rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-white text-xl">🎧</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#333] mb-3 sm:mb-4">Unparalleled customer support</h3>
              <p className="text-[#555] font-medium leading-relaxed text-sm sm:text-base">
                Our customer-centric approach puts you on the wheel, ensuring you always have control over your experience. Our dedicated support engineers are always at your disposal.
              </p>
            </div>
            <div className="min-w-[280px] sm:min-w-[320px] bg-[#d3e3fd] p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] snap-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-blue-600 text-xl">🏠</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#333] mb-3 sm:mb-4">You get more than just Wi-Fi</h3>
              <p className="text-[#555] font-medium leading-relaxed text-sm sm:text-base">
                Fiber internet was just the beginning; we now bring you unlimited entertainment through our extensive portfolio of services. Enjoy a wide array of streaming options.
              </p>
            </div>
            <div className="min-w-[280px] sm:min-w-[320px] bg-[#e8f0fe] p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] snap-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-blue-500 text-xl">⚖️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#333] mb-3 sm:mb-4">Stability & reliability guaranteed</h3>
              <p className="text-[#555] font-medium leading-relaxed text-sm sm:text-base">
                Never worry about buffering again with a consistent internet connection ensured by our robust fiber network. Our state-of-the-art infrastructure guarantees no interruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="bg-white py-16 sm:py-20 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333] mb-8 sm:mb-12">Frequently asked questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-left">
            {[
              "What is Zam Zam fiber internet?",
              "What is FTTH?",
              "What are the benefits of FTTH?",
              "Do you offer technical support?",
              "What equipment is needed?",
              "Can I bundle internet with cable TV?",
              "Which internet plan is right for me?",
              "How can I pay my bill online?"
            ].map((question, i) => (
              <div key={i} className="bg-[#f5f7fa] p-4 sm:p-5 rounded-xl sm:rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-bold text-[#333] text-sm sm:text-base pr-4">{question}</span>
                <span className="text-gray-400 font-bold shrink-0">⌄</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Banner */}
      <section className="bg-white px-4 md:px-8 pb-8 sm:pb-10">
         <div className="max-w-7xl mx-auto bg-[#ffcdb2] rounded-[30px] sm:rounded-[40px] pt-12 sm:pt-16 pb-10 sm:pb-12 relative flex flex-col items-center shadow-sm">
            <div className="absolute -top-5 sm:-top-6 bg-white w-10 sm:w-12 h-10 sm:h-12 rounded-full shadow-lg flex items-center justify-center text-blue-600 font-bold border border-gray-100 cursor-pointer hover:-translate-y-1 transition-transform">
              ↑
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333] mb-8 sm:mb-12 text-center px-4">We are here to help!</h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 text-center w-full px-4">
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#333] text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:-translate-y-1 transition-transform shadow-md text-xs sm:text-base">WA</div>
                <h4 className="font-bold text-[#333] mb-1 text-sm sm:text-base">WhatsApp</h4>
                <p className="text-xs sm:text-sm text-[#555] font-medium">Chat with us.</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#333] text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:-translate-y-1 transition-transform shadow-md text-sm sm:text-base">📞</div>
                <h4 className="font-bold text-[#333] mb-1 text-sm sm:text-base">Call</h4>
                <p className="text-xs sm:text-sm text-[#555] font-medium">Call now at 1441.</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#333] text-white rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:-translate-y-1 transition-transform shadow-md text-sm sm:text-base">✉</div>
                <h4 className="font-bold text-[#333] mb-1 text-sm sm:text-base">Email</h4>
                <p className="text-xs sm:text-sm text-[#555] font-medium">Drop us an email.</p>
              </div>
            </div>
         </div>
      </section>

    </main>
  );
}
