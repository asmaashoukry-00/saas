import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/StackingPanels.css';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000',
    title: 'إدارة المواهب والتطوير',
    desc: 'سيركلز يساعدك في جذب أفضل الكفاءات وتقييم أدائهم وتنميتهم — لبناء فريق قوي ومستدام.',
    link: '/talent'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000',
    title: 'توظيف أسهل… أداء أفضل',
    desc: 'من نشر الوظائف إلى إجراء المقابلات… كل خطوة موثقة ومتابعها بسهولة لتحقيق أفضل النتائج.',
    link: '/talent'
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000',
    title: 'طور موظفيك وارتقِ بشركتك',
    desc: 'خطط تدريبية مخصصة، تقييم أداء شامل، ومسارات وظيفية واضحة — كل ما يحتاجه موظفوك للنجاح.',
    link: '/talent'
  }
];

function StackingPanels() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const panelElements = panelsRef.current;

    panelElements.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: i === panelElements.length - 1 ? true : false,
        zIndex: i
      });

      if (i < panelElements.length - 1) {
        const card = panel.querySelector('.panel-card');
        if (card) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.4,
            y: -50,
            scrollTrigger: {
              trigger: panelElements[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true
            }
          });
        }
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="stacking-container" ref={containerRef}>
      {panels.map((panel, i) => (
        <section className="panel" key={i} ref={el => panelsRef.current[i] = el}>
          <div 
            className="panel-card" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${panel.image})` }}
          >
            <div className="content">
              <h2>{panel.title}</h2>
              <p>{panel.desc}</p>
              <Link to={panel.link} className="btn-main">ابدأ الآن</Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default StackingPanels;