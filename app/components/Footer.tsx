import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const socialLinks = [
    { href: "https://github.com/Emilijxa", Icon: AiFillGithub, label: "Github" },
    { href: "https://www.linkedin.com/in/emilija-blink/", Icon: AiFillLinkedin, label: "Linkedin" },
    { href: "https://instagram.com/emilijxaa", Icon: AiFillInstagram, label: "Instagram" },
    { href: "https://telegram.com", Icon: FaTelegramPlane, label: "Telegram" },
    { href: "https://x.com/Emilijxaa", Icon: FaXTwitter, label: "X" }
    
];

export const Footer = () => {
    return(
        <footer className="relative py-8 max-w-[1200px] mx-auto px-4">
            <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="text-gray-200">
                © 2025. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <a 
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                                       hover:text-blue-400 transition-colors"   
                            >
                            <Icon size={30} />
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    );
    
};