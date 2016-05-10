function createImg(data){
  var html = $(".showImg").html();
  var content = tmpl(html,{data:data});
  $(".boxImg").append(content);	
};



$(function() {

  function showImg(e) {

    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: "mount rainier",
      tagmode: "any",
      format: "json"
    }).done(function( data ) {
     createImg(data);
   });
    e.preventDefault();

  };



// Прототипирование

  $("#edit-submit").one("click",showImg);

  function Human(name,age,sex,height,weight){
    this.name=name||"no name";
    this.age=age||0;
    this.sex=sex||"no sex" ; 
    this.height=height||0;
    this.weight=weight||0;

  };

  function Worker(){
    this.placeWork="";
    this.salary=0;
  }

  var newHuman = new Human("Evgeniy",25,"man",186,95);
  Worker.prototype=newHuman;

  Worker.prototype.works=function(placeWork,salary){
    this.placeWork=placeWork; 
    this.salary=salary;
  }

  var Worker1= new Worker();
  var Worker2= new Worker();
  var Worker3= new Worker();

  Worker1.works("MS",5000);
  Worker2.works("IT",15000);
  Worker3.works("FT",10000);

  console.log(Worker1,Worker2,Worker3);
  
  function Student(){
    this.placeStudy="";
    this.scholarship=0;
  }

  Student.prototype=newHuman;

  Student.prototype.watchTVshows=function(placeStudy,scholarship){
     this.placeStudy=placeStudy;
    this.scholarship=scholarship;
  }

  var student1= new Student();
  var student2= new Student();
  var student3= new Student();

  student1.watchTVshows("ZNU",500);
  student2.watchTVshows("ZNTU",700);
  student3.watchTVshows("CPU",600);

  console.log(student1,student2,student3);



});