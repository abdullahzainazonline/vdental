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
  { label: "Smile Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: '#1 Best Rated Dentist SS2, Petaling Jaya',
    subtitle: 'Over 1,000+ Braces Cases | New Era of Dental Care',
    cta: 'Book an appointment',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
  },
  {
    id: 5,
    title: 'Experience Modern Comfort',
    subtitle: 'Step into our newly renovated, relaxing reception area designed for your peace of mind',
    cta: 'Visit Us',
    image: 'https://vdental.com.my/wp-content/uploads/2024/03/front-edited-Large.jpeg.webp',
  },
  {
    id: 2,
    title: 'Specialized Dental Treatments',
    subtitle: 'Our Expertise - Satisfaction Guarantee With over 587 Google reviews',
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
  },
];

export const SERVICES = [
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    shortDesc: 'For people who are concerned with biting or teeth misalignment.',
    icon: 'SmilePlus',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
    features: [
      'Conventional Braces',
      'Self-ligating Braces',
      'Invisalign / Clear Aligners'
    ],
    description: 'Achieve the perfectly aligned smile you\'ve always wanted with our comprehensive orthodontic solutions. We offer a range of options from conventional metal or ceramic brackets, advanced self-ligating systems, to nearly invisible clear aligners.',
    process: [
      { step: 'Consultation', desc: 'Consultation & X-ray' },
      { step: 'Planning', desc: 'Detailed Treatment Planning' },
      { step: 'Fitting', desc: 'Fitting of Braces or Aligners' },
      { step: 'Retention', desc: 'Post-treatment retention using retainers' }
    ],
  },
  {
    id: 'oral-surgeries',
    title: 'Oral Surgeries',
    shortDesc: 'Receive expert care for all your oral surgery and implant needs.',
    icon: 'Crosshair',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    features: [
      'Dental Implant',
      'Tooth extractions',
      'Minor Oral Surgeries'
    ],
    description: 'A permanent solution for missing teeth using titanium posts that fuse with the jawbone. We also provide safe removal of damaged or problematic teeth, including complex wisdom tooth extractions.',
    process: [
      { step: 'Consultation', desc: 'Consultation & CT Scan' },
      { step: 'Placement', desc: 'Implant or Surgery Placement' },
      { step: 'Healing', desc: 'Osseointegration period' },
      { step: 'Restoration', desc: 'Abutment & Crown Placement' }
    ],
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover | Aesthetic',
    shortDesc: 'Improve your teeth appearance including discoloration, misshape, and misalignment.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    features: [
      'Dental Veneers',
      'Dental Crowns & Bridges'
    ],
    description: 'Transform your smile with our cosmetic dentistry services. We treat worn down, severely stained, chipped, or missing teeth using custom veneers, professional whitening, and advanced gummy smile correction.',
    process: [
      { step: 'Analysis', desc: 'Digital smile design consultation' },
      { step: 'Preparation', desc: 'Gentle teeth preparation' },
      { step: 'Creation', desc: 'Custom fabrication of restorations' },
      { step: 'Placement', desc: 'Final fitting and polishing' }
    ],
  },
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    shortDesc: 'We offer a wide range of essential dental services to address all your oral health needs.',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    features: [
      'Scaling and polishing',
      'Fillings',
      'Root Canal Treatment'
    ],
    description: 'Our general dentistry services form the foundation of your oral health. We provide thorough examinations, scaling, aesthetic composite fillings, and preventive treatments for both adults and children.',
    process: [
      { step: 'Exam', desc: 'Comprehensive oral examination' },
      { step: 'Diagnosis', desc: 'Identifying any dental issues' },
      { step: 'Treatment', desc: 'Executing the required procedure' },
      { step: 'Prevention', desc: 'Oral hygiene education' }
    ],
  },
  {
    id: 'periodontal-treatments',
    title: 'Periodontal Treatments',
    shortDesc: 'Comprehensive care for your gums to prevent and treat gum disease, ensuring a strong foundation for your teeth.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=800&q=80',
    features: [
      'Root planing'
    ],
    description: 'Periodontal treatments focus on the health of your gums and the bone supporting your teeth. We provide specialized care including deep scaling and root planing to treat gum disease (periodontitis) and maintain optimal oral health.',
    process: [
      { step: 'Assessment', desc: 'Thorough gum health evaluation' },
      { step: 'Treatment', desc: 'Deep cleaning and root planing' },
      { step: 'Maintenance', desc: 'Regular periodontal follow-ups' }
    ],
  },
  {
    id: 'dental-x-rays',
    title: 'Dental X-Rays',
    shortDesc: 'Utilize advanced imaging technology to diagnose and plan your dental treatments in PJ with precision.',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
    features: [
      'OPG/LC/PA/CBCT'
    ],
    description: 'Utilize advanced imaging technology to diagnose and plan your dental treatments in PJ with precision.',
    process: [
      { step: 'Consultation', desc: 'Comprehensive oral exam' }
    ],
  }
];

