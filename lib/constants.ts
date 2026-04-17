export const SITE_CONFIG = {
  name: "V Dental Clinic PJ",
  tagline: "SS2's Trusted Family Dentist",
  description:
    "V Dental Clinic PJ in SS2, Petaling Jaya offers comprehensive dental care including general dentistry, orthodontics, cosmetic dentistry, implants, and oral surgery. Trusted by 10,000+ patients.",
  url: "https://vdental.com.my",
  phone: "+6010-888 2167",
  phoneRaw: "+60108882167",
  whatsapp: "+6010-888 2167",
  whatsappRaw: "60108882167",
  email: "vdental.ss2@gmail.com",
  address:
    "155, Jalan SS2/24, SS2, 47300 Petaling Jaya, Selangor, Malaysia",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.0!2d101.621925!3d3.1158148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b58c85224f%3A0xc95b7919908e9ed0!2sV%20Dental%20Clinic!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy",
  mapUrl:
    "https://www.google.com/maps/place/V+Dental+Clinic/@3.1158148,101.621925,697m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31cc49b58c85224f:0xc95b7919908e9ed0!8m2!3d3.1158148!4d101.621925!16s%2Fg%2F11y1vwl_nt",
  hours: {
    weekdays: "9:00 AM – 9:00 PM",
    saturday: "9:00 AM – 6:00 PM",
    sunday: "10:00 AM – 4:00 PM",
    publicHoliday: "Open on selected days",
  },
  social: {
    facebook: "https://www.facebook.com/vdentalmy",
    instagram: "https://www.instagram.com/vdental.ss2/",
    google: "https://g.page/vdentalclinicpj",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Dentists", href: "/dentists" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Your Smile, Our Passion",
    subtitle: "Comprehensive dental care for the whole family in SS2, Petaling Jaya",
    cta: "Book Appointment",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
  },
  {
    id: 5, // New ID
    title: "Experience Modern Comfort", // New Title
    subtitle: "Step into our newly renovated, relaxing reception area designed for your peace of mind", // New Subtitle
    cta: "Visit Us",
    image: "https://vdental.com.my/wp-content/uploads/2024/03/front-edited-Large.jpeg.webp", // Client Image
  },
  {
    id: 2,
    title: "Pain-Free Modern Dentistry",
    subtitle: "Advanced technology and gentle techniques for a comfortable experience",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80",
  },
  {
    id: 3,
    title: "SS2's Most Trusted Clinic",
    subtitle: "Over 15 years of excellence serving the Petaling Jaya community",
    cta: "Why Choose Us",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80",
  },
  {
    id: 4,
    title: "Transform Your Smile Today",
    subtitle: "From braces to veneers — achieve the confident smile you deserve",
    cta: "View Services",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1920&q=80",
  },
];

