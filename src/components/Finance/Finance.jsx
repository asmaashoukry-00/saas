import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaFileInvoice, FaWarehouse, FaShoppingCart, FaChartBar, FaCheck, FaClock, FaUniversity, FaUsers } from 'react-icons/fa';
import StackingPanels from './components/StackingPanels/StackingPanels';
import './styles/FinancePage.css';

const dashboardImages = [
  { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', title: 'الفواتير والمبيعات' },
  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', title: 'المحاسبة العامة' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', title: 'المخزون والمستودعات' },
  { img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800', title: 'التقارير والتحليلات' },
];

const financeImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
const hrImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800";
const talentImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800";

function FinancePage() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % dashboardImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="finance-hero">
        <div className="container">
         <h1 className="hero-title">
    أنت تبيع… والنظام يدير… <br />
    <span className="highlight-wrap" style={{ position: 'relative', display: 'inline-block' }}>
        لتحقق أرباحاً مستدامة
        <svg 
            className="brush-highlight" 
            viewBox="0 0 520 110" 
            preserveAspectRatio="none" 
            fill="none" 
            style={{
                position: 'absolute',
                bottom: '-10px',
                right: '4px',
                width: '97%',
                height: '85px',
                zIndex: '-1',
                pointerEvents: 'none'
            }}
        >
            <path 
                d="M10 55 Q 260 45 510 55" 
                stroke="#FC787D" 
                strokeWidth="45" 
                strokeLinecap="round" 
                strokeOpacity="1" 
            />
        </svg>
    </span>
    بكل اطمئنان.
</h1>
          <p className="hero-description">
            سيركلز يجمع مبيعاتك، مشترياتك، ومحاسبتك في نظام واحد — لتتخذ قرارات مدروسة بناءً على أرقام حقيقية.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي الآن</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-main-title">
              أموال منظمة + مبيعات دقيقة =
              <span className="underline-container">
                أرباح أكبر لشركتك
                <svg className="scribble-line" viewBox="0 0 300 20" preserveAspectRatio="none">
                  <path d="M5,15 C50,5 150,5 295,15" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="bento-grid">
            <div className="tabs-side-list">
              {dashboardImages.map((item, i) => (
                <div key={i} className={`tab-item ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  <div className="tab-icon">
                    {i === 0 && <FaFileInvoice />}
                    {i === 1 && <FaChartLine />}
                    {i === 2 && <FaWarehouse />}
                    {i === 3 && <FaChartBar />}
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <div className="display-area">
              <div className="mockup-wrapper-display">
                <img src={dashboardImages[activeTab].img} alt={dashboardImages[activeTab].title} className="display-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">حلولنا المالية المتكاملة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div className="solution-card bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="card-icon w-12 h-12 md:w-14 md:h-14 bg-indigo-50 text-primary rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-4"><FaFileInvoice /></div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">إدارة الفواتير والمبيعات</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">إنشاء فواتير احترافية ومتابعة المبيعات لحظة بلحظة</p>
            </div>
            <div className="solution-card bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="card-icon w-12 h-12 md:w-14 md:h-14 bg-indigo-50 text-primary rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-4"><FaChartLine /></div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">المحاسبة العامة</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">دفتر أستاذ إلكتروني ودفتر اليومية وكافة القيود المحاسبية</p>
            </div>
            <div className="solution-card bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="card-icon w-12 h-12 md:w-14 md:h-14 bg-indigo-50 text-primary rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-4"><FaWarehouse /></div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">إدارة المخزون</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">تتبع المخزون وتنبيه انخفاض الأصناف وإدارة المستودعات</p>
            </div>
          </div>
        </div>
      </section>

      <StackingPanels />

      <section className="circles-solutions">
        <div className="container mx-auto px-6">
          <div className="header-group">
            <h2 className="main-sentence">
              من إدارة الموظفين إلى المبيعات والحسابات..<br />
              كل شيء تحت سيطرتك
              <span className="highlight-wrap">
                بنظام واحد.
                <svg className="hand-drawn-circle" viewBox="0 0 250 80" preserveAspectRatio="none">
                  <path d="M10,40 C10,10 240,10 240,40 C240,70 10,70 15,45 C18,30 50,15 150,20" stroke="#4F46E5" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="premium-cards-grid">
            <Link to="/hr" className="modern-card">
              <div className="card-image-wrapper">
                <img src={hrImage} alt="HR Services" />
                <span className="card-badge">الأكثر شمولاً</span>
              </div>
              <div className="card-body-content">
                <h3 className="card-main-title">إدارة الموارد البشرية والرواتب</h3>
                <p className="card-main-desc">حل متكامل يضع بيانات موظفيك ورواتبهم والامتثال بين يديك في نظام واحد مبسط.</p>
                <ul className="features-sub-list">
                  <li>إدارة ملفات الموظفين</li>
                  <li>مسير الرواتب والتعويضات</li>
                  <li>الحضور والانصراف</li>
                  <li>الامتثال للقوانين والتقارير</li>
                </ul>
              </div>
            </Link>
            <Link to="/finance" className="modern-card">
              <div className="card-image-wrapper">
                <img src={financeImage} alt="Finance Services" />
              </div>
              <div className="card-body-content">
                <h3 className="card-main-title">المنظومة المالية والمبيعات</h3>
                <p className="card-main-desc">سيطرة كاملة على مبيعاتك ومشترياتك وحساباتك، مع رؤية واضحة ودقة.</p>
                <ul className="features-sub-list">
                  <li>إدارة المبيعات والفواتير</li>
                  <li>المحاسبة العامة والحسابات</li>
                  <li>إدارة المخزون والمستودعات</li>
                  <li>التقارير المالية والتحليلات</li>
                </ul>
              </div>
            </Link>
            <Link to="/talent" className="modern-card">
              <div className="card-image-wrapper">
                <img src={talentImage} alt="Talent Management" />
              </div>
              <div className="card-body-content">
                <h3 className="card-main-title">إدارة المواهب والتطوير</h3>
                <p className="card-main-desc">من جذب أفضل الكفاءات إلى تنمية قدراتهم وتقييم أدائهم بشكل متكامل.</p>
                <ul className="features-sub-list">
                  <li>إدارة التوظيف والمقابلات</li>
                  <li>تقييم الأداء 360 درجة</li>
                  <li>التدريب والتطوير</li>
                  <li>إدارة المسارات الوظيفية</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancePage;