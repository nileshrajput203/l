import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEnquiryStore } from '@/hooks/use-enquiry-store';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
  { label: 'ENQUIRY NOW', href: '#enquiry' },
];

const leftNavLinks = navLinks.slice(0, 3);
const rightNavLinks = navLinks.slice(3);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const pathname = usePathname();
  const { open: openEnquiryPopup } = useEnquiryStore();

  const isProjectPage = pathname.startsWith('/projects');
  const isCareersPage = pathname === '/careers';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    if (href === '#enquiry') {
      openEnquiryPopup();
      if (menuOpen) setMenuOpen(false);
      return;
    }
    setActiveLink(href);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    let currentSectionId = '';

    for (let i = navLinks.length - 1; i >= 0; i--) {
      const link = navLinks[i];
      if (!link.href.startsWith('/#') || link.href === '#enquiry') continue;

      const sectionId = link.href.substring(link.href.indexOf('#') + 1);
      const section = document.getElementById(sectionId);

      if (section && section.offsetTop <= scrollPosition) {
        currentSectionId = link.href;
        break;
      }
    }

    if (currentSectionId) {
      setActiveLink(currentSectionId);
    } else if (window.scrollY < 200) {
      setActiveLink('/');
    }
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      setActiveLink('/');
    } else {
      setActiveLink(pathname);
    }

    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname, handleScroll]);

  const inactiveLinkClasses = 'text-gray-300 hover:text-white';

  return (
    <>
      <style>{`
        .mobile-menu-open {
          overflow: hidden;
        }

        .mobile-nav {
          transform: translateX(0%);
          transition: transform 0.3s ease-in-out;
        }

        .mobile-nav-closed {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
      <header
        className={`absolute top-0 left-0 right-0 z-50 bg-[#1f2121] ${isProjectPage || isCareersPage ? 'md:bg-[#1f2121] shadow-md' : 'md:bg-transparent'} transition-colors duration-300`}>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='relative flex items-center justify-between h-16 md:h-20'>
            <nav className='hidden md:flex flex-1 items-center gap-6 md:gap-[45px]'>
              {leftNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeLink.includes(link.href) && link.href !== '/'
                      ? 'text-white font-bold'
                      : inactiveLinkClasses
                  }`}>
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href='/'
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center font-bold text-lg md:text-xl'>
              <Image
                src='/navkarlogo.png'
                alt='Navkar Logo'
                width={110}
                height={110}
                className='md:w-[110px] md:h-[110px] w-[80px] h-[80px] object-contain'
              />
            </a>

            <div className='flex flex-1 items-center justify-end gap-2'>
              <nav className='hidden md:flex items-center gap-6 md:gap-[45px]'>
                {rightNavLinks.map((link) => {
                  if (link.label === 'ENQUIRY NOW') {
                    return (
                      <button
                        key={link.label}
                        onClick={openEnquiryPopup}
                        className='bg-transparent border-2 border-white rounded-full py-2 px-5 text-white text-sm font-semibold uppercase tracking-wide whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-0.5'>
                        {link.label}
                      </button>
                    );
                  }
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        activeLink.includes(link.href)
                          ? 'text-white font-bold'
                          : inactiveLinkClasses
                      }`}>
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <button
                className={`md:hidden p-2 rounded-lg border -mr-1 ${
                  isProjectPage ? 'text-white' : 'text-white'
                }`}
                onClick={() => setMenuOpen((s) => !s)}
                aria-label='Toggle menu'>
                {menuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm md:hidden ${
            menuOpen ? 'block' : 'hidden'
          }`}
          onClick={() => setMenuOpen(false)} />
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-[100] md:hidden ${
            menuOpen ? 'mobile-nav' : 'mobile-nav-closed'
          }`}>
          <div className='flex justify-between items-center p-5 border-b border-gray-700'>
            <h2 className='text-white text-xl font-bold'>Menu</h2>
            <button 
              onClick={() => setMenuOpen(false)} 
              className='text-white hover:bg-white/10 p-2 rounded-lg transition-colors'>
              <X className='h-6 w-6' />
            </button>
          </div>
          <nav className='flex flex-col p-5 gap-2'>
            {navLinks.map((link) => {
              if (link.label === 'ENQUIRY NOW') {
                return (
                  <button
                    key={link.label}
                    onClick={() => {
                      openEnquiryPopup();
                      setMenuOpen(false);
                    }}
                    className='bg-white text-gray-900 rounded-lg py-3 px-4 text-base font-semibold uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 mt-4'>
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-gray-200 hover:text-white hover:bg-white/10 py-3 px-4 rounded-lg text-base font-medium transition-all duration-200'
                  onClick={() => handleNavClick(link.href)}>
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
