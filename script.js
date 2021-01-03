const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById( 'next');

//Music Array
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (remix)',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-3',
        displayName: 'Good Night, Disco Queen',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-4',
        displayName: 'Front Row (remix)',
        artist: 'Jacinto'
    },
];

//Check if playing
let isPlaying = false;

//Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause');
    music.play();
}

//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'play');
    music.pause();
}

//Update Dom
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}


//Current Song 
let songIndex = 0;

//Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length -1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Event Listeners

// Play/Pause
playBtn.addEventListener('click', () => (isPlaying ? pauseSong(): playSong()));

//Prev/Next
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// On Load - Select First Song
loadSong(songs[songIndex]);