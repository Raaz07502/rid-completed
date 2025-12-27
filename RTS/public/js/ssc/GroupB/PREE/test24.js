const questions = [
  {
   "num": 1,
    "question_en": "Which gas is used in refrigerator for cooling?",
    "question_hi": "रेफ्रिजरेटर में ठंडक के लिए किस गैस का उपयोग किया जाता है?",
    "options_en": ["Freon", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["फ्रेऑन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Freon",
    "answer_hi": "फ्रेऑन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Which instrument is used to measure blood pressure?",
    "question_hi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Sphygmomanometer", "Thermometer", "Stethoscope", "Barometer"],
    "options_hi": ["स्फिग्मोमैनोमीटर", "थर्मामीटर", "स्टेथोस्कोप", "बैरोमीटर"],
    "answer_en": "Sphygmomanometer",
    "answer_hi": "स्फिग्मोमैनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which vitamin is also known as Riboflavin?",
    "question_hi": "किस विटामिन को राइबोफ्लेविन के नाम से भी जाना जाता है?",
    "options_en": ["Vitamin B2", "Vitamin B1", "Vitamin B6", "Vitamin B12"],
    "options_hi": ["विटामिन B2", "विटामिन B1", "विटामिन B6", "विटामिन B12"],
    "answer_en": "Vitamin B2",
    "answer_hi": "विटामिन B2",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "What is the chemical formula of Water?",
    "question_hi": "जल का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂O", "H₂O₂", "CO₂", "NaCl"],
    "options_hi": ["H₂O", "H₂O₂", "CO₂", "NaCl"],
    "answer_en": "H₂O",
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which metal is used in making electric wires?",
    "question_hi": "इलेक्ट्रिक तार बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Copper", "Iron", "Aluminum", "Silver"],
    "options_hi": ["तांबा", "लोहा", "एल्यूमीनियम", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Which planet is known as the 'Blue Planet'?",
    "question_hi": "किस ग्रह को 'नीला ग्रह' कहा जाता है?",
    "options_en": ["Earth", "Neptune", "Uranus", "Mars"],
    "options_hi": ["पृथ्वी", "नेप्च्यून", "यूरेनस", "मंगल"],
    "answer_en": "Earth",
    "answer_hi": "पृथ्वी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "What is the unit of electric power?",
    "question_hi": "विद्युत शक्ति की इकाई क्या है?",
    "options_en": ["Watt", "Volt", "Ampere", "Ohm"],
    "options_hi": ["वाट", "वोल्ट", "एम्पियर", "ओम"],
    "answer_en": "Watt",
    "answer_hi": "वाट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्बों में कौन सी गैस भरी जाती है?",
    "options_en": ["Argon", "Oxygen", "Hydrogen", "Nitrogen"],
    "options_hi": ["आर्गन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which acid is present in gastric juice?",
    "question_hi": "गैस्ट्रिक जूस में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Hydrochloric acid",
    "answer_hi": "हाइड्रोक्लोरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "What is the chemical symbol of Sodium?",
    "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Na", "So", "Sd", "Sn"],
    "options_hi": ["Na", "So", "Sd", "Sn"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which instrument is used to measure earthquake intensity?",
    "question_hi": "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Seismograph", "Barometer", "Thermometer", "Hygrometer"],
    "options_hi": ["सिस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सिस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Which vitamin deficiency causes Beriberi?",
    "question_hi": "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
    "options_en": ["Vitamin B1", "Vitamin C", "Vitamin D", "Vitamin A"],
    "options_hi": ["विटामिन B1", "विटामिन C", "विटामिन D", "विटामिन A"],
    "answer_en": "Vitamin B1",
    "answer_hi": "विटामिन B1",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "What is the speed of light in vacuum?",
    "question_hi": "निर्वात में प्रकाश की गति क्या है?",
    "options_en": ["3 × 10^8 m/s", "3 × 10^5 m/s", "3 × 10^6 m/s", "3 × 10^3 m/s"],
    "options_hi": ["3 × 10^8 मीटर/सेकंड", "3 × 10^5 मीटर/सेकंड", "3 × 10^6 मीटर/सेकंड", "3 × 10^3 मीटर/सेकंड"],
    "answer_en": "3 × 10^8 m/s",
    "answer_hi": "3 × 10^8 मीटर/सेकंड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने के यंत्रों में कौन सी गैस का उपयोग किया जाता है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "What is the chemical formula of Methane?",
    "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
    "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    "answer_en": "CH₄",
    "answer_hi": "CH₄",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Mercury", "Iron", "Copper", "Gold"],
    "options_hi": ["पारा", "लोहा", "तांबा", "सोना"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "What is the SI unit of temperature?",
    "question_hi": "तापमान की SI इकाई क्या है?",
    "options_en": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
    "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकिन"],
    "answer_en": "Kelvin",
    "answer_hi": "केल्विन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर द्वारा कौन सा विटामिन उत्पन्न किया जाता है?",
    "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "What is the chemical symbol of Iron?",
    "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Fe", "Ir", "In", "Io"],
    "options_hi": ["Fe", "Ir", "In", "Io"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which gas is known as 'Laughing Gas'?",
    "question_hi": "किस गैस को 'हंसाने वाली गैस' कहा जाता है?",
    "options_en": ["Nitrous oxide", "Carbon monoxide", "Sulfur dioxide", "Ammonia"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड", "अमोनिया"],
    "answer_en": "Nitrous oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "What is the chemical formula of Sulfuric Acid?",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
    "options_hi": ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
    "answer_en": "H₂SO₄",
    "answer_hi": "H₂SO₄",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Which metal is used in making mirrors?",
    "question_hi": "दर्पण बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Silver", "Aluminum", "Copper", "Gold"],
    "options_hi": ["चांदी", "एल्यूमीनियम", "तांबा", "सोना"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "What is the unit of frequency?",
    "question_hi": "आवृत्ति की इकाई क्या है?",
    "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "जूल"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which vitamin deficiency causes Night Blindness?",
    "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "What is the chemical symbol of Gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Au", "Ag", "Gd", "Go"],
    "options_hi": ["Au", "Ag", "Gd", "Go"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which instrument is used to measure humidity?",
    "question_hi": "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
    "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
    "answer_en": "Hygrometer",
    "answer_hi": "हाइग्रोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "Which gas is used in balloons for flying?",
    "question_hi": "उड़ने वाले गुब्बारों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "What is the chemical formula of Carbon Dioxide?",
    "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
    "options_en": ["CO₂", "CO", "C₂O", "C₂O₂"],
    "options_hi": ["CO₂", "CO", "C₂O", "C₂O₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "Which metal is used in making coins?",
    "question_hi": "सिक्के बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Copper", "Iron", "Aluminum", "Silver"],
    "options_hi": ["तांबा", "लोहा", "एल्यूमीनियम", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
    "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पियर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "Which vitamin deficiency causes Scurvy?",
    "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
    "options_en": ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin B"],
    "options_hi": ["विटामिन C", "विटामिन D", "विटामिन A", "विटामिन B"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "What is the chemical symbol of Silver?",
    "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Si", "Sr"],
    "options_hi": ["Ag", "Au", "Si", "Sr"],
    "answer_en": "Ag",
    "answer_hi": "Ag",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "Which instrument is used to measure wind speed?",
    "question_hi": "हवा की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Anemometer", "Barometer", "Thermometer", "Hygrometer"],
    "options_hi": ["एनीमोमीटर", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
    "answer_en": "Anemometer",
    "answer_hi": "एनीमोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Acetylene", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["एसिटिलीन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Acetylene",
    "answer_hi": "एसिटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "What is the chemical formula of Ammonia?",
    "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
    "options_en": ["NH₃", "NH₄", "N₂H₄", "N₂H₂"],
    "options_hi": ["NH₃", "NH₄", "N₂H₄", "N₂H₂"],
    "answer_en": "NH₃",
    "answer_hi": "NH₃",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which metal is used in making electric fuses?",
    "question_hi": "इलेक्ट्रिक फ्यूज बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Tin and Lead", "Copper", "Iron", "Aluminum"],
    "options_hi": ["टिन और लेड", "तांबा", "लोहा", "एल्यूमीनियम"],
    "answer_en": "Tin and Lead",
    "answer_hi": "टिन और लेड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Newton", "Joule", "Watt", "Pascal"],
    "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which vitamin deficiency causes Rickets?",
    "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
    "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B"],
    "options_hi": ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन B"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "What is the chemical symbol of Potassium?",
    "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["K", "P", "Po", "Pt"],
    "options_hi": ["K", "P", "Po", "Pt"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which instrument is used to measure electric current?",
    "question_hi": "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
    "options_hi": ["एमीटर", "वोल्टमीटर", "ओममीटर", "गैल्वेनोमीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Which gas is used in making soda water?",
    "question_hi": "सोडा वाटर बनाने में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "What is the chemical formula of Hydrogen Peroxide?",
    "question_hi": "हाइड्रोजन परॉक्साइड का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂O₂", "H₂O", "HO₂", "H₂O₃"],
    "options_hi": ["H₂O₂", "H₂O", "HO₂", "H₂O₃"],
    "answer_en": "H₂O₂",
    "answer_hi": "H₂O₂",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Which metal is used in making aircraft bodies?",
    "question_hi": "विमान के शरीर बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Aluminum", "Iron", "Copper", "Silver"],
    "options_hi": ["एल्यूमीनियम", "लोहा", "तांबा", "चांदी"],
    "answer_en": "Aluminum",
    "answer_hi": "एल्यूमीनियम",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "What is the SI unit of pressure?",
    "question_hi": "दबाव की SI इकाई क्या है?",
    "options_en": ["Pascal", "Newton", "Joule", "Watt"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Which vitamin deficiency causes Pellagra?",
    "question_hi": "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
    "options_en": ["Vitamin B3", "Vitamin C", "Vitamin D", "Vitamin A"],
    "options_hi": ["विटामिन B3", "विटामिन C", "विटामिन D", "विटामिन A"],
    "answer_en": "Vitamin B3",
    "answer_hi": "विटामिन B3",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "What is the chemical symbol of Lead?",
    "question_hi": "लेड का रासायनिक प्रतीक क्या है?",
    "options_en": ["Pb", "Ld", "Le", "Pl"],
    "options_hi": ["Pb", "Ld", "Le", "Pl"],
    "answer_en": "Pb",
    "answer_hi": "Pb",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "Which instrument is used to measure voltage?",
    "question_hi": "वोल्टेज मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
    "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
    "answer_en": "Voltmeter",
    "answer_hi": "वोल्टमीटर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which gas is used in making Vanaspati Ghee?",
    "question_hi": "वनस्पति घी बनाने में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
    "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "What is the chemical formula of Common Salt?",
    "question_hi": "सामान्य नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCO₃", "Na₂CO₃"],
    "options_hi": ["NaCl", "KCl", "CaCO₃", "Na₂CO₃"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
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