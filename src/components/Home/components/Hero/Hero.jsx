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
    <section className="saas-hero pt-32 md:pt-44 pb-10 md:pb-20">
      <div className="mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="hero-title text-2xl md:text-4xl lg:text-5xl font-extrabold leading-relaxed md:leading-normal mb-2">
          أطلق العنان لأعمالك، وحوّل إدارة موظفيك
          <br />
          ومبيعاتك إلى
          <span className="highlighted-word relative inline-block z-10">
            نمو مستدام
            <svg className="custom-underline absolute -bottom-1 right-0 w-full -z-10" viewBox="0 0 150 50" preserveAspectRatio="none">
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
            <div className="floating-marker yellow-box hidden md:block absolute -top-8 -right-20">
              مبيعات أعلى <span className="arrow-y"></span>
            </div>
            <div className="floating-marker blue-box hidden md:block absolute bottom-1 -left-20">
              تحكم كامل <span className="arrow-b"></span>
            </div>
          </span>
        </h1>
        <p className="hero-description max-w-2xl mx-auto text-sm md:text-base">
          نظام ERP متكامل + إدارة موارد بشرية في منصة واحدة.
        </p>
        <button className="hero-btn mt-4 md:mt-5 mb-8 md:mb-16 px-10 md:px-14 py-3 md:py-4 text-base md:text-lg">اطلب عرض توضيحي</button>
        
        <div className="mockup-wrapper hidden md:block">
          <div className="browser-header flex items-center border-b border-gray-200 p-3 bg-gray-100">
            <div className="dots flex gap-2 ml-5">
              <span className="dot red w-2.5 h-2.5 rounded-full"></span>
              <span className="dot yellow w-2.5 h-2.5 rounded-full"></span>
              <span className="dot green w-2.5 h-2.5 rounded-full"></span>
            </div>
            <div className="browser-address bg-white text-xs text-gray-400 rounded px-4 py-1.5 text-right flex-1">circlessoft.com/dashboard</div>
          </div>
          <div className="dashboard-core p-8 md:p-10">
            <header className="db-header flex justify-between items-start mb-6 md:mb-8">
              <div className="user-welcome text-right">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">لوحة تحكم الأداء</h1>
                <p className="text-gray-500 text-sm mt-1">أهلاً بك مجدداً.. عملك يسير بشكل ممتاز اليوم!</p>
              </div>
              <div className="live-status bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 border border-green-200 hidden md:flex">
                <span className="pulse-dot w-2 h-2 bg-green-500 rounded-full"></span>
                تحديث فوري للبيانات
              </div>
            </header>
            <section className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
              <div className="stat-card p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary transition-all">
                <span className="stat-label text-xs md:text-sm text-gray-500 font-semibold flex items-center gap-2"><FaUniversity /> أرباح اليوم</span>
                <div className="stat-value text-2xl md:text-3xl font-extrabold text-gray-800 my-2 md:my-3">
                  <span id="profit-counter">{profit.toLocaleString()}</span>
                  <small className="text-sm font-normal text-gray-400">ج.م</small>
                </div>
                <span className="stat-change positive text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1"><FaArrowRight /> 12% +</span>
              </div>
              <div className="stat-card p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="stat-label text-xs md:text-sm text-gray-500 font-semibold">طلبات قيد التنفيذ</span>
                <div className="stat-value text-2xl md:text-3xl font-extrabold text-gray-800 my-2 md:my-3"><span>42</span></div>
                <span className="stat-change neutral text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs font-bold">مستقر</span>
              </div>
              <div className="stat-card p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="stat-label text-xs md:text-sm text-gray-500 font-semibold">نمو المبيعات</span>
                <div className="stat-value text-2xl md:text-3xl font-extrabold text-gray-800 my-2 md:my-3"><span>88%</span></div>
                <div className="progress-bar h-1.5 bg-gray-100 rounded-full mt-3">
                  <div className="progress-fill h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </section>
            <div className="analysis-area grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              <div className="chart-box col-span-3 p-4 md:p-6 rounded-2xl border border-gray-100">
                <h3 className="text-sm md:text-base font-bold text-gray-800 mb-4">مؤشر المبيعات الأسبوعي</h3>
                <div className="canvas-holder h-40 md:h-48">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
              <div className="recent-actions col-span-2 p-4 md:p-6 rounded-2xl border border-gray-100">
                <h3 className="text-sm md:text-base font-bold text-gray-800 mb-4">آخر النشاطات</h3>
                <div className="activity-item flex items-center gap-3 mb-3 pb-3 border-b border-gray-50">
                  <div className="act-icon w-8 h-8 bg-indigo-50 text-primary rounded-lg flex items-center justify-center text-xs md:text-sm"><FaCheck /></div>
                  <p className="text-xs md:text-sm text-gray-600">تم تحصيل فاتورة <strong className="text-gray-800">#5021</strong></p>
                </div>
                <div className="activity-item flex items-center gap-3">
                  <div className="act-icon w-8 h-8 bg-indigo-50 text-primary rounded-lg flex items-center justify-center text-xs md:text-sm"><FaUserPlus /></div>
                  <p className="text-xs md:text-sm text-gray-600">انضمام عميل جديد: <strong className="text-gray-800">شركة الأمل</strong></p>
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