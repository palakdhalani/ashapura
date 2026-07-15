import React from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

const Facebook = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const Twitter = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);
const Instagram = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const Linkedin = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 pb-16 relative">
          
          {/* Horizontal Decorative Line (Spans Full Width of Screen) */}
          <div className="absolute bottom-0 left-[-50vw] right-[-50vw] h-px bg-white/10"></div>

          {/* Col 1: Logo & Contact */}
          <div className="flex flex-col gap-8 relative">
            
            {/* Vertical Decorative Line (Spans Full Height of Footer) */}
            <div className="absolute right-[-10px] xl:right-[50px] top-[-500px] bottom-[-500px] w-px bg-white/10 hidden lg:block"></div>

            <div className="flex items-center gap-2">
               {/* Logo Icon */}
               <div className="w-8 h-8 bg-secondary rounded-sm flex items-center justify-center">
                 <ArrowUpRight className="text-white w-5 h-5" />
               </div>
               <span className="text-2xl font-bold tracking-tight">Finzo</span>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-3">Location</h4>
              <p className="text-white/80 text-sm leading-relaxed hover:text-white transition-colors cursor-pointer">
                123 Business Street, Suite 456<br />
                New York, NY 10001, USA
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-3">Contact Us</h4>
              <p className="text-white/80 text-sm leading-relaxed hover:text-white transition-colors cursor-pointer">
                +1 (406) 555-0120<br />
                hello@example.com
              </p>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-6">Pages</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li><a href="#" className="hover:text-secondary transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Case studies</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Our Philosophy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Faq's</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-6">Newsletter</h4>
            <p className="text-sm text-white/80 mb-4">Subscribe to our newsletter</p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email ..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-14 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4 text-white -ml-0.5" />
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/50">
            © 2026 <span className="text-white">Finzo</span>. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors group">
                <Icon className="w-4 h-4 text-white group-hover:text-white" />
              </a>
            ))}
          </div>

          <div className="text-xs text-white/50 flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
