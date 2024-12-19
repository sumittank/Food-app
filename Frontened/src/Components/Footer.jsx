import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-white border-gray-200 mt-16">
            <hr className="border-t-2 border-gray-200" />
            <div className="container mx-auto px-6 py-10 mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                        <h6 className="text-gray-800 font-semibold mb-4">Solutions</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                        <h6 className="text-gray-800 font-semibold mb-4">Support</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>API Status</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                        <h6 className="text-gray-800 font-semibold mb-4">Company</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                        <h6 className="text-gray-800 font-semibold mb-4">Legal</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Claim</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full  mt-10 lg:mb-0 text-center flex flex-col">
                       
                        <p className='mb-3 text-xl'> " <span className='text-teal-600'>Drop</span> " </p>
                        <div className="flex space-x-4 items-center justify-center mb-3">
                            <FaFacebook className="text-gray-500 hover:text-blue-500" />
                            <FaInstagram className="text-gray-500 hover:text-pink-500" />
                            <FaTwitter className="text-gray-500 hover:text-blue-400" />
                            <FaGithub className="text-gray-500 hover:text-gray-700" />
                            <FaYoutube className="text-gray-500 hover:text-red-600" />
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                    </div>
                <hr className="my-8 border-t-2 border-gray-300" />
                <div className="flex justify-center text-gray-500 text-sm">
                    © 2024 Your Company, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