export const SERVICES = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    shortDesc: "Routine checkups, cleanings, fillings, and preventive care for the whole family.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    features: [
      "Comprehensive Oral Examinations",
      "Professional Teeth Cleaning (Scaling & Polishing)",
      "Tooth-Coloured Fillings",
      "Root Canal Treatment",
      "Tooth Extraction",
      "Dental X-Rays & Diagnostics",
      "Fluoride Treatments",
      "Gum Disease Screening",
    ],
    description:
      "Our general dentistry services form the foundation of your oral health. We provide thorough examinations, professional cleanings, and preventive treatments to keep your teeth and gums healthy. Using the latest digital X-ray technology and gentle techniques, we ensure every visit is comfortable and effective.",
    process: [
      { step: "Consultation", desc: "Comprehensive oral exam with digital X-rays" },
      { step: "Diagnosis", desc: "Detailed treatment plan discussion" },
      { step: "Treatment", desc: "Gentle, pain-free procedures" },
      { step: "Follow-Up", desc: "Ongoing care and prevention advice" },
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    shortDesc: "Braces, clear aligners, and teeth straightening solutions for all ages.",
    icon: "SmilePlus",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    features: [
      "Metal Braces",
      "Ceramic (Clear) Braces",
      "Self-Ligating Braces",
      "Clear Aligners (Invisalign-type)",
      "Retainers",
      "Early Orthodontic Assessment for Children",
      "Bite Correction",
      "Jaw Alignment Treatment",
    ],
    description:
      "Achieve the perfectly aligned smile you've always wanted with our comprehensive orthodontic solutions. Whether you prefer traditional braces or invisible aligners, our orthodontic specialists will create a customized treatment plan that fits your lifestyle and goals.",
    process: [
      { step: "Assessment", desc: "Detailed dental scans and impressions" },
      { step: "Planning", desc: "Custom treatment timeline created" },
      { step: "Fitting", desc: "Comfortable braces or aligner fitting" },
      { step: "Adjustments", desc: "Regular check-ups until perfect alignment" },
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDesc: "Teeth whitening, veneers, and smile makeovers for a radiant smile.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=800&q=80",
    features: [
      "Professional Teeth Whitening",
      "Porcelain Veneers",
      "Composite Bonding",
      "Smile Makeover Design",
      "Tooth Recontouring",
      "Gum Contouring",
      "Dental Crowns & Bridges",
      "Enamel Shaping",
    ],
    description:
      "Transform your smile with our cosmetic dentistry services. From professional whitening that brightens your teeth by several shades to custom porcelain veneers that create a flawless appearance, we combine artistry with dental science to give you the smile you've always dreamed of.",
    process: [
      { step: "Smile Analysis", desc: "Digital smile design consultation" },
      { step: "Design", desc: "Custom mockup of your new smile" },
      { step: "Preparation", desc: "Gentle tooth preparation if needed" },
      { step: "Transformation", desc: "Beautiful results revealed" },
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants & Oral Surgery",
    shortDesc: "Permanent tooth replacement and minor surgical procedures.",
    icon: "Crosshair",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    features: [
      "Single Tooth Implants",
      "Multiple Teeth Implants",
      "All-on-4 Implant Solutions",
      "Bone Grafting",
      "Wisdom Tooth Extraction",
      "Minor Oral Surgery",
      "Implant-Supported Dentures",
      "Sinus Lift Procedures",
    ],
    description:
      "Restore missing teeth with our advanced dental implant solutions. Dental implants provide the most natural-looking and longest-lasting tooth replacement option available. Our experienced oral surgeons use precise surgical techniques and premium implant systems for predictable, excellent results.",
    process: [
      { step: "CT Scan", desc: "3D imaging for precise implant positioning" },
      { step: "Surgery", desc: "Minimally invasive implant placement" },
      { step: "Healing", desc: "3-6 months integration period" },
      { step: "Restoration", desc: "Custom crown placement for natural look" },
    ],
  },
  {
    id: "periodontal-treatment",
    title: "Periodontal Treatment",
    shortDesc: "Gum disease treatment and prevention for lasting dental health.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1588776815021-3e1b8e0e9a3f?w=800&q=80",
    features: [
      "Gum Disease Diagnosis",
      "Deep Cleaning (Root Planing & Scaling)",
      "Gum Surgery",
      "Gum Grafting",
      "Pocket Reduction Procedures",
      "Regenerative Procedures",
      "Periodontal Maintenance",
      "Halitosis (Bad Breath) Treatment",
    ],
    description:
      "Healthy gums are the foundation of a healthy smile. Our periodontal specialists provide comprehensive gum disease treatment ranging from non-surgical deep cleaning to advanced surgical procedures. We focus on stopping disease progression and restoring your gum health.",
    process: [
      { step: "Evaluation", desc: "Comprehensive periodontal charting" },
      { step: "Deep Clean", desc: "Scaling and root planing treatment" },
      { step: "Review", desc: "Healing assessment after 4-6 weeks" },
      { step: "Maintenance", desc: "Ongoing periodontal care plan" },
    ],
  },
];

export const DENTISTS = [
  {
    id: 1,
    name: "Dr. Voon Huey Ling",
    title: "Principal Dentist & Founder",
    qualifications: "BDS (Malaya), MFDS RCS (Edinburgh)",
    specialties: ["General Dentistry", "Cosmetic Dentistry", "Implant Dentistry"],
    experience: "15+ years",
    bio: "Dr. Voon founded V Dental Clinic with a vision to provide world-class dental care accessible to the SS2 community. With extensive training from the University of Malaya and the Royal College of Surgeons of Edinburgh, she combines clinical expertise with a gentle, patient-focused approach.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    id: 2,
    name: "Dr. Tan Wei Ming",
    title: "Orthodontist",
    qualifications: "BDS (Malaya), MOrth RCS (Edinburgh)",
    specialties: ["Orthodontics", "Clear Aligners", "Pediatric Orthodontics"],
    experience: "10+ years",
    bio: "Dr. Tan is our specialist orthodontist with a passion for creating beautiful, aligned smiles. He has completed advanced training in both traditional braces and clear aligner therapy, offering patients the most suitable treatment options for their needs.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    id: 3,
    name: "Dr. Sarah Ahmad",
    title: "Dental Surgeon",
    qualifications: "BDS (IMU), MFDS RCPS (Glasgow)",
    specialties: ["Oral Surgery", "Periodontics", "Root Canal Treatment"],
    experience: "8+ years",
    bio: "Dr. Sarah brings exceptional skill in surgical and periodontal procedures. Her calm demeanour and meticulous work make her a favourite among patients who require complex treatments. She is dedicated to ensuring every procedure is as comfortable as possible.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Jessica Tan",
    rating: 5,
    text: "The best dental experience I've ever had! Dr. Voon and her team made me feel so comfortable during my wisdom tooth extraction. The clinic is modern, clean, and the staff are incredibly friendly. Highly recommend V Dental to anyone in PJ!",
    service: "Wisdom Tooth Extraction",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Ahmad Razali",
    rating: 5,
    text: "I've been coming to V Dental for my family's dental needs for over 5 years. The kids love coming here because the dentists are so patient and gentle. Their orthodontic treatment for my daughter has been amazing — her smile has completely transformed!",
    service: "Orthodontics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 3,
    name: "Priya Nair",
    rating: 5,
    text: "Got my teeth whitened here and the results are incredible! The process was quick, painless, and my teeth are noticeably whiter. The clinic uses very modern equipment and their digital X-ray system is impressive. Will definitely be back!",
    service: "Teeth Whitening",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: 4,
    name: "David Lim",
    rating: 5,
    text: "Had my dental implant done at V Dental and couldn't be happier with the results. Dr. Voon explained the entire process clearly and made sure I was comfortable throughout. The implant looks and feels completely natural. Thank you V Dental!",
    service: "Dental Implants",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    id: 5,
    name: "Siti Aminah",
    rating: 5,
    text: "I was terrified of going to the dentist but V Dental changed that completely. The environment is calming, the staff are reassuring, and Dr. Sarah is incredibly gentle. My root canal was completely painless! Now I actually don't mind dental visits.",
    service: "Root Canal Treatment",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    id: 6,
    name: "Michael Wong",
    rating: 5,
    text: "Outstanding cosmetic dentistry work! Got porcelain veneers done and my smile has never looked better. The digital smile design consultation was amazing — I could see the results before even starting! Truly world-class dental care in SS2.",
    service: "Porcelain Veneers",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

export const STATS = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Happy Patients", value: 10000, suffix: "+" },
  { label: "Patient Satisfaction", value: 99, suffix: "%" },
  { label: "Dental Procedures", value: 25000, suffix: "+" },
];

export const FAQS = [
  {
    category: "General",
    items: [
      {
        q: "What are your operating hours?",
        a: "• Monday – Friday: 9:00 AM – 9:00 PM\n• Saturday & Sunday: 9:00 AM – 6:00 PM\n• Public Holidays: Open on selected days\n\nContact us:\n• Phone / WhatsApp: +6010-888 2167\n• Email: vdental.ss2@gmail.com",
      },
      {
        q: "Do I need to make an appointment?",
        a: "While walk-ins are welcome, we highly recommend making an appointment to ensure minimal waiting time. You can book online, via WhatsApp, or by calling our clinic directly.",
      },
      { q: "Where is V Dental Clinic located?", a: "We are located at 155, Jalan SS2/24, SS2, 47300 Petaling Jaya, Selangor. We're easily accessible from the LDP and Federal Highway, with ample parking nearby." },
      {
        q: "Is parking available near the clinic?",
        a: "Yes, we offer reserved parking for our patients. Additionally, there is street parking available along Jalan SS2/24 and nearby streets.",
      },
    ],
  },
  {
    category: "Treatments",
    items: [
      {
        q: "Does teeth whitening damage enamel?",
        a: "Professional teeth whitening performed at our clinic is completely safe for your enamel. We use clinically-proven whitening agents at controlled concentrations, supervised by our dentists to ensure both safety and optimal results.",
      },
      {
        q: "How long do dental implants last?",
        a: "With proper care and regular dental check-ups, dental implants can last a lifetime. The crown on top may need replacement after 10-15 years due to normal wear, but the implant itself integrates permanently with your jawbone.",
      },
      {
        q: "What age is appropriate for children's first dental visit?",
        a: "We recommend bringing your child for their first dental visit by their first birthday or within 6 months of their first tooth appearing. Early visits help establish good oral hygiene habits and allow us to monitor dental development.",
      },
      {
        q: "How long does orthodontic treatment take?",
        a: "Treatment duration varies depending on the complexity of your case. On average, braces treatment takes 12-24 months, while clear aligner treatment may take 6-18 months. During your consultation, we'll provide a personalised timeline.",
      },
      {
        q: "Is root canal treatment painful?",
        a: "Modern root canal treatment is virtually painless. We use advanced local anaesthesia and gentle techniques to ensure your comfort throughout the procedure. Most patients report that the experience is no different from getting a regular filling.",
      },
      {
        q: "What is the difference between scaling and teeth whitening?",
        a: "Scaling (professional cleaning) removes plaque and tartar buildup from your teeth and gum line, which helps prevent gum disease. Teeth whitening is a cosmetic procedure that uses bleaching agents to lighten the colour of your teeth beyond their natural shade.",
      },
    ],
  },
  {
    category: "Payment & Insurance",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, credit/debit cards (Visa, Mastercard), online bank transfers, and e-wallets (Touch 'n Go, GrabPay, Boost). We also offer installment plans for major treatments.",
      },
      {
        q: "Do you accept dental insurance?",
        a: "Yes, we accept most major dental insurance panels in Malaysia. Please contact our front desk with your insurance details and we'll verify your coverage before your appointment.",
      },
      {
        q: "Are there payment plans available for expensive treatments?",
        a: "Yes, we offer flexible payment plans for treatments such as dental implants, orthodontics, and cosmetic procedures. Speak to our team about interest-free installment options that suit your budget.",
      },
    ],
  },
  {
    category: "Emergency",
    items: [
      { q: "What should I do in a dental emergency?", a: "Contact us immediately at +6010-888 2167 or WhatsApp +6010-888 2167. For knocked-out teeth, keep the tooth moist (in milk or saliva) and come in within 30 minutes if possible. For severe pain or swelling, we offer same-day emergency appointments." },
      {
        q: "Do you handle emergency cases?",
        a: "Yes, we accommodate dental emergencies during our operating hours. We prioritise emergency patients and aim to see you as quickly as possible. Please call ahead so we can prepare for your arrival.",
      },
      {
        q: "What counts as a dental emergency?",
        a: "Dental emergencies include severe toothache, knocked-out or broken teeth, lost fillings or crowns, dental abscesses (swelling with pus), uncontrolled bleeding, and jaw injuries. If you're unsure, call us and we'll advise you.",
      },
    ],
  },
  {
    category: "COVID-19 & Safety",
    items: [
      {
        q: "What safety measures are in place at the clinic?",
        a: "We maintain the highest standards of infection control and sterilisation. All instruments are autoclaved, treatment rooms are thoroughly disinfected between patients, and our team follows strict hygiene protocols as mandated by the Malaysian Dental Council.",
      },
      {
        q: "Is dental treatment safe during pregnancy?",
        a: "Yes, dental check-ups and cleaning are safe and recommended during pregnancy. We take special precautions for pregnant patients, including avoiding certain X-rays and medications. The second trimester is often the most comfortable time for dental treatment.",
      },
    ],
  },
];

export const GALLERY_CATEGORIES = ["All", "Braces", "Cosmetic", "Implants", "General"];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Braces",
    title: "Orthodontic Treatment - Metal Braces",
    before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=600&q=80",
  },
  {
    id: 2,
    category: "Cosmetic",
    title: "Teeth Whitening Transformation",
    before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=600&q=80",
  },
  {
    id: 3,
    category: "Implants",
    title: "Single Tooth Implant Restoration",
    before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=600&q=80",
  },
  {
    id: 4,
    category: "Cosmetic",
    title: "Porcelain Veneers Smile Makeover",
    before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=600&q=80",
  },
  {
    id: 5,
    category: "Braces",
    title: "Clear Aligner Treatment",
    before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=600&q=80",
  },
  {
    id: 6,
    category: "General",
    title: "Complete Smile Restoration",
    before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=600&q=80",
  },
];

export const VALUES = [
  {
    title: "Patient-First Care",
    description: "Every treatment decision is guided by what's best for your oral health and comfort. We listen, explain, and empower you to make informed choices.",
    icon: "Heart",
  },
  {
    title: "Advanced Technology",
    description: "From digital X-rays to modern sterilisation systems, we invest in the latest dental technology to deliver precise, efficient, and comfortable treatments.",
    icon: "Cpu",
  },
  {
    title: "Trusted Experience",
    description: "With over 15 years serving the SS2 community, our team brings proven expertise across all areas of dentistry, from routine care to complex procedures.",
    icon: "Award",
  },
];
