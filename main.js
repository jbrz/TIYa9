// Clock 1

    function GetClock(){
      var d=new Date();
      var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
      if(nmin<=9) nmin="0"+nmin
      if(nsec<=9) nsec="0"+nsec;

    document.getElementById('clockone').innerHTML=""+nhour+":"+nmin+":"+nsec+"";
    };

    window.onload=function(){
    GetClock();
    GetClock2();
    setInterval(GetClock,1000);
    setInterval(GetClock2,1000);
    };

// Clock 2

  // Clock Function
    function GetClock2(){
      var d2=new Date();
      var nhour2=d2.getHours(),nmin2=d2.getMinutes(),nsec2=d2.getSeconds();
      if(nmin2<=9) nmin2="0"+nmin2
      if(nsec2<=9) nsec2="0"+nsec2;

    document.getElementById('clocktwo').innerHTML="#"+nhour2+nmin2+nsec2+"";
    }

$('.clock').css({'background-color':'black', 'background-width':'500px', 'background-height':'350px', 'color':'white', 'width':'500px', 'margin-bottom':'25px', 'padding-top':'150px', 'padding-bottom':'150px', 'text-align':'center', 'font-size':'72px', 'font-family':'Cambria, script', 'font-weight':'bold'});