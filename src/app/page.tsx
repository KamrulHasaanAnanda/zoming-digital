import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/ZD.png"
                alt="Zoming Digital Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#team" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Team</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-900 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your <span className="text-blue-600">Digital Presence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help businesses grow online with comprehensive digital marketing solutions.
                From SEO to social media, we create strategies that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/ZD.png"
                alt="Zoming Digital"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of digital marketing services to help your business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Engine Optimization</h3>
              <p className="text-gray-600 mb-4">
                Improve your website's visibility in search results and drive organic traffic to your business.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Keyword Research & Strategy</li>
                <li>• On-Page & Technical SEO</li>
                <li>• Content Optimization</li>
                <li>• Local SEO</li>
              </ul>
            </div>

            {/* PPC */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pay-Per-Click Advertising</h3>
              <p className="text-gray-600 mb-4">
                Drive targeted traffic and generate leads with strategic PPC campaigns across multiple platforms.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google Ads Management</li>
                <li>• Social Media Ads</li>
                <li>• Remarketing Campaigns</li>
                <li>• Conversion Optimization</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build brand awareness and engage with your audience across all major social media platforms.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Content Strategy</li>
                <li>• Community Management</li>
                <li>• Influencer Partnerships</li>
                <li>• Performance Analytics</li>
              </ul>
            </div>

            {/* Web Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Design & Development</h3>
              <p className="text-gray-600 mb-4">
                Create stunning, responsive websites that convert visitors into customers.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Responsive Design</li>
                <li>• E-commerce Solutions</li>
                <li>• Custom Development</li>
                <li>• Website Maintenance</li>
              </ul>
            </div>

            {/* Content Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Create valuable, engaging content that attracts and retains your target audience.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Blog Writing</li>
                <li>• Video Content</li>
                <li>• Email Marketing</li>
                <li>• Content Strategy</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Track performance and make data-driven decisions with comprehensive analytics.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Performance Tracking</li>
                <li>• ROI Analysis</li>
                <li>• Monthly Reports</li>
                <li>• Strategy Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Zoming Digital
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a passionate team of digital marketing experts dedicated to helping businesses
                achieve their online goals. With years of experience and a proven track record,
                we deliver results that matter.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach combines creativity, data-driven insights, and cutting-edge technology
                to create marketing strategies that drive growth and maximize ROI for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Animated background elements */}
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse delay-500"></div>

                {/* Main floating card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Logo section with gradient background */}
                  <div className="relative text-center mb-8">
                    <div className="inline-block p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-4">
                      <Image
                        src="/ZD.png"
                        alt="Zoming Digital"
                        width={160}
                        height={50}
                        className="mx-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      Digital Marketing Excellence
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">Since 2020</p>
                  </div>

                  {/* Animated stats with hover effects */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="group/stat text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-3xl font-bold text-blue-600 group-hover/stat:text-blue-700 transition-colors">500+</div>
                      <div className="text-xs text-gray-600 font-medium">Happy Clients</div>
                    </div>
                    <div className="group/stat text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-3xl font-bold text-green-600 group-hover/stat:text-green-700 transition-colors">1000+</div>
                      <div className="text-xs text-gray-600 font-medium">Projects</div>
                    </div>
                  </div>

                  {/* Interactive service highlights */}
                  <div className="space-y-4">
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-blue-100">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-700 font-medium">SEO & Content Marketing</span>
                    </div>
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-green-50 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-green-100">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-700 font-medium">PPC & Social Media Ads</span>
                    </div>
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-purple-100">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-700 font-medium">Web Design & Development</span>
                    </div>
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-orange-50 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-orange-100">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-700 font-medium">Analytics & Reporting</span>
                    </div>
                  </div>

                  {/* Floating achievement badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-bounce">
                    🏆 Award Winner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of digital marketing experts is dedicated to delivering exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 - CEO */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    JD
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    CEO
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm mb-4">
                  10+ years of experience in digital marketing and business strategy.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Marketing Director */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    SJ
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Director
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-green-600 font-medium mb-3">Marketing Director</p>
                <p className="text-gray-600 text-sm mb-4">
                  Expert in SEO, PPC, and social media marketing strategies.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 - Web Developer */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    MW
                  </div>
                  <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Lead
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Wilson</h3>
                <p className="text-purple-600 font-medium mb-3">Lead Web Developer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Full-stack developer specializing in modern web technologies.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 - Content Specialist */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    EB
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Specialist
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma Brown</h3>
                <p className="text-orange-600 font-medium mb-3">Content Specialist</p>
                <p className="text-gray-600 text-sm mb-4">
                  Creative content creator and social media expert.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help your business grow online. Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@zomingdigital.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">123 Digital Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/ZD.png"
                alt="Zoming Digital Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4 max-w-md">
                Transform your business with our comprehensive digital marketing solutions.
                We help businesses grow online with proven strategies and results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PPC</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zoming Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
