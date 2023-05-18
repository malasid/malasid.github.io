  function memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";pesanwhatsapp = pesanWA.innerHTML;setTimeout(mulaikonten,300)}
  function fthilang(){fotoakhir.style="display:inline-flex;opacity:.5;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotoakhir.style.animation="rto .8s infinite alternate";}
  
  function tombol(){Tombol.style="opacity:1;transform: scale(1);margin-top:15px";
                    if(jikakuis==0){Bn.style.display="none";ftom=1;} 
                    if(jikakuis==1){tmbl.innerHTML=tmbl2.innerHTML;Bn.style="margin:12px 0 12px 12px";ftom=2;}}
  
  function multifungsi(){if(ftom==1){dilanjut();} if(ftom==2){diterima();} if(ftom==5){menuju();}}
  
  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  vketik1b=kalimata.innerHTML;kalimata.innerHTML = "";
  vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
  vketik3=kalimatc.innerHTML;kalimatc.innerHTML = "";
  vketik4=kalimatd.innerHTML;kalimatd.innerHTML = "";
  
  var aa=0,vketik1;
function mulaiketik1() {wallpaper.style="transform: scale(1.5);";if(aa<vketik1.length){kalimat.innerHTML += vketik1.charAt(aa);aa++;setTimeout(mulaiketik1,47);}}

var ab=0,vketik1b;
function fmulaiketik1b(){
  wallpaper.style="transform: scale(1);";
  fotoakhir.src=fotoakhir1.src;
  kalimat.innerHTML="";
}
function mulaiketik1b() {if(ab<vketik1b.length){kalimata.innerHTML += vketik1b.charAt(ab);ab++;setTimeout(mulaiketik1b,45);}}
  
  var ac=0,vketik2;
function fmulaiketik2(){
  wallpaper.style="transform: scale(1.5);";
  fotoakhir.src=fotoakhir2.src;
  kalimata.innerHTML="";
}
function mulaiketik2() {if(ac<vketik2.length){kalimatb.innerHTML += vketik2.charAt(ac);ac++;setTimeout(mulaiketik2,46);}}

  var ad=0,vketik3;
function fmulaiketik3(){
  wallpaper.style="transform: scale(1);";
  fotoakhir.src=fotoakhir3.src;
  kalimatb.innerHTML="";
}
function mulaiketik3() {if(ad<vketik3.length){kalimatc.innerHTML += vketik3.charAt(ad);ad++;setTimeout(mulaiketik3,40);}}

  var ae=0,vketik4;
function fmulaiketik4(){
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=1;setTimeout(ftmuncul,300);
}
function mulaiketik4() {if(ae<vketik4.length){kalimatd.innerHTML += vketik4.charAt(ae);ae++;setTimeout(mulaiketik4,45);}if(ae==vketik4.length){tombol();}}
  
  function dilanjut(){wallpaper.style="transform: scale(1);";setTimeout(otomatis2,500);fthilang();ftganti=3;setTimeout(ftmuncul,400);Tombol.style="opacity:0;transform: scale(.1);";jikakuis=1;setTimeout(tombol,1000);}
  
  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {
  kalimat.innerHTML = kalimat2.innerHTML;
  kalimat.style="";kalimata.innerHTML="";kalimatd.innerHTML="";
  kalimatb.style="display:none";kalimatc.style="display:none";
  }

  function otomatis3() {befanimkata3();setTimeout(animkata3,700);} 
  function befanimkata3(){kalimat.style="";kalimatb.style="";kalimatc.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";kalimatc.style="opacity:0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1;font-size:20px;transition:none";kalimatb.style="opacity:1;font-size:17px;font-weight:400;transition:none";}
  
  function sbakhir(){Bn.style.display="none";setTimeout(stakhir,500);} function stakhir(){tmbl.innerHTML="💌 Kirim";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function diterima(){
      setInterval(createHeart,200);
      fthilang();ftganti=2;setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(1)";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all 1s ease;margin-top:0;";
      Tombol.style="opacity:0;transform: scale(.1);";
      Content.style = "transition:all 1s ease;opacity:1;margin-top:7vh;";
      setTimeout(sbakhir,1000);otomatis3();
   }
  
  async function ditolak(){
  	if(fungsi==1){
  	Tombol.style="transition:all .3s ease;opacity:0";await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});tombol();
  	}
   }