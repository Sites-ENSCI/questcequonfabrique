// Ce site est codé de façon complètement artisanle et anarchique, de la grosse bidouille, du bon bricolage donc désolé à toi petit fouineur mais cela risque d'être compliqué de tout comprendre



// tuto pour custom le player : https://css-tricks.com/lets-create-a-custom-audio-player/

// const playIconContainer = document.getElementById('play-icon');
// const audioPlayerContainer = document.getElementById('audio-player-container');
// const seekSlider = document.getElementById('seek-slider');
// const volumeSlider = document.getElementById('volume-slider');
// const muteIconContainer = document.getElementById('boutonVolume');
// const boutonPlay = document.getElementById("boutonPlay")
// let playState = 'play';
// let muteState = 'unmute';



class AudioPlayer extends HTMLElement {
    constructor() {
        super();
        const template = document.querySelector('template');
        const templateContent = template.content;
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
        everything(this);
    }
}

const everything = function(element) {
  const shadow = element.shadowRoot;

    const audioPlayerContainer = shadow.getElementById('audio-player-container');
    const playIconContainer = shadow.getElementById('play-icon');
    const boutonPlay = shadow.getElementById('boutonPlay');
    const seekSlider = shadow.getElementById('seek-slider');
    const volumeSlider = shadow.getElementById('volume-slider');
    const muteIconContainer = shadow.getElementById('boutonVolume');
    const photoPlayer = shadow.getElementById('photoPlayer');
    const audio = shadow.querySelector('audio');
    const durationContainer = shadow.getElementById('duration');
    const currentTimeContainer = shadow.getElementById('current-time');
    const outputContainer = shadow.getElementById('volume-output');
    const retour10s = shadow.getElementById('retour10s');

    // const episode = shadow.getElementById('episode');
    let playState = 'pause';
    let muteState = 'unmute';
    let raf = null;

    // let stateGlobal = ['play','play','play','play','play','play','play','play','play','play'];

    audio.src = element.getAttribute('data-src');
    // episode.href = element.getAttribute('episode');
    episode = element.getAttribute('episode');
    numEpisode = element.getAttribute('num-episode');
    boutonEpisode = element.getAttribute('bouton-episode');
    tempsLancement = element.getAttribute('tempsLancement')
    const boutonNum = document.getElementById(boutonEpisode);
    var boutonPlayImage = document.getElementsByClassName('boutonPlayImage');

    const titreEpisode = shadow.getElementById('titreEpisode');
    const wrapperTitreEpisode = shadow.getElementById('WrapperTitreEpisode');
    titreEp = element.getAttribute('titreEp');


    titreEpisode.remove();

    var boutonChap = document.getElementsByClassName('boutonChap');
    // console.log(boutonChap);



    // element.appendChild(titreEpisode);


    photoPlayer.src = element.getAttribute('photo-src');
    boutonPlay.src="Ressources/svg/pause.svg";

    audio.currentTime = tempsLancement;

    // Appliquer les styles externes au dom fantôme
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'Style.css');


    const linkElem2 = document.createElement('link');
    linkElem2.setAttribute('rel', 'stylesheet');
    linkElem2.setAttribute('href', episode);

    // const linkElem3 = document.createElement('link');
    // linkElem3.setAttribute('rel', 'stylesheet');
    // linkElem3.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
    // linkElem3.setAttribute('integrity', 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU');
    // linkElem3.setAttribute('crossorigin', 'anonymous');

    var spanTitreEpisode = document.createElement('span');
    var newContent = document.createTextNode(titreEp);
    spanTitreEpisode.setAttribute('id', 'titreEpisode');
    spanTitreEpisode.setAttribute('titre', titreEp)
    spanTitreEpisode.appendChild(newContent);
    wrapperTitreEpisode.appendChild(spanTitreEpisode);




    // Associer l'élément créé au dom fantôme
    shadow.appendChild(linkElem);
    shadow.appendChild(linkElem2);
    // shadow.appendChild(linkElem3);


