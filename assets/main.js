(() => {
  "use strict";

  const english = {
    name: "Li Xinwu",
    motto: "As long as my heart aspires, life keeps flourishing.",
    sidebarRole: "Research Assistant",
    sidebarInstitution: "Tsinghua University",
    linksLabel: "Contact",
    contentsLabel: "Page navigation",
    aboutHeading: "About",
    educationHeading: "Education",
    experienceHeading: "Experience",
    researchHeading: "Research Interests & Current Work",
    subtitle: "Security Research · Automated Penetration Testing · Agent Security",
    about: "I am a research assistant at the Institute for Network Sciences and Cyberspace, Tsinghua University, and a graduate of Royal Holloway, University of London. My work brings together security engineering and large language models, spanning vulnerability discovery and validation, network traffic analysis, attack simulation, and Internet asset mapping. I currently focus on semantic gaps in AI agents and the security of multi-agent systems, developing automated methods to discover, validate, and mitigate security issues in real-world systems.",
    university: "Royal Holloway, University of London",
    rhulResearchRecognition: "NCSC Academic Centre of Excellence in Cyber Security Research (ACE-CSR)",
    rhulEducationRecognition: "NCSC Academic Centre of Excellence in Cyber Security Education — Gold Award",
    rhulMastersHistory: "The World’s First MSc in Information Security (1992)",
    rhulFullCertification: "England’s Only University with Full NCSC Certification across All Cyber Security Degrees (2021)",
    masters: "MSc in Information Security · Merit",
    mastersCourses: "Selected coursework: Penetration Testing Theory and Practice, Security Management, Usable Security and Privacy, and Cybercrime.",
    bachelors: "BSc in Computer Science (Information Security) · Second-class Honours",
    bachelorsCourses: "Selected coursework: Malware, Network Security, Machine Learning, and Software Engineering.",
    tsinghua: "Tsinghua University",
    tsinghuaDate: "2026.05 - Present",
    tsinghuaRole: "Research Assistant · Institute for Network Sciences and Cyberspace",
    openclawTitle: "Internet-wide OpenClaw Scanning and Version Identification",
    openclawDescription: "As part of my engineering work, I independently implemented an Internet-wide OpenClaw scanner. During development, I deployed over 200 OpenClaw releases and directly analysed their source code, collected fingerprints and reliable assessment features for each version, and wrote scanning scripts for specific features. Running on a laptop with a standard Internet connection, the project scanned 16,984,832 real-world instances in 2 hours and 13 minutes and precisely recorded whether each tested instance was running an OpenClaw service, its geographic location, and the release version it was running. I used results from FOFA, an Internet asset mapping platform, and ClawSec, a similar service developed at Huazhong University of Science and Technology, to validate the scan results and confirm their accuracy.",
    openclawOngoing: "The project is currently being further refactored so that it can automatically generate scanning scripts for affected projects based on arbitrary vulnerability descriptions (a prerequisite for generating reliable scanning scripts is to construct container instances that conform to the threat model using information from multiple sources, including vulnerability descriptions and official project documentation; this means the work is also applicable to generating cyber range environments), and then scan the Internet for instances that contain the vulnerability and can be exploited.",
    moyun: "Beijing Moyun Technology Co., Ltd.",
    moyunRole: "AI / Security R&D Engineer",
    trafficTitle: "LLM-based Malicious Traffic Analysis",
    trafficDescription: "I participated in the research project on “LLM-based malicious traffic analysis” and constructed the experimental dataset. Drawing on standards documents including, but not limited to, RFCs, I analysed the properties and characteristics of more than ten network protocols. I developed a PCAP parsing module based on Wireshark/tshark that supports extracting instance features from traffic samples at the IP, flow, and packet levels and generating structured JSON summaries. I designed a complete set of prompts for six security scenarios: network scanning, brute-force attacks, Web attacks, system vulnerability exploitation, malware, and covert or obfuscated communication. With a workflow built using only Qwen-8B (the mid-2025 version), the system achieved accuracy above 80% when assessing PCAP files with an average size of 10 MB.",
    pocTitle: "Generating Usable POCs from Vulnerability Descriptions",
    pocDescription: "I led the research project on “generating usable POC code from vulnerability descriptions”. I implemented the complete processing pipeline, from extracting and parsing raw security data, through transmitting it to a large language model, to generating usable proof-of-concept code. Within minutes, the project can automatically convert description documents for selected CNVD/CNNVD vulnerabilities into scripts usable by the company’s “automated penetration testing” product, thereby improving the vulnerability validation capabilities of its automated security testing product.",
    logsTitle: "Log Matching for Breach and Attack Simulation",
    logsDescription: "I led the development of the log-matching module in the company’s breach and attack simulation product. The module supports automatically or manually ingesting logs from security products in the system under test into the attack simulation system. It supports more than ten categories of security products, including WAF, IDS, and IPS, and provides compatibility adaptations for specific products from dozens of major security vendors. In practical use, the system can precisely match over 10,000 simulated attacks against hundreds of thousands of security log entries within minutes. This functionality greatly improves the product’s assessment confidence and supports customers’ security response work, giving the product a significant competitive advantage among comparable products in China.",
    chaitin: "Beijing Chaitin Technology Co., Ltd.",
    chaitinRole: "Security R&D Engineer · Intern",
    wafTitle: "Semi-automated WAF Rule Generation",
    wafDescription: "I implemented semi-automated rule generation for the company’s WAF product. This functionality allows operations staff to create protection rules for complex attack payloads through simple point-and-click selections, reducing their average time to create a rule from several minutes per rule to approximately 20 seconds per rule.",
    xrayTitle: "Automated Scanning and Asset Mapping with X-Ray",
    xrayDescription: "I extended the company’s well-known X-Ray scanner with fully automated scanning and asset mapping, enabling the scanner to automatically search the Internet for instances containing exploitable vulnerabilities. Within half a month, I found over 20,000 real-world instances for more than 1,500 CVE/CNVD/CNNVD vulnerabilities and collected over 5 GB of request and response message samples from successful attacks.",
    researchIntro: "I am strongly passionate about the following areas and am currently conducting research in these directions:",
    semanticTitle: "Manifestations of the “Semantic Gap” in Agent Projects",
    semanticDescription: "In computing, a range of authoritative standards guide and constrain our development work, with RFCs being a prime example. However, developers’ misinterpretations of these standards and compromises made during development mean that real-world implementations do not fully comply with the standards’ requirements. We call this difference between standards and implementations the semantic gap. The security problems that semantic gaps can cause have been extensively demonstrated in previous work. Yet, with agents as an attack surface, we find that many semantic-gap problems recur in agent projects. For example, although previous researchers have extensively studied security issues involving the same-origin policy, these security mechanisms can be easily broken for an agent that stores content from different Web pages in its context. I hope to find general methods applicable to all agent projects that automatically and efficiently detect specific security issues, demonstrate their harm, and propose mitigation methods.",
    multiagentTitle: "Security of Multi-agent Systems",
    multiagentDescription: "Well-designed, high-quality multi-agent systems demonstrate outstanding performance in solving problems in specific domains. These systems either provide carefully engineered and efficient workflows for highly challenging domain-specific tasks, or establish methods that automatically derive reliable small-scale multi-agent systems for general-purpose tasks. For all organisations and enterprises, the designs of multi-agent systems are important confidential information. Disclosing these designs may introduce two main risks: first, competitors can achieve the same level of product competitiveness at very low cost; second, attackers can orchestrate effective, customised attacks against the system. I hope to find methods that can bypass common security safeguards and reliably steal the internal designs of multi-agent systems, and then automatically construct attack workflows to perform distributed “black-box penetration testing” of agent-based business systems.",
  };

  // Keep the Chinese HTML readable and complete, even without JavaScript.
  const bindings = [];
  const chinese = {};
  const translatableAttributes = {
    "data-i18n": null,
    "data-i18n-alt": "alt",
    "data-i18n-aria-label": "aria-label",
  };

  for (const [dataAttribute, attribute] of Object.entries(translatableAttributes)) {
    document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
      const key = element.getAttribute(dataAttribute);
      chinese[key] = attribute ? element.getAttribute(attribute) : element.textContent;
      bindings.push({ element, key, attribute });
    });
  }

  const translations = { "zh-CN": chinese, en: english };
  const metadata = {
    "zh-CN": {
      title: "李心吾 | 安全研究",
      description: "李心吾，清华大学研究助理。研究方向包括自动化渗透测试、大模型与智能体安全、语义鸿沟及多智能体系统安全。",
      toggleLabel: "Switch to English",
    },
    en: {
      title: "Li Xinwu | Security Research",
      description: "Li Xinwu, research assistant at Tsinghua University. Research interests include automated penetration testing, LLM and agent security, semantic gaps, and multi-agent system security.",
      toggleLabel: "切换为中文",
    },
  };
  const languageToggle = document.getElementById("language-toggle");
  const description = document.querySelector('meta[name="description"]');
  let currentLanguage = "zh-CN";

  function applyLanguage(language) {
    currentLanguage = language;
    const content = translations[language];

    for (const { element, key, attribute } of bindings) {
      if (attribute) {
        element.setAttribute(attribute, content[key]);
      } else {
        element.textContent = content[key];
      }
    }

    document.documentElement.lang = language;
    document.title = metadata[language].title;
    description.content = metadata[language].description;
    languageToggle.setAttribute("aria-label", metadata[language].toggleLabel);
    languageToggle.querySelectorAll("[data-language]").forEach((element) => {
      element.classList.toggle("active", element.dataset.language === language);
    });
  }

  function readInitialLanguage() {
    const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
    if (requestedLanguage === "en") return "en";
    if (requestedLanguage === "cn" || requestedLanguage === "zh-CN") return "zh-CN";

    try {
      const savedLanguage = window.localStorage.getItem("homepage-language");
      if (savedLanguage === "en" || savedLanguage === "zh-CN") return savedLanguage;
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
    return "zh-CN";
  }

  languageToggle.addEventListener("click", () => {
    const language = currentLanguage === "zh-CN" ? "en" : "zh-CN";
    applyLanguage(language);

    try {
      window.localStorage.setItem("homepage-language", language);
    } catch {
      // Persist the language in the URL when storage is unavailable as well.
    }

    const url = new URL(window.location.href);
    url.searchParams.set("lang", language === "en" ? "en" : "cn");
    try {
      window.history.replaceState(null, "", url);
    } catch {
      // Some local file previews do not permit history updates.
    }
  });

  applyLanguage(readInitialLanguage());
  languageToggle.hidden = false;
})();