export const DENTISTS = [
  {
    id: 1,
    name: 'Dr. Veron Koh',
    title: 'Principal Dentist & Implantologist',
    qualifications: 'Dental Surgeon & Implantologist',
    specialties: ['Implantology', 'Aesthetic Dentistry', 'Braces & Clear Aligners', 'Oral Surgery', 'Smile Makeover'],
    experience: '10+ years',
    bio: 'Dr. Veron Koh is a highly skilled and experienced dentist specializing in aesthetic dentistry and implantology. With over 10 years dedicated to helping patients achieve their aesthetic goals, Dr. Veron is well-versed in a range of treatments, including braces, implants, crowns, and veneers. She holds a post-grad diploma in dental implantology from IMU and has successfully completed more than 1,000 braces cases and placed over 500 dental implants, including extensive work in wisdom tooth surgical extraction. Her background includes 2.5 years in the Oral and Maxillofacial Surgery (OMFS) department at Sungai Buloh Hospital, and she was a pioneer dentist at Lau Dental Clinic in Sri Petaling, bringing 6 years of private sector experience. She is a Member of the International Team for Implantology (ITI), Member of The Royal College of Surgeons of Edinburgh, and a Certified Invisalign Provider.',
    qualificationsList: [
      'Member of International Team for Implantology (ITI)',
      'Member of The Royal College of Surgeons of Edinburgh',
      'Member of Malaysian Dental Association',
      'Member of Malaysian Oral Implant Association',
      'Member of Malaysian Academy of Aesthetic Dentistry',
      'Certified Invisalign Provider',
      'Certified in Therapeutic & Cosmetic Botox and Dermal Fillers',
      'Post-grad Diploma in Dental Implantology (IMU)',
    ],
    image: '/V Dental Website images/About Us Page/About_Team_[veron].jpg',
  },
  {
    id: 2,
    name: 'Dr. Penny',
    title: 'Dentist',
    qualifications: 'BDS (MAHSA University)',
    specialties: ['Restorative Dentistry', 'Aesthetic Dentistry', 'Dental Implants', 'Minor Oral Surgery', 'Suction Dentures', 'Sleep Dentistry'],
    experience: 'Experienced',
    bio: 'Dr. Penny graduated from MAHSA University with First Class Honours and was the recipient of an Industry Award in recognition of her academic excellence and clinical achievements. She has completed extensive hands-on training in restorative dentistry, endodontics, periodontics, and oral surgery, including a clinical internship in Oral and Maxillofacial Surgery at UiTM. Driven by a strong commitment to patient-centred care, Dr. Penny’s clinical focus includes restorative and aesthetic dentistry, smile makeovers, dental implants, minor oral surgery, and suction dentures, with a growing interest in sleep dentistry. A passionate advocate of fear-free dentistry, Dr. Penny prioritises patient comfort, trust, and clear communication in every aspect of her care. Known for her gentle and reassuring manner, she is dedicated to delivering personalised dental treatment in a comfortable, welcoming environment.',
    qualificationsList: [
      'Bachelor of Dental Surgery (BDS) — MAHSA University (First Class Honours)',
      'Clinical Internship in OMFS — UiTM',
      'Advanced Training in Restorative Dentistry and Endodontics'
    ],
    image: '/V Dental Website images/About Us Page/About_Team_[penny].jpg',
  },
  {
    id: 3,
    name: 'Dr. Dylan',
    title: 'Dentist',
    qualifications: 'BDS (IMU)',
    specialties: ['Restorative Dentistry', 'Aesthetic Dentistry', 'Dental Implants', 'Minor Oral Surgery', 'Smile Makeovers'],
    experience: 'Experienced',
    bio: 'Dr. Dylan graduated from IMU (International Medical University) and gained valuable clinical experience during his training in the paediatric dentistry and oral surgery departments at Hospital Melaka, where he developed a strong foundation in managing patients of all ages. He has received comprehensive hands-on training in restorative dentistry, endodontics, and periodontics, and is comfortable managing a wide range of dental conditions. His approach is always centred on providing practical, personalised care that suits each patient\'s needs. Dr. Dylan has a strong interest in restorative and aesthetic dentistry, smile makeovers, dental implants, and minor oral surgery. He enjoys helping patients improve both the function and appearance of their smiles while continuing to refine his skills with ongoing learning. Known for his calm and approachable nature, Dr. Dylan takes the time to listen, explain things clearly, and make sure patients feel comfortable throughout their visit. He believes in building trust and creating a positive, supportive dental experience for every patient.',
    qualificationsList: [
      'Bachelor of Dental Surgery (BDS) — International Medical University (IMU)',
      'Clinical Training in Paediatric Dentistry & Oral Surgery — Hospital Melaka',
      'Comprehensive Training in Restorative Dentistry, Endodontics & Periodontics'
    ],
    image: '/V Dental Website images/About Us Page/About_Team_[dylan].jpg',
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Melissa Ng',
    rating: 5,
    text: 'Surgery went well. Dr V was kind and patient. Her explanation on my teeth condition was very clear and comprehensive. Very satisfied with the outcome!',
    service: 'Oral Surgery',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&q=80',
  },
  {
    id: 2,
    name: 'Ahmad Faizal',
    rating: 5,
    text: 'Well equipped, beautifully designed dental clinic with high tech CBCT xray and intraoral scanner! Very impressive facilities and friendly doctors.',
    service: 'General Review',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
  },
  {
    id: 3,
    name: 'Thye Lin Kang',
    rating: 5,
    text: 'Satisfied with dental scaling and polishing here. Dr. Veronica patiently explained my teeth condition and the correct way to brush teeth. Highly Recommended.',
    service: 'Scaling',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 4,
    name: 'Tan Bing Yi',
    rating: 5,
    text: 'Braces treatment near here is the best. The team is very professional and the results are amazing. Dr. Veron is super nice.',
    service: 'Braces',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  },
  {
    id: 5,
    name: 'Nik Nur Shamiha',
    rating: 5,
    text: 'Extracted my wisdom tooth here smoothly today! Thanks a lot Dr V and team for a warm service. 200% recommended!☺️☺️☺️',
    service: 'Wisdom Tooth Extraction',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&q=80',
  },
  {
    id: 6,
    name: 'Priya Letchumanan',
    rating: 5,
    text: 'I’ve been with Dr. Koh for nearly four years. Her exceptional skill, attentiveness, and genuine care are the reasons I’ve stayed. I couldn’t imagine trusting anyone else with my dental care.',
    service: 'General Dentistry',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  }
];

