export interface GalleryItem {
  id: number;
  title: string;
  category: "Celebrations" | "Spiritual & Values" | "Campus & Life" | "Cultural & Arts";
  location: string;
  img: string;
  objectPosition?: string;
}

export const ALL_GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    title: "Chinmaya Birth Centenary Grand Celebrations",
    category: "Celebrations",
    location: "Central Auditorium",
    img: "/images/gallery/Chinmaya Birth Centenary Celebration1.jpg",
    objectPosition: "object-center",
  },
  {
    id: 2,
    title: "Centenary Cultural Stage Performances",
    category: "Cultural & Arts",
    location: "Main Stage",
    img: "/images/gallery/Chinmaya Birth Centenary Celebration2.jpg",
    objectPosition: "object-center",
  },
  {
    id: 3,
    title: "Dignitaries & Elders Felicitations",
    category: "Celebrations",
    location: "Trivandrum",
    img: "/images/gallery/Chinmaya Birth Centenary Celebration3.jpg",
    objectPosition: "object-center",
  },
  {
    id: 4,
    title: "Gurupoornima Sacred Utsav",
    category: "Spiritual & Values",
    location: "Chinmaya Mission Trivandrum",
    img: "/images/gallery/Gurupoornima.jpg",
    objectPosition: "object-center",
  },
  {
    id: 5,
    title: "Trust Leadership & Assembly Conference",
    category: "Campus & Life",
    location: "CEC Trust Headquarters",
    img: "/images/gallery/trust.jpg",
    objectPosition: "object-center",
  },
  {
    id: 6,
    title: "International Women's Day Commemoration",
    category: "Celebrations",
    location: "Vazhuthacaud Campus",
    img: "/images/gallery/womens day.jpg",
    objectPosition: "object-top",
  },
  {
    id: 7,
    title: "Guru Seva Padak Ceremony",
    category: "Spiritual & Values",
    location: "Chinmaya Mission Auditorium",
    img: "/images/gallery/seva padak.jpg",
    objectPosition: "object-top",
  },
  {
    id: 8,
    title: "Art on the Walls Student Exhibition",
    category: "Cultural & Arts",
    location: "Creative Arts Wing",
    img: "/images/gallery/Art on the walls.jpg",
    objectPosition: "object-top",
  },
  {
    id: 9,
    title: "Chinmaya Vidyalaya Kunnumpuram Campus",
    category: "Campus & Life",
    location: "Kunnumpuram",
    img: "/images/schools/chinmaya kunnumpuram.jpg",
    objectPosition: "object-center",
  },
  {
    id: 10,
    title: "Chinmaya Vidyalaya Kattakada Regional Campus",
    category: "Campus & Life",
    location: "Kattakada",
    img: "/images/schools/chinmaya kattakada.jpg",
    objectPosition: "object-center",
  },
  {
    id: 11,
    title: "Honouring Teachers & Faculty Milestones",
    category: "Spiritual & Values",
    location: "Central Convocation Hall",
    img: "/images/updates/updates11.jpg",
    objectPosition: "object-center",
  },
  {
    id: 12,
    title: "Inter-Vidyalaya Youth Festivities",
    category: "Cultural & Arts",
    location: "Campus Grounds",
    img: "/images/updates/update9.jpeg",
    objectPosition: "object-top",
  },
  {
    id: 13,
    title: "Spiritual Wisdom & Guru Seva Honours",
    category: "Spiritual & Values",
    location: "Mission Hall",
    img: "/images/updates/updates2.jpg",
    objectPosition: "object-top",
  },
  {
    id: 14,
    title: "Creative Arts & Expression Showcase",
    category: "Cultural & Arts",
    location: "Fine Arts Studio",
    img: "/images/updates/updates3.jpg",
    objectPosition: "object-top",
  },
  {
    id: 15,
    title: "Academic Excellence & Learning Culture",
    category: "Campus & Life",
    location: "Vidyalaya Classrooms",
    img: "/images/carousel banners/carousel banner2.jpg",
    objectPosition: "object-center",
  },
  {
    id: 16,
    title: "Values & Heritage in Everyday Learning",
    category: "Spiritual & Values",
    location: "Chinmaya Institutions",
    img: "/images/carousel banners/carousel banner3.jpg",
    objectPosition: "object-center",
  },
];
