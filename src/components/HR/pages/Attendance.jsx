import { Link } from 'react-router-dom';
import { FaClock, FaFingerprint, FaMapMarkerAlt, FaCalendarAlt, FaUserClock, FaCheckDouble } from 'react-icons/fa';
import '../pages/styles/Attendance.css';

const features = [
  { icon: FaClock, title: 'تتبع الوقت', desc: 'سجل كامل لدقائق العمل الفعلية' },
  { icon: FaFingerprint, title: 'ربط البصمة', desc: 'تواصل مع أجهزة البصمة والم考勤' },
  { icon: FaMapMarkerAlt, title: 'تتبع الموقع', desc: ' تسجيل الحضور عبر GPS للموظفين الميدانيين' },
  { icon: FaCalendarAlt, title: 'جدولة المناوبات', desc: 'خطط لجدول عمل موظفيك' },
  { icon: FaUserClock, title: 'إدارة الإجازات', desc: 'اطلب واعتمد الإجازات إلكترونياً' },
  { icon: FaCheckDouble, title: 'تقرير شامل', desc: 'تحليلات دقيقة للحضور والانصراف' },
];

const benefits = [
  'تحكم كامل في دوام موظفيك',
  ' reduction في الغياب والتأخر',
  ' تقارير جاهزة للجهات الحكومية',
  ' ربط مع نظام الرواتب تلقائياً',
];

function Attendance() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة الموارد البشرية</span>
          <h1 className="hero-title">
            الحضور والانصراف
            <span className="highlight"> بذكاء</span>
          </h1>
          <p className="hero-desc">
            نظام ذكي لتتبع حضور موظفيك — من البصمة أو الهاتف أو الموقع الجغرافي — مع تقارير دقيقة.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيفي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">مميزات نظام الحضور والانصراف</h2>
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

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <h2>حقق الرقابة الكاملة</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><i className="fa-solid fa-check-circle"></i> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600" alt="Attendance" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>وفر وقتك مع سيركلز</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Attendance;