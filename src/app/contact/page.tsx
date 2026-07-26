import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Reusable Navigation Bar */}
      <nav className="flex items-center justify-between p-6 bg-blue-700 text-white shadow-md">
        <Link href="/" className="text-2xl font-black tracking-tight">Zam Zam Internet</Link>
        <div className="hidden md:flex gap-8 font-semibold">
          <Link href="/" className="hover:text-blue-200 transition">Home</Link>
          <Link href="/packages" className="hover:text-blue-200 transition">Packages</Link>
          <Link href="/services" className="hover:text-blue-200 transition">Services</Link>
          <Link href="/contact" className="text-blue-200 underline underline-offset-4">Contact Us</Link>
        </div>
        <button className="bg-white text-blue-700 px-5 py-2 rounded-md font-bold hover:bg-gray-100 transition shadow-sm">
          Customer Portal
        </button>
      </nav>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">Need a new connection or technical support? We are here to help 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-bold text-blue-700">Head Office</h3>
                <p>123 Tech Avenue, Kohinoor City<br/>Faisalabad, Punjab, Pakistan</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-700">Phone Support</h3>
                <p>UAN: 111-ZAM-ZAM (111-926-926)</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-700">Email</h3>
                <p>support@zamzaminternet.com.pk</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" placeholder="Ali Khan" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" placeholder="0300-1234567" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}