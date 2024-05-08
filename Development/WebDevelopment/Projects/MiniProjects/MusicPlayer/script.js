let audio = document.querySelector('audio');
let progress = document.querySelector('#music-progress');
let playbtn = document.querySelector('#playbtn');

audio.onloadedmetadata=function(){
    progress.max=audio.duration;
    progress.value=audio.currentTime;

}

playbtn.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        playbtn.classList.replace('fa-play','fa-pause');
    }else{
        audio.pause();
        playbtn.classList.replace('fa-pause','fa-play');
    }
    
})

progress.addEventListener('change',()=>{
    audio.currentTime=progress.value
})

if(audio.play){
    setInterval(()=>{
        progress.value=audio.currentTime;
    },500)
}
if(audio.ended){
    playbtn.classList.replace('fa-pause','fa-play');
}