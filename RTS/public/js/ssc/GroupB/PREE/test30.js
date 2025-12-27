const questions = [
  {
   "num": 1,
    "question_en": "Which country recently launched 'Aditya-L1' mission to study the Sun?",
    "question_hi": "हाल ही में सूर्य का अध्ययन करने के लिए 'आदित्य-एल1' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "Japan", "European Union"],
    "options_hi": ["भारत", "यूएसए", "जापान", "यूरोपीय संघ"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Who was appointed as the new Chief of Naval Staff in 2023?",
    "question_hi": "2023 में नौसेना प्रमुख के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Admiral R. Hari Kumar", "Admiral Karambir Singh", "Admiral Sunil Lanba", "Admiral D.K. Joshi"],
    "options_hi": ["एडमिरल आर. हरि कुमार", "एडमिरल करमबीर सिंह", "एडमिरल सुनिल लांबा", "एडमिरल डी.के. जोशी"],
    "answer_en": "Admiral R. Hari Kumar",
    "answer_hi": "एडमिरल आर. हरि कुमार",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which Indian state implemented the 'Kisan Samman Nidhi Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'किसान सम्मान निधि योजना' लागू की?",
    "options_en": ["Central Government Scheme", "Uttar Pradesh", "Punjab", "Haryana"],
    "options_hi": ["केंद्र सरकार योजना", "उत्तर प्रदेश", "पंजाब", "हरियाणा"],
    "answer_en": "Central Government Scheme",
    "answer_hi": "केंद्र सरकार योजना",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "Which city hosted the COP27 Climate Change Conference?",
    "question_hi": "COP27 जलवायु परिवर्तन सम्मेलन की मेजबानी किस शहर ने की?",
    "options_en": ["Sharm el-Sheikh", "Glasgow", "Paris", "Madrid"],
    "options_hi": ["शर्म अल-शेख", "ग्लासगो", "पेरिस", "मैड्रिड"],
    "answer_en": "Sharm el-Sheikh",
    "answer_hi": "शर्म अल-शेख",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Who won the 2023 Women's World Cup in Cricket?",
    "question_hi": "2023 महिला विश्व कप क्रिकेट किसने जीता?",
    "options_en": ["Australia", "England", "India", "New Zealand"],
    "options_hi": ["ऑस्ट्रेलिया", "इंग्लैंड", "भारत", "न्यूज़ीलैंड"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 6,
    "question_en": "Which Indian state launched 'Bhavantar Bhugtan Yojana' for farmers?",
    "question_hi": "किस भारतीय राज्य ने किसानों के लिए 'भावांतर भुगतान योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Maharashtra", "Karnataka", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "कर्नाटक", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 7,
    "question_en": "Who is the current Union Minister of External Affairs?",
    "question_hi": "वर्तमान केंद्रीय विदेश मंत्री कौन हैं?",
    "options_en": ["S. Jaishankar", "Subrahmanyam Jaishankar", "Dr. S. Jaishankar", "All of the above"],
    "options_hi": ["एस. जयशंकर", "सुब्रह्मण्यम जयशंकर", "डॉ. एस. जयशंकर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 8,
    "question_en": "Which country recently launched 'Artemis Program' for Moon mission?",
    "question_hi": "हाल ही में चंद्रमा मिशन के लिए 'आर्टेमिस कार्यक्रम' किस देश ने लॉन्च किया?",
    "options_en": ["USA", "China", "Russia", "India"],
    "options_hi": ["यूएसए", "चीन", "रूस", "भारत"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 9,
    "question_en": "Who won the 2023 Nobel Prize in Physics?",
    "question_hi": "2023 का भौतिकी का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["Pierre Agostini, Ferenc Krausz, Anne L'Huillier", "Roger Penrose", "Andrea Ghez", "Didier Queloz"],
    "options_hi": ["पियरे एगोस्टिनी, फेरेंक क्रौज़, ऐनी एल'हुइलियर", "रोजर पेनरोज़", "एंड्रिया गेज़", "डिडियर क्वेलोज़"],
    "answer_en": "Pierre Agostini, Ferenc Krausz, Anne L'Huillier",
    "answer_hi": "पियरे एगोस्टिनी, फेरेंक क्रौज़, ऐनी एल'हुइलियर",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 10,
    "question_en": "Which Indian state started 'Mukhyamantri Jal Swavlamban Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री जल स्वावलंबन योजना' शुरू की?",
    "options_en": ["Rajasthan", "Gujarat", "Maharashtra", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Who is the current President of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"],
    "options_hi": ["जो बाइडेन", "डोनाल्ड ट्रम्प", "बराक ओबामा", "कमला हैरिस"],
    "answer_en": "Joe Biden",
    "answer_hi": "जो बाइडेन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Which country recently launched 'Shenzhou-16' manned space mission?",
    "question_hi": "हाल ही में 'शेनझोउ-16' मानव अंतरिक्ष मिशन किस देश ने लॉन्च किया?",
    "options_en": ["China", "USA", "Russia", "India"],
    "options_hi": ["चीन", "यूएसए", "रूस", "भारत"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Who won the 2023 US Open Men's Singles title?",
    "question_hi": "2023 यूएस ओपन पुरुष एकल खिताब किसने जीता?",
    "options_en": ["Novak Djokovic", "Carlos Alcaraz", "Daniil Medvedev", "Rafael Nadal"],
    "options_hi": ["नोवाक जोकोविच", "कार्लोस अल्कराज़", "डेनियल मेदवेदेव", "राफेल नडाल"],
    "answer_en": "Novak Djokovic",
    "answer_hi": "नोवाक जोकोविच",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Which Indian city hosted the 'G20 Tourism Working Group Meeting'?",
    "question_hi": "'जी20 पर्यटन कार्य समूह बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Srinagar", "Leh", "Goa", "Kochi"],
    "options_hi": ["श्रीनगर", "लेह", "गोवा", "कोच्चि"],
    "answer_en": "Srinagar",
    "answer_hi": "श्रीनगर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Who is the current Chief Minister of Delhi?",
    "question_hi": "दिल्ली के वर्तमान मुख्यमंत्री कौन हैं?",
    "options_en": ["Arvind Kejriwal", "Sheila Dikshit", "Manish Sisodia", "Satyaendar Jain"],
    "options_hi": ["अरविंद केजरीवाल", "शीला दीक्षित", "मनीष सिसोदिया", "सत्येंद्र जैन"],
    "answer_en": "Arvind Kejriwal",
    "answer_hi": "अरविंद केजरीवाल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Which country recently launched 'Beresheet-2' lunar mission?",
    "question_hi": "हाल ही में 'बेरेसीट-2' चंद्र मिशन किस देश ने लॉन्च किया?",
    "options_en": ["Israel", "Japan", "South Korea", "UAE"],
    "options_hi": ["इज़राइल", "जापान", "दक्षिण कोरिया", "यूएई"],
    "answer_en": "Israel",
    "answer_hi": "इज़राइल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Who won the 2023 Wimbledon Men's Singles title?",
    "question_hi": "2023 विंबलडन पुरुष एकल खिताब किसने जीता?",
    "options_en": ["Carlos Alcaraz", "Novak Djokovic", "Jannik Sinner", "Nick Kyrgios"],
    "options_hi": ["कार्लोस अल्कराज़", "नोवाक जोकोविच", "जानिक सिनर", "निक किर्गियोस"],
    "answer_en": "Carlos Alcaraz",
    "answer_hi": "कार्लोस अल्कराज़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "Which Indian state implemented 'Mukhyamantri Chhatravritti Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री छात्रवृत्ति योजना' लागू की?",
    "options_en": ["Chhattisgarh", "Jharkhand", "Odisha", "Bihar"],
    "options_hi": ["छत्तीसगढ़", "झारखंड", "ओडिशा", "बिहार"],
    "answer_en": "Chhattisgarh",
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Who is the current Prime Minister of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Rishi Sunak", "Liz Truss", "Boris Johnson", "Keir Starmer"],
    "options_hi": ["ऋषि सुनक", "लिज़ ट्रस", "बोरिस जॉनसन", "कीर स्टार्मर"],
    "answer_en": "Rishi Sunak",
    "answer_hi": "ऋषि सुनक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Which city will host the 2026 Commonwealth Games?",
    "question_hi": "2026 राष्ट्रमंडल खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Victoria, Australia", "Birmingham, UK", "Delhi, India", "Kuala Lumpur, Malaysia"],
    "options_hi": ["विक्टोरिया, ऑस्ट्रेलिया", "बर्मिंघम, यूके", "दिल्ली, भारत", "कुआलालंपुर, मलेशिया"],
    "answer_en": "Victoria, Australia",
    "answer_hi": "विक्टोरिया, ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Who won the 2023 Padma Vibhushan award?",
    "question_hi": "2023 का पद्म विभूषण पुरस्कार किसने जीता?",
    "options_en": ["Mulayam Singh Yadav", "S.M. Krishna", "Dilip Mahalanabis", "All of the above"],
    "options_hi": ["मुलायम सिंह यादव", "एस.एम. कृष्णा", "दिलीप महालनाबिस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "Which Indian state launched 'Mukhyamantri Medhavi Vidyarthi Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री मेधावी विद्यार्थी योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Who is the current President of Russia?",
    "question_hi": "रूस के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Vladimir Putin", "Dmitry Medvedev", "Mikhail Gorbachev", "Boris Yeltsin"],
    "options_hi": ["व्लादिमीर पुतिन", "दिमित्री मेदवेदेव", "मिखाइल गोर्बाचेव", "बोरिस येल्तसिन"],
    "answer_en": "Vladimir Putin",
    "answer_hi": "व्लादिमीर पुतिन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "Which country recently launched 'Hope Probe' to Mars?",
    "question_hi": "हाल ही में मंगल ग्रह पर 'होप प्रोब' किस देश ने लॉन्च किया?",
    "options_en": ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
    "options_hi": ["यूएई", "सऊदी अरबिया", "कतर", "कुवैत"],
    "answer_en": "UAE",
    "answer_hi": "यूएई",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Who won the 2023 French Open Men's Singles title?",
    "question_hi": "2023 फ्रेंच ओपन पुरुष एकल खिताब किसने जीता?",
    "options_en": ["Novak Djokovic", "Rafael Nadal", "Carlos Alcaraz", "Casper Ruud"],
    "options_hi": ["नोवाक जोकोविच", "राफेल नडाल", "कार्लोस अल्कराज़", "कैस्पर रूड"],
    "answer_en": "Novak Djokovic",
    "answer_hi": "नोवाक जोकोविच",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "Which Indian city is known as the 'Silicon Valley of India'?",
    "question_hi": "किस भारतीय शहर को 'भारत की सिलिकॉन वैली' के नाम से जाना जाता है?",
    "options_en": ["Bangalore", "Hyderabad", "Chennai", "Pune"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "चेन्नई", "पुणे"],
    "answer_en": "Bangalore",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Who is the current Union Minister of Defence?",
    "question_hi": "वर्तमान केंद्रीय रक्षा मंत्री कौन हैं?",
    "options_en": ["Rajnath Singh", "Nirmala Sitharaman", "Amit Shah", "Manohar Parrikar"],
    "options_hi": ["राजनाथ सिंह", "निर्मला सीतारमण", "अमित शाह", "मनोहर पर्रीकर"],
    "answer_en": "Rajnath Singh",
    "answer_hi": "राजनाथ सिंह",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "Which country recently launched 'Chang'e-6' lunar mission?",
    "question_hi": "हाल ही में 'चांग'ई-6' चंद्र मिशन किस देश ने लॉन्च किया?",
    "options_en": ["China", "Japan", "South Korea", "India"],
    "options_hi": ["चीन", "जापान", "दक्षिण कोरिया", "भारत"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Who won the 2023 Australian Open Women's Singles title?",
    "question_hi": "2023 ऑस्ट्रेलियन ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Aryna Sabalenka", "Elena Rybakina", "Iga Swiatek", "Coco Gauff"],
    "options_hi": ["आरिना सबलेन्का", "एलेना रायबाकिना", "इगा स्विएटेक", "कोको गॉफ"],
    "answer_en": "Aryna Sabalenka",
    "answer_hi": "आरिना सबलेन्का",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान कल्याण योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Maharashtra"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "महाराष्ट्र"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Who is the current Prime Minister of Canada?",
    "question_hi": "कनाडा के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Justin Trudeau", "Stephen Harper", "Jean Chrétien", "Brian Mulroney"],
    "options_hi": ["जस्टिन ट्रूडो", "स्टीफन हार्पर", "जीन क्रेटिएन", "ब्रायन मुलरोनी"],
    "answer_en": "Justin Trudeau",
    "answer_hi": "जस्टिन ट्रूडो",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "Which city will host the 2024 Winter Youth Olympics?",
    "question_hi": "2024 शीतकालीन युवा ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Gangwon, South Korea", "Beijing, China", "Tokyo, Japan", "Sydney, Australia"],
    "options_hi": ["गैंगवॉन, दक्षिण कोरिया", "बीजिंग, चीन", "टोक्यो, जापान", "सिडनी, ऑस्ट्रेलिया"],
    "answer_en": "Gangwon, South Korea",
    "answer_hi": "गैंगवॉन, दक्षिण कोरिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Who won the 2023 Dadasaheb Phalke Award?",
    "question_hi": "2023 का दादासाहेब फाल्के पुरस्कार किसने जीता?",
    "options_en": ["Waheeda Rehman", "Asha Parekh", "Hema Malini", "Rekha"],
    "options_hi": ["वहीदा रहमान", "आशा पारेख", "हेमा मालिनी", "रेखा"],
    "answer_en": "Waheeda Rehman",
    "answer_hi": "वहीदा रहमान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "Which Indian state implemented 'Mukhyamantri Bal Seva Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री बाल सेवा योजना' लागू की?",
    "options_en": ["Rajasthan", "Gujarat", "Maharashtra", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Who is the current President of France?",
    "question_hi": "फ्रांस के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Jacques Chirac"],
    "options_hi": ["इमैनुएल मैक्रों", "फ्रांस्वा ओलांद", "निकोलस सरकोजी", "जैक्स शिराक"],
    "answer_en": "Emmanuel Macron",
    "answer_hi": "इमैनुएल मैक्रों",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "Which country recently launched 'SLIM' lunar lander mission?",
    "question_hi": "हाल ही में 'SLIM' चंद्र लैंडर मिशन किस देश ने लॉन्च किया?",
    "options_en": ["Japan", "China", "India", "Russia"],
    "options_hi": ["जापान", "चीन", "भारत", "रूस"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Who won the 2023 Wimbledon Women's Singles title?",
    "question_hi": "2023 विंबलडन महिला एकल खिताब किसने जीता?",
    "options_en": ["Marketa Vondrousova", "Ons Jabeur", "Elena Rybakina", "Iga Swiatek"],
    "options_hi": ["मार्केटा वोंदरौसोवा", "ओंस जबूर", "एलेना रायबाकिना", "इगा स्विएटेक"],
    "answer_en": "Marketa Vondrousova",
    "answer_hi": "मार्केटा वोंदरौसोवा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "Which Indian city is known as the 'City of Joy'?",
    "question_hi": "किस भारतीय शहर को 'सिटी ऑफ जॉय' के नाम से जाना जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Who is the current Union Minister of Home Affairs?",
    "question_hi": "वर्तमान केंद्रीय गृह मंत्री कौन हैं?",
    "options_en": ["Amit Shah", "Rajnath Singh", "Nitin Gadkari", "Sushma Swaraj"],
    "options_hi": ["अमित शाह", "राजनाथ सिंह", "नितिन गडकरी", "सुषमा स्वराज"],
    "answer_en": "Amit Shah",
    "answer_hi": "अमित शाह",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "Which country recently launched 'Danuri' lunar orbiter?",
    "question_hi": "हाल ही में 'दानूरी' चंद्र ऑर्बिटर किस देश ने लॉन्च किया?",
    "options_en": ["South Korea", "North Korea", "Japan", "China"],
    "options_hi": ["दक्षिण कोरिया", "उत्तर कोरिया", "जापान", "चीन"],
    "answer_en": "South Korea",
    "answer_hi": "दक्षिण कोरिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Who won the 2023 US Open Women's Singles title?",
    "question_hi": "2023 यूएस ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Coco Gauff", "Aryna Sabalenka", "Karolina Muchova", "Madison Keys"],
    "options_hi": ["कोको गॉफ", "आरिना सबलेन्का", "कारोलिना मुचोवा", "मैडिसन कीज"],
    "answer_en": "Coco Gauff",
    "answer_hi": "कोको गॉफ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Which Indian state launched 'Mukhyamantri Shramik Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री श्रमिक योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Chhattisgarh"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "छत्तीसगढ़"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Who is the current Prime Minister of Australia?",
    "question_hi": "ऑस्ट्रेलिया के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Anthony Albanese", "Scott Morrison", "Malcolm Turnbull", "Tony Abbott"],
    "options_hi": ["एंथनी अल्बनीज", "स्कॉट मॉरिसन", "मैल्कम टर्नबुल", "टोनी एबॉट"],
    "answer_en": "Anthony Albanese",
    "answer_hi": "एंथनी अल्बनीज",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Which city will host the 2027 Asian Games?",
    "question_hi": "2027 एशियाई खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Riyadh, Saudi Arabia", "Doha, Qatar", "Tokyo, Japan", "Seoul, South Korea"],
    "options_hi": ["रियाद, सऊदी अरबिया", "दोहा, कतर", "टोक्यो, जापान", "सियोल, दक्षिण कोरिया"],
    "answer_en": "Riyadh, Saudi Arabia",
    "answer_hi": "रियाद, सऊदी अरबिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Who won the 2023 Ramon Magsaysay Award?",
    "question_hi": "2023 का रेमन मैग्सेसे पुरस्कार किसने जीता?",
    "options_en": ["Korvi Rakshand", "Ravi Kannan", "Eugenio Lina", "All of the above"],
    "options_hi": ["कोरवी रक्षंद", "रवि कन्नन", "यूजेनियो लीना", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Which Indian state implemented 'Mukhyamantri Anna Suraksha Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री अन्न सुरक्षा योजना' लागू की?",
    "options_en": ["Jharkhand", "Bihar", "Uttar Pradesh", "Madhya Pradesh"],
    "options_hi": ["झारखंड", "बिहार", "उत्तर प्रदेश", "मध्य प्रदेश"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Who is the current Chancellor of Germany?",
    "question_hi": "जर्मनी के वर्तमान चांसलर कौन हैं?",
    "options_en": ["Olaf Scholz", "Angela Merkel", "Gerhard Schröder", "Helmut Kohl"],
    "options_hi": ["ओलाफ शोल्ज", "एंजेला मर्केल", "गेरहार्ड श्रोएडर", "हेल्मुट कोहल"],
    "answer_en": "Olaf Scholz",
    "answer_hi": "ओलाफ शोल्ज",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "Which country recently launched 'Hakuto-R' commercial lunar mission?",
    "question_hi": "हाल ही में 'हाकुतो-आर' वाणिज्यिक चंद्र मिशन किस देश ने लॉन्च किया?",
    "options_en": ["Japan", "USA", "China", "India"],
    "options_hi": ["जापान", "यूएसए", "चीन", "भारत"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Who won the 2023 ATP Finals tournament?",
    "question_hi": "2023 एटीपी फाइनल्स टूर्नामेंट किसने जीता?",
    "options_en": ["Novak Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Daniil Medvedev"],
    "options_hi": ["नोवाक जोकोविच", "कार्लोस अल्कराज़", "जानिक सिनर", "डेनियल मेदवेदेव"],
    "answer_en": "Novak Djokovic",
    "answer_hi": "नोवाक जोकोविच",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "Which Indian city is known as the 'City of Lakes'?",
    "question_hi": "किस भारतीय शहर को 'झीलों का शहर' के नाम से जाना जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
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