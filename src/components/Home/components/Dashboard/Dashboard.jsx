import { useState, useEffect } from 'react';
import { FaArrowRight, FaUniversity, FaCheck, FaUserPlus, FaUsers, FaWallet } from 'react-icons/fa';
import './styles/Dashboard.css';

function Dashboard() {
  const [profit, setProfit] = useState(0);
  const [animateBars, setAnimateBars] = useState(false);
  
  useEffect(() => {
    const target = 29800;
    const duration = 4800;
    let startTimestamp = null;
    let animFrame;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setProfit(Math.floor(progress * target));
      if (progress < 1) animFrame = requestAnimationFrame(step);
    };
    animFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animFrame);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
    <div className="mockup-wrapper" >
      <div className="browser-header">
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="browser-address">circlessoft.com/dashboard</div>
      </div>
      <div className="dashboard-core">
        <header className="db-header">
          <div className="user-welcome">
            <h1>لوحة تحكم الأداء</h1>
            <p>أهلاً بك مجدداً.. عملك يسير بشكل ممتاز اليوم!</p>
          </div>
          <div className="live-status">
            <span className="pulse-dot"></span>
            تحديث فوري للبيانات
          </div>
        </header>
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label"><FaUniversity /> أرباح اليوم</span>
            <div className="stat-value">
              <span>{profit.toLocaleString()}</span>
              <small>ج.م</small>
            </div>
            <span className="stat-change positive"><FaArrowRight /> 12% +</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">طلبات قيد التنفيذ</span>
            <div className="stat-value"><span>42</span></div>
            <span className="stat-change neutral">مستقر</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">نمو المبيعات</span>
            <div className="stat-value"><span>88%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '88%' }}></div>
            </div>
          </div>
        </section>
        <div className="analysis-area">
          <div className="chart-box">
            <h3>مؤشر المبيعات الأسبوعي</h3>
            <div className="bars-container">
              <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '60%' : '0%' }}></div><span className="bar-label">أحد</span></div>
              <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '85%' : '0%', background: '#4f46e5' }}></div><span className="bar-label">إثنين</span></div>
              <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '40%' : '0%' }}></div><span className="bar-label">ثلاثاء</span></div>
              <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '90%' : '0%', background: '#4f46e5' }}></div><span className="bar-label">أربعاء</span></div>
              <div className="bar-wrapper"><div className="bar" style={{ height: animateBars ? '70%' : '0%' }}></div><span className="bar-label">خميس</span></div>
            </div>
          </div>
          <div className="recent-actions">
            <h3>آخر النشاطات</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="act-icon"><FaCheck /></div>
                <p>تم تحصيل فاتورة <strong>#5021</strong></p>
              </div>
              <div className="activity-item">
                <div className="act-icon"><FaUserPlus /></div>
                <p>انضمام عميل جديد: <strong>شركة الأمل</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Dashboard;