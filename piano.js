const keyToSound = {
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

// Looping through each element with the class 'white-key' 
document.querySelectorAll('.white-key').forEach(key => {
    console.log(key.id);  // key.id fetches the id name of the current element

    // Adding a 'click' event listener to each white key
    key.addEventListener('click', (event) => {
        const soundUrl = keyToSound[key.id];  // Creating a variable soundUrl which holds the URL based on the key's ID
        if (soundUrl) {
            const audio = new Audio(soundUrl);  // Creates a new audio object with the sound URL
            audio.play();  // Plays the audio
            event.stopPropagation;
        }
    });
});
