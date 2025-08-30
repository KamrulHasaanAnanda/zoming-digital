"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
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
                <a href="#home" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="/services" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#team" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Team</a>
                <a href="#contact" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
                <a
                  href="#home"
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#team"
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 dark-bg flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your <span className="text-blue-400">Digital Presence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We help businesses grow online with comprehensive digital marketing solutions.
                From SEO to social media, we create strategies that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
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
      <section id="services" className="min-h-screen py-20 bg-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Social Media Marketing */}
            <div className="dark-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:dark-card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Social Media Marketing (SMM)</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive social media strategies to boost your brand presence
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Social media strategy development</li>
                <li>• Content creation and management</li>
                <li>• Paid ad campaigns (Facebook, Instagram, LinkedIn)</li>
                <li>• Community management (comments, inboxes, DMs)</li>
                <li>• Influencer marketing</li>
              </ul>
            </div>

            {/* Search Engine Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-600 mb-4">
                Improve your search rankings and drive organic traffic
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• On-page SEO (meta tags, keywords, URL structure)</li>
                <li>• Off-page SEO (backlinks, guest posts)</li>
                <li>• Technical SEO (site speed, mobile-friendliness)</li>
                <li>• Local SEO (Google Business Profile optimization)</li>
                <li>• SEO audits and competitor analysis</li>
              </ul>
            </div>

            {/* Search Engine Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Engine Marketing (SEM)/PPC</h3>
              <p className="text-gray-600 mb-4">
                Paid advertising campaigns for immediate results
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google Ads (Search, Display, Shopping, YouTube)</li>
                <li>• Bing Ads</li>
                <li>• Keyword research and ad copywriting</li>
                <li>• A/B testing and performance tracking</li>
              </ul>
            </div>

            {/* Content Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Engaging content that converts visitors
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Blog writing</li>
                <li>• Infographics</li>
                <li>• Case studies and whitepapers</li>
                <li>• E-books and downloadable resources</li>
                <li>• Content strategy development</li>
              </ul>
            </div>

            {/* Email Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build relationships and drive sales through targeted email campaigns
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Email campaign design and execution</li>
                <li>• Newsletter setup and management</li>
                <li>• List segmentation and automation</li>
                <li>• Performance tracking (open rate, click rate)</li>
              </ul>
            </div>

            {/* Website Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Development & Optimization</h3>
              <p className="text-gray-600 mb-4">
                Custom websites that convert visitors into customers
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom website design (WordPress, Shopify)</li>
                <li>• Landing page design for campaigns</li>
                <li>• Conversion rate optimization (CRO)</li>
                <li>• Mobile and UX optimization</li>
              </ul>
            </div>

            {/* Graphic Design & Branding */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Graphic Design & Branding</h3>
              <p className="text-gray-600 mb-4">
                Professional design that strengthens your brand identity
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Logo design and brand identity</li>
                <li>• Social media post design</li>
                <li>• Ad banners and promotional material</li>
                <li>• Brand guidelines development</li>
              </ul>
            </div>

            {/* Video Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Marketing</h3>
              <p className="text-gray-600 mb-4">
                Engaging video content that tells your story
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Promotional videos</li>
                <li>• Motion graphics and animations</li>
                <li>• YouTube channel management</li>
                <li>• Short-form video content (Reels, TikTok, Shorts)</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Data-driven insights to optimize your marketing efforts
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Google Analytics setup</li>
                <li>• Monthly performance reports</li>
                <li>• Campaign ROI tracking</li>
                <li>• User behavior analysis (heatmaps, funnels)</li>
              </ul>
            </div>

            {/* Online Reputation Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Reputation Management</h3>
              <p className="text-gray-600 mb-4">
                Build and maintain a positive online presence
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Review monitoring and response</li>
                <li>• Crisis communication strategy</li>
                <li>• Brand sentiment analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-gray-900 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Zoming Digital
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We are a passionate team of digital marketing experts dedicated to helping businesses
                achieve their online goals. With years of experience and a proven track record,
                we deliver results that matter.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our approach combines creativity, data-driven insights, and cutting-edge technology
                to create marketing strategies that drive growth and maximize ROI for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Animated background elements */}
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="hidden sm:block absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse delay-500"></div>

                {/* Main floating card */}
                <div className="relative z-10 dark-card rounded-3xl shadow-2xl p-8 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Logo section with gradient background */}
                  <div className="relative text-center mb-8">
                    <div className="inline-block p-4 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl mb-4">
                      <Image
                        src="/ZD.png"
                        alt="Zoming Digital"
                        width={160}
                        height={50}
                        className="mx-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      Digital Marketing Excellence
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">Since 2020</p>
                  </div>

                  {/* Animated stats with hover effects */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="group/stat text-center p-4 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-xl border border-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-3xl font-bold text-blue-400 group-hover/stat:text-blue-300 transition-colors">500+</div>
                      <div className="text-xs text-gray-300 font-medium">Happy Clients</div>
                    </div>
                    <div className="group/stat text-center p-4 bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-xl border border-green-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-3xl font-bold text-green-400 group-hover/stat:text-green-300 transition-colors">1000+</div>
                      <div className="text-xs text-gray-300 font-medium">Projects</div>
                    </div>
                  </div>

                  {/* Interactive service highlights */}
                  <div className="space-y-4">
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-blue-900/30 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-blue-900/50">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-200 font-medium">SEO & Content Marketing</span>
                    </div>
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-green-900/30 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-green-900/50">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-200 font-medium">PPC & Social Media Ads</span>
                    </div>
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-purple-900/30 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-purple-900/50">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-200 font-medium">Web Design & Development</span>
                    </div>
                    <div className="group/service flex items-center p-3 bg-gradient-to-r from-orange-900/30 to-transparent rounded-xl transform transition-all duration-300 hover:scale-102 hover:bg-orange-900/50">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mr-4 group-hover/service:scale-125 transition-transform"></div>
                      <span className="text-gray-200 font-medium">Analytics & Reporting</span>
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
      <section id="team" className="min-h-screen py-20 bg-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings together diverse expertise to drive innovation,
              ensure operational excellence, and deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {/* Team Member 1 - Founder & Managing Director */}
            <div className="group relative">
              <div className="dark-card rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:dark-card-hover">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-700 shadow-lg">
                    <Image
                      src="/izaz.jpeg"
                      alt="Izaz Bin Azam"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Founder
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Izaz Bin Azam</h3>
                <p className="text-blue-400 font-medium mb-3">Founder & Managing Director</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Provides vision and long-term direction, shaping organizational culture and ensuring every project aligns with client objectives and market opportunities.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 - CEO */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/ceo.jpg"
                      alt="Mushfiqur Rahman Hridoy"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    CEO
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mushfiqur Rahman Hridoy</h3>
                <p className="text-green-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Operational driving force ensuring strategies translate into actionable results, overseeing daily operations and maintaining financial discipline.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 - Head of Technology & Analytics */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/Sahib.jpg"
                      alt="Sahib Abbas Bahar Chowdhury"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Tech Lead
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sahib Abbas Bahar Chowdhury</h3>
                <p className="text-purple-600 font-medium mb-3">Head of Technology & Analytics</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Leads technological innovation and data-driven approach, establishing advanced systems for campaign tracking and performance measurement.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 - Head of Public Relations */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/fatima.jpg"
                      alt="Fatima Afroz"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    PR Lead
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fatima Afroz</h3>
                <p className="text-orange-600 font-medium mb-3">Head of Public Relations</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Manages agency&apos;s image and reputation, overseeing media outreach and stakeholder engagement to ensure positive brand presence.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 5 - Head of Client Relations */}
            <div className="group relative">
              <div className="dark-card rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:dark-card-hover">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-700 shadow-lg">
                    <Image
                      src="/Sadman.jpg"
                      alt="Sadman Reza Sami"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Client Lead
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sadman Reza Sami</h3>
                <p className="text-indigo-400 font-medium mb-3">Head of Client Relations</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Ensures seamless, value-driven client relationships, managing long-term partnerships and exceeding client expectations.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 6 - Head of Marketing & Growth */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/Ishraq.jpg"
                      alt="Md. Ishraq Parves"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Growth Lead
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Md. Ishraq Parves</h3>
                <p className="text-teal-600 font-medium mb-3">Head of Marketing & Growth</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Drives marketing innovations and business expansion, combining creativity with analytical insights for measurable growth.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 7 - Head of Creative */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/Salman.png"
                      alt="Salman Salim"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Creative Lead
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Salman Salim</h3>
                <p className="text-pink-600 font-medium mb-3">Head of Creative</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Leads creative vision and execution, developing innovative concepts and visually compelling campaigns that capture audience attention.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Structure Overview */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Team Structure</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our leadership team is organized to ensure comprehensive coverage of all aspects of digital marketing,
                from strategic vision to creative execution and client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Strategic Leadership */}
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-xl p-6 border border-blue-700">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Strategic Leadership</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Founder & Managing Director</li>
                  <li>• Chief Executive Officer</li>
                  <li>• Vision & Direction Setting</li>
                  <li>• Organizational Culture</li>
                </ul>
              </div>

              {/* Operations & Technology */}
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-xl p-6 border border-green-700">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Operations & Technology</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Technology & Analytics</li>
                  <li>• Campaign Tracking</li>
                  <li>• Performance Measurement</li>
                  <li>• Data-Driven Decisions</li>
                </ul>
              </div>

              {/* Client & Market Relations */}
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-xl p-6 border border-purple-700">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Client & Market Relations</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Client Relations</li>
                  <li>• Public Relations</li>
                  <li>• Stakeholder Engagement</li>
                  <li>• Brand Reputation</li>
                </ul>
              </div>

              {/* Growth & Creative */}
              <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-xl p-6 border border-orange-700">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Growth & Creative</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Marketing & Growth</li>
                  <li>• Creative Direction</li>
                  <li>• Campaign Innovation</li>
                  <li>• Brand Storytelling</li>
                </ul>
              </div>

              {/* Core Values */}
              <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 rounded-xl p-6 border border-indigo-700">
                <h4 className="text-lg font-semibold text-indigo-400 mb-3">Core Values</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Innovation & Excellence</li>
                  <li>• Client-Centric Approach</li>
                  <li>• Data-Driven Results</li>
                  <li>• Continuous Improvement</li>
                </ul>
              </div>

              {/* Success Metrics */}
              <div className="bg-gradient-to-br from-teal-900/50 to-teal-800/50 rounded-xl p-6 border border-teal-700">
                <h4 className="text-lg font-semibold text-teal-400 mb-3">Success Metrics</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• ROI Optimization</li>
                  <li>• Client Satisfaction</li>
                  <li>• Market Growth</li>
                  <li>• Team Excellence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-gray-300 font-medium">Leadership Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300 font-medium">Total Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">8+</div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-gray-900 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help your business grow online. Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">zoomindigital03@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-300">+880 1728-248355</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-gray-300">2nd floor, House no 84, Road no 3, Shah Garibullah Housing society, Chittagong, Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400" placeholder="Enter your message"></textarea>
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
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.555-2.005.959-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
