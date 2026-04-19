import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/StackingPanels.css';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
    title: 'حلول متكاملة تجمع كل شيء في مكان',
    desc: 'سيركلز يجمع مبيعاتك، مشترياتك، ومحاسبتك في نظام واحد — لتتخذ قرارات مدروسة بناءً على أرقام حقيقية.',
    link: '/finance'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000',
    title: 'المحاسبة صارت أسهل بكثير',
    desc: 'فواتير، قيود، تقارير، ودفتر أستاذ… كل شيء يتم تلقائياً في مكان واحد.',
    link: '/finance'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000',
    title: 'مالية قوية… نجاح مستدام',
    desc: 'تتبع تدفق الأموال بدقة، وفوتّر عملاءك بسهولة، وكن دائماً على علم بمركزك المالي الحقيقي.',
    link: '/finance'
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