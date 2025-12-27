const questions = [
  {
   "num": 1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Arogya Yojana' for universal health coverage?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में सार्वभौमिक स्वास्थ्य कवरेज के लिए 'मुख्यमंत्री आरोग्य योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Chhattisgarh"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "छत्तीसगढ़"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Who was appointed as the new Chief of Defence Staff (CDS) in 2024?",
    "question_hi": "2024 में नए रक्षा प्रमुख (सीडीएस) के रूप में किसे नियुक्त किया गया?",
    "options_en": ["General Anil Chauhan", "General Bipin Rawat", "General Manoj Pande", "Not announced yet"],
    "options_hi": ["जनरल अनिल चौहान", "जनरल बिपिन रावत", "जनरल मनोज पांडे", "अभी घोषित नहीं हुआ"],
    "answer_en": "General Anil Chauhan",
    "answer_hi": "जनरल अनिल चौहान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which country recently changed its official name to 'Republic of Türkiye'?",
    "question_hi": "हाल ही में किस देश ने अपना आधिकारिक नाम 'तुर्कीए गणराज्य' बदला?",
    "options_en": ["Turkey", "Turkmenistan", "Tunisia", "Tajikistan"],
    "options_hi": ["तुर्की", "तुर्कमेनिस्तान", "ट्यूनीशिया", "ताजिकिस्तान"],
    "answer_en": "Turkey",
    "answer_hi": "तुर्की",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "Who won the 2024 Padma Bhushan award in the field of arts?",
    "question_hi": "कला के क्षेत्र में 2024 का पद्म भूषण पुरस्कार किसने जीता?",
    "options_en": ["Sudha Murthy", "Raveena Tandon", "Vikram Seth", "Multiple recipients"],
    "options_hi": ["सुधा मूर्ति", "रवीना टंडन", "विक्रम सेठ", "कई प्राप्तकर्ता"],
    "answer_en": "Multiple recipients",
    "answer_hi": "कई प्राप्तकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which Indian city hosted the 'G20 Science Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 विज्ञान मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Mumbai", "Kolkata", "Pune", "Ahmedabad"],
    "options_hi": ["मुंबई", "कोलकाता", "पुणे", "अहमदाबाद"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Who is the current Union Minister of Rural Development?",
    "question_hi": "वर्तमान केंद्रीय ग्रामीण विकास मंत्री कौन हैं?",
    "options_en": ["Giriraj Singh", "Narendra Singh Tomar", "Jairam Ramesh", "Gopinath Munde"],
    "options_hi": ["गिरिराज सिंह", "नरेंद्र सिंह तोमर", "जयराम रमेश", "गोपीनाथ मुंडे"],
    "answer_en": "Giriraj Singh",
    "answer_hi": "गिरिराज सिंह",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which country recently launched 'Europa Clipper' mission to Jupiter's moon Europa?",
    "question_hi": "हाल ही में बृहस्पति के चंद्रमा यूरोपा पर 'यूरोपा क्लिपर' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "European Union", "Japan", "China"],
    "options_hi": ["यूएसए", "यूरोपीय संघ", "जापान", "चीन"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Who won the 2024 Nobel Peace Prize?",
    "question_hi": "2024 का नोबेल शांति पुरस्कार किसने जीता?",
    "options_en": ["To be announced in October 2024", "Narges Mohammadi", "Maria Ressa", "World Food Programme"],
    "options_hi": ["अक्टूबर 2024 में घोषित किया जाएगा", "नरगेस मोहम्मदी", "मारिया रेसा", "विश्व खाद्य कार्यक्रम"],
    "answer_en": "To be announced in October 2024",
    "answer_hi": "अक्टूबर 2024 में घोषित किया जाएगा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Balika Protsahan Yojana' for girl child education?",
    "question_hi": "बालिका शिक्षा के लिए 'मुख्यमंत्री बालिका प्रोत्साहन योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Haryana", "Rajasthan", "Uttar Pradesh", "Bihar"],
    "options_hi": ["हरियाणा", "राजस्थान", "उत्तर प्रदेश", "बिहार"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "Who is the current Prime Minister of Austria?",
    "question_hi": "ऑस्ट्रिया के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Karl Nehammer", "Sebastian Kurz", "Brigitte Bierlein", "Christian Kern"],
    "options_hi": ["कार्ल नेहमर", "सेबेस्टियन कुर्त्ज़", "ब्रिगिट बायरलिन", "क्रिश्चियन कर्न"],
    "answer_en": "Karl Nehammer",
    "answer_hi": "कार्ल नेहमर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which city will host the 2025 World Wrestling Championships?",
    "question_hi": "2025 विश्व कुश्ती चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Belgrade, Serbia", "Budapest, Hungary", "Tokyo, Japan", "Paris, France"],
    "options_hi": ["बेलग्रेड, सर्बिया", "बुडापेस्ट, हंगरी", "टोक्यो, जापान", "पेरिस, फ्रांस"],
    "answer_en": "Belgrade, Serbia",
    "answer_hi": "बेलग्रेड, सर्बिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Who won the 2024 Sahitya Akademi Award for English literature?",
    "question_hi": "अंग्रेजी साहित्य के लिए 2024 का साहित्य अकादमी पुरस्कार किसने जीता?",
    "options_en": ["Amitav Ghosh", "Salman Rushdie", "Not announced yet", "No award this year"],
    "options_hi": ["अमिताव घोष", "सलमान रुश्दी", "अभी घोषित नहीं हुआ", "इस वर्ष कोई पुरस्कार नहीं"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which Indian state launched 'Mukhyamantri Udyog Kranti Yojana' for industrial development?",
    "question_hi": "औद्योगिक विकास के लिए 'मुख्यमंत्री उद्योग क्रांति योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Gujarat", "Maharashtra", "Tamil Nadu"],
    "options_hi": ["उत्तर प्रदेश", "गुजरात", "महाराष्ट्र", "तमिलनाडु"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Who is the current President of Chile?",
    "question_hi": "चिली के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Gabriel Boric", "Sebastián Piñera", "Michelle Bachelet", "Ricardo Lagos"],
    "options_hi": ["गेब्रियल बोरिक", "सेबेस्टियन पिनेरा", "मिशेल बाचेलेट", "रिकार्डो लागोस"],
    "answer_en": "Gabriel Boric",
    "answer_hi": "गेब्रियल बोरिक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which country recently launched 'Plato' mission to search for exoplanets?",
    "question_hi": "हाल ही में बाह्यग्रहों की खोज के लिए 'प्लेटो' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "China", "India"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "चीन", "भारत"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Who won the 2024 ICC Women's T20 World Cup?",
    "question_hi": "2024 आईसीसी महिला टी20 विश्व कप किसने जीता?",
    "options_en": ["Australia", "England", "India", "South Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "इंग्लैंड", "भारत", "दक्षिण अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Which Indian city is known as the 'City of Festivals'?",
    "question_hi": "किस भारतीय शहर को 'त्योहारों का शहर' कहा जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Jaipur"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "जयपुर"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "Who is the current Union Minister of Development of North Eastern Region?",
    "question_hi": "वर्तमान केंद्रीय पूर्वोत्तर क्षेत्र विकास मंत्री कौन हैं?",
    "options_en": ["G. Kishan Reddy", "Jitendra Singh", "Kiren Rijiju", "Manohar Parrikar"],
    "options_hi": ["जी. किशन रेड्डी", "जितेंद्र सिंह", "किरेन रिजिजू", "मनोहर पर्रीकर"],
    "answer_en": "G. Kishan Reddy",
    "answer_hi": "जी. किशन रेड्डी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Which country recently launched 'Tianwen-2' mission to collect asteroid samples?",
    "question_hi": "हाल ही में क्षुद्रग्रह नमूने एकत्र करने के लिए 'तियानवेन-2' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["China", "USA", "Japan", "Russia"],
    "options_hi": ["चीन", "यूएसए", "जापान", "रूस"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Who won the 2024 French Open Women's Singles title?",
    "question_hi": "2024 फ्रेंच ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Iga Swiatek", "Aryna Sabalenka", "Coco Gauff", "Elena Rybakina"],
    "options_hi": ["इगा स्विएटेक", "आरिना सबलेन्का", "कोको गॉफ", "एलेना रायबाकिना"],
    "answer_en": "Iga Swiatek",
    "answer_hi": "इगा स्विएटेक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sashaktikaran Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सशक्तिकरण योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "Who is the current Prime Minister of Portugal?",
    "question_hi": "पुर्तगाल के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Luís Montenegro", "António Costa", "Pedro Passos Coelho", "José Sócrates"],
    "options_hi": ["लुइस मोंटेनेग्रो", "एंटोनियो कोस्टा", "पेड्रो पासोस कोएल्हो", "जोस सोक्रेट्स"],
    "answer_en": "Luís Montenegro",
    "answer_hi": "लुइस मोंटेनेग्रो",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Which city will host the 2026 Commonwealth Games?",
    "question_hi": "2026 राष्ट्रमंडल खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Victoria, Australia", "Birmingham, UK", "Kuala Lumpur, Malaysia", "No host decided yet"],
    "options_hi": ["विक्टोरिया, ऑस्ट्रेलिया", "बर्मिंघम, यूके", "कुआलालंपुर, मलेशिया", "अभी कोई मेजबान तय नहीं हुआ"],
    "answer_en": "No host decided yet",
    "answer_hi": "अभी कोई मेजबान तय नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "Who won the 2024 Jnanpith Award?",
    "question_hi": "2024 का ज्ञानपीठ पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Damodar Mauzo", "Krishna Sobti", "Nirmal Verma"],
    "options_hi": ["घोषित किया जाना है", "दामोदर मौजो", "कृष्णा सोबती", "निर्मल वर्मा"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which Indian state implemented 'Mukhyamantri Shiksha Sudhar Yojana'?",
    "question_hi": "'मुख्यमंत्री शिक्षा सुधार योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "Who is the current President of Peru?",
    "question_hi": "पेरू के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Dina Boluarte", "Pedro Castillo", "Martín Vizcarra", "Ollanta Humala"],
    "options_hi": ["दीना बोलुआर्ते", "पेड्रो कैस्टिलो", "मार्टिन विजकारा", "ओलांता हुमाला"],
    "answer_en": "Dina Boluarte",
    "answer_hi": "दीना बोलुआर्ते",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which country recently launched 'Comet Interceptor' mission?",
    "question_hi": "हाल ही में 'धूमकेतु इंटरसेप्टर' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "JAXA", "Roscosmos"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "जाक्सा", "रोस्कोसमोस"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "Who won the 2024 Wimbledon Men's Singles title?",
    "question_hi": "2024 विंबलडन पुरुष एकल खिताब किसने जीता?",
    "options_en": ["Carlos Alcaraz", "Novak Djokovic", "Jannik Sinner", "Daniil Medvedev"],
    "options_hi": ["कार्लोस अल्कराज़", "नोवाक जोकोविच", "जानिक सिनर", "डेनियल मेदवेदेव"],
    "answer_en": "Carlos Alcaraz",
    "answer_hi": "कार्लोस अल्कराज़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Which Indian city is known as the 'City of Textiles'?",
    "question_hi": "किस भारतीय शहर को 'वस्त्रों का शहर' कहा जाता है?",
    "options_en": ["Surat", "Coimbatore", "Ludhiana", "Tiruppur"],
    "options_hi": ["सूरत", "कोयंबटूर", "लुधियाना", "तिरुप्पुर"],
    "answer_en": "Coimbatore",
    "answer_hi": "कोयंबटूर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "Who is the current Union Minister of Skill Development and Entrepreneurship?",
    "question_hi": "वर्तमान केंद्रीय कौशल विकास और उद्यमिता मंत्री कौन हैं?",
    "options_en": ["Dharmendra Pradhan", "Rajeev Chandrasekhar", "Mahendra Nath Pandey", "Sarbananda Sonowal"],
    "options_hi": ["धर्मेंद्र प्रधान", "राजीव चंद्रशेखर", "महेंद्र नाथ पांडे", "सर्बानंद सोनोवाल"],
    "answer_en": "Dharmendra Pradhan",
    "answer_hi": "धर्मेंद्र प्रधान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which country recently launched 'Aditya-L1' solar mission?",
    "question_hi": "हाल ही में 'आदित्य-एल1' सौर मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "European Union", "China"],
    "options_hi": ["भारत", "यूएसए", "यूरोपीय संघ", "चीन"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
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
   "num": 33,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Pradarshani Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण प्रदर्शनी योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Haryana"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "हरियाणा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "Who is the current Prime Minister of Belgium?",
    "question_hi": "बेल्जियम के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Alexander De Croo", "Charles Michel", "Sophie Wilmès", "Elio Di Rupo"],
    "options_hi": ["अलेक्जेंडर डे क्रो", "चार्ल्स मिशेल", "सोफी विल्मेस", "एलियो डी रूपो"],
    "answer_en": "Alexander De Croo",
    "answer_hi": "अलेक्जेंडर डे क्रो",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Which city will host the 2027 World Athletics Championships?",
    "question_hi": "2027 विश्व एथलेटिक्स चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Budapest, Hungary", "Eugene, USA", "London, UK", "Beijing, China"],
    "options_hi": ["बुडापेस्ट, हंगरी", "यूजीन, यूएसए", "लंदन, यूके", "बीजिंग, चीन"],
    "answer_en": "Budapest, Hungary",
    "answer_hi": "बुडापेस्ट, हंगरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "Who won the 2024 National Film Award for Best Actress?",
    "question_hi": "सर्वश्रेष्ठ अभिनेत्री के लिए 2024 का राष्ट्रीय फिल्म पुरस्कार किसने जीता?",
    "options_en": ["Alia Bhatt", "Kangana Ranaut", "Vidya Balan", "Not announced yet"],
    "options_hi": ["आलिया भट्ट", "कंगना रनौत", "विद्या बालन", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which Indian state implemented 'Mukhyamantri Berojgari Bhatta Yojana'?",
    "question_hi": "'मुख्यमंत्री बेरोजगारी भत्ता योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Delhi", "Punjab", "Haryana", "Uttar Pradesh"],
    "options_hi": ["दिल्ली", "पंजाब", "हरियाणा", "उत्तर प्रदेश"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "Who is the current President of Kazakhstan?",
    "question_hi": "कजाखस्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Kassym-Jomart Tokayev", "Nursultan Nazarbayev", "Qasym-Jomart Toqayev", "Imangali Tasmagambetov"],
    "options_hi": ["कासिम-जोमार्ट टोकायेव", "नूरसुल्तान नज़रबायेव", "कासिम-जोमार्ट तोकायेव", "इमांगली तास्मागंबेतोव"],
    "answer_en": "Kassym-Jomart Tokayev",
    "answer_hi": "कासिम-जोमार्ट टोकायेव",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 39,
    "question_en": "Which country recently launched 'Mars 2020' mission with Perseverance rover?",
    "question_hi": "हाल ही में परसेवरेंस रोवर के साथ 'मार्स 2020' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "China", "European Union", "Russia"],
    "options_hi": ["यूएसए", "चीन", "यूरोपीय संघ", "रूस"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 40,
    "question_en": "Who won the 2024 US Open Women's Singles title?",
    "question_hi": "2024 यूएस ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Coco Gauff", "Aryna Sabalenka", "Iga Swiatek", "Elena Rybakina"],
    "options_hi": ["कोको गॉफ", "आरिना सबलेन्का", "इगा स्विएटेक", "एलेना रायबाकिना"],
    "answer_en": "Coco Gauff",
    "answer_hi": "कोको गॉफ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which Indian city is known as the 'City of Canals'?",
    "question_hi": "किस भारतीय शहर को 'नहरों का शहर' कहा जाता है?",
    "options_en": ["Udaipur", "Alleppey", "Kolkata", "Varanasi"],
    "options_hi": ["उदयपुर", "अलाप्पुझा", "कोलकाता", "वाराणसी"],
    "answer_en": "Alleppey",
    "answer_hi": "अलाप्पुझा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Who is the current Union Minister of Fisheries, Animal Husbandry and Dairying?",
    "question_hi": "वर्तमान केंद्रीय मत्स्य पालन, पशुपालन और डेयरी मंत्री कौन हैं?",
    "options_en": ["Parshottam Rupala", "Radha Mohan Singh", "Giriraj Singh", "Shivraj Singh Chouhan"],
    "options_hi": ["परषोत्तम रूपाला", "राधा मोहन सिंह", "गिरिराज सिंह", "शिवराज सिंह चौहान"],
    "answer_en": "Parshottam Rupala",
    "answer_hi": "परषोत्तम रूपाला",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which country recently launched 'Gaganyaan' manned space mission?",
    "question_hi": "हाल ही में 'गगनयान' मानव अंतरिक्ष मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "China", "USA", "Russia"],
    "options_hi": ["भारत", "चीन", "यूएसए", "रूस"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Who won the 2024 French Open Men's Doubles title?",
    "question_hi": "2024 फ्रेंच ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Marcelo Arevalo & Jean-Julien Rojer", "Rajeev Ram & Joe Salisbury", "Wesley Koolhof & Neal Skupski", "Ivan Dodig & Austin Krajicek"],
    "options_hi": ["मार्सेलो अरेवालो और जीन-जूलियन रोजर", "राजीव राम और जो सैलिसबरी", "वेस्ले कोलहोफ और नील स्कुप्स्की", "इवान डोडिग और ऑस्टिन क्रैजिसेक"],
    "answer_en": "Marcelo Arevalo & Jean-Julien Rojer",
    "answer_hi": "मार्सेलो अरेवालो और जीन-जूलियन रोजर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sahayata Kendra Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सहायता केंद्र योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Who is the current Prime Minister of Switzerland?",
    "question_hi": "स्विट्जरलैंड के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Alain Berset", "Guy Parmelin", "Simonetta Sommaruga", "Ueli Maurer"],
    "options_hi": ["एलेन बरसेट", "गाय पार्मेलिन", "सिमोनेटा सोम्मारुगा", "उएली मौरर"],
    "answer_en": "Alain Berset",
    "answer_hi": "एलेन बरसेट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Which city will host the 2028 Summer Paralympics?",
    "question_hi": "2028 ग्रीष्मकालीन पैरालंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Los Angeles, USA", "Paris, France", "Tokyo, Japan", "London, UK"],
    "options_hi": ["लॉस एंजिल्स, यूएसए", "पेरिस, फ्रांस", "टोक्यो, जापान", "लंदन, यूके"],
    "answer_en": "Los Angeles, USA",
    "answer_hi": "लॉस एंजिल्स, यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "Who won the 2024 Bharat Ratna award?",
    "question_hi": "2024 का भारत रत्न पुरस्कार किसने जीता?",
    "options_en": ["L.K. Advani", "M.S. Swaminathan", "Charan Singh", "Multiple recipients"],
    "options_hi": ["एल.के. आडवाणी", "एम.एस. स्वामीनाथन", "चरण सिंह", "कई प्राप्तकर्ता"],
    "answer_en": "Multiple recipients",
    "answer_hi": "कई प्राप्तकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which Indian state implemented 'Mukhyamantri Jan Bhagidari Yojana'?",
    "question_hi": "'मुख्यमंत्री जन भागीदारी योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Delhi"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "दिल्ली"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "Who is the current President of Uzbekistan?",
    "question_hi": "उज़्बेकिस्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Shavkat Mirziyoyev", "Islam Karimov", "Abdulla Aripov", "Sadyr Japarov"],
    "options_hi": ["शवकत मिर्ज़ियोयेव", "इस्लाम करीमोव", "अब्दुल्ला अरिपोव", "सादिर जापारोव"],
    "answer_en": "Shavkat Mirziyoyev",
    "answer_hi": "शवकत मिर्ज़ियोयेव",
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