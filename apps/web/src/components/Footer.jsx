
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Cpu } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Kaveri<span className="text-primary">Tech</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Empowering professionals with cutting-edge tech training and guaranteed job placement solutions.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white">Programs</span>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#career-transition" className="text-sm hover:text-primary transition-colors duration-200">
                  Career Transition
                </a>
              </li>
              <li>
                <a href="#non-it-to-it" className="text-sm hover:text-primary transition-colors duration-200">
                  Non-IT to IT
                </a>
              </li>
              <li>
                <a href="#job-guarantee" className="text-sm hover:text-primary transition-colors duration-200">
                  Job Guarantee
                </a>
              </li>
              <li>
                <a href="#corporate-training" className="text-sm hover:text-primary transition-colors duration-200">
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white">Company</span>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#services" className="text-sm hover:text-primary transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm hover:text-primary transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm hover:text-primary transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-sm hover:text-primary transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white">Contact</span>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:kaveritech2022@gmail.com" className="text-sm hover:text-primary transition-colors duration-200">
                  kaveritech2022@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col space-y-1.5">
                  <a href="tel:+919642716561" className="text-sm hover:text-primary transition-colors duration-200">+91 9642716561</a>
                  <a href="tel:+917338107925" className="text-sm hover:text-primary transition-colors duration-200">+91 7338107925</a>
                  <a href="tel:+918688084437" className="text-sm hover:text-primary transition-colors duration-200">+91 8688084437</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Janardhan Complex,<br />
                  Siddartha Theatre back side,<br />
                  Krishna Nagar, Madanapalle,<br />
                  Madanapalle dist, AndhraPradesh,<br />
                  India - 517325
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} KaveriTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-400 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
