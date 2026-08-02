const method = [
  ["افهم", "حدّد القرار المطلوب، وافهم النشاط، ونظّم المعلومات المالية."],
  ["ابنِ", "حوّل البيانات التاريخية وافتراضات النشاط إلى نموذج منظم ومرن."],
  ["اختبر", "استخدم المراجعات والسيناريوهات وتحليل الحساسية لفهم عدم اليقين."],
  ["اشرح", "حوّل النتائج إلى استنتاج واضح وتوصية وخطوة تالية."],
];

const programs = [
  ["معسكر النمذجة المالية", "ابنِ نموذجًا ماليًا مترابطًا يبدأ بالقوائم التاريخية وينتهي بالتنبؤ والسيناريوهات والتقييم والتوصية."],
  ["التنبؤ المالي وFP&A", "طوّر نماذج قائمة على محركات الأعمال، وتحليل الانحرافات، والتقارير الداعمة للقرار."],
  ["النمذجة المالية المتقدمة", "حسّن هيكل النموذج ومرونته ودقته ومنطق السيناريوهات والمخرجات التنفيذية."],
];

export default function ArabicHome() {
  return (
    <main dir="rtl" lang="ar">
      <header className="site-header">
        <div className="container nav" aria-label="التنقل الرئيسي">
          <a className="brand" href="#top" aria-label="الصفحة الرئيسية لمودكس">
            <span className="brand-mark" aria-hidden="true">MX</span>
            <span>ModEX</span>
          </a>
          <nav className="nav-links" aria-label="القائمة الرئيسية">
            <a href="#programs">البرامج</a>
            <a href="#organizations">للمؤسسات</a>
            <a href="#about">عن ModEX</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-ghost" href="/" lang="en">English</a>
            <a className="button button-secondary" href="#contact">تواصل معنا</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">النمذجة المالية والتمويل الاستراتيجي</div>
            <h1>ابنِ نماذج أفضل. واتخذ قرارات أفضل.</h1>
            <p className="hero-copy">تساعد ModEX المهنيين على بناء قدرات عملية مترابطة، وتساعد المؤسسات على تحويل المعلومات المالية المعقدة إلى قرارات واضحة وقابلة للتنفيذ.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programs">استكشف البرامج</a>
              <a className="button button-ghost" href="#organizations">حلول المؤسسات</a>
            </div>
            <p className="hero-note">نخدم المهنيين والمؤسسات باللغتين العربية والإنجليزية.</p>
          </div>
          <div className="model-visual" aria-label="منهج ModEX لاتخاذ القرار المالي">
            {method.map(([title, text], index) => (
              <div className="model-step" key={title}>
                <div className="step-number">{index + 1}</div>
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="path-title-ar">
        <div className="container">
          <div className="eyebrow">اختر مسارك</div>
          <h2 className="section-title" id="path-title-ar">ماذا تريد أن تبني؟</h2>
          <div className="grid-2">
            <article className="card">
              <h3>طوّر مسارك المهني في المالية</h3>
              <p>طوّر مهارات عملية في القوائم المالية وExcel والتنبؤ والنمذجة المالية والسيناريوهات والتقييم ولوحات المعلومات.</p>
              <a className="card-link" href="#programs">اعثر على برنامجك ←</a>
            </article>
            <article className="card">
              <h3>ابنِ حلًا ماليًا لمؤسستك</h3>
              <p>طوّر نموذجًا ماليًا، أو قيّم فرصة استثمارية، أو حسّن التخطيط، أو أنشئ لوحات معلومات أوضح.</p>
              <a className="card-link" href="#organizations">ناقش التحدي المالي ←</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="method-title-ar">
        <div className="container">
          <div className="eyebrow">منهج ModEX</div>
          <h2 className="section-title" id="method-title-ar">من المعلومات إلى القرار عبر أربع مراحل مترابطة.</h2>
          <div className="method-grid">
            {method.map(([title, text]) => <article className="method-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="programs" aria-labelledby="programs-title-ar">
        <div className="container">
          <div className="eyebrow">التعلم المهني</div>
          <h2 className="section-title" id="programs-title-ar">برامج مبنية حول مخرجات عملية</h2>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {programs.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p><a className="card-link" href="#contact">عرض البرنامج ←</a></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="organizations" aria-labelledby="organizations-title-ar">
        <div className="container">
          <div className="eyebrow">للمؤسسات</div>
          <h2 className="section-title" id="organizations-title-ar">ابدأ بالقرار، وليس بجدول البيانات.</h2>
          <p className="section-copy">تساعد ModEX المؤسسات على تحديد السؤال المالي، وتنظيم الافتراضات، وبناء النموذج، واختبار عدم اليقين، وشرح النتيجة.</p>
        </div>
      </section>

      <section className="section section-soft" id="about" aria-labelledby="about-title-ar">
        <div className="container grid-2">
          <div><div className="eyebrow">عن ModEX</div><h2 className="section-title" id="about-title-ar">بُنيت من واقع الممارسة، وصُممت لتصبح معيارًا.</h2></div>
          <div><p className="section-copy">تأسست ModEX لمعالجة الفجوة بين فهم المفاهيم المالية والقدرة على تطبيقها من خلال تحليل منظم وحكم مهني وقرار واضح.</p><p className="hero-note">تأسست ModEX على يد أيمن رمزي، وتُقدَّم أعمالها وفق معيار ModEX.</p></div>
        </div>
      </section>

      <section className="section section-dark" id="contact" aria-labelledby="contact-title-ar">
        <div className="container">
          <div className="eyebrow">الخطوة التالية</div>
          <h2 className="section-title" id="contact-title-ar">ماذا أنت مستعد لبنائه؟</h2>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@financialmodex.com">اعثر على برنامجك</a>
            <a className="button button-ghost" href="mailto:info@financialmodex.com">اطلب استشارة</a>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container footer-grid"><div className="brand" style={{ color: "white" }}><span className="brand-mark" aria-hidden="true">MX</span><span>ModEX</span></div><small>ابنِ نماذج أفضل. واتخذ قرارات أفضل.</small></div></footer>
    </main>
  );
}
