import throttle from "lodash.throttle";
import videoPlayer from "@vimeo/player";

const LOCAL_KEY = "videoplayer-current-time";

const videoIframe = document.querySelector('#vimeo-player');

const player = new videoPlayer(videoIframe);

const saveCurrentTimeVideoToLocal = function (e) {
    localStorage.setItem(LOCAL_KEY, e.seconds);
};

player.on('timeupdate', throttle(saveCurrentTimeVideoToLocal, 1000));


player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);







