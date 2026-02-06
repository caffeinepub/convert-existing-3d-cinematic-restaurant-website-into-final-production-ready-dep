import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-amber-900/30 bg-zinc-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-amber-400">Culinary Excellence</h3>
            <p className="text-amber-100/70">
              Where flavor meets artistry in every dish. Experience fine dining at its finest.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-amber-400">Quick Links</h4>
            <ul className="space-y-2 text-amber-100/70">
              <li>
                <a href="#menu" className="transition-colors hover:text-amber-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#booking" className="transition-colors hover:text-amber-400">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-amber-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-amber-400">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-amber-600/20 p-3 text-amber-400 transition-colors hover:bg-amber-600/30 hover:text-amber-300"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-amber-600/20 p-3 text-amber-400 transition-colors hover:bg-amber-600/30 hover:text-amber-300"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-amber-600/20 p-3 text-amber-400 transition-colors hover:bg-amber-600/30 hover:text-amber-300"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-amber-900/30 pt-8 text-center text-amber-100/60">
          <p className="flex items-center justify-center gap-2">
            © 2026. Built with <Heart className="h-4 w-4 fill-amber-600 text-amber-600" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 transition-colors hover:text-amber-300"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
