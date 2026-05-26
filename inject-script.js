(function(){
  function inject(){
    if(document.getElementById('we-injected'))return;
    var marker=document.createElement('div');
    marker.id='we-injected';
    var style=document.createElement('style');
    style.textContent="@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap');"+
".we *{box-sizing:border-box;margin:0;padding:0;font-family:'Heebo','Arial Hebrew',sans-serif}"+
".we{direction:rtl;color:#1A1A1A;background:#fff;line-height:1.55;width:100%;position:relative;z-index:1}"+
".we button{cursor:pointer;border:none;background:none;font-family:inherit}"+
".we-ann{background:#202125;color:#fff;text-align:center;font-size:14px;padding:11px 16px;font-weight:500}"+
".we-ann strong{color:#00C2E8}"+
".we-trust{background:#fafafa;padding:28px 24px;border-bottom:1px solid #f0f0f0}"+
".we-tg{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px}"+
".we-ti{display:flex;align-items:center;gap:14px;justify-content:center}"+
".we-ti-i{width:48px;height:48px;background:#00C2E8;border-radius:50%;display:grid;place-items:center;font-size:22px;color:#fff;flex-shrink:0}"+
".we-ti .t{font-weight:700;font-size:14px}"+
".we-ti .s{font-size:12px;color:#7A7A7A;margin-top:2px}"+
".we-marq{background:linear-gradient(90deg,#202125,#2a2a35);color:#fff;overflow:hidden;white-space:nowrap;padding:14px 0}"+
".we-marq-i{display:inline-flex;gap:60px;animation:wemq 30s linear infinite}"+
"@keyframes wemq{from{transform:translateX(0)}to{transform:translateX(-50%)}}"+
".we-mi{display:inline-flex;align-items:center;gap:10px;font-size:15px;font-weight:500;padding-left:30px}"+
".we-mi strong{color:#00C2E8;font-weight:700}"+
".we-sec{padding:70px 24px;max-width:1200px;margin:0 auto}"+
".we-sh{text-align:center;margin-bottom:45px}"+
".we-sh .e{color:#00C2E8;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px}"+
".we-sh h2{font-size:38px;font-weight:800;margin-bottom:12px;letter-spacing:-.5px}"+
".we-sh p{color:#7A7A7A;font-size:16px;max-width:560px;margin:0 auto}"+
".we-pg{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}"+
".we-pc{background:#fff;border-radius:14px;overflow:hidden;cursor:pointer;border:1px solid #f0f0f0;position:relative;transition:.2s}"+
".we-pc:hover{transform:translateY(-6px);box-shadow:0 12px 32px rgba(0,0,0,.10);border-color:transparent}"+
".we-pi{width:100%;aspect-ratio:1;background:linear-gradient(135deg,#E5F8FD,#f5f5f5);display:grid;place-items:center;font-size:80px;position:relative}"+
".we-rb{position:absolute;top:14px;right:14px;background:#E62B2B;color:#fff;font-size:11px;font-weight:700;padding:5px 12px;border-radius:50px;z-index:2}"+
".we-rb.n{background:#00C2E8}.we-rb.b{background:#FFC72C;color:#1A1A1A}"+
".we-wh{position:absolute;top:14px;left:14px;width:36px;height:36px;background:#fff;border-radius:50%;display:grid;place-items:center;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#7A7A7A;z-index:2;font-size:18px}"+
".we-pinf{padding:18px}"+
".we-pcat{font-size:12px;color:#7A7A7A;margin-bottom:6px;font-weight:500}"+
".we-pn{font-weight:700;font-size:16px;margin-bottom:10px;line-height:1.3}"+
".we-rt{display:flex;align-items:center;gap:6px;margin-bottom:12px;font-size:13px;color:#7A7A7A}"+
".we-st{color:#FFC72C;letter-spacing:1px}"+
".we-pb{display:flex;align-items:center;justify-content:space-between;gap:10px}"+
".we-pp{font-weight:800;font-size:20px}"+
".we-po{font-size:14px;color:#7A7A7A;text-decoration:line-through;margin-right:8px}"+
".we-ad{background:#00C2E8;color:#fff;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-size:22px;font-weight:600;transition:.15s;flex-shrink:0}"+
".we-ad:hover{background:#009BC9;transform:scale(1.08)}"+
".we-feat{background:linear-gradient(135deg,#00C2E8,#009BC9);color:#fff;border-radius:24px;padding:60px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;overflow:hidden;position:relative}"+
".we-ft{position:relative;z-index:2}"+
".we-ftg{display:inline-block;background:#1A1A1A;color:#fff;padding:7px 16px;border-radius:50px;font-size:12px;font-weight:700;margin-bottom:18px}"+
".we-feat h3{font-size:46px;font-weight:900;line-height:1.05;margin-bottom:16px;letter-spacing:-.8px}"+
".we-feat p{font-size:17px;margin-bottom:26px;opacity:.95}"+
".we-fp{display:flex;align-items:baseline;gap:14px;margin-bottom:28px;flex-wrap:wrap}"+
".we-fp .nw{font-size:42px;font-weight:900}"+
".we-fp .ws{font-size:22px;text-decoration:line-through;opacity:.6}"+
".we-fp .sv{background:#1A1A1A;color:#fff;padding:6px 14px;border-radius:50px;font-size:13px;font-weight:700}"+
".we-btn{background:#1A1A1A;color:#fff;padding:16px 36px;border-radius:50px;font-weight:700;font-size:16px;display:inline-flex;align-items:center;gap:10px}"+
".we-fv{position:relative;display:grid;place-items:center;font-size:220px;z-index:2;filter:drop-shadow(0 20px 40px rgba(0,0,0,.3))}"+
".we-why{background:#fafafa;padding:70px 24px}"+
".we-whi{max-width:1200px;margin:0 auto}"+
".we-wg{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}"+
".we-wc{text-align:center;padding:36px 24px;border-radius:16px;background:#fff;border:1px solid #f0f0f0;transition:.2s}"+
".we-wc:hover{transform:translateY(-6px);box-shadow:0 12px 32px rgba(0,0,0,.08);border-color:transparent}"+
".we-wi{width:72px;height:72px;background:linear-gradient(135deg,#00C2E8,#009BC9);border-radius:50%;display:grid;place-items:center;margin:0 auto 20px;font-size:32px;color:#fff;box-shadow:0 8px 24px rgba(0,194,232,.3)}"+
".we-wc h4{font-size:18px;font-weight:800;margin-bottom:10px}"+
".we-wc p{font-size:14px;color:#4A4A4A}"+
".we-tg2{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}"+
".we-tc{background:#fff;border-radius:16px;padding:32px;box-shadow:0 4px 16px rgba(0,0,0,.06);position:relative;border:1px solid #f0f0f0}"+
".we-qm{position:absolute;top:20px;left:24px;font-size:80px;color:#E5F8FD;font-family:Georgia,serif;line-height:1}"+
".we-tt{font-size:16px;line-height:1.6;margin-bottom:24px;color:#4A4A4A;position:relative;z-index:1}"+
".we-ta{display:flex;align-items:center;gap:14px}"+
".we-av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#00C2E8,#009BC9);color:#fff;display:grid;place-items:center;font-weight:800;font-size:18px}"+
".we-an{font-weight:700;font-size:15px}"+
".we-ar{font-size:12px;color:#7A7A7A;margin-top:2px}"+
".we-as{color:#FFC72C;margin-top:4px;font-size:13px;letter-spacing:1px}"+
".we-wa{position:fixed;bottom:24px;left:24px;width:64px;height:64px;background:#25D366;border-radius:50%;display:grid;place-items:center;box-shadow:0 6px 24px rgba(37,211,102,.45);z-index:9999;font-size:32px;color:#fff;text-decoration:none;animation:wewa 2s infinite}"+
"@keyframes wewa{0%,100%{box-shadow:0 6px 24px rgba(37,211,102,.45)}50%{box-shadow:0 6px 24px rgba(37,211,102,.45),0 0 0 12px rgba(37,211,102,0)}}"+
"@media(max-width:1024px){.we-pg{grid-template-columns:repeat(3,1fr)}.we-tg{grid-template-columns:repeat(2,1fr)}.we-feat{grid-template-columns:1fr;padding:40px;text-align:center}.we-feat h3{font-size:34px}.we-fv{font-size:160px}.we-wg{grid-template-columns:repeat(2,1fr)}.we-tg2{grid-template-columns:1fr}}"+
"@media(max-width:768px){.we-sh h2{font-size:28px}.we-pg{grid-template-columns:1fr 1fr;gap:14px}.we-pn{font-size:14px}.we-pp{font-size:17px}.we-wg{grid-template-columns:1fr 1fr;gap:14px}.we-sec,.we-why{padding:50px 16px}.we-feat{padding:32px 24px;border-radius:16px}.we-feat h3{font-size:26px}.we-fv{font-size:100px}.we-fp .nw{font-size:32px}.we-tg2{grid-template-columns:1fr}.we-mi{font-size:13px}.we-wa{width:56px;height:56px;font-size:28px;bottom:16px;left:16px}}";
    document.head.appendChild(style);

    var products=[
      {n:'קסדת LS2 FF325 STROBE',c:'קסדות',e:'🪖',p:450,o:550,r:'4.9',rc:'284',b:'b',bt:'הכי נמכר'},
      {n:'קסדת LS2 OF610 לאופניים',c:'קסדות',e:'🚲',p:350,r:'4.8',rc:'167',b:'n',bt:'חדש'},
      {n:'תיק משלוחים גדול',c:'תיקי משלוחים',e:'🎒',p:280,r:'4.9',rc:'412'},
      {n:'מתקן טלפון לכידון',c:'אביזרי טלפון',e:'📱',p:95,o:125,r:'4.7',rc:'203',b:'',bt:'-25%'},
      {n:'מכנסי גשם נושמים',c:'ביגוד',e:'🧥',p:165,r:'4.5',rc:'89'},
      {n:'בנדנה ספיגת זיעה',c:'אביזרים',e:'🥽',p:25,r:'4.8',rc:'156',b:'n',bt:'חדש'},
      {n:'כיסוי גשם לנעליים',c:'חורף',e:'🥾',p:49,o:70,r:'4.6',rc:'74',b:'',bt:'-30%'},
      {n:'מטען USB-C לקסדה',c:'אביזרי טלפון',e:'🔋',p:120,r:'4.9',rc:'321'}
    ];
    function star(r){var f=Math.floor(parseFloat(r)),s='';for(var i=0;i<5;i++)s+=i<f?'★':'☆';return s;}
    var pg='';
    products.forEach(function(p){
      var badge=p.bt?'<span class="we-rb '+(p.b||'')+'">'+p.bt+'</span>':'';
      var oprice=p.o?'<span class="we-po">₪'+p.o+'</span>':'';
      pg+='<div class="we-pc"><div class="we-pi">'+badge+'<button class="we-wh">♡</button>'+p.e+'</div>'+
        '<div class="we-pinf"><div class="we-pcat">'+p.c+'</div><div class="we-pn">'+p.n+'</div>'+
        '<div class="we-rt"><span class="we-st">'+star(p.r)+'</span> '+p.r+' ('+p.rc+')</div>'+
        '<div class="we-pb"><div><span class="we-pp">₪'+p.p+'</span>'+oprice+'</div><button class="we-ad">+</button></div></div></div>';
    });

    var html='<div class="we">'+
      '<div class="we-ann">🚚 <strong>משלוח חינם</strong> מעל 200₪ • ⭐ <strong>4.9 כוכבים</strong> מ-5,000+ שליחים • 💳 <strong>עד 12 תשלומים</strong></div>'+
      '<div class="we-trust"><div class="we-tg">'+
        '<div class="we-ti"><div class="we-ti-i">🚚</div><div><div class="t">משלוח מהיר</div><div class="s">לכל הארץ תוך 1-3 ימים</div></div></div>'+
        '<div class="we-ti"><div class="we-ti-i">🛡️</div><div><div class="t">תשלום מאובטח</div><div class="s">SSL ו-3D Secure</div></div></div>'+
        '<div class="we-ti"><div class="we-ti-i">💳</div><div><div class="t">תשלום נוח</div><div class="s">עד 12 תשלומים</div></div></div>'+
        '<div class="we-ti"><div class="we-ti-i">💬</div><div><div class="t">תמיכה בעברית</div><div class="s">צ\'אט / וואטסאפ / טלפון</div></div></div>'+
      '</div></div>'+
      '<div class="we-marq"><div class="we-marq-i">'+
        '<span class="we-mi">⚡ <strong>מבצע השבוע:</strong> 20% הנחה על קסדות</span>'+
        '<span class="we-mi">🎁 משלוח חינם מעל <strong>200₪</strong></span>'+
        '<span class="we-mi">⭐ <strong>4.9 כוכבים</strong> מ-5,000+ שליחים</span>'+
        '<span class="we-mi">💳 <strong>עד 12 תשלומים</strong></span>'+
        '<span class="we-mi">🔥 <strong>מחירים מיוחדים</strong> לשליחי וולט</span>'+
        '<span class="we-mi">⚡ <strong>מבצע השבוע:</strong> 20% הנחה על קסדות</span>'+
        '<span class="we-mi">🎁 משלוח חינם מעל <strong>200₪</strong></span>'+
        '<span class="we-mi">⭐ <strong>4.9 כוכבים</strong> מ-5,000+ שליחים</span>'+
        '<span class="we-mi">💳 <strong>עד 12 תשלומים</strong></span>'+
        '<span class="we-mi">🔥 <strong>מחירים מיוחדים</strong> לשליחי וולט</span>'+
      '</div></div>'+
      '<div class="we-sec">'+
        '<div class="we-sh"><div class="e">הכי נמכרים השבוע</div><h2>המוצרים האהובים על השליחים</h2><p>אלה המוצרים שאלפי שליחי Wolt בוחרים שוב ושוב</p></div>'+
        '<div class="we-pg">'+pg+'</div>'+
      '</div>'+
      '<div class="we-sec"><div class="we-feat">'+
        '<div class="we-ft"><span class="we-ftg">🔥 מבצע השבוע — נגמר ביום שישי</span><h3>קסדת LS2 FF325 STROBE</h3>'+
        '<p>הקסדה המקצועית הכי נמכרת בקרב שליחי Wolt בישראל. עמידה בגשם, אוורור מצוין ומשקל קל.</p>'+
        '<div class="we-fp"><span class="nw">₪450</span><span class="ws">₪550</span><span class="sv">חסכון ₪100</span></div>'+
        '<button class="we-btn">קנה עכשיו ⬅</button></div>'+
        '<div class="we-fv">🪖</div>'+
      '</div></div>'+
      '<div class="we-why"><div class="we-whi">'+
        '<div class="we-sh"><div class="e">למה אנחנו</div><h2>החנות שנבנתה עבור שליחים</h2><p>הקמנו את Couriers Club כי הבנו ששליחים צריכים יותר ממה שהשוק מציע</p></div>'+
        '<div class="we-wg">'+
          '<div class="we-wc"><div class="we-wi">🎯</div><h4>נבחנו בשטח</h4><p>כל מוצר נבחן על ידי שליחי וולט אמיתיים</p></div>'+
          '<div class="we-wc"><div class="we-wi">💰</div><h4>מחירים לשליחים</h4><p>הנחות בלעדיות 15-25% מתחת לשוק</p></div>'+
          '<div class="we-wc"><div class="we-wi">⚡</div><h4>משלוח מהיר</h4><p>1-3 ימי עסקים לכל הארץ</p></div>'+
          '<div class="we-wc"><div class="we-wi">🏆</div><h4>איכות מובטחת</h4><p>אחריות יצרן מלאה על כל מוצר</p></div>'+
        '</div>'+
      '</div></div>'+
      '<div class="we-sec">'+
        '<div class="we-sh"><div class="e">המלצות שליחים</div><h2>5,000+ שליחים מרוצים</h2></div>'+
        '<div class="we-tg2">'+
          '<div class="we-tc"><div class="we-qm">"</div><p class="we-tt">קניתי כאן קסדה ותיק. איכות מטורפת, והמחיר היה זול ב-30% ממה שראיתי במקומות אחרים. ממליץ בחום לכל שליח חדש.</p><div class="we-ta"><div class="we-av">י</div><div><div class="we-an">יוסי כהן</div><div class="we-ar">שליח וולט תל אביב</div><div class="we-as">★★★★★</div></div></div></div>'+
          '<div class="we-tc"><div class="we-qm">"</div><p class="we-tt">השירות מעולה. הייתה בעיה עם תיק ובתוך יומיים שלחו לי תיק חדש בלי בלגן. ככה זה צריך להיות.</p><div class="we-ta"><div class="we-av">מ</div><div><div class="we-an">מוחמד עלי</div><div class="we-ar">שליח וולט חיפה</div><div class="we-as">★★★★★</div></div></div></div>'+
          '<div class="we-tc"><div class="we-qm">"</div><p class="we-tt">המוצרים מותאמים בדיוק לעבודה שלנו. סוף סוף הכל במקום אחד ובמחיר הוגן.</p><div class="we-ta"><div class="we-av">ש</div><div><div class="we-an">שירה לוי</div><div class="we-ar">שליחה וולט ירושלים</div><div class="we-as">★★★★★</div></div></div></div>'+
        '</div>'+
      '</div>'+
      '<a class="we-wa" href="https://wa.me/972500000000" target="_blank" rel="noopener" title="צריך עזרה?">💬</a>'+
    '</div>';

    marker.innerHTML=html;
    document.body.appendChild(marker);

    document.querySelectorAll('.we-ad').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();b.textContent='✓';b.style.background='#06A35A';setTimeout(function(){b.textContent='+';b.style.background=''},1500);});});
    document.querySelectorAll('.we-wh').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();var l=b.textContent==='♥';b.textContent=l?'♡':'♥';b.style.color=l?'':'#E62B2B';});});
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',inject);}
  else{inject();}
})();
