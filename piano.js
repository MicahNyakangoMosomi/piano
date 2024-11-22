const whiteKeyToSound = {
    one: 'tune/piano C(1).mp3',
    two: 'tune/piano D(1).mp3',
    three: 'tune/piano E(1).mp3',
    four: 'tune/piano F(1).mp3',
    five: 'tune/piano G(1).mp3',
    six: 'tune/piano A(1).mp3',
    seven: 'tune/piano B(2).mp3',
    eight: 'tune/piano C(2).mp3',
    nine: 'tune/piano D(2).mp3',
    ten: 'tune/piano E(2).mp3',
    eleven: 'tune/piano F(2).mp3',
    twelve: 'tune/piano G(2).mp3',
    thirteen: 'tune/piano A(2).mp3',
    fourteen: 'tune/piano B(2).mp3',
    fifteen: 'tune/piano C(3).mp3',
    sixteen: 'tune/piano D(3).mp3',
    seventeen: 'tune/piano E(3).mp3',
    eighteen: 'tune/piano F(3).mp3',
    nineteen: 'tune/piano G(3).mp3',
    twenty: 'tune/piano A(3).mp3',
    twentyone: 'tune/piano B(3).mp3'
};

const blackKeyToSound = {
    black1: 'tune/piano C#(1).mp3',
    black2: 'tune/piano D#(1).mp3',
    black3: 'tune/piano F#(1).mp3',
    black4: 'tune/piano G#(1).mp3',
    black5: 'tune/piano A#(1).mp3',
    black6: 'tune/piano C#(2).mp3',
    black7: 'tune/piano D#(2).mp3',
    black8: 'tune/piano F#(2).mp3',
    black9: 'tune/piano G#(2).mp3',
    black10: 'tune/piano A#(2).mp3',
    black11: 'tune/piano C#(3).mp3',
    black12: 'tune/piano D#(3).mp3',
    black13: 'tune/piano F#(3).mp3',
    black14: 'tune/piano G#(3).mp3'
};

// Add event listeners to all white keys
document.querySelectorAll('.white-key').forEach(key => {
    key.addEventListener('click', (event) => {
        // Check if the target element is a black key
        if (event.target.classList.contains('black-key')) {
            event.stopPropagation(); // Prevent the click from propagating to the white key(parent elemnt o the black key)
            console.log('BLACK'); 
            const soundUrl = blackKeyToSound[event.target.id]; // Get the black key sound URL
            if (soundUrl) {
                const audio = new Audio(soundUrl); // Create and play the audio
                audio.play();
            }
        } else {
            console.log('WHITE'); 
            const soundUrl = whiteKeyToSound[key.id]; // Get the white key sound URL
            if (soundUrl) {
                const audio = new Audio(soundUrl); // Create and play the audio
                audio.play();
            }
        }
    });
});
