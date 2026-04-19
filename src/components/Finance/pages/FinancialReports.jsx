import { Link } from 'react-router-dom';
import { FaChartLine, FaChartPie, FaFileInvoiceDollar, FaWallet, FaCalculator, FaBalanceScale, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/FinancialReports.css';

const features = [
  { icon: FaChartLine, title: 'التقارير المالية', desc: 'تقارير شاملة ومفصلة' },
  { icon: FaChartPie, title: 'التحليلات', desc: 'تحليلات مالية متقدمة' },
  { icon: FaFileInvoiceDollar, title: 'الفواتير', desc: 'إدارة الفواتير والمستندات' },
  { icon: FaWallet, title: 'إدارة السيولة', desc: 'تتبع التدفقات المالية' },
  { icon: FaCalculator, title: 'المحاسبة', desc: 'نظام محاسبي متكامل' },
  { icon: FaBalanceScale, title: 'الموازنت', desc: 'اعداد القوائم المالية' },
];

const benefits = [
  'تقارير مالية آنية ومحدثة',
  'تحليلات ذكية للأداء',
  'تتبع الإيرادات والمصروفات',
  'تصدير التقارير بأسهل الطرق',
  'متوافق مع المعايير المحاسبية',
];

function FinancialReports() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">المنظومة المالية</span>
          <h1 className="hero-title">
            التقارير المالية والتحليلات
            <span className="highlight"> بدقة</span>
          </h1>
          <p className="hero-desc">
            نظام متكامل للتقارير المالية والتحليلات — اتخذ قراراتك بناءً على بيانات دقيقة.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه للتحليل المالي</h2>
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
              <h2>لماذا تختار نظام التقارير المالية؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600" alt="Financial Reports" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في تحليل أداءك المالي</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default FinancialReports;