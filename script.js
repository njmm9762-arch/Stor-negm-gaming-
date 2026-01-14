const phone = "2001211056530";

function sell(){
  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent("انا مثبته وعايز ابيع حساب ببجي")}`;
}

function buy(){
  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent("عايز اشتري حساب ببجي")}`;
}

function showWheel(){
  document.getElementById('mainMenu').style.display='none';
  document.getElementById('wheelBox').style.display='block';
}

function back(){
  document.getElementById('wheelBox').style.display='none';
  document.getElementById('mainMenu').style.display='grid';
}

function spin(){
  const today = new Date().toDateString();
  if(localStorage.getItem('spin')===today){
    document.getElementById('result').innerText='❌ استخدمت لفتك اليومية – تعويض المرة القادمة';
    return;
  }
  localStorage.setItem('spin',today);
  document.getElementById('result').innerText='❌ فشل – سيتم التعويض في المرة القادمة';
}

function shareSite(){
  alert('شارك رابط الموقع على واتساب وتليجرام 🚀\nلو وصل لـ 50 شخص حظك هيكون أفضل 🔥');
}

function addComment(){
  const txt = document.getElementById('comment').value;
  if(!txt) return;
  const li = document.createElement('li');
  li.innerText = txt;
  document.getElementById('comments').appendChild(li);
  document.getElementById('comment').value='';
}