function generateEventListenerBouton(i){

    boutonChap[i].addEventListener('click', () =>{
      value = boutonChap[i].getAttribute('value');
      seekSlider.value = value;

      audio.play();
      boutonPlay.src="Ressources/svg/pause.svg"
      boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/pause-clair.svg");
      /*playAnimation.playSegments([14, 27], true);*/
      requestAnimationFrame(whilePlaying);
      playState = 'pause';
      stateGlobal[numEpisode] = 'pause';
      audio.currentTime = seekSlider.value;
      currentTimeContainer.textContent = calculateTime(seekSlider.value);
      audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
      raf = requestAnimationFrame(whilePlaying);
    });
  };

for (var i = 0; i < boutonChap.length; i++) {
  generateEventListenerBouton(i) };




playIconContainer.addEventListener('click', () => {


    if(playState === 'play') {
        audio.play();
        boutonPlay.src="Ressources/svg/pause.svg"
        boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/pause-clair.svg");
        /*playAnimation.playSegments([14, 27], true);*/
        requestAnimationFrame(whilePlaying);
        playState = 'pause';
        stateGlobal[numEpisode] = 'pause';
        // console.log("StateGlobal via petit play" , stateGlobal[numEpisode]);
    } else {
        audio.pause();
        boutonPlay.src="Ressources/svg/play.svg"
        boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/play-clair.svg");
        /*playAnimation.playSegments([0, 14], true);*/
        cancelAnimationFrame(raf);
        playState = 'play';
        stateGlobal[numEpisode] = 'play';
        // console.log("StateGlobal via petit play",  stateGlobal[numEpisode]);
    }
});



boutonNum.addEventListener('click', () => {
    if(playState === 'play') {
        audio.play();
        boutonPlay.src="Ressources/svg/pause.svg"
        boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/pause-clair.svg");
        /*playAnimation.playSegments([14, 27], true);*/
        requestAnimationFrame(whilePlaying);
        playState = 'pause';
        stateGlobal[numEpisode] = 'pause';
        // console.log("stateGlobal etre comme bis", stateGlobal[numEpisode]);
    }


    else {
        audio.pause();
        boutonPlay.src="Ressources/svg/play.svg"
        boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/play-clair.svg");
        /*playAnimation.playSegments([0, 14], true);*/
        cancelAnimationFrame(raf);
        playState = 'play';
        stateGlobal[numEpisode] = 'play';
        // console.log("stateGlobal etre comme bis", stateGlobal[numEpisode]);
    }
});

retour10s.addEventListener('click', () =>{

  if(audio.currentTime >= 10) {
  audio.currentTime = audio.currentTime - 10;
  seekSlider.value = seekSlider.value -10;
  }
  else {
    audio.currentTime = 0;
    seekSlider.value = 0;
  }
  currentTimeContainer.textContent = calculateTime(seekSlider.value);


    });





muteIconContainer.addEventListener('click', () => {
    if(muteState === 'unmute') {
        // muteAnimation.playSegments([0, 15], true);
        audio.muted = true;
        muteState = 'mute';
        muteIconContainer.src="Ressources/svg/volume-off.svg"
    } else {
        // muteAnimation.playSegments([15, 25], true);
        audio.muted = false;
        muteState = 'unmute';
        muteIconContainer.src="Ressources/svg/volume-low.svg"
    }
});

const showRangeProgress = (rangeInput) => {
    if(rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});





/** Implementation of the functionality of the audio player */

// const audio = document.querySelector('audio');
// const durationContainer = document.getElementById('duration');
// const currentTimeContainer = document.getElementById('current-time');
// const outputContainer = document.getElementById('volume-output');
// let raf = null;

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
}

const whilePlaying = () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
    raf = requestAnimationFrame(whilePlaying);
}

if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    });
}

