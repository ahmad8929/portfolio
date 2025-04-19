import logo from "../assets/logo.png";

import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4">
      <div className="flex items-center h-20 md:h-32 overflow-hidden">
        <img
          className="h-80 w-auto object-contain"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex items-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/ahmad8929/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ahmad8929" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
          <FaGithub />
        </a>
        <a href="https://instagram.com/md.ahmad8929" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@stackandflow" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

