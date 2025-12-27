const questions = [
  {
    "num":1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Kisan Kalyan Patra Yojana'?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में 'मुख्यमंत्री किसान कल्याण पत्र योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Who was appointed as the new Chief of the National Investigation Agency (NIA) in 2024?",
    "question_hi": "2024 में राष्ट्रीय जांच एजेंसी (एनआईए) के नए प्रमुख के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Dinkar Gupta", "Y.C. Modi", "Radha Vinod Raju", "Not announced yet"],
    "options_hi": ["दिनकर गुप्ता", "वाई.सी. मोदी", "राधा विनोद राजू", "अभी घोषित नहीं हुआ"],
    "answer_en": "Dinkar Gupta",
    "answer_hi": "दिनकर गुप्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which country recently changed its name from 'Czech Republic' to 'Czechia' officially?",
    "question_hi": "हाल ही में किस देश ने आधिकारिक तौर पर अपना नाम 'चेक रिपब्लिक' से 'चेकिया' बदला?",
    "options_en": ["Czechia", "Slovakia", "Hungary", "Austria"],
    "options_hi": ["चेकिया", "स्लोवाकिया", "हंगरी", "ऑस्ट्रिया"],
    "answer_en": "Czechia",
    "answer_hi": "चेकिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Who won the 2024 Padma Bhushan award in the field of sports?",
    "question_hi": "खेल के क्षेत्र में 2024 का पद्म भूषण पुरस्कार किसने जीता?",
    "options_en": ["P.T. Usha", "Mary Kom", "Multiple recipients", "Not announced yet"],
    "options_hi": ["पी.टी. उषा", "मैरी कॉम", "कई प्राप्तकर्ता", "अभी घोषित नहीं हुआ"],
    "answer_en": "Multiple recipients",
    "answer_hi": "कई प्राप्तकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian city hosted the 'G20 Health Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 स्वास्थ्य मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Gandhinagar", "Ahmedabad", "Surat", "Vadodara"],
    "options_hi": ["गांधीनगर", "अहमदाबाद", "सूरत", "वडोदरा"],
    "answer_en": "Gandhinagar",
    "answer_hi": "गांधीनगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Who is the current Union Minister of Chemicals and Fertilizers?",
    "question_hi": "वर्तमान केंद्रीय रसायन और उर्वरक मंत्री कौन हैं?",
    "options_en": ["Mansukh Mandaviya", "Ananth Kumar", "Ram Vilas Paswan", "Hansraj Gangaram Ahir"],
    "options_hi": ["मनसुख मंडाविया", "अनंत कुमार", "राम विलास पासवान", "हंसराज गंगाराम अहीर"],
    "answer_en": "Mansukh Mandaviya",
    "answer_hi": "मनसुख मंडाविया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which country recently launched 'Lunar Flashlight' mission to search for water ice on Moon?",
    "question_hi": "हाल ही में चंद्रमा पर पानी की बर्फ की खोज के लिए 'लूनर फ्लैशलाइट' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "European Space Agency", "JAXA", "ISRO"],
    "options_hi": ["नासा", "यूरोपीय अंतरिक्ष एजेंसी", "जाक्सा", "इसरो"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Who won the 2024 Nobel Prize in Physiology or Medicine?",
    "question_hi": "2024 का शरीर विज्ञान या चिकित्सा का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Katalin Karikó", "Drew Weissman", "David Julius"],
    "options_hi": ["घोषित किया जाना है", "कैटलिन करिको", "ड्रू वेस्मैन", "डेविड जूलियस"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Shiksha Prabandhan Yojana'?",
    "question_hi": "'मुख्यमंत्री शिक्षा प्रबंधन योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Who is the current Prime Minister of Iceland?",
    "question_hi": "आइसलैंड के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Katrín Jakobsdóttir", "Bjarni Benediktsson", "Sigmundur Davíð Gunnlaugsson", "Jóhanna Sigurðardóttir"],
    "options_hi": ["कैटरीन जैकोब्सडॉटिर", "बजर्नी बेनेडिक्टसन", "सिग्मुंडुर डेविड गुन्नलोग्सन", "जोहाना सिगुर्डार्डोटिर"],
    "answer_en": "Katrín Jakobsdóttir",
    "answer_hi": "कैटरीन जैकोब्सडॉटिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which city will host the 2025 World Weightlifting Championships?",
    "question_hi": "2025 विश्व भारोत्तोलन चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Riyadh, Saudi Arabia", "Tashkent, Uzbekistan", "Not decided yet", "Cancelled"],
    "options_hi": ["रियाद, सऊदी अरबिया", "ताशकंद, उज्बेकिस्तान", "अभी तय नहीं हुआ", "रद्द"],
    "answer_en": "Riyadh, Saudi Arabia",
    "answer_hi": "रियाद, सऊदी अरबिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Who won the 2024 Khel Ratna Award for badminton?",
    "question_hi": "बैडमिंटन के लिए 2024 का खेल रत्न पुरस्कार किसने जीता?",
    "options_en": ["P.V. Sindhu", "Saina Nehwal", "To be announced", "Kidambi Srikanth"],
    "options_hi": ["पी.वी. सिंधु", "साइना नेहवाल", "घोषित किया जाना है", "किदाम्बी श्रीकांत"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state launched 'Mukhyamantri Yuva Swabhiman Yojana'?",
    "question_hi": "'मुख्यमंत्री युवा स्वाभिमान योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Who is the current President of Moldova?",
    "question_hi": "मोल्दोवा के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Maia Sandu", "Igor Dodon", "Nicolae Timofti", "Vladimir Voronin"],
    "options_hi": ["माया सैंडू", "इगोर डोडन", "निकोले टिमोफ्ती", "व्लादिमीर वोरोनिन"],
    "answer_en": "Maia Sandu",
    "answer_hi": "माया सैंडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which country recently launched 'IMAP' (Interstellar Mapping and Acceleration Probe) mission?",
    "question_hi": "हाल ही में 'आईमैप' (इंटरस्टेलर मैपिंग और एक्सेलेरेशन प्रोब) मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "European Space Agency", "China", "Japan"],
    "options_hi": ["नासा", "यूरोपीय अंतरिक्ष एजेंसी", "चीन", "जापान"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Who won the 2024 ICC Men's T20 World Cup?",
    "question_hi": "2024 आईसीसी पुरुष टी20 विश्व कप किसने जीता?",
    "options_en": ["India", "Australia", "England", "Pakistan"],
    "options_hi": ["भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "पाकिस्तान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city is known as the 'City of Scholars'?",
    "question_hi": "किस भारतीय शहर को 'विद्वानों का शहर' कहा जाता है?",
    "options_en": ["Allahabad (Prayagraj)", "Varanasi", "Kolkata", "Delhi"],
    "options_hi": ["इलाहाबाद (प्रयागराज)", "वाराणसी", "कोलकाता", "दिल्ली"],
    "answer_en": "Allahabad (Prayagraj)",
    "answer_hi": "इलाहाबाद (प्रयागराज)",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Who is the current Union Minister of Power?",
    "question_hi": "वर्तमान केंद्रीय विद्युत मंत्री कौन हैं?",
    "options_en": ["R. K. Singh", "Piyush Goyal", "Sushilkumar Shinde", "Veerappa Moily"],
    "options_hi": ["आर. के. सिंह", "पीयूष गोयल", "सुशीलकुमार शिंदे", "वीरप्पा मोइली"],
    "answer_en": "R. K. Singh",
    "answer_hi": "आर. के. सिंह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which country recently launched 'Tiangong-2' space lab?",
    "question_hi": "हाल ही में 'तियानगोंग-2' अंतरिक्ष प्रयोगशाला किस देश ने लॉन्च किया?",
    "options_en": ["China", "USA", "Russia", "International Space Station"],
    "options_hi": ["चीन", "यूएसए", "रूस", "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Who won the 2024 Australian Open Women's Singles title?",
    "question_hi": "2024 ऑस्ट्रेलियन ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Aryna Sabalenka", "Elena Rybakina", "Iga Swiatek", "Coco Gauff"],
    "options_hi": ["आरिना सबलेन्का", "एलेना रायबाकिना", "इगा स्विएटेक", "कोको गॉफ"],
    "answer_en": "Aryna Sabalenka",
    "answer_hi": "आरिना सबलेन्का",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sahayata Portal Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सहायता पोर्टल योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Who is the current Prime Minister of Montenegro?",
    "question_hi": "मोंटेनेग्रो के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Dritan Abazović", "Zdravko Krivokapić", "Duško Marković", "Milo Đukanović"],
    "options_hi": ["द्रितन अबाजोविक", "ज़्द्रव्को क्रिवोकापिक", "दुश्को मार्कोविक", "मिलो ढुकानोविक"],
    "answer_en": "Dritan Abazović",
    "answer_hi": "द्रितन अबाजोविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which city will host the 2026 Asian Beach Games?",
    "question_hi": "2026 एशियाई बीच खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Sanya, China", "Bali, Indonesia", "Phuket, Thailand", "Not decided yet"],
    "options_hi": ["सान्या, चीन", "बाली, इंडोनेशिया", "फुकेट, थाईलैंड", "अभी तय नहीं हुआ"],
    "answer_en": "Sanya, China",
    "answer_hi": "सान्या, चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Who won the 2024 Dadasaheb Phalke International Film Festival Award?",
    "question_hi": "2024 का दादासाहेब फाल्के अंतरराष्ट्रीय फिल्म महोत्सव पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Sanjay Leela Bhansali", "Rajkumar Hirani", "Karan Johar"],
    "options_hi": ["घोषित किया जाना है", "संजय लीला भंसाली", "राजकुमार हिरानी", "करण जौहर"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian state implemented 'Mukhyamantri Swasthya Kalyan Yojana'?",
    "question_hi": "'मुख्यमंत्री स्वास्थ्य कल्याण योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Chhattisgarh"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "छत्तीसगढ़"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Who is the current President of Kyrgyzstan?",
    "question_hi": "किर्गिज़स्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Sadyr Japarov", "Sooronbay Jeenbekov", "Almazbek Atambayev", "Roza Otunbayeva"],
    "options_hi": ["सादिर जापारोव", "सूरोंबे जीएनबेकोव", "अल्माज़बेक अताम्बायेव", "रोजा ओटुनबायेवा"],
    "answer_en": "Sadyr Japarov",
    "answer_hi": "सादिर जापारोव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which country recently launched 'EarthCARE' cloud and aerosol mission?",
    "question_hi": "हाल ही में 'अर्थकेयर' बादल और एरोसोल मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "JAXA", "ISRO"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "जाक्सा", "इसरो"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Who won the 2024 French Open Women's Singles title?",
    "question_hi": "2024 फ्रेंच ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Iga Swiatek", "Aryna Sabalenka", "Coco Gauff", "Karolina Muchova"],
    "options_hi": ["इगा स्विएटेक", "आरिना सबलेन्का", "कोको गॉफ", "कारोलिना मुचोवा"],
    "answer_en": "Iga Swiatek",
    "answer_hi": "इगा स्विएटेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian city is known as the 'City of Processions'?",
    "question_hi": "किस भारतीय शहर को 'जुलूसों का शहर' कहा जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
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
    "num":31,
    "question_en": "Which country recently launched 'GSAT-24' communication satellite?",
    "question_hi": "हाल ही में 'जीसैट-24' संचार उपग्रह किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "Japan", "European Union"],
    "options_hi": ["भारत", "यूएसए", "जापान", "यूरोपीय संघ"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Who won the 2024 Wimbledon Women's Doubles title?",
    "question_hi": "2024 विंबलडन महिला युगल खिताब किसने जीता?",
    "options_en": ["Hsieh Su-wei & Barbora Strýcová", "Barbora Krejcikova & Katerina Siniakova", "Elise Mertens & Zhang Shuai", "Gabriela Dabrowski & Luisa Stefani"],
    "options_hi": ["ह्सिएह सु-वेई और बारबोरा स्ट्राइकोवा", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "एलिस मर्टेंस और झांग शुआई", "गैब्रिएला डबरोव्स्की और लुइसा स्टेफनी"],
    "answer_en": "Hsieh Su-wei & Barbora Strýcová",
    "answer_hi": "ह्सिएह सु-वेई और बारबोरा स्ट्राइकोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sahayata App Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सहायता ऐप योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Who is the current Prime Minister of North Macedonia?",
    "question_hi": "उत्तरी मैसेडोनिया के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Dimitar Kovačevski", "Zoran Zaev", "Nikola Gruevski", "Hristijan Mickoski"],
    "options_hi": ["दिमितर कोवाचेव्स्की", "ज़ोरान ज़ेव", "निकोला ग्रुएव्स्की", "ह्रिस्तीजन मिकोस्की"],
    "answer_en": "Dimitar Kovačevski",
    "answer_hi": "दिमितर कोवाचेव्स्की",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which city will host the 2027 World Athletics Championships?",
    "question_hi": "2027 विश्व एथलेटिक्स चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Budapest, Hungary", "Eugene, USA", "London, UK", "Not decided yet"],
    "options_hi": ["बुडापेस्ट, हंगरी", "यूजीन, यूएसए", "लंदन, यूके", "अभी तय नहीं हुआ"],
    "answer_en": "Budapest, Hungary",
    "answer_hi": "बुडापेस्ट, हंगरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Who won the 2024 Sahitya Akademi Award for Bengali literature?",
    "question_hi": "बांग्ला साहित्य के लिए 2024 का साहित्य अकादमी पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Mahasweta Devi", "Sunil Gangopadhyay", "Samaresh Majumdar"],
    "options_hi": ["घोषित किया जाना है", "महाश्वेता देवी", "सुनिल गंगोपाध्याय", "समरेश मजुमदार"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Kalyan Prakalpa Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण प्रकल्प योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Who is the current President of Tajikistan?",
    "question_hi": "ताजिकिस्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Emomali Rahmon", "Qahhor Mahkamov", "Rahmon Nabiyev", "Akbarsho Iskandrov"],
    "options_hi": ["इमोमली रहमोन", "कह्होर महकामोव", "रहमोन नबीयेव", "अकबरशो इस्कंदरोव"],
    "answer_en": "Emomali Rahmon",
    "answer_hi": "इमोमली रहमोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which country recently launched 'Mars Oxygen ISRU Experiment' (MOXIE)?",
    "question_hi": "हाल ही में 'मार्स ऑक्सीजन आईएसआरयू प्रयोग' (मॉक्सी) किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "European Space Agency", "China", "Russia"],
    "options_hi": ["नासा", "यूरोपीय अंतरिक्ष एजेंसी", "चीन", "रूस"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Who won the 2024 US Open Women's Doubles title?",
    "question_hi": "2024 यूएस ओपन महिला युगल खिताब किसने जीता?",
    "options_en": ["Gabriela Dabrowski & Erin Routliffe", "Barbora Krejcikova & Katerina Siniakova", "Coco Gauff & Jessica Pegula", "Samantha Stosur & Zhang Shuai"],
    "options_hi": ["गैब्रिएला डबरोव्स्की और एरिन राउटलिफ", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "कोको गॉफ और जेसिका पेगुला", "सामंथा स्टोसुर और झांग शुआई"],
    "answer_en": "Gabriela Dabrowski & Erin Routliffe",
    "answer_hi": "गैब्रिएला डबरोव्स्की और एरिन राउटलिफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian city is known as the 'City of Literature'?",
    "question_hi": "किस भारतीय शहर को 'साहित्य का शहर' कहा जाता है?",
    "options_en": ["Kolkata", "Allahabad", "Varanasi", "Delhi"],
    "options_hi": ["कोलकाता", "इलाहाबाद", "वाराणसी", "दिल्ली"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Who is the current Union Minister of Housing and Urban Affairs?",
    "question_hi": "वर्तमान केंद्रीय आवास और शहरी कार्य मंत्री कौन हैं?",
    "options_en": ["Hardeep Singh Puri", "M. Venkaiah Naidu", "Kamal Nath", "Sheila Dikshit"],
    "options_hi": ["हरदीप सिंह पुरी", "एम. वेंकैया नायडू", "कमल नाथ", "शीला दीक्षित"],
    "answer_en": "Hardeep Singh Puri",
    "answer_hi": "हरदीप सिंह पुरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which country recently launched 'RISAT-2B' radar imaging satellite?",
    "question_hi": "हाल ही में 'रिसैट-2बी' रडार इमेजिंग उपग्रह किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "Japan", "Israel"],
    "options_hi": ["भारत", "यूएसए", "जापान", "इज़राइल"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Who won the 2024 Australian Open Mixed Doubles title?",
    "question_hi": "2024 ऑस्ट्रेलियन ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Hsieh Su-wei & Jan Zielinski", "Luisa Stefani & Rafael Matos", "Sania Mirza & Rohan Bopanna", "Kristina Mladenovic & Ivan Dodig"],
    "options_hi": ["ह्सिएह सु-वेई और जान ज़ीलिंस्की", "लुइसा स्टेफनी और राफेल माटोस", "सानिया मिर्जा और रोहन बोपन्ना", "क्रिस्टीना म्लादेनोविक और इवान डोडिग"],
    "answer_en": "Hsieh Su-wei & Jan Zielinski",
    "answer_hi": "ह्सिएह सु-वेई और जान ज़ीलिंस्की",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Prashikshan Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण प्रशिक्षण योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Haryana"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "हरियाणा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Who is the current Prime Minister of Bosnia and Herzegovina?",
    "question_hi": "बोस्निया और हर्जेगोविना के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Borjana Krišto", "Zoran Tegeltija", "Denis Zvizdić", "Vjekoslav Bevanda"],
    "options_hi": ["बोरजाना क्रिस्टो", "ज़ोरान तेगेल्तिया", "डेनिस ज़्विज़डिक", "व्जेकोस्लाव बेवांडा"],
    "answer_en": "Borjana Krišto",
    "answer_hi": "बोरजाना क्रिस्टो",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which city will host the 2028 Summer Olympics?",
    "question_hi": "2028 ग्रीष्मकालीन ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Los Angeles, USA", "Paris, France", "Tokyo, Japan", "London, UK"],
    "options_hi": ["लॉस एंजिल्स, यूएसए", "पेरिस, फ्रांस", "टोक्यो, जापान", "लंदन, यूके"],
    "answer_en": "Los Angeles, USA",
    "answer_hi": "लॉस एंजिल्स, यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Who won the 2024 National Film Award for Best Music Director?",
    "question_hi": "सर्वश्रेष्ठ संगीत निर्देशक के लिए 2024 का राष्ट्रीय फिल्म पुरस्कार किसने जीता?",
    "options_en": ["A.R. Rahman", "To be announced", "Ilaiyaraaja", "M.M. Keeravani"],
    "options_hi": ["ए.आर. रहमान", "घोषित किया जाना है", "इलयाराजा", "एम.एम. कीरवाणी"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Suraksha Abhiyan'?",
    "question_hi": "'मुख्यमंत्री किसान सुरक्षा अभियान' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Who is the current President of Turkmenistan?",
    "question_hi": "तुर्कमेनिस्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Serdar Berdimuhamedow", "Gurbanguly Berdimuhamedow", "Saparmurat Niyazov", "Kurbanguly Berdimuhamedov"],
    "options_hi": ["सेरदार बर्दीमुहम्मदोव", "गुरबंगुली बर्दीमुहम्मदोव", "सपरमुरात नियाज़ोव", "कुरबंगुली बर्दीमुहम्मदोव"],
    "answer_en": "Serdar Berdimuhamedow",
    "answer_hi": "सेरदार बर्दीमुहम्मदोव",
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