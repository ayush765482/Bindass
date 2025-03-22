document.getElementById('startBtn').addEventListener('click', function() {
    this.style.display = 'none';
    startFallingHearts();
    document.getElementById('heartIcon').style.display = 'block';
    document.getElementById('bgMusic').play();
});

document.getElementById('muteBtn').addEventListener('click', function() {
    let music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
        this.textContent = "🔊";
    } else {
        music.pause();
        this.textContent = "🔇";
    }
});

document.getElementById('heartIcon').addEventListener('click', function() {
    this.style.display = 'none';
    startLoveLetter();
});

function startLoveLetter() {
    let text = `Meri Jaan,\n\nJab se tum meri zindagi me aayi ho, tab se sab kuch badal gaya hai. Tum meri duniya ki sabse pyari cheez ho, meri sabse badi khushi ho. Har din tumse baat karna, tumhari muskurahat dekhna, yahi meri zindagi ka sabse sukoon bhara hissa hai.\n\nPar kabhi kabhi, maine tumhe hurt bhi kiya hoga. Shayad kabhi galti se koi aisi baat keh di ho jo tumhe achi nahi lagi ho. Par sach batau? Mera dil sirf tumse juda hai, aur hamesha rahega. Main chahta hoon ki hum hamesha saath rahein, bina kisi doori ke, bina kisi shikayat ke.\n\nMain tumse wada karta hoon, jitna bhi waqt milega, main tumhe hamesha khush rakhne ki koshish karunga. Tum meri duniya ho, meri zindagi ho, aur main sirf tumhara hoon.\n\nI love you beyond words, meri jaan! ❤️`;
    
    let index = 0;
    let letterContainer = document.getElementById('letterContainer');
    let loveText = document.getElementById('loveText');
    letterContainer.style.display = 'block';

    let typingEffect = setInterval(() => {
        loveText.textContent += text[index];
        index++;
        if (index === text.length) clearInterval(typingEffect);
    }, 100); 
}

function startFallingHearts() {
    setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.getElementById('heartContainer').appendChild(heart);

        setTimeout(() => { heart.remove(); }, 5000);
    }, 300);
}
