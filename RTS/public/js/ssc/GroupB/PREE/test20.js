const questions = [
  {
    "num": 1,
    "question_en": "Which Indian state launched the 'Mukhyamantri Samuhik Vivah Yojana'?",
    "question_hi": "मुख्यमंत्री सामूहिक विवाह योजना किस राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Bihar"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश", "बिहार"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Indian city hosted the National Climate Conference 2024?",
    "question_hi": "राष्ट्रीय जलवायु सम्मेलन 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["New Delhi", "Bhopal", "Hyderabad", "Chennai"],
    "options_hi": ["नई दिल्ली", "भोपाल", "हैदराबाद", "चेन्नई"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Indian state topped the Export Preparedness Index 2024?",
    "question_hi": "निर्यात तैयारी सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Tamil Nadu", "Maharashtra", "Gujarat", "Karnataka"],
    "options_hi": ["तमिलनाडु", "महाराष्ट्र", "गुजरात", "कर्नाटक"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Indian city hosted the National Urban Innovation Summit?",
    "question_hi": "राष्ट्रीय शहरी नवाचार शिखर सम्मेलन किस शहर में हुआ?",
    "options_en": ["Surat", "Pune", "Indore", "Ahmedabad"],
    "options_hi": ["सूरत", "पुणे", "इंदौर", "अहमदाबाद"],
    "answer_en": "Surat",
    "answer_hi": "सूरत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Indian state launched 'Mukhyamantri Free Laptop Scheme' in 2024?",
    "question_hi": "2024 में मुख्यमंत्री फ्री लैपटॉप योजना किस राज्य ने शुरू की?",
    "options_en": ["Rajasthan", "Uttar Pradesh", "Himachal Pradesh", "Tamil Nadu"],
    "options_hi": ["राजस्थान", "उत्तर प्रदेश", "हिमाचल प्रदेश", "तमिलनाडु"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Indian organization released the National Cyber Security Strategy draft?",
    "question_hi": "राष्ट्रीय साइबर सुरक्षा रणनीति का मसौदा किसने जारी किया?",
    "options_en": ["MeitY", "CERT-In", "NITI Aayog", "Home Ministry"],
    "options_hi": ["MeitY", "CERT-In", "नीति आयोग", "गृह मंत्रालय"],
    "answer_en": "MeitY",
    "answer_hi": "MeitY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Indian city hosted the National Startup Expo 2024?",
    "question_hi": "नेशनल स्टार्टअप एक्सपो 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["Bengaluru", "New Delhi", "Hyderabad", "Mumbai"],
    "options_hi": ["बेंगलुरु", "नई दिल्ली", "हैदराबाद", "मुंबई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Indian state launched 'Mukhyamantri Anna Suraksha Yojana'?",
    "question_hi": "मुख्यमंत्री अन्न सुरक्षा योजना किस राज्य ने शुरू की?",
    "options_en": ["Odisha", "Chhattisgarh", "Jharkhand", "Bihar"],
    "options_hi": ["ओडिशा", "छत्तीसगढ़", "झारखंड", "बिहार"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Indian city hosted the International Textile Summit 2024?",
    "question_hi": "अंतरराष्ट्रीय वस्त्र शिखर सम्मेलन 2024 किस शहर में हुआ?",
    "options_en": ["Surat", "Coimbatore", "Ludhiana", "Panipat"],
    "options_hi": ["सूरत", "कोयंबटूर", "लुधियाना", "पानीपत"],
    "answer_en": "Surat",
    "answer_hi": "सूरत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Indian state topped the Rural Development Index 2024?",
    "question_hi": "ग्रामीण विकास सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Kerala", "Himachal Pradesh", "Punjab", "Tamil Nadu"],
    "options_hi": ["केरल", "हिमाचल प्रदेश", "पंजाब", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Indian state launched 'Mukhyamantri Skill Internship Scheme'?",
    "question_hi": "मुख्यमंत्री स्किल इंटर्नशिप योजना किस राज्य ने शुरू की?",
    "options_en": ["Haryana", "Madhya Pradesh", "Gujarat", "Karnataka"],
    "options_hi": ["हरियाणा", "मध्य प्रदेश", "गुजरात", "कर्नाटक"],
    "answer_en": "Haryana",
    "answer_hi": "हरियाणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Indian city hosted the National Women Entrepreneurship Summit?",
    "question_hi": "राष्ट्रीय महिला उद्यमिता शिखर सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Jaipur", "Bhopal", "Lucknow"],
    "options_hi": ["नई दिल्ली", "जयपुर", "भोपाल", "लखनऊ"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Indian state launched 'Mukhyamantri Free Coaching Scheme'?",
    "question_hi": "मुख्यमंत्री फ्री कोचिंग योजना किस राज्य ने शुरू की?",
    "options_en": ["Rajasthan", "Delhi", "Uttar Pradesh", "Bihar"],
    "options_hi": ["राजस्थान", "दिल्ली", "उत्तर प्रदेश", "बिहार"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Indian city hosted the National Disaster Management Conference?",
    "question_hi": "राष्ट्रीय आपदा प्रबंधन सम्मेलन किस शहर में हुआ?",
    "options_en": ["Bhopal", "New Delhi", "Chandigarh", "Dehradun"],
    "options_hi": ["भोपाल", "नई दिल्ली", "चंडीगढ़", "देहरादून"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Indian state launched 'Mukhyamantri Urban Transport Scheme'?",
    "question_hi": "मुख्यमंत्री शहरी परिवहन योजना किस राज्य ने शुरू की?",
    "options_en": ["Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Indian city hosted the National Fisheries Conference 2024?",
    "question_hi": "राष्ट्रीय मत्स्य सम्मेलन 2024 किस शहर में आयोजित हुआ?",
    "options_en": ["Visakhapatnam", "Kochi", "Chennai", "Paradip"],
    "options_hi": ["विशाखापत्तनम", "कोच्चि", "चेन्नई", "पारादीप"],
    "answer_en": "Visakhapatnam",
    "answer_hi": "विशाखापत्तनम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Indian state topped the MSME Performance Index 2024?",
    "question_hi": "MSME प्रदर्शन सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Tamil Nadu", "Gujarat", "Maharashtra", "Punjab"],
    "options_hi": ["तमिलनाडु", "गुजरात", "महाराष्ट्र", "पंजाब"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Indian city hosted the National Renewable Energy Conclave?",
    "question_hi": "राष्ट्रीय नवीकरणीय ऊर्जा सम्मेलन किस शहर में हुआ?",
    "options_en": ["Jaipur", "Gandhinagar", "Bhopal", "Chandigarh"],
    "options_hi": ["जयपुर", "गांधीनगर", "भोपाल", "चंडीगढ़"],
    "answer_en": "Gandhinagar",
    "answer_hi": "गांधीनगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Indian state launched 'Mukhyamantri Solar Rooftop Scheme'?",
    "question_hi": "मुख्यमंत्री सोलर रूफटॉप योजना किस राज्य ने शुरू की?",
    "options_en": ["Gujarat", "Rajasthan", "Haryana", "Uttar Pradesh"],
    "options_hi": ["गुजरात", "राजस्थान", "हरियाणा", "उत्तर प्रदेश"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Indian city hosted the National Tourism Conclave 2024?",
    "question_hi": "राष्ट्रीय पर्यटन सम्मेलन 2024 किस शहर में हुआ?",
    "options_en": ["Goa", "Jaipur", "New Delhi", "Kochi"],
    "options_hi": ["गोवा", "जयपुर", "नई दिल्ली", "कोच्चि"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Water Conservation Mission'?",
    "question_hi": "मुख्यमंत्री जल संरक्षण मिशन किस राज्य ने शुरू किया?",
    "options_en": ["Maharashtra", "Rajasthan", "Gujarat", "Madhya Pradesh"],
    "options_hi": ["महाराष्ट्र", "राजस्थान", "गुजरात", "मध्य प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Indian city hosted the National Digital Education Conference?",
    "question_hi": "राष्ट्रीय डिजिटल शिक्षा सम्मेलन किस शहर में हुआ?",
    "options_en": ["Hyderabad", "New Delhi", "Bengaluru", "Pune"],
    "options_hi": ["हैदराबाद", "नई दिल्ली", "बेंगलुरु", "पुणे"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Indian state topped the Health Index 2024?",
    "question_hi": "हेल्थ इंडेक्स 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Kerala", "Tamil Nadu", "Himachal Pradesh", "Punjab"],
    "options_hi": ["केरल", "तमिलनाडु", "हिमाचल प्रदेश", "पंजाब"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Indian city hosted the National Housing Conference?",
    "question_hi": "राष्ट्रीय आवास सम्मेलन किस शहर में आयोजित हुआ?",
    "options_en": ["Bhopal", "New Delhi", "Ahmedabad", "Indore"],
    "options_hi": ["भोपाल", "नई दिल्ली", "अहमदाबाद", "इंदौर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Indian state launched 'Mukhyamantri Farmer Pension Scheme'?",
    "question_hi": "मुख्यमंत्री किसान पेंशन योजना किस राज्य ने शुरू की?",
    "options_en": ["Odisha", "Chhattisgarh", "Jharkhand", "Telangana"],
    "options_hi": ["ओडिशा", "छत्तीसगढ़", "झारखंड", "तेलंगाना"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Indian city hosted the National Smart Governance Summit?",
    "question_hi": "राष्ट्रीय स्मार्ट गवर्नेंस शिखर सम्मेलन किस शहर में हुआ?",
    "options_en": ["Indore", "Surat", "Bhopal", "New Delhi"],
    "options_hi": ["इंदौर", "सूरत", "भोपाल", "नई दिल्ली"],
    "answer_en": "Indore",
    "answer_hi": "इंदौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Indian state launched 'Mukhyamantri Free Medicine Scheme'?",
    "question_hi": "मुख्यमंत्री मुफ्त दवा योजना किस राज्य ने शुरू की?",
    "options_en": ["Rajasthan", "Tamil Nadu", "Kerala", "Delhi"],
    "options_hi": ["राजस्थान", "तमिलनाडु", "केरल", "दिल्ली"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Indian city hosted the National Handicrafts Expo 2024?",
    "question_hi": "राष्ट्रीय हस्तशिल्प एक्सपो 2024 किस शहर में हुआ?",
    "options_en": ["Surajkund", "Jaipur", "New Delhi", "Bhubaneswar"],
    "options_hi": ["सूरजकुंड", "जयपुर", "नई दिल्ली", "भुवनेश्वर"],
    "answer_en": "Surajkund",
    "answer_hi": "सूरजकुंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Indian state topped the Agricultural Growth Rate 2024?",
    "question_hi": "कृषि विकास दर 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Madhya Pradesh", "Punjab", "Haryana", "Uttar Pradesh"],
    "options_hi": ["मध्य प्रदेश", "पंजाब", "हरियाणा", "उत्तर प्रदेश"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Indian city hosted the National Road Safety Conference?",
    "question_hi": "राष्ट्रीय सड़क सुरक्षा सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Nagpur", "Jaipur", "Chandigarh"],
    "options_hi": ["नई दिल्ली", "नागपुर", "जयपुर", "चंडीगढ़"],
    "answer_en": "Nagpur",
    "answer_hi": "नागपुर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Indian state launched 'Mukhyamantri Youth Startup Scheme'?",
    "question_hi": "मुख्यमंत्री युवा स्टार्टअप योजना किस राज्य ने शुरू की?",
    "options_en": ["Gujarat", "Uttar Pradesh", "Haryana", "Karnataka"],
    "options_hi": ["गुजरात", "उत्तर प्रदेश", "हरियाणा", "कर्नाटक"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Indian city hosted the National Logistics Summit 2024?",
    "question_hi": "राष्ट्रीय लॉजिस्टिक्स शिखर सम्मेलन 2024 किस शहर में हुआ?",
    "options_en": ["Mumbai", "New Delhi", "Gurugram", "Ahmedabad"],
    "options_hi": ["मुंबई", "नई दिल्ली", "गुरुग्राम", "अहमदाबाद"],
    "answer_en": "Gurugram",
    "answer_hi": "गुरुग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Indian state topped the Women Empowerment Index 2024?",
    "question_hi": "महिला सशक्तिकरण सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Kerala", "Tamil Nadu", "Himachal Pradesh", "Delhi"],
    "options_hi": ["केरल", "तमिलनाडु", "हिमाचल प्रदेश", "दिल्ली"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Indian city hosted the National Innovation Awards ceremony?",
    "question_hi": "राष्ट्रीय नवाचार पुरस्कार समारोह किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bengaluru", "Hyderabad", "Pune"],
    "options_hi": ["नई दिल्ली", "बेंगलुरु", "हैदराबाद", "पुणे"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Indian state launched 'Mukhyamantri Green Energy Mission'?",
    "question_hi": "मुख्यमंत्री ग्रीन एनर्जी मिशन किस राज्य ने शुरू किया?",
    "options_en": ["Gujarat", "Rajasthan", "Tamil Nadu", "Karnataka"],
    "options_hi": ["गुजरात", "राजस्थान", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Indian city hosted the National Food Processing Summit?",
    "question_hi": "राष्ट्रीय खाद्य प्रसंस्करण शिखर सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Lucknow", "Indore", "Chandigarh"],
    "options_hi": ["नई दिल्ली", "लखनऊ", "इंदौर", "चंडीगढ़"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Indian state topped the Digital Governance Index 2024?",
    "question_hi": "डिजिटल गवर्नेंस इंडेक्स 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Karnataka", "Kerala", "Gujarat", "Tamil Nadu"],
    "options_hi": ["कर्नाटक", "केरल", "गुजरात", "तमिलनाडु"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Indian city hosted the National Skill Development Conference?",
    "question_hi": "राष्ट्रीय कौशल विकास सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Gurugram", "Bhopal", "Pune"],
    "options_hi": ["नई दिल्ली", "गुरुग्राम", "भोपाल", "पुणे"],
    "answer_en": "Gurugram",
    "answer_hi": "गुरुग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Indian state launched 'Mukhyamantri Rural Employment Scheme'?",
    "question_hi": "मुख्यमंत्री ग्रामीण रोजगार योजना किस राज्य ने शुरू की?",
    "options_en": ["Chhattisgarh", "Jharkhand", "Odisha", "Bihar"],
    "options_hi": ["छत्तीसगढ़", "झारखंड", "ओडिशा", "बिहार"],
    "answer_en": "Chhattisgarh",
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Indian city hosted the National Rural Development Summit?",
    "question_hi": "राष्ट्रीय ग्रामीण विकास शिखर सम्मेलन किस शहर में हुआ?",
    "options_en": ["Patna", "Ranchi", "Raipur", "Bhubaneswar"],
    "options_hi": ["पटना", "रांची", "रायपुर", "भुवनेश्वर"],
    "answer_en": "Bhubaneswar",
    "answer_hi": "भुवनेश्वर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Indian state launched 'Mukhyamantri Free Bus Scheme for Women'?",
    "question_hi": "महिलाओं के लिए मुफ्त बस योजना किस राज्य ने शुरू की?",
    "options_en": ["Karnataka", "Delhi", "Tamil Nadu", "Punjab"],
    "options_hi": ["कर्नाटक", "दिल्ली", "तमिलनाडु", "पंजाब"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Indian city hosted the National Cooperative Conference?",
    "question_hi": "राष्ट्रीय सहकारिता सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Anand", "Ahmedabad", "Jaipur"],
    "options_hi": ["नई दिल्ली", "आनंद", "अहमदाबाद", "जयपुर"],
    "answer_en": "Anand",
    "answer_hi": "आनंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Indian state topped the Tourism Index 2024?",
    "question_hi": "पर्यटन सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Tamil Nadu", "Uttar Pradesh", "Kerala", "Rajasthan"],
    "options_hi": ["तमिलनाडु", "उत्तर प्रदेश", "केरल", "राजस्थान"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Indian city hosted the National Electric Mobility Conference?",
    "question_hi": "राष्ट्रीय इलेक्ट्रिक मोबिलिटी सम्मेलन किस शहर में हुआ?",
    "options_en": ["Pune", "Bengaluru", "New Delhi", "Gurugram"],
    "options_hi": ["पुणे", "बेंगलुरु", "नई दिल्ली", "गुरुग्राम"],
    "answer_en": "Pune",
    "answer_hi": "पुणे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Education Assurance Scheme'?",
    "question_hi": "मुख्यमंत्री शिक्षा आश्वासन योजना किस राज्य ने शुरू की?",
    "options_en": ["Himachal Pradesh", "Uttarakhand", "Punjab", "Haryana"],
    "options_hi": ["हिमाचल प्रदेश", "उत्तराखंड", "पंजाब", "हरियाणा"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Indian city hosted the National Agriculture Summit?",
    "question_hi": "राष्ट्रीय कृषि शिखर सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Indore", "Nagpur", "Lucknow"],
    "options_hi": ["नई दिल्ली", "इंदौर", "नागपुर", "लखनऊ"],
    "answer_en": "Nagpur",
    "answer_hi": "नागपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Indian state topped the Education Performance Index 2024?",
    "question_hi": "शिक्षा प्रदर्शन सूचकांक 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Kerala", "Tamil Nadu", "Delhi", "Punjab"],
    "options_hi": ["केरल", "तमिलनाडु", "दिल्ली", "पंजाब"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Indian city hosted the National Water Conference?",
    "question_hi": "राष्ट्रीय जल सम्मेलन किस शहर में हुआ?",
    "options_en": ["New Delhi", "Jaipur", "Bhopal", "Gandhinagar"],
    "options_hi": ["नई दिल्ली", "जयपुर", "भोपाल", "गांधीनगर"],
    "answer_en": "Gandhinagar",
    "answer_hi": "गांधीनगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Indian state launched 'Mukhyamantri Nutrition Mission'?",
    "question_hi": "मुख्यमंत्री पोषण मिशन किस राज्य ने शुरू किया?",
    "options_en": ["Madhya Pradesh", "Chhattisgarh", "Odisha", "Jharkhand"],
    "options_hi": ["मध्य प्रदेश", "छत्तीसगढ़", "ओडिशा", "झारखंड"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Indian city hosted the National Public Policy Conference 2024?",
    "question_hi": "राष्ट्रीय सार्वजनिक नीति सम्मेलन 2024 किस शहर में हुआ?",
    "options_en": ["New Delhi", "Bhopal", "Hyderabad", "Pune"],
    "options_hi": ["नई दिल्ली", "भोपाल", "हैदराबाद", "पुणे"],
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