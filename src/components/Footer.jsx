import React from 'react';
import logo from '../assets/logo/logoputih.png';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Program', 'Projects', 'Testimonials', 'Contact'];
  const programs = ['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'];

  return (
    <footer className="bg-blue-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* 🔹 Grid 3 kolom saja (bukan 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Ruang Ekspresi Logo" className="w-10 h-10" />
              <div className="text-xs font-semibold leading-tight">
                <div>ruang</div>
                <div>ekspresi</div>
              </div>
            </a>
            <p className="text-sm mb-4 max-w-xs">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1 shrink-0"></i>
                <span>
                  Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2 shrink-0"></i>
                <span>ruang_ekspresi@webmail.uad.ac.id</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone mr-2 shrink-0"></i>
                <span>(0274) 511830</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {programs.map((prog) => (
                <li key={prog}>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Ruang Ekspresi | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;