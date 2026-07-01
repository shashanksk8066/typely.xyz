import { Link } from 'react-router-dom';
import { Keyboard, Heart } from 'lucide-react';

const resourcesLinks = [
  { href: '/academy', label: 'Typing Academy' },
  { href: '/typing-guide', label: 'Typing Guide' },
  { href: '/tools', label: 'Free Tools' },
  { href: '/tools/wpm-calculator', label: 'WPM Calculator' },
  { href: '/tools/word-counter', label: 'Word Counter' },
  { href: '/tools/case-converter', label: 'Case Converter' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/editorial-policy', label: 'Editorial Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Keyboard className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-gradient">Typely.xyz</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The ultimate typing speed test and educational platform. Improve your WPM, accuracy, and keyboard ergonomics today.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources & Tools</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Typely.xyz. All rights reserved.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for typing enthusiasts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}