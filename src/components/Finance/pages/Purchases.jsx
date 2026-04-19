import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBoxOpen, FaClipboardList, FaMoneyBillWave, FaWarehouse, FaTruckLoading, FaCheckCircle } from 'react-icons/fa';
import '../pages/styles/Purchases.css';

const features = [
  { icon: FaShoppingCart, title: 'طلبات الشراء', desc: 'إنشاء وتتبع طلبات الشراء بسهولة' },
  { icon: FaBoxOpen, title: 'إدارة الموردين', desc: 'قاعدة بيانات شاملة للموردين' },
  { icon: FaClipboardList, title: 'أوامر الشراء', desc: 'إنشاء أوامر الشراء وإدارة العقود' },
  { icon: FaMoneyBillWave, title: 'المالية والمشتريات', desc: 'تكامل مع النظام المالي' },
  { icon: FaWarehouse, title: 'المخزون', desc: 'تتبع المخزون تلقائياً' },
  { icon: FaTruckLoading, title: 'استلام البضائع', desc: 'تتبع واستلام البضائع' },
];

const benefits = [
  'أتمتة عملية الشراء بالكامل',
  'تحكم أفضل في التكاليف',
  'متابعة حالة الطلبات',
  'تقارير شاملة عن المشتريات',
  'إدارة الموردين باحترافية',
];

function Purchases() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">المنظومة المالية</span>
          <h1 className="hero-title">
            إدارة المشتريات
            <span className="highlight"> بذكاء</span>
          </h1>
          <p className="hero-desc">
            نظام شامل لإدارة المشتريات والموردين — من طلبات الشراء حتى استلام البضائع.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه لإدارة المشتريات</h2>
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
              <h2>لماذا تختار نظام المشتريات؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600" alt="Purchases" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في تحسين مشترياتك</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default Purchases;