// Ce site est codé de façon complètement artisanle et anarchique, de la grosse bidouille, du bon bricolage donc désolé à toi petit fouineur mais cela risque d'être compliqué de tout comprendre


const playerPrincipal = document.getElementById('playerPrincipal');
const playerPrincipalContainer = document.getElementById('playerPrincipalContainer');
const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const bouton3 = document.getElementById('bouton3');
const bouton4 = document.getElementById('bouton4');
const bouton5 = document.getElementById('bouton5');
const bouton6 = document.getElementById('bouton6');
const bouton7 = document.getElementById('bouton7');
const bouton8 = document.getElementById('bouton8');
const bouton9 = document.getElementById('bouton9');
const bouton10 = document.getElementById('bouton10');


var lastOfType = $('#LastOfType');
// var menu = $('#menuPlayer');
const menuPlayer = document.getElementById('menuPlayer');
// const paddingMenu = $('#paddingPlayer');
const paddingMenu = document.getElementById('paddingPlayer');
//console.log(bouton9);


// const boutonPlayImage = document.getElementById('boutonPlayImage');

var boutonPlayImage = document.getElementsByClassName('boutonPlayImage');



var boutonChapMu = document.getElementsByClassName('ChapMu');
var boutonChapRenz = document.getElementsByClassName('ChapRenz');
var boutonChapSlean = document.getElementsByClassName('ChapSlean');
var boutonChapTac = document.getElementsByClassName('ChapTac');
var boutonChapRatp = document.getElementsByClassName('ChapRatp');
var boutonChapCommown = document.getElementsByClassName('ChapCommown');
var boutonChapCamif = document.getElementsByClassName('ChapCamif');
var boutonChapLtl = document.getElementsByClassName('ChapLtl');
var boutonChapEp9 = document.getElementsByClassName('ChapEp9');
var boutonChap = document.getElementsByClassName('boutonChap');

var titreMu = "Faire les bons choix grâce à l’éco-conception // Margot Pejaudier - Coopérative Mu ";
var titreRenz = "L’exemplarité écologique face aux lois du marché // Thierry Supernat – Renz";
var titreSlean = "L’indépendance par l’entreprenariat // Nathanaël Désormeaux - Slean ";
var titreTac = "L’éco-conception « artisanale » par le réemploi // Florian Delépine - Atelier Tac";
var titreRatp = "Un projet d’entreprise qui a du sens // Stéphanie Souan - RATP ";
var titreCommown = "L’entreprise militante // Adrien Montagut - Commown";
var titreCamif = "L’entreprise comme levier d’action // Emery Jacquillat - Camif";
var titreLtl = "La low-tech pour imaginer de nouveaux modèles de société // Quentin Mateus - Low-Tech Lab ";
var titreEp9 = "Et maintenant ? Qu'est-ce qu'on fabrique ?";



// console.log(boutonChapMu[0].value);
// console.log(boutonChapRenz);


//
// console.log(boutonPlayImage[0]);
// console.log(boutonPlayImage[1]);
// console.log(boutonPlayImage.length)

let state = ['play','play','play','play','play','play','play','play','play','play','play'];

playerPrincipal.remove();


function LogoPause(element) {
    element.setAttribute('src', "Ressources/svg/pause-clair.svg");
};

function LogoPlay(element) {
    element.setAttribute('src', "Ressources/svg/play-clair.svg");
};



for (var i = 0; i < boutonPlayImage.length; i++) {
    LogoPlay(boutonPlayImage[i]);
    };


// BOUTONS PAR ÉPISODE

bouton1.addEventListener('click', () => {
        // console.log("StateGlobal etre comme" , stateGlobal[0])
        // console.log("StateApp etre comme" , state[0])
        if(state[0] === 'play' && stateGlobal[0] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[0]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/1-EpisodeMPejaudierrMU.mp3");
              playerPrincipal.setAttribute('episode', "LecteurMu.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusMU.png" );
              playerPrincipal.setAttribute('num-episode', 0); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton1"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreMu);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreMu,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusMU.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusMU.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusMU.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusMU.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusMU.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusMU.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

              // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[0] = 'pause'; // A ADAPTER ##########################
              stateGlobal[0] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
                };
                stateGlobal[0] = 'play';  // A ADAPTER ##########################

              // playerPrincipal.remove();


        }
    });

bouton2.addEventListener('click', () => {
    // console.log("StateGlobal etre comme" , stateGlobal[1])
    if(state[1] === 'play' && stateGlobal[1] === 'off' ) {  // A ADAPTER ##########################
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';

                };

              LogoPause(boutonPlayImage[1]); // A ADAPTER ##########################


          playerPrincipal.setAttribute('data-src', "Ressources/episodes/2-EpisodeTSupernatRENZ.mp3");
          playerPrincipal.setAttribute('episode', "LecteurRenz.css");
          playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusRENZ.png" );
          playerPrincipal.setAttribute('num-episode', 1); // A ADAPTER ##########################
          playerPrincipal.setAttribute('bouton-episode', "bouton2"); // A ADAPTER ##########################
          playerPrincipal.setAttribute('titreEp', titreRenz);
          playerPrincipal.setAttribute('tempsLancement', 0);
          playerPrincipalContainer.appendChild(playerPrincipal);
          lastOfType.addClass('LastOfTypePlayer');
          menuPlayer.classList.add('menuPlayer');
          paddingMenu.classList.add('paddingPlayer');

          if('mediaSession' in navigator) {
              navigator.mediaSession.metadata = new MediaMetadata({
                  title: titreRenz,
                  artist: 'Donatien Lenoir',
                  album: "Qu'est-ce qu'on fabrique ?",
                  artwork: [
                      { src: "Ressources/img/IllusRENZ.png", sizes: '96x96', type: 'image/png' },
                      { src: "Ressources/img/IllusRENZ.png", sizes: '128x128', type: 'image/png' },
                      { src: "Ressources/img/IllusRENZ.png", sizes: '192x192', type: 'image/png' },
                      { src: "Ressources/img/IllusRENZ.png", sizes: '256x256', type: 'image/png' },
                      { src: "Ressources/img/IllusRENZ.png", sizes: '384x384', type: 'image/png' },
                      { src: "Ressources/img/IllusRENZ.png", sizes: '512x512', type: 'image/png' }
                  ]
              });
            };

         // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

          // audio.play();
          state[1] = 'pause'; // A ADAPTER ##########################
          stateGlobal[1] = 'pause';
    }
    // else if (stateGlobal[0] === 'pause') {
    //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

    // }
    else {
          for (var i = 0; i < boutonPlayImage.length; i++) {
              LogoPlay(boutonPlayImage[i]);
              state[i] = 'play';
              stateGlobal[i] = 'off';
              };
              stateGlobal[1] = 'play';  // A ADAPTER ##########################


          // playerPrincipal.remove();


    }
});

bouton3.addEventListener('click', () => {
    //console.log("StateGlobal etre comme" , stateGlobal[2])
    if(state[2] === 'play' && stateGlobal[2] === 'off' ) {  // A ADAPTER ##########################
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';

                };

              LogoPause(boutonPlayImage[2]); // A ADAPTER ##########################


          playerPrincipal.setAttribute('data-src', "Ressources/episodes/3-EpisodeNDesormeauxSLEAN.mp3");
          playerPrincipal.setAttribute('episode', "LecteurSlean.css");
          playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusSLEAN.png" );
          playerPrincipal.setAttribute('num-episode', 2); // A ADAPTER ##########################
          playerPrincipal.setAttribute('bouton-episode', "bouton3"); // A ADAPTER ##########################
          playerPrincipal.setAttribute('titreEp', titreSlean);
          playerPrincipal.setAttribute('tempsLancement', 0);
          playerPrincipalContainer.appendChild(playerPrincipal);
          lastOfType.addClass('LastOfTypePlayer');
          menuPlayer.classList.add('menuPlayer');
          paddingMenu.classList.add('paddingPlayer');

          if('mediaSession' in navigator) {
              navigator.mediaSession.metadata = new MediaMetadata({
                  title: titreSlean,
                  artist: 'Donatien Lenoir',
                  album: "Qu'est-ce qu'on fabrique ?",
                  artwork: [
                      { src: "Ressources/img/IllusSLEAN.png", sizes: '96x96', type: 'image/png' },
                      { src: "Ressources/img/IllusSLEAN.png", sizes: '128x128', type: 'image/png' },
                      { src: "Ressources/img/IllusSLEAN.png", sizes: '192x192', type: 'image/png' },
                      { src: "Ressources/img/IllusSLEAN.png", sizes: '256x256', type: 'image/png' },
                      { src: "Ressources/img/IllusSLEAN.png", sizes: '384x384', type: 'image/png' },
                      { src: "Ressources/img/IllusSLEAN.png", sizes: '512x512', type: 'image/png' }
                  ]
              });
            };

         // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

          // audio.play();
          state[2] = 'pause'; // A ADAPTER ##########################
          stateGlobal[2] = 'pause';
    }
    // else if (stateGlobal[0] === 'pause') {
    //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

    // }
    else {
          for (var i = 0; i < boutonPlayImage.length; i++) {
              LogoPlay(boutonPlayImage[i]);
              state[i] = 'play';
              stateGlobal[i] = 'off';
            };
            stateGlobal[2] = 'play';  // A ADAPTER ##########################


          // playerPrincipal.remove();


    }
});

bouton4.addEventListener('click', () => {
        //console.log("StateGlobal etre comme" , stateGlobal[3])
        if(state[3] === 'play' && stateGlobal[3] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[3]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/4-EpisodeFDelepineATELIERTAC.mp3");
              playerPrincipal.setAttribute('episode', "LecteurAtelierTAC.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusATELIERTAC.png" );
              playerPrincipal.setAttribute('num-episode', 3); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton4"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreTac);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreTac,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusATELIERTAC.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusATELIERTAC.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusATELIERTAC.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusATELIERTAC.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusATELIERTAC.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusATELIERTAC.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

             // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[3] = 'pause'; // A ADAPTER ##########################
              stateGlobal[3] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
              };
              stateGlobal[3] = 'play';  // A ADAPTER ##########################


              // playerPrincipal.remove();


        }
    });

bouton5.addEventListener('click', () => {
        //console.log("StateGlobal etre comme" , stateGlobal[4])
        if(state[4] === 'play' && stateGlobal[4] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[4]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/5-EpisodeSSouanRATP.mp3");
              playerPrincipal.setAttribute('episode', "LecteurRATP.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusRATP.png" );
              playerPrincipal.setAttribute('num-episode', 4); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton5"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreRatp);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreRatp,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusRATP.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusRATP.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusRATP.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusRATP.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusRATP.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusRATP.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

             // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[4] = 'pause'; // A ADAPTER ##########################
              stateGlobal[4] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
            };
            stateGlobal[4] = 'play';  // A ADAPTER ##########################


              // playerPrincipal.remove();


        }
    });

bouton6.addEventListener('click', () => {
        //console.log("StateGlobal etre comme" , stateGlobal[5])
        if(state[5] === 'play' && stateGlobal[5] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[5]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/6-EpisodeAMontagutCOMMOWN.mp3");
              playerPrincipal.setAttribute('episode', "LecteurCommown.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusCOMMOWN.png" );
              playerPrincipal.setAttribute('num-episode', 5); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton6"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreCommown);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreCommown,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusCOMMOWN.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusCOMMOWN.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusCOMMOWN.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusCOMMOWN.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusCOMMOWN.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusCOMMOWN.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

             // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[5] = 'pause'; // A ADAPTER ##########################
              stateGlobal[5] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
                  };
                  stateGlobal[5] = 'play';  // A ADAPTER ##########################


              // playerPrincipal.remove();


        }
    });

bouton7.addEventListener('click', () => {
        //console.log("StateGlobal etre comme" , stateGlobal[6])
        if(state[6] === 'play' && stateGlobal[6] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[6]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/7-EpisodeEJacquillatCAMIF.mp3");
              playerPrincipal.setAttribute('episode', "LecteurCamif.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusCAMIF.png" );
              playerPrincipal.setAttribute('num-episode', 6); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton7"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreCamif);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreCamif,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusCAMIF.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusCAMIF.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusCAMIF.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusCAMIF.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusCAMIF.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusCAMIF.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

             // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[6] = 'pause'; // A ADAPTER ##########################
              stateGlobal[6] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
                };
                stateGlobal[6] = 'play';  // A ADAPTER ##########################


              // playerPrincipal.remove();


        }
    });

bouton8.addEventListener('click', () => {
        //console.log("StateGlobal etre comme" , stateGlobal[7])
        if(state[7] === 'play' && stateGlobal[7] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[7]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/8-EpisodeQMLOWTECHLAB.mp3");
              playerPrincipal.setAttribute('episode', "LecteurLowtechlab.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusLOWTECHLAB.png" );
              playerPrincipal.setAttribute('num-episode', 7); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton8"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreLtl);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreLtl,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusLOWTECHLAB.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusLOWTECHLAB.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusLOWTECHLAB.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusLOWTECHLAB.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusLOWTECHLAB.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusLOWTECHLAB.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

             // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[7] = 'pause'; // A ADAPTER ##########################
              stateGlobal[7] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
                };
                stateGlobal[7] = 'play';  // A ADAPTER ##########################


              // playerPrincipal.remove();


        }
    });

bouton9.addEventListener('click', () => {
        //console.log("StateGlobal etre comme" , stateGlobal[8], "state etre comme", state[8])
        if(state[8] === 'play' && stateGlobal[8] === 'off' ) {  // A ADAPTER ##########################
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';

                    };

                  LogoPause(boutonPlayImage[8]); // A ADAPTER ##########################



              playerPrincipal.setAttribute('data-src', "Ressources/episodes/9-Episode9.mp3");
              playerPrincipal.setAttribute('episode', "LecteurCharlotte.css");
              playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusEpisode9.png" );
              playerPrincipal.setAttribute('num-episode', 8); // A ADAPTER ##########################
              playerPrincipal.setAttribute('bouton-episode', "bouton9"); // A ADAPTER ##########################
              playerPrincipal.setAttribute('titreEp', titreEp9);
              playerPrincipal.setAttribute('tempsLancement', 0);
              playerPrincipalContainer.appendChild(playerPrincipal);
              lastOfType.addClass('LastOfTypePlayer');
              menuPlayer.classList.add('menuPlayer');
              paddingMenu.classList.add('paddingPlayer');

              if('mediaSession' in navigator) {
                  navigator.mediaSession.metadata = new MediaMetadata({
                      title: titreEp9,
                      artist: 'Donatien Lenoir',
                      album: "Qu'est-ce qu'on fabrique ?",
                      artwork: [
                          { src: "Ressources/img/IllusEpisode9.png", sizes: '96x96', type: 'image/png' },
                          { src: "Ressources/img/IllusEpisode9.png", sizes: '128x128', type: 'image/png' },
                          { src: "Ressources/img/IllusEpisode9.png", sizes: '192x192', type: 'image/png' },
                          { src: "Ressources/img/IllusEpisode9.png", sizes: '256x256', type: 'image/png' },
                          { src: "Ressources/img/IllusEpisode9.png", sizes: '384x384', type: 'image/png' },
                          { src: "Ressources/img/IllusEpisode9.png", sizes: '512x512', type: 'image/png' }
                      ]
                  });
                };

             // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

              // audio.play();
              state[8] = 'pause'; // A ADAPTER ##########################
              stateGlobal[8] = 'pause';
        }
        // else if (stateGlobal[0] === 'pause') {
        //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

        // }
        else {
              for (var i = 0; i < boutonPlayImage.length; i++) {
                  LogoPlay(boutonPlayImage[i]);
                  state[i] = 'play';
                  stateGlobal[i] = 'off';
                };
                stateGlobal[8] = 'play';  // A ADAPTER ##########################


              // playerPrincipal.remove();


        }
    });

bouton10.addEventListener('click', () => {
            //console.log("StateGlobal etre comme" , stateGlobal[8], "state etre comme", state[8])
            if(state[9] === 'play' && stateGlobal[9] === 'off' ) {  // A ADAPTER ##########################
                      for (var i = 0; i < boutonPlayImage.length; i++) {
                          LogoPlay(boutonPlayImage[i]);
                          state[i] = 'play';
                          stateGlobal[i] = 'off';

                        };

                      LogoPause(boutonPlayImage[9]); // A ADAPTER ##########################



                  playerPrincipal.setAttribute('data-src', "Ressources/episodes/10-QuestcequonfabriqueTheme.mp3");
                  playerPrincipal.setAttribute('episode', "LecteurCharlotte.css");
                  playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusCharlotte.png" );
                  playerPrincipal.setAttribute('num-episode', 8); // A ADAPTER ##########################
                  playerPrincipal.setAttribute('bouton-episode', "bouton9"); // A ADAPTER ##########################
                  playerPrincipal.setAttribute('titreEp', titreEp9);
                  playerPrincipal.setAttribute('tempsLancement', 0);
                  playerPrincipalContainer.appendChild(playerPrincipal);
                  lastOfType.addClass('LastOfTypePlayer');
                  menuPlayer.classList.add('menuPlayer');
                  paddingMenu.classList.add('paddingPlayer');

                  if('mediaSession' in navigator) {
                      navigator.mediaSession.metadata = new MediaMetadata({
                          title: "Thème complet",
                          artist: 'Eloi Muratet',
                          album: "Qu'est-ce qu'on fabrique ?",
                          artwork: [
                              { src: "Ressources/img/IllusCharlotte.png", sizes: '96x96', type: 'image/png' },
                              { src: "Ressources/img/IllusCharlotte.png", sizes: '128x128', type: 'image/png' },
                              { src: "Ressources/img/IllusCharlotte.png", sizes: '192x192', type: 'image/png' },
                              { src: "Ressources/img/IllusCharlotte.png", sizes: '256x256', type: 'image/png' },
                              { src: "Ressources/img/IllusCharlotte.png", sizes: '384x384', type: 'image/png' },
                              { src: "Ressources/img/IllusCharlotte.png", sizes: '512x512', type: 'image/png' }
                          ]
                      });
                    };

                 // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                  // audio.play();
                  state[9] = 'pause'; // A ADAPTER ##########################
                  stateGlobal[9] = 'pause';
            }
            // else if (stateGlobal[0] === 'pause') {
            //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

            // }
            else {
                  for (var i = 0; i < boutonPlayImage.length; i++) {
                      LogoPlay(boutonPlayImage[i]);
                      state[i] = 'play';
                      stateGlobal[i] = 'off';
                    };
                    stateGlobal[9] = 'play';  // A ADAPTER ##########################


                  // playerPrincipal.remove();


            }
        });




// BOUTONS CHAPITRAGE //

//mu//

function generateEventListenerBoutonMu(i){

  var tempsLancement = boutonChapMu[i].value;
  boutonChapMu[i].addEventListener('click', () => {
          //console.log(boutonChapMu[i])
          if(state[0] === 'play' && stateGlobal[0] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[1]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/1-EpisodeMPejaudierrMU.mp3");
                playerPrincipal.setAttribute('episode', "LecteurMu.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusMU.png" );
                playerPrincipal.setAttribute('num-episode', 0); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton1"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', 'mu avec Margot');
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[0] = 'pause'; // A ADAPTER ##########################
                stateGlobal[0] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[0] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapMu.length; i++) {
      generateEventListenerBoutonMu(i) };




//Renz//

function generateEventListenerBoutonRenz(i){
  var tempsLancement = boutonChapRenz[i].value;
  boutonChapRenz[i].addEventListener('click', () => {

          if(state[1] === 'play' && stateGlobal[1] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[1]); // A ADAPTER ##########################



                  playerPrincipal.setAttribute('data-src', "Ressources/episodes/2-EpisodeTSupernatRENZ.mp3");
                  playerPrincipal.setAttribute('episode', "LecteurRenz.css");
                  playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusRENZ.png" );
                  playerPrincipal.setAttribute('num-episode', 1); // A ADAPTER ##########################
                  playerPrincipal.setAttribute('bouton-episode', "bouton2"); // A ADAPTER ##########################
                  playerPrincipal.setAttribute('titreEp', titreRenz);
                  playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                  playerPrincipalContainer.appendChild(playerPrincipal);
                  lastOfType.addClass('LastOfTypePlayer');
                  menuPlayer.classList.add('menuPlayer');
                  paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[1] = 'pause'; // A ADAPTER ##########################
                stateGlobal[1] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[1] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapRenz.length; i++) {
      generateEventListenerBoutonRenz(i) };


//Slean//

function generateEventListenerBoutonSlean(i){
  var tempsLancement = boutonChapSlean[i].value;
  boutonChapSlean[i].addEventListener('click', () => {

          if(state[2] === 'play' && stateGlobal[1] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[2]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/3-EpisodeNDesormeauxSLEAN.mp3");
                playerPrincipal.setAttribute('episode', "LecteurSlean.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusSLEAN.png" );
                playerPrincipal.setAttribute('num-episode', 2); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton3"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreSlean);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[2] = 'pause'; // A ADAPTER ##########################
                stateGlobal[2] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[2] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapSlean.length; i++) {
      generateEventListenerBoutonSlean(i) };

//Tac//

function generateEventListenerBoutonTac(i){
  var tempsLancement = boutonChapTac[i].value;
  boutonChapTac[i].addEventListener('click', () => {

          if(state[3] === 'play' && stateGlobal[3] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[3]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/4-EpisodeFDelepineATELIERTAC.mp3");
                playerPrincipal.setAttribute('episode', "LecteurAtelierTAC.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusATELIERTAC.png" );
                playerPrincipal.setAttribute('num-episode', 3); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton4"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreTac);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[3] = 'pause'; // A ADAPTER ##########################
                stateGlobal[3] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[3] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapTac.length; i++) {
      generateEventListenerBoutonTac(i) };

//Ratp//

function generateEventListenerBoutonRatp(i){
  var tempsLancement = boutonChapRatp[i].value;
  boutonChapRatp[i].addEventListener('click', () => {

          if(state[4] === 'play' && stateGlobal[4] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[3]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/5-EpisodeSSouanRATP.mp3");
                playerPrincipal.setAttribute('episode', "LecteurRATP.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusRATP.png" );
                playerPrincipal.setAttribute('num-episode', 4); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton5"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreRatp);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[4] = 'pause'; // A ADAPTER ##########################
                stateGlobal[4] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[4] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapRatp.length; i++) {
      generateEventListenerBoutonRatp(i) };

//Commown//

function generateEventListenerBoutonCommown(i){
  var tempsLancement = boutonChapCommown[i].value;
  boutonChapCommown[i].addEventListener('click', () => {

          if(state[5] === 'play' && stateGlobal[5] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[5]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/6-EpisodeAMontagutCOMMOWN.mp3");
                playerPrincipal.setAttribute('episode', "LecteurCommown.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusCOMMOWN.png" );
                playerPrincipal.setAttribute('num-episode', 5); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton6"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreCommown);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[5] = 'pause'; // A ADAPTER ##########################
                stateGlobal[5] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[5] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapCommown.length; i++) {
      generateEventListenerBoutonCommown(i) };


//Camif//

function generateEventListenerBoutonCamif(i){
  var tempsLancement = boutonChapCamif[i].value;
  boutonChapCamif[i].addEventListener('click', () => {

          if(state[6] === 'play' && stateGlobal[6] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[6]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/7-EpisodeEJacquillatCAMIF.mp3");
                playerPrincipal.setAttribute('episode', "LecteurCamif.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusCAMIF.png" );
                playerPrincipal.setAttribute('num-episode', 6); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton7"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreCamif);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[6] = 'pause'; // A ADAPTER ##########################
                stateGlobal[6] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[6] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapCamif.length; i++) {
      generateEventListenerBoutonCamif(i) };


//Low-Tech Lab//

function generateEventListenerBoutonLtl(i){
  var tempsLancement = boutonChapLtl[i].value;
  boutonChapLtl[i].addEventListener('click', () => {

          if(state[7] === 'play' && stateGlobal[7] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[7]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/8-EpisodeQMLOWTECHLAB.mp3");
                playerPrincipal.setAttribute('episode', "LecteurLowtechlab.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusLOWTECHLAB.png" );
                playerPrincipal.setAttribute('num-episode', 7); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton8"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreLtl);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[7] = 'pause'; // A ADAPTER ##########################
                stateGlobal[7] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[7] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapLtl.length; i++) {
      generateEventListenerBoutonLtl(i) };

// Episode 9 //

function generateEventListenerBouton9(i){
  var tempsLancement = boutonChapEp9[i].value;
  boutonChapEp9[i].addEventListener('click', () => {

          if(state[8] === 'play' && stateGlobal[8] === 'off' ) {  // A ADAPTER ##########################
                    for (var i = 0; i < boutonPlayImage.length; i++) {
                        LogoPlay(boutonPlayImage[i]);
                        state[i] = 'play';
                        stateGlobal[i] = 'off';

                      };

                    LogoPause(boutonPlayImage[8]); // A ADAPTER ##########################



                playerPrincipal.setAttribute('data-src', "Ressources/episodes/9-Episode9.mp3");
                playerPrincipal.setAttribute('episode', "LecteurCharlotte.css");
                playerPrincipal.setAttribute('photo-src', "Ressources/img/IllusEpisode9.png" );
                playerPrincipal.setAttribute('num-episode', 8); // A ADAPTER ##########################
                playerPrincipal.setAttribute('bouton-episode', "bouton9"); // A ADAPTER ##########################
                playerPrincipal.setAttribute('titreEp', titreEp9);
                playerPrincipal.setAttribute('tempsLancement', tempsLancement);
                playerPrincipalContainer.appendChild(playerPrincipal);
                lastOfType.addClass('LastOfTypePlayer');
                menuPlayer.classList.add('menuPlayer');
                paddingMenu.classList.add('paddingPlayer');

                // document.getElementById('boutonPlay').src="Ressources/svg/pause.svg";

                // audio.play();
                state[8] = 'pause'; // A ADAPTER ##########################
                stateGlobal[8] = 'pause';
          }
          // else if (stateGlobal[0] === 'pause') {
          //   LogoPlay(boutonPlayImage[0]); // A ADAPTER ##########################  ++++ mettre en pause la lecture

          // }
          else {
                for (var i = 0; i < boutonPlayImage.length; i++) {
                    LogoPlay(boutonPlayImage[i]);
                    state[i] = 'play';
                    stateGlobal[i] = 'off';
                  };
                  stateGlobal[8] = 'play';  // A ADAPTER ##########################

                // playerPrincipal.remove();


          }
      });
    }

for (var i = 0; i < boutonChapEp9.length; i++) {
      generateEventListenerBouton9(i) };

// Ressources/episodes/1-EpisodeMPejaudierrMU.mp3
// Ressources/episodes/2-EpisodeTSupernatRENZ.mp3
// Ressources/episodes/3-EpisodeNDesormeauxSLEAN.mp3
// Ressources/episodes/4-EpisodeFDelepineATELIERTAC.mp3
// Ressources/episodes/5-EpisodeSSouanRATP.mp3
// Ressources/episodes/6-EpisodeAMontagutCOMMOWN.mp3
// Ressources/episodes/7-EpisodeEJacquillatCAMIF.mp3
// Ressources/episodes/8-EpisodeQMLOWTECHLAB.mp3
