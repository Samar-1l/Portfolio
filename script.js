/* 
  الروابط ورقم التواصل
*/
const LINKS = {
  whatsapp: "https://wa.me/966533708250",
  email: "mailto:samar.alzaid.freelance@gmail.com",
  linkedin: "https://www.linkedin.com/in/samar-abdulwahab-24054a2b6/",
  behance: "https://www.behance.net/samaralzaid",
  x: "https://x.com/samar_1l"
};

// مصفوفة المشاريع مع عدد الصور الدقيق حسب طلبك
const projects = [
  { 
    title: "تطبيق وقوف", 
    englishName: "woqof", 
    category: "UI/UX", 
    skills: ["UI/UX", "Figma", "Prototype"],
    //description: "تجربة رقمية تهدف إلى تحسين وتنظيم تجربة المستخدم من خلال واجهات واضحة وسهلة الاستخدام.",
    cover: "assets/woqof-01.png",
    // 6 صور شاملة الغلاف
    images: ["assets/woqof-01.png", "assets/woqof-02.png", "assets/woqof-03.png", "assets/woqof-04.png", "assets/woqof-05.png", "assets/woqof-06.png"] 
  },
  { 
    title: "موقع مرسم", 
    englishName: "marsam", 
    category: "UI/UX", 
    skills: ["UI Design", "Visual Design", "Figma"],
    //description: "مشروع تصميم يركز على تقديم تجربة بصرية إبداعية ومنظمة للمستخدم.",
    cover: "assets/marsam-01.png",
    // 8 صور شاملة الغلاف
    images: ["assets/marsam-01.png", "assets/marsam-02.png", "assets/marsam-03.png", "assets/marsam-04.png", "assets/marsam-05.png", "assets/marsam-06.png", "assets/marsam-07.png", "assets/marsam-08.png"] 
  },
  { 
    title: "لعبة أرث", 
    englishName: "arth", 
    category: "Game UI", 
    skills: ["Game UI", "UX", "Culture"],
    //description: "تجربة تفاعلية مستوحاة من الثقافة السعودية، تجمع بين التصميم البصري وتجربة المستخدم.",
    cover: "assets/arth-01.png",
    // معلومات إضافية خاصة بلعبة أرث
    teamInfo: "سمر آل زيد (UI/UX) - فريق التطوير والبرمجة", 
    // 7 صور شاملة الغلاف
    images: ["assets/arth-01.png", "assets/arth-02.png", "assets/arth-03.png", "assets/arth-04.png", "assets/arth-05.png", "assets/arth-06.png", "assets/arth-07.png"] 
  }
];

/* تفعيل القائمة الجانبية في الجوال */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("show");
    });
  });
}

/* روابط التواصل بأمان */
const safeSetHref = (id, url) => {
  const el = document.getElementById(id);
  if (el) {
    el.href = url;
  }
};

safeSetHref("whatsappHero", LINKS.whatsapp);
safeSetHref("whatsappContact", LINKS.whatsapp);
safeSetHref("emailContact", LINKS.email);
safeSetHref("linkedinContact", LINKS.linkedin);
safeSetHref("behanceContact", LINKS.behance);
safeSetHref("xContact", LINKS.x);

/* حركة كتابة الاسم */
const typeName = document.getElementById("typeName");

if (typeName) {
  const fullName = "سمر آل زيد";
  let typing = false;

  function typeWriter() {
    if (typing) return;
    typing = true;
    typeName.textContent = "";
    typeName.classList.add("typing");

    let index = 0;
    const timer = setInterval(() => {
      typeName.textContent += fullName[index];
      index++;
      if (index === fullName.length) {
        clearInterval(timer);
        typeName.classList.remove("typing");
        typing = false;
      }
    }, 120);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 400); 
  });

  typeName.addEventListener("click", typeWriter);
}

/* حركة عد الأرقام */
const counters = document.querySelectorAll('.counter');

if (counters.length > 0) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 1; 
        
        counter.innerText = count;

        const updateCount = setInterval(() => {
          count++;
          counter.innerText = count;
          if (count >= target) {
            clearInterval(updateCount);
            counter.innerText = target;
          }
        }, 80); 

        counterObserver.unobserve(counter); 
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

/* حركة الشهادات */
const certCards = document.querySelectorAll(".cert-card");

if (certCards.length > 0) {
  const certObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animated");
        }, index * 100); 
        certObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  certCards.forEach(card => certObserver.observe(card));
}

/* دوال النافذة المنبثقة للمشاريع (تم تحديثها للتعامل مع الفريمات وزر العودة) */
const modal = document.getElementById("projectModal");

// نجعل دوال الفتح والإغلاق متاحة عالمياً (Global) عبر إضافتها لكائن window
window.openProjectModal = function(project) {
  if (!modal) return;
  
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalGallery = document.getElementById("modalGallery");

  // إضافة العنوان والوصف فقط
  if(modalTitle) modalTitle.textContent = project.title;
  if(modalDesc) modalDesc.textContent = project.description;

  // توليد معرض الصور بالأبعاد المطلوبة
  if (modalGallery) {
    modalGallery.innerHTML = project.images.map((img) => {
      return `
        <div class="gallery-item">
          <img src="${img}" style="width:100%; height:100%; object-fit:cover; display:block;" />
        </div>
      `;
    }).join("");
  }

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};


window.closeProjectModal = function() {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
};

// ربط أزرار الإغلاق بالنافذة
if (modal) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalBackBtn = document.getElementById("modalBackBtn");

  if(modalClose) modalClose.addEventListener("click", window.closeProjectModal);
  if(modalOverlay) modalOverlay.addEventListener("click", window.closeProjectModal);
  if(modalBackBtn) modalBackBtn.addEventListener("click", window.closeProjectModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.closeProjectModal();
  });
}

/* الأسئلة الشائعة */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});
