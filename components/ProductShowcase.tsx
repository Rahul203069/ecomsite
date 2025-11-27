import { useState } from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Tidewater Pro Rod',
    description: 'Premium 7ft saltwater spinning rod',
    price: 289,
    image: 'https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: 'Coastal Canvas Jacket',
    description: 'Weatherproof fishing jacket',
    price: 179,
    image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Angler's Tackle Box",
    description: 'Waterproof organization system',
    price: 129,
    image: 'https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: 'Horizon Polarized Shades',
    description: 'UV protection with clarity',
    price: 159,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 156
  },
  {
    id: 5,
    name: 'Maritime Reel 5000',
    description: 'Corrosion-resistant spinning reel',
    price: 249,
    image: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
    rating: 4.5,
    reviews: 74
  },
  {
    id: 6,
    name: 'Shore Line Premium Lures',
    description: 'Hand-crafted fishing lures set',
    price: 89,
    image: 'https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    rating: 4.4,
    reviews: 92
  }
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<'new' | 'bestsellers'>('bestsellers');

  const filteredProducts = activeTab === 'bestsellers'
    ? products.filter(p => p.badge === 'Bestseller')
    : products.filter(p => p.badge === 'New');

  const displayProducts = filteredProducts.length ? filteredProducts : products;

  return (
    <section id="gear" className="py-24 lg:py-32 bg-[#E8DCC4]/20 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <header className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-black text-[#0A2540] mb-6">
            Premium Fishing Gear
          </h2>
          <nav className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`text-xl font-semibold pb-2 border-b-2 ${
                activeTab === 'bestsellers'
                  ? 'text-[#0A2540] border-[#FF6B4A]'
                  : 'text-[#2C3338]/50 border-transparent'
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`text-xl font-semibold pb-2 border-b-2 ${
                activeTab === 'new'
                  ? 'text-[#0A2540] border-[#FF6B4A]'
                  : 'text-[#2C3338]/50 border-transparent'
              }`}
            >
              New Arrivals
            </button>
          </nav>
        </header>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {displayProducts.map((product, index) => (
              <article
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 min-w-[280px] sm:w-full"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-72 overflow-hidden bg-[#E8DCC4]/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white ${
                      product.badge === 'New' ? 'bg-[#2D7A89]' : 'bg-[#FF6B4A]'
                    }`}>
                      {product.badge}
                    </span>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 opacity-0 group-hover:opacity-100 flex items-end justify-center pb-6 gap-3 transition">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B4A] hover:text-white">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#2D7A89] hover:text-white">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating)
                          ? 'fill-[#FF6B4A] text-[#FF6B4A]'
                          : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-xs text-[#2C3338]/70">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-[#2C3338]/80 mb-4">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-2xl font-black text-[#0A2540]">
                      ${product.price}
                    </span>
                    <button className="px-5 py-2 bg-[#0A2540] text-white rounded-lg hover:bg-[#2D7A89]">
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}