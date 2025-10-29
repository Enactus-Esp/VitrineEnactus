import React, { useState } from 'react';
import BackToTop from '../components/ui/BackToTop';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Users, Globe, Award, TrendingUp, Calendar, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtres disponibles
  const filters = [
    { id: 'all', label: 'Tous les projets', icon: Target, color: 'from-blue-500 to-blue-600' },
    { id: 'social', label: 'Impact social', icon: Users, color: 'from-green-500 to-green-600' },
    { id: 'environmental', label: 'Environnement', icon: Globe, color: 'from-emerald-500 to-emerald-600' },
    { id: 'economic', label: 'Développement économique', icon: Award, color: 'from-purple-500 to-purple-600' },
  ];

  // Filtrer les projets
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Statistiques des projets
  const projectStats = [
    { 
      icon: Target, 
      value: projects.length, 
      label: 'Projets Actifs',
      description: 'Solutions innovantes en cours',
      color: 'from-[#FFD800] to-[#ffb300]'
    },
    { 
      icon: Users, 
      value: '500+', 
      label: 'Bénéficiaires',
      description: 'Personnes impactées',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Globe, 
      value: '8+',
      label: 'Communautés',
      description: 'Zones d\'intervention',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: TrendingUp, 
      value: '87,5%', 
      label: 'Taux de succès',
      description: 'Projets réussis',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section moderne */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#FFD800]/10 to-[#ffb300]/20">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#FFD800]/20 to-[#ffb300]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#ffb300]/15 to-[#FFD800]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-blue-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
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
                <span className="text-gray-700 font-semibold text-sm">Projets Enactus ESP</span>
              </motion.div>

              {/* Titre principal */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 mb-8">
                Créons un <span className="bg-gradient-to-r from-[#FFD800] via-[#ffb300] to-[#FF8C00] bg-clip-text text-transparent animate-gradient-shift">
                  Changement Durable
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
                Découvrez comment nos projets créent un impact positif et répondent à des défis concrets 
                grâce à des solutions entrepreneuriales innovantes.
              </p>

              {/* Statistiques rapides */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dégradé de transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Section de filtres et recherche améliorée */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Filtres */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filterItem) => (
                <motion.button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === filterItem.id
                      ? 'bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <filterItem.icon size={18} />
                  {filterItem.label}
                </motion.button>
              ))}
            </div>
            
            {/* Barre de recherche */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-4 focus:ring-[#FFD800]/50 focus:border-[#FFD800] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Projets Courants" 
            subtitle="Découvrez nos solutions innovantes pour répondre aux défis sociaux et environnementaux"
          />
          
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
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
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Aucun projet trouvé</h3>
                <p className="text-gray-500 mb-6">Essayez de modifier vos filtres ou votre recherche</p>
                <button 
                  onClick={() => {
                    setFilter('all');
                    setSearchTerm('');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Voir tous les projets
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Processus de développement de projet amélioré */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Notre Processus de Développement" 
            subtitle="Comment nous transformons les idées en solutions durables et impactantes"
          />
          
          <div className="mt-20 relative">
            {/* Ligne de timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD800] to-[#ffb300] rounded hidden lg:block"></div>
            
            {/* Étapes du processus */}
            <div className="space-y-20">
              {[
                {
                  title: "Ciblage & Analyse",
                  description: "Nous identifions les défis sociaux, économiques et environnementaux dans les communautés en menant des recherches approfondies et en nous engageant directement auprès des parties prenantes.",
                  image: "/Goums femmes.jpg",
                  icon: Target,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Immersion & Empathie",
                  description: "Nous prenons le temps de faire des séjours d'immersion auprès de nos cibles pour mieux comprendre leurs besoins, leurs défis et leurs aspirations.",
                  image: "/immersion.jpg",
                  icon: Users,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Transfert de Technologie",
                  description: "Notre équipe développe des solutions entrepreneuriales innovantes qui s'attaquent aux causes profondes des défis ciblés tout en créant une valeur durable.",
                  image: "/transfert.jpg",
                  icon: Globe,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Impact & Durabilité",
                  description: "Nous mesurons et évaluons le succès de nos projets à travers des indicateurs quantitatifs et qualitatifs, garantissant un changement positif durable.",
                  image: "/Terasen enfant.jpg",
                  icon: Award,
                  color: "from-orange-500 to-red-500"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="lg:grid lg:grid-cols-7 gap-16 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Point de timeline pour desktop */}
                  <div className="hidden lg:flex lg:col-span-1 justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-pulse-glow`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className={`lg:col-span-3 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                    <div className="flex lg:hidden items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <h3 className="text-2xl font-bold hidden lg:block mb-6 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    
                    {/* Métadonnées de l'étape */}
                    <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#FFD800]" />
                        <span>Phase {index + 1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#FFD800]" />
                        <span>Terrain</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={`lg:col-span-3 mt-8 lg:mt-0 ${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      className="relative overflow-hidden rounded-2xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Badge de phase */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                          Phase {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
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
                Prêt à <span className="gradient-text">nous rejoindre</span> ?
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Contribuez à nos projets, partagez vos idées ou rejoignez notre équipe pour créer ensemble 
                un impact positif durable dans les communautés.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rejoindre l'équipe
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nous contacter
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </PageTransition>
  );
};

export default Projects;