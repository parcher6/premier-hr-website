const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const goTopButton = document.querySelector(".go-top");
const searchForm = document.querySelector(".search-form");
const serviceCards = Array.from(document.querySelectorAll(".service-card"));
const contactForm = document.querySelector(".contact-form");
const contactWhatsAppButton = document.querySelector(".contact-card .btn-primary");
const languageButtons = Array.from(document.querySelectorAll(".language-toggle"));
const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const navigationLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
const phoneNumber = "19025082207";

let currentLanguage = "en";

const decodeHtml = (value) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
};

const translations = {
  en: {
    title: "PREMIER HR PTE. LTD. | Singapore Employment Agency",
    metaDescription:
      "PREMIER HR PTE. LTD. provides recruitment, work pass support, workforce placement, and AI assistant solutions in Singapore.",
    text: {
      ".top-bar p span": "Hot Line",
      ".language-links a": "Contact",
      ".brand small": "Employment Agency",
      '.main-nav a[href="#home"]': "Home",
      '.main-nav a[href="#about"]': "About",
      '.main-nav a[href="#services"]': "Services",
      '.main-nav a[href="#jobs"]': "Job Support",
      '.main-nav a[href="#process"]': "Process",
      '.main-nav a[href="#faq"]': "FAQ",
      '.main-nav a[href="#news"]': "Updates",
      '.main-nav a[href="#contact"]': "Contact",
      ".hero .eyebrow": "Licensed Employment Agency in Singapore",
      ".hero h1": "Workforce Solutions for Singapore Employers",
      ".hero-copy":
        "PREMIER HR helps companies handle candidate sourcing, interview coordination, work pass support, and AI-powered communication follow-up with a compliant service process.",
      ".hero-actions .btn-primary": "Explore Services",
      ".hero-actions .btn-outline": "WhatsApp Us",
      ".panel-label": "Quick Search",
      ".search-panel h2": "Find the right HR support",
      ".search-form button": "Search",
      ".stats-grid div:nth-child(1) span": "EA Licence No.",
      ".stats-grid div:nth-child(2) span": "UEN",
      ".stats-grid div:nth-child(3) span": "Comprehensive Licence",
      ".stats-grid div:nth-child(4) span": "Communication Support",
      ".assurance-heading .section-kicker": "Why Choose Us",
      ".assurance-heading h2": "Built for employers who need clear, responsive HR support.",
      ".assurance-card:nth-child(2) h3": "Clear Service Scope",
      ".assurance-card:nth-child(2) p":
        "Recruitment, interview coordination, work pass support, and after-service follow-up are separated into simple steps.",
      ".assurance-card:nth-child(3) h3": "Fast Communication",
      ".assurance-card:nth-child(3) p":
        "WhatsApp-first contact and AI assistant workflows help reduce slow replies and missed reminders.",
      ".assurance-card:nth-child(4) h3": "Visible Compliance",
      ".assurance-card:nth-child(4) p":
        "Licence and company registration details are placed clearly for quick employer review.",
      ".image-badge strong": "Singapore",
      ".image-badge span": "Workforce Partner",
      "#about .section-kicker": "About PREMIER HR",
      "#about .section-copy > h2": "Professional recruitment support with a clear compliance foundation.",
      "#about .section-copy > p":
        "PREMIER HR PTE. LTD. is a Singapore-based human resource service provider. We support employers with practical workforce solutions, from candidate recommendation and interview arrangement to work pass application coordination and after-service follow-up.",
      ".feature-list div:nth-child(1) h3": "Compliant",
      ".feature-list div:nth-child(1) p":
        "Licensed employment agency information is clearly presented for employer confidence.",
      ".feature-list div:nth-child(2) h3": "Responsive",
      ".feature-list div:nth-child(2) p":
        "Candidate and client communication is handled with structured follow-up.",
      ".feature-list div:nth-child(3) h3": "Technology-ready",
      ".feature-list div:nth-child(3) p":
        "AI call and work assistant support can help teams improve daily communication efficiency.",
      "#services .section-title span": "Our Services",
      "#services .section-title h2": "Our Services",
      "#services .section-title p":
        "Service modules inspired by overseas labour agency websites, adapted for PREMIER HR.",
      ".service-card:nth-of-type(1) h3": "Candidate Recommendation",
      ".service-card:nth-of-type(1) p": "Shortlist suitable candidates and prepare profiles for employer review.",
      ".service-card:nth-of-type(2) h3": "Interview Arrangement",
      ".service-card:nth-of-type(2) p": "Coordinate interview timing, reminders, communication, and confirmation.",
      ".service-card:nth-of-type(3) h3": "Work Pass Support",
      ".service-card:nth-of-type(3) p": "Support work pass preparation and related application communication.",
      ".service-card:nth-of-type(4) h3": "After-Service Support",
      ".service-card:nth-of-type(4) p": "Follow up on placement status and help employers handle service questions.",
      ".service-card:nth-of-type(5) h3": "AI Call Assistant",
      ".service-card:nth-of-type(5) p":
        "Use AI communication support for reminders, screening notes, and customer follow-up.",
      ".service-card:nth-of-type(6) h3": "Workforce Solutions",
      ".service-card:nth-of-type(6) p":
        "Build practical staffing support plans based on the employer's operational needs.",
      "#jobs .section-title span": "Job Support",
      "#jobs .section-title h2": "Popular workforce request types",
      ".job-item:nth-child(1) .job-tag": "Singapore",
      ".job-item:nth-child(1) h3": "Service & Operations Roles",
      ".job-item:nth-child(1) p": "Candidate sourcing, screening, and interview coordination for service teams.",
      ".job-item:nth-child(1) a": "Ask for support",
      ".job-item:nth-child(2) .job-tag": "Singapore",
      ".job-item:nth-child(2) h3": "Skilled Worker Placement",
      ".job-item:nth-child(2) p":
        "Structured recruitment process support for employers seeking reliable workers.",
      ".job-item:nth-child(2) a": "Ask for support",
      ".job-item:nth-child(3) .job-tag": "AI Support",
      ".job-item:nth-child(3) h3": "Candidate Reminder Workflow",
      ".job-item:nth-child(3) p": "AI-assisted reminders and follow-up scripts for faster communication.",
      ".job-item:nth-child(3) a": "Ask for support",
      ".credential-panel h3": "Licence & Compliance",
      ".credential-panel li:nth-child(1)": "EA Licence No.: 26C3492",
      ".credential-panel li:nth-child(2)": "UEN: 202500393W",
      ".credential-panel li:nth-child(3)": "Licence Type: Comprehensive Non-FDW",
      ".credential-panel li:nth-child(4)": "Scope excludes foreign domestic workers.",
      "#process .section-title span": "How We Work",
      "#process .section-title h2": "Clear steps for employer requests",
      ".process-grid div:nth-child(1) h3": "Requirement Check",
      ".process-grid div:nth-child(1) p":
        "Understand role, schedule, work pass needs, and expected hiring timeline.",
      ".process-grid div:nth-child(2) h3": "Candidate Matching",
      ".process-grid div:nth-child(2) p": "Recommend candidates and arrange communication for employer review.",
      ".process-grid div:nth-child(3) h3": "Application Support",
      ".process-grid div:nth-child(3) p":
        "Assist with required documentation and work pass-related coordination.",
      ".process-grid div:nth-child(4) h3": "Follow-Up",
      ".process-grid div:nth-child(4) p": "Maintain after-service communication and help close open issues.",
      "#news .section-title span": "Updates",
      "#news .section-title h2": "HR knowledge & company notes",
      ".news-card:nth-child(1) h3": "How employers can prepare recruitment requirements clearly",
      ".news-card:nth-child(1) p":
        "Role scope, salary range, schedule, and work pass expectations make matching faster.",
      ".news-card:nth-child(2) h3": "Using AI assistants for candidate reminders",
      ".news-card:nth-child(2) p":
        "Structured reminders can reduce missed interviews and improve follow-up speed.",
      ".news-card:nth-child(3) h3": "Why compliance details should be visible on HR websites",
      ".news-card:nth-child(3) p": "Licence information helps employers quickly verify the service provider.",
      "#faq .section-kicker": "FAQ",
      "#faq h2": "Common questions from employers",
      "#faq .faq-layout > div:first-child p":
        "These quick answers help visitors understand what PREMIER HR can support before they contact the team.",
      ".faq-list details:nth-child(1) summary": "Can PREMIER HR support work pass applications?",
      ".faq-list details:nth-child(1) p":
        "We can assist with work pass-related preparation and coordination based on employer requirements and applicable rules.",
      ".faq-list details:nth-child(2) summary": "Do you only serve Singapore employers?",
      ".faq-list details:nth-child(2) p":
        "The website is positioned for Singapore employment agency services. Employer requests can be discussed through WhatsApp or direct contact.",
      ".faq-list details:nth-child(3) summary": "What information should employers prepare first?",
      ".faq-list details:nth-child(3) p":
        "Prepare the role scope, salary range, working schedule, preferred start date, and any work pass expectations.",
      ".faq-list details:nth-child(4) summary": "What can the AI assistant help with?",
      ".faq-list details:nth-child(4) p":
        "AI assistant workflows can help with candidate reminders, follow-up messages, call notes, and daily communication tasks.",
      ".partner-row span": "Employer Partners",
      ".partner-row strong:nth-of-type(1)": "Service",
      ".partner-row strong:nth-of-type(2)": "Operations",
      ".partner-row strong:nth-of-type(3)": "Retail",
      ".partner-row strong:nth-of-type(4)": "Hospitality",
      ".partner-row strong:nth-of-type(5)": "Admin",
      "#contact .section-kicker": "Contact PREMIER HR",
      "#contact .contact-grid > div:first-child h2": "Talk to us about recruitment or workforce support.",
      "#contact .contact-grid > div:first-child p":
        "Share your hiring needs, work pass questions, or AI assistant interest. Our team will follow up with the next practical step.",
      ".contact-form label:nth-child(1) span": "Name",
      ".contact-form label:nth-child(2) span": "Service Needed",
      ".contact-form label:nth-child(3) span": "Message",
      ".contact-card .btn-primary": "Message on WhatsApp",
      ".footer-grid > div:nth-child(1) > p":
        "Recruitment, workforce support, and AI-assisted communication for Singapore employers.",
      ".footer-grid > div:nth-child(2) h3": "Helpful Links",
      ".footer-grid > div:nth-child(2) a:nth-of-type(1)": "About",
      ".footer-grid > div:nth-child(2) a:nth-of-type(2)": "Services",
      ".footer-grid > div:nth-child(2) a:nth-of-type(3)": "Job Support",
      ".footer-grid > div:nth-child(2) a:nth-of-type(4)": "Contact",
      ".footer-grid > div:nth-child(3) h3": "Compliance",
      ".floating-whatsapp": "WhatsApp",
      ".copyright p": "\u00a9 2026 PREMIER HR PTE. LTD. All Rights Reserved.",
    },
    html: {
      ".contact-card p:nth-of-type(1)": "<strong>Company</strong> PREMIER HR PTE. LTD.",
      ".contact-card p:nth-of-type(2)":
        "<strong>Address</strong> 101 Upper Cross Street, #05-54 People's Park Centre, Singapore 058357",
      ".contact-card p:nth-of-type(3)":
        '<strong>Phone / WhatsApp</strong> <a href="tel:19025082207">19025082207</a>',
      ".contact-card p:nth-of-type(4)": "<strong>Email</strong> To be confirmed",
    },
    attrs: [
      {
        selector: ".search-form input",
        attr: "placeholder",
        value: "Search recruitment, work pass, AI assistant...",
      },
      { selector: '.contact-form input[name="name"]', attr: "placeholder", value: "Your name" },
      {
        selector: ".contact-form textarea",
        attr: "placeholder",
        value: "Briefly describe what you need",
      },
      { selector: ".menu-toggle", attr: "aria-label", value: "Open menu" },
      { selector: ".go-top", attr: "aria-label", value: "Back to top" },
      {
        selector: ".image-block img",
        attr: "alt",
        value: "Business professionals discussing recruitment solutions",
      },
      {
        selector: ".credential-panel img",
        attr: "alt",
        value: "Recruitment consultation meeting",
      },
    ],
    options: ["Recruitment support", "Work pass support", "AI assistant", "General enquiry"],
    whatsappBase: "Hello PREMIER HR, I would like to know more about your services.",
    whatsappLabels: {
      name: "Name",
      service: "Service",
      message: "Message",
    },
  },
  zh: {
    title: "PREMIER HR PTE. LTD. | &#26032;&#21152;&#22369;&#20154;&#21147;&#36164;&#28304;&#26381;&#21153;&#26426;&#26500;",
    metaDescription:
      "PREMIER HR PTE. LTD. &#25552;&#20379;&#26032;&#21152;&#22369;&#25307;&#32856;&#12289;&#24037;&#20316;&#20934;&#35777;&#21327;&#21161;&#12289;&#21171;&#21153;&#37197;&#32622;&#21644; AI &#21161;&#25163;&#26381;&#21153;&#12290;",
    text: {
      ".top-bar p span": "&#26381;&#21153;&#28909;&#32447;",
      ".language-links a": "&#32852;&#31995;&#25105;&#20204;",
      ".brand small": "&#20154;&#21147;&#36164;&#28304;&#26381;&#21153;&#26426;&#26500;",
      '.main-nav a[href="#home"]': "&#39318;&#39029;",
      '.main-nav a[href="#about"]': "&#20851;&#20110;&#25105;&#20204;",
      '.main-nav a[href="#services"]': "&#26381;&#21153;&#39033;&#30446;",
      '.main-nav a[href="#jobs"]': "&#23703;&#20301;&#25903;&#25345;",
      '.main-nav a[href="#process"]': "&#26381;&#21153;&#27969;&#31243;",
      '.main-nav a[href="#faq"]': "&#24120;&#35265;&#38382;&#39064;",
      '.main-nav a[href="#news"]': "&#36164;&#35759;&#21160;&#24577;",
      '.main-nav a[href="#contact"]': "&#32852;&#31995;&#25105;&#20204;",
      ".hero .eyebrow": "&#26032;&#21152;&#22369;&#25345;&#29260;&#23601;&#19994;&#20013;&#20171;",
      ".hero h1": "&#26032;&#21152;&#22369;&#20154;&#21147;&#36164;&#28304;&#19982;&#21171;&#21153;&#35299;&#20915;&#26041;&#26696;",
      ".hero-copy":
        "&#25105;&#20204;&#20026;&#26032;&#21152;&#22369;&#38607;&#20027;&#25552;&#20379;&#20505;&#36873;&#20154;&#25512;&#33616;&#12289;&#38754;&#35797;&#23433;&#25490;&#12289;&#24037;&#20316;&#20934;&#35777;&#21327;&#21161;&#12289;&#21518;&#32493;&#36319;&#36827;&#20197;&#21450; AI &#26234;&#33021;&#27807;&#36890;&#25903;&#25345;&#12290;",
      ".hero-actions .btn-primary": "&#26597;&#30475;&#26381;&#21153;",
      ".hero-actions .btn-outline": "WhatsApp &#21672;&#35810;",
      ".panel-label": "&#24555;&#36895;&#26597;&#35810;",
      ".search-panel h2": "&#25214;&#21040;&#21512;&#36866;&#30340; HR &#25903;&#25345;",
      ".search-form button": "&#26597;&#35810;",
      ".stats-grid div:nth-child(1) span": "&#23601;&#19994;&#20013;&#20171;&#29260;&#29031;",
      ".stats-grid div:nth-child(2) span": "&#20844;&#21496;&#27880;&#20876;&#21495;",
      ".stats-grid div:nth-child(3) span": "&#32508;&#21512;&#38750;&#22899;&#20323;&#29260;&#29031;",
      ".stats-grid div:nth-child(4) span": "AI &#27807;&#36890;&#25903;&#25345;",
      ".assurance-heading .section-kicker": "&#20026;&#20160;&#20040;&#36873;&#25321;&#25105;&#20204;",
      ".assurance-heading h2":
        "&#20026;&#38656;&#35201;&#28165;&#26224;&#12289;&#39640;&#25928; HR &#25903;&#25345;&#30340;&#38607;&#20027;&#32780;&#35774;&#35745;&#12290;",
      ".assurance-card:nth-child(2) h3": "&#26381;&#21153;&#33539;&#22260;&#28165;&#26224;",
      ".assurance-card:nth-child(2) p":
        "&#25307;&#32856;&#12289;&#38754;&#35797;&#23433;&#25490;&#12289;&#24037;&#20316;&#20934;&#35777;&#21327;&#21161;&#21644;&#21518;&#32493;&#26381;&#21153;&#37117;&#25353;&#28165;&#26224;&#27493;&#39588;&#22788;&#29702;&#12290;",
      ".assurance-card:nth-child(3) h3": "&#27807;&#36890;&#21709;&#24212;&#24555;",
      ".assurance-card:nth-child(3) p":
        "WhatsApp &#32852;&#31995;&#21644; AI &#21161;&#25163;&#27969;&#31243;&#21487;&#20197;&#20943;&#23569;&#22238;&#22797;&#24310;&#36831;&#21644;&#25552;&#37266;&#36951;&#28431;&#12290;",
      ".assurance-card:nth-child(4) h3": "&#21512;&#35268;&#20449;&#24687;&#28165;&#26970;",
      ".assurance-card:nth-child(4) p":
        "&#29260;&#29031;&#21644;&#20844;&#21496;&#27880;&#20876;&#20449;&#24687;&#28165;&#26970;&#23637;&#31034;&#65292;&#26041;&#20415;&#38607;&#20027;&#24555;&#36895;&#26680;&#23545;&#12290;",
      ".image-badge strong": "&#26032;&#21152;&#22369;",
      ".image-badge span": "&#21171;&#21153;&#20249;&#20276;",
      "#about .section-kicker": "&#20851;&#20110; PREMIER HR",
      "#about .section-copy > h2":
        "&#20197;&#28165;&#26224;&#21512;&#35268;&#20026;&#22522;&#30784;&#65292;&#25552;&#20379;&#19987;&#19994;&#25307;&#32856;&#25903;&#25345;&#12290;",
      "#about .section-copy > p":
        "PREMIER HR PTE. LTD. &#26159;&#20301;&#20110;&#26032;&#21152;&#22369;&#30340;&#20154;&#21147;&#36164;&#28304;&#26381;&#21153;&#20844;&#21496;&#12290;&#25105;&#20204;&#20026;&#38607;&#20027;&#25552;&#20379;&#23454;&#29992;&#30340;&#21171;&#21153;&#35299;&#20915;&#26041;&#26696;&#65292;&#21253;&#25324;&#20505;&#36873;&#20154;&#25512;&#33616;&#12289;&#38754;&#35797;&#23433;&#25490;&#12289;&#24037;&#20316;&#20934;&#35777;&#30003;&#35831;&#21327;&#21161;&#21644;&#21518;&#32493;&#36319;&#36827;&#12290;",
      ".feature-list div:nth-child(1) h3": "&#21512;&#35268;&#21487;&#38752;",
      ".feature-list div:nth-child(1) p":
        "&#28165;&#26970;&#23637;&#31034;&#23601;&#19994;&#20013;&#20171;&#29260;&#29031;&#20449;&#24687;&#65292;&#24110;&#21161;&#38607;&#20027;&#24314;&#31435;&#20449;&#20219;&#12290;",
      ".feature-list div:nth-child(2) h3": "&#21709;&#24212;&#21450;&#26102;",
      ".feature-list div:nth-child(2) p":
        "&#20505;&#36873;&#20154;&#19982;&#23458;&#25143;&#27807;&#36890;&#37117;&#25353;&#32467;&#26500;&#21270;&#27969;&#31243;&#36319;&#36827;&#12290;",
      ".feature-list div:nth-child(3) h3": "&#25216;&#26415;&#25903;&#25345;",
      ".feature-list div:nth-child(3) p":
        "AI &#30005;&#35805;&#21161;&#25163;&#21644;&#24037;&#20316;&#21161;&#25163;&#21487;&#21327;&#21161;&#20225;&#19994;&#25552;&#21319;&#26085;&#24120;&#27807;&#36890;&#25928;&#29575;&#12290;",
      "#services .section-title span": "&#26381;&#21153;&#39033;&#30446;",
      "#services .section-title h2": "&#25105;&#20204;&#30340;&#26381;&#21153;",
      "#services .section-title p":
        "&#21442;&#32771;&#21171;&#21153;&#23448;&#32593;&#30340;&#27169;&#22359;&#32467;&#26500;&#65292;&#24182;&#25353; PREMIER HR &#30340;&#23454;&#38469;&#26381;&#21153;&#36827;&#34892;&#35843;&#25972;&#12290;",
      ".service-card:nth-of-type(1) h3": "&#20505;&#36873;&#20154;&#25512;&#33616;",
      ".service-card:nth-of-type(1) p":
        "&#31579;&#36873;&#21512;&#36866;&#20505;&#36873;&#20154;&#65292;&#25972;&#29702;&#31616;&#21382;&#36164;&#26009;&#20379;&#38607;&#20027;&#23457;&#26680;&#12290;",
      ".service-card:nth-of-type(2) h3": "&#38754;&#35797;&#23433;&#25490;",
      ".service-card:nth-of-type(2) p":
        "&#21327;&#35843;&#38754;&#35797;&#26102;&#38388;&#12289;&#25552;&#37266;&#12289;&#27807;&#36890;&#21644;&#30830;&#35748;&#12290;",
      ".service-card:nth-of-type(3) h3": "&#24037;&#20316;&#20934;&#35777;&#21327;&#21161;",
      ".service-card:nth-of-type(3) p":
        "&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#36164;&#26009;&#20934;&#22791;&#21644;&#30003;&#35831;&#30456;&#20851;&#27807;&#36890;&#12290;",
      ".service-card:nth-of-type(4) h3": "&#21518;&#32493;&#26381;&#21153;&#25903;&#25345;",
      ".service-card:nth-of-type(4) p":
        "&#36319;&#36827;&#21592;&#24037;&#23433;&#32622;&#24773;&#20917;&#65292;&#21327;&#21161;&#38607;&#20027;&#22788;&#29702;&#26381;&#21153;&#38382;&#39064;&#12290;",
      ".service-card:nth-of-type(5) h3": "AI &#30005;&#35805;&#21161;&#25163;",
      ".service-card:nth-of-type(5) p":
        "&#29992; AI &#27807;&#36890;&#25903;&#25345;&#20505;&#36873;&#20154;&#25552;&#37266;&#12289;&#31579;&#36873;&#35760;&#24405;&#21644;&#23458;&#25143;&#36319;&#36827;&#12290;",
      ".service-card:nth-of-type(6) h3": "&#20154;&#21147;&#35299;&#20915;&#26041;&#26696;",
      ".service-card:nth-of-type(6) p":
        "&#26681;&#25454;&#38607;&#20027;&#30340;&#36816;&#33829;&#38656;&#27714;&#65292;&#21046;&#23450;&#23454;&#29992;&#30340;&#29992;&#24037;&#25903;&#25345;&#26041;&#26696;&#12290;",
      "#jobs .section-title span": "&#23703;&#20301;&#25903;&#25345;",
      "#jobs .section-title h2": "&#24120;&#35265;&#29992;&#24037;&#38656;&#27714;&#31867;&#22411;",
      ".job-item:nth-child(1) .job-tag": "&#26032;&#21152;&#22369;",
      ".job-item:nth-child(1) h3": "&#26381;&#21153;&#19982;&#36816;&#33829;&#23703;&#20301;",
      ".job-item:nth-child(1) p":
        "&#20026;&#26381;&#21153;&#22242;&#38431;&#25552;&#20379;&#20505;&#36873;&#20154;&#23547;&#35775;&#12289;&#31579;&#36873;&#21644;&#38754;&#35797;&#21327;&#35843;&#12290;",
      ".job-item:nth-child(1) a": "&#21672;&#35810;&#25903;&#25345;",
      ".job-item:nth-child(2) .job-tag": "&#26032;&#21152;&#22369;",
      ".job-item:nth-child(2) h3": "&#25216;&#33021;&#24037;&#20154;&#21305;&#37197;",
      ".job-item:nth-child(2) p":
        "&#20026;&#38656;&#35201;&#31283;&#23450;&#21592;&#24037;&#30340;&#38607;&#20027;&#25552;&#20379;&#32467;&#26500;&#21270;&#25307;&#32856;&#25903;&#25345;&#12290;",
      ".job-item:nth-child(2) a": "&#21672;&#35810;&#25903;&#25345;",
      ".job-item:nth-child(3) .job-tag": "AI &#25903;&#25345;",
      ".job-item:nth-child(3) h3": "&#20505;&#36873;&#20154;&#25552;&#37266;&#27969;&#31243;",
      ".job-item:nth-child(3) p":
        "AI &#21327;&#21161;&#25552;&#37266;&#21644;&#36319;&#36827;&#35805;&#26415;&#65292;&#35753;&#27807;&#36890;&#26356;&#24555;&#12290;",
      ".job-item:nth-child(3) a": "&#21672;&#35810;&#25903;&#25345;",
      ".credential-panel h3": "&#29260;&#29031;&#19982;&#21512;&#35268;",
      ".credential-panel li:nth-child(1)": "EA &#29260;&#29031;&#21495;&#65306;26C3492",
      ".credential-panel li:nth-child(2)": "UEN&#65306;202500393W",
      ".credential-panel li:nth-child(3)": "&#29260;&#29031;&#31867;&#22411;&#65306;&#32508;&#21512;&#38750;&#22899;&#20323;",
      ".credential-panel li:nth-child(4)": "&#26381;&#21153;&#33539;&#22260;&#19981;&#21253;&#25324;&#22806;&#31821;&#23478;&#24237;&#20323;&#24037;&#12290;",
      "#process .section-title span": "&#26381;&#21153;&#27969;&#31243;",
      "#process .section-title h2": "&#38607;&#20027;&#38656;&#27714;&#30340;&#28165;&#26224;&#21150;&#29702;&#27493;&#39588;",
      ".process-grid div:nth-child(1) h3": "&#38656;&#27714;&#30830;&#35748;",
      ".process-grid div:nth-child(1) p":
        "&#20102;&#35299;&#23703;&#20301;&#33539;&#22260;&#12289;&#24037;&#20316;&#26102;&#38388;&#12289;&#20934;&#35777;&#38656;&#27714;&#21644;&#20837;&#32844;&#26102;&#38388;&#12290;",
      ".process-grid div:nth-child(2) h3": "&#20505;&#36873;&#20154;&#21305;&#37197;",
      ".process-grid div:nth-child(2) p":
        "&#25512;&#33616;&#20505;&#36873;&#20154;&#24182;&#23433;&#25490;&#27807;&#36890;&#65292;&#20379;&#38607;&#20027;&#36827;&#34892;&#23457;&#26680;&#12290;",
      ".process-grid div:nth-child(3) h3": "&#30003;&#35831;&#21327;&#21161;",
      ".process-grid div:nth-child(3) p":
        "&#21327;&#21161;&#20934;&#22791;&#30456;&#20851;&#25991;&#20214;&#65292;&#24182;&#36827;&#34892;&#24037;&#20316;&#20934;&#35777;&#30456;&#20851;&#21327;&#35843;&#12290;",
      ".process-grid div:nth-child(4) h3": "&#21518;&#32493;&#36319;&#36827;",
      ".process-grid div:nth-child(4) p":
        "&#20445;&#25345;&#21518;&#32493;&#26381;&#21153;&#27807;&#36890;&#65292;&#21327;&#21161;&#22788;&#29702;&#26410;&#23436;&#32467;&#38382;&#39064;&#12290;",
      "#news .section-title span": "&#36164;&#35759;&#21160;&#24577;",
      "#news .section-title h2": "HR &#30693;&#35782;&#19982;&#20844;&#21496;&#21160;&#24577;",
      ".news-card:nth-child(1) h3":
        "&#38607;&#20027;&#22914;&#20309;&#28165;&#26224;&#20934;&#22791;&#25307;&#32856;&#38656;&#27714;",
      ".news-card:nth-child(1) p":
        "&#23703;&#20301;&#33539;&#22260;&#12289;&#34218;&#36164;&#21306;&#38388;&#12289;&#24037;&#20316;&#26102;&#38388;&#21644;&#20934;&#35777;&#39044;&#26399;&#36234;&#28165;&#26970;&#65292;&#21305;&#37197;&#36234;&#24555;&#12290;",
      ".news-card:nth-child(2) h3": "&#29992; AI &#21161;&#25163;&#20570;&#20505;&#36873;&#20154;&#25552;&#37266;",
      ".news-card:nth-child(2) p":
        "&#32467;&#26500;&#21270;&#25552;&#37266;&#21487;&#20197;&#20943;&#23569;&#38169;&#36807;&#38754;&#35797;&#65292;&#25552;&#39640;&#36319;&#36827;&#36895;&#24230;&#12290;",
      ".news-card:nth-child(3) h3":
        "&#20026;&#20160;&#20040; HR &#32593;&#31449;&#24212;&#35813;&#28165;&#26224;&#23637;&#31034;&#21512;&#35268;&#20449;&#24687;",
      ".news-card:nth-child(3) p":
        "&#29260;&#29031;&#20449;&#24687;&#26377;&#21161;&#20110;&#38607;&#20027;&#24555;&#36895;&#26680;&#39564;&#26381;&#21153;&#25552;&#20379;&#26041;&#12290;",
      "#faq .section-kicker": "&#24120;&#35265;&#38382;&#39064;",
      "#faq h2": "&#38607;&#20027;&#24120;&#38382;&#38382;&#39064;",
      "#faq .faq-layout > div:first-child p":
        "&#36825;&#20123;&#31616;&#30701;&#22238;&#31572;&#21487;&#20197;&#24110;&#21161;&#35775;&#23458;&#22312;&#32852;&#31995;&#21069;&#20102;&#35299; PREMIER HR &#33021;&#25552;&#20379;&#30340;&#25903;&#25345;&#12290;",
      ".faq-list details:nth-child(1) summary":
        "PREMIER HR &#21487;&#20197;&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#30003;&#35831;&#21527;&#65311;",
      ".faq-list details:nth-child(1) p":
        "&#25105;&#20204;&#21487;&#26681;&#25454;&#38607;&#20027;&#38656;&#27714;&#21644;&#30456;&#20851;&#35268;&#23450;&#65292;&#21327;&#21161;&#24037;&#20316;&#20934;&#35777;&#36164;&#26009;&#20934;&#22791;&#21644;&#27807;&#36890;&#21327;&#35843;&#12290;",
      ".faq-list details:nth-child(2) summary":
        "&#20320;&#20204;&#21482;&#26381;&#21153;&#26032;&#21152;&#22369;&#38607;&#20027;&#21527;&#65311;",
      ".faq-list details:nth-child(2) p":
        "&#26412;&#32593;&#31449;&#23450;&#20301;&#20026;&#26032;&#21152;&#22369;&#23601;&#19994;&#20013;&#20171;&#26381;&#21153;&#12290;&#38607;&#20027;&#38656;&#27714;&#21487;&#36890;&#36807; WhatsApp &#25110;&#30452;&#25509;&#32852;&#31995;&#25105;&#20204;&#27807;&#36890;&#12290;",
      ".faq-list details:nth-child(3) summary":
        "&#38607;&#20027;&#39318;&#20808;&#24212;&#35813;&#20934;&#22791;&#21738;&#20123;&#20449;&#24687;&#65311;",
      ".faq-list details:nth-child(3) p":
        "&#24314;&#35758;&#20934;&#22791;&#23703;&#20301;&#32844;&#36131;&#12289;&#34218;&#36164;&#33539;&#22260;&#12289;&#24037;&#20316;&#26102;&#38388;&#12289;&#39044;&#35745;&#20837;&#32844;&#26085;&#26399;&#21644;&#20934;&#35777;&#38656;&#27714;&#12290;",
      ".faq-list details:nth-child(4) summary": "AI &#21161;&#25163;&#21487;&#20197;&#24110;&#21161;&#20160;&#20040;&#65311;",
      ".faq-list details:nth-child(4) p":
        "AI &#21161;&#25163;&#27969;&#31243;&#21487;&#21327;&#21161;&#20505;&#36873;&#20154;&#25552;&#37266;&#12289;&#36319;&#36827;&#20449;&#24687;&#12289;&#30005;&#35805;&#35760;&#24405;&#21644;&#26085;&#24120;&#27807;&#36890;&#20219;&#21153;&#12290;",
      ".partner-row span": "&#21512;&#20316;&#38607;&#20027;&#31867;&#22411;",
      ".partner-row strong:nth-of-type(1)": "&#26381;&#21153;",
      ".partner-row strong:nth-of-type(2)": "&#36816;&#33829;",
      ".partner-row strong:nth-of-type(3)": "&#38646;&#21806;",
      ".partner-row strong:nth-of-type(4)": "&#37202;&#24215;&#39184;&#39278;",
      ".partner-row strong:nth-of-type(5)": "&#34892;&#25919;",
      "#contact .section-kicker": "&#32852;&#31995; PREMIER HR",
      "#contact .contact-grid > div:first-child h2":
        "&#19982;&#25105;&#20204;&#27807;&#36890;&#25307;&#32856;&#25110;&#21171;&#21153;&#25903;&#25345;&#38656;&#27714;&#12290;",
      "#contact .contact-grid > div:first-child p":
        "&#35831;&#21578;&#35785;&#25105;&#20204;&#24744;&#30340;&#29992;&#24037;&#38656;&#27714;&#12289;&#24037;&#20316;&#20934;&#35777;&#38382;&#39064;&#25110; AI &#21161;&#25163;&#38656;&#27714;&#65292;&#25105;&#20204;&#20250;&#36319;&#36827;&#19979;&#19968;&#27493;&#12290;",
      ".contact-form label:nth-child(1) span": "&#22995;&#21517;",
      ".contact-form label:nth-child(2) span": "&#38656;&#35201;&#30340;&#26381;&#21153;",
      ".contact-form label:nth-child(3) span": "&#30041;&#35328;",
      ".contact-card .btn-primary": "&#36890;&#36807; WhatsApp &#32852;&#31995;",
      ".footer-grid > div:nth-child(1) > p":
        "&#20026;&#26032;&#21152;&#22369;&#38607;&#20027;&#25552;&#20379;&#25307;&#32856;&#12289;&#21171;&#21153;&#25903;&#25345;&#21644; AI &#27807;&#36890;&#21327;&#21161;&#12290;",
      ".footer-grid > div:nth-child(2) h3": "&#24555;&#36895;&#38142;&#25509;",
      ".footer-grid > div:nth-child(2) a:nth-of-type(1)": "&#20851;&#20110;&#25105;&#20204;",
      ".footer-grid > div:nth-child(2) a:nth-of-type(2)": "&#26381;&#21153;&#39033;&#30446;",
      ".footer-grid > div:nth-child(2) a:nth-of-type(3)": "&#23703;&#20301;&#25903;&#25345;",
      ".footer-grid > div:nth-child(2) a:nth-of-type(4)": "&#32852;&#31995;&#25105;&#20204;",
      ".footer-grid > div:nth-child(3) h3": "&#21512;&#35268;&#20449;&#24687;",
      ".floating-whatsapp": "WhatsApp &#21672;&#35810;",
      ".copyright p": "\u00a9 2026 PREMIER HR PTE. LTD. &#29256;&#26435;&#25152;&#26377;&#12290;",
    },
    html: {
      ".contact-card p:nth-of-type(1)":
        "<strong>&#20844;&#21496;</strong> PREMIER HR PTE. LTD.",
      ".contact-card p:nth-of-type(2)":
        "<strong>&#22320;&#22336;</strong> 101 Upper Cross Street, #05-54 People's Park Centre, Singapore 058357",
      ".contact-card p:nth-of-type(3)":
        '<strong>&#30005;&#35805; / WhatsApp</strong> <a href="tel:19025082207">19025082207</a>',
      ".contact-card p:nth-of-type(4)":
        "<strong>&#37038;&#31665;</strong> &#24453;&#30830;&#35748;",
    },
    attrs: [
      {
        selector: ".search-form input",
        attr: "placeholder",
        value: "&#25628;&#32034;&#25307;&#32856;&#12289;&#24037;&#20316;&#20934;&#35777;&#12289;AI &#21161;&#25163;...",
      },
      { selector: '.contact-form input[name="name"]', attr: "placeholder", value: "&#24744;&#30340;&#22995;&#21517;" },
      {
        selector: ".contact-form textarea",
        attr: "placeholder",
        value: "&#35831;&#31616;&#35201;&#35828;&#26126;&#24744;&#30340;&#38656;&#27714;",
      },
      { selector: ".menu-toggle", attr: "aria-label", value: "&#25171;&#24320;&#33756;&#21333;" },
      { selector: ".go-top", attr: "aria-label", value: "&#22238;&#21040;&#39030;&#37096;" },
      {
        selector: ".image-block img",
        attr: "alt",
        value: "&#21830;&#21153;&#20154;&#22763;&#35752;&#35770;&#25307;&#32856;&#35299;&#20915;&#26041;&#26696;",
      },
      {
        selector: ".credential-panel img",
        attr: "alt",
        value: "&#25307;&#32856;&#21672;&#35810;&#20250;&#35758;",
      },
    ],
    options: [
      "&#25307;&#32856;&#25903;&#25345;",
      "&#24037;&#20316;&#20934;&#35777;&#21327;&#21161;",
      "AI &#21161;&#25163;",
      "&#19968;&#33324;&#21672;&#35810;",
    ],
    whatsappBase:
      "&#24744;&#22909; PREMIER HR&#65292;&#25105;&#24819;&#20102;&#35299;&#24744;&#20204;&#30340;&#26381;&#21153;&#12290;",
    whatsappLabels: {
      name: "&#22995;&#21517;",
      service: "&#26381;&#21153;",
      message: "&#30041;&#35328;",
    },
  },
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = decodeHtml(value);
  });
};

