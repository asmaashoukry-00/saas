import { Link } from 'react-router-dom';
import './styles/CirclesSolutions.css';

const hrImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800";
const financeImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
const talentImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800";

function CirclesSolutions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-relaxed">
  من إدارة الموظفين إلى المبيعات والحسابات..<br />
  كل شيء تحت سيطرتك
  <span className="relative inline-block">
    بنظام واحد.
    <svg className="absolute -bottom-1 right-0 w-full h-6 -z-10" viewBox="0 0 250 80" preserveAspectRatio="none">
     <path 
  d="M-5,40 C-5,10 225,0 225,40 C225,90 10,80 7,45 C2,40 25,10 135,20" 
  stroke="#4F46E5" 
  strokeWidth="3.5" 
  fill="none" 
  strokeLinecap="round" 
  />
    </svg>
  </span>
</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Link to="/hr" className="modern-card block bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-40 md:h-48 relative overflow-hidden">
              <img src={hrImage} alt="HR Services" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <span className="card-badge absolute top-3 right-3 bg-white/90 text-primary px-3 py-1 rounded-lg text-xs font-bold">الأكثر شمولاً</span>
            </div>
            <div className="p-5 md:p-6 md:p-7">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">إدارة الموارد البشرية والرواتب</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-4 md:mb-5">حل متكامل يضع بيانات موظفيك ورواتبهم والامتثال بين يديك في نظام واحد مبسط.</p>
              <ul className="pt-4 md:pt-5 border-t border-gray-100">
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>إدارة ملفات الموظفين
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>مسير الرواتب والتعويضات
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>الحضور والانصراف
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>الامتثال للقوانين والتقارير
                </li>
              </ul>
            </div>
          </Link>
          <Link to="/finance" className="modern-card block bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-40 md:h-48 relative overflow-hidden">
              <img src={financeImage} alt="Finance Services" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 md:p-6 md:p-7">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">المنظومة المالية والمبيعات</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-4 md:mb-5">سيطرة كاملة على مبيعاتك ومشترياتك وحساباتك، مع رؤية واضحة ودقة.</p>
              <ul className="pt-4 md:pt-5 border-t border-gray-100">
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>إدارة المبيعات والفواتير
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>المحاسبة العامة والحسابات
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>إدارة المخزون والمستودعات
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>التقارير المالية والتحليلات
                </li>
              </ul>
            </div>
          </Link>
          <Link to="/talent" className="modern-card block bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-40 md:h-48 relative overflow-hidden">
              <img src={talentImage} alt="Talent Management" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 md:p-6 md:p-7">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">إدارة المواهب والتطوير</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-4 md:mb-5">من جذب أفضل الكفاءات إلى تنمية قدراتهم وتقييم أدائهم بشكل متكامل.</p>
              <ul className="pt-4 md:pt-5 border-t border-gray-100">
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>إدارة التوظيف والمقابلات
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>تقييم الأداء 360 درجة
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>التدريب والتطوير
                </li>
                <li className="text-sm text-gray-600 py-2 flex items-center gap-2">
                  <span className="text-primary">←</span>إدارة المسارات الوظيفية
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CirclesSolutions;