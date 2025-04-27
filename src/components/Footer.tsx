import React from 'react';
import { ourData } from '../libs/data';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tl from-[#0C7CBA] via-[#1F516C] to-[#060606] text-white py-8">
            <div className="container mx-auto text-center space-y-6">
                <h2 className="text-2xl font-bold">Team Portfolio</h2>
                <p className="text-sm">&copy; 2025 Team Portfolio. All rights reserved.</p>
                <div className="flex justify-center space-x-8 mt-4">
                    {ourData.map((member) => (
                        <div key={member.id} className="text-center">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <div className="flex justify-center space-x-4 mt-2">
                                {member.socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400 text-xl"
                                    >
                                        <link.logo />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-400">Designed and developed by Murad and Nifad.</p>
            </div>
        </footer>
    );
};

export default Footer;