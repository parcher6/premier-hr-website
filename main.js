const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const languageButtons = Array.from(document.querySelectorAll(".language-button"));
const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const backTopButton = document.querySelector(".back-top");
const dismissCard = document.querySelector(".dismiss-card");
const trustCard = document.querySelector(".trust-card");
const contactForm = document.querySelector(".contact-form");
const formWhatsapp = document.querySelector(".form-whatsapp");
const phoneNumber = "6562210638";

let currentLanguage = "en";

const decodeHtml = (value) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
};

const englishText = {};
const englishPlaceholders = {};

document.querySelectorAll("[data-i18n]").forEach((element) => {
  englishText[element.dataset.i18n] = element.textContent.trim();
});

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
  englishPlaceholders[element.dataset.i18nPlaceholder] = element.getAttribute("placeholder") || "";
});

const zhText = {
  brandSub: "新加坡持牌就业中介",
  navHome: "首页",
  navTrust: "资质",
  navServices: "服务",
  navAi: "AI 自动化",
  navProcess: "流程",
  navContact: "联系",
  heroLabel: "新加坡持牌人力服务伙伴",
  heroTitle: "为新加坡雇主提供招聘与劳务支持。",
  heroText: "PREMIER HR 协助雇主处理候选人寻访、面试安排、工作准证资料准备以及 AI 智能沟通跟进。",
  heroPrimary: "查看服务",
  heroSecondary: "WhatsApp 咨询",
  trustTitle: "新加坡持牌就业中介",
  trustText: "清晰展示公司信息，方便雇主在提交招聘或工作准证需求前核对沟通对象。",
  trustLink: "提交雇主咨询",
  factEa: "EA 牌照",
  factUen: "公司注册号",
  factScope: "就业服务",
  servicesLabel: "雇主服务",
  servicesTitle: "让招聘团队更容易理解的服务路径。",
  servicesIntro: "更清晰的服务布局，帮助雇主快速判断 PREMIER HR 可以协助处理哪些事项。",
  service1Title: "候选人寻访",
  service1Text: "筛选合适候选人，并整理资料供雇主审核。",
  service2Title: "面试协调",
  service2Text: "协调时间、提醒、确认以及后续沟通。",
  service3Title: "工作准证支持",
  service3Text: "协助材料准备和工作准证相关沟通。",
  service4Title: "后续服务跟进",
  service4Text: "协助雇主处理面试或安置后的待解决问题。",
  aiLabel: "AI 沟通自动化",
  aiTitle: "AI 电话机器人与 WhatsApp 自动回复，提高响应速度。",
  aiText: "上传电话名单后，电话机器人可按顺序自动拨打、未接重拨、记录结果，并把重要情况转给人工跟进。",
  aiPrimary: "申请 AI 演示",
  aiSecondary: "查看流程",
  panelTitle: "自动拨号队列",
  panelRow1: "名单拨打进度",
  panelRow2: "下一个拨号顺序",
  panelRow3: "人工跟进",
  tagPhone: "电话机器人",
  tagWhatsapp: "WhatsApp 回复",
  tagNotes: "通话记录",
  processLabel: "服务流程",
  processTitle: "简单清楚的雇主流程。",
  step1Title: "确认需求",
  step1Text: "明确岗位、时间、薪资范围和时间表。",
  step2Title: "匹配候选人",
  step2Text: "推荐合适资料并协调雇主审核。",
  step3Title: "协调资料",
  step3Text: "支持工作准证相关材料准备与跟进。",
  step4Title: "持续跟进",
  step4Text: "通过人工服务和自动化保持沟通。",
  contactLabel: "联系我们",
  contactTitle: "与 PREMIER HR 沟通招聘或自动化需求。",
  contactText: "可通过 WhatsApp 或邮箱联系我们。下方表单可生成更清晰的 WhatsApp 信息。",
  companyLabel: "公司",
  addressLabel: "地址",
  phoneLabel: "电话 / WhatsApp",
  emailLabel: "邮箱",
  formName: "姓名",
  formService: "需要的服务",
  formMessage: "留言",
  optionRecruitment: "招聘支持",
  optionWorkPass: "工作准证支持",
  optionAiPhone: "AI 电话机器人",
  optionWhatsapp: "WhatsApp 自动回复",
  formWhatsapp: "WhatsApp 发送咨询",
  floatingWhatsapp: "WhatsApp 咨询",
};

