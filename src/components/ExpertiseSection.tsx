import React from 'react';
import { Users, Clock, Award, Wrench, Shield, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedCounter from './AnimatedCounter';

const ExpertiseSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation(0.1, 200);
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation(0.1, 400);
  const { ref: statsContainerRef, isVisible: statsContainerVisible } = useScrollAnimation(0.1, 600);

  const expertisePoints = [
    { icon: <Users size={20} />, text: "Techniciens certifiés et qualifiés" },
    { icon: <Award size={20} />, text: "Satisfaction client garantie" },
    { icon: <Wrench size={20} />, text: "Services premium & sur mesure" },
    { icon: <Shield size={20} />, text: "Expertise technique éprouvée" },
    { icon: <Clock size={20} />, text: "Interventions rapides 24h/24" }
  ];

  const keyMetrics = [
    { 
      targetValue: 97, 
      label: "Clients Satisfaits", 
      suffix: "%", 
      icon: <Users size={36} />, 
      delay: 0,
      explanation: "Notre engagement envers l'excellence client nous permet d'atteindre un taux de satisfaction exceptionnel."
    },
    { 
      targetValue: 99, 
      label: "Délais Respectés", 
      suffix: "%", 
      icon: <Clock size={36} />, 
      delay: 100,
      explanation: "Nous garantissons une ponctualité remarquable grâce à notre organisation et notre réactivité."
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#fdf6e3] via-[#fff9e5] to-[#f9f6f2] dark:from-[#171717] dark:via-[#212121] dark:to-[#191919] overflow-hidden">
      {/* Morphing Blobs */}
      <motion.div 
        className="absolute left-[-120px] top-[-90px] w-[320px] h-[320px] bg-gradient-to-tr from-[#FFD700] to-[#D4AF37] rounded-full blur-3xl opacity-50 pointer-events-none"
        animate={{ scale: [1, 1.12, 1], rotate: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Parallax Image with Glass */}
          <motion.div 
            className="relative group"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            {/* Glassmorphism card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/40 dark:bg-black/30 backdrop-blur-lg border border-[#f3e9c1]/60 dark:border-[#FFD700]/20 group-hover:scale-105 transition-transform duration-500">
              <motion.img 
                src="495364369_1228491249282182_84818.jpg"
                alt="Ascenseur de qualité"
                className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
            </div>
            {/* Floating badge with floating/tilt animation */}
            <motion.div
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#1A1A1A] p-6 rounded-2xl shadow-xl font-bold text-center border-2 border-white/60 dark:border-[#FFD700]/40"
              animate={{
                y: [0, -10, 0],
                rotate: [2, -2, 2]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="text-5xl font-extrabold drop-shadow-lg">15+</div>
              <div className="text-xs uppercase tracking-wider font-semibold">années d'expérience</div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Content */}
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* Title */}
              <motion.div
                ref={titleRef}
                initial={{ y: 60, opacity: 0 }}
                animate={titleVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, type: "spring" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 drop-shadow-sm">
                  Expertise & <span className="text-[#D4AF37] ">Engagement</span>
                </h2>
              </motion.div>
              {/* Description */}
              <motion.div
                ref={descRef}
                initial={{ y: 40, opacity: 0 }}
                animate={descVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.2, type: "spring" }}
              >
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                Nous sommes votre partenaire de confiance pour tous vos besoins en ascenseurs, de l'installation à la maintenance, ainsi que pour la vente de pièces détachées. Forts de notre expertise et de notre engagement envers la qualité, nous offrons des solutions adaptées à chaque projet.
                </p>
              </motion.div>
              {/* Expertise List + Contact */}
<div ref={listRef}>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <ul className="space-y-4 mb-6">
        {expertisePoints.map((item, index) => (
          <li 
            key={index}
            className="flex items-start group"
          >
            <span className="flex-shrink-0 mr-3 mt-1 bg-[#FFD700] text-white p-2 rounded-full shadow-lg  transition-all duration-300">
              {item.icon}
            </span>
            <span className="text-gray-800 dark:text-gray-100 font-medium group-hover:text-[#FFD700] transition-all duration-300">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
                    {/* Contact Section */}
                    <motion.div
                      className="flex items-center justify-center p-5 rounded-xl bg-white/70 dark:bg-[#232323]/70 border border-[#FFD700]/40 transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_#FFD700] backdrop-blur-md"
                      whileHover={{ scale: 1.04, boxShadow: "0 0 32px #FFD70070" }}
                    >
                      <Phone size={28} className="mr-4 text-black dark:text-[#FFD700] transition-colors duration-300" />
                      <div className="text-center">
  <p className="font-semibold text-black dark:text-white">
    Une question ? Un projet ? Contactez-nous :
  </p>
  <a href="tel:06 66 03 31 19">
    <p className="text-2xl font-extrabold text-black dark:text-[#FFD700] transition-colors duration-300 hover:text-[#FFD700]">
    06 66 03 31 19
    </p>
  </a>
</div>

                    </motion.div>
                  </div>
                  {/* Animated Stats */}
                  <motion.div
                    ref={statsContainerRef}
                    initial={{ y: 40, opacity: 0 }}
                    animate={statsContainerVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.6, type: "spring" }}
                  >
                    <div className="flex flex-col items-center text-center bg-white/80 dark:bg-[#232323]/80 text-[#1A1A1A] dark:text-[#FFD700] border border-[#FFD700]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 backdrop-blur-sm">
                      {keyMetrics.map((metric, index) => (
                        <motion.div 
                          key={index}
                          className="w-full border-b border-gray-200 dark:border-[#FFD700]/20 py-6 first:pt-0 last:border-b-0 last:pb-0"
                          initial={{ scale: 0.92, opacity: 0 }}
                          animate={statsContainerVisible ? { scale: 1, opacity: 1 } : {}}
                          transition={{ delay: 0.1 * index, duration: 0.5, type: "spring" }}
                        >
                          <span className="flex items-center justify-center">
                            {React.cloneElement(metric.icon, {
                              className: "text-[#FFD700] drop-shadow-lg mb-3 h-12 w-12 animate-glow",
                            })}
                          </span>
                          <AnimatedCounter
                            targetValue={metric.targetValue}
                            label={metric.label}
                            suffix={metric.suffix}
                            className="w-full !bg-transparent !shadow-none !p-0 text-[#FFD700] text-4xl font-bold"
                            delay={statsContainerVisible ? metric.delay : 10000}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{metric.explanation}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add animated gradient on bottom */}
      <div className="absolute left-0 bottom-0 w-full h-16 bg-gradient-to-t from-[#FFD700]/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default ExpertiseSection;