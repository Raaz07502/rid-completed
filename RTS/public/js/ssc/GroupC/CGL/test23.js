const questions = [
  {
    num:1,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबी तटरेखा किस राज्य की है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Odisha"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "ओडिशा"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    num:2,
    "question_en": "Which vitamin is necessary for healthy eyes?",
    "question_hi": "स्वस्थ आँखों के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    num:3,
    "question_en": "Which Indian city is known as the Silicon Valley of India?",
    "question_hi": "भारत का सिलिकॉन वैली किस शहर को कहा जाता है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    num:4,
    "question_en": "Which gas is released during respiration?",
    "question_hi": "श्वसन के दौरान कौन सी गैस निकलती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:5,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajendra Prasad"],
    "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    num:6,
    "question_en": "Which organ controls all activities of the body?",
    "question_hi": "शरीर की सभी क्रियाओं को कौन नियंत्रित करता है?",
    "options_en": ["Brain", "Heart", "Lungs", "Kidney"],
    "options_hi": ["मस्तिष्क", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Brain",
    "answer_hi": "मस्तिष्क",
    "attempted": false,
    "selected": ""
  },
  {
    num:7,
    "question_en": "Which Indian river is the longest?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
    "options_hi": ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    num:8,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस उपयोग होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:9,
    "question_en": "Which metal is used in electric wires?",
    "question_hi": "बिजली के तारों में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Iron", "Aluminium", "Silver"],
    "options_hi": ["तांबा", "लोहा", "एल्युमिनियम", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    num:10,
    "question_en": "Which Indian freedom fighter is known as Netaji?",
    "question_hi": "नेताजी के नाम से किस स्वतंत्रता सेनानी को जाना जाता है?",
    "options_en": ["Subhash Chandra Bose", "Bhagat Singh", "Sardar Patel", "Tilak"],
    "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "सरदार पटेल", "तिलक"],
    "answer_en": "Subhash Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },

  {
    num:11,
    "question_en": "Which country is known as the Land of Midnight Sun?",
    "question_hi": "मध्यरात्रि सूर्य की भूमि किस देश को कहा जाता है?",
    "options_en": ["Norway", "Japan", "Canada", "Russia"],
    "options_hi": ["नॉर्वे", "जापान", "कनाडा", "रूस"],
    "answer_en": "Norway",
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    num:12,
    "question_en": "Which part of plant prepares food?",
    "question_hi": "पौधे का कौन सा भाग भोजन बनाता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    num:13,
    "question_en": "Which Indian state is famous for tea production?",
    "question_hi": "चाय उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Assam", "Kerala", "Tamil Nadu", "Karnataka"],
    "options_hi": ["असम", "केरल", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    num:14,
    "question_en": "Which vitamin helps in wound healing?",
    "question_hi": "घाव भरने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    num:15,
    "question_en": "Which Indian monument is known as the Symbol of Love?",
    "question_hi": "प्रेम का प्रतीक किस भारतीय स्मारक को कहा जाता है?",
    "options_en": ["Taj Mahal", "Qutub Minar", "Red Fort", "Hawa Mahal"],
    "options_hi": ["ताजमहल", "कुतुब मीनार", "लाल किला", "हवा महल"],
    "answer_en": "Taj Mahal",
    "answer_hi": "ताजमहल",
    "attempted": false,
    "selected": ""
  },

  {
    num:16,
    "question_en": "Which gas is essential for breathing?",
    "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    num:17,
    "question_en": "Which Indian state is known as God's Own Country?",
    "question_hi": "'गॉड्स ओन कंट्री' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Goa", "Uttarakhand", "Himachal Pradesh"],
    "options_hi": ["केरल", "गोवा", "उत्तराखंड", "हिमाचल प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:18,
    "question_en": "Which organ helps in pumping blood?",
    "question_hi": "रक्त को पंप करने का कार्य कौन करता है?",
    "options_en": ["Heart", "Lungs", "Kidney", "Brain"],
    "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "मस्तिष्क"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },
  {
    num:19,
    "question_en": "Which Indian river flows through Delhi?",
    "question_hi": "दिल्ली से होकर कौन सी नदी बहती है?",
    "options_en": ["Yamuna", "Ganga", "Sutlej", "Ghaggar"],
    "options_hi": ["यमुना", "गंगा", "सतलुज", "घग्गर"],
    "answer_en": "Yamuna",
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
    num:20,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Mercury", "Iron", "Copper", "Aluminium"],
    "options_hi": ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },

  {
    num:21,
    "question_en": "Which Indian state produces maximum rice?",
    "question_hi": "भारत में सबसे अधिक चावल उत्पादन कौन सा राज्य करता है?",
    "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Odisha"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "ओडिशा"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    num:22,
    "question_en": "Which vitamin is produced by sunlight?",
    "question_hi": "सूर्य प्रकाश से कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    num:23,
    "question_en": "Which Indian city is known as City of Joy?",
    "question_hi": "सिटी ऑफ जॉय किस शहर को कहा जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    num:24,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Acetylene", "Oxygen", "Nitrogen", "Carbon Dioxide"],
    "options_hi": ["एसीटिलीन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_en": "Acetylene",
    "answer_hi": "एसीटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    num:25,
    "question_en": "Who is known as the Iron Man of India?",
    "question_hi": "भारत के लौह पुरुष किसे कहा जाता है?",
    "options_en": ["Sardar Patel", "Bhagat Singh", "Subhash Bose", "Nehru"],
    "options_hi": ["सरदार पटेल", "भगत सिंह", "सुभाष बोस", "नेहरू"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },

  {
    num:26,
    "question_en": "Which organ helps in breathing?",
    "question_hi": "श्वसन में कौन सा अंग सहायक है?",
    "options_en": ["Lungs", "Heart", "Kidney", "Liver"],
    "options_hi": ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
    "answer_en": "Lungs",
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
  },
  {
    num:27,
    "question_en": "Which Indian state is known for rubber production?",
    "question_hi": "रबर उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Kerala", "Assam", "Tamil Nadu", "Karnataka"],
    "options_hi": ["केरल", "असम", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:28,
    "question_en": "Which metal is used to make aircraft?",
    "question_hi": "विमान बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Aluminium", "Iron", "Copper", "Steel"],
    "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "स्टील"],
    "answer_en": "Aluminium",
    "answer_hi": "एल्युमिनियम",
    "attempted": false,
    "selected": ""
  },
  {
    num:29,
    "question_en": "Which Indian freedom fighter is known as Lokmanya?",
    "question_hi": "लोकमान्य के नाम से कौन जाने जाते हैं?",
    "options_en": ["Bal Gangadhar Tilak", "Gandhi", "Nehru", "Patel"],
    "options_hi": ["बाल गंगाधर तिलक", "गांधी", "नेहरू", "पटेल"],
    "answer_en": "Bal Gangadhar Tilak",
    "answer_hi": "बाल गंगाधर तिलक",
    "attempted": false,
    "selected": ""
  },
  {
    num:30,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
    "options_en": ["Sahara", "Gobi", "Thar", "Kalahari"],
    "options_hi": ["सहारा", "गोबी", "थार", "कालाहारी"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },

  {
    num:31,
    "question_en": "Which Indian state is known as the Land of Five Rivers?",
    "question_hi": "पाँच नदियों की भूमि किसे कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Bihar", "UP"],
    "options_hi": ["पंजाब", "हरियाणा", "बिहार", "उत्तर प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    num:32,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "हंसाने वाली गैस कौन सी है?",
    "options_en": ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Methane"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "मीथेन"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:33,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "पिंक सिटी किसे कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    num:34,
    "question_en": "Which vitamin is fat soluble?",
    "question_hi": "कौन सा विटामिन वसा में घुलनशील है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin B", "Vitamin B12"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन B", "विटामिन B12"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    num:35,
    "question_en": "Who wrote the National Song of India?",
    "question_hi": "भारत का राष्ट्रीय गीत किसने लिखा?",
    "options_en": ["Bankim Chandra Chattopadhyay", "Tagore", "Nehru", "Gandhi"],
    "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "टैगोर", "नेहरू", "गांधी"],
    "answer_en": "Bankim Chandra Chattopadhyay",
    "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
    "attempted": false,
    "selected": ""
  },

  {
    num:36,
    "question_en": "Which gas is used in photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण में कौन सी गैस उपयोग होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:37,
    "question_en": "Which Indian state is famous for silk?",
    "question_hi": "रेशम उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Karnataka", "Assam", "Tamil Nadu", "West Bengal"],
    "options_hi": ["कर्नाटक", "असम", "तमिलनाडु", "पश्चिम बंगाल"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    num:38,
    "question_en": "Which instrument measures temperature?",
    "question_hi": "तापमान मापने का यंत्र कौन सा है?",
    "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Thermometer",
    "answer_hi": "थर्मामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:39,
    "question_en": "Which Indian river is called Sorrow of Bihar?",
    "question_hi": "बिहार का शोक किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Son", "Gandak"],
    "options_hi": ["कोसी", "गंगा", "सोन", "गंडक"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    num:40,
    "question_en": "Which Indian city is known as the City of Lakes?",
    "question_hi": "झीलों का शहर किसे कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },

  {
    num:41,
    "question_en": "Which gas is used in artificial ripening of fruits?",
    "question_hi": "फलों को कृत्रिम रूप से पकाने में कौन सी गैस उपयोग होती है?",
    "options_en": ["Ethylene", "Methane", "Oxygen", "Nitrogen"],
    "options_hi": ["एथिलीन", "मीथेन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    num:42,
    "question_en": "Which Indian leader started Swadeshi Movement?",
    "question_hi": "स्वदेशी आंदोलन किसके नेतृत्व में शुरू हुआ?",
    "options_en": ["Bal Gangadhar Tilak", "Gandhi", "Nehru", "Patel"],
    "options_hi": ["बाल गंगाधर तिलक", "गांधी", "नेहरू", "पटेल"],
    "answer_en": "Bal Gangadhar Tilak",
    "answer_hi": "बाल गंगाधर तिलक",
    "attempted": false,
    "selected": ""
  },
  {
    num:43,
    "question_en": "Which organ produces bile?",
    "question_hi": "पित्त का उत्पादन कौन करता है?",
    "options_en": ["Liver", "Pancreas", "Gall bladder", "Kidney"],
    "options_hi": ["यकृत", "अग्न्याशय", "पित्ताशय", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    num:44,
    "question_en": "Which Indian state has maximum literacy rate?",
    "question_hi": "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    "options_en": ["Kerala", "Tamil Nadu", "Goa", "Mizoram"],
    "options_hi": ["केरल", "तमिलनाडु", "गोवा", "मिज़ोरम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:45,
    "question_en": "Which Indian freedom fighter is known as Frontier Gandhi?",
    "question_hi": "सीमांत गांधी किसे कहा जाता है?",
    "options_en": ["Khan Abdul Ghaffar Khan", "Gandhi", "Nehru", "Patel"],
    "options_hi": ["खान अब्दुल गफ्फार खान", "गांधी", "नेहरू", "पटेल"],
    "answer_en": "Khan Abdul Ghaffar Khan",
    "answer_hi": "खान अब्दुल गफ्फार खान",
    "attempted": false,
    "selected": ""
  },

  {
    num:46,
    "question_en": "Which gas is essential for photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के लिए आवश्यक गैस कौन सी है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:47,
    "question_en": "Which Indian city is known as City of Dreams?",
    "question_hi": "सपनों का शहर किसे कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    num:48,
    "question_en": "Which instrument measures blood pressure?",
    "question_hi": "रक्तचाप मापने का यंत्र कौन सा है?",
    "options_en": ["Sphygmomanometer", "Thermometer", "Barometer", "Hygrometer"],
    "options_hi": ["स्फिग्मोमैनोमीटर", "थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Sphygmomanometer",
    "answer_hi": "स्फिग्मोमैनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:49,
    "question_en": "Which Indian state is famous for coffee?",
    "question_hi": "कॉफी उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Assam"],
    "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "असम"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    num:50,
    "question_en": "Which Indian freedom fighter wrote 'Hind Swaraj'?",
    "question_hi": "'हिंद स्वराज' किसने लिखा?",
    "options_en": ["Mahatma Gandhi", "Nehru", "Tilak", "Patel"],
    "options_hi": ["महात्मा गांधी", "नेहरू", "तिलक", "पटेल"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
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