const zhPlaceholders = {
  namePlaceholder: "您的姓名",
  messagePlaceholder: "简要说明您的需求",
};

const meta = {
  en: {
    title: "PREMIER HR PTE. LTD. | Singapore Employment Agency",
    description: "PREMIER HR PTE. LTD. provides Singapore recruitment support, work pass coordination, workforce services, AI phone robot and WhatsApp automation.",
    whatsappBase: "Hello PREMIER HR, I would like to know more about your services.",
    labels: { name: "Name", service: "Service", message: "Message" },
  },
  zh: {
    title: "PREMIER HR PTE. LTD. | 新加坡就业中介与 AI 沟通自动化",
    description: "PREMIER HR PTE. LTD. 提供新加坡招聘支持、工作准证协调、人力服务、AI 电话机器人和 WhatsApp 自动回复。",
    whatsappBase: "您好 PREMIER HR，我想了解你们的服务。",
    labels: { name: "姓名", service: "服务", message: "留言" },
  },
};

const getTarget = (hash) => {
  try {
    return hash && hash !== "#" ? document.querySelector(hash) : null;
  } catch {
    return null;
  }
};

const getHeaderOffset = () => (document.querySelector(".site-header")?.offsetHeight || 0) + 16;

const scrollToTarget = (hash, updateHash = true) => {
  const target = getTarget(hash);
  if (!target) return;
  const top = hash === "#home" ? 0 : target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  if (updateHash && history.pushState) history.pushState(null, "", hash);
};

const applyLanguage = (lang) => {
  currentLanguage = lang === "zh" ? "zh" : "en";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", currentLanguage === "zh");
  document.body.classList.toggle("lang-en", currentLanguage === "en");
  document.title = meta[currentLanguage].title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta[currentLanguage].description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = currentLanguage === "zh" ? zhText[key] : englishText[key];
    if (value !== undefined) element.textContent = decodeHtml(value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = currentLanguage === "zh" ? zhPlaceholders[key] : englishPlaceholders[key];
    if (value !== undefined) element.setAttribute("placeholder", decodeHtml(value));
  });

  languageButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.lang === currentLanguage));
  try { localStorage.setItem("premierHrLanguage", currentLanguage); } catch {}
};

languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang || "en")));

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("is-open") || false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || !getTarget(hash)) return;
    event.preventDefault();
    mainNav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    scrollToTarget(hash);
  });
});

dismissCard?.addEventListener("click", () => trustCard?.classList.add("is-hidden"));

window.addEventListener("scroll", () => {
  backTopButton?.classList.toggle("is-visible", window.scrollY > 520);
});

backTopButton?.addEventListener("click", () => scrollToTarget("#home"));

formWhatsapp?.addEventListener("click", () => {
  const dictionary = meta[currentLanguage];
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const lines = [
    dictionary.whatsappBase,
    name ? `${dictionary.labels.name}: ${name}` : "",
    service ? `${dictionary.labels.service}: ${service}` : "",
    message ? `${dictionary.labels.message}: ${message}` : "",
  ].filter(Boolean);
  formWhatsapp.setAttribute("href", `https://wa.me/${phoneNumber}?text=${encodeURIComponent(lines.join("\n"))}`);
});

window.addEventListener("load", () => {
  let savedLanguage = "en";
  try { savedLanguage = localStorage.getItem("premierHrLanguage") || "en"; } catch {}
  applyLanguage(savedLanguage);
  if (window.location.hash) window.setTimeout(() => scrollToTarget(window.location.hash, false), 80);
});
