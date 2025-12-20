const questions=[
  {
    "num": 1,
    "question_en": "Who created Node.js?",
    "question_hi": "Node.js को किसने बनाया?",
    "options_en": ["Ryan Dahl", "Brendan Eich", "Tim Berners-Lee", "Guido van Rossum"],
    "options_hi": ["रयान डाहल", "ब्रेंडन आइक", "टिम बर्नर्स-ली", "गुइडो वैन रोसम"],
    "answer_en": "Ryan Dahl",
    "answer_hi": "रयान डाहल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Node.js was first released in which year?",
    "question_hi": "Node.js पहली बार किस साल रिलीज़ हुआ था?",
    "options_en": ["2007", "2009", "2011", "2013"],
    "options_hi": ["2007", "2009", "2011", "2013"],
    "answer_en": "2009",
    "answer_hi": "2009",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which file is the entry point of a Node.js app?",
    "question_hi": "Node.js ऐप का entry point कौन सी फाइल होती है?",
    "options_en": ["index.js", "main.js", "app.js", "server.js"],
    "options_hi": ["index.js", "main.js", "app.js", "server.js"],
    "answer_en": "index.js",
    "answer_hi": "index.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method is used to run a Node.js file?",
    "question_hi": "Node.js फाइल रन करने के लिए कौन सा कमांड है?",
    "options_en": ["node filename.js", "npm start", "run node", "start node"],
    "options_hi": ["node filename.js", "npm start", "run node", "start node"],
    "answer_en": "node filename.js",
    "answer_hi": "node filename.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Node.js module handles DNS queries?",
    "question_hi": "DNS queries को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["dns", "http", "net", "os"],
    "options_hi": ["dns", "http", "net", "os"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which function delays execution in Node.js?",
    "question_hi": "Execution को delay करने के लिए कौन सा फंक्शन है?",
    "options_en": ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "options_hi": ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function repeats execution after an interval?",
    "question_hi": "बार-बार execution के लिए कौन सा फंक्शन है?",
    "options_en": ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    "options_hi": ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which module allows TCP socket creation?",
    "question_hi": "TCP socket बनाने के लिए कौन सा मॉड्यूल है?",
    "options_en": ["net", "http", "dns", "tls"],
    "options_hi": ["net", "http", "dns", "tls"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Node.js module supports HTTPS?",
    "question_hi": "HTTPS को कौन सा मॉड्यूल सपोर्ट करता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which object refers to current module?",
    "question_hi": "Current मॉड्यूल को कौन सा object दर्शाता है?",
    "options_en": ["module", "exports", "process", "global"],
    "options_hi": ["module", "exports", "process", "global"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which object makes variables global?",
    "question_hi": "Variables को global कौन बनाता है?",
    "options_en": ["global", "window", "this", "process"],
    "options_hi": ["global", "window", "this", "process"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method stops an interval?",
    "question_hi": "Interval को रोकने के लिए कौन सा मेथड है?",
    "options_en": ["clearInterval()", "stopInterval()", "endInterval()", "removeInterval()"],
    "options_hi": ["clearInterval()", "stopInterval()", "endInterval()", "removeInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method stops a timeout?",
    "question_hi": "Timeout को रोकने का मेथड कौन सा है?",
    "options_en": ["clearTimeout()", "stopTimeout()", "removeTimeout()", "endTimeout()"],
    "options_hi": ["clearTimeout()", "stopTimeout()", "removeTimeout()", "endTimeout()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Node.js module handles UDP?",
    "question_hi": "UDP को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["dgram", "net", "udp", "dns"],
    "options_hi": ["dgram", "net", "udp", "dns"],
    "answer_en": "dgram",
    "answer_hi": "dgram",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Node.js module works with binary data?",
    "question_hi": "Binary data के लिए कौन सा मॉड्यूल है?",
    "options_en": ["buffer", "stream", "binary", "fs"],
    "options_hi": ["buffer", "stream", "binary", "fs"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which object represents binary data?",
    "question_hi": "Binary data को कौन represent करता है?",
    "options_en": ["Buffer", "Stream", "Array", "Object"],
    "options_hi": ["Buffer", "Stream", "Array", "Object"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which command installs a package globally?",
    "question_hi": "Package को globally install करने का कमांड कौन सा है?",
    "options_en": ["npm install -g", "npm install", "npm global", "npm add -g"],
    "options_hi": ["npm install -g", "npm install", "npm global", "npm add -g"],
    "answer_en": "npm install -g",
    "answer_hi": "npm install -g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which flag saves dependency in package.json?",
    "question_hi": "Dependency को package.json में save करने का flag कौन सा है?",
    "options_en": ["--save", "--add", "--store", "--dep"],
    "options_hi": ["--save", "--add", "--store", "--dep"],
    "answer_en": "--save",
    "answer_hi": "--save",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which section stores dev dependencies?",
    "question_hi": "Dev dependencies किस section में होती हैं?",
    "options_en": ["devDependencies", "dependencies", "packages", "modules"],
    "options_hi": ["devDependencies", "dependencies", "packages", "modules"],
    "answer_en": "devDependencies",
    "answer_hi": "devDependencies",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which command removes a package?",
    "question_hi": "Package हटाने का कमांड कौन सा है?",
    "options_en": ["npm uninstall", "npm remove", "npm delete", "npm clear"],
    "options_hi": ["npm uninstall", "npm remove", "npm delete", "npm clear"],
    "answer_en": "npm uninstall",
    "answer_hi": "npm uninstall",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Node.js module handles timers?",
    "question_hi": "Timers को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["timers", "time", "clock", "event"],
    "options_hi": ["timers", "time", "clock", "event"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which function executes code immediately after I/O?",
    "question_hi": "I/O के बाद तुरंत execute होने वाला फंक्शन कौन सा है?",
    "options_en": ["setImmediate()", "process.nextTick()", "setTimeout()", "setInterval()"],
    "options_hi": ["setImmediate()", "process.nextTick()", "setTimeout()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function executes before event loop continues?",
    "question_hi": "Event loop से पहले कौन execute होता है?",
    "options_en": ["process.nextTick()", "setImmediate()", "setTimeout()", "setInterval()"],
    "options_hi": ["process.nextTick()", "setImmediate()", "setTimeout()", "setInterval()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module handles readline input?",
    "question_hi": "Readline input के लिए कौन सा मॉड्यूल है?",
    "options_en": ["readline", "input", "stream", "fs"],
    "options_hi": ["readline", "input", "stream", "fs"],
    "answer_en": "readline",
    "answer_hi": "readline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Node.js module supports WebSockets?",
    "question_hi": "WebSocket सपोर्ट के लिए कौन सा मॉड्यूल है?",
    "options_en": ["ws", "http", "socket", "net"],
    "options_hi": ["ws", "http", "socket", "net"],
    "answer_en": "ws",
    "answer_hi": "ws",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which command checks Node.js version?",
    "question_hi": "Node.js version चेक करने का कमांड कौन सा है?",
    "options_en": ["node -v", "node --check", "npm -v", "version node"],
    "options_hi": ["node -v", "node --check", "npm -v", "version node"],
    "answer_en": "node -v",
    "answer_hi": "node -v",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which command checks npm version?",
    "question_hi": "npm version चेक करने का कमांड कौन सा है?",
    "options_en": ["npm -v", "node -v", "npm version", "check npm"],
    "options_hi": ["npm -v", "node -v", "npm version", "check npm"],
    "answer_en": "npm -v",
    "answer_hi": "npm -v",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Node.js module supports HTTP/2?",
    "question_hi": "HTTP/2 को कौन सा मॉड्यूल सपोर्ट करता है?",
    "options_en": ["http2", "http", "https", "net"],
    "options_hi": ["http2", "http", "https", "net"],
    "answer_en": "http2",
    "answer_hi": "http2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which module helps with performance hooks?",
    "question_hi": "Performance hooks के लिए कौन सा मॉड्यूल है?",
    "options_en": ["perf_hooks", "performance", "metrics", "hooks"],
    "options_hi": ["perf_hooks", "performance", "metrics", "hooks"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Node.js module helps debugging?",
    "question_hi": "Debugging में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["inspector", "debug", "console", "trace"],
    "options_hi": ["inspector", "debug", "console", "trace"],
    "answer_en": "inspector",
    "answer_hi": "inspector",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which module provides assertion testing?",
    "question_hi": "Assertion testing के लिए कौन सा मॉड्यूल है?",
    "options_en": ["assert", "test", "check", "verify"],
    "options_hi": ["assert", "test", "check", "verify"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module supports unit testing?",
    "question_hi": "Unit testing के लिए कौन सा मॉड्यूल है?",
    "options_en": ["node:test", "assert", "jest", "mocha"],
    "options_hi": ["node:test", "assert", "jest", "mocha"],
    "answer_en": "node:test",
    "answer_hi": "node:test",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which object logs output to console?",
    "question_hi": "Console पर output कौन देता है?",
    "options_en": ["console", "process", "log", "print"],
    "options_hi": ["console", "process", "log", "print"],
    "answer_en": "console",
    "answer_hi": "console",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method logs errors?",
    "question_hi": "Error log करने का मेथड कौन सा है?",
    "options_en": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "options_hi": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "answer_en": "console.error()",
    "answer_hi": "console.error()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method logs warnings?",
    "question_hi": "Warning log करने का मेथड कौन सा है?",
    "options_en": ["console.warn()", "console.log()", "console.error()", "console.info()"],
    "options_hi": ["console.warn()", "console.log()", "console.error()", "console.info()"],
    "answer_en": "console.warn()",
    "answer_hi": "console.warn()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which module handles internationalization?",
    "question_hi": "Internationalization के लिए कौन सा मॉड्यूल है?",
    "options_en": ["intl", "i18n", "locale", "lang"],
    "options_hi": ["intl", "i18n", "locale", "lang"],
    "answer_en": "intl",
    "answer_hi": "intl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module handles domain errors? (Deprecated)",
    "question_hi": "Domain errors को कौन सा मॉड्यूल हैंडल करता था?",
    "options_en": ["domain", "error", "exception", "trycatch"],
    "options_hi": ["domain", "error", "exception", "trycatch"],
    "answer_en": "domain",
    "answer_hi": "domain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which object exits the Node.js process?",
    "question_hi": "Node.js process को exit कौन करता है?",
    "options_en": ["process.exit()", "exit()", "stop()", "close()"],
    "options_hi": ["process.exit()", "exit()", "stop()", "close()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which event fires when process ends?",
    "question_hi": "Process खत्म होने पर कौन सा event चलता है?",
    "options_en": ["exit", "end", "close", "finish"],
    "options_hi": ["exit", "end", "close", "finish"],
    "answer_en": "exit",
    "answer_hi": "exit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which event handles uncaught errors?",
    "question_hi": "Uncaught errors को कौन सा event हैंडल करता है?",
    "options_en": ["uncaughtException", "error", "exception", "fail"],
    "options_hi": ["uncaughtException", "error", "exception", "fail"],
    "answer_en": "uncaughtException",
    "answer_hi": "uncaughtException",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which module provides VM execution?",
    "question_hi": "VM execution के लिए कौन सा मॉड्यूल है?",
    "options_en": ["vm", "virtual", "engine", "script"],
    "options_hi": ["vm", "virtual", "engine", "script"],
    "answer_en": "vm",
    "answer_hi": "vm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js module handles worker threads?",
    "question_hi": "Worker threads को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["worker_threads", "cluster", "threads", "child_process"],
    "options_hi": ["worker_threads", "cluster", "threads", "child_process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js module supports tracing?",
    "question_hi": "Tracing के लिए कौन सा मॉड्यूल है?",
    "options_en": ["trace_events", "events", "debug", "inspector"],
    "options_hi": ["trace_events", "events", "debug", "inspector"],
    "answer_en": "trace_events",
    "answer_hi": "trace_events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module supports REPL?",
    "question_hi": "REPL को कौन सा मॉड्यूल सपोर्ट करता है?",
    "options_en": ["repl", "console", "stdin", "eval"],
    "options_hi": ["repl", "console", "stdin", "eval"],
    "answer_en": "repl",
    "answer_hi": "repl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does REPL stand for?",
    "question_hi": "REPL का पूरा नाम क्या है?",
    "options_en": ["Read Eval Print Loop", "Run Execute Program Loop", "Read Execute Process Loop", "Real Execution Programming Loop"],
    "options_hi": ["Read Eval Print Loop", "Run Execute Program Loop", "Read Execute Process Loop", "Real Execution Programming Loop"],
    "answer_en": "Read Eval Print Loop",
    "answer_hi": "Read Eval Print Loop",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which module supports TLS/SSL?",
    "question_hi": "TLS/SSL को कौन सा मॉड्यूल सपोर्ट करता है?",
    "options_en": ["tls", "https", "crypto", "secure"],
    "options_hi": ["tls", "https", "crypto", "secure"],
    "answer_en": "tls",
    "answer_hi": "tls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js object gives current working directory?",
    "question_hi": "Current working directory कौन देता है?",
    "options_en": ["process.cwd()", "__dirname", "__filename", "path.cwd()"],
    "options_hi": ["process.cwd()", "__dirname", "__filename", "path.cwd()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which module handles HTTP headers?",
    "question_hi": "HTTP headers को कौन हैंडल करता है?",
    "options_en": ["http", "headers", "net", "request"],
    "options_hi": ["http", "headers", "net", "request"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Node.js module supports async hooks?",
    "question_hi": "Async hooks के लिए कौन सा मॉड्यूल है?",
    "options_en": ["async_hooks", "hooks", "events", "timers"],
    "options_hi": ["async_hooks", "hooks", "events", "timers"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js feature enables scalability?",
    "question_hi": "Scalability के लिए Node.js की खासियत क्या है?",
    "options_en": ["Non-blocking I/O", "Blocking code", "Synchronous flow", "Delays"],
    "options_hi": ["नॉन-ब्लॉकिंग I/O", "ब्लॉकिंग कोड", "सिंक्रोनस फ्लो", "डिले"],
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