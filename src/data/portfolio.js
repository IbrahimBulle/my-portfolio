export const personalInfo = {
  name: "Abdiwali Ibrahim Bulle",
  shortName: "A. Bulle",
  title: "Computer Science Student and Aspiring Software Engineer",
  location: "Nairobi, Kenya",
  email: "abdiwaliibrahimbulle@gmail.com",
  phone: "+254 708 453 775",
  whatsappUrl: "https://wa.me/254708453775",
  githubUrl: "https://github.com/IbrahimBulle",
  blogUrl: "https://tech-blog-vytu.onrender.com/",
  resumeUrl: "/cv/Abdiwali-Ibrahim-Bulle-CV.pdf",
  //avatarUrl: "https://avatars.githubusercontent.com/u/172893216?v=4",
  avatarUrl: "/src/assets/ibra3.jpeg",
  heroDescription:
    "Backend-first builder focused on Go, APIs, and practical software that solves real problems. I enjoy learning in public, shipping projects, and turning coursework into working products.",
  aboutDescription:
    "I am a Computer Science student at Masinde Muliro University of Science and Technology, with a strong interest in backend engineering, algorithms, and software design. My recent work spans Go services, mental wellness products, agritech ideas, and creative portfolio experiments. Right now I am building projects with Go, HTMX, SQLite, JavaScript, and TypeScript to deepen my practical skills and prepare for strong internship opportunities.",
  contactBlurb:
    "I am most excited about internship and junior opportunities where I can contribute to backend systems, full-stack products, and developer-focused tools while continuing to grow quickly in a strong team.",
  heroTags: ["Go APIs", "Full-Stack Projects", "Open to Internships"],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#portfolio", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    url: personalInfo.githubUrl,
    type: "github",
  },
  {
    label: "Email",
    url: `mailto:${personalInfo.email}`,
    type: "email",
  },
  {
    label: "Blog",
    url: personalInfo.blogUrl,
    type: "blog",
  },
  {
    label: "WhatsApp",
    url: personalInfo.whatsappUrl,
    type: "whatsapp",
  },
];

export const aboutStats = [
  {
    title: "Public Repos",
    subtitle: "55 projects on GitHub",
    type: "repos",
  },
  {
    title: "Certificates",
    subtitle: "10 verified course wins",
    type: "certificates",
  },
  {
    title: "Journey",
    subtitle: "CS student, 2023 to 2027",
    type: "education",
  },
];

export const aboutDetails = [
  {
    label: "Current Focus",
    value: "Go, backend engineering, product-oriented APIs, and software design fundamentals.",
  },
  {
    label: "Coursework",
    value:
      "C, C++, Java, Computer Architecture and Design, web fundamentals, databases, calculus, and linear algebra.",
  },
  {
    label: "Work Style",
    value:
      "I like clean code, practical progress, and projects that teach something useful while solving a real need.",
  },
];

export const skillGroups = {
  frontend: {
    title: "Frontend and Product UX",
    skills: [
      { name: "HTML5", level: "Strong foundation", icon: "html" },
      { name: "CSS3", level: "Responsive interfaces", icon: "css" },
      { name: "JavaScript", level: "Interactive UI work", icon: "javascript" },
      { name: "TypeScript", level: "Growing confidence", icon: "typescript" },
      { name: "React", level: "Component-based apps", icon: "react" },
      { name: "HTMX", level: "Server-driven UI", icon: "htmx" },
    ],
  },
  backend: {
    title: "Backend and Data Systems",
    skills: [
      { name: "Go", level: "Primary learning focus", icon: "go" },
      { name: "Express.js", level: "API development", icon: "express" },
      { name: "PostgreSQL", level: "Querying and schema work", icon: "postgres" },
      { name: "SQLite", level: "Practical local apps", icon: "sqlite" },
      { name: "MySQL", level: "Relational database basics", icon: "mysql" },
      { name: "Docker + Linux", level: "Dev workflow tools", icon: "docker" },
    ],
  },
};

