const questions = [
  {
    "num":1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Kisan Kalyan Pustika Yojana'?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में 'मुख्यमंत्री किसान कल्याण पुस्तिका योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Who was appointed as the new Chief of the Central Bureau of Investigation (CBI) in 2024?",
    "question_hi": "2024 में केंद्रीय जांच ब्यूरो (सीबीआई) के नए प्रमुख के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Praveen Sood", "Subodh Kumar Jaiswal", "Rishi Kumar Shukla", "Not announced yet"],
    "options_hi": ["प्रवीण सूद", "सुबोध कुमार जायसवाल", "ऋषि कुमार शुक्ला", "अभी घोषित नहीं हुआ"],
    "answer_en": "Praveen Sood",
    "answer_hi": "प्रवीण सूद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which country recently changed its name from 'Republic of Macedonia' to 'North Macedonia'?",
    "question_hi": "हाल ही में किस देश ने अपना नाम 'मैसेडोनिया गणराज्य' से 'उत्तरी मैसेडोनिया' बदला?",
    "options_en": ["North Macedonia", "Albania", "Montenegro", "Bosnia and Herzegovina"],
    "options_hi": ["उत्तरी मैसेडोनिया", "अल्बानिया", "मोंटेनेग्रो", "बोस्निया और हर्जेगोविना"],
    "answer_en": "North Macedonia",
    "answer_hi": "उत्तरी मैसेडोनिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Who won the 2024 Padma Shri award in the field of medicine?",
    "question_hi": "चिकित्सा के क्षेत्र में 2024 का पद्म श्री पुरस्कार किसने जीता?",
    "options_en": ["Dr. Randeep Guleria", "Dr. Devi Shetty", "Multiple recipients", "Not announced yet"],
    "options_hi": ["डॉ. रणदीप गुलेरिया", "डॉ. देवी शेट्टी", "कई प्राप्तकर्ता", "अभी घोषित नहीं हुआ"],
    "answer_en": "Multiple recipients",
    "answer_hi": "कई प्राप्तकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian city hosted the 'G20 Trade and Investment Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 व्यापार और निवेश मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Who is the current Union Minister of Coal and Mines?",
    "question_hi": "वर्तमान केंद्रीय कोयला और खान मंत्री कौन हैं?",
    "options_en": ["Pralhad Joshi", "Narendra Singh Tomar", "G. Kishan Reddy", "Shripad Naik"],
    "options_hi": ["प्रल्हाद जोशी", "नरेंद्र सिंह तोमर", "जी. किशन रेड्डी", "श्रीपाद नाईक"],
    "answer_en": "Pralhad Joshi",
    "answer_hi": "प्रल्हाद जोशी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which country recently launched 'JUICE' (Jupiter Icy Moons Explorer) mission?",
    "question_hi": "हाल ही में 'जूस' (जुपिटर आइसी मून्स एक्सप्लोरर) मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "JAXA", "Roscosmos"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "जाक्सा", "रोस्कोसमोस"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Who won the 2024 Nobel Prize in Physics?",
    "question_hi": "2024 का भौतिकी का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Pierre Agostini", "Ferenc Krausz", "Anne L'Huillier"],
    "options_hi": ["घोषित किया जाना है", "पियरे एगोस्टिनी", "फेरेंक क्रौज़", "ऐनी एल'हुइलियर"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Shiksha Sambal Yojana'?",
    "question_hi": "'मुख्यमंत्री शिक्षा संबल योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Who is the current Prime Minister of Luxembourg?",
    "question_hi": "लक्ज़मबर्ग के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Luc Frieden", "Xavier Bettel", "Jean-Claude Juncker", "Jacques Santer"],
    "options_hi": ["ल्यूक फ्रीडेन", "ज़ेवियर बेटेल", "जीन-क्लॉड जुन्कर", "जैक्स संटर"],
    "answer_en": "Luc Frieden",
    "answer_hi": "ल्यूक फ्रीडेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which city will host the 2025 World Archery Championships?",
    "question_hi": "2025 विश्व तीरंदाजी चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Shanghai, China", "Berlin, Germany", "Paris, France", "Not decided yet"],
    "options_hi": ["शंघाई, चीन", "बर्लिन, जर्मनी", "पेरिस, फ्रांस", "अभी तय नहीं हुआ"],
    "answer_en": "Not decided yet",
    "answer_hi": "अभी तय नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Who won the 2024 Dronacharya Award for athletics?",
    "question_hi": "एथलेटिक्स के लिए 2024 का द्रोणाचार्य पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Bahadur Singh", "Jagdish Singh", "R.D. Singh"],
    "options_hi": ["घोषित किया जाना है", "बहादुर सिंह", "जगदीश सिंह", "आर.डी. सिंह"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state launched 'Mukhyamantri Yuva Unnayan Yojana'?",
    "question_hi": "'मुख्यमंत्री युवा उन्नयन योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Bihar", "Jharkhand", "Odisha", "West Bengal"],
    "options_hi": ["बिहार", "झारखंड", "ओडिशा", "पश्चिम बंगाल"],
    "answer_en": "Bihar",
    "answer_hi": "बिहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Who is the current President of Latvia?",
    "question_hi": "लातविया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Edgars Rinkēvičs", "Egils Levits", "Raimonds Vējonis", "Andris Bērziņš"],
    "options_hi": ["एडगर्स रिंकेविक्स", "एगिल्स लेविट्स", "रायमोंड्स वेजोनिस", "आंद्रिस बेर्ज़िन्श"],
    "answer_en": "Edgars Rinkēvičs",
    "answer_hi": "एडगर्स रिंकेविक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which country recently launched 'SPHEREx' mission to study early universe?",
    "question_hi": "हाल ही में प्रारंभिक ब्रह्मांड का अध्ययन करने के लिए 'स्फीरेक्स' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "European Space Agency", "China", "India"],
    "options_hi": ["नासा", "यूरोपीय अंतरिक्ष एजेंसी", "चीन", "भारत"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Who won the 2024 ICC Women's Cricket World Cup?",
    "question_hi": "2024 आईसीसी महिला क्रिकेट विश्व कप किसने जीता?",
    "options_en": ["Australia", "England", "India", "New Zealand"],
    "options_hi": ["ऑस्ट्रेलिया", "इंग्लैंड", "भारत", "न्यूजीलैंड"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city is known as the 'City of Lakes and Gardens'?",
    "question_hi": "किस भारतीय शहर को 'झीलों और बगीचों का शहर' कहा जाता है?",
    "options_en": ["Bangalore", "Chandigarh", "Bhopal", "Nainital"],
    "options_hi": ["बैंगलोर", "चंडीगढ़", "भोपाल", "नैनीताल"],
    "answer_en": "Bangalore",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Who is the current Union Minister of AYUSH?",
    "question_hi": "वर्तमान केंद्रीय आयुष मंत्री कौन हैं?",
    "options_en": ["Sarbananda Sonowal", "Shripad Naik", "Kiren Rijiju", "Anurag Thakur"],
    "options_hi": ["सर्बानंद सोनोवाल", "श्रीपाद नाईक", "किरेन रिजिजू", "अनुराग ठाकुर"],
    "answer_en": "Sarbananda Sonowal",
    "answer_hi": "सर्बानंद सोनोवाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which country recently launched 'Tianhe' space station core module?",
    "question_hi": "हाल ही में 'तियानहे' अंतरिक्ष स्टेशन कोर मॉड्यूल किस देश ने लॉन्च किया?",
    "options_en": ["China", "USA", "Russia", "International Space Station"],
    "options_hi": ["चीन", "यूएसए", "रूस", "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Who won the 2024 French Open Women's Doubles title?",
    "question_hi": "2024 फ्रेंच ओपन महिला युगल खिताब किसने जीता?",
    "options_en": ["Hsieh Su-wei & Wang Xinyu", "Barbora Krejcikova & Katerina Siniakova", "Coco Gauff & Jessica Pegula", "Gabriela Dabrowski & Erin Routliffe"],
    "options_hi": ["ह्सिएह सु-वेई और वांग ज़िन्यू", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "कोको गॉफ और जेसिका पेगुला", "गैब्रिएला डबरोव्स्की और एरिन राउटलिफ"],
    "answer_en": "Hsieh Su-wei & Wang Xinyu",
    "answer_hi": "ह्सिएह सु-वेई और वांग ज़िन्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sahayog Samiti Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सहयोग समिति योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Who is the current Prime Minister of Malta?",
    "question_hi": "माल्टा के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Robert Abela", "Joseph Muscat", "Lawrence Gonzi", "Eddie Fenech Adami"],
    "options_hi": ["रॉबर्ट अबेला", "जोसेफ मस्कट", "लॉरेंस गोंजी", "एडी फेनेच अदामी"],
    "answer_en": "Robert Abela",
    "answer_hi": "रॉबर्ट अबेला",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which city will host the 2026 Winter Youth Olympics?",
    "question_hi": "2026 शीतकालीन युवा ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Gangwon, South Korea", "Beijing, China", "Lausanne, Switzerland", "Not decided yet"],
    "options_hi": ["गैंगवॉन, दक्षिण कोरिया", "बीजिंग, चीन", "लॉज़ेन, स्विट्जरलैंड", "अभी तय नहीं हुआ"],
    "answer_en": "Gangwon, South Korea",
    "answer_hi": "गैंगवॉन, दक्षिण कोरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Who won the 2024 Sahitya Akademi Award for Hindi?",
    "question_hi": "हिंदी के लिए 2024 का साहित्य अकादमी पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Mridula Garg", "Kedarnath Singh", "Ashok Vajpeyi"],
    "options_hi": ["घोषित किया जाना है", "मृदुला गर्ग", "केदार नाथ सिंह", "अशोक वाजपेयी"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian state implemented 'Mukhyamantri Jan Swasthya Yojana'?",
    "question_hi": "'मुख्यमंत्री जन स्वास्थ्य योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Chhattisgarh"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "छत्तीसगढ़"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Who is the current President of Estonia?",
    "question_hi": "एस्टोनिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Alar Karis", "Kersti Kaljulaid", "Toomas Hendrik Ilves", "Arnold Rüütel"],
    "options_hi": ["अलार करिस", "केर्स्टी कालजुलैड", "टोमास हेंड्रिक इल्व्स", "अर्नोल्ड रूटेल"],
    "answer_en": "Alar Karis",
    "answer_hi": "अलार करिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which country recently launched 'Lunar Trailblazer' mission?",
    "question_hi": "हाल ही में 'लूनर ट्रेलब्लेजर' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "European Space Agency", "India", "China"],
    "options_hi": ["नासा", "यूरोपीय अंतरिक्ष एजेंसी", "भारत", "चीन"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Who won the 2024 US Open Men's Doubles title?",
    "question_hi": "2024 यूएस ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Rajeev Ram & Joe Salisbury", "Wesley Koolhof & Neal Skupski", "Mate Pavic & Nikola Mektic", "Marcelo Arevalo & Jean-Julien Rojer"],
    "options_hi": ["राजीव राम और जो सैलिसबरी", "वेस्ले कोलहोफ और नील स्कुप्स्की", "माटे पाविक और निकोला मेक्टिक", "मार्सेलो अरेवालो और जीन-जूलियन रोजर"],
    "answer_en": "Rajeev Ram & Joe Salisbury",
    "answer_hi": "राजीव राम और जो सैलिसबरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which Indian city is known as the 'City of Nawabs and Kebabs'?",
    "question_hi": "किस भारतीय शहर को 'नवाबों और कबाबों का शहर' कहा जाता है?",
    "options_en": ["Lucknow", "Hyderabad", "Bhopal", "Rampur"],
    "options_hi": ["लखनऊ", "हैदराबाद", "भोपाल", "रामपुर"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Who is the current Union Minister of New and Renewable Energy?",
    "question_hi": "वर्तमान केंद्रीय नई और नवीकरणीय ऊर्जा मंत्री कौन हैं?",
    "options_en": ["R. K. Singh", "Piyush Goyal", "Nitin Gadkari", "Dharmendra Pradhan"],
    "options_hi": ["आर. के. सिंह", "पीयूष गोयल", "नितिन गडकरी", "धर्मेंद्र प्रधान"],
    "answer_en": "R. K. Singh",
    "answer_hi": "आर. के. सिंह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which country recently launched 'Shukrayaan' mission to Venus?",
    "question_hi": "हाल ही में शुक्र ग्रह पर 'शुक्रयान' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India (planned)", "USA", "European Union", "Not launched yet"],
    "options_hi": ["भारत (योजना)", "यूएसए", "यूरोपीय संघ", "अभी लॉन्च नहीं हुआ"],
    "answer_en": "Not launched yet",
    "answer_hi": "अभी लॉन्च नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Who won the 2024 Australian Open Men's Doubles title?",
    "question_hi": "2024 ऑस्ट्रेलियन ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Rinky Hijikata & Jason Kubler", "Thanasi Kokkinakis & Nick Kyrgios", "Rajeev Ram & Joe Salisbury", "Wesley Koolhof & Neal Skupski"],
    "options_hi": ["रिंकी हिजिकाटा और जेसन कुब्लर", "थानासी कोक्किनाकिस और निक किर्गियोस", "राजीव राम और जो सैलिसबरी", "वेस्ले कोलहोफ और नील स्कुप्स्की"],
    "answer_en": "Rinky Hijikata & Jason Kubler",
    "answer_hi": "रिंकी हिजिकाटा और जेसन कुब्लर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Protsahan Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण प्रोत्साहन योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Haryana"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "हरियाणा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Who is the current Prime Minister of Cyprus?",
    "question_hi": "साइप्रस के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Nikolas Christodoulides", "Nicos Anastasiades", "Dimitris Christofias", "Tassos Papadopoulos"],
    "options_hi": ["निकोलस क्रिस्टोडोउलिड्स", "निकोस अनास्तासियाड्स", "डिमिट्रिस क्रिस्टोफियास", "तासोस पापाडोपोउलोस"],
    "answer_en": "Nikolas Christodoulides",
    "answer_hi": "निकोलस क्रिस्टोडोउलिड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which city will host the 2027 World Aquatics Championships?",
    "question_hi": "2027 विश्व जल क्रीड़ा चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Budapest, Hungary", "Doha, Qatar", "Kazan, Russia", "Not decided yet"],
    "options_hi": ["बुडापेस्ट, हंगरी", "दोहा, कतर", "कज़ान, रूस", "अभी तय नहीं हुआ"],
    "answer_en": "Budapest, Hungary",
    "answer_hi": "बुडापेस्ट, हंगरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Who won the 2024 Jnanpith Award for Malayalam literature?",
    "question_hi": "मलयालम साहित्य के लिए 2024 का ज्ञानपीठ पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "M. T. Vasudevan Nair", "O. N. V. Kurup", "S. K. Pottekkatt"],
    "options_hi": ["घोषित किया जाना है", "एम. टी. वासुदेवन नायर", "ओ. एन. वी. कुरूप", "एस. के. पोट्टेक्कट"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Suraksha Bima Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सुरक्षा बीमा योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Who is the current President of Slovenia?",
    "question_hi": "स्लोवेनिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Nataša Pirc Musar", "Borut Pahor", "Danilo Türk", "Milan Kučan"],
    "options_hi": ["नताशा पिर्क मुसर", "बोरुत पाहोर", "डैनिलो तुर्क", "मिलान कुचान"],
    "answer_en": "Nataša Pirc Musar",
    "answer_hi": "नताशा पिर्क मुसर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which country recently launched 'XRISM' X-ray imaging mission?",
    "question_hi": "हाल ही में 'एक्सआरआईएसएम' एक्स-रे इमेजिंग मिशन किस देश ने लॉन्च किया?",
    "options_en": ["JAXA & NASA", "ESA", "ISRO", "Roscosmos"],
    "options_hi": ["जाक्सा और नासा", "ईएसए", "इसरो", "रोस्कोसमोस"],
    "answer_en": "JAXA & NASA",
    "answer_hi": "जाक्सा और नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Who won the 2024 French Open Men's Singles title?",
    "question_hi": "2024 फ्रेंच ओपन पुरुष एकल खिताब किसने जीता?",
    "options_en": ["Novak Djokovic", "Carlos Alcaraz", "Casper Ruud", "Alexander Zverev"],
    "options_hi": ["नोवाक जोकोविच", "कार्लोस अल्कराज़", "कैस्पर रूड", "अलेक्जेंडर ज़वेरेव"],
    "answer_en": "Novak Djokovic",
    "answer_hi": "नोवाक जोकोविच",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian city is known as the 'City of Residences'?",
    "question_hi": "किस भारतीय शहर को 'आवासों का शहर' कहा जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Who is the current Union Minister of Tourism?",
    "question_hi": "वर्तमान केंद्रीय पर्यटन मंत्री कौन हैं?",
    "options_en": ["G. Kishan Reddy", "Prahlad Singh Patel", "Alphons Kannanthanam", "Mahesh Sharma"],
    "options_hi": ["जी. किशन रेड्डी", "प्रह्लाद सिंह पटेल", "अल्फोंस कन्ननथनम", "महेश शर्मा"],
    "answer_en": "G. Kishan Reddy",
    "answer_hi": "जी. किशन रेड्डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which country recently launched 'INSAT-3DS' meteorological satellite?",
    "question_hi": "हाल ही में 'इनसैट-3डीएस' मौसम विज्ञान उपग्रह किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "Japan", "European Union"],
    "options_hi": ["भारत", "यूएसए", "जापान", "यूरोपीय संघ"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Who won the 2024 Wimbledon Mixed Doubles title?",
    "question_hi": "2024 विंबलडन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Mate Pavic & Lyudmyla Kichenok", "Neal Skupski & Desirae Krawczyk", "John Peers & Zhang Shuai", "Ivan Dodig & Latisha Chan"],
    "options_hi": ["माटे पाविक और ल्यूडमिला किचेनोक", "नील स्कुप्स्की और डेजिरे क्रॉचिक", "जॉन पीयर्स और झांग शुआई", "इवान डोडिग और लतीशा चान"],
    "answer_en": "Mate Pavic & Lyudmyla Kichenok",
    "answer_hi": "माटे पाविक और ल्यूडमिला किचेनोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Sahayak Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण सहायक योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Who is the current Prime Minister of Albania?",
    "question_hi": "अल्बानिया के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Edi Rama", "Sali Berisha", "Fatos Nano", "Pandeli Majko"],
    "options_hi": ["एडी रामा", "साली बेरिशा", "फातोस नानो", "पांडेली माजको"],
    "answer_en": "Edi Rama",
    "answer_hi": "एडी रामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which city will host the 2028 Winter Olympics?",
    "question_hi": "2028 शीतकालीन ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Not decided yet", "Salt Lake City, USA", "Sapporo, Japan", "Vancouver, Canada"],
    "options_hi": ["अभी तय नहीं हुआ", "साल्ट लेक सिटी, यूएसए", "सप्पोरो, जापान", "वैंकूवर, कनाडा"],
    "answer_en": "Not decided yet",
    "answer_hi": "अभी तय नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Who won the 2024 National Film Award for Best Director?",
    "question_hi": "सर्वश्रेष्ठ निर्देशक के लिए 2024 का राष्ट्रीय फिल्म पुरस्कार किसने जीता?",
    "options_en": ["Sanjay Leela Bhansali", "To be announced", "Rajkumar Hirani", "SS Rajamouli"],
    "options_hi": ["संजय लीला भंसाली", "घोषित किया जाना है", "राजकुमार हिरानी", "एसएस राजमौली"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Kalyan Prakoshth Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण प्रकोष्ठ योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Who is the current President of Georgia?",
    "question_hi": "जॉर्जिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Salome Zurabishvili", "Mikheil Saakashvili", "Giorgi Margvelashvili", "Eduard Shevardnadze"],
    "options_hi": ["सालोमे ज़ुराबिश्विली", "मिखाइल साकाशविली", "जॉर्जी मार्गवेलाशविली", "एडुआर्ड शेवर्नदेज़"],
    "answer_en": "Salome Zurabishvili",
    "answer_hi": "सालोमे ज़ुराबिश्विली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which country recently launched 'Emirates Mars Mission' (Hope Probe)?",
    "question_hi": "हाल ही में 'एमिरेट्स मार्स मिशन' (होप प्रोब) किस देश ने लॉन्च किया?",
    "options_en": ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait"],
    "options_hi": ["संयुक्त अरब अमीरात", "सऊदी अरबिया", "कतर", "कुवैत"],
    "answer_en": "United Arab Emirates",
    "answer_hi": "संयुक्त अरब अमीरात",
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