const setHtml = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = value;
  });
};

const setAttribute = (selector, attr, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute(attr, decodeHtml(value));
  });
};

const updateLanguageButtons = (lang) => {
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
};

const readSavedLanguage = () => {
  try {
    return localStorage.getItem("premierHrLanguage");
  } catch {
    return null;
  }
};

const saveLanguage = (lang) => {
  try {
    localStorage.setItem("premierHrLanguage", lang);
  } catch {
    return;
  }
};

const getHeaderOffset = () => {
  const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
  return headerHeight + 18;
};

const getTargetElement = (hash) => {
  if (!hash || hash === "#") {
    return null;
  }

  try {
    return document.querySelector(hash);
  } catch {
    return null;
  }
};

const scrollToTarget = (hash, shouldUpdateHash = true) => {
  const target = getTargetElement(hash);
  if (!target) {
    return;
  }

  const targetTop = hash === "#home" ? 0 : target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });

  if (shouldUpdateHash && history.pushState) {
    history.pushState(null, "", hash);
  }

  setActiveNavLink(hash);
};

const setActiveNavLink = (hash) => {
  navigationLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
};

const getCurrentSectionAnchor = () => {
  const sections = Array.from(document.querySelectorAll("main, main [id]")).filter((section) => section.id);
  const headerOffset = getHeaderOffset();

  return sections.reduce((current, section) => {
    const top = section.getBoundingClientRect().top - headerOffset;
    if (top <= 24) {
      return section;
    }
    return current;
  }, sections[0] || null);
};

