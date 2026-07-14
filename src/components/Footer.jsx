import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaSkype, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useSiteImage } from '../hooks/useSiteImage';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  const logoUrl = useSiteImage('settings', 'logoUrl', '/images/company-logo.png');
  return (
    <footer className="bg-[#0B1224] relative overflow-hidden">
      {/* Google Maps Embed */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32 pb-12">
        <div className="rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x764f0b8e1f4d8e0!2sShreenathji+Icon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gravity Tech World Location"
            className="w-full"
          />
        </div>
      </div>
      {/* Background World Map Pattern */}
      <img 
        src="/images/Group-56.png" 
        alt="World Map Background" 
        className="absolute right-0 top-1/2 -translate-y-1/2 h-auto w-full max-w-lg object-contain pointer-events-none opacity-20"
      />

      {/* Left side glowing shadow */}
      <div 
        className="absolute rounded-full bg-[#45ADFF] pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          left: '-250px',
          top: '50%',
          transform: 'translateY(-50%)',
          filter: 'blur(250px)',
          opacity: '0.4'
        }}
      />
      
      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="lg:pr-8">
            <div className="mb-6">
              <img src={logoUrl} alt="Gravity Tech World" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 text-[14px] leading-[1.8] mb-6">
              Our Expert Team Develops Contemporary Websites And Mobile Apps, Enabling Businesses To Embrace Digital Transformation. We Prioritize Inclusivity, Support, And Diversity, Fostering Creativity And Innovation In Everything We Do.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <FaInstagram size={18} />, href: '#' },
                { icon: <FaFacebook size={18} />, href: '#' },
                { icon: <FaXTwitter size={18} />, href: '#' },
                { icon: <FaSkype size={18} />, href: '#' },
                { icon: <FaLinkedin size={18} />, href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-[34px] h-[34px] rounded-full bg-white text-[#0B1224] flex items-center justify-center hover:bg-[#45ADFF] hover:text-white transition-colors duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:pl-8">
            <h4 className="text-[18px] font-medium text-[#45ADFF] mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Team', href: '/team' },
                { name: 'Career', href: '/career' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/80 text-[14px] hover:text-[#45ADFF] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-[18px] font-medium text-[#45ADFF] mb-6">Services</h4>
            <ul className="space-y-4">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-white/80 text-[14px] hover:text-[#45ADFF] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[18px] font-medium text-[#45ADFF] mb-6">Address</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#45ADFF] mt-1 flex-shrink-0" />
                <span className="text-white/80 text-[14px] leading-relaxed">207 / 208 Shreenathji Icon,<br/>VIP Circle, Digital Valley(Uttran),<br/>Surat, Gujarat - 394105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#45ADFF] flex-shrink-0" />
                <span className="text-white/80 text-[14px]">+91 90540 74748</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#45ADFF] flex-shrink-0" />
                <span className="text-white/80 text-[14px]">info@gravitytechworld.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="border-t border-white/10 pt-6 pb-8">
          <p className="text-center text-white/60 text-[14px]">
            ©2022 Gravity Tech World. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
