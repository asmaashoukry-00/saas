import { Link } from 'react-router-dom';
import { FaFileInvoice, FaReceipt, FaChartLine, FaMoneyCheckAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/SalesInvoices.css';

const features = [
  { icon: FaFileInvoice, title: 'إنشاء فواتير', desc: 'فواتير احترافية بأسهل طريقة' },
  { icon: FaReceipt, title: 'إدارة المستندات', desc: 'حفظ كل المستندات إلكترونياً' },
  { icon: FaChartLine, title: 'مبيعات آنية', desc: 'تتبع المبيعات لحظة بلحظة' },
  { icon: FaMoneyCheckAlt, title: 'تتبع المدفوعات', desc: 'متابعة حالات الفواتير' },
  { icon: FaPaperPlane, title: 'إرسال تلقائي', desc: 'إرسال الفواتير للعملاء' },
  { icon: FaCheckCircle, title: 'تقرير شامل', desc: 'تحليلات للمبيعات' },
];

function SalesInvoices() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">المنظومة المالية</span>
          <h1 className="hero-title">
            إدارة المبيعات والفواتير
            <span className="highlight"> بسهولة</span>
          </h1>
          <p className="hero-desc">
            أنشئ فواتير احترافية، تابع مبيعاتك، واستلم مدفوعاتك — كل ذلك في نظام واحد متكامل.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيفي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل أدوات البيع في مكان واحد</h2>
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
          <h2> حول مبيعاتك الرقمية مع سيركلز</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default SalesInvoices;