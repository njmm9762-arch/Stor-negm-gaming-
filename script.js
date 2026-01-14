const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

function todayKey(){
  return "spin_" + new Date().toISOString().slice(0,10);
}

function spinWheel(){
  if(localStorage.getItem(todayKey())){
    result.innerText = "لفتك خلصت النهارده، اتعوض بكرة";
    return;
  }

  const id = document.getElementById("playerId").value;
  const name = document.getElementById("playerName").value;
  if(!id || !name){
    result.innerText = "اكتب الـ ID والاسم";
    return;
  }

  localStorage.setItem(todayKey(),"done");

  const angle = 360*6 + 270; // حركة العجلة
  wheel.style.transform = `rotate(${angle}deg)`;

  setTimeout(()=>{
    result.innerText = "حظ أوفر 😄";
  },3000);
}

function sellAccount(){
  window.open("https://wa.me/2001211056530?text=اريد%20بيع%20حساب","_blank");
}

function buyAccount(){
  window.open("https://wa.me/2001211056530?text=اريد%20شراء%20حساب","_blank");
}

function shareSite(){
  let count = localStorage.getItem("shareCount");
  count = count ? parseInt(count)+1 : 1;
  localStorage.setItem("shareCount", count);

  if(count >= 50){
    result.innerText = "🔥 مبروك! حظك اتحسن بعد 50 مشاركة";
  } else {
    result.innerText = `شاركت ${count} مرة من 50`;
  }

  const siteLink = "https://njmm9762-arch.github.io/Stor-negm-gaming-/";
  if(navigator.share){
    navigator.share({
      title: "The Stor Gaming",
      text: "جرب عجلة الحظ في The Stor Gaming 🔥",
      url: siteLink
    });
  } else {
    window.open(`https://wa.me/?text=جرب%20موقع%20The%20Stor%20Gaming%20🔥%0A${siteLink}`, "_blank");
  }
}
