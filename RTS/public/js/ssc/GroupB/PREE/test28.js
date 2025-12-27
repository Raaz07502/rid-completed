const questions = [
  {
    "num": 1,
    "question_en": "Which country hosted the G20 Summit in 2023?",
    "question_hi": "2023 में जी20 शिखर सम्मेलन की मेजबानी किस देश ने की?",
    "options_en": ["India", "Indonesia", "Brazil", "Japan"],
    "options_hi": ["भारत", "इंडोनेशिया", "ब्राज़ील", "जापान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Indian spacecraft successfully landed on the Moon's south pole in August 2023?",
    "question_hi": "किस भारतीय अंतरिक्ष यान ने अगस्त 2023 में चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक लैंडिंग की?",
    "options_en": ["Chandrayaan-2", "Chandrayaan-3", "Mangalyaan", "Aditya-L1"],
    "options_hi": ["चंद्रयान-2", "चंद्रयान-3", "मंगलयान", "आदित्य-एल1"],
    "answer_en": "Chandrayaan-3",
    "answer_hi": "चंद्रयान-3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What was India's rank in the World Press Freedom Index 2023?",
    "question_hi": "वर्ल्ड प्रेस फ्रीडम इंडेक्स 2023 में भारत की रैंक क्या थी?",
    "options_en": ["131", "142", "150", "161"],
    "options_hi": ["131वाँ", "142वाँ", "150वाँ", "161वाँ"],
    "answer_en": "161",
    "answer_hi": "161वाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which state launched the 'Mukhyamantri Teerth Yatra Yojana' recently?",
    "question_hi": "हाल ही में किस राज्य ने 'मुख्यमंत्री तीर्थ यात्रा योजना' शुरू की?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Gujarat", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "गुजरात", "राजस्थान"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which ministry launched the 'Swachh Sujal Shakti Samman 2023'?",
    "question_hi": "'स्वच्छ सुजल शक्ति सम्मान 2023' किस मंत्रालय द्वारा शुरू किया गया?",
    "options_en": ["Ministry of Jal Shakti", "Ministry of Women and Child Development", "Ministry of Rural Development", "Ministry of Health"],
    "options_hi": ["जल शक्ति मंत्रालय", "महिला एवं बाल विकास मंत्रालय", "ग्रामीण विकास मंत्रालय", "स्वास्थ्य मंत्रालय"],
    "answer_en": "Ministry of Jal Shakti",
    "answer_hi": "जल शक्ति मंत्रालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which country conducted 'Operation Kaveri' in 2023?",
    "question_hi": "2023 में किस देश ने 'ऑपरेशन कावेरी' चलाया?",
    "options_en": ["India", "USA", "UK", "France"],
    "options_hi": ["भारत", "यूएसए", "यूके", "फ्रांस"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What was the Repo Rate kept by RBI in August 2023?",
    "question_hi": "अगस्त 2023 में आरबीआई द्वारा रेपो दर कितनी रखी गई?",
    "options_en": ["6.25%", "6.50%", "6.75%", "7.00%"],
    "options_hi": ["6.25%", "6.50%", "6.75%", "7.00%"],
    "answer_en": "6.50%",
    "answer_hi": "6.50%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which two countries conducted the 'Maitree II' exercise recently?",
    "question_hi": "हाल ही में किन दो देशों ने 'मैत्री II' अभ्यास आयोजित किया?",
    "options_en": ["India-Bangladesh", "India-Nepal", "India-Sri Lanka", "India-Myanmar"],
    "options_hi": ["भारत-बांग्लादेश", "भारत-नेपाल", "भारत-श्रीलंका", "भारत-म्यांमार"],
    "answer_en": "India-Bangladesh",
    "answer_hi": "भारत-बांग्लादेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Who approved the 'Digital Personal Data Protection Bill' recently?",
    "question_hi": "हाल ही में 'डिजिटल व्यक्तिगत डेटा संरक्षण विधेयक' को किसने मंजूरी दी?",
    "options_en": ["President", "Union Cabinet", "Parliament", "Supreme Court"],
    "options_hi": ["राष्ट्रपति", "केंद्रीय मंत्रिमंडल", "संसद", "सर्वोच्च न्यायालय"],
    "answer_en": "Union Cabinet",
    "answer_hi": "केंद्रीय मंत्रिमंडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which ministry is associated with the 'Vibrant Village Programme'?",
    "question_hi": "'वाइब्रेंट विलेज प्रोग्राम' किस मंत्रालय से संबंधित है?",
    "options_en": ["Home Ministry", "Defence Ministry", "Ministry of Rural Development", "Agriculture Ministry"],
    "options_hi": ["गृह मंत्रालय", "रक्षा मंत्रालय", "ग्रामीण विकास मंत्रालय", "कृषि मंत्रालय"],
    "answer_en": "Home Ministry",
    "answer_hi": "गृह मंत्रालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which state launched 'Indira Gandhi Urban Employment Guarantee Scheme' in 2023?",
    "question_hi": "2023 में किस राज्य ने 'इंदिरा गांधी शहरी रोजगार गारंटी योजना' शुरू की?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Chhattisgarh", "Jharkhand"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "छत्तीसगढ़", "झारखंड"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does 'LiFE' stand for in 'Mission LiFE' launched by India?",
    "question_hi": "भारत द्वारा शुरू किए गए 'मिशन लाइफ' में 'LiFE' का क्या अर्थ है?",
    "options_en": ["Lifestyle for Environment", "Living for Future Environment", "Life in Friendly Ecosystem", "Lifestyle Improvement for Earth"],
    "options_hi": ["पर्यावरण के लिए जीवन शैली", "भविष्य के पर्यावरण के लिए जीना", "अनुकूल पारिस्थितिकी तंत्र में जीवन", "पृथ्वी के लिए जीवनशैली सुधार"],
    "answer_en": "Lifestyle for Environment",
    "answer_hi": "पर्यावरण के लिए जीवन शैली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Indian city hosted the Chess Olympiad in 2022?",
    "question_hi": "किस भारतीय शहर ने 2022 में शतरंज ओलिंपियाड की मेजबानी की?",
    "options_en": ["Chennai", "Delhi", "Mumbai", "Kolkata"],
    "options_hi": ["चेन्नई", "दिल्ली", "मुंबई", "कोलकाता"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who was appointed as the new Chief Justice of India in 2023?",
    "question_hi": "2023 में भारत के नए मुख्य न्यायाधीश के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Justice U.U. Lalit", "Justice D.Y. Chandrachud", "Justice N.V. Ramana", "Justice S.A. Bobde"],
    "options_hi": ["न्यायमूर्ति यू.यू. ललित", "न्यायमूर्ति डी.वाई. चंद्रचूड़", "न्यायमूर्ति एन.वी. रमना", "न्यायमूर्ति एस.ए. बोबडे"],
    "answer_en": "Justice D.Y. Chandrachud",
    "answer_hi": "न्यायमूर्ति डी.वाई. चंद्रचूड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which country won the ICC Men's Cricket World Cup 2023?",
    "question_hi": "आईसीसी पुरुष क्रिकेट विश्व कप 2023 किस देश ने जीता?",
    "options_en": ["India", "Australia", "England", "New Zealand"],
    "options_hi": ["भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "न्यूज़ीलैंड"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Who won the Nobel Peace Prize in 2023?",
    "question_hi": "2023 में नोबेल शांति पुरस्कार किसने जीता?",
    "options_en": ["Narges Mohammadi", "Maria Ressa", "Ales Bialiatski", "World Food Programme"],
    "options_hi": ["नरगेस मोहम्मदी", "मारिया रेसा", "एलेस बियालियात्स्की", "विश्व खाद्य कार्यक्रम"],
    "answer_en": "Narges Mohammadi",
    "answer_hi": "नरगेस मोहम्मदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Indian state launched the 'MYSTEP' portal for job seekers?",
    "question_hi": "किस भारतीय राज्य ने नौकरी चाहने वालों के लिए 'MYSTEP' पोर्टल लॉन्च किया?",
    "options_en": ["Maharashtra", "Tamil Nadu", "Karnataka", "Kerala"],
    "options_hi": ["महाराष्ट्र", "तमिलनाडु", "कर्नाटक", "केरल"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the theme of India's G20 Presidency in 2023?",
    "question_hi": "2023 में भारत की जी20 अध्यक्षता का विषय क्या है?",
    "options_en": ["One Earth, One Family, One Future", "Recover Together, Recover Stronger", "Building Consensus for Fair and Sustainable Development", "Vasudhaiva Kutumbakam"],
    "options_hi": ["एक पृथ्वी, एक परिवार, एक भविष्य", "एक साथ पुनर्प्राप्ति, मजबूत पुनर्प्राप्ति", "निष्पक्ष और सतत विकास के लिए आम सहमति निर्माण", "वसुधैव कुटुम्बकम"],
    "answer_en": "Vasudhaiva Kutumbakam",
    "answer_hi": "वसुधैव कुटुम्बकम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Indian bank launched 'Green Rupee Term Deposit' scheme?",
    "question_hi": "किस भारतीय बैंक ने 'ग्रीन रुपया टर्म डिपॉजिट' योजना शुरू की?",
    "options_en": ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank"],
    "options_hi": ["एसबीआई", "एचडीएफसी बैंक", "आईसीआईसीआई बैंक", "एक्सिस बैंक"],
    "answer_en": "SBI",
    "answer_hi": "एसबीआई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Who was awarded the Gandhi Peace Prize for 2021?",
    "question_hi": "2021 के लिए गांधी शांति पुरस्कार किसे दिया गया?",
    "options_en": ["Gita Press", "Sheikh Mujibur Rahman", "Sultan Qaboos", "Vivekananda Kendra"],
    "options_hi": ["गीता प्रेस", "शेख मुजीबुर रहमान", "सुल्तान कबूस", "विवेकानंद केंद्र"],
    "answer_en": "Gita Press",
    "answer_hi": "गीता प्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which country is the host of FIFA Women's World Cup 2023?",
    "question_hi": "फीफा महिला विश्व कप 2023 की मेजबानी किस देश ने की?",
    "options_en": ["Australia and New Zealand", "USA", "France", "Japan"],
    "options_hi": ["ऑस्ट्रेलिया और न्यूज़ीलैंड", "यूएसए", "फ्रांस", "जापान"],
    "answer_en": "Australia and New Zealand",
    "answer_hi": "ऑस्ट्रेलिया और न्यूज़ीलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who is the author of the book 'The India Way: Strategies for an Uncertain World'?",
    "question_hi": "'द इंडिया वे: स्ट्रैटेजीज फॉर एन अनसर्टेन वर्ल्ड' पुस्तक के लेखक कौन हैं?",
    "options_en": ["S. Jaishankar", "Narendra Modi", "A.P.J. Abdul Kalam", "Shashi Tharoor"],
    "options_hi": ["एस. जयशंकर", "नरेंद्र मोदी", "ए.पी.जे. अब्दुल कलाम", "शशि थरूर"],
    "answer_en": "S. Jaishankar",
    "answer_hi": "एस. जयशंकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Indian state has the highest literacy rate as per 2021 census?",
    "question_hi": "2021 की जनगणना के अनुसार किस भारतीय राज्य की साक्षरता दर सबसे अधिक है?",
    "options_en": ["Kerala", "Mizoram", "Goa", "Delhi"],
    "options_hi": ["केरल", "मिजोरम", "गोवा", "दिल्ली"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the name of India's first indigenous aircraft carrier?",
    "question_hi": "भारत के पहले स्वदेशी विमानवाहक पोत का नाम क्या है?",
    "options_en": ["INS Vikrant", "INS Vikramaditya", "INS Viraat", "INS Vishal"],
    "options_hi": ["आईएनएस विक्रांत", "आईएनएस विक्रमादित्य", "आईएनएस वीरा", "आईएनएस विशाल"],
    "answer_en": "INS Vikrant",
    "answer_hi": "आईएनएस विक्रांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Who won the Booker Prize 2023?",
    "question_hi": "बुकर पुरस्कार 2023 किसने जीता?",
    "options_en": ["Paul Lynch", "Shehan Karunatilaka", "Geetanjali Shree", "Damon Galgut"],
    "options_hi": ["पॉल लिंच", "शेहान करुणातिलक", "गीतांजलि श्री", "डेमन गलगुट"],
    "answer_en": "Paul Lynch",
    "answer_hi": "पॉल लिंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which country hosted the BRICS Summit in 2023?",
    "question_hi": "2023 में ब्रिक्स शिखर सम्मेलन की मेजबानी किस देश ने की?",
    "options_en": ["South Africa", "China", "India", "Russia"],
    "options_hi": ["दक्षिण अफ्रीका", "चीन", "भारत", "रूस"],
    "answer_en": "South Africa",
    "answer_hi": "दक्षिण अफ्रीका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which city will host the 2024 Summer Olympics?",
    "question_hi": "2024 ग्रीष्मकालीन ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Paris", "Los Angeles", "Tokyo", "London"],
    "options_hi": ["पेरिस", "लॉस एंजिल्स", "टोक्यो", "लंदन"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the new name of the 'Rajiv Gandhi Khel Ratna Award'?",
    "question_hi": "'राजीव गांधी खेल रत्न पुरस्कार' का नया नाम क्या है?",
    "options_en": ["Major Dhyan Chand Khel Ratna", "Dronacharya Award", "Arjuna Award", "Mohan Bagan Award"],
    "options_hi": ["मेजर ध्यानचंद खेल रत्न", "द्रोणाचार्य पुरस्कार", "अर्जुन पुरस्कार", "मोहन बागान पुरस्कार"],
    "answer_en": "Major Dhyan Chand Khel Ratna",
    "answer_hi": "मेजर ध्यानचंद खेल रत्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Who is the current Chief Election Commissioner of India?",
    "question_hi": "भारत के वर्तमान मुख्य चुनाव आयुक्त कौन हैं?",
    "options_en": ["Rajiv Kumar", "Sushil Chandra", "O.P. Rawat", "Sunil Arora"],
    "options_hi": ["राजीव कुमार", "सुशील चंद्रा", "ओ.पी. रावत", "सुनिल अरोड़ा"],
    "answer_en": "Rajiv Kumar",
    "answer_hi": "राजीव कुमार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Indian city was ranked as the world's most polluted city in 2022?",
    "question_hi": "2022 में किस भारतीय शहर को दुनिया का सबसे प्रदूषित शहर माना गया?",
    "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which Indian state implemented the 'Old Pension Scheme' in 2023?",
    "question_hi": "2023 में किस भारतीय राज्य ने 'पुरानी पेंशन योजना' लागू की?",
    "options_en": ["Himachal Pradesh", "Punjab", "Rajasthan", "Chhattisgarh"],
    "options_hi": ["हिमाचल प्रदेश", "पंजाब", "राजस्थान", "छत्तीसगढ़"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Who is the current President of the World Bank?",
    "question_hi": "विश्व बैंक के वर्तमान अध्यक्ष कौन हैं?",
    "options_en": ["Ajay Banga", "David Malpass", "Kristalina Georgieva", "Jim Yong Kim"],
    "options_hi": ["अजय बंगा", "डेविड मलपास", "क्रिस्टालिना जॉर्जीवा", "जिम योंग किम"],
    "answer_en": "Ajay Banga",
    "answer_hi": "अजय बंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which country recently changed its name to 'Turkive'?",
    "question_hi": "हाल ही में किस देश ने अपना नाम 'तुर्कीए' बदला?",
    "options_en": ["Turkey", "Syria", "Iran", "Iraq"],
    "options_hi": ["तुर्की", "सीरिया", "ईरान", "इराक"],
    "answer_en": "Turkey",
    "answer_hi": "तुर्की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Indian state launched the 'KALIA Scheme' for farmers?",
    "question_hi": "किस भारतीय राज्य ने किसानों के लिए 'कालिया योजना' शुरू की?",
    "options_en": ["Odisha", "West Bengal", "Bihar", "Andhra Pradesh"],
    "options_hi": ["ओडिशा", "पश्चिम बंगाल", "बिहार", "आंध्र प्रदेश"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Who is the current Chief Minister of Maharashtra?",
    "question_hi": "महाराष्ट्र के वर्तमान मुख्यमंत्री कौन हैं?",
    "options_en": ["Eknath Shinde", "Uddhav Thackeray", "Devendra Fadnavis", "Ajit Pawar"],
    "options_hi": ["एकनाथ शिंदे", "उद्धव ठाकरे", "देवेंद्र फड़नवीस", "अजित पवार"],
    "answer_en": "Eknath Shinde",
    "answer_hi": "एकनाथ शिंदे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which satellite was launched by ISRO's PSLV C55 mission?",
    "question_hi": "इसरो के पीएसएलवी सी55 मिशन द्वारा कौन सा उपग्रह लॉन्च किया गया?",
    "options_en": ["TeLEOS-2", "Chandrayaan-3", "Mangalyaan-2", "GSAT-24"],
    "options_hi": ["टेलीओएस-2", "चंद्रयान-3", "मंगलयान-2", "जीसैट-24"],
    "answer_en": "TeLEOS-2",
    "answer_hi": "टेलीओएस-2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Who won the 2023 Australian Open Men's Singles title?",
    "question_hi": "2023 ऑस्ट्रेलियन ओपन पुरुष एकल खिताब किसने जीता?",
    "options_en": ["Novak Djokovic", "Rafael Nadal", "Carlos Alcaraz", "Daniil Medvedev"],
    "options_hi": ["नोवाक जोकोविच", "राफेल नडाल", "कार्लोस अल्कराज़", "डेनियल मेदवेदेव"],
    "answer_en": "Novak Djokovic",
    "answer_hi": "नोवाक जोकोविच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Indian state started 'Mukhyamantri Ladli Bahna Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री लाडली बहना योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Rajasthan"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "बिहार", "राजस्थान"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Who is the author of 'The Constitution of India'?",
    "question_hi": "'भारत का संविधान' के लेखक कौन हैं?",
    "options_en": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    "options_hi": ["डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. अम्बेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Indian city hosted the International Film Festival of India 2022?",
    "question_hi": "अंतर्राष्ट्रीय फिल्म महोत्सव 2022 की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Goa", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["गोवा", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Who is the current Union Minister of Finance?",
    "question_hi": "वर्तमान केंद्रीय वित्त मंत्री कौन हैं?",
    "options_en": ["Nirmala Sitharaman", "Arun Jaitley", "P. Chidambaram", "Manmohan Singh"],
    "options_hi": ["निर्मला सीतारमण", "अरुण जेटली", "पी. चिदंबरम", "मनमोहन सिंह"],
    "answer_en": "Nirmala Sitharaman",
    "answer_hi": "निर्मला सीतारमण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which country is the largest producer of crude oil in 2023?",
    "question_hi": "2023 में कच्चे तेल का सबसे बड़ा उत्पादक देश कौन सा है?",
    "options_en": ["USA", "Saudi Arabia", "Russia", "China"],
    "options_hi": ["यूएसए", "सऊदी अरबिया", "रूस", "चीन"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Who won the Nobel Prize in Literature 2023?",
    "question_hi": "2023 का साहित्य का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["Jon Fosse", "Annie Ernaux", "Abdulrazak Gurnah", "Louise Glück"],
    "options_hi": ["जॉन फॉसे", "ऐनी एर्नो", "अब्दुलराजाक गुरनाह", "लुईस ग्लक"],
    "answer_en": "Jon Fosse",
    "answer_hi": "जॉन फॉसे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Indian state has the highest population as per 2023 estimates?",
    "question_hi": "2023 के अनुमानों के अनुसार किस भारतीय राज्य की जनसंख्या सबसे अधिक है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Who is the current Secretary General of United Nations?",
    "question_hi": "संयुक्त राष्ट्र के वर्तमान महासचिव कौन हैं?",
    "options_en": ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"],
    "options_hi": ["एंटोनियो गुटेरेस", "बान की मून", "कोफी अन्नान", "बुतरस बुतरस-घाली"],
    "answer_en": "António Guterres",
    "answer_hi": "एंटोनियो गुटेरेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which Indian state launched 'Mukhyamantri Sukanya Yojana'?",
    "question_hi": "किस भारतीय राज्य ने 'मुख्यमंत्री सुकन्या योजना' शुरू की?",
    "options_en": ["Uttarakhand", "Himachal Pradesh", "Jharkhand", "Assam"],
    "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "झारखंड", "असम"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Who won the 2023 French Open Women's Singles title?",
    "question_hi": "2023 फ्रेंच ओपन महिला एकल खिताब किसने जीता?",
    "options_en": ["Iga Swiatek", "Aryna Sabalenka", "Elena Rybakina", "Coco Gauff"],
    "options_hi": ["इगा स्विएटेक", "आरिना सबलेन्का", "एलेना रायबाकिना", "कोको गॉफ"],
    "answer_en": "Iga Swiatek",
    "answer_hi": "इगा स्विएटेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Indian city is known as the 'Pink City'?",
    "question_hi": "किस भारतीय शहर को 'गुलाबी शहर' के नाम से जाना जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Who is the current Governor of RBI?",
    "question_hi": "आरबीआई के वर्तमान गवर्नर कौन हैं?",
    "options_en": ["Shaktikanta Das", "Urjit Patel", "Raghuram Rajan", "D. Subbarao"],
    "options_hi": ["शक्तिकांत दास", "उर्जित पटेल", "रघुराम राजन", "डी. सुब्बाराव"],
    "answer_en": "Shaktikanta Das",
    "answer_hi": "शक्तिकांत दास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which country recently launched 'Chandrayaan-3' mission?",
    "question_hi": "हाल ही में किस देश ने 'चंद्रयान-3' मिशन लॉन्च किया?",
    "options_en": ["India", "USA", "China", "Russia"],
    "options_hi": ["भारत", "यूएसए", "चीन", "रूस"],
    "answer_en": "India",
    "answer_hi": "भारत",
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