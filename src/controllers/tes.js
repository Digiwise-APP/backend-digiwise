const MongoClient = require("mongodb").MongoClient;

// Fungsi untuk menghitung skor level
function calculateLevelScore(levelData, userAnswers) {
  let score = 0;
  const totalQuestions = levelData.question.length;

  // Loop melalui setiap pertanyaan pada level ini
  for (let i = 0; i < totalQuestions; i++) {
    const questionData = levelData.question[i];
    const userResponse = userAnswers[levelData.level][i];

    // Memeriksa apakah user response sesuai dengan real_answer
    if (compareAnswers(questionData.real_answer, userResponse)) {
      score += 100 / totalQuestions; // Menambahkan skor berdasarkan jumlah pertanyaan
    }
  }

  return score;
}

// Fungsi untuk membandingkan jawaban pengguna dengan jawaban yang benar
function compareAnswers(correctAnswers, userResponse) {
  // Split jawaban benar dan jawaban pengguna menjadi array
  const correctAnswersArray = correctAnswers.split(",");
  const userResponseArray = userResponse.split(",");

  // Memeriksa apakah setiap elemen jawaban pengguna ada dalam jawaban benar
  for (const response of userResponseArray) {
    if (!correctAnswersArray.includes(response)) {
      return false; // Jawaban salah
    }
  }

  return true; // Semua jawaban benar
}

// Fungsi utama untuk menghitung total skor
function calculateTotalScore(userAnswers) {
  let totalScore = 0;

  // Loop melalui setiap level
  for (const levelData of collection) {
    const levelScore = calculateLevelScore(levelData, userAnswers);
    totalScore += levelScore;
  }

  return totalScore;
}

// Data jawaban pengguna
const userAnswers = {
  1: ["A, D", "A, D", "A", "B", "B, C"],
  2: ["A, D", "A, D", "A", "B, C", "D"],
};

// Koleksi MongoDB
const collection = [
  {
    level: 1,
    question: [
      { id_question: 1, soal: "1. apa itu ayam", real_answer: "A, D" },
      { id_question: 2, soal: "2. apa itu bebek", real_answer: "B, D" },
      { id_question: 3, soal: "3. apa itu kucing", real_answer: "A, B, C" },
      { id_question: 4, soal: "4. apa itu kambing", real_answer: "A" },
      { id_question: 5, soal: "5. apa itu ikan", real_answer: "B, C" },
    ],
  },
  {
    level: 2,
    question: [
      { id_question: 1, soal: "1. apa itu mobil", real_answer: "A" },
      { id_question: 2, soal: "2. apa itu motor", real_answer: "B, D" },
      { id_question: 3, soal: "3. apa itu delman", real_answer: "A, B, D" },
      { id_question: 4, soal: "4. apa itu becak", real_answer: "A, C" },
      { id_question: 5, soal: "5. apa itu dokar", real_answer: "B, C" },
    ],
  },
];

// Hitung total skor
const totalScore = calculateTotalScore(userAnswers);

// Memeriksa apakah total skor memenuhi skor minimum (60)
const minimumScore = 60;
if (totalScore >= minimumScore) {
  console.log(`Selamat, Anda mendapatkan skor total ${totalScore}`);
} else {
  console.log(`Maaf, Anda mendapatkan skor total ${totalScore}, belum mencapai skor minimum ${minimumScore}`);
}
