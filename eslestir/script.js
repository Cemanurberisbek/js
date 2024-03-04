let takimlar = [
    "footballLogos/besiktas.png",
    "footballLogos/fenerbahce.png",
    "footballLogos/galatasaray.png",
    "footballLogos/trabzonspor.png",
    "footballLogos/milan.png",
    "footballLogos/inter.png",
    "footballLogos/realmadrid.png",
    "footballLogos/barcelona.png",
    "footballLogos/napoli.png",
    "footballLogos/liverpool.png"
  ];
  
  function oyna() {
    
    let takim1 = Math.floor(Math.random() * takimlar.length);
    let takim2 = Math.floor(Math.random() * takimlar.length);
    let takim3 = Math.floor(Math.random() * takimlar.length);

  
    document.getElementById("resim1").src = takimlar[takim1];
    document.getElementById("resim2").src = takimlar[takim2];
    document.getElementById("resim3").src = takimlar[takim3];
  
    if (takim1 == takim2 && takim2 == takim3) {
      document.getElementById("sonuc").innerHTML =
        "Şampiyon belli!!!";
    } else {
      document.getElementById("sonuc").innerHTML = "Tekrar deneyin!";
    }
  }