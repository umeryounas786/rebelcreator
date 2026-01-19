import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, CheckCircle2, Search, Database } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Module1Page = () => {
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
        <title>Influencer Intelligence System | RebelCreator OS™</title>
        <meta name="description" content="Discover, analyze, and manage creators with the world's most advanced Influencer Intelligence System." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-20 max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-200">
                    <Brain className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Module 01
                 </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
                Influencer Intelligence <br/>System
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-slate-500 leading-relaxed font-medium">
                The foundational layer of RebelCreator OS™. This module uses advanced machine learning to identify, vet, and organize creator talent with unprecedented precision.
              </motion.p>
            </motion.div>

            {/* Features */}
            <div className="grid gap-16">
              
              {/* Feature 1.1 */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/30">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="text-sky-500">1.1</span> Influencer Avatar Engine
                      </h3>
                      <p className="mt-4 text-slate-600 text-lg max-w-3xl">
                        A proprietary classification engine that goes beyond basic demographics. It analyzes content semantics to determine the true "Avatar" of a creator.
                      </p>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-sky-100 text-sky-600 items-center justify-center">
                      <Brain className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 bg-white">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sky-500" />
                        Auto-classification
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Analyzes creators' content and assigns communication style, niche, and funnel position automatically using NLP.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sky-500" />
                        Avatar Library
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Access pre-defined creator types like Local Expert, Tutorial Maker, Trendsetter, and Comedian to match campaign goals.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sky-500" />
                        Avatar Scoring
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        AI-driven scoring that rates how well a creator fits a specific archetype or brand voice requirement.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sky-500" />
                        Look-alike Matching
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Discover similar creators based on content style and audience engagement patterns, not just hashtags.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sky-500" />
                        Campaign Recommendations
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Intelligent suggestions for the best avatar types to deploy for specific campaign objectives (e.g., Awareness vs. Conversion).
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Feature 1.2 */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/30">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="text-sky-500">1.2</span> Creator Discovery
                      </h3>
                      <p className="mt-4 text-slate-600 text-lg max-w-3xl">
                        A search engine built for precision. Find the hidden gems that other platforms miss by filtering through noise with AI validation.
                      </p>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-sky-100 text-sky-600 items-center justify-center">
                      <Search className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 bg-white">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-900">Search Capabilities</h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                          <div>
                            <span className="font-semibold text-slate-700 block mb-1">Search by Niche/Avatar/Region</span>
                            <span className="text-slate-500 text-sm">Quickly find influencers by combining granular filters including specific city regions and content avatars.</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                          <div>
                            <span className="font-semibold text-slate-700 block mb-1">AI Content Scanner</span>
                            <span className="text-slate-500 text-sm">Automatically reviews historical posts for visual style, image quality, and brand safety/authenticity.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-900">Analysis & Vetting</h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                          <div>
                            <span className="font-semibold text-slate-700 block mb-1">Fake Follower Detection</span>
                            <span className="text-slate-500 text-sm">Deep-scan technology that flags suspicious growth patterns and bot engagement to protect your budget.</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                          <div>
                            <span className="font-semibold text-slate-700 block mb-1">Demographic & Psychographic Analysis</span>
                            <span className="text-slate-500 text-sm">Understand audience interests, locations, purchasing behavior, and lifestyle affinities.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Feature 1.3 */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/30">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="text-sky-500">1.3</span> Creator CRM
                      </h3>
                      <p className="mt-4 text-slate-600 text-lg max-w-3xl">
                        The central nervous system for your relationships. Move beyond spreadsheets to a dynamic, historical record of every interaction.
                      </p>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-sky-100 text-sky-600 items-center justify-center">
                      <Database className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 bg-white">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Creator Profiles</h4>
                      <p className="text-sm text-slate-500">Centralized profiles containing all contact info, shipping addresses, payment details, and historical data.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Collaboration History</h4>
                      <p className="text-sm text-slate-500">Track every past campaign, post, and story associated with a creator to monitor long-term value.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Pricing Database</h4>
                      <p className="text-sm text-slate-500">Store and track creator rates over time, including negotiated discounts and package deals.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Segmentation & Tagging</h4>
                      <p className="text-sm text-slate-500">Group creators by performance tier, niche, exclusivity status, or custom tags for easy retrieval.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Status Tracking</h4>
                      <p className="text-sm text-slate-500">Real-time monitoring of creator status (e.g., Contacted, Negotiating, Active, Blacklisted).</p>
                    </div>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Module1Page;