const audio = document.querySelector(".audio-song");
const elementNameSong = document.querySelector(".name-song");
const elementSingerSong = document.querySelector(".singer-song");
const songImg = document.querySelector(".song-img");
const btnPlayPause = document.querySelector(".btn-play-pause");
const songListContainer = document.querySelector(".listChoose");
const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const durationTimeDisplay = document.querySelector(".duration-time");
const elementUpload = document.querySelector(".input-btn");
const PAUSE_URL = "./assets/imgs/play_pause_24dp_000_FILL0_wght400_GRAD0_opsz24.svg";
const PLAY_URL = "./assets/imgs/playBtn.svg";

const listSong = [
    {
        img: "https://i.ytimg.com/vi/Z1D26z9l8y8/maxresdefault.jpg",
        src: "./assets/audio/BauTroiMoi-DaLABMinhTocLam-16286137.mp3",
        song: "Bầu trời mới",
        singer: "DALAB - Minh Toc - Lam"
    },
    {
        img: "https://i.ytimg.com/vi/TyZasCMDf5M/maxresdefault.jpg",
        src: "./assets/audio/SeOnThoi-Khai-14860279.mp3",
        song: "Sẽ ổn thôi",
        singer: "Khải"
    }
];

class MediaPlayer {
    constructor(isPlay, currentSong, audio, listSong, listElement){
        this.isPlay = isPlay;
        this.currentSong = currentSong;
        this.audio = audio;
        this.listSong = listSong;
        this.listElement = listElement;
    }
    playAudio(){
        console.log("play")
        btnPlayPause.src = PLAY_URL;
        this.audio.play();
    };
    
    pauseAudio(){
        console.log("pause")
        btnPlayPause.src = PAUSE_URL;
        this.audio.pause();
    };
    setIsPlay(isPlay) {
        this.isPlay = isPlay;
        console.log(`isPlay set to: ${this.isPlay}`);
    }
    setCurrentSong(song) {
        this.currentSong = song;
        this.audio.src = song; 
        console.log(`Current song set to: ${this.currentSong}`);
    }
    playSong(currentSong){
        const song = mediaPlayer.listSong[currentSong];
        mediaPlayer.setIsPlay(true);
        btnPlayPause.src = PLAY_URL;    
        audio.src = song.src;
        elementNameSong.innerHTML = song.song;
        elementSingerSong.innerHTML = song.singer;
        songImg.src = song.img;
        audio.play();
    };
    renderList(){
        this.listElement.innerHTML = "";
        // console.log("render LIST");
        listSong.forEach((song, index) => {
            const songItem = document.createElement('div');
            songItem.innerHTML = `
                <div class="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-200 transition duration-300 rounded">
                    <div class="flex-1">
                        <div class="line-clamp-1 font-semibold">${song.song}</div>
                        <div class="text-[12px]">${song.singer}</div>
                    </div>
                    <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                        <img class="w-full h-full object-cover" src=${song.img} alt="">
                    </div>
                </div>
            `;
            songItem.addEventListener("click", () => {
                mediaPlayer.currentSong = index;
                this.isPlay = true;
                btnPlayPause.src = PLAY_URL;
                this.playSong(index);
            });
            this.listElement.appendChild(songItem);
        });
    };
    addAudio(res){
        const validAudioTypes = ["audio/mpeg"];
        const fileType = res.type;
        if (!validAudioTypes.includes(fileType)) {
            alert("Hãy tải file MP3");
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(res);
        fileReader.onload = () => {
            const url = fileReader.result;
            console.log(res.name)
            const item = {
                img: "https://i.ytimg.com/vi/Z1D26z9l8y8/maxresdefault.jpg",
                src: url,
                song: res.name,
                singer: "DALAB - Minh Toc - Lam"
            }
            while (this.listElement.firstChild) {
                this.listElement.removeChild(this.listElement.firstChild);
            }
            listSong.push(item);
            elementUpload.value = "";
            this.renderList();
        }
    }
    
}

btnPlayPause.addEventListener("click", () => {
    mediaPlayer.setIsPlay(!mediaPlayer.isPlay);
    if(mediaPlayer.isPlay){
        mediaPlayer.playAudio();
    }else{
        mediaPlayer.pauseAudio();
    }
});

const changeSong = (step) => {
    console.log(step)
    let newIndex = mediaPlayer.currentSong + step;
    if (newIndex >= mediaPlayer.listSong.length) newIndex = 0;
    if (newIndex < 0) newIndex = mediaPlayer.listSong.length - 1;
    mediaPlayer.setIsPlay(true);
    mediaPlayer.setCurrentSong(newIndex);
    btnPlayPause.src = PLAY_URL;
    mediaPlayer.playSong(mediaPlayer.currentSong);
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const updateProgressBar = () => {
    const { duration, currentTime } = audio;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;

    currentTimeDisplay.innerHTML = formatTime(currentTime);
    durationTimeDisplay.innerHTML = formatTime(duration);
};

progressBar.addEventListener("input", () => {
    const newTime = (progressBar.value * audio.duration) / 100;
    audio.currentTime = newTime;
});

audio.addEventListener("timeupdate", updateProgressBar);

elementUpload.addEventListener("change", (e) => {
    const res = e.target.files[0];
    mediaPlayer.addAudio(res);
});

let mediaPlayer = new MediaPlayer(false, 0, audio, listSong, songListContainer);
mediaPlayer.renderList();
mediaPlayer.playSong(mediaPlayer.currentSong);
