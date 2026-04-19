import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaCalculator, FaFileInvoice, FaCreditCard, FaChartPie, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/Payroll.css';

const features = [
  { icon: FaMoneyBillWave, title: 'مسير رواتب تلقائي', desc: 'احسب الرواتب في دقائق بدل ساعات' },
  { icon: FaCalculator, title: 'حساب الضرائب', desc: 'خصومات الزكاة والتأمين تلقائياً' },
  { icon: FaFileInvoice, title: 'قسائم الراتب', desc: 'إصدار قسائم موثقة لكل موظف' },
  { icon: FaCreditCard, title: 'ربط البنوك', desc: 'تحويل الرواتب مباشرة للحسابات' },
  { icon: FaChartPie, title: 'تقرير الرواتب', desc: 'لوحات بيانات شاملة ومفصلة' },
  { icon: FaShieldAlt, title: 'توافق WPS', desc: 'متوافق مع نظام حماية الأجور' },
];

const benefits = [
  'توفير الوقت في احتساب الرواتب',
  'دقة عالية في الحسابات',
  'توليد الملفات المطلوبة للبنوك',
  'سجلات محاسبية آلية',
  'إشعارات للموظفين بالرواتب',
];

function Payroll() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة الموارد البشرية</span>
          <h1 className="hero-title">
            مسير الرواتب والتعويضات
            <span className="highlight"> بسهولة تامة</span>
          </h1>
          <p className="hero-desc">
            نظام متكامل لاحتساب الرواتب والبدلات والخصومات — مع إصدار القسائم وتحويلها للبنوك تلقائياً.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيفي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه لمسير الرواتب</h2>
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
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" alt="Payroll" />
            </div>
            <div className="benefits-content">
              <h2>وفر الوقت والجهد</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في أتمتة مسير الرواتب</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Payroll;