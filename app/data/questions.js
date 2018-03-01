'use strict';

/**
 * This array represents the data source of the quiz.
 */
var questions = [
    {
        questionTextValue: "To find highest number in an array, method to be used is",
        level: 1,
        answers: [
            {
                id: 1,
                answerTextValue: "Math.highest",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "Math.max()",
                isCorrect: true
            },
            {
                id: 3,
                answerTextValue: "Math.largest",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "Math.cal(high)",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "Which operator is used to assign a value to a variable?",
        level: 1,
        answers: [
            {
                id: 1,
                answerTextValue: "=",
                isCorrect: true
            },
            {
                id: 2,
                answerTextValue: "*",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "-",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "x",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How do you declare a JavaScript variable?",
        level: 2,
        answers: [
            {
                id: 1,
                answerTextValue: "v carName;",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "variable carName;",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "var carName;",
                isCorrect: true
            },
            {
                id: 4,
                answerTextValue: "carName;\n",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "Inside which HTML element do we put the JavaScript?",
        level: 3,
        answers: [
            {
                id: 1,
                answerTextValue: "<scripting>",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "<js>",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "<javascript>",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "<script>",
                isCorrect: true
            }
        ]
    },
    {
        questionTextValue: "How do you write \"Hello World\" in an alert box?",
        level: 3,
        answers: [
            {
                id: 1,
                answerTextValue: "msgBox(\"Hello World\");",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "alert(\"Hello World\");",
                isCorrect: true
            },
            {
                id: 3,
                answerTextValue: "msg(\"Hello World\");",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "alertBox(\"Hello World\");",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How do you create a function in JavaScript?",
        level: 4,
        answers: [
            {
                id: 1,
                answerTextValue: "function:myFunction()",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "function myFunction()",
                isCorrect: true
            },
            {
                id: 3,
                answerTextValue: "function = myFunction()",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "function = myFunction",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How do you call a function named \"myFunction\"?",
        level: 4,
        answers: [
            {
                id: 1,
                answerTextValue: "call function myFunction()",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "myFunction",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "call myFunction()",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "myFunction()",
                isCorrect: true
            }
        ]
    },
    {
        questionTextValue: "How to write an IF statement in JavaScript?",
        level: 5,
        answers: [
            {
                id: 1,
                answerTextValue: "if (i === 5)",
                isCorrect: true
            },
            {
                id: 2,
                answerTextValue: "if i = 5 then",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "if i = 5",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "if i == 5 then",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        level: 5,
        answers: [
            {
                id: 1,
                answerTextValue: "if i <> 5",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "if i =! 5 then",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "if (i !== 5)",
                isCorrect: true
            },
            {
                id: 4,
                answerTextValue: "if (i <> 5)",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How does a WHILE loop start?",
        level: 6,
        answers: [
            {
                id: 1,
                answerTextValue: "while i = 1 to 10",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "while (i <= 10; i++)",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "while (i <= 10)",
                isCorrect: true
            },
            {
                id: 4,
                answerTextValue: "while i <= 10",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How does a FOR loop start?",
        level: 6,
        answers: [
            {
                id: 1,
                answerTextValue: "for (i = 0; i <= 5)",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "for (i <= 5; i++)",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "for i = 1 to 5",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "for (i = 0; i <= 5; i++)",
                isCorrect: true
            }
        ]
    },
    {
        questionTextValue: "How can you add a comment in a JavaScript?",
        level: 7,
        answers: [
            {
                id: 1,
                answerTextValue: "//This is a comment",
                isCorrect: true
            },
            {
                id: 2,
                answerTextValue: "\<\!--This is a comment-->",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "'This is a comment",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "#This is a comment",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "An array can be sorted in a reverse manner through method",
        level: 7,
        answers: [
            {
                id: 1,
                answerTextValue: "sort()",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "reverse()",
                isCorrect: true
            },
            {
                id: 3,
                answerTextValue: "rev.length()",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "sort.length()",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How do you round the number 7.25, to the nearest integer?",
        level: 8,
        answers: [
            {
                id: 1,
                answerTextValue: "Math.rnd(7.25)",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "rnd(7.25)",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "round(7.25)",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "Math.round(7.25)",
                isCorrect: true
            }
        ]
    },
    {
        questionTextValue: "How do you find the number with the highest value of x and y?",
        level: 8,
        answers: [
            {
                id: 1,
                answerTextValue: "ceil(x, y)",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "top(x, y)",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "Math.ceil(x, y)",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "Math.max(x, y)",
                isCorrect: true
            }
        ]
    },
    {
        questionTextValue: "What will the following code return: Boolean(10 > 9)",
        level: 9,
        answers: [
            {
                id: 1,
                answerTextValue: "NaN",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "false",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "true",
                isCorrect: true
            },
            {
                id: 4,
                answerTextValue: "undefined",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "Which event occurs when the user clicks on an HTML element?",
        level: 9,
        answers: [
            {
                id: 1,
                answerTextValue: "onmouseover",
                isCorrect: false
            },
            {
                id: 2,
                answerTextValue: "onmouseclick",
                isCorrect: true
            },
            {
                id: 3,
                answerTextValue: "onchange",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "onclick",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "How can you detect the client's browser name?",
        level: 10,
        answers: [
            {
                id: 1,
                answerTextValue: "navigator.appName",
                isCorrect: true
            },
            {
                id: 2,
                answerTextValue: "client.navName",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "browser.name",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "client.browser.name",
                isCorrect: false
            }
        ]
    },
    {
        questionTextValue: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        level: 10,
        answers: [
            {
                id: 1,
                answerTextValue: "<script src=\"xxx.js\">",
                isCorrect: true
            },
            {
                id: 2,
                answerTextValue: "<script href=\"xxx.js\">",
                isCorrect: false
            },
            {
                id: 3,
                answerTextValue: "<script name=\"xxx.js\">",
                isCorrect: false
            },
            {
                id: 4,
                answerTextValue: "<script location=\"xxx.js\">",
                isCorrect: false
            }
        ]
    }
];
