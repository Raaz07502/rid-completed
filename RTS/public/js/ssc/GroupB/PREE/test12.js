const questions = [
  {
    "num": 1,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which state in India has the longest coastline?",
    "question_hi": "भारत के किस राज्य में सबसे लंबी तटरेखा है?",
    "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The 'Sunderbans' delta is formed by which rivers?",
    "question_hi": "'सुंदरबन' डेल्टा किन नदियों द्वारा निर्मित है?",
    "options_en": ["Ganga and Brahmaputra", "Godavari and Krishna", "Mahanadi and Brahmani", "Narmada and Tapi"],
    "options_hi": ["गंगा और ब्रह्मपुत्र", "गोदावरी और कृष्णा", "महानदी और ब्राह्मणी", "नर्मदा और तापी"],
    "answer_en": "Ganga and Brahmaputra",
    "answer_hi": "गंगा और ब्रह्मपुत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which is the largest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "The 'Thar Desert' is primarily located in which state?",
    "question_hi": "'थार रेगिस्तान' मुख्य रूप से किस राज्य में स्थित है?",
    "options_en": ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
    "options_hi": ["राजस्थान", "गुजरात", "पंजाब", "हरियाणा"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the highest mountain peak in India?",
    "question_hi": "भारत की सबसे ऊँची पर्वत चोटी कौन सी है?",
    "options_en": ["Kanchenjunga", "Nanda Devi", "Kamet", "Mount Everest"],
    "options_hi": ["कंचनजंगा", "नंदा देवी", "कामेत", "माउंट एवरेस्ट"],
    "answer_en": "Kanchenjunga",
    "answer_hi": "कंचनजंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The 'Silent Valley National Park' is located in which state?",
    "question_hi": "'साइलेंट वैली नेशनल पार्क' किस राज्य में स्थित है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which river is known as the 'Sorrow of Bihar'?",
    "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
    "options_en": ["Kosi", "Gandak", "Son", "Ghaghara"],
    "options_hi": ["कोसी", "गंडक", "सोन", "घाघरा"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "The 'Kakrapar Atomic Power Station' is located in which state?",
    "question_hi": "'काकरापार परमाणु ऊर्जा स्टेशन' किस राज्य में स्थित है?",
    "options_en": ["Gujarat", "Maharashtra", "Tamil Nadu", "Rajasthan"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "तमिलनाडु", "राजस्थान"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is the largest freshwater lake in India?",
    "question_hi": "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    "options_en": ["Wular Lake", "Chilika Lake", "Dal Lake", "Loktak Lake"],
    "options_hi": ["वुलर झील", "चिल्का झील", "डल झील", "लोकटक झील"],
    "answer_en": "Wular Lake",
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The 'Deccan Plateau' is located between which mountain ranges?",
    "question_hi": "'दक्कन पठार' किन पर्वत श्रृंखलाओं के बीच स्थित है?",
    "options_en": ["Western Ghats and Eastern Ghats", "Himalayas and Vindhyas", "Aravalli and Satpura", "Nilgiri and Cardamom"],
    "options_hi": ["पश्चिमी घाट और पूर्वी घाट", "हिमालय और विंध्य", "अरावली और सतपुड़ा", "नीलगिरी और इलायची"],
    "answer_en": "Western Ghats and Eastern Ghats",
    "answer_hi": "पश्चिमी घाट और पूर्वी घाट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the smallest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    "options_en": ["Goa", "Sikkim", "Tripura", "Nagaland"],
    "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The 'Chipko Movement' originated in which state?",
    "question_hi": "'चिपको आंदोलन' की उत्पत्ति किस राज्य में हुई?",
    "options_en": ["Uttarakhand", "Himachal Pradesh", "Uttar Pradesh", "Bihar"],
    "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "उत्तर प्रदेश", "बिहार"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which river forms the 'Dhuandhar Falls' near Jabalpur?",
    "question_hi": "कौन सी नदी जबलपुर के निकट 'धुआँधार जलप्रपात' बनाती है?",
    "options_en": ["Narmada", "Tapi", "Godavari", "Krishna"],
    "options_hi": ["नर्मदा", "तापी", "गोदावरी", "कृष्णा"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The 'Kaziranga National Park' is famous for which animal?",
    "question_hi": "'काजीरंगा राष्ट्रीय उद्यान' किस जानवर के लिए प्रसिद्ध है?",
    "options_en": ["One-horned Rhinoceros", "Tiger", "Elephant", "Wild Buffalo"],
    "options_hi": ["एक सींग वाला गैंडा", "बाघ", "हाथी", "जंगली भैंसा"],
    "answer_en": "One-horned Rhinoceros",
    "answer_hi": "एक सींग वाला गैंडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the southernmost point of mainland India?",
    "question_hi": "भारत की मुख्य भूमि का सबसे दक्षिणी बिंदु कौन सा है?",
    "options_en": ["Kanyakumari", "Indira Point", "Rameswaram", "Kochi"],
    "options_hi": ["कन्याकुमारी", "इंदिरा प्वाइंट", "रामेश्वरम", "कोच्चि"],
    "answer_en": "Kanyakumari",
    "answer_hi": "कन्याकुमारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The 'Tropic of Cancer' passes through how many Indian states?",
    "question_hi": "'कर्क रेखा' कितने भारतीय राज्यों से होकर गुजरती है?",
    "options_en": ["8", "7", "6", "5"],
    "options_hi": ["8", "7", "6", "5"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the largest saltwater lake in India?",
    "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?",
    "options_en": ["Chilika Lake", "Sambhar Lake", "Pulicat Lake", "Vembanad Lake"],
    "options_hi": ["चिल्का झील", "सांभर झील", "पुलिकट झील", "वेम्बनाड झील"],
    "answer_en": "Chilika Lake",
    "answer_hi": "चिल्का झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The 'Bandipur National Park' is located in which state?",
    "question_hi": "'बांदीपुर राष्ट्रीय उद्यान' किस राज्य में स्थित है?",
    "options_en": ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
    "options_hi": ["कर्नाटक", "तमिलनाडु", "केरल", "आंध्र प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which river is known as the 'Dakshin Ganga'?",
    "question_hi": "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The 'Great Indian Desert' is also known as:",
    "question_hi": "'महान भारतीय मरुस्थल' को किस नाम से भी जाना जाता है?",
    "options_en": ["Thar Desert", "Rann of Kutch", "Ladakh Desert", "Deccan Desert"],
    "options_hi": ["थार रेगिस्तान", "कच्छ का रन", "लद्दाख मरुस्थल", "दक्कन मरुस्थल"],
    "answer_en": "Thar Desert",
    "answer_hi": "थार रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which is the largest river island in India?",
    "question_hi": "भारत का सबसे बड़ा नदी द्वीप कौन सा है?",
    "options_en": ["Majuli", "Srirangam", "Umananda", "Bhavani Island"],
    "options_hi": ["माजुली", "श्रीरंगम", "उमानंदा", "भवानी द्वीप"],
    "answer_en": "Majuli",
    "answer_hi": "माजुली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The 'Dudhwa National Park' is located in which state?",
    "question_hi": "'दुधवा राष्ट्रीय उद्यान' किस राज्य में स्थित है?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Uttarakhand", "Bihar"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "उत्तराखंड", "बिहार"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is the largest waterfall in India?",
    "question_hi": "भारत का सबसे बड़ा जलप्रपात कौन सा है?",
    "options_en": ["Jog Falls", "Dudhsagar Falls", "Athirappilly Falls", "Shivanasamudra Falls"],
    "options_hi": ["जोग जलप्रपात", "दूधसागर जलप्रपात", "अथिराप्पिली जलप्रपात", "शिवसमुद्र जलप्रपात"],
    "answer_en": "Jog Falls",
    "answer_hi": "जोग जलप्रपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The 'Sariska Tiger Reserve' is located in which state?",
    "question_hi": "'सरिस्का टाइगर रिजर्व' किस राज्य में स्थित है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Uttarakhand", "Maharashtra"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "उत्तराखंड", "महाराष्ट्र"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the largest delta in the world?",
    "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
    "options_en": ["Sunderbans Delta", "Nile Delta", "Mississippi Delta", "Ganges-Brahmaputra Delta"],
    "options_hi": ["सुंदरबन डेल्टा", "नील डेल्टा", "मिसिसिपी डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The 'Nanda Devi Peak' is located in which state?",
    "question_hi": "'नंदा देवी चोटी' किस राज्य में स्थित है?",
    "options_en": ["Uttarakhand", "Himachal Pradesh", "Sikkim", "Jammu and Kashmir"],
    "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "सिक्किम", "जम्मू और कश्मीर"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the largest man-made lake in India?",
    "question_hi": "भारत की सबसे बड़ी मानव निर्मित झील कौन सी है?",
    "options_en": ["Gobind Sagar", "Rana Pratap Sagar", "Hirakud Reservoir", "Nagarjuna Sagar"],
    "options_hi": ["गोबिंद सागर", "राणा प्रताप सागर", "हीराकुंड जलाशय", "नागार्जुन सागर"],
    "answer_en": "Gobind Sagar",
    "answer_hi": "गोबिंद सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The 'Valley of Flowers' is located in which state?",
    "question_hi": "'फूलों की घाटी' किस राज्य में स्थित है?",
    "options_en": ["Uttarakhand", "Himachal Pradesh", "Jammu and Kashmir", "Sikkim"],
    "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "जम्मू और कश्मीर", "सिक्किम"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which river originates from the Gangotri glacier?",
    "question_hi": "कौन सी नदी गंगोत्री ग्लेशियर से निकलती है?",
    "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Indus"],
    "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "सिंधु"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The 'Simlipal National Park' is located in which state?",
    "question_hi": "'सिमलीपाल राष्ट्रीय उद्यान' किस राज्य में स्थित है?",
    "options_en": ["Odisha", "Jharkhand", "West Bengal", "Chhattisgarh"],
    "options_hi": ["ओडिशा", "झारखंड", "पश्चिम बंगाल", "छत्तीसगढ़"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the largest mangrove forest in the world?",
    "question_hi": "दुनिया का सबसे बड़ा मैंग्रोव वन कौन सा है?",
    "options_en": ["Sunderbans", "Amazon Mangroves", "Bhitarkanika", "Pichavaram"],
    "options_hi": ["सुंदरबन", "अमेज़न मैंग्रोव", "भितरकनिका", "पिचावरम"],
    "answer_en": "Sunderbans",
    "answer_hi": "सुंदरबन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The 'Kolleru Lake' is located between which two rivers?",
    "question_hi": "'कोलेरू झील' किन दो नदियों के बीच स्थित है?",
    "options_en": ["Godavari and Krishna", "Krishna and Kaveri", "Mahanadi and Godavari", "Krishna and Tungabhadra"],
    "options_hi": ["गोदावरी और कृष्णा", "कृष्णा और कावेरी", "महानदी और गोदावरी", "कृष्णा और तुंगभद्रा"],
    "answer_en": "Godavari and Krishna",
    "answer_hi": "गोदावरी और कृष्णा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is the largest desert in Asia?",
    "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Gobi Desert", "Thar Desert", "Arabian Desert", "Karakum Desert"],
    "options_hi": ["गोबी रेगिस्तान", "थार रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान"],
    "answer_en": "Gobi Desert",
    "answer_hi": "गोबी रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The 'Pichavaram Mangrove Forest' is located in which state?",
    "question_hi": "'पिचावरम मैंग्रोव वन' किस राज्य में स्थित है?",
    "options_en": ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Odisha"],
    "options_hi": ["तमिलनाडु", "केरल", "आंध्र प्रदेश", "ओडिशा"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the largest glacier in India?",
    "question_hi": "भारत का सबसे बड़ा ग्लेशियर कौन सा है?",
    "options_en": ["Siachen Glacier", "Gangotri Glacier", "Zemu Glacier", "Bara Shigri Glacier"],
    "options_hi": ["सियाचिन ग्लेशियर", "गंगोत्री ग्लेशियर", "जेमू ग्लेशियर", "बड़ा शिगरी ग्लेशियर"],
    "answer_en": "Siachen Glacier",
    "answer_hi": "सियाचिन ग्लेशियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The 'Loktak Lake' is famous for which unique feature?",
    "question_hi": "'लोकटक झील' किस अनूठी विशेषता के लिए प्रसिद्ध है?",
    "options_en": ["Floating islands (phumdis)", "Salt water lake", "Crater lake", "Glacial lake"],
    "options_hi": ["तैरते द्वीप (फुमडी)", "खारे पानी की झील", "ज्वालामुखी झील", "हिमनदी झील"],
    "answer_en": "Floating islands (phumdis)",
    "answer_hi": "तैरते द्वीप (फुमडी)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which river flows through the 'Grand Canyon' of India?",
    "question_hi": "कौन सी नदी भारत के 'ग्रैंड कैन्यन' से होकर बहती है?",
    "options_en": ["Indravati", "Narmada", "Godavari", "Krishna"],
    "options_hi": ["इंद्रावती", "नर्मदा", "गोदावरी", "कृष्णा"],
    "answer_en": "Indravati",
    "answer_hi": "इंद्रावती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The 'Dal Lake' is located in which city?",
    "question_hi": "'डल झील' किस शहर में स्थित है?",
    "options_en": ["Srinagar", "Jammu", "Shimla", "Manali"],
    "options_hi": ["श्रीनगर", "जम्मू", "शिमला", "मनाली"],
    "answer_en": "Srinagar",
    "answer_hi": "श्रीनगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is the largest natural port in India?",
    "question_hi": "भारत का सबसे बड़ा प्राकृतिक बंदरगाह कौन सा है?",
    "options_en": ["Mumbai", "Chennai", "Visakhapatnam", "Kochi"],
    "options_hi": ["मुंबई", "चेन्नई", "विशाखापत्तनम", "कोच्चि"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The 'Gir National Park' is famous for which animal?",
    "question_hi": "'गिर राष्ट्रीय उद्यान' किस जानवर के लिए प्रसिद्ध है?",
    "options_en": ["Asiatic Lion", "Bengal Tiger", "Indian Elephant", "Indian Leopard"],
    "options_hi": ["एशियाई शेर", "बंगाल टाइगर", "भारतीय हाथी", "भारतीय तेंदुआ"],
    "answer_en": "Asiatic Lion",
    "answer_hi": "एशियाई शेर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the largest coral reef in India?",
    "question_hi": "भारत की सबसे बड़ी प्रवाल भित्ति कौन सी है?",
    "options_en": ["Gulf of Mannar", "Andaman and Nicobar Islands", "Lakshadweep Islands", "Gulf of Kutch"],
    "options_hi": ["मन्नार की खाड़ी", "अंडमान और निकोबार द्वीप समूह", "लक्षद्वीप द्वीप समूह", "कच्छ की खाड़ी"],
    "answer_en": "Gulf of Mannar",
    "answer_hi": "मन्नार की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The 'Keoladeo Ghana National Park' is located in which state?",
    "question_hi": "'केवलादेव घाना राष्ट्रीय उद्यान' किस राज्य में स्थित है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Haryana"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "हरियाणा"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the largest riverine island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा नदी द्वीप कौन सा है?",
    "options_en": ["Majuli", "Marajo", "Bananal", "Ilha Grande"],
    "options_hi": ["माजुली", "मराजो", "बनानल", "इल्हा ग्रांडे"],
    "answer_en": "Majuli",
    "answer_hi": "माजुली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The 'Nokrek National Park' is a UNESCO Biosphere Reserve in which state?",
    "question_hi": "'नोकरेक राष्ट्रीय उद्यान' यूनेस्को बायोस्फीयर रिजर्व किस राज्य में है?",
    "options_en": ["Meghalaya", "Assam", "Nagaland", "Manipur"],
    "options_hi": ["मेघालय", "असम", "नागालैंड", "मणिपुर"],
    "answer_en": "Meghalaya",
    "answer_hi": "मेघालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which river is known as the 'Lifeline of Madhya Pradesh'?",
    "question_hi": "किस नदी को 'मध्य प्रदेश की जीवनरेखा' कहा जाता है?",
    "options_en": ["Narmada", "Tapi", "Chambal", "Betwa"],
    "options_hi": ["नर्मदा", "तापी", "चंबल", "बेतवा"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The 'Rann of Kutch' is famous for which natural phenomenon?",
    "question_hi": "'कच्छ का रन' किस प्राकृतिक घटना के लिए प्रसिद्ध है?",
    "options_en": ["White Salt Desert", "Black Soil", "Red Sand Dunes", "Grasslands"],
    "options_hi": ["सफेद नमक रेगिस्तान", "काली मिट्टी", "लाल रेत के टीले", "घास के मैदान"],
    "answer_en": "White Salt Desert",
    "answer_hi": "सफेद नमक रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is the largest bird sanctuary in India?",
    "question_hi": "भारत का सबसे बड़ा पक्षी अभयारण्य कौन सा है?",
    "options_en": ["Keoladeo National Park", "Chilika Lake", "Sultanpur Bird Sanctuary", "Bharatpur Bird Sanctuary"],
    "options_hi": ["केवलादेव राष्ट्रीय उद्यान", "चिल्का झील", "सुल्तानपुर पक्षी अभयारण्य", "भरतपुर पक्षी अभयारण्य"],
    "answer_en": "Keoladeo National Park",
    "answer_hi": "केवलादेव राष्ट्रीय उद्यान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The 'Satpura Range' is located between which two rivers?",
    "question_hi": "'सतपुड़ा श्रृंखला' किन दो नदियों के बीच स्थित है?",
    "options_en": ["Narmada and Tapi", "Godavari and Krishna", "Ganga and Yamuna", "Brahmaputra and Barak"],
    "options_hi": ["नर्मदा और तापी", "गोदावरी और कृष्णा", "गंगा और यमुना", "ब्रह्मपुत्र और बराक"],
    "answer_en": "Narmada and Tapi",
    "answer_hi": "नर्मदा और तापी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the highest dam in India?",
    "question_hi": "भारत का सबसे ऊँचा बांध कौन सा है?",
    "options_en": ["Tehri Dam", "Bhakra Dam", "Sardar Sarovar Dam", "Hirakud Dam"],
    "options_hi": ["टिहरी बांध", "भाखड़ा बांध", "सरदार सरोवर बांध", "हीराकुंड बांध"],
    "answer_en": "Tehri Dam",
    "answer_hi": "टिहरी बांध",
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