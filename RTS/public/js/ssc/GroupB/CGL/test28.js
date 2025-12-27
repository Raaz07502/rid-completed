const questions = [
  {
    "num":1,
    "question_en": "Which river is known as the 'Sorrow of Bihar'?",
    "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Son", "Gandak"],
    "options_hi": ["कोसी", "गंगा", "सोन", "गंडक"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Who was the first Indian woman to win an Olympic medal?",
    "question_hi": "ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Karnam Malleswari", "PT Usha", "Mary Kom", "Saina Nehwal"],
    "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मेरी कोम", "सायना नेहवाल"],
    "answer_en": "Karnam Malleswari",
    "answer_hi": "कर्णम मल्लेश्वरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which article of the Indian Constitution deals with 'Right to Freedom of Religion'?",
    "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'धर्म की स्वतंत्रता के अधिकार' से संबंधित है?",
    "options_en": ["Article 25", "Article 21", "Article 19", "Article 32"],
    "options_hi": ["अनुच्छेद 25", "अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 32"],
    "answer_en": "Article 25",
    "answer_hi": "अनुच्छेद 25",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which blood group is known as the 'Universal Donor'?",
    "question_hi": "कौन सा रक्त समूह 'सार्वत्रिक दाता' कहलाता है?",
    "options_en": ["O Negative", "O Positive", "AB Positive", "A Negative"],
    "options_hi": ["O नेगेटिव", "O पॉजिटिव", "AB पॉजिटिव", "A नेगेटिव"],
    "answer_en": "O Negative",
    "answer_hi": "O नेगेटिव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "The Keibul Lamjao National Park is famous for which rare species?",
    "question_hi": "केइबुल लामजाओ राष्ट्रीय उद्यान किस दुर्लभ प्रजाति के लिए प्रसिद्ध है?",
    "options_en": ["Sangai Deer", "Golden Langur", "Indian Rhino", "Snow Leopard"],
    "options_hi": ["संगाई हिरण", "स्वर्ण लंगूर", "भारतीय गैंडा", "हिम तेंदुआ"],
    "answer_en": "Sangai Deer",
    "answer_hi": "संगाई हिरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which gas is commonly known as 'Laughing Gas'?",
    "question_hi": "कौन सी गैस 'हँसाने वाली गैस' के नाम से जानी जाती है?",
    "options_en": ["Nitrous Oxide", "Carbon Monoxide", "Nitrogen Dioxide", "Ozone"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "ओज़ोन"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "The 'Dandi March' was started from which place?",
    "question_hi": "'दांडी मार्च' की शुरुआत किस स्थान से हुई थी?",
    "options_en": ["Sabarmati Ashram", "Porbandar", "Wardha", "Champaran"],
    "options_hi": ["सबर्मती आश्रम", "पोरबंदर", "वर्धा", "चंपारण"],
    "answer_en": "Sabarmati Ashram",
    "answer_hi": "सबर्मती आश्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "What is the currency of South Korea?",
    "question_hi": "दक्षिण कोरिया की मुद्रा क्या है?",
    "options_en": ["Won", "Yen", "Ruble", "Ringgit"],
    "options_hi": ["वॉन", "येन", "रूबल", "रिंग्गित"],
    "answer_en": "Won",
    "answer_hi": "वॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which sector contributes the largest share to India's GDP?",
    "question_hi": "भारत के GDP में सबसे अधिक योगदान किस क्षेत्र का है?",
    "options_en": ["Service Sector", "Agriculture", "Manufacturing", "Mining"],
    "options_hi": ["सेवा क्षेत्र", "कृषि", "उत्पादन", "खनन"],
    "answer_en": "Service Sector",
    "answer_hi": "सेवा क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which is the largest gland in the human body?",
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    "options_en": ["Liver", "Pancreas", "Thyroid", "Pituitary"],
    "options_hi": ["यकृत", "अग्न्याशय", "थायरॉयड", "पिट्यूटरी"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Who was the Viceroy of India during the Partition of Bengal (1905)?",
    "question_hi": "1905 में बंगाल विभाजन के समय भारत का वायसराय कौन था?",
    "options_en": ["Lord Curzon", "Lord Hardinge", "Lord Ripon", "Lord Lytton"],
    "options_hi": ["लॉर्ड कर्जन", "लॉर्ड हार्डिंग", "लॉर्ड रिपन", "लॉर्ड लिटन"],
    "answer_en": "Lord Curzon",
    "answer_hi": "लॉर्ड कर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which state is the largest producer of wheat in India?",
    "question_hi": "भारत में सबसे अधिक गेहूं उत्पादन कौन सा राज्य करता है?",
    "options_en": ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "पंजाब", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "The term 'CPU' stands for?",
    "question_hi": "'CPU' का पूर्ण रूप क्या है?",
    "options_en": ["Central Processing Unit", "Control Processing Unit", "Central Power Unit", "Computer Processing Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "सेंट्रल पावर यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which Mughal ruler built the Red Fort?",
    "question_hi": "लाल किला किस मुगल शासक ने बनवाया?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगज़ेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which river flows through the Grand Canyon?",
    "question_hi": "ग्रांड कैन्यन से होकर कौन सी नदी बहती है?",
    "options_en": ["Colorado River", "Mississippi River", "Amazon River", "Nile River"],
    "options_hi": ["कोलोराडो नदी", "मिसिसिपी नदी", "अमेज़न नदी", "नील नदी"],
    "answer_en": "Colorado River",
    "answer_hi": "कोलोराडो नदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Who wrote the book 'Wings of Fire'?",
    "question_hi": "'विंग्स ऑफ फायर' पुस्तक किसने लिखी?",
    "options_en": ["APJ Abdul Kalam", "Jawaharlal Nehru", "Rabindranath Tagore", "Vikram Sarabhai"],
    "options_hi": ["ए.पी.जे. अब्दुल कलाम", "जवाहरलाल नेहरू", "रवींद्रनाथ टैगोर", "विक्रम साराभाई"],
    "answer_en": "APJ Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कमरे के तापमान पर कौन सी धातु द्रव अवस्था में रहती है?",
    "options_en": ["Mercury", "Iron", "Copper", "Silver"],
    "options_hi": ["पारा", "लोहा", "तांबा", "चांदी"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian city is known as the 'City of Lakes'?",
    "question_hi": "कौन सा भारतीय शहर 'झीलों का शहर' कहलाता है?",
    "options_en": ["Udaipur", "Bhopal", "Hyderabad", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "हैदराबाद", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "World Environment Day is observed on?",
    "question_hi": "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    "options_en": ["5 June", "22 April", "8 March", "1 July"],
    "options_hi": ["5 जून", "22 अप्रैल", "8 मार्च", "1 जुलाई"],
    "answer_en": "5 June",
    "answer_hi": "5 जून",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबा समुद्री तट किस राज्य का है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
    "options_hi": ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "आंध्र प्रदेश"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "The concept of Fundamental Duties in the Indian Constitution was taken from which country?",
    "question_hi": "भारतीय संविधान में मौलिक कर्तव्यों की अवधारणा किस देश से ली गई है?",
    "options_en": ["USSR", "USA", "UK", "Japan"],
    "options_hi": ["USSR", "USA", "UK", "जापान"],
    "answer_en": "USSR",
    "answer_hi": "USSR",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Who discovered the neutron?",
    "question_hi": "न्यूट्रॉन की खोज किसने की?",
    "options_en": ["James Chadwick", "Rutherford", "Bohr", "J.J. Thomson"],
    "options_hi": ["जेम्स चेडविक", "रदरफोर्ड", "बोर", "जे.जे. थॉमसन"],
    "answer_en": "James Chadwick",
    "answer_hi": "जेम्स चेडविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "The planning commission was replaced by which organisation?",
    "question_hi": "योजना आयोग की जगह किस संगठन ने ली?",
    "options_en": ["NITI Aayog", "Finance Commission", "Election Commission", "CAG"],
    "options_hi": ["नीति आयोग", "वित्त आयोग", "निर्वाचन आयोग", "सीएजी"],
    "answer_en": "NITI Aayog",
    "answer_hi": "नीति आयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which soil has the highest water holding capacity?",
    "question_hi": "किस मिट्टी की जल धारण क्षमता सबसे अधिक होती है?",
    "options_en": ["Clayey Soil", "Sandy Soil", "Loamy Soil", "Alluvial Soil"],
    "options_hi": ["चिकनी मिट्टी", "रेतीली मिट्टी", "दोमट मिट्टी", "जलोढ़ मिट्टी"],
    "answer_en": "Clayey Soil",
    "answer_hi": "चिकनी मिट्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Who wrote the national song 'Vande Mataram'?",
    "question_hi": "'वंदे मातरम्' राष्ट्रीय गीत किसने लिखा?",
    "options_en": ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    "options_hi": ["बंकिम चन्द्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "महात्मा गांधी"],
    "answer_en": "Bankim Chandra Chattopadhyay",
    "answer_hi": "बंकिम चन्द्र चट्टोपाध्याय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध करने का कार्य कौन करता है?",
    "options_en": ["Kidney", "Liver", "Lungs", "Heart"],
    "options_hi": ["किडनी", "यकृत", "फेफड़े", "हृदय"],
    "answer_en": "Kidney",
    "answer_hi": "किडनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "The Quit India Movement was launched in which year?",
    "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?",
    "options_en": ["1942", "1935", "1947", "1920"],
    "options_hi": ["1942", "1935", "1947", "1920"],
    "answer_en": "1942",
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which state is known as the 'Land of Rising Sun' in India?",
    "question_hi": "भारत में किस राज्य को 'उगते सूरज की भूमि' कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Sikkim", "Nagaland"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "सिक्किम", "नगालैंड"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "The SI unit of force is?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Newton", "Joule", "Pascal", "Watt"],
    "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which Mughal Emperor built the Jama Masjid in Delhi?",
    "question_hi": "दिल्ली में जामा मस्जिद का निर्माण किस मुगल सम्राट ने करवाया?",
    "options_en": ["Shah Jahan", "Akbar", "Jahangir", "Babur"],
    "options_hi": ["शाहजहाँ", "अकबर", "जहाँगीर", "बाबर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "What is the chemical formula of Common Salt?",
    "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCO3", "NaHCO3"],
    "options_hi": ["NaCl", "KCl", "CaCO3", "NaHCO3"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which Indian state is the largest tea producer?",
    "question_hi": "भारत में सबसे अधिक चाय उत्पादन किस राज्य में होता है?",
    "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Who was the first Indian to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    "options_en": ["Rabindranath Tagore", "CV Raman", "Hargobind Khorana", "Mother Teresa"],
    "options_hi": ["रवींद्रनाथ टैगोर", "सी.वी. रमन", "हरगोविंद खुराना", "मदर टेरेसा"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "options_hi": ["नील", "अमेज़न", "यांग्त्ज़े", "मिसीसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "What is the normal pH value of human blood?",
    "question_hi": "मानव रक्त का सामान्य pH मान क्या होता है?",
    "options_en": ["7.4", "5.5", "8.2", "6.4"],
    "options_hi": ["7.4", "5.5", "8.2", "6.4"],
    "answer_en": "7.4",
    "answer_hi": "7.4",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "In which year did the Jallianwala Bagh Massacre take place?",
    "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ?",
    "options_en": ["1919", "1920", "1930", "1905"],
    "options_hi": ["1919", "1920", "1930", "1905"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which is the highest civilian award in India?",
    "question_hi": "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?",
    "options_en": ["Bharat Ratna", "Padma Vibhushan", "Padma Shri", "Param Vir Chakra"],
    "options_hi": ["भारत रत्न", "पद्म विभूषण", "पद्म श्री", "परम वीर चक्र"],
    "answer_en": "Bharat Ratna",
    "answer_hi": "भारत रत्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which gas is essential for photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Who is known as the 'Lion of Punjab'?",
    "question_hi": "'पंजाब का शेर' किसे कहा जाता है?",
    "options_en": ["Lala Lajpat Rai", "Bhagat Singh", "Ranjit Singh", "Udham Singh"],
    "options_hi": ["लाला लाजपत राय", "भगत सिंह", "रंजीत सिंह", "उधम सिंह"],
    "answer_en": "Lala Lajpat Rai",
    "answer_hi": "लाला लाजपत राय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "What is HCl commonly known as?",
    "question_hi": "HCl को सामान्यतः क्या कहा जाता है?",
    "options_en": ["Hydrochloric Acid", "Sulphuric Acid", "Nitric Acid", "Acetic Acid"],
    "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Hydrochloric Acid",
    "answer_hi": "हाइड्रोक्लोरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Who was the first woman President of India?",
    "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
    "options_en": ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi"],
    "options_hi": ["प्रतिभा पाटिल", "इंदिरा गांधी", "सरोजिनी नायडू", "सोनिया गांधी"],
    "answer_en": "Pratibha Patil",
    "answer_hi": "प्रतिभा पाटिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which vitamin is also known as Ascorbic Acid?",
    "question_hi": "एस्कॉर्बिक अम्ल किस विटामिन का अन्य नाम है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin K", "Vitamin B12"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन K", "विटामिन B12"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Who is known as the 'Father of Genetics'?",
    "question_hi": "'वंशागति के जनक' किसे कहा जाता है?",
    "options_en": ["Gregor Mendel", "Charles Darwin", "Lamarck", "Morgan"],
    "options_hi": ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "लमार्क", "मॉर्गन"],
    "answer_en": "Gregor Mendel",
    "answer_hi": "ग्रेगर मेंडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Who was the first Indian astronaut in space?",
    "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
    "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
    "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रविश मल्होत्रा"],
    "answer_en": "Rakesh Sharma",
    "answer_hi": "राकेश शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "The headquarter of UNESCO is located in?",
    "question_hi": "यूनेस्को का मुख्यालय कहाँ स्थित है?",
    "options_en": ["Paris", "Geneva", "New York", "Rome"],
    "options_hi": ["पेरिस", "जिनेवा", "न्यूयॉर्क", "रोम"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which device is used to convert AC into DC?",
    "question_hi": "AC को DC में बदलने के लिए किस उपकरण का उपयोग होता है?",
    "options_en": ["Rectifier", "Transformer", "Inductor", "Capacitor"],
    "options_hi": ["रेक्टिफायर", "ट्रांसफॉर्मर", "इंडक्टर", "कैपेसिटर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
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
    "num":48,
    "question_en": "What is the study of rocks called?",
    "question_hi": "चट्टानों के अध्ययन को क्या कहा जाता है?",
    "options_en": ["Petrology", "Ecology", "Seismology", "Geography"],
    "options_hi": ["पेट्रोलॉजी", "इकोलॉजी", "भूकंप विज्ञान", "भूगोल"],
    "answer_en": "Petrology",
    "answer_hi": "पेट्रोलॉजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which freedom fighter is associated with 'Hindustan Socialist Republican Association'?",
    "question_hi": "'हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन' से कौन जुड़े थे?",
    "options_en": ["Bhagat Singh", "Gandhi", "Tilak", "Subhash Bose"],
    "options_hi": ["भगत सिंह", "गांधी", "तिलक", "सुभाष बोस"],
    "answer_en": "Bhagat Singh",
    "answer_hi": "भगत सिंह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which is the smallest continent in the world?",
    "question_hi": "दुनिया का सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Australia", "Europe", "Asia", "Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "एशिया", "अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
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