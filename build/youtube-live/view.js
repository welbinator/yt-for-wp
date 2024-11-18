(()=>{function e(e,t,n){e.innerHTML=t.map((e=>{const t=e.id.videoId,n=e.snippet.title;return`\n                <div class="youtube-live-wrapper">\n                    <iframe\n                        src="https://www.youtube.com/embed/${t}?autoplay=0"\n                        title="${n}"\n                        frameborder="0"\n                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n                        allowfullscreen\n                    ></iframe>\n                    <h2>${n}</h2>\n                </div>\n            `})).join("")}document.addEventListener("DOMContentLoaded",(async()=>{const t=document.getElementById("youtube-live-container");if(!t)return void console.warn("YouTube Live container not found.");const n=t.getAttribute("data-max-videos")||1,o=t.getAttribute("data-channel-id")||YT_FOR_WP.channelId;if(!o)return void console.error("Channel ID is missing.");const r=YT_FOR_WP.apiKey;async function i(e){const t=`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${o}&type=video&eventType=${e}&maxResults=${n}&key=${r}`;try{const e=await fetch(t);return(await e.json()).items||[]}catch(e){return console.error("Error fetching videos:",e),[]}}try{let n=await i("live");if(n.length>0)return void e(t,n);let o=await i("completed");if(o.length>0)return void e(t,o);t.innerHTML="<p>No live or previous live videos available.</p>"}catch(e){console.error("Error fetching videos:",e),t.innerHTML="<p>Error loading videos. Check console for details.</p>"}}))})();