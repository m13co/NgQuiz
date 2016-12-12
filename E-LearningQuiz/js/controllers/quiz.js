/**
 * Created by marco on 05.12.2016.
 */
(function () {
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);
        QuizController.$inject = ['quizMetrics', 'DataService'];
        function QuizController(quizMetrics, DataService) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = DataService;
            vm.activeQuestion = 0;
            vm.questionAnswered = questionAnswered;
            vm.setActiveQuestion = setActiveQuestion;
            vm.selectAnswer = selectAnswer;
            vm.finaliseAnswers = finaliseAnswers;
            vm.goHome = goHome;
            vm.error = false;
            vm.finalise = false;


            var numQuestionsAnswered = 0;

            function setActiveQuestion(index) {
                if(index === undefined){
                    var breakOut = false;
                    var quizLength = DataService.quizQuestions.length -1;

                    while(!breakOut)
                    {
                        vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
                        if(vm.activeQuestion === 0){
                            vm.error =true;
                        }

                        if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                            breakOut = true;
                        }
                    }
                } //end if undefiend
                else{
                    vm.activeQuestion = index;

                }




            }


          /*  function questionAnswered() {

                var quizLength = DataService.quizQuestions.length;

                if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){

                        //finalise quiz
                        for(var i =0; i <quizLength; i++){
                            if(DataService.quizQuestions[i].selected === null){
                                setActiveQuestion(i);
                                return;

                            }
                        }
                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }


                }
                vm.setActiveQuestion()
            }
*/



            function questionAnswered(){
                // set quizLength variable to keep code clean
                var quizLength = DataService.quizQuestions.length;

                numQuestionsAnswered = 0;
                //For loop added to loop through all questions and recount questions
                //that have been answered. This avoids infinite loops.
                for(var x = 0; x < quizLength; x++){
                    if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                        numQuestionsAnswered++;
                       if(numQuestionsAnswered >= quizLength){
                            // final check to ensure all questions are actuall answered
                            for(var i = 0; i < quizLength; i++){
                                /*
                                 * if find a question that is not answered, set it to
                                 * active question then return from this function
                                 * to ensure finalise flag is not set
                                 */
                               if(DataService.quizQuestions[i].selected === null){
                                    setActiveQuestion(i);
                                    return;
                                }
                            }

                            // set finalise flag and remove any existing warnings
                            vm.error = false;
                            vm.finalise = true;
                            return;
                        }
                    }
                }

                /*
                 * There are still questions to answer so increment to next
                 * unanswered question using the setActiveQuestion method
                 */
                vm.setActiveQuestion();
            }


            function selectAnswer(index) {
                DataService.quizQuestions[vm.activeQuestion].selected = index;
            }


            function finaliseAnswers() {
                vm.finalise = false;
                numQuestionsAnswered = 0;
                vm.activeQuestion =0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz", false);
                quizMetrics.changeState("results", true);
            }

            function goHome() {
                quizMetrics.changeState("quiz", false);

               // quizMetrics.numCorrect = 0;

               /* for(var i= 0; i < DataService.quizQuestions.length; i++){
                    var data = DataService.quizQuestions[i];
                    data.selected = null;
                    data.correct = null;

                }*/


            }
        }


})();