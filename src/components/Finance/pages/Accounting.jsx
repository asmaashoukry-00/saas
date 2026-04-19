import { Link } from 'react-router-dom';
import { FaBook, FaBalanceScale, FaChartPie, FaCalculator, FaFileContract, FaWallet } from 'react-icons/fa';
import '../pages/styles/Accounting.css';

const features = [
  { icon: FaBook, title: 'دفتر الأستاذ', desc: 'حسابات دقيقة ومنظمة' },
  { icon: FaBalanceScale, title: 'الميزانية العمومية', desc: 'رؤية كاملة للمركز المالي' },
  { icon: FaChartPie, title: 'قائمة الدخل', desc: 'تتبع الأرباح والخسائر' },
  { icon: FaCalculator, title: 'القيود المحاسبية', desc: 'تسجيل كل المعاملات' },
  { icon: FaFileContract, title: 'دفتر اليومية', desc: 'سجل كامل للحركات' },
  { icon: FaWallet, title: 'الأ现金', desc: 'متابعة السيولة' },
];

function Accounting() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">المنظومة المالية</span>
          <h1 className="hero-title">
            المحاسبة العامة
            <span className="highlight"> باحترافية</span>
          </h1>
          <p className="hero-desc">
            نظام محاسبي شامل — من القيود إلى التقارير المالية — ليalways تعرف مركزك المالي الحقيقي.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيفي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما يحتاجه المحاسب</h2>
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
          <h2>حوّل محاسبتك الرقمية</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Accounting;