audio.addEventListener('progress', displayBufferedAmount);

seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    if(!audio.paused) {
        cancelAnimationFrame(raf);
    }
});

seekSlider.addEventListener('change', () => {
    audio.currentTime = seekSlider.value;
    if(!audio.paused) {
        requestAnimationFrame(whilePlaying);
    }
});

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;

    //outputContainer.textContent = value;
    audio.volume = value / 100;
});


requestAnimationFrame(whilePlaying);




//########################## A MODIFIER UNE FOIS QUE TOUT MARCHE BIEN ##############################


/* Implementation of the Media Session API */
if('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: titreEp,
        artist: 'Donatien Lenoir',
        album: "Qu'est-ce qu'on fabrique ?",
        artwork: [
            { src: photoPlayer.src, sizes: '96x96', type: 'image/png' },
            { src: photoPlayer.src, sizes: '128x128', type: 'image/png' },
            { src: photoPlayer.src, sizes: '192x192', type: 'image/png' },
            { src: photoPlayer.src, sizes: '256x256', type: 'image/png' },
            { src: photoPlayer.src, sizes: '384x384', type: 'image/png' },
            { src: photoPlayer.src, sizes: '512x512', type: 'image/png' }
        ]
    });
    navigator.mediaSession.setActionHandler('play', () => {
      if(playState === 'play') {
          audio.play();
          boutonPlay.src="Ressources/svg/pause.svg"
          boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/pause-clair.svg");
          /*playAnimation.playSegments([14, 27], true);*/
          requestAnimationFrame(whilePlaying);
          playState = 'pause';
          stateGlobal[numEpisode] = 'pause';
        } else {
          audio.pause();
          boutonPlay.src="Ressources/svg/play.svg"
          boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/play-clair.svg");
          /*playAnimation.playSegments([0, 14], true);*/
          cancelAnimationFrame(raf);
          playState = 'play';
          stateGlobal[numEpisode] = 'play';
          }
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      if(playState === 'play') {
          audio.play();
          boutonPlay.src="Ressources/svg/pause.svg"
          boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/pause-clair.svg");
          /*playAnimation.playSegments([14, 27], true);*/
          requestAnimationFrame(whilePlaying);
          playState = 'pause';
          stateGlobal[numEpisode] = 'pause';
          // console.log("StateGlobal via petit play" , stateGlobal[numEpisode]);
      } else {
          audio.pause();
          boutonPlay.src="Ressources/svg/play.svg"
          boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/play-clair.svg");
          /*playAnimation.playSegments([0, 14], true);*/
          cancelAnimationFrame(raf);
          playState = 'play';
          stateGlobal[numEpisode] = 'play';
          // console.log("StateGlobal via petit play",  stateGlobal[numEpisode]);
      }
    });
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        audio.currentTime = audio.currentTime - (details.seekOffset || 10);
    });
    navigator.mediaSession.setActionHandler('seekforward', (details) => {
        audio.currentTime = audio.currentTime + (details.seekOffset || 10);
    });
    navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.fastSeek && 'fastSeek' in audio) {
          audio.fastSeek(details.seekTime);
          return;
        }
        audio.currentTime = details.seekTime;
    });
    navigator.mediaSession.setActionHandler('stop', () => {
        audio.currentTime = 0;
        seekSlider.value = 0;
        audioPlayerContainer.style.setProperty('--seek-before-width', '0%');
        currentTimeContainer.textContent = '0:00';
        if(playState === 'pause') {
            audio.pause();
            boutonPlay.src="Ressources/svg/play.svg"
            boutonPlayImage[numEpisode].setAttribute('src', "Ressources/svg/play-clair.svg");
            /*playAnimation.playSegments([0, 14], true);*/
            cancelAnimationFrame(raf);
            playState = 'play';
            stateGlobal[numEpisode] = 'play';

        }

    });
}

}



customElements.define('audio-player', AudioPlayer);
