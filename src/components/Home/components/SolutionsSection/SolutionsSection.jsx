import './styles/SolutionsSection.css';

const hrImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800";
const financeImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";

function SolutionsSection() {
  return (
    <section className="solutions-section">
      <div className="container mx-auto px-6">
        <div className="cards-stack">
          <div className="custom-solution-card">
            <div className="card-info">
              <h2 className="card-title-black">توقف عن إضاعة وقتك في الحسابات اليدوية وأخطاء الرواتب</h2>
              <p className="card-description">
                هل تعبت من تعقيدات التأمينات، الإجازات، ومشاكل مسير الرواتب؟ <br />
                نحن نرفع عنك هذا العبء؛ <strong>نظامنا يضمن لك دقة 100%</strong> في احتساب الرواتب والامتثال الكامل للقوانين، لتركز أنت على قيادة فريقك فقط.
              </p>
              <a href="#" className="card-btn-black">استكشف حلول الموظفين <i className="fa-solid fa-arrow-left"></i></a>
            </div>
            <div className="card-visual-box">
              <img src={hrImage} alt="إدارة الموارد البشرية" />
            </div>
          </div>
          <div className="custom-solution-card reverse-layout">
            <div className="card-info">
              <h2 className="card-title-black">استعد سيطرتك الكاملة على أرباحك ومخازنك</h2>
              <p className="card-description">
                التشتت بين الأوراق والجداول المبعثرة يؤدي لضياع الأرباح. <br />
                مع <strong>المنظومة المالية المتكاملة</strong>، ستعرف أين يذهب كل قرش، وستراقب مخازنك لحظة بلحظة من شاشة واحدة.
              </p>
              <a href="#" className="card-btn-black">نظّم ماليتك الآن <i className="fa-solid fa-arrow-left"></i></a>
            </div>
            <div className="card-visual-box">
              <img src={financeImage} alt="المنظومة المالية" />
            </div>
          </div>
          <div className="custom-solution-card">
            <div className="card-info">
              <h2 className="card-title-black">وداعاً لفوضى الحضور والانصراف وتسرب الوقت</h2>
              <p className="card-description">
                هل تشعر أن الانضباط يغيب في غيابك؟ <br />
                نظام تتبع الدوام الذكي يمنحك <strong>رؤية كاملة وتحكمًا مطلقًا</strong> عبر الموقع الجغرافي وتطبيق الجوال.
              </p>
              <a href="#" className="card-btn-black">فعل نظام الانضباط <i className="fa-solid fa-arrow-left"></i></a>
            </div>
            <div className="card-visual-box">
              <img src={hrImage} alt="تتبع الدوام" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;