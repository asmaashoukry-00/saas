import { useState, useEffect,  } from 'react';
import { FaArrowRight, FaUniversity, FaCheck, FaUserPlus } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './styles/Hero.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function Hero() {
  const [profit, setProfit] = useState(0);

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

  const chartData = {
    labels: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    datasets: [{
      label: 'المبيعات',
      data: [12000, 19000, 15000, 25000, 32000],
      borderColor: '#4f46e5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: { y: { display: false }, x: { grid: { display: false } } },
    maintainAspectRatio: false
  };

  return (
    <section className="saas-hero">
      <div className="container mx-auto px-8 md:px-4 relative z-10 text-center">
        <h1 className="hero-title">
          أطلق العنان لأعمالك، وحوّل إدارة موظفيك
          <br />
          ومبيعاتك إلى
          <span className="highlighted-word">
            نمو مستدام
           <svg className="custom-underline" viewBox="0 0 150 50" preserveAspectRatio="none">
  <path 
  
    d="M10 42C30 45 100 46 140 40 
       M15 8C45 3 105 7 140 12 
       M10 8C8 14 9 38 10 45 
       M140 10C141 9 138 35 138 42" 
    stroke="#4F46E5" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
  />
</svg>
            <div className="floating-marker yellow-box">
              مبيعات أعلى <span className="arrow-y"></span>
            </div>
            <div className="floating-marker blue-box">
              تحكم كامل <span className="arrow-b"></span>
            </div>
          </span>
        </h1>
        <p className="hero-description max-w-2xl mx-auto">
          نظام ERP متكامل + إدارة موارد بشرية في منصة واحدة.
        </p>
        <button className="hero-btn">اطلب عرض توضيحي</button>
        
        <div className="mockup-wrapper">
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
                  <span id="profit-counter">{profit.toLocaleString()}</span>
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
                <div className="canvas-holder">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
              <div className="recent-actions">
                <h3>آخر النشاطات</h3>
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

export default Hero;