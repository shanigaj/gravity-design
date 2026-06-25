const tags = [
  'Android Apps', 'IOS Apps', 'Web Development', 'UI/UX Design',
  'Video Animation', 'E-Commerce', 'Android Apps', 'IOS Apps',
  'Web Development', 'UI/UX Design', 'Video Animation', 'E-Commerce',
];

export default function MarqueeStrip() {
  return (
    <div className="bg-primary-dark py-6 overflow-hidden">
      {/* Row 1 - Left to Right */}
      <div className="flex mb-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tags, ...tags].map((tag, i) => (
            <span
              key={`r1-${i}`}
              className="px-6 py-2 rounded-full bg-[#FFFFFF1F] border border-white text-[#FFFFFF99] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...tags, ...tags].map((tag, i) => (
            <span
              key={`r2-${i}`}
              className="px-6 py-2 rounded-full bg-[#FFFFFF1F] border border-white text-[#FFFFFF99] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
