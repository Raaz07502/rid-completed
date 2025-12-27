const questions = [
  {
    "num": 1,
    "question_en": "What is the value of \( \int e^x \sin x \, dx \)?",
    "question_hi": "\( \int e^x \sin x \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{e^x}{2}(\sin x - \cos x) + C \)", "\( e^x \sin x + C \)", "\( \frac{e^x}{2}(\sin x + \cos x) + C \)", "\( e^x \cos x + C \)"],
    "options_hi": ["\( \frac{e^x}{2}(\sin x - \cos x) + C \)", "\( e^x \sin x + C \)", "\( \frac{e^x}{2}(\sin x + \cos x) + C \)", "\( e^x \cos x + C \)"],
    "answer_en": "\( \frac{e^x}{2}(\sin x - \cos x) + C \)",
    "answer_hi": "\( \frac{e^x}{2}(\sin x - \cos x) + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If \( A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \), what is the value of \( A^2 - 5A \)?",
    "question_hi": "यदि \( A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \), तो \( A^2 - 5A \) का मान क्या है?",
    "options_en": ["\( \begin{bmatrix} -6 & -8 \\ -12 & -14 \end{bmatrix} \)", "\( \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \)", "\( \begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix} \)", "\( \begin{bmatrix} -2 & -2 \\ -2 & -2 \end{bmatrix} \)"],
    "options_hi": ["\( \begin{bmatrix} -6 & -8 \\ -12 & -14 \end{bmatrix} \)", "\( \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \)", "\( \begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix} \)", "\( \begin{bmatrix} -2 & -2 \\ -2 & -2 \end{bmatrix} \)"],
    "answer_en": "\( \begin{bmatrix} -6 & -8 \\ -12 & -14 \end{bmatrix} \)",
    "answer_hi": "\( \begin{bmatrix} -6 & -8 \\ -12 & -14 \end{bmatrix} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of \( \lim_{x \to 0} \frac{\tan x - x}{x^3} \)?",
    "question_hi": "\( \lim_{x \to 0} \frac{\tan x - x}{x^3} \) का मान क्या है?",
    "options_en": ["\( \frac{1}{3} \)", "\( 0 \)", "\( 1 \)", "\( \frac{1}{2} \)"],
    "options_hi": ["\( \frac{1}{3} \)", "\( 0 \)", "\( 1 \)", "\( \frac{1}{2} \)"],
    "answer_en": "\( \frac{1}{3} \)",
    "answer_hi": "\( \frac{1}{3} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The general solution of the differential equation \( \frac{dy}{dx} = \frac{y}{x} \) is:",
    "question_hi": "अवकल समीकरण \( \frac{dy}{dx} = \frac{y}{x} \) का व्यापक हल है:",
    "options_en": ["\( y = Cx \)", "\( y = Cx^2 \)", "\( y = Ce^x \)", "\( y = C\ln x \)"],
    "options_hi": ["\( y = Cx \)", "\( y = Cx^2 \)", "\( y = Ce^x \)", "\( y = C\ln x \)"],
    "answer_en": "\( y = Cx \)",
    "answer_hi": "\( y = Cx \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the value of \( \int_0^{\pi/2} \ln(\sin x) \, dx \)?",
    "question_hi": "\( \int_0^{\pi/2} \ln(\sin x) \, dx \) का मान क्या है?",
    "options_en": ["\( -\frac{\pi}{2} \ln 2 \)", "\( 0 \)", "\( \frac{\pi}{2} \ln 2 \)", "\( -\pi \ln 2 \)"],
    "options_hi": ["\( -\frac{\pi}{2} \ln 2 \)", "\( 0 \)", "\( \frac{\pi}{2} \ln 2 \)", "\( -\pi \ln 2 \)"],
    "answer_en": "\( -\frac{\pi}{2} \ln 2 \)",
    "answer_hi": "\( -\frac{\pi}{2} \ln 2 \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If \( z = x + iy \) and \( |z - 1| = |z + 1| \), then the locus of z is:",
    "question_hi": "यदि \( z = x + iy \) और \( |z - 1| = |z + 1| \), तो z का बिन्दुपथ है:",
    "options_en": ["y-axis", "x-axis", "line x = y", "line x = 1"],
    "options_hi": ["y-अक्ष", "x-अक्ष", "रेखा x = y", "रेखा x = 1"],
    "answer_en": "y-axis",
    "answer_hi": "y-अक्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the value of \( \frac{d}{dx} (\tan^{-1} (\sec x + \tan x)) \)?",
    "question_hi": "\( \frac{d}{dx} (\tan^{-1} (\sec x + \tan x)) \) का मान क्या है?",
    "options_en": ["\( \frac{1}{2} \)", "\( \frac{1}{2} \sec x \)", "\( \sec x \)", "\( \frac{1}{2} \sec^2 x \)"],
    "options_hi": ["\( \frac{1}{2} \)", "\( \frac{1}{2} \sec x \)", "\( \sec x \)", "\( \frac{1}{2} \sec^2 x \)"],
    "answer_en": "\( \frac{1}{2} \sec x \)",
    "answer_hi": "\( \frac{1}{2} \sec x \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The sum of the infinite series \( 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots \) is:",
    "question_hi": "अनंत श्रेणी \( 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots \) का योग है:",
    "options_en": ["2", "1", "∞", "\( \frac{3}{2} \)"],
    "options_hi": ["2", "1", "∞", "\( \frac{3}{2} \)"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the value of \( \int \frac{dx}{x\sqrt{x^2 - 1}} \)?",
    "question_hi": "\( \int \frac{dx}{x\sqrt{x^2 - 1}} \) का मान क्या है?",
    "options_en": ["\( \sec^{-1} x + C \)", "\( \cos^{-1} x + C \)", "\( \tan^{-1} x + C \)", "\( \sin^{-1} x + C \)"],
    "options_hi": ["\( \sec^{-1} x + C \)", "\( \cos^{-1} x + C \)", "\( \tan^{-1} x + C \)", "\( \sin^{-1} x + C \)"],
    "answer_en": "\( \sec^{-1} x + C \)",
    "answer_hi": "\( \sec^{-1} x + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If \( \tan^{-1} x + \tan^{-1} y = \frac{\pi}{4} \), then what is the value of \( x + y + xy \)?",
    "question_hi": "यदि \( \tan^{-1} x + \tan^{-1} y = \frac{\pi}{4} \), तो \( x + y + xy \) का मान क्या है?",
    "options_en": ["1", "0", "-1", "2"],
    "options_hi": ["1", "0", "-1", "2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the value of \( \int_0^1 x(1-x)^n \, dx \)?",
    "question_hi": "\( \int_0^1 x(1-x)^n \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{1}{(n+1)(n+2)} \)", "\( \frac{n}{(n+1)(n+2)} \)", "\( \frac{1}{n+1} \)", "\( \frac{1}{n+2} \)"],
    "options_hi": ["\( \frac{1}{(n+1)(n+2)} \)", "\( \frac{n}{(n+1)(n+2)} \)", "\( \frac{1}{n+1} \)", "\( \frac{1}{n+2} \)"],
    "answer_en": "\( \frac{1}{(n+1)(n+2)} \)",
    "answer_hi": "\( \frac{1}{(n+1)(n+2)} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The solution of \( \frac{d^2y}{dx^2} + y = 0 \) is:",
    "question_hi": "\( \frac{d^2y}{dx^2} + y = 0 \) का हल है:",
    "options_en": ["\( y = A\cos x + B\sin x \)", "\( y = Ae^x + Be^{-x} \)", "\( y = Ax + B \)", "\( y = Ae^{ix} + Be^{-ix} \)"],
    "options_hi": ["\( y = A\cos x + B\sin x \)", "\( y = Ae^x + Be^{-x} \)", "\( y = Ax + B \)", "\( y = Ae^{ix} + Be^{-ix} \)"],
    "answer_en": "\( y = A\cos x + B\sin x \)",
    "answer_hi": "\( y = A\cos x + B\sin x \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the value of \( \lim_{x \to 0} (1 + 2x)^{3/x} \)?",
    "question_hi": "\( \lim_{x \to 0} (1 + 2x)^{3/x} \) का मान क्या है?",
    "options_en": ["\( e^6 \)", "\( e^3 \)", "\( e^2 \)", "\( e \)"],
    "options_hi": ["\( e^6 \)", "\( e^3 \)", "\( e^2 \)", "\( e \)"],
    "answer_en": "\( e^6 \)",
    "answer_hi": "\( e^6 \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If \( A = \begin{bmatrix} 2 & -1 \\ 1 & 2 \end{bmatrix} \), then \( A^2 - 4A + 5I \) is equal to:",
    "question_hi": "यदि \( A = \begin{bmatrix} 2 & -1 \\ 1 & 2 \end{bmatrix} \), तो \( A^2 - 4A + 5I \) बराबर है:",
    "options_en": ["Zero matrix", "Identity matrix", "A", "2A"],
    "options_hi": ["शून्य आव्यूह", "तत्समक आव्यूह", "A", "2A"],
    "answer_en": "Zero matrix",
    "answer_hi": "शून्य आव्यूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the value of \( \int \frac{\sin x}{\sin(x-a)} \, dx \)?",
    "question_hi": "\( \int \frac{\sin x}{\sin(x-a)} \, dx \) का मान क्या है?",
    "options_en": ["\( x\cos a + \sin a \ln|\sin(x-a)| + C \)", "\( x\sin a + \cos a \ln|\sin(x-a)| + C \)", "\( x + \ln|\sin(x-a)| + C \)", "\( \cos a \cdot x + C \)"],
    "options_hi": ["\( x\cos a + \sin a \ln|\sin(x-a)| + C \)", "\( x\sin a + \cos a \ln|\sin(x-a)| + C \)", "\( x + \ln|\sin(x-a)| + C \)", "\( \cos a \cdot x + C \)"],
    "answer_en": "\( x\cos a + \sin a \ln|\sin(x-a)| + C \)",
    "answer_hi": "\( x\cos a + \sin a \ln|\sin(x-a)| + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The area bounded by the curve \( y = x^3 \), x-axis, and lines x = 0 and x = 2 is:",
    "question_hi": "वक्र \( y = x^3 \), x-अक्ष और रेखाओं x = 0 तथा x = 2 से घिरा क्षेत्रफल है:",
    "options_en": ["4", "2", "8", "16"],
    "options_hi": ["4", "2", "8", "16"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the value of \( \frac{d}{dx} (x^x) \)?",
    "question_hi": "\( \frac{d}{dx} (x^x) \) का मान क्या है?",
    "options_en": ["\( x^x (1 + \ln x) \)", "\( x^x \ln x \)", "\( x^{x-1} \)", "\( x^x (1 - \ln x) \)"],
    "options_hi": ["\( x^x (1 + \ln x) \)", "\( x^x \ln x \)", "\( x^{x-1} \)", "\( x^x (1 - \ln x) \)"],
    "answer_en": "\( x^x (1 + \ln x) \)",
    "answer_hi": "\( x^x (1 + \ln x) \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "If \( \sin^{-1} x + \sin^{-1} y = \frac{\pi}{2} \), then what is the value of \( \sqrt{1-x^2} \cdot \sqrt{1-y^2} \)?",
    "question_hi": "यदि \( \sin^{-1} x + \sin^{-1} y = \frac{\pi}{2} \), तो \( \sqrt{1-x^2} \cdot \sqrt{1-y^2} \) का मान क्या है?",
    "options_en": ["xy", "x+y", "1-xy", "0"],
    "options_hi": ["xy", "x+y", "1-xy", "0"],
    "answer_en": "xy",
    "answer_hi": "xy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the value of \( \int e^{ax} \cos(bx) \, dx \)?",
    "question_hi": "\( \int e^{ax} \cos(bx) \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{e^{ax}}{a^2+b^2}(a\cos bx + b\sin bx) + C \)", "\( \frac{e^{ax}}{a^2+b^2}(a\cos bx - b\sin bx) + C \)", "\( e^{ax} \sin bx + C \)", "\( \frac{e^{ax}}{a}\cos bx + C \)"],
    "options_hi": ["\( \frac{e^{ax}}{a^2+b^2}(a\cos bx + b\sin bx) + C \)", "\( \frac{e^{ax}}{a^2+b^2}(a\cos bx - b\sin bx) + C \)", "\( e^{ax} \sin bx + C \)", "\( \frac{e^{ax}}{a}\cos bx + C \)"],
    "answer_en": "\( \frac{e^{ax}}{a^2+b^2}(a\cos bx + b\sin bx) + C \)",
    "answer_hi": "\( \frac{e^{ax}}{a^2+b^2}(a\cos bx + b\sin bx) + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The number of solutions of the equation \( \sin x = \frac{x}{10} \) is:",
    "question_hi": "समीकरण \( \sin x = \frac{x}{10} \) के हलों की संख्या है:",
    "options_en": ["7", "5", "3", "1"],
    "options_hi": ["7", "5", "3", "1"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the value of \( \int_0^{\pi} \frac{x\sin x}{1+\cos^2 x} \, dx \)?",
    "question_hi": "\( \int_0^{\pi} \frac{x\sin x}{1+\cos^2 x} \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{\pi^2}{4} \)", "\( \frac{\pi^2}{2} \)", "\( \pi^2 \)", "\( \frac{\pi}{2} \)"],
    "options_hi": ["\( \frac{\pi^2}{4} \)", "\( \frac{\pi^2}{2} \)", "\( \pi^2 \)", "\( \frac{\pi}{2} \)"],
    "answer_en": "\( \frac{\pi^2}{4} \)",
    "answer_hi": "\( \frac{\pi^2}{4} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If \( A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix} \), then the eigenvalues of A are:",
    "question_hi": "यदि \( A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix} \), तो A के अभिलक्षणिक मान हैं:",
    "options_en": ["1, 4, 6", "1, 2, 3", "4, 5, 6", "1, 4, 5"],
    "options_hi": ["1, 4, 6", "1, 2, 3", "4, 5, 6", "1, 4, 5"],
    "answer_en": "1, 4, 6",
    "answer_hi": "1, 4, 6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the value of \( \lim_{n \to \infty} \left( \frac{1}{n^2} + \frac{2}{n^2} + \cdots + \frac{n}{n^2} \right) \)?",
    "question_hi": "\( \lim_{n \to \infty} \left( \frac{1}{n^2} + \frac{2}{n^2} + \cdots + \frac{n}{n^2} \right) \) का मान क्या है?",
    "options_en": ["\( \frac{1}{2} \)", "0", "1", "∞"],
    "options_hi": ["\( \frac{1}{2} \)", "0", "1", "∞"],
    "answer_en": "\( \frac{1}{2} \)",
    "answer_hi": "\( \frac{1}{2} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The solution of the differential equation \( x\frac{dy}{dx} + y = x^2 \) is:",
    "question_hi": "अवकल समीकरण \( x\frac{dy}{dx} + y = x^2 \) का हल है:",
    "options_en": ["\( y = \frac{x^2}{3} + \frac{C}{x} \)", "\( y = x^2 + Cx \)", "\( y = \frac{x^3}{3} + C \)", "\( y = \frac{x^2}{2} + C \)"],
    "options_hi": ["\( y = \frac{x^2}{3} + \frac{C}{x} \)", "\( y = x^2 + Cx \)", "\( y = \frac{x^3}{3} + C \)", "\( y = \frac{x^2}{2} + C \)"],
    "answer_en": "\( y = \frac{x^2}{3} + \frac{C}{x} \)",
    "answer_hi": "\( y = \frac{x^2}{3} + \frac{C}{x} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the value of \( \int \frac{dx}{\sqrt{x^2 + a^2}} \)?",
    "question_hi": "\( \int \frac{dx}{\sqrt{x^2 + a^2}} \) का मान क्या है?",
    "options_en": ["\( \ln|x + \sqrt{x^2 + a^2}| + C \)", "\( \sin^{-1}\frac{x}{a} + C \)", "\( \frac{1}{a}\tan^{-1}\frac{x}{a} + C \)", "\( \ln|\sqrt{x^2 + a^2} - x| + C \)"],
    "options_hi": ["\( \ln|x + \sqrt{x^2 + a^2}| + C \)", "\( \sin^{-1}\frac{x}{a} + C \)", "\( \frac{1}{a}\tan^{-1}\frac{x}{a} + C \)", "\( \ln|\sqrt{x^2 + a^2} - x| + C \)"],
    "answer_en": "\( \ln|x + \sqrt{x^2 + a^2}| + C \)",
    "answer_hi": "\( \ln|x + \sqrt{x^2 + a^2}| + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The volume of the solid generated by revolving the curve \( y = x^2 \) from x = 0 to x = 1 about x-axis is:",
    "question_hi": "वक्र \( y = x^2 \) को x = 0 से x = 1 तक x-अक्ष के परितः घुमाने से उत्पन्न ठोस का आयतन है:",
    "options_en": ["\( \frac{\pi}{5} \)", "\( \frac{\pi}{3} \)", "\( \frac{\pi}{2} \)", "\( \pi \)"],
    "options_hi": ["\( \frac{\pi}{5} \)", "\( \frac{\pi}{3} \)", "\( \frac{\pi}{2} \)", "\( \pi \)"],
    "answer_en": "\( \frac{\pi}{5} \)",
    "answer_hi": "\( \frac{\pi}{5} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the value of \( \frac{d}{dx} (\sin^{-1}(3x - 4x^3)) \)?",
    "question_hi": "\( \frac{d}{dx} (\sin^{-1}(3x - 4x^3)) \) का मान क्या है?",
    "options_en": ["\( \frac{3}{\sqrt{1-x^2}} \)", "\( \frac{3}{1+x^2} \)", "\( \frac{1}{\sqrt{1-x^2}} \)", "\( \frac{3}{\sqrt{1-9x^2}} \)"],
    "options_hi": ["\( \frac{3}{\sqrt{1-x^2}} \)", "\( \frac{3}{1+x^2} \)", "\( \frac{1}{\sqrt{1-x^2}} \)", "\( \frac{3}{\sqrt{1-9x^2}} \)"],
    "answer_en": "\( \frac{3}{\sqrt{1-x^2}} \)",
    "answer_hi": "\( \frac{3}{\sqrt{1-x^2}} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If \( \int_0^a \frac{dx}{1+x^2} = \int_a^\infty \frac{dx}{1+x^2} \), then the value of a is:",
    "question_hi": "यदि \( \int_0^a \frac{dx}{1+x^2} = \int_a^\infty \frac{dx}{1+x^2} \), तो a का मान है:",
    "options_en": ["1", "\( \sqrt{3} \)", "\( \sqrt{2} \)", "2"],
    "options_hi": ["1", "\( \sqrt{3} \)", "\( \sqrt{2} \)", "2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The order and degree of the differential equation \( \left(\frac{d^2y}{dx^2}\right)^{3/2} = \sqrt{\frac{dy}{dx}} \) are:",
    "question_hi": "अवकल समीकरण \( \left(\frac{d^2y}{dx^2}\right)^{3/2} = \sqrt{\frac{dy}{dx}} \) की कोटि और घात हैं:",
    "options_en": ["Order = 2, Degree = 2", "Order = 2, Degree = 3", "Order = 2, Degree = 4", "Order = 1, Degree = 2"],
    "options_hi": ["कोटि = 2, घात = 2", "कोटि = 2, घात = 3", "कोटि = 2, घात = 4", "कोटि = 1, घात = 2"],
    "answer_en": "Order = 2, Degree = 2",
    "answer_hi": "कोटि = 2, घात = 2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the value of \( \int_0^{\pi/4} \tan^3 x \, dx \)?",
    "question_hi": "\( \int_0^{\pi/4} \tan^3 x \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{1}{2} - \ln\sqrt{2} \)", "\( \frac{1}{2} + \ln\sqrt{2} \)", "\( \ln\sqrt{2} \)", "\( \frac{1}{2} \)"],
    "options_hi": ["\( \frac{1}{2} - \ln\sqrt{2} \)", "\( \frac{1}{2} + \ln\sqrt{2} \)", "\( \ln\sqrt{2} \)", "\( \frac{1}{2} \)"],
    "answer_en": "\( \frac{1}{2} - \ln\sqrt{2} \)",
    "answer_hi": "\( \frac{1}{2} - \ln\sqrt{2} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If the matrix \( \begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 3 & 7 & 10 \end{bmatrix} \) is singular, then the value of λ is:",
    "question_hi": "यदि आव्यूह \( \begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 3 & 7 & 10 \end{bmatrix} \) विशेष है, तो λ का मान है:",
    "options_en": ["λ = 10", "Always singular", "λ = 7", "Never singular"],
    "options_hi": ["λ = 10", "सदैव विशेष", "λ = 7", "कभी विशेष नहीं"],
    "answer_en": "Always singular",
    "answer_hi": "सदैव विशेष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the value of \( \lim_{x \to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x} \)?",
    "question_hi": "\( \lim_{x \to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x} \) का मान क्या है?",
    "options_en": ["2", "0", "1", "∞"],
    "options_hi": ["2", "0", "1", "∞"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The area of the ellipse \( \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \) is:",
    "question_hi": "दीर्घवृत्त \( \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \) का क्षेत्रफल है:",
    "options_en": ["\( \pi ab \)", "\( \frac{\pi ab}{2} \)", "\( \pi(a^2 + b^2) \)", "\( 2\pi ab \)"],
    "options_hi": ["\( \pi ab \)", "\( \frac{\pi ab}{2} \)", "\( \pi(a^2 + b^2) \)", "\( 2\pi ab \)"],
    "answer_en": "\( \pi ab \)",
    "answer_hi": "\( \pi ab \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the value of \( \int \frac{\sin 2x}{\sin^4 x + \cos^4 x} \, dx \)?",
    "question_hi": "\( \int \frac{\sin 2x}{\sin^4 x + \cos^4 x} \, dx \) का मान क्या है?",
    "options_en": ["\( \tan^{-1}(\tan^2 x) + C \)", "\( \tan^{-1}(\sin 2x) + C \)", "\( \ln|\sin^4 x + \cos^4 x| + C \)", "\( \tan^{-1}(\cos 2x) + C \)"],
    "options_hi": ["\( \tan^{-1}(\tan^2 x) + C \)", "\( \tan^{-1}(\sin 2x) + C \)", "\( \ln|\sin^4 x + \cos^4 x| + C \)", "\( \tan^{-1}(\cos 2x) + C \)"],
    "answer_en": "\( \tan^{-1}(\tan^2 x) + C \)",
    "answer_hi": "\( \tan^{-1}(\tan^2 x) + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If \( y = \ln(\ln x) \), then \( \frac{d^2y}{dx^2} \) at x = e is:",
    "question_hi": "यदि \( y = \ln(\ln x) \), तो x = e पर \( \frac{d^2y}{dx^2} \) है:",
    "options_en": ["\( -\frac{1}{e} \)", "\( \frac{1}{e} \)", "\( -\frac{1}{e^2} \)", "0"],
    "options_hi": ["\( -\frac{1}{e} \)", "\( \frac{1}{e} \)", "\( -\frac{1}{e^2} \)", "0"],
    "answer_en": "\( -\frac{1}{e} \)",
    "answer_hi": "\( -\frac{1}{e} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The length of the curve \( y = \frac{2}{3}x^{3/2} \) from x = 0 to x = 1 is:",
    "question_hi": "वक्र \( y = \frac{2}{3}x^{3/2} \) की x = 0 से x = 1 तक लंबाई है:",
    "options_en": ["\( \frac{2}{3}(2\sqrt{2} - 1) \)", "\( \frac{2}{3} \)", "\( \frac{4}{3} \)", "\( \frac{8}{3} \)"],
    "options_hi": ["\( \frac{2}{3}(2\sqrt{2} - 1) \)", "\( \frac{2}{3} \)", "\( \frac{4}{3} \)", "\( \frac{8}{3} \)"],
    "answer_en": "\( \frac{2}{3}(2\sqrt{2} - 1) \)",
    "answer_hi": "\( \frac{2}{3}(2\sqrt{2} - 1) \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the value of \( \int_0^{\pi/2} \sin^3 x \cos^2 x \, dx \)?",
    "question_hi": "\( \int_0^{\pi/2} \sin^3 x \cos^2 x \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{2}{15} \)", "\( \frac{1}{15} \)", "\( \frac{4}{15} \)", "\( \frac{8}{15} \)"],
    "options_hi": ["\( \frac{2}{15} \)", "\( \frac{1}{15} \)", "\( \frac{4}{15} \)", "\( \frac{8}{15} \)"],
    "answer_en": "\( \frac{2}{15} \)",
    "answer_hi": "\( \frac{2}{15} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The solution of \( \frac{dy}{dx} = \frac{x+y+1}{x+y-1} \) is:",
    "question_hi": "\( \frac{dy}{dx} = \frac{x+y+1}{x+y-1} \) का हल है:",
    "options_en": ["\( x + y + \ln|x+y| = C \)", "\( x - y + \ln|x+y| = C \)", "\( x + y = C \)", "\( x - y = C \)"],
    "options_hi": ["\( x + y + \ln|x+y| = C \)", "\( x - y + \ln|x+y| = C \)", "\( x + y = C \)", "\( x - y = C \)"],
    "answer_en": "\( x + y + \ln|x+y| = C \)",
    "answer_hi": "\( x + y + \ln|x+y| = C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If \( f(x) = \begin{cases} \frac{\sin x}{x}, & x \neq 0 \\ 1, & x = 0 \end{cases} \), then f'(0) is:",
    "question_hi": "यदि \( f(x) = \begin{cases} \frac{\sin x}{x}, & x \neq 0 \\ 1, & x = 0 \end{cases} \), तो f'(0) है:",
    "options_en": ["0", "1", "-1", "Does not exist"],
    "options_hi": ["0", "1", "-1", "मौजूद नहीं है"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the value of \( \int \frac{dx}{x(x^n + 1)} \)?",
    "question_hi": "\( \int \frac{dx}{x(x^n + 1)} \) का मान क्या है?",
    "options_en": ["\( \frac{1}{n} \ln\left|\frac{x^n}{x^n + 1}\right| + C \)", "\( \ln\left|\frac{x}{x^n + 1}\right| + C \)", "\( \frac{1}{n} \ln|x^n + 1| + C \)", "\( \ln|x| - \ln|x^n + 1| + C \)"],
    "options_hi": ["\( \frac{1}{n} \ln\left|\frac{x^n}{x^n + 1}\right| + C \)", "\( \ln\left|\frac{x}{x^n + 1}\right| + C \)", "\( \frac{1}{n} \ln|x^n + 1| + C \)", "\( \ln|x| - \ln|x^n + 1| + C \)"],
    "answer_en": "\( \frac{1}{n} \ln\left|\frac{x^n}{x^n + 1}\right| + C \)",
    "answer_hi": "\( \frac{1}{n} \ln\left|\frac{x^n}{x^n + 1}\right| + C \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The radius of curvature of the curve \( y = e^x \) at x = 0 is:",
    "question_hi": "वक्र \( y = e^x \) की x = 0 पर वक्रता त्रिज्या है:",
    "options_en": ["\( 2\sqrt{2} \)", "\( \sqrt{2} \)", "\( \frac{1}{\sqrt{2}} \)", "\( 2 \)"],
    "options_hi": ["\( 2\sqrt{2} \)", "\( \sqrt{2} \)", "\( \frac{1}{\sqrt{2}} \)", "\( 2 \)"],
    "answer_en": "\( 2\sqrt{2} \)",
    "answer_hi": "\( 2\sqrt{2} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the value of \( \sum_{r=1}^n \frac{1}{r(r+1)(r+2)} \)?",
    "question_hi": "\( \sum_{r=1}^n \frac{1}{r(r+1)(r+2)} \) का मान क्या है?",
    "options_en": ["\( \frac{1}{2} - \frac{1}{(n+1)(n+2)} \)", "\( \frac{1}{4} - \frac{1}{2(n+1)(n+2)} \)", "\( \frac{1}{2} + \frac{1}{(n+1)(n+2)} \)", "\( \frac{1}{4} + \frac{1}{2(n+1)(n+2)} \)"],
    "options_hi": ["\( \frac{1}{2} - \frac{1}{(n+1)(n+2)} \)", "\( \frac{1}{4} - \frac{1}{2(n+1)(n+2)} \)", "\( \frac{1}{2} + \frac{1}{(n+1)(n+2)} \)", "\( \frac{1}{4} + \frac{1}{2(n+1)(n+2)} \)"],
    "answer_en": "\( \frac{1}{4} - \frac{1}{2(n+1)(n+2)} \)",
    "answer_hi": "\( \frac{1}{4} - \frac{1}{2(n+1)(n+2)} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If \( A = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix} \), then \( A^n \) is equal to:",
    "question_hi": "यदि \( A = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix} \), तो \( A^n \) बराबर है:",
    "options_en": ["\( \begin{bmatrix} \cos n\theta & \sin n\theta \\ -\sin n\theta & \cos n\theta \end{bmatrix} \)", "\( \begin{bmatrix} \cos^n\theta & \sin^n\theta \\ -\sin^n\theta & \cos^n\theta \end{bmatrix} \)", "\( \begin{bmatrix} n\cos\theta & n\sin\theta \\ -n\sin\theta & n\cos\theta \end{bmatrix} \)", "\( \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}^n \)"],
    "options_hi": ["\( \begin{bmatrix} \cos n\theta & \sin n\theta \\ -\sin n\theta & \cos n\theta \end{bmatrix} \)", "\( \begin{bmatrix} \cos^n\theta & \sin^n\theta \\ -\sin^n\theta & \cos^n\theta \end{bmatrix} \)", "\( \begin{bmatrix} n\cos\theta & n\sin\theta \\ -n\sin\theta & n\cos\theta \end{bmatrix} \)", "\( \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}^n \)"],
    "answer_en": "\( \begin{bmatrix} \cos n\theta & \sin n\theta \\ -\sin n\theta & \cos n\theta \end{bmatrix} \)",
    "answer_hi": "\( \begin{bmatrix} \cos n\theta & \sin n\theta \\ -\sin n\theta & \cos n\theta \end{bmatrix} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the value of \( \lim_{x \to \infty} \left( \frac{x+1}{x-1} \right)^x \)?",
    "question_hi": "\( \lim_{x \to \infty} \left( \frac{x+1}{x-1} \right)^x \) का मान क्या है?",
    "options_en": ["\( e^2 \)", "\( e \)", "1", "∞"],
    "options_hi": ["\( e^2 \)", "\( e \)", "1", "∞"],
    "answer_en": "\( e^2 \)",
    "answer_hi": "\( e^2 \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The differential equation of all circles touching x-axis at origin is:",
    "question_hi": "मूल बिंदु पर x-अक्ष को स्पर्श करने वाले सभी वृत्तों का अवकल समीकरण है:",
    "options_en": ["\( (x^2 + y^2)\frac{dy}{dx} - 2xy = 0 \)", "\( (x^2 + y^2)\frac{dy}{dx} + 2xy = 0 \)", "\( x\frac{dy}{dx} - y = 0 \)", "\( x\frac{dy}{dx} + y = 0 \)"],
    "options_hi": ["\( (x^2 + y^2)\frac{dy}{dx} - 2xy = 0 \)", "\( (x^2 + y^2)\frac{dy}{dx} + 2xy = 0 \)", "\( x\frac{dy}{dx} - y = 0 \)", "\( x\frac{dy}{dx} + y = 0 \)"],
    "answer_en": "\( (x^2 + y^2)\frac{dy}{dx} - 2xy = 0 \)",
    "answer_hi": "\( (x^2 + y^2)\frac{dy}{dx} - 2xy = 0 \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the value of \( \int_0^1 x^2(1-x)^3 \, dx \)?",
    "question_hi": "\( \int_0^1 x^2(1-x)^3 \, dx \) का मान क्या है?",
    "options_en": ["\( \frac{1}{60} \)", "\( \frac{1}{30} \)", "\( \frac{1}{20} \)", "\( \frac{1}{10} \)"],
    "options_hi": ["\( \frac{1}{60} \)", "\( \frac{1}{30} \)", "\( \frac{1}{20} \)", "\( \frac{1}{10} \)"],
    "answer_en": "\( \frac{1}{60} \)",
    "answer_hi": "\( \frac{1}{60} \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If \( y = \sin(m\sin^{-1}x) \), then \( (1-x^2)y'' - xy' + m^2y = \)",
    "question_hi": "यदि \( y = \sin(m\sin^{-1}x) \), तो \( (1-x^2)y'' - xy' + m^2y = \)",
    "options_en": ["0", "1", "m", "-m"],
    "options_hi": ["0", "1", "m", "-m"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The maximum value of \( f(x) = x^3 - 3x^2 + 2 \) in [0, 2] is:",
    "question_hi": "अंतराल [0, 2] में \( f(x) = x^3 - 3x^2 + 2 \) का अधिकतम मान है:",
    "options_en": ["2", "0", "1", "-2"],
    "options_hi": ["2", "0", "1", "-2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the value of \( \int_0^{\pi} \frac{x}{1+\sin x} \, dx \)?",
    "question_hi": "\( \int_0^{\pi} \frac{x}{1+\sin x} \, dx \) का मान क्या है?",
    "options_en": ["\( \pi \)", "\( \frac{\pi}{2} \)", "\( 2\pi \)", "\( \frac{\pi}{4} \)"],
    "options_hi": ["\( \pi \)", "\( \frac{\pi}{2} \)", "\( 2\pi \)", "\( \frac{\pi}{4} \)"],
    "answer_en": "\( \pi \)",
    "answer_hi": "\( \pi \)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The area bounded by the curves \( y = x^2 \) and \( y = 2 - x^2 \) is:",
    "question_hi": "वक्रों \( y = x^2 \) और \( y = 2 - x^2 \) से घिरा क्षेत्रफल है:",
    "options_en": ["\( \frac{8}{3} \)", "\( \frac{4}{3} \)", "\( \frac{16}{3} \)", "\( \frac{32}{3} \)"],
    "options_hi": ["\( \frac{8}{3} \)", "\( \frac{4}{3} \)", "\( \frac{16}{3} \)", "\( \frac{32}{3} \)"],
    "answer_en": "\( \frac{8}{3} \)",
    "answer_hi": "\( \frac{8}{3} \)",
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