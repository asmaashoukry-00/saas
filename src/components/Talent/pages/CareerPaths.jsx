import { Link } from 'react-router-dom';
import { FaRoad, FaSitemap, FaChartPie, FaUserClock, FaArrowUp, FaListOl, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/CareerPaths.css';

const features = [
  { icon: FaRoad, title: 'المسارات الوظيفية', desc: 'تحديد مسارات واضحة' },
  { icon: FaSitemap, title: 'الهيكل التنظيمي', desc: 'عرض هيكل الشركة' },
  { icon: FaChartPie, title: 'التخطيط', desc: 'تخطيط الوظائف' },
  { icon: FaUserClock, title: 'الترقيات', desc: 'إدارة الترقيات' },
  { icon: FaArrowUp, title: 'النمو', desc: 'خطط نمو الموظفين' },
  // { icon: FaSteps, title: 'المهارات', desc: 'تتبع المهارات المطلوبة' },
];

const benefits = [
  'مسارات وظيفية واضحة',
  'تخطيط succession مسبق',
  'تحديد المهارات المطلوبة',
  'تحفيز الموظفين على النمو',
  'إدارة الترقيات بشفافية',
];

function CareerPaths() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة المواهب</span>
          <h1 className="hero-title">
            إدارة المسارات الوظيفية
            <span className="highlight"> بوضوح</span>
          </h1>
          <p className="hero-desc">
            نظام شامل لإدارة المسارات الوظيفية — خطط واضحة للترقي والنمو داخل المؤسسة.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه لإدارة المسارات</h2>
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
              <h2>لماذا تختار نظام المسارات الوظيفية؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" alt="Career Paths" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في تخطيط مسارات موظفيك</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default CareerPaths;