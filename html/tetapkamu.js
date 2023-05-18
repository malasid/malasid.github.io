function memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";setTimeout(mulaikonten,300)}
  function ftmuncul(){
    if(ftganti==0){fotoakhir.style="display:inline-flex;transition:all .7s ease;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotoakhir.src = fotoakhir5.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==3){fotoakhir.src = fotoAkhir.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  function fthilang(){fotoakhir.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotoakhir.style.animation="rto .8s infinite alternate";}
  
  function tombol(){Tombol.style="opacity:1;transform: scale(1);margin-top:15px";
                    if(jikakuis==0){ftom=1;} 
                    if(jikakuis==1){tmbl.innerHTML=tmbl2.innerHTML;ftom=2;}}
  
  function multifungsi(){if(ftom==1){dilanjut();} if(ftom==2){dibalas();} if(ftom==5){menuju();}}
  function dilanjut(){wallpaper.style="transform: scale(1);";setTimeout(otomatis2,500);fthilang();ftganti=3;setTimeout(ftmuncul,400);Tombol.style="opacity:0;transform: scale(.1);";jikakuis=1;setTimeout(tombol,1000);}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  vketik1b=kalimata.innerHTML;kalimata.innerHTML = "";
  var ab=0,vketik1b;function mulaiketik1() {if(ab<vketik1b.length){kalimata.innerHTML += vketik1b.charAt(ab);ab++;setTimeout(mulaiketik1,36);}if(ab==vketik1b.length){tombol();}}
  
  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {
  kalimat.innerHTML = kalimat2.innerHTML;
  kalimat.style="";kalimata.innerHTML="";
  kalimatb.innerHTML="";
  }

  function otomatis3() {befanimkata3();setTimeout(animkata3,700);} 
  function befanimkata3(){kalimat.style="";kalimatb.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML + balasan;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1;font-size:18px;transition:none";kalimatb.style="opacity:1;font-size:17px;font-weight:400;transition:none";}
  
  function stakhir(){tmbl.innerHTML="💌 Kirim";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function dibalas(){
      setInterval(createHeart,200);
      wallpaper.style="transform: scale(1)";
      Tombol.style="opacity:0;transform: scale(.1);";
      Content.style = "transition:all 1s ease;opacity:1;margin-top:7vh;";
      jawab();
   }