
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  ChevronRight,
  Zap,
  ShieldCheck,
  BarChart3,
  Globe,
  CheckCircle2,
  Cpu,
  Video,
  ShoppingBag,
  Users,
  TrendingUp,
  MousePointerClick
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { modulesData } from '@/lib/data';
import { Button } from '@/components/ui/button';

function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const letterContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const letterAnimation = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  const Headline = ({ text }) => (
    <motion.h1 
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl max-w-5xl mx-auto"
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-3 md:mr-4 whitespace-nowrap">
          {word.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );

  return (
    <>
      <Helmet>
        <title>RebelCreator OS™ - The Premium Influencer Operating System</title>
        <meta name="description" content="Turn Influence Into Predictable Profit with the world's most robust Influencer & UGC Operating System." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <motion.div style={{ y: y1 }} className="absolute inset-0">
               <img 
                 src="https://images.unsplash.com/photo-1684610528117-2db5a820b0b9?q=80&w=2940&auto=format&fit=crop" 
                 alt="Abstract Background" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/85 to-slate-950/95" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
            </motion.div>
          </div>

          {/* Abstract Geometric Shapes */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] z-0 mix-blend-screen pointer-events-none" 
          />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] z-0 animate-pulse mix-blend-screen pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center h-full pt-12 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-8 hover:bg-white/10 transition-colors shadow-2xl shadow-indigo-900/20"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
              RebelCreator OS™ v2.0 Live
            </motion.div>

            <Headline text="Turn Influence Into Predictable Profit" />

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-10 drop-shadow-md"
            >
              Leverage the RebelCreator—an AI-powered suite of modules that transform influencer chaos into measurable ROI, cultural fit, and campaign certainty.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            >
              <Link to="/what-we-do">
                <Button size="lg" className="rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 hover:text-indigo-700 shadow-[0_0_30px_rgba(255,255,255,0.2)] px-8 h-14 text-base">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="rounded-full border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/50 px-8 h-14 text-base">
                <Play className="mr-2 h-4 w-4 fill-white" /> View Architecture
              </Button>
            </motion.div>
          </div>

          {/* Prominent Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white z-20 cursor-pointer group"
            onClick={() => document.getElementById('emotional-hook').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-indigo-200 group-hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              Explore to see more
            </span>
            <div className="w-[2px] h-16 md:h-20 bg-white/10 rounded-full relative overflow-hidden group-hover:h-24 transition-all duration-300">
              <motion.div 
                animate={{ y: [0, 80] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500 to-white"
              />
            </div>
          </motion.div>
        </section>

        {/* --- TASK 1: EMOTIONAL HOOK SECTION --- */}
        <section id="emotional-hook" className="py-24 md:py-32 px-6 relative bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
                Stop Wasting Budget on "Influencers." <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Start Buying Outcomes.</span>
              </h2>
              <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                RebelCreator OS is the first platform that treats creators like assets, not ad slots. 
                Predict ROI. Simulate content. Own performance before you spend.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="rounded-full bg-white text-indigo-950 font-bold hover:bg-indigo-50 h-14 px-8 text-base shadow-xl shadow-indigo-500/10">
                  Simulate My First Campaign
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-indigo-400/30 text-indigo-100 hover:bg-indigo-400/10 h-14 px-8 text-base font-semibold">
                  <Play className="mr-2 h-4 w-4" /> Watch It Work
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- TASK 2: POSITIONING STATEMENT SECTION --- */}
        <section className="py-24 px-6 md:px-12 bg-slate-50 relative">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[2rem] p-10 md:p-20 text-center shadow-2xl shadow-indigo-100/50"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                💡 This Isn't an Influencer Tool. <br/>
                <span className="text-indigo-600">It's a Profit Engine.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                We killed spreadsheets. We replaced hype with prediction. Every campaign is powered by real trust scores, 
                cultural foresight, and AI-backed creative simulation. You don't hope it works. 
                <span className="text-slate-900 font-bold"> You know it will.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- TASK 3: THE 4 ENGINES SECTION --- */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Core Technology</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The 4 Engines of Certainty</h2>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Trust Graph™",
                  desc: "Find creators with verified reliability—not just pretty metrics. We analyze historical behavior to score professional integrity.",
                  color: "text-emerald-500",
                  bg: "bg-emerald-50",
                  border: "hover:border-emerald-200"
                },
                {
                  icon: Cpu,
                  title: "Pre-Ad Simulator™",
                  desc: "Test creator, hook, and budget mixes before you launch. Our AI predicts outcomes with 85%+ accuracy against real market data.",
                  color: "text-indigo-500",
                  bg: "bg-indigo-50",
                  border: "hover:border-indigo-200"
                },
                {
                  icon: Globe,
                  title: "Cultural Engine™",
                  desc: "Prevent backlash. Predict resonance in every region. Our system flags cultural risks and opportunities in 100+ markets instantly.",
                  color: "text-purple-500",
                  bg: "bg-purple-50",
                  border: "hover:border-purple-200"
                },
                {
                  icon: Video,
                  title: "UGC & ROI Studio",
                  desc: "Own the content. Track the dollars. Prove the performance. Seamlessly manage rights, usage, and revenue attribution in one place.",
                  color: "text-pink-500",
                  bg: "bg-pink-50",
                  border: "hover:border-pink-200"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className={`p-10 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 group ${item.border}`}
                >
                  <div className={`w-16 h-16 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TASK 4: DIFFERENTIATOR SECTION --- */}
        <section className="py-24 px-6 md:px-12 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-block py-1 px-3 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                Why Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                🛡 Why RebelCreator IS <br/> 
                <span className="text-indigo-400">GREAT INNOVATIVE FIT</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-8">
                Other platforms rent data. We built ours. Other tools show vanity metrics. We show verified behavior. 
                Other "AI" guesses. Ours simulates actual outcomes. This isn't a marketplace. It's an intelligence network.
              </p>
              
              <Button className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-8 h-12">
                See The Comparison
              </Button>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <ul className="space-y-6">
                {[
                  "Built on trust scoring, not social scraping",
                  "Creator reputation is tracked like credit",
                  "Campaigns auto-optimize based on real past performance",
                  "Cultural simulation flags risk before headlines do"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-4 text-lg text-slate-200">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* --- MODULES SHOWCASE (EXISTING) --- */}
        <section id="modules" className="py-32 px-6 md:px-12 bg-slate-900 relative overflow-hidden">
          {/* Section Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen"></div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-6 border border-indigo-500/20 backdrop-blur-sm"
              >
                System Architecture
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
              >
                The 8-Module Engine
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
              >
                A complete end-to-end operating system designed to replace fragmented tools.
              </motion.p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {modulesData.map((module) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={module.id}
                    variants={scaleIn}
                    className="relative group h-full"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl group-hover:blur-2xl"></div>
                    <Link 
                      to={`/modules/${module.slug}`}
                      className="relative flex flex-col h-full bg-slate-900/90 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-8">
                         <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-xl">
                           <Icon className="w-7 h-7" />
                         </div>
                         <span className="font-mono text-sm font-bold text-slate-600 group-hover:text-indigo-400 transition-colors">
                           0{module.id}
                         </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors tracking-tight">
                        {module.title}
                      </h3>
                      
                      <p className="text-slate-400 text-base leading-relaxed mb-8 line-clamp-3 font-medium">
                        {module.description}
                      </p>

                      <div className="mt-auto pt-8 border-t border-white/5 flex items-center text-sm font-bold text-indigo-400 opacity-80 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        Explore Module <ChevronRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* --- TASK 5: WHO IT'S FOR SECTION --- */}
        <section className="py-24 px-6 md:px-12 bg-slate-50">
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">🎯 Built for Brands That Can't Afford to Miss</h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "For DTC Founders",
                  desc: "Every dollar matters. We help you predict the ones that return. Scale without burning runway.",
                  icon: ShoppingBag,
                  gradient: "from-orange-400 to-red-500",
                  bg: "bg-orange-50"
                },
                {
                  title: "For Agencies",
                  desc: "Scale client campaigns without losing control. Automate the grunt work and focus on strategy.",
                  icon: Users,
                  gradient: "from-blue-400 to-indigo-500",
                  bg: "bg-blue-50"
                },
                {
                  title: "For Ecom Teams",
                  desc: "Seeding, briefs, UGC, ROI. Done before lunch. Connect influencer views to checkout revenue.",
                  icon: TrendingUp,
                  gradient: "from-emerald-400 to-teal-500",
                  bg: "bg-emerald-50"
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow text-lg font-medium">{card.desc}</p>
                  <Button variant="ghost" className="self-start text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 pl-0">
                    Show Me a Real Use Case <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TASK 6: FINAL CTA SECTION --- */}
        <section className="py-32 px-6 md:px-12 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 opacity-90" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
           
           <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                  🚀 Spend Smarter. <br/>
                  Convert Faster. <br/>
                  <span className="text-indigo-400">Scale Predictably.</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium">
                  You've done the guesswork. Now do the math.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="rounded-full bg-white text-indigo-950 font-bold text-lg hover:bg-indigo-50 shadow-2xl shadow-white/10 h-16 px-10">
                    Book a Demo That Proves ROI
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 text-white font-bold text-lg hover:bg-white/10 h-16 px-10 backdrop-blur-md">
                    Try It Free — See 1st Campaign Simulated
                  </Button>
                </div>
             </motion.div>
           </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
