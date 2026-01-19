
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { modulesData } from '@/lib/data';

const ModuleDetail = () => {
  const { id } = useParams();
  const module = modulesData.find(m => m.slug === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!module) {
    return <Navigate to="/what-we-do" replace />;
  }

  const Icon = module.icon;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>{module.title} | RebelCreator OS™</title>
        <meta name="description" content={module.description} />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            
            <Link to="/what-we-do" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-sky-600 mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Modules
            </Link>

            {/* Header */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-20 max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 flex-wrap">
                 <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-200">
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                        Module {module.id.toString().padStart(2, '0')}
                    </span>
                 </div>
                 
                 {module.badge && (
                    <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full border border-amber-200 text-xs font-bold uppercase tracking-wide">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        {module.badge}
                    </div>
                 )}
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
                {module.title}
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-slate-500 leading-relaxed font-medium">
                {module.description}
              </motion.p>
            </motion.div>

            {/* Features */}
            <div className="grid gap-12">
              {module.features.map((feature, idx) => (
                <motion.section 
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden ${feature.badge ? 'ring-2 ring-amber-200 ring-offset-4 ring-offset-slate-50' : ''}`}
                >
                  <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/30">
                    <div className="flex items-start justify-between">
                      <div>
                         <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className="text-2xl md:text-3xl font-bold text-sky-500">{feature.id}</span>
                            {feature.badge && (
                                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                    {feature.badge}
                                </span>
                            )}
                         </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                          {feature.title}
                        </h3>
                        {feature.description && (
                          <p className="mt-4 text-slate-600 text-lg max-w-3xl leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10 bg-white">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
                      {feature.subFeatures.map((sub, sIdx) => {
                        // Handle both string subfeatures and object subfeatures
                        const isObject = typeof sub === 'object';
                        const title = isObject ? sub.name : sub;
                        const desc = isObject ? sub.desc : null;

                        return (
                          <div key={sIdx} className="space-y-3">
                            <h4 className="font-bold text-slate-900 flex items-center gap-3 text-lg">
                              <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                              {title}
                            </h4>
                            {desc && (
                              <p className="text-base text-slate-500 leading-relaxed pl-8">
                                {desc}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ModuleDetail;
