'use strict';
// // -------------------------------------------------------
var questions =[
{
    "question":"Из каких основных модулей состоит авиационный двигатель?",
    "answers":{
        "1":["Входное устройство",true],
        "2":["Карданный вал",false],
        "3":["Осевой компрессор",true],
        "4":["Камера сгорания",true],
        "5":["Задний полускручиваемый торсион",false],
        "6":["Турбина",true],
        "7":["Осецентробежный нагнетатель отработанных газов",false],
        "8":["Вакуумный парогенератор",false],
        "9":["Выходное устройство",true],
        "10":["Двуконтурный кожух обтекания",false],
    }
},
{
 "question":"Какую функцию в АД выполняют топливные форсунки?",
 "answers":{
    "1":["Откачивание топлива из топливных баков",false],
    "2":["Нагнетание топлива в бак",false],
    "3":["Розпыление топлива",true],
    "4":["Образование топливо-воздушной смеси",true],
    "5":["Воспламенение топлива",false],
    "6":["Обеспечение двигателя потребным количеством топлива",true],
    

},
},
{
   "question":"Какое количество двигателей устанавливается на самый большой и мощный транспортный самолёт в мире,созданный киевским КБ Антонова ?",
   "answers":{
    "1":["Три",false],
    "2":["Два",false],
    "3":["Одиннадцать",false],
    "4":["Восемь",false],
    "5":["Семь",false],
    "6":["Шесть",true],
},
}
];
localStorage.setItem("questions", JSON.stringify(questions));


$(function() {
    var objQuestions = JSON.parse(localStorage.getItem("questions"));
    
    var html = $(".test").html();
    var content = tmpl(html,{data:objQuestions});
    $(".interview").prepend(content);  

    $(".check").click(function(event){
        testResult(); 
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form') 
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });
            $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
                );
            $('input:checkbox').removeAttr('checked');
            $(".rezult").remove(); 
        });
            event.preventDefault();
        });
    

    function testResult() {
        var rezult=0;
        var inputs = "";

        inputs = document.interview.elements;
        var counter=0;
        for(var j=0; j<objQuestions.length; j++){
            var intermedResult=0;
            var numberAnswers=weight(j);
            var answerWeight = (Math.round((1/numberAnswers)*100)/100);
            var numberChecked=0;
            for (var z=1; z<(Object.keys(objQuestions[j].answers).length)+1; z++){
                var checked = inputs[counter].checked;
                if(checked)
                    numberChecked++;
                if(checked && objQuestions[j].answers[z][1])
                   intermedResult+=answerWeight;  
               counter++;
           }
           if(numberChecked<=numberAnswers){
               rezult+=intermedResult;
           }

       }
       rezult=( Math.round(rezult*100/2.99)+"%");
       $("#modal_form").append("<div class='rezult'>Ваш результат:"+rezult+"</div>"); 
   };
   function weight(j){
    var numberAnswers=0;
    for (var z=1; z<(Object.keys(objQuestions[j].answers).length)+1; z++){
        if(objQuestions[j].answers[z][1])
           numberAnswers++;  
   }
   return numberAnswers;
}


})


