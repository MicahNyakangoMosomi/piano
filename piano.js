const keyToSound = {
    one: 'tunes/a.wav',
    two: 'tunes/d.wav',
    three: 'tunes/e.wav',
    four: 'tunes/f.wav',
    five: 'tunes/g.wav',
    six: 'tunes/h.wav',
    seven: 'tunes/j.wav',
    eight: 'tunes/k.wav',
    nine: 'tunes/l.wav',
    ten: 'tunes/o.wav',
    eleven: 'tunes/p.wav',
    twelve: 'tunes/s.wav',
    thirteen: 'tunes/t.wav',
    fourteen: 'tunes/u.wav',
    fifteen: 'tunes/w.wav',
    sixteen: 'tunes/y.wav',
    seventeen: 'tunes/;.wav',
    eighteen: 'tunes/l.wav',
    nineteen: 'tunes/y.wav',
    twenty: 'tunes/o.wav',
    twentyone: 'tunes/h.wav'
};

// Looping through each element with the class 'white-key' 
document.querySelectorAll('.white-key').forEach(key => {
    console.log(key.id);  // key.id fetches the id name of the current element

    // Adding a 'click' event listener to each white key
    key.addEventListener('click', () => {
        const soundUrl = keyToSound[key.id];  // Creating a variable soundUrl which holds the URL based on the key's ID
        if (soundUrl) {
            const audio = new Audio(soundUrl);  // Creates a new audio object with the sound URL
            audio.play();  // Plays the audio
        }
    });
});
