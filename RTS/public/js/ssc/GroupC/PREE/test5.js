const questions = [
  {
    num: 1,
    question_en: "What is the SI unit of electric current?",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the chemical symbol for water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "NaCl", "O2"],
    options_hi: ["H2O", "CO2", "NaCl", "O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Who developed the theory of relativity?",
    question_hi: "सापेक्षता के सिद्धांत को किसने विकसित किया?",
    options_en: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "निकोल Tesla", "गैलीलियो गैलिली"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What gas do plants use for photosynthesis?",
    question_hi: "पौधे प्रकाश संश्लेषण के लिए किस गैस का उपयोग करते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which element has the chemical symbol 'Fe'?",
    question_hi: "'Fe' रासायनिक संकेत किस तत्व का है?",
    options_en: ["Iron", "Fluorine", "Lead", "Gold"],
    options_hi: ["लोहा", "फ्लोरीन", "सीसा", "सोना"],
    answer_en: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
    options_en: ["Gold", "Diamond", "Quartz", "Iron"],
    options_hi: ["सोना", "हीरा", "क्वार्ट्ज", "लोहा"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How many bones are there in an adult human body?",
    question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    options_en: ["206", "210", "180", "230"],
    options_hi: ["206", "210", "180", "230"],
    answer_en: "206",
    answer_hi: "206",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the capital of France?",
    question_hi: "फ्रांस की राजधानी क्या है?",
    options_en: ["Berlin", "Madrid", "Paris", "Rome"],
    options_hi: ["बर्लिन", "मैड्रिड", "पेरिस", "रोम"],
    answer_en: "Paris",
    answer_hi: "पेरिस",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which gas do humans breathe to survive?",
    question_hi: "मनुष्य जीवित रहने के लिए किस गैस को सांस में लेते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the square root of 64?",
    question_hi: "64 का वर्गमूल क्या है?",
    options_en: ["6", "7", "8", "9"],
    options_hi: ["6", "7", "8", "9"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Who wrote 'Hamlet'?",
    question_hi: "'हैमलेट' किसने लिखा?",
    options_en: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Mark Twain"],
    options_hi: ["विलियम वर्ड्सवर्थ", "विलियम शेक्सपियर", "जेन ऑस्टिन", "मार्क ट्वेन"],
    answer_en: "William Shakespeare",
    answer_hi: "विलियम शेक्सपियर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which planet is known for its rings?",
    question_hi: "कौन सा ग्रह अपनी वलयों के लिए प्रसिद्ध है?",
    options_en: ["Mars", "Jupiter", "Saturn", "Neptune"],
    options_hi: ["मंगल", "बृहस्पति", "शनि", "नेपच्यून"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "How many continents are there on Earth?",
    question_hi: "पृथ्वी पर कुल कितने महाद्वीप हैं?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the boiling point of water in Celsius?",
    question_hi: "पानी का क्वथनांक सेल्सियस में कितना होता है?",
    options_en: ["90°C", "100°C", "120°C", "150°C"],
    options_hi: ["90°C", "100°C", "120°C", "150°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the capital of Japan?",
    question_hi: "जापान की राजधानी क्या है?",
    options_en: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
    options_hi: ["बीजिंग", "सियोल", "बैंकॉक", "टोक्यो"],
    answer_en: "Tokyo",
    answer_hi: "टोक्यो",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who painted the Mona Lisa?",
    question_hi: "मोना लिसा की पेंटिंग किसने बनाई?",
    options_en: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    options_hi: ["पाब्लो पिकासो", "विंसेंट वैन गॉग", "लियोनार्डो दा विंची", "माइकल एंजेलो"],
    answer_en: "Leonardo da Vinci",
    answer_hi: "लियोनार्डो दा विंची",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the largest ocean on Earth?",
    question_hi: "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    options_hi: ["अटलांटिक महासागर", "हिन्द महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the smallest prime number?",
    question_hi: "सबसे छोटा अभाज्य संख्या कौन सा है?",
    options_en: ["0", "1", "2", "3"],
    options_hi: ["0", "1", "2", "3"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which country is known as the Land of the Rising Sun?",
    question_hi: "कौन सा देश उगते सूरज की भूमि के नाम से जाना जाता है?",
    options_en: ["China", "Japan", "India", "South Korea"],
    options_hi: ["चीन", "जापान", "भारत", "दक्षिण कोरिया"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the speed of light?",
    question_hi: "प्रकाश की गति क्या है?",
    options_en: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "600,000 km/s"],
    options_hi: ["300,000 किमी/से", "150,000 किमी/से", "500,000 किमी/से", "600,000 किमी/से"],
    answer_en: "300,000 km/s",
    answer_hi: "300,000 किमी/से",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which gas is used to fill balloons?",
    question_hi: "गुब्बारों को भरने के लिए किस गैस का उपयोग किया जाता है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Who is the author of 'Harry Potter'?",
    question_hi: "'हैरी पॉटर' के लेखक कौन हैं?",
    options_en: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
    options_hi: ["जे.आर.आर. टॉल्किन", "जे.के. रोलिंग", "जॉर्ज आर.आर. मार्टिन", "स्टीफन किंग"],
    answer_en: "J.K. Rowling",
    answer_hi: "जे.के. रोलिंग",
    attempted: false,
    selected: ""
  },
  {
    num:25,
    question_en: "Which bird is known for its ability to mimic human speech?",
    question_hi: "कौन सा पक्षी मानव भाषा की नकल करने के लिए जाना जाता है?",
    options_en: ["Eagle", "Parrot", "Owl", "Pigeon"],
    options_hi: ["गरुड़", "तोता", "उल्लू", "कबूतर"],
    answer_en: "Parrot",
    answer_hi: "तोता",
    attempted: false,
    selected: ""
  },
  {
    num:26,
    question_en: "Which element is needed for breathing?",
    question_hi: "श्वसन के लिए किस तत्व की आवश्यकता होती है?",
    options_en: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
    options_hi: ["ऑक्सीजन", "कार्बन", "नाइट्रोजन", "सल्फर"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num:27,
    question_en: "What is the main ingredient in chocolate?",
    question_hi: "चॉकलेट में मुख्य घटक क्या होता है?",
    options_en: ["Sugar", "Milk", "Cocoa", "Flour"],
    options_hi: ["चीनी", "दूध", "कोको", "आटा"],
    answer_en: "Cocoa",
    answer_hi: "कोको",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Seismometer"],
    options_hi: ["वायुदाबमापी", "थर्मामीटर", "आर्द्रतामापी", "भूकंपमापी"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How many colors are there in a rainbow?",
    question_hi: "इंद्रधनुष में कुल कितने रंग होते हैं?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which metal is the best conductor of electricity?",
    question_hi: "कौन सी धातु बिजली की सबसे अच्छी चालक होती है?",
    options_en: ["Iron", "Copper", "Gold", "Silver"],
    options_hi: ["लोहा", "तांबा", "सोना", "चांदी"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
  },
  {
  num:31,
  question_en: "India signed an MoU with which country for renewable energy cooperation in 2025?",
  question_hi: "2025 में भारत ने नवीकरणीय ऊर्जा सहयोग के लिए किस देश के साथ MoU किया?",
  options_en: ["Germany","USA","Japan","Australia"],
  options_hi: ["जर्मनी","अमेरिका","जापान","ऑस्ट्रेलिया"],
  answer_en: "Germany",
  answer_hi: "जर्मनी",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "Which Indian city launched 'Smart Traffic Management' system in 2025?",
  question_hi: "2025 में किस भारतीय शहर ने 'स्मार्ट ट्रैफिक मैनेजमेंट' सिस्टम लॉन्च किया?",
  options_en: ["Delhi","Bengaluru","Mumbai","Hyderabad"],
  options_hi: ["दिल्ली","बेंगलुरु","मुंबई","हैदराबाद"],
  answer_en: "Delhi",
  answer_hi: "दिल्ली",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "India launched which program to promote electric buses in 2025?",
  question_hi: "2025 में भारत ने इलेक्ट्रिक बसों को बढ़ावा देने के लिए कौन-सा प्रोग्राम लॉन्च किया?",
  options_en: ["Green Mobility India","Electric Bus Mission","EV Urban Project","Clean Transport Initiative"],
  options_hi: ["ग्रीन मोबिलिटी इंडिया","इलेक्ट्रिक बस मिशन","ईवी अर्बन प्रोजेक्ट","क्लीन ट्रांसपोर्ट इनिशिएटिव"],
  answer_en: "Electric Bus Mission",
  answer_hi: "इलेक्ट्रिक बस मिशन",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "Which Indian cricketer became brand ambassador for fitness campaign 2025?",
  question_hi: "2025 में फिटनेस अभियान के लिए कौन सा भारतीय क्रिकेटर ब्रांड एम्बेसडर बना?",
  options_en: ["Virat Kohli","Rohit Sharma","Hardik Pandya","Shubman Gill"],
  options_hi: ["विराट कोहली","रोहित शर्मा","हार्दिक पांड्या","शुभमन गिल"],
  answer_en: "Virat Kohli",
  answer_hi: "विराट कोहली",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "Which Indian state implemented 'Digital Literacy for Women' program in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'महिलाओं के लिए डिजिटल साक्षरता' प्रोग्राम लागू किया?",
  options_en: ["Maharashtra","Rajasthan","Uttar Pradesh","Gujarat"],
  options_hi: ["महाराष्ट्र","राजस्थान","उत्तर प्रदेश","गुजरात"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},
{
  num:36,
  question_en: "India launched which 'Smart Village Energy Project' in 2025?",
  question_hi: "2025 में भारत ने कौन-सा 'स्मार्ट विलेज एनर्जी प्रोजेक्ट' लॉन्च किया?",
  options_en: ["Green Village Mission","Smart Rural Energy","Solar Smart Villages","Digital Energy Hub"],
  options_hi: ["ग्रीन विलेज मिशन","स्मार्ट रूरल एनर्जी","सोलर स्मार्ट विलेजेज","डिजिटल एनर्जी हब"],
  answer_en: "Solar Smart Villages",
  answer_hi: "सोलर स्मार्ट विलेजेज",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "Which Indian railway project launched 'Contactless Ticketing' in 2025?",
  question_hi: "2025 में किस भारतीय रेलवे प्रोजेक्ट ने 'कॉन्टैक्टलेस टिकटिंग' शुरू किया?",
  options_en: ["Delhi Metro","Mumbai Suburban Railway","Indian Railways National","Chennai Metro"],
  options_hi: ["दिल्ली मेट्रो","मुंबई सबअर्बन रेलवे","इंडियन रेलवे नेशनल","चेन्नई मेट्रो"],
  answer_en: "Indian Railways National",
  answer_hi: "इंडियन रेलवे नेशनल",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "India hosted which global health summit in 2025?",
  question_hi: "2025 में भारत ने कौन सा वैश्विक स्वास्थ्य सम्मेलन आयोजित किया?",
  options_en: ["Global Health Summit","World Health Meet","India Health Forum","UN Health Conference"],
  options_hi: ["ग्लोबल हेल्थ समिट","वर्ल्ड हेल्थ मीट","इंडिया हेल्थ फोरम","यूएन हेल्थ कॉन्फ्रेंस"],
  answer_en: "Global Health Summit",
  answer_hi: "ग्लोबल हेल्थ समिट",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "Which Indian city launched 'Smart Water Management' system in 2025?",
  question_hi: "2025 में किस भारतीय शहर ने 'स्मार्ट वाटर मैनेजमेंट' सिस्टम लॉन्च किया?",
  options_en: ["Pune","Hyderabad","Delhi","Bengaluru"],
  options_hi: ["पुणे","हैदराबाद","दिल्ली","बेंगलुरु"],
  answer_en: "Hyderabad",
  answer_hi: "हैदराबाद",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "India signed a defence manufacturing agreement with which country in 2025?",
  question_hi: "2025 में भारत ने किस देश के साथ रक्षा निर्माण समझौता किया?",
  options_en: ["USA","France","Israel","Russia"],
  options_hi: ["अमेरिका","फ्रांस","इज़राइल","रूस"],
  answer_en: "France",
  answer_hi: "फ्रांस",
  attempted: false,
  selected: ""
},
{
  num:41,
  question_en: "Which Indian state launched 'Digital Agriculture Hub' in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'डिजिटल एग्रीकल्चर हब' लॉन्च किया?",
  options_en: ["Maharashtra","Andhra Pradesh","Punjab","Karnataka"],
  options_hi: ["महाराष्ट्र","आंध्र प्रदेश","पंजाब","कर्नाटक"],
  answer_en: "Andhra Pradesh",
  answer_hi: "आंध्र प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "India hosted which international startup summit in 2025?",
  question_hi: "2025 में भारत ने कौन सा अंतरराष्ट्रीय स्टार्टअप सम्मेलन आयोजित किया?",
  options_en: ["Global Startup Summit","Tech India 2025","Entrepreneur India","Startup World Forum"],
  options_hi: ["ग्लोबल स्टार्टअप समिट","टेक इंडिया 2025","एंटरप्रेन्योर इंडिया","स्टार्टअप वर्ल्ड फोरम"],
  answer_en: "Global Startup Summit",
  answer_hi: "ग्लोबल स्टार्टअप समिट",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "Which Indian state launched 'Green Transport Mission' in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'ग्रीन ट्रांसपोर्ट मिशन' लॉन्च किया?",
  options_en: ["Maharashtra","Tamil Nadu","Karnataka","Gujarat"],
  options_hi: ["महाराष्ट्र","तमिलनाडु","कर्नाटक","गुजरात"],
  answer_en: "Tamil Nadu",
  answer_hi: "तमिलनाडु",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "India launched which national AI platform for education in 2025?",
  question_hi: "2025 में भारत ने शिक्षा के लिए कौन सा राष्ट्रीय एआई प्लेटफ़ॉर्म लॉन्च किया?",
  options_en: ["EduAI","Digital Classroom AI","AI Shiksha","Smart Learning Hub"],
  options_hi: ["एडुआआई","डिजिटल क्लासरूम एआई","एआई शिक्षा","स्मार्ट लर्निंग हब"],
  answer_en: "EduAI",
  answer_hi: "एडुआआई",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "Which Indian city launched 'Smart Waste Recycling' project in 2025?",
  question_hi: "2025 में किस भारतीय शहर ने 'स्मार्ट वेस्ट रीसाइक्लिंग' प्रोजेक्ट लॉन्च किया?",
  options_en: ["Mumbai","Delhi","Bengaluru","Pune"],
  options_hi: ["मुंबई","दिल्ली","बेंगलुरु","पुणे"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num:46,
  question_en: "India signed an MoU with which country for water conservation in 2025?",
  question_hi: "2025 में भारत ने जल संरक्षण के लिए किस देश के साथ MoU किया?",
  options_en: ["Israel","USA","Australia","Germany"],
  options_hi: ["इज़राइल","अमेरिका","ऑस्ट्रेलिया","जर्मनी"],
  answer_en: "Israel",
  answer_hi: "इज़राइल",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "Which Indian state launched 'Digital Health Village' program in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'डिजिटल हेल्थ विलेज' प्रोग्राम लॉन्च किया?",
  options_en: ["Kerala","Madhya Pradesh","Rajasthan","Uttar Pradesh"],
  options_hi: ["केरल","मध्य प्रदेश","राजस्थान","उत्तर प्रदेश"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "India hosted which global environment summit in 2025?",
  question_hi: "2025 में भारत ने कौन सा वैश्विक पर्यावरण सम्मेलन आयोजित किया?",
  options_en: ["World Environment Summit","Global Green Summit","Eco India 2025","UN Environment Meet"],
  options_hi: ["वर्ल्ड एनवायरनमेंट समिट","ग्लोबल ग्रीन समिट","ईको इंडिया 2025","यूएन एनवायरनमेंट मीट"],
  answer_en: "Global Green Summit",
  answer_hi: "ग्लोबल ग्रीन समिट",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "Which Indian railway introduced 'Solar-Powered Trains' in 2025?",
  question_hi: "2025 में किस भारतीय रेलवे ने 'सोलर-पावर्ड ट्रेन' लॉन्च की?",
  options_en: ["Indian Railways National","Mumbai Suburban Railway","Delhi Metro","Chennai Metro"],
  options_hi: ["इंडियन रेलवे नेशनल","मुंबई सबअर्बन रेलवे","दिल्ली मेट्रो","चेन्नई मेट्रो"],
  answer_en: "Indian Railways National",
  answer_hi: "इंडियन रेलवे नेशनल",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "Which Indian city launched 'Smart Education Hub' in 2025?",
  question_hi: "2025 में किस भारतीय शहर ने 'स्मार्ट एजुकेशन हब' लॉन्च किया?",
  options_en: ["Bengaluru","Hyderabad","Delhi","Mumbai"],
  options_hi: ["बेंगलुरु","हैदराबाद","दिल्ली","मुंबई"],
  answer_en: "Hyderabad",
  answer_hi: "हैदराबाद",
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