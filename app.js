import React, { useState } from 'react';
import { Search, Heart, Star, ChefHat, Coffee, Cake, Sparkles } from 'lucide-react';

export default function FoodGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [likedItems, setLikedItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: Sparkles },
    { id: 'desserts', name: 'Desserts', icon: Cake },
    { id: 'drinks', name: 'Drinks', icon: Coffee },
    { id: 'food', name: 'Food', icon: ChefHat },
  ];

  const foodItems = [
    { id: 1, name: 'Delicious Delight', category: 'desserts', rating: 4.9, image: '1.jpg', description: 'Sweet perfection' },
    { id: 2, name: 'Gourmet Creation', category: 'food', rating: 4.8, image: '2.jpg', description: 'Culinary masterpiece' },
    { id: 3, name: 'Sweet Sensation', category: 'desserts', rating: 4.7, image: '3.jpg', description: 'Heavenly treat' },
    { id: 4, name: 'Artisan Dish', category: 'food', rating: 5.0, image: '4.jpg', description: 'Handcrafted excellence' },
    { id: 5, name: 'Premium Treat', category: 'desserts', rating: 4.9, image: '5.jpg', description: 'Indulgent pleasure' },
    { id: 6, name: 'Specialty Plate', category: 'food', rating: 4.6, image: '6.jpg', description: 'Chef\'s special' },
    { id: 7, name: 'Decadent Dessert', category: 'desserts', rating: 4.8, image: '7.jpg', description: 'Pure bliss' },
    { id: 8, name: 'Signature Dish', category: 'food', rating: 4.7, image: '8.jpg', description: 'House favorite' },
    { id: 9, name: 'Divine Delicacy', category: 'drinks', rating: 4.9, image: '9.jpg', description: 'Refreshing blend' },
    { id: 11, name: 'Exquisite Flavor', category: 'desserts', rating: 4.8, image: '11.jpg', description: 'Tasteful creation' },
    { id: 12, name: 'Gourmet Selection', category: 'food', rating: 4.9, image: '12.jpg', description: 'Fine dining' },
    { id: 13, name: 'Sweet Elegance', category: 'desserts', rating: 5.0, image: '13.jpg', description: 'Refined sweetness' },
    { id: 14, name: 'Culinary Art', category: 'food', rating: 4.7, image: '14.jpg', description: 'Plated perfection' },
    { id: 15, name: 'Heavenly Bite', category: 'desserts', rating: 4.8, image: '15.jpg', description: 'Divine taste' },
    { id: 16, name: 'Chef\'s Pride', category: 'food', rating: 4.9, image: '16.jpg', description: 'Premium quality' },
    { id: 17, name: 'Ultimate Indulgence', category: 'drinks', rating: 4.6, image: '17.jpg', description: 'Perfect finish' },
  ];

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Premium Food Gallery ✨
            </div>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">
              Delicious Bites
            </h1>
            <p className="text-2xl opacity-90 mb-10 font-light">
              Discover culinary perfection in every frame
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for delicious treats..."
                className="w-full px-8 py-5 rounded-full text-gray-800 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 transition-all text-lg"
              />
              <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-500 transition-colors" size={26} />
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold">17+</div>
                <div className="text-sm opacity-80">Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">4.8★</div>
                <div className="text-sm opacity-80">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{likedItems.size}</div>
                <div className="text-sm opacity-80">Favorites</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg text-lg ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-105 shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={22} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-orange-600">{filteredItems.length}</span> delicious items
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Like Button */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                >
                  <Heart
                    size={24}
                    className={`transition-all duration-300 ${
                      likedItems.has(item.id) ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-1.5 shadow-lg">
                  <Star size={18} className="fill-gray-900" />
                  <span className="text-lg">{item.rating}</span>
                </div>

                {/* Hover Overlay Text */}
                <div className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-300 ${
                  hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-sm font-medium">{item.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="capitalize bg-gray-100 px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                
                {/* Hover Action Button */}
                <div className={`mt-4 transition-all duration-300 ${
                  hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Delicious Bites
            </h3>
            <p className="text-gray-400 text-lg">Crafted with love, served with passion</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="hover:text-orange-400 transition-colors font-medium">About Us</a>
            <a href="#" className="hover:text-orange-400 transition-colors font-medium">Full Menu</a>
            <a href="#" className="hover:text-orange-400 transition-colors font-medium">Contact</a>
            <a href="#" className="hover:text-orange-400 transition-colors font-medium">Gallery</a>
            <a href="#" className="hover:text-orange-400 transition-colors font-medium">Events</a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            © 2025 Delicious Bites. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}