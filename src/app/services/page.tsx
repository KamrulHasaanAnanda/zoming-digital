import Image from "next/image";

export default function ServicesPage() {
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
                                <a href="/" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                                <a href="/services" className="text-blue-400 px-3 py-2 text-sm font-medium">Services</a>
                                <a href="/#about" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">About</a>
                                <a href="/#team" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Team</a>
                                <a href="/#contact" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>



            {/* Core Services */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Core Digital Marketing Services
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our foundational services that drive results and build your digital presence.
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
                                Comprehensive social media strategies to boost your brand presence and engage your audience.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-2 mb-6">
                                <li>• Social media strategy development</li>
                                <li>• Content creation and management</li>
                                <li>• Paid ad campaigns (Facebook, Instagram, LinkedIn)</li>
                                <li>• Community management</li>
                                <li>• Influencer marketing</li>
                            </ul>
                        </div>

                        {/* SEO */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Engine Optimization (SEO)</h3>
                            <p className="text-gray-600 mb-4">
                                Improve your search rankings and drive organic traffic to your website.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                <li>• On-page SEO optimization</li>
                                <li>• Off-page SEO (backlinks, guest posts)</li>
                                <li>• Technical SEO (site speed, mobile-friendliness)</li>
                                <li>• Local SEO optimization</li>
                                <li>• SEO audits and competitor analysis</li>
                            </ul>
                        </div>

                        {/* PPC */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Engine Marketing (SEM)/PPC</h3>
                            <p className="text-gray-600 mb-4">
                                Paid advertising campaigns for immediate results and targeted traffic.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                <li>• Google Ads (Search, Display, Shopping, YouTube)</li>
                                <li>• Bing Ads campaigns</li>
                                <li>• Keyword research and ad copywriting</li>
                                <li>• A/B testing and performance tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Additional Services
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Specialized services to enhance your digital marketing strategy and drive better results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* App Store Optimization */}
                        <div className="dark-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:dark-card-hover">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">App Store Optimization (ASO)</h3>
                            <p className="text-gray-300 mb-4">
                                Optimize your mobile app visibility and increase downloads from app stores.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-2 mb-6">
                                <li>• App store listing optimization</li>
                                <li>• Keyword research for app stores</li>
                                <li>• App icon and screenshot optimization</li>
                                <li>• Review and rating management</li>
                                <li>• App store analytics and reporting</li>
                            </ul>
                        </div>

                        {/* Virtual Events/Webinar Promotion */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Virtual Events & Webinar Promotion</h3>
                            <p className="text-gray-600 mb-4">
                                Promote your virtual events and webinars to maximize attendance and engagement.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                <li>• Event promotion strategy</li>
                                <li>• Social media campaign management</li>
                                <li>• Email marketing for events</li>
                                <li>• Registration page optimization</li>
                                <li>• Post-event follow-up campaigns</li>
                            </ul>
                        </div>

                        {/* E-commerce Marketing */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Marketing</h3>
                            <p className="text-gray-600 mb-4">
                                Specialized marketing strategies to boost your online store sales and conversions.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                <li>• Product listing optimization</li>
                                <li>• Shopping campaign management</li>
                                <li>• Retargeting campaigns</li>
                                <li>• Conversion rate optimization</li>
                                <li>• Customer retention strategies</li>
                            </ul>
                        </div>

                        {/* Marketing Automation */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Automation Setup</h3>
                            <p className="text-gray-600 mb-4">
                                Set up and optimize marketing automation tools to streamline your marketing efforts.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                <li>• HubSpot setup and configuration</li>
                                <li>• Mailchimp automation workflows</li>
                                <li>• Lead nurturing campaigns</li>
                                <li>• CRM integration</li>
                                <li>• Performance tracking and optimization</li>
                            </ul>
                        </div>

                        {/* Affiliate Marketing */}
                        <div className="dark-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:dark-card-hover">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Affiliate Marketing Setup</h3>
                            <p className="text-gray-300 mb-4">
                                Build and manage affiliate marketing programs to expand your reach and increase sales.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-2 mb-6">
                                <li>• Affiliate program design</li>
                                <li>• Partner recruitment strategies</li>
                                <li>• Commission structure optimization</li>
                                <li>• Performance tracking and reporting</li>
                                <li>• Affiliate relationship management</li>
                            </ul>
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
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">PPC</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Content Marketing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>zoomindigital03@gmail.com</li>
                                <li>+880 1728-248355</li>
                                <li>Chittagong, Bangladesh</li>
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
