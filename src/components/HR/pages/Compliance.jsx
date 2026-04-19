import { Link } from 'react-router-dom';
import { FaShieldAlt, FaFileAlt, FaGavel, FaBuilding, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/Compliance.css';

const features = [
  { icon: FaShieldAlt, title: 'تأمين قانوني', desc: 'متوافق مع أنظمة العمل والعمال' },
  { icon: FaFileAlt, title: 'تقارير حكومية', desc: 'إنتاج التقارير المطلوبة للجهات' },
  { icon: FaGavel, title: 'عقود موحدة', desc: 'نماذج عقود قانونية معتمدة' },
  { icon: FaBuilding, title: 'خدمات التأمين', desc: 'إدارة التأمينات الاجتماعية' },
  { icon: FaChartLine, title: 'لوحات الامتثال', desc: 'متابعة نسب الامتثال آنياً' },
  { icon: FaCheckCircle, title: 'تنبيهات تلقائية', desc: 'معرفة截止 قبل انتهاء الصلاحية' },
];

function Compliance() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة الموارد البشرية</span>
          <h1 className="hero-title">
            الامتثال والتقارير الحكومية
            <span className="highlight"> بضمان كامل</span>
          </h1>
          <p className="hero-desc">
            نظام متكامل لإنتاج التقارير المطلوبة للجهات الحكومية — مع متابعة الامتثال تلقائياً.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيفي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه للامتثال</h2>
          <div className="grid-3">
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

      <section className="cta-section">
        <div className="container">
          <h2>كن دائماً في أمان مع سيركلز</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Compliance;