export const caseStudies = [
  {
    id: "payflow-automation",
    industry: "Fintech",
    company: "PayFlow Inc.",
    title: "Automating Invoice Processing for a Growing Fintech",
    summary: "Reduced manual processing time by 85% with AI-powered document extraction and automated workflows.",
    challenge:
      "PayFlow's operations team was spending 40+ hours per week manually processing invoices from various formats—PDFs, scanned images, and emails. Error rates were climbing as volume increased, and the team couldn't scale without significant hiring.",
    approach: [
      "Conducted a 2-week discovery phase to map existing workflows and identify automation opportunities",
      "Designed an AI pipeline using OCR and LLM-based extraction to handle multiple invoice formats",
      "Built a validation layer with human-in-the-loop for edge cases and exceptions",
      "Integrated directly with their existing accounting software and ERP",
    ],
    techUsed: ["Python", "OpenAI", "AWS Lambda", "PostgreSQL", "React"],
    results: [
      { value: "-85%", label: "Manual Processing Time" },
      { value: "3x", label: "Processing Speed" },
      { value: "99.2%", label: "Accuracy Rate" },
      { value: "$180K", label: "Annual Savings" },
    ],
    testimonial: {
      quote:
        "We went from drowning in paperwork to having a system that handles 90% of invoices automatically. The ROI was clear within the first month.",
      name: "David Chen",
      role: "VP Operations",
      company: "PayFlow Inc.",
    },
    timeline: "8 weeks",
  },
  {
    id: "medcare-data-validation",
    industry: "Healthcare",
    company: "MedCare Solutions",
    title: "Intelligent Data Validation for Healthcare Provider",
    summary: "Achieved 99.2% accuracy in patient data entry while reducing compliance risks significantly.",
    challenge:
      "MedCare was struggling with data entry errors in patient records, leading to billing issues and compliance risks. Manual review processes were slow and couldn't keep pace with growing patient volumes.",
    approach: [
      "Analyzed existing data quality issues and compliance requirements (HIPAA)",
      "Developed an intelligent validation system with real-time error detection",
      "Implemented automated compliance checks against industry standards",
      "Created dashboards for monitoring data quality metrics and audit trails",
    ],
    techUsed: ["Node.js", "TypeScript", "PostgreSQL", "React", "AWS"],
    results: [
      { value: "99.2%", label: "Data Accuracy" },
      { value: "-60%", label: "Error Rate" },
      { value: "100%", label: "Compliance" },
      { value: "-70%", label: "Review Time" },
    ],
    testimonial: {
      quote:
        "The system paid for itself in avoided compliance penalties alone. Our team can now focus on patient care instead of data cleanup.",
      name: "Sarah Johnson",
      role: "Director of IT",
      company: "MedCare Solutions",
    },
    timeline: "12 weeks",
  },
  {
    id: "retailnext-support-ai",
    industry: "E-commerce",
    company: "RetailNext",
    title: "AI-Powered Customer Support Transformation",
    summary: "Deployed an AI chatbot that auto-resolves 90% of support tickets with smart routing for complex issues.",
    challenge:
      "RetailNext's support team was overwhelmed with repetitive queries about order status, returns, and product information. Response times were suffering, and customer satisfaction scores were declining.",
    approach: [
      "Analyzed 6 months of support tickets to identify common patterns and queries",
      "Built an AI chatbot trained on their knowledge base and product catalog",
      "Implemented intelligent routing to escalate complex issues to human agents",
      "Created a feedback loop to continuously improve response accuracy",
    ],
    techUsed: ["Python", "LangChain", "OpenAI", "Next.js", "MongoDB"],
    results: [
      { value: "90%", label: "Auto-Resolved" },
      { value: "-70%", label: "Response Time" },
      { value: "+35%", label: "CSAT Score" },
      { value: "24/7", label: "Availability" },
    ],
    testimonial: {
      quote:
        "Our customers get instant answers now, and our support team handles the interesting problems instead of copy-pasting the same responses.",
      name: "Michael Torres",
      role: "Head of CX",
      company: "RetailNext",
    },
    timeline: "6 weeks",
  },
  {
    id: "logipro-fleet-optimization",
    industry: "Logistics",
    company: "LogiPro",
    title: "Fleet Management Dashboard & Optimization",
    summary: "Built a real-time fleet tracking system that reduced fuel costs by 22% and improved delivery times.",
    challenge:
      "LogiPro was managing their fleet of 200+ vehicles using spreadsheets and manual dispatch. They lacked visibility into real-time locations, driver performance, and route efficiency.",
    approach: [
      "Designed a real-time tracking system with GPS integration",
      "Built predictive models for route optimization based on traffic patterns",
      "Created driver performance dashboards and automated reporting",
      "Implemented alerting for maintenance schedules and compliance",
    ],
    techUsed: ["React", "Node.js", "PostgreSQL", "Redis", "Google Maps API"],
    results: [
      { value: "-22%", label: "Fuel Costs" },
      { value: "+18%", label: "On-Time Delivery" },
      { value: "Real-time", label: "Visibility" },
      { value: "-30%", label: "Admin Time" },
    ],
    testimonial: {
      quote:
        "We finally have complete visibility into our operations. The fuel savings alone justified the investment, but the operational improvements were game-changing.",
      name: "Jennifer Park",
      role: "COO",
      company: "LogiPro",
    },
    timeline: "10 weeks",
  },
  {
    id: "saasly-internal-tools",
    industry: "SaaS",
    company: "SaaSly",
    title: "Custom Internal Tools Suite for Fast-Growing Startup",
    summary: "Delivered a suite of internal tools that consolidated 5 separate systems into one unified platform.",
    challenge:
      "SaaSly's team was context-switching between 5 different tools for customer management, billing, support, and analytics. Data was siloed, and teams were wasting hours on manual data reconciliation.",
    approach: [
      "Mapped all existing workflows and data sources across departments",
      "Designed a unified data model that could replace fragmented systems",
      "Built a modular internal platform with role-based access control",
      "Migrated historical data and trained teams on the new system",
    ],
    techUsed: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS"],
    results: [
      { value: "5→1", label: "Systems Consolidated" },
      { value: "-40%", label: "Context Switching" },
      { value: "+25%", label: "Team Productivity" },
      { value: "Single", label: "Source of Truth" },
    ],
    testimonial: {
      quote:
        "It's like someone finally turned on the lights. We can see everything in one place, and our team spends time on actual work instead of hunting for data.",
      name: "Alex Rivera",
      role: "Head of Operations",
      company: "SaaSly",
    },
    timeline: "14 weeks",
  },
]

export type CaseStudy = (typeof caseStudies)[number]
