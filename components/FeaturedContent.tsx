import { Clock, ArrowRight } from 'lucide-react';

const featuredArticles = [
  {
    id: 1,
    category: 'Featured Story',
    title: 'Sunrise Sessions: Where Sea Bass Run Wild',
    excerpt: 'Golden hour brings more than just perfect light. Join us as we chase trophy sea bass along the rocky coastline, where patience meets passion.',
    image: 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '8 min read',
    location: 'Newquay, Cornwall'
  },
  {
    id: 2,
    category: 'Coastal BBQ',
    title: 'Grilling Fresh Catch: A Beachside Guide',
    excerpt: 'Nothing beats the taste of fish grilled right on the shore. Master the art of coastal barbecue with our time-tested techniques.',
    image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    location: 'Padstow, Cornwall'
  },
  {
    id: 3,
    category: 'Gear Essentials',
    title: 'The Perfect Pier Fishing Setup',
    excerpt: 'From rods to tackle boxes, discover the essential gear that serious pier anglers swear by for consistent coastal catches.',
    image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    location: 'Brighton Pier'
  },
  {
    id: 4,
    category: 'Local Life',
    title: 'Tales from the Harbor: Old Salts & New Stories',
    excerpt: 'The harbor holds decades of fishing wisdom. Meet the veterans who have made these docks their second home.',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
    location: 'Port Isaac, Cornwall'
  },
  {
    id: 5,
    category: 'Recipe & Smoke',
    title: 'Cedar Plank Salmon: From Tide to Table',
    excerpt: 'Transform your fresh salmon into a smoky, succulent masterpiece with this classic coastal barbecue method.',
    image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min read',
    location: 'Scottish Highlands'
  },
];

export default function FeaturedContent() {
  return (
    <section id="stories" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF8F3] to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <div className="h-px w-12 bg-[#2D7A89]"></div>
            <span className="text-xs font-bold tracking-widest text-[#2D7A89] uppercase">
              Latest from the shore
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2540] mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-[#2C3338]/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Dive into authentic narratives from anglers who live for the water. Real stories, real passion.
          </p>
        </div>

        {/* Main Grid - 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          {/* Left Column - Large Hero Article */}
          <a href="#" className="block group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white shadow-lg">
            <div className="relative h-full overflow-hidden">
              <img
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex items-center px-3 py-1 bg-[#FF6B4A] text-white text-xs font-bold rounded mb-3">
                  {featuredArticles[0].category}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E8DCC4] transition-colors leading-tight">
                  {featuredArticles[0].title}
                </h3>

                <p className="text-[#E8DCC4]/90 text-sm mb-3 leading-relaxed line-clamp-2">
                  {featuredArticles[0].excerpt}
                </p>

                <div className="flex items-center gap-4 text-[#E8DCC4] text-xs">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{featuredArticles[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Right Column - Two Stacked Articles */}
          <div className="grid gap-6">
            {featuredArticles.slice(1, 3).map((article, index) => (
              <a 
                key={article.id} 
                href="#" 
                className="block group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white shadow-lg"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-flex items-center px-3 py-1 bg-[#FF6B4A] text-white text-xs font-bold rounded mb-3">
                      {article.category}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E8DCC4] transition-colors leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-[#E8DCC4]/90 text-sm mb-3 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-[#E8DCC4] text-xs">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Row - Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredArticles.slice(3).map((article) => (
            <a 
              key={article.id} 
              href="#" 
              className="block group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center px-3 py-1 bg-[#FF6B4A] text-white text-xs font-bold rounded mb-3">
                    {article.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E8DCC4] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-[#E8DCC4]/90 text-sm mb-3 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-[#E8DCC4] text-xs">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0A2540] text-white rounded-xl font-semibold hover:bg-[#2D7A89] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <span>View All Stories</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}