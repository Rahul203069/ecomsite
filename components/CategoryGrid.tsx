import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Saltwater Fishing',
    image: 'https://images.pexels.com/photos/3621179/pexels-photo-3621179.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'large'
  },
  {
    id: 2,
    name: 'Fly Fishing',
    image: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'medium'
  },
  {
    id: 3,
    name: 'Surf Casting',
    image: 'https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'medium'
  },
  {
    id: 4,
    name: 'Coastal Camping',
    image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small'
  },
  {
    id: 5,
    name: 'Marine Conservation',
    image: 'https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small'
  },
  {
    id: 6,
    name: 'Tackle & Gear',
    image: 'https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small'
  }
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-24 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <header className="mb-16 animate-fade-in-up">
          <span className="text-accent text-2xl text-[#2D7A89] mb-3 block">
            Explore our world
          </span>
          <h2 className="text-heading text-5xl lg:text-6xl font-black text-[#0A2540] mb-6">
            Fishing Categories
          </h2>
          <p className="text-xl text-[#2C3338] max-w-2xl leading-relaxed">
            From open ocean adventures to quiet stream moments, find your fishing style.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          <a
            href="#"
            className="lg:col-span-8 relative h-96 rounded-2xl overflow-hidden group hover-lift animate-fade-in-up"
          >
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent group-hover:from-[#0A2540]/90 transition-all"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <h3 className="text-heading text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-[#E8DCC4] transition-colors">
                {categories[0].name}
              </h3>
              <div className="flex items-center gap-3 text-white group-hover:gap-5 transition-all">
                <span className="text-lg">Explore</span>
                <ArrowRight size={24} />
              </div>
            </div>
          </a>

          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            {categories.slice(1, 3).map((category, index) => (
              <a
                key={category.id}
                href="#"
                className="block relative h-44 rounded-2xl overflow-hidden group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent group-hover:from-[#0A2540]/90 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-heading text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#E8DCC4] transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {categories.slice(3).map((category, index) => (
            <a
              key={category.id}
              href="#"
              className="lg:col-span-4 relative h-64 rounded-2xl overflow-hidden group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.15}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent group-hover:from-[#0A2540]/90 transition-all"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-heading text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#E8DCC4] transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
