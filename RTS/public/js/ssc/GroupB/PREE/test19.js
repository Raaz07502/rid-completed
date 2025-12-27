const questions = [
  {
    "num": 1,
    "question_en": "Which Indian state launched the 'CM SHRI Schools' scheme in 2024?",
    "question_hi": "2024 में 'CM श्री स्कूल' योजना किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Haryana", "Rajasthan"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "हरियाणा", "राजस्थान"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Indian city hosted the Global Investor Summit 2024?",
    "question_hi": "ग्लोबल इन्वेस्टर समिट 2024 किस शहर में आयोजित हुई?",
    "options_en": ["Bhopal", "Mumbai", "Ahmedabad", "New Delhi"],
    "options_hi": ["भोपाल", "मुंबई", "अहमदाबाद", "नई दिल्ली"],
    "answer_en": "Bhopal",
    "answer_hi": "भोपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Indian state became the first to implement AI-based traffic management?",
    "question_hi": "AI आधारित ट्रैफिक प्रबंधन लागू करने वाला पहला राज्य कौन बना?",
    "options_en": ["Karnataka", "Delhi", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["कर्नाटक", "दिल्ली", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which country launched the 'BRICS Pay' initiative?",
    "question_hi": "'BRICS Pay' पहल किस समूह द्वारा शुरू की गई?",
    "options_en": ["BRICS Nations", "G7", "ASEAN", "SAARC"],
    "options_hi": ["ब्रिक्स देश", "G7", "आसियान", "सार्क"],
    "answer_en": "BRICS Nations",
    "answer_hi": "ब्रिक्स देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Indian state topped the Startup Ecosystem Ranking 2024?",
    "question_hi": "स्टार्टअप इकोसिस्टम रैंकिंग 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Karnataka", "Maharashtra", "Gujarat", "Tamil Nadu"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "गुजरात", "तमिलनाडु"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Indian city became the first to launch hydrogen-powered buses?",
    "question_hi": "हाइड्रोजन से चलने वाली बसें शुरू करने वाला पहला भारतीय शहर कौन बना?",
    "options_en": ["Delhi", "Pune", "Indore", "Ahmedabad"],
    "options_hi": ["दिल्ली", "पुणे", "इंदौर", "अहमदाबाद"],
    "answer_en": "Pune",
    "answer_hi": "पुणे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Indian state launched 'Gruha Lakshmi Yojana'?",
    "question_hi": "गृह लक्ष्मी योजना किस राज्य ने शुरू की?",
    "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Telangana"],
    "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "तेलंगाना"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Indian organization released the 'State of India’s Environment 2024' report?",
    "question_hi": "'स्टेट ऑफ इंडिया एनवायरनमेंट 2024' रिपोर्ट किसने जारी की?",
    "options_en": ["CSE", "MoEFCC", "NITI Aayog", "TERI"],
    "options_hi": ["CSE", "पर्यावरण मंत्रालय", "नीति आयोग", "टेरी"],
    "answer_en": "CSE",
    "answer_hi": "CSE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Indian city hosted the National Youth Festival 2024?",
    "question_hi": "राष्ट्रीय युवा महोत्सव 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["Nashik", "Varanasi", "Indore", "Jaipur"],
    "options_hi": ["नासिक", "वाराणसी", "इंदौर", "जयपुर"],
    "answer_en": "Nashik",
    "answer_hi": "नासिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Indian state launched the 'Mukhyamantri Annapurna Yojana'?",
    "question_hi": "मुख्यमंत्री अन्नपूर्णा योजना किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Chhattisgarh", "Jharkhand", "Odisha"],
    "options_hi": ["मध्य प्रदेश", "छत्तीसगढ़", "झारखंड", "ओडिशा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Indian state became the first to implement Uniform Civil Code?",
    "question_hi": "समान नागरिक संहिता लागू करने वाला पहला राज्य कौन बना?",
    "options_en": ["Uttarakhand", "Goa", "Assam", "Himachal Pradesh"],
    "options_hi": ["उत्तराखंड", "गोवा", "असम", "हिमाचल प्रदेश"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Indian city hosted Aero India 2024?",
    "question_hi": "एयरो इंडिया 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["Bengaluru", "Hyderabad", "Chennai", "Pune"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "चेन्नई", "पुणे"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Indian state topped the PM Gati Shakti implementation ranking?",
    "question_hi": "PM गति शक्ति क्रियान्वयन रैंकिंग में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Gujarat", "Maharashtra", "Uttar Pradesh", "Karnataka"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Indian state launched 'Mukhyamantri Sikho Kamao Yojana'?",
    "question_hi": "मुख्यमंत्री सीखो कमाओ योजना किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Haryana", "Punjab"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "हरियाणा", "पंजाब"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Indian city became the first 100% solar-powered city?",
    "question_hi": "100% सौर ऊर्जा से संचालित होने वाला पहला भारतीय शहर कौन बना?",
    "options_en": ["Diu", "Surat", "Udaipur", "Panaji"],
    "options_hi": ["दीव", "सूरत", "उदयपुर", "पणजी"],
    "answer_en": "Diu",
    "answer_hi": "दीव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Indian state hosted the Khelo India Youth Games 2024?",
    "question_hi": "खेलो इंडिया यूथ गेम्स 2024 की मेज़बानी किस राज्य ने की?",
    "options_en": ["Tamil Nadu", "Madhya Pradesh", "Bihar", "Assam"],
    "options_hi": ["तमिलनाडु", "मध्य प्रदेश", "बिहार", "असम"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Indian institution developed India's first quantum computer?",
    "question_hi": "भारत का पहला क्वांटम कंप्यूटर किस संस्था ने विकसित किया?",
    "options_en": ["IISc Bengaluru", "IIT Madras", "IIT Bombay", "ISRO"],
    "options_hi": ["IISc बेंगलुरु", "IIT मद्रास", "IIT बॉम्बे", "इसरो"],
    "answer_en": "IISc Bengaluru",
    "answer_hi": "IISc बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Indian state launched 'Mukhyamantri Bal Ashirwad Yojana'?",
    "question_hi": "मुख्यमंत्री बाल आशीर्वाद योजना किस राज्य ने शुरू की?",
    "options_en": ["Jharkhand", "Bihar", "Odisha", "West Bengal"],
    "options_hi": ["झारखंड", "बिहार", "ओडिशा", "पश्चिम बंगाल"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Indian city hosted the Global AI Summit 2024?",
    "question_hi": "ग्लोबल AI समिट 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["Hyderabad", "Bengaluru", "Mumbai", "Gurugram"],
    "options_hi": ["हैदराबाद", "बेंगलुरु", "मुंबई", "गुरुग्राम"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Indian state launched the 'CM Rise School' initiative?",
    "question_hi": "CM राइज़ स्कूल पहल किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Chhattisgarh", "Rajasthan", "Odisha"],
    "options_hi": ["मध्य प्रदेश", "छत्तीसगढ़", "राजस्थान", "ओडिशा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Teerth Darshan Yojana'?",
    "question_hi": "मुख्यमंत्री तीर्थ दर्शन योजना किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Gujarat", "Rajasthan", "Uttar Pradesh"],
    "options_hi": ["मध्य प्रदेश", "गुजरात", "राजस्थान", "उत्तर प्रदेश"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Indian city hosted the National Startup Awards 2024?",
    "question_hi": "नेशनल स्टार्टअप अवार्ड्स 2024 किस शहर में आयोजित हुए?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Indian state topped the NIRF 2024 overall ranking?",
    "question_hi": "NIRF 2024 ओवरऑल रैंकिंग में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Tamil Nadu", "Karnataka", "Maharashtra", "Delhi"],
    "options_hi": ["तमिलनाडु", "कर्नाटक", "महाराष्ट्र", "दिल्ली"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Indian state launched 'Mukhyamantri Free Electricity Scheme'?",
    "question_hi": "मुख्यमंत्री मुफ्त बिजली योजना किस राज्य ने शुरू की?",
    "options_en": ["Punjab", "Delhi", "Haryana", "Rajasthan"],
    "options_hi": ["पंजाब", "दिल्ली", "हरियाणा", "राजस्थान"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Indian city became the first to introduce water metro?",
    "question_hi": "वॉटर मेट्रो शुरू करने वाला पहला भारतीय शहर कौन बना?",
    "options_en": ["Kochi", "Mumbai", "Chennai", "Kolkata"],
    "options_hi": ["कोच्चि", "मुंबई", "चेन्नई", "कोलकाता"],
    "answer_en": "Kochi",
    "answer_hi": "कोच्चि",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Indian state launched 'Mukhyamantri Ladli Behna Yojana Phase 2'?",
    "question_hi": "मुख्यमंत्री लाड़ली बहना योजना चरण-2 किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Haryana", "Bihar"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "हरियाणा", "बिहार"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Indian state hosted the Global Maritime India Summit?",
    "question_hi": "ग्लोबल मैरीटाइम इंडिया समिट किस राज्य में आयोजित हुआ?",
    "options_en": ["Maharashtra", "Gujarat", "Tamil Nadu", "Goa"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "गोवा"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Indian organization launched the 'One Nation One Subscription' scheme?",
    "question_hi": "'वन नेशन वन सब्सक्रिप्शन' योजना किसने शुरू की?",
    "options_en": ["Government of India", "UGC", "AICTE", "NITI Aayog"],
    "options_hi": ["भारत सरकार", "UGC", "AICTE", "नीति आयोग"],
    "answer_en": "Government of India",
    "answer_hi": "भारत सरकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Indian city hosted the International Trade Fair 2024?",
    "question_hi": "अंतरराष्ट्रीय व्यापार मेला 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Indian state topped the School Education Quality Index 2024?",
    "question_hi": "स्कूल शिक्षा गुणवत्ता सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Kerala", "Tamil Nadu", "Himachal Pradesh", "Punjab"],
    "options_hi": ["केरल", "तमिलनाडु", "हिमाचल प्रदेश", "पंजाब"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Indian state launched 'Mukhyamantri Urban Awas Yojana'?",
    "question_hi": "मुख्यमंत्री शहरी आवास योजना किस राज्य ने शुरू की?",
    "options_en": ["Chhattisgarh", "Odisha", "Bihar", "Jharkhand"],
    "options_hi": ["छत्तीसगढ़", "ओडिशा", "बिहार", "झारखंड"],
    "answer_en": "Chhattisgarh",
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Indian city hosted the Global Biofuel Summit?",
    "question_hi": "ग्लोबल बायोफ्यूल समिट किस शहर में आयोजित हुआ?",
    "options_en": ["New Delhi", "Pune", "Hyderabad", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "पुणे", "हैदराबाद", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Indian state became the first to launch 'Green Budget'?",
    "question_hi": "ग्रीन बजट पेश करने वाला पहला भारतीय राज्य कौन बना?",
    "options_en": ["Kerala", "Sikkim", "Himachal Pradesh", "Tamil Nadu"],
    "options_hi": ["केरल", "सिक्किम", "हिमाचल प्रदेश", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Indian state hosted the National Dairy Development Conference 2024?",
    "question_hi": "राष्ट्रीय डेयरी विकास सम्मेलन 2024 किस राज्य में हुआ?",
    "options_en": ["Gujarat", "Punjab", "Uttar Pradesh", "Haryana"],
    "options_hi": ["गुजरात", "पंजाब", "उत्तर प्रदेश", "हरियाणा"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Indian city became UNESCO Creative City of Music?",
    "question_hi": "UNESCO क्रिएटिव सिटी ऑफ म्यूजिक कौन सा भारतीय शहर बना?",
    "options_en": ["Gwalior", "Varanasi", "Chennai", "Thiruvaiyaru"],
    "options_hi": ["ग्वालियर", "वाराणसी", "चेन्नई", "तिरुवैयारु"],
    "answer_en": "Gwalior",
    "answer_hi": "ग्वालियर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Indian state launched 'Mukhyamantri Kanya Utthan Yojana' expansion?",
    "question_hi": "मुख्यमंत्री कन्या उत्थान योजना का विस्तार किस राज्य ने किया?",
    "options_en": ["Bihar", "Jharkhand", "Odisha", "West Bengal"],
    "options_hi": ["बिहार", "झारखंड", "ओडिशा", "पश्चिम बंगाल"],
    "answer_en": "Bihar",
    "answer_hi": "बिहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Indian city hosted the National Energy Conservation Awards 2024?",
    "question_hi": "राष्ट्रीय ऊर्जा संरक्षण पुरस्कार 2024 किस शहर में आयोजित हुए?",
    "options_en": ["New Delhi", "Jaipur", "Bhopal", "Chandigarh"],
    "options_hi": ["नई दिल्ली", "जयपुर", "भोपाल", "चंडीगढ़"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Indian state topped the Fisheries Production Report 2024?",
    "question_hi": "मत्स्य उत्पादन रिपोर्ट 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Andhra Pradesh", "West Bengal", "Odisha", "Tamil Nadu"],
    "options_hi": ["आंध्र प्रदेश", "पश्चिम बंगाल", "ओडिशा", "तमिलनाडु"],
    "answer_en": "Andhra Pradesh",
    "answer_hi": "आंध्र प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Indian state launched 'Mukhyamantri Solar Pump Yojana'?",
    "question_hi": "मुख्यमंत्री सोलर पंप योजना किस राज्य ने शुरू की?",
    "options_en": ["Maharashtra", "Rajasthan", "Gujarat", "Madhya Pradesh"],
    "options_hi": ["महाराष्ट्र", "राजस्थान", "गुजरात", "मध्य प्रदेश"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Indian city hosted the National Handloom Day main event?",
    "question_hi": "राष्ट्रीय हथकरघा दिवस का मुख्य आयोजन किस शहर में हुआ?",
    "options_en": ["Varanasi", "Surat", "Panipat", "Bhubaneswar"],
    "options_hi": ["वाराणसी", "सूरत", "पानीपत", "भुवनेश्वर"],
    "answer_en": "Varanasi",
    "answer_hi": "वाराणसी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Indian state launched 'Mukhyamantri Krishi Ashirwad Yojana'?",
    "question_hi": "मुख्यमंत्री कृषि आशीर्वाद योजना किस राज्य ने शुरू की?",
    "options_en": ["Jharkhand", "Bihar", "Odisha", "Chhattisgarh"],
    "options_hi": ["झारखंड", "बिहार", "ओडिशा", "छत्तीसगढ़"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Indian city hosted the National Tourism Awards 2024?",
    "question_hi": "राष्ट्रीय पर्यटन पुरस्कार 2024 किस शहर में आयोजित हुए?",
    "options_en": ["New Delhi", "Jaipur", "Goa", "Kochi"],
    "options_hi": ["नई दिल्ली", "जयपुर", "गोवा", "कोच्चि"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Indian state became the first to provide free bus travel for women?",
    "question_hi": "महिलाओं को मुफ्त बस यात्रा देने वाला पहला राज्य कौन बना?",
    "options_en": ["Tamil Nadu", "Delhi", "Karnataka", "Punjab"],
    "options_hi": ["तमिलनाडु", "दिल्ली", "कर्नाटक", "पंजाब"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Indian city hosted the National Panchayati Raj Day event?",
    "question_hi": "राष्ट्रीय पंचायती राज दिवस का आयोजन किस शहर में हुआ?",
    "options_en": ["Bhopal", "New Delhi", "Surat", "Patna"],
    "options_hi": ["भोपाल", "नई दिल्ली", "सूरत", "पटना"],
    "answer_en": "Bhopal",
    "answer_hi": "भोपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Bal Seva Yojana'?",
    "question_hi": "मुख्यमंत्री बाल सेवा योजना किस राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "बिहार", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Indian city hosted the National Cyber Security Conference 2024?",
    "question_hi": "राष्ट्रीय साइबर सुरक्षा सम्मेलन 2024 किस शहर में हुआ?",
    "options_en": ["Hyderabad", "Bengaluru", "New Delhi", "Pune"],
    "options_hi": ["हैदराबाद", "बेंगलुरु", "नई दिल्ली", "पुणे"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Indian state topped the Ease of Living Index 2024?",
    "question_hi": "Ease of Living Index 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Karnataka", "Maharashtra", "Tamil Nadu", "Kerala"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "तमिलनाडु", "केरल"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Indian city became the first to introduce electric water taxis?",
    "question_hi": "इलेक्ट्रिक वॉटर टैक्सी शुरू करने वाला पहला भारतीय शहर कौन बना?",
    "options_en": ["Kochi", "Mumbai", "Goa", "Chennai"],
    "options_hi": ["कोच्चि", "मुंबई", "गोवा", "चेन्नई"],
    "answer_en": "Kochi",
    "answer_hi": "कोच्चि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Indian state launched 'Mukhyamantri Digital Health Yojana'?",
    "question_hi": "मुख्यमंत्री डिजिटल स्वास्थ्य योजना किस राज्य ने शुरू की?",
    "options_en": ["Himachal Pradesh", "Kerala", "Tamil Nadu", "Gujarat"],
    "options_hi": ["हिमाचल प्रदेश", "केरल", "तमिलनाडु", "गुजरात"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Indian city hosted the National e-Governance Conference 2024?",
    "question_hi": "राष्ट्रीय ई-गवर्नेंस सम्मेलन 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["Gandhinagar", "Bhopal", "Jaipur", "Lucknow"],
    "options_hi": ["गांधीनगर", "भोपाल", "जयपुर", "लखनऊ"],
    "answer_en": "Gandhinagar",
    "answer_hi": "गांधीनगर",
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