import logo from '../assets/images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#004643] text-white py-12 mt-10">
            <div className="container mx-auto px-6 lg:px-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
                    {/* Logo and Branding */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <div className="flex items-center">
                            <img src={logo} alt="StudyBuddyHub Logo" className="w-16 h-16 object-contain" />
                            <h1 className="text-2xl font-bold ml-3 Postsen">StudyBuddyHub</h1>
                        </div>
                        <p className="text-sm text-gray-300 mt-2 max-w-xs">
                            Your one-stop solution for collaborative learning and growth in the digital age.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6 md:mt-0">
                        {/* Study Tools */}
                        <div>
                            <h5 className="font-semibold mb-4 text-lg text-[#FAF3DD]">Study Tools</h5>
                            <ul className="space-y-2.5">
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">StudyPlanner</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Flashcards</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">StudyBuddy App</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h5 className="font-semibold mb-4 text-lg text-[#FAF3DD]">Resources</h5>
                            <ul className="space-y-2.5">
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">E-Library</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Online Courses</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">StudyPodcasts</Link></li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div>
                            <h5 className="font-semibold mb-4 text-lg text-[#FAF3DD]">Community</h5>
                            <ul className="space-y-2.5">
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">StudyPals</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Mind Mapping</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">StudyGames</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className=" md:items-end mt-6 md:mt-0">
                        <h5 className="font-semibold text-lg mb-4 text-[#FAF3DD]">Connect With Us</h5>
                        <div className="flex space-x-5">
                            <a href="#" className="bg-[#005F5D] p-3 rounded-full hover:bg-[#00726F] transition-colors duration-300">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className="bg-[#005F5D] p-3 rounded-full hover:bg-[#00726F] transition-colors duration-300">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="bg-[#005F5D] p-3 rounded-full hover:bg-[#00726F] transition-colors duration-300">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="bg-[#005F5D] p-3 rounded-full hover:bg-[#00726F] transition-colors duration-300">
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                        <div className="mt-6">
                            <p className="text-sm text-gray-300">Contact us at:</p>
                            <p className="text-sm font-medium mt-1">support@studybuddyhub.com</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm py-2">
                    <p>&copy; {new Date().getFullYear()} StudyBuddyHub. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors duration-300">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
