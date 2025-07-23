/* ========= 1. 汉堡菜单 ========== */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav");

burger.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true" || false;
  burger.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("open");
});

/* ========= 2. 滚动高亮导航 ========== */
const navItems = navLinks.querySelectorAll("a");
const sections = [...document.querySelectorAll("section[id]")];

function setActiveLink() {
  const scrollPos = window.scrollY + 120; // 预留导航高度
  let current = sections[0].id;
  for (const sec of sections) {
    if (scrollPos >= sec.offsetTop) current = sec.id;
  }
  navItems.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`)
  );
}
window.addEventListener("scroll", setActiveLink);

/* ========= 3. Intersection Observer 渐显 ========== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view"));
  },
  { threshold: 0.15 }
);
document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

/* ========= 4. 表单假提交 ========== */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("需求已发送！我们将在 1 个工作日内联系您 😊");
  e.target.reset();
});

/* ========= 5. 初始执行 ========== */
setActiveLink();
console.log("%cDream Studio powered!", "color:#0058ff;font-weight:700;");
