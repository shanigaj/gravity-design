import { FaAndroid, FaApple, FaPaintBrush, FaCode, FaVideo, FaShoppingCart } from 'react-icons/fa';

export const servicesData = [
  {
    slug: 'android-application',
    icon: <FaAndroid size={32} />,
    title: 'Android Application',
    description: 'We develop high-quality, scalable, and robust Android mobile applications using the latest technologies.',
    color: '#3DDC84',
    image: '/images/android_service.png',
    longDescription: 'Our expert team of Android developers builds customized mobile applications tailored to your business needs. From initial ideation to deployment on the Google Play Store, we ensure high performance, top-notch security, and a seamless user experience. We leverage the latest Android SDKs and frameworks to create applications that engage users and drive business growth.',
    features: [
      'Custom Android App Development',
      'UI/UX Design for Android',
      'App Testing and Quality Assurance',
      'Maintenance and Support',
      'Integration with Third-Party APIs',
      'Migration to Android Platform'
    ]
  },
  {
    slug: 'ios-application',
    icon: <FaApple size={32} />,
    title: 'iOS Application',
    description: 'Our expert team strives to build innovative iOS apps, delivering the best iOS application development services.',
    color: '#000000',
    iconColor: '#FFFFFF',
    image: '/images/ios_service.png',
    longDescription: 'We specialize in crafting elegant, high-performing iOS applications for iPhone and iPad. Our development process adheres strictly to Apple\'s Human Interface Guidelines, ensuring a beautiful, intuitive user experience. Whether you need a consumer-facing app or an enterprise-grade mobile solution, our iOS developers have the expertise to bring your vision to life.',
    features: [
      'Custom iOS App Development (Swift/Objective-C)',
      'UI/UX Design for Apple Ecosystem',
      'App Store Optimization & Submission',
      'Ongoing Maintenance and Updates',
      'Enterprise Mobility Solutions',
      'Integration with Apple Services (HealthKit, ARKit)'
    ]
  },
  {
    slug: 'ui-ux-design',
    icon: <FaPaintBrush size={32} />,
    title: 'UI/UX Creative Design',
    description: 'Get user-friendly, robust, advanced, and attractive designs for websites, applications, and games.',
    color: '#FF2A5F',
    image: '/images/uiux_service.png',
    longDescription: 'Great design is more than just aesthetics; it\'s about creating intuitive, seamless journeys for your users. Our creative design team specializes in crafting user interfaces (UI) and user experiences (UX) that are both beautiful and highly functional. We conduct thorough user research, create wireframes and interactive prototypes, and deliver pixel-perfect designs that align with your brand identity.',
    features: [
      'User Research and Persona Development',
      'Wireframing and Prototyping',
      'Visual Design and Branding',
      'Interaction Design (Micro-animations)',
      'Usability Testing',
      'Design System Creation'
    ]
  },
  {
    slug: 'web-development',
    icon: <FaCode size={32} />,
    title: 'Web Development',
    description: 'Get innovative, SEO friendly, responsive, and highly secure website development services.',
    color: '#45ADFF',
    image: '/images/web_service.png',
    longDescription: 'We build the web of tomorrow. From responsive landing pages to complex, data-driven enterprise web applications, our full-stack web development team delivers solutions that are scalable, secure, and lightning-fast. We use modern frameworks like React, Next.js, and Node.js to ensure your website not only looks great but performs flawlessly across all devices and browsers.',
    features: [
      'Custom Web Application Development',
      'Responsive Website Design',
      'Content Management Systems (CMS)',
      'Frontend and Backend Development',
      'Progressive Web Apps (PWAs)',
      'Website Optimization & SEO'
    ]
  },
  {
    slug: 'video-animation',
    icon: <FaVideo size={32} />,
    title: 'Video Animation',
    description: 'Animated videos complete with intangible assets that help communicate your message effectively.',
    color: '#FF9900',
    image: '/images/video_service.png',
    longDescription: 'Tell your story through captivating video animation. Our team of animators and motion graphic artists create compelling visual content that explains complex concepts, promotes products, and engages audiences. From 2D explainer videos to complex 3D animations and motion graphics, we provide end-to-end video production services that elevate your brand\'s digital presence.',
    features: [
      '2D & 3D Animated Explainer Videos',
      'Motion Graphics and Visual Effects',
      'Storyboarding and Scriptwriting',
      'Voiceover and Audio Production',
      'Promotional Video Creation',
      'Corporate Presentations'
    ]
  },
  {
    slug: 'e-commerce',
    icon: <FaShoppingCart size={32} />,
    title: 'E-Commerce Solutions',
    description: 'Build powerful e-commerce platforms that drive sales and provide exceptional shopping experiences.',
    color: '#8A2BE2',
    image: '/images/ecommerce_service.png',
    longDescription: 'Launch and scale your online store with our comprehensive e-commerce solutions. We design and develop secure, high-converting e-commerce platforms using industry-leading technologies like Shopify, WooCommerce, and custom architectures. We focus on optimizing the user journey, ensuring seamless checkout processes, and integrating robust payment gateways to maximize your online sales.',
    features: [
      'Custom E-Commerce Platform Development',
      'Shopify & WooCommerce Integration',
      'Secure Payment Gateway Setup',
      'Inventory and Order Management Systems',
      'Mobile Commerce (M-Commerce) Apps',
      'Conversion Rate Optimization (CRO)'
    ]
  }
];
