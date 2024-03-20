// Kelimelerin bulunduğu liste
let words = ["elma", "armut", "portakal", "üzüm", "karpuz"];

// Rastgele bir kelime seçen fonksiyon
function generateWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Tahminin doğruluğunu kontrol eden fonksiyon
function checkGuess(secretWord, guessedWord) {
    return secretWord === guessedWord;
}

// Oyunu oynatan fonksiyon
function playGame(difficulty) {
    let secretWord = generateWord();
    let remainingAttempts;
    let maxAttempts;
    let score = 100;
    
    switch (difficulty.toLowerCase()) {
        case "kolay":
            maxAttempts = Math.ceil(secretWord.length / 2);
            remainingAttempts = maxAttempts;
            break;
        case "orta":
            maxAttempts = Math.ceil(secretWord.length / 2);
            remainingAttempts = maxAttempts;
            // Baş harfi açmayı engelle
            secretWord = secretWord.charAt(0) + "_".repeat(secretWord.length - 1);
            break;
        case "zor":
            maxAttempts = Math.ceil(secretWord.length / 2);
            remainingAttempts = maxAttempts;
            // Harfleri karışık getir
            secretWord = secretWord.split('').sort(function(){return 0.5-Math.random()}).join('');
            break;
        default:
            console.log("Geçersiz zorluk seviyesi.");
            return;
    }
    
    alert("Bulunması gereken kelime: " + secretWord);
    
    while (remainingAttempts > 0) {
        let guessedWord = prompt("Tahmininiz:").toLowerCase();
        
        if (checkGuess(secretWord, guessedWord)) {
            alert("Tebrikler! Doğru tahmin ettiniz.");
            break;
        } else {
            alert("Yanlış tahmin!");
            remainingAttempts--;
            score -= 10;
            alert("Kalan deneme hakkınız: " + remainingAttempts);
        }
    }
    
    alert("Skorunuz: " + score);
}

// Oyunu başlatan fonksiyon
function startGame() {
    let difficulty = document.getElementById("difficulty").value;
    playGame(difficulty);
}