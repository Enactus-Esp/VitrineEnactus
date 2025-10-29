import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight, Clock, User } from 'lucide-react';
import { NewsItem } from '../../types';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'Événements':
        return '#4CAF50';
      case 'Financement':
        return '#2196F3';
      case 'Partenariats':
        return '#9C27B0';
      case 'Projets':
        return '#FF9800';
      default:
        return '#607D8B';
    }
  };

  const getCategoryIcon = (category: string): string => {
    switch(category) {
      case 'Événements':
        return '🎉';
      case 'Financement':
        return '💰';
      case 'Partenariats':
        return '🤝';
      case 'Projets':
        return '🚀';
      default:
        return '📰';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-500 mx-1 sm:mx-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image avec overlay */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Badge de catégorie */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-base sm:text-lg">{getCategoryIcon(news.category)}</span>
            <span 
              className="text-[10px] sm:text-xs font-bold text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
              style={{ backgroundColor: getCategoryColor(news.category) }}
            >
              {news.category}
            </span>
          </div>
        </div>

        {/* Bouton d'action flottant */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link 
            to={`/news/${news.id}`}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
          >
            <ArrowRight size={16} className="text-[#0a1931] group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Contenu de la carte */}
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        {/* Métadonnées */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CalendarDays size={14} className="text-[#FFD800] flex-shrink-0" />
            <span className="whitespace-nowrap">{formatDate(news.date)}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock size={12} className="flex-shrink-0" />
            <span>5 min de lecture</span>
          </div>
        </div>
        
        {/* Titre */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#FFD800] transition-colors duration-300 line-clamp-2">
          {news.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
          {news.summary}
        </p>
        
        <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <User size={12} className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[120px] sm:max-w-none">
                Enactus ESP
              </span>
            </div>
            <Link 
              to={`/news/${news.id}`}
              className="text-xs sm:text-sm font-medium text-[#0a1931] hover:text-[#FFD800] flex items-center gap-0.5 sm:gap-1 transition-colors duration-300 group-hover:underline ml-auto sm:ml-0"
            >
              Lire la suite
              <ArrowRight size={14} className="group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default NewsCard;