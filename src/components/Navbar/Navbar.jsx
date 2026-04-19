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
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" className="nav-logo-text">
              <img src="NavbarLogo.png" alt="سيركلز" className="nav-logo-image" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <ul className="nav-links desktop-menu">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>الرئيسية</Link></li>
            <li className={`mega-dropdown ${location.pathname !== '/' ? 'active-link' : ''}`}>
              <a href="#" className="dropdown-toggle">
                الخدمات <i className="fa-solid fa-chevron-down"></i>
              </a>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div className="mega-column">
                    <Link to="/hr"><h4>إدارة الموارد البشرية والرواتب</h4></Link>
                    <Link to="/hr/employee-files">إدارة ملفات الموظفين</Link>
                    <Link to="/hr/payroll">مسير الرواتب والتعويضات</Link>
                    <Link to="/hr/attendance">الحضور والانصراف</Link>
                    <Link to="/hr/compliance">الامتثال والتقارير الحكومية</Link>
                  </div>
                  <div className="mega-column">
                    <Link to="/finance"><h4>المنظومة المالية والمبيعات</h4></Link>
                    <Link to="/finance/sales-invoices">إدارة المبيعات والفواتير</Link>
                    <Link to="/finance/accounting">المحاسبة العامة</Link>
                    <Link to="/finance/inventory">إدارة المخزون والمستودعات</Link>
                    <Link to="/finance/purchases">إدارة المشتريات</Link>
                    <Link to="/finance/reports">التقارير المالية والتحليلات</Link>
                  </div>
                  <div className="mega-column">
                    <Link to="/talent"><h4>إدارة المواهب والتطوير</h4></Link>
                    <Link to="/talent/recruitment">إدارة التوظيف والمقابلات</Link>
                    <Link to="/talent/performance">تقييم الأداء 360 درجة</Link>
                    <Link to="/talent/training">التدريب والتطوير</Link>
                    <Link to="/talent/career-paths">إدارة المسارات الوظيفية</Link>
                  </div>
                  <div className="mega-column special">
                    <Link to="/solutions"><h4>حلول إضافية</h4></Link>
                    <Link to="/solutions/one-circles">الحل الشامل - One Circles</Link>
                    <Link to="/solutions/mobile-app">تطبيق الهاتف المحمول</Link>
                    <Link to="/solutions/data-analytics">تحليل البيانات المتقدم</Link>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">المميزات</a></li>
            <li><a href="#">الأسعار</a></li>
            <li><a href="#">اتصل بنا</a></li>
          </ul>
          
          {/* Mobile Menu */}
          <ul className={`nav-links mobile-menu ${mobileMenuOpen ? 'mobile-open' : ''} ${currentLevel > 0 ? `menu-level-${currentLevel}` : ''}`}>
            {currentLevel === 0 && (
              <div className="menu-panel level-0">
                <li className="mobile-nav-item">
                  <Link to="/" className="active" onClick={closeMobileMenu}>
                    الرئيسية
                  </Link>
                </li>
                <li className="mobile-nav-item has-sub secondary-link">
                  <a href="#" onClick={(e) => { e.preventDefault(); goToServices(); }}>
                    الخدمات <i className="fa-solid fa-chevron-left"></i>
                  </a>
                </li>
                <li className="mobile-nav-item sub-item">
                  <Link to="/hr" onClick={closeMobileMenu}>إدارة الموارد البشرية</Link>
                </li>
                <li className="mobile-nav-item sub-item">
                  <Link to="/finance" onClick={closeMobileMenu}>المنظومة المالية</Link>
                </li>
                <li className="mobile-nav-item sub-item">
                  <Link to="/talent" onClick={closeMobileMenu}>إدارة المواهب</Link>
                </li>
                <li className="mobile-nav-item sub-item">
                  <Link to="/solutions" onClick={closeMobileMenu}>حلول إضافية</Link>
                </li>
                <li className="mobile-nav-item secondary-link">
                  <a href="#" onClick={closeMobileMenu}>الأسعار</a>
                </li>
                <li className="mobile-nav-item secondary-link">
                  <a href="#" onClick={closeMobileMenu}>المميزات</a>
                </li>
                <li className="mobile-nav-item secondary-link">
                  <a href="#" onClick={closeMobileMenu}>اتصل بنا</a>
                </li>
                <div className="mobile-menu-footer">
                  <p className="mobile-menu-desc">من إدارة الموظفين إلى المبيعات والحسابات.. كل شيء تحت سيطرتك بنظام واحد.</p>
                  <button className="mobile-cta-btn" onClick={closeMobileMenu}>اطلب عرض توضيحي</button>
                </div>
              </div>
            )}

            {currentLevel === 1 && (
              <div className="menu-panel level-1">
                <li className="menu-header">
                  <button className="back-btn" onClick={goBack}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <span>الخدمات</span>
                </li>
                {servicesItems.map((item) => (
                  <li className="mobile-nav-item has-sub" key={item.id}>
                    <a href="#" onClick={(e) => { e.preventDefault(); goToSubMenu(item); }}>
                      {item.title} <i className="fa-solid fa-chevron-left"></i>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {currentLevel === 2 && selectedService && (
              <div className="menu-panel level-2">
                <li className="menu-header">
                  <button className="back-btn" onClick={goBack}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <span>{selectedService.title}</span>
                </li>
                {selectedService.subItems.map((subItem, index) => (
                  <li className="mobile-nav-item sub-item" key={index}>
                    <Link to={subItem.link} onClick={closeMobileMenu}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </ul>
          
          <button className="nav-btn">اطلب عرض توضيحي</button>
          
          <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>
        </div>
      </nav>
      
      {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
    </>
  );
}

export default Navbar;