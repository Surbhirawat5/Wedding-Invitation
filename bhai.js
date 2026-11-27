
// =================================
// HTML ELEMENTS
// =================================

const openButton = document.getElementById("openInvite");
const introScreen = document.getElementById("introScreen");
const invitation = document.getElementById("invitation");

const weddingSong = document.getElementById("weddingSong");
const musicBtn = document.getElementById("musicBtn");

// =================================
// OPEN WEDDING INVITATION
// =================================

openButton.addEventListener("click", function () {

    // Start Wedding Background Music
    weddingSong.play()
        .then(() => {
            musicBtn.innerHTML = "⏸ Pause Music";
        })
        .catch(error => {
            console.log("Music playback failed:", error);
        });

    // Opening Screen Animation
    introScreen.style.opacity = "0";
    introScreen.style.transform = "scale(1.03)";

    setTimeout(function () {

        // Hide Opening Screen
        introScreen.classList.add("hidden");

        // Show Wedding Invitation
        invitation.classList.remove("hidden");

        // Scroll to Top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});

// =================================
// PLAY AND PAUSE MUSIC
// =================================

musicBtn.addEventListener("click", function () {

    if (weddingSong.paused) {

        weddingSong.play()
            .then(() => {
                musicBtn.innerHTML = "⏸ Pause Music";
            })
            .catch(error => {
                console.log("Music playback failed:", error);
            });

    } else {

        weddingSong.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});