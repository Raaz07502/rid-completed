const questions = [
  {
    "num":1,
    question_en: "Which country gifted the Statue of Liberty to the USA?",
    question_hi: "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने भेंट की थी?",
    options_en: ["France", "Germany", "UK", "Canada"],
    options_hi: ["फ्रांस", "जर्मनी", "यूके", "कनाडा"],
    answer_en: "France",
    answer_hi: "फ्रांस",
    attempted: false,
    selected: ""
  },
  {
    "num":2,
    question_en: "What is the chemical symbol of gold?",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Ag", "Au", "Gd", "Go"],
    options_hi: ["Ag", "Au", "Gd", "Go"],
    answer_en: "Au",
    answer_hi: "Au",
    attempted: false,
    selected: ""
  },
  {
    "num":3,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
    options_hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    "num":4,
    question_en: "Which organ helps in breathing?",
    question_hi: "श्वसन में कौन सा अंग सहायक होता है?",
    options_en: ["Heart", "Liver", "Lungs", "Kidney"],
    options_hi: ["हृदय", "यकृत", "फेफड़े", "गुर्दा"],
    answer_en: "Lungs",
    answer_hi: "फेफड़े",
    attempted: false,
    selected: ""
  },
  {
    "num":5,
    question_en: "Which is the largest lake in India?",
    question_hi: "भारत की सबसे बड़ी झील कौन सी है?",
    options_en: ["Dal Lake", "Chilika Lake", "Wular Lake", "Pulicat Lake"],
    options_hi: ["डल झील", "चिल्का झील", "वुलर झील", "पुलिकट झील"],
    answer_en: "Wular Lake",
    answer_hi: "वुलर झील",
    attempted: false,
    selected: ""
  },
  {
    "num":6,
    question_en: "Which gas is used in balloons?",
    question_hi: "गुब्बारों में किस गैस का प्रयोग किया जाता है?",
    options_en: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },
  {
    "num":7,
    question_en: "Who wrote 'Discovery of India'?",
    question_hi: "'डिस्कवरी ऑफ इंडिया' किसने लिखी?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "B. R. Ambedkar"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "रवींद्रनाथ टैगोर", "बी. आर. अंबेडकर"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    "num":8,
    question_en: "Which planet is nearest to the Sun?",
    question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options_en: ["Venus", "Earth", "Mercury", "Mars"],
    options_hi: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    "num":9,
    question_en: "Which part of the computer stores data permanently?",
    question_hi: "कंप्यूटर का कौन सा भाग स्थायी रूप से डेटा संग्रहीत करता है?",
    options_en: ["RAM", "ROM", "CPU", "Cache"],
    options_hi: ["RAM", "ROM", "CPU", "कैश"],
    answer_en: "ROM",
    answer_hi: "ROM",
    attempted: false,
    selected: ""
  },
  {
    "num":10,
    question_en: "Which Indian freedom fighter is known as Netaji?",
    question_hi: "नेताजी के नाम से कौन से स्वतंत्रता सेनानी प्रसिद्ध हैं?",
    options_en: ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Bal Gangadhar Tilak"],
    options_hi: ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "बाल गंगाधर तिलक"],
    answer_en: "Subhash Chandra Bose",
    answer_hi: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },

  {
    "num":11,
    question_en: "Which vitamin is essential for good eyesight?",
    question_hi: "अच्छी दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin A",
    answer_hi: "विटामिन A",
    attempted: false,
    selected: ""
  },
  {
    "num":12,
    question_en: "Which state is known as the Spice Garden of India?",
    question_hi: "भारत का मसालों का बगीचा किस राज्य को कहा जाता है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    "num":13,
    question_en: "What is the SI unit of electric current?",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Volt", "Ohm", "Ampere", "Watt"],
    options_hi: ["वोल्ट", "ओम", "एम्पियर", "वाट"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
  },
  {
    "num":14,
    question_en: "Which Indian city is known as the Silicon Valley of India?",
    question_hi: "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
    options_en: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
    options_hi: ["हैदराबाद", "पुणे", "बेंगलुरु", "चेन्नई"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    "num":15,
    question_en: "Which gas do plants absorb during photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":16,
    question_en: "Who is known as the Missile Man of India?",
    question_hi: "भारत के मिसाइल मैन के नाम से कौन जाने जाते हैं?",
    options_en: ["A. P. J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C. V. Raman"],
    options_hi: ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी. वी. रमन"],
    answer_en: "A. P. J. Abdul Kalam",
    answer_hi: "ए. पी. जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
  },
  {
    "num":17,
    question_en: "Which is the longest mountain range in the world?",
    question_hi: "विश्व की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
    options_en: ["Himalayas", "Andes", "Alps", "Rockies"],
    options_hi: ["हिमालय", "एंडीज", "आल्प्स", "रॉकीज"],
    answer_en: "Andes",
    answer_hi: "एंडीज",
    attempted: false,
    selected: ""
  },
  {
    "num":18,
    question_en: "What is the full form of ATM?",
    question_hi: "ATM का पूरा नाम क्या है?",
    options_en: ["Any Time Money", "Automated Teller Machine", "Auto Transfer Machine", "Advanced Teller Machine"],
    options_hi: ["एनी टाइम मनी", "ऑटोमेटेड टेलर मशीन", "ऑटो ट्रांसफर मशीन", "एडवांस्ड टेलर मशीन"],
    answer_en: "Automated Teller Machine",
    answer_hi: "ऑटोमेटेड टेलर मशीन",
    attempted: false,
    selected: ""
  },
  {
    "num":19,
    question_en: "Which is the smallest bone in the human body?",
    question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    options_en: ["Stapes", "Femur", "Ulna", "Radius"],
    options_hi: ["स्टेपीज", "फीमर", "अल्ना", "रेडियस"],
    answer_en: "Stapes",
    answer_hi: "स्टेपीज",
    attempted: false,
    selected: ""
  },
  {
    "num":20,
    question_en: "Which Indian river is called the Dakshin Ganga?",
    question_hi: "किस भारतीय नदी को दक्षिण गंगा कहा जाता है?",
    options_en: ["Krishna", "Kaveri", "Godavari", "Narmada"],
    options_hi: ["कृष्णा", "कावेरी", "गोदावरी", "नर्मदा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },

  {
    "num":21,
    question_en: "Which metal is used to coat food cans?",
    question_hi: "खाने के डिब्बों पर किस धातु की परत चढ़ाई जाती है?",
    options_en: ["Iron", "Tin", "Zinc", "Copper"],
    options_hi: ["लोहा", "टिन", "जस्ता", "तांबा"],
    answer_en: "Tin",
    answer_hi: "टिन",
    attempted: false,
    selected: ""
  },
  {
    "num":22,
    question_en: "Which Indian state has the highest literacy rate?",
    question_hi: "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    options_en: ["Kerala", "Tamil Nadu", "Maharashtra", "Goa"],
    options_hi: ["केरल", "तमिलनाडु", "महाराष्ट्र", "गोवा"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    "num":23,
    question_en: "Which planet has rings around it?",
    question_hi: "किस ग्रह के चारों ओर वलय (छल्ले) होते हैं?",
    options_en: ["Mars", "Earth", "Saturn", "Venus"],
    options_hi: ["मंगल", "पृथ्वी", "शनि", "शुक्र"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    "num":24,
    question_en: "Which Indian city is famous for diamond cutting?",
    question_hi: "हीरा कटाई के लिए कौन सा भारतीय शहर प्रसिद्ध है?",
    options_en: ["Mumbai", "Jaipur", "Surat", "Kolkata"],
    options_hi: ["मुंबई", "जयपुर", "सूरत", "कोलकाता"],
    answer_en: "Surat",
    answer_hi: "सूरत",
    attempted: false,
    selected: ""
  },
  {
    "num":25,
    question_en: "Who invented the electric bulb?",
    question_hi: "बिजली के बल्ब का आविष्कार किसने किया?",
    options_en: ["Nikola Tesla", "Thomas Edison", "Graham Bell", "Faraday"],
    options_hi: ["निकोल टेस्ला", "थॉमस एडिसन", "ग्राहम बेल", "फैराडे"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
  },
  {
    "num":26,
    question_en: "Which soil is best for cotton cultivation?",
    question_hi: "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
    options_en: ["Red soil", "Black soil", "Alluvial soil", "Laterite soil"],
    options_hi: ["लाल मिट्टी", "काली मिट्टी", "जलोढ़ मिट्टी", "लेटराइट मिट्टी"],
    answer_en: "Black soil",
    answer_hi: "काली मिट्टी",
    attempted: false,
    selected: ""
  },
  {
    "num":27,
    question_en: "Which organ is affected by hepatitis?",
    question_hi: "हेपेटाइटिस से कौन सा अंग प्रभावित होता है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    "num":28,
    question_en: "Which Indian state is famous for backwaters?",
    question_hi: "बैकवॉटर के लिए कौन सा भारतीय राज्य प्रसिद्ध है?",
    options_en: ["Kerala", "Goa", "Odisha", "West Bengal"],
    options_hi: ["केरल", "गोवा", "ओडिशा", "पश्चिम बंगाल"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    "num":29,
    question_en: "What is the boiling point of water?",
    question_hi: "पानी का क्वथनांक कितना होता है?",
    options_en: ["50°C", "90°C", "100°C", "120°C"],
    options_hi: ["50°C", "90°C", "100°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    "num":30,
    question_en: "Which Indian festival is known as the Festival of Colors?",
    question_hi: "रंगों का त्योहार किसे कहा जाता है?",
    options_en: ["Diwali", "Holi", "Eid", "Navratri"],
    options_hi: ["दीवाली", "होली", "ईद", "नवरात्रि"],
    answer_en: "Holi",
    answer_hi: "होली",
    attempted: false,
    selected: ""
  },

  {
    "num":31,
    question_en: "Which is the largest bone in the human body?",
    question_hi: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    options_en: ["Femur", "Tibia", "Humerus", "Skull"],
    options_hi: ["फीमर", "टिबिया", "ह्यूमरस", "खोपड़ी"],
    answer_en: "Femur",
    answer_hi: "फीमर",
    attempted: false,
    selected: ""
  },
  {
    "num":32,
    question_en: "Which Indian port is the largest?",
    question_hi: "भारत का सबसे बड़ा बंदरगाह कौन सा है?",
    options_en: ["Mumbai Port", "Chennai Port", "Kolkata Port", "Kandla Port"],
    options_hi: ["मुंबई बंदरगाह", "चेन्नई बंदरगाह", "कोलकाता बंदरगाह", "कांडला बंदरगाह"],
    answer_en: "Mumbai Port",
    answer_hi: "मुंबई बंदरगाह",
    attempted: false,
    selected: ""
  },
  {
    "num":33,
    question_en: "Which metal is known as quicksilver?",
    question_hi: "क्विकसिल्वर किस धातु को कहा जाता है?",
    options_en: ["Silver", "Mercury", "Tin", "Lead"],
    options_hi: ["चांदी", "पारा", "टिन", "सीसा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    "num":34,
    question_en: "Which country is the largest producer of tea?",
    question_hi: "चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
    options_en: ["India", "China", "Sri Lanka", "Kenya"],
    options_hi: ["भारत", "चीन", "श्रीलंका", "केन्या"],
    answer_en: "China",
    answer_hi: "चीन",
    attempted: false,
    selected: ""
  },
  {
    "num":35,
    question_en: "Which Indian freedom movement started in 1942?",
    question_hi: "1942 में कौन सा भारतीय स्वतंत्रता आंदोलन शुरू हुआ?",
    options_en: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"],
    options_hi: ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "खिलाफत आंदोलन"],
    answer_en: "Quit India Movement",
    answer_hi: "भारत छोड़ो आंदोलन",
    attempted: false,
    selected: ""
  },
  {
    "num":36,
    question_en: "Which gas is filled in electric bulbs?",
    question_hi: "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
    options_en: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
  },
  {
    "num":37,
    question_en: "Which Indian state produces maximum rice?",
    question_hi: "भारत में सर्वाधिक चावल उत्पादन किस राज्य में होता है?",
    options_en: ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
    options_hi: ["पंजाब", "पश्चिम बंगाल", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    "num":38,
    question_en: "Which instrument is used to measure wind speed?",
    question_hi: "पवन की गति मापने के लिए किस यंत्र का प्रयोग होता है?",
    options_en: ["Barometer", "Hygrometer", "Anemometer", "Altimeter"],
    options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर", "अल्टीमीटर"],
    answer_en: "Anemometer",
    answer_hi: "एनीमोमीटर",
    attempted: false,
    selected: ""
  },
  {
    "num":39,
    question_en: "Which Indian city is known as the City of Joy?",
    question_hi: "सिटी ऑफ जॉय किस भारतीय शहर को कहा जाता है?",
    options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    "num":40,
    question_en: "Which vitamin is also known as ascorbic acid?",
    question_hi: "एस्कॉर्बिक एसिड किस विटामिन को कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },

  {
    "num":41,
    question_en: "Which Indian state is known as the Land of Rising Sun?",
    question_hi: "उगते सूर्य की भूमि किस भारतीय राज्य को कहा जाता है?",
    options_en: ["Assam", "Arunachal Pradesh", "Nagaland", "Manipur"],
    options_hi: ["असम", "अरुणाचल प्रदेश", "नागालैंड", "मणिपुर"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":42,
    question_en: "Which metal is used in galvanization?",
    question_hi: "गैल्वनाइजेशन में किस धातु का प्रयोग होता है?",
    options_en: ["Copper", "Aluminium", "Zinc", "Iron"],
    options_hi: ["तांबा", "एल्युमिनियम", "जस्ता", "लोहा"],
    answer_en: "Zinc",
    answer_hi: "जस्ता",
    attempted: false,
    selected: ""
  },
  {
    "num":43,
    question_en: "Who founded the Maurya Empire?",
    question_hi: "मौर्य साम्राज्य की स्थापना किसने की?",
    options_en: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Bimbisara"],
    options_hi: ["अशोक", "बिंदुसार", "चंद्रगुप्त मौर्य", "बिंबिसार"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    attempted: false,
    selected: ""
  },
  {
    "num":44,
    question_en: "Which Indian river flows through Delhi?",
    question_hi: "दिल्ली से होकर कौन सी नदी बहती है?",
    options_en: ["Ganga", "Yamuna", "Sutlej", "Ghaghara"],
    options_hi: ["गंगा", "यमुना", "सतलुज", "घाघरा"],
    answer_en: "Yamuna",
    answer_hi: "यमुना",
    attempted: false,
    selected: ""
  },
  {
    "num":45,
    question_en: "Which gas is known as laughing gas?",
    question_hi: "लाफिंग गैस किसे कहा जाता है?",
    options_en: ["Nitrogen", "Nitrous Oxide", "Carbon Dioxide", "Oxygen"],
    options_hi: ["नाइट्रोजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन"],
    answer_en: "Nitrous Oxide",
    answer_hi: "नाइट्रस ऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":46,
    question_en: "Which Indian state has the largest area?",
    question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
    options_hi: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },
  {
    "num":47,
    question_en: "Which organ filters waste from blood?",
    question_hi: "रक्त से अपशिष्ट छानने का कार्य कौन सा अंग करता है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    "num":48,
    question_en: "Which Indian scientist won the Nobel Prize in Physics?",
    question_hi: "भौतिकी में नोबेल पुरस्कार पाने वाले भारतीय वैज्ञानिक कौन थे?",
    options_en: ["C. V. Raman", "A. P. J. Abdul Kalam", "Homi Bhabha", "S. N. Bose"],
    options_hi: ["सी. वी. रमन", "ए. पी. जे. अब्दुल कलाम", "होमी भाभा", "एस. एन. बोस"],
    answer_en: "C. V. Raman",
    answer_hi: "सी. वी. रमन",
    attempted: false,
    selected: ""
  },
  {
    "num":49,
    question_en: "Which Indian city is famous for leather industry?",
    question_hi: "चमड़ा उद्योग के लिए कौन सा भारतीय शहर प्रसिद्ध है?",
    options_en: ["Kanpur", "Agra", "Chennai", "All of these"],
    options_hi: ["कानपुर", "आगरा", "चेन्नई", "ये सभी"],
    answer_en: "All of these",
    answer_hi: "ये सभी",
    attempted: false,
    selected: ""
  },
  {
    "num":50,
    question_en: "Which day is celebrated as Republic Day in India?",
    question_hi: "भारत में गणतंत्र दिवस कब मनाया जाता है?",
    options_en: ["15 August", "26 January", "2 October", "14 April"],
    options_hi: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 अप्रैल"],
    answer_en: "26 January",
    answer_hi: "26 जनवरी",
    attempted: false,
    selected: ""
  }
];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};