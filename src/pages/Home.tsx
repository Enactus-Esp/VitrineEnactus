import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Target, ChevronRight, Quote, Award } from 'lucide-react';
import { motion } from 'framer-motion';
// Témoignages
const testimonials = [
  {
    name: 'Mariama Diop',
    role: 'Enactrice',
    text: "Enactus m'a permis de développer mon leadership et d'avoir un impact concret dans ma communauté !",
    image: '/IMG_8167.jpg',
  },
  {
    name: 'Anna Sarr',
    role: 'Partenaire',
    text: "Une équipe dynamique et engagée, toujours à la recherche de solutions innovantes.",
    image: '/victoire25.jpg',
  },
  {
    name: 'Mme Dhiediou',
    role: 'Bénéficiaire',
    text: "Grâce à Enactus, j'ai pu bénéficier d'une activité qui a changé ma vie.",
    image: '/femmes maeva.jpg',
  },
];



import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';

import { projects } from '../data/projects';
import { aboutData } from '../data/about';

const Home: React.FC = () => {
  // ...existing code...
  // Helper to clean numbers (remove spaces, handle string/number)
  const cleanNumber = (val: string | number) => {
    if (typeof val === 'string') {
      return Number(val.replace(/\s/g, ''));
    }
    return val;
  };
  // Slider témoignages
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ...existing code...

  return (
      <>
        <Helmet>
          <title>Enactus Sénégal - Entrepreneurial Action for a Better World</title>
          <meta name="description" content="Enactus Sénégal crée un impact positif durable à travers l'innovation entrepreneuriale et l'engagement communautaire. Découvrez nos projets, notre équipe et notre vision." />
          <meta name="keywords" content="Enactus, Sénégal, entrepreneuriat, impact, projets, développement durable, étudiants, innovation" />
          <meta property="og:title" content="Enactus Sénégal - Entrepreneurial Action for a Better World" />
          <meta property="og:description" content="Enactus Sénégal crée un impact positif durable à travers l'innovation entrepreneuriale et l'engagement communautaire." />
          <meta property="og:image" content="/cover.png" />
        </Helmet>
        <PageTransition>
      {/* Hero Section - Lumineux et Moderne */}
      <section className="py-12 sm:py-20 bg-white px-2 sm:px-0">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Formes géométriques colorées */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#FFD800]/30 to-[#ffb300]/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-r from-[#ffb300]/20 to-[#FFD800]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/40 to-blue-300/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenu principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge d'introduction */}
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                </motion.div>

              {/* Titre principal */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 mb-6 sm:mb-8">
                Entrepreneurial <br />
                <span className="bg-gradient-to-r from-[#FFD800] via-[#ffb300] to-[#FF8C00] bg-clip-text text-transparent animate-gradient-shift">
                  Action
                </span> for a <br />
                <span className="text-gray-700">Better World</span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
                Nous créons un <strong className="text-[#FFD800]">impact positif durable</strong> à travers l'innovation entrepreneuriale et l'engagement communautaire.
              </p>

              {/* Statistiques rapides */}
                <div className="flex gap-6 pt-4">
                  {[
                    { number: aboutData.impact.viesTouchées, label: 'Vies Touchées', icon: Users },
                    { number: aboutData.impact.personnesFormées, label: 'Personnes Formées', icon: Globe }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <stat.icon size={28} className="text-black" />
                      </div>
                      <div className="text-2xl font-black mb-1 text-[#FFD800]">
                        {typeof stat.number === 'string' ? cleanNumber(stat.number) : stat.number}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link to="/projects">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="group bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4">
                      Découvrir nos projets
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50 hover:border-[#FFD800] font-bold shadow-lg transition-all duration-300 px-8 py-4">
                      Rejoins notre équipe
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Section visuelle */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              {/* Carte principale avec image d'équipe */}
              <div className="relative">
                <motion.div 
                  className="bg-white rounded-3xl shadow-2xl p-8 max-w-md"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/cover.png" 
                    alt="Enactus ESP en Action" 
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Enactus ESP en Action</h3>
                    <p className="text-gray-600">Découvrez notre engagement terrain et nos projets qui transforment les communautés.</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-0">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-gray-500 ml-2">Impact sur le terrain</span>
                    </div>
                  </div>
                </motion.div>

                {/* Éléments décoratifs flottants */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-2xl opacity-80 rotate-12"
                  animate={{ rotate: [12, 24, 12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-70"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dégradé de transition en bas */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Mission & Vision Section - Améliorée */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl"
              >
                <SectionHeader 
                  title="Notre Mission & Vision"
                  subtitle="Créer de l'impact positif à travers l'action entrepreneuriale"
                />
                <div className="space-y-8 mt-12">
                  <motion.div 
                    className="border-l-4 border-[#FFD800] pl-8 py-8 bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl"
                    whileHover={{ x: 8, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFD800] tracking-tight">Notre mission</h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">{aboutData.mission}</p>
                  </motion.div>
                  <motion.div 
                    className="border-l-4 border-[#FFD800] pl-8 py-8 bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl"
                    whileHover={{ x: 8, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFD800] tracking-tight">Notre vision</h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">{aboutData.vision}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Image avec animation */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10">
                <img 
                  src="/enactusImg.png" 
                  alt="Enactus ESP Team" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Éléments décoratifs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-[#ffb300] to-[#FFD800] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projets en vedette */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto container-padding">
          <SectionHeader 
            title="Projets en Vedette" 
            subtitle="Découvrez nos initiatives les plus impactantes"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold shadow-xl hover:from-[#ffb300] hover:to-[#FFD800] transition-all duration-300 transform hover:scale-105">
                Voir tous nos projets
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Impact & Statistiques */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#0a1931] via-[#0a1931]/95 to-[#0a1931] text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#FFD800]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ffb300]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Notre <span className="gradient-text">Impact</span> en Chiffres
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Découvrez l'étendue de notre impact à travers des statistiques concrètes et des réalisations mesurables.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { number: aboutData.impact.projets, label: 'Projets Réalisés', icon: Target },
              { number: aboutData.impact.viesTouchées, label: 'Vies Touchées', icon: Users },
              { number: aboutData.impact.personnesFormées, label: 'Personnes Formées', icon: Globe },
              { number: aboutData.impact.augmentationDeRevenus, label: 'Augmentation de Revenus', icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <stat.icon size={40} className="text-black" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-3 text-[#FFD800]">
                  {typeof stat.number === 'string' && stat.number.match(/%|\$/)
                    ? stat.number // Affiche les pourcentages et montants tels quels
                    : cleanNumber(stat.number)}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto container-padding">
          <SectionHeader 
            title="Témoignages" 
            subtitle="Ce que disent nos partenaires et bénéficiaires"
          />
          
          <div className="mt-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Témoignage actuel */}
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Image */}
                  <div className="lg:w-1/3">
                    <div className="relative">
                      <img 
                        src={testimonials[testimonialIdx].image} 
                        alt={testimonials[testimonialIdx].name}
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl"
                      />
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center">
                        <Quote size={32} className="text-black" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="max-w-4xl mx-auto text-center lg:text-left">
                    <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed italic">
                      "{testimonials[testimonialIdx].text}"
                    </blockquote>
                    <div>
                      <div className="text-xl font-bold text-[#0a1931] mb-2">
                        {testimonials[testimonialIdx].name}
                      </div>
                      <div className="text-[#FFD800] font-medium">
                        {testimonials[testimonialIdx].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Indicateurs */}
              <div className="flex justify-center mt-12 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIdx(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === testimonialIdx 
                        ? 'bg-[#FFD800] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-gradient-to-br from-[#FFD800] to-[#ffb300] relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto container-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
              Prêt à <span className="text-white">Changer le Monde</span> ?
            </h2>
            <p className="text-xl text-black/80 mb-12 max-w-3xl mx-auto">
              Rejoignez notre équipe d'entrepreneurs sociaux et participez à la création d'un avenir plus durable et équitable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-black text-white font-bold shadow-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  Découvrir nos projets
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-3 border-black text-black bg-transparent hover:bg-black hover:text-white font-bold shadow-xl transition-all duration-300 transform hover:scale-105">
                  Nous rejoindre
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </PageTransition>
    </>
  );
};

export default Home;