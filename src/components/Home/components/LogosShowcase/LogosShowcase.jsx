import './styles/LogosShowcase.css';
import salla from '../../../../assets/home/logos/salla.png';

const logos = Array(5).fill(salla);

function LogosShowcase() {
  return (
    <section className="logos-showcase">
      <div className="container mx-auto">
        <h3 className="logos-title">
          انضم إلى أكثر من 2000 شركة تدير مستقبلها عبر منصتنا.
        </h3>
        <div className="marquee-wrapper">
          <div className="fade-edge left"></div>
          <div className="fade-edge right"></div>
          <div className="marquee-content">
            {logos.map((logo, i) => (
              <div key={i} className="logo-item">
                <img src={logo} alt={`Client ${i + 1}`} />
              </div>
            ))}
            {logos.map((logo, i) => (
              <div key={`dup-${i}`} className="logo-item">
                <img src={logo} alt={`Client ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogosShowcase;