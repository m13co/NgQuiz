(function () {

    angular
        .module("quizPortal")
        .controller("portalCtrl", PortalController);


    function PortalController() {
        var vm = this;
        vm.loadEl = loadEl;
        vm.loadTq = loadTq;

        function loadEl(){
            window.location = "E-LearningQuiz/indexEl.html";


        }

        function loadTq(){
            window.location = "TurtleQuiz/indexTq.html";


        }}


})();