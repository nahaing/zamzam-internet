import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Top Promotional Banner */}
      <div className="bg-[#f27423] text-white text-xs md:text-sm py-2 px-4 text-center w-full">
        <p className="flex justify-center items-center gap-2 flex-wrap">
          <span>Join today with our easy, new signup process within a few minutes. <a href="#" className="underline font-bold">Sign up now.</a></span>
          <span className="hidden md:inline">|</span>
          <span>Get a mega discount of 25% on paying 12 months in advance when you apply for a new connection. <a href="#" className="underline font-bold">Learn how.</a></span>
        </p>
      </div>

      {/* Main Navigation */}
      <div className="w-full flex justify-center items-center sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-3">
        <div className="flex max-w-7xl w-full px-4 md:px-8">
          <header className="flex w-full items-center justify-between">
            <div className="flex items-center gap-8 md:gap-12">
              <div className="text-3xl font-black tracking-tighter text-gray-800 cursor-pointer">
                ZAM<span className="text-[#f27423] font-light italic">zam</span>
              </div>
              <nav className="hidden lg:flex items-center gap-6 text-sm">
                <Link href="#" className="text-gray-600 font-medium hover:text-gray-900">Internet</Link>
                <Link href="#" className="text-gray-600 font-medium hover:text-gray-900 flex items-center gap-1">Services <span className="text-[10px]">▼</span></Link>
                <Link href="#" className="text-gray-600 font-medium hover:text-gray-900 flex items-center gap-1">Support <span className="text-[10px]">▼</span></Link>
                <Link href="#" className="text-gray-600 font-medium hover:text-gray-900">Coverage Areas</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4 text-gray-500 mr-2">
                <button>🔍</button>
                <button>📞</button>
                <button>👤</button>
              </div>
              <button className="bg-[#f27423] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#d9651c] transition-colors">
                Get connection
              </button>
              <button className="hidden sm:block bg-transparent text-blue-600 border border-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                Business
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="bg-[#f5f7fa] pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-start z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#333] leading-[1.1] mb-4">
              Your trusted <br/>
              <span className="text-[#5978f3]">telephone</span> <br/>
              provider in Pakistan
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md font-medium">
              Explore premium fiber internet, phone, and cable TV packages and get connected today! Enjoy fast, reliable internet, crystal-clear voice services, entertainment, and more.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#d9651c] transition-colors">
                Sign up online
              </button>
              <button className="bg-transparent text-gray-800 border border-gray-400 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                Check availability
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[500px] flex justify-center items-center">
            {/* Abstract Background Shapes */}
            <div className="absolute right-0 top-10 w-[80%] h-[90%] bg-[#5978f3] rounded-[40px] rounded-tl-[100px]"></div>
            <div className="absolute right-10 top-0 w-32 h-24 bg-[#4563d9] rounded-2xl"></div>
            <div className="absolute left-10 top-10 w-24 h-24 bg-[#ffb703] rounded-full flex items-center justify-center text-4xl shadow-lg z-20">🔔</div>
            {/* Main Image Placeholder */}
            <div className="relative z-10 w-full h-full flex items-end justify-center pb-10">
               <div className="w-64 h-80 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4">
                 [Image: Girl on yellow retro phone]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center text-center gap-8">
          <div>
            <h3 className="text-5xl font-black text-[#333] mb-2 tracking-tight">200,000+</h3>
            <p className="text-gray-500 font-medium">happy customers</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-[#333] mb-2 tracking-tight">20</h3>
            <p className="text-gray-500 font-medium">years and counting!</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-[#333] mb-2 tracking-tight flex items-center justify-center gap-2">4.6 <span className="text-3xl">★</span></h3>
            <p className="text-gray-500 font-medium">Rating on App store</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-[#333] mb-2 tracking-tight">40+</h3>
            <p className="text-gray-500 font-medium">Value Added Services</p>
          </div>
        </div>
      </section>

      {/* 3. Internet Packages Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#5978f3] text-white px-4 py-1 rounded-full text-sm font-bold">Starting from</span>
              <span className="text-3xl font-black text-[#f27423]">20<span className="text-xl font-bold">Mbps</span></span>
              <span className="text-gray-500 font-medium">upto</span>
            </div>
            <h2 className="text-[5rem] font-black text-[#f27423] leading-none mb-6 flex items-center gap-4">
              350<span className="text-5xl">Mbps</span> <span>🚀</span>
            </h2>
            <p className="text-xl text-[#333] mb-8 font-medium max-w-md">
              Explore high-speed fiber internet packages for binging, streaming, gaming and working.
            </p>
            <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d9651c] transition-colors">
              Explore packages
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/3] bg-[#eef3f9] rounded-bl-[80px] rounded-tr-[80px] overflow-hidden flex items-center justify-center text-gray-400 font-bold">
              [Image: Family on couch looking at tablet]
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cable TV Full Width Section */}
      <section className="w-full h-[600px] bg-gray-900 relative flex items-center justify-center">
        {/* Placeholder for the background image of guys watching TV */}
        <div className="absolute inset-0 bg-gray-800 opacity-80 flex items-center justify-center text-gray-600">
           [Background Image: Guys cheering at TV]
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
            Stepping up your entertainment experience
          </h2>
          <button className="bg-[#f27423] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d9651c] transition-colors">
            Explore Cable TV
          </button>
        </div>
      </section>

      {/* 5. Telephone Circular Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-5xl font-extrabold text-[#333] mb-6 leading-tight">
              Cut the distortion, <br/> not the conversation
            </h2>
            <p className="text-gray-600 mb-8 font-medium text-lg">
              Perfect for both personal and business use, our telephone services offers superior call quality, affordable rates, and advanced features like caller ID and call waiting.
            </p>
            <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d9651c] transition-colors">
              Explore Telephone
            </button>
          </div>
          <div className="w-full md:w-2/3 relative h-[500px] flex justify-center items-center">
            {/* Outer dotted orbit */}
            <div className="absolute w-[450px] h-[450px] border border-dashed border-[#5978f3] rounded-full opacity-30"></div>
            {/* Inner dashed orbit */}
            <div className="absolute w-[300px] h-[300px] border border-dashed border-[#f27423] rounded-full opacity-30"></div>
            
            {/* Central Image */}
            <div className="w-64 h-64 bg-gray-200 rounded-full z-10 overflow-hidden flex items-center justify-center text-gray-500 font-bold border-8 border-white shadow-xl">
              [Image: Man on phone]
            </div>
            
            {/* Orbiting small avatars */}
            <div className="absolute top-4 left-1/2 w-16 h-16 bg-gray-300 rounded-full border-4 border-white shadow-md flex items-center justify-center text-xs text-gray-500">Avatar</div>
            <div className="absolute bottom-4 left-1/2 w-16 h-16 bg-gray-300 rounded-full border-4 border-white shadow-md flex items-center justify-center text-xs text-gray-500">Avatar</div>
            <div className="absolute left-10 top-1/3 w-12 h-12 bg-gray-300 rounded-full border-4 border-white shadow-md flex items-center justify-center text-[10px] text-gray-500">Av</div>
            <div className="absolute right-20 bottom-1/4 w-14 h-14 bg-gray-300 rounded-full border-4 border-white shadow-md flex items-center justify-center text-[10px] text-gray-500">Av</div>
          </div>
        </div>
      </section>

      {/* 6. Business Partner Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 pb-24">
        <div className="w-full h-[550px] bg-gray-800 rounded-[40px] rounded-br-[150px] relative overflow-hidden flex items-center shadow-lg">
           <div className="absolute inset-0 bg-gray-700 flex justify-end items-center text-gray-500 font-bold text-xl p-20">
             [Background Image: Businessmen shaking hands]
           </div>
           {/* Dark Gradient Overlay for text readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
           
           <div className="relative z-10 w-full md:w-1/2 p-12 md:p-20">
             <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
               Your trusted <br/> partner for business
             </h2>
             <p className="text-gray-300 mb-8 font-medium text-lg max-w-sm">
               Our comprehensive suite of tech solutions, from cloud infrastructure to advanced security, helps your business thrive in today's competitive world.
             </p>
             <button className="bg-[#f27423] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d9651c] transition-colors">
               Explore Business
             </button>
           </div>
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/4 pt-8">
            <h2 className="text-5xl font-extrabold text-[#333] mb-6">Why should you choose us?</h2>
            <p className="text-[#333] text-lg font-medium">This is why we are your reliable link to the world.</p>
          </div>
          
          <div className="w-full md:w-3/4 flex gap-6 overflow-x-auto pb-8 snap-x">
            {/* Card 1 */}
            <div className="min-w-[320px] bg-[#ffd6a5] p-8 rounded-[40px] snap-center">
              <div className="w-14 h-14 bg-[#f27423] rounded-2xl flex items-center justify-center mb-8 text-white">🎧</div>
              <h3 className="text-2xl font-bold text-[#333] mb-4">Unparalleled customer support</h3>
              <p className="text-[#555] font-medium leading-relaxed">
                Our customer-centric approach puts you on the wheel, ensuring you always have control over your experience. Our dedicated support engineers are always at your disposal, ready to assist with any queries or issues you might encounter.
              </p>
            </div>
            {/* Card 2 */}
            <div className="min-w-[320px] bg-[#d3e3fd] p-8 rounded-[40px] snap-center">
              <div className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center mb-8 text-blue-600">🏠</div>
              <h3 className="text-2xl font-bold text-[#333] mb-4">You get more than just Wi-Fi</h3>
              <p className="text-[#555] font-medium leading-relaxed">
                Fiber internet was just the beginning; we now bring you unlimited entertainment through our extensive portfolio of services. Enjoy a wide array of streaming options, digital content, and seamless connectivity that goes beyond traditional internet services.
              </p>
            </div>
            {/* Card 3 */}
            <div className="min-w-[320px] bg-[#e8f0fe] p-8 rounded-[40px] snap-center">
              <div className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center mb-8 text-blue-500">⚖️</div>
              <h3 className="text-2xl font-bold text-[#333] mb-4">Stability & reliability guaranteed</h3>
              <p className="text-[#555] font-medium leading-relaxed">
                Never worry about buffering again with a consistent internet connection ensured by our robust fiber network. Our state-of-the-art infrastructure guarantees that you stay connected without interruptions, providing you with a seamless online experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="bg-white py-20 pb-32">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-[#333] mb-12">Frequently asked questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">What is Zam Zam fiber internet?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">What is FTTH?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">What are the benefits of FTTH over traditional broadband?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">Do you offer technical support over the phone or online chat?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">What equipment is needed for fiber internet connection?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">Can I bundle internet with other services like cable TV or phone?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">How do I know which internet plan is right for me?</span>
              <span className="text-gray-400">⌄</span>
            </div>
            <div className="bg-[#f5f7fa] p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[#333]">How can I pay my bill online?</span>
              <span className="text-gray-400">⌄</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Banner */}
      <section className="bg-white px-4 md:px-8 pb-10">
         <div className="max-w-7xl mx-auto bg-[#ffcdb2] rounded-[40px] pt-16 pb-12 relative flex flex-col items-center">
            {/* Up arrow toggle */}
            <div className="absolute -top-6 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-blue-600 font-bold border border-gray-100 cursor-pointer">
              ↑
            </div>
            
            <h2 className="text-4xl font-extrabold text-[#333] mb-12">We are here to help!</h2>
            
            <div className="flex flex-wrap justify-center gap-16 text-center">
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-14 h-14 bg-[#333] text-white rounded-full flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
                  {/* WhatsApp Icon placeholder */}
                  WA
                </div>
                <h4 className="font-bold text-[#333] mb-1">WhatsApp</h4>
                <p className="text-sm text-[#555] font-medium">Chat with us.</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-14 h-14 bg-[#333] text-white rounded-full flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
                  {/* Phone Icon placeholder */}
                  📞
                </div>
                <h4 className="font-bold text-[#333] mb-1">Call</h4>
                <p className="text-sm text-[#555] font-medium">Call now at 1441.</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-14 h-14 bg-[#333] text-white rounded-full flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
                  {/* Email Icon placeholder */}
                  ✉
                </div>
                <h4 className="font-bold text-[#333] mb-1">Email</h4>
                <p className="text-sm text-[#555] font-medium">Drop us an email.</p>
              </div>
            </div>
         </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#f5f7fa] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-12">
          
          <div className="w-full md:w-1/3">
            <div className="text-2xl font-black tracking-tighter text-[#4267B2] mb-4">
              ZAM<span className="text-[#f27423] font-light italic">zam</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Zam Zam Internet is the leading fiber internet and IT service provider in Pakistan, delivering high-speed connectivity along with reliable cloud computing, secure web and email hosting, crystal-clear HDTV, and advance digital solutions. Trusted by hundreds of thousands of businesses and homes, Zam Zam is a trend setter in innovation, reliability, and customer experience.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h4 className="font-extrabold text-[#333] mb-4">Explore</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#333]">About</a></li>
                <li><a href="#" className="hover:text-[#333]">Blog</a></li>
                <li><a href="#" className="hover:text-[#333]">Business</a></li>
                <li><a href="#" className="hover:text-[#333]">Offers</a></li>
                <li><a href="#" className="hover:text-[#333]">Coverage Areas</a></li>
                <li><a href="#" className="hover:text-[#333]">Internet Packages</a></li>
                <li><a href="#" className="hover:text-[#333]">Services Catalogue</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-extrabold text-[#333] mb-4">Work with us</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#333]">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-extrabold text-[#333] mb-4">Support</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#333]">Contact</a></li>
                <li><a href="#" className="hover:text-[#333]">Manuals</a></li>
                <li><a href="#" className="hover:text-[#333]">Hardware Charges</a></li>
                <li><a href="#" className="hover:text-[#333]">Payment Options</a></li>
                <li><a href="#" className="hover:text-[#333]">FAQs</a></li>
                <li><a href="#" className="hover:text-[#333]">Security Advisory</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-extrabold text-[#333] mb-4">My Zam Zam</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#333]">Sign up</a></li>
                <li><a href="#" className="hover:text-[#333]">Log in</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-extrabold text-[#333] mb-4">Legal</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-500 mb-8">
                <li><a href="#" className="hover:text-[#333]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#333]">HSE Policy</a></li>
              </ul>
              
              <h4 className="font-extrabold text-[#333] mb-4">Connect</h4>
              <div className="flex gap-2 text-gray-500">
                <a href="#" className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-300">X</a>
                <a href="#" className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-300">in</a>
                <a href="#" className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-300">f</a>
                <a href="#" className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-300">ig</a>
                <a href="#" className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-300">rd</a>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </main>
  );
}