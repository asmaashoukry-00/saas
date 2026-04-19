// HR Landing Section - Hero section for HR page
// قسم الهيرو لصفحة الموارد البشرية

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaCheck, FaClock, FaUsers, FaUniversity, FaMoneyBillWave, FaChartPie, FaUser } from 'react-icons/fa';
import './styles/HRLanding.css';

const dashboardImages = [
  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', title: 'الرواتب' },
  { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', title: 'خدمات الموظفين' },
  { img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800', title: 'الحضور والانصراف' },
  { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', title: 'شئون الموظفين' },
];

function HRLanding() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % dashboardImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="page1-hero">
        <div className="container">
          <h1 className="hero-title">
            ودّع الفوضى في الرواتب والموارد البشرية <br />
            <span className="highlight-wrap">
              إلى الأبد
              <svg className="scribble-marker" viewBox="0 0 450 100" preserveAspectRatio="none">
                <path d="M15,50 C15,20 100,10 225,10 C350,10 435,20 435,50 C435,80 350,90 225,90 C100,90 15,80 15,50 Z" fill="none" stroke="#4F46E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h1>
          <p className="hero-description">
            الراحة التي تستحقها مع إدارة احترافية للرواتب والموارد البشرية
          </p>
          <div className="cta-wrapper">
            <a href="#" className="hero-btn">اطلب عرض توضيفي الآن</a>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="features-section">
        <div className="container">
          <div className="mockup-wrapper" style={{ maxWidth: '1100px' }}>
            <div className="browser-header">
              <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="browser-address">https://circles.hr/analytics/overview</div>
            </div>
            <div className="dashboard-core">
              <div className="db-header">
                <div className="user-welcome">
                  <h1>مرحباً، سالم 👋</h1>
                  <p>إليك نظرة سريعة على أداء شركتك اليوم</p>
                </div>
                <div className="live-status">
                  <span className="pulse-dot"></span>
                  النظام متصل الآن
                </div>
              </div>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-label"><FaUsers /> إجمالي الموظفين</span>
                  <div className="stat-value">1,248</div>
                  <span className="stat-change positive">+4% هذا الشهر</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label"><FaClock /> الحضور اليومي</span>
                  <div className="stat-value">98.2<small>%</small></div>
                  <span className="stat-change positive">مثالي</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label"><FaUniversity /> إجمالي الرواتب</span>
                  <div className="stat-value">4.2<small>M</small></div>
                  <span className="stat-change positive">تم الاعتماد</span>
                </div>
              </div>
              <div className="analysis-area">
                <div className="chart-box">
                  <h3>معدل الإنتاجية (الأسبوعي)</h3>
                  <div className="bars-container">
                    <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '60%' : '0%' }}></div><span className="bar-label">ح</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '85%' : '0%', background: '#4f46e5' }}></div><span className="bar-label">ن</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '40%' : '0%' }}></div><span className="bar-label">ث</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '90%' : '0%', background: '#4f46e5' }}></div><span className="bar-label">ر</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '70%' : '0%' }}></div><span className="bar-label">خ</span></div>
                  </div>
                </div>
                <div className="recent-actions">
                  <h3>إشعارات الموارد البشرية</h3>
                  <div className="activity-list">
                    <div className="activity-item">
                      <div className="act-icon"><FaCheck /></div>
                      <p>تمت مراجعة جميع ملفات التعيين الجديدة.</p>
                    </div>
                    <div className="activity-item">
                      <div className="act-icon" style={{ color: '#f59e0b' }}><FaClock /></div>
                      <p>تذكير: موعد تحديث بيانات التأمينات غداً.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-main-title">
              موظفون سعداء + رواتب مضمونة =
              <span className="underline-container">
                نجاح أكبر لشركتك
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
                    {i === 0 && <FaMoneyBillWave />}
                    {i === 1 && <FaChartPie />}
                    {i === 2 && <FaClock />}
                    {i === 3 && <FaUser />}
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
    </>
  );
}

export default HRLanding;