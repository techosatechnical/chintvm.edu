export interface Trustee {
  id: number;
  name: string;
  designation: string;
  roleType: "leadership" | "spiritual" | "trustee";
  img: string;
  desc?: string;
}

export const PRESIDENT: Trustee = {
  id: 1,
  name: "H.H. Swami Swaroopananda",
  designation: "President",
  roleType: "leadership",
  img: "/images/trustees/H.H. Swami Swaroopananda-president.jpg",
  desc: "Global Head of Chinmaya Mission worldwide, guiding educational, cultural, and spiritual institutions globally with profound vision and wisdom.",
};

export const CHIEF_SEVAK: Trustee = {
  id: 2,
  name: "Sri. R. Suresh Mohan",
  designation: "Chief Sevak",
  roleType: "leadership",
  img: "/images/trustees/R Suresh mohan -chief sevak.jpg",
  desc: "Leading executive operations, administration, and implementation of trust initiatives across all Chinmaya institutions in Trivandrum and Kollam.",
};

export const SPIRITUAL_PATRONS: Trustee[] = [
  {
    id: 3,
    name: "H.H. Swami Viviktanandaji",
    designation: "Trustee & Spiritual Mentor",
    roleType: "spiritual",
    img: "/images/trustees/H.H. Swami Viviktanandaji-trustee.jpg",
    desc: "Regional Head of Chinmaya Mission Kerala, providing continuous spiritual guidance, value-based mentorship, and Vedantic wisdom.",
  },
  {
    id: 4,
    name: "Swami Abhayananda",
    designation: "Trustee & Acharya",
    roleType: "spiritual",
    img: "/images/trustees/Swami Abhayananda -trustee.jpg",
    desc: "Acharya of Chinmaya Mission Trivandrum, overseeing devotional programmes, youth empowerment, and cultural heritage classes.",
  },
];

export const TRUSTEES: Trustee[] = [
  {
    id: 5,
    name: "Dr. M. G. Sasibhooshan",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Dr. M.G.Sasibhooshan-trustee.jpg",
    desc: "Eminent historian, art critic, and educationist providing strategic insights into academic excellence and Kerala's cultural ethos.",
  },
  {
    id: 6,
    name: "Dr. Arun Surendran",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Dr Arun Surendran-trustee.jpg",
    desc: "Distinguished academician and aerospace engineer spearheading innovation, modern pedagogy, and science initiatives.",
  },
  {
    id: 7,
    name: "Adv. Sunil K. S.",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Adv. Sunil.K.S -trustee.jpg",
    desc: "Senior legal counsel contributing vital governance, regulatory oversight, and administrative wisdom to the trust.",
  },
  {
    id: 8,
    name: "Sri. Prakash Ravindranathan Nair",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Prakash Ravindranathan Nair-trustee.jpg",
    desc: "Experienced management professional aiding institutional growth, strategic planning, and infrastructure development.",
  },
  {
    id: 9,
    name: "Shri. P. Sekharankutty",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Shri.P.Sekharankutty-trustee.jpg",
    desc: "Dedicated educationist committed to student welfare, moral development, and holistic school administration.",
  },
  {
    id: 10,
    name: "Smt. Lakshmi Harigovind",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Smt.Lakshmi Harigovind-trustee.jpg",
    desc: "Community leader fostering cultural activities, values-driven family forums, and holistic child development.",
  },
  {
    id: 11,
    name: "Sri. V. Seshadrinathan",
    designation: "Trustee",
    roleType: "trustee",
    img: "/images/trustees/Sri. V. Seshadrinathan-trustee.jpg",
    desc: "Senior administrator stewarding institutional financial integrity, operational efficiency, and trust governance.",
  },
];
