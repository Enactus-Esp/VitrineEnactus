import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import PageTransition from '../components/ui/PageTransition';
import BackToTop from '../components/ui/BackToTop';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { ContactFormData } from '../types';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide";
    }
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Remplacer par votre endpoint Formspree (ex: https://formspree.io/f/xxxxxxx)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (err) {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-[#FFD800]/20 mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm">Contactez-nous</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 mb-6 sm:mb-8">
                Parlons de <span className="bg-gradient-to-r from-[#FFD800] via-[#ffb300] to-[#FF8C00] bg-clip-text text-transparent animate-gradient-shift">
                  vos projets
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                Prêt à rejoindre notre équipe ou à collaborer sur un projet ? 
                Contactez-nous et discutons de la façon dont nous pouvons créer un impact ensemble.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-16">
                {[
                  { icon: Mail, value: '24h', label: 'Temps de réponse' },
                  { icon: Phone, value: '100%', label: 'Disponibilité' },
                  { icon: Send, value: '5+', label: 'Projets réalisés' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="mt-0 sm:mt-1 w-16 h-16 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <stat.icon size={32} className="text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      <section className="py-12 sm:py-20 bg-white px-2 sm:px-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <SectionHeader 
                title="Prenez Contact" 
                subtitle="Nous sommes là pour répondre à toutes vos questions" 
              />
              <div className="space-y-6 sm:space-y-8 mt-8">
                <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <MapPin className="text-enactus-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Localisation</h3>
                    <p className="text-neutral-600">École Supérieure Polytechnique de Dakar</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <Mail className="text-enactus-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:enactus.esp@gmail.com" className="text-neutral-600 hover:text-enactus-yellow transition-colors">enactus.esp@gmail.com</a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    <Phone className="text-enactus-yellow" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+221781234567" className="text-neutral-600 hover:text-enactus-yellow transition-colors">+221 78 010 30 50</a>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-12">
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-neutral-100 hover:bg-enactus-yellow p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-enactus-yellow p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-neutral-100 hover:bg-enactus-yellow p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <SectionHeader 
                title="Envoyez-nous un Message" 
                subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons rapidement" 
              />
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6"
                >
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-green-800">Message Envoyé !</h3>
                  </div>
                  <p className="mt-2 text-green-700">
                    Merci de nous avoir contacté. Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-4 text-green-600 font-medium hover:text-green-800 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Votre Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD800] focus:border-[#FFD800] transition duration-200 text-sm sm:text-base ${
                        errors.name 
                          ? 'border-red-300 focus:ring-red-200' 
                          : 'border-neutral-300 focus:ring-enactus-yellow/30 focus:border-enactus-yellow'
                      }`}
                      placeholder="Matar Fall"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD800] focus:border-[#FFD800] transition duration-200 text-sm sm:text-base ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-200' 
                          : 'border-neutral-300 focus:ring-enactus-yellow/30 focus:border-enactus-yellow'
                      }`}
                      placeholder="matar@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD800] focus:border-[#FFD800] transition duration-200 text-sm sm:text-base ${
                        errors.subject 
                          ? 'border-red-300 focus:ring-red-200' 
                          : 'border-neutral-300 focus:ring-enactus-yellow/30 focus:border-enactus-yellow'
                      }`}
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD800] focus:border-[#FFD800] transition duration-200 text-sm sm:text-base ${
                        errors.message 
                          ? 'border-red-300 focus:ring-red-200' 
                          : 'border-neutral-300 focus:ring-enactus-yellow/30 focus:border-enactus-yellow'
                      }`}
                      placeholder="Votre message ici..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  <div>
                    <Button 
                      type="submit" 
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className={`${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" />
                          Envoyer le Message
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <motion.section
        className="py-16 bg-neutral-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Visitez-nous" 
            subtitle="Retrouvez-nous sur le campus"
            centered
          />
          <motion.div
            className="mt-8 h-96 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <iframe
              title="Carte ESP Dakar (Google Maps)"
              src="https://www.google.com/maps?q=Ecole+Sup%C3%A9rieure+Polytechnique+Dakar&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <motion.div
            className="text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://www.google.com/maps/place/Ecole+Sup%C3%A9rieure+Polytechnique+Dakar/@14.6935,-17.4670,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-enactus-yellow underline hover:text-amber-500"
            >
              Voir sur Google Maps
            </a>
          </motion.div>
        </div>
      </motion.section>
      <section className="py-12 sm:py-20 bg-gray-50 px-2 sm:px-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Rejoignez Notre Équipe
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Vous êtes passionné par l'entrepreneuriat et l'impact social ? Nous recherchons toujours des étudiants dévoués pour rejoindre nos projets. Restez à l'affût pour le prochain recrutement!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                size="lg" 
                variant="primary" 
                className="bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Postuler
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                En Savoir Plus
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <BackToTop />
    </PageTransition>
  );
}

export default Contact;