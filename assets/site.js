async function include(id, path){
  try{
    const el = document.getElementById(id);
    if(!el) return;
    const res = await fetch(path, {cache:"no-store"});
    el.innerHTML = await res.text();
  }catch(e){ console.error("include failed:", e); }
}
document.addEventListener("DOMContentLoaded", ()=>{
  include("header","includes/header.html");
  include("footer","includes/footer.html");
});
