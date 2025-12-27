const questions = [
  {
   "num": 1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Kisan Samman Nidhi Yojana'?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में 'मुख्यमंत्री किसान सम्मान निधि योजना' शुरू की?",
    "options_en": ["Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "Punjab"],
    "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "जम्मू और कश्मीर", "पंजाब"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Who was appointed as the new Chief of Air Staff in 2023?",
    "question_hi": "2023 में वायु सेना प्रमुख के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Air Chief Marshal V.R. Chaudhari", "Air Chief Marshal R.K.S. Bhadauria", "Air Chief Marshal B.S. Dhanoa", "Air Chief Marshal Arup Raha"],
    "options_hi": ["एयर चीफ मार्शल वी.आर. चौधरी", "एयर चीफ मार्शल आर.के.एस. भदौरिया", "एयर चीफ मार्शल बी.एस. धनोआ", "एयर चीफ मार्शल अरूप राहा"],
    "answer_en": "Air Chief Marshal V.R. Chaudhari",
    "answer_hi": "एयर चीफ मार्शल वी.आर. चौधरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which country recently changed its name from 'Czech Republic' to 'Czechia'?",
    "question_hi": "हाल ही में किस देश ने अपना नाम 'चेक रिपब्लिक' से 'चेकिया' बदला?",
    "options_en": ["Czech Republic", "Slovakia", "Hungary", "Poland"],
    "options_hi": ["चेक रिपब्लिक", "स्लोवाकिया", "हंगरी", "पोलैंड"],
    "answer_en": "Czech Republic",
    "answer_hi": "चेक रिपब्लिक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "Who won the 2023 Saraswati Samman?",
    "question_hi": "2023 का सरस्वती सम्मान किसने जीता?",
    "options_en": ["Padma Sachdev", "Vishwanath Prasad Tiwari", "Kamal Kishore Goenka", "Not announced yet"],
    "options_hi": ["पद्मा सचदेव", "विश्वनाथ प्रसाद तिवारी", "कमल किशोर गोयनका", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which Indian city hosted the 'G20 Agriculture Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 कृषि मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Hyderabad", "Bangalore", "Chandigarh", "Lucknow"],
    "options_hi": ["हैदराबाद", "बैंगलोर", "चंडीगढ़", "लखनऊ"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Who is the current Union Minister of Road Transport and Highways?",
    "question_hi": "वर्तमान केंद्रीय सड़क परिवहन और राजमार्ग मंत्री कौन हैं?",
    "options_en": ["Nitin Gadkari", "Kamal Nath", "C.P. Joshi", "Oscar Fernandes"],
    "options_hi": ["नितिन गडकरी", "कमल नाथ", "सी.पी. जोशी", "ऑस्कर फर्नांडिस"],
    "answer_en": "Nitin Gadkari",
    "answer_hi": "नितिन गडकरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which country recently launched 'Psyche' mission to study a metal-rich asteroid?",
    "question_hi": "हाल ही में धातु से भरपूर क्षुद्रग्रह का अध्ययन करने के लिए 'साइकी' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "China", "Japan", "European Union"],
    "options_hi": ["यूएसए", "चीन", "जापान", "यूरोपीय संघ"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Who won the 2023 Nobel Prize in Physiology or Medicine?",
    "question_hi": "2023 का शरीर विज्ञान या चिकित्सा का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["Katalin Karikó and Drew Weissman", "David Julius and Ardem Patapoutian", "Harvey Alter and Charles Rice", "William Kaelin and Gregg Semenza"],
    "options_hi": ["कैटलिन करिको और ड्रू वेस्मैन", "डेविड जूलियस और अरदेम पटापौटियन", "हार्वे अल्टर और चार्ल्स राइस", "विलियम केलिन और ग्रेग सेमेंजा"],
    "answer_en": "Katalin Karikó and Drew Weissman",
    "answer_hi": "कैटलिन करिको और ड्रू वेस्मैन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Mahila Kosh Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री महिला कोष योजना' लागू की?",
    "options_en": ["Rajasthan", "Gujarat", "Maharashtra", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "Who is the current Prime Minister of Pakistan?",
    "question_hi": "पाकिस्तान के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Anwaar-ul-Haq Kakar", "Shehbaz Sharif", "Imran Khan", "Nawaz Sharif"],
    "options_hi": ["अनवर उल हक काकर", "शहबाज शरीफ", "इमरान खान", "नवाज शरीफ"],
    "answer_en": "Anwaar-ul-Haq Kakar",
    "answer_hi": "अनवर उल हक काकर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which city will host the 2024 Summer Paralympics?",
    "question_hi": "2024 ग्रीष्मकालीन पैरालंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Paris, France", "Tokyo, Japan", "London, UK", "Los Angeles, USA"],
    "options_hi": ["पेरिस, फ्रांस", "टोक्यो, जापान", "लंदन, यूके", "लॉस एंजिल्स, यूएसए"],
    "answer_en": "Paris, France",
    "answer_hi": "पेरिस, फ्रांस",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Who won the 2023 Vyas Samman?",
    "question_hi": "2023 का व्यास सम्मान किसने जीता?",
    "options_en": ["Mridula Garg", "Kumar Anupam", "Shashi Kant", "Not announced yet"],
    "options_hi": ["मृदुला गर्ग", "कुमार अनुपम", "शशि कांत", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which Indian state launched 'Mukhyamantri Udyam Kranti Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री उद्यम क्रांति योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Jharkhand"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "बिहार", "झारखंड"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Who is the current President of the United Arab Emirates?",
    "question_hi": "संयुक्त अरब अमीरात के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Sheikh Mohamed bin Zayed Al Nahyan", "Sheikh Khalifa bin Zayed Al Nahyan", "Sheikh Zayed bin Sultan Al Nahyan", "Sheikh Mohammed bin Rashid Al Maktoum"],
    "options_hi": ["शेख मोहम्मद बिन जायद अल नाहयान", "शेख खलीफा बिन जायद अल नाहयान", "शेख जायद बिन सुल्तान अल नाहयान", "शेख मोहम्मद बिन रशीद अल मकतूम"],
    "answer_en": "Sheikh Mohamed bin Zayed Al Nahyan",
    "answer_hi": "शेख मोहम्मद बिन जायद अल नाहयान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which country recently launched 'DART' mission to deflect an asteroid?",
    "question_hi": "हाल ही में क्षुद्रग्रह को विक्षेपित करने के लिए 'डार्ट' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "China", "Russia", "Japan"],
    "options_hi": ["यूएसए", "चीन", "रूस", "जापान"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Who won the 2023 ICC Men's T20 World Cup?",
    "question_hi": "2023 आईसीसी पुरुष टी20 विश्व कप किसने जीता?",
    "options_en": ["England", "Pakistan", "India", "Australia"],
    "options_hi": ["इंग्लैंड", "पाकिस्तान", "भारत", "ऑस्ट्रेलिया"],
    "answer_en": "England",
    "answer_hi": "इंग्लैंड",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 17,
    "question_en": "Which Indian city is known as the 'City of Dreams'?",
    "question_hi": "किस भारतीय शहर को 'सिटी ऑफ ड्रीम्स' कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Bangalore", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "बैंगलोर", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 18,
    "question_en": "Who is the current Union Minister of Petroleum and Natural Gas?",
    "question_hi": "वर्तमान केंद्रीय पेट्रोलियम और प्राकृतिक गैस मंत्री कौन हैं?",
    "options_en": ["Hardeep Singh Puri", "Dharmendra Pradhan", "Veerappa Moily", "Mani Shankar Aiyar"],
    "options_hi": ["हरदीप सिंह पुरी", "धर्मेंद्र प्रधान", "वीरप्पा मोइली", "मणिशंकर अय्यर"],
    "answer_en": "Hardeep Singh Puri",
    "answer_hi": "हरदीप सिंह पुरी",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 19,
    "question_en": "Which country recently launched 'Hayabusa2' mission to collect asteroid samples?",
    "question_hi": "हाल ही में क्षुद्रग्रह के नमूने एकत्र करने के लिए 'हायाबुसा2' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["Japan", "USA", "China", "Russia"],
    "options_hi": ["जापान", "यूएसए", "चीन", "रूस"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Who won the 2023 Australian Open Women's Doubles title?",
    "question_hi": "2023 ऑस्ट्रेलियन ओपन महिला युगल खिताब किसने जीता?",
    "options_en": ["Barbora Krejcikova & Katerina Siniakova", "Elise Mertens & Zhang Shuai", "Gabriela Dabrowski & Giuliana Olmos", "Coco Gauff & Jessica Pegula"],
    "options_hi": ["बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "एलिस मर्टेंस और झांग शुआई", "गैब्रिएला डबरोव्स्की और गिउलियाना ओल्मोस", "कोको गॉफ और जेसिका पेगुला"],
    "answer_en": "Barbora Krejcikova & Katerina Siniakova",
    "answer_hi": "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Berojgari Bhatta Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री बेरोजगारी भत्ता योजना' शुरू की?",
    "options_en": ["Punjab", "Haryana", "Delhi", "Uttar Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "दिल्ली", "उत्तर प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "Who is the current Prime Minister of Bangladesh?",
    "question_hi": "बांग्लादेश के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Sheikh Hasina", "Khaleda Zia", "Fakhruddin Ahmed", "Hussain Muhammad Ershad"],
    "options_hi": ["शेख हसीना", "खालिदा जिया", "फखरुद्दीन अहमद", "हुसैन मुहम्मद इरशाद"],
    "answer_en": "Sheikh Hasina",
    "answer_hi": "शेख हसीना",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Which city will host the 2025 Asian Athletics Championships?",
    "question_hi": "2025 एशियाई एथलेटिक्स चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Chennai, India", "Bangkok, Thailand", "Tokyo, Japan", "Seoul, South Korea"],
    "options_hi": ["चेन्नई, भारत", "बैंकॉक, थाईलैंड", "टोक्यो, जापान", "सियोल, दक्षिण कोरिया"],
    "answer_en": "Chennai, India",
    "answer_hi": "चेन्नई, भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "Who won the 2023 Kalidas Samman?",
    "question_hi": "2023 का कालिदास सम्मान किसने जीता?",
    "options_en": ["Shivkumar Sharma", "Hariprasad Chaurasia", "Rahul Dev Burman", "Not announced yet"],
    "options_hi": ["शिवकुमार शर्मा", "हरिप्रसाद चौरसिया", "राहुल देव बर्मन", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which Indian state implemented 'Mukhyamantri Nishulk Dawa Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री निशुल्क दवा योजना' लागू की?",
    "options_en": ["Delhi", "Punjab", "Haryana", "Rajasthan"],
    "options_hi": ["दिल्ली", "पंजाब", "हरियाणा", "राजस्थान"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "Who is the current President of Egypt?",
    "question_hi": "मिस्र के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Abdel Fattah el-Sisi", "Hosni Mubarak", "Mohamed Morsi", "Anwar Sadat"],
    "options_hi": ["अब्देल फतह अल-सीसी", "होस्नी मुबारक", "मोहम्मद मोर्सी", "अनवर सादत"],
    "answer_en": "Abdel Fattah el-Sisi",
    "answer_hi": "अब्देल फतह अल-सीसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which country recently launched 'Solar Orbiter' mission to study the Sun?",
    "question_hi": "हाल ही में सूर्य का अध्ययन करने के लिए 'सोलर ऑर्बिटर' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "ISRO", "Roscosmos"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "इसरो", "रोस्कोसमोस"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "Who won the 2023 French Open Women's Doubles title?",
    "question_hi": "2023 फ्रेंच ओपन महिला युगल खिताब किसने जीता?",
    "options_en": ["Hsieh Su-wei & Wang Xinyu", "Barbora Krejcikova & Katerina Siniakova", "Coco Gauff & Jessica Pegula", "Gabriela Dabrowski & Erin Routliffe"],
    "options_hi": ["ह्सिएह सु-वेई और वांग ज़िन्यू", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "कोको गॉफ और जेसिका पेगुला", "गैब्रिएला डबरोव्स्की और एरिन राउटलिफ"],
    "answer_en": "Hsieh Su-wei & Wang Xinyu",
    "answer_hi": "ह्सिएह सु-वेई और वांग ज़िन्यू",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Which Indian city is known as the 'City of Pearls'?",
    "question_hi": "किस भारतीय शहर को 'मोतियों का शहर' कहा जाता है?",
    "options_en": ["Hyderabad", "Surat", "Jaipur", "Mumbai"],
    "options_hi": ["हैदराबाद", "सूरत", "जयपुर", "मुंबई"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "Who is the current Union Minister of Agriculture and Farmers Welfare?",
    "question_hi": "वर्तमान केंद्रीय कृषि और किसान कल्याण मंत्री कौन हैं?",
    "options_en": ["Narendra Singh Tomar", "Radha Mohan Singh", "Sharad Pawar", "Shobha Karandlaje"],
    "options_hi": ["नरेंद्र सिंह तोमर", "राधा मोहन सिंह", "शरद पवार", "शोभा करंदलाजे"],
    "answer_en": "Narendra Singh Tomar",
    "answer_hi": "नरेंद्र सिंह तोमर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which country recently launched 'Chandrayaan-1' mission?",
    "question_hi": "हाल ही में 'चंद्रयान-1' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "China", "USA", "Japan"],
    "options_hi": ["भारत", "चीन", "यूएसए", "जापान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "Who won the 2023 Wimbledon Men's Doubles title?",
    "question_hi": "2023 विंबलडन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Wesley Koolhof & Neal Skupski", "Rajeev Ram & Joe Salisbury", "Nikola Mektic & Mate Pavic", "Marcelo Arevalo & Jean-Julien Rojer"],
    "options_hi": ["वेस्ले कोलहोफ और नील स्कुप्स्की", "राजीव राम और जो सैलिसबरी", "निकोला मेक्टिक और माटे पाविक", "मार्सेलो अरेवालो और जीन-जूलियन रोजर"],
    "answer_en": "Wesley Koolhof & Neal Skupski",
    "answer_hi": "वेस्ले कोलहोफ और नील स्कुप्स्की",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Which Indian state launched 'Mukhyamantri Shiksha Protsahan Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री शिक्षा प्रोत्साहन योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "Who is the current Prime Minister of Nepal?",
    "question_hi": "नेपाल के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Pushpa Kamal Dahal 'Prachanda'", "Sher Bahadur Deuba", "K.P. Sharma Oli", "Sushil Koirala"],
    "options_hi": ["पुष्प कमल दहल 'प्रचंड'", "शेर बहादुर देउबा", "के.पी. शर्मा ओली", "सुशील कोइराला"],
    "answer_en": "Pushpa Kamal Dahal 'Prachanda'",
    "answer_hi": "पुष्प कमल दहल 'प्रचंड'",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Which city will host the 2026 Asian Games?",
    "question_hi": "2026 एशियाई खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Aichi-Nagoya, Japan", "Hangzhou, China", "Jakarta, Indonesia", "Doha, Qatar"],
    "options_hi": ["आइची-नागोया, जापान", "हांग्जो, चीन", "जकार्ता, इंडोनेशिया", "दोहा, कतर"],
    "answer_en": "Aichi-Nagoya, Japan",
    "answer_hi": "आइची-नागोया, जापान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "Who won the 2023 Tagore Award for Cultural Harmony?",
    "question_hi": "2023 का सांस्कृतिक सद्भाव के लिए टैगोर पुरस्कार किसने जीता?",
    "options_en": ["Pt. Shivkumar Sharma & Ustad Zakir Hussain", "Rajkumar Singhajit Singh", "Chhayanaut (Bangladesh)", "Not announced yet"],
    "options_hi": ["पं. शिवकुमार शर्मा और उस्ताद ज़ाकिर हुसैन", "राजकुमार सिंहजीत सिंह", "छायानौत (बांग्लादेश)", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which Indian state implemented 'Mukhyamantri Swasthya Seva Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री स्वास्थ्य सेवा योजना' लागू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Chhattisgarh"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "बिहार", "छत्तीसगढ़"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "Who is the current President of Iran?",
    "question_hi": "ईरान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Ebrahim Raisi", "Hassan Rouhani", "Mahmoud Ahmadinejad", "Mohammad Khatami"],
    "options_hi": ["इब्राहिम रईसी", "हसन रूहानी", "महमूद अहमदीनेजाद", "मोहम्मद खातमी"],
    "answer_en": "Ebrahim Raisi",
    "answer_hi": "इब्राहिम रईसी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which country recently launched 'Mars 2020 Perseverance Rover'?",
    "question_hi": "हाल ही में 'मार्स 2020 परसेवरेंस रोवर' किस देश ने लॉन्च किया?",
    "options_en": ["USA", "China", "European Union", "Russia"],
    "options_hi": ["यूएसए", "चीन", "यूरोपीय संघ", "रूस"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "Who won the 2023 US Open Men's Doubles title?",
    "question_hi": "2023 यूएस ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Rajeev Ram & Joe Salisbury", "Wesley Koolhof & Neal Skupski", "Mate Pavic & Nikola Mektic", "Marcelo Arevalo & Jean-Julien Rojer"],
    "options_hi": ["राजीव राम और जो सैलिसबरी", "वेस्ले कोलहोफ और नील स्कुप्स्की", "माटे पाविक और निकोला मेक्टिक", "मार्सेलो अरेवालो और जीन-जूलियन रोजर"],
    "answer_en": "Rajeev Ram & Joe Salisbury",
    "answer_hi": "राजीव राम और जो सैलिसबरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which Indian city is known as the 'Diamond City of India'?",
    "question_hi": "किस भारतीय शहर को 'भारत का हीरा शहर' कहा जाता है?",
    "options_en": ["Surat", "Mumbai", "Jaipur", "Hyderabad"],
    "options_hi": ["सूरत", "मुंबई", "जयपुर", "हैदराबाद"],
    "answer_en": "Surat",
    "answer_hi": "सूरत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Who is the current Union Minister of Law and Justice?",
    "question_hi": "वर्तमान केंद्रीय कानून और न्याय मंत्री कौन हैं?",
    "options_en": ["Arjun Ram Meghwal", "Kiren Rijiju", "Ravi Shankar Prasad", "Salman Khurshid"],
    "options_hi": ["अर्जुन राम मेघवाल", "किरेन रिजिजू", "रविशंकर प्रसाद", "सलमान खुर्शीद"],
    "answer_en": "Arjun Ram Meghwal",
    "answer_hi": "अर्जुन राम मेघवाल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which country recently launched 'Mangalyaan' mission to Mars?",
    "question_hi": "हाल ही में मंगल ग्रह पर 'मंगलयान' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "China", "European Union"],
    "options_hi": ["भारत", "यूएसए", "चीन", "यूरोपीय संघ"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Who won the 2023 Australian Open Men's Doubles title?",
    "question_hi": "2023 ऑस्ट्रेलियन ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Rinky Hijikata & Jason Kubler", "Thanasi Kokkinakis & Nick Kyrgios", "Rajeev Ram & Joe Salisbury", "Wesley Koolhof & Neal Skupski"],
    "options_hi": ["रिंकी हिजिकाटा और जेसन कुब्लर", "थानासी कोक्किनाकिस और निक किर्गियोस", "राजीव राम और जो सैलिसबरी", "वेस्ले कोलहोफ और नील स्कुप्स्की"],
    "answer_en": "Rinky Hijikata & Jason Kubler",
    "answer_hi": "रिंकी हिजिकाटा और जेसन कुब्लर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Krishi Ashirwad Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री कृषि आशीर्वाद योजना' शुरू की?",
    "options_en": ["Jharkhand", "Bihar", "Odisha", "West Bengal"],
    "options_hi": ["झारखंड", "बिहार", "ओडिशा", "पश्चिम बंगाल"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Who is the current Prime Minister of Sri Lanka?",
    "question_hi": "श्रीलंका के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Dinesh Gunawardena", "Ranil Wickremesinghe", "Mahinda Rajapaksa", "Sirimavo Bandaranaike"],
    "options_hi": ["दिनेश गुणवर्धने", "रानिल विक्रमसिंघे", "महिंदा राजपक्षे", "सिरिमावो भंडारनायके"],
    "answer_en": "Dinesh Gunawardena",
    "answer_hi": "दिनेश गुणवर्धने",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Which city will host the 2027 World Athletics Championships?",
    "question_hi": "2027 विश्व एथलेटिक्स चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Budapest, Hungary", "Eugene, USA", "London, UK", "Tokyo, Japan"],
    "options_hi": ["बुडापेस्ट, हंगरी", "यूजीन, यूएसए", "लंदन, यूके", "टोक्यो, जापान"],
    "answer_en": "Budapest, Hungary",
    "answer_hi": "बुडापेस्ट, हंगरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "Who won the 2023 Sangeet Natak Akademi Award for Kathak?",
    "question_hi": "कथक के लिए 2023 का संगीत नाटक अकादमी पुरस्कार किसने जीता?",
    "options_en": ["Shovana Narayan", "Birju Maharaj", "Saswati Sen", "Not announced yet"],
    "options_hi": ["शोवना नारायण", "बिरजू महाराज", "शश्वती सेन", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which Indian state implemented 'Mukhyamantri Jan Kalyan Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री जन कल्याण योजना' लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Who is the current President of Afghanistan?",
    "question_hi": "अफगानिस्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["No internationally recognized president", "Ashraf Ghani", "Hamid Karzai", "Mohammad Najibullah"],
    "options_hi": ["कोई अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त राष्ट्रपति नहीं", "अशरफ गनी", "हामिद करजई", "मोहम्मद नजीबुल्लाह"],
    "answer_en": "No internationally recognized president",
    "answer_hi": "कोई अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त राष्ट्रपति नहीं",
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