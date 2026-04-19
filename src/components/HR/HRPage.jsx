import { Link } from 'react-router-dom';
import HRLanding from './components/HRLanding';
import HRSolutions from './components/HRSolutions';
import StackingPanels from './components/StackingPanels/StackingPanels';
import './styles/HRPage.css';


const hrImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800";
const financeImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
const talentImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800";

function HRPage() {
  return (
    <>
      <HRLanding />
      <HRSolutions />
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

export default HRPage;