const updateActiveNavigation = () => {
  const section = getCurrentSectionAnchor();
  if (section?.id) {
    setActiveNavLink(`#${section.id}`);
  }
};

const applyLanguage = (lang) => {
  const nextLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[nextLanguage];
  const currentSection = getCurrentSectionAnchor();
  const sectionTopBefore = currentSection?.getBoundingClientRect().top;
  currentLanguage = nextLanguage;

  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", nextLanguage === "zh");
  document.body.classList.toggle("lang-en", nextLanguage === "en");
  document.title = decodeHtml(dictionary.title);

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", decodeHtml(dictionary.metaDescription));
  }

  Object.entries(dictionary.text).forEach(([selector, value]) => setText(selector, value));
  Object.entries(dictionary.html).forEach(([selector, value]) => setHtml(selector, value));
  dictionary.attrs.forEach(({ selector, attr, value }) => setAttribute(selector, attr, value));

  document.querySelectorAll(".contact-form select option").forEach((option, index) => {
    option.textContent = decodeHtml(dictionary.options[index] || dictionary.options[0]);
  });

  serviceCards.forEach((card) => card.classList.remove("is-hidden"));
  if (searchForm) {
    searchForm.reset();
  }

  updateLanguageButtons(nextLanguage);
  saveLanguage(nextLanguage);

  if (currentSection && sectionTopBefore !== undefined && window.scrollY > 10) {
    const sectionTopAfter = currentSection.getBoundingClientRect().top;
    window.scrollBy(0, sectionTopAfter - sectionTopBefore);
  }
};

if (languageButtons.length > 0) {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang || "en");
    });
  });
}

applyLanguage(readSavedLanguage() || "en");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    const target = hash ? getTargetElement(hash) : null;

    if (!target) {
      return;
    }

    event.preventDefault();

    mainNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    scrollToTarget(hash);
  });
});

if (goTopButton) {
  window.addEventListener("scroll", () => {
    goTopButton.classList.toggle("is-visible", window.scrollY > 500);
    updateActiveNavigation();
  });

  goTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveNavLink("#home");
  });
}

if (searchForm && serviceCards.length > 0) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(searchForm);
    const keyword = String(formData.get("keyword") || "").trim().toLowerCase();

    serviceCards.forEach((card) => {
      const searchableText = `${card.textContent || ""} ${card.dataset.service || ""}`.toLowerCase();
      card.classList.toggle("is-hidden", Boolean(keyword) && !searchableText.includes(keyword));
    });

    scrollToTarget("#services");
  });
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.setTimeout(() => scrollToTarget(window.location.hash, false), 80);
  } else {
    updateActiveNavigation();
  }
});

if (contactForm && contactWhatsAppButton) {
  contactWhatsAppButton.addEventListener("click", () => {
    const dictionary = translations[currentLanguage];
    const labels = dictionary.whatsappLabels;
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

    contactWhatsAppButton.setAttribute(
      "href",
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    );
  });
}
