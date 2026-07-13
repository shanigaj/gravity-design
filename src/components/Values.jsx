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
    <section className="relative py-24 bg-[#0B1121] overflow-hidden">
      <style>{`
        .home-value-card {
          background: #1A2235;
          border: 1px solid transparent;
          border-radius: 28px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
        }
        .home-value-card:hover {
          background: #1E293B;
          border-color: #45ADFF;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(69, 173, 255, 0.15);
        }
        .bg-circle-left {
          position: absolute;
          width: 500px;
          height: 500px;
          left: -200px;
          bottom: -150px;
          background: linear-gradient(135deg, #1D4ED8 0%, #0F172A 100%);
          border-radius: 50%;
          opacity: 0.8;
          z-index: 0;
        }
        .bg-circle-right {
          position: absolute;
          width: 350px;
          height: 350px;
          right: -100px;
          top: 80px;
          background: linear-gradient(135deg, #1D4ED8 0%, #0F172A 100%);
          border-radius: 50%;
          opacity: 0.6;
          z-index: 0;
        }
      `}</style>

      {/* Sharp Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-circle-left"></div>
        <div className="bg-circle-right"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="home-value-card p-10 min-h-[300px] flex flex-col justify-start relative overflow-hidden"
            >
              {/* Title */}
              <h3 className="text-[28px] font-semibold text-[#45ADFF] mb-3 font-heading tracking-wide">
                {item.title}
              </h3>
              
              {/* Custom Underline with center dot */}
              <div className="relative flex items-center mb-8 w-[140px]">
                <div className="h-[2px] w-full bg-[#45ADFF]/40 rounded-full"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#45ADFF] shadow-[0_0_8px_#45ADFF]"></div>
              </div>
              
              {/* Description */}
              <p className="text-[#94A3B8] text-[15px] leading-[1.8] font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
