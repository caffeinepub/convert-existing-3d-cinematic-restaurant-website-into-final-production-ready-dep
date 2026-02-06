import MapEmbed from '../components/contact/MapEmbed';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-amber-400 md:text-5xl lg:text-6xl">
            Visit Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-amber-100/80 md:text-xl">
            We look forward to welcoming you
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-amber-600/20 p-3">
                <MapPin className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-amber-400">Address</h3>
                <p className="text-amber-100/80">
                  123 Culinary Boulevard
                  <br />
                  Gourmet District
                  <br />
                  San Francisco, CA 94102
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-amber-600/20 p-3">
                <Phone className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-amber-400">Phone</h3>
                <p className="text-amber-100/80">+1 (555) 123-4567</p>
                <p className="text-sm text-amber-100/60">Reservations: +1 (555) 123-4568</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-amber-600/20 p-3">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-amber-400">Hours</h3>
                <div className="space-y-1 text-amber-100/80">
                  <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                  <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                  <p>Sunday: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
