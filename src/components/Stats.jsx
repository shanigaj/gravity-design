import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSiteImage } from '../hooks/useSiteImage';

const stats = [
  { number: 1000, suffix: '+', label: 'Happy Customers' },
  { number: 1000, suffix: '+', label: 'Lines Of Code' },
  { number: 1000, suffix: '+', label: 'Project Completed' },
  { number: 1000, suffix: '+', label: 'Award Wons' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-heading text-white">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const statsBg = useSiteImage('statsBg', 'url', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80');

  return (
    <section className="relative py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${statsBg}')`,
        }}
      />
      <div className="absolute inset-0 stats-overlay" />
      
      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.number} suffix={stat.suffix} />
              <p className="text-white/80 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
