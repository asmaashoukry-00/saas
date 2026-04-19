import { Link } from 'react-router-dom';
import { FaStar, FaChartLine, FaAward, FaUsers, FaClipboardCheck, FaThumbsUp, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/Performance.css';

const features = [
  { icon: FaStar, title: 'تقييم 360 درجة', desc: 'تقييم شامل من جميع الجهات' },
  { icon: FaChartLine, title: 'تتبع الأداء', desc: 'متابعة مستمرة للأداء' },
  { icon: FaAward, title: 'الحوافز', desc: 'إدارة الحوافز والمكافآت' },
  { icon: FaUsers, title: 'ملفات الأداء', desc: 'سجل أداء لكل موظف' },
  { icon: FaClipboardCheck, title: 'التقييم الدوري', desc: 'تقييمات دورية ومنتظمة' },
  { icon: FaThumbsUp, title: 'التغذية الراجعة', desc: 'آراء ثنائية الاتجاه' },
];

const benefits = [
  'تقييم عادل وشامل',
  'تحسين أداء الموظفين',
  'ربط الأداء بالحوافز',
  'تحديد نقاط القوة والضعف',
  'خطط تطوير مخصصة',
];

function Performance() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة المواهب</span>
          <h1 className="hero-title">
            تقييم الأداء 360 درجة
            <span className="highlight"> بدقة</span>
          </h1>
          <p className="hero-desc">
            نظام شامل لتقييم الأداء — تقييم من المديرين والزملاء والعملاء لتحليل دقيق.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه لتقييم الأداء</h2>
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
              <h2>لماذا تختار نظام تقييم الأداء؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" alt="Performance" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في تقييم أداء موظفيك</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Performance;