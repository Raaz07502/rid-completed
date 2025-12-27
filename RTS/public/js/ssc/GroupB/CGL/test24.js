const questions = [
  {
    "num":1,
    "question_en": "Who became the youngest Indian chess grandmaster?",
    "question_hi": "सबसे कम उम्र में भारतीय शतरंज ग्रैंडमास्टर कौन बना?",
    "options_en": ["D. Gukesh", "Rameshbabu Praggnanandhaa", "Nihal Sarin", "Raunak Sadhwani"],
    "options_hi": ["डी. गुकेश", "प्रज्ञानानंद", "निहाल सरीन", "रौनक साधवानी"],
    "answer_en": "D. Gukesh",
    "answer_hi": "डी. गुकेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which country hosted the BRICS Women's Business Summit 2025?",
    "question_hi": "ब्रिक्स महिला व्यापार शिखर सम्मेलन 2025 की मेजबानी किस देश ने की?",
    "options_en": ["China", "India", "Brazil", "Egypt"],
    "options_hi": ["चीन", "भारत", "ब्राज़ील", "मिस्र"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which organization launched the 'AI for Earth' conservation initiative?",
    "question_hi": "'एआई फॉर अर्थ' संरक्षण पहल किस संगठन ने शुरू की?",
    "options_en": ["Google", "Microsoft", "UNESCO", "WWF"],
    "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "यूनेस्को", "WWF"],
    "answer_en": "Microsoft",
    "answer_hi": "माइक्रोसॉफ्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which city will host the Asian Games 2030?",
    "question_hi": "एशियाई खेल 2030 की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Doha", "Riyadh", "New Delhi", "Beijing"],
    "options_hi": ["दोहा", "रियाद", "नई दिल्ली", "बीजिंग"],
    "answer_en": "Riyadh",
    "answer_hi": "रियाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "What was the theme of National Science Day 2025?",
    "question_hi": "राष्ट्रीय विज्ञान दिवस 2025 की थीम क्या थी?",
    "options_en": ["Science for Viksit Bharat", "AI for Humanity", "Technology for Peace", "Energy for Tomorrow"],
    "options_hi": ["विकसित भारत के लिए विज्ञान", "मानवता के लिए एआई", "शांति के लिए प्रौद्योगिकी", "कल के लिए ऊर्जा"],
    "answer_en": "Science for Viksit Bharat",
    "answer_hi": "विकसित भारत के लिए विज्ञान",
    "attempted": false,
    "selected": ""
  },

  {
    "num":6,
    "question_en": "Which Indian state hosted the International Millet Festival 2025?",
    "question_hi": "अंतर्राष्ट्रीय मिलेट्स महोत्सव 2025 की मेजबानी किस भारतीय राज्य ने की?",
    "options_en": ["Rajasthan", "Karnataka", "Maharashtra", "Odisha"],
    "options_hi": ["राजस्थान", "कर्नाटक", "महाराष्ट्र", "ओडिशा"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "In 2025, which country became the world's largest electric vehicle market?",
    "question_hi": "2025 में कौन सा देश विश्व का सबसे बड़ा इलेक्ट्रिक वाहन बाजार बना?",
    "options_en": ["USA", "China", "India", "Germany"],
    "options_hi": ["अमेरिका", "चीन", "भारत", "जर्मनी"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Who is the Chairman of DRDO as of 2025?",
    "question_hi": "2025 तक DRDO के अध्यक्ष कौन हैं?",
    "options_en": ["Samir V. Kamat", "G. Satheesh Reddy", "K. Sivan", "Anil Dattatraya"],
    "options_hi": ["समीर वी. कामत", "जी. सतीश रेड्डी", "के. सिवन", "अनिल दत्तात्रय"],
    "answer_en": "Samir V. Kamat",
    "answer_hi": "समीर वी. कामत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which country will host the G20 Summit 2026?",
    "question_hi": "G20 शिखर सम्मेलन 2026 की मेजबानी कौन करेगा?",
    "options_en": ["Brazil", "South Korea", "India", "Italy"],
    "options_hi": ["ब्राज़ील", "दक्षिण कोरिया", "भारत", "इटली"],
    "answer_en": "South Korea",
    "answer_hi": "दक्षिण कोरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which Indian state launched a program named 'AI Shiksha Mitra' for schools?",
    "question_hi": "स्कूलों के लिए 'एआई शिक्षा मित्र' कार्यक्रम किस भारतीय राज्य ने शुरू किया?",
    "options_en": ["Haryana", "Gujarat", "Madhya Pradesh", "Tamil Nadu"],
    "options_hi": ["हरियाणा", "गुजरात", "मध्य प्रदेश", "तमिलनाडु"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which team won the IPL 2024 title?",
    "question_hi": "आईपीएल 2024 का खिताब किस टीम ने जीता?",
    "options_en": ["Kolkata Knight Riders", "Chennai Super Kings", "Mumbai Indians", "Delhi Capitals"],
    "options_hi": ["कोलकाता नाइट राइडर्स", "चेन्नई सुपर किंग्स", "मुंबई इंडियंस", "दिल्ली कैपिटल्स"],
    "answer_en": "Kolkata Knight Riders",
    "answer_hi": "कोलकाता नाइट राइडर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Who authored the book 'Mann Ki Baat: A Social Revolution on Radio'?",
    "question_hi": "'मन की बात: ए सोशल रेवोल्यूशन ऑन रेडियो' किताब के लेखक कौन हैं?",
    "options_en": ["Shashi Shekhar", "Narendra Modi", "Prasoon Joshi", "Smriti Irani"],
    "options_hi": ["शशि शेखर", "नरेंद्र मोदी", "प्रसून जोशी", "स्मृति ईरानी"],
    "answer_en": "Shashi Shekhar",
    "answer_hi": "शशि शेखर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which country recently launched the world's first 6G satellite?",
    "question_hi": "किस देश ने हाल ही में विश्व का पहला 6G उपग्रह लॉन्च किया?",
    "options_en": ["USA", "Japan", "China", "South Korea"],
    "options_hi": ["अमेरिका", "जापान", "चीन", "दक्षिण कोरिया"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which state became the first to implement AI-based ration distribution?",
    "question_hi": "एआई आधारित राशन वितरण लागू करने वाला पहला राज्य कौन सा बना?",
    "options_en": ["Odisha", "Telangana", "Haryana", "Assam"],
    "options_hi": ["ओडिशा", "तेलंगाना", "हरियाणा", "असम"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which city topped the Cleanest City ranking in Swachh Survekshan 2024?",
    "question_hi": "स्वच्छ सर्वेक्षण 2024 में सबसे स्वच्छ शहर कौन सा रहा?",
    "options_en": ["Bhopal", "Surat", "Indore", "Mysuru"],
    "options_hi": ["भोपाल", "सूरत", "इंदौर", "मैसूर"],
    "answer_en": "Indore",
    "answer_hi": "इंदौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which organization released the Global Innovation Index 2024?",
    "question_hi": "ग्लोबल इनोवेशन इंडेक्स 2024 किस संगठन ने जारी किया?",
    "options_en": ["WIPO", "IMF", "World Bank", "WEF"],
    "options_hi": ["WIPO", "IMF", "विश्व बैंक", "WEF"],
    "answer_en": "WIPO",
    "answer_hi": "WIPO",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Who is the current President of the Maldives (2025)?",
    "question_hi": "मालदीव के वर्तमान राष्ट्रपति (2025) कौन हैं?",
    "options_en": ["Mohamed Muizzu", "Ibrahim Solih", "Nasheed Mohamed", "Ahmed Hameed"],
    "options_hi": ["मोहम्मद मुइज्जू", "इब्राहिम सोलिह", "नशीद मोहम्मद", "अहमद हमीद"],
    "answer_en": "Mohamed Muizzu",
    "answer_hi": "मोहम्मद मुइज्जू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian airport became the first to run on 100% solar power?",
    "question_hi": "कौन सा भारतीय हवाईअड्डा 100% सौर ऊर्जा पर चलने वाला पहला हवाईअड्डा बना?",
    "options_en": ["Cochin", "Jaipur", "Hyderabad", "Lucknow"],
    "options_hi": ["कोचीन", "जयपुर", "हैदराबाद", "लखनऊ"],
    "answer_en": "Cochin",
    "answer_hi": "कोचीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which organization released the 'World Happiness Report 2024'?",
    "question_hi": "'वर्ल्ड हैप्पीनेस रिपोर्ट 2024' किस संगठन ने जारी की?",
    "options_en": ["UNDP", "UN Sustainable Development Agency", "WHO", "UNICEF"],
    "options_hi": ["UNDP", "UN सस्टेनेबल डेवलपमेंट एजेंसी", "WHO", "UNICEF"],
    "answer_en": "UN Sustainable Development Agency",
    "answer_hi": "UN सस्टेनेबल डेवलपमेंट एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which planet has been confirmed to have a possible underground ocean in 2024?",
    "question_hi": "2024 में किस ग्रह पर भूमिगत महासागर होने की संभावना की पुष्टि हुई?",
    "options_en": ["Mars", "Mercury", "Venus", "Uranus"],
    "options_hi": ["मंगल", "बुध", "शुक्र", "यूरेनस"],
    "answer_en": "Uranus",
    "answer_hi": "यूरेनस",
    "attempted": false,
    "selected": ""
  },

  {
    "num":21,
    "question_en": "Which country topped the Global Peace Index 2024?",
    "question_hi": "ग्लोबल पीस इंडेक्स 2024 में कौन सा देश शीर्ष पर रहा?",
    "options_en": ["Iceland", "Finland", "New Zealand", "Portugal"],
    "options_hi": ["आइसलैंड", "फिनलैंड", "न्यूजीलैंड", "पुर्तगाल"],
    "answer_en": "Iceland",
    "answer_hi": "आइसलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which state implemented drone-based highway monitoring for the first time?",
    "question_hi": "पहली बार ड्रोन आधारित राजमार्ग निगरानी किस राज्य में लागू हुई?",
    "options_en": ["Maharashtra", "Gujarat", "Haryana", "Tamil Nadu"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "हरियाणा", "तमिलनाडु"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which city will be the host for Youth Olympics 2026?",
    "question_hi": "यूथ ओलंपिक 2026 की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Dakar", "Tokyo", "Sydney", "Paris"],
    "options_hi": ["डाकार", "टोक्यो", "सिडनी", "पेरिस"],
    "answer_en": "Dakar",
    "answer_hi": "डाकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which state launched the 'Electric Mobility Corridor' project?",
    "question_hi": "'इलेक्ट्रिक मोबिलिटी कॉरिडोर' परियोजना किस राज्य ने शुरू की?",
    "options_en": ["Kerala", "Punjab", "Goa", "Rajasthan"],
    "options_hi": ["केरल", "पंजाब", "गोवा", "राजस्थान"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which institute developed India's first AI teacher 'Akshara'?",
    "question_hi": "भारत के पहले एआई शिक्षक 'अक्षरा' का विकास किस संस्थान ने किया?",
    "options_en": ["IIT Bombay", "IIT Madras", "IISc Bangalore", "IIT Delhi"],
    "options_hi": ["IIT बॉम्बे", "IIT मद्रास", "IISc बैंगलोर", "IIT दिल्ली"],
    "answer_en": "IIT Bombay",
    "answer_hi": "IIT बॉम्बे",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which country emerged as India's largest trading partner in 2024?",
    "question_hi": "2024 में भारत का सबसे बड़ा व्यापारिक साझेदार कौन बना?",
    "options_en": ["China", "UAE", "USA", "Russia"],
    "options_hi": ["चीन", "यूएई", "अमेरिका", "रूस"],
    "answer_en": "USA",
    "answer_hi": "अमेरिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Who is the current chairman of SBI (2025)?",
    "question_hi": "SBI के वर्तमान अध्यक्ष (2025) कौन हैं?",
    "options_en": ["Dinesh Khara", "Challa Sreenivasulu Setty", "Arundhati Bhattacharya", "Rajnish Kumar"],
    "options_hi": ["दिनेश खारा", "चल्ला श्रीनिवासुलु सेटी", "अरुंधति भट्टाचार्य", "रजनीश कुमार"],
    "answer_en": "Challa Sreenivasulu Setty",
    "answer_hi": "चल्ला श्रीनिवासुलु सेटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which scheme was launched to raise female labour participation?",
    "question_hi": "महिला श्रम भागीदारी बढ़ाने के लिए कौन सी योजना शुरू की गई?",
    "options_en": ["Shakti Yojana", "Nari Samarth Mission", "Saksham Women Scheme", "Mission Mahila Samridhi"],
    "options_hi": ["शक्ति योजना", "नारी समर्थ मिशन", "सक्षम महिला योजना", "मिशन महिला समृद्धि"],
    "answer_en": "Nari Samarth Mission",
    "answer_hi": "नारी समर्थ मिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which country discovered the new mineral 'Lithionite-23' used in batteries?",
    "question_hi": "बैटरियों में उपयोग होने वाले नए खनिज 'लिथियोनाइट-23' की खोज किस देश ने की?",
    "options_en": ["Australia", "Canada", "Finland", "Brazil"],
    "options_hi": ["ऑस्ट्रेलिया", "कनाडा", "फिनलैंड", "ब्राज़ील"],
    "answer_en": "Canada",
    "answer_hi": "कनाडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which state approved the 'New Start-Up Policy 2025'?",
    "question_hi": "'न्यू स्टार्टअप पॉलिसी 2025' किस राज्य ने मंजूर की?",
    "options_en": ["Gujarat", "Uttar Pradesh", "Assam", "Maharashtra"],
    "options_hi": ["गुजरात", "उत्तर प्रदेश", "असम", "महाराष्ट्र"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Who was awarded the 2024 Nobel Prize in Economics?",
    "question_hi": "2024 का अर्थशास्त्र में नोबेल पुरस्कार किसे मिला?",
    "options_en": ["Aziza Robertson", "Claudia Goldin", "Paul Romer", "Ben Bernanke"],
    "options_hi": ["अज़ीज़ा रॉबर्टसन", "क्लाउडिया गोल्डिन", "पॉल रोमर", "बेन बर्नांके"],
    "answer_en": "Claudia Goldin",
    "answer_hi": "क्लाउडिया गोल्डिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which state introduced 'Drone Didi Yojana' for women?",
    "question_hi": "महिलाओं के लिए 'ड्रोन दीदी योजना' किस राज्य ने शुरू की?",
    "options_en": ["Chhattisgarh", "Odisha", "Haryana", "Bihar"],
    "options_hi": ["छत्तीसगढ़", "ओडिशा", "हरियाणा", "बिहार"],
    "answer_en": "Haryana",
    "answer_hi": "हरियाणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian city launched the 'Smart Water Card' system?",
    "question_hi": "'स्मार्ट वॉटर कार्ड' प्रणाली किस भारतीय शहर में शुरू हुई?",
    "options_en": ["Mumbai", "Surat", "Visakhapatnam", "Kochi"],
    "options_hi": ["मुंबई", "सूरत", "विशाखापट्टनम", "कोच्चि"],
    "answer_en": "Surat",
    "answer_hi": "सूरत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which country won the Hockey Men's Champions Trophy 2024?",
    "question_hi": "हॉकी पुरुष चैंपियंस ट्रॉफी 2024 किस देश ने जीती?",
    "options_en": ["India", "Australia", "Germany", "Belgium"],
    "options_hi": ["भारत", "ऑस्ट्रेलिया", "जर्मनी", "बेल्जियम"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which country developed the world's fastest supercomputer 'Aurora-X'?",
    "question_hi": "विश्व का सबसे तेज सुपरकंप्यूटर 'Aurora-X' किस देश ने विकसित किया?",
    "options_en": ["USA", "Japan", "China", "South Korea"],
    "options_hi": ["अमेरिका", "जापान", "चीन", "दक्षिण कोरिया"],
    "answer_en": "USA",
    "answer_hi": "अमेरिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which state is the largest producer of copper in India?",
    "question_hi": "भारत में तांबे का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Jharkhand", "Karnataka"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "झारखंड", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which space agency launched the 'Starlink Direct 2.0' satellite series?",
    "question_hi": "'स्टारलिंक डायरेक्ट 2.0' उपग्रह श्रृंखला किस अंतरिक्ष एजेंसी ने लॉन्च की?",
    "options_en": ["NASA", "ESA", "SpaceX", "Roscosmos"],
    "options_hi": ["नासा", "ESA", "स्पेसएक्स", "रोस्कोस्मोस"],
    "answer_en": "SpaceX",
    "answer_hi": "स्पेसएक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which state topped the Good Governance Index 2024?",
    "question_hi": "गुड गवर्नेंस इंडेक्स 2024 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Tamil Nadu", "Gujarat", "Maharashtra", "Karnataka"],
    "options_hi": ["तमिलनाडु", "गुजरात", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Who became the CEO of Google in 2025?",
    "question_hi": "2025 में गूगल के सीईओ कौन बने?",
    "options_en": ["Sundar Pichai", "Jeff Dean", "Thomas Kurian", "Satya Nadella"],
    "options_hi": ["सुंदर पिचाई", "जेफ डीन", "थॉमस कुरियन", "सत्य नडेला"],
    "answer_en": "Sundar Pichai",
    "answer_hi": "सुंदर पिचाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which country hosted COP29 Climate Summit?",
    "question_hi": "COP29 जलवायु शिखर सम्मेलन की मेजबानी किस देश ने की?",
    "options_en": ["Azerbaijan", "UAE", "India", "Japan"],
    "options_hi": ["अज़रबैजान", "यूएई", "भारत", "जापान"],
    "answer_en": "Azerbaijan",
    "answer_hi": "अज़रबैजान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian railway station became fully AI-operated?",
    "question_hi": "कौन सा भारतीय रेलवे स्टेशन पूरी तरह एआई संचालित बन गया?",
    "options_en": ["Nagpur", "Gandhinagar", "Varanasi", "Secunderabad"],
    "options_hi": ["नागपुर", "गांधीनगर", "वाराणसी", "सिकंदराबाद"],
    "answer_en": "Varanasi",
    "answer_hi": "वाराणसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Who won the Best Actor award at the National Film Awards 2024?",
    "question_hi": "राष्ट्री फिल्म पुरस्कार 2024 में सर्वश्रेष्ठ अभिनेता का पुरस्कार किसे मिला?",
    "options_en": ["Allu Arjun", "Ranbir Kapoor", "Vicky Kaushal", "Rajinikanth"],
    "options_hi": ["अल्लू अर्जुन", "रणबीर कपूर", "विक्की कौशल", "रजनीकांत"],
    "answer_en": "Allu Arjun",
    "answer_hi": "अल्लू अर्जुन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which bank launched India's first AI-based loan approval system?",
    "question_hi": "भारत की पहली एआई आधारित ऋण स्वीकृति प्रणाली किस बैंक ने शुरू की?",
    "options_en": ["SBI", "HDFC", "ICICI Bank", "Axis Bank"],
    "options_hi": ["एसबीआई", "एचडीएफसी", "आईसीआईसीआई बैंक", "एक्सिस बैंक"],
    "answer_en": "ICICI Bank",
    "answer_hi": "आईसीआईसीआई बैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Who won the 'Time Person of the Year 2024' award?",
    "question_hi": "'टाइम पर्सन ऑफ द ईयर 2024' पुरस्कार किसे मिला?",
    "options_en": ["Taylor Swift", "Volodymyr Zelensky", "Elon Musk", "Jeff Bezos"],
    "options_hi": ["टेलर स्विफ्ट", "वोलोदिमिर जेलेंस्की", "एलन मस्क", "जेफ बेजोस"],
    "answer_en": "Taylor Swift",
    "answer_hi": "टेलर स्विफ्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian city will host 'World Heritage Summit 2025'?",
    "question_hi": "'वर्ल्ड हेरिटेज समिट 2025' की मेजबानी कौन सा भारतीय शहर करेगा?",
    "options_en": ["Delhi", "Varanasi", "Hyderabad", "Udaipur"],
    "options_hi": ["दिल्ली", "वाराणसी", "हैदराबाद", "उदयपुर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which mission aims for India's first space-based power generation?",
    "question_hi": "भारत के पहले अंतरिक्ष आधारित ऊर्जा उत्पादन के लिए कौन सा मिशन है?",
    "options_en": ["Surya Urja Mission", "Solaris Mission", "Shakti Space Mission", "Aditya Power Mission"],
    "options_hi": ["सूर्य ऊर्जा मिशन", "सोलारिस मिशन", "शक्ति स्पेस मिशन", "आदित्य पावर मिशन"],
    "answer_en": "Solaris Mission",
    "answer_hi": "सोलारिस मिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which state ranked first in the 'Startup Ranking of States 2024'?",
    "question_hi": "'स्टार्टअप रैंकिंग ऑफ स्टेट्स 2024' में कौन सा राज्य पहले स्थान पर रहा?",
    "options_en": ["Gujarat", "Maharashtra", "Karnataka", "Telangana"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "कर्नाटक", "तेलंगाना"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which country launched the 'Blue Ocean Diplomacy Initiative'?",
    "question_hi": "'ब्लू ओशन डिप्लोमेसी इनिशिएटिव' किस देश ने शुरू किया?",
    "options_en": ["India", "Sri Lanka", "Japan", "Australia"],
    "options_hi": ["भारत", "श्रीलंका", "जापान", "ऑस्ट्रेलिया"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which bank merged with IDBI Bank in 2024?",
    "question_hi": "2024 में IDBI बैंक का विलय किस बैंक के साथ हुआ?",
    "options_en": ["SBI", "HDFC Bank", "Axis Bank", "None"],
    "options_hi": ["एसबीआई", "एचडीएफसी बैंक", "एक्सिस बैंक", "कोई नहीं"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Where is the 'Global Drone Research Centre' established in India?",
    "question_hi": "भारत में 'ग्लोबल ड्रोन रिसर्च सेंटर' कहाँ स्थापित है?",
    "options_en": ["Ranchi", "Bengaluru", "Hyderabad", "Bhopal"],
    "options_hi": ["रांची", "बेंगलुरु", "हैदराबाद", "भोपाल"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
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