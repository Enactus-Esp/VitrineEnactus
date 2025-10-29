import React, { useState } from 'react';
import BackToTop from '../components/ui/BackToTop';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import NewsCard from '../components/ui/NewsCard';
import { newsItems } from '../data/news';
import { Search, Filter, TrendingUp, Calendar, Users } from 'lucide-react';

import { Helmet } from 'react-helmet-async';

const News: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get unique categories
  const categories = ['All', ...new Set(newsItems.map(item => item.category))];
  
  // Filter news items
  const filteredNews = newsItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Statistiques des actualités
  const stats = [
    { icon: Calendar, value: newsItems.length, label: 'Articles publiés' },
    { icon: Users, value: '500+', label: 'Lecteurs' },
    { icon: TrendingUp, value: '95%', label: 'Engagement' }
  ];

  return (
    <>
      <Helmet>
        <title>Actualités - Enactus Sénégal</title>
        <meta name="description" content="Retrouvez toutes les actualités, événements et projets d'Enactus Sénégal. Restez informé sur notre impact et nos actions." />
        <meta name="keywords" content="Enactus, Sénégal, actualités, news, événements, projets, impact" />
        <meta property="og:title" content="Actualités - Enactus Sénégal" />
        <meta property="og:description" content="Retrouvez toutes les actualités, événements et projets d'Enactus Sénégal. Restez informé sur notre impact et nos actions." />
        <meta property="og:image" content="/cover.png" />
      </Helmet>
      <PageTransition>
      {/* Hero Section moderne */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#FFD800]/10 to-[#ffb300]/20">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#FFD800]/20 to-[#ffb300]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#ffb300]/15 to-[#FFD800]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-blue-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mx-2 sm:mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge d'introduction */}
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-[#FFD800]/20 mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm">Actualités Enactus ESP</span>
              </motion.div>

              {/* Titre principal */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 mb-6 sm:mb-8">
                Restez <span className="bg-gradient-to-r from-[#FFD800] via-[#ffb300] to-[#FF8C00] bg-clip-text text-transparent animate-gradient-shift">
                  Informés
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                Découvrez les dernières nouvelles, événements et mises à jour de nos projets qui transforment les communautés.
              </p>

              {/* Statistiques rapides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 sm:p-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                      <stat.icon size={32} className="text-black" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dégradé de transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Section de filtres et recherche */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category.toLowerCase())}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category.toLowerCase() || (filter === 'all' && category === 'All')
                      ? 'bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter size={18} />
                  {category}
                </motion.button>
              ))}
            </div>
            
            {/* Barre de recherche */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une actualité..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-4 focus:ring-[#FFD800]/50 focus:border-[#FFD800] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille des actualités */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Dernières Actualités" 
            subtitle="Restez à jour avec nos projets, événements et partenariats"
          />
          
          <AnimatePresence mode="wait">
            {filteredNews.length > 0 ? (
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredNews.map((news, index) => (
                  <NewsCard key={news.id} news={news} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Aucune actualité trouvée</h3>
                <p className="text-gray-500 mb-6">Essayez de modifier vos filtres ou votre recherche</p>
                <button 
                  onClick={() => {
                    setFilter('all');
                    setSearchTerm('');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Voir toutes les actualités
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Section Newsletter améliorée */}
      <section className="py-20 bg-gradient-to-br from-[#0a1931] via-[#0a1931]/95 to-[#0a1931] text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#FFD800]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#ffb300]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 hero-text-shadow">
                Ne manquez <span className="gradient-text">aucune actualité</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Abonnez-vous à notre newsletter pour recevoir en avant-première les dernières nouvelles, 
                les événements à venir et les mises à jour de nos projets.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-[#FFD800]/50 focus:border-[#FFD800] transition-all duration-300"
                />
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  S'abonner
                </motion.button>
              </div>
              
              <p className="text-sm text-white/60 mt-6">
                🔒 Vos données sont protégées. Désabonnement en un clic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section des réseaux sociaux */}
      <section className="py-12 sm:py-20 bg-white px-2 sm:px-0">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Suivez-nous" 
            subtitle="Restez connectés sur nos réseaux sociaux pour plus d'actualités"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                platform: 'LinkedIn',
                description: 'Actualités professionnelles et opportunités de partenariat',
                color: 'from-blue-500 to-blue-600',
                icon: '💼'
              },
              {
                platform: 'Instagram',
                description: 'Photos et stories de nos projets sur le terrain',
                color: 'from-pink-500 to-purple-600',
                icon: '📸'
              },
              {
                platform: 'Twitter',
                description: 'Mises à jour en temps réel et discussions',
                color: 'from-blue-400 to-blue-500',
                icon: '🐦'
              }
            ].map((social, index) => (
              <motion.div
                key={social.platform}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{social.platform}</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{social.description}</p>
                <button className={`px-6 py-3 bg-gradient-to-r ${social.color} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}>
                  Suivre
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <BackToTop />
      </PageTransition>
    </>
  );
};

export default News;