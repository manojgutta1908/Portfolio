import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  Award,
  BarChart,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle,
  Cloud,
  Code,
  Database,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Play,
  Settings,
  Table,
  Target,
  Users,
  Zap
} from 'lucide-react';


const App = () => {
  const portfolioData = {
    name: "Manoj Gutta",
    role: "Data Engineer | Data Analyst",
    tagline: "Transforming Raw Data into Business Intelligence",
    summary: "A data pipeline engineer with expertise in building scalable ETL/ELT processes, real-time data streaming, and cloud-native architectures. Specialized in transforming chaotic raw data into clean, analytics-ready datasets.",
    contact: {
      email: "manoj.gutta198@gmail.com",
      location: "Coventry, United Kingdom",
      linkedin: "https://www.linkedin.com/in/gmanoj19/",
      github: "https://github.com/manojgutta1908"
    },
    experience: [
      {
        title: "Data Analyst",
        company: "OpenClassrooms",
        duration: "December 2024 - May 2025 (6 months)",
        description: `Completed a hands-on data bootcamp focused on both analytical and engineering workflows. Designed and implemented end-to-end data pipelines using Python (Pandas, sqlite3), SQL, and Jupyter Notebooks for data extraction, cleaning, transformation, and storage. Built interactive dashboards in Tableau to visualize KPIs and support stakeholder decision-making across projects in healthcare, social media, and environmental analytics. Integrated multi-format data sources (CSV, Excel, JSON), ensured data quality and privacy compliance (GDPR), and applied full data lifecycle principles including version control, automation, and documentation. Developed a strong foundation in data governance, pipeline design, and insight communication.`,
        icon: 'Briefcase'
      },
      {
        title: "Freelance Data Analyst",
       company: "Remote",
       duration: "March 2024 – Jan 2025",
       description: "Developed dynamic Excel dashboards saving 15 hours/month. Built employee productivity dashboards improving operational efficiency by 12%. Created an LSTM-based inventory forecasting model achieving 92% accuracy.",
       icon: 'Briefcase'
      }
    ],
    education: [
      {
       degree: "MSc Data Science",
       institution: "Coventry University",
       duration: "January 2023 – January 2024",
       grade: "Merit",
       icon: 'GraduationCap'
      },
      {
        degree: "Bachelor of Science (BS)",
        institution: "Sri Venkateswara University",
        duration: "June 2019 – May 2022",
        grade: "7.90/10",
        icon: 'GraduationCap'
      },
      {
       degree: "Intermediate",
       institution: "Sri Chaitanya Junior College",
       duration: "June 2017 – March 2019",
       grade: "8.23/10",
       icon: 'GraduationCap'
      }
    ],
    skills: {
      technical: [
     { name: "Python", proficiency: 90, description: "Advanced data processing with Pandas and NumPy", icon: 'Code' },
     { name: "SQL", proficiency: 95, description: "Query optimization, joins, indexing, and warehouse design", icon: 'Database' },
     { name: "PySpark", proficiency: 85, description: "Distributed data processing using RDDs and DataFrames", icon: 'Zap' },
     { name: "Azure", proficiency: 85, description: "Cloud-native services like ADF, Synapse, and Databricks", icon: 'Cloud' },
     { name: "Tableau", proficiency: 95, description: "Interactive dashboards and visual analytics", icon: 'BarChart' },
     { name: "Power BI", proficiency: 85, description: "Business dashboards, DAX, and Power Query transformations", icon: 'BarChart3' },
     { name: "Excel", proficiency: 85, description: "Pivot tables, formulas, and spreadsheet modeling", icon: 'Table' },
     ],
      pipelineExpertise: [
        { name: "Data Preprocessing", description: "The process of transforming raw data into structural format; high-quality data", icon: "Database" },
        { name: "Statistical Analysis", description: "Applying statistical methods to uncover trends, test hypotheses, and support data-driven decision-making.", icon: 'Code' },
        { name: "Data Analysis", description: "Transforming structured data into meaningful and actionable insights", icon: "Zap" },
        { name: "Data Visualization", description: "Revealing hidden patterns and insights through effective data visualization", icon: "BarChart" },
        { name: "Azure Data Factory", description: "A workflow automation tool for ingesting and moving data to the required destinations", icon: "Cloud" }
      ],
      soft: [
        { name: "Critical Thinking", description: "Analytical problem-solving and logical reasoning." },
        { name: "Attention to Detail", description: "Precision in data handling and interpretation." },
        { name: "Data Storytelling", description: "Communicating complex data insights effectively to diverse audiences." },
        { name: "Collaboration", description: "Capable of collaborating with cross-functional teams to deliver customised data solutions." },
        { name: "Problem Solving", description: "Turning complex data challenges into simple solutions." },
      ]
    },
    projects: [
      {
        title: "SQL-Driven Insights into Loan Performance and Customer Behavior",
        description: "SmartLoan is a structured SQL project that normalizes a raw loan dataset, optimizes performance with indexing, and enables analytical insights into loan trends, customer behavior, and repayments.",
        technologies: ["SQL Server", "SSMS"],
        link: "https://github.com/manojgutta1908/Loans-Performance-Stimulation_SQL",
      },
      {
        title: "Dental Pharma KPI Dashboard",
        description: "Built interactive global dashboards for dental pharma projects, visualizing planned vs actual cost, duration, and deliverables, with dedicated metric views and a high-level summary for all stakeholders.",
        technologies: ["Tableau"],
        link: "https://public.tableau.com/shared/MJWDSKYJW?:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Road Safety ML Trends",
        description: "Analyzed NYC traffic accidents using K-Means and Random Forest to identify high-risk zones and contributing factors. Delivered actionable safety insights.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        link: "https://github.com/Manojgutta19/Projects/blob/main/Road_Safety_Trends.ipynb"
      },
      {
        title: "Vertical Search Engine",
        description: "Developed a book search engine using BeautifulSoup to extract data from university library sites, improving academic access.",
        technologies: ["Python", "BeautifulSoup"],
        link: "https://github.com/Manojgutta19/Projects"
      }
    ],
    
    certifications: [
     {
       name: "Google Professional Data Analysis Certificate",
       icon: 'Award',
       link: "https://coursera.org/share/6cd5b3d381d6de575836fac3af31a73c"
     },
     {
       name: "Strategic Management and Leadership Practice (CMI)",
       icon: 'Award',
     },
     {
       name: "Tata Group – Data Visualisation: Empowering Business with Effective Insights",
       icon: 'Award',
       link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_GcE5Jzb3RQ5HaJCiX_1736967815986_completion_certificate.pdf"
     },
      {
       name: "Data Analysis Bootcamp",
       icon: 'Award',
       }
   ]
  };
  // State for animations and interactions
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({
    home: false,
    about: false,
    skills: false,
    projects: false,
    experience: false,
    education: false,
    contact: false
  });
  const [message, setMessage] = useState('');

  // Refs for intersection observer
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null)
  };

  // Scroll to section function
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setIsVisible(prev => ({ ...prev, [sectionId]: true }));
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased bg-black text-gray-100 min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-700/50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          DataPipeline.dev
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`hover:text-purple-400 transition duration-300 ease-in-out ${
                  activeSection === section ? 'text-purple-400 font-bold' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Let's Connect
        </button>
      </nav>

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section 
          id="home" 
          ref={sectionRefs.home}
          className={`container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between text-center md:text-left min-h-screen transition-all duration-1000 ${
            isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="md:w-1/2 lg:w-2/3 space-y-6">
            <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
              🚀 {portfolioData.role} Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                {portfolioData.tagline}
              </span>
            </h1>

            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-purple-400 font-semibold">{portfolioData.name}</span>,with a master’s degree in data science. I’ve worked on a range of data-driven projects using tools and technologies such as Azure Data Lake Storage (ADLS), Python, SQL, Power BI, and Tableau.
             I’ve hands-on experience with building and managing data pipelines, configuring triggers, and working across the entire data lifecycle. I’m really excited to work with an organisation that suits my background and change to work in a fast-paced, collaborative, and growing environment. 
             </p>



            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-xl hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 font-semibold flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-purple-500/50 text-purple-300 rounded-lg shadow-md hover:bg-purple-900/30 transition duration-300 ease-in-out transform hover:scale-105 font-semibold backdrop-blur-sm"
              >
                Contact Me
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700/50">
              <div className="text-center bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-gray-700/30">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1+</p>
                <p className="text-gray-400">Experience</p>
              </div>
              <div className="text-center bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-gray-700/30">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">10+</p>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>
          </div>
           <div className="hidden md:flex md:w-1/2 lg:w-1/3 justify-center mt-10 md:mt-0">
              <img
               src="https://res.cloudinary.com/dwlo6uu9k/image/upload/v1750888672/Portfolio_img_jccnvi.png"
               alt="Data Analysis Illustration"
               className="w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
              />
             </div>
        </section>

        {/* About Section */}
        <section
  id="about"
  ref={sectionRefs.about}
  className={`container mx-auto px-4 py-4 md:py-14 text-center transition-all duration-1000 ${
    isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
        <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
              About Me
            </span>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left items-center">
    {/* Left side: Coding Screen image or visual */}
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg flex items-center justify-center min-h-[300px]">
      <img
      src="https://res.cloudinary.com/dwlo6uu9k/image/upload/v1751569988/Screenshot_2025-07-03_at_20.12.10_ttepn3.png"
      alt="Coding Screen Illustration"
     className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full h-auto max-h-[500px] object-contain"
      />
    </div>

    {/* Right side: Bio + Skills + Buttons */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        Passionate Data Enthusiastic with a <br /> Knack for Finding Hidden Patterns
      </h2>

      <p className="text-gray-300 text-md">
        I'm Manoj Gutta, a data analyst with a Master’s degree in Data Science and hands-on experience in SQL, Python, Tableau, and Excel. I specialize in data visualization, machine learning, and reporting — transforming raw data into actionable insights that support data-driven decisions and improve business performance.
       My journey in data analytics began at Coventry University, where I earned my Master’s in Data Science. Since then, I’ve contributed to several real-world projects that empowered businesses to make smarter, insight-led decisions.
       I'm now seeking opportunities in a knowledge-driven, collaborative, and supportive environment — one that values continuous learning, growth, and teamwork.
      </p>

      {/* Soft Skills */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Analytical Thinking", desc: "Use logic and data analysis to solve problems and support decisions." },
          { title: "Attention to Detail", desc: "Precision in data handling and interpretation." },
          { title: "Data Storytelling", desc: "Communicating complex data insights effectively to diverse audiences." },
          { title: "Collaboration", desc: "Collaborating with cross-functional teams to deliver customised data solutions." },
        ].map((skill, i) => (
          <div
            key={i}
            className="bg-[#1d1e24] border border-[#2e2f36] p-4 rounded-xl text-white shadow-sm"
          >
            <h4 className="text-blue-400 font-semibold mb-1">{skill.title}</h4>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get In Touch
        </button>
        <a
         href="https://drive.google.com/uc?export=download&id=1qf7J5RfxfchabmolwwbrM5quMhrQ-ovG"  
         target="_blank"
          rel="noopener noreferrer"
         download
         className="flex items-center justify-center border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
         <Download className="w-4 h-4 mr-2" />
          Download CV
        </a>

      </div>
    </div>
  </div>
</section>

        {/* Skills Section */}
        <section 
          id="skills" 
          ref={sectionRefs.skills}
          className={`container mx-auto px-4 py-16 md:py-24 text-center transition-all duration-1000 ${
            isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gray-800/30 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-700/30 p-8 md:p-12">
            <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
              Technical Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
              {/* Technical Skills */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-100 flex items-center mb-6">
                  <Code className="mr-3 text-purple-500" size={30} /> 
                  Core Technologies
                </h3>
                {portfolioData.skills.technical.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        {skill.icon === 'Code' && <Code className="w-5 h-5 text-purple-400" />}
                        {skill.icon === 'Database' && <Database className="w-5 h-5 text-blue-400" />}
                        {skill.icon === 'Zap' && <Zap className="w-5 h-5 text-yellow-400" />}
                        {skill.icon === 'Cloud' && <Cloud className="w-5 h-5 text-green-400" />}
                        {skill.icon === 'Settings' && <Settings className="w-5 h-5 text-gray-400" />}
                        {skill.icon === 'BarChart3' && <BarChart3 className="w-5 h-5 text-orange-400" />}
                        {skill.icon === 'BarChart' && <BarChart className="w-5 h-5 text-orange-400" />}
                        {skill.icon === 'Table' && <Table className="w-5 h-5 text-orange-400" />}
                        {skill.icon === 'GitBranch' && <GitBranch className="w-5 h-5 text-orange-400" />}
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible.skills ? `${skill.proficiency}%` : '0%' }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>

              {/* Pipeline Expertise & Soft Skills */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 flex items-center mb-6">
                    <Layers className="mr-3 text-blue-500" size={30} /> 
                    Data Specializations
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {portfolioData.skills.pipelineExpertise.map((item, index) => (
                      <div key={index} className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                            {item.icon === 'Database' && <Database className="w-5 h-5 text-purple-400" />}
                            {item.icon === 'BarChart' && <BarChart className="w-5 h-5 text-purple-400" />}
                            {item.icon === 'Code' && <Code className="w-5 h-5 text-purple-400" />}
                            {item.icon === 'Cloud' && <Cloud className="w-5 h-5 text-purple-400" />}
                            {item.icon === 'Zap' && <Zap className="w-5 h-5 text-purple-400" />}
                            {item.icon === 'CheckCircle' && <CheckCircle className="w-5 h-5 text-purple-400" />}
                            {item.icon === 'GitBranch' && <GitBranch className="w-5 h-5 text-purple-400" />}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-100 mb-2">{item.name}</h4>
                            <p className="text-gray-300 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-100 flex items-center mb-6">
                    <Users className="mr-3 text-green-500" size={30} /> 
                    Professional Skills
                  </h3>
                  <div className="space-y-4">
                    {portfolioData.skills.soft.map((skill, index) => (
                      <div key={index} className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/30 backdrop-blur-sm">
                        <div className="flex items-start space-x-3">
                          <Target className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-100">{skill.name}</h4>
                            <p className="text-gray-300 text-sm">{skill.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          ref={sectionRefs.projects}
          className={`container mx-auto px-4 py-4 md:py-14 text-center transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
            Pipeline Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ✨ Data Analytics & Insight Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Explore my portfolio of data analytics, predictive modeling, and dashboard-driven projects — where I’ve used SQL, Python, Tableau, and machine learning to uncover patterns, optimize operations, and enable smarter decision-making across sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800/30 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-700/30 transform transition duration-300 ease-in-out hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 animate-pulse"></div>
                  <Activity className="w-16 h-16 text-purple-400 relative z-10" />
                </div>
                <div className="p-6 text-left space-y-4">
                  <h3 className="text-2xl font-bold text-gray-50">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-600/20 text-purple-300 text-sm font-medium px-3 py-1 rounded-full border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 font-semibold mt-4 hover:text-purple-300 transition duration-300 ease-in-out"
                  >
                    View Details <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section 
          id="experience" 
          ref={sectionRefs.experience}
          className={`container mx-auto px-4 py-16 md:py-24 transition-all duration-1000 ${
            isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
                Professional Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <div className="space-y-8">
                {portfolioData.experience.map((job, index) => (
                  <div key={index} className="relative bg-gray-800/30 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/30">
                    <div className="absolute -left-3 -top-3 bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full shadow-lg">
                      <Briefcase className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2 ml-6">{job.title}</h3>
                    <p className="text-lg text-purple-400 font-semibold mb-2 ml-6">{job.company}</p>
                    <p className="text-gray-300 mb-3 ml-6">{job.duration}</p>
                    <p className="text-gray-300 leading-relaxed ml-6">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
                Academic & Professional Development
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Education & Certifications
                </span>
              </h2>
              
              {/* Education */}
              <div className="space-y-6 mb-12">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-800/30 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/30">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                        <GraduationCap className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-100 mb-1">{edu.degree}</h3>
                        <p className="text-purple-400 font-semibold mb-1">{edu.institution}</p>
                        <p className="text-gray-300 text-sm">{edu.duration}</p>
                        {edu.grade && <p className="text-gray-300 text-sm">Grade: {edu.grade}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              {/* Certifications Section with Animations */}
             <div className="grid grid-cols-1 gap-4">
               {portfolioData.certifications.map((cert, index) => (
                 <a
                 key={index}
                 href={cert.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex items-center space-x-4 bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                 title="View Certificate"
                 >
                 <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                   <Award className="text-white w-5 h-5 transition duration-300 group-hover:text-yellow-100" />
                 </div>
                 <span className="text-purple-300 font-medium transition duration-300 group-hover:text-purple-400 group-hover:underline">
                   {cert.name}
                 </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          ref={sectionRefs.contact}
          className={`container mx-auto px-4 py-16 md:py-24 text-center transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Turn Data into Actionable Intelligence?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Let’s explore how we can transform raw datasets into meaningful insights, predictive models, and interactive dashboards. 
            Whether it’s through batch data processing, business reporting, or machine learning pipelines — I can help craft scalable, insight-driven solutions tailored to your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="bg-gray-800/30 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-700/30 text-left space-y-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Get In Touch</h3>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-100">Email</p>
                  <a href={`mailto:${portfolioData.contact.email}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-purple-400 hover:text-purple-300 transition">
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
               <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg">
                <Calendar className="text-white w-5 h-5" />
                </div>
                <div>
                 <p className="font-semibold text-gray-100">Schedule a Call</p>
                 <a
                 href="https://calendar.app.google/y6tSTdcqnXrzr2W28" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-purple-400 hover:text-purple-300 transition"
                  >
                 Book a time on my calendar
                 </a>
                 </div>
               </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-100">Location</p>
                  <p className="text-gray-300">{portfolioData.contact.location}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700/50">
                <h4 className="text-lg font-bold text-gray-100 mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a 
                    href={portfolioData.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-110"
                  >
                    <Linkedin className="text-white w-5 h-5" />
                  </a>
                  <a 
                    href={portfolioData.contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-110"
                  >
                    <Github className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-gray-800/30 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-700/30">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">Start Your Data Pipeline Project</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-100 text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900/50 text-gray-100 transition duration-200 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-100 text-sm font-semibold mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900/50 text-gray-100 transition duration-200 backdrop-blur-sm"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                </div>
                <div>
                 <label htmlFor="message" className="block text-gray-100 text-sm font-semibold mb-2">Message</label>
                 <textarea
                   id="message"
                   name="message"
                   maxLength={1000}
                   rows={6}
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   className="w-full px-4 py-3 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900/50 text-gray-100 transition duration-200 backdrop-blur-sm"
                   placeholder="Your message (max 1000 characters)..."
                  />
                 <p className="text-sm text-gray-400 mt-1 text-right">{message.length}/1000 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-xl hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 font-semibold"
                >
                  Let's Connect
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md text-white py-8 text-center border-t border-gray-700/50 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} {portfolioData.name}. Building the future of data infrastructure.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition duration-300"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
