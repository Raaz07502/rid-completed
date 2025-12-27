const questions = [
  {
    "num": 1,
    "question_en": "Which Indian state is known as the Land of Red Soil?",
    "question_hi": "'लाल मिट्टी की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Tamil Nadu", "Odisha", "Andhra Pradesh", "Karnataka"],
    "options_hi": ["तमिलनाडु", "ओडिशा", "आंध्र प्रदेश", "कर्नाटक"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which instrument is used to measure earthquakes?",
    "question_hi": "भूकंप मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    "options_en": ["Seismograph", "Barometer", "Anemometer", "Thermometer"],
    "options_hi": ["सीस्मोग्राफ", "बैरोमीटर", "एनीमोमीटर", "थर्मामीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सीस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Indian river is called the sorrow of Bihar?",
    "question_hi": "बिहार का शोक किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Son", "Gandak"],
    "options_hi": ["कोसी", "गंगा", "सोन", "गंडक"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which vitamin is necessary for blood clotting?",
    "question_hi": "रक्त का थक्का जमाने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin K", "Vitamin D", "Vitamin C", "Vitamin A"],
    "options_hi": ["विटामिन K", "विटामिन D", "विटामिन C", "विटामिन A"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Indian city is known as the City of Joy?",
    "question_hi": "'सिटी ऑफ जॉय' किस शहर को कहा जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्ब में कौन सी गैस भरी जाती है?",
    "options_en": ["Argon", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["आर्गन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Indian state is the largest producer of wheat?",
    "question_hi": "गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "पंजाब", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Newton", "Joule", "Watt", "Pascal"],
    "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Indian city is called the Silicon Valley of India?",
    "question_hi": "'भारत की सिलिकॉन वैली' किसे कहा जाता है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Noida"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "नोएडा"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which organ produces bile juice?",
    "question_hi": "पित्त रस कौन सा अंग बनाता है?",
    "options_en": ["Liver", "Pancreas", "Stomach", "Gall Bladder"],
    "options_hi": ["यकृत", "अग्न्याशय", "पेट", "पित्ताशय"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Indian state is known as the Land of Coconut?",
    "question_hi": "नारियल की भूमि किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Goa", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "गोवा", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Mercury", "Iron", "Aluminium", "Silver"],
    "options_hi": ["पारा", "लोहा", "एल्युमिनियम", "चांदी"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Indian river is the longest peninsular river?",
    "question_hi": "प्रायद्वीपीय भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which vitamin is essential for eyesight?",
    "question_hi": "आंखों की रोशनी के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Indian city is known as the City of Dreams?",
    "question_hi": "'सपनों का शहर' किसे कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which gas is responsible for rusting?",
    "question_hi": "जंग लगने के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत का सबसे लंबा समुद्री तट किस राज्य के पास है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the SI unit of pressure?",
    "question_hi": "दाब की SI इकाई क्या है?",
    "options_en": ["Pascal", "Newton", "Joule", "Watt"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Indian city is known as the Manchester of India?",
    "question_hi": "'भारत का मैनचेस्टर' किस शहर को कहा जाता है?",
    "options_en": ["Ahmedabad", "Surat", "Kanpur", "Coimbatore"],
    "options_hi": ["अहमदाबाद", "सूरत", "कानपुर", "कोयंबटूर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which part of the plant prepares food?",
    "question_hi": "पौधे का कौन सा भाग भोजन बनाता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Indian state is known for rubber production?",
    "question_hi": "रबर उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Kerala", "Assam", "Tripura", "Tamil Nadu"],
    "options_hi": ["केरल", "असम", "त्रिपुरा", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which metal is used in making aircraft?",
    "question_hi": "विमान बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Aluminium", "Iron", "Copper", "Steel"],
    "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "स्टील"],
    "answer_en": "Aluminium",
    "answer_hi": "एल्युमिनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Indian river is known as Dakshin Ganga?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Tungabhadra"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which vitamin is soluble in water?",
    "question_hi": "कौन सा विटामिन जल में घुलनशील है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन E"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Indian city is known as the City of Palaces?",
    "question_hi": "'महलों का शहर' किसे कहा जाता है?",
    "options_en": ["Mysuru", "Jaipur", "Udaipur", "Jodhpur"],
    "options_hi": ["मैसूर", "जयपुर", "उदयपुर", "जोधपुर"],
    "answer_en": "Mysuru",
    "answer_hi": "मैसूर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Indian state is the largest producer of oilseeds?",
    "question_hi": "तिलहन का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Gujarat", "Maharashtra"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "गुजरात", "महाराष्ट्र"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the chemical symbol of Iron?",
    "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Fe", "Ir", "In", "I"],
    "options_hi": ["Fe", "Ir", "In", "I"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Indian city is known as the City of Lakes?",
    "question_hi": "'झीलों का शहर' किसे कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which organ pumps blood in the human body?",
    "question_hi": "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",
    "options_en": ["Heart", "Liver", "Lungs", "Kidney"],
    "options_hi": ["हृदय", "यकृत", "फेफड़े", "गुर्दा"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Indian state is famous for saffron cultivation?",
    "question_hi": "केसर की खेती के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Jammu and Kashmir", "Himachal Pradesh", "Uttarakhand", "Punjab"],
    "options_hi": ["जम्मू-कश्मीर", "हिमाचल प्रदेश", "उत्तराखंड", "पंजाब"],
    "answer_en": "Jammu and Kashmir",
    "answer_hi": "जम्मू-कश्मीर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which metal is best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    "options_en": ["Silver", "Copper", "Aluminium", "Gold"],
    "options_hi": ["चांदी", "तांबा", "एल्युमिनियम", "सोना"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Indian river flows through Rajasthan?",
    "question_hi": "कौन सी नदी राजस्थान से होकर बहती है?",
    "options_en": ["Luni", "Yamuna", "Ganga", "Son"],
    "options_hi": ["लूनी", "यमुना", "गंगा", "सोन"],
    "answer_en": "Luni",
    "answer_hi": "लूनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which vitamin deficiency causes night blindness?",
    "question_hi": "रातांधता किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Indian city is known as the City of Golden Temple?",
    "question_hi": "स्वर्ण मंदिर का शहर किसे कहा जाता है?",
    "options_en": ["Amritsar", "Ludhiana", "Chandigarh", "Patiala"],
    "options_hi": ["अमृतसर", "लुधियाना", "चंडीगढ़", "पटियाला"],
    "answer_en": "Amritsar",
    "answer_hi": "अमृतसर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which gas is used for artificial ripening of fruits?",
    "question_hi": "फलों को कृत्रिम रूप से पकाने के लिए कौन सी गैस प्रयोग होती है?",
    "options_en": ["Ethylene", "Methane", "Propane", "Butane"],
    "options_hi": ["एथिलीन", "मीथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Indian state is the largest producer of spices?",
    "question_hi": "मसालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the SI unit of work?",
    "question_hi": "कार्य की SI इकाई क्या है?",
    "options_en": ["Joule", "Newton", "Watt", "Pascal"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Indian city is known as the Tea City of India?",
    "question_hi": "'भारत की चाय नगरी' किसे कहा जाता है?",
    "options_en": ["Dibrugarh", "Darjeeling", "Jorhat", "Siliguri"],
    "options_hi": ["डिब्रूगढ़", "दार्जिलिंग", "जोरहाट", "सिलीगुड़ी"],
    "answer_en": "Dibrugarh",
    "answer_hi": "डिब्रूगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which organ controls all activities of the body?",
    "question_hi": "शरीर की सभी गतिविधियों को कौन सा अंग नियंत्रित करता है?",
    "options_en": ["Brain", "Heart", "Liver", "Kidney"],
    "options_hi": ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
    "answer_en": "Brain",
    "answer_hi": "मस्तिष्क",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Indian state is known as the Apple State?",
    "question_hi": "सेब राज्य किसे कहा जाता है?",
    "options_en": ["Himachal Pradesh", "Jammu and Kashmir", "Uttarakhand", "Punjab"],
    "options_hi": ["हिमाचल प्रदेश", "जम्मू-कश्मीर", "उत्तराखंड", "पंजाब"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Mercury", "Alcohol", "Silver", "Tin"],
    "options_hi": ["पारा", "अल्कोहल", "चांदी", "टिन"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Indian river originates from Amarkantak?",
    "question_hi": "कौन सी नदी अमरकंटक से निकलती है?",
    "options_en": ["Narmada", "Son", "Mahanadi", "Tapi"],
    "options_hi": ["नर्मदा", "सोन", "महानदी", "ताप्ती"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which vitamin helps in wound healing?",
    "question_hi": "घाव भरने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन E"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "'पिंक सिटी' किसे कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Bikaner", "Udaipur"],
    "options_hi": ["जयपुर", "जोधपुर", "बीकानेर", "उदयपुर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Acetylene", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["एसिटिलीन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Acetylene",
    "answer_hi": "एसिटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Indian state is the largest producer of coffee?",
    "question_hi": "कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the chemical symbol of Sodium?",
    "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Na", "So", "Sn", "Nd"],
    "options_hi": ["Na", "So", "Sn", "Nd"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Indian city is known as the City of Forts?",
    "question_hi": "'किलों का शहर' किसे कहा जाता है?",
    "options_en": ["Jodhpur", "Jaipur", "Udaipur", "Chittorgarh"],
    "options_hi": ["जोधपुर", "जयपुर", "उदयपुर", "चित्तौड़गढ़"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which organ helps in breathing?",
    "question_hi": "श्वसन में कौन सा अंग सहायता करता है?",
    "options_en": ["Lungs", "Heart", "Kidney", "Liver"],
    "options_hi": ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
    "answer_en": "Lungs",
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
  }
]


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