const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const languageButtons = Array.from(document.querySelectorAll(".language-button"));
const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
const backTopButton = document.querySelector(".back-top");
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
  noticeLabel: "&#26032;&#21152;&#22369;&#25345;&#29260;&#23601;&#19994;&#20013;&#20171;",
  brandSub: "&#26032;&#21152;&#22369;&#23601;&#19994;&#20013;&#20171;",
  brandSubFooter: "&#26032;&#21152;&#22369;&#23601;&#19994;&#20013;&#20171;",
  navHome: "&#39318;&#39029;",
  navCompliance: "&#21512;&#35268;&#36164;&#36136;",
  navServices: "&#26381;&#21153;",
  navAi: "AI &#26426;&#22120;&#20154;",
  navRoles: "&#29992;&#24037;&#31867;&#22411;",
  navProcess: "&#27969;&#31243;",
  navFaq: "&#38382;&#31572;",
  navContact: "&#32852;&#31995;",
  heroEyebrow: "&#26032;&#21152;&#22369;&#38607;&#20027;&#30340;&#20154;&#21147;&#20249;&#20276;",
  heroTitle: "&#26032;&#21152;&#22369;&#20154;&#21147;&#36164;&#28304;&#19982;&#21171;&#21153;&#35299;&#20915;&#26041;&#26696;",
  heroText:
    "PREMIER HR &#21327;&#21161;&#38607;&#20027;&#22788;&#29702;&#20505;&#36873;&#20154;&#23547;&#35775;&#12289;&#38754;&#35797;&#21327;&#35843;&#12289;&#24037;&#20316;&#20934;&#35777;&#25903;&#25345;&#12289;&#21518;&#32493;&#36319;&#36827;&#21644; AI &#26234;&#33021;&#27807;&#36890;&#12290;",
  heroPrimary: "&#26597;&#30475;&#26381;&#21153;",
  heroSecondary: "&#20102;&#35299; AI &#26426;&#22120;&#20154;",
  heroCardLabel: "&#38607;&#20027;&#21672;&#35810;",
  heroCardTitle: "&#38656;&#35201;&#25307;&#32856;&#25110; HR &#25903;&#25345;&#65311;",
  heroCardText: "&#21578;&#35785;&#25105;&#20204;&#24744;&#30340;&#29992;&#24037;&#38656;&#27714;&#65292;&#25105;&#20204;&#20250;&#36319;&#36827;&#19979;&#19968;&#27493;&#12290;",
  whatsappCta: "WhatsApp &#21672;&#35810;",
  complianceKicker: "&#21512;&#35268;&#20248;&#20808;",
  complianceTitle: "&#28165;&#26224;&#23637;&#31034;&#29260;&#29031;&#20449;&#24687;&#65292;&#35753;&#38607;&#20027;&#26356;&#23433;&#24515;&#12290;",
  statEa: "EA &#29260;&#29031;&#21495;",
  statUen: "&#20844;&#21496;&#27880;&#20876;&#21495;",
  statLicence: "&#32508;&#21512;&#38750;&#22899;&#20323;&#29260;&#29031;",
  statScopeValue: "&#21508;&#31867;&#24037;&#20154;",
  statScope: "&#19981;&#21253;&#25324;&#22806;&#31821;&#23478;&#24237;&#20323;&#24037;",
  hubKicker: "&#26381;&#21153;&#20837;&#21475;",
  hubTitle: "&#24555;&#36895;&#25214;&#21040;&#21512;&#36866;&#25903;&#25345;&#12290;",
  hubText: "&#21442;&#32771;&#23448;&#26041;&#26381;&#21153;&#38376;&#25143;&#30340;&#28165;&#26224;&#20998;&#31867;&#65306;&#30452;&#25509;&#12289;&#28165;&#26970;&#12289;&#19981;&#32469;&#12290;",
  hubRecruitment: "&#25307;&#32856;",
  hubRecruitmentText: "&#20505;&#36873;&#20154;&#23547;&#35775;&#21644;&#38754;&#35797;&#21327;&#35843;",
  hubWorkPass: "&#24037;&#20316;&#20934;&#35777;",
  hubWorkPassText: "&#26448;&#26009;&#20934;&#22791;&#21644;&#30003;&#35831;&#25903;&#25345;",
  hubAi: "AI &#26426;&#22120;&#20154;",
  hubAiText: "&#30005;&#35805;&#25552;&#37266;&#21644; WhatsApp &#33258;&#21160;&#22238;&#22797;",
  hubContact: "&#32852;&#31995;",
  hubContactText: "WhatsApp &#21672;&#35810;&#21644;&#38607;&#20027;&#38656;&#27714;&#25552;&#20132;",
  servicesKicker: "&#26680;&#24515;&#26381;&#21153;",
  servicesTitle: "&#22260;&#32469;&#38607;&#20027;&#38656;&#27714;&#35774;&#35745;&#30340; HR &#26381;&#21153;&#12290;",
  servicesText: "&#35206;&#30422;&#25307;&#32856;&#12289;&#27807;&#36890;&#21644;&#21518;&#32493;&#36319;&#36827;&#30340;&#23454;&#29992;&#26381;&#21153;&#32452;&#21512;&#12290;",
  service1Title: "&#20505;&#36873;&#20154;&#25512;&#33616;",
  service1Text: "&#31579;&#36873;&#21512;&#36866;&#20505;&#36873;&#20154;&#65292;&#25972;&#29702;&#36164;&#26009;&#20379;&#38607;&#20027;&#23457;&#26680;&#12290;",
  service2Title: "&#38754;&#35797;&#23433;&#25490;",
  service2Text: "&#21327;&#35843;&#38754;&#35797;&#26102;&#38388;&#12289;&#25552;&#37266;&#12289;&#30830;&#35748;&#21644;&#36319;&#36827;&#12290;",
  service3Title: "&#24037;&#20316;&#20934;&#35777;&#25903;&#25345;",
  service3Text: "&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#36164;&#26009;&#20934;&#22791;&#21644;&#30456;&#20851;&#27807;&#36890;&#12290;",
  service4Title: "&#21518;&#32493;&#26381;&#21153;&#36319;&#36827;",
  service4Text: "&#36319;&#36827;&#23433;&#32622;&#24773;&#20917;&#65292;&#21327;&#21161;&#38607;&#20027;&#22788;&#29702;&#26381;&#21153;&#38382;&#39064;&#12290;",
  aiKicker: "AI &#27807;&#36890;&#33258;&#21160;&#21270;",
  aiTitle: "AI &#33258;&#21160;&#30005;&#35805;&#26426;&#22120;&#20154;&#19982; WhatsApp &#33258;&#21160;&#22238;&#22797;&#26426;&#22120;&#20154;&#12290;",
  aiText:
    "&#20943;&#23569;&#28431;&#30005;&#12289;&#24930;&#22238;&#22797;&#21644;&#37325;&#22797;&#38382;&#39064;&#12290;PREMIER HR &#21487;&#25903;&#25345;&#20505;&#36873;&#20154;&#25552;&#37266;&#12289;&#38607;&#20027;&#21672;&#35810;&#21644;&#26085;&#24120;&#36319;&#36827;&#30340;&#27807;&#36890;&#27969;&#31243;&#12290;",
  dialerStep1: "&#19978;&#20256;&#30005;&#35805;&#21517;&#21333;",
  dialerStep2: "&#25353;&#39034;&#24207;&#33258;&#21160;&#25320;&#25171;",
  dialerStep3: "&#26410;&#25509;&#30005;&#35805;&#33258;&#21160;&#37325;&#25320;",
  dialerStep4: "&#35760;&#24405;&#32467;&#26524;&#24182;&#36716;&#20154;&#24037;",
  aiPrimary: "&#30003;&#35831; AI &#28436;&#31034;",
  aiSecondary: "&#26597;&#30475;&#38382;&#31572;",
  consoleTitle: "&#33258;&#21160;&#25320;&#21495;&#38431;&#21015;",
  consoleRow1: "&#27491;&#22312;&#25320;&#25171;&#20505;&#36873;&#20154;&#21517;&#21333;",
  consoleRow2: "&#19979;&#19968;&#20010;&#25320;&#21495;&#39034;&#24207;",
  consoleRow3: "&#38656;&#35201;&#20154;&#24037;&#36319;&#36827;",
  aiPhoneTitle: "AI &#33258;&#21160;&#30005;&#35805;&#26426;&#22120;&#20154;",
  aiPhoneText:
    "&#19978;&#20256;&#30005;&#35805;&#21517;&#21333;&#21518;&#65292;&#26426;&#22120;&#20154;&#25353;&#39034;&#24207;&#33258;&#21160;&#25320;&#25171;&#12289;&#26410;&#25509;&#33258;&#21160;&#37325;&#25320;&#12289;&#25910;&#38598;&#22238;&#22797;&#24182;&#29983;&#25104;&#32467;&#26500;&#21270;&#36890;&#35805;&#35760;&#24405;&#12290;",
  aiWhatsappTitle: "WhatsApp &#33258;&#21160;&#22238;&#22797;&#26426;&#22120;&#20154;",
  aiWhatsappText: "&#21363;&#26102;&#22238;&#22797;&#12289;&#24120;&#35265;&#38382;&#31572;&#12289;&#32852;&#31995;&#20449;&#24687;&#25910;&#38598;&#21644;&#20154;&#24037;&#36716;&#25509;&#12290;",
  aiMetric1: "&#20840;&#22825;&#20505;&#22238;&#22797;",
  aiMetric2: "&#26234;&#33021;&#20998;&#27969;",
  aiMetric3: "HR &#26381;&#21153;&#27969;&#31243;",
  rolesKicker: "&#29992;&#24037;&#31867;&#22411;",
  rolesTitle: "&#38607;&#20027;&#24120;&#35265;&#38656;&#27714;&#31867;&#21035;&#12290;",
  role1Title: "&#26381;&#21153;&#19982;&#36816;&#33829;",
  role1Text: "&#25903;&#25345;&#26381;&#21153;&#22242;&#38431;&#12289;&#26085;&#24120;&#36816;&#33829;&#21644;&#23458;&#25143;&#38754;&#23545;&#23703;&#20301;&#12290;",
  role2Title: "&#38646;&#21806;&#19982;&#37202;&#24215;&#39184;&#39278;",
  role2Text: "&#20026;&#38646;&#21806;&#12289;&#39184;&#39278;&#21644;&#37202;&#24215;&#22242;&#38431;&#25552;&#20379;&#20505;&#36873;&#20154;&#23547;&#35775;&#21644;&#38754;&#35797;&#21327;&#35843;&#12290;",
  role3Title: "&#25216;&#33021;&#24037;&#20154;&#25903;&#25345;",
  role3Text: "&#20026;&#38656;&#35201;&#21487;&#38752;&#25216;&#33021;&#24037;&#20154;&#30340;&#38607;&#20027;&#25552;&#20379;&#32467;&#26500;&#21270;&#25307;&#32856;&#25903;&#25345;&#12290;",
  processKicker: "&#26381;&#21153;&#27969;&#31243;",
  processTitle: "&#20174;&#38656;&#27714;&#21040;&#21518;&#32493;&#36319;&#36827;&#65292;&#27493;&#39588;&#28165;&#26224;&#12290;",
  step1Title: "&#38656;&#27714;&#30830;&#35748;",
  step1Text: "&#26126;&#30830;&#23703;&#20301;&#33539;&#22260;&#12289;&#26102;&#38388;&#12289;&#34218;&#36164;&#21644;&#26102;&#38388;&#34920;&#12290;",
  step2Title: "&#20505;&#36873;&#20154;&#21305;&#37197;",
  step2Text: "&#25512;&#33616;&#21512;&#36866;&#20505;&#36873;&#20154;&#24182;&#21327;&#35843;&#38607;&#20027;&#23457;&#26680;&#12290;",
  step3Title: "&#30003;&#35831;&#21327;&#21161;",
  step3Text: "&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#30456;&#20851;&#26448;&#26009;&#20934;&#22791;&#21644;&#27807;&#36890;&#12290;",
  step4Title: "&#21518;&#32493;&#26381;&#21153;",
  step4Text: "&#36319;&#36827;&#23433;&#32622;&#24773;&#20917;&#21644;&#24453;&#22788;&#29702;&#26381;&#21153;&#38382;&#39064;&#12290;",
  faqKicker: "&#24120;&#35265;&#38382;&#39064;",
  faqTitle: "&#38607;&#20027;&#24120;&#38382;&#30340;&#38382;&#39064;&#12290;",
  faq1Q: "PREMIER HR &#21487;&#20197;&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#30003;&#35831;&#21527;&#65311;",
  faq1A: "&#25105;&#20204;&#21487;&#26681;&#25454;&#38607;&#20027;&#38656;&#27714;&#21644;&#30456;&#20851;&#35268;&#21017;&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#36164;&#26009;&#20934;&#22791;&#21644;&#27807;&#36890;&#12290;",
  faq2Q: "&#38607;&#20027;&#39318;&#20808;&#38656;&#35201;&#20934;&#22791;&#20160;&#20040;&#65311;",
  faq2A: "&#24314;&#35758;&#20934;&#22791;&#23703;&#20301;&#33539;&#22260;&#12289;&#34218;&#36164;&#21306;&#38388;&#12289;&#24037;&#20316;&#26102;&#38388;&#12289;&#39044;&#26399;&#20837;&#32844;&#26085;&#26399;&#21644;&#20934;&#35777;&#38656;&#27714;&#12290;",
  faq3Q: "AI &#26426;&#22120;&#20154;&#21487;&#20197;&#24110;&#21161;&#20160;&#20040;&#65311;",
  faq3A: "&#21487;&#25903;&#25345;&#25552;&#37266;&#12289;&#21672;&#35810;&#25910;&#38598;&#12289;&#24120;&#35265;&#38382;&#39064;&#22238;&#22797;&#12289;&#32852;&#31995;&#20449;&#24687;&#25910;&#38598;&#21644;&#20154;&#24037;&#36716;&#25509;&#12290;",
  faq4Q: "PREMIER HR &#26159; MOM &#37096;&#38376;&#21527;&#65311;",
  faq4A: "&#19981;&#26159;&#12290;PREMIER HR &#26159;&#31169;&#20154;&#23601;&#19994;&#20013;&#20171;&#20844;&#21496;&#12290;&#22914;&#38656;&#26680;&#23545; MOM &#20449;&#24687;&#65292;&#24212;&#20197; MOM &#23448;&#26041;&#28192;&#36947;&#20026;&#20934;&#12290;",
  contactKicker: "&#32852;&#31995;",
  contactTitle: "&#19982; PREMIER HR &#27807;&#36890;&#25307;&#32856;&#25110; AI &#33258;&#21160;&#21270;&#38656;&#27714;&#12290;",
  contactText: "&#36890;&#36807; WhatsApp &#21457;&#36865;&#21672;&#35810;&#12290;&#19979;&#26041;&#34920;&#21333;&#21487;&#24110;&#24744;&#29983;&#25104;&#26356;&#28165;&#26224;&#30340;&#27807;&#36890;&#20449;&#24687;&#12290;",
  contactCompanyLabel: "&#20844;&#21496;",
  contactAddressLabel: "&#22320;&#22336;",
  contactPhoneLabel: "&#30005;&#35805; / WhatsApp",
  contactEmailLabel: "&#37038;&#31665;",
  contactEmailValue: "lotusriverinvest@gmail.com",
  formName: "&#22995;&#21517;",
  formService: "&#38656;&#35201;&#30340;&#26381;&#21153;",
  formMessage: "&#30041;&#35328;",
  optionRecruitment: "&#25307;&#32856;&#25903;&#25345;",
  optionWorkPass: "&#24037;&#20316;&#20934;&#35777;&#25903;&#25345;",
  optionAiPhone: "AI &#33258;&#21160;&#30005;&#35805;&#26426;&#22120;&#20154;",
  optionWhatsapp: "WhatsApp &#33258;&#21160;&#22238;&#22797;&#26426;&#22120;&#20154;",
  formWhatsapp: "WhatsApp &#21457;&#36865;&#21672;&#35810;",
  footerText: "&#20026;&#26032;&#21152;&#22369;&#38607;&#20027;&#25552;&#20379;&#25307;&#32856;&#12289;&#21171;&#21153;&#25903;&#25345;&#21644; AI &#27807;&#36890;&#33258;&#21160;&#21270;&#12290;",
  footerLinks: "&#24555;&#36895;&#38142;&#25509;",
  navServicesFooter: "&#26381;&#21153;",
  navAiFooter: "AI &#26426;&#22120;&#20154;",
  navFaqFooter: "&#38382;&#31572;",
  navContactFooter: "&#32852;&#31995;",
  footerCompliance: "&#21512;&#35268;&#20449;&#24687;",
  floatingWhatsapp: "WhatsApp &#21672;&#35810;",
};

const zhPlaceholders = {
  formNamePlaceholder: "&#24744;&#30340;&#22995;&#21517;",
  formMessagePlaceholder: "&#31616;&#35201;&#35828;&#26126;&#24744;&#30340;&#38656;&#27714;",
};

const meta = {
  en: {
    title: "PREMIER HR PTE. LTD. | Singapore Employment Agency",
    description:
      "PREMIER HR PTE. LTD. is a Singapore employment agency providing recruitment, work pass support, workforce solutions, AI phone robot and WhatsApp automation.",
    whatsappBase: "Hello PREMIER HR, I would like to know more about your services.",
    labels: { name: "Name", service: "Service", message: "Message" },
  },
  zh: {
    title: "PREMIER HR PTE. LTD. | &#26032;&#21152;&#22369;&#23601;&#19994;&#20013;&#20171;&#19982; AI &#27807;&#36890;&#33258;&#21160;&#21270;",
    description:
      "PREMIER HR PTE. LTD. &#25552;&#20379;&#26032;&#21152;&#22369;&#25307;&#32856;&#12289;&#24037;&#20316;&#20934;&#35777;&#25903;&#25345;&#12289;&#21171;&#21153;&#35299;&#20915;&#26041;&#26696;&#12289;AI &#30005;&#35805;&#26426;&#22120;&#20154;&#21644; WhatsApp &#33258;&#21160;&#22238;&#22797;&#12290;",
    whatsappBase: "&#24744;&#22909; PREMIER HR&#65292;&#25105;&#24819;&#20102;&#35299;&#24744;&#20204;&#30340;&#26381;&#21153;&#12290;",
    labels: { name: "&#22995;&#21517;", service: "&#26381;&#21153;", message: "&#30041;&#35328;" },
  },
};