export const STATS = [
  { label: "Braces Cases", value: 1000, suffix: "+" },
  { label: "Dental Implants", value: 500, suffix: "+" },
  { label: "Google Reviews", value: 587, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
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

export const GALLERY_CATEGORIES = ["All", "Braces", "Cosmetic", "Implants", "Smile Makeover", "General"];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Cosmetic",
    title: "Porcelain Crowns",
    description: "Replacing old PFM crowns with full porcelain crowns to restore aesthetics.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_1_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_1_After.jpg",
  },
  {
    id: 2,
    category: "Braces",
    title: "Self-Ligating braces",
    description: "Proclination of upper teeth was corrected with self-ligating braces. The transformation has given the patient a dashing smile and stunning side profile.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_2_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_2_After.jpg",
  },
  {
    id: 3,
    category: "Cosmetic",
    title: "Teeth Whitening",
    description: "Dazzling smile transformation with professional in-office teeth whitening treatment.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_3_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_3_After.jpg",
  },
  {
    id: 4,
    category: "Smile Makeover",
    title: "Full Mouth Rehabilitation",
    description: "Aligning teeth with Invisalign clear aligners, replacing discoloured crowns with porcelain crowns, and adding veneers to restore function and aesthetic. Included a dental implant for the missing tooth.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_4_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_4_After.jpg",
  },
  {
    id: 5,
    category: "Implants",
    title: "Dental Implant",
    description: "Dental implant to replace a missing tooth.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_5_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_5_After.jpg",
  },
  {
    id: 6,
    category: "General",
    title: "Dental Filling",
    description: "Restoring huge chipped tooth with aesthetic filling.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_6_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_6_After.jpg",
  },
  {
    id: 7,
    category: "Cosmetic",
    title: "Crown and Bridge",
    description: "Beautiful smile restored with zirconia crown and bridge. Regaining confidence is priceless.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_7_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_7_After.jpg",
  },
  {
    id: 8,
    category: "Smile Makeover",
    title: "Smile Makeover",
    description: "Transforming smile with braces to correct the misaligned teeth and followed by porcelain veneers to transform the teeth with heavy fluorosis.",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_8_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_8_After.jpg",
  },
  {
    id: 9,
    category: "Braces",
    title: "Gummy Smile Treatment",
    description: "Gummy smiles are a common concern that causes patients to lose confidence. We corrected the slanted smile with braces and bone screws (TADs).",
    before: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_9_Before.jpg",
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_9_After.jpg",
  },
];

export const VALUES = [
  {
    title: "Experienced Doctor",
    description: "We have successfully completed over 1,000+ braces cases and 500+ dental implants, with a proven track record of patient satisfaction. Dr. Veron uses the latest technology and techniques to ensure the best possible outcomes.",
    icon: "Heart",
  },
  {
    title: "Expertised in Smile Makeovers",
    description: "Our dentists have honed their skills to perfection, combining artistry with advanced dental techniques to deliver stunning, confident smile transformations tailored to you.",
    icon: "Cpu",
  },
  {
    title: "Comprehensive Dental Services",
    description: "From routine check-ups to complex procedures, we provide a wide range of services designed to cater to all your oral health needs, with cutting-edge technology in a comfortable environment.",
    icon: "Award",
  },
];
