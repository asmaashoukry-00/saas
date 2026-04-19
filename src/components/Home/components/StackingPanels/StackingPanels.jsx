import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/StackingPanels.css';
import pannel1 from '../../../../assets/home/pannel1.png';
import pannel2 from '../../../../assets/home/pannel2.png';
import pannel3 from '../../../../assets/home/pannel3.png';
import pannel4 from '../../../../assets/home/pannel4.png';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: pannel1,
    badge: 'الأقوى',
    title: 'إدارة الموارد البشرية بكل سهولة',
    desc: 'سيركلز يخليك تدير موظفيك ورواتبهم بطريقتك وبكل دقة.',
    link: '/hr'
  },
  {
    image: pannel2,
    badge: null,
    title: 'منصة شاملة لإدارة أعمالك',
    desc: 'سيركلز يجمع إدارة موظفيك ومبيعاتك وحساباتك في نظام واحد سهل.',
    link: '/'
  },
  {
    image: pannel3,
    badge: null,
    title: 'تجربة إدارتك صارت أفضل',
    desc: 'سيركلز يسهل عليك إدارة موظفيك ومبيعاتك، ويختصر الوقت ويزيد الإنتاجية.',
    link: '/'
  },
  {
    image: pannel4,
    badge: null,
    title: 'الحل الشامل لشركتك',
    desc: 'سيركلز يدير رواتبك ودوامك ومبيعاتك بكل سهولة وبطريقتك.',
    link: '/'
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
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${panel.image})` }}
          >
            <div className="content">
              {panel.badge && <span className="badge">{panel.badge}</span>}
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