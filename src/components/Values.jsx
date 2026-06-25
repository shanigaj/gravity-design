import { motion } from 'framer-motion';

const values = [
  {
    title: 'Vision',
    description: 'Our Vision Is To Become An Organization That Uses The Impact Of Digitalization To Empower People For Their Personal Growth...',
  },
  {
    title: 'Mission',
    description: 'We Are On A Mission To Provide Our Customers With Unique Tech Solutions And Grow Their Business, While Being Valuable To Their End Users.',
  },
  {
    title: 'Dedication',
    description: 'We Are Dedicated To Providing High-Quality Products And Services To Our Customers. We Strive To Exceed Expectations And Provide Exceptional Customer Service Every Time.',
  },
  {
    title: 'Team Work',
    description: 'Teamwork Is The Cornerstone Of Any Successful Organization, As Working Together Helps To Promote Collaboration, Increase Efficiency, And Achieve Greater Results.',
  },
  {
    title: 'Integrity',
    description: 'Integrity Is A Core Value For Any Business, No Matter How Big Or Small. It Means Having The Courage To Act Ethically And Do The Right Thing, Even When Its Hard.',
  },
  {
    title: 'Quality',
    description: 'Quality Is A Major Factor When It Comes To Any Product Or Service. It Is Not Just About Meeting Customer Expectations But Exceeding Them And Setting Benchmarks In The Industry.',
  },
];

export default function Values() {
  return (
    <section className="relative py-20 bg-primary-dark overflow-hidden">
      <style>{`
        .home-value-card {
          background: #FFFFFF1A;
          border: 2px solid transparent;
          border-radius: 32px;
          transition: all 0.3s ease;
        }
        .home-value-card:hover {
          background: #45ADFF26;
          border: 2px solid #45ADFF;
          transform: translateY(-5px);
        }
        .values-circle-large {
          border-radius: 50%;
          border: 7px solid transparent;
          background: 
            linear-gradient(180deg, rgba(69, 173, 255, 0.15) 0%, rgba(69, 173, 255, 0) 100%) padding-box,
            linear-gradient(143.78deg, #45ADFF 14.46%, #12102E 84.59%) border-box;
        }
        .values-circle-small {
          border-radius: 50%;
          background: linear-gradient(180deg, #45ADFF 0%, rgba(69, 173, 255, 0) 100%);
        }
      `}</style>

      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* LEFT SIDE — Large ring at bottom-left */}
        <div 
          className="absolute values-circle-large"
          style={{
            width: '420px',
            height: '420px',
            left: '-180px',
            bottom: '-100px',
          }}
        />
        {/* LEFT SIDE — Small solid dot */}
        <div 
          className="absolute values-circle-small"
          style={{
            width: '18px',
            height: '18px',
            left: '120px',
            bottom: '80px',
            opacity: 0.6,
          }}
        />

        {/* RIGHT SIDE — Medium ring at top-right */}
        <div 
          className="absolute values-circle-large"
          style={{
            width: '260px',
            height: '260px',
            right: '-60px',
            top: '-30px',
          }}
        />
        {/* RIGHT SIDE — Small solid dot */}
        <div 
          className="absolute values-circle-small"
          style={{
            width: '14px',
            height: '14px',
            right: '140px',
            top: '60px',
            opacity: 0.5,
          }}
        />
        {/* Extra small accent dot near right circle */}
        <div 
          className="absolute values-circle-small"
          style={{
            width: '10px',
            height: '10px',
            right: '100px',
            top: '160px',
            opacity: 0.35,
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="home-value-card p-8 min-h-[260px] flex flex-col justify-start"
            >
              <h3 className="text-[26px] font-medium text-[#45ADFF] mb-2">{item.title}</h3>
              <div className="flex items-center mb-6">
                <div className="h-[2px] w-12 bg-[#45ADFF]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#45ADFF] ml-1"></div>
              </div>
              <p className="text-white/80 text-[14px] leading-[1.8]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
