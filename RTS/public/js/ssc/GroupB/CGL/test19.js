const questions = [
  {
   "num": 1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Divyangjan Pension Yojana' for persons with disabilities?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में दिव्यांगजनों के लिए 'मुख्यमंत्री दिव्यांगजन पेंशन योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Who was appointed as the new Director of Intelligence Bureau (IB) in 2023?",
    "question_hi": "2023 में इंटेलिजेंस ब्यूरो (आईबी) के नए निदेशक के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Tapan Deka", "Arvind Kumar", "Rajiv Jain", "Dineshwar Sharma"],
    "options_hi": ["तपन देका", "अरविंद कुमार", "राजीव जैन", "दिनेश्वर शर्मा"],
    "answer_en": "Tapan Deka",
    "answer_hi": "तपन देका",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which country recently changed its name from 'Swaziland' to 'Eswatini'?",
    "question_hi": "हाल ही में किस देश ने अपना नाम 'स्वाजीलैंड' से 'एस्वातिनी' बदला?",
    "options_en": ["Eswatini", "Lesotho", "Botswana", "Namibia"],
    "options_hi": ["एस्वातिनी", "लेसोथो", "बोत्सवाना", "नामीबिया"],
    "answer_en": "Eswatini",
    "answer_hi": "एस्वातिनी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "Who won the 2023 Vachaspati Award?",
    "question_hi": "2023 का वाचस्पति पुरस्कार किसने जीता?",
    "options_en": ["Shashi Deshpande", "U.R. Ananthamurthy", "Girish Karnad", "Not announced yet"],
    "options_hi": ["शशि देशपांडे", "यू.आर. अनंतमूर्ति", "गिरीश कर्नाड", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which Indian city hosted the 'G20 Digital Economy Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 डिजिटल अर्थव्यवस्था मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Who is the current Union Minister of Ports, Shipping and Waterways?",
    "question_hi": "वर्तमान केंद्रीय पत्तन, पोत परिवहन और जलमार्ग मंत्री कौन हैं?",
    "options_en": ["Sarbananda Sonowal", "Mansukh Mandaviya", "Nitin Gadkari", "G.K. Vasan"],
    "options_hi": ["सर्बानंद सोनोवाल", "मनसुख मंडाविया", "नितिन गडकरी", "जी.के. वासन"],
    "answer_en": "Sarbananda Sonowal",
    "answer_hi": "सर्बानंद सोनोवाल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which country recently launched 'Lucy' mission to study Trojan asteroids?",
    "question_hi": "हाल ही में ट्रोजन क्षुद्रग्रहों का अध्ययन करने के लिए 'लूसी' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "European Union", "Japan", "China"],
    "options_hi": ["यूएसए", "यूरोपीय संघ", "जापान", "चीन"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Who won the 2023 Ramon Magsaysay Award for journalism?",
    "question_hi": "पत्रकारिता के लिए 2023 का रेमन मैग्सेसे पुरस्कार किसने जीता?",
    "options_en": ["Maria Ressa", "Ravish Kumar", "P. Sainath", "Not announced yet"],
    "options_hi": ["मारिया रेसा", "रवीश कुमार", "पी. साईनाथ", "अभी घोषित नहीं हुआ"],
    "answer_en": "Maria Ressa",
    "answer_hi": "मारिया रेसा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Shikshak Samman Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री शिक्षक सम्मान योजना' लागू की?",
    "options_en": ["Haryana", "Punjab", "Delhi", "Uttarakhand"],
    "options_hi": ["हरियाणा", "पंजाब", "दिल्ली", "उत्तराखंड"],
    "answer_en": "Haryana",
    "answer_hi": "हरियाणा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "Who is the current Prime Minister of Kenya?",
    "question_hi": "केन्या के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["William Ruto", "Uhuru Kenyatta", "Raila Odinga", "Mwai Kibaki"],
    "options_hi": ["विलियम रुटो", "उहुरू केन्याटा", "राइला ओडिंगा", "म्वाई किबाकी"],
    "answer_en": "William Ruto",
    "answer_hi": "विलियम रुटो",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which city will host the 2025 World Aquatics Championships?",
    "question_hi": "2025 विश्व जल क्रीड़ा चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Kazan, Russia", "Budapest, Hungary", "Doha, Qatar", "Singapore"],
    "options_hi": ["कज़ान, रूस", "बुडापेस्ट, हंगरी", "दोहा, कतर", "सिंगापुर"],
    "answer_en": "Kazan, Russia",
    "answer_hi": "कज़ान, रूस",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Who won the 2023 Shanti Swarup Bhatnagar Prize for Science and Technology?",
    "question_hi": "विज्ञान और प्रौद्योगिकी के लिए 2023 का शांति स्वरूप भटनागर पुरस्कार किसने जीता?",
    "options_en": ["Various scientists", "Only one recipient", "Not announced yet", "Cancelled this year"],
    "options_hi": ["विभिन्न वैज्ञानिक", "केवल एक प्राप्तकर्ता", "अभी घोषित नहीं हुआ", "इस वर्ष रद्द किया गया"],
    "answer_en": "Various scientists",
    "answer_hi": "विभिन्न वैज्ञानिक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which Indian state launched 'Mukhyamantri Yuva Swarozgar Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री युवा स्वरोजगार योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Chhattisgarh"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "छत्तीसगढ़"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "Who is the current President of Nigeria?",
    "question_hi": "नाइजीरिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Bola Tinubu", "Muhammadu Buhari", "Goodluck Jonathan", "Olusegun Obasanjo"],
    "options_hi": ["बोला तिनुबु", "मुहम्मदु बुहारी", "गुडलक जोनाथन", "ओलुसेगुन ओबासांजो"],
    "answer_en": "Bola Tinubu",
    "answer_hi": "बोला तिनुबु",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which country recently launched 'Nancy Grace Roman Space Telescope'?",
    "question_hi": "हाल ही में 'नैंसी ग्रेस रोमन स्पेस टेलीस्कोप' किस देश ने लॉन्च किया?",
    "options_en": ["USA", "European Union", "Japan", "China"],
    "options_hi": ["यूएसए", "यूरोपीय संघ", "जापान", "चीन"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "Who won the 2023 ICC Women's World Cup?",
    "question_hi": "2023 आईसीसी महिला विश्व कप किसने जीता?",
    "options_en": ["Australia", "England", "India", "South Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "इंग्लैंड", "भारत", "दक्षिण अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Which Indian city is known as the 'Cultural Capital of India'?",
    "question_hi": "किस भारतीय शहर को 'भारत की सांस्कृतिक राजधानी' कहा जाता है?",
    "options_en": ["Kolkata", "Varanasi", "Madurai", "Jaipur"],
    "options_hi": ["कोलकाता", "वाराणसी", "मदुरै", "जयपुर"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "Who is the current Union Minister of Steel?",
    "question_hi": "वर्तमान केंद्रीय इस्पात मंत्री कौन हैं?",
    "options_en": ["Jyotiraditya Scindia", "Ram Chandra Prasad Singh", "Beni Prasad Verma", "Steel Ministry abolished"],
    "options_hi": ["ज्योतिरादित्य सिंधिया", "राम चंद्र प्रसाद सिंह", "बेनी प्रसाद वर्मा", "इस्पात मंत्रालय समाप्त"],
    "answer_en": "Jyotiraditya Scindia",
    "answer_hi": "ज्योतिरादित्य सिंधिया",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Which country recently launched 'James Webb Space Telescope'?",
    "question_hi": "हाल ही में 'जेम्स वेब स्पेस टेलीस्कोप' किस देश ने लॉन्च किया?",
    "options_en": ["NASA-ESA-CSA Collaboration", "Russia", "China", "India"],
    "options_hi": ["नासा-ईएसए-सीएसए सहयोग", "रूस", "चीन", "भारत"],
    "answer_en": "NASA-ESA-CSA Collaboration",
    "answer_hi": "नासा-ईएसए-सीएसए सहयोग",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "Who won the 2023 Wimbledon Mixed Doubles title?",
    "question_hi": "2023 विंबलडन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Mate Pavic & Lyudmyla Kichenok", "Neal Skupski & Desirae Krawczyk", "Ivan Dodig & Latisha Chan", "John Peers & Zhang Shuai"],
    "options_hi": ["माटे पाविक और ल्यूडमिला किचेनोक", "नील स्कुप्स्की और डेजिरे क्रॉचिक", "इवान डोडिग और लतीशा चान", "जॉन पीयर्स और झांग शुआई"],
    "answer_en": "Mate Pavic & Lyudmyla Kichenok",
    "answer_hi": "माटे पाविक और ल्यूडमिला किचेनोक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Bima Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान बीमा योजना' शुरू की?",
    "options_en": ["Maharashtra", "Karnataka", "Telangana", "Andhra Pradesh"],
    "options_hi": ["महाराष्ट्र", "कर्नाटक", "तेलंगाना", "आंध्र प्रदेश"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "Who is the current Prime Minister of Ethiopia?",
    "question_hi": "इथियोपिया के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Abiy Ahmed", "Hailemariam Desalegn", "Meles Zenawi", "Sahle-Work Zewde"],
    "options_hi": ["अबीय अहमद", "हेलेमरियाम देसालेग्न", "मेलेस जेनावी", "साहले-वर्क ज़ेवदे"],
    "answer_en": "Abiy Ahmed",
    "answer_hi": "अबीय अहमद",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Which city will host the 2026 Winter Olympics?",
    "question_hi": "2026 शीतकालीन ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Milan-Cortina, Italy", "Beijing, China", "Vancouver, Canada", "Salt Lake City, USA"],
    "options_hi": ["मिलान-कोर्टिना, इटली", "बीजिंग, चीन", "वैंकूवर, कनाडा", "साल्ट लेक सिटी, यूएसए"],
    "answer_en": "Milan-Cortina, Italy",
    "answer_hi": "मिलान-कोर्टिना, इटली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "Who won the 2023 Bihari Puraskar?",
    "question_hi": "2023 का बिहारी पुरस्कार किसने जीता?",
    "options_en": ["Mridula Garg", "Mohan Rakesh", "Krishna Baldev Vaid", "Not announced yet"],
    "options_hi": ["मृदुला गर्ग", "मोहन राकेश", "कृष्ण बलदेव वैद", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which Indian state implemented 'Mukhyamantri Vridhajan Pension Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री वृद्धजन पेंशन योजना' लागू की?",
    "options_en": ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "Who is the current President of the Philippines?",
    "question_hi": "फिलीपींस के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Bongbong Marcos", "Rodrigo Duterte", "Benigno Aquino III", "Gloria Macapagal Arroyo"],
    "options_hi": ["बोंगबोंग मार्कोस", "रोड्रिगो दुतेर्ते", "बेनिग्नो एक्विनो III", "ग्लोरिया मैकापागल अरोयो"],
    "answer_en": "Bongbong Marcos",
    "answer_hi": "बोंगबोंग मार्कोस",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which country recently launched 'Juno' mission to Jupiter?",
    "question_hi": "हाल ही में बृहस्पति ग्रह पर 'जूनो' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "European Union", "Japan", "Russia"],
    "options_hi": ["यूएसए", "यूरोपीय संघ", "जापान", "रूस"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 28,
    "question_en": "Who won the 2023 US Open Mixed Doubles title?",
    "question_hi": "2023 यूएस ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Anna Danilina & Harri Heliovaara", "Storm Sanders & John Peers", "Desirae Krawczyk & Joe Salisbury", "Gabriela Dabrowski & Max Purcell"],
    "options_hi": ["अन्ना दानिलिना और हैरी हेलिओवारा", "स्टॉर्म सैंडर्स और जॉन पीयर्स", "डेजिरे क्रॉचिक और जो सैलिसबरी", "गैब्रिएला डबरोव्स्की और मैक्स पर्सेल"],
    "answer_en": "Anna Danilina & Harri Heliovaara",
    "answer_hi": "अन्ना दानिलिना और हैरी हेलिओवारा",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 29,
    "question_en": "Which Indian city is known as the 'Golden City'?",
    "question_hi": "किस भारतीय शहर को 'स्वर्ण शहर' कहा जाता है?",
    "options_en": ["Jaisalmer", "Amritsar", "Varanasi", "Kolkata"],
    "options_hi": ["जैसलमेर", "अमृतसर", "वाराणसी", "कोलकाता"],
    "answer_en": "Jaisalmer",
    "answer_hi": "जैसलमेर",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 30,
    "question_en": "Who is the current Union Minister of Women and Child Development?",
    "question_hi": "वर्तमान केंद्रीय महिला और बाल विकास मंत्री कौन हैं?",
    "options_en": ["Smriti Irani", "Maneka Gandhi", "Krishna Tirath", "Renuka Chowdhury"],
    "options_hi": ["स्मृति ईरानी", "मेनका गांधी", "कृष्णा तीरथ", "रेनुका चौधरी"],
    "answer_en": "Smriti Irani",
    "answer_hi": "स्मृति ईरानी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which country recently launched 'Mars Sample Return' mission?",
    "question_hi": "हाल ही में 'मार्स सैंपल रिटर्न' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA-ESA Collaboration", "China", "Russia", "India"],
    "options_hi": ["नासा-ईएसए सहयोग", "चीन", "रूस", "भारत"],
    "answer_en": "NASA-ESA Collaboration",
    "answer_hi": "नासा-ईएसए सहयोग",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
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
   "num": 33,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Tirth Yatra Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान तीर्थ यात्रा योजना' शुरू की?",
    "options_en": ["Haryana", "Punjab", "Uttar Pradesh", "Rajasthan"],
    "options_hi": ["हरियाणा", "पंजाब", "उत्तर प्रदेश", "राजस्थान"],
    "answer_en": "Haryana",
    "answer_hi": "हरियाणा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "Who is the current Prime Minister of Afghanistan?",
    "question_hi": "अफगानिस्तान के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Hasan Akhund", "Mullah Mohammad Hassan Akhund", "Abdul Kabir", "No internationally recognized PM"],
    "options_hi": ["हसन अखुंद", "मुल्ला मोहम्मद हसन अखुंद", "अब्दुल कबीर", "कोई अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त पीएम नहीं"],
    "answer_en": "No internationally recognized PM",
    "answer_hi": "कोई अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त पीएम नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Which city will host the 2027 Asian Athletics Championships?",
    "question_hi": "2027 एशियाई एथलेटिक्स चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Guangzhou, China", "Bangkok, Thailand", "Jakarta, Indonesia", "Manila, Philippines"],
    "options_hi": ["गुआंगज़ौ, चीन", "बैंकॉक, थाईलैंड", "जकार्ता, इंडोनेशिया", "मनीला, फिलीपींस"],
    "answer_en": "Guangzhou, China",
    "answer_hi": "गुआंगज़ौ, चीन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "Who won the 2023 Kumar Gandharva Award?",
    "question_hi": "2023 का कुमार गंधर्व पुरस्कार किसने जीता?",
    "options_en": ["Pandit Bhimsen Joshi", "Pandit Jasraj", "Ustad Zakir Hussain", "Not announced yet"],
    "options_hi": ["पंडित भीमसेन जोशी", "पंडित जसराज", "उस्ताद ज़ाकिर हुसैन", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which Indian state implemented 'Mukhyamantri Jan Aushadhi Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री जन औषधि योजना' लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Central Government Scheme"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "केंद्र सरकार योजना"],
    "answer_en": "Central Government Scheme",
    "answer_hi": "केंद्र सरकार योजना",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "Who is the current President of Mexico?",
    "question_hi": "मैक्सिको के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Andrés Manuel López Obrador", "Enrique Peña Nieto", "Felipe Calderón", "Vicente Fox"],
    "options_hi": ["एंड्रेस मैनुअल लोपेज़ ओब्रेडोर", "एनरिक पेन्या निएतो", "फेलिप कैल्डरॉन", "विसेंट फॉक्स"],
    "answer_en": "Andrés Manuel López Obrador",
    "answer_hi": "एंड्रेस मैनुअल लोपेज़ ओब्रेडोर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which country recently launched 'Solar Orbiter' mission?",
    "question_hi": "हाल ही में 'सोलर ऑर्बिटर' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["ESA-NASA Collaboration", "China", "Japan", "India"],
    "options_hi": ["ईएसए-नासा सहयोग", "चीन", "जापान", "भारत"],
    "answer_en": "ESA-NASA Collaboration",
    "answer_hi": "ईएसए-नासा सहयोग",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "Who won the 2023 French Open Mixed Doubles title?",
    "question_hi": "2023 फ्रेंच ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Miyu Kato & Tim Puetz", "Ivan Dodig & Latisha Chan", "Jean-Julien Rojer & Demi Schuurs", "Rajeev Ram & Barbora Krejcikova"],
    "options_hi": ["मियू काटो और टिम पुएत्ज़", "इवान डोडिग और लतीशा चान", "जीन-जूलियन रोजर और डेमी शूर्स", "राजीव राम और बारबोरा क्रेजीकोवा"],
    "answer_en": "Miyu Kato & Tim Puetz",
    "answer_hi": "मियू काटो और टिम पुएत्ज़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which Indian city is known as the 'City of Seven Islands'?",
    "question_hi": "किस भारतीय शहर को 'सात द्वीपों का शहर' कहा जाता है?",
    "options_en": ["Mumbai", "Chennai", "Kochi", "Visakhapatnam"],
    "options_hi": ["मुंबई", "चेन्नई", "कोच्चि", "विशाखापत्तनम"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "Who is the current Union Minister of Micro, Small and Medium Enterprises?",
    "question_hi": "वर्तमान केंद्रीय सूक्ष्म, लघु और मध्यम उद्यम मंत्री कौन हैं?",
    "options_en": ["Narayan Rane", "Kalraj Mishra", "Giriraj Singh", "Vijay Sampla"],
    "options_hi": ["नारायण राणे", "कलराज मिश्र", "गिरिराज सिंह", "विजय साम्पला"],
    "answer_en": "Narayan Rane",
    "answer_hi": "नारायण राणे",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which country recently launched 'Chandrayaan-2' mission?",
    "question_hi": "हाल ही में 'चंद्रयान-2' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["India", "China", "USA", "Japan"],
    "options_hi": ["भारत", "चीन", "यूएसए", "जापान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "Who won the 2023 Wimbledon Men's Doubles title?",
    "question_hi": "2023 विंबलडन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Wesley Koolhof & Neal Skupski", "Rajeev Ram & Joe Salisbury", "Mate Pavic & Nikola Mektic", "Marcelo Arevalo & Jean-Julien Rojer"],
    "options_hi": ["वेस्ले कोलहोफ और नील स्कुप्स्की", "राजीव राम और जो सैलिसबरी", "माटे पाविक और निकोला मेक्टिक", "मार्सेलो अरेवालो और जीन-जूलियन रोजर"],
    "answer_en": "Wesley Koolhof & Neal Skupski",
    "answer_hi": "वेस्ले कोलहोफ और नील स्कुप्स्की",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Rin Mafi Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान कल्याण ऋण माफी योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "Who is the current Prime Minister of Morocco?",
    "question_hi": "मोरक्को के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Aziz Akhannouch", "Saadeddine Othmani", "Abdelilah Benkirane", "Abbas El Fassi"],
    "options_hi": ["अजीज अखान्नोच", "सादेद्दीन ओथमानी", "अब्देलिलाह बेनकिरान", "अब्बास एल फासी"],
    "answer_en": "Aziz Akhannouch",
    "answer_hi": "अजीज अखान्नोच",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
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
   "num": 48,
    "question_en": "Who won the 2023 Tulsi Award?",
    "question_hi": "2023 का तुलसी पुरस्कार किसने जीता?",
    "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Mahadevi Verma", "Not announced yet"],
    "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "महादेवी वर्मा", "अभी घोषित नहीं हुआ"],
    "answer_en": "Not announced yet",
    "answer_hi": "अभी घोषित नहीं हुआ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Kalyan Kendra Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री किसान कल्याण केंद्र योजना' लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Odisha"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "ओडिशा"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "Who is the current President of Indonesia?",
    "question_hi": "इंडोनेशिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Joko Widodo", "Susilo Bambang Yudhoyono", "Megawati Sukarnoputri", "Abdurrahman Wahid"],
    "options_hi": ["जोको विडोडो", "सुसीलो बंबांग युधोयोनो", "मेगावती सुकर्णोपुत्री", "अब्दुर्रहमान वाहिद"],
    "answer_en": "Joko Widodo",
    "answer_hi": "जोको विडोडो",
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