import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/PremiumStats.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 450, symbol: '+', label: 'شركة اعتمدت نظامنا' },
  { value: 85, symbol: '%', label: 'زيادة في كفاءة العمل' },
  { value: 100, symbol: '%', label: 'التزام بالمعايير الحكومية' },
  { value: 60, symbol: '%', label: 'توفير في الوقت التشغيلي' },
  { value: 12000, symbol: '+', label: 'موظف يدار يومياً' },
  { value: 99.9, symbol: '%', label: 'دقة العمليات المالية', decimal: true },
];

function PremiumStats() {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter, i) => {
      if (!counter) return;
      
      const target = stats[i].value;
      const isDecimal = stats[i].decimal;
      
      gsap.to(counter, {
        innerText: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%',
        },
        onUpdate: function() {
          if (isDecimal) {
            counter.innerText = parseFloat(counter.innerText).toFixed(1);
          } else {
            counter.innerText = Math.ceil(counter.innerText).toLocaleString();
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="premium-stats">
      <div className="container mx-auto px-6">
        <div className="stats-header">
          <span className="stats-badge">إنجازاتنا بالأرقام</span>
          <h2 className="stats-title">
            نحن لا نتحدث عن النجاح، <br />
            بل نجعله واقعاً رقمياً ملموساً
          </h2>
          <p className="stats-subtitle">
            انضم إلى الشركات الرائدة التي اعتمدت سيركلز كشريك تقني أساسي لنمو أعمالها وتطوير إدارتها.
          </p>
        </div>
        <div className="stats-wrapper">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box">
              <div className="stat-number-wrap">
                <span 
                  className="counter" 
                  data-target={stat.value}
                  ref={el => countersRef.current[i] = el}
                >
                  {stat.decimal ? '0.0' : '0'}
                </span>
                <span className="symbol">{stat.symbol}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremiumStats;