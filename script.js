// ===== Buttons =====
const aboutBtn = document.getElementById("aboutBtn");
const coursesBtn = document.getElementById("coursesBtn");
const helpBtn = document.getElementById("helpBtn");

// Function to open popup
function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "flex";
  }
}

// Function to close popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}

// Event listeners for buttons
[aboutBtn, coursesBtn, helpBtn].forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.id.replace("Btn", "Popup");
    openPopup(target);
  });
});

// Subject links popup
const subjectLinks = document.querySelectorAll(".subject .dropdown a");

subjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const doctorName = "Dr. "; // يمكن تعديل الاسم حسب المادة
    const subjectPopup = document.querySelector("#subjectPopup .subject-doctor");
    if (subjectPopup) subjectPopup.textContent = doctorName;
    openPopup("subjectPopup");
  });
});

// Show footer at end of page
window.addEventListener("scroll", () => {
  const footer = document.querySelector(".footer");
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled >= scrollableHeight - 50) { // يظهر قبل نهاية الصفحة بقليل
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
});

// ===== Responsive Dropdowns for Mobile & Desktop =====
document.querySelectorAll('.badge').forEach(badge => {
  badge.addEventListener('click', (e) => {
    e.stopPropagation(); // منع انتشار الحدث
    const dropdown = badge.querySelector('.dropdown');
    if (dropdown) {
      const isVisible = dropdown.style.display === 'flex';
      // اغلاق كل القوائم الأخرى
      document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
      // تبديل الحالة الحالية
      dropdown.style.display = isVisible ? 'none' : 'flex';
    }
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.badge')) {
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
  }
});

// Close popup on clicking outside content or pressing ESC
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
  }
});

// Adjust popups for mobile devices
function adjustPopups() {
  const screenWidth = window.innerWidth;
  document.querySelectorAll('.popup-content').forEach(popup => {
    if (screenWidth <= 480) {
      popup.style.width = "90%";
      popup.style.padding = "15px";
    } else if (screenWidth <= 768) {
      popup.style.width = "85%";
      popup.style.padding = "20px";
    } else {
      popup.style.width = "600px";
      popup.style.padding = "30px";
    }
  });
}

// Run on load and resize
window.addEventListener("load", adjustPopups);
window.addEventListener("resize", adjustPopups);
