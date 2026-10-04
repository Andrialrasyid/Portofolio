export const portfolioData = {
  personal: {
    fullName: "MUHAMMAD ANDRI ABDULLAH ROSYID",
    shortName: "M. ANDRI",
    initials: "MA",
    title: "Full Stack Developer & Enterprise System Integrator",
    badge: "Available for High-Impact Projects",
    statusText: "Building scalable enterprise architectures & AI-assisted workflows",
    profileImage: "/Profile.png",
    bio: "Full Stack Developer with a proven track record of independently architecting, building, and deploying internal enterprise dashboards, transactional platforms, and multi-tenant systems. Experienced in collaborating directly with business owners, factory managers, and cross-functional teams to translate complex industrial operations into high-performance web applications.",
    location: "Indonesia",
    availability: "Open to Full Stack, Backend & Enterprise Engineering Roles",
    stats: [
      { label: "Enterprise Systems", value: "5+" },
      { label: "Education", value: "Diploma in Info Management" },
      { label: "Graduation", value: "Graduated 2026" },
      { label: "Architecture", value: "Clean & Scalable" }
    ],
    traits: [
      "Problem Solver",
      "Detail-Oriented",
      "Reliable",
      "Organized",
      "Curious",
      "Quick Learner",
      "Creative",
      "Adaptable",
      "User-Focused",
      "Open to Feedback"
    ],
    currentFocus: [
      { title: "Building Enterprise Solutions", desc: "Industrial dashboards, HRIS, & real-time monitoring" },
      { title: "AI-Assisted Coding", desc: "Pair-programming with LLMs, code generation guardrails, & rapid prototyping" },
      { title: "System Testing & Reliability", desc: "Robust error handling, database indexing, and fault tolerance" }
    ]
  },

  projects: [
    {
      id: "astra-otoparts",
      title: "Human Resource Information System (HRIS)",
      client: "Internship Project",
      category: "Enterprise",
      featured: true,
      summary: "Developed a centralized human resource management system to digitize employee administrative governance at PT Velasto Indonesia.",
      problem: "Administrative workflows were constrained by paper-based performance evaluation processes (IPP/IDP) and manual spreadsheet attendance tracking. This reliance on decentralized, unstructured data caused data redundancy, delayed payroll processing, and high administrative overhead.",
      solution: "Developed a centralized HRIS web application that fully digitalizes human capital management. The system transforms unstructured administrative tasks into a relational, query-optimized ecosystem, establishing a single source of truth for employee data.",
      techStack: ["ASP.NET Core", "C#", "SQL Server", "React.js", "Chart.js", "REST APIs"],
      highlights: [
        "Implemented a robust multi-level approval workflow for HR documentation (IPP, IDP, Transfer Forms), ensuring data integrity through a formal digital chain of command.",
        "Engineered a secure, real-time facial recognition-based attendance system that instantly validates employee entry/exit and automatically calculates working hours, eliminating manual attendance logs.",
        "Granular Role-Based Access Control (RBAC) separating privileges for staff, HR administrators, and executives.",
      ],
      impact: "Streamlined operational visibility for factory management with unified real-time metrics.",
      accentColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      id: "cita-cita-aditama",
      title: "Full-Cycle Enterprise HRIS",
      client: "PT Cita Cita Aditama",
      category: "Enterprise",
      featured: true,
      summary: "End-to-end Human Resource Information System encompassing complex payroll rule calculation, biometric attendance sync, leave management, and recruitment applicant pipeline.",
      problem: "Manual payroll calculations prone to calculation mismatches, tax adjustments (PPh 21), and disconnected recruitment applicant tracking across HR departments.",
      solution: "Built a centralized web portal with a custom-engineered payroll calculation engine, automated attendance deduction algorithms, and an applicant tracking workflow.",
      techStack: ["ASP.NET Core", "C#", "Microsoft SQL Server", "Bootstrap", "Entity Framework", "Clean Architecture"],
      highlights: [
        "Rule-based calculation engine handling tax brackets, overtime multiplier, and deductions",
        "Automated PDF payslip generation and direct banking batch export",
        "Full applicant tracking Kanban pipeline from interview scheduling to job offer letters"
      ],
      impact: "Reduced monthly payroll closing time from days to minutes with zero manual calculation errors.",
      accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "ahm-mrp",
      title: "MRP Part Import & Procurement System",
      client: "Astra Honda Motor (AHM)",
      category: "Enterprise",
      featured: true,
      summary: "High-throughput Material Requirements Planning (MRP) part import and procurement dashboard designed to track international supplier shipments and assembly inventory.",
      problem: "Complex supply chain dependencies with hundreds of imported part numbers led to tracking discrepancies between customs clearance and factory warehouse intake.",
      solution: "Developed an enterprise procurement tracking portal powered by Java Spring Boot backend and responsive Node.js dashboard services.",
      techStack: ["Java Spring Boot", "Node.js", "Oracle Database", "Tailwind CSS", "RESTful APIs"],
      highlights: [
        "Bulk Excel/CSV data reconciliation engine processing thousands of SKUs in seconds",
        "Automated lead-time forecasting and low-stock warning threshold alerts",
        "Audit trail logging for cross-border logistics status transitions"
      ],
      impact: "Maximized procurement transparency and minimized assembly line stockout risks.",
      accentColor: "from-amber-500/20 via-orange-500/10 to-transparent",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      id: "oee-monitoring",
      title: "Overall Equipment Effectiveness (OEE) Monitoring",
      client: "Internship Project",
      category: "Industrial & IoT",
      featured: true,
      summary: "Real-time industrial telemetric calculation and analytical dashboard measuring Availability, Performance, and Quality (APQ) across manufacturing production lines.",
      problem: "Unplanned micro-stops and delayed paper-based downtime recording hindered plant supervisors from identifying production bottlenecks in real time.",
      solution: "Developed real-time OEE dashboard communicating with machine PLCs to capture cycle times, classify downtime causes, and compute overall plant efficiency on the fly.",
      techStack: ["ASP.NET Core", "C#", "SQL Server", "React.js", "Chart.js", "WebSockets"],
      highlights: [
        "Live Availability, Performance & Quality (APQ) calculation engine",
        "Downtime categorization with interactive Pareto analysis charts",
        "Real-time operator shift summary and target throughput tracking"
      ],
      impact: "Delivered 100% automated downtime visibility, raising plant OEE awareness to 89.4%.",
      accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      id: "energy-monitoring",
      title: "Energy Monitoring System",
      client: "Internship Project",
      category: "Industrial & IoT",
      featured: true,
      summary: "Comprehensive factory energy auditing platform tracking multi-point power meters, electrical panel loads, compressed air, and utility consumption.",
      problem: "Undetected power surges during peak electricity tariff hours and lack of per-machine power cost breakdown increased manufacturing overheads.",
      solution: "Implemented energy telemetry platform with Modbus power meter integration, peak load threshold warnings, and cost-per-part energy allocation analytics.",
      techStack: ["ASP.NET Core", "React.js", "SQL Server", "Modbus TCP", "Power BI", "Tailwind CSS"],
      highlights: [
        "Real-time power consumption (kWh) telemetry and peak shaving alerts",
        "Energy cost breakdown mapped directly to specific production work orders",
        "Automated weekly ESG carbon footprint and sustainability compliance reporting"
      ],
      impact: "Enabled proactive energy management and cut idle machine electrical consumption across production cells.",
      accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "maintenance-management",
      title: "Maintenance Management System (CMMS)",
      client: "Internship Project",
      category: "Enterprise Systems",
      featured: true,
      summary: "Digital Computerized Maintenance Management System for scheduling preventative servicing, tracking emergency breakdowns, and managing spare parts stock.",
      problem: "Untracked maintenance backlog, delayed technician dispatch, and frequent stockouts of critical machine components caused extended production outages.",
      solution: "Architected a role-based maintenance portal with automated PM scheduling, digital work order ticket dispatch, MTBF/MTTR analytics, and spare parts threshold warnings.",
      techStack: ["ASP.NET Core", "C#", "SQL Server", "React.js", "REST APIs", "Tailwind CSS"],
      highlights: [
        "Preventative maintenance scheduling with automated ticket generation",
        "Mean Time Between Failures (MTBF) and Mean Time To Repair (MTTR) monitoring",
        "QR code scanning for instant machine history and spare parts inventory lookup"
      ],
      impact: "Reduced emergency repair turnaround time and improved scheduled maintenance compliance.",
      accentColor: "from-blue-500/20 via-indigo-500/10 to-transparent",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      id: "wms",
      title: "Warehouse Management System (WMS)",
      client: "Internship Project",
      category: "Enterprise & Logistics",
      featured: true,
      summary: "Robust inventory warehouse execution platform handling inbound PO verification, bin rack allocation, FIFO dispatch, and barcode inventory counts.",
      problem: "Manual paper picking lists caused inventory discrepancies, misplaced pallet locations, and expired raw material batches.",
      solution: "Engineered warehouse web platform integrating wireless barcode scanner terminals, dynamic bin slotting, and First-In-First-Out (FIFO) material staging.",
      techStack: ["Node.js", "Express", "React.js", "MySQL", "Zebra Barcode SDK", "Tailwind CSS"],
      highlights: [
        "Real-time multi-aisle bin rack map with visual capacity utilization",
        "Automated FIFO batch enforcement preventing material obsolescence",
        "High-speed barcode scanner data ingestion with immediate inventory re-indexing"
      ],
      impact: "Achieved 99.4% warehouse inventory accuracy and significantly cut material retrieval times.",
      accentColor: "from-amber-500/20 via-orange-500/10 to-transparent",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      id: "iot-machine-condition",
      title: "IoT-Based Machine Condition Monitoring System (Sensor & Temperature)",
      client: "Internship Project",
      category: "Hardware & IoT",
      featured: true,
      summary: "Continuous vibration and thermal telemetry network utilizing industrial-grade Banner QM30VT2 physical sensors paired with an Elfin EW11 gateway module to continuously transmit machine telemetry data packets over a local Wi-Fi network for predictive maintenance.",
      problem: "Unpredicted mechanical wear, motor bearing degradation, and coil overheating caused unexpected line stoppages and expensive equipment replacements without continuous condition tracking.",
      solution: "Deployed industrial-grade Banner QM30VT2 physical vibration and temperature sensors mounted directly to factory machines, interfaced with an Elfin EW11 gateway module to continuously stream serialized telemetry data packets over the local Wi-Fi network to a centralized monitoring server and dashboard.",
      techStack: ["Banner QM30VT2", "Elfin EW11 Gateway", "Modbus TCP", "Node.js", "SQL Server", "React.js", "WebSockets"],
      highlights: [
        "High-precision continuous vibration RMS and temperature acquisition via Banner QM30VT2 physical sensors.",
        "Reliable wireless machine data packet transmission over local Wi-Fi infrastructure using Elfin EW11 gateway module.",
        "Real-time anomaly threshold alerting and historical time-series analytics preventing premature motor failures."
      ],
      impact: "Eliminated sudden machine breakdown risks through continuous Wi-Fi condition telemetry and early predictive warnings.",
      accentColor: "from-rose-500/20 via-pink-500/10 to-transparent",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    {
      id: "student-attendance",
      title: "Hardware Integrated Biometric Attendance",
      client: "Institutional Client",
      category: "Hardware & IoT",
      featured: false,
      summary: "Real-time biometric fingerprint scanner integration coupled with a React.js dashboard and high-performance C# backend service.",
      problem: "Slow verification queues and proxy attendance tampering using traditional manual logbooks during peak morning school check-ins.",
      solution: "Connected digital fingerprint reader SDK directly with local C# listener service, instantly pushing validated timestamps to cloud attendance database.",
      techStack: ["React.js", "C# Backend", "ZKTeco Hardware SDK", "MySQL", "Socket.IO"],
      highlights: [
        "Sub-second verification latency (<400ms) with automated audio/visual feedback",
        "Offline-first caching buffer to withstand sudden network disconnections",
        "Automated WhatsApp notification to parents upon verified student check-in"
      ],
      impact: "Eliminated proxy attendance and reduced morning check-in queue times by over 70%.",
      accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      id: "asri-app",
      title: "Asri App - Cross-Platform Digital Library",
      client: "Independent / Mobile Platform",
      category: "Mobile",
      featured: false,
      summary: "Modern cross-platform mobile application providing seamless catalog browsing, digital book borrowing, reading progress synchronization, and community reviews.",
      problem: "Physical library loans suffered from forgotten return dates, lost cards, and cumbersome manual catalog searches.",
      solution: "Created an intuitive, dark-mode first mobile application with offline reading capabilities, automated due date push notifications, and rich search filters.",
      techStack: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL"],
      highlights: [
        "Fluid gesture interactions and custom dark-theme reading layout",
        "Offline book progress caching with background cloud sync",
        "Automated loan duration countdown with push notification reminders"
      ],
      impact: "Increased user reading engagement with 4.8-star user satisfaction rating.",
      accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      id: "community-lan-wlan",
      title: "Community LAN/WLAN Infrastructure (RT/RW Net)",
      client: "Community Network Provider",
      category: "Network Infrastructure",
      featured: true,
      summary: "High-performance community internet distribution network featuring MikroTik RouterOS gateway, multi-VLAN distribution, bandwidth QoS queues, and hotspot captive portal.",
      problem: "Bandwidth hogging, broadcast storms, and unsecured user access in a multi-tenant residential environment degraded connection stability.",
      solution: "Configured robust enterprise-grade network topology with MikroTik MTCNA principles, dynamic Queue Tree QoS, PPPoE client tunnels, and voucher authentication.",
      techStack: ["MikroTik RouterOS", "MTCNA Architecture", "User Manager / RADIUS", "Ubiquiti UniFi", "GPON Fiber"],
      highlights: [
        "Per-user bandwidth rate-limiting with hierarchical Queue Tree QoS",
        "VLAN network segmentation ensuring tenant traffic privacy and isolation",
        "Automated captive portal hotspot billing with Radius voucher token authentication"
      ],
      impact: "Provided reliable, low-jitter internet access for hundreds of concurrent residential users.",
      accentColor: "from-violet-500/20 via-purple-500/10 to-transparent",
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20"
    }
  ],

  capabilities: {
    overview: "Specialized in architecting high-reliability systems from the database tier up to modern reactive interfaces, augmented with cutting-edge AI engineering workflows.",
    categories: [
      {
        name: "Frontend",
        icon: "Layout",
        skills: ["React.js", "Next.js", "React Native", "Bootstrap", "jQuery", "Laravel Blade", "HTML/CSS/JS"]
      },
      {
        name: "Backend",
        icon: "Server",
        skills: ["ASP.NET Core (C#)", "Node.js", "Java Spring Boot", "PHP (Laravel, CodeIgniter)"]
      },
      {
        name: "Database",
        icon: "Database",
        skills: ["MySQL", "Microsoft SQL Server", "Oracle Database"]
      },
      {
        name: "Tools & Deployment",
        icon: "Cpu",
        skills: ["CI/CD", "Github", "GitLab", "Apache Tomcat", "Cursor", "Antigravity (AI-Assisted)"]
      }
    ],
    detailedCards: [
      {
        id: "fullstack-api",
        title: "Full Stack & API Development",
        subtitle: "ENTERPRISE SYSTEMS & TRANSACTIONAL LOGIC",
        description: "Specialized in engineering RESTful APIs and rule-based calculation engines, including an automated payroll system processing attendance, overtime, and deduction logic, plus role-based access control (RBAC) for multi-tier user permissions. Backend architecture spans C# .NET Core, Java Spring Boot, and Node.js, backed by relational database design across SQL Server, Oracle, and MySQL.",
        tags: ["RESTful API", "Database Design", "Authentication", "RBAC", "Business Logic", "SQL Optimization"],
        icon: "Layers",
        color: "emerald"
      },
      {
        id: "infrastructure-reliability",
        title: "INFRASTRUCTURE RELIABILITY",
        subtitle: "Network & Infrastructure Engineering",
        description: "MikroTik Certified Network Associate (MTCNA) with hands-on experience designing and deploying LAN/WLAN topologies, configuring routers, switches, and firewall rules for secure, stable connectivity. Background extends into infrastructure monitoring (Zabbix) and hardware-to-network integration, including streaming real-time IoT sensor data over Wi-Fi into production dashboards.",
        tags: ["Network Architecture", "MikroTik (MTCNA)", "LAN/WLAN Design", "Firewall Configuration", "QoS & Traffic Management", "VLAN Segmentation", "Network Monitoring", "IoT Integration"],
        icon: "Network",
        color: "cyan"
      }
    ]
  },

  recognition: [
    {
      id: "huawei-ict",
      title: "National Finalist (Network Track)",
      issuer: "Huawei ICT Competition 2024-2025",
      type: "Competition Achievement",
      date: "2024 - 2025",
      description: "Recognized as a top-tier national finalist competing in high-level enterprise routing, switching, network security, and infrastructure optimization scenarios.",
      badge: "National Finalist",
      status: "Verified",
      icon: "Award",
      certificateUrl: "/NETWORK TRACK.pdf",
      certificateFileName: "NETWORK TRACK.pdf"
    },
    {
      id: "mtcna",
      title: "MikroTik Certified Network Associate (MTCNA)",
      issuer: "MikroTik Academy",
      type: "Professional Certification",
      date: "Certified",
      description: "Certified proficiency in RouterOS management, IP routing, firewall traffic filters, bandwidth queue management, wireless networks, and VPN tunnels.",
      badge: "International Credential",
      status: "Verified",
      icon: "ShieldCheck",
      certificateUrl: "/MTCNA.pdf",
      certificateFileName: "MTCNA.pdf"
    },
    {
      id: "cisco-dasar",
      title: "Cisco Dasar Certification",
      issuer: "IDN-Networkers",
      type: "Professional Certification",
      date: "Certified",
      description: "Fundamental and practical mastery in Cisco IOS configuration, VLAN segmentation, inter-VLAN routing, and enterprise switch topologies.",
      badge: "Industry Certified",
      status: "Verified",
      icon: "CheckCircle2",
      certificateUrl: "/Cisco.pdf",
      certificateFileName: "Cisco.pdf"
    },
    {
      id: "jaringan-komputer",
      title: "Jaringan Komputer Dasar Certification",
      issuer: "IDN-Networkers",
      type: "Professional Certification",
      date: "Certified",
      description: "In-depth understanding of OSI & TCP/IP models, subnetting, network packet inspection, DNS/DHCP infrastructure, and client-server connectivity.",
      badge: "Industry Certified",
      status: "Verified",
      icon: "CheckCircle2",
      certificateUrl: "/Jaringan Komputer Dasar.pdf",
      certificateFileName: "Jaringan Komputer Dasar.pdf"
    }
  ],

  contact: {
    heading: "LET'S WORK TOGETHER",
    tagline: "Open to full-stack development, backend engineering, or AI-assisted development roles. Let's build something exceptional.",
    methods: [
      {
        number: "01",
        label: "EMAIL",
        value: "andriialrsyd@gmail.com",
        href: "mailto:andriialrsyd@gmail.com",
        action: "Copy or send email",
        icon: "Mail"
      },
      {
        number: "02",
        label: "GITHUB",
        value: "github.com/Andrialrasyid",
        href: "https://github.com/Andrialrasyid",
        action: "View GitHub profile",
        icon: "Github"
      },
      {
        number: "03",
        label: "LINKEDIN",
        value: "linkedin.com/in/andrialrasyid/",
        href: "https://linkedin.com/in/andrialrasyid/",
        action: "View profile",
        icon: "Linkedin"
      }
    ]
  }
};
