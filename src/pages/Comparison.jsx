import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, X, Scale, AlertCircle, Lightbulb, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const Comparison = () => {
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

  // Helper components for table cells
  const CheckMark = () => (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <Check className="w-5 h-5 text-green-600" />
      </div>
    </div>
  );

  const CrossMark = () => (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
        <X className="w-5 h-5 text-slate-400" />
      </div>
    </div>
  );

  const PartialMark = () => (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
        <div className="text-amber-600 font-bold text-lg leading-none">◑</div>
      </div>
    </div>
  );

  const features = [
    { name: "Avatar-based Creator Intelligence", rebel: true, upfluence: "partial", creatoriq: "partial", sprout: "partial", traackr: "partial", archive: false },
    { name: "AI-Built Campaigns (Text-to-Campaign)", rebel: true, upfluence: false, creatoriq: false, sprout: false, traackr: false, archive: false },
    { name: "UGC Creation, Scoring & Curation", rebel: true, upfluence: "partial", creatoriq: "partial", sprout: false, traackr: false, archive: true },
    { name: "Multilingual Cultural & Sentiment Intel", rebel: true, upfluence: false, creatoriq: "partial", sprout: true, traackr: false, archive: false },
    { name: "Real Revenue Attribution (Online + Offline)", rebel: true, upfluence: false, creatoriq: false, sprout: false, traackr: false, archive: false },
    { name: "Pre-Ad Performance Simulator™", rebel: true, upfluence: false, creatoriq: false, sprout: false, traackr: false, archive: false },
    { name: "AI Optimization & Targeting", rebel: true, upfluence: "partial", creatoriq: true, sprout: false, traackr: true, archive: false },
    { name: "Agency & Multi-Client Workspace", rebel: true, upfluence: true, creatoriq: true, sprout: true, traackr: true, archive: "partial" },
    { name: "Unbiased (Not an Ad Network)", rebel: true, upfluence: true, creatoriq: true, sprout: true, traackr: true, archive: true },
  ];

  const renderCell = (value) => {
    if (value === true) return <CheckMark />;
    if (value === false) return <CrossMark />;
    if (value === "partial") return <PartialMark />;
    return <CrossMark />;
  };

  return (
    <>
      <Helmet>
        <title>Comparison | RebelCreator OS™ vs Competitors</title>
        <meta name="description" content="See how RebelCreator OS™ stacks up against Upfluence, CreatorIQ, Sprout Social, Traackr, and Archive." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Header */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-12 text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-200">
                    <Scale className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Competitive Analysis
                 </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Why Top Brands Switch to <br/> RebelCreator OS™
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-slate-500 leading-relaxed font-medium">
                The only platform that combines enterprise-grade discovery with generative AI execution and deep offline attribution.
              </motion.p>
            </motion.div>

            {/* Key Insights Section */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-20 grid md:grid-cols-12 gap-6"
            >
              {/* Main Insight */}
              <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center gap-8 border border-slate-700">
                <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Critical Difference</h3>
                  <p className="text-xl leading-relaxed text-slate-200 font-medium">
                    "RebelCreator OS™ is the only platform focused on <span className="text-sky-400 font-bold">decision intelligence before spend</span>, not just reporting after."
                  </p>
                </div>
              </motion.div>

              {/* Competitor Gaps */}
              <div className="md:col-span-12 grid md:grid-cols-5 gap-6"> 
                
                {/* Upfluence Gap */}
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    <h4 className="font-bold text-slate-900">Upfluence Gap</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Helps you run influencer campaigns, but <span className="font-bold text-slate-800">does not predict or protect outcomes</span> before launch.
                  </p>
                </motion.div>

                {/* CreatorIQ Gap */}
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border-l-4 border-rose-500 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-rose-500" />
                    <h4 className="font-bold text-slate-900">CreatorIQ Gap</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Tells you <span className="font-bold text-slate-800">what happened, not what will happen</span> — and requires heavy human input to operate effectively.
                  </p>
                </motion.div>

                {/* Traackr Gap */}
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border-l-4 border-purple-500 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-purple-500" />
                    <h4 className="font-bold text-slate-900">Traackr Gap</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Optimizes existing campaigns, but <span className="font-bold text-slate-800">doesn't help users decide safely</span> before launching initially.
                  </p>
                </motion.div>

                {/* Archive Gap */}
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-bold text-slate-900">Archive Gap</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Archive solves content sourcing, not <span className="font-bold text-slate-800">marketing decision-making</span>.
                  </p>
                </motion.div>
                
                {/* Sprout Social Gap */}
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-bold text-slate-900">Sprout Social Gap</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sprout Social is excellent for monitoring, not for <span className="font-bold text-slate-800">predictive influencer or ad intelligence</span>.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Why RebelCreator OS™ Is the Strongest Platform Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="mb-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200"
            >
              {/* Background effects */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold border border-sky-500/30">
                    The Verdict
                  </span>
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-10 text-center tracking-tight">
                  Why RebelCreator OS™ Is the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Strongest Platform</span>
                </motion.h2>

                <motion.div variants={itemVariants} className="bg-slate-800/50 rounded-2xl p-8 md:p-10 mb-12 border border-slate-700 backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-normal leading-relaxed text-center text-slate-300">
                    In simple terms: <span className="opacity-70">Others help you find influencers, Others help you run campaigns, Others help you analyze results,</span> <br className="hidden lg:block" />
                    <span className="text-white font-bold block mt-6 text-2xl md:text-4xl">RebelCreator OS™ helps you decide — <span className="text-sky-400">before you spend.</span></span>
                  </h3>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center mb-8">
                    <p className="text-lg text-slate-400 font-medium">It is the only platform that combines:</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {[
                    "Creator intelligence (avatars)",
                    "AI campaign building",
                    "UGC automation",
                    "Cultural & audience insight",
                    "Revenue-level attribution",
                    "Predictive pre-ad analytics"
                  ].map((capability, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700/80 transition-colors p-4 md:p-5 rounded-xl border border-slate-700/50 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/30 transition-colors">
                            <Check className="w-4 h-4 text-sky-400" />
                        </div>
                        <span className="font-semibold text-slate-200 text-sm md:text-base">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="overflow-x-auto pb-12"
            >
              <div className="min-w-[1200px] bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-6 w-1/4 font-bold text-slate-900 text-lg sticky left-0 bg-slate-50 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                        Feature
                      </th>
                      <th className="p-6 text-center bg-sky-50/50 border-b-4 border-sky-500">
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-extrabold text-sky-700 text-xl">RebelCreator OS™</span>
                          <span className="text-xs font-semibold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">Your Choice</span>
                        </div>
                      </th>
                      <th className="p-6 text-center font-bold text-slate-600">Upfluence</th>
                      <th className="p-6 text-center font-bold text-slate-600">CreatorIQ</th>
                      <th className="p-6 text-center font-bold text-slate-600">Sprout Social</th>
                      <th className="p-6 text-center font-bold text-slate-600">Traackr</th>
                      <th className="p-6 text-center font-bold text-slate-600">Archive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className={cn("hover:bg-slate-50/50 transition-colors", index !== features.length - 1 ? "border-b border-slate-100" : "")}>
                        <td className="p-6 font-semibold text-slate-700 sticky left-0 bg-white z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r border-slate-100">
                          {feature.name}
                        </td>
                        <td className="p-6 bg-sky-50/20 border-x border-sky-100 font-bold">
                          {renderCell(feature.rebel)}
                        </td>
                        <td className="p-6 text-slate-500">{renderCell(feature.upfluence)}</td>
                        <td className="p-6 text-slate-500">{renderCell(feature.creatoriq)}</td>
                        <td className="p-6 text-slate-500">{renderCell(feature.sprout)}</td>
                        <td className="p-6 text-slate-500">{renderCell(feature.traackr)}</td>
                        <td className="p-6 text-slate-500">{renderCell(feature.archive)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex gap-6 text-sm text-slate-500 font-medium justify-center">
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center"><Check className="w-3 h-3 text-green-600" /></div> Full Support</div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center"><div className="text-amber-600 text-[10px] leading-none">◑</div></div> Partial / Limited</div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center"><X className="w-3 h-3 text-slate-400" /></div> No Support</div>
              </div>
            </motion.div>

            {/* Competitor Breakdown */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
            >
              {/* Upfluence */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-slate-400" />
                  <h3 className="font-bold text-xl text-slate-900">Upfluence</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Strong e-commerce integration and database search. Good for finding influencers, but lacks the deep AI predictive modeling and "Pre-Ad Simulation" capabilities of RebelCreator OS™.
                </p>
              </motion.div>

              {/* CreatorIQ */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-slate-400" />
                  <h3 className="font-bold text-xl text-slate-900">CreatorIQ</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The enterprise standard for relationship management. Robust but complex. It excels at CRM but falls short on generative AI content creation and offline revenue attribution.
                </p>
              </motion.div>

              {/* Sprout Social */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                   <Zap className="w-6 h-6 text-slate-400" />
                   <h3 className="font-bold text-xl text-slate-900">Sprout Social</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Primarily a social media management suite. Influencer features (via Tagger) are an add-on. Great for social listening, but lacks the specialized "Avatar" intelligence and campaign automation depth.
                </p>
              </motion.div>

              {/* Traackr */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-slate-400" />
                  <h3 className="font-bold text-xl text-slate-900">Traackr</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A veteran in IRM (Influencer Relationship Management). Excellent for data and compliance, but less focused on the creative workflow, UGC automation, and predictive outcomes.
                </p>
              </motion.div>

              {/* Archive */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-slate-400" />
                  <h3 className="font-bold text-xl text-slate-900">Archive</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Specialized tool for automatically saving Instagram stories and UGC. Brilliant for content curation, but not a full-suite platform for discovery, outreach, or multi-channel attribution.
                </p>
              </motion.div>
              
               {/* RebelCreator Summary */}
               <motion.div variants={itemVariants} className="bg-sky-50 p-8 rounded-2xl border border-sky-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <AlertCircle className="w-24 h-24 text-sky-500" />
                </div>
                <h3 className="font-bold text-xl text-sky-900 mb-2 relative z-10">The RebelCreator Difference</h3>
                <p className="text-sky-800 text-sm leading-relaxed relative z-10">
                  We don't just manage creators; we predict their performance. Our unique combination of Avatar-based intelligence, offline attribution, and pre-ad simulation makes us the only true OS for modern influence.
                </p>
              </motion.div>

            </motion.div>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Comparison;