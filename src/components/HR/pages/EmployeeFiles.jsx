import { Link } from 'react-router-dom';
import { FaUserPlus, FaFileAlt, FaUsers, FaSearch, FaEdit, FaTrashAlt, FaDownload, FaUpload, FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';
import '../pages/styles/EmployeeFiles.css';

const features = [
  { icon: FaUserPlus, title: 'إضافة موظف جديد', desc: 'نموذج إلكتروني شامل لبيانات الموظف' },
  { icon: FaFileAlt, title: 'سجل موظف رقمي', desc: 'كل بيانات الموظف في ملف واحد' },
  { icon: FaUsers, title: 'قاعدة بيانات متكاملة', desc: 'بحث وتصفية حسب أي معيار' },
  { icon: FaSearch, title: 'بحث متقدم', desc: 'اعثر على أي موظف في ثوانٍ' },
];

const benefits = [
  'حفظ كل الوثائق والشهادات إلكترونياً',
  'تتبع تاريخ الموظف الوظيفي',
  'تجديد العقود تلقائياً',
  'إشعارات تلقائية للمواعيد المهمة',
  'تصدير التقارير بأسهل الطرق',
];

function EmployeeFiles() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge">إدارة الموارد البشرية</span>
          <h1 className="hero-title">
            إدارة ملفات الموظفين
            <span className="highlight"> بكل احترافية</span>
          </h1>
          <p className="hero-desc">
            ملف موظف رقمي شامل يضم كل المعلومات والوثائق — من البيانات الشخصية إلى التقييمات والخبرة العملية.
          </p>
          <Link to="/" className="hero-btn">اطلب عرض توضيحي</Link>
        </div>
      </section>

      <section className="features-grid">
        <div className="container">
          <h2 className="section-title">كل ما تحتاجه في ملف واحد</h2>
          <div className="grid-4">
            {features.map((item, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon"><item.icon /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <h2>لماذا تختار نظام ملفات الموظفين؟</h2>
              <ul className="benefits-list">
                {benefits.map((b, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" alt="Employee Files" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>ابدأ الآن في إدارة ملفات موظفيك</h2>
          <p>انضم إلى مئات الشركات التي تستخدم سيركلز</p>
          <Link to="/" className="cta-btn">تجربة مجانية</Link>
        </div>
      </section>
    </>
  );
}

export default EmployeeFiles;