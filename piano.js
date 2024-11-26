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
    black1: 'tune/piano Cb(1).mp3',
    black2: 'tune/piano Db(1).mp3',
    black3: 'tune/piano Fb(1).mp3',
    black4: 'tune/piano Gb(1).mp3',
    black5: 'tune/piano Ab(1).mp3',
    black6: 'tune/piano Cb(2).mp3',
    black7: 'tune/piano Db(2).mp3',
    black8: 'tune/piano Fb(2).mp3',
    black9: 'tune/piano Db(3).mp3',
    black10: 'tune/piano Ab(2).mp3',
    black11: 'tune/piano Cb(3).mp3',
    black12: 'tune/piano Db(3).mp3',
    black13: 'tune/piano Fb(3).mp3',
    black14: 'tune/piano Gb(3).mp3'
};

// Looping through each element with the class 'white-key'
// Add event listeners for black keys
document.querySelectorAll('.black-key').forEach(key => {
    key.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation to white key
        console.log(`BLACK KEY CLICKED: ${key.id}`); // Debugging
        const soundUrl = blackKeyToSound[key.id]; // Match id with sound
        if (soundUrl) {
            const audio = new Audio(soundUrl);
            audio.play();
        } else {
            console.log('No sound found for this key'); // Debugging
        }
    });
});


// Add event listeners for white keys
document.querySelectorAll('.white-key').forEach(key => {
    key.addEventListener('click', (event) => {
        const soundUrl = whiteKeyToSound[key.id];
        if (soundUrl) {
            key.classList.add('active-white');
            setTimeout(() => {
                key.classList.remove('active-white');
            }, 200);
            const audio = new Audio(soundUrl);
            audio.play();
        }
    });
});