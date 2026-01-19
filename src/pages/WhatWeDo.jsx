
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layers, ShieldCheck, TrendingUp, Zap, Globe, Target, Brain, Users, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { modulesData } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const WhatWeDo = () => {
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

  const coreValues = [
    {
      title: "We Help You Decide Before You Spend",
      icon: Target,
      content: "Traditional platforms report on what happened after you've spent your budget. RebelCreator OS™ flips the script. Our Pre-Ad Simulation™ technology allows you to test creative strategies, influencer partnerships, and campaign messages in a risk-free virtual environment before a single dollar is committed."
    },
    {
      title: "We Turn Influence Into Intelligence",
      icon: Brain,
      content: "Influence is no longer about vanity metrics. We transform raw social signals into actionable business intelligence. By creating AI-driven 'Avatars' of creators, we analyze millions of data points to predict compatibility, brand safety, and conversion potential with mathematical precision."
    },
    {
      title: "We Make the Complex Invisible",
      icon: Zap,
      content: "Influencer marketing is messy—contracts, shipping, approvals, payments. Our AI Agents handle the friction. From automated brief generation to streamlined logistics and one-click payouts, we make the operational complexity of running global campaigns invisible to your team."
    },
    {
      title: "We Predict Outcomes — Not Just Report Them",
      icon: TrendingUp,
      content: "Hindsight is expensive; foresight is profitable. Using advanced predictive analytics, we forecast campaign performance, audience sentiment, and sales lift. This allows you to optimize your strategy in real-time, shifting budget to high-performing vectors before opportunities are lost."
    },
    {
      title: "We Protect Budgets, Creators, and Decisions",
      icon: ShieldCheck,
      content: "Safety is our baseline. We protect your budget through fraud detection and predictive allocation. We protect creators with clear contracts and timely payments. We protect your decisions with verified data, ensuring every move you make is backed by empirical evidence, not guesswork."
    },
    {
      title: "We Connect the Entire Journey",
      icon: Layers,
      content: "Marketing doesn't happen in a silo. RebelCreator OS™ bridges the gap between online engagement and offline revenue. Our proprietary attribution models connect social views to in-store purchases, e-commerce checkouts, and brand lift, giving you a holistic view of the customer journey."
    },
    {
      title: "We Level the Playing Field",
      icon: Users,
      content: "Enterprise-grade intelligence shouldn't be reserved for the Fortune 500. We democratize access to high-end data science and AI tools, empowering brands of all sizes to compete with global giants. Whether you're a startup or a conglomerate, our OS scales to your ambition."
    },
    {
      title: "What This Means for You",
      icon: Globe,
      content: "It means clarity in a chaotic market. It means sleeping well at night knowing your compliance is automated. It means 10x efficiency for your team. Ultimately, it means moving from 'guessing and hoping' to 'knowing and growing' across every channel you activate."
    }
  ];

  const faqData = [
    {
      question: "What makes RebelCreator OS different from other platforms?",
      answer: "Most platforms focus on \"search and report\"—finding influencers and tracking what happened after a campaign. RebelCreator OS™ focuses on \"predict and protect.\" We use generative AI and simulation to forecast outcomes before you spend budget, effectively de-risking your marketing investments."
    },
    {
      question: "How does predictive analytics work?",
      answer: "We aggregate historical data, creator performance metrics, and audience sentiment analysis into our AI engine. This allows us to run thousands of simulations on potential campaigns, predicting engagement, reach, and conversion with a high degree of accuracy, similar to how financial markets model risk."
    },
    {
      question: "Who should use RebelCreator OS?",
      answer: "Our platform is designed for mid-to-large enterprises, ambitious agencies, and D2C brands that are serious about scaling their influencer marketing. It is ideal for teams who need to justify ad spend with hard data and want to streamline complex multi-channel operations."
    },
    {
      question: "What is creator intelligence/avatars?",
      answer: "A \"Creator Avatar\" is a digital twin of an influencer constructed from their public data points—content style, posting cadence, audience demographics, and past performance. We use these Avatars to test campaign concepts virtually, seeing how their specific audience would likely react without needing to engage the creator first."
    },
    {
      question: "How does UGC automation help?",
      answer: "UGC (User Generated Content) automation handles the tedious parts of content sourcing. Our tools can generate briefs, contract creators, collect raw assets, and even score incoming content for quality and brand safety automatically, saving your team hundreds of hours of administrative work."
    },
    {
      question: "What is cultural intelligence?",
      answer: "Cultural intelligence goes beyond translation. It analyzes the sentiment, slang, and cultural context of different regions and communities. This ensures your global campaigns resonate locally and avoid cultural faux pas that could damage your brand reputation."
    },
    {
      question: "How does revenue attribution work?",
      answer: "We use a mix of pixel tracking, unique promo codes, and advanced \"lift\" modeling. For offline attribution, we can integrate with POS systems to match geographic sales spikes with localized influencer activity, giving you a picture of total revenue impact, not just clicks."
    },
    {
      question: "Can small businesses use this platform?",
      answer: "Yes. While our tools are enterprise-grade, we believe in leveling the playing field. We offer tiered access that allows smaller brands to utilize our core discovery and predictive features to make their limited budgets work harder and smarter."
    },
    {
      question: "What happens if a campaign won't work?",
      answer: "That is exactly what we want to find out! If our Pre-Ad Simulator predicts a campaign will fail or have low ROI, our system alerts you immediately. This gives you the chance to pivot your strategy, change creators, or adjust your messaging *before* you spend your media budget."
    },
    {
      question: "How long does it take to see results?",
      answer: "Platform setup is nearly instant. Insights from our discovery and predictive tools are available immediately upon search. For active campaigns, real-time reporting begins the moment content goes live, allowing for day-one optimization."
    },
    {
      question: "Does RebelCreator OS integrate with my existing tech stack?",
      answer: "Yes, we offer native integrations with Shopify, Salesforce, WooCommerce, Magento, and major CRM platforms. We also provide a robust REST API for custom enterprise connections, allowing you to feed influencer data directly into your data warehouse."
    },
    {
      question: "How is pricing structured?",
      answer: "Our enterprise pricing is customized based on your volume of creators, seat requirements, and active markets. We operate on a SaaS license model rather than a percentage of ad spend, ensuring your costs remain predictable as you scale."
    },
    {
      question: "Can I invite my entire team and agency partners?",
      answer: "Absolutely. Our platform is built for collaboration, supporting unlimited team seats, agency partner access with granular permissions, and approval workflow routing. Everyone stays on the same page, from the CMO to the intern."
    },
    {
      question: "Is my proprietary data and campaign strategy secure?",
      answer: "Security is paramount. We are SOC 2 Type II compliant, GDPR ready, and use bank-grade encryption for all data. Your campaign strategies and creator lists are strictly siloed and never shared with other clients or aggregated into public pools."
    },
    {
      question: "How do you compare to legacy platforms like Grin or Tagger?",
      answer: "Legacy platforms typically focus on relationship management (CRM) and workflow. We include those features but differentiate significantly by adding predictive 'pre-spend' intelligence, generative AI content tools, and deep offline revenue attribution models."
    },
    {
      question: "What does the implementation process look like?",
      answer: "Most enterprise clients are fully onboarded within 2-4 weeks. This includes historical data ingestion, team training, and integration setup. Our dedicated Customer Success team manages the entire migration to ensure zero downtime."
    },
    {
      question: "How deep does ROI tracking go?",
      answer: "Beyond basic clicks and likes, we track full-funnel conversion including 'view-through' attribution for offline sales, brand lift metrics, and long-term customer lifetime value (LTV) associated with specific creators and content types."
    },
    {
      question: "Can the platform handle global multi-country campaigns?",
      answer: "We support 100+ languages and currencies. Our 'Cultural AI' automatically adjusts compliance rules and sentiment analysis for each local market, making us the preferred choice for multinational brands operating across borders."
    },
    {
      question: "What level of customer support do you provide?",
      answer: "Every enterprise account is assigned a dedicated Success Manager and Technical Solutions Engineer. We provide 24/7 global support, quarterly strategic business reviews, and on-demand training sessions."
    },
    {
      question: "Do you offer white-labeling or API access?",
      answer: "Yes, agencies can white-label our reporting dashboards and creator portals to provide a branded experience for their clients. We also offer full API access for teams building custom internal dashboards."
    }
  ];

  // Split FAQs for two-column layout
  const midPoint = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midPoint);
  const rightFaqs = faqData.slice(midPoint);

  return (
    <>
      <Helmet>
        <title>What We Do | RebelCreator OS™</title>
        <meta name="description" content="Explore the 8 core modules of RebelCreator OS™ - from Influencer Intelligence to Predictive Ad Simulation." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            
            {/* Header */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mb-24 max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-200">
                    <Layers className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Our Mission & Methodology
                 </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
                The Complete OS for <br/>Modern Influence.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                We don't just build software; we engineer certainty. Here is how we transform the chaos of the creator economy into a streamlined engine for growth.
              </motion.p>
            </motion.div>

            {/* Core Values / Methodology Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants} 
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-32"
            >
              {coreValues.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-sky-100/50 hover:border-sky-200 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* In Simple Terms Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-32"
            >
               <motion.div variants={itemVariants} className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-900/30">
                  {/* Decor elements */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>
                  <div className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-indigo-500 blur-[120px] rounded-full opacity-30"></div>
                  
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">In Simple Terms</h2>
                    <p className="text-2xl md:text-4xl leading-relaxed text-slate-200 font-light">
                      "Others help you find influencers. Others help you run campaigns. Others help you analyze results. <br/><br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-extrabold drop-shadow-sm">RebelCreator OS™ helps you decide — before you spend.</span>"
                    </p>
                  </div>
               </motion.div>
            </motion.div>

            {/* Modules Grid Header */}
            <div className="mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Architecture</h2>
               <p className="text-xl text-slate-500">Eight powerful modules designed to deliver on these promises.</p>
            </div>

            {/* Modules Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-32"
            >
              {modulesData.map((module) => {
                const Icon = module.icon;
                return (
                  <motion.div variants={itemVariants} key={module.id}>
                    <Link 
                      to={`/modules/${module.slug}`}
                      className="group flex flex-col h-full bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-200 transition-all duration-300 relative overflow-hidden hover:-translate-y-2"
                    >
                      {/* Badge if present */}
                      {module.badge && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-200 to-amber-300 text-amber-900 text-[10px] font-bold px-4 py-2 rounded-bl-2xl shadow-sm z-20 uppercase tracking-wide">
                          {module.badge}
                        </div>
                      )}

                      <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-4 z-10">
                        <ArrowRight className="w-8 h-8 text-sky-500" />
                      </div>

                      <div className="mb-10 flex items-start justify-between">
                         <div className="w-16 h-16 rounded-2xl bg-sky-50 text-slate-600 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                           <Icon className="w-8 h-8" />
                         </div>
                         <span className="text-sm font-bold text-slate-300 group-hover:text-sky-300 transition-colors uppercase tracking-widest mt-2 font-mono">
                            Module {module.id.toString().padStart(2, '0')}
                         </span>
                      </div>

                      <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors tracking-tight">
                        {module.title}
                      </h3>
                      
                      <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8 flex-grow">
                        {module.description}
                      </p>

                      <div className="pt-8 border-t border-slate-50 flex items-center text-sm font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                         Explore Capabilities
                         <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* FAQ Section */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.1 }}
               variants={containerVariants}
               className="mx-auto"
            >
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-sky-50 text-sky-600">
                  <HelpCircle className="w-8 h-8" />
                </motion.div>
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Frequently Asked Questions
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-slate-500 leading-relaxed font-medium">
                  Everything you need to know about the platform, pricing, and how we help you scale.
                </motion.p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <motion.div variants={containerVariants} className="space-y-6">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    {leftFaqs.map((faq, index) => (
                      <motion.div key={`left-${index}`} variants={itemVariants}>
                        <AccordionItem value={`item-left-${index}`} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg hover:shadow-sky-100/50 hover:border-sky-200 transition-all duration-300">
                          <AccordionTrigger className="px-8 py-6 text-left text-slate-900 font-bold hover:bg-slate-50/50 hover:text-sky-600 transition-colors hover:no-underline text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-8 pt-2 text-slate-600 leading-relaxed text-lg bg-slate-50/30">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>

                {/* Right Column */}
                <motion.div variants={containerVariants} className="space-y-6">
                  <Accordion type="single" collapsible className="w-full space-y-6">
                    {rightFaqs.map((faq, index) => (
                      <motion.div key={`right-${index}`} variants={itemVariants}>
                        <AccordionItem value={`item-right-${index}`} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg hover:shadow-sky-100/50 hover:border-sky-200 transition-all duration-300">
                          <AccordionTrigger className="px-8 py-6 text-left text-slate-900 font-bold hover:bg-slate-50/50 hover:text-sky-600 transition-colors hover:no-underline text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-8 pt-2 text-slate-600 leading-relaxed text-lg bg-slate-50/30">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              </div>

              {/* Support CTA */}
              <motion.div variants={itemVariants} className="mt-20 text-center">
                 <p className="text-slate-500 mb-6 text-lg font-medium">Still have questions?</p>
                 <Button size="lg" className="rounded-full bg-slate-900 hover:bg-sky-600 shadow-xl shadow-slate-300 hover:shadow-sky-200 h-14 px-10 text-base">
                    Contact Support <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </motion.div>

            </motion.div>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default WhatWeDo;