const getHeaderOffset = () => (document.querySelector(".site-header")?.offsetHeight || 0) + 18;

const getTargetElement = (hash) => {
  if (!hash || hash === "#") return null;
  try {
    return document.querySelector(hash);
  } catch {
    return null;
  }
};

const setActiveNav = (hash) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
};

const scrollToTarget = (hash, updateHash = true) => {
  const target = getTargetElement(hash);
  if (!target) return;

  const top = hash === "#home" ? 0 : target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

  if (updateHash && history.pushState) {
    history.pushState(null, "", hash);
  }

  setActiveNav(hash);
};

const getCurrentSection = () => {
  const sections = Array.from(document.querySelectorAll("main, main [id]")).filter((section) => section.id);
  const offset = getHeaderOffset();

  return sections.reduce((current, section) => {
    if (section.getBoundingClientRect().top - offset <= 24) return section;
    return current;
  }, sections[0] || null);
};

const updateActiveNav = () => {
  const section = getCurrentSection();
  if (section?.id) setActiveNav(`#${section.id}`);
};

const applyLanguage = (lang) => {
  currentLanguage = lang === "zh" ? "zh" : "en";

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", currentLanguage === "zh");
  document.body.classList.toggle("lang-en", currentLanguage === "en");

  document.title = decodeHtml(meta[currentLanguage].title);
  document.querySelector('meta[name="description"]')?.setAttribute("content", decodeHtml(meta[currentLanguage].description));

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

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  try {
    localStorage.setItem("premierHrOfficialLanguage", currentLanguage);
  } catch {
    // Ignore storage restrictions.
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang || "en"));
});

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("is-open") || false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || !getTargetElement(hash)) return;

    event.preventDefault();
    mainNav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    scrollToTarget(hash);
  });
});

window.addEventListener("scroll", () => {
  backTopButton?.classList.toggle("is-visible", window.scrollY > 520);
  updateActiveNav();
});

backTopButton?.addEventListener("click", () => {
  scrollToTarget("#home");
});

formWhatsapp?.addEventListener("click", () => {
  const dictionary = meta[currentLanguage];
  const labels = dictionary.labels;
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const text = [
    decodeHtml(dictionary.whatsappBase),
    name ? `${decodeHtml(labels.name)}: ${name}` : "",
    service ? `${decodeHtml(labels.service)}: ${service}` : "",
    message ? `${decodeHtml(labels.message)}: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  formWhatsapp.setAttribute("href", `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`);
});

window.addEventListener("load", () => {
  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("premierHrOfficialLanguage") || "en";
  } catch {
    savedLanguage = "en";
  }

  applyLanguage(savedLanguage);

  if (window.location.hash) {
    window.setTimeout(() => scrollToTarget(window.location.hash, false), 80);
  } else {
    updateActiveNav();
  }
});
