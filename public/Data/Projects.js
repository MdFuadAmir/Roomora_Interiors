import img1 from "../Images/q1.jpg";
import img2 from "../Images/q2.jpg";
import img3 from "../Images/q3.jpg";
import img4 from "../Images/q4.jpg";
import img5 from "../Images/q5.jpg";
import img6 from "../Images/q6.jpg";
import img7 from "../Images/q7.jpg";
import img8 from "../Images/q8.jpg";
import img9 from "../Images/q9.jpg";

export const projects = [
  {
    id: 1,
    slug: "the-glass-house",
    title: "The Glass House",
    category: "Residential",
    location: "Beverly Hills, California",
    year: "2025",
    client: "Private Residence",
    duration: "8 Months",
    budget: "$420K",
    area: "6,500 sq ft",

    shortDescription:
      "A minimalist luxury residence designed to dissolve the boundary between interior and nature.",

    fullDescription:
      "The Glass House is a high-end residential project focused on transparency, spatial openness, and uninterrupted natural light. The design combines floor-to-ceiling glazing, custom walnut finishes, and curated stone textures to create a timeless living environment.",

    challenge:
      "Balancing privacy with openness while maximizing panoramic hillside views.",

    solution:
      "Layered smart glass systems, strategic landscaping, and floating architectural partitions.",

    services: [
      "Architecture Planning",
      "Interior Design",
      "Lighting Design",
      "Material Selection",
      "Landscape Integration",
    ],

    materials: [
      "Italian Marble",
      "Smoked Oak",
      "Low-Iron Glass",
      "Brushed Brass",
      "Microcement",
    ],

    stats: {
      rooms: 12,
      floors: 3,
      designers: 8,
      revisions: 14,
    },

    image: img1,

    gallery: [img1, img2, img3],
  },

  {
    id: 2,
    slug: "zenith-hq",
    title: "Zenith HQ",
    category: "Commercial",
    location: "Dubai, UAE",
    year: "2024",
    client: "Zenith Global",
    duration: "11 Months",
    budget: "$1.2M",
    area: "18,000 sq ft",

    shortDescription:
      "A future-forward corporate headquarters built for productivity and prestige.",

    fullDescription:
      "Zenith HQ redefines workplace experience through adaptive collaborative zones, biophilic integration, and cutting-edge acoustic engineering.",

    challenge:
      "Creating collaborative workspaces while preserving executive privacy.",

    solution:
      "Modular glass partitions and layered acoustic insulation systems.",

    services: [
      "Commercial Interior",
      "Workspace Strategy",
      "Lighting Design",
      "Furniture Curation",
    ],

    materials: [
      "Acoustic Panels",
      "Black Steel",
      "Engineered Wood",
      "Glass Partitioning",
    ],

    stats: {
      rooms: 34,
      floors: 6,
      designers: 14,
      revisions: 21,
    },

    image: img2,

    gallery: [img2, img3, img4],
  },

  {
    id: 3,
    slug: "velvet-lounge",
    title: "Velvet Lounge",
    category: "Interior",
    location: "London, UK",
    year: "2025",
    client: "Luxury Hospitality Group",
    duration: "6 Months",
    budget: "$600K",
    area: "7,200 sq ft",

    shortDescription:
      "A moody hospitality interior inspired by timeless jazz aesthetics.",

    fullDescription:
      "Velvet Lounge merges rich textures, ambient lighting, and layered acoustics to create an unforgettable hospitality destination.",

    challenge: "Creating intimacy in a large open-plan venue.",

    solution: "Tiered spatial zoning and dramatic pendant lighting clusters.",

    services: [
      "Interior Styling",
      "Lighting Concept",
      "Custom Furniture",
      "Acoustic Planning",
    ],

    materials: [
      "Velvet Upholstery",
      "Dark Walnut",
      "Bronze Mesh",
      "Marble Tops",
    ],

    stats: {
      rooms: 9,
      floors: 2,
      designers: 6,
      revisions: 11,
    },

    image: img3,

    gallery: [img3, img4, img5],
  },

  {
    id: 4,
    slug: "sapphire-villa",
    title: "Sapphire Villa",
    category: "Residential",
    location: "Santorini, Greece",
    year: "2026",
    client: "Private Client",
    duration: "10 Months",
    budget: "$890K",
    area: "9,000 sq ft",
    shortDescription: "Ocean-facing Mediterranean luxury villa.",
    fullDescription:
      "A serene luxury retreat blending modern geometry with coastal textures.",
    challenge: "Salt-air durability.",
    solution: "Marine-grade finishes.",
    services: ["Architecture", "Interior", "Landscape"],
    materials: ["Travertine", "Limestone", "Oak"],
    stats: { rooms: 15, floors: 2, designers: 9, revisions: 18 },
    image: img4,
    gallery: [img4],
  },

  {
    id: 5,
    slug: "azure-marina",
    title: "Azure Marina",
    category: "Commercial",
    location: "Singapore",
    year: "2025",
    client: "Azure Holdings",
    duration: "14 Months",
    budget: "$2.4M",
    area: "24,000 sq ft",
    shortDescription: "Luxury waterfront commercial complex.",
    fullDescription:
      "A landmark mixed-use design built for global business excellence.",
    challenge: "Waterfront humidity control.",
    solution: "Advanced HVAC integration.",
    services: ["Commercial Planning", "Interior"],
    materials: ["Steel", "Glass", "Stone"],
    stats: { rooms: 42, floors: 8, designers: 16, revisions: 25 },
    image: img5,
    gallery: [img5],
  },

  {
    id: 6,
    slug: "golden-hour-loft",
    title: "Golden Hour Loft",
    category: "Residential",
    location: "New York",
    year: "2024",
    client: "Private Client",
    duration: "5 Months",
    budget: "$280K",
    area: "3,800 sq ft",
    shortDescription: "Warm industrial loft transformation.",
    fullDescription:
      "A refined urban retreat with layered brass and timber textures.",
    challenge: "Low natural light.",
    solution: "Reflective surfaces and indirect lighting.",
    services: ["Loft Redesign"],
    materials: ["Oak", "Brass", "Concrete"],
    stats: { rooms: 7, floors: 1, designers: 5, revisions: 8 },
    image: img6,
    gallery: [img6],
  },

  {
    id: 7,
    slug: "aurora-resort",
    title: "Aurora Resort",
    category: "Commercial",
    location: "Maldives",
    year: "2026",
    client: "Aurora Hospitality",
    duration: "18 Months",
    budget: "$3.8M",
    area: "40,000 sq ft",
    shortDescription: "Luxury island hospitality design.",
    fullDescription: "Ultra-premium resort experience focused on tranquility.",
    challenge: "Remote logistics.",
    solution: "Modular prefabrication.",
    services: ["Resort Planning"],
    materials: ["Teak", "Stone"],
    stats: { rooms: 60, floors: 2, designers: 18, revisions: 29 },
    image: img7,
    gallery: [],
  },

  {
    id: 8,
    slug: "obsidian-penthouse",
    title: "Obsidian Penthouse",
    category: "Interior",
    location: "Tokyo",
    year: "2025",
    client: "Confidential",
    duration: "7 Months",
    budget: "$1.1M",
    area: "5,200 sq ft",
    shortDescription: "Dark luxury penthouse.",
    fullDescription:
      "Sophisticated monochrome interior with precision detailing.",
    challenge: "Preventing visual heaviness.",
    solution: "Light layering strategy.",
    services: ["Interior Design"],
    materials: ["Obsidian Stone", "Black Oak"],
    stats: { rooms: 11, floors: 1, designers: 7, revisions: 13 },
    image: img8,
    gallery: [],
  },

  {
    id: 9,
    slug: "emerald-retreat",
    title: "Emerald Retreat",
    category: "Residential",
    location: "Swiss Alps",
    year: "2026",
    client: "Private Family",
    duration: "12 Months",
    budget: "$2M",
    area: "12,000 sq ft",
    shortDescription: "Luxury mountain sanctuary.",
    fullDescription:
      "A nature-integrated alpine retreat built for year-round comfort.",
    challenge: "Extreme climate insulation.",
    solution: "Passive thermal envelope.",
    services: ["Architecture", "Interior"],
    materials: ["Stone", "Timber", "Glass"],
    stats: { rooms: 18, floors: 3, designers: 11, revisions: 20 },
    image: img9,
    gallery: [],
  },
];
