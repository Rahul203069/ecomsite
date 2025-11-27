import { Clock, ArrowRight } from 'lucide-react';



const featuredArticles = [
  {
    id: 1,
    category: 'Featured Story',
    title: 'Sunrise Sessions: Where Sea Bass Run Wild',
    excerpt: 'Golden hour brings more than just perfect light. Join us as we chase trophy sea bass along the rocky coastline, where patience meets passion.',
    image: 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '8 min read',
  },
  {
    id: 2,
    category: 'Coastal BBQ',
    title: 'Grilling Fresh Catch: A Beachside Guide',
    excerpt: 'Nothing beats the taste of fish grilled right on the shore. Master the art of coastal barbecue with our time-tested techniques.',
    image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
  },
  {
    id: 3,
    category: 'Gear Essentials',
    title: 'The Perfect Pier Fishing Setup',
    excerpt: 'From rods to tackle boxes, discover the essential gear that serious pier anglers swear by for consistent coastal catches.',
    image: 'https://images.pexels.com/photos/349727/pexels-photo-349727.jpeg?cs=srgb&dl=fishing-sea-dawn-349727.jpg&fm=jpghttps://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
  },
  {
    id: 4,
    category: 'Local Life',
    title: 'Tales from the Harbor: Old Salts & New Stories',
    excerpt: 'The harbor holds decades of fishing wisdom. Meet the veterans who have made these docks their second home.',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
  },
  {
    id: 5,
    category: 'Recipe & Smoke',
    title: 'Cedar Plank Salmon: From Tide to Table',
    excerpt: 'Transform your fresh salmon into a smoky, succulent masterpiece with this classic coastal barbecue method.',
    image: 'https://th.bing.com/th/id/OIP.D36Y5dsiTuYrn5fqAzYMfQHaE8?w=258&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
    readTime: '4 min read',
  }
];

export default function FeaturedContent() {
  return (
    <section id="stories" className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F3] to-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 animate-fade-in-up text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="h-px w-12 bg-[#2D7A89]"></div>
            <span className="text-sm font-bold tracking-widest text-[#2D7A89] uppercase">
              Latest from the shore
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#0A2540] mb-6">
            Featured Stories
          </h2>
          <p className="text-xl text-[#2C3338]/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Dive into authentic narratives from anglers who live for the water. Real stories, real passion.
          </p>
        </div>

        {/* Hero Featured Article */}
        <div className="mb-8 animate-fade-in-up">
          <a
            href="#"
            className="block group rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white shadow-xl"
          >
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/60 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center px-5 py-2 bg-[#FF6B4A] text-white text-sm font-bold rounded-full mb-5 shadow-lg">
                    {featuredArticles[0].category}
                  </span>

                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-5 group-hover:text-[#E8DCC4] transition-colors leading-tight">
                    {featuredArticles[0].title}
                  </h3>

                  <p className="text-[#E8DCC4] text-lg lg:text-xl mb-6 leading-relaxed">
                    {featuredArticles[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-[#E8DCC4]">
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span className="font-medium">{featuredArticles[0].readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all">
                      <span>Read More</span>
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Grid of 4 Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.slice(1).map((article, index) => (
            <a
              key={article.id}
              href="#"
              className="block group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent"></div>
                
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-white/95 backdrop-blur-sm text-[#0A2540] text-xs font-bold rounded-full shadow-md">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-3 group-hover:text-[#2D7A89] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-[#2C3338]/80 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#2D7A89] text-sm font-medium">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <ArrowRight size={18} className="text-[#2D7A89] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A2540] text-white rounded-xl font-semibold hover:bg-[#2D7A89] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
          >
            <span>View All Stories</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}