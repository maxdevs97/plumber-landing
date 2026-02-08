import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-2xl font-bold">ProFlow Plumbing</span>
            </div>
            <a href="tel:555-123-4567" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Call Now
            </a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Pipes Are in <span className="text-blue-200">Expert Hands</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              24/7 emergency service • Licensed & insured • Same-day repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition text-center">
                Get Free Quote
              </a>
              <a href="tel:555-123-4567" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition text-center">
                📞 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional plumbing solutions for homes and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚨',
                title: 'Emergency Repairs',
                description: 'Available 24/7 for urgent plumbing emergencies. We arrive fast and fix it right.'
              },
              {
                icon: '🚿',
                title: 'Drain Cleaning',
                description: 'Professional drain and sewer cleaning to keep your pipes flowing smoothly.'
              },
              {
                icon: '🔧',
                title: 'Installations',
                description: 'Expert installation of fixtures, water heaters, and plumbing systems.'
              },
              {
                icon: '💧',
                title: 'Leak Detection',
                description: 'Advanced technology to find and fix hidden leaks before they cause damage.'
              },
              {
                icon: '🔥',
                title: 'Water Heater Service',
                description: 'Repair, maintenance, and replacement of all water heater types.'
              },
              {
                icon: '🏠',
                title: 'Pipe Repair',
                description: 'Complete pipe repair and replacement for residential and commercial properties.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Plumber Right Now?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Don't wait for small problems to become big disasters
          </p>
          <a href="tel:555-123-4567" className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-lg text-2xl font-bold hover:bg-orange-50 transition shadow-lg">
            <span className="text-3xl">📞</span>
            (555) 123-4567
          </a>
          <p className="mt-6 text-orange-100">Available 24/7 • Licensed & Insured • Fast Response</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your plumbing needs and we'll get back to you within 1 hour
              </p>
            </div>

            {submitted && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Smith"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Describe Your Plumbing Issue *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us what you need help with..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span className="text-2xl font-bold">ProFlow Plumbing</span>
              </div>
              <p className="text-gray-400">
                Your trusted plumbing partner for over 20 years.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">📞 (555) 123-4567</p>
              <p className="text-gray-400 mb-2">✉️ info@proflowplumbing.com</p>
              <p className="text-gray-400">📍 123 Main Street, Your City, ST 12345</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Hours</h3>
              <p className="text-gray-400 mb-2">24/7 Emergency Service</p>
              <p className="text-gray-400 mb-2">Mon-Fri: 7AM - 7PM</p>
              <p className="text-gray-400">Sat-Sun: 8AM - 5PM</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ProFlow Plumbing. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
