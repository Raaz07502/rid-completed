const questions = [
  {
   "num": 1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Shramik Samman Yojana' for construction workers?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में निर्माण श्रमिकों के लिए 'मुख्यमंत्री श्रमिक सम्मान योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Delhi", "Maharashtra"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "दिल्ली", "महाराष्ट्र"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Who was appointed as the new Director of RAW (Research and Analysis Wing) in 2023?",
    "question_hi": "2023 में रॉ (रिसर्च एंड एनालिसिस विंग) के नए निदेशक के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Ravi Sinha", "Samant Goel", "Anil Dhasmana", "A.K. Verma"],
    "options_hi": ["रवि सिन्हा", "समंत गोयल", "अनिल धस्माना", "ए.के. वर्मा"],
    "answer_en": "Ravi Sinha",
    "answer_hi": "रवि सिन्हा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which country recently changed its name from 'Macedonia' to 'North Macedonia'?",
    "question_hi": "हाल ही में किस देश ने अपना नाम 'मैसेडोनिया' से 'उत्तरी मैसेडोनिया' बदला?",
    "options_en": ["North Macedonia", "Greece", "Bulgaria", "Albania"],
    "options_hi": ["उत्तरी मैसेडोनिया", "ग्रीस", "बुल्गारिया", "अल्बानिया"],
    "answer_en": "North Macedonia",
    "answer_hi": "उत्तरी मैसेडोनिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "Who won the 2023 Moortidevi Award?",
    "question_hi": "2023 का मूर्तिदेवी पुरस्कार किसने जीता?",
    "options_en": ["Vishwanath Tripathi", "Kamleshwar", "Kedarnath Singh", "Not announced yet"],
    "options_hi": ["विश्वनाथ त्रिपाठी", "कमलेश्वर", "केदारनाथ सिंह", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which Indian city hosted the 'G20 Labour and Employment Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 श्रम और रोजगार मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Indore", "Bhopal", "Gwalior", "Jabalpur"],
    "options_hi": ["इंदौर", "भोपाल", "ग्वालियर", "जबलपुर"],
    "answer_en": "Indore",
    "answer_hi": "इंदौर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Who is the current Union Minister of Civil Aviation?",
    "question_hi": "वर्तमान केंद्रीय नागरिक उड्डयन मंत्री कौन हैं?",
    "options_en": ["Jyotiraditya Scindia", "Hardeep Singh Puri", "Ashok Gajapathi Raju", "Ajit Singh"],
    "options_hi": ["ज्योतिरादित्य सिंधिया", "हरदीप सिंह पुरी", "अशोक गजपति राजू", "अजीत सिंह"],
    "answer_en": "Jyotiraditya Scindia",
    "answer_hi": "ज्योतिरादित्य सिंधिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which country recently launched 'BepiColombo' mission to Mercury?",
    "question_hi": "हाल ही में बुध ग्रह पर 'बेपीकोलंबो' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["ESA-JAXA Collaboration", "NASA", "Roscosmos", "CNSA"],
    "options_hi": ["ईएसए-जाक्सा सहयोग", "नासा", "रोस्कोसमोस", "सीएनएसए"],
    "answer_en": "ESA-JAXA Collaboration",
    "answer_hi": "ईएसए-जाक्सा सहयोग",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Who won the 2023 Nobel Prize in Economics?",
    "question_hi": "2023 का अर्थशास्त्र का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["Claudia Goldin", "Ben Bernanke", "Douglas Diamond", "Philip Dybvig"],
    "options_hi": ["क्लाउडिया गोल्डिन", "बेन बर्नान्के", "डगलस डायमंड", "फिलिप डायबविग"],
    "answer_en": "Claudia Goldin",
    "answer_hi": "क्लाउडिया गोल्डिन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kanya Vivah Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री कन्या विवाह योजना' लागू की?",
    "options_en": ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Bihar",
    "answer_hi": "बिहार",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "Who is the current Prime Minister of Singapore?",
    "question_hi": "सिंगापुर के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Lee Hsien Loong", "Goh Chok Tong", "Lee Kuan Yew", "Halimah Yacob"],
    "options_hi": ["ली ह्सियन लूंग", "गोह चोक टोंग", "ली कुआन यू", "हलीमा याकूब"],
    "answer_en": "Lee Hsien Loong",
    "answer_hi": "ली ह्सियन लूंग",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which city will host the 2024 UEFA Champions League Final?",
    "question_hi": "2024 यूईएफए चैंपियंस लीग फाइनल की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["London, UK", "Paris, France", "Madrid, Spain", "Munich, Germany"],
    "options_hi": ["लंदन, यूके", "पेरिस, फ्रांस", "मैड्रिड, स्पेन", "म्यूनिख, जर्मनी"],
    "answer_en": "London, UK",
    "answer_hi": "लंदन, यूके",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Who won the 2023 Bhartiya Jnanpith Award?",
    "question_hi": "2023 का भारतीय ज्ञानपीठ पुरस्कार किसने जीता?",
    "options_en": ["Damodar Mauzo", "Krishna Sobti", "Nirmal Verma", "Not announced yet"],
    "options_hi": ["दामोदर मौजो", "कृष्णा सोबती", "निर्मल वर्मा", "अभी घोषित नहीं हुआ"],
    "answer_en": "Damodar Mauzo",
    "answer_hi": "दामोदर मौजो",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which Indian state launched 'Mukhyamantri Vidyarthi Protsahan Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री विद्यार्थी प्रोत्साहन योजना' शुरू की?",
    "options_en": ["Haryana", "Punjab", "Delhi", "Uttar Pradesh"],
    "options_hi": ["हरियाणा", "पंजाब", "दिल्ली", "उत्तर प्रदेश"],
    "answer_en": "Haryana",
    "answer_hi": "हरियाणा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Who is the current President of South Korea?",
    "question_hi": "दक्षिण कोरिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Yoon Suk Yeol", "Moon Jae-in", "Park Geun-hye", "Lee Myung-bak"],
    "options_hi": ["यून सुक-योल", "मून जे-इन", "पार्क ग्यून-हे", "ली म्युंग-बक"],
    "answer_en": "Yoon Suk Yeol",
    "answer_hi": "यून सुक-योल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which country recently launched 'Euclid' mission to study dark matter?",
    "question_hi": "हाल ही में डार्क मैटर का अध्ययन करने के लिए 'यूक्लिड' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "ISRO", "JAXA"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "इसरो", "जाक्सा"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Who won the 2023 ICC World Test Championship?",
    "question_hi": "2023 आईसीसी विश्व टेस्ट चैम्पियनशिप किसने जीता?",
    "options_en": ["Australia", "India", "New Zealand", "England"],
    "options_hi": ["ऑस्ट्रेलिया", "भारत", "न्यूजीलैंड", "इंग्लैंड"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Which Indian city is known as the 'Venice of the East'?",
    "question_hi": "किस भारतीय शहर को 'पूर्व का वेनिस' कहा जाता है?",
    "options_en": ["Udaipur", "Alleppey", "Kolkata", "Mumbai"],
    "options_hi": ["उदयपुर", "अलाप्पुझा", "कोलकाता", "मुंबई"],
    "answer_en": "Alleppey",
    "answer_hi": "अलाप्पुझा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "Who is the current Union Minister of Information and Broadcasting?",
    "question_hi": "वर्तमान केंद्रीय सूचना और प्रसारण मंत्री कौन हैं?",
    "options_en": ["Anurag Thakur", "Prakash Javadekar", "Smriti Irani", "Arun Jaitley"],
    "options_hi": ["अनुराग ठाकुर", "प्रकाश जावड़ेकर", "स्मृति ईरानी", "अरुण जेटली"],
    "answer_en": "Anurag Thakur",
    "answer_hi": "अनुराग ठाकुर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Which country recently launched 'Tianwen-1' mission to Mars?",
    "question_hi": "हाल ही में मंगल ग्रह पर 'तियानवेन-1' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["China", "USA", "Russia", "India"],
    "options_hi": ["चीन", "यूएसए", "रूस", "भारत"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Who won the 2023 French Open Men's Doubles title?",
    "question_hi": "2023 फ्रेंच ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Ivan Dodig & Austin Krajicek", "Rajeev Ram & Joe Salisbury", "Mate Pavic & Nikola Mektic", "Marcelo Arevalo & Jean-Julien Rojer"],
    "options_hi": ["इवान डोडिग और ऑस्टिन क्रैजिसेक", "राजीव राम और जो सैलिसबरी", "माटे पाविक और निकोला मेक्टिक", "मार्सेलो अरेवालो और जीन-जूलियन रोजर"],
    "answer_en": "Ivan Dodig & Austin Krajicek",
    "answer_hi": "इवान डोडिग और ऑस्टिन क्रैजिसेक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Nari Shakti Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री नारी शक्ति योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "Who is the current Prime Minister of Malaysia?",
    "question_hi": "मलेशिया के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Anwar Ibrahim", "Muhyiddin Yassin", "Mahathir Mohamad", "Najib Razak"],
    "options_hi": ["अनवर इब्राहिम", "मुह्यिद्दीन यासिन", "महाथिर मोहमद", "नजीब रजाक"],
    "answer_en": "Anwar Ibrahim",
    "answer_hi": "अनवर इब्राहिम",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 23,
    "question_en": "Which city will host the 2025 Rugby World Cup?",
    "question_hi": "2025 रग्बी विश्व कप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Australia", "France", "England", "New Zealand"],
    "options_hi": ["ऑस्ट्रेलिया", "फ्रांस", "इंग्लैंड", "न्यूजीलैंड"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 24,
    "question_en": "Who won the 2023 Kabir Award?",
    "question_hi": "2023 का कबीर पुरस्कार किसने जीता?",
    "options_en": ["Gulzar", "Javed Akhtar", "Prasoon Joshi", "Not announced yet"],
    "options_hi": ["गुलज़ार", "जावेद अख्तर", "प्रसून जोशी", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 25,
    "question_en": "Which Indian state implemented 'Mukhyamantri Swasthya Suraksha Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री स्वास्थ्य सुरक्षा योजना' लागू की?",
    "options_en": ["Chhattisgarh", "Jharkhand", "Odisha", "West Bengal"],
    "options_hi": ["छत्तीसगढ़", "झारखंड", "ओडिशा", "पश्चिम बंगाल"],
    "answer_en": "Chhattisgarh",
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "Who is the current President of Israel?",
    "question_hi": "इज़राइल के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Isaac Herzog", "Reuven Rivlin", "Shimon Peres", "Ezer Weizman"],
    "options_hi": ["आइज़क हर्ज़ोग", "रूवेन रिवलिन", "शिमोन पेरेस", "एज़र वीज़मैन"],
    "answer_en": "Isaac Herzog",
    "answer_hi": "आइज़क हर्ज़ोग",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which country recently launched 'IXPE' mission to study X-rays from space?",
    "question_hi": "हाल ही में अंतरिक्ष से एक्स-रे का अध्ययन करने के लिए 'आईएक्सपीई' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "ESA", "ISRO", "Roscosmos"],
    "options_hi": ["नासा", "ईएसए", "इसरो", "रोस्कोसमोस"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "Who won the 2023 Wimbledon Women's Doubles title?",
    "question_hi": "2023 विंबलडन महिला युगल खिताब किसने जीता?",
    "options_en": ["Hsieh Su-wei & Barbora Strýcová", "Barbora Krejcikova & Katerina Siniakova", "Elise Mertens & Zhang Shuai", "Gabriela Dabrowski & Luisa Stefani"],
    "options_hi": ["ह्सिएह सु-वेई और बारबोरा स्ट्राइकोवा", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "एलिस मर्टेंस और झांग शुआई", "गैब्रिएला डबरोव्स्की और लुइसा स्टेफनी"],
    "answer_en": "Hsieh Su-wei & Barbora Strýcová",
    "answer_hi": "ह्सिएह सु-वेई और बारबोरा स्ट्राइकोवा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Which Indian city is known as the 'City of Palaces'?",
    "question_hi": "किस भारतीय शहर को 'महलों का शहर' कहा जाता है?",
    "options_en": ["Mysore", "Kolkata", "Jaipur", "Udaipur"],
    "options_hi": ["मैसूर", "कोलकाता", "जयपुर", "उदयपुर"],
    "answer_en": "Mysore",
    "answer_hi": "मैसूर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "Who is the current Union Minister of Tribal Affairs?",
    "question_hi": "वर्तमान केंद्रीय जनजातीय कार्य मंत्री कौन हैं?",
    "options_en": ["Arjun Munda", "Jual Oram", "Kishan Reddy", "Vishnu Deo Sai"],
    "options_hi": ["अर्जुन मुंडा", "जुआल ओरम", "किशन रेड्डी", "विष्णु देव साई"],
    "answer_en": "Arjun Munda",
    "answer_hi": "अर्जुन मुंडा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which country recently launched 'Gaia' mission to map the Milky Way?",
    "question_hi": "हाल ही में मिल्की वे का मानचित्रण करने के लिए 'गैया' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "JAXA", "CNSA"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "जाक्सा", "सीएनएसए"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "Who won the 2023 US Open Women's Doubles title?",
    "question_hi": "2023 यूएस ओपन महिला युगल खिताब किसने जीता?",
    "options_en": ["Gabriela Dabrowski & Erin Routliffe", "Barbora Krejcikova & Katerina Siniakova", "Coco Gauff & Jessica Pegula", "Samantha Stosur & Zhang Shuai"],
    "options_hi": ["गैब्रिएला डबरोव्स्की और एरिन राउटलिफ", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "कोको गॉफ और जेसिका पेगुला", "सामंथा स्टोसुर और झांग शुआई"],
    "answer_en": "Gabriela Dabrowski & Erin Routliffe",
    "answer_hi": "गैब्रिएला डबरोव्स्की और एरिन राउटलिफ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Rin Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान कल्याण ऋण योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "Who is the current Prime Minister of Thailand?",
    "question_hi": "थाईलैंड के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Srettha Thavisin", "Prayuth Chan-o-cha", "Yingluck Shinawatra", "Thaksin Shinawatra"],
    "options_hi": ["श्रेट्ठा थाविसिन", "प्रयुथ चान-ओ-चा", "यिंगलक शिनावात्रा", "थाक्सिन शिनावात्रा"],
    "answer_en": "Srettha Thavisin",
    "answer_hi": "श्रेट्ठा थाविसिन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Which city will host the 2027 Cricket World Cup?",
    "question_hi": "2027 क्रिकेट विश्व कप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["South Africa, Zimbabwe & Namibia", "India", "Australia", "England"],
    "options_hi": ["दक्षिण अफ्रीका, जिम्बाब्वे और नामीबिया", "भारत", "ऑस्ट्रेलिया", "इंग्लैंड"],
    "answer_en": "South Africa, Zimbabwe & Namibia",
    "answer_hi": "दक्षिण अफ्रीका, जिम्बाब्वे और नामीबिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "Who won the 2023 Saraswati Award?",
    "question_hi": "2023 का सरस्वती पुरस्कार किसने जीता?",
    "options_en": ["Bharat Bhushan Agarwal", "Kedar Nath Singh", "Mahadevi Verma", "Not announced yet"],
    "options_hi": ["भरत भूषण अग्रवाल", "केदार नाथ सिंह", "महादेवी वर्मा", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which Indian state implemented 'Mukhyamantri Jal Jeevan Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री जल जीवन योजना' लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Odisha"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "ओडिशा"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "Who is the current President of Saudi Arabia?",
    "question_hi": "सऊदी अरब के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["King Salman bin Abdulaziz", "King Abdullah", "King Fahd", "King Khalid"],
    "options_hi": ["राजा सलमान बिन अब्दुलअज़ीज़", "राजा अब्दुल्ला", "राजा फहद", "राजा खालिद"],
    "answer_en": "King Salman bin Abdulaziz",
    "answer_hi": "राजा सलमान बिन अब्दुलअज़ीज़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which country recently launched 'Parker Solar Probe' to study the Sun?",
    "question_hi": "हाल ही में सूर्य का अध्ययन करने के लिए 'पार्कर सोलर प्रोब' किस देश ने लॉन्च किया?",
    "options_en": ["USA", "European Union", "Japan", "China"],
    "options_hi": ["यूएसए", "यूरोपीय संघ", "जापान", "चीन"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "Who won the 2023 Australian Open Mixed Doubles title?",
    "question_hi": "2023 ऑस्ट्रेलियन ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Luisa Stefani & Rafael Matos", "Sania Mirza & Rohan Bopanna", "Kristina Mladenovic & Ivan Dodig", "Bethanie Mattek-Sands & Jamie Murray"],
    "options_hi": ["लुइसा स्टेफनी और राफेल माटोस", "सानिया मिर्जा और रोहन बोपन्ना", "क्रिस्टीना म्लादेनोविक और इवान डोडिग", "बेथनी मैटेक-सैंड्स और जेमी मरे"],
    "answer_en": "Luisa Stefani & Rafael Matos",
    "answer_hi": "लुइसा स्टेफनी और राफेल माटोस",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which Indian city is known as the 'Blue City'?",
    "question_hi": "किस भारतीय शहर को 'नीला शहर' कहा जाता है?",
    "options_en": ["Jodhpur", "Jaipur", "Udaipur", "Jaisalmer"],
    "options_hi": ["जोधपुर", "जयपुर", "उदयपुर", "जैसलमेर"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Who is the current Union Minister of Minority Affairs?",
    "question_hi": "वर्तमान केंद्रीय अल्पसंख्यक कार्य मंत्री कौन हैं?",
    "options_en": ["Smriti Irani", "Mukhtar Abbas Naqvi", "Najma Heptulla", "K. Rahman Khan"],
    "options_hi": ["स्मृति ईरानी", "मुख्तार अब्बास नकवी", "नजमा हेपतुल्ला", "के. रहमान खान"],
    "answer_en": "Smriti Irani",
    "answer_hi": "स्मृति ईरानी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which country recently launched 'Chandrayaan-3' mission?",
    "question_hi": "हाल ही में 'चंद्रयान-3' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "China", "USA", "Russia"],
    "options_hi": ["भारत", "चीन", "यूएसए", "रूस"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Who won the 2023 French Open Mixed Doubles title?",
    "question_hi": "2023 फ्रेंच ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Miyu Kato & Tim Puetz", "Sania Mirza & Ivan Dodig", "Bethanie Mattek-Sands & Jamie Murray", "Gabriela Dabrowski & Mate Pavic"],
    "options_hi": ["मियू काटो और टिम पुएत्ज़", "सानिया मिर्जा और इवान डोडिग", "बेथनी मैटेक-सैंड्स और जेमी मरे", "गैब्रिएला डबरोव्स्की और माटे पाविक"],
    "answer_en": "Miyu Kato & Tim Puetz",
    "answer_hi": "मियू काटो और टिम पुएत्ज़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sahay Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान सहाय योजना' शुरू की?",
    "options_en": ["Gujarat", "Maharashtra", "Karnataka", "Andhra Pradesh"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "कर्नाटक", "आंध्र प्रदेश"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Who is the current Prime Minister of Vietnam?",
    "question_hi": "वियतनाम के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Pham Minh Chinh", "Nguyen Xuan Phuc", "Nguyen Tan Dung", "Phan Van Khai"],
    "options_hi": ["फ़ाम मिन्ह चिन्ह", "गुयेन जुआन फुक", "गुयेन तान डुंग", "फान वान खाई"],
    "answer_en": "Pham Minh Chinh",
    "answer_hi": "फ़ाम मिन्ह चिन्ह",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Which city will host the 2028 Paralympic Games?",
    "question_hi": "2028 पैरालंपिक खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Los Angeles, USA", "Paris, France", "Tokyo, Japan", "London, UK"],
    "options_hi": ["लॉस एंजिल्स, यूएसए", "पेरिस, फ्रांस", "टोक्यो, जापान", "लंदन, यूके"],
    "answer_en": "Los Angeles, USA",
    "answer_hi": "लॉस एंजिल्स, यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "Who won the 2023 Tansen Award?",
    "question_hi": "2023 का तानसेन पुरस्कार किसने जीता?",
    "options_en": ["Pandit Jasraj", "Ustad Amjad Ali Khan", "Ustad Zakir Hussain", "Not announced yet"],
    "options_hi": ["पंडित जसराज", "उस्ताद अमजद अली खान", "उस्ताद ज़ाकिर हुसैन", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which Indian state implemented 'Mukhyamantri Swasthya Bhavishya Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री स्वास्थ्य भविष्य योजना' लागू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Rajasthan"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "बिहार", "राजस्थान"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "Who is the current President of Argentina?",
    "question_hi": "अर्जेंटीना के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Javier Milei", "Alberto Fernández", "Mauricio Macri", "Cristina Fernández de Kirchner"],
    "options_hi": ["जेवियर मिलेई", "अल्बर्टो फर्नांडेज़", "मॉरिशियो मैकरी", "क्रिस्टीना फर्नांडेज़ डी किर्चनर"],
    "answer_en": "Javier Milei",
    "answer_hi": "जेवियर मिलेई",
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