$(function(){
    $('span').carusel();
    
});

$(function(){
    var html =$('#test').html();
    var data = {
      title:'Сайгак Евгений Сергеевич',
      photo:'<img src="img/myphoto.jpeg" alt="Моя фотка">',
      info:"Получил высшее образование в Запорожском национальном техническом университете по специальности - Авиационные двигатели и энергетические установки летательных аппаратов.Трудоустроился на предприятие АО Мотор Сич, на должность испытателя-механика АД.Разочаровался. Уволился."
    };

    var content = tmpl(html,data);
    $('body').append(content);

    
});