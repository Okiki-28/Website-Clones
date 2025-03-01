const container = document.querySelector(".container"),
cover = container.querySelector(".cover-wrapper"),
mainVideo = container.querySelector("video"),
videoTimeline = container.querySelector(".video-timeline"),
progressBar = container.querySelector(".progress-bar"),
volumeBtn = container.querySelector(".volume i"),
volumeSlider = container.querySelector(".left input"),
currentVidTime = container.querySelector(".current-time"),
videoDuration = container.querySelector(".video-duration"),
skipBackward = container.querySelector(".skip-backward i"),
skipForward = container.querySelector(".skip-forward i"),
playPauseBtn = container.querySelector(".play-pause i"),
speedBtn = container.querySelector(".playback-speed span"),
speedOptions = container.querySelector(".speed-options"),
picInPicBtn = container.querySelector(".pic-in-pic span"),
fullscreenBTN = container.querySelector(".fullscreen i");

let timer;
let skip;
let initVolume = 0.5;
let volumeClass = volumeBtn.classList[1];
mainVideo.volume = 0.5;

const hideControls = ()=>{
    cover.addEventListener("mouseenter", ()=>{
        skip = true;
    })
    cover.addEventListener("mouseleave", ()=>{
        skip = false;
    })

    if (mainVideo.paused) {
        return
    } else if (skip == true) {
        return
    }
    timer = setTimeout(()=>{
        container.classList.remove("show-controls");
    }, 2000);
}
hideControls();

cover.addEventListener("mouseenter", ()=>{
    container.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();
});

container.addEventListener("mousemove", ()=>{
    container.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();
});



const formatTime = time => {
    let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

    seconds = seconds<10 ? `0${seconds}` : seconds;
    minutes = minutes<10 ? `0${minutes}` : minutes;
    hours = hours<10 ? `0${hours}` : hours;

    if (hours == 0) {
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

mainVideo.addEventListener("timeupdate", e=>{
    let { currentTime, duration } = e.target,
    barLength = currentTime/duration;
    progressBar.style.width = `${barLength*100}%`;
    currentVidTime.innerText = formatTime(currentTime);
});


mainVideo.addEventListener("loadedmetadata", e=>{
    videoDuration.innerText = formatTime(e.target.duration);    
});

videoTimeline.addEventListener("click", e=>{
    // alert()
    let timelineWidth = videoTimeline.offsetWidth;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

const draggableProgressBar = e=>{
    let timelineWidth = videoTimeline.offsetWidth;
    progressBar.style.width = `${e.offsetX}px`
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    currentVidTime.innerText = formatTime(mainVideo.currentTime);
}

videoTimeline.addEventListener("mousedown", ()=>{
    videoTimeline.addEventListener("mousemove", draggableProgressBar);
});

container.addEventListener("mouseup", ()=>{
    videoTimeline.removeEventListener("mousemove", draggableProgressBar);
});

videoTimeline.addEventListener("mousemove", e=>{
    const progressTime = videoTimeline.querySelector("span");
    let offsetX = e.offsetX;
    progressTime.style.left = `${offsetX}px`;
    let timelineWidth = videoTimeline.offsetWidth;
    let percent = (e.offsetX / timelineWidth) * mainVideo.duration;
    progressTime.innerText = formatTime(percent)
});

volumeBtn.addEventListener("click", ()=>{
    if (volumeBtn.classList.contains("fa-volume-xmark")) {
        mainVideo.volume = initVolume;
        volumeBtn.classList.replace("fa-volume-xmark", volumeClass);

    } else {
        initVolume = mainVideo.volume;
        volumeClass = volumeBtn.classList[1];
        mainVideo.volume = 0.0;
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark")
        volumeBtn.classList.replace("fa-volume", "fa-volume-xmark")
        volumeBtn.classList.replace("fa-volume-low", "fa-volume-xmark")
    }
    volumeSlider.value = mainVideo.volume;
});

volumeSlider.addEventListener("input", e=>{
    mainVideo.volume = e.target.value;
    if (e.target.value == 0) {
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark")
        volumeBtn.classList.replace("fa-volume", "fa-volume-xmark")
        volumeBtn.classList.replace("fa-volume-low", "fa-volume-xmark")
    } else if (e.target.value < 0.25) {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-low")
        volumeBtn.classList.replace("fa-volume", "fa-volume-low")
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-low")
    } else if (e.target.value < 0.75) {
        volumeBtn.classList.replace("fa-volume-low", "fa-volume")
        volumeBtn.classList.replace("fa-volume-high", "fa-volume")
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume")
    } else if (e.target.value > 0.75) {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high")
        volumeBtn.classList.replace("fa-volume-low", "fa-volume-high")
        volumeBtn.classList.replace("fa-volume", "fa-volume-high")
    }
});

speedBtn.addEventListener("click", ()=>{
    speedOptions.classList.toggle("show");
});

speedOptions.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", ()=>{
        mainVideo.playbackRate = option.dataset.speed;
        speedOptions.querySelector(".active").classList.remove("active")
        option.classList.add("active");
    })
});

document.addEventListener("click", e=>{
    if (e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
        speedOptions.classList.remove("show");
    }
});

picInPicBtn.addEventListener("click", ()=>{
    mainVideo.requestPictureInPicture();
});

container.addEventListener("fullscreenchange", ()=>{
    if (document.fullscreenElement) {
        container.classList.add("fullscreen");
        fullscreenBTN.classList.replace("fa-expand", "fa-compress");
    } else {
        container.classList.remove("fullscreen");
        fullscreenBTN.classList.replace("fa-compress", "fa-expand");
    }
})

const fullscreenFnc = () => {
    container.classList.toggle("fullscreen");
    if (document.fullscreenElement) {
        return document.exitFullscreen();
    }
    container.requestFullscreen();
}

fullscreenBTN.addEventListener("click", ()=>{
    fullscreenFnc()
});

skipBackward.addEventListener("click", ()=>{
    mainVideo.currentTime -= 5;
});

skipForward.addEventListener("click", ()=>{
    mainVideo.currentTime += 5;
});

playPauseBtn.addEventListener("click", ()=>{
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

document.addEventListener("keydown", e=>{
    switch (e.key) {
        case " ":
            mainVideo.paused ? mainVideo.play() : mainVideo.pause();
            break
        case "f":
            fullscreenFnc()
            break
        default:
            break
    }
});
    
mainVideo.addEventListener("click", ()=>{
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

mainVideo.addEventListener("play", ()=>{
    playPauseBtn.classList.replace("fa-play", "fa-pause");
    hideControls();
});

mainVideo.addEventListener("pause", ()=>{
    playPauseBtn.classList.replace("fa-pause", "fa-play");
    container.classList.add("show-controls");
    clearTimeout(timer)
});
