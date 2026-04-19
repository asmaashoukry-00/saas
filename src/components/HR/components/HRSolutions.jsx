import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import HR from '../../../assets/svgs/HR.svg';
import PayrollSVG from '../../../assets/svgs/Circles Pay.svg';
import AttendanceSVG from '../../../assets/svgs/Circles TA.svg';
import ComplianceSVG from '../../../assets/svgs/ERP.svg';
import './styles/HRSolutions.css';

const hrSolutions = [
  {
    title: 'إدارة ملفات الموظفين',
    description: 'ملف موظف رقمي شامل يضم كل المعلومات والوثائق والبيانات الشخصية.',
    features: ['سجل موظف رقمي', 'قاعدة بيانات متكاملة', 'بحث وتصفية متقدم'],
    icon: HR,
    link: '/hr/employee-files',
    theme: 'blue'
  },
  {
    title: 'مسير الرواتب والتعويضات',
    description: 'احسب الرواتب في دقائق مع إصدار القسائم وتحويلها للبنوك تلقائياً.',
    features: ['حساب الضرائب تلقائياً', 'قسائم الراتب الإلكترونية', 'ربط بالبنوك WPS'],
    icon: PayrollSVG,
    link: '/hr/payroll',
    theme: 'purple'
  },
  {
    title: 'الحضور والانصراف',
    description: 'نظام ذكي لتتبع الحضور عبر البصمة أو الموقع الجغرافي بدقة متناهية.',
    features: ['ربط أجهزة البصمة', 'تتبع الموقع GPS', 'جدولة المناوبات'],
    icon: AttendanceSVG,
    link: '/hr/attendance',
    theme: 'green'
  },
  {
    title: 'الامتثال والتقارير الحكومية',
    description: 'إنتاج التقارير المطلوبة للجهات الحكومية تلقائياً مع متابعة الامتثال.',
    features: ['تقارير قانونية', 'عقود موحدة معتمدة', 'لوحات الامتثال'],
    icon: ComplianceSVG,
    link: '/hr/compliance',
    theme: 'violet'
  }
];

function HRSolutions() {
  return (
    <section className="hr-solutions-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-main-title">
  <span 
    className="hr-highlight" 
    style={{ position: 'relative', display: 'inline-block', zIndex: '1' }}
  >
    موظفوك ثروتك
    <svg 
      className="brush-highlight" 
      viewBox="0 0 520 110" 
      preserveAspectRatio="none" 
      fill="none" 
      style={{
        position: 'absolute',
        bottom: '-15px', // نزلناه شوية عشان يبقى تحت الكلمة كأنه خط يدوي
        right: '0',
        width: '105%', // خليناه أعرض من الكلمة بشوية لإعطاء شكل الـ Brush
        height: '70px',
        zIndex: '-1',
        pointerEvents: 'none'
      }}
    >
      <path 
        d="M10 55 Q 260 45 510 55" 
        stroke="#FC787D" 
        strokeWidth="45" 
        strokeLinecap="round" 
        strokeOpacity="0.8" // جربي 0.8 لو عاوزة لون الـ SVG يكون أهدى والكلام أوضح
      />
    </svg>
  </span>
  .. أدرهم بذكاء، وشاهد أرباحك تنمو.
</h2>
        </div>
        <div className="hr-solutions-grid">
          {hrSolutions.map((solution, index) => (
            <Link key={index} to={solution.link} className={`hr-solution-card ${solution.theme}-theme`}>
              <div className="hr-solution-icon">
                <img src={solution.icon} alt={solution.title} />
              </div>
              <h3 className="hr-solution-title">{solution.title}</h3>
              <p className="hr-solution-desc">{solution.description}</p>
              <ul className="hr-solution-features">
                {solution.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <span className="hr-solution-btn">
                اعرف المزيد <FaArrowLeft />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HRSolutions;