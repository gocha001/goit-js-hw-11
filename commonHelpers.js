import{S as h,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(s){return fetch(`https://pixabay.com/api/?key=45094022-90f186f65f49c334b8043619f&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(s){const o=s.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:r,comments:m,downloads:d})=>`<li class="gallery-item">
           <a class="gallery-link" href="${n}">
             <img class="gallery-image" src="${i}"
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
               <p class="amount">${r}</p>
             </div>
             <div class="block">
               <h2 class="title">Comments</h2>
               <p class="amount">${m}</p>
             </div>
             <div class="block">
               <h2 class="title">Downloads</h2>
               <p class="amount">${d}</p>
             </div>
           </div>
         </li>`).join("");u.innerHTML=o,g.refresh("show.simplelightbox")}const u=document.querySelector(".gallery");var g=new h(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});const f=document.querySelector(".form"),a=document.querySelector(".loader");a.style.display="none";f.addEventListener("submit",b);let l=null;function b(s){if(s.preventDefault(),l=s.currentTarget.elements.text.value.trim().toLowerCase(),l==0){c.error({title:"Error",message:"The form field must be filled",position:"topRight",transitionIn:"bounceInDown"});return}u.innerHTML="",a.style.display="block",p(l).then(i=>{y(i.hits),a.style.display="none",i.hits.length==0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown"})}).catch().finally(()=>f.reset())}
//# sourceMappingURL=commonHelpers.js.map
