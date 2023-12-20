

console.log("welcome to Spotify");

let songsIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsItem = Array.from(document.getElementsByClassName('songsItem'));


let songs = [
    {songname:"gulabi aankhen" , filePath:"songs/1.mp3",  coverPath:"covers/1.jpg"},
    {songname:"Hai Apna dil to awara" , filePath:"songs/2.mp3",  coverPath:"covers/2.jpg"},
    {songname:"pal pal dil ke paas" , filePath:"songs/3.mp3",  coverPath:"covers/3.jpg"},
    {songname:"dil kay kare" , filePath:"songs/4.mp3",  coverPath:"covers/4.jpg"},
    {songname:"El ladki ko dekha to " , filePath:"songs/5.mp3",  coverPath:"covers/5.jpg"},
    {songname:"kahin door" , filePath:"songs/6.mp3",  coverPath:"covers/6.jpg"},
    {songname:"lag ja gale" , filePath:"songs/7.mp3",  coverPath:"covers/7.jpg"},
]

songsItem.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

// Handle play pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;    
    }
})

// Event listner
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekBar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = (audioElement.duration*progress.value)/100;

})

const makeAllplay =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', ()=>{
        // console.log(element);
        makeAllplay();
        songsIndex = parseInt(element.id);

        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songsIndex+1}.mp3`;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songsIndex].songname;
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songsIndex>=7){
        songsIndex = 0;
    }
    else{
        songsIndex+= 1;
    }
    audioElement.src = `songs/${songsIndex+1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songname;
    audioElement.play();
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('back').addEventListener('click',()=>{
    if(songsIndex<=0){
        songsIndex = 0;
    }
    else{
        songsIndex-= 1;
    }
    audioElement.src = `songs/${songsIndex+1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songname;
    audioElement.play();
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})