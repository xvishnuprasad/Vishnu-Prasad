"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  MapPin,
  Clock,
  Download,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Calendar,
  Award,
  Users,
  Code,
  Brain,
  Zap,
  Globe,
  BookOpen,
  Target,
  TrendingUp,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("")
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "Machine Learning", level: 85, category: "AI/ML" },
    { name: "Deep Learning", level: 80, category: "AI/ML" },
    { name: "LLMs", level: 75, category: "AI/ML" },
    { name: "JavaScript", level: 85, category: "Web Dev" },
    { name: "React.js", level: 80, category: "Web Dev" },
    { name: "Next.js", level: 75, category: "Web Dev" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "C++", level: 75, category: "Programming" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "Firebase", level: 65, category: "Cloud" },
    { name: "Git", level: 85, category: "Tools" },
  ]

  const projects = [
    {
      id: 1,
      title: "Enzo Learn",
      subtitle: "AI-Powered Inclusive Learning Platform",
      description:
        "A revolutionary cloud-based learning platform that automatically scales to handle any number of students. Features AI tutors with lifelike virtual characters offering real-time, personalized help and adaptive lessons.",
      longDescription:
        "Designed and built a comprehensive learning ecosystem that transforms education through artificial intelligence. The platform includes engaging quizzes, flashcards, and memory games that boosted student retention by over 30%. Implemented clear progress-tracking dashboards for both learners and educators to monitor growth and make data-driven decisions.",
      techStack: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS", "WebRTC"],
      features: [
        "AI Tutoring",
        "Virtual Characters",
        "Real-time Adaptation",
        "Progress Analytics",
        "Scalable Architecture",
      ],
      metrics: ["30% increase in retention", "500+ active users", "99.9% uptime"],
      year: "2025",
      status: "Live",
      image: "/images/enzo-learn.jpeg",
      gif: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/xvishnuprasad",
      live: "#",
    },
    {
      id: 2,
      title: "X Drive",
      subtitle: "Decentralized Cloud Storage Platform",
      description:
        "A blockchain-based storage solution empowering users with full data ownership through end-to-end encryption and distributed architecture.",
      longDescription:
        "Developed a cutting-edge decentralized storage platform that eliminates single points of failure. Implemented advanced cryptographic techniques to secure files, ensuring only authorized users can access content. The platform enables seamless file sharing using blockchain technology, reducing costs and improving collaboration.",
      techStack: ["Blockchain", "Solidity", "IPFS", "React", "Node.js", "Cryptography", "Web3"],
      features: [
        "End-to-end Encryption",
        "Blockchain Integration",
        "Distributed Storage",
        "Smart Contracts",
        "Decentralized Sharing",
      ],
      metrics: ["Zero data breaches", "50% cost reduction", "High availability"],
      year: "2024",
      status: "Beta",
      image: "/images/x-drive.png",
      gif: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/xvishnuprasad",
      live: "#",
    },
    {
      id: 3,
      title: "Enterprise Chatbot Suite",
      subtitle: "Multi-Platform AI Assistant",
      description:
        "Intelligent chatbot solutions integrated across Slack and WhatsApp with advanced NLP capabilities and A/B testing optimization.",
      longDescription:
        "Collaborated with cross-functional teams to develop enterprise-grade chatbot solutions. Integrated with multiple platforms and conducted extensive A/B testing on responses, achieving a 15% boost in conversion rates. Utilized REST APIs to enhance functionality with dynamic content delivery and real-time updates.",
      techStack: ["Python", "NLP", "TensorFlow", "REST APIs", "Slack API", "WhatsApp API", "Docker"],
      features: [
        "Multi-platform Integration",
        "A/B Testing",
        "NLP Processing",
        "Real-time Updates",
        "Analytics Dashboard",
      ],
      metrics: ["15% conversion boost", "Multi-platform support", "Real-time responses"],
      year: "2024",
      status: "Production",
      image: "/images/chatbot.webp",
      gif: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/xvishnuprasad",
      live: "#",
    },
    {
      id: 4,
      title: "Smart Robotics Controller",
      subtitle: "IoT-Enabled Robotic System",
      description:
        "Advanced robotics control system with IoT integration for autonomous navigation and task execution.",
      longDescription:
        "Designed and implemented a comprehensive robotics control system featuring autonomous navigation, object recognition, and task automation. The system integrates various sensors and actuators with machine learning algorithms for intelligent decision-making.",
      techStack: ["Python", "ROS", "OpenCV", "IoT", "Raspberry Pi", "Arduino", "TensorFlow"],
      features: [
        "Autonomous Navigation",
        "Object Recognition",
        "IoT Integration",
        "Real-time Control",
        "ML-based Decisions",
      ],
      metrics: ["95% accuracy", "Autonomous operation", "IoT connectivity"],
      year: "2024",
      status: "Prototype",
      image: "/images/robotic-car.jpeg",
      gif: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/xvishnuprasad",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Chatbot Developer",
      company: "Wolfers Tech",
      location: "Chennai, India",
      period: "May 2024 - Present",
      type: "Full-time",
      description:
        "Leading chatbot development initiatives across multiple platforms, focusing on AI-driven conversational experiences.",
      achievements: [
        "Collaborated with cross-functional teams to align chatbot features with business objectives",
        "Integrated chatbots with Slack and WhatsApp, expanding user reach and accessibility",
        "Conducted A/B testing on chatbot responses, achieving 15% boost in conversion rates",
        "Utilized REST APIs to enhance functionality with dynamic content delivery",
      ],
      technologies: ["Python", "NLP", "REST APIs", "Slack API", "WhatsApp API"],
    },
    {
      title: "AI Research Intern",
      company: "SRM Institute Research Lab",
      location: "Chennai, India",
      period: "Jan 2024 - Apr 2024",
      type: "Internship",
      description: "Conducted research on Digital Twin Technology and AI applications in smart systems.",
      achievements: [
        "Researched Digital Twin implementations in manufacturing",
        "Developed ML models for predictive maintenance",
        "Published research paper on AI-driven automation",
        "Collaborated with PhD students on advanced AI projects",
      ],
      technologies: ["Python", "TensorFlow", "Digital Twin", "IoT", "Data Analysis"],
    },
  ]

  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      period: "2023 - 2027",
      cgpa: "8.61",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Structures",
        "Digital Twin Technology",
      ],
      achievements: ["Dean's List", "AI Club President", "Hackathon Winner"],
    },
    {
      degree: "High School",
      institution: "Alagappa Schools",
      location: "Chennai, India",
      period: "2021 - 2023",
      cgpa: "4.0",
      coursework: ["Mathematics", "Physics", "Computer Science"],
      achievements: ["Valedictorian", "Science Fair Winner", "Programming Club Leader"],
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Director",
      company: "Tech Innovations Lab",
      content:
        "Vishnu's work on AI-powered learning platforms is exceptional. His ability to combine technical expertise with user-centric design makes him a valuable asset to any team.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Wolfers Tech",
      content:
        "Working with Vishnu has been incredible. His chatbot solutions increased our conversion rates significantly, and his collaborative approach made the entire project smooth.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const showSection = (section: string) => {
    setCurrentSection(section)
  }

  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <button
            onClick={() => showSection("home")}
            className="text-white/80 hover:text-white transition-colors text-sm font-mono"
          >
            [vishnu.]
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => showSection("about")} className="text-white/60 hover:text-white transition-colors">
              About
            </button>
            <button
              onClick={() => showSection("experience")}
              className="text-white/60 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button onClick={() => showSection("work")} className="text-white/60 hover:text-white transition-colors">
              Work
            </button>
            <button onClick={() => showSection("contact")} className="text-white/60 hover:text-white transition-colors">
              Contact
            </button>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>{currentTime}</span>
            </div>
            <a
              href="https://drive.google.com/file/d/1a35NJdnHuKDrxOF8H4RtJ7v1vDpE-aZY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Résumé</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {currentSection === "home" && (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
          <div className="text-center max-w-5xl relative z-10">
            <div className="mb-8 mt-16">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                <Image
                  src="/images/vishnu-profile.png"
                  alt="Vishnu Prasad"
                  fill
                  className="object-cover scale-110"
                  priority
                />
                <div className="absolute inset-0 ring-2 ring-white/20 ring-offset-2 ring-offset-black rounded-full"></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">I am Vishnu Prasad </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              AI Engineer
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems for a smarter future. Passionate about Robotics, Machine Learning, and
              creating innovative solutions that bridge the gap between human needs and technological possibilities.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="outline" className="border-white/30 text-white/80 bg-white/5">
                <Brain className="w-3 h-3 mr-1" />
                AI Research
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white/80 bg-white/5">
                <Code className="w-3 h-3 mr-1" />
                Full Stack
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white/80 bg-white/5">
                <Zap className="w-3 h-3 mr-1" />
                Robotics
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => showSection("about")}
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <span>Learn more about me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-white/40">•</span>
              <button
                onClick={() => showSection("work")}
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-white/40">•</span>
              <button
                onClick={() => showSection("contact")}
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">20+</div>
                <div className="text-white/60 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">8.7</div>
                <div className="text-white/60 text-sm">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15%</div>
                <div className="text-white/60 text-sm">Conversion Boost</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {currentSection === "about" && (
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-6xl w-full pb-16">
            <button
              onClick={() => showSection("home")}
              className="text-white/60 hover:text-white/80 transition-colors mb-12 text-sm flex items-center gap-2"
            >
              ← Back to Home
            </button>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                {/* Add this photo section at the beginning of the first column */}
                <div className="mb-8 lg:hidden">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-3 border-white/40 shadow-xl bg-white/10">
                    <Image
                      src="/images/vishnu-profile.png"
                      alt="Vishnu Prasad"
                      fill
                      className="object-cover scale-110"
                    />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
                <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                  <p>
                    I'm passionate about Robotics, Artificial Intelligence, Machine Learning, and Web Development. I
                    love bringing these technologies together to create innovative solutions—from smart algorithms that
                    think, to intuitive websites that users enjoy.
                  </p>
                  <p>
                    I believe in learning through building. Whether it's automating processes with AI, designing
                    responsive interfaces, or developing intelligent robotic systems, I'm all about turning ideas into
                    impactful tech.
                  </p>
                  <p>
                    Currently pursuing B.Tech in Computer Science at SRM Institute with a CGPA of 8.61, I've had the
                    opportunity to work on cutting-edge projects and collaborate with amazing teams.
                  </p>
                  <p>
                    Let's connect, collaborate, and build something amazing. I'm always up for geeking out over new
                    projects and ideas!
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/xvishnuprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Github className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/xvishnuprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/xvishnuprasad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Instagram className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </a>
                    <a
                      href="https://x.com/xvishnuprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Twitter className="w-5 h-5 text-white/60 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {/* Add this photo section at the beginning of the second column for desktop */}
                <div className="hidden lg:block">
                  <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <Image
                      src="/images/vishnu-profile.png"
                      alt="Vishnu Prasad"
                      fill
                      className="object-cover scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl"></div>
                  </div>
                </div>

                {/* Skills section continues here */}
                <div>
                  <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Technical Skills
                  </h3>
                  <div className="space-y-6">
                    {["AI/ML", "Programming", "Web Dev", "Tools"].map((category) => (
                      <div key={category}>
                        <h4 className="text-white/80 mb-3 font-medium">{category}</h4>
                        <div className="space-y-3">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                              <div key={index}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-white/70 text-sm">{skill.name}</span>
                                  <span className="text-white/50 text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-1">
                                  <div
                                    className="bg-white/60 h-1 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Languages
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Telugu</span>
                      <span className="text-white/50">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">English</span>
                      <span className="text-white/50">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Tamil</span>
                      <span className="text-white/50">Fluent</span>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Digital Twin Technology",
                      "AI Research",
                      "Robotics",
                      "Technology Trends",
                      "Automation",
                      "IoT",
                    ].map((interest, index) => (
                      <Badge key={index} variant="outline" className="border-white/30 text-white/70 bg-white/5">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {currentSection === "experience" && (
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-6xl w-full pb-16">
            <button
              onClick={() => showSection("home")}
              className="text-white/60 hover:text-white/80 transition-colors mb-12 text-sm flex items-center gap-2"
            >
              ← Back to Home
            </button>

            <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience & Education</h2>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Professional Experience
                </h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-white/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-white rounded-full -left-2 top-0"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                        <p className="text-white/80">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period} • {exp.type}
                        </p>
                      </div>
                      <p className="text-white/70 mb-4">{exp.description}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-white/60 text-sm flex items-start gap-2">
                            <span className="text-white/40 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-white/30 text-white/70 bg-white/5 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Education
                </h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-white/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-white rounded-full -left-2 top-0"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                        <p className="text-white/80">{edu.institution}</p>
                        <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period} • CGPA: {edu.cgpa}
                        </p>
                      </div>
                      <div className="mb-4">
                        <h5 className="text-white/80 font-medium mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="outline"
                              className="border-white/30 text-white/70 bg-white/5 text-xs"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div>
                          <h5 className="text-white/80 font-medium mb-2">Achievements:</h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-white/60 text-sm flex items-center gap-2">
                                <Award className="w-3 h-3 text-white/40" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Testimonials */}
                <div className="mt-16 pb-8">
                  <h3 className="text-2xl font-semibold mb-8 text-white">What People Say</h3>
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="border border-white/20 rounded-lg p-6 bg-white/5">
                        <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-white font-medium">{testimonial.name}</p>
                            <p className="text-white/60 text-sm">
                              {testimonial.role} at {testimonial.company}
                            </p>
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
      )}

      {/* Work Section */}
      {currentSection === "work" && (
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-7xl w-full pb-16">
            <button
              onClick={() => showSection("home")}
              className="text-white/60 hover:text-white/80 transition-colors mb-12 text-sm flex items-center gap-2"
            >
              ← Back to Home
            </button>

            <h2 className="text-4xl md:text-5xl font-bold mb-16">Selected Work</h2>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <div key={project.id} className="group">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="border-white/30 text-white/70 bg-white/5">
                          {project.status}
                        </Badge>
                        <span className="text-white/40 text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-lg mb-4">{project.subtitle}</p>
                      <p className="text-white/80 mb-6 leading-relaxed">{project.longDescription}</p>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-white/70 text-sm flex items-center gap-2">
                              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Impact & Metrics:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.metrics.map((metric, metricIndex) => (
                            <Badge
                              key={metricIndex}
                              variant="outline"
                              className="border-green-500/30 text-green-400 bg-green-500/5"
                            >
                              <TrendingUp className="w-3 h-3 mr-1" />
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-white/30 text-white/70 bg-white/5"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg hover:border-white/40"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>

                    <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <div className="aspect-video rounded-lg overflow-hidden border border-white/20 bg-white/5">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-white/10 text-center pb-16">
              <p className="text-white/60 mb-6">Interested in collaborating or learning more about my work?</p>
              <button
                onClick={() => showSection("contact")}
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto border border-white/20 px-6 py-3 rounded-lg hover:border-white/40"
              >
                <span>Let's work together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {currentSection === "contact" && (
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full pb-16">
            <button
              onClick={() => showSection("home")}
              className="text-white/60 hover:text-white/80 transition-colors mb-12 text-sm flex items-center gap-2"
            >
              ← Back to Home
            </button>

            <h2 className="text-4xl md:text-5xl font-bold mb-16">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat
                    about technology and innovation. Feel free to reach out!
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 border border-white/20 rounded-lg">
                        <Mail className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <a
                          href="mailto:xvishnuprasad@gmail.com"
                          className="text-white hover:text-white/80 transition-colors"
                        >
                          xvishnuprasad@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 border border-white/20 rounded-lg">
                        <Phone className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Phone</p>
                        <a href="tel:+916369908096" className="text-white hover:text-white/80 transition-colors">
                          +91 6369908096
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 border border-white/20 rounded-lg">
                        <MapPin className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Location</p>
                        <p className="text-white">Chennai, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Follow My Journey</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/xvishnuprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Github className="w-5 h-5 text-white/60 group-hover:text-white" />
                      <span className="text-white/80 group-hover:text-white">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/xvishnuprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />
                      <span className="text-white/80 group-hover:text-white">LinkedIn</span>
                    </a>
                    <a
                      href="https://www.instagram.com/xvishnuprasad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Instagram className="w-5 h-5 text-white/60 group-hover:text-white" />
                      <span className="text-white/80 group-hover:text-white">Instagram</span>
                    </a>
                    <a
                      href="https://x.com/xvishnuprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all group"
                    >
                      <Twitter className="w-5 h-5 text-white/60 group-hover:text-white" />
                      <span className="text-white/80 group-hover:text-white">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-white/20 rounded-lg p-8 bg-white/5 mb-8">
                <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Name</label>
                    <Input
                      placeholder="Your Name"
                      className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Subject</label>
                    <Input
                      placeholder="What's this about?"
                      className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white/40 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-white/90 transition-colors">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">&copy; 2024 Vishnu Prasad. Crafted with passion and code.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>Made with Next.js & Tailwind CSS</span>
            <span>•</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
