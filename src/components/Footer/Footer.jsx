import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="minimal-footer">
    <div className="footer-main-grid">
        <div className="f-section brand-area">
            <img src="/NavbarLogo.png" alt="Circles" className="f-logo-white" />
            <p className="brand-text">منظومة متكاملة تربط مفاصل منشأتك في مكان واحد، من الموارد البشرية إلى المحاسبة والمبيعات.</p>
        </div>

        <div className="f-section">
            <h3>إدارة الموارد البشرية والرواتب</h3>
            <ul>
                <li><Link to="/hr">إدارة ملفات الموظفين</Link></li>
                <li><Link to="/hr">مسير الرواتب والتعويضات</Link></li>
                <li><Link to="/hr">الحضور والانصراف</Link></li>
                <li><Link to="/hr">الامتثال والتقارير الحكومية</Link></li>
            </ul>
        </div>

        <div className="f-section">
            <h3 className="no-wrap">المنظومة المالية والمبيعات</h3>
            <ul>
                <li><Link to="/finance">إدارة المبيعات والفواتير</Link></li>
                <li><Link to="/finance">المحاسبة العامة</Link></li>
                <li><Link to="/finance">إدارة المخزون والمستودعات</Link></li>
                <li><Link to="/finance">إدارة المشتريات</Link></li>
                <li><Link to="/finance">التقارير المالية والتحليلات</Link></li>
            </ul>
        </div>

        <div className="f-section">
            <h3>إدارة المواهب والتطوير</h3>
            <ul>
                <li><Link to="/talent">إدارة التوظيف والمقابلات</Link></li>
                <li><Link to="/talent">تقييم الأداء 360 درجة</Link></li>
                <li><Link to="/talent">التدريب والتطوير</Link></li>
                <li><Link to="/talent">إدارة المسارات الوظيفية</Link></li>
            </ul>
        </div>
    </div>

    <hr className="f-divider" />

    <div className="footer-bottom-flex">
        <div className="extra-solutions">
            <h3>حلول إضافية</h3>
            <ul>
                <li><Link to="/solutions">الحل الشامل - One Circles</Link></li>
                <li><Link to="/solutions">تطبيق الهاتف المحمول</Link></li>
                <li><Link to="/solutions">تحليل البيانات المتقدم</Link></li>
            </ul>
        </div>

        <div className="contact-section">
            <h3>تواصل معنا</h3>
            <div className="contact-info-grid">
                <div className="contact-item">
                    <span className="country-tag">السعودية - الرياض</span>
                    <a href="tel:+966543868253" dir="ltr">+966 54 386 8253</a>
                </div>
                <div className="contact-item">
                    <span className="country-tag">الأردن - عمّان</span>
                    <a href="tel:+962788868944" dir="ltr">+962 78 886 8944</a>
                </div>
            </div>
            
            <div className="social-wrapper">
                <a href="#" className="social-icon linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="social-icon twitter-x"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="social-icon instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-icon facebook"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
    </div>

    <hr className="f-divider-thin" />

    <div className="legal-bar">
        <p>© 2026 CirclesSoft. جميع الحقوق محفوظة.</p>
        <div className="brand-link">
            <a href="https://www.circlesoft.com">www.circlesoft.com</a>
        </div>
    </div>
</footer>
  );
}

export default Footer;