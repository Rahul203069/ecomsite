import { useState } from 'react';
import { ShoppingCart, Eye,Star } from 'lucide-react';
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
    name: 'Angler\'s Tackle Box',
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

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <section id="gear" className="py-24 lg:py-32 bg-[#E8DCC4]/20 texture-overlay relative">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBBMjU0MCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <header className="mb-12 animate-fade-in-up">
          <span className="text-accent text-2xl text-[#2D7A89] mb-3 block">
            Expertly curated
          </span>
          <h2 className="text-heading text-5xl lg:text-6xl font-black text-[#0A2540] mb-6">
            Premium Fishing Gear
          </h2>
          <nav className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`text-xl font-semibold pb-2 border-b-2 transition-all ${
                activeTab === 'bestsellers'
                  ? 'text-[#0A2540] border-[#FF6B4A]'
                  : 'text-[#2C3338]/50 border-transparent hover:text-[#2C3338]'
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`text-xl font-semibold pb-2 border-b-2 transition-all ${
                activeTab === 'new'
                  ? 'text-[#0A2540] border-[#FF6B4A]'
                  : 'text-[#2C3338]/50 border-transparent hover:text-[#2C3338]'
              }`}
            >
              New Arrivals
            </button>
          </nav>
        </header>

        <div className="relative">
          <div className="overflow-x-auto scroll-snap-x pb-8 -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex gap-6 lg:gap-8 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
             {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-72 overflow-hidden bg-[#E8DCC4]/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg ${
                      product.badge === 'New' ? 'bg-[#2D7A89]' : 'bg-[#FF6B4A]'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <button 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B4A] hover:text-white transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0"
                    aria-label="Quick view"
                  >
                    <Eye size={20} />
                  </button>
                  <button 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#2D7A89] hover:text-white transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 delay-75"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'fill-[#FF6B4A] text-[#FF6B4A]' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#2C3338]/70">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-[#2D7A89] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-[#2C3338]/80 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#E8DCC4]">
                  <span className="text-2xl font-black text-[#0A2540]">
                    ${product.price}
                  </span>
                  <button className="px-5 py-2 bg-[#0A2540] text-white rounded-lg hover:bg-[#2D7A89] transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delayed-2">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#2D7A89] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Gear
          </a>
        </div>
      </div>
    </section>
  );
}
