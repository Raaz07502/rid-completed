const questions = [
  {
   "num": 1,
    "question_en": "Which Indian state launched 'Mukhyamantri Urban Development Fund' in 2025?",
    "question_hi": "मुख्यमंत्री शहरी विकास फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Which Indian city hosted the 'National Startup & Innovation Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय स्टार्टअप और नवाचार नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which Indian state launched 'Mukhyamantri Renewable Energy Development Fund'?",
    "question_hi": "मुख्यमंत्री अक्षय ऊर्जा विकास फंड किस राज्य ने शुरू किया?",
    "options_en": ["Rajasthan", "Gujarat", "Maharashtra", "Tamil Nadu"],
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "तमिलनाडु"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "Which Indian organization launched the 'National AI Startup Hub 2025'?",
    "question_hi": "'नेशनल AI स्टार्टअप हब 2025' किस संगठन ने शुरू किया?",
    "options_en": ["NITI Aayog", "MeitY", "DPIIT", "SIDBI"],
    "options_hi": ["नीति आयोग", "MeitY", "DPIIT", "SIDBI"],
    "answer_en": "MeitY",
    "answer_hi": "MeitY",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which Indian state topped the 'State Ease of Doing Business Index 2025'?",
    "question_hi": "'राज्य व्यवसाय सुगमता सूचकांक 2025' में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Gujarat", "Karnataka", "Maharashtra", "Tamil Nadu"],
    "options_hi": ["गुजरात", "कर्नाटक", "महाराष्ट्र", "तमिलनाडु"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Which Indian city hosted the 'National Digital Economy Innovation Summit 2025'?",
    "question_hi": "'राष्ट्रीय डिजिटल अर्थव्यवस्था नवाचार शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which Indian state launched 'Mukhyamantri Women Entrepreneurs Growth Fund 2.0'?",
    "question_hi": "मुख्यमंत्री महिला उद्यमी विकास फंड 2.0 किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Which Indian city hosted the 'National Startup & MSME Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय स्टार्टअप और MSME नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which Indian state launched 'Mukhyamantri Green Technology Startup Fund 2025'?",
    "question_hi": "मुख्यमंत्री हरित तकनीक स्टार्टअप फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "Which Indian city hosted the 'National Investment & Startup Policy Innovation Summit 2025'?",
    "question_hi": "'राष्ट्रीय निवेश और स्टार्टअप नीति नवाचार शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which Indian state launched 'Mukhyamantri Smart Agriculture Fund 2025'?",
    "question_hi": "मुख्यमंत्री स्मार्ट कृषि फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Odisha", "Haryana"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "ओडिशा", "हरियाणा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Which Indian city hosted the 'National Renewable Energy Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय अक्षय ऊर्जा नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which Indian state launched 'Mukhyamantri Skill Development & Entrepreneurship Fund 2025'?",
    "question_hi": "मुख्यमंत्री कौशल विकास एवं उद्यमिता फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Karnataka", "Gujarat", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["कर्नाटक", "गुजरात", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Which Indian city hosted the 'National AI & Innovation Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय AI और नवाचार नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which Indian state launched 'Mukhyamantri Women Startup & Innovation Fund 2025'?",
    "question_hi": "मुख्यमंत्री महिला स्टार्टअप एवं नवाचार फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Which Indian city hosted the 'National Digital Economy & Startup Forum 2025'?",
    "question_hi": "'राष्ट्रीय डिजिटल अर्थव्यवस्था एवं स्टार्टअप फोरम 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Which Indian state launched 'Mukhyamantri Rural Entrepreneurship & Skill Fund 2025'?",
    "question_hi": "मुख्यमंत्री ग्रामीण उद्यमिता और कौशल फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Odisha", "Madhya Pradesh", "Chhattisgarh", "Bihar"],
    "options_hi": ["ओडिशा", "मध्य प्रदेश", "छत्तीसगढ़", "बिहार"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "Which Indian city hosted the 'National Financial Innovation & Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय वित्तीय नवाचार और नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Bengaluru", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Which Indian state launched 'Mukhyamantri Green Startup & Innovation Fund 2025'?",
    "question_hi": "मुख्यमंत्री हरित स्टार्टअप एवं नवाचार फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Which Indian city hosted the 'National Industrial & Startup Policy Innovation Forum 2025'?",
    "question_hi": "'राष्ट्रीय औद्योगिक एवं स्टार्टअप नीति नवाचार फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Bengaluru", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Affordable Housing & Urban Fund 2025'?",
    "question_hi": "मुख्यमंत्री किफायती आवास एवं शहरी फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "Which Indian city hosted the 'National Public-Private Partnership Innovation Summit 2025'?",
    "question_hi": "'राष्ट्रीय सार्वजनिक-निजी भागीदारी नवाचार शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Mumbai", "Bengaluru", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "मुंबई", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Which Indian state launched 'Mukhyamantri Digital Agriculture Fund 2025'?",
    "question_hi": "मुख्यमंत्री डिजिटल कृषि फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Odisha", "Haryana"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "ओडिशा", "हरियाणा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "Which Indian city hosted the 'National Startup & FinTech Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय स्टार्टअप और फिनटेक नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which Indian state launched 'Mukhyamantri Women Skill & Startup Fund 2025'?",
    "question_hi": "मुख्यमंत्री महिला कौशल एवं स्टार्टअप फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "Which Indian city hosted the 'National Industrial Policy & Innovation Summit 2025'?",
    "question_hi": "'राष्ट्रीय औद्योगिक नीति और नवाचार शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Bengaluru", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which Indian state launched 'Mukhyamantri Startup Seed Fund 3.0' in 2025?",
    "question_hi": "मुख्यमंत्री स्टार्टअप सीड फंड 3.0 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Karnataka", "Gujarat", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["कर्नाटक", "गुजरात", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "Which Indian city hosted the 'National AI & Startup Policy Innovation Forum 2025'?",
    "question_hi": "'राष्ट्रीय AI और स्टार्टअप नीति नवाचार फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Which Indian state launched 'Mukhyamantri Green Tech & Startup Fund 2025'?",
    "question_hi": "मुख्यमंत्री हरित तकनीक एवं स्टार्टअप फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "Which Indian city hosted the 'National Digital Startup & Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय डिजिटल स्टार्टअप और नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which Indian state launched 'Mukhyamantri Urban Innovation Fund 2025'?",
    "question_hi": "मुख्यमंत्री शहरी नवाचार फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "Which Indian city hosted the 'National Financial Technology & Startup Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय वित्तीय प्रौद्योगिकी और स्टार्टअप नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Which Indian state launched 'Mukhyamantri Rural Startup & Skill Fund 2025'?",
    "question_hi": "मुख्यमंत्री ग्रामीण स्टार्टअप और कौशल फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Odisha", "Madhya Pradesh", "Chhattisgarh", "Bihar"],
    "options_hi": ["ओडिशा", "मध्य प्रदेश", "छत्तीसगढ़", "बिहार"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 34,
    "question_en": "Which Indian city hosted the 'National Industrial & Innovation Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय औद्योगिक और नवाचार नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Bengaluru", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 35,
    "question_en": "Which Indian state launched 'Mukhyamantri Smart City Startup Fund 2025'?",
    "question_hi": "मुख्यमंत्री स्मार्ट सिटी स्टार्टअप फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "Which Indian city hosted the 'National Startup & Digital Economy Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय स्टार्टअप और डिजिटल अर्थव्यवस्था नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which Indian state launched 'Mukhyamantri Green Tech Startup Fund 3.0'?",
    "question_hi": "मुख्यमंत्री हरित तकनीक स्टार्टअप फंड 3.0 किस राज्य ने शुरू किया?",
    "options_en": ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "Which Indian city hosted the 'National AI & Startup Innovation Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय AI और स्टार्टअप नवाचार नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which Indian state launched 'Mukhyamantri Women Entrepreneurship Fund 3.0'?",
    "question_hi": "मुख्यमंत्री महिला उद्यमिता फंड 3.0 किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "Which Indian city hosted the 'National Industrial Innovation & Startup Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय औद्योगिक नवाचार और स्टार्टअप नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Bengaluru", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which Indian state launched 'Mukhyamantri Rural Skill & Startup Fund 3.0'?",
    "question_hi": "मुख्यमंत्री ग्रामीण कौशल और स्टार्टअप फंड 3.0 किस राज्य ने शुरू किया?",
    "options_en": ["Odisha", "Madhya Pradesh", "Chhattisgarh", "Bihar"],
    "options_hi": ["ओडिशा", "मध्य प्रदेश", "छत्तीसगढ़", "बिहार"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Which Indian city hosted the 'National Digital Startup & Innovation Summit 2025'?",
    "question_hi": "'राष्ट्रीय डिजिटल स्टार्टअप और नवाचार शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which Indian state launched 'Mukhyamantri Smart Technology Startup Fund 2025'?",
    "question_hi": "मुख्यमंत्री स्मार्ट तकनीक स्टार्टअप फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Karnataka", "Gujarat", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["कर्नाटक", "गुजरात", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Which Indian city hosted the 'National Public Investment & Startup Policy Forum 2025'?",
    "question_hi": "'राष्ट्रीय सार्वजनिक निवेश और स्टार्टअप नीति फोरम 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Mumbai", "Bengaluru", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "मुंबई", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Green Innovation Fund 2025'?",
    "question_hi": "मुख्यमंत्री हरित नवाचार फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Which Indian city hosted the 'National AI & Digital Economy Innovation Summit 2025'?",
    "question_hi": "'राष्ट्रीय AI और डिजिटल अर्थव्यवस्था नवाचार शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Ahmedabad"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Which Indian state launched 'Mukhyamantri Women Innovation & Skill Fund 2025'?",
    "question_hi": "मुख्यमंत्री महिला नवाचार एवं कौशल फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "Which Indian city hosted the 'National Industrial Policy & Digital Innovation Forum 2025'?",
    "question_hi": "'राष्ट्रीय औद्योगिक नीति और डिजिटल नवाचार फोरम 2025' किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Bengaluru", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "बेंगलुरु", "अहमदाबाद"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which Indian state launched 'Mukhyamantri Startup & Innovation Seed Fund 2025'?",
    "question_hi": "मुख्यमंत्री स्टार्टअप और नवाचार सीड फंड 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Karnataka", "Gujarat", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["कर्नाटक", "गुजरात", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "Which Indian city hosted the 'National Digital Innovation & Startup Policy Summit 2025'?",
    "question_hi": "'राष्ट्रीय डिजिटल नवाचार और स्टार्टअप नीति शिखर सम्मेलन 2025' किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  }
];

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