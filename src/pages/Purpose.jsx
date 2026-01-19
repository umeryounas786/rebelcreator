import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, UserCheck, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Purpose = () => {
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Purpose | RebelCreator OS™</title>
        <meta name="description" content="Discover the core purpose and vision behind RebelCreator OS™ – fixing the problems in modern influence." />
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
                    <Lightbulb className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Our Vision
                 </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">
                The New Age of <br/>Influence, Redefined.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-slate-500 leading-relaxed font-medium">
                We believe in a future where influence is transparent, authentic, and delivers measurable impact. RebelCreator OS™ is our commitment to that vision.
              </motion.p>
            </motion.div>

            {/* Why RebelCreator OS™ Exists */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24 py-12 px-8 bg-white rounded-3xl shadow-lg border border-slate-100"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why RebelCreator OS™ Exists</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                The creator economy has exploded, yet the tools and practices to navigate it remain fragmented, inefficient, and often opaque. Brands struggle to find genuine impact, and creators grapple with fair valuation and sustainable partnerships. RebelCreator OS™ was born from this disconnect – a unified platform to bring clarity, efficiency, and real ROI to the world of influence.
              </p>
            </motion.section>

            {/* The Problem We're Fixing */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">The Problem We're Fixing</h2>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-lg text-slate-600 leading-relaxed">
                <motion.li variants={itemVariants} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0"></span>
                  <p><strong>Lack of Predictability:</strong> Campaigns are often based on guesswork, leading to wasted budgets and missed opportunities.</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0"></span>
                  <p><strong>Inefficient Workflows:</strong> Manual processes, endless spreadsheets, and scattered communication drain time and resources.</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0"></span>
                  <p><strong>Opaque Attribution:</strong> Difficulty in connecting influencer efforts directly to tangible business results (ROI).</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0"></span>
                  <p><strong>Brand Safety & Authenticity Concerns:</strong> The risk of partnering with fraudulent accounts or misaligned creators.</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0"></span>
                  <p><strong>Cultural Missteps:</strong> Global campaigns failing due to lack of localized understanding and sensitivity.</p>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0"></span>
                  <p><strong>Creator Burnout & Mismanagement:</strong> Creators often feel undervalued, underpaid, or overwhelmed by complex briefs.</p>
                </motion.li>
              </ul>
            </motion.section>

            {/* Our Purpose */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24 py-16 px-8 bg-sky-600 text-white rounded-3xl shadow-xl border border-sky-700 relative overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[150px] pointer-events-none"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-8 leading-tight">
                  Our Purpose: To Empower Authentic Influence with Unparalleled Intelligence and Precision.
                </h2>
                <p className="text-xl leading-relaxed opacity-90">
                  We are building the operating system that enables brands to connect with the right creators, at the right time, with the right message – ensuring every interaction is impactful, ethical, and drives real results.
                </p>
              </div>
            </motion.section>

            {/* What Makes RebelCreator OS™ Different */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-12">What Makes RebelCreator OS™ Different</h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
                  <Rocket className="w-10 h-10 text-sky-600 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">We Predict Before You Spend</h3>
                  <p className="text-md text-slate-600 leading-relaxed">
                    Gone are the days of hoping for results. Our AI-powered simulator forecasts campaign performance, audience response, and creative outcomes BEFORE you invest, giving you unprecedented confidence and control.
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
                  <UserCheck className="w-10 h-10 text-sky-600 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">We Treat Creators as Intelligence Not Inventory</h3>
                  <p className="text-md text-slate-600 leading-relaxed">
                    Creators are more than just numbers. We delve into their unique "avatars," cultural nuances, and authentic engagement, ensuring genuine partnerships that resonate deeply with audiences.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
                  <TrendingUp className="w-10 h-10 text-sky-600 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">We Make Expert Strategy Accessible to Everyone</h3>
                  <p className="text-md text-slate-600 leading-relaxed">
                    Our platform distills years of marketing expertise into intuitive AI tools, enabling anyone to design, manage, and optimize high-performing influence campaigns with professional-grade insights.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Why This Matters Beyond Marketing */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24 py-12 px-8 bg-white rounded-3xl shadow-lg border border-slate-100"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why This Matters Beyond Marketing</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                In an era of information overload and declining trust, authentic influence is critical. Our work extends beyond ad spend – it's about fostering genuine connections, amplifying diverse voices, and building transparent ecosystems where value is created ethically and sustainably for everyone involved.
              </p>
            </motion.section>

            {/* Our Mission */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                To build the definitive operating system for the creator economy, making sophisticated influence accessible, predictable, and profoundly impactful for brands and creators worldwide.
              </p>
            </motion.section>

            {/* Why We Can Make This Better */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24 py-12 px-8 bg-white rounded-3xl shadow-lg border border-slate-100"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why We Can Make This Better</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                Our team combines decades of experience in AI, marketing science, and software engineering. We understand the intricacies of human behavior and the power of data. We've seen the current limitations and are building the future with a relentless focus on precision, compliance, and user empowerment.
              </p>
            </motion.section>

            {/* Our Belief */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="mb-24 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Belief</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Influence is not about vanity metrics; it's about genuine connection and measurable impact. Technology should serve to enhance this, not complicate it.
              </p>
            </motion.section>

            {/* The Bigger Vision */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={sectionVariants} 
              className="py-16 px-8 bg-slate-900 text-white rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-8 leading-tight">
                  The Bigger Vision: A Compliant, Transparent, and Hyper-Efficient Creator Ecosystem.
                </h2>
                <p className="text-xl leading-relaxed opacity-90">
                  We envision a world where the creator economy is a pillar of responsible marketing, driven by intelligent systems that foster creativity, reward authenticity, and deliver unparalleled results. RebelCreator OS™ is the blueprint for that future.
                </p>
              </div>
            </motion.section>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Purpose;