const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","K","Q","K"],r=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener");document.querySelector("#btnNuevo");let o=document.querySelectorAll(".divCartas"),d=document.querySelectorAll("small"),s=(t=2)=>{e=i(),r=[];for(let l=0;l<t;l++)r.push(0);d.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),a.disabled=!1,n.disabled=!1},i=()=>{e=[];for(let r=2;r<=10;r++)for(let a of t)e.push(r+a);for(let n of t)for(let o of l)e.push(o+n);return _.shuffle(e)},c=()=>{if(0===e.length)throw"no hay cartas en el deck";return e.pop()},u=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(r[t]=r[t]+u(e),d[t].innerText=r[t],r[t]),g=(e,t)=>{let l=document.createElement("img");l.src=`assets/cartas/cartas/${e}.png`,l.classList.add("carta"),o[t].appendChild(l)},h=()=>{let[e,t]=r;setTimeout(()=>{t===e?alert("nadie gana empate"):e>21?alert("computadora gana"):t>21?alert("gano jugador 1"):alert("gana la computadora ")},100)},f=e=>{let t=0;do{let l=c();t=$(l,r.length-1),g(l,r.length-1)}while(t<e&&e<=21);h()};return a.addEventListener("click",e=>{let t=c(),l=$(t,0);g(t,0),l>21?(a.disabled=!0,n.disabled=!0,f(l)):21===l&&(console.log("21, genial"),f(l),n.disabled=!0)}),n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,f(r[0])}),{nuevoJuego:s}})();