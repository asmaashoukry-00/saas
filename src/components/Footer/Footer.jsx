import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 md:py-20 font-tajawal">
    <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-12 md:pb-14">
        <div className="brand-area">
            <img src="/NavbarLogo.png" alt="Circles" className="h-10 md:h-11 mb-5 filter brightness-0 invert" />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">منظومة متكاملة تربط مفاصل منشأتك في مكان واحد، من الموارد البشرية إلى المحاسبة والمبيعات.</p>
        </div>

        <div className="f-section">
            <h3 className="text-base md:text-lg font-bold mb-5 md:mb-6">إدارة الموارد البشرية والرواتب</h3>
            <ul className="space-y-3">
                <li><Link to="/hr" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">إدارة ملفات الموظفين</Link></li>
                <li><Link to="/hr" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">مسير الرواتب والتعويضات</Link></li>
                <li><Link to="/hr" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">الحضور والانصراف</Link></li>
                <li><Link to="/hr" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">الامتثال والتقارير الحكومية</Link></li>
            </ul>
        </div>

        <div className="f-section">
            <h3 className="text-base md:text-lg font-bold mb-5 md:mb-6 whitespace-nowrap">المنظومة المالية والمبيعات</h3>
            <ul className="space-y-3">
                <li><Link to="/finance" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">إدارة المبيعات والفواتير</Link></li>
                <li><Link to="/finance" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">المحاسبة العامة</Link></li>
                <li><Link to="/finance" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">إدارة المخزون والمستودعات</Link></li>
                <li><Link to="/finance" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">إدارة المشتريات</Link></li>
                <li><Link to="/finance" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">التقارير المالية والتحليلات</Link></li>
            </ul>
        </div>

        <div className="f-section">
            <h3 className="text-base md:text-lg font-bold mb-5 md:mb-6">إدارة المواهب والتطوير</h3>
            <ul className="space-y-3">
                <li><Link to="/talent" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">إدارة التوظيف والمقابلات</Link></li>
                <li><Link to="/talent" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">تقييم الأداء 360 درجة</Link></li>
                <li><Link to="/talent" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">التدريب والتطوير</Link></li>
                <li><Link to="/talent" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">إدارة المسارات الوظيفية</Link></li>
            </ul>
        </div>
    </div>

    <hr className="border-gray-800 max-w-6xl mx-auto" />

    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12 flex flex-col md:flex-row gap-8 md:gap-10">
        <div className="flex-1">
            <h3 className="text-base md:text-lg font-bold mb-5 md:mb-6">حلول إضافية</h3>
            <ul className="space-y-3">
                <li><Link to="/solutions" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">الحل الشامل - One Circles</Link></li>
                <li><Link to="/solutions" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">تطبيق الهاتف المحمول</Link></li>
                <li><Link to="/solutions" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors">تحليل البيانات المتقدم</Link></li>
            </ul>
        </div>

        <div className="flex-[2]">
            <h3 className="text-base md:text-lg font-bold mb-5 md:mb-6">تواصل معنا</h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-8">
                <div>
                    <span className="text-gray-500 text-xs md:text-sm block mb-1">السعودية - الرياض</span>
                    <a href="tel:+966543868253" dir="ltr" className="text-white text-lg md:text-xl font-bold hover:text-primary transition-colors">+966 54 386 8253</a>
                </div>
                <div>
                    <span className="text-gray-500 text-xs md:text-sm block mb-1">الأردن - عمّان</span>
                    <a href="tel:+962788868944" dir="ltr" className="text-white text-lg md:text-xl font-bold hover:text-primary transition-colors">+962 78 886 8944</a>
                </div>
            </div>
            
            <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all hover:-translate-y-1"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all hover:-translate-y-1"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-orange-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all hover:-translate-y-1"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
    </div>

    <hr className="border-gray-800/50 max-w-6xl mx-auto" />

    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
        <p>© 2026 CirclesSoft. جميع الحقوق محفوظة.</p>
        <a href="https://www.circlesoft.com" className="hover:text-white transition-colors">www.circlesoft.com</a>
    </div>
</footer>
  );
}

export default Footer;