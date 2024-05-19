const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn')
const video = document.querySelector('.video-container');

    playBtn.addEventListener('click',function(){
        video.play();
    });

    pauseBtn.addEventListener('click',function(){
        video.pause();
    })