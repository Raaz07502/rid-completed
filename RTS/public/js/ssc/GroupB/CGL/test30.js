const questions = [
  {
    "num":1,
    "question_en": "Which organ in the human body purifies blood?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    "options_en": ["Kidney", "Heart", "Lungs", "Liver"],
    "options_hi": ["किडनी", "हृदय", "फेफड़े", "यकृत"],
    "answer_en": "Kidney",
    "answer_hi": "किडनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Who discovered the vaccine for Smallpox?",
    "question_hi": "चेचक के टीके की खोज किसने की?",
    "options_en": ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"],
    "options_hi": ["एडवर्ड जेनर", "लुई पाश्चर", "अलेक्जेंडर फ्लेमिंग", "रॉबर्ट कोच"],
    "answer_en": "Edward Jenner",
    "answer_hi": "एडवर्ड जेनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "In which year was the Indian Constitution adopted?",
    "question_hi": "भारतीय संविधान किस वर्ष अपनाया गया था?",
    "options_en": ["1949", "1947", "1950", "1952"],
    "options_hi": ["1949", "1947", "1950", "1952"],
    "answer_en": "1949",
    "answer_hi": "1949",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which is the smallest continent in the world?",
    "question_hi": "दुनिया का सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Australia", "Europe", "Antarctica", "South America"],
    "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "What is the chemical formula of Washing Soda?",
    "question_hi": "वाशिंग सोडा का रासायनिक सूत्र क्या है?",
    "options_en": ["Na2CO3·10H2O", "CaCO3", "NaHCO3", "KCl"],
    "options_hi": ["Na2CO3·10H2O", "CaCO3", "NaHCO3", "KCl"],
    "answer_en": "Na2CO3·10H2O",
    "answer_hi": "Na2CO3·10H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "The Quit India Movement started in which year?",
    "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
    "options_en": ["1942", "1930", "1920", "1919"],
    "options_hi": ["1942", "1930", "1920", "1919"],
    "answer_en": "1942",
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Leaves", "Roots", "Stem", "Flower"],
    "options_hi": ["पत्तियाँ", "जड़ें", "तना", "फूल"],
    "answer_en": "Leaves",
    "answer_hi": "पत्तियाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which planet has the largest number of moons?",
    "question_hi": "किस ग्रह के सबसे अधिक उपग्रह हैं?",
    "options_en": ["Saturn", "Jupiter", "Neptune", "Mars"],
    "options_hi": ["शनि", "बृहस्पति", "वरुण", "मंगल"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "First Battle of Panipat was fought in?",
    "question_hi": "पहली पानीपत की लड़ाई कब लड़ी गई थी?",
    "options_en": ["1526", "1556", "1761", "1707"],
    "options_hi": ["1526", "1556", "1761", "1707"],
    "answer_en": "1526",
    "answer_hi": "1526",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which gas is used for the ripening of fruits?",
    "question_hi": "फलों को पकाने के लिए किस गैस का उपयोग किया जाता है?",
    "options_en": ["Ethylene", "Oxygen", "Nitrogen", "Chlorine"],
    "options_hi": ["एथिलीन", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which Indian leader is known as 'Punjab Kesari'?",
    "question_hi": "किस भारतीय नेता को 'पंजाब केसरी' कहा जाता है?",
    "options_en": ["Lala Lajpat Rai", "Bhagat Singh", "Bal Gangadhar Tilak", "Sardar Patel"],
    "options_hi": ["लाला लाजपत राय", "भगत सिंह", "बाल गंगाधर तिलक", "सरदार पटेल"],
    "answer_en": "Lala Lajpat Rai",
    "answer_hi": "लाला लाजपत राय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Who invented the Telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "James Watt", "Nikola Tesla"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "जेम्स वाट", "निकोला टेस्ला"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which city is the capital of Canada?",
    "question_hi": "कनाडा की राजधानी कौन सा शहर है?",
    "options_en": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    "options_hi": ["ओटावा", "टोरंटो", "वैंकूवर", "मॉन्ट्रियल"],
    "answer_en": "Ottawa",
    "answer_hi": "ओटावा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which river is called the 'Dakshin Ganga'?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Hussain", "Jawaharlal Nehru"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "जाकिर हुसैन", "जवाहरलाल नेहरू"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which vitamin is known as Ascorbic Acid?",
    "question_hi": "एस्कॉर्बिक एसिड किस विटामिन का नाम है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "The famous 'Meenakshi Temple' is located in?",
    "question_hi": "प्रसिद्ध 'मीनाक्षी मंदिर' कहाँ स्थित है?",
    "options_en": ["Madurai", "Tirupati", "Rameswaram", "Kanchipuram"],
    "options_hi": ["मदुरै", "तिरुपति", "रामेश्वरम", "कांचीपुरम"],
    "answer_en": "Madurai",
    "answer_hi": "मदुरै",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which is the hardest natural substance on Earth?",
    "question_hi": "पृथ्वी पर पाया जाने वाला सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Diamond", "Iron", "Granite", "Lead"],
    "options_hi": ["हीरा", "लोहा", "ग्रेनाइट", "सीसा"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "The 'Battle of Buxar' was fought in?",
    "question_hi": "'बक्सर का युद्ध' कब लड़ा गया?",
    "options_en": ["1764", "1757", "1857", "1782"],
    "options_hi": ["1764", "1757", "1857", "1782"],
    "answer_en": "1764",
    "answer_hi": "1764",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which acid is found in lemons?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric Acid", "Acetic Acid", "Sulphuric Acid", "Hydrochloric Acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    "answer_en": "Citric Acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },

  {
    "num":21,
    "question_en": "Which amendment lowered the voting age in India to 18?",
    "question_hi": "भारत में मतदान की आयु 18 वर्ष करने वाला संशोधन कौन सा है?",
    "options_en": ["61st Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
    "options_hi": ["61वां संशोधन", "42वां संशोधन", "44वां संशोधन", "52वां संशोधन"],
    "answer_en": "61st Amendment",
    "answer_hi": "61वां संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में किस गैस का उपयोग होता है?",
    "options_en": ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Mughal emperor built Jama Masjid in Delhi?",
    "question_hi": "दिल्ली में जामा मस्जिद किस मुगल बादशाह ने बनवाई?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगज़ेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "World Health Day is observed on?",
    "question_hi": "विश्व स्वास्थ्य दिवस कब मनाया जाता है?",
    "options_en": ["7 April", "5 June", "10 October", "1 December"],
    "options_hi": ["7 अप्रैल", "5 जून", "10 अक्टूबर", "1 दिसंबर"],
    "answer_en": "7 April",
    "answer_hi": "7 अप्रैल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "The currency of Japan is?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Yen", "Ruble", "Won", "Dollar"],
    "options_hi": ["येन", "रूबल", "वॉन", "डॉलर"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which Indian state has the highest literacy rate?",
    "question_hi": "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    "options_en": ["Kerala", "Goa", "Tamil Nadu", "Haryana"],
    "options_hi": ["केरल", "गोवा", "तमिलनाडु", "हरियाणा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Who discovered Penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Pasteur", "Newton", "Faraday"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "पाश्चर", "न्यूटन", "फ़ैराडे"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "International Yoga Day is celebrated on?",
    "question_hi": "अंतरराष्ट्रीय योग दिवस कब मनाया जाता है?",
    "options_en": ["21 June", "8 March", "1 July", "5 December"],
    "options_hi": ["21 जून", "8 मार्च", "1 जुलाई", "5 दिसंबर"],
    "answer_en": "21 June",
    "answer_hi": "21 जून",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which organ pumps blood in the human body?",
    "question_hi": "मानव शरीर में रक्त पंप करने का कार्य कौन सा अंग करता है?",
    "options_en": ["Heart", "Lungs", "Liver", "Brain"],
    "options_hi": ["हृदय", "फेफड़े", "यकृत", "मस्तिष्क"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "The Equator passes through how many continents?",
    "question_hi": "भूमध्य रेखा कितने महाद्वीपों से होकर गुजरती है?",
    "options_en": ["3", "4", "5", "2"],
    "options_hi": ["3", "4", "5", "2"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },

  {
    "num":31,
    "question_en": "Which Article of the Indian Constitution guarantees Right to Equality?",
    "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद समानता का अधिकार देता है?",
    "options_en": ["Article 14", "Article 21", "Article 19", "Article 32"],
    "options_hi": ["अनुच्छेद 14", "अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 32"],
    "answer_en": "Article 14",
    "answer_hi": "अनुच्छेद 14",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Who is known as the Iron Man of India?",
    "question_hi": "भारत का लौह पुरुष किसे कहा जाता है?",
    "options_en": ["Sardar Patel", "Subhash Bose", "Tilak", "B. R. Ambedkar"],
    "options_hi": ["सरदार पटेल", "सुभाष बोस", "तिलक", "बी. आर. अम्बेडकर"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which planet is known as the 'Morning Star'?",
    "question_hi": "किस ग्रह को 'सुबह का तारा' कहा जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "What is the SI unit of Force?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Newton", "Joule", "Pascal", "Watt"],
    "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "The Indian National Congress was founded in?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
    "options_en": ["1885", "1905", "1920", "1942"],
    "options_hi": ["1885", "1905", "1920", "1942"],
    "answer_en": "1885",
    "answer_hi": "1885",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which gas is most abundant in Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Who was the first Governor-General of independent India?",
    "question_hi": "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
    "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad", "Nehru"],
    "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचार्य", "राजेंद्र प्रसाद", "नेहरू"],
    "answer_en": "Lord Mountbatten",
    "answer_hi": "लॉर्ड माउंटबेटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which vitamin is obtained from sunlight?",
    "question_hi": "कौन सा विटामिन सूर्य के प्रकाश से प्राप्त होता है?",
    "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
    "options_hi": ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन B12"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Where is the 'Cellular Jail' located?",
    "question_hi": "'सेल्युलर जेल' कहाँ स्थित है?",
    "options_en": ["Andaman & Nicobar", "Lakshadweep", "Kerala", "Goa"],
    "options_hi": ["अंडमान निकोबार", "लक्षद्वीप", "केरल", "गोवा"],
    "answer_en": "Andaman & Nicobar",
    "answer_hi": "अंडमान निकोबार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिन्द महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },

  {
    "num":41,
    "question_en": "Where is Hawa Mahal located?",
    "question_hi": "हवा महल कहाँ स्थित है?",
    "options_en": ["Jaipur", "Delhi", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "दिल्ली", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which country gifted the Statue of Liberty to the USA?",
    "question_hi": "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने उपहार में दी?",
    "options_en": ["France", "Germany", "Russia", "Italy"],
    "options_hi": ["फ्रांस", "जर्मनी", "रूस", "इटली"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which planet has a day longer than its year?",
    "question_hi": "किस ग्रह का दिन उसके वर्ष से लंबा होता है?",
    "options_en": ["Venus", "Mars", "Mercury", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बुध", "शनि"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "The National Emblem of India is adopted from?",
    "question_hi": "भारत का राष्ट्रीय प्रतीक किससे लिया गया है?",
    "options_en": ["Sarnath Lion Capital", "Ashoka Chakra", "Konark Wheel", "Nataraja"],
    "options_hi": ["सारनाथ लायन कैपिटल", "अशोक चक्र", "कोणार्क चक्र", "नटराज"],
    "answer_en": "Sarnath Lion Capital",
    "answer_hi": "सारनाथ लायन कैपिटल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which is the smallest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    "options_en": ["Stapes", "Femur", "Tibia", "Ulna"],
    "options_hi": ["स्टेप्स", "फीमर", "टिबिया", "अल्ना"],
    "answer_en": "Stapes",
    "answer_hi": "स्टेप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "When is National Science Day celebrated in India?",
    "question_hi": "भारत में राष्ट्रीय विज्ञान दिवस कब मनाया जाता है?",
    "options_en": ["28 February", "5 January", "15 August", "22 December"],
    "options_hi": ["28 फरवरी", "5 जनवरी", "15 अगस्त", "22 दिसंबर"],
    "answer_en": "28 February",
    "answer_hi": "28 फरवरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Who is the author of 'Discovery of India'?",
    "question_hi": "'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
    "options_en": ["Jawaharlal Nehru", "Tagore", "Dr. Ambedkar", "Bankim Chandra"],
    "options_hi": ["जवाहरलाल नेहरू", "टैगोर", "डॉ. अम्बेडकर", "बंकिम चंद्र"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which river is known as the lifeline of Egypt?",
    "question_hi": "कौन सी नदी मिस्र की जीवन रेखा कहलाती है?",
    "options_en": ["Nile", "Amazon", "Danube", "Volga"],
    "options_hi": ["नील", "अमेज़न", "डैन्यूब", "वोल्गा"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which state is famous for the tea gardens of Darjeeling?",
    "question_hi": "दार्जिलिंग के चाय बागानों के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["West Bengal", "Assam", "Sikkim", "Himachal Pradesh"],
    "options_hi": ["पश्चिम बंगाल", "असम", "सिक्किम", "हिमाचल प्रदेश"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which mineral deficiency causes Goitre?",
    "question_hi": "गण्डमाला (गोइटर) किस खनिज की कमी से होता है?",
    "options_en": ["Iodine", "Calcium", "Iron", "Phosphorus"],
    "options_hi": ["आयोडीन", "कैल्शियम", "लौह", "फॉस्फोरस"],
    "answer_en": "Iodine",
    "answer_hi": "आयोडीन",
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