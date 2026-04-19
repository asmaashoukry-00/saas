import { Link } from 'react-router-dom';
import { FaChartPie, FaBrain, FaDatabase, FaCubes, FaRocket, FaNetworkWired, FaEye, FaBolt } from 'react-icons/fa';
import '../pages/styles/DataAnalytics.css';

const features = [
  { icon: FaChartPie, title: 'لوحات تحكم تفاعلية', desc: 'رؤية شاملة لكل بياناتك' },
  { icon: FaBrain, title: 'ذكاء اصطناعي', desc: 'تحليلات ذكية预测' },
  { icon: FaDatabase, title: 'تكامل البيانات', desc: 'اجمع كل مصادر البيانات' },
  { icon: FaCubes, title: 'تقارير متقدمة', desc: 'تقارير مفصلة ومخصصة' },
  { icon: FaRocket, title: 'تحليلات آنية', desc: 'بيانات مباشرة وفورية' },
  { icon: FaNetworkWired, title: 'ربط الأقسام', desc: 'تكامل بين كل الأقسام' },
];

const benefits = [
  'قرارات مبنية على بيانات حقيقية',
  'اكتشاف الفرص والتحديات مبكراً',
  'تتبع الأداء بشكل لحظي',
  'تقارير دقيقة وموثوقة',
  'تحسين الإنتاجية والأرباح',
];

function DataAnalytics() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">حلول إضافية</span>
          <h1 className="hero-title">
            تحليل البيانات المتقدم
            <span className="highlight"> -_analytics</span>
          </h1>
          <p className="hero-desc">
            قرارات مدروسة بناءً على بيانات حقيقية — اكتشف كل ما يحدث في عملك واتخذ القرارات الصحيحة.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">أدوات تحليل قوية</h2>
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
              <h2>لماذا تحليل البيانات مهم؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><span className="check-icon">✓</span> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" alt="Data Analytics" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ بتحليل بياناتك</h2>
          <p>حوّل بياناتك إلى قرارات ذكية</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default DataAnalytics;