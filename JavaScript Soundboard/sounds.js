/** @format */

// Create an array of all the sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  // Create a button for each sound
  const btn = document.createElement("button");
  btn.classList.add("btn");

  //Name each button according to the sound
  btn.innerText = sound;

  //Append the created button to the HTML body
  document.body.appendChild(btn);

  //Listen to an event, eg., Click event & play sound on click event
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  // A function to stop the songs
  function stopSongs() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);
      song.pause();
      song.currentTime = 0;
    });
  }
});
