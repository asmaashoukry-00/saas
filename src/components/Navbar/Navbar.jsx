import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setCurrentLevel(0);
    setSelectedService(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCurrentLevel(0);
    setSelectedService(null);
  };

  const goToServices = () => {
    setCurrentLevel(1);
  };

  const goToSubMenu = (service) => {
    setSelectedService(service);
    setCurrentLevel(2);
  };

  const goBack = () => {
    if (currentLevel === 2) {
      setCurrentLevel(1);
      setSelectedService(null);
    } else if (currentLevel === 1) {
      setCurrentLevel(0);
    }
  };

  const servicesItems = [
    { id: 'hr', title: 'إدارة الموارد البشرية والرواتب', link: '/hr', subItems: [
      { title: 'إدارة ملفات الموظفين', link: '/hr' },
      { title: 'مسير الرواتب والتعويضات', link: '/hr' },
      { title: 'الحضور والانصراف', link: '/hr' },
      { title: 'الامتثال والتقارير الحكومية', link: '/hr' }
    ]},
    { id: 'finance', title: 'المنظومة المالية والمبيعات', link: '/finance', subItems: [
      { title: 'إدارة المبيعات والفواتير', link: '/finance' },
      { title: 'المحاسبة العامة', link: '/finance' },
      { title: 'إدارة المخزون والمستودعات', link: '/finance' },
      { title: 'إدارة المشتريات', link: '/finance' },
      { title: 'التقارير المالية والتحليلات', link: '/finance' }
    ]},
    { id: 'talent', title: 'إدارة المواهب والتطوير', link: '/talent', subItems: [
      { title: 'إدارة التوظيف والمقابلات', link: '/talent' },
      { title: 'تقييم الأداء 360 درجة', link: '/talent' },
      { title: 'التدريب والتطوير', link: '/talent' },
      { title: 'إدارة المسارات الوظيفية', link: '/talent' }
    ]},
    { id: 'solutions', title: 'حلول إضافية', link: '/solutions', subItems: [
      { title: 'الحل الشامل - One Circles', link: '/solutions' },
      { title: 'تطبيق الهاتف المحمول', link: '/solutions' },
      { title: 'تحليل البيانات المتقدم', link: '/solutions' }
    ]}
  ];

  return (
    <>
      <nav className="floating-nav">
        <div className="flex justify-between items-center">
          <div className="nav-logo">
            <Link to="/" className="font-extrabold text-lg md:text-xl tracking-wide no-underline text-gray-900">
              <img src="NavbarLogo.png" alt="سيركلز" className="nav-logo-image" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-3 md:gap-4">
            <li><Link to="/" className={`no-underline text-gray-600 text-sm md:text-base font-semibold px-3 py-2 transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}>الرئيسية</Link></li>
            <li className="relative group">
              <a href="#" className="no-underline text-gray-600 text-sm md:text-base font-semibold px-3 py-2 transition-colors hover:text-primary flex items-center gap-1">
                الخدمات <i className="fa-solid fa-chevron-down text-xs"></i>
              </a>
              <div className="absolute top-full right-0 w-[1200px] max-w-[calc(100vw-40px)] bg-white rounded-2xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="grid grid-cols-4 gap-6 md:gap-8">
                  <div className="border-l border-gray-100 pl-4 md:pl-6">
                    <Link to="/hr"><h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">إدارة الموارد البشرية والرواتب</h4></Link>
                    <Link to="/hr/employee-files" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">إدارة ملفات الموظفين</Link>
                    <Link to="/hr/payroll" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">مسير الرواتب والتعويضات</Link>
                    <Link to="/hr/attendance" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">الحضور والانصراف</Link>
                    <Link to="/hr/compliance" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">الامتثال والتقارير الحكومية</Link>
                  </div>
                  <div className="border-l border-gray-100 pl-4 md:pl-6">
                    <Link to="/finance"><h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">المنظومة المالية والمبيعات</h4></Link>
                    <Link to="/finance/sales-invoices" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">إدارة المبيعات والفواتير</Link>
                    <Link to="/finance/accounting" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">المحاسبة العامة</Link>
                    <Link to="/finance/inventory" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">إدارة المخزون والمستودعات</Link>
                    <Link to="/finance/purchases" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">إدارة المشتريات</Link>
                    <Link to="/finance/reports" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">التقارير المالية والتحليلات</Link>
                  </div>
                  <div className="border-l border-gray-100 pl-4 md:pl-6">
                    <Link to="/talent"><h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">إدارة المواهب والتطوير</h4></Link>
                    <Link to="/talent/recruitment" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">إدارة التوظيف والمقابلات</Link>
                    <Link to="/talent/performance" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">تقييم الأداء 360 درجة</Link>
                    <Link to="/talent/training" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">التدريب والتطوير</Link>
                    <Link to="/talent/career-paths" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">إدارة المسارات الوظيفية</Link>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 md:p-5">
                    <Link to="/solutions"><h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">حلول إضافية</h4></Link>
                    <Link to="/solutions/one-circles" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">الحل الشامل - One Circles</Link>
                    <Link to="/solutions/mobile-app" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">تطبيق الهاتف المحمول</Link>
                    <Link to="/solutions/data-analytics" className="block py-2 text-sm md:text-base text-gray-600 hover:text-primary transition-colors">تحليل البيانات المتقدم</Link>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#" className="no-underline text-gray-600 text-sm md:text-base font-semibold px-3 py-2 transition-colors hover:text-primary">المميزات</a></li>
            <li><a href="#" className="no-underline text-gray-600 text-sm md:text-base font-semibold px-3 py-2 transition-colors hover:text-primary">الأسعار</a></li>
            <li><a href="#" className="no-underline text-gray-600 text-sm md:text-base font-semibold px-3 py-2 transition-colors hover:text-primary">اتصل بنا</a></li>
          </ul>
          
          {/* Mobile Menu - Responsive */}
          <ul className={`lg:hidden fixed top-0 right-0 w-[80%] max-w-xs h-full bg-white shadow-lg transition-all duration-300 z-50 overflow-hidden ${mobileMenuOpen ? 'right-0' : 'right-full'}`}>
            {currentLevel === 0 && (
              <div className="absolute top-0 right-0 w-full h-full p-5 bg-white transition-transform duration-300 overflow-y-auto">
                <li className="border-b border-gray-100">
                  <Link to="/" className="block py-4 font-bold text-gray-900 no-underline" onClick={closeMobileMenu}>
                    الرئيسية
                  </Link>
                </li>
                <li className="border-b border-gray-100">
                  <a href="#" className="block py-4 font-bold text-gray-900 no-underline flex justify-between items-center" onClick={(e) => { e.preventDefault(); goToServices(); }}>
                    الخدمات <i className="fa-solid fa-chevron-left text-gray-500 text-sm"></i>
                  </a>
                </li>
                <li className="border-b border-gray-100">
                  <Link to="/hr" className="block py-3 text-gray-600 no-underline font-medium" onClick={closeMobileMenu}>إدارة الموارد البشرية</Link>
                </li>
                <li className="border-b border-gray-100">
                  <Link to="/finance" className="block py-3 text-gray-600 no-underline font-medium" onClick={closeMobileMenu}>المنظومة المالية</Link>
                </li>
                <li className="border-b border-gray-100">
                  <Link to="/talent" className="block py-3 text-gray-600 no-underline font-medium" onClick={closeMobileMenu}>إدارة المواهب</Link>
                </li>
                <li className="border-b border-gray-100">
                  <Link to="/solutions" className="block py-3 text-gray-600 no-underline font-medium" onClick={closeMobileMenu}>حلول إضافية</Link>
                </li>
                <li className="border-b border-gray-100">
                  <a href="#" className="block py-4 font-bold text-gray-900 no-underline" onClick={closeMobileMenu}>الأسعار</a>
                </li>
                <li className="border-b border-gray-100">
                  <a href="#" className="block py-4 font-bold text-gray-900 no-underline" onClick={closeMobileMenu}>المميزات</a>
                </li>
                <li className="border-b border-gray-100">
                  <a href="#" className="block py-4 font-bold text-gray-900 no-underline" onClick={closeMobileMenu}>اتصل بنا</a>
                </li>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">من إدارة الموظفين إلى المبيعات والحسابات.. كل شيء تحت سيطرتك بنظام واحد.</p>
                  <button className="w-full bg-gray-900 text-white py-4 rounded-full font-bold" onClick={closeMobileMenu}>اطلب عرض توضيحي</button>
                </div>
              </div>
            )}

            {currentLevel === 1 && (
              <div className="absolute top-0 right-0 w-full h-full p-5 bg-white transition-transform duration-300 overflow-y-auto">
                <li className="flex items-center gap-3 pb-5 border-b border-gray-100 mb-4">
                  <button className="bg-none border-none text-gray-900 text-lg cursor-pointer p-1" onClick={goBack}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <span className="text-lg font-bold text-gray-900">الخدمات</span>
                </li>
                {servicesItems.map((item) => (
                  <li className="border-b border-gray-100" key={item.id}>
                    <a href="#" className="block py-4 font-semibold text-gray-900 no-underline flex justify-between items-center" onClick={(e) => { e.preventDefault(); goToSubMenu(item); }}>
                      {item.title} <i className="fa-solid fa-chevron-left text-gray-500 text-sm"></i>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {currentLevel === 2 && selectedService && (
              <div className="absolute top-0 right-0 w-full h-full p-5 bg-white transition-transform duration-300 overflow-y-auto">
                <li className="flex items-center gap-3 pb-5 border-b border-gray-100 mb-4">
                  <button className="bg-none border-none text-gray-900 text-lg cursor-pointer p-1" onClick={goBack}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <span className="text-lg font-bold text-gray-900">{selectedService.title}</span>
                </li>
                {selectedService.subItems.map((subItem, index) => (
                  <li className="border-b border-gray-100" key={index}>
                    <Link to={subItem.link} className="block py-4 text-gray-600 no-underline font-medium" onClick={closeMobileMenu}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </ul>
          
          <button className="hidden lg:block bg-gray-900 text-white border-none px-6 py-3 rounded-full text-base md:text-lg font-bold cursor-pointer">اطلب عرض توضيحي</button>
          
          <button className="lg:hidden bg-none border-none cursor-pointer p-2 z-50" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark text-2xl text-gray-900"></i>
            ) : (
              <div className="flex flex-col gap-1.5 w-6">
                <span className="block w-full h-0.5 bg-gray-900 rounded"></span>
                <span className="block w-full h-0.5 bg-gray-900 rounded"></span>
                <span className="block w-full h-0.5 bg-gray-900 rounded"></span>
              </div>
            )}
          </button>
        </div>
      </nav>
      
      {mobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMobileMenu}></div>}
    </>
  );
}

export default Navbar;