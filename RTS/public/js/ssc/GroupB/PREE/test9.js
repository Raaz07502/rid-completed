const questions = [
  {
    "num": 1,
    "question_en": "Who was the first Indian Chief Justice of India?",
    "question_hi": "भारत के पहले भारतीय मुख्य न्यायाधीश कौन थे?",
    "options_en": ["Justice H.J. Kania", "Justice S.R. Das", "Justice M. Patanjali Sastri", "Justice B.K. Mukherjea"],
    "options_hi": ["न्यायमूर्ति एच.जे. कानिया", "न्यायमूर्ति एस.आर. दास", "न्यायमूर्ति एम. पतंजलि शास्त्री", "न्यायमूर्ति बी.के. मुखर्जी"],
    "answer_en": "Justice H.J. Kania",
    "answer_hi": "न्यायमूर्ति एच.जे. कानिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Charter Act abolished slavery in British India?",
    "question_hi": "किस चार्टर अधिनियम ने ब्रिटिश भारत में दास प्रथा को समाप्त किया?",
    "options_en": ["Charter Act 1833", "Charter Act 1813", "Charter Act 1853", "Regulating Act 1773"],
    "options_hi": ["चार्टर अधिनियम 1833", "चार्टर अधिनियम 1813", "चार्टर अधिनियम 1853", "नियामक अधिनियम 1773"],
    "answer_en": "Charter Act 1833",
    "answer_hi": "चार्टर अधिनियम 1833",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who founded the Indian Association in 1876?",
    "question_hi": "1876 में इंडियन एसोसिएशन की स्थापना किसने की?",
    "options_en": ["Surendranath Banerjee", "Dadabhai Naoroji", "A.O. Hume", "Gopal Krishna Gokhale"],
    "options_hi": ["सुरेंद्रनाथ बनर्जी", "दादाभाई नौरोजी", "ए.ओ. ह्यूम", "गोपाल कृष्ण गोखले"],
    "answer_en": "Surendranath Banerjee",
    "answer_hi": "सुरेंद्रनाथ बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Article empowers the President to promulgate ordinances?",
    "question_hi": "राष्ट्रपति को अध्यादेश जारी करने की शक्ति किस अनुच्छेद में दी गई है?",
    "options_en": ["Article 123", "Article 124", "Article 85", "Article 111"],
    "options_hi": ["अनुच्छेद 123", "अनुच्छेद 124", "अनुच्छेद 85", "अनुच्छेद 111"],
    "answer_en": "Article 123",
    "answer_hi": "अनुच्छेद 123",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Who was the founder of the Wahabi Movement in India?",
    "question_hi": "भारत में वहाबी आंदोलन के संस्थापक कौन थे?",
    "options_en": ["Syed Ahmed of Rae Bareli", "Sir Syed Ahmed Khan", "Shah Waliullah", "Maulana Azad"],
    "options_hi": ["सैयद अहमद बरेलवी", "सर सैयद अहमद खान", "शाह वलीउल्लाह", "मौलाना आज़ाद"],
    "answer_en": "Syed Ahmed of Rae Bareli",
    "answer_hi": "सैयद अहमद बरेलवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Five Year Plan emphasized self-reliance?",
    "question_hi": "आत्मनिर्भरता पर बल देने वाली पंचवर्षीय योजना कौन सी थी?",
    "options_en": ["Third Five Year Plan", "Fourth Five Year Plan", "Fifth Five Year Plan", "Second Five Year Plan"],
    "options_hi": ["तृतीय पंचवर्षीय योजना", "चतुर्थ पंचवर्षीय योजना", "पंचम पंचवर्षीय योजना", "द्वितीय पंचवर्षीय योजना"],
    "answer_en": "Third Five Year Plan",
    "answer_hi": "तृतीय पंचवर्षीय योजना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Who was the first Indian woman Chief Minister?",
    "question_hi": "भारत की पहली महिला मुख्यमंत्री कौन थीं?",
    "options_en": ["Sucheta Kriplani", "Indira Gandhi", "Sarojini Naidu", "Mayawati"],
    "options_hi": ["सुचेता कृपलानी", "इंदिरा गांधी", "सरोजिनी नायडू", "मायावती"],
    "answer_en": "Sucheta Kriplani",
    "answer_hi": "सुचेता कृपलानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Mughal ruler wrote his autobiography 'Tuzuk-i-Baburi'?",
    "question_hi": "'तुज़ुक-ए-बाबरी' आत्मकथा किस मुगल शासक ने लिखी?",
    "options_en": ["Babur", "Humayun", "Akbar", "Jahangir"],
    "options_hi": ["बाबर", "हुमायूँ", "अकबर", "जहाँगीर"],
    "answer_en": "Babur",
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Constitutional body audits the accounts of the Union and States?",
    "question_hi": "संघ और राज्यों के खातों का लेखा परीक्षण कौन करता है?",
    "options_en": ["CAG", "Finance Commission", "UPSC", "Election Commission"],
    "options_hi": ["कैग", "वित्त आयोग", "यूपीएससी", "निर्वाचन आयोग"],
    "answer_en": "CAG",
    "answer_hi": "कैग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Who gave the call 'Do or Die' during the freedom struggle?",
    "question_hi": "स्वतंत्रता आंदोलन में 'करो या मरो' का नारा किसने दिया?",
    "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"],
    "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "जवाहरलाल नेहरू"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Article provides for the impeachment of the President?",
    "question_hi": "राष्ट्रपति के महाभियोग का प्रावधान किस अनुच्छेद में है?",
    "options_en": ["Article 61", "Article 56", "Article 72", "Article 75"],
    "options_hi": ["अनुच्छेद 61", "अनुच्छेद 56", "अनुच्छेद 72", "अनुच्छेद 75"],
    "answer_en": "Article 61",
    "answer_hi": "अनुच्छेद 61",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 12,
    "question_en": "Who was the first Indian to win the Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
    "options_hi": ["रवींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 13,
    "question_en": "Which Act introduced separate electorates for Muslims?",
    "question_hi": "मुसलमानों के लिए पृथक निर्वाचन मंडल किस अधिनियम द्वारा लाया गया?",
    "options_en": ["Indian Councils Act 1909", "Government of India Act 1919", "Charter Act 1833", "Regulating Act 1773"],
    "options_hi": ["भारतीय परिषद अधिनियम 1909", "भारत सरकार अधिनियम 1919", "चार्टर अधिनियम 1833", "नियामक अधिनियम 1773"],
    "answer_en": "Indian Councils Act 1909",
    "answer_hi": "भारतीय परिषद अधिनियम 1909",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 14,
    "question_en": "Who was the Chairman of the Drafting Committee of the Constitution?",
    "question_hi": "संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
    "options_en": ["B.R. Ambedkar", "Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
    "options_hi": ["बी.आर. अंबेडकर", "राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सरदार पटेल"],
    "answer_en": "B.R. Ambedkar",
    "answer_hi": "बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 15,
    "question_en": "Which movement started with the Dandi March?",
    "question_hi": "दांडी मार्च किस आंदोलन की शुरुआत थी?",
    "options_en": ["Civil Disobedience Movement", "Non-Cooperation Movement", "Quit India Movement", "Home Rule Movement"],
    "options_hi": ["सविनय अवज्ञा आंदोलन", "असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "होमरूल आंदोलन"],
    "answer_en": "Civil Disobedience Movement",
    "answer_hi": "सविनय अवज्ञा आंदोलन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Five Year Plan was terminated before completion?",
    "question_hi": "कौन सी पंचवर्षीय योजना बीच में ही समाप्त कर दी गई?",
    "options_en": ["Fifth Five Year Plan", "Third Five Year Plan", "Fourth Five Year Plan", "Sixth Five Year Plan"],
    "options_hi": ["पंचम पंचवर्षीय योजना", "तृतीय पंचवर्षीय योजना", "चतुर्थ पंचवर्षीय योजना", "षष्ठ पंचवर्षीय योजना"],
    "answer_en": "Fifth Five Year Plan",
    "answer_hi": "पंचम पंचवर्षीय योजना",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 17,
    "question_en": "Who was the founder of the Arya Samaj?",
    "question_hi": "आर्य समाज की स्थापना किसने की?",
    "options_en": ["Swami Dayanand Saraswati", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar", "Swami Vivekananda"],
    "options_hi": ["स्वामी दयानंद सरस्वती", "राजा राममोहन राय", "ईश्वरचंद्र विद्यासागर", "स्वामी विवेकानंद"],
    "answer_en": "Swami Dayanand Saraswati",
    "answer_hi": "स्वामी दयानंद सरस्वती",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 18,
    "question_en": "Which Article deals with the Election Commission?",
    "question_hi": "निर्वाचन आयोग किस अनुच्छेद में वर्णित है?",
    "options_en": ["Article 324", "Article 280", "Article 148", "Article 110"],
    "options_hi": ["अनुच्छेद 324", "अनुच्छेद 280", "अनुच्छेद 148", "अनुच्छेद 110"],
    "answer_en": "Article 324",
    "answer_hi": "अनुच्छेद 324",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 19,
    "question_en": "Who was known as the 'Grand Old Man of India'?",
    "question_hi": "'भारत का महान वृद्ध पुरुष' किसे कहा जाता है?",
    "options_en": ["Dadabhai Naoroji", "Gopal Krishna Gokhale", "Bal Gangadhar Tilak", "Surendranath Banerjee"],
    "options_hi": ["दादाभाई नौरोजी", "गोपाल कृष्ण गोखले", "बाल गंगाधर तिलक", "सुरेंद्रनाथ बनर्जी"],
    "answer_en": "Dadabhai Naoroji",
    "answer_hi": "दादाभाई नौरोजी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 20,
    "question_en": "Which Mughal ruler constructed Jama Masjid at Delhi?",
    "question_hi": "दिल्ली की जामा मस्जिद किस मुगल शासक ने बनवाई?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Amendment Act curtailed the Right to Property?",
    "question_hi": "संपत्ति के अधिकार को सीमित करने वाला संशोधन कौन सा था?",
    "options_en": ["44th Amendment", "42nd Amendment", "24th Amendment", "52nd Amendment"],
    "options_hi": ["44वां संशोधन", "42वां संशोधन", "24वां संशोधन", "52वां संशोधन"],
    "answer_en": "44th Amendment",
    "answer_hi": "44वां संशोधन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 22,
    "question_en": "Who founded the Forward Bloc?",
    "question_hi": "फॉरवर्ड ब्लॉक की स्थापना किसने की?",
    "options_en": ["Subhas Chandra Bose", "Jawaharlal Nehru", "Jayaprakash Narayan", "Lala Lajpat Rai"],
    "options_hi": ["सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "जयप्रकाश नारायण", "लाला लाजपत राय"],
    "answer_en": "Subhas Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 23,
    "question_en": "Which river is called the 'Sorrow of Bihar'?",
    "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
    "options_en": ["Kosi", "Gandak", "Son", "Bagmati"],
    "options_hi": ["कोसी", "गंडक", "सोन", "बागमती"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 24,
    "question_en": "Which Article deals with the Advocate General of the State?",
    "question_hi": "राज्य के महाधिवक्ता से संबंधित अनुच्छेद कौन सा है?",
    "options_en": ["Article 165", "Article 148", "Article 124", "Article 280"],
    "options_hi": ["अनुच्छेद 165", "अनुच्छेद 148", "अनुच्छेद 124", "अनुच्छेद 280"],
    "answer_en": "Article 165",
    "answer_hi": "अनुच्छेद 165",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 25,
    "question_en": "Who introduced Permanent Settlement in India?",
    "question_hi": "भारत में स्थायी बंदोबस्त किसने लागू किया?",
    "options_en": ["Lord Cornwallis", "Lord Wellesley", "Warren Hastings", "Lord Dalhousie"],
    "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "वॉरेन हेस्टिंग्स", "लॉर्ड डलहौजी"],
    "answer_en": "Lord Cornwallis",
    "answer_hi": "लॉर्ड कॉर्नवालिस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Schedule contains provisions related to Anti-Defection?",
    "question_hi": "दलबदल विरोधी प्रावधान किस अनुसूची में हैं?",
    "options_en": ["Tenth Schedule", "Ninth Schedule", "Seventh Schedule", "Sixth Schedule"],
    "options_hi": ["दसवीं अनुसूची", "नौवीं अनुसूची", "सातवीं अनुसूची", "छठी अनुसूची"],
    "answer_en": "Tenth Schedule",
    "answer_hi": "दसवीं अनुसूची",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 27,
    "question_en": "Who was the first Indian to become a member of the Viceroy’s Executive Council?",
    "question_hi": "वायसराय की कार्यकारिणी परिषद का सदस्य बनने वाले पहले भारतीय कौन थे?",
    "options_en": ["Satyendra Prasad Sinha", "Dadabhai Naoroji", "Gopal Krishna Gokhale", "Surendranath Banerjee"],
    "options_hi": ["सत्येंद्र प्रसाद सिन्हा", "दादाभाई नौरोजी", "गोपाल कृष्ण गोखले", "सुरेंद्रनाथ बनर्जी"],
    "answer_en": "Satyendra Prasad Sinha",
    "answer_hi": "सत्येंद्र प्रसाद सिन्हा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 28,
    "question_en": "Which Mughal ruler was defeated in the Battle of Plassey?",
    "question_hi": "प्लासी के युद्ध में किस मुगल शासक को पराजय मिली?",
    "options_en": ["Siraj-ud-Daulah", "Shah Alam II", "Mir Qasim", "Aurangzeb"],
    "options_hi": ["सिराजुद्दौला", "शाह आलम द्वितीय", "मीर कासिम", "औरंगजेब"],
    "answer_en": "Siraj-ud-Daulah",
    "answer_hi": "सिराजुद्दौला",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 29,
    "question_en": "Which Amendment made Fundamental Duties a part of the Constitution?",
    "question_hi": "मौलिक कर्तव्यों को संविधान का भाग किस संशोधन ने बनाया?",
    "options_en": ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
    "options_hi": ["42वां संशोधन", "44वां संशोधन", "52वां संशोधन", "61वां संशोधन"],
    "answer_en": "42nd Amendment",
    "answer_hi": "42वां संशोधन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 30,
    "question_en": "Who founded the Brahmo Samaj?",
    "question_hi": "ब्रह्म समाज की स्थापना किसने की?",
    "options_en": ["Raja Ram Mohan Roy", "Debendranath Tagore", "Keshab Chandra Sen", "Ishwar Chandra Vidyasagar"],
    "options_hi": ["राजा राममोहन राय", "देवेंद्रनाथ टैगोर", "केशव चंद्र सेन", "ईश्वरचंद्र विद्यासागर"],
    "answer_en": "Raja Ram Mohan Roy",
    "answer_hi": "राजा राममोहन राय",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Article provides for the creation of new states?",
    "question_hi": "नए राज्यों के निर्माण का प्रावधान किस अनुच्छेद में है?",
    "options_en": ["Article 3", "Article 2", "Article 1", "Article 4"],
    "options_hi": ["अनुच्छेद 3", "अनुच्छेद 2", "अनुच्छेद 1", "अनुच्छेद 4"],
    "answer_en": "Article 3",
    "answer_hi": "अनुच्छेद 3",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 32,
    "question_en": "Who was the leader of the Bardoli Satyagraha?",
    "question_hi": "बारडोली सत्याग्रह के नेता कौन थे?",
    "options_en": ["Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Jawaharlal Nehru", "Rajendra Prasad"],
    "options_hi": ["सरदार वल्लभभाई पटेल", "महात्मा गांधी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
    "answer_en": "Sardar Vallabhbhai Patel",
    "answer_hi": "सरदार वल्लभभाई पटेल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 33,
    "question_en": "Which Five Year Plan is also called the 'Rolling Plan'?",
    "question_hi": "‘रोलिंग प्लान’ किस योजना को कहा जाता है?",
    "options_en": ["Sixth Five Year Plan", "Fifth Five Year Plan", "Fourth Five Year Plan", "Third Five Year Plan"],
    "options_hi": ["षष्ठ पंचवर्षीय योजना", "पंचम पंचवर्षीय योजना", "चतुर्थ पंचवर्षीय योजना", "तृतीय पंचवर्षीय योजना"],
    "answer_en": "Sixth Five Year Plan",
    "answer_hi": "षष्ठ पंचवर्षीय योजना",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 34,
    "question_en": "Who was the first Indian woman to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Mother Teresa", "Indira Gandhi", "Kalpana Chawla", "Sarojini Naidu"],
    "options_hi": ["मदर टेरेसा", "इंदिरा गांधी", "कल्पना चावला", "सरोजिनी नायडू"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 35,
    "question_en": "Which Act is known as the Magna Carta of Indian education?",
    "question_hi": "भारतीय शिक्षा का मैग्ना कार्टा किसे कहा जाता है?",
    "options_en": ["Wood's Despatch", "Charter Act 1813", "Hunter Commission", "Sadler Commission"],
    "options_hi": ["वुड्स डिस्पैच", "चार्टर अधिनियम 1813", "हंटर आयोग", "सैडलर आयोग"],
    "answer_en": "Wood's Despatch",
    "answer_hi": "वुड्स डिस्पैच",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Article deals with the appointment of Governors?",
    "question_hi": "राज्यपाल की नियुक्ति किस अनुच्छेद में वर्णित है?",
    "options_en": ["Article 155", "Article 156", "Article 160", "Article 165"],
    "options_hi": ["अनुच्छेद 155", "अनुच्छेद 156", "अनुच्छेद 160", "अनुच्छेद 165"],
    "answer_en": "Article 155",
    "answer_hi": "अनुच्छेद 155",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 37,
    "question_en": "Who was the founder of the Ghadar Party?",
    "question_hi": "ग़दर पार्टी की स्थापना किसने की?",
    "options_en": ["Lala Hardayal", "Bhagat Singh", "Rash Behari Bose", "Subhas Chandra Bose"],
    "options_hi": ["लाला हरदयाल", "भगत सिंह", "रास बिहारी बोस", "सुभाष चंद्र बोस"],
    "answer_en": "Lala Hardayal",
    "answer_hi": "लाला हरदयाल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 38,
    "question_en": "Which Mughal ruler introduced Zabt system?",
    "question_hi": "जब्त प्रणाली किस मुगल शासक ने लागू की?",
    "options_en": ["Akbar", "Babur", "Humayun", "Aurangzeb"],
    "options_hi": ["अकबर", "बाबर", "हुमायूँ", "औरंगजेब"],
    "answer_en": "Akbar",
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 39,
    "question_en": "Which Amendment reduced the term of Lok Sabha from 6 to 5 years?",
    "question_hi": "लोकसभा की अवधि 6 से घटाकर 5 वर्ष किस संशोधन ने की?",
    "options_en": ["44th Amendment", "42nd Amendment", "61st Amendment", "52nd Amendment"],
    "options_hi": ["44वां संशोधन", "42वां संशोधन", "61वां संशोधन", "52वां संशोधन"],
    "answer_en": "44th Amendment",
    "answer_hi": "44वां संशोधन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 40,
    "question_en": "Who was the first Indian to become Governor of RBI?",
    "question_hi": "RBI के पहले भारतीय गवर्नर कौन थे?",
    "options_en": ["C.D. Deshmukh", "B.R. Ambedkar", "Manmohan Singh", "Raghuram Rajan"],
    "options_hi": ["सी.डी. देशमुख", "बी.आर. अंबेडकर", "मनमोहन सिंह", "रघुराम राजन"],
    "answer_en": "C.D. Deshmukh",
    "answer_hi": "सी.डी. देशमुख",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which movement is associated with Indigo Revolt?",
    "question_hi": "नील विद्रोह किस आंदोलन से संबंधित है?",
    "options_en": ["Peasant Movement", "Tribal Movement", "Worker Movement", "Revolutionary Movement"],
    "options_hi": ["किसान आंदोलन", "जनजातीय आंदोलन", "श्रमिक आंदोलन", "क्रांतिकारी आंदोलन"],
    "answer_en": "Peasant Movement",
    "answer_hi": "किसान आंदोलन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 42,
    "question_en": "Which Article deals with the Comptroller and Auditor General?",
    "question_hi": "नियंत्रक एवं महालेखा परीक्षक किस अनुच्छेद से संबंधित है?",
    "options_en": ["Article 148", "Article 280", "Article 324", "Article 110"],
    "options_hi": ["अनुच्छेद 148", "अनुच्छेद 280", "अनुच्छेद 324", "अनुच्छेद 110"],
    "answer_en": "Article 148",
    "answer_hi": "अनुच्छेद 148",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 43,
    "question_en": "Who was the first Indian woman President of the UN General Assembly?",
    "question_hi": "संयुक्त राष्ट्र महासभा की पहली भारतीय महिला अध्यक्ष कौन थीं?",
    "options_en": ["Vijaya Lakshmi Pandit", "Indira Gandhi", "Sarojini Naidu", "Mother Teresa"],
    "options_hi": ["विजया लक्ष्मी पंडित", "इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा"],
    "answer_en": "Vijaya Lakshmi Pandit",
    "answer_hi": "विजया लक्ष्मी पंडित",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 44,
    "question_en": "Which Act provided for provincial autonomy?",
    "question_hi": "प्रांतीय स्वायत्तता का प्रावधान किस अधिनियम में था?",
    "options_en": ["Government of India Act 1935", "Government of India Act 1919", "Indian Councils Act 1909", "Charter Act 1853"],
    "options_hi": ["भारत सरकार अधिनियम 1935", "भारत सरकार अधिनियम 1919", "भारतीय परिषद अधिनियम 1909", "चार्टर अधिनियम 1853"],
    "answer_en": "Government of India Act 1935",
    "answer_hi": "भारत सरकार अधिनियम 1935",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 45,
    "question_en": "Who was the founder of the Theosophical Society in India?",
    "question_hi": "भारत में थियोसोफिकल सोसाइटी की स्थापना किसने की?",
    "options_en": ["Annie Besant", "Madame Blavatsky", "A.O. Hume", "Gopal Krishna Gokhale"],
    "options_hi": ["एनी बेसेंट", "मैडम ब्लावात्स्की", "ए.ओ. ह्यूम", "गोपाल कृष्ण गोखले"],
    "answer_en": "Madame Blavatsky",
    "answer_hi": "मैडम ब्लावात्स्की",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Mughal ruler was known as 'Zinda Pir'?",
    "question_hi": "'जिंदा पीर' के नाम से कौन मुगल शासक जाना जाता था?",
    "options_en": ["Aurangzeb", "Akbar", "Jahangir", "Shah Jahan"],
    "options_hi": ["औरंगजेब", "अकबर", "जहाँगीर", "शाहजहाँ"],
    "answer_en": "Aurangzeb",
    "answer_hi": "औरंगजेब",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 47,
    "question_en": "Which Amendment added the Ninth Schedule?",
    "question_hi": "नौवीं अनुसूची किस संशोधन द्वारा जोड़ी गई?",
    "options_en": ["1st Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
    "options_hi": ["प्रथम संशोधन", "42वां संशोधन", "44वां संशोधन", "52वां संशोधन"],
    "answer_en": "1st Amendment",
    "answer_hi": "प्रथम संशोधन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 48,
    "question_en": "Who was the leader of the Santhal Rebellion?",
    "question_hi": "संथाल विद्रोह का नेतृत्व किसने किया?",
    "options_en": ["Sidhu and Kanhu", "Birsa Munda", "Alluri Sitarama Raju", "Rani Gaidinliu"],
    "options_hi": ["सिदू और कान्हू", "बिरसा मुंडा", "अल्लूरी सीताराम राजू", "रानी गैडिनल्यू"],
    "answer_en": "Sidhu and Kanhu",
    "answer_hi": "सिदू और कान्हू",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_en": "Which Article deals with the Attorney General of India?",
    "question_hi": "भारत के महान्यायवादी से संबंधित अनुच्छेद कौन सा है?",
    "options_en": ["Article 76", "Article 165", "Article 148", "Article 280"],
    "options_hi": ["अनुच्छेद 76", "अनुच्छेद 165", "अनुच्छेद 148", "अनुच्छेद 280"],
    "answer_en": "Article 76",
    "answer_hi": "अनुच्छेद 76",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 50,
    "question_en": "Who was the first Indian to head the Planning Commission?",
    "question_hi": "योजना आयोग के पहले अध्यक्ष कौन थे?",
    "options_en": ["Jawaharlal Nehru", "P.C. Mahalanobis", "C.D. Deshmukh", "Indira Gandhi"],
    "options_hi": ["जवाहरलाल नेहरू", "पी.सी. महालनोबिस", "सी.डी. देशमुख", "इंदिरा गांधी"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
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