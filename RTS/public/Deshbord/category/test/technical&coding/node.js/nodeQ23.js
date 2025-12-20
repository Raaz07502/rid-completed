const questions=[
  {
    "num": 1,
    "question_en": "Who created Node.js?",
    "question_hi": "Node.js को किसने बनाया था?",
    "options_en": ["Ryan Dahl", "Brendan Eich", "Guido van Rossum", "James Gosling"],
    "options_hi": ["Ryan Dahl", "Brendan Eich", "Guido van Rossum", "James Gosling"],
    "answer_en": "Ryan Dahl",
    "answer_hi": "Ryan Dahl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In which year was Node.js released?",
    "question_hi": "Node.js किस वर्ष रिलीज़ हुआ था?",
    "options_en": ["2009", "2011", "2013", "2015"],
    "options_hi": ["2009", "2011", "2013", "2015"],
    "answer_en": "2009",
    "answer_hi": "2009",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which file is the default entry point of a Node.js app?",
    "question_hi": "Node.js ऐप का डिफ़ॉल्ट एंट्री पॉइंट कौन सी फाइल होती है?",
    "options_en": ["index.js", "app.js", "main.js", "server.js"],
    "options_hi": ["index.js", "app.js", "main.js", "server.js"],
    "answer_en": "index.js",
    "answer_hi": "index.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which object represents the current module?",
    "question_hi": "वर्तमान मॉड्यूल को कौन सा ऑब्जेक्ट दर्शाता है?",
    "options_en": ["module", "exports", "process", "global"],
    "options_hi": ["module", "exports", "process", "global"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Node.js module handles DNS operations?",
    "question_hi": "DNS ऑपरेशन कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["dns", "net", "http", "os"],
    "options_hi": ["dns", "net", "http", "os"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which method converts JSON to object?",
    "question_hi": "JSON को object में बदलने का मेथड कौन सा है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method converts object to JSON?",
    "question_hi": "Object को JSON में बदलने का मेथड कौन सा है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.object()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.object()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Node.js module creates TCP servers?",
    "question_hi": "TCP सर्वर बनाने के लिए कौन सा मॉड्यूल है?",
    "options_en": ["net", "http", "tls", "dns"],
    "options_hi": ["net", "http", "tls", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method closes a server?",
    "question_hi": "सर्वर बंद करने का मेथड कौन सा है?",
    "options_en": ["server.close()", "server.end()", "server.stop()", "server.kill()"],
    "options_hi": ["server.close()", "server.end()", "server.stop()", "server.kill()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Node.js module supports HTTPS?",
    "question_hi": "HTTPS को सपोर्ट करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which property shows Node.js version?",
    "question_hi": "Node.js का वर्ज़न कौन सी property दिखाती है?",
    "options_en": ["process.version", "node.version", "app.version", "env.version"],
    "options_hi": ["process.version", "node.version", "app.version", "env.version"],
    "answer_en": "process.version",
    "answer_hi": "process.version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Node.js module handles UDP communication?",
    "question_hi": "UDP कम्युनिकेशन कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["dgram", "net", "udp", "dns"],
    "options_hi": ["dgram", "net", "udp", "dns"],
    "answer_en": "dgram",
    "answer_hi": "dgram",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method schedules code execution?",
    "question_hi": "कोड को शेड्यूल करने का मेथड कौन सा है?",
    "options_en": ["setTimeout()", "setLoop()", "setDelay()", "setNow()"],
    "options_hi": ["setTimeout()", "setLoop()", "setDelay()", "setNow()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method repeats execution after interval?",
    "question_hi": "नियत समय पर बार-बार चलने वाला मेथड कौन सा है?",
    "options_en": ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    "options_hi": ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method stops an interval?",
    "question_hi": "Interval रोकने का मेथड कौन सा है?",
    "options_en": ["clearInterval()", "stopInterval()", "removeInterval()", "endInterval()"],
    "options_hi": ["clearInterval()", "stopInterval()", "removeInterval()", "endInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Node.js module handles query strings?",
    "question_hi": "Query string को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["querystring", "url", "path", "http"],
    "options_hi": ["querystring", "url", "path", "http"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method resolves a file path?",
    "question_hi": "फाइल पाथ resolve करने का मेथड कौन सा है?",
    "options_en": ["path.resolve()", "path.join()", "path.open()", "path.find()"],
    "options_hi": ["path.resolve()", "path.join()", "path.open()", "path.find()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method joins path segments?",
    "question_hi": "Path segments जोड़ने का मेथड कौन सा है?",
    "options_en": ["path.join()", "path.resolve()", "path.merge()", "path.concat()"],
    "options_hi": ["path.join()", "path.resolve()", "path.merge()", "path.concat()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Node.js object is truly global?",
    "question_hi": "पूरे Node.js में ग्लोबल ऑब्जेक्ट कौन सा है?",
    "options_en": ["global", "window", "this", "self"],
    "options_hi": ["global", "window", "this", "self"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Express method sets a template engine?",
    "question_hi": "Template engine सेट करने का मेथड कौन सा है?",
    "options_en": ["app.set()", "app.engine()", "app.view()", "app.template()"],
    "options_hi": ["app.set()", "app.engine()", "app.view()", "app.template()"],
    "answer_en": "app.set()",
    "answer_hi": "app.set()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which template engine is commonly used with Express?",
    "question_hi": "Express के साथ आमतौर पर कौन सा template engine उपयोग होता है?",
    "options_en": ["EJS", "Blade", "Thymeleaf", "Handlebars.js"],
    "options_hi": ["EJS", "Blade", "Thymeleaf", "Handlebars.js"],
    "answer_en": "EJS",
    "answer_hi": "EJS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTTP method updates entire resource?",
    "question_hi": "पूरे resource को अपडेट करने का HTTP मेथड कौन सा है?",
    "options_en": ["PUT", "PATCH", "POST", "GET"],
    "options_hi": ["PUT", "PATCH", "POST", "GET"],
    "answer_en": "PUT",
    "answer_hi": "PUT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTTP method updates partial data?",
    "question_hi": "आंशिक डेटा अपडेट करने का मेथड कौन सा है?",
    "options_en": ["PATCH", "PUT", "POST", "DELETE"],
    "options_hi": ["PATCH", "PUT", "POST", "DELETE"],
    "answer_en": "PATCH",
    "answer_hi": "PATCH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which middleware handles CORS?",
    "question_hi": "CORS को हैंडल करने वाला middleware कौन सा है?",
    "options_en": ["cors", "helmet", "morgan", "cookie-parser"],
    "options_hi": ["cors", "helmet", "morgan", "cookie-parser"],
    "answer_en": "cors",
    "answer_hi": "cors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which middleware improves security headers?",
    "question_hi": "Security headers बेहतर करने वाला middleware कौन सा है?",
    "options_en": ["helmet", "cors", "secure", "protect"],
    "options_hi": ["helmet", "cors", "secure", "protect"],
    "answer_en": "helmet",
    "answer_hi": "helmet",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which middleware logs HTTP requests?",
    "question_hi": "HTTP request लॉग करने वाला middleware कौन सा है?",
    "options_en": ["morgan", "logger", "debug", "trace"],
    "options_hi": ["morgan", "logger", "debug", "trace"],
    "answer_en": "morgan",
    "answer_hi": "morgan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Node.js module handles buffers?",
    "question_hi": "Buffer को हैंडल करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["buffer", "stream", "fs", "binary"],
    "options_hi": ["buffer", "stream", "fs", "binary"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which class is used to create buffers?",
    "question_hi": "Buffer बनाने के लिए कौन सी class उपयोग होती है?",
    "options_en": ["Buffer", "Binary", "Stream", "Data"],
    "options_hi": ["Buffer", "Binary", "Stream", "Data"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Node.js module handles performance hooks?",
    "question_hi": "Performance hooks के लिए कौन सा मॉड्यूल है?",
    "options_en": ["perf_hooks", "performance", "hooks", "monitor"],
    "options_hi": ["perf_hooks", "performance", "hooks", "monitor"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which API measures execution time?",
    "question_hi": "Execution time मापने वाली API कौन सी है?",
    "options_en": ["performance.now()", "Date.now()", "timer.now()", "clock.time()"],
    "options_hi": ["performance.now()", "Date.now()", "timer.now()", "clock.time()"],
    "answer_en": "performance.now()",
    "answer_hi": "performance.now()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Node.js module supports WebAssembly?",
    "question_hi": "WebAssembly को कौन सा सपोर्ट करता है?",
    "options_en": ["WebAssembly", "wasm", "binary", "vm"],
    "options_hi": ["WebAssembly", "wasm", "binary", "vm"],
    "answer_en": "WebAssembly",
    "answer_hi": "WebAssembly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Node.js module executes JS in sandbox?",
    "question_hi": "Sandbox में JS रन करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["vm", "sandbox", "script", "eval"],
    "options_hi": ["vm", "sandbox", "script", "eval"],
    "answer_en": "vm",
    "answer_hi": "vm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Node.js module supports workers?",
    "question_hi": "Worker threads को कौन सा मॉड्यूल सपोर्ट करता है?",
    "options_en": ["worker_threads", "cluster", "threads", "child_process"],
    "options_hi": ["worker_threads", "cluster", "threads", "child_process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Node.js module handles tracing?",
    "question_hi": "Tracing के लिए कौन सा मॉड्यूल है?",
    "options_en": ["trace_events", "debug", "monitor", "inspect"],
    "options_hi": ["trace_events", "debug", "monitor", "inspect"],
    "answer_en": "trace_events",
    "answer_hi": "trace_events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which command runs a Node.js file?",
    "question_hi": "Node.js फाइल रन करने का कमांड कौन सा है?",
    "options_en": ["node filename.js", "npm run js", "run node", "start node"],
    "options_hi": ["node filename.js", "npm run js", "run node", "start node"],
    "answer_en": "node filename.js",
    "answer_hi": "node filename.js",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Node.js flag enables strict mode?",
    "question_hi": "Strict mode के लिए कौन सा फ्लैग है?",
    "options_en": ["--use_strict", "--strict", "--safe", "--secure"],
    "options_hi": ["--use_strict", "--strict", "--safe", "--secure"],
    "answer_en": "--use_strict",
    "answer_hi": "--use_strict",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method checks file existence?",
    "question_hi": "फाइल मौजूद है या नहीं चेक करने का मेथड कौन सा है?",
    "options_en": ["fs.existsSync()", "fs.check()", "fs.has()", "fs.find()"],
    "options_hi": ["fs.existsSync()", "fs.check()", "fs.has()", "fs.find()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js module handles assertions?",
    "question_hi": "Assertion के लिए कौन सा मॉड्यूल है?",
    "options_en": ["assert", "test", "check", "verify"],
    "options_hi": ["assert", "test", "check", "verify"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Node.js module handles REPL?",
    "question_hi": "REPL को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["repl", "console", "shell", "terminal"],
    "options_hi": ["repl", "console", "shell", "terminal"],
    "answer_en": "repl",
    "answer_hi": "repl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which REPL command exits session?",
    "question_hi": "REPL से बाहर निकलने का कमांड कौन सा है?",
    "options_en": [".exit", ".quit", ".close", ".end"],
    "options_hi": [".exit", ".quit", ".close", ".end"],
    "answer_en": ".exit",
    "answer_hi": ".exit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Node.js object logs output?",
    "question_hi": "Output लॉग करने वाला ऑब्जेक्ट कौन सा है?",
    "options_en": ["console", "logger", "output", "print"],
    "options_hi": ["console", "logger", "output", "print"],
    "answer_en": "console",
    "answer_hi": "console",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method logs errors?",
    "question_hi": "Error लॉग करने का मेथड कौन सा है?",
    "options_en": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "options_hi": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "answer_en": "console.error()",
    "answer_hi": "console.error()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js module handles console formatting?",
    "question_hi": "Console formatting के लिए कौन सा मॉड्यूल है?",
    "options_en": ["util", "format", "console", "debug"],
    "options_hi": ["util", "format", "console", "debug"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which util method formats strings?",
    "question_hi": "String format करने का util मेथड कौन सा है?",
    "options_en": ["util.format()", "util.print()", "util.log()", "util.stringify()"],
    "options_hi": ["util.format()", "util.print()", "util.log()", "util.stringify()"],
    "answer_en": "util.format()",
    "answer_hi": "util.format()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Node.js module handles tty?",
    "question_hi": "TTY को हैंडल करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["tty", "console", "terminal", "stdio"],
    "options_hi": ["tty", "console", "terminal", "stdio"],
    "answer_en": "tty",
    "answer_hi": "tty",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which object represents standard input?",
    "question_hi": "Standard input को कौन दर्शाता है?",
    "options_en": ["process.stdin", "console.in", "input.stream", "stdin"],
    "options_hi": ["process.stdin", "console.in", "input.stream", "stdin"],
    "answer_en": "process.stdin",
    "answer_hi": "process.stdin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which object represents standard output?",
    "question_hi": "Standard output को कौन दर्शाता है?",
    "options_en": ["process.stdout", "console.out", "output.stream", "stdout"],
    "options_hi": ["process.stdout", "console.out", "output.stream", "stdout"],
    "answer_en": "process.stdout",
    "answer_hi": "process.stdout",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Node.js module handles signals?",
    "question_hi": "Signals को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["process", "signal", "events", "os"],
    "options_hi": ["process", "signal", "events", "os"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which signal stops a process?",
    "question_hi": "प्रोसेस बंद करने वाला signal कौन सा है?",
    "options_en": ["SIGTERM", "SIGINT", "SIGSTOP", "SIGKILL"],
    "options_hi": ["SIGTERM", "SIGINT", "SIGSTOP", "SIGKILL"],
    "answer_en": "SIGTERM",
    "answer_hi": "SIGTERM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js feature enables scalability?",
    "question_hi": "Scalability को संभव बनाने वाली Node.js की खासियत क्या है?",
    "options_en": ["Non-blocking I/O", "Synchronous code", "Thread locking", "Delays"],
    "options_hi": ["नॉन-ब्लॉकिंग I/O", "सिंक्रोनस कोड", "थ्रेड लॉकिंग", "डिले"],
    "answer_en": "Non-blocking I/O",
    "answer_hi": "नॉन-ब्लॉकिंग I/O",
    "attempted": false,
    "selected": ""
  }
]




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
            return; // ✅ VERY IMPORTANT
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

// --------------------------- SUBMIT QUIZ (FINAL FIXED) ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // ✅ CORRECT TIME CALCULATION
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // ✅ FIXED localStorage SYNTAX
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

    // ✅ SAVE RESULT DATA
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // ✅ REDIRECT
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

        nav.innerHTML += `
        <div class="circle"
        style="background:${color}"
        onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA (NO CHANGE) ----------------------
let videoStream;
let movementCount = 0;

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