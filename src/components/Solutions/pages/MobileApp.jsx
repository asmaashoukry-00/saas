import { Link } from 'react-router-dom';
import { FaMobileAlt, FaBell, FaChartLine, FaUsers, FaShoppingCart, FaCloud, FaLock, FaGlobe, FaUpload } from 'react-icons/fa';
import '../pages/styles/MobileApp.css';

const features = [
  { icon: FaMobileAlt, title: 'تطبيق متكامل', desc: 'كل fonctionnalités في تطبيق واحد' },
  { icon: FaBell, title: 'إشعارات فورية', desc: 'تابع كل ما يحدث في شركتك' },
  { icon: FaChartLine, title: 'لوحة معلومات', desc: 'احصل على رؤية شاملة' },
  { icon: FaUsers, title: 'إدارة الفريق', desc: 'تواصل مع موظفيك بسهولة' },
  { icon: FaShoppingCart, title: 'مبيعات وتسويق', desc: 'إدارة عملاء ومبيعات من هاتفك' },
  { icon: FaUpload, title: 'مزامنة سحابية', desc: 'بياناتك متزامنة تلقائياً' },
];

const benefits = [
  'إدارة عملك من أي مكان',
  'تتبع الأداء والمبيعات لحظياً',
  'التواصل الفوري مع فريق العمل',
  'أمان وحماية عالية لبياناتك',
  'واجهة سهلة وبسيطة',
];

function MobileApp() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">حلول إضافية</span>
          <h1 className="hero-title">
            تطبيق الهاتف المحمول
            <span className="highlight"> -_circle</span>
          </h1>
          <p className="hero-desc">
            إدارة أعمالك من جيبك — تابع كل ما يحدث في شركتك من أي مكان وأي وقت.
          </p>
          <Link to="/" className="hero-btn">تحميل التطبيق</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه في هاتفك</h2>
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
              <h2>لماذا تستخدم تطبيق سيركلز؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><span className="check-icon">✓</span> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600" alt="Mobile App" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>حمل التطبيق الآن</h2>
          <p>ابدأ بإدارة عملك من هاتفك</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default MobileApp;