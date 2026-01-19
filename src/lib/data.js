
import { 
  Target, 
  Zap, 
  Globe, 
  Brain, 
  Video, 
  BarChart3, 
  Briefcase, 
  MonitorPlay,
  Users
} from 'lucide-react';

export const modulesData = [
  {
    id: 1,
    slug: "module-1",
    title: "Influencer Intelligence & Trust System",
    description: "The foundational layer of RebelCreator OS™. This module uses advanced machine learning to identify, vet, and organize creator talent with unprecedented precision.",
    icon: Brain,
    features: [
      {
        id: "1.1",
        title: "Influencer Avatar Engine",
        description: "A proprietary classification engine that goes beyond basic demographics. It analyzes content semantics to determine the true 'Avatar' of a creator.",
        subFeatures: [
          { 
            name: "Auto-Classification Engine", 
            desc: "Automatically categorizes influencers by niche, audience demographics, engagement patterns, and content style using advanced machine learning algorithms." 
          },
          { 
            name: "Avatar Library", 
            desc: "Pre-built templates for common influencer archetypes including Nano-Influencer, Micro-Influencer, Macro-Influencer, Celebrity, Brand Ambassador, and Thought Leader." 
          },
          { 
            name: "Avatar Scoring", 
            desc: "Quantifies influencer quality across multiple dimensions including authenticity, engagement rate, audience alignment, and content consistency." 
          },
          { 
            name: "Lookalike Matching", 
            desc: "Finds similar influencers based on audience composition, engagement metrics, and content themes to expand your creator pool strategically." 
          },
          { 
            name: "Campaign Avatar Recommendations", 
            desc: "Suggests ideal influencer avatars based on campaign objectives and target audience, ensuring optimal creator-campaign fit." 
          }
        ]
      },
      {
        id: "1.2",
        title: "Creator Discovery Engine",
        description: "A search engine built for precision. Find the hidden gems that other platforms miss by filtering through noise with AI validation.",
        subFeatures: [
          { 
            name: "Smart Search Engine", 
            desc: "Advanced filtering by niche, audience size, engagement rate, location, language, and custom metrics for pinpoint creator discovery." 
          },
          { 
            name: "AI Content Scanner", 
            desc: "Analyzes content themes, posting frequency, audience sentiment, and brand safety indicators to ensure quality and alignment." 
          },
          { 
            name: "Fake Follower Detection", 
            desc: "Identifies and flags accounts with suspicious follower patterns, bot activity, and engagement anomalies to protect your budget." 
          },
          { 
            name: "Audience Insights", 
            desc: "Provides detailed demographic, psychographic, and behavioral data about creator audiences for informed decision-making." 
          }
        ]
      },
      {
        id: "1.3",
        title: "Creator CRM & Relationship Graph",
        description: "The central nervous system for your relationships. Move beyond spreadsheets to a dynamic, historical record of every interaction with integrated trust scoring.",
        subFeatures: [
          { 
            name: "Creator Profiles", 
            desc: "Comprehensive profiles with contact info, rates, availability, and performance history—all in one centralized location." 
          },
          { 
            name: "Campaign & Content History", 
            desc: "Tracks all past collaborations, content performance, and campaign outcomes to measure long-term creator value." 
          },
          { 
            name: "Pricing Database", 
            desc: "Maintains historical pricing data and negotiation records to ensure fair rates and budget optimization." 
          },
          { 
            name: "Segmentation & Tags", 
            desc: "Organize creators with custom tags and segments for easy filtering and strategic campaign planning." 
          },
          { 
            name: "Status Workflow", 
            desc: "Manage creator relationship status including prospect, active, inactive, and blacklisted for streamlined collaboration management." 
          },
          { 
            name: "Trust Ledger™", 
            desc: "Proprietary trust scoring system tracking reliability, payment history, and collaboration quality to mitigate risk and maximize partnership success." 
          }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "module-2",
    title: "AI Campaign Planning & Automation",
    description: "Automate the tedious parts of campaign management. From brief generation to timeline orchestration, let AI handle the logistics and strategy so you can focus on creativity and relationships.",
    icon: Zap,
    features: [
      {
        id: "2.1",
        title: "AI Campaign Designer",
        description: "Transform abstract ideas into execution-ready plans instantly. The AI Campaign Designer handles the strategy so you can focus on creativity.",
        subFeatures: [
          { 
            name: "Text-to-Campaign Generator", 
            desc: "Describe your goal in plain English, and the AI instantly builds a full campaign structure including briefs, timelines, and budgets." 
          },
          { 
            name: "Avatar Mix Optimizer", 
            desc: "AI intelligently selects the ideal mix of creator types (e.g., 3 Macro, 10 Micro, 5 UGC) to maximize performance for your specific KPIs." 
          },
          { 
            name: "Timeline & Deliverables Generator", 
            desc: "Automatically generates a professional project plan with clear deadlines, approval stages, and content delivery dates." 
          },
          { 
            name: "Predictive Campaign Simulator", 
            desc: "Forecasts expected reach, engagement, and potential ROI before you commit any budget, allowing for data-backed planning." 
          }
        ]
      },
      {
        id: "2.2",
        title: "Campaign Type Library",
        description: "A comprehensive suite of pre-configured campaign structures designed for every marketing objective, plus tools to build your own.",
        subFeatures: [
          { 
            name: "Pre-Built Campaign Templates", 
            desc: "Access ready-to-use workflows for Sponsored Posts, Seeding & Gifting, Affiliate Programs, Ambassador Relationships, UGC-Only campaigns, and Event/Seasonal activations." 
          },
          { 
            name: "Custom Template Builder", 
            desc: "Create and save your own proprietary campaign structures to standardize success across your team or agency clients." 
          }
        ]
      },
      {
        id: "2.3",
        title: "Campaign Orchestrator & Performance Automation",
        description: "Advanced simulation and management tools to optimize resources before a single dollar is spent.",
        subFeatures: [
          { 
            name: "Budget Simulator", 
            desc: "Instantly visualizes trade-offs, showing what results you can expect at different investment levels to help secure internal buy-in." 
          },
          { 
            name: "Avatar Impact Forecasting", 
            desc: "Simulates how adding or removing specific creator types affects overall campaign reach and engagement metrics." 
          },
          { 
            name: "Multi-Campaign Dashboard", 
            desc: "Run and monitor multiple complex campaigns simultaneously from a single, unified command center." 
          },
          { 
            name: "AI Optimization Engine", 
            desc: "Continuously analyzes live campaign data to suggest real-time adjustments for better results." 
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "module-3",
    title: "UGC Creation & Collaboration Studio",
    description: "Scale your content engine without the chaos. A dedicated workspace to brief, collect, manage, and analyze user-generated content with enterprise-grade governance and AI-powered efficiency.",
    icon: Video,
    features: [
      {
        id: "3.1",
        title: "UGC Brief Engine",
        description: "Streamline the briefing process with AI that understands what performs. Ensure creators get crystal-clear instructions every time.",
        subFeatures: [
          { 
            name: "AI Brief Wizard", 
            desc: "Instantly generate detailed creative briefs based on campaign goals, ensuring creators know exactly what to shoot." 
          },
          { 
            name: "Style Guide Matcher", 
            desc: "Automatically injects your brand's visual identity guidelines into every brief to reduce revisions." 
          },
          { 
            name: "Visual Shot List Builder", 
            desc: "Drag-and-drop tool to create mandatory shot lists (e.g., 'Product close-up', 'Unboxing', 'Reaction face')." 
          },
          { 
            name: "Creator-Specific Customization", 
            desc: "AI tailors the brief tone and complexity based on the specific creator's experience level." 
          }
        ]
      },
      {
        id: "3.2",
        title: "UGC Asset Library & Workflow",
        description: "Stop chasing files in email threads. A centralized, intelligent hub for all your creative assets.",
        subFeatures: [
          { 
            name: "Centralized Upload Portal", 
            desc: "A branded portal where creators upload content directly, bypassing messy email threads and expired drive links." 
          },
          { 
            name: "AI Auto-Tagging", 
            desc: "Automatically tags uploaded videos by product, sentiment, color palette, and objects for easy retrieval." 
          },
          { 
            name: "Kanban Approval Board", 
            desc: "Visual workflow to move assets from 'Received' to 'Reviewing' to 'Approved' or 'Revision Requested'." 
          },
          { 
            name: "Frame-Accurate Feedback", 
            desc: "Leave comments directly on specific video frames so creators know exactly what to edit." 
          }
        ]
      },
      {
        id: "3.3",
        title: "Rights & Usage Management",
        description: "Protect your brand and budget with automated rights tracking and legal compliance tools.",
        subFeatures: [
          { 
            name: "Smart Rights Locker", 
            desc: "A digital ledger that tracks exactly which assets you own, for how long, and for which channels." 
          },
          { 
            name: "Auto-Renewal Triggers", 
            desc: "Alerts you before usage rights expire and automates the renewal offer process if the asset is performing well." 
          },
          { 
            name: "Whitelisting Manager", 
            desc: "Automates the process of requesting and verifying ad account whitelisting permissions from creators." 
          },
          { 
            name: "Compliance Watermarking", 
            desc: "Automatically adds watermarks to unapproved or expired assets to prevent accidental usage." 
          }
        ]
      },
      {
        id: "3.4",
        title: "UGC-Driven Performance Hub",
        description: "Turn content into data. Analyze creative performance to iterate faster and smarter.",
        subFeatures: [
          { 
            name: "Creative Scoring Model", 
            desc: "AI evaluates raw assets before they run, predicting performance based on hooks, pacing, and visual trends." 
          },
          { 
            name: "Hook & Hold Analysis", 
            desc: "Visualizes audience retention to show exactly where viewers drop off in every video." 
          },
          { 
            name: "Iteration Engine", 
            desc: "Suggests specific edits (e.g., 'Cut the intro by 2s', 'Add text overlay') to improve underperforming assets." 
          },
          { 
            name: "Top Performer Cloning", 
            desc: "Identifies your winning ads and helps you brief new creators to replicate that specific winning formula." 
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "module-4",
    title: "Cultural & Audience Intelligence Engine",
    description: "Navigate global markets with confidence. Understand local trends, sentiments, and cultural nuances before you launch using our Proprietary Innovation Core.",
    icon: Globe,
    badge: "Proprietary Innovation Core",
    features: [
      {
        id: "4.1",
        title: "Audience Deep Profiling",
        description: "Go beyond surface-level metrics. Our deep profiling creates multi-dimensional models of your target audience to predict behavior and intent.",
        subFeatures: [
          { name: "Demographic Layers", desc: "Multi-dimensional demographic segmentation with behavioral overlays, lifecycle stage mapping, and income-to-aspiration correlation analysis." },
          { name: "Psychographic Mapping", desc: "Values-based audience clustering, lifestyle preference matrices, and belief system alignment scoring." },
          { name: "Purchase Intent Signals", desc: "Behavioral trigger identification, consideration stage detection, and conversion probability modeling." },
          { name: "Cross-Platform Audience Graph", desc: "Unified identity resolution across channels, platform-specific behavior patterns, and audience migration tracking." }
        ]
      },
      {
        id: "4.2",
        title: "Cultural Signal Engine",
        description: "Decode the cultural zeitgeist. Identify emerging trends and sentiment shifts before they become mainstream.",
        subFeatures: [
          { name: "Real-Time Trend Tracker", desc: "Emerging trend detection with velocity scoring, cultural moment identification, and trend lifecycle prediction." },
          { name: "Geo-Sentiment Analysis", desc: "Regional sentiment mapping, cultural context variation analysis, and location-specific messaging optimization." },
          { name: "Subculture Mapping", desc: "Niche community identification, subcultural value alignment, and community-specific communication strategies." }
        ]
      },
      {
        id: "4.3",
        title: "Cultural Simulation Engine™",
        description: "De-risk your global campaigns by simulating cultural reception and identifying sensitivities before launch.",
        badge: "Proprietary Core System",
        subFeatures: [
          { name: "Pre-Launch Cultural Risk Scan", desc: "Message sensitivity analysis, cultural taboo identification, and regional appropriateness assessment." },
          { name: "Message Framing Advisor", desc: "Optimal messaging variants for cultural contexts, tone calibration recommendations, and cultural resonance scoring." },
          { name: "Context Sensitivity Index™", desc: "Real-time cultural context monitoring, sensitivity threshold alerts, and adaptive messaging triggers." }
        ]
      },
      {
        id: "4.4",
        title: "Market Readiness Forecasting",
        description: "Don't just launch—land. Forecast market readiness and tailor your approach for maximum local impact.",
        subFeatures: [
          { name: "Localization Planner", desc: "Market-specific adaptation roadmaps, cultural customization requirements, and localization priority sequencing." },
          { name: "Competitive Culture Mapping", desc: "Competitor cultural positioning analysis, market perception gaps, and differentiation opportunities." },
          { name: "Predictive Trend Uplift Scores", desc: "Trend adoption probability by segment, market timing optimization, and growth trajectory forecasting." }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "module-5",
    title: "Attribution & ROI Intelligence Engine",
    description: "Stop guessing. Track every dollar, click, and conversion across online and offline channels with precision, powered by predictive modeling.",
    icon: BarChart3,
    features: [
      {
        id: "5.1",
        title: "Multi-Channel Attribution Framework",
        description: "Connect the dots across the entire customer journey. See exactly how influence translates into action across devices and channels.",
        subFeatures: [
          { name: "Cross-Device Identity Graph", desc: "Unified user tracking that persists across mobile, desktop, and app environments to catch every conversion." },
          { name: "View-Through Attribution", desc: "Credits creators for impressions that lead to later searches or direct visits, proving value beyond the immediate click." },
          { name: "Offline Conversion Uploads", desc: "Seamlessly import POS data to match digital creator campaigns with real-world in-store sales lift." },
          { name: "Multi-Touch Modeling", desc: "Sophisticated weighting that assigns fractional credit to every touchpoint in the customer journey, not just the last click." }
        ]
      },
      {
        id: "5.2",
        title: "Predictive ROI Simulator™",
        description: "Forecast financial outcomes before you commit budget. Our proprietary engine simulates campaign performance to optimize spend.",
        badge: "Proprietary Innovation Core",
        subFeatures: [
          { name: "Pre-Spend Outcome Forecasting", desc: "Estimates revenue potential, ROAS, and margin impact before budget is committed to any creator." },
          { name: "Budget Allocation Optimizer", desc: "AI suggests the mathematically most profitable split of budget between different creators and platforms." },
          { name: "Scenario Modeling", desc: "Run 'what-if' analyses for different campaign strategies (e.g., 'Aggressive Growth' vs. 'Efficiency') to see predicted outcomes." },
          { name: "Profitability Heatmaps", desc: "Visualizes high-ROI zones by region, demographic, or platform to focus spend where it yields the most." }
        ]
      },
      {
        id: "5.3",
        title: "Creator & Content Profitability Scoring",
        description: "Granular financial metrics for every asset and partner. Know exactly who and what is making you money.",
        subFeatures: [
          { name: "Real-Time ROAS Tracking", desc: "Live dashboard showing Return on Ad Spend per creator, updated instantly as sales data flows in." },
          { name: "Content Lift Analysis", desc: "Measures the incremental brand search volume and direct traffic driven by specific creative assets." },
          { name: "Creator LTV Scoring", desc: "Rates creators based not just on immediate sales, but on the long-term value (LTV) of the customers they acquire." },
          { name: "Cost-Per-Acquisition Benchmarking", desc: "Automatically compares each creator's CPA against your industry standards and historical averages." }
        ]
      },
      {
        id: "5.4",
        title: "Executive Reporting & Client Dashboard",
        description: "Turn complex data into boardroom-ready insights. Automated reporting that keeps stakeholders informed and impressed.",
        subFeatures: [
          { name: "White-Label Export", desc: "Generate professionally branded PDF and CSV reports for agency clients or internal leadership reviews." },
          { name: "Live Performance Feeds", desc: "Provide stakeholders with secure, read-only links to real-time data streams for total transparency." },
          { name: "Customizable KPI Widgets", desc: "Drag-and-drop metric cards to create dashboards that focus on the specific KPIs your executives care about." },
          { name: "Automated Stakeholder Updates", desc: "Scheduled email summaries of campaign performance delivered directly to key decision-makers' inboxes." }
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "module-6",
    title: "AI Targeting, Localization & Automation Engine",
    description: "Achieve global scale with local resonance. Leverage AI to predict performance, automate localization, and orchestrate complex workflows seamlessly.",
    icon: Target,
    features: [
      {
        id: "6.1",
        title: "Precision Targeting Engine",
        description: "Go beyond basic demographics. leverage predictive analytics and behavioral data to identify your perfect audience segments before launch.",
        subFeatures: [
          { name: "Performance Prediction by Audience Segment", desc: "Predictive analytics that forecast campaign performance across different audience segments before launch, enabling data-driven targeting decisions" },
          { name: "Platform x Avatar Fit Score", desc: "Algorithmic matching system that scores how well specific creator avatars align with platform algorithms and audience expectations" },
          { name: "Geo-Behavioral Targeting Matrix", desc: "Multi-dimensional targeting framework combining geographic data with behavioral patterns for hyper-localized campaign precision" }
        ]
      },
      {
        id: "6.2",
        title: "AI Localization Studio",
        description: "Scale globally without losing local relevance. Our AI studio adapts content, tone, and context for every market instantly.",
        subFeatures: [
          { name: "Content Localization Generator", desc: "Automated system that adapts content for different regions, languages, and cultural contexts while maintaining brand voice" },
          { name: "Language Tone Calibration", desc: "AI-powered tool that adjusts messaging tone, formality, and cultural references to resonate with local audiences" },
          { name: "Creator-Region Recommender", desc: "Intelligent matching system that identifies optimal creators for specific geographic markets based on audience alignment and cultural fit" }
        ]
      },
      {
        id: "6.3",
        title: "Workflow Automation Layer",
        description: "Remove friction from your operations. Intelligent automation handles scheduling, routing, and approvals so your team can focus on strategy.",
        subFeatures: [
          { name: "Auto-Campaign Scheduling", desc: "Intelligent scheduling system that automatically times campaign launches based on audience activity patterns and optimal engagement windows" },
          { name: "Asset Routing & Approvals", desc: "Automated workflow that routes creative assets through approval chains with intelligent prioritization and stakeholder notifications" },
          { name: "Intelligent Notifications System", desc: "Smart notification engine that alerts teams to critical updates while filtering out non-essential information" },
          { name: "Failsafe Automation", desc: "Safety mechanisms that prevent campaign errors through automated validation, compliance checks, and rollback capabilities" }
        ]
      },
      {
        id: "6.4",
        title: "Continuous Optimization Loop",
        description: "Campaigns that get smarter over time. Our system learns from every interaction to refine targeting and performance continuously.",
        subFeatures: [
          { name: "Real-Time Performance Feedback", desc: "Live monitoring system that tracks campaign metrics and provides instant insights for rapid optimization" },
          { name: "Avatar Rotation Engine", desc: "Automated system that tests and rotates different creator avatars to identify top performers and maximize reach" },
          { name: "Localization Refinement Model", desc: "Machine learning model that continuously improves localization accuracy based on performance data and audience feedback" },
          { name: "Self-Learning Targeting Adjustments", desc: "Adaptive targeting system that automatically refines audience segments and parameters based on campaign results" }
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "module-7",
    title: "Agency & Team Collaboration Suite",
    description: "Comprehensive tools for agencies to manage multiple clients, coordinate teams, and share intelligence across the organization.",
    icon: Users,
    features: [
      {
        id: "7.1",
        title: "Multi-Client Workspace Management",
        description: "Dedicated workspaces for each client with brand customization and access control.",
        subFeatures: [
          { name: "Brand & Client Workspaces", desc: "Separate branded environments for each client with custom branding, domain mapping, and workspace isolation" },
          { name: "Client Access Control", desc: "Granular permission settings, client-specific feature access, and data visibility controls" },
          { name: "White-Labeled Interface", desc: "Fully customizable UI, client-branded dashboards, and custom color schemes" }
        ]
      },
      {
        id: "7.2",
        title: "Role-Based Team Permissions",
        description: "Flexible permission system with approval workflows and complete audit trails.",
        subFeatures: [
          { name: "Team Roles & Access Levels", desc: "Predefined and custom roles, permission templates, and role hierarchy" },
          { name: "Approval Workflow Routing", desc: "Multi-step approvals, conditional routing, and escalation rules" },
          { name: "Activity Logs & Audit Trails", desc: "Complete action history, user activity tracking, and compliance reporting" }
        ]
      },
      {
        id: "7.3",
        title: "Cross-Team Communication Tools",
        description: "Integrated communication platform for seamless team collaboration.",
        subFeatures: [
          { name: "In-Platform Commenting", desc: "Contextual comments on campaigns, threaded discussions, and comment notifications" },
          { name: "Mentions & Notifications", desc: "Smart notifications, mention-based alerts, and notification preferences" },
          { name: "Campaign Message Center", desc: "Centralized messaging, campaign-specific threads, and message archives" }
        ]
      },
      {
        id: "7.4",
        title: "Shared Intelligence Layer",
        description: "Knowledge sharing and benchmarking across the entire organization.",
        subFeatures: [
          { name: "Creator Sharing Across Clients", desc: "Share templates across clients, reusable components, and shared libraries" },
          { name: "Rate Benchmark Database", desc: "Industry benchmarks, performance comparisons, and historical data" },
          { name: "Internal Knowledgebase", desc: "Best practices documentation, team resources, and training materials" }
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "module-8",
    title: "Pre-Ad Performance Simulator™",
    description: "Forecast before you spend. Use AI to predict ad performance, audience fit, and creative outcomes with our Proprietary Innovation Core.",
    icon: MonitorPlay,
    badge: "Proprietary Innovation Core",
    features: [
      {
        id: "8.1",
        title: "Creator Performance Forecaster",
        description: "Don't rely on media kits. Our AI predicts exactly how a creator will perform for YOUR specific brand objectives before you send a contract.",
        subFeatures: [
            { name: "Historical Performance Projection", desc: "Analyze thousands of past data points to forecast future engagement, click-through rates, and conversion potential for specific creators." },
            { name: "Niche Authority Scoring", desc: "Quantify a creator's true influence within specific verticals (e.g., 'Sustainable Fashion' vs. 'Fast Fashion') to ensure authentic alignment." },
            { name: "Audience Saturation Check", desc: "Detect if an audience is fatigued by similar promotions to avoid wasting budget on exhausted pools of potential customers." },
            { name: "Cost-Efficiency Modeling", desc: "Calculate estimated CPA (Cost Per Acquisition) and ROAS (Return on Ad Spend) based on current creator rates and predicted reach." }
        ]
      },
      {
        id: "8.2",
        title: "Creative Effectiveness Simulator",
        description: "Test creative assets in a virtual environment. Identify winning hooks and visuals before spending media budget.",
        subFeatures: [
            { name: "Attention Heatmaps", desc: "AI-generated visual analysis that predicts exactly where viewers will focus their eyes during the first 3 seconds of video content." },
            { name: "Emotional Resonance Analysis", desc: "Predicts the emotional response (Joy, Trust, Surprise, etc.) your creative will evoke, ensuring it matches your campaign sentiment goals." },
            { name: "Hook Strength Testing", desc: "Scoring system that evaluates the first 3 seconds of video content for retention probability and scroll-stopping power." },
            { name: "Brand Safety Scan", desc: "Automated pre-flight checks that flag potential brand safety risks, controversial imagery, or non-compliant elements within the creative." }
        ]
      },
      {
        id: "8.3",
        title: "Audience Resonance Modeling",
        description: "Know your audience's reaction before you launch. Simulate how different demographics will respond to your message.",
        subFeatures: [
            { name: "Sentiment Prediction", desc: "Forecast the ratio of positive to negative comments and reactions to anticipate PR risks or community management needs." },
            { name: "Demographic Affinity Scoring", desc: "Identify which specific age, gender, and location segments are most likely to engage with the campaign, allowing for smarter targeting." },
            { name: "Viral Probability Score", desc: "Estimate the likelihood of organic sharing and amplification based on content characteristics and current trend velocity." },
            { name: "Cultural Context Check", desc: "Ensure messaging aligns with local cultural nuances and avoids unintended insensitivities in global markets." }
        ]
      },
      {
        id: "8.4",
        title: "Campaign Setup Simulator",
        description: "Model your entire campaign structure to optimize logistics, budget allocation, and timelines.",
        subFeatures: [
            { name: "Budget Allocation Optimizer", desc: "AI-driven recommendations for the optimal split of budget between creator fees, paid media boosting, and production costs." },
            { name: "Timeline Stress Testing", desc: "Identify potential bottlenecks in your campaign schedule (e.g., shipping delays, approval lag) before they cause missed deadlines." },
            { name: "Resource Requirement Forecasting", desc: "Predict the internal team hours and asset requirements needed to execute the campaign successfully." },
            { name: "Risk Scenario Planning", desc: "Run 'what-if' simulations for various risks (e.g., Creator drop-out, underperformance) to have contingency plans ready." }
        ]
      }
    ]
  }
];
