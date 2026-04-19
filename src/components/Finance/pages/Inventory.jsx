import { Link } from 'react-router-dom';
import { FaWarehouse, FaBoxOpen, FaBarcode, FaShippingFast, FaExclamationTriangle, FaChartBar } from 'react-icons/fa';
import '../pages/styles/Inventory.css';

const features = [
  { icon: FaWarehouse, title: 'مستودعات متعددة', desc: 'إدارة عدة مستودعات بسهولة' },
  { icon: FaBoxOpen, title: 'تتبع المخزون', desc: 'معرفة الكميات آنياً' },
  { icon: FaBarcode, title: 'باركود', desc: 'مسح الباركود السريع' },
  { icon: FaShippingFast, title: 'حركات المخزون', desc: 'إدخال وإخراج البضاعة' },
  { icon: FaExclamationTriangle, title: 'تنبيهات المخزون', desc: 'تنبيه عند انخفاض المستوى' },
  { icon: FaChartBar, title: 'تقرير المخزون', desc: 'تحليلات شاملة' },
];

function Inventory() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">المنظومة المالية</span>
          <h1 className="hero-title">
            إدارة المخزون والمستودعات
            <span className="highlight"> بذكاء</span>
          </h1>
          <p className="hero-desc">
            تحكم في مخزونك منorado — تابع الكميات، تتبع Movements، واحصل على تنبيهات تلقائية.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيفي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل أدوات المخزون</h2>
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
          <h2>أطلق العنان لإدارة مخزونك</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Inventory;