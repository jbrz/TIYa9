// Clocks Styling

$('.clock').css({
    'background-color':'black', 
    'background-width':'475px', 
    'background-height':'400px', 
    'border-radius':'15px', 
    'color':'white', 
    'font-family':'Lobster, cursive', 
    'font-size':'64px', 
    'margin-right':'auto',  
    'margin-bottom':'15px', 
    'margin-left':'auto', 
    'padding-top':'150px', 
    'padding-bottom':'150px', 
    'text-align':'center', 
    'width':'475px', 
    });
$('.clock1').css('margin-top', '15px')

// Clock 1

  // Clock Function
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
      if(nmin2<=9) nmin2="0"+nmin2;
      if(nsec2<=9) nsec2="0"+nsec2;
      var bgcolor = '#'+nhour2+nmin2+nsec2;
      $(".clock2").css("background-color", bgcolor );

    document.getElementById('clocktwo').innerHTML="#"+nhour2+nmin2+nsec2+"";
    }


  // Clock Color

    // Stole some cycle code - I DON'T GET HOW THIS WORKS.  TEACH ME, SENPAI.

      // $.fn.spectrum=function(arrayOfColors){
      //   return this.each(function(){
      //     var self=$(this);
      //     (function spectrum(){
      //       var hue=arrayOfColors.shift()
      //       arrayOfColors.push(hue)
      //       self.animate({ backgroundColor: hue }, 1000,spectrum)
      //     })();
      //   })
      // }
      // function randomHues(n){
      //   var res=[]
      //   for(var i=0;i<n;i++)
      //   res.push('rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')')
      //   return res
      // }
      // var hues=randomHues(60)
      // $(function(){
      //   $('.clock2').spectrum(hues);
      // })