'use strict';

angular.module('myApp.quiz_controller', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/quiz_view', {
            templateUrl: 'quiz_view/quiz_view.html',
            controller: 'quiz_controller'
        });
    }])

    .controller('quiz_controller', ['$scope', '$window', function ($scope, $window) {
        var MAX_LEVELS = 10;
        var TIME_PER_LEVEL = 11; // seconds
        var countdown;

        /**
         * This is the first method that is called when Angular initializes the component.
         */
        $scope.init = function () {
            $scope.isQuizStarted = false;
        };

        /**
         * This method represents the entry point for starting the quiz.
         */
        $scope.startQuiz = function () {
            $scope.isQuizStarted = true;
            $scope.currentLevel = 1;
            $scope.currentQuestion = getRandomQuestionForLevel($scope.currentLevel);
            resetLevelIndicator();
            highlightCurrentLevel($scope.currentLevel);
            startCountdown();
            enableHelpOptionButtons();
        };

        /**
         * Gets a random question for the given level from the array of questions.
         * @param level - the level for which to get a question
         */
        function getRandomQuestionForLevel(level) {
            var questionsForLevel = getQuestionsForLevel(level);
            var randomIndex = Math.floor((Math.random() * questionsForLevel.length));
            return questionsForLevel[randomIndex];
        }

        /**
         * Gets all the questions for the given level from the array of questions.
         * @param level - the level for which to get the questions
         */
        function getQuestionsForLevel(level) {
            return $window.questions.filter(function (question) {
                return question.level === level;
            });
        }

        /**
         * Highlights the current level by changing its CSS class.
         * @param level - the level that has to be highlighted
         */
        function highlightCurrentLevel(level) {
            $('#level_' + (level - 1)).removeClass('current-level');
            $('#level_' + level).addClass('current-level');
        }

        /**
         * Resets the highlighted levels by removing the appropriate CSS class.
         */
        function resetLevelIndicator() {
            for (var level = 1; level <= MAX_LEVELS; level++) {
                $('#level_' + level).removeClass('current-level');
            }
        }

        /**
         * Validates the answer the user has chosen by clicking on one of the four buttons.
         * @param answerIndex - the index of the button on which the user has clicked on
         */
        $scope.validateAnswer = function (answerIndex) {
            if ($scope.currentQuestion.answers[answerIndex].isCorrect) {
                goToNextLevel();
            } else {
                endQuiz('You lost. \nWould you like to start a new quiz?');
            }
        };

        /**
         * Passes to the next level by loading a new question, highlighting the appropriate level and restarting the
         * countdown.
         */
        function goToNextLevel() {
            $scope.currentLevel++;

            if ($scope.currentLevel <= MAX_LEVELS) {
                highlightCurrentLevel($scope.currentLevel);
                $scope.currentQuestion = getRandomQuestionForLevel($scope.currentLevel);
                startCountdown();
            } else {
                endQuiz('Congratulations, you won. \nWould you like to start a new quiz?');
            }
        }

        /**
         * Ends the quiz.
         * @param message - the message that has to be displayed in the alert.
         */
        function endQuiz(message) {
            resetCountdown();

            var startOver = confirm(message);
            if (startOver === true) {
                $scope.startQuiz();
            } else {
                redirectToMainView();
            }
        }

        /**
         * Redirects to the MainView.
         */
        function redirectToMainView() {
            $window.location.href = '#!/main_view';
        }

        /**
         * Start the countdown.
         */
        function startCountdown() {
            enableAllAnswerButtons();

            // Reset previous countdown instance.
            if (countdown !== null && countdown !== undefined) {
                $('#remainingTimeForLevel').text('00:00');
                resetCountdown();
            }

            var remainingTimeForLevel = TIME_PER_LEVEL;
            countdown = setInterval(function () {
                remainingTimeForLevel--;
                $('#remainingTimeForLevel').text('00:' + (remainingTimeForLevel < 10 ? '0' : '') + remainingTimeForLevel);
                if (remainingTimeForLevel < 0) {
                    endQuiz('Time expired. You lost. \nWould you like to start a new quiz?')
                }

                if (remainingTimeForLevel < 4) {
                    $('#remainingTimeForLevel').css('color', 'red');
                } else {
                    $('#remainingTimeForLevel').css('color', 'black');
                }
            }, 1000);
        }

        function resetCountdown() {
            clearInterval(countdown);
        }

        /**
         * Handles the click on 50/50 helper option.
         */
        $scope.useFiftyFiftyOption = function () {
            var wrongAnswers = getWrongAnswersForQuestion($scope.currentQuestion);
            var possibleCombinations = getAnswersCombinationsToDisable(wrongAnswers);
            var randomCombinationIndex = Math.floor((Math.random() * 3));
            var firstAnswerToDisable = possibleCombinations[randomCombinationIndex].charAt(0);
            var secondAnswerToDisable = possibleCombinations[randomCombinationIndex].charAt(possibleCombinations[randomCombinationIndex].length - 1);

            $('#answer_' + firstAnswerToDisable).prop('disabled', true);
            $('#answer_' + secondAnswerToDisable).prop('disabled', true);
            $('#fifty_fifty').prop('disabled', true);
        };

        /**
         * Determines what are the wrong answers for a given question.
         * @param question - the question for which to determine the wrong answers
         * @returns {Array} - an Array of wrong answers
         */
        function getWrongAnswersForQuestion(question) {
            var wrongAnswers = [];
            question.answers.forEach(function (answer) {
                if (!answer.isCorrect) {
                    wrongAnswers.push(answer);
                }
            });

            return wrongAnswers;
        }

        /**
         * Creates combinations of 2 answers that can be disabled once the 50/50 helper option has been used.
         * @param wrongAnswers - the Array of answers from which to build the combinations
         * @returns {Array} - an Array of combinations i.e. ["1 2", "2 3"]
         */
        function getAnswersCombinationsToDisable(wrongAnswers) {
            var possibleCombination = [];
            for (var i = 0; i < wrongAnswers.length - 1; i++) {
                for (var j = i + 1; j < wrongAnswers.length; j++) {
                    possibleCombination.push(wrongAnswers[i].id + ' ' + wrongAnswers[j].id);
                }
            }

            return possibleCombination;
        }

        /**
         * Enables all the buttons that are used to display the answers.
         */
        function enableAllAnswerButtons() {
            for (var index = 1; index <= 4; index++) {
                $('#answer_' + index).prop('disabled', false);
            }
        }

        /**
         * Enables all the buttons that are part of the helper options.
         */
        function enableHelpOptionButtons() {
            $('#fifty_fifty').prop('disabled', false);
            $('#audience_help').prop('disabled', false);
            $('#friend_help').prop('disabled', false);
        }

        /**
         * Handles the click on 'Ask the audience' helper option.
         */
        $scope.useAudienceHelpOption = function () {
            var pr1 = Math.floor((Math.random() * 100));
            var pr2 = Math.floor((Math.random() * (100 - pr1)));
            var pr3 = Math.floor((Math.random() * (100 - pr1 - pr2)));
            var pr4 = 100 - pr1 - pr2 - pr3;

            var max = Math.max(pr1, Math.max(pr2, Math.max(pr3, pr4)));
            var correctAnswer = getCorrectAnswerForQuestion($scope.currentQuestion);
            var wrongAnswersPercentage = getWrongAnswersPercentage(pr1, pr2, pr3, pr4);

            alert(buildAudienceResult(correctAnswer, wrongAnswersPercentage, max));
            $('#audience_help').prop('disabled', true);
        };

        /**
         * Creates an Array of percentages for the wrong answers.
         * @param pr1
         * @param pr2
         * @param pr3
         * @param pr4
         * @returns {Array} an Array of numbers
         */
        function getWrongAnswersPercentage(pr1, pr2, pr3, pr4) {
            var allPercentages = [pr1, pr2, pr3, pr4];
            var max = Math.max(pr1, Math.max(pr2, Math.max(pr3, pr4)));
            var maxPercentageIndex = allPercentages.indexOf(max);
            if (maxPercentageIndex > -1) {
                allPercentages.splice(maxPercentageIndex, 1);
            }

            return allPercentages;
        }

        /**
         * Builds the message that must be displayed on the screen when the 'Ask the audience' helper option is used.
         * @param correctAnswer
         * @param wrongAnswersPercentage
         * @param correctAnswerPercentage
         * @returns {string}
         */
        function buildAudienceResult(correctAnswer, wrongAnswersPercentage, correctAnswerPercentage) {
            var result = 'The audience thinks the correct answer is \'' + correctAnswer.answerTextValue + '\'.';

            switch (correctAnswer.id) {
                case 1: {
                    result += '\nA: ' + correctAnswerPercentage;
                    result += '\nB: ' + wrongAnswersPercentage[0];
                    result += '\nC: ' + wrongAnswersPercentage[1];
                    result += '\nD: ' + wrongAnswersPercentage[2];
                    break;
                }

                case 2: {
                    result += '\nA: ' + wrongAnswersPercentage[0];
                    result += '\nB: ' + correctAnswerPercentage;
                    result += '\nC: ' + wrongAnswersPercentage[1];
                    result += '\nD: ' + wrongAnswersPercentage[2];
                    break;
                }

                case 3: {
                    result += '\nA: ' + wrongAnswersPercentage[0];
                    result += '\nB: ' + wrongAnswersPercentage[1];
                    result += '\nC: ' + correctAnswerPercentage;
                    result += '\nD: ' + wrongAnswersPercentage[2];
                    break;
                }

                case 4: {
                    result += '\nA: ' + wrongAnswersPercentage[0];
                    result += '\nB: ' + wrongAnswersPercentage[1];
                    result += '\nC: ' + wrongAnswersPercentage[2];
                    result += '\nD: ' + correctAnswerPercentage;
                    break;
                }
            }

            return result;
        }

        /**
         * Handles the click on 'Phone a friend' helper option.
         */
        $scope.useFriendHelpOption = function () {
            var correctAnswer = getCorrectAnswerForQuestion($scope.currentQuestion);
            alert('I think the correct answer is \'' + correctAnswer.answerTextValue + '\'.');
            $('#friend_help').prop('disabled', true);
        };

        /**
         * Gets the correct answer for a given question.
         * @param question - the question for which to determine the correct answer.
         */
        function getCorrectAnswerForQuestion(question) {
            for (var index = 0; index < question.answers.length; index++) {
                if (question.answers[index].isCorrect) {
                    return question.answers[index];
                }
            }
        }
    }]);
