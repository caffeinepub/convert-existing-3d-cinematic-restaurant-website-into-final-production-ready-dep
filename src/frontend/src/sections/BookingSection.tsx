import ReservationForm from '../components/booking/ReservationForm';

export default function BookingSection() {
  return (
    <section id="booking" className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-amber-400 md:text-5xl lg:text-6xl">
            Reserve Your Table
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-amber-100/80 md:text-xl">
            Secure your dining experience and let us prepare for your arrival
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
