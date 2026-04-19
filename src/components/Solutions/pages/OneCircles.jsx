import { Link } from 'react-router-dom';
import { FaCube, FaGlobe, FaMobileAlt, FaDatabase, FaNetworkWired, FaShieldAlt, FaCloud, FaCode } from 'react-icons/fa';
import '../pages/styles/OneCircles.css';

const features = [
  { icon: FaCube, title: 'منصة موحدة', desc: 'كل أدواتك في مكان واحد' },
  { icon: FaGlobe, title: 'وصول من أي مكان', desc: 'عمل من أي lugar في العالم' },
  { icon: FaMobileAlt, title: 'متوافق مع كل الأجهزة', desc: 'جهاز، كمبيوتر أو كمبيوتر لوحي' },
  { icon: FaDatabase, title: 'تخزين سحابي آمن', desc: 'بياناتك محمية دائماً' },
  { icon: FaNetworkWired, title: 'تكامل الأنظمة', desc: 'اربط كل أقسام شركتك' },
  { icon: FaShieldAlt, title: 'حماية متقدمة', desc: 'أعلى معايير الأمان' },
];

const benefits = [
  'توفير الوقت والجهد في إدارة العمليات',
  'تقليل الأخطاء البشرية بشكل ملحوظ',
  'تكامل سلس مع الأنظمة الأخرى',
  'دعم فني متواصل على مدار الساعة',
  'تحديثات دورية ومستمرة',
];

function OneCircles() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">حلول إضافية</span>
          <h1 className="hero-title">
            الحل الشامل
            <span className="highlight"> - One Circles</span>
          </h1>
          <p className="hero-desc">
            كل شيء في منصة واحدة — إدارة مواردك البشرية، المالية، العمليات والمبيعات من مكان واحد وبتكاليف أقل.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه في منصة واحدة</h2>
          <div className="grid-4">
            {features.map((item, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon"><item.icon /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <h2>لماذا تختار One Circles؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><span className="check-icon">✓</span> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" alt="One Circles Platform" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن مع منصة One Circles</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default OneCircles;