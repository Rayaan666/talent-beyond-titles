import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const categories = [
  { name: 'Singing', sub: 'Vocal Excellence', img: 'https://images.unsplash.com/photo-1516280440502-a2fc8c62c2f4?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Dancing', sub: 'Rhythmic Mastery', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Acting', sub: 'Dramatic Arts', img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Photography', sub: 'Visual Storytelling', img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Painting', sub: 'Fine Arts', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Instrumental', sub: 'Musical Virtuosity', img: 'https://images.unsplash.com/photo-1460036521480-c4b50f6a6b84?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Comedy', sub: 'Stand-up & Improv', img: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Poetry', sub: 'Spoken Word', img: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Fashion', sub: 'Sartorial Design', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Innovation', sub: 'Creative Technology', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Film', sub: 'Cinematography', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Magic', sub: 'Illusionary Arts', img: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&q=80&w=800&h=1200' },
  { name: 'Open Talent', sub: 'Unrestricted Expression', img: 'https://images.unsplash.com/photo-1493225457124-a1a2a5956093?auto=format&fit=crop&q=80&w=800&h=1200' },
];

function CategoryCard({ cat, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  
  const isEven = index % 2 === 0;
  const sizes = [
    'w-[240px] h-[340px]',
    'w-[200px] h-[290px]',
    'w-[260px] h-[370px]',
    'w-[220px] h-[310px]',
  ];
  const sizeClass = sizes[index % sizes.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginTop: isEven ? '0px' : '80px' }}
      className={`relative group flex-shrink-0 ${sizeClass} cursor-pointer`}
    >
      {/* Image with mask & inner parallax */}
      <div className="w-full h-full overflow-hidden rounded-[2px]" style={{ clipPath: 'inset(0 round 2px)' }}>
        <motion.div
          style={{ y: imgY }}
          className="w-full h-[130%] relative"
        >
          <img
            src={cat.img}
            alt={cat.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-text/80 via-primary-text/30 to-transparent group-hover:from-primary-text/70 transition-all duration-700"></div>
          {/* Gold tint overlay */}
          <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
        </motion.div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] tracking-[0.25em] uppercase text-accent-gold mb-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.sub}</p>
        <h3 className="font-serif text-white text-xl leading-tight">{cat.name}</h3>
        <div className="w-0 h-[1px] bg-accent-gold mt-2 group-hover:w-8 transition-all duration-500 ease-out"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="relative w-full py-40 bg-primary-bg overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(176,141,87,0.05) 0%, transparent 70%)' }}></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-accent-gold"></div>
            <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase">Gallery</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-text leading-tight">
            Thirteen<br />
            <span className="italic font-light text-secondary-text">Disciplines.</span>
          </h2>
        </div>
        <p className="text-secondary-text font-light max-w-sm leading-relaxed text-base md:text-right">
          Each category represents a unique realm of human expression, waiting to be explored and celebrated.
        </p>
      </div>

      {/* Card Gallery — two offset rows */}
      <div className="w-full overflow-x-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <div className="px-6 md:px-16 flex gap-6 pb-6" style={{ minWidth: 'max-content' }}>
          {categories.slice(0, 7).map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
        <div className="px-6 md:px-16 flex gap-6 pt-6 pb-6" style={{ minWidth: 'max-content', paddingLeft: '120px' }}>
          {categories.slice(7).map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i + 1} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-16 flex items-center gap-6">
        <div className="flex-1 h-[1px] bg-secondary-text/10"></div>
        <a href="#contact" className="group text-[10px] tracking-[0.3em] uppercase text-secondary-text hover:text-accent-gold transition-colors duration-300 flex items-center gap-3">
          View All Categories
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}
