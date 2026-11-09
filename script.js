document.addEventListener('click', () => {
    // Start the credits animation
    const track = document.querySelector('.credits-track');
    track.classList.add('start-animation');
    // Play the music
    const music = document.getElementById('bg-music');
    music.play().catch(error => {
        // This catch handles cases where browser policies block audio
        console.log("Audio playback failed:", error);
    });
}, { once: true }); // '{ once: true }' ensures the click event only triggers the first time you click