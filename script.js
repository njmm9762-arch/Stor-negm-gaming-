const wheel = document.getElementById("wheel");
const msg = document.getElementById("msg");
const historyUI = document.getElementById("history");
const shareUI = document.getElementById("shareCount");

let shares = Number(localStorage.getItem("shares")||0);
shareUI.innerText = shares;

function sell(){
  location.href="https://wa.me/2001211056530?text=اريد بيع حساب ببجي";
}

function buy(){
  location.href="https://wa.me/2001211056530?text=اريد شراء حساب ببجي";
}

function today(){
  return new Date().toDateString();
}

function spin(){
  if(localStorage.getItem("lastSpin")==today()){
    msg.innerText="لفتك خلصت النهارده";
    return;
  }

  localStorage.setItem("lastSpin",today());

  let prizes = [
    {name:"6600 شدة",chance:shares>=50?30:5},
    {name:"660 شدة",chance:20},
    {name:"2000 جنيه",chance:10},
    {name:"لا شيء",chance:60}
  ];

  let pool=[];
  prizes.forEach(p=>{
    for(let i=0;i<p.chance;i++) pool.push(p.name);
  });

  let prize = pool[Math.floor(Math.random()*pool.length)];
  wheel.style.transform=`rotate(${360*5+Math.random()*360}deg)`;

  setTimeout(()=>{
    msg.innerText = prize==="لا شيء"?"حظ أوفر":"🎉 مبروك "+prize;
    if(prize!=="لا شيء") new SpeechSynthesisUtterance("مبروك").rate=1.1, speechSynthesis.speak(new SpeechSynthesisUtterance("مبروك"));

    let h = JSON.parse(localStorage.getItem("history")||"[]");
    h.unshift(prize+" - "+new Date().toLocaleString());
    localStorage.setItem("history",JSON.stringify(h));
    renderHistory();
  },3000);
}

function share(){
  shares++;
  localStorage.setItem("shares",shares);
  shareUI.innerText=shares;
  navigator.share?.({url:location.href});
}

function renderHistory(){
  historyUI.innerHTML="";
  let h = JSON.parse(localStorage.getItem("history")||"[]");
  h.forEach(e=>{
    let li=document.createElement("li");
    li.textContent=e;
    historyUI.appendChild(li);
  });
}

renderHistory();
