export interface UpdateItem {
  id: number;
  title: string;
  img: string;
  date: string;
  category: "Celebrations & Yajnam" | "Youth & Camps" | "Academic & Awards" | "Institutional";
  desc?: string;
}

export const ALL_UPDATES: UpdateItem[] = [
  {
    id: 1,
    title: "Mahashivaratri & Ramayanotsavam 2026 Celebrations",
    img: "/images/updates/updates6.jpg",
    date: "26th February 2025",
    category: "Celebrations & Yajnam",
    desc: "District level cultural competitions, devotional chanting, and Mahashivaratri pooja across Chinmaya Vidyalayas.",
  },
  {
    id: 2,
    title: "CHYK Regional Camp & Geethapanchamrutham Jnana Yajnam",
    img: "/images/updates/updates7.jpg",
    date: "2nd & 3rd Dec 2025",
    category: "Youth & Camps",
    desc: "Spiritual discourse, youth empowerment sessions, and Jnana Yajnam led by revered Acharyas.",
  },
  {
    id: 3,
    title: "90th Founder's Day Celebrations",
    img: "/images/updates/updates8.jpg",
    date: "16th to 18th October 2025",
    category: "Celebrations & Yajnam",
    desc: "Commemorating Pujya Gurudev Swami Chinmayanandaji's legacy with cultural programmes and prayer offerings.",
  },
  {
    id: 4,
    title: "Chinmaya Yuva Kendra Adventure Camp 2025",
    img: "/images/updates/updates9.jpg",
    date: "2nd & 3rd Dec 2025",
    category: "Youth & Camps",
    desc: "Outdoor adventure, leadership workshops, yoga, and character building retreat for youth in Kerala.",
  },
  {
    id: 5,
    title: "Chinmaya Vidyalaya Annual Sanskrit & Cultural Fest",
    img: "/images/updates/update10.jpg",
    date: "18th November 2025",
    category: "Celebrations & Yajnam",
    desc: "Celebrating linguistic heritage, classical arts, drama, and youth talents across our school campuses.",
  },
  {
    id: 6,
    title: "Academic Leadership & Faculty Excellence Symposium",
    img: "/images/updates/updates11.jpg",
    date: "10th November 2025",
    category: "Academic & Awards",
    desc: "Annual pedagogical conference focusing on value-based education and transformative teaching techniques.",
  },
  {
    id: 7,
    title: "Dr. Anil Keshan - Awarded Canada Research Chair",
    img: "/images/updates/updates1.jpg",
    date: "12th October 2025",
    category: "Academic & Awards",
    desc: "Prestigious global recognition in academic research and innovation awarded to Chinmaya alumnus.",
  },
  {
    id: 8,
    title: "Guru Seva Padak Felicitation Ceremony",
    img: "/images/updates/updates2.jpg",
    date: "28th September 2025",
    category: "Institutional",
    desc: "Honouring dedicated senior sevaks and teachers for decades of meritorious service to Chinmaya institutions.",
  },
  {
    id: 9,
    title: "The Art on the Walls Exhibition & Workshop",
    img: "/images/updates/updates3.jpg",
    date: "15th August 2025",
    category: "Celebrations & Yajnam",
    desc: "Creative mural art exhibition and fine arts showcase by Vidyalaya student artists.",
  },
  {
    id: 10,
    title: "CSRS - Invites Application for Scientist 2026",
    img: "/images/updates/updates4.jpg",
    date: "05th July 2025",
    category: "Academic & Awards",
    desc: "Official call for research scientist fellowships and academic research positions.",
  },
  {
    id: 11,
    title: "Annual Cultural Fest & CBSE Toppers Felicitation",
    img: "/images/updates/updates5.jpg",
    date: "20th June 2025",
    category: "Academic & Awards",
    desc: "Celebrating stellar board exam results and awarding gold medals to top academic achievers.",
  },
  {
    id: 12,
    title: "Geethapanchamrutham Mandapathara Discourse Series",
    img: "/images/updates/update9.jpeg",
    date: "14th May 2025",
    category: "Celebrations & Yajnam",
    desc: "Enlightening five-day Bhagavad Geeta pravachans on Vedantic philosophy and daily life application.",
  },
];
