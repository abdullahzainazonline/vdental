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
    weekdays: "9:00 AM – 9:00 PM (MYT)",
    saturday: "9:00 AM – 9:00 PM (MYT)",
    sunday: "10:00 AM – 4:00 PM (MYT)",
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
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Dentists", href: "/dentists" },
  { label: "Success Story", href: "/gallery" },
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
    id: 'implant-solutions',
    title: 'Implant Solutions',
    shortDesc: 'Advanced implant solutions delivering natural, long-lasting smiles with world-class standards.',
    icon: 'Drill',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/Implant solutions.png',
    metaTitle: 'Dental Implants SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Restore missing teeth with advanced dental implants, single implants or All-on-4 at V Dental SS2 Petaling Jaya. 500+ successful cases. Flexible payment plans. Free consult.',
    galleryCategory: 'Implants',
    features: [
      { title: 'Single Tooth Implant', desc: 'A permanent and natural-looking replacement for a single missing tooth, designed to blend seamlessly with your existing smile.' },
      { title: 'Immediate Implant (Same-Day Implant)', desc: 'Experience the convenience of having your failing tooth extracted and replaced with an implant in a single visit.' },
      { title: 'Full Arch Implants (All-on-4 / All-on-6 / All-on-X)', desc: 'A comprehensive solution for replacing an entire set of upper or lower teeth, offering unmatched stability and aesthetics.' },
      { title: 'Implant-Supported Bridges', desc: 'An ideal and robust option for replacing multiple adjacent missing teeth without altering healthy neighboring teeth.' },
      { title: 'Implant Overdentures (Fixed/Removable Solutions)', desc: 'Securely snap your dentures into place with implants, eliminating slipping and providing superior comfort.' },
      { title: 'Bone Grafting & Regeneration', desc: 'Advanced techniques to rebuild and strengthen bone volume, creating a solid foundation for future implants.' },
      { title: 'Sinus Lift Surgery', desc: 'A specialized procedure to increase bone density in the upper jaw, ensuring secure placement for posterior implants.' },
      { title: 'Socket Preservation & Ridge Augmentation', desc: 'Protecting the bone structure immediately after an extraction to maintain the natural contours of your jaw.' },
      { title: 'Guided Implant Surgery', desc: 'Utilizing state-of-the-art 3D imaging to plan and execute implant placement with absolute precision.' },
      { title: 'Digital Smile Design Integration', desc: 'Collaborative digital planning to ensure your final implant restorations perfectly complement your facial aesthetics.' },
      { title: 'Precision Implant Positioning', desc: 'Strategic placement guided by advanced technology for optimal longevity, function, and appearance.' },
      { title: 'Failed Implant Management', desc: 'Expert assessment and corrective treatments to address and resolve complications from previous implant procedures.' },
      { title: 'Peri-Implantitis Treatment', desc: 'Targeted therapy to treat infections around implants, preserving the surrounding bone and the implant itself.' },
      { title: 'Implant Removal & Replacement', desc: 'Careful removal of compromised implants followed by strategic replacement to restore oral health and function.' },
      { title: 'Revision Surgery Cases', desc: 'Comprehensive corrective surgeries designed to rescue and meticulously restore complex or previously unsuccessful cases.' }
    ],
    description: 'Advanced implant solutions combining digital precision and surgical expertise. We deliver natural, long-lasting smiles with world-class standards.',
    process: [
      { step: 'Consultation', desc: 'Thorough evaluation and CT Scan' },
      { step: 'Planning', desc: 'Aesthetic-driven digital planning' },
      { step: 'Surgical Phase', desc: 'Precision implant placement' },
      { step: 'Restoration', desc: 'Final customised prosthetic delivery' }
    ],
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics | Braces',
    shortDesc: 'For people who are concerned with biting or teeth misalignment.',
    icon: 'AlignCenter',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 2-20260617T091637Z-3-001/VDENTAL @PHOTO 2/PHOTO 2 (8).png',
    metaTitle: 'Braces & Orthodontics SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Straighten teeth with conventional braces, self-ligating braces, or Invisalign clear aligners at V Dental SS2 Petaling Jaya. 1,000+ braces cases. Flexible payment plans. Free consult.',
    galleryCategory: 'Braces',
    features: [
      { title: 'Essix Clear Retainers', desc: 'Removable, transparent retainers that quietly and effectively hold your teeth in their perfect new position.' },
      { title: 'Night Guard / Splint', desc: 'Custom-fitted oral appliances designed to protect your teeth from grinding and relieve jaw tension while you sleep.' }
    ],
    description: 'Achieve the perfectly aligned smile you\'ve always wanted. We offer a range of comprehensive orthodontic options from conventional brackets to invisible clear aligners.',
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
    shortDesc: 'Receive expert care for all your oral surgery needs.',
    icon: 'Syringe',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/PHOTO 1 (10).png',
    metaTitle: 'Oral Surgery & Extractions SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Safe and professional oral surgeries including soft tissue removal and frenectomy by experienced dental surgeons in SS2.',
    galleryCategory: 'General',
    features: [
      { title: 'Soft Tissue Removal', desc: 'Safe and precise excision of excess or problematic oral tissues to promote better health and comfort.' },
      { title: 'Frenectomy', desc: 'A quick, minimally invasive procedure to release restrictive connective tissues (frenum), improving mobility and function.' },
      { title: 'Apicoectomy', desc: 'A microsurgical endodontic procedure aimed at saving a previously treated tooth by delicately removing the tip of its infected root.' }
    ],
    description: 'Expert care for your oral surgery needs. We provide safe extraction of damaged teeth and soft tissue modifications for optimal oral health.',
    process: [
      { step: 'Consultation', desc: 'Consultation & Imaging' },
      { step: 'Procedure', desc: 'Safe Surgical Procedure' },
      { step: 'Recovery', desc: 'Guided Healing' }
    ],
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover | Veneer | Aesthetic',
    shortDesc: 'Improve your teeth appearance including discoloration, misshape, and misalignment.',
    icon: 'Sparkles',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 2-20260617T091637Z-3-001/VDENTAL @PHOTO 2/PHOTO 2 (35).png',
    metaTitle: 'Smile Makeover & Veneers SS2, Petaling Jaya | V Dental',
    metaDescription: 'Transform your smile with custom porcelain veneers and professional teeth whitening at V Dental SS2 Petaling Jaya. Expert aesthetic dentistry. Flexible payment plans. Free consult.',
    galleryCategory: 'Smile Makeover',
    features: [
      { title: 'Teeth Whitening', desc: 'Professional brightening treatments that safely lift stubborn stains, revealing an instantly radiant and youthful smile.' },
      { title: 'ICON Infiltration', desc: 'A remarkable, drill-free treatment to permanently erase white spots and early decay while preserving healthy enamel.' }
    ],
    description: 'Transform your smile with our cosmetic dentistry services. We expertly treat worn, stained, and chipped teeth using custom veneers and advanced aesthetic corrections.',
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
    shortDesc: 'Essential dental services to address all your oral health needs.',
    icon: 'Stethoscope',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/General dentistry.png',
    metaTitle: 'General Dentistry SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Comprehensive general dentistry services including fillings, scaling, root canal retreatment, and oral health assessments in SS2.',
    galleryCategory: 'General',
    features: [
      { title: 'Inlays / Onlays', desc: 'Durable, custom-made restorations that perfectly repair moderately damaged teeth while conserving your natural tooth structure.' },
      { title: 'Black Triangle Treatment', desc: 'An aesthetic approach to closing dark, open spaces between teeth near the gum line for a seamless, fuller smile.' },
      { title: 'Receding Gum Treatment', desc: 'Effective interventions to restore lost gum tissue, protect exposed roots, and dramatically reduce tooth sensitivity.' },
      { title: 'Crack Tooth Treatment', desc: 'Prompt diagnosis and restorative care designed to halt the progression of fractures and save the compromised tooth.' },
      { title: 'Root Canal Retreatment', desc: 'Advanced endodontic care to clear new infections in previously treated teeth, renewing their health and longevity.' },
      { title: 'Oral Ulcer Treatment', desc: 'Soothing therapies and medications dedicated to rapidly healing painful mouth sores and restoring your daily comfort.' }
    ],
    description: 'Our general dentistry services form the foundation of your oral health. We provide thorough examinations, aesthetic fillings, and preventive treatments for all ages.',
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
    shortDesc: 'Comprehensive care for your gums to prevent and treat gum disease.',
    icon: 'Shield',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/hello.png',
    metaTitle: 'Periodontal & Gum Treatments SS2, Petaling Jaya | V Dental',
    metaDescription: 'Expert care for your gums. Prevent and treat gum disease with deep scaling, gingivectomy, and specialized periodontal treatments.',
    galleryCategory: 'General',
    features: [
      { title: 'Gingivectomy', desc: 'Precise surgical removal of diseased gum tissue to eliminate deep pockets, treat infection, and reshape your gum line.' },
      { title: 'Crown Lengthening Surgery', desc: 'Reshaping gum and bone tissue to expose more of the natural tooth, ideal for restorative needs or correcting a "gummy" smile.' },
      { title: 'Gum Grafting', desc: 'A microsurgical technique utilizing healthy tissue to cover receding gums, actively preventing further root exposure and bone loss.' }
    ],
    description: 'Periodontal treatments focus on the health of your gums and supporting bone. We provide specialized care including deep scaling and gum surgeries to maintain optimal oral health.',
    process: [
      { step: 'Assessment', desc: 'Thorough gum health evaluation' },
      { step: 'Treatment', desc: 'Deep cleaning and gum surgeries' },
      { step: 'Maintenance', desc: 'Regular periodontal follow-ups' }
    ],
  },
  {
    id: 'dental-x-rays',
    title: 'Dental X-Rays',
    shortDesc: 'Utilize advanced imaging technology to diagnose and plan your dental treatments.',
    icon: 'ScanLine',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/PHOTO 1 (23).png',
    metaTitle: 'Dental X-Rays & 3D CBCT Scans SS2, Petaling Jaya | V Dental',
    metaDescription: 'Advanced 3D CBCT, OPG, and digital dental X-rays for precise diagnosis and accurate treatment planning at V Dental Clinic PJ.',
    galleryCategory: 'General',
    features: [
      { title: 'Periapical X-Ray', desc: 'A Periapical (PA) X-ray provides a detailed image of an individual tooth, including the root and surrounding bone structure. It helps diagnose infections, decay, bone loss, and root-related problems with high accuracy. This quick and low-radiation imaging method is commonly used for root canal treatment and dental evaluations.' },
      { title: 'OPG X-Ray (2D Xray)', desc: 'An OPG (Orthopantomogram) X-ray provides a panoramic view of the entire mouth, including all teeth, jawbones, and surrounding structures. It is commonly used for wisdom tooth evaluation, orthodontic treatment, dental implants, and comprehensive oral examinations.' },
      { title: 'Lateral Cephalometric X-Ray', desc: 'A Lateral Cephalometric X-ray is a side-profile dental imaging technique commonly used in orthodontics. It helps dentists and orthodontists evaluate jaw alignment, facial structure, and bite relationships for braces and corrective treatment planning.' },
      { title: 'CBCT Scan (3D xray)', desc: 'A CBCT (Cone Beam Computed Tomography) scan provides advanced 3D dental imaging for precise diagnosis and treatment planning. It allows dentists to evaluate bone structure, nerves, teeth, and surrounding anatomy with exceptional accuracy, making it ideal for implants, surgery, and complex dental procedures.' }
    ],
    description: 'Advanced dental imaging ensures accurate diagnosis. We utilize Periapical, OPG, and CBCT 3D imaging for precise surgery planning.',
    process: [
      { step: 'Consultation', desc: 'Determining necessary imaging' },
      { step: 'Imaging', desc: 'Safe and precise X-ray capture' },
      { step: 'Analysis', desc: 'Detailed professional review' }
    ],
  },
  {
    id: 'kids-dentistry',
    title: 'Kids Dentistry',
    shortDesc: 'Gentle, effective, and protective dental care specifically tailored for children.',
    icon: 'Baby',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/Kid dentistry.jpeg',
    metaTitle: 'Kids & Pediatric Dentistry SS2, Petaling Jaya | V Dental',
    metaDescription: 'Gentle, effective, and child-friendly dental care. We offer fissure sealants, fluoride treatments, and Myobrace early intervention.',
    galleryCategory: 'General',
    features: [
      { title: 'Fissure Sealant', desc: 'Fissure sealants are thin protective coatings applied to the grooves of the back teeth to help prevent cavities. They act as a barrier against food particles and bacteria, making it easier to keep teeth clean and healthy.' },
      { title: 'Fluoride Treatment', desc: 'Fluoride treatment helps strengthen tooth enamel and protect teeth from decay. It is a quick and painless preventive procedure that can reduce the risk of cavities and support overall oral health.' },
      { title: 'Myobrace', desc: 'Myobrace is an early orthodontic treatment designed to correct poor oral habits, improve jaw development, and guide teeth into better alignment. It is commonly used in growing children as an early intervention to support healthy dental and facial development.' },
      { title: 'Stainless Steel Crown / Strip Crown', desc: 'Stainless steel crowns and strip crowns are used to restore damaged or severely decayed teeth. Stainless steel crowns provide strong and durable protection for back teeth, while strip crowns offer a more natural-looking option for front teeth.' },
      { title: 'Space Maintainers', desc: 'Space maintainers are dental appliances used to hold space for permanent teeth when a baby tooth is lost too early. They help guide proper tooth eruption and prevent nearby teeth from shifting out of position.' }
    ],
    description: 'We offer specialized dental care for children, focusing on protection, prevention, and habit correction to ensure a lifetime of healthy smiles.',
    process: [
      { step: 'Evaluation', desc: 'Child-friendly dental check-up' },
      { step: 'Prevention', desc: 'Applying sealants and fluoride' },
      { step: 'Guidance', desc: 'Orthodontic and behavioral guidance' }
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    shortDesc: 'Immediate attention for critical dental issues when you need it most.',
    icon: 'AlertTriangle',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/Emergency.png',
    metaTitle: 'Emergency Dental Care SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Immediate emergency dental care for toothaches, broken teeth, abscesses, and knocked-out teeth in SS2 Petaling Jaya. Call us now.',
    galleryCategory: 'General',
    features: [
      { title: 'Tooth Abscess', desc: 'Immediate, deeply relieving care to safely drain painful infections, clear harmful bacteria, and successfully save the affected tooth.' },
      { title: 'Toothache', desc: 'Rapid assessment and fast-acting intervention to pinpoint the source of severe pain and successfully restore your absolute comfort.' },
      { title: 'Broken Filling', desc: 'Prompt and seamless repair to immediately seal exposed tooth structures, preventing decay, sensitivity, and further damage.' },
      { title: 'Dislodge Crown/Bridge', desc: 'Urgent re-cementing or replacement of loosened dental fixtures to quickly restore the aesthetic appearance and function of your smile.' },
      { title: 'Broken Tooth', desc: 'Fast, highly aesthetic restorations that smoothly repair chipped or cracked teeth to prevent worsening complications.' },
      { title: 'Avulsed Tooth', desc: 'Time-critical, emergency stabilization and reimplantation procedures to maximize the likelihood of saving a spectacularly knocked-out tooth.' },
      { title: 'Lock Jaw', desc: 'Gentle, expert interventions to swiftly relieve muscle spasms or joint displacement, helping you successfully regain a full, normal range of motion.' },
      { title: 'Broken Denture', desc: 'Expedited diagnostic repairs tailored to seamlessly restore the snug fit, structural integrity, and flawless appearance of your appliance.' },
      { title: 'Unstopped Bleeding', desc: 'Immediate, highly professional clinical management dedicated to swiftly controlling post-operative bleeding and actively stabilizing your oral tissues.' }
    ],
    description: 'Dental emergencies require fast and professional care. We are fully equipped to provide immediate relief and long-term resolutions to your urgent needs.',
    process: [
      { step: 'Contact', desc: 'Reach out to our emergency line' },
      { step: 'Immediate Care', desc: 'Pain relief and stabilization' },
      { step: 'Resolution', desc: 'Permanent fix mapping' }
    ],
  },
  {
    id: 'wisdom-teeth-removal',
    title: 'Wisdom Teeth Removal',
    shortDesc: 'Safe and expert extraction of painful or impacted wisdom teeth.',
    icon: 'Scissors',
    image: '/VDENTAL ASSETS/VDENTAL @PHOTO 1-20260617T091550Z-3-001/VDENTAL @PHOTO 1/PHOTO 1 (10).png',
    metaTitle: 'Wisdom Teeth Removal SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Safe, expert extraction of painful or impacted wisdom teeth. Minimal discomfort and rapid recovery with our experienced surgeons.',
    galleryCategory: 'General',
    features: [
      { title: 'Wisdom Tooth Evaluation', desc: 'A thorough radiographic assessment to accurately determine the exact angle, position, and potential impact of erupting third molars.' },
      { title: 'Simple Extraction', desc: 'A swift, entirely straightforward procedure skillfully designed to comfortably remove erupted wisdom teeth without severe complications.' },
      { title: 'Surgical Impaction Removal', desc: 'A meticulously executed surgical approach to safely extract wisdom teeth safely constrained beneath the dense jawbone or gumline.' }
    ],
    description: 'Wisdom teeth often grow without enough space, leading to pain and impaction. Our specialized extraction process ensures minimal discomfort and rapid recovery.',
    process: [
      { step: 'Assessment', desc: 'Detailed X-ray analysis' },
      { step: 'Surgery', desc: 'Safe anesthetic extraction' },
      { step: 'Recovery', desc: 'Post-operation care guide' }
    ],
  },
  {
    id: 'dentures',
    title: 'Denture',
    shortDesc: 'Custom restorative dentures designed for comfort and natural aesthetic.',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    metaTitle: 'Custom Dentures SS2, Petaling Jaya | V Dental Clinic',
    metaDescription: 'Restore your confident smile with custom-made, comfortable, and natural-looking acrylic, flexible, or suction dentures.',
    galleryCategory: 'Cosmetic',
    features: [
      { title: 'Normal Acrylic Denture', desc: 'A reliable, highly traditional and exceptionally cost-effective restorative base crafted to perfectly replace entirely missing teeth with dependable support.' },
      { title: 'Flexible Denture', desc: 'A lightweight, completely metal-free alternative that subtly contours and adapts dynamically to the unique motion of your gums.' },
      { title: 'Suction Dentures', desc: 'An innovative, tightly fitting lower denture technology that precisely harnesses completely natural suction to absolutely prevent frustrating displacement.' }
    ],
    description: 'Regain your confident bite and smile with our high-quality custom dentures. We provide a range of options prioritizing comfort, secure fit, and natural appearance.',
    process: [
      { step: 'Impressions', desc: 'Precise molding of gums' },
      { step: 'Fitting', desc: 'Trial placements for accuracy' },
      { step: 'Finalizing', desc: 'Adjustments and continuous care' }
    ],
  }
];

export const DENTISTS = [
  {
    id: 1,
    name: 'Dr. Veronica Koh',
    title: 'Principal Dentist & Implantologist',
    qualifications: 'Dental Surgeon & Implantologist',
    specialties: ['Implantology', 'Aesthetic Dentistry', 'Braces & Clear Aligners', 'Oral Surgery', 'Smile Makeover', 'Regenerative Dentistry'],
    experience: '11+ years',
    bio: 'Dr. Veronica Koh is a valedictorian graduate and implant-focused clinician with over 11 years of clinical experience in implant dentistry, regenerative dentistry, and aesthetic-driven rehabilitation. She obtained her Postgraduate Diploma in Implant Dentistry (PGDID) from International Medical University and is widely recognised for her comprehensive approach to modern implant and aesthetic dental care.\nHer surgical foundation was built during her 2.5 years of service in the Oral and Maxillofacial Surgery (OMFS) department at Hospital Sungai Buloh, where she gained extensive clinical exposure to advanced oral surgery, soft tissue management, and complex surgical procedures. This experience continues to shape her precise, minimally invasive, and biologically driven treatment philosophy today.\nDr. Koh has a special interest in dental implants, bone regeneration, orthodontics (braces), and aesthetic dentistry. Throughout her clinical career, she has successfully completed more than 1,000 orthodontic cases and over 500 implant cases, focusing on long-term function, facial harmony, and naturally aesthetic outcomes tailored to each patient.\nHer clinical expertise includes implant rehabilitation, immediate implant placement, sinus augmentation, bone grafting, socket preservation, soft tissue management, and contemporary regenerative techniques designed to achieve predictable and stable results. She is particularly passionate about combining surgical precision with aesthetic treatment planning to deliver confident smiles and improved quality of life for her patients.\nBeyond clinical practice, Dr. Koh is actively involved in professional education and advanced implant training. She serves as an Invited Clinical Lecturer and official speaker for the PGDID Implant Dentistry Programme at International Medical University, where she conducts lectures and hands-on workshops in implant dentistry and bone regeneration.\nShe is also a speaker for International Team for Implantology (ITI) Study Club and a featured speaker at the Malaysia International Dental Show for bone regeneration in implant dentistry. In addition, Dr. Koh serves as a Key Opinion Leader (KOL) for biomaterials in implant dentistry and for EthOss Regeneration, advocating modern regenerative protocols and evidence-based minimally invasive approaches in implant therapy.\nKnown for her meticulous attention to detail, patient-centred care, and commitment to clinical excellence, Dr. Koh is dedicated to helping patients achieve healthy, functional, and confident smiles through personalised and contemporary dental solutions.',
    qualificationsList: [
      'Invited Clinical Lecturer for Implant Dentistry and Bone Regeneration in Implant Dentistry, International Medical University',
      'Speaker for International Team for Implantology (ITI) Study Club',
      'Featured Speaker for EthOss Regeneration at Malaysia International Dental Show ( MIDS)',
      'Key Opinion Leader (KOL) for EthOss Regeneration',
      'Key Opinion Leader (KOL) for Biomaterials in Implant Dentistry',
      'Postgraduate Diploma in Dental Implantology (PGDID), International Medical University',
      'Member of The Royal College of Surgeons of Edinburgh',
      'Member of International Team for Implantology (ITI)',
      'Member of Malaysian Oral Implant Association',
      'Member of Malaysian Academy of Aesthetic Dentistry',
      'Certified Invisalign Provider',
      'Certified in Therapeutic & Cosmetic Botox and Dermal Fillers',
      'Member of Malaysian Dental Association'
    ],
    image: '/V Dental Website images/About Us Page/About_Team_[veron].jpg',
    profileImagePC: '/V Dental Website images/Our Dentists Page/Dentists_Profile _Veron_PC.jpeg',
    profileImageMobile: '/V Dental Website images/Our Dentists Page/Dentists_Profile _Veron_Mobile.jpeg',
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
    profileImagePC: '/V Dental Website images/Our Dentists Page/Dentists_Profile _Penny_PC.jpg',
    profileImageMobile: '/V Dental Website images/Our Dentists Page/Dentists_Profile _Penny_Mobile.jpg',
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
    profileImagePC: '/V Dental Website images/Our Dentists Page/Dentists_Profile _Dylan_PC.jpg',
    profileImageMobile: '/V Dental Website images/Our Dentists Page/Dentists_Profile _Dylan_Mobile.jpg',
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
        a: "• Monday – Saturday: 9:00 AM – 9:00 PM\n• Sunday: 10:00 AM – 4:00 PM\n• Public Holidays: Open on selected days\n\nContact us:\n• Phone / WhatsApp: +6010-888 2167\n• Email: vdental.ss2@gmail.com",
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
    after: "/V Dental Website images/Gallery Page/Smile Gallery Images/Gallery_Model_2_After.jpeg",
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
    title: "Experienced Dentists",
    description: "Our dentists have honed their skills to perfection, combining artistry with advanced dental techniques to deliver stunning, confident smile transformations tailored to you.",
    icon: "Heart",
  },
  {
    title: "Expertised in Smile Makeovers",
    description: "We have successfully completed over 1,000+ braces cases and 500+ dental implants, with a proven track record of patient satisfaction. Dr. Veron uses the latest technology and techniques to ensure the best possible outcomes.",
    icon: "Cpu",
  },
  {
    title: "Comprehensive Dental Services",
    description: "From routine check-ups to complex procedures, we provide a wide range of services designed to cater to all your oral health needs, with cutting-edge technology in a comfortable environment.",
    icon: "Award",
  },
];
