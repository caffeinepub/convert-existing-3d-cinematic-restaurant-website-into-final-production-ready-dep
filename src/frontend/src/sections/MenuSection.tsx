import MenuCard from '../components/menu/MenuCard';
import { menuItems } from '../data/menu';

export default function MenuSection() {
  return (
    <section id="menu" className="relative bg-gradient-to-b from-zinc-950 to-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-amber-400 md:text-5xl lg:text-6xl">
            Our Menu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-amber-100/80 md:text-xl">
            Discover our carefully curated selection of signature dishes
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
