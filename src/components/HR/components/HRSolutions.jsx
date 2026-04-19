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
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
  <span 
    className="relative inline-block"
  >
    موظفوك ثروتك
    <svg 
      className="absolute -bottom-2 right-0 w-full h-16 -z-10" 
      viewBox="0 0 520 110" 
      preserveAspectRatio="none" 
    >
      <path 
        d="M10 55 Q 260 45 510 55" 
        stroke="#FC787D" 
        strokeWidth="45" 
        strokeLinecap="round" 
        strokeOpacity="0.8" 
      />
    </svg>
  </span>
  .. أدرهم بذكاء، وشاهد أرباحك تنمو.
</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {hrSolutions.map((solution, index) => (
            <Link key={index} to={solution.link} className={`hr-solution-card ${solution.theme}-theme block bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
              <div className="mb-4 md:mb-5">
                <img src={solution.icon} alt={solution.title} className="w-12 h-12 md:w-14 md:h-14" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{solution.title}</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-4 md:mb-5">{solution.description}</p>
              <ul className="mb-5 md:mb-6">
                {solution.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-600 py-2 border-b border-gray-50 flex items-center gap-2">
                    <span className="text-primary">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="text-sm md:text-base font-semibold text-gray-800 flex items-center gap-2 hover:text-primary transition-colors">
                اعرف المزيد <FaArrowLeft className="text-xs" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HRSolutions;