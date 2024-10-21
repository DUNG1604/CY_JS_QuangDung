const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio-song");
const elementNameSong = document.querySelector(".name-song");
const elementSingerSong = document.querySelector(".singer-song");
const songImg = document.querySelector(".song-img");
const btnPlayPause = document.querySelector(".btn-play-pause");
const songListContainer = document.querySelector(".listChoose");
const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const durationTimeDisplay = document.querySelector(".duration-time");
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

const listSongProxy = new Proxy({
    list: listSong
}, {
    set(target, prop, value) {
        target[prop] = value;
        renderList();
        return true;
    }
});

const currentSongProxy = new Proxy({
    currentSong: 0
}, {
    set(target, prop, value) {
        target[prop] = value;
        playSong(value);
        return true;
    }
});

const isPlayProxy = new Proxy({
    isPlay: true,
}, {
    set: (target, prop, value) => {
        target[prop] = value;
        if (value) {
            playAudio();
        } else {
            pauseAudio();
        }
        return true;
    },
});

const renderList = () => {
    songListContainer.innerHTML = "";
    // console.log("render LIST");
    listSongProxy.list.forEach((song, index) => {
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
            currentSongProxy.currentSong = index;
        });
        songListContainer.appendChild(songItem);
    });
};
renderList();

btnPlayPause.addEventListener("click", () => {
    isPlayProxy.isPlay = !isPlayProxy.isPlay;
});

const changeSong = (step) => {
    let newIndex = currentSongProxy.currentSong + step;
    if (newIndex >= listSongProxy.list.length) newIndex = 0;
    if (newIndex < 0) newIndex = listSongProxy.list.length - 1;
    currentSongProxy.currentSong = newIndex;
};

const playSong = (currentSong) => {
    const song = listSongProxy.list[currentSong];
    audio.src = song.src;
    elementNameSong.innerHTML = song.song;
    elementSingerSong.innerHTML = song.singer;
    songImg.src = song.img;
    audio.play();
};

const playAudio = () => {
    btnPlayPause.src = PLAY_URL;
    audio.play();
};

const pauseAudio = () => {
    btnPlayPause.src = PAUSE_URL;
    audio.pause();
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

const elementUpload = document.querySelector(".input-btn");
elementUpload.addEventListener("change", (e) => {
    const res = e.target.files[0];
    // console.log(res)
    addAudio(res);
});

const validAudioTypes = ["audio/mpeg"]
const addAudio = (res) => {
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
        while (songListContainer.firstChild) {
            songListContainer.removeChild(songListContainer.firstChild);
        }
        listSong.push(item);
        elementUpload.value = "";
        renderList();
    }
}

playSong(currentSongProxy.currentSong);