export const focusAreas = [
  {
    title: "Backend Engineering",
    description:
      "I enjoy building clean API layers, auth flows, database-backed services, and tooling that makes products reliable.",
    points: ["Go services", "REST APIs", "Databases and migrations"],
  },
  {
    title: "Practical Product Builds",
    description:
      "I like projects that move beyond tutorials and solve something meaningful for real users or local communities.",
    points: ["Mental wellness", "Agritech ideas", "Useful developer tools"],
  },
  {
    title: "Learning in Public",
    description:
      "Certifications, public repos, and write-ups help me turn each new skill into something visible, testable, and useful.",
    points: ["Boot.dev track", "GitHub portfolio", "Tech blog experiments"],
  },
];

export const educationTimeline = [
  {
    title: "Bachelor of Science in Computer Science",
    subtitle: "Masinde Muliro University of Science and Technology",
    period: "2023 - 2027",
    details:
      "Studying software engineering, algorithms, computer architecture, databases, and web development with a strong pull toward backend systems.",
  },
  {
    title: "Kenya Certificate of Secondary Education",
    subtitle: "Sheikh Khalifa bin Zayed Al-Nahyan Secondary and Technical School",
    period: "2019 - 2022",
    details:
      "Graduated with a B+ and built a strong foundation in Mathematics and Physics that continues to shape how I approach problem solving.",
  },
];

export const journeyTimeline = [
  {
    title: "Mental Health Product Builds",
    subtitle: "AfyaMind, AfyaMindBackend, and related wellness projects",
    period: "April 2026",
    details:
      "Built product ideas around check-ins, assessments, journaling, appointments, and early-support experiences with a strong backend component.",
  },
  {
    title: "Backend Progress with Go",
    subtitle: "RSS aggregation, HTTP, auth, and database-backed services",
    period: "2025 - 2026",
    details:
      "Used Go to explore API design, concurrent work, PostgreSQL integration, and service architecture through hands-on repositories.",
  },
  {
    title: "Creative Web Presence",
    subtitle: "Terminal-style portfolio and public-facing personal site experiments",
    period: "2025",
    details:
      "Shipped a Winbox-inspired portfolio and other UI experiments that mix problem solving with playful presentation.",
  },
  {
    title: "Problem Solving for Local Communities",
    subtitle: "Farm marketplace and market-access project ideas",
    period: "2025 - 2026",
    details:
      "Explored product concepts that help farmers access pricing information, reduce exploitation, and participate in local trade more directly.",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "AfyaMind",
    description:
      "Mental wellness support app for check-ins, journaling, community, appointments, and AI-guided encouragement.",
    category: "Full Stack",
    language: "TypeScript + Go",
    stack: ["TypeScript", "Go", "CSS", "HTML"],
    highlight: "Mental wellness platform",
    codeUrl: "https://github.com/IbrahimBulle/AfyaMind",
    liveUrl: "https://afya-mind-frontend.vercel.app/login",
  },
  {
    id: 2,
    title: "AfyaMindBackend",
    description:
      "Go backend project centered on mental wellness assessments and structured support flows, designed for practical API-driven health experiences.",
    category: "Backend",
    language: "Go",
    stack: ["Go", "REST API", "JSON", "Backend Logic"],
    highlight: "Assessment APIs",
    codeUrl: "https://github.com/IbrahimBulle/AfyaMentBackend",
  },
  {
    id: 3,
    title: "Go RSS Aggregator",
    description:
      "Concurrent RSS aggregator that scrapes multiple feeds, stores posts in PostgreSQL, and exposes authenticated endpoints for users and subscriptions.",
    category: "Backend",
    language: "Go",
    stack: ["Go", "PostgreSQL", "sqlc", "chi", "goose"],
    highlight: "Concurrent feed processing",
    codeUrl: "https://github.com/IbrahimBulle/Go-RSS-Aggregator",
  },
  {
    id: 4,
    title: "Kenya's Farms Market",
    description:
      "Marketplace idea for farmers to register, view market prices, and buy or sell locally while reducing dependence on large distributors.",
    category: "Full Stack",
    language: "JavaScript",
    stack: ["Next.js", "JavaScript", "CSS"],
    highlight: "Agritech marketplace",
    codeUrl: "https://github.com/IbrahimBulle/Kenya-s-Farms-Market",
    liveUrl:
      "https://kenya-s-farms-market-ypok-git-main-ibrahims-projects-61a7ffb9.vercel.app/",
  },
  {
    id: 5,
    title: "Winbox Portfolio",
    description:
      "Terminal-inspired portfolio experiment built with JavaScript and Winbox.js to present development work through a playful desktop metaphor.",
    category: "Frontend",
    language: "HTML + JavaScript",
    stack: ["HTML", "CSS", "JavaScript", "Winbox.js"],
    highlight: "Creative personal branding",
    codeUrl: "https://github.com/IbrahimBulle/my-winbox-portfolio",
    liveUrl: "https://portfolio-winbox.netlify.app/",
  },
  {
    id: 6,
    title: "JS OCR",
    description:
      "Browser-based OCR experiment that extracts text from images in a lightweight interface, turning a simple web page into a practical utility.",
    category: "Frontend",
    language: "HTML",
    stack: ["HTML", "JavaScript", "OCR"],
    highlight: "Utility-focused frontend build",
    codeUrl: "https://github.com/IbrahimBulle/js-ocr",
    liveUrl: "https://merry-mooncake-734d0c.netlify.app/",
  },
  {
    id: 7,
    title: "Cupcake",
    description:
      "Android Basics project in Kotlin focused on building confidence with mobile interfaces, navigation, and application flow.",
    category: "Mobile",
    language: "Kotlin",
    stack: ["Kotlin", "Android"],
    highlight: "Mobile learning build",
    codeUrl: "https://github.com/IbrahimBulle/Cupcake",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "Full Stack" },
  { name: "Backend" },
  { name: "Frontend" },
  { name: "Mobile" },
];

export const certificates = [
  {
    title: "Introduction to Python Course",
    issuer: "Boot.dev",
    date: "November 17, 2025",
    image: "/certificates/python.png",
    credentialId: "c8c17b30-7b1b-4985-adf8-b66fa7f98fa4",
  },
  {
    title: "Learn JavaScript",
    issuer: "Boot.dev",
    date: "October 8, 2025",
    image: "/certificates/javascript.png",
    credentialId: "0a428d62-c0c5-4856-975e-8afc9731750b",
  },
  {
    title: "Learn Linux",
    issuer: "Boot.dev",
    date: "October 5, 2025",
    image: "/certificates/linux.png",
    credentialId: "abc5a2cf-b29b-472e-80b9-e6cfad1da5d5",
  },
  {
    title: "Learn File Servers and CDNs with S3 and CloudFront",
    issuer: "Boot.dev",
    date: "October 1, 2025",
    image: "/certificates/file-servers-cdns-cloudfront.png",
    credentialId: "c185d466-2183-4eb3-9849-34efb71bbad8",
  },
  {
    title: "Go (Basic)",
    issuer: "HackerRank",
    date: "October 31, 2025",
    image: "/certificates/golang-basic.png",
    credentialId: "FI38FAD1F409",
  },
  {
    title: "Learn Docker",
    issuer: "Boot.dev",
    date: "September 26, 2025",
    image: "/certificates/docker.png",
    credentialId: "7424b2bc-4a55-4073-83a5-0c55075d8d08",
  },
  {
    title: "Learn HTTP Servers in Go",
    issuer: "Boot.dev",
    date: "September 18, 2025",
    image: "/certificates/http-servers-go.png",
    credentialId: "b4e35645-f108-405d-80fc-4e6096351018",
  },
  {
    title: "Learn SQL",
    issuer: "Boot.dev",
    date: "September 14, 2025",
    image: "/certificates/sql.png",
    credentialId: "335c1817-c1ac-4070-b283-43d580851e5b",
  },
  {
    title: "Learn HTTP Clients in Go",
    issuer: "Boot.dev",
    date: "August 29, 2025",
    image: "/certificates/http-clients-go.png",
    credentialId: "503c6465-0337-45c3-a6b1-c78ed9718a76",
  },
  {
    title: "Learn Go",
    issuer: "Boot.dev",
    date: "August 27, 2025",
    image: "/certificates/go.png",
    credentialId: "a23d2fbc-f9d7-40e8-9e3c-a9692c713e4f",
  },
];
