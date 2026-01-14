// script.js
const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

function sellAccount(){
  window.open("https://wa.me/2001211056530?text=اريد%20بيع%20حساب%20ببجي");
}

function buyAccount(){
  window.open("https://wa.me/2001211056530?text=اريد%20شراء%20حساب%20ببجي");
}

function todayKey(){
  return "spin_" + new Date().toISOString().slice(0,10);
}

function spin(){
  const id = playerId.value;
  const name = playerName.value;

  if(!id || !name){
    result.innerText = "اكتب البيانات";
    return;
  }

  if(localStorage.getItem(todayKey())){
    result.innerText = "لفتك خلصت النهارده";
    return;
  }

  localStorage.setItem(todayKey(),"done");

  const angle = 360*5 + Math.floor(Math.random()*360);
  wheel.style.transform = `rotate(${angle}deg)`;

  setTimeout(()=>{
    const prizes = ["6600 شدة","660 شدة","2000 جنيه","لا شيء"];
    const prize = prizes[Math.floor(Math.random()*prizes.length)];
    result.innerText = prize === "لا شيء" ? "حظ أوفر" : "مبروك 🎉 " + prize;

    const history = JSON.parse(localStorage.getItem("history")||"[]");
    history.push({id,name,prize,date:new Date().toLocaleString()});
    localStorage.setItem("history",JSON.stringify(history));
  },3000);
}

function share(){
  navigator.share?.({
    title:"The Stor Gaming",
    url:location.href
  });
}
