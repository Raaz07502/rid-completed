const questions = [
  {
    "num": 1,
    "question_en": "What does CPU stand for?",
    "question_hi": "सीपीयू का पूरा नाम क्या है?",
    "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which programming language is known as the 'mother of all programming languages'?",
    "question_hi": "किस प्रोग्रामिंग भाषा को 'सभी प्रोग्रामिंग भाषाओं की जननी' कहा जाता है?",
    "options_en": ["C", "Java", "Python", "Fortran"],
    "options_hi": ["C", "Java", "Python", "Fortran"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the full form of RAM?",
    "question_hi": "रैम का पूरा नाम क्या है?",
    "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
    "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
    "answer_en": "Random Access Memory",
    "answer_hi": "रैंडम एक्सेस मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which company developed the Windows operating system?",
    "question_hi": "विंडोज ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
    "options_en": ["Microsoft", "Apple", "IBM", "Google"],
    "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "आईबीएम", "गूगल"],
    "answer_en": "Microsoft",
    "answer_hi": "माइक्रोसॉफ्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does URL stand for?",
    "question_hi": "यूआरएल का पूरा नाम क्या है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is an example of an input device?",
    "question_hi": "निम्नलिखित में से कौन सा इनपुट डिवाइस का उदाहरण है?",
    "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
    "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the binary equivalent of decimal number 10?",
    "question_hi": "दशमलव संख्या 10 का बाइनरी समकक्ष क्या है?",
    "options_en": ["1010", "1001", "1100", "1011"],
    "options_hi": ["1010", "1001", "1100", "1011"],
    "answer_en": "1010",
    "answer_hi": "1010",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which protocol is used for sending emails?",
    "question_hi": "ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SMTP", "HTTP", "FTP", "TCP"],
    "options_hi": ["एसएमटीपी", "एचटीटीपी", "एफटीपी", "टीसीपी"],
    "answer_en": "SMTP",
    "answer_hi": "एसएमटीपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does HTML stand for?",
    "question_hi": "एचटीएमएल का पूरा नाम क्या है?",
    "options_en": ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HighText Markup Language"],
    "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मशीन लैंग्वेज", "हाइपरटेक्स्ट मशीन लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज"],
    "answer_en": "HyperText Markup Language",
    "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Who is known as the 'Father of Computer Science'?",
    "question_hi": "'कंप्यूटर विज्ञान के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Alan Turing", "Charles Babbage", "John von Neumann", "Bill Gates"],
    "options_hi": ["एलन ट्यूरिंग", "चार्ल्स बैबेज", "जॉन वॉन न्यूमैन", "बिल गेट्स"],
    "answer_en": "Alan Turing",
    "answer_hi": "एलन ट्यूरिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a volatile memory?",
    "question_hi": "निम्नलिखित में से कौन सी अस्थिर मेमोरी है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Flash Drive"],
    "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "फ्लैश ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "रैम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the full form of AI?",
    "question_hi": "एआई का पूरा नाम क्या है?",
    "options_en": ["Artificial Intelligence", "Automated Intelligence", "Artificial Information", "Automated Information"],
    "options_hi": ["आर्टिफिशियल इंटेलिजेंस", "ऑटोमेटेड इंटेलिजेंस", "आर्टिफिशियल इंफॉर्मेशन", "ऑटोमेटेड इंफॉर्मेशन"],
    "answer_en": "Artificial Intelligence",
    "answer_hi": "आर्टिफिशियल इंटेलिजेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which company developed the Android operating system?",
    "question_hi": "एंड्रॉइड ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
    "options_en": ["Google", "Apple", "Microsoft", "Samsung"],
    "options_hi": ["गूगल", "एप्पल", "माइक्रोसॉफ्ट", "सैमसंग"],
    "answer_en": "Google",
    "answer_hi": "गूगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does HTTP stand for?",
    "question_hi": "एचटीटीपी का पूरा नाम क्या है?",
    "options_en": ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transmission Protocol"],
    "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
    "answer_en": "HyperText Transfer Protocol",
    "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is a programming language?",
    "question_hi": "निम्नलिखित में से कौन सी एक प्रोग्रामिंग भाषा है?",
    "options_en": ["Python", "Linux", "Windows", "Excel"],
    "options_hi": ["पाइथन", "लिनक्स", "विंडोज", "एक्सेल"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the full form of PDF?",
    "question_hi": "पीडीएफ का पूरा नाम क्या है?",
    "options_en": ["Portable Document Format", "Printable Document Format", "Portable Data Format", "Printable Data Format"],
    "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डेटा फॉर्मेट", "प्रिंटेबल डेटा फॉर्मेट"],
    "answer_en": "Portable Document Format",
    "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which device converts digital signals to analog signals?",
    "question_hi": "कौन सा डिवाइस डिजिटल सिग्नल को एनालॉग सिग्नल में बदलता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does DNS stand for?",
    "question_hi": "डीएनएस का पूरा नाम क्या है?",
    "options_en": ["Domain Name System", "Data Name System", "Domain Network System", "Data Network System"],
    "options_hi": ["डोमेन नेम सिस्टम", "डेटा नेम सिस्टम", "डोमेन नेटवर्क सिस्टम", "डेटा नेटवर्क सिस्टम"],
    "answer_en": "Domain Name System",
    "answer_hi": "डोमेन नेम सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which company invented the first computer mouse?",
    "question_hi": "पहला कंप्यूटर माउस किस कंपनी ने बनाया?",
    "options_en": ["Xerox", "Apple", "Microsoft", "IBM"],
    "options_hi": ["जेरोक्स", "एप्पल", "माइक्रोसॉफ्ट", "आईबीएम"],
    "answer_en": "Xerox",
    "answer_hi": "जेरोक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the full form of USB?",
    "question_hi": "यूएसबी का पूरा नाम क्या है?",
    "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
    "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
    "answer_en": "Universal Serial Bus",
    "answer_hi": "यूनिवर्सल सीरियल बस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of the following is a web browser?",
    "question_hi": "निम्नलिखित में से कौन सा एक वेब ब्राउज़र है?",
    "options_en": ["Google Chrome", "Microsoft Word", "Adobe Photoshop", "Windows Media Player"],
    "options_hi": ["गूगल क्रोम", "माइक्रोसॉफ्ट वर्ड", "एडोब फोटोशॉप", "विंडोज मीडिया प्लेयर"],
    "answer_en": "Google Chrome",
    "answer_hi": "गूगल क्रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does LAN stand for?",
    "question_hi": "लैन का पूरा नाम क्या है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which programming language was developed by Sun Microsystems?",
    "question_hi": "सन माइक्रोसिस्टम्स द्वारा किस प्रोग्रामिंग भाषा को विकसित किया गया था?",
    "options_en": ["Java", "Python", "C++", "JavaScript"],
    "options_hi": ["Java", "Python", "C++", "JavaScript"],
    "answer_en": "Java",
    "answer_hi": "Java",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the full form of SQL?",
    "question_hi": "एसक्यूएल का पूरा नाम क्या है?",
    "options_en": ["Structured Query Language", "System Query Language", "Structured Question Language", "System Question Language"],
    "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिस्टम क्वेश्चन लैंग्वेज"],
    "answer_en": "Structured Query Language",
    "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is an example of cloud storage?",
    "question_hi": "निम्नलिखित में से कौन सा क्लाउड स्टोरेज का उदाहरण है?",
    "options_en": ["Google Drive", "Hard Disk", "Pen Drive", "CD-ROM"],
    "options_hi": ["गूगल ड्राइव", "हार्ड डिस्क", "पेन ड्राइव", "सीडी-रोम"],
    "answer_en": "Google Drive",
    "answer_hi": "गूगल ड्राइव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does VPN stand for?",
    "question_hi": "वीपीएन का पूरा नाम क्या है?",
    "options_en": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Verified Public Network"],
    "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरिफाइड प्राइवेट नेटवर्क", "वेरिफाइड पब्लिक नेटवर्क"],
    "answer_en": "Virtual Private Network",
    "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who invented the World Wide Web?",
    "question_hi": "वर्ल्ड वाइड वेब का आविष्कार किसने किया?",
    "options_en": ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    "options_hi": ["टिम बर्नर्स-ली", "बिल गेट्स", "स्टीव जॉब्स", "मार्क जकरबर्ग"],
    "answer_en": "Tim Berners-Lee",
    "answer_hi": "टिम बर्नर्स-ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the full form of Wi-Fi?",
    "question_hi": "वाई-फाई का पूरा नाम क्या है?",
    "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wired Fidelity", "Wired Frequency"],
    "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायर्ड फिडेलिटी", "वायर्ड फ्रीक्वेंसी"],
    "answer_en": "Wireless Fidelity",
    "answer_hi": "वायरलेस फिडेलिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which company developed the iOS operating system?",
    "question_hi": "आईओएस ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
    "options_en": ["Apple", "Google", "Microsoft", "Samsung"],
    "options_hi": ["एप्पल", "गूगल", "माइक्रोसॉफ्ट", "सैमसंग"],
    "answer_en": "Apple",
    "answer_hi": "एप्पल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does BIOS stand for?",
    "question_hi": "बायोस का पूरा नाम क्या है?",
    "options_en": ["Basic Input Output System", "Basic Integrated Operating System", "Binary Input Output System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of the following is a database management system?",
    "question_hi": "निम्नलिखित में से कौन सा डेटाबेस मैनेजमेंट सिस्टम है?",
    "options_en": ["MySQL", "Java", "Python", "HTML"],
    "options_hi": ["MySQL", "Java", "Python", "HTML"],
    "answer_en": "MySQL",
    "answer_hi": "MySQL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the full form of IP address?",
    "question_hi": "आईपी एड्रेस का पूरा नाम क्या है?",
    "options_en": ["Internet Protocol address", "Internet Program address", "Integrated Protocol address", "Integrated Program address"],
    "options_hi": ["इंटरनेट प्रोटोकॉल एड्रेस", "इंटरनेट प्रोग्राम एड्रेस", "इंटीग्रेटेड प्रोटोकॉल एड्रेस", "इंटीग्रेटेड प्रोग्राम एड्रेस"],
    "answer_en": "Internet Protocol address",
    "answer_hi": "इंटरनेट प्रोटोकॉल एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which company developed the Linux operating system?",
    "question_hi": "लिनक्स ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
    "options_en": ["Linus Torvalds", "IBM", "Microsoft", "Google"],
    "options_hi": ["लिनस टोरवाल्ड्स", "आईबीएम", "माइक्रोसॉफ्ट", "गूगल"],
    "answer_en": "Linus Torvalds",
    "answer_hi": "लिनस टोरवाल्ड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does SSD stand for?",
    "question_hi": "एसएसडी का पूरा नाम क्या है?",
    "options_en": ["Solid State Drive", "System State Drive", "Solid Storage Drive", "System Storage Drive"],
    "options_hi": ["सॉलिड स्टेट ड्राइव", "सिस्टम स्टेट ड्राइव", "सॉलिड स्टोरेज ड्राइव", "सिस्टम स्टोरेज ड्राइव"],
    "answer_en": "Solid State Drive",
    "answer_hi": "सॉलिड स्टेट ड्राइव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of the following is a markup language?",
    "question_hi": "निम्नलिखित में से कौन सी एक मार्कअप लैंग्वेज है?",
    "options_en": ["XML", "Java", "C++", "Python"],
    "options_hi": ["एक्सएमएल", "Java", "C++", "Python"],
    "answer_en": "XML",
    "answer_hi": "एक्सएमएल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the full form of ASCII?",
    "question_hi": "एएससीआईआई का पूरा नाम क्या है?",
    "options_en": ["American Standard Code for Information Interchange", "American System Code for Information Interchange", "American Standard Code for Integrated Information", "American System Code for Integrated Information"],
    "options_hi": ["अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन सिस्टम कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन स्टैंडर्ड कोड फॉर इंटीग्रेटेड इनफॉर्मेशन", "अमेरिकन सिस्टम कोड फॉर इंटीग्रेटेड इनफॉर्मेशन"],
    "answer_en": "American Standard Code for Information Interchange",
    "answer_hi": "अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which protocol is used for secure communication over the internet?",
    "question_hi": "इंटरनेट पर सुरक्षित संचार के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "options_hi": ["एचटीटीपीएस", "एचटीटीपी", "एफटीपी", "एसएमटीपी"],
    "answer_en": "HTTPS",
    "answer_hi": "एचटीटीपीएस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does GUI stand for?",
    "question_hi": "जीयूआई का पूरा नाम क्या है?",
    "options_en": ["Graphical User Interface", "Graphical Unit Interface", "General User Interface", "General Unit Interface"],
    "options_hi": ["ग्राफिकल यूजर इंटरफेस", "ग्राफिकल यूनिट इंटरफेस", "जनरल यूजर इंटरफेस", "जनरल यूनिट इंटरफेस"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूजर इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which company owns the Android operating system?",
    "question_hi": "एंड्रॉइड ऑपरेटिंग सिस्टम का मालिक कौन सी कंपनी है?",
    "options_en": ["Google", "Apple", "Microsoft", "Samsung"],
    "options_hi": ["गूगल", "एप्पल", "माइक्रोसॉफ्ट", "सैमसंग"],
    "answer_en": "Google",
    "answer_hi": "गूगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the full form of CMOS?",
    "question_hi": "सीमोस का पूरा नाम क्या है?",
    "options_en": ["Complementary Metal Oxide Semiconductor", "Computer Metal Oxide Semiconductor", "Complementary Memory Oxide Semiconductor", "Computer Memory Oxide Semiconductor"],
    "options_hi": ["कॉम्प्लीमेंटरी मेटल ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेटल ऑक्साइड सेमीकंडक्टर", "कॉम्प्लीमेंटरी मेमोरी ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेमोरी ऑक्साइड सेमीकंडक्टर"],
    "answer_en": "Complementary Metal Oxide Semiconductor",
    "answer_hi": "कॉम्प्लीमेंटरी मेटल ऑक्साइड सेमीकंडक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of the following is a programming paradigm?",
    "question_hi": "निम्नलिखित में से कौन सा एक प्रोग्रामिंग पैराडाइम है?",
    "options_en": ["Object-Oriented Programming", "HTML", "CSS", "XML"],
    "options_hi": ["ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग", "HTML", "CSS", "XML"],
    "answer_en": "Object-Oriented Programming",
    "answer_hi": "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does API stand for?",
    "question_hi": "एपीआई का पूरा नाम क्या है?",
    "options_en": ["Application Programming Interface", "Application Program Interface", "Automated Programming Interface", "Automated Program Interface"],
    "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोग्राम इंटरफेस", "ऑटोमेटेड प्रोग्रामिंग इंटरफेस", "ऑटोमेटेड प्रोग्राम इंटरफेस"],
    "answer_en": "Application Programming Interface",
    "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which company developed the first commercially successful personal computer?",
    "question_hi": "पहला व्यावसायिक रूप से सफल पर्सनल कंप्यूटर किस कंपनी ने विकसित किया?",
    "options_en": ["IBM", "Apple", "Microsoft", "Dell"],
    "options_hi": ["आईबीएम", "एप्पल", "माइक्रोसॉफ्ट", "डेल"],
    "answer_en": "IBM",
    "answer_hi": "आईबीएम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the full form of CAD?",
    "question_hi": "सीएडी का पूरा नाम क्या है?",
    "options_en": ["Computer-Aided Design", "Computer-Assisted Design", "Computer-Aided Drawing", "Computer-Assisted Drawing"],
    "options_hi": ["कंप्यूटर-एडेड डिजाइन", "कंप्यूटर-असिस्टेड डिजाइन", "कंप्यूटर-एडेड ड्रॉइंग", "कंप्यूटर-असिस्टेड ड्रॉइंग"],
    "answer_en": "Computer-Aided Design",
    "answer_hi": "कंप्यूटर-एडेड डिजाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of the following is an example of an operating system?",
    "question_hi": "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम का उदाहरण है?",
    "options_en": ["macOS", "Microsoft Word", "Adobe Photoshop", "Google Chrome"],
    "options_hi": ["मैकओएस", "माइक्रोसॉफ्ट वर्ड", "एडोब फोटोशॉप", "गूगल क्रोम"],
    "answer_en": "macOS",
    "answer_hi": "मैकओएस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does IoT stand for?",
    "question_hi": "आईओटी का पूरा नाम क्या है?",
    "options_en": ["Internet of Things", "Internet of Technology", "Integrated of Things", "Integrated of Technology"],
    "options_hi": ["इंटरनेट ऑफ थिंग्स", "इंटरनेट ऑफ टेक्नोलॉजी", "इंटीग्रेटेड ऑफ थिंग्स", "इंटीग्रेटेड ऑफ टेक्नोलॉजी"],
    "answer_en": "Internet of Things",
    "answer_hi": "इंटरनेट ऑफ थिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which programming language is used for web development?",
    "question_hi": "वेब डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["JavaScript", "C", "Fortran", "Pascal"],
    "options_hi": ["JavaScript", "C", "Fortran", "Pascal"],
    "answer_en": "JavaScript",
    "answer_hi": "JavaScript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the full form of OCR?",
    "question_hi": "ओसीआर का पूरा नाम क्या है?",
    "options_en": ["Optical Character Recognition", "Optical Code Recognition", "Online Character Recognition", "Online Code Recognition"],
    "options_hi": ["ऑप्टिकल करैक्टर रिकग्निशन", "ऑप्टिकल कोड रिकग्निशन", "ऑनलाइन करैक्टर रिकग्निशन", "ऑनलाइन कोड रिकग्निशन"],
    "answer_en": "Optical Character Recognition",
    "answer_hi": "ऑप्टिकल करैक्टर रिकग्निशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which company developed the Photoshop software?",
    "question_hi": "फोटोशॉप सॉफ्टवेयर किस कंपनी ने विकसित किया?",
    "options_en": ["Adobe", "Microsoft", "Apple", "Google"],
    "options_hi": ["एडोब", "माइक्रोसॉफ्ट", "एप्पल", "गूगल"],
    "answer_en": "Adobe",
    "answer_hi": "एडोब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does CMS stand for?",
    "question_hi": "सीएमएस का पूरा नाम क्या है?",
    "options_en": ["Content Management System", "Content Marketing System", "Customer Management System", "Customer Marketing System"],
    "options_hi": ["कंटेंट मैनेजमेंट सिस्टम", "कंटेंट मार्केटिंग सिस्टम", "कस्टमर मैनेजमेंट सिस्टम", "कस्टमर मार्केटिंग सिस्टम"],
    "answer_en": "Content Management System",
    "answer_hi": "कंटेंट मैनेजमेंट सिस्टम",
    "attempted": false,
    "selected": ""
  }
]

let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};