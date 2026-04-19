import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBookOpen, FaVideo, FaCertificate, FaUserGraduate, FaClipboardList, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/Training.css';

const features = [
  { icon: FaGraduationCap, title: 'الدورات التدريبية', desc: 'إنشاء وإدارة الدورات' },
  { icon: FaBookOpen, title: 'المحتوى التعليمي', desc: 'محتوى تفاعلي وثائق' },
  { icon: FaVideo, title: 'الفيديوهات', desc: 'مكتبة فيديوهات تعليمية' },
  { icon: FaCertificate, title: 'الشهادات', desc: 'شهادات إتمام تلقائية' },
  { icon: FaUserGraduate, title: 'المتدربين', desc: 'تتبع تقدم المتدربين' },
  { icon: FaClipboardList, title: 'التقييم', desc: 'اختبارات وتقييمات' },
];

const benefits = [
  'منصة تعلم إلكترونية متكاملة',
  'تتبع تقدم الموظفين',
  'شهادات تلقائية',
  'تطوير مهارات فريقك',
  'خطط تدريب مخصصة',
];

function Training() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة المواهب</span>
          <h1 className="hero-title">
            التدريب والتطوير
            <span className="highlight"> بتميز</span>
          </h1>
          <p className="hero-desc">
            نظام متكامل للتدريب والتطوير — دورات تدريبية ومواد تعليمية وشهادات معتمدة.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه للتدريب والتطوير</h2>
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
              <h2>لماذا تختار نظام التدريب؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" alt="Training" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في تطوير فريقك</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Training;