const questions = [
  {
    "num": 1,
    "question_en": "Which Governor-General introduced the Permanent Settlement in Bengal?",
    "question_hi": "बंगाल में स्थायी बंदोबस्त (Permanent Settlement) किस गवर्नर-जनरल ने लागू किया?",
    "options_en": ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Warren Hastings"],
    "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड डलहौजी", "वारेन हेस्टिंग्स"],
    "answer_en": "Lord Cornwallis",
    "answer_hi": "लॉर्ड कॉर्नवालिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The National Income in India is estimated by which organisation?",
    "question_hi": "भारत में राष्ट्रीय आय का अनुमान किस संस्था द्वारा लगाया जाता है?",
    "options_en": ["NSO", "RBI", "NABARD", "SEBI"],
    "options_hi": ["NSO", "आरबीआई", "नाबार्ड", "सेबी"],
    "answer_en": "NSO",
    "answer_hi": "NSO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Amendment lowered the voting age in India from 21 to 18?",
    "question_hi": "भारत में मतदान की आयु 21 से 18 वर्ष किस संशोधन द्वारा की गई?",
    "options_en": ["61st Amendment", "42nd Amendment", "52nd Amendment", "44th Amendment"],
    "options_hi": ["61वां संशोधन", "42वां संशोधन", "52वां संशोधन", "44वां संशोधन"],
    "answer_en": "61st Amendment",
    "answer_hi": "61वां संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which organelle is responsible for cellular respiration in cells?",
    "question_hi": "कोशिकाओं में श्वसन क्रिया किस कोशिकांग में होती है?",
    "options_en": ["Mitochondria", "Golgi Body", "Ribosome", "Lysosome"],
    "options_hi": ["माइटोकॉन्ड्रिया", "गोल्जी बॉडी", "राइबोसोम", "लाइसोज़ोम"],
    "answer_en": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "In which year was the 'Swachh Bharat Mission' launched?",
    "question_hi": "'स्वच्छ भारत मिशन' किस वर्ष शुरू किया गया?",
    "options_en": ["2014", "2015", "2012", "2010"],
    "options_hi": ["2014", "2015", "2012", "2010"],
    "answer_en": "2014",
    "answer_hi": "2014",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The 'Chipko Movement' is primarily related to what?",
    "question_hi": "'चिपको आंदोलन' मुख्य रूप से किससे संबंधित है?",
    "options_en": ["Forest Conservation", "Women's Rights", "Industrial Labour", "Political Reform"],
    "options_hi": ["वन संरक्षण", "महिला अधिकार", "औद्योगिक श्रम", "राजनीतिक सुधार"],
    "answer_en": "Forest Conservation",
    "answer_hi": "वन संरक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which planet is known as the 'Morning Star'?",
    "question_hi": "किस ग्रह को 'प्रातः तारा' कहा जाता है?",
    "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
    "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who was the founder of the 'Chola Dynasty'?",
    "question_hi": "'चोल वंश' का संस्थापक कौन था?",
    "options_en": ["Vijayalaya Chola", "Rajaraja Chola I", "Rajendra Chola I", "Kulothunga Chola"],
    "options_hi": ["विजयालय चोल", "राजराज चोल प्रथम", "राजेंद्र चोल प्रथम", "कुलोथुंगा चोल"],
    "answer_en": "Vijayalaya Chola",
    "answer_hi": "विजयालय चोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which gas is used in the preparation of soda water?",
    "question_hi": "सोडा वाटर बनाने में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "मीथेन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The 'Battle of Buxar' was fought in which year?",
    "question_hi": "'बक्सर का युद्ध' किस वर्ष लड़ा गया था?",
    "options_en": ["1764", "1757", "1857", "1716"],
    "options_hi": ["1764", "1757", "1857", "1716"],
    "answer_en": "1764",
    "answer_hi": "1764",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which Indian classical dance form originated in Kerala?",
    "question_hi": "कौन सा भारतीय शास्त्रीय नृत्य रूप केरल में उत्पन्न हुआ?",
    "options_en": ["Kathakali", "Bharatanatyam", "Odissi", "Kathak"],
    "options_hi": ["कथकली", "भरतनाट्यम", "ओडिसी", "कथक"],
    "answer_en": "Kathakali",
    "answer_hi": "कथकली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Who is known as the 'Grand Old Man of India'?",
    "question_hi": "'ग्रैंड ओल्ड मैन ऑफ इंडिया' किसे कहा जाता है?",
    "options_en": ["Dadabhai Naoroji", "Surendranath Banerjee", "Gopal Krishna Gokhale", "Lala Lajpat Rai"],
    "options_hi": ["दादाभाई नौरोजी", "सुरेंद्रनाथ बनर्जी", "गोपाल कृष्ण गोखले", "लाला लाजपत राय"],
    "answer_en": "Dadabhai Naoroji",
    "answer_hi": "दादाभाई नौरोजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which element has the atomic number 1?",
    "question_hi": "परमाणु क्रमांक 1 किस तत्व का होता है?",
    "options_en": ["Hydrogen", "Helium", "Lithium", "Oxygen"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "ऑक्सीजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The famous book 'Gitanjali' is written by?",
    "question_hi": "प्रसिद्ध पुस्तक 'गीतांजलि' किसने लिखी है?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Premchand", "Sarojini Naidu"],
    "options_hi": ["रवीन्द्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "प्रेमचंद", "सरोजिनी नायडू"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवीन्द्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    "options_en": ["Kidney", "Liver", "Heart", "Lungs"],
    "options_hi": ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Who is known as the 'Iron Man of India'?",
    "question_hi": "भारत के 'लौह पुरुष' किसे कहा जाता है?",
    "options_en": ["Sardar Patel", "B. R. Ambedkar", "Subhas Chandra Bose", "Jawaharlal Nehru"],
    "options_hi": ["सरदार पटेल", "भीमराव अंबेडकर", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The Red Fort of Delhi was built by which Mughal emperor?",
    "question_hi": "दिल्ली का लाल किला किस मुगल सम्राट ने बनवाया था?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगज़ेब", "बाबर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "options_hi": ["नील", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Alva Edison", "Nikola Tesla", "James Watt"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस अल्वा एडिसन", "निकोल टेस्ला", "जेम्स वाट"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the largest continent in the world?",
    "question_hi": "दुनिया का सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "North America", "Europe"],
    "options_hi": ["एशिया", "अफ्रीका", "उत्तरी अमेरिका", "यूरोप"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Who administers the oath to the President of India?",
    "question_hi": "भारत के राष्ट्रपति को शपथ कौन दिलाता है?",
    "options_en": ["Chief Justice of India", "Prime Minister", "Lok Sabha Speaker", "Vice President"],
    "options_hi": ["भारत के मुख्य न्यायाधीश", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "उपराष्ट्रपति"],
    "answer_en": "Chief Justice of India",
    "answer_hi": "भारत के मुख्य न्यायाधीश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Where is the headquarters of UNESCO?",
    "question_hi": "युनेस्को (UNESCO) का मुख्यालय कहाँ स्थित है?",
    "options_en": ["Paris", "New York", "Geneva", "London"],
    "options_hi": ["पेरिस", "न्यूयॉर्क", "जेनेवा", "लंदन"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which vitamin is also known as Ascorbic Acid?",
    "question_hi": "एस्कॉर्बिक एसिड किस विटामिन को कहा जाता है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin B", "Vitamin D"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन B", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Article of the Constitution abolishes untouchability?",
    "question_hi": "संविधान का कौन सा अनुच्छेद अस्पृश्यता को समाप्त करता है?",
    "options_en": ["Article 17", "Article 19", "Article 21", "Article 25"],
    "options_hi": ["अनुच्छेद 17", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 25"],
    "answer_en": "Article 17",
    "answer_hi": "अनुच्छेद 17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The first modern Olympic Games were held in which country?",
    "question_hi": "प्रथम आधुनिक ओलंपिक खेल किस देश में आयोजित हुए?",
    "options_en": ["Greece", "France", "USA", "UK"],
    "options_hi": ["ग्रीस", "फ्रांस", "अमेरिका", "यूके"],
    "answer_en": "Greece",
    "answer_hi": "ग्रीस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which gas is the most abundant in the Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक पाई जाने वाली गैस कौन सी है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who discovered Penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "आइज़ैक न्यूटन", "आल्बर्ट आइंस्टीन"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Where is 'Ajanta Caves' located?",
    "question_hi": "'अजन्ता गुफाएँ' कहाँ स्थित हैं?",
    "options_en": ["Maharashtra", "Madhya Pradesh", "Odisha", "Bihar"],
    "options_hi": ["महाराष्ट्र", "मध्य प्रदेश", "ओडिशा", "बिहार"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सा धातु कक्ष तापमान पर द्रव अवस्था में होता है?",
    "options_en": ["Mercury", "Silver", "Lead", "Sodium"],
    "options_hi": ["पारा", "चाँदी", "सीसा", "सोडियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who coined the term 'Satyagraha'?",
    "question_hi": "'सत्याग्रह' शब्द का प्रयोग सबसे पहले किसने किया?",
    "options_en": ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Rabindranath Tagore"],
    "options_hi": ["महात्मा गांधी", "बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले", "रवींद्रनाथ टैगोर"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which state is the largest producer of wheat in India?",
    "question_hi": "भारत में गेहूँ का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "पंजाब", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which city is known as the 'Silicon Valley of India'?",
    "question_hi": "भारत के 'सिलिकॉन वैली' के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the chemical formula of Water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "O2", "NaCl"],
    "options_hi": ["H2O", "CO2", "O2", "NaCl"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is the highest mountain peak in India?",
    "question_hi": "भारत की सबसे ऊँची पर्वत चोटी कौन सी है?",
    "options_en": ["K2", "Kangchenjunga", "Nanda Devi", "Annapurna"],
    "options_hi": ["K2", "कंचनजंगा", "नंदा देवी", "अन्नपूर्णा"],
    "answer_en": "Kangchenjunga",
    "answer_hi": "कंचनजंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Mughal ruler built the Jama Masjid in Delhi?",
    "question_hi": "दिल्ली की जामा मस्जिद किस मुगल शासक ने बनवाई?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Humayun"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगज़ेब", "हुमायूँ"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Nobel Prize is awarded in how many categories?",
    "question_hi": "नोबेल पुरस्कार कितनी श्रेणियों में प्रदान किया जाता है?",
    "options_en": ["6", "5", "7", "8"],
    "options_hi": ["6", "5", "7", "8"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the smallest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    "options_en": ["Stapes", "Femur", "Humerus", "Tibia"],
    "options_hi": ["स्टेपीज़", "फीमर", "ह्यूमरस", "टिबिया"],
    "answer_en": "Stapes",
    "answer_hi": "स्टेपीज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which state is known as the 'Fruit Bowl of India'?",
    "question_hi": "भारत का 'फ्रूट बाउल' किस राज्य को कहा जाता है?",
    "options_en": ["Himachal Pradesh", "Uttarakhand", "Maharashtra", "Assam"],
    "options_hi": ["हिमाचल प्रदेश", "उत्तराखंड", "महाराष्ट्र", "असम"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which gas is called 'Laughing Gas'?",
    "question_hi": "किस गैस को 'हँसाने वाली गैस' कहा जाता है?",
    "options_en": ["Nitrous Oxide", "Carbon dioxide", "Oxygen", "Sulphur dioxide"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "सल्फर डाइऑक्साइड"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Who gave the slogan 'Do or Die'?",
    "question_hi": "'करो या मरो' का नारा किसने दिया?",
    "options_en": ["Mahatma Gandhi", "Bhagat Singh", "Subhas Chandra Bose", "Jawaharlal Nehru"],
    "options_hi": ["महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Where is the 'Victoria Memorial' located?",
    "question_hi": "'विक्टोरिया मेमोरियल' कहाँ स्थित है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Yen", "Won", "Dollar", "Euro"],
    "options_hi": ["येन", "वोन", "डॉलर", "यूरो"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Where is the 'Great Barrier Reef' located?",
    "question_hi": "'ग्रेट बैरियर रीफ़' कहाँ स्थित है?",
    "options_en": ["Australia", "USA", "Brazil", "South Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "अमेरिका", "ब्राज़ील", "दक्षिण अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which gas is essential for photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which freedom fighter formed the 'Azad Hind Fauj'?",
    "question_hi": "'आजाद हिन्द फौज' की स्थापना किस स्वतंत्रता सेनानी ने की?",
    "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Chandrasekhar Azad", "Mangal Pandey"],
    "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "चंद्रशेखर आज़ाद", "मंगल पांडे"],
    "answer_en": "Subhas Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is the deepest ocean in the world?",
    "question_hi": "दुनिया का सबसे गहरा महासागर कौन सा है?",
    "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Where is the 'Charminar' located?",
    "question_hi": "'चारमिनार' कहाँ स्थित है?",
    "options_en": ["Hyderabad", "Lucknow", "Delhi", "Bhopal"],
    "options_hi": ["हैदराबाद", "लखनऊ", "दिल्ली", "भोपाल"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which vitamin is known as the 'Sunshine Vitamin'?",
    "question_hi": "किस विटामिन को 'सनशाइन विटामिन' कहा जाता है?",
    "options_en": ["Vitamin D", "Vitamin B", "Vitamin C", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन B", "विटामिन C", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The Gol Gumbaz monument is located in which Indian state?",
    "question_hi": "गोल गुम्बज स्मारक किस भारतीय राज्य में स्थित है?",
    "options_en": ["Karnataka", "Maharashtra", "Telangana", "Uttar Pradesh"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "तेलंगाना", "उत्तर प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
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