async function inipesan(){nama = "kamu";window.nama = nama;mulainama();}  

const box = document.getElementById('pergeseran');
const directChildren = box.children.length;
console.log('Script ini dibuat oleh: Rayys | IG: @rayyarrr');
console.log('Lihat Script HTML Lainnya di www.malas.id');
console.log('Total Slide: ', directChildren);
totalPesan = directChildren;

var date = new Date();
var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hours = date.getHours();
var minutes = date.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (hours < 10) {hours = "0" + hours;}
if (minutes < 10) {minutes = "0" + minutes;}

var day = days[date.getDay()];
var dateNum = date.getDate();
var month = months[date.getMonth()];
var year = date.getFullYear();

console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);
// Dapatkan elemen yang ingin ditambahkan watermark
var element = document.getElementById("Content");

// Buat elemen baru untuk menampung watermark
var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = day + ", " + dateNum + " " + month + " " + year;
watermark.style = "color:white;opacity:.3;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:2";

// Tambahkan elemen watermark ke dalam elemen utama
element.appendChild(watermark);

aktigeser=0;thisgeser=1;
document.getElementById("bodyblur").onclick = function() {multifungsi()}

function multifungsi(){
  if(aktigeser==1){
    if(thisgeser==totalPesan){aksiakhir()}
    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();
    if(thisgeser<4){
       ftganti++;
       fthilang();
    } else if(thisgeser==4){
       ftganti=0;
       fthilang();
    } else if(thisgeser==6){
       ftganti=3;
       fthilang();
    } else if(thisgeser==7){
       ftganti=4;
       fthilang();
    }
  }
  if(thisgeser==100){Tombol.style="";setTimeout(aksibalas,150);}
}

document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .8s ease;transform:scale(25);opacity:0";
        ftAwal.style="opacity:0";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,600);
      }
    }
    function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
    setTimeout(inipesan,200);audio.play();
  }
  
  async function mulainama() {
    setTimeout(pgmuncul,200);
    ftmuncul();
  }

  function hsementara(){
    //ketgeser.style="position:relative;";
    Tombol.style="";
    thisgeser+=1;aktigeser=0;setTimeout(munculkembali,500)
  }
  function munculkembali(){
    if(thisgeser<totalPesan){
      //ketgeser.style="position:relative;transform:scale(1);opacity:.7";
      Tombol.style="opacity:1;transform: scale(1)";
      aktigeser=1;
    }
    if(thisgeser==50){tmbl.innerHTML = "💌 Balas";Tombol.style="opacity:1;transform: scale(1)";thisgeser=100;}
    if(thisgeser==totalPesan){setInterval(berjatuhan,250);}
  }
  
  function aksiakhir(){
  	   pergeseran.style="position:relative;";
         //ketgeser.style="position:relative";
         Tombol.style="";
         setTimeout(aksibalas,500);
  }
  
  function kalimatakhir(){
  	new TypeIt("#kalimat", {
      strings: ["" + katakata], startDelay: 50, speed: 54, cursor: true,
      afterComplete: function(){
      	kalimat.innerHTML = katakata;
          setInterval(berjatuhan,250);
          tmbl.innerHTML = "💌 Balas";thisgeser=100;
          Tombol.style="opacity:1;transform: scale(1)";
      },}).go();
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti<=10){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transform:scale(0)";if(ftganti<10){setTimeout(ftmuncul,250)}}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function pgmuncul(){pergeseran.style="position:relative;opacity:1;transform:scale(1);";setTimeout(munculkembali,500)}
  function bqmuncul(){Content.style = "opacity:1;margin-top:8vh";fotostiker.style="display:none";pergeseran.style="display:none";Tombol.style="";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:5vh;transform: scale(1);";setTimeout(kalimatakhir,200);ftganti=0;fthilang();}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
