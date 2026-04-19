import { Link } from 'react-router-dom';
import { FaUserPlus, FaUserTie, FaClipboardList, FaCalendarAlt, FaEnvelope, FaStar, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/Recruitment.css';

const features = [
  { icon: FaUserPlus, title: 'إضافة متقدمين', desc: 'استقبل وادارة طلبات التوظيف' },
  { icon: FaUserTie, title: 'ملفات المتقدمين', desc: 'ملفات شاملة لكل متقدم' },
  { icon: FaClipboardList, title: 'الفرص الوظيفية', desc: 'إدارة الوظائف والشواغر' },
  { icon: FaCalendarAlt, title: 'المقابلات', desc: 'جدولة ومتابعة المقابلات' },
  { icon: FaEnvelope, title: 'التواصل', desc: 'تو تلقائي مع المتقدمين' },
  { icon: FaStar, title: 'التقييم', desc: 'تقييم المتقدمين بشكل احترافي' },
];

const benefits = [
  'أتمتة عملية التوظيف',
  'تصنيف المتقدمين تلقائياً',
  'جدولة المقابلات بسهولة',
  'تتبع حالة كل متقدم',
  'تقارير شاملة عن التوظيف',
];

function Recruitment() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة المواهب</span>
          <h1 className="hero-title">
            إدارة التوظيف والمقابلات
            <span className="highlight"> باحترافية</span>
          </h1>
          <p className="hero-desc">
            نظام متكامل لإدارة التوظيف والمقابلات — من نشر الوظائف حتى تعيين المرشحين.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه للتوظيف</h2>
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
              <h2>لماذا تختار نظام التوظيف؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600" alt="Recruitment" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في توظيف أفضل الكفاءات</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Recruitment;