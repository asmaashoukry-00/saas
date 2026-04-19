import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/StackingPanels.css';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000',
    title: 'إدارة الموارد البشرية والرواتب بدون تعقيد',
    desc: 'سيركلز يمنحك سيطرة كاملة على كل شيء: رواتب دقيقة، حضور منظم، وامتثال تلقائي — في منصة واحدة سهلة.',
    link: '/hr'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
    title: 'رواتب دقيقة… موظفون راضون… شركة أكثر نمواً',
    desc: 'سيركلز يدير رواتبك، حضورك، إجازاتك، وكل شؤون موظفيك بكل احترافية وامتثال كامل — حتى تركز على توسيع أعمالك.',
    link: '/hr'
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000',
    title: 'سيطر على موظفيك ورواتبهم بكل ثقة',
    desc: 'من أول يوم عمل للموظف إلى آخر قسيمة راتب… كل شيء يتم تلقائياً، بدقة عالية، وامتثال تام للقوانين.',
    link: '/hr'
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