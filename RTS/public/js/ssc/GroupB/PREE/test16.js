const questions = [
  {
    "num": 1,
    "question_en": "What is the study of individual economic behavior called?",
    "question_hi": "व्यक्तिगत आर्थिक व्यवहार के अध्ययन को क्या कहा जाता है?",
    "options_en": ["Microeconomics", "Macroeconomics", "Development Economics", "International Economics"],
    "options_hi": ["सूक्ष्म अर्थशास्त्र", "समष्टि अर्थशास्त्र", "विकास अर्थशास्त्र", "अंतरराष्ट्रीय अर्थशास्त्र"],
    "answer_en": "Microeconomics",
    "answer_hi": "सूक्ष्म अर्थशास्त्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Who is known as the 'Father of Economics'?",
    "question_hi": "'अर्थशास्त्र के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Adam Smith", "John Maynard Keynes", "Karl Marx", "Alfred Marshall"],
    "options_hi": ["एडम स्मिथ", "जॉन मेनार्ड कीन्स", "कार्ल मार्क्स", "अल्फ्रेड मार्शल"],
    "answer_en": "Adam Smith",
    "answer_hi": "एडम स्मिथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which law states that as price increases, quantity demanded decreases?",
    "question_hi": "कौन सा नियम कहता है कि मूल्य बढ़ने पर मांग की मात्रा कम हो जाती है?",
    "options_en": ["Law of Demand", "Law of Supply", "Law of Diminishing Returns", "Law of Variable Proportions"],
    "options_hi": ["मांग का नियम", "पूर्ति का नियम", "ह्रासमान प्रतिफल का नियम", "परिवर्तनशील अनुपात का नियम"],
    "answer_en": "Law of Demand",
    "answer_hi": "मांग का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does GDP stand for?",
    "question_hi": "जीडीपी का पूरा नाम क्या है?",
    "options_en": ["Gross Domestic Product", "Gross Development Product", "Government Domestic Product", "Gross Demand Production"],
    "options_hi": ["सकल घरेलू उत्पाद", "सकल विकास उत्पाद", "सरकारी घरेलू उत्पाद", "सकल मांग उत्पादन"],
    "answer_en": "Gross Domestic Product",
    "answer_hi": "सकल घरेलू उत्पाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which institution is known as the 'lender of last resort'?",
    "question_hi": "किस संस्था को 'अंतिम ऋणदाता' के रूप में जाना जाता है?",
    "options_en": ["Central Bank", "Commercial Bank", "World Bank", "International Monetary Fund"],
    "options_hi": ["केंद्रीय बैंक", "वाणिज्यिक बैंक", "विश्व बैंक", "अंतर्राष्ट्रीय मुद्रा कोष"],
    "answer_en": "Central Bank",
    "answer_hi": "केंद्रीय बैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the main objective of the Reserve Bank of India?",
    "question_hi": "भारतीय रिजर्व बैंक का मुख्य उद्देश्य क्या है?",
    "options_en": ["Monetary stability", "Profit maximization", "Foreign trade promotion", "Industrial development"],
    "options_hi": ["मौद्रिक स्थिरता", "लाभ अधिकतमीकरण", "विदेशी व्यापार संवर्धन", "औद्योगिक विकास"],
    "answer_en": "Monetary stability",
    "answer_hi": "मौद्रिक स्थिरता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tax is levied by the Central Government but collected and appropriated by the States?",
    "question_hi": "कौन सा कर केंद्र सरकार द्वारा लगाया जाता है लेकिन राज्यों द्वारा वसूला और विनियोजित किया जाता है?",
    "options_en": ["Stamp Duty", "Excise Duty", "Service Tax", "Customs Duty"],
    "options_hi": ["स्टाम्प शुल्क", "उत्पाद शुल्क", "सेवा कर", "सीमा शुल्क"],
    "answer_en": "Stamp Duty",
    "answer_hi": "स्टाम्प शुल्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the main function of the World Bank?",
    "question_hi": "विश्व बैंक का मुख्य कार्य क्या है?",
    "options_en": ["Provide loans for development projects", "Regulate international trade", "Control global inflation", "Fix exchange rates"],
    "options_hi": ["विकास परियोजनाओं के लिए ऋण प्रदान करना", "अंतर्राष्ट्रीय व्यापार को विनियमित करना", "वैश्विक मुद्रास्फीति को नियंत्रित करना", "विनिमय दरें निर्धारित करना"],
    "answer_en": "Provide loans for development projects",
    "answer_hi": "विकास परियोजनाओं के लिए ऋण प्रदान करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does NNP stand for?",
    "question_hi": "एनएनपी का पूरा नाम क्या है?",
    "options_en": ["Net National Product", "National Net Production", "New National Product", "National Network Product"],
    "options_hi": ["शुद्ध राष्ट्रीय उत्पाद", "राष्ट्रीय शुद्ध उत्पादन", "नया राष्ट्रीय उत्पाद", "राष्ट्रीय नेटवर्क उत्पाद"],
    "answer_en": "Net National Product",
    "answer_hi": "शुद्ध राष्ट्रीय उत्पाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which committee recommended the introduction of GST in India?",
    "question_hi": "किस समिति ने भारत में जीएसटी की शुरूआत की सिफारिश की थी?",
    "options_en": ["Kelkar Committee", "Raja Chelliah Committee", "Parthasarathi Shome Committee", "N.K. Singh Committee"],
    "options_hi": ["केलकर समिति", "राजा चेल्लैया समिति", "पार्थसारथी शोम समिति", "एन.के. सिंह समिति"],
    "answer_en": "Kelkar Committee",
    "answer_hi": "केलकर समिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the main objective of the 'Make in India' initiative?",
    "question_hi": "'मेक इन इंडिया' पहल का मुख्य उद्देश्य क्या है?",
    "options_en": ["Promote manufacturing in India", "Increase agricultural production", "Boost service sector", "Improve infrastructure"],
    "options_hi": ["भारत में विनिर्माण को बढ़ावा देना", "कृषि उत्पादन बढ़ाना", "सेवा क्षेत्र को बढ़ावा देना", "बुनियादी ढांचे में सुधार करना"],
    "answer_en": "Promote manufacturing in India",
    "answer_hi": "भारत में विनिर्माण को बढ़ावा देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which economist developed the concept of 'Invisible Hand'?",
    "question_hi": "किस अर्थशास्त्री ने 'अदृश्य हाथ' की अवधारणा विकसित की?",
    "options_en": ["Adam Smith", "John Maynard Keynes", "David Ricardo", "Milton Friedman"],
    "options_hi": ["एडम स्मिथ", "जॉन मेनार्ड कीन्स", "डेविड रिकार्डो", "मिल्टन फ्रीडमैन"],
    "answer_en": "Adam Smith",
    "answer_hi": "एडम स्मिथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does CSR stand for in business terminology?",
    "question_hi": "व्यावसायिक शब्दावली में सीएसआर का पूरा नाम क्या है?",
    "options_en": ["Corporate Social Responsibility", "Corporate Service Ratio", "Company Social Resource", "Corporate Statutory Requirement"],
    "options_hi": ["कॉर्पोरेट सामाजिक उत्तरदायित्व", "कॉर्पोरेट सेवा अनुपात", "कंपनी सामाजिक संसाधन", "कॉर्पोरेट वैधानिक आवश्यकता"],
    "answer_en": "Corporate Social Responsibility",
    "answer_hi": "कॉर्पोरेट सामाजिक उत्तरदायित्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which sector contributes the maximum to India's GDP?",
    "question_hi": "भारत की जीडीपी में किस क्षेत्र का योगदान सबसे अधिक है?",
    "options_en": ["Service Sector", "Agricultural Sector", "Industrial Sector", "Manufacturing Sector"],
    "options_hi": ["सेवा क्षेत्र", "कृषि क्षेत्र", "औद्योगिक क्षेत्र", "विनिर्माण क्षेत्र"],
    "answer_en": "Service Sector",
    "answer_hi": "सेवा क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the main instrument of monetary policy used by RBI?",
    "question_hi": "आरबीआई द्वारा उपयोग की जाने वाली मौद्रिक नीति का मुख्य उपकरण क्या है?",
    "options_en": ["Repo Rate", "CRR", "SLR", "Bank Rate"],
    "options_hi": ["रिपो रेट", "सीआरआर", "एसएलआर", "बैंक दर"],
    "answer_en": "Repo Rate",
    "answer_hi": "रिपो रेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Five Year Plan gave emphasis on 'Garibi Hatao'?",
    "question_hi": "किस पंचवर्षीय योजना ने 'गरीबी हटाओ' पर जोर दिया?",
    "options_en": ["Fifth Five Year Plan", "Fourth Five Year Plan", "Sixth Five Year Plan", "Seventh Five Year Plan"],
    "options_hi": ["पाँचवीं पंचवर्षीय योजना", "चौथी पंचवर्षीय योजना", "छठी पंचवर्षीय योजना", "सातवीं पंचवर्षीय योजना"],
    "answer_en": "Fifth Five Year Plan",
    "answer_hi": "पाँचवीं पंचवर्षीय योजना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does NITI Aayog stand for?",
    "question_hi": "नीति आयोग का पूरा नाम क्या है?",
    "options_en": ["National Institution for Transforming India", "National Institute for Technology and Innovation", "National Integration for Transforming India", "National Initiative for Technological India"],
    "options_hi": ["राष्ट्रीय भारत परिवर्तन संस्थान", "राष्ट्रीय प्रौद्योगिकी और नवाचार संस्थान", "राष्ट्रीय भारत परिवर्तन एकीकरण", "राष्ट्रीय प्रौद्योगिकी भारत पहल"],
    "answer_en": "National Institution for Transforming India",
    "answer_hi": "राष्ट्रीय भारत परिवर्तन संस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which economic concept is also known as 'Gossen's First Law'?",
    "question_hi": "किस आर्थिक अवधारणा को 'गोसेन का पहला नियम' भी कहा जाता है?",
    "options_en": ["Law of Diminishing Marginal Utility", "Law of Demand", "Law of Supply", "Law of Returns"],
    "options_hi": ["ह्रासमान सीमांत उपयोगिता का नियम", "मांग का नियम", "पूर्ति का नियम", "प्रतिफल का नियम"],
    "answer_en": "Law of Diminishing Marginal Utility",
    "answer_hi": "ह्रासमान सीमांत उपयोगिता का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the currency of the European Union?",
    "question_hi": "यूरोपीय संघ की मुद्रा क्या है?",
    "options_en": ["Euro", "Pound", "Franc", "Mark"],
    "options_hi": ["यूरो", "पाउंड", "फ़्रैंक", "मार्क"],
    "answer_en": "Euro",
    "answer_hi": "यूरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the largest stock exchange in India?",
    "question_hi": "भारत का सबसे बड़ा स्टॉक एक्सचेंज कौन सा है?",
    "options_en": ["Bombay Stock Exchange (BSE)", "National Stock Exchange (NSE)", "Calcutta Stock Exchange", "Delhi Stock Exchange"],
    "options_hi": ["बॉम्बे स्टॉक एक्सचेंज (बीएसई)", "नेशनल स्टॉक एक्सचेंज (एनएसई)", "कलकत्ता स्टॉक एक्सचेंज", "दिल्ली स्टॉक एक्सचेंज"],
    "answer_en": "Bombay Stock Exchange (BSE)",
    "answer_hi": "बॉम्बे स्टॉक एक्सचेंज (बीएसई)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does FDI stand for?",
    "question_hi": "एफडीआई का पूरा नाम क्या है?",
    "options_en": ["Foreign Direct Investment", "Foreign Domestic Investment", "Financial Direct Investment", "Foreign Development Investment"],
    "options_hi": ["प्रत्यक्ष विदेशी निवेश", "विदेशी घरेलू निवेश", "वित्तीय प्रत्यक्ष निवेश", "विदेशी विकास निवेश"],
    "answer_en": "Foreign Direct Investment",
    "answer_hi": "प्रत्यक्ष विदेशी निवेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which tax was introduced as a replacement for VAT?",
    "question_hi": "किस कर को वैट के स्थान पर पेश किया गया था?",
    "options_en": ["GST", "Service Tax", "Excise Duty", "Customs Duty"],
    "options_hi": ["जीएसटी", "सेवा कर", "उत्पाद शुल्क", "सीमा शुल्क"],
    "answer_en": "GST",
    "answer_hi": "जीएसटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the main function of SEBI?",
    "question_hi": "सेबी का मुख्य कार्य क्या है?",
    "options_en": ["Regulate securities market", "Control inflation", "Manage foreign exchange", "Regulate banking sector"],
    "options_hi": ["प्रतिभूति बाजार को विनियमित करना", "मुद्रास्फीति को नियंत्रित करना", "विदेशी मुद्रा का प्रबंधन करना", "बैंकिंग क्षेत्र को विनियमित करना"],
    "answer_en": "Regulate securities market",
    "answer_hi": "प्रतिभूति बाजार को विनियमित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which committee recommended the formation of NITI Aayog?",
    "question_hi": "किस समिति ने नीति आयोग के गठन की सिफारिश की थी?",
    "options_en": ["Task Force under Arvind Panagariya", "Rangarajan Committee", "Bimal Jalan Committee", "C. Rangarajan Committee"],
    "options_hi": ["अरविंद पनगढ़िया के अधीन टास्क फोर्स", "रंगराजन समिति", "बिमल जालान समिति", "सी. रंगराजन समिति"],
    "answer_en": "Task Force under Arvind Panagariya",
    "answer_hi": "अरविंद पनगढ़िया के अधीन टास्क फोर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does CRR stand for in banking?",
    "question_hi": "बैंकिंग में सीआरआर का पूरा नाम क्या है?",
    "options_en": ["Cash Reserve Ratio", "Credit Reserve Ratio", "Cash Retention Ratio", "Central Reserve Rate"],
    "options_hi": ["नकद आरक्षित अनुपात", "ऋण आरक्षित अनुपात", "नकद प्रतिधारण अनुपात", "केंद्रीय आरक्षित दर"],
    "answer_en": "Cash Reserve Ratio",
    "answer_hi": "नकद आरक्षित अनुपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the first Indian company to reach $1 trillion market capitalization?",
    "question_hi": "1 ट्रिलियन डॉलर की बाजार पूंजीकरण तक पहुंचने वाली पहली भारतीय कंपनी कौन सी है?",
    "options_en": ["Reliance Industries", "TCS", "Infosys", "HDFC Bank"],
    "options_hi": ["रिलायंस इंडस्ट्रीज", "टीसीएस", "इन्फोसिस", "एचडीएफसी बैंक"],
    "answer_en": "Reliance Industries",
    "answer_hi": "रिलायंस इंडस्ट्रीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the main objective of the 'Digital India' program?",
    "question_hi": "'डिजिटल इंडिया' कार्यक्रम का मुख्य उद्देश्य क्या है?",
    "options_en": ["Digital empowerment and infrastructure", "Agricultural modernization", "Industrial growth", "Export promotion"],
    "options_hi": ["डिजिटल सशक्तिकरण और बुनियादी ढांचा", "कृषि आधुनिकीकरण", "औद्योगिक विकास", "निर्यात संवर्धन"],
    "answer_en": "Digital empowerment and infrastructure",
    "answer_hi": "डिजिटल सशक्तिकरण और बुनियादी ढांचा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which economic term describes a situation of persistent rise in general price level?",
    "question_hi": "कौन सा आर्थिक शब्द सामान्य कीमत स्तर में लगातार वृद्धि की स्थिति का वर्णन करता है?",
    "options_en": ["Inflation", "Deflation", "Recession", "Stagflation"],
    "options_hi": ["मुद्रास्फीति", "अपस्फीति", "मंदी", "स्टैगफ्लेशन"],
    "answer_en": "Inflation",
    "answer_hi": "मुद्रास्फीति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does NPA stand for in banking sector?",
    "question_hi": "बैंकिंग क्षेत्र में एनपीए का पूरा नाम क्या है?",
    "options_en": ["Non-Performing Asset", "Non-Payment Account", "National Payment Agency", "Non-Productive Asset"],
    "options_hi": ["गैर-निष्पादित परिसंपत्ति", "गैर-भुगतान खाता", "राष्ट्रीय भुगतान एजेंसी", "गैर-उत्पादक परिसंपत्ति"],
    "answer_en": "Non-Performing Asset",
    "answer_hi": "गैर-निष्पादित परिसंपत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Indian state has the highest per capita income?",
    "question_hi": "किस भारतीय राज्य की प्रति व्यक्ति आय सबसे अधिक है?",
    "options_en": ["Goa", "Delhi", "Haryana", "Maharashtra"],
    "options_hi": ["गोवा", "दिल्ली", "हरियाणा", "महाराष्ट्र"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the full form of IMF?",
    "question_hi": "आईएमएफ का पूरा नाम क्या है?",
    "options_en": ["International Monetary Fund", "International Money Fund", "International Market Fund", "Indian Monetary Fund"],
    "options_hi": ["अंतर्राष्ट्रीय मुद्रा कोष", "अंतर्राष्ट्रीय धन कोष", "अंतर्राष्ट्रीय बाजार कोष", "भारतीय मुद्रा कोष"],
    "answer_en": "International Monetary Fund",
    "answer_hi": "अंतर्राष्ट्रीय मुद्रा कोष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which economic concept is measured by the Gini coefficient?",
    "question_hi": "किस आर्थिक अवधारणा को जिनी गुणांक द्वारा मापा जाता है?",
    "options_en": ["Income inequality", "Poverty rate", "Unemployment rate", "Inflation rate"],
    "options_hi": ["आय असमानता", "गरीबी दर", "बेरोजगारी दर", "मुद्रास्फीति दर"],
    "answer_en": "Income inequality",
    "answer_hi": "आय असमानता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does MSP stand for in agricultural context?",
    "question_hi": "कृषि संदर्भ में एमएसपी का पूरा नाम क्या है?",
    "options_en": ["Minimum Support Price", "Maximum Selling Price", "Market Stabilization Price", "Minimum Selling Price"],
    "options_hi": ["न्यूनतम समर्थन मूल्य", "अधिकतम बिक्री मूल्य", "बाजार स्थिरीकरण मूल्य", "न्यूनतम बिक्री मूल्य"],
    "answer_en": "Minimum Support Price",
    "answer_hi": "न्यूनतम समर्थन मूल्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Indian economist won the Nobel Prize in 1998?",
    "question_hi": "किस भारतीय अर्थशास्त्री ने 1998 में नोबेल पुरस्कार जीता?",
    "options_en": ["Amartya Sen", "Jagdish Bhagwati", "C. Rangarajan", "Mammohan Singh"],
    "options_hi": ["अमर्त्य सेन", "जगदीश भगवती", "सी. रंगराजन", "मनमोहन सिंह"],
    "answer_en": "Amartya Sen",
    "answer_hi": "अमर्त्य सेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the main objective of the 'Pradhan Mantri Jan Dhan Yojana'?",
    "question_hi": "'प्रधानमंत्री जन धन योजना' का मुख्य उद्देश्य क्या है?",
    "options_en": ["Financial inclusion", "Housing for all", "Health insurance", "Education for all"],
    "options_hi": ["वित्तीय समावेशन", "सभी के लिए आवास", "स्वास्थ्य बीमा", "सभी के लिए शिक्षा"],
    "answer_en": "Financial inclusion",
    "answer_hi": "वित्तीय समावेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which organization publishes the 'World Economic Outlook' report?",
    "question_hi": "कौन सा संगठन 'विश्व आर्थिक परिदृश्य' रिपोर्ट प्रकाशित करता है?",
    "options_en": ["International Monetary Fund", "World Bank", "World Economic Forum", "United Nations"],
    "options_hi": ["अंतर्राष्ट्रीय मुद्रा कोष", "विश्व बैंक", "विश्व आर्थिक मंच", "संयुक्त राष्ट्र"],
    "answer_en": "International Monetary Fund",
    "answer_hi": "अंतर्राष्ट्रीय मुद्रा कोष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does VAT stand for?",
    "question_hi": "वैट का पूरा नाम क्या है?",
    "options_en": ["Value Added Tax", "Value Adjustment Tax", "Variable Amount Tax", "Value Assessment Tax"],
    "options_hi": ["मूल्य वर्धित कर", "मूल्य समायोजन कर", "परिवर्तनशील राशि कर", "मूल्य मूल्यांकन कर"],
    "answer_en": "Value Added Tax",
    "answer_hi": "मूल्य वर्धित कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Indian city is known as the 'Financial Capital of India'?",
    "question_hi": "किस भारतीय शहर को 'भारत की वित्तीय राजधानी' के रूप में जाना जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the main function of the 'Comptroller and Auditor General' of India?",
    "question_hi": "भारत के 'नियंत्रक और महालेखा परीक्षक' का मुख्य कार्य क्या है?",
    "options_en": ["Audit government accounts", "Control government expenditure", "Prepare government budget", "Collect government taxes"],
    "options_hi": ["सरकारी खातों का लेखा परीक्षण", "सरकारी व्यय को नियंत्रित करना", "सरकारी बजट तैयार करना", "सरकारी कर एकत्र करना"],
    "answer_en": "Audit government accounts",
    "answer_hi": "सरकारी खातों का लेखा परीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which economic policy was introduced by Dr. Manmohan Singh in 1991?",
    "question_hi": "1991 में डॉ. मनमोहन सिंह द्वारा कौन सी आर्थिक नीति शुरू की गई थी?",
    "options_en": ["Economic Liberalization", "Green Revolution", "Nationalization of banks", "Five Year Plans"],
    "options_hi": ["आर्थिक उदारीकरण", "हरित क्रांति", "बैंकों का राष्ट्रीयकरण", "पंचवर्षीय योजनाएं"],
    "answer_en": "Economic Liberalization",
    "answer_hi": "आर्थिक उदारीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does PPP stand for in economics?",
    "question_hi": "अर्थशास्त्र में पीपीपी का पूरा नाम क्या है?",
    "options_en": ["Purchasing Power Parity", "Public Private Partnership", "Both A and B", "Product Price Parity"],
    "options_hi": ["क्रय शक्ति समता", "सार्वजनिक निजी भागीदारी", "ए और बी दोनों", "उत्पाद मूल्य समता"],
    "answer_en": "Both A and B",
    "answer_hi": "ए और बी दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the largest public sector bank in India?",
    "question_hi": "भारत का सबसे बड़ा सार्वजनिक क्षेत्र का बैंक कौन सा है?",
    "options_en": ["State Bank of India", "Punjab National Bank", "Bank of Baroda", "Canara Bank"],
    "options_hi": ["भारतीय स्टेट बैंक", "पंजाब नेशनल बैंक", "बैंक ऑफ बड़ौदा", "केनरा बैंक"],
    "answer_en": "State Bank of India",
    "answer_hi": "भारतीय स्टेट बैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the main objective of the 'Mahatma Gandhi National Rural Employment Guarantee Act'?",
    "question_hi": "'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम' का मुख्य उद्देश्य क्या है?",
    "options_en": ["Provide guaranteed employment in rural areas", "Provide free education", "Provide health insurance", "Provide housing facilities"],
    "options_hi": ["ग्रामीण क्षेत्रों में गारंटीकृत रोजगार प्रदान करना", "मुफ्त शिक्षा प्रदान करना", "स्वास्थ्य बीमा प्रदान करना", "आवास सुविधाएं प्रदान करना"],
    "answer_en": "Provide guaranteed employment in rural areas",
    "answer_hi": "ग्रामीण क्षेत्रों में गारंटीकृत रोजगार प्रदान करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which committee recommended the introduction of PAN card in India?",
    "question_hi": "किस समिति ने भारत में पैन कार्ड की शुरूआत की सिफारिश की थी?",
    "options_en": ["Chokshi Committee", "Raja Chelliah Committee", "Kelkar Committee", "Narasimham Committee"],
    "options_hi": ["चोकसी समिति", "राजा चेल्लैया समिति", "केलकर समिति", "नरसिम्हम समिति"],
    "answer_en": "Chokshi Committee",
    "answer_hi": "चोकसी समिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does NRI stand for?",
    "question_hi": "एनआरआई का पूरा नाम क्या है?",
    "options_en": ["Non-Resident Indian", "National Resident Indian", "New Resident Indian", "Non-Registered Indian"],
    "options_hi": ["अनिवासी भारतीय", "राष्ट्रीय निवासी भारतीय", "नया निवासी भारतीय", "अपंजीकृत भारतीय"],
    "answer_en": "Non-Resident Indian",
    "answer_hi": "अनिवासी भारतीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which economic term describes a situation when GDP declines for two consecutive quarters?",
    "question_hi": "कौन सा आर्थिक शब्द उस स्थिति का वर्णन करता है जब जीडीपी लगातार दो तिमाहियों तक गिरती है?",
    "options_en": ["Recession", "Inflation", "Deflation", "Depression"],
    "options_hi": ["मंदी", "मुद्रास्फीति", "अपस्फीति", "अवसाद"],
    "answer_en": "Recession",
    "answer_hi": "मंदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the main function of the 'Insurance Regulatory and Development Authority'?",
    "question_hi": "'बीमा नियामक और विकास प्राधिकरण' का मुख्य कार्य क्या है?",
    "options_en": ["Regulate insurance sector", "Regulate banking sector", "Regulate stock market", "Regulate foreign trade"],
    "options_hi": ["बीमा क्षेत्र को विनियमित करना", "बैंकिंग क्षेत्र को विनियमित करना", "शेयर बाजार को विनियमित करना", "विदेशी व्यापार को विनियमित करना"],
    "answer_en": "Regulate insurance sector",
    "answer_hi": "बीमा क्षेत्र को विनियमित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Indian state is known as the 'Rice Bowl of India'?",
    "question_hi": "किस भारतीय राज्य को 'भारत का धान का कटोरा' कहा जाता है?",
    "options_en": ["Andhra Pradesh", "Punjab", "West Bengal", "Uttar Pradesh"],
    "options_hi": ["आंध्र प्रदेश", "पंजाब", "पश्चिम बंगाल", "उत्तर प्रदेश"],
    "answer_en": "Andhra Pradesh",
    "answer_hi": "आंध्र प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does NASDAQ stand for?",
    "question_hi": "नैस्डैक का पूरा नाम क्या है?",
    "options_en": ["National Association of Securities Dealers Automated Quotations", "North American Securities Dealers Automated Quotations", "National American Securities Dealers Automated Quotations", "North American Stock Dealers Automated Quotations"],
    "options_hi": ["नेशनल एसोसिएशन ऑफ सिक्योरिटीज डीलर्स ऑटोमेटेड कोटेशन्स", "नॉर्थ अमेरिकन सिक्योरिटीज डीलर्स ऑटोमेटेड कोटेशन्स", "नेशनल अमेरिकन सिक्योरिटीज डीलर्स ऑटोमेटेड कोटेशन्स", "नॉर्थ अमेरिकन स्टॉक डीलर्स ऑटोमेटेड कोटेशन्स"],
    "answer_en": "National Association of Securities Dealers Automated Quotations",
    "answer_hi": "नेशनल एसोसिएशन ऑफ सिक्योरिटीज डीलर्स ऑटोमेटेड कोटेशन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which organization publishes the 'Human Development Index'?",
    "question_hi": "कौन सा संगठन 'मानव विकास सूचकांक' प्रकाशित करता है?",
    "options_en": ["United Nations Development Programme", "World Bank", "International Monetary Fund", "World Economic Forum"],
    "options_hi": ["संयुक्त राष्ट्र विकास कार्यक्रम", "विश्व बैंक", "अंतर्राष्ट्रीय मुद्रा कोष", "विश्व आर्थिक मंच"],
    "answer_en": "United Nations Development Programme",
    "answer_hi": "संयुक्त राष्ट्र विकास कार्यक्रम",
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