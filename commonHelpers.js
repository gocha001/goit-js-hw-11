import{S as h,i as a}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){return fetch(`https://pixabay.com/api/?key=45094022-90f186f65f49c334b8043619f&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function y(s){const i=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:o,comments:d,downloads:f})=>`<li class="gallery-item">
           <a class="gallery-link" href="${n}">
             <img class="gallery-image" src="${r}"
             alt="${e}"
             width="360"
             />
           </a>
           <div class="thumb-block">
             <div class="block">
               <h2 class="title">Likes</h2>
               <p class="amount">${t}</p>
             </div>
             <div class="block">
               <h2 class="title">Views</h2>
               <p class="amount">${o}</p>
             </div>
             <div class="block">
               <h2 class="title">Comments</h2>
               <p class="amount">${d}</p>
             </div>
             <div class="block">
               <h2 class="title">Downloads</h2>
               <p class="amount">${f}</p>
             </div>
           </div>
         </li>`).join("");u.innerHTML=i,g.refresh("show.simplelightbox")}const u=document.querySelector(".gallery");var g=new h(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});const m=document.querySelector(".form"),l=document.querySelector(".loader");l.style.display="none";m.addEventListener("submit",b);let c=null;function b(s){if(s.preventDefault(),c=s.currentTarget.elements.text.value.trim().toLowerCase(),c==0){a.error({title:"Error",message:"The form field must be filled",position:"topRight",transitionIn:"bounceInDown"});return}u.innerHTML="",l.style.display="block",p(c).then(r=>{y(r.hits),l.style.display="none",r.hits.length==0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown"})}).catch(r=>{console.log(r),a.error({title:"Error",message:"Oops... Something went wrong.",position:"topRight",transitionIn:"bounceInDown"}),l.style.display="none"}).finally(()=>m.reset())}
//# sourceMappingURL=commonHelpers.js.map
