"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Play, Pause, ChevronLeft, ChevronRight, Calendar, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import GallerySection from "@/components/home/GallerySection";
import { ALL_UPDATES } from "@/data/updates";

const HERO_IMAGES = [
  "/images/carousel banners/carousel banner1.jpg",
  "/images/carousel banners/carousel banner2.jpg",
  "/images/carousel banners/carousel banner3.jpg",
  "/images/carousel banners/carousel banner4.jpg",
];

const VIDEOS = [
  { id: 1, src: "/videos/video1.mp4", title: "Holistic Education" },
  { id: 2, src: "/videos/video2.mp4", title: "Spiritual Growth" },
  { id: 3, src: "/videos/video3.mp4", title: "Cultural Values" },
];

const UPDATES = ALL_UPDATES;

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState<(typeof UPDATES)[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = VIDEOS.find(v => v.id === activeVideoId) || VIDEOS[0];
  const inactiveVideos = VIDEOS.filter(v => v.id !== activeVideoId);

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentHeroSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const handleVideoClick = (id: number) => {
    setActiveVideoId(id);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>


      {/* Hero Section with Full-Width Carousel */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-[#111] overflow-hidden flex items-center justify-center">

        {/* Images Container */}
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentHeroSlide}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? "100%" : "-100%",
                  opacity: 1,
                  zIndex: 0
                }),
                center: {
                  x: "0%",
                  opacity: 1,
                  zIndex: 10
                },
                exit: (dir: number) => ({
                  x: dir < 0 ? "100%" : "-100%",
                  opacity: 1,
                  zIndex: 0
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_IMAGES[currentHeroSlide]}
                alt="Chinmaya Education"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left/Right Controls overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex justify-between items-center px-4 md:px-8">
          <button
            onClick={() => { setDirection(-1); prevSlide(); }}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 border border-white/40 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => { setDirection(1); nextSlide(); }}
            className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 border border-white/40 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </section>

      {/* Hero Text Banner (Moved from overlay) */}
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F9F6F7] to-[#FFE8D6]/40 py-14 border-b border-[#FFE8D6]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-wider uppercase rounded-full mb-4 border border-[#FF971D]/25">
            Empowering Future Generations
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy mb-6">
            Education with a <span className="text-[#FF971D] font-black italic">Vision.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
            The Chinmaya Educational, Cultural and Charitable Trust nurtures young minds through holistic education, blending academic excellence with spiritual growth.
          </p>
          <div className="pb-16 md:pb-24"></div>
        </div>
      </section>

      {/* 3-Column Highlights Overlapping Cards */}
      <section className="relative z-30 -mt-28 md:-mt-40 mb-12 bg-[#F9F6F7] md:bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-[#FF971D] transform transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <h3 className="font-heading text-2xl font-bold text-navy mb-4 group-hover:text-[#FF971D] transition-colors">
                <span className="text-[#FF971D] group-hover:text-navy transition-colors">CHINMAYA</span> Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                Our vision is to give maximum happiness to maximum number for the maximum time. To achieve this we have variety of programmes and Service designed to suit the needs and aptitude of all sections of society....
              </p>
            </motion.div>

            {/* Vidyalayas Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-[#FF971D] transform transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <h3 className="font-heading text-2xl font-bold text-navy mb-4 group-hover:text-[#FF971D] transition-colors">
                <span className="text-[#FF971D] group-hover:text-navy transition-colors">CHINMAYA</span> Vidyalayas
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                Chinmaya Educational Cultural and Charitable Trust, Trivandrum is the apex body under which the Chinmaya Vidyalayas...
              </p>
              <Link href="/vidyalayas" className="bg-[#FF971D] hover:bg-[#e68412] text-white text-xs font-bold py-3 px-8 rounded-lg w-fit transition-colors shadow-md">
                READ MORE
              </Link>
            </motion.div>

            {/* Temples Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-saffron transform transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <h3 className="font-heading text-2xl font-bold text-navy mb-4 group-hover:text-[#FF971D] transition-colors">
                <span className="text-[#FF971D] group-hover:text-navy transition-colors">CHINMAYA</span> Temples
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                Renovated Chinmaya Govindamangalam Sree Mahavishnu Temple is one of the main Lord Vishnu temples in Trivandrum.
              </p>
              <Link href="/temples" className="bg-[#FF971D] hover:bg-[#e68412] text-white text-xs font-bold py-3 px-8 rounded-lg w-fit transition-colors shadow-md">
                READ MORE
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Bento Grid: Welcome & Mission */}
      <section className="py-24 bg-[#F9F6F7] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#2B2129] leading-[1.1] mb-6 tracking-tight">Welcome to Chinmaya</h2>
            <div className="w-24 h-1 bg-[#FF971D] mx-auto rounded-full"></div>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[280px]">

            {/* Welcome Text Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-2 bg-transparent p-4 lg:p-8 flex flex-col justify-center relative"
            >
              <h3 className="font-sans text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#2B2129] leading-[1.1] mb-6 tracking-tight">
                Our <span className="text-[#FF971D]">Heritage</span>
              </h3>
              <p className="text-[#7A7A7A] font-medium text-lg leading-relaxed mb-6 max-w-lg">
                The Chinmaya Educational, Cultural and Charitable Trust, Trivandrum coordinates the activities of six Chinmaya Vidyalayas, Sree Sankara Balasramam, Chinmaya Temples and various Mission activities.
              </p>
              <p className="text-[#7A7A7A] font-medium text-lg leading-relaxed mb-8 max-w-lg">
                We are dedicated to the holistic development of individuals, emphasizing values, culture, and academic brilliance, guided by the timeless wisdom of Swami Chinmayananda.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/trustees" className="inline-flex items-center justify-center bg-[#FF971D] hover:bg-[#e68412] text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-sm">
                  Meet our Leadership
                </Link>
              </div>
            </motion.div>

            {/* Main Active Video Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-2 bg-black rounded-3xl relative overflow-hidden group shadow-2xl"
            >
              <video
                ref={videoRef}
                key={activeVideo.src}
                src={activeVideo.src}
                className="w-full h-full object-cover opacity-100"
                onEnded={() => setIsPlaying(false)}
              />
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <button onClick={togglePlay} className="w-24 h-24 bg-saffron/90 hover:bg-saffron text-navy rounded-full flex items-center justify-center transform transition-all hover:scale-110 shadow-xl mb-4 backdrop-blur-sm">
                  {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 ml-2" />}
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="bg-terracotta text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block shadow-md">Now Playing</span>
                <h4 className="font-heading text-3xl font-bold drop-shadow-lg">{activeVideo.title}</h4>
              </div>
            </motion.div>

            {/* Vision Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-1 bg-[#FFE8D6] text-slate-900 rounded-3xl p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden shadow-lg border border-[#FF971D]/30"
            >
              <div className="absolute right-0 bottom-0 text-9xl text-[#FF971D]/15 font-serif leading-none -mb-10 mr-4 rotate-12">&quot;</div>
              <blockquote className="text-xl lg:text-2xl italic font-semibold leading-relaxed relative z-10 text-slate-900">
                &quot;Yahaiva phalam tahaiva karma&quot; – True education is that which prepares one to face the challenges of life, and not merely to make a living.
              </blockquote>
              <p className="text-[#FF971D] font-bold tracking-widest uppercase text-sm mt-6 relative z-10">— Swami Chinmayananda</p>
            </motion.div>

            {/* Inactive Videos */}
            {inactiveVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className="md:col-span-1 lg:col-span-1 row-span-1 bg-black rounded-3xl relative overflow-hidden cursor-pointer group shadow-lg"
                onClick={() => handleVideoClick(video.id)}
              >
                <video src={video.src} className="w-full h-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 group-hover:border-white/80 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white font-bold text-lg leading-tight group-hover:text-saffron transition-colors drop-shadow-md">{video.title}</h4>
                  <p className="text-white/80 text-xs mt-1 drop-shadow-sm">Play Video</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Institutions Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#F9F6F7] via-[#FFE8D6]/40 to-[#F9F6F7] relative overflow-hidden border-t border-b border-amber-900/10">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-[#FF971D]/20">
              Centers of Excellence
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-4 tracking-tight">
              Our <span className="text-[#FF971D]">Institutions</span>
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg max-w-2xl mx-auto">
              Six prestigious Chinmaya Vidyalayas nurturing academic brilliance, moral fortitude, and cultural values.
            </p>
            <div className="w-20 h-1 bg-[#FF971D] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Chinmaya Vidyalaya, Attukal", 
                campus: "Trivandrum City Campus", 
                img: "/images/schools/chinmaya attukal.jpg", 
                link: "https://att.chintvm.edu.in/" 
              },
              { 
                name: "Chinmaya Vidyalaya, Kattakada", 
                campus: "Kattakada Regional Campus", 
                img: "/images/schools/chinmaya kattakada.jpg", 
                link: "https://kda.chintvm.edu.in/" 
              },
              { 
                name: "Chinmaya Vidyalaya, Kollam", 
                campus: "Kollam District Campus", 
                img: "/images/schools/chinmaya kollam.jpg", 
                link: "https://kol.chintvm.edu.in/" 
              },
              { 
                name: "Chinmaya Vidyalaya, Kunnumpuram", 
                campus: "Kunnumpuram Campus", 
                img: "/images/schools/chinmaya kunnumpuram.jpg", 
                link: "https://kpm.chintvm.edu.in/" 
              },
              { 
                name: "Chinmaya Vidyalaya, Naruvamoodu", 
                campus: "Naruvamoodu Regional Campus", 
                img: "/images/schools/chinmaya naruvamood.jpg", 
                link: "https://nmd.chintvm.edu.in/" 
              },
              { 
                name: "Chinmaya Vidyalaya, Vazhuthacaud", 
                campus: "Vazhuthacaud City Campus", 
                img: "/images/schools/chinmaya vazhutakad.jpg", 
                link: "https://vkd.chintvm.edu.in/" 
              }
            ].map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <a
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  {/* Image container */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={school.img}
                      alt={school.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#FF971D] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#FF971D]/30 shadow-sm">
                      {school.campus}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col grow justify-between bg-white">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-navy group-hover:text-[#FF971D] transition-colors leading-snug">
                        {school.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 font-medium">
                        Affiliated to CBSE &middot; Holistic Chinmaya Vision Programme
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-navy group-hover:text-[#FF971D] transition-colors">
                      <span className="uppercase tracking-wider">Explore Campus Website</span>
                      <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FF971D] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Chinmaya Updates Marquee / Carousel */}
      <section className="py-24 bg-[#FFE8D6]/35 overflow-hidden relative border-t border-b border-[#FFE8D6]">
        {/* Subtle decorative glow effect in background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF971D]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FFE8D6] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#FFE8D6] text-[#FF971D] text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-[#FF971D]/20">
              News & Happenings
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Chinmaya <span className="text-[#FF971D]">Updates</span>
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg mt-2 max-w-xl">
              Stay informed with the latest milestones, accolades, and celebrations from across our institutions.
            </p>
          </div>
          <Link 
            href="/updates" 
            className="group flex items-center gap-3 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#FF971D]/30 hover:scale-105 shrink-0"
          >
            <span>View All Updates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Marquee Container with Dual Gradient Fade Masks */}
        <div className="relative w-full overflow-hidden group">
          {/* Left Gradient Fade Mask Overlay */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-20 bg-gradient-to-r from-[#FAF4EE] via-[#FAF4EE]/90 to-transparent" />
          
          {/* Right Gradient Fade Mask Overlay */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-20 bg-gradient-to-l from-[#FAF4EE] via-[#FAF4EE]/90 to-transparent" />

          {/* Marquee Track with CSS mask-image for seamless hardware fade */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
            <div className="animate-marquee-continuous flex gap-6 px-6 py-4">
              {/* Double the array for seamless infinite scroll effect */}
              {[...UPDATES, ...UPDATES].map((update, i) => (
                <div 
                  key={`${update.id}-${i}`} 
                  onClick={() => setSelectedPoster(update)}
                  className="w-72 sm:w-80 flex flex-col shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#FF971D]/40 cursor-pointer border border-slate-200/80 hover:-translate-y-2 transition-all duration-300 group/card"
                >
                  {/* Portrait Poster (aspect-[3/4] matching reference) */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={update.img}
                      alt={update.title}
                      fill
                      sizes="(max-width: 640px) 288px, 320px"
                      className="object-cover object-top group-hover/card:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    
                    {/* Hover expand button */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-navy flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 className="w-4 h-4 text-[#FF971D]" />
                    </div>
                  </div>

                  {/* Card Content Footer matching user reference */}
                  <div className="p-4 sm:p-5 bg-white flex flex-col justify-between grow">
                    <div>
                      {/* Date row in Saffron */}
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF971D] mb-1.5">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{update.date}</span>
                      </div>

                      {/* Title in bold uppercase */}
                      <h3 className="font-heading font-extrabold text-navy text-sm sm:text-base leading-snug uppercase tracking-tight group-hover/card:text-[#FF971D] transition-colors line-clamp-2">
                        {update.title}
                      </h3>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover/card:text-[#FF971D] transition-colors">
                      <span>Click to view flyer</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Photo Gallery Section */}
      <GallerySection />

      {/* Quick Contact & Map with Form */}
      <section className="py-16 md:py-24 bg-[#F9F6F7] border-t border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#2B2129] leading-[1.1] mb-6 tracking-tight">Get in Touch</h2>
            <div className="w-20 h-1 bg-[#FF971D] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate/10 overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Info and Form */}
              <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center">
                <h3 className="font-heading text-2xl font-bold text-navy mb-6">Send us a Message</h3>
                <form className="space-y-4 mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-ivory/50" placeholder="Full Name" />
                    </div>
                    <div>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-ivory/50" placeholder="Email Address" />
                    </div>
                  </div>
                  <div>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-ivory/50" placeholder="Phone Number" />
                  </div>
                  <div>
                    <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all bg-ivory/50" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="button" className="w-full md:w-auto px-8 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg">
                    Submit Message
                  </button>
                </form>

                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate/10">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1 text-sm">Registered Office</h4>
                      <p className="text-slate text-xs">Vazhuthacaud, Trivandrum - 695010</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-terracotta shrink-0" />
                    <p className="text-slate font-medium text-xs">0471 2451533</p>
                  </div>
                  <div className="flex items-center gap-4 sm:col-span-2">
                    <Mail className="w-5 h-5 text-terracotta shrink-0" />
                    <a href="mailto:chintvm@gmail.com" className="text-slate font-medium text-xs hover:text-terracotta transition-colors">chintvm@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-1 h-[250px] lg:h-auto w-full bg-slate relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31569.006821889143!2d76.94030568739949!3d8.487142309455777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1a9b651d7f%3A0x1d37db272af32bac!2sChinmaya+Vidyalaya!5e0!3m2!1sen!2sin!4v1532156851077"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update Poster Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-[#F9F6F7]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF971D]">
                    {selectedPoster.date}
                  </span>
                  <h3 className="font-heading font-bold text-navy text-base sm:text-lg leading-snug">
                    {selectedPoster.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Poster Image */}
              <div className="relative aspect-[3/4] w-full max-h-[72vh] bg-slate-900">
                <Image
                  src={selectedPoster.img}
                  alt={selectedPoster.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
