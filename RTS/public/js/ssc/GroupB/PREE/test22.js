const questions = [
  {
   "num": 1,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri", "Rajiv Gandhi"],
    "options_hi": ["जवाहरलाल नेहरू", "इंदिरा गांधी", "लाल बहादुर शास्त्री", "राजीव गांधी"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "Which article of the Indian Constitution deals with the Election Commission?",
    "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद चुनाव आयोग से संबंधित है?",
    "options_en": ["Article 324", "Article 356", "Article 360", "Article 368"],
    "options_hi": ["अनुच्छेद 324", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 368"],
    "answer_en": "Article 324",
    "answer_hi": "अनुच्छेद 324",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Who is the current Chief Justice of India (as of 2024)?",
    "question_hi": "भारत के वर्तमान मुख्य न्यायाधीश कौन हैं (2024 तक)?",
    "options_en": ["Justice D.Y. Chandrachud", "Justice N.V. Ramana", "Justice Sharad Arvind Bobde", "Justice Ranjan Gogoi"],
    "options_hi": ["न्यायमूर्ति डी.वाई. चंद्रचूड़", "न्यायमूर्ति एन.वी. रमना", "न्यायमूर्ति शरद अरविंद बोबडे", "न्यायमूर्ति रंजन गोगोई"],
    "answer_en": "Justice D.Y. Chandrachud",
    "answer_hi": "न्यायमूर्ति डी.वाई. चंद्रचूड़",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "The 'Panchayati Raj System' was constitutionalized through which amendment?",
    "question_hi": "'पंचायती राज व्यवस्था' को किस संशोधन के माध्यम से संवैधानिक बनाया गया था?",
    "options_en": ["73rd Amendment", "74th Amendment", "42nd Amendment", "44th Amendment"],
    "options_hi": ["73वां संशोधन", "74वां संशोधन", "42वां संशोधन", "44वां संशोधन"],
    "answer_en": "73rd Amendment",
    "answer_hi": "73वां संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Who appoints the Prime Minister of India?",
    "question_hi": "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
    "options_en": ["President", "Parliament", "Chief Justice", "People of India"],
    "options_hi": ["राष्ट्रपति", "संसद", "मुख्य न्यायाधीश", "भारत की जनता"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "Which state has the maximum number of Lok Sabha seats?",
    "question_hi": "किस राज्य में लोकसभा सीटों की संख्या अधिकतम है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "West Bengal", "Bihar"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "पश्चिम बंगाल", "बिहार"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "The 'National Emergency' under Article 352 can be declared on which grounds?",
    "question_hi": "अनुच्छेद 352 के तहत 'राष्ट्रीय आपातकाल' किन आधारों पर घोषित किया जा सकता है?",
    "options_en": ["War, External Aggression, Armed Rebellion", "Financial Crisis", "Constitutional Breakdown", "Natural Calamity"],
    "options_hi": ["युद्ध, बाहरी आक्रमण, सशस्त्र विद्रोह", "वित्तीय संकट", "संवैधानिक विफलता", "प्राकृतिक आपदा"],
    "answer_en": "War, External Aggression, Armed Rebellion",
    "answer_hi": "युद्ध, बाहरी आक्रमण, सशस्त्र विद्रोह",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "Who was the first woman Chief Minister of an Indian state?",
    "question_hi": "किसी भारतीय राज्य की पहली महिला मुख्यमंत्री कौन थीं?",
    "options_en": ["Sucheta Kriplani", "Indira Gandhi", "Sarojini Naidu", "Mamata Banerjee"],
    "options_hi": ["सुचेता कृपलानी", "इंदिरा गांधी", "सरोजिनी नायडू", "ममता बनर्जी"],
    "answer_en": "Sucheta Kriplani",
    "answer_hi": "सुचेता कृपलानी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "The 'Office of Profit' is mentioned in which article of the Constitution?",
    "question_hi": "'लाभ के पद' का उल्लेख संविधान के किस अनुच्छेद में है?",
    "options_en": ["Article 102", "Article 103", "Article 191", "Article 192"],
    "options_hi": ["अनुच्छेद 102", "अनुच्छेद 103", "अनुच्छेद 191", "अनुच्छेद 192"],
    "answer_en": "Article 102",
    "answer_hi": "अनुच्छेद 102",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "Which political party is currently in power at the Centre (as of 2024)?",
    "question_hi": "कौन सी राजनीतिक पार्टी वर्तमान में केंद्र में सत्ता में है (2024 तक)?",
    "options_en": ["Bharatiya Janata Party", "Indian National Congress", "Aam Aadmi Party", "Trinamool Congress"],
    "options_hi": ["भारतीय जनता पार्टी", "भारतीय राष्ट्रीय कांग्रेस", "आम आदमी पार्टी", "त्रिणमूल कांग्रेस"],
    "answer_en": "Bharatiya Janata Party",
    "answer_hi": "भारतीय जनता पार्टी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "The 'Right to Information Act' was passed in which year?",
    "question_hi": "'सूचना का अधिकार अधिनियम' किस वर्ष पारित किया गया था?",
    "options_en": ["2005", "2002", "2010", "1995"],
    "options_hi": ["2005", "2002", "2010", "1995"],
    "answer_en": "2005",
    "answer_hi": "2005",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "Who is the ex-officio Chairman of the Planning Commission (now NITI Aayog)?",
    "question_hi": "योजना आयोग (अब नीति आयोग) के पदेन अध्यक्ष कौन होते हैं?",
    "options_en": ["Prime Minister", "President", "Finance Minister", "Home Minister"],
    "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "वित्त मंत्री", "गृह मंत्री"],
    "answer_en": "Prime Minister",
    "answer_hi": "प्रधानमंत्री",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
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
   "num": 14,
    "question_en": "The first Lok Sabha election in India was held in which year?",
    "question_hi": "भारत में पहला लोकसभा चुनाव किस वर्ष हुआ था?",
    "options_en": ["1951-52", "1947", "1950", "1957"],
    "options_hi": ["1951-52", "1947", "1950", "1957"],
    "answer_en": "1951-52",
    "answer_hi": "1951-52",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Who was the first Deputy Prime Minister of India?",
    "question_hi": "भारत के पहले उप प्रधानमंत्री कौन थे?",
    "options_en": ["Sardar Vallabhbhai Patel", "Morarji Desai", "Charan Singh", "L.K. Advani"],
    "options_hi": ["सरदार वल्लभभाई पटेल", "मोरारजी देसाई", "चरण सिंह", "एल.के. आडवाणी"],
    "answer_en": "Sardar Vallabhbhai Patel",
    "answer_hi": "सरदार वल्लभभाई पटेल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "The 'Anti-Defection Law' is contained in which schedule of the Constitution?",
    "question_hi": "'दल-बदल विरोधी कानून' संविधान की किस अनुसूची में समाहित है?",
    "options_en": ["Tenth Schedule", "Ninth Schedule", "Eighth Schedule", "Seventh Schedule"],
    "options_hi": ["दसवीं अनुसूची", "नौवीं अनुसूची", "आठवीं अनुसूची", "सातवीं अनुसूची"],
    "answer_en": "Tenth Schedule",
    "answer_hi": "दसवीं अनुसूची",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Who was the first President of India to die in office?",
    "question_hi": "कार्यालय में मरने वाले भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Zakir Hussain", "Dr. S. Radhakrishnan", "Dr. Rajendra Prasad", "V.V. Giri"],
    "options_hi": ["डॉ. जाकिर हुसैन", "डॉ. एस. राधाकृष्णन", "डॉ. राजेंद्र प्रसाद", "वी.वी. गिरि"],
    "answer_en": "Dr. Zakir Hussain",
    "answer_hi": "डॉ. जाकिर हुसैन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "The 'National Human Rights Commission' was established in which year?",
    "question_hi": "'राष्ट्रीय मानवाधिकार आयोग' की स्थापना किस वर्ष हुई?",
    "options_en": ["1993", "1995", "2000", "1985"],
    "options_hi": ["1993", "1995", "2000", "1985"],
    "answer_en": "1993",
    "answer_hi": "1993",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Who is the current Speaker of Lok Sabha (as of 2024)?",
    "question_hi": "लोकसभा के वर्तमान अध्यक्ष कौन हैं (2024 तक)?",
    "options_en": ["Om Birla", "Sumitra Mahajan", "Meira Kumar", "G.V. Mavalankar"],
    "options_hi": ["ओम बिरला", "सुमित्रा महाजन", "मीरा कुमार", "जी.वी. मावलंकर"],
    "answer_en": "Om Birla",
    "answer_hi": "ओम बिरला",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "The 'Union Public Service Commission' is established under which article?",
    "question_hi": "'संघ लोक सेवा आयोग' किस अनुच्छेद के तहत स्थापित किया गया है?",
    "options_en": ["Article 315", "Article 320", "Article 324", "Article 356"],
    "options_hi": ["अनुच्छेद 315", "अनुच्छेद 320", "अनुच्छेद 324", "अनुच्छेद 356"],
    "answer_en": "Article 315",
    "answer_hi": "अनुच्छेद 315",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Who was the first woman Governor of an Indian state?",
    "question_hi": "किसी भारतीय राज्य की पहली महिला राज्यपाल कौन थीं?",
    "options_en": ["Sarojini Naidu", "Indira Gandhi", "Vijayalakshmi Pandit", "Sucheta Kriplani"],
    "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "विजयलक्ष्मी पंडित", "सुचेता कृपलानी"],
    "answer_en": "Sarojini Naidu",
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "The 'National Commission for Women' was established in which year?",
    "question_hi": "'राष्ट्रीय महिला आयोग' की स्थापना किस वर्ष हुई?",
    "options_en": ["1992", "1990", "1985", "2000"],
    "options_hi": ["1992", "1990", "1985", "2000"],
    "answer_en": "1992",
    "answer_hi": "1992",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
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
   "num": 24,
    "question_en": "The 'Chief Election Commissioner' is appointed by:",
    "question_hi": "'मुख्य चुनाव आयुक्त' की नियुक्ति की जाती है:",
    "options_en": ["President", "Prime Minister", "Parliament", "Supreme Court"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Who was the first woman to become the Speaker of Lok Sabha?",
    "question_hi": "लोकसभा की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Meira Kumar", "Sumitra Mahajan", "Sushma Swaraj", "Indira Gandhi"],
    "options_hi": ["मीरा कुमार", "सुमित्रा महाजन", "सुषमा स्वराज", "इंदिरा गांधी"],
    "answer_en": "Meira Kumar",
    "answer_hi": "मीरा कुमार",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "The 'National Commission for Scheduled Castes' is established under which article?",
    "question_hi": "'राष्ट्रीय अनुसूचित जाति आयोग' किस अनुच्छेद के तहत स्थापित किया गया है?",
    "options_en": ["Article 338", "Article 340", "Article 342", "Article 344"],
    "options_hi": ["अनुच्छेद 338", "अनुच्छेद 340", "अनुच्छेद 342", "अनुच्छेद 344"],
    "answer_en": "Article 338",
    "answer_hi": "अनुच्छेद 338",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Who was the first woman Chief Justice of a High Court in India?",
    "question_hi": "भारत में किसी उच्च न्यायालय की पहली महिला मुख्य न्यायाधीश कौन थीं?",
    "options_en": ["Justice Leila Seth", "Justice Ruma Pal", "Justice Gita Mittal", "Justice Indu Malhotra"],
    "options_hi": ["न्यायमूर्ति लीला सेठ", "न्यायमूर्ति रूमा पाल", "न्यायमूर्ति गीता मित्तल", "न्यायमूर्ति इंदु मल्होत्रा"],
    "answer_en": "Justice Leila Seth",
    "answer_hi": "न्यायमूर्ति लीला सेठ",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "The 'Vote on Account' is passed by:",
    "question_hi": "'वोट ऑन अकाउंट' पारित किया जाता है:",
    "options_en": ["Parliament", "President", "Prime Minister", "Finance Ministry"],
    "options_hi": ["संसद", "राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्रालय"],
    "answer_en": "Parliament",
    "answer_hi": "संसद",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Who was the first Dalit President of India?",
    "question_hi": "भारत के पहले दलित राष्ट्रपति कौन थे?",
    "options_en": ["K.R. Narayanan", "Dr. Zakir Hussain", "Giani Zail Singh", "Dr. Rajendra Prasad"],
    "options_hi": ["के.आर. नारायणन", "डॉ. जाकिर हुसैन", "ज्ञानी जैल सिंह", "डॉ. राजेंद्र प्रसाद"],
    "answer_en": "K.R. Narayanan",
    "answer_hi": "के.आर. नारायणन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "The 'National Judicial Appointments Commission' was proposed to replace which system?",
    "question_hi": "'राष्ट्रीय न्यायिक नियुक्ति आयोग' किस प्रणाली को प्रतिस्थापित करने के लिए प्रस्तावित किया गया था?",
    "options_en": ["Collegium System", "Cabinet System", "Parliamentary System", "Presidential System"],
    "options_hi": ["कॉलेजियम प्रणाली", "मंत्रिमंडल प्रणाली", "संसदीय प्रणाली", "राष्ट्रपति प्रणाली"],
    "answer_en": "Collegium System",
    "answer_hi": "कॉलेजियम प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Who was the first woman to become the Chief Minister of Delhi?",
    "question_hi": "दिल्ली की मुख्यमंत्री बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Sushma Swaraj", "Sheila Dikshit", "Mamata Banerjee", "Jayalalithaa"],
    "options_hi": ["सुषमा स्वराज", "शीला दीक्षित", "ममता बनर्जी", "जयललिता"],
    "answer_en": "Sushma Swaraj",
    "answer_hi": "सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "The 'Protem Speaker' is appointed by:",
    "question_hi": "'प्रोटेम स्पीकर' की नियुक्ति की जाती है:",
    "options_en": ["President", "Prime Minister", "Chief Justice", "Outgoing Speaker"],
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "बाहर जाने वाले अध्यक्ष"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Who was the first Sikh Prime Minister of India?",
    "question_hi": "भारत के पहले सिख प्रधानमंत्री कौन थे?",
    "options_en": ["Dr. Manmohan Singh", "I.K. Gujral", "Charan Singh", "Morarji Desai"],
    "options_hi": ["डॉ. मनमोहन सिंह", "आई.के. गुजराल", "चरण सिंह", "मोरारजी देसाई"],
    "answer_en": "Dr. Manmohan Singh",
    "answer_hi": "डॉ. मनमोहन सिंह",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "The 'National Commission for Backward Classes' was given constitutional status by which amendment?",
    "question_hi": "'राष्ट्रीय पिछड़ा वर्ग आयोग' को किस संशोधन द्वारा संवैधानिक दर्जा दिया गया?",
    "options_en": ["102nd Amendment", "103rd Amendment", "104th Amendment", "101st Amendment"],
    "options_hi": ["102वां संशोधन", "103वां संशोधन", "104वां संशोधन", "101वां संशोधन"],
    "answer_en": "102nd Amendment",
    "answer_hi": "102वां संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Who was the first woman to become the Minister of External Affairs?",
    "question_hi": "विदेश मंत्री बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Indira Gandhi", "Sushma Swaraj", "Vijayalakshmi Pandit", "Sarojini Naidu"],
    "options_hi": ["इंदिरा गांधी", "सुषमा स्वराज", "विजयलक्ष्मी पंडित", "सरोजिनी नायडू"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "The 'Committee on Public Accounts' is headed by:",
    "question_hi": "'लोक लेखा समिति' की अध्यक्षता करते हैं:",
    "options_en": ["A member of Opposition", "Finance Minister", "Prime Minister", "Speaker of Lok Sabha"],
    "options_hi": ["विपक्ष का एक सदस्य", "वित्त मंत्री", "प्रधानमंत्री", "लोकसभा अध्यक्ष"],
    "answer_en": "A member of Opposition",
    "answer_hi": "विपक्ष का एक सदस्य",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Who was the first woman to become the Governor of Reserve Bank of India?",
    "question_hi": "भारतीय रिजर्व बैंक की गवर्नर बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Usha Thorat", "Shyamala Gopinath", "K.J. Udeshi", "None of the above"],
    "options_hi": ["उषा थोराट", "श्यामला गोपीनाथ", "के.जे. उदेशी", "उपरोक्त में से कोई नहीं"],
    "answer_en": "None of the above",
    "answer_hi": "उपरोक्त में से कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "The 'National Green Tribunal' was established in which year?",
    "question_hi": "'राष्ट्रीय हरित अधिकरण' की स्थापना किस वर्ष हुई?",
    "options_en": ["2010", "2005", "2015", "2000"],
    "options_hi": ["2010", "2005", "2015", "2000"],
    "answer_en": "2010",
    "answer_hi": "2010",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Who was the first woman to become the Chief Minister of Tamil Nadu?",
    "question_hi": "तमिलनाडु की मुख्यमंत्री बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Janaki Ramachandran", "Jayalalithaa", "M. Karunanidhi", "M.G. Ramachandran"],
    "options_hi": ["जानकी रामचंद्रन", "जयललिता", "एम. करुणानिधि", "एम.जी. रामचंद्रन"],
    "answer_en": "Janaki Ramachandran",
    "answer_hi": "जानकी रामचंद्रन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "The 'Right to Education Act' was passed in which year?",
    "question_hi": "'शिक्षा का अधिकार अधिनियम' किस वर्ष पारित किया गया था?",
    "options_en": ["2009", "2005", "2010", "2012"],
    "options_hi": ["2009", "2005", "2010", "2012"],
    "answer_en": "2009",
    "answer_hi": "2009",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Who was the first woman to become the Deputy Chairman of Rajya Sabha?",
    "question_hi": "राज्यसभा की उपसभापति बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Violet Alva", "Najma Heptulla", "Margaret Alva", "Sushma Swaraj"],
    "options_hi": ["वायलेट अल्वा", "नजमा हेपतुल्ला", "मार्गरेट अल्वा", "सुषमा स्वराज"],
    "answer_en": "Violet Alva",
    "answer_hi": "वायलेट अल्वा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "The 'National Commission for Minorities' was established in which year?",
    "question_hi": "'राष्ट्रीय अल्पसंख्यक आयोग' की स्थापना किस वर्ष हुई?",
    "options_en": ["1992", "1993", "1995", "2000"],
    "options_hi": ["1992", "1993", "1995", "2000"],
    "answer_en": "1992",
    "answer_hi": "1992",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Who was the first woman to become the Chief Justice of India?",
    "question_hi": "भारत की मुख्य न्यायाधीश बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Justice R. Banumathi", "Justice Gita Mittal", "Justice Indu Malhotra", "None of the above"],
    "options_hi": ["न्यायमूर्ति आर. भानुमति", "न्यायमूर्ति गीता मित्तल", "न्यायमूर्ति इंदु मल्होत्रा", "उपरोक्त में से कोई नहीं"],
    "answer_en": "None of the above",
    "answer_hi": "उपरोक्त में से कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "The 'National Food Security Act' was passed in which year?",
    "question_hi": "'राष्ट्रीय खाद्य सुरक्षा अधिनियम' किस वर्ष पारित किया गया था?",
    "options_en": ["2013", "2010", "2015", "2005"],
    "options_hi": ["2013", "2010", "2015", "2005"],
    "answer_en": "2013",
    "answer_hi": "2013",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Who was the first woman to become the Minister of Defence?",
    "question_hi": "रक्षा मंत्री बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Indira Gandhi", "Nirmala Sitharaman", "Sushma Swaraj", "Mamata Banerjee"],
    "options_hi": ["इंदिरा गांधी", "निर्मला सीतारमण", "सुषमा स्वराज", "ममता बनर्जी"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "The 'National Commission for Protection of Child Rights' was established in which year?",
    "question_hi": "'राष्ट्रीय बाल अधिकार संरक्षण आयोग' की स्थापना किस वर्ष हुई?",
    "options_en": ["2007", "2005", "2010", "2012"],
    "options_hi": ["2007", "2005", "2010", "2012"],
    "answer_en": "2007",
    "answer_hi": "2007",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Who was the first woman to become the Chief Minister of Uttar Pradesh?",
    "question_hi": "उत्तर प्रदेश की मुख्यमंत्री बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Sucheta Kriplani", "Mayawati", "Sonia Gandhi", "Indira Gandhi"],
    "options_hi": ["सुचेता कृपलानी", "मायावती", "सोनिया गांधी", "इंदिरा गांधी"],
    "answer_en": "Sucheta Kriplani",
    "answer_hi": "सुचेता कृपलानी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "The 'Prevention of Corruption Act' was passed in which year?",
    "question_hi": "'भ्रष्टाचार निवारण अधिनियम' किस वर्ष पारित किया गया था?",
    "options_en": ["1988", "1990", "2000", "2005"],
    "options_hi": ["1988", "1990", "2000", "2005"],
    "answer_en": "1988",
    "answer_hi": "1988",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Who was the first woman to become the Chief Minister of West Bengal?",
    "question_hi": "पश्चिम बंगाल की मुख्यमंत्री बनने वाली पहली महिला कौन थीं?",
    "options_en": ["Mamata Banerjee", "Indira Gandhi", "Sarojini Naidu", "None of the above"],
    "options_hi": ["ममता बनर्जी", "इंदिरा गांधी", "सरोजिनी नायडू", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Mamata Banerjee",
    "answer_hi": "ममता बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "The 'Representation of the People Act' was passed in which year?",
    "question_hi": "'जनप्रतिनिधित्व अधिनियम' किस वर्ष पारित किया गया था?",
    "options_en": ["1951", "1950", "1952", "1949"],
    "options_hi": ["1951", "1950", "1952", "1949"],
    "answer_en": "1951",
    "answer_hi": "1951",
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