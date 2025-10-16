/**
 * KUIS SIKLUS AIR - Script Utama
 * File ini berisi semua logika untuk menjalankan kuis siklus air
 * termasuk koneksi ke Google Sheets melalui Google Apps Script Web App
 */

// ===========================================
// KONFIGURASI DAN VARIABEL GLOBAL
// ===========================================

// URL Google Apps Script Web App (GANTI DENGAN URL ANDA)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Variabel global untuk menyimpan state kuis
let currentQuestionIndex = 0;
let userAnswers = [];
let userInfo = {};
let quizStarted = false;
let quizCompleted = false;
let currentQuestions = [];
let totalQuestions = 0;

// ===========================================
// FUNGSI UTILITAS
// ===========================================

/**
 * Menampilkan notifikasi toast
 * @param {string} message - Pesan yang akan ditampilkan
 * @param {string} type - Tipe notifikasi (success, error, info)
 */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `fixed top-4 right-4 px-6 py-3 rounded-xl shadow-lg z-50 toast-enter`;
    
    // Set warna berdasarkan tipe
    switch(type) {
        case 'error':
            toast.classList.add('bg-red-500');
            break;
        case 'info':
            toast.classList.add('bg-blue-500');
            break;
        default:
            toast.classList.add('bg-green-500');
    }
    
    toast.classList.remove('hidden');
    
    // Auto hide setelah 3 detik
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

/**
 * Menampilkan loading overlay
 * @param {boolean} show - Tampilkan atau sembunyikan loading
 */
function showLoading(show = true) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (show) {
        loadingOverlay.classList.remove('hidden');
    } else {
        loadingOverlay.classList.add('hidden');
    }
}

/**
 * Menghitung skor berdasarkan jawaban yang benar
 * @returns {number} Skor dalam persentase
 */
function calculateScore() {
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuestions[index].correctAnswer) {
            correctAnswers++;
        }
    });
    return Math.round((correctAnswers / totalQuestions) * 100);
}

/**
 * Mendapatkan pesan motivasi berdasarkan skor
 * @param {number} score - Skor dalam persentase
 * @returns {string} Pesan motivasi
 */
function getScoreMessage(score) {
    if (score >= 90) return "Luar biasa! Kamu sudah memahami siklus air dengan sangat baik! 🌊✨";
    if (score >= 80) return "Bagus sekali! Pengetahuanmu tentang siklus air sudah solid! 💧👍";
    if (score >= 70) return "Bagus! Sedikit lagi untuk menguasai siklus air! 🌧️💪";
    if (score >= 60) return "Cukup baik! Terus belajar tentang siklus air! 🌊📚";
    return "Jangan menyerah! Pelajari lagi tentang siklus air untuk hasil yang lebih baik! 💧🎯";
}

/**
 * Menentukan soal berdasarkan kelas
 * @param {string} userClass - Kelas yang dipilih user
 */
function selectQuestionsByClass(userClass) {
    switch(userClass) {
        case '4':
            currentQuestions = [...questionsClass4];
            totalQuestions = 20;
            break;
        case '5':
            currentQuestions = [...questionsClass5];
            totalQuestions = 30;
            break;
        case '6':
            currentQuestions = [...questionsClass6];
            totalQuestions = 40;
            break;
        default:
            currentQuestions = [...questionsClass4];
            totalQuestions = 20;
    }
    
    // Reset user answers array
    userAnswers = new Array(totalQuestions).fill(undefined);
}

// ===========================================
// FUNGSI UI DAN NAVIGASI
// ===========================================

/**
 * Menampilkan form input user dan menyembunyikan elemen lainnya
 */
function showUserForm() {
    document.getElementById('userForm').classList.remove('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('leaderboardContainer').classList.add('hidden');
    document.getElementById('progressSection').classList.add('hidden');
    
    // Reset state
    currentQuestionIndex = 0;
    userAnswers = [];
    userInfo = {};
    quizStarted = false;
    quizCompleted = false;
    currentQuestions = [];
    totalQuestions = 0;
}

/**
 * Menampilkan kuis dan menyembunyikan elemen lainnya
 */
function showQuiz() {
    document.getElementById('userForm').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('leaderboardContainer').classList.add('hidden');
    document.getElementById('progressSection').classList.remove('hidden');
    
    quizStarted = true;
    displayQuestion();
    updateProgress();
}

/**
 * Menampilkan hasil kuis
 */
function showResults() {
    document.getElementById('userForm').classList.add('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');
    document.getElementById('leaderboardContainer').classList.add('hidden');
    document.getElementById('progressSection').classList.add('hidden');
    
    quizCompleted = true;
    displayResults();
}

/**
 * Menampilkan leaderboard
 */
function showLeaderboard() {
    document.getElementById('leaderboardContainer').classList.remove('hidden');
    loadLeaderboard();
}

/**
 * Menyembunyikan leaderboard
 */
function hideLeaderboard() {
    document.getElementById('leaderboardContainer').classList.add('hidden');
}

// ===========================================
// FUNGSI KUIS
// ===========================================

/**
 * Menampilkan pertanyaan saat ini
 */
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const answerOptions = document.getElementById('answerOptions');
    const questionCounter = document.getElementById('questionCounter');
    const questionType = document.getElementById('questionType');

    // Add transition classes for question container
    const quizCard = document.getElementById('quizContainer');
    if (quizCard) {
        quizCard.style.opacity = '0';
        quizCard.style.transform = 'translateX(20px)';
        setTimeout(() => {
            quizCard.style.transition = 'transform .35s ease, opacity .35s ease';
            quizCard.style.opacity = '1';
            quizCard.style.transform = 'translateX(0)';
        }, 0);
    }

    // Update teks pertanyaan
    questionText.textContent = `${currentQuestionIndex + 1}. ${question.question}`;

    // Update counter
    questionCounter.textContent = `Soal ${currentQuestionIndex + 1}`;

    // Update question type indicator
    const typeIndicator = questionType.querySelector('span');
    if (question.type === 'literasi') {
        typeIndicator.textContent = 'Soal Literasi';
        typeIndicator.className = 'bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium';
    } else {
        typeIndicator.textContent = 'Soal Umum';
        typeIndicator.className = 'bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium';
    }

    // Generate opsi jawaban
    answerOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = `option-btn btn-anim w-full text-left p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-200 ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`;
        button.innerHTML = `<span class="font-medium text-blue-600">${String.fromCharCode(65 + index)}.</span> ${option}`;
        button.onclick = () => selectAnswer(index);
        answerOptions.appendChild(button);
    });

    // Update tombol navigasi
    updateNavigationButtons();
}

/**
 * Memilih jawaban untuk pertanyaan saat ini
 * @param {number} answerIndex - Index jawaban yang dipilih
 */
function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Update tampilan opsi
    const options = document.querySelectorAll('.option-btn');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
    });
    
    // Enable tombol next/submit
    updateNavigationButtons();
}

/**
 * Update tombol navigasi berdasarkan state saat ini
 */
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Apply animation helpers
    if (prevBtn) prevBtn.classList.add('btn-anim');
    if (nextBtn) nextBtn.classList.add('btn-anim');
    if (submitBtn) submitBtn.classList.add('btn-anim');

    // Previous button
    if (currentQuestionIndex > 0) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }

    // Next/Submit button
    if (userAnswers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    } else {
        nextBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');
    }
}

/**
 * Update progress bar dan teks progress
 */
function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} dari ${totalQuestions}`;
}

/**
 * Pindah ke pertanyaan berikutnya
 */
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    }
}

/**
 * Pindah ke pertanyaan sebelumnya
 */
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

/**
 * Menampilkan hasil kuis
 */
function displayResults() {
    const score = calculateScore();
    const finalScoreElement = document.getElementById('finalScore');
    const scoreTextElement = document.getElementById('scoreText');
    const scorePercentageElement = document.getElementById('scorePercentage');
    const scoreMessageElement = document.getElementById('scoreMessage');

    // Animate results container
    const results = document.getElementById('resultsContainer');
    if (results) {
        results.style.opacity = '0';
        results.style.transform = 'scale(0.98)';
        setTimeout(() => {
            results.style.transition = 'transform .35s ease, opacity .35s ease';
            results.style.opacity = '1';
            results.style.transform = 'scale(1)';
        }, 0);
    }

    // Animasi score counting
    let currentScore = 0;
    const increment = Math.ceil(score / 30); // Animate over 30 steps
    
    const scoreInterval = setInterval(() => {
        currentScore += increment;
        if (currentScore >= score) {
            currentScore = score;
            clearInterval(scoreInterval);
        }
        
        finalScoreElement.textContent = currentScore;
        scoreTextElement.textContent = `Skor kamu: ${currentScore} dari 100`;
        scorePercentageElement.textContent = `${currentScore}%`;
    }, 50);
    
    // Set pesan motivasi
    scoreMessageElement.textContent = getScoreMessage(score);
    
    // Kirim data ke Google Sheets
    sendDataToGoogleSheets(score);

    // Tampilkan tombol Review
    const reviewBtn = document.getElementById('reviewBtn');
    if (reviewBtn) {
        reviewBtn.classList.add('btn-anim');
        reviewBtn.onclick = () => showReview();
    }
}

// Review Mode
function showReview() {
    // Hide non-review sections
    document.getElementById('userForm').classList.add('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('leaderboardContainer').classList.add('hidden');

    const reviewSection = document.getElementById('review-section');
    const reviewContainer = document.getElementById('review-container');

    if (!reviewSection || !reviewContainer) return;

    // Build review list
    reviewContainer.innerHTML = '';
    currentQuestions.forEach((q, idx) => {
        const userAnsIndex = userAnswers[idx];
        const isCorrect = userAnsIndex === q.correctAnswer;
        const letter = (i) => String.fromCharCode(65 + i);

        const card = document.createElement('div');
        card.style.background = '#ffffff';
        card.style.borderRadius = '14px';
        card.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
        card.style.padding = '16px 18px';
        card.style.animation = `slideIn .35s ease both`;
        card.style.animationDelay = `${idx * 40}ms`;

        const title = document.createElement('div');
        title.className = 'text-sm font-semibold text-blue-700 mb-1';
        title.textContent = `Pertanyaan ke-${idx + 1}`;

        const text = document.createElement('div');
        text.className = 'text-gray-800 mb-3';
        text.textContent = q.question;

        const opts = document.createElement('div');
        opts.className = 'space-y-1 mb-2';

        q.options.forEach((opt, i) => {
            const row = document.createElement('div');
            row.className = 'text-sm';
            const mark = userAnsIndex === i ? '(x)' : '( )';
            row.textContent = `${mark} ${letter(i)}. ${opt}`;
            opts.appendChild(row);
        });

        const answer = document.createElement('div');
        answer.style.marginTop = '6px';
        answer.style.fontWeight = '600';
        answer.style.color = isCorrect ? '#4CAF50' : '#F44336';
        const your = userAnsIndex != null ? letter(userAnsIndex) : '-';
        answer.textContent = `Jawaban kamu: ${your} ${isCorrect ? '✅' : '❌'}`;

        const expl = document.createElement('div');
        expl.className = 'text-sm text-gray-700 mt-2';
        expl.textContent = `Pembahasan: ${q.explanation || '-'}`;

        card.appendChild(title);
        card.appendChild(text);
        card.appendChild(opts);
        card.appendChild(answer);
        card.appendChild(expl);

        reviewContainer.appendChild(card);
    });

    reviewSection.classList.remove('hidden');

    // Wire buttons
    const backHome = document.getElementById('backHome');
    if (backHome) {
        backHome.classList.add('btn-anim');
        backHome.onclick = () => {
            showUserForm();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
    // Certificate feature removed
}

// Certificate feature removed

function tampilkanSertifikat(nama, kelas, asalSekolah, skor) {
    // Backward compatibility if this function is still called elsewhere
    prepareCertificateActions(nama, kelas, asalSekolah, skor);
    const cert = document.getElementById('certificate');
    cert.classList.remove('hidden');
}

// ===========================================
// FUNGSI KONEKSI KE GOOGLE SHEETS
// ===========================================

/**
 * Mengirim data hasil kuis ke Google Sheets
 * @param {number} score - Skor akhir pengguna
 */
// Supabase config (isi sesuai project Anda)
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
let supabaseClient = null;

async function sendDataToGoogleSheets(score) {
    try {
        showLoading(true);
        if (!supabaseClient) {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        }
        const payload = {
            name: userInfo.name,
            class: userInfo.class,
            school: userInfo.school,
            score: score,
            total_questions: totalQuestions,
            correct_answers: Math.round((score / 100) * totalQuestions),
            created_at: new Date().toISOString()
        };
        const { error } = await supabaseClient.from('quiz_results').insert(payload);
        if (error) throw error;
        showToast('Data berhasil disimpan (Supabase)!', 'success');
        
    } catch (error) {
        console.error('Error sending data to Google Sheets:', error);
        showToast('Gagal mengirim data ke server. Coba lagi nanti.', 'error');
    } finally {
        showLoading(false);
    }
}

/**
 * Memuat dan menampilkan leaderboard dari Google Sheets
 */
async function loadLeaderboard() {
    const leaderboardContent = document.getElementById('leaderboardContent');
    
    // Show loading state
    leaderboardContent.innerHTML = `
        <div class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p class="text-gray-600 mt-2">Memuat leaderboard...</p>
        </div>
    `;
    
    try {
        // Simulasi data leaderboard (ganti dengan request ke Google Sheets)
        // Untuk demo, kita gunakan data statis
        const mockLeaderboard = [
            { name: "Ahmad", class: "5", school: "SD Negeri 1 Jakarta", score: 95, timestamp: "2024-01-15" },
            { name: "Siti", class: "6", school: "SD Negeri 2 Bandung", score: 90, timestamp: "2024-01-15" },
            { name: "Budi", class: "4", school: "SD Negeri 3 Surabaya", score: 85, timestamp: "2024-01-14" },
            { name: "Dewi", class: "5", school: "SD Negeri 4 Medan", score: 80, timestamp: "2024-01-14" },
            { name: "Rudi", class: "6", school: "SD Negeri 5 Yogyakarta", score: 75, timestamp: "2024-01-13" }
        ];
        
        // Simulasi delay network
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        displayLeaderboard(mockLeaderboard);
        
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        leaderboardContent.innerHTML = `
            <div class="text-center py-8">
                <p class="text-red-600">Gagal memuat leaderboard. Silakan coba lagi nanti.</p>
            </div>
        `;
    }
}

/**
 * Menampilkan leaderboard
 * @param {Array} leaderboardData - Data leaderboard dari server
 */
function displayLeaderboard(leaderboardData) {
    const leaderboardContent = document.getElementById('leaderboardContent');
    
    if (!leaderboardData || leaderboardData.length === 0) {
        leaderboardContent.innerHTML = `
            <div class="text-center py-8">
                <p class="text-gray-600">Belum ada data leaderboard.</p>
            </div>
        `;
        return;
    }
    
    let html = '<div class="space-y-3">';
    
    leaderboardData.forEach((entry, index) => {
        const rank = index + 1;
        const rankClass = rank <= 3 ? `rank-${rank}` : 'bg-blue-50';
        
        html += `
            <div class="leaderboard-entry flex items-center justify-between p-4 rounded-xl ${rankClass} transition-all duration-200">
                <div class="flex items-center space-x-4">
                    <div class="text-2xl font-bold ${rank <= 3 ? 'text-white' : 'text-blue-600'}">
                        ${rank <= 3 ? '🏆' : rank}
                    </div>
                    <div>
                        <div class="font-semibold ${rank <= 3 ? 'text-white' : 'text-gray-800'}">${entry.name}</div>
                        <div class="text-sm ${rank <= 3 ? 'text-white' : 'text-gray-600'}">Kelas ${entry.class} - ${entry.school}</div>
                        <div class="text-xs ${rank <= 3 ? 'text-white' : 'text-gray-500'}">${new Date(entry.timestamp).toLocaleDateString('id-ID')}</div>
                    </div>
                </div>
                <div class="text-2xl font-bold ${rank <= 3 ? 'text-white' : 'text-blue-600'}">
                    ${entry.score}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    leaderboardContent.innerHTML = html;
}

// ===========================================
// EVENT LISTENERS
// ===========================================

/**
 * Setup semua event listeners
 */
function setupEventListeners() {
    // Form input user
    document.getElementById('userInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('userName').value.trim();
        const userClass = document.getElementById('userClass').value;
        const school = document.getElementById('userSchool').value.trim();
        
        if (!name || !userClass || !school) {
            showToast('Mohon isi semua field dengan lengkap!', 'error');
            return;
        }
        
        userInfo = { name, class: userClass, school };
        
        // Pilih soal berdasarkan kelas
        selectQuestionsByClass(userClass);
        
        showToast(`Selamat datang, ${name}! Mari mulai kuis siklus air.`, 'success');
        showQuiz();
    });
    
    // Tombol navigasi kuis
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('submitBtn').addEventListener('click', function() {
        if (userAnswers.every(answer => answer !== undefined)) {
            showResults();
        } else {
            showToast('Mohon jawab semua pertanyaan terlebih dahulu!', 'error');
        }
    });
    
    // Tombol hasil
    document.getElementById('retakeBtn').addEventListener('click', showUserForm);
    document.getElementById('leaderboardBtn').addEventListener('click', showLeaderboard);
    
    // Tombol leaderboard
    document.getElementById('closeLeaderboardBtn').addEventListener('click', hideLeaderboard);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!quizStarted || quizCompleted) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                if (currentQuestionIndex > 0) prevQuestion();
                break;
            case 'ArrowRight':
                if (currentQuestionIndex < totalQuestions - 1 && userAnswers[currentQuestionIndex] !== undefined) {
                    nextQuestion();
                }
                break;
            case 'Enter':
                if (userAnswers[currentQuestionIndex] !== undefined) {
                    if (currentQuestionIndex === totalQuestions - 1) {
                        showResults();
                    } else {
                        nextQuestion();
                    }
                }
                break;
        }
    });
}

// ===========================================
// INISIALISASI APLIKASI
// ===========================================

/**
 * Inisialisasi aplikasi ketika halaman dimuat
 */
function initApp() {
    console.log('🌊 Kuis Siklus Air dimulai!');
    console.log(`📊 Total pertanyaan tersedia: Kelas 4 (${questionsClass4.length}), Kelas 5 (${questionsClass5.length}), Kelas 6 (${questionsClass6.length})`);
    
    // Setup event listeners
    setupEventListeners();
    
    // Tampilkan form user sebagai halaman awal
    showUserForm();
    
    // Log konfigurasi
    console.log('🔧 Konfigurasi:');
    console.log('- Google Script URL:', GOOGLE_SCRIPT_URL);
    console.log('- Soal Kelas 4:', questionsClass4.length);
    console.log('- Soal Kelas 5:', questionsClass5.length);
    console.log('- Soal Kelas 6:', questionsClass6.length);
    
    // Warning jika URL belum dikonfigurasi
    if (GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
        console.warn('⚠️  PERINGATAN: URL Google Apps Script belum dikonfigurasi!');
        console.warn('   Silakan ganti YOUR_SCRIPT_ID dengan ID script Anda yang sebenarnya.');
    }
}

// Jalankan aplikasi ketika DOM sudah dimuat
document.addEventListener('DOMContentLoaded', initApp);

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('toggleTheme');
    if (!btn) return;
    const apply = (mode)=>{
        if (mode === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };
    const saved = localStorage.getItem('theme');
    if (saved) apply(saved);
    btn.addEventListener('click', ()=>{
        const nowDark = !document.documentElement.classList.contains('dark');
        apply(nowDark ? 'dark':'light');
        localStorage.setItem('theme', nowDark ? 'dark':'light');
    });
});
