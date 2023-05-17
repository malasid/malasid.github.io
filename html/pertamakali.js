aktigeser=0;thisgeser=1;
document.getElementById("bodyblur").onclick = function() {
  if(aktigeser==1){
    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();
    /*if(thisgeser==4){
      wallpaper.style="transform: scale(2);";
      ftganti=1;fthilang();
    }
    if(thisgeser==5){
      wallpaper.style="transform: scale(1);";
      ftganti=0;fthilang();
    }*/
    if(thisgeser>1){
          if(thisgeser%2==0){wallpaper.style="transform: scale(1.5)";} else {wallpaper.style="transform: scale(1)";}
      }
    if(thisgeser>totalPesan){aksiakhir()}
  }
}

document.getElementById("loveIn").onclick = function() {
    //setTimeout(mulaiAwal,400);function mulaiAwal() {
      if(fungsiAwal==0){
        audio.play();
        loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
        ftAwal.style="opacity:0";
        wallpaper.style="transform: scale(1);";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,300);setTimeout(inipesan,400)
      }
    }
  function hsementara(){
    ketgeser.style="position:relative;";
    thisgeser+=1;aktigeser=0;setTimeout(munculkembali,500)
  }
  function munculkembali(){
    if(thisgeser<=totalPesan){
      ketgeser.style="position:relative;transform:scale(1);opacity:.8";
      aktigeser=1;
      if(thisgeser==totalPesan){ketgeser.innerHTML = "Klik untuk Lanjut!"}
    }
  }
  
  function aksiakhir(){
    ketgeser.style="position:relative";
    ftganti=9;ftmuncul();
    pergeseran.style="position:relative;margin-top:5vh;transform:scale(0);";
    iniakhir.style="opacity:0";setTimeout(bqmuncul,300);
  }
  
  function kalimatakhir(){
  	//fotostiker.style.animation="rto .8s infinite alternate";
  	setInterval(berjatuhan,250);
  	iniakhir.style="";iniakhir.innerHTML="";
  	new TypeIt("#kalimat", {
      strings: ["" + pesanAkhir1, "<br>" + pesanAkhir2], startDelay: 50, speed: 50, cursor: false,
      afterComplete: function(){
         setTimeout(mulaiketikA,300);
      },}).go();
  }
  
  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
  }
  
  async function mulainama() {
    /*fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,100);*/
    setTimeout(pgmuncul,200);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    if(ftganti==6){fotostiker.src = fotostiker6.src;}
    if(ftganti==7){fotostiker.src = fotostiker7.src;}
    if(ftganti!=1 && ftganti!=9 && ftganti!=10){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
    if(ftganti==11){fotostiker.src = fotostikerA2.src;}
    
    if(ftganti==1){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1);width:120px;height:120px;padding:none;background:none;box-shadow:none;border:none";}
    if(ftganti==9){fotostiker.style="display:inline-flex;opacity:0;transform:scale(1);padding:none;background:none;box-shadow:none;border:none";}
    if(ftganti==10){fotostiker.src = fotostikerA.src;fotostiker.style="display:inline-flex;opacity:1;transform:scale(1);width:120px;height:120px;padding:none;background:none;box-shadow:none;border:none";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transform:scale(0)";if(ftganti<=11){setTimeout(ftmuncul,250)} if(ftganti>=12){wallpaper.style="opacity:.7;transform: scale(2);";}}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function pgmuncul(){pergeseran.style="position:relative;margin-top:5vh;opacity:1;visibility:visible;transform:scale(1);";ftmuncul();setTimeout(munculkembali,500)}
  function bqmuncul(){pergeseran.style="display:none";ketgeser.style="display:none";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:0;transform: scale(1);";setTimeout(kalimatakhir,200);}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
 
  function mulaiketikA(){
  ftganti=10;ftmuncul();
  pesanAkhir.style="position:relative;opacity:1;visibility:visible;transform: scale(1)";
  new TypeIt("#pesanAkhir", {
  strings: ["" + pesanAkhir3], startDelay: 100, speed: 50, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
  	  fotostiker.style="width:150px;height:150px;display:inline-flex;opacity:1;transform:scale(1);padding:none;background:none;box-shadow:none;border:none";
        pesanAkhir.style.animation="rto .8s infinite alternate";
        fotostiker.style.animation="rto .8s infinite alternate";
  },}).go();
  }
  
  function otomatis(){halo.style.opacity="0"; kalimat.style="opacity:0"; setTimeout(otolanj,400);}
  function otolanj(){halo.style.opacity="1";kalimat.style="opacity:1";}

  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Good Morning ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore ";}
  else{ucapan = "Good Night ";}