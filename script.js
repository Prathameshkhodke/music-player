console.log('Welcome to MusicFlow');
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('Audio/audio.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar')
let gif = document.getElementById('gif')

let songs = [
    
    {songName: "Apna bana le", filePath: "Audio/audio.mp3", coverPath: "images/vsrun.jpg"},
    {songName: "Apna bana le", filePath: "Audio/audio.mp3", coverPath: "images/vsrun.jpg"},
    {songName: "Apna bana le", filePath: "Audio/audio.mp3", coverPath: "images/vsrun.jpg"},
    {songName: "Apna bana le", filePath: "Audio/audio.mp3", coverPath: "images/vsrun.jpg"},
    {songName: "Apna bana le", filePath: "Audio/audio.mp3", coverPath: "images/vsrun.jpg"},
    {songName: "Apna bana le", filePath: "Audio/audio.mp3", coverPath: "images/vsrun.jpg"},
]

// audioElements.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity = 0;
    }

})
// listen to Events

audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

