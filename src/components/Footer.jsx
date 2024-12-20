import logo from '../assets/images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#004643] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    {/* Logo and Branding */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="StudyBuddyHub Logo" className="w-16 mb-2" />
                        <h1 className="text-2xl font-bold">StudyBuddyHub</h1>
                        <p className="text-sm text-gray-300 mt-2">
                            Your one-stop solution for collaborative learning and growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Study Tools */}
                        <div>
                            <h5 className="font-semibold mb-3 text-lg">Study Tools</h5>
                            <ul>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">StudyPlanner</a></li>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">Flashcards</a></li>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">StudyBuddy App</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h5 className="font-semibold mb-3 text-lg">Resources</h5>
                            <ul>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">E-Library</a></li>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">Online Courses</a></li>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">StudyPodcasts</a></li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div>
                            <h5 className="font-semibold mb-3 text-lg">Community</h5>
                            <ul>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">StudyPals</a></li>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">Mind Mapping</a></li>
                                <li><a href="#" className="hover:text-[#FAF3DD] transition">StudyGames</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-end">
                        <h5 className="font-semibold text-lg mb-3">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-[#FAF3DD] transition">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="hover:text-[#FAF3DD] transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-[#FAF3DD] transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-[#FAF3DD] transition">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Bottom Section */}
                <div className="text-center text-gray-400 text-sm mt-6">
                    <p>&copy; 2024 StudyBuddyHub. All rights reserved.</p>
                    <p>
                        <a href="#" className="hover:text-[#FAF3DD] transition">Privacy Policy</a> | 
                        <a href="#" className="hover:text-[#FAF3DD] transition"> Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
