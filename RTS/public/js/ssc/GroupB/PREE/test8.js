const questions = [
  {
    "num": 1,
    "question_en": "Who is known as the 'Father of the Indian Constitution'?",
    "question_hi": "'भारतीय संविधान के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    "options_hi": ["डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The Constitution of India was adopted on:",
    "question_hi": "भारत का संविधान कब अपनाया गया था?",
    "options_en": ["26 January 1950", "26 November 1949", "15 August 1947", "26 January 1949"],
    "options_hi": ["26 जनवरी 1950", "26 नवंबर 1949", "15 अगस्त 1947", "26 जनवरी 1949"],
    "answer_en": "26 November 1949",
    "answer_hi": "26 नवंबर 1949",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "How many Fundamental Rights are guaranteed by the Indian Constitution?",
    "question_hi": "भारतीय संविधान द्वारा कितने मौलिक अधिकारों की गारंटी दी गई है?",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Who is the head of the Union Executive in India?",
    "question_hi": "भारत में संघीय कार्यपालिका का प्रमुख कौन है?",
    "options_en": ["President", "Prime Minister", "Chief Justice", "Speaker"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "अध्यक्ष"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "The Parliament of India consists of:",
    "question_hi": "भारत की संसद में शामिल हैं:",
    "options_en": ["President, Lok Sabha and Rajya Sabha", "Lok Sabha and Rajya Sabha only", "President and Lok Sabha", "President and Rajya Sabha"],
    "options_hi": ["राष्ट्रपति, लोकसभा और राज्यसभा", "केवल लोकसभा और राज्यसभा", "राष्ट्रपति और लोकसभा", "राष्ट्रपति और राज्यसभा"],
    "answer_en": "President, Lok Sabha and Rajya Sabha",
    "answer_hi": "राष्ट्रपति, लोकसभा और राज्यसभा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which article of the Constitution deals with the President's power to grant pardons?",
    "question_hi": "संविधान का कौन सा अनुच्छेद राष्ट्रपति की क्षमादान की शक्ति से संबंधित है?",
    "options_en": ["Article 72", "Article 123", "Article 356", "Article 360"],
    "options_hi": ["अनुच्छेद 72", "अनुच्छेद 123", "अनुच्छेद 356", "अनुच्छेद 360"],
    "answer_en": "Article 72",
    "answer_hi": "अनुच्छेद 72",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The maximum strength of the Lok Sabha is:",
    "question_hi": "लोकसभा की अधिकतम सदस्य संख्या है:",
    "options_en": ["545", "552", "550", "545 (543 elected + 2 nominated)"],
    "options_hi": ["545", "552", "550", "545 (543 निर्वाचित + 2 मनोनीत)"],
    "answer_en": "545 (543 elected + 2 nominated)",
    "answer_hi": "545 (543 निर्वाचित + 2 मनोनीत)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who appoints the Chief Justice of India?",
    "question_hi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
    "options_en": ["President", "Prime Minister", "Parliament", "Supreme Court Collegium"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय का कॉलेजियम"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "The Directive Principles of State Policy are inspired by the constitution of which country?",
    "question_hi": "राज्य के नीति निर्देशक तत्व किस देश के संविधान से प्रेरित हैं?",
    "options_en": ["USA", "UK", "Ireland", "Canada"],
    "options_hi": ["यूएसए", "यूके", "आयरलैंड", "कनाडा"],
    "answer_en": "Ireland",
    "answer_hi": "आयरलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which schedule of the Indian Constitution contains the list of recognized languages?",
    "question_hi": "भारतीय संविधान की कौन सी अनुसूची में मान्यता प्राप्त भाषाओं की सूची है?",
    "options_en": ["Eighth Schedule", "Seventh Schedule", "First Schedule", "Tenth Schedule"],
    "options_hi": ["आठवीं अनुसूची", "सातवीं अनुसूची", "पहली अनुसूची", "दसवीं अनुसूची"],
    "answer_en": "Eighth Schedule",
    "answer_hi": "आठवीं अनुसूची",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The 'Basic Structure Doctrine' was established by the Supreme Court in which case?",
    "question_hi": "'मूल संरचना सिद्धांत' सर्वोच्च न्यायालय द्वारा किस मामले में स्थापित किया गया था?",
    "options_en": ["Kesavananda Bharati case (1973)", "Golaknath case (1967)", "Minerva Mills case (1980)", "S.R. Bommai case (1994)"],
    "options_hi": ["केसवानंद भारती मामला (1973)", "गोलकनाथ मामला (1967)", "मिनर्वा मिल्स मामला (1980)", "एस.आर. बोम्मई मामला (1994)"],
    "answer_en": "Kesavananda Bharati case (1973)",
    "answer_hi": "केसवानंद भारती मामला (1973)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which article of the Constitution deals with the establishment of a Finance Commission?",
    "question_hi": "संविधान का कौन सा अनुच्छेद वित्त आयोग की स्थापना से संबंधित है?",
    "options_en": ["Article 280", "Article 324", "Article 356", "Article 360"],
    "options_hi": ["अनुच्छेद 280", "अनुच्छेद 324", "अनुच्छेद 356", "अनुच्छेद 360"],
    "answer_en": "Article 280",
    "answer_hi": "अनुच्छेद 280",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The term of office of a Rajya Sabha member is:",
    "question_hi": "राज्यसभा सदस्य का कार्यकाल है:",
    "options_en": ["5 years", "6 years", "4 years", "3 years"],
    "options_hi": ["5 वर्ष", "6 वर्ष", "4 वर्ष", "3 वर्ष"],
    "answer_en": "6 years",
    "answer_hi": "6 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who has the power to declare a financial emergency in India?",
    "question_hi": "भारत में वित्तीय आपातकाल घोषित करने की शक्ति किसके पास है?",
    "options_en": ["President", "Prime Minister", "Finance Minister", "Parliament"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "संसद"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which amendment to the Constitution lowered the voting age from 21 to 18 years?",
    "question_hi": "संविधान में किस संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
    "options_en": ["61st Amendment", "73rd Amendment", "86th Amendment", "44th Amendment"],
    "options_hi": ["61वां संशोधन", "73वां संशोधन", "86वां संशोधन", "44वां संशोधन"],
    "answer_en": "61st Amendment",
    "answer_hi": "61वां संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The concept of 'Judicial Review' in India is borrowed from:",
    "question_hi": "भारत में 'न्यायिक पुनरीक्षण' की अवधारणा कहाँ से ली गई है?",
    "options_en": ["USA", "UK", "France", "Canada"],
    "options_hi": ["यूएसए", "यूके", "फ्रांस", "कनाडा"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which article deals with the right to constitutional remedies?",
    "question_hi": "कौन सा अनुच्छेद संवैधानिक उपचारों के अधिकार से संबंधित है?",
    "options_en": ["Article 32", "Article 21", "Article 14", "Article 19"],
    "options_hi": ["अनुच्छेद 32", "अनुच्छेद 21", "अनुच्छेद 14", "अनुच्छेद 19"],
    "answer_en": "Article 32",
    "answer_hi": "अनुच्छेद 32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'Council of Ministers' is collectively responsible to:",
    "question_hi": "'मंत्रिपरिषद' सामूहिक रूप से किसके प्रति उत्तरदायी है?",
    "options_en": ["Lok Sabha", "Rajya Sabha", "President", "Prime Minister"],
    "options_hi": ["लोकसभा", "राज्यसभा", "राष्ट्रपति", "प्रधानमंत्री"],
    "answer_en": "Lok Sabha",
    "answer_hi": "लोकसभा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which constitutional amendment added the words 'Socialist' and 'Secular' to the Preamble?",
    "question_hi": "किस संवैधानिक संशोधन ने प्रस्तावना में 'समाजवादी' और 'धर्मनिरपेक्ष' शब्द जोड़े?",
    "options_en": ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
    "options_hi": ["42वां संशोधन", "44वां संशोधन", "52वां संशोधन", "73वां संशोधन"],
    "answer_en": "42nd Amendment",
    "answer_hi": "42वां संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Who is the ex-officio Chairman of the Rajya Sabha?",
    "question_hi": "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
    "options_en": ["Vice-President", "President", "Prime Minister", "Speaker"],
    "options_hi": ["उपराष्ट्रपति", "राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष"],
    "answer_en": "Vice-President",
    "answer_hi": "उपराष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The minimum age required to become a member of Rajya Sabha is:",
    "question_hi": "राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु आवश्यक है:",
    "options_en": ["25 years", "30 years", "35 years", "21 years"],
    "options_hi": ["25 वर्ष", "30 वर्ष", "35 वर्ष", "21 वर्ष"],
    "answer_en": "30 years",
    "answer_hi": "30 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which article deals with the appointment of the Prime Minister?",
    "question_hi": "प्रधानमंत्री की नियुक्ति से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 75", "Article 76", "Article 77", "Article 78"],
    "options_hi": ["अनुच्छेद 75", "अनुच्छेद 76", "अनुच्छेद 77", "अनुच्छेद 78"],
    "answer_en": "Article 75",
    "answer_hi": "अनुच्छेद 75",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The concept of 'Rule of Law' in the Indian Constitution is borrowed from:",
    "question_hi": "भारतीय संविधान में 'कानून का शासन' की अवधारणा कहाँ से ली गई है?",
    "options_en": ["UK", "USA", "France", "Canada"],
    "options_hi": ["यूके", "यूएसए", "फ्रांस", "कनाडा"],
    "answer_en": "UK",
    "answer_hi": "यूके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which article deals with the President's rule in states?",
    "question_hi": "राज्यों में राष्ट्रपति शासन से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 356", "Article 352", "Article 360", "Article 370"],
    "options_hi": ["अनुच्छेद 356", "अनुच्छेद 352", "अनुच्छेद 360", "अनुच्छेद 370"],
    "answer_en": "Article 356",
    "answer_hi": "अनुच्छेद 356",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The First Law Minister of independent India was:",
    "question_hi": "स्वतंत्र भारत के पहले कानून मंत्री थे:",
    "options_en": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Maulana Azad"],
    "options_hi": ["डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल", "मौलाना आज़ाद"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which schedule of the Constitution contains the forms of oaths and affirmations?",
    "question_hi": "संविधान की कौन सी अनुसूची में शपथ और प्रतिज्ञान के प्रपत्र हैं?",
    "options_en": ["Third Schedule", "Fourth Schedule", "Fifth Schedule", "Sixth Schedule"],
    "options_hi": ["तीसरी अनुसूची", "चौथी अनुसूची", "पाँचवीं अनुसूची", "छठी अनुसूची"],
    "answer_en": "Third Schedule",
    "answer_hi": "तीसरी अनुसूची",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The 'Zero Hour' in Parliament starts at:",
    "question_hi": "संसद में 'शून्य काल' कब शुरू होता है?",
    "options_en": ["12:00 Noon", "11:00 AM", "1:00 PM", "2:00 PM"],
    "options_hi": ["12:00 दोपहर", "11:00 पूर्वाह्न", "1:00 अपराह्न", "2:00 अपराह्न"],
    "answer_en": "12:00 Noon",
    "answer_hi": "12:00 दोपहर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which article of the Constitution deals with the right to education?",
    "question_hi": "संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
    "options_en": ["Article 21A", "Article 45", "Article 51A", "Article 30"],
    "options_hi": ["अनुच्छेद 21ए", "अनुच्छेद 45", "अनुच्छेद 51ए", "अनुच्छेद 30"],
    "answer_en": "Article 21A",
    "answer_hi": "अनुच्छेद 21ए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The Union List contains how many subjects?",
    "question_hi": "संघ सूची में कितने विषय हैं?",
    "options_en": ["97", "66", "47", "100"],
    "options_hi": ["97", "66", "47", "100"],
    "answer_en": "97",
    "answer_hi": "97",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who has the power to dissolve the Lok Sabha?",
    "question_hi": "लोकसभा को भंग करने की शक्ति किसके पास है?",
    "options_en": ["President", "Prime Minister", "Speaker", "Chief Justice"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष", "मुख्य न्यायाधीश"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The concept of 'Single Citizenship' in India is borrowed from:",
    "question_hi": "भारत में 'एकल नागरिकता' की अवधारणा कहाँ से ली गई है?",
    "options_en": ["UK", "USA", "Canada", "Australia"],
    "options_hi": ["यूके", "यूएसए", "कनाडा", "ऑस्ट्रेलिया"],
    "answer_en": "UK",
    "answer_hi": "यूके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which article deals with the impeachment of the President?",
    "question_hi": "राष्ट्रपति के महाभियोग से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 61", "Article 71", "Article 52", "Article 74"],
    "options_hi": ["अनुच्छेद 61", "अनुच्छेद 71", "अनुच्छेद 52", "अनुच्छेद 74"],
    "answer_en": "Article 61",
    "answer_hi": "अनुच्छेद 61",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The 'Writ of Mandamus' is issued by:",
    "question_hi": "'परमादेश रिट' किसके द्वारा जारी की जाती है?",
    "options_en": ["Supreme Court or High Court", "President", "Parliament", "Prime Minister"],
    "options_hi": ["सर्वोच्च न्यायालय या उच्च न्यायालय", "राष्ट्रपति", "संसद", "प्रधानमंत्री"],
    "answer_en": "Supreme Court or High Court",
    "answer_hi": "सर्वोच्च न्यायालय या उच्च न्यायालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which constitutional body advises the President on the distribution of revenue between Union and States?",
    "question_hi": "कौन सा संवैधानिक निकाय केंद्र और राज्यों के बीच राजस्व के वितरण पर राष्ट्रपति को सलाह देता है?",
    "options_en": ["Finance Commission", "Planning Commission", "NITI Aayog", "Election Commission"],
    "options_hi": ["वित्त आयोग", "योजना आयोग", "नीति आयोग", "चुनाव आयोग"],
    "answer_en": "Finance Commission",
    "answer_hi": "वित्त आयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The 'Concurrent List' contains how many subjects?",
    "question_hi": "समवर्ती सूची में कितने विषय हैं?",
    "options_en": ["52", "47", "97", "66"],
    "options_hi": ["52", "47", "97", "66"],
    "answer_en": "52",
    "answer_hi": "52",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Who appoints the Attorney General of India?",
    "question_hi": "भारत के अटॉर्नी जनरल की नियुक्ति कौन करता है?",
    "options_en": ["President", "Prime Minister", "Chief Justice", "Parliament"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "संसद"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The term 'Federal' is used in the Indian Constitution in:",
    "question_hi": "भारतीय संविधान में 'संघीय' शब्द का प्रयोग किया गया है:",
    "options_en": ["Nowhere", "Preamble", "Article 1", "Seventh Schedule"],
    "options_hi": ["कहीं नहीं", "प्रस्तावना", "अनुच्छेद 1", "सातवीं अनुसूची"],
    "answer_en": "Nowhere",
    "answer_hi": "कहीं नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which article deals with the Fundamental Duties?",
    "question_hi": "मौलिक कर्तव्यों से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 51A", "Article 21", "Article 14", "Article 19"],
    "options_hi": ["अनुच्छेद 51ए", "अनुच्छेद 21", "अनुच्छेद 14", "अनुच्छेद 19"],
    "answer_en": "Article 51A",
    "answer_hi": "अनुच्छेद 51ए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The first woman Chief Justice of India was:",
    "question_hi": "भारत की पहली महिला मुख्य न्यायाधीश थीं:",
    "options_en": ["Justice Leila Seth", "Justice Ruma Pal", "Justice Gita Mittal", "Justice Indu Malhotra"],
    "options_hi": ["न्यायमूर्ति लीला सेठ", "न्यायमूर्ति रूमा पाल", "न्यायमूर्ति गीता मित्तल", "न्यायमूर्ति इंदु मल्होत्रा"],
    "answer_en": "Justice Leila Seth",
    "answer_hi": "न्यायमूर्ति लीला सेठ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which article deals with the establishment of the Supreme Court?",
    "question_hi": "सर्वोच्च न्यायालय की स्थापना से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 124", "Article 32", "Article 226", "Article 142"],
    "options_hi": ["अनुच्छेद 124", "अनुच्छेद 32", "अनुच्छेद 226", "अनुच्छेद 142"],
    "answer_en": "Article 124",
    "answer_hi": "अनुच्छेद 124",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The 'State List' contains how many subjects?",
    "question_hi": "राज्य सूची में कितने विषय हैं?",
    "options_en": ["66", "97", "52", "47"],
    "options_hi": ["66", "97", "52", "47"],
    "answer_en": "66",
    "answer_hi": "66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who presides over the joint sitting of Parliament?",
    "question_hi": "संसद के संयुक्त अधिवेशन की अध्यक्षता कौन करता है?",
    "options_en": ["Speaker of Lok Sabha", "President", "Vice-President", "Prime Minister"],
    "options_hi": ["लोकसभा अध्यक्ष", "राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री"],
    "answer_en": "Speaker of Lok Sabha",
    "answer_hi": "लोकसभा अध्यक्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The 'Doctrine of Eclipse' is related to:",
    "question_hi": "'ग्रहण सिद्धांत' किससे संबंधित है?",
    "options_en": ["Fundamental Rights", "Directive Principles", "Emergency Provisions", "Constitutional Amendments"],
    "options_hi": ["मौलिक अधिकार", "निर्देशक सिद्धांत", "आपातकालीन प्रावधान", "संवैधानिक संशोधन"],
    "answer_en": "Fundamental Rights",
    "answer_hi": "मौलिक अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which article deals with the abolition of untouchability?",
    "question_hi": "अस्पृश्यता उन्मूलन से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 17", "Article 15", "Article 16", "Article 23"],
    "options_hi": ["अनुच्छेद 17", "अनुच्छेद 15", "अनुच्छेद 16", "अनुच्छेद 23"],
    "answer_en": "Article 17",
    "answer_hi": "अनुच्छेद 17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The minimum age for becoming a member of Lok Sabha is:",
    "question_hi": "लोकसभा का सदस्य बनने के लिए न्यूनतम आयु है:",
    "options_en": ["25 years", "30 years", "21 years", "35 years"],
    "options_hi": ["25 वर्ष", "30 वर्ष", "21 वर्ष", "35 वर्ष"],
    "answer_en": "25 years",
    "answer_hi": "25 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which article deals with the protection of life and personal liberty?",
    "question_hi": "जीवन और व्यक्तिगत स्वतंत्रता की सुरक्षा से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 21", "Article 19", "Article 14", "Article 32"],
    "options_hi": ["अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 14", "अनुच्छेद 32"],
    "answer_en": "Article 21",
    "answer_hi": "अनुच्छेद 21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The 'Question Hour' in Parliament starts at:",
    "question_hi": "संसद में 'प्रश्न काल' कब शुरू होता है?",
    "options_en": ["11:00 AM", "12:00 Noon", "10:00 AM", "2:00 PM"],
    "options_hi": ["11:00 पूर्वाह्न", "12:00 दोपहर", "10:00 पूर्वाह्न", "2:00 अपराह्न"],
    "answer_en": "11:00 AM",
    "answer_hi": "11:00 पूर्वाह्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which article deals with the right to freedom of religion?",
    "question_hi": "धर्म की स्वतंत्रता के अधिकार से कौन सा अनुच्छेद संबंधित है?",
    "options_en": ["Article 25", "Article 26", "Article 27", "Article 28"],
    "options_hi": ["अनुच्छेद 25", "अनुच्छेद 26", "अनुच्छेद 27", "अनुच्छेद 28"],
    "answer_en": "Article 25",
    "answer_hi": "अनुच्छेद 25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Who administers the oath of office to the President?",
    "question_hi": "राष्ट्रपति को पद की शपथ कौन दिलाता है?",
    "options_en": ["Chief Justice of India", "Prime Minister", "Speaker", "Vice-President"],
    "options_hi": ["भारत के मुख्य न्यायाधीश", "प्रधानमंत्री", "अध्यक्ष", "उपराष्ट्रपति"],
    "answer_en": "Chief Justice of India",
    "answer_hi": "भारत के मुख्य न्यायाधीश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The Constitution of India describes India as:",
    "question_hi": "भारत का संविधान भारत को किस रूप में वर्णित करता है?",
    "options_en": ["A Union of States", "A Federation", "A Confederation", "A Unitary State"],
    "options_hi": ["राज्यों का संघ", "एक संघ", "एक परिसंघ", "एकात्मक राज्य"],
    "answer_en": "A Union of States",
    "answer_hi": "राज्यों का संघ",
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