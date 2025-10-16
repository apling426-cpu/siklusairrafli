/**
 * KUIS SIKLUS AIR - Soal untuk Siswa SD
 * File ini berisi semua soal untuk kelas 4, 5, dan 6 SD
 * dengan tema siklus air dan literasi sains
 */

// ===========================================
// SOAL KELAS 4 SD (20 soal - dasar dan ilustratif)
// ===========================================

const questionsClass4 = [
    {
        question: "Apa yang terjadi pada air ketika dipanaskan?",
        options: [
            "Air menjadi dingin",
            "Air menguap menjadi uap air",
            "Air menjadi es",
            "Air hilang"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Air yang dipanaskan akan menguap menjadi uap air yang tidak terlihat."
    },
    {
        question: "Dari manakah sumber air di bumi?",
        options: [
            "Hanya dari laut",
            "Hanya dari sungai",
            "Laut, sungai, danau, dan air tanah",
            "Hanya dari hujan"
        ],
        correctAnswer: 2,
        type: "umum",
        explanation: "Air di bumi berasal dari berbagai sumber seperti laut, sungai, danau, dan air tanah."
    },
    {
        question: "Apa nama proses ketika uap air di udara berubah menjadi tetesan air?",
        options: [
            "Penguapan",
            "Kondensasi",
            "Presipitasi",
            "Evaporasi"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Kondensasi adalah proses ketika uap air berubah menjadi tetesan air."
    },
    {
        question: "Cerita: Rina melihat awan di langit. Awan terbuat dari apa?",
        options: [
            "Kapas putih",
            "Uap air yang terkondensasi",
            "Asap",
            "Debu"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Awan terbentuk dari uap air yang naik ke udara dan terkondensasi menjadi tetesan kecil."
    },
    {
        question: "Apa yang terjadi pada air hujan yang jatuh ke tanah?",
        options: [
            "Langsung hilang",
            "Mengalir ke sungai atau meresap ke tanah",
            "Menjadi es",
            "Menguap langsung"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Air hujan bisa mengalir ke sungai atau meresap ke dalam tanah."
    },
    {
        question: "Siklus air dimulai dari mana?",
        options: [
            "Dari hujan",
            "Dari penguapan air",
            "Dari awan",
            "Dari sungai"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Siklus air dimulai dari penguapan air oleh panas matahari."
    },
    {
        question: "Cerita: Pak Budi menanam padi di sawah. Mengapa padi butuh air?",
        options: [
            "Agar padi tidak panas",
            "Agar padi bisa tumbuh dan hidup",
            "Agar padi terlihat bagus",
            "Agar padi tidak kering"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Tanaman padi membutuhkan air untuk tumbuh dan hidup, seperti semua makhluk hidup."
    },
    {
        question: "Apa nama proses ketika air dari tumbuhan menguap?",
        options: [
            "Transpirasi",
            "Evaporasi",
            "Kondensasi",
            "Presipitasi"
        ],
        correctAnswer: 0,
        type: "umum",
        explanation: "Transpirasi adalah proses penguapan air dari daun tumbuhan."
    },
    {
        question: "Apa yang terjadi pada air di sungai ketika cuaca panas?",
        options: [
            "Air menjadi lebih banyak",
            "Sebagian air menguap",
            "Air menjadi es",
            "Air tidak berubah"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Ketika cuaca panas, sebagian air di sungai akan menguap karena panas matahari."
    },
    {
        question: "Cerita: Andi melihat embun di daun pagi hari. Dari mana embun berasal?",
        options: [
            "Dari hujan malam hari",
            "Dari uap air yang terkondensasi",
            "Dari air yang disiram",
            "Dari air yang menetes"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Embun terbentuk dari uap air di udara yang terkondensasi di permukaan daun yang dingin."
    },
    {
        question: "Apa yang dimaksud dengan siklus air?",
        options: [
            "Air yang berputar",
            "Perputaran air di bumi secara terus-menerus",
            "Air yang berubah bentuk",
            "Air yang mengalir"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Siklus air adalah perputaran air di bumi secara terus-menerus dari penguapan, kondensasi, dan presipitasi."
    },
    {
        question: "Apa nama tetesan air yang jatuh dari awan?",
        options: [
            "Embun",
            "Hujan",
            "Salju",
            "Kabut"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Hujan adalah tetesan air yang jatuh dari awan ke bumi."
    },
    {
        question: "Cerita: Siti tinggal di daerah yang sering hujan. Mengapa hujan penting?",
        options: [
            "Agar udara tidak panas",
            "Untuk menyediakan air bersih bagi makhluk hidup",
            "Agar tidak ada debu",
            "Agar suasana sejuk"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Hujan penting untuk menyediakan air bersih yang dibutuhkan oleh semua makhluk hidup."
    },
    {
        question: "Apa yang terjadi pada air di danau pada siang hari yang panas?",
        options: [
            "Air menjadi dingin",
            "Sebagian air menguap",
            "Air membeku",
            "Air bertambah"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Pada siang hari yang panas, sebagian air di danau akan menguap karena panas matahari."
    },
    {
        question: "Apa yang menyebabkan air menguap?",
        options: [
            "Angin",
            "Panas matahari",
            "Hujan",
            "Awan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Panas matahari menyebabkan air menguap menjadi uap air."
    },
    {
        question: "Cerita: Rudi melihat sungai mengering. Apa yang bisa menyebabkan hal ini?",
        options: [
            "Terlalu banyak hujan",
            "Cuaca panas yang berkepanjangan",
            "Banyak ikan di sungai",
            "Air sungai terlalu dingin"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Cuaca panas yang berkepanjangan dapat menyebabkan sungai mengering karena air menguap lebih cepat."
    },
    {
        question: "Apa yang terjadi pada uap air ketika naik ke udara yang dingin?",
        options: [
            "Uap air menjadi panas",
            "Uap air berubah menjadi awan",
            "Uap air menghilang",
            "Uap air menjadi es"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Uap air yang naik ke udara dingin akan berubah menjadi awan melalui proses kondensasi."
    },
    {
        question: "Apa nama air yang tersimpan di bawah tanah?",
        options: [
            "Air laut",
            "Air hujan",
            "Air tanah",
            "Air sungai"
        ],
        correctAnswer: 2,
        type: "umum",
        explanation: "Air tanah adalah air yang tersimpan di dalam tanah dan batuan di bawah permukaan bumi."
    },
    {
        question: "Cerita: Bu Ani mengumpulkan air hujan di bak. Untuk apa air hujan bisa digunakan?",
        options: [
            "Hanya untuk minum",
            "Untuk menyiram tanaman dan mencuci",
            "Hanya untuk mandi",
            "Tidak bisa digunakan"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Air hujan dapat digunakan untuk berbagai keperluan seperti menyiram tanaman dan mencuci."
    },
    {
        question: "Apa yang dimaksud dengan presipitasi dalam siklus air?",
        options: [
            "Penguapan air",
            "Jatuhnya air dari awan (hujan, salju)",
            "Kondensasi uap air",
            "Aliran air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Presipitasi adalah proses jatuhnya air dari awan dalam bentuk hujan, salju, atau es."
    }
];

// ===========================================
// SOAL KELAS 5 SD (30 soal - mulai analitis, ada soal cerita)
// ===========================================

const questionsClass5 = [
    {
        question: "Apa yang terjadi pada air di permukaan bumi ketika terkena panas matahari?",
        options: [
            "Air membeku menjadi es",
            "Air menguap menjadi uap air",
            "Air berubah warna",
            "Air bertambah banyak"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Air di permukaan bumi akan menguap menjadi uap air ketika terkena panas matahari."
    },
    {
        question: "Cerita: Desa Sukamaju mengalami kekeringan. Penduduk kesulitan mendapat air bersih. Apa yang bisa dilakukan untuk mengatasi masalah ini?",
        options: [
            "Menebang pohon lebih banyak",
            "Membuat sumur resapan dan menanam pohon",
            "Membuang sampah ke sungai",
            "Menggunakan air laut untuk minum"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Sumur resapan dan penanaman pohon dapat membantu menjaga ketersediaan air tanah."
    },
    {
        question: "Apa yang dimaksud dengan evaporasi dalam siklus air?",
        options: [
            "Perubahan air menjadi es",
            "Penguapan air dari permukaan",
            "Kondensasi uap air",
            "Jatuhnya hujan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Evaporasi adalah proses penguapan air dari permukaan laut, sungai, danau, atau tanah."
    },
    {
        question: "Mengapa awan bisa bergerak di langit?",
        options: [
            "Karena awan hidup",
            "Karena ada angin yang mendorongnya",
            "Karena awan berat",
            "Karena awan ringan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Awan bergerak karena dorongan angin yang membawa uap air dan tetesan air di dalamnya."
    },
    {
        question: "Cerita: Pak Hasan adalah petani yang menanam sayuran. Ia selalu menyiram tanaman pada pagi dan sore hari. Mengapa waktu tersebut dipilih?",
        options: [
            "Agar tanaman tidak kedinginan",
            "Agar air tidak cepat menguap",
            "Agar tanaman tidak panas",
            "Agar tanah tidak basah"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Pagi dan sore hari dipilih karena suhu belum terlalu panas sehingga air tidak cepat menguap."
    },
    {
        question: "Apa yang terjadi pada uap air ketika suhu udara turun?",
        options: [
            "Uap air menjadi panas",
            "Uap air mengembun menjadi tetesan air",
            "Uap air menghilang",
            "Uap air menjadi es"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Ketika suhu turun, uap air akan mengembun menjadi tetesan air yang membentuk awan atau embun."
    },
    {
        question: "Apa perbedaan antara evaporasi dan transpirasi?",
        options: [
            "Tidak ada perbedaan",
            "Evaporasi dari air, transpirasi dari tumbuhan",
            "Evaporasi lebih cepat",
            "Transpirasi lebih banyak"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Evaporasi adalah penguapan dari permukaan air, sedangkan transpirasi adalah penguapan dari daun tumbuhan."
    },
    {
        question: "Cerita: Kota Jakarta sering mengalami banjir saat musim hujan. Apa yang menyebabkan banjir?",
        options: [
            "Terlalu banyak pohon",
            "Kurangnya daerah resapan air",
            "Terlalu banyak sungai",
            "Air hujan terlalu sedikit"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Banjir terjadi karena kurangnya daerah resapan air, sehingga air hujan langsung mengalir ke permukaan."
    },
    {
        question: "Apa yang dimaksud dengan infiltrasi dalam siklus air?",
        options: [
            "Penguapan air",
            "Peresapan air ke dalam tanah",
            "Kondensasi uap air",
            "Aliran air di permukaan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Infiltrasi adalah proses peresapan air hujan ke dalam tanah melalui pori-pori tanah."
    },
    {
        question: "Mengapa air laut tidak bisa langsung diminum?",
        options: [
            "Karena air laut dingin",
            "Karena air laut mengandung garam",
            "Karena air laut panas",
            "Karena air laut kotor"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Air laut mengandung garam yang membuatnya tidak layak untuk diminum langsung."
    },
    {
        question: "Cerita: Sekolah SD Merdeka memiliki program 'Sekolah Hijau'. Mereka membuat biopori di halaman sekolah. Apa manfaat biopori?",
        options: [
            "Membuat halaman lebih indah",
            "Membantu air meresap ke tanah",
            "Mengurangi udara segar",
            "Membuat tanah menjadi keras"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Biopori membantu air hujan meresap ke dalam tanah, mengurangi genangan air, dan menjaga ketersediaan air tanah."
    },
    {
        question: "Apa yang terjadi pada air ketika mencapai lapisan batuan yang kedap air?",
        options: [
            "Air menguap",
            "Air mengalir ke samping atau muncul sebagai mata air",
            "Air membeku",
            "Air menghilang"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Air akan mengalir ke samping atau muncul sebagai mata air ketika mencapai lapisan batuan kedap air."
    },
    {
        question: "Apa nama proses ketika air mengalir di permukaan tanah?",
        options: [
            "Infiltrasi",
            "Runoff atau aliran permukaan",
            "Evaporasi",
            "Kondensasi"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Runoff atau aliran permukaan adalah proses air mengalir di permukaan tanah menuju tempat yang lebih rendah."
    },
    {
        question: "Cerita: Desa Makmur memiliki sungai yang airnya jernih. Namun, beberapa tahun terakhir sungai mulai tercemar. Apa dampak pencemaran sungai terhadap siklus air?",
        options: [
            "Membuat air lebih bersih",
            "Mengurangi kualitas air dalam siklus air",
            "Membuat siklus air lebih cepat",
            "Tidak ada dampak"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Pencemaran sungai akan mengurangi kualitas air dalam siklus air, mempengaruhi makhluk hidup yang bergantung padanya."
    },
    {
        question: "Apa yang dimaksud dengan akifer?",
        options: [
            "Tempat penyimpanan air di permukaan",
            "Lapisan batuan yang menyimpan air tanah",
            "Sungai bawah tanah",
            "Danau dalam tanah"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Akifer adalah lapisan batuan berpori yang dapat menyimpan dan mengalirkan air tanah."
    },
    {
        question: "Mengapa di daerah pegunungan sering terjadi hujan orografis?",
        options: [
            "Karena udara panas",
            "Karena udara yang naik di lereng gunung mengalami kondensasi",
            "Karena angin kencang",
            "Karena suhu dingin"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Hujan orografis terjadi karena udara yang naik di lereng gunung mengalami pendinginan dan kondensasi."
    },
    {
        question: "Cerita: Bu Sari tinggal di daerah pantai. Ia memperhatikan bahwa air sumur di rumahnya terasa asin. Mengapa hal ini bisa terjadi?",
        options: [
            "Karena air sumur dicampur garam",
            "Karena intrusi air laut ke air tanah",
            "Karena tanah mengandung garam",
            "Karena air sumur kotor"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Air sumur terasa asin karena intrusi air laut ke dalam air tanah, terutama di daerah pantai."
    },
    {
        question: "Apa yang terjadi pada air ketika tekanan udara rendah?",
        options: [
            "Air membeku",
            "Air menguap lebih mudah",
            "Air menjadi dingin",
            "Air tidak berubah"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Pada tekanan udara rendah, air akan menguap lebih mudah karena titik didih air menjadi lebih rendah."
    },
    {
        question: "Apa nama proses ketika air mengalir dari tempat tinggi ke tempat rendah?",
        options: [
            "Evaporasi",
            "Gravitasi",
            "Kondensasi",
            "Transpirasi"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Gravitasi menyebabkan air mengalir dari tempat tinggi ke tempat rendah."
    },
    {
        question: "Cerita: Sekolah Alam Hijau mengajarkan siswa untuk membuat lubang resapan biopori. Siswa belajar bahwa setiap lubang biopori dapat menampung air hujan. Berapa liter air yang bisa ditampung satu lubang biopori per hari?",
        options: [
            "1-2 liter",
            "10-15 liter",
            "50-100 liter",
            "1000 liter"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Satu lubang biopori dapat menampung 10-15 liter air hujan per hari, membantu mengurangi genangan air."
    },
    {
        question: "Apa yang dimaksud dengan zona jenuh air?",
        options: [
            "Daerah yang kekeringan",
            "Lapisan tanah yang terisi penuh oleh air",
            "Daerah yang banjir",
            "Tempat air menguap"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Zona jenuh air adalah lapisan tanah yang terisi penuh oleh air tanah."
    },
    {
        question: "Mengapa di daerah tropis siklus air berlangsung lebih cepat?",
        options: [
            "Karena suhu rendah",
            "Karena suhu tinggi dan kelembaban tinggi",
            "Karena angin kencang",
            "Karena curah hujan rendah"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Di daerah tropis, suhu tinggi dan kelembaban tinggi menyebabkan siklus air berlangsung lebih cepat."
    },
    {
        question: "Cerita: Keluarga Pak Rudi tinggal di lereng gunung. Mereka membuat terasering untuk menanam padi. Bagaimana terasering mempengaruhi siklus air?",
        options: [
            "Mempercepat aliran air",
            "Memperlambat aliran air dan meningkatkan infiltrasi",
            "Membuat air menguap lebih cepat",
            "Tidak ada pengaruh"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Terasering memperlambat aliran air dan meningkatkan infiltrasi, membantu konservasi air dan tanah."
    },
    {
        question: "Apa yang terjadi pada air tanah ketika sumur dipompa terus-menerus?",
        options: [
            "Air tanah bertambah",
            "Permukaan air tanah turun",
            "Air tanah tidak berubah",
            "Air tanah menjadi kotor"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Ketika sumur dipompa terus-menerus, permukaan air tanah akan turun karena air yang keluar lebih banyak dari yang masuk."
    },
    {
        question: "Apa nama proses ketika air mengalir melalui akar tumbuhan ke daun?",
        options: [
            "Evaporasi",
            "Transpirasi",
            "Absorpsi",
            "Kondensasi"
        ],
        correctAnswer: 2,
        type: "umum",
        explanation: "Absorpsi adalah proses penyerapan air oleh akar tumbuhan yang kemudian dialirkan ke seluruh bagian tumbuhan."
    },
    {
        question: "Cerita: Kota Bandung mengalami masalah penurunan permukaan tanah (land subsidence). Apa yang menyebabkan hal ini?",
        options: [
            "Terlalu banyak hujan",
            "Eksploitasi air tanah berlebihan",
            "Terlalu banyak pohon",
            "Kurangnya bangunan"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Penurunan permukaan tanah dapat disebabkan oleh eksploitasi air tanah yang berlebihan tanpa diimbangi dengan pengisian ulang."
    },
    {
        question: "Apa yang dimaksud dengan kapasitas lapang dalam siklus air?",
        options: [
            "Jumlah air maksimal di laut",
            "Kemampuan tanah menahan air setelah kelebihan air mengalir",
            "Volume air di sungai",
            "Jumlah air di awan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Kapasitas lapang adalah kemampuan tanah menahan air setelah kelebihan air mengalir karena gravitasi."
    },
    {
        question: "Mengapa di daerah gurun siklus air berlangsung lambat?",
        options: [
            "Karena suhu rendah",
            "Karena suhu tinggi, kelembaban rendah, dan sedikit vegetasi",
            "Karena angin kencang",
            "Karena banyak air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Di daerah gurun, siklus air berlangsung lambat karena suhu tinggi, kelembaban rendah, dan sedikit vegetasi."
    },
    {
        question: "Cerita: Program 'Satu Juta Pohon' di Jakarta bertujuan untuk meningkatkan kualitas lingkungan. Bagaimana pohon mempengaruhi siklus air?",
        options: [
            "Mempercepat penguapan",
            "Memperlambat aliran air dan meningkatkan infiltrasi",
            "Membuat air menguap lebih cepat",
            "Tidak ada pengaruh"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Pohon memperlambat aliran air, meningkatkan infiltrasi, dan membantu menjaga keseimbangan siklus air."
    }
];

// ===========================================
// SOAL KELAS 6 SD (40 soal - lebih kompleks dan literatif)
// ===========================================

const questionsClass6 = [
    {
        question: "Apa yang dimaksud dengan siklus hidrologi global?",
        options: [
            "Siklus air di satu daerah saja",
            "Perputaran air secara global yang melibatkan seluruh bumi",
            "Siklus air di laut saja",
            "Siklus air di darat saja"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Siklus hidrologi global adalah perputaran air secara global yang melibatkan seluruh bumi melalui berbagai proses."
    },
    {
        question: "Cerita: Kota Semarang mengalami penurunan permukaan tanah hingga 10 cm per tahun. Warga mengalami banjir rob yang semakin parah. Apa yang bisa dilakukan untuk mengatasi masalah ini?",
        options: [
            "Mengebor sumur lebih dalam",
            "Mengurangi penggunaan air tanah dan membuat sumur resapan",
            "Membuat bangunan lebih tinggi",
            "Memindahkan kota ke tempat lain"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Mengurangi penggunaan air tanah dan membuat sumur resapan dapat membantu mengatasi penurunan permukaan tanah."
    },
    {
        question: "Apa perbedaan antara akuifer tertekan dan akuifer bebas?",
        options: [
            "Tidak ada perbedaan",
            "Akuifer tertekan tertutup lapisan kedap air, akuifer bebas tidak",
            "Akuifer bebas lebih dalam",
            "Akuifer tertekan lebih dangkal"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Akuifer tertekan tertutup lapisan kedap air, sedangkan akuifer bebas tidak tertutup lapisan kedap air."
    },
    {
        question: "Mengapa air laut mengalami sirkulasi global?",
        options: [
            "Karena bentuk bumi bulat",
            "Karena perbedaan suhu dan salinitas air",
            "Karena gravitasi",
            "Karena angin saja"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Air laut mengalami sirkulasi karena perbedaan suhu dan salinitas yang menciptakan arus laut global."
    },
    {
        question: "Cerita: Desa Nelayan Maju terletak di pesisir pantai. Nelayan mengalami kesulitan karena air sumur menjadi asin. Mereka harus membeli air bersih dengan harga mahal. Apa solusi jangka panjang untuk masalah ini?",
        options: [
            "Mengebor sumur lebih dalam",
            "Membuat sistem penyaringan air laut dan konservasi air tanah",
            "Menggunakan air hujan saja",
            "Memindahkan desa"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Sistem penyaringan air laut dan konservasi air tanah adalah solusi jangka panjang untuk daerah pesisir."
    },
    {
        question: "Apa yang dimaksud dengan water footprint?",
        options: [
            "Jejak air yang ditinggalkan",
            "Total volume air yang digunakan untuk memproduksi barang dan jasa",
            "Volume air di sungai",
            "Jumlah air hujan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water footprint adalah total volume air yang digunakan untuk memproduksi barang dan jasa yang dikonsumsi."
    },
    {
        question: "Bagaimana perubahan iklim mempengaruhi siklus air?",
        options: [
            "Tidak ada pengaruh",
            "Mengubah pola curah hujan dan intensitas siklus air",
            "Membuat siklus air lebih lambat",
            "Menghentikan siklus air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Perubahan iklim mengubah pola curah hujan, intensitas badai, dan kecepatan siklus air secara global."
    },
    {
        question: "Cerita: Perusahaan air minum 'Sehat Bersama' menghadapi tantangan pemenuhan kebutuhan air bersih untuk 1 juta penduduk. Mereka menerapkan konsep 'water stewardship'. Apa yang dimaksud dengan water stewardship?",
        options: [
            "Menjual air dengan harga tinggi",
            "Pengelolaan air yang bertanggung jawab dan berkelanjutan",
            "Menggunakan air sebanyak-banyaknya",
            "Membuat air buatan"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Water stewardship adalah pengelolaan air yang bertanggung jawab dan berkelanjutan untuk kepentingan semua pihak."
    },
    {
        question: "Apa yang dimaksud dengan eutrofikasi dalam siklus air?",
        options: [
            "Kekurangan air",
            "Keberlimpahan nutrisi yang menyebabkan pertumbuhan alga berlebihan",
            "Air yang jernih",
            "Air yang dingin"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Eutrofikasi adalah keberlimpahan nutrisi yang menyebabkan pertumbuhan alga berlebihan dan penurunan kualitas air."
    },
    {
        question: "Mengapa daerah urban memiliki siklus air yang berbeda dengan daerah rural?",
        options: [
            "Karena bentuk bangunan",
            "Karena permukaan kedap air dan sistem drainase yang berbeda",
            "Karena jumlah penduduk",
            "Karena suhu udara"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Daerah urban memiliki banyak permukaan kedap air dan sistem drainase yang berbeda, mempengaruhi siklus air."
    },
    {
        question: "Cerita: Program 'River Restoration' di Sungai Ciliwung bertujuan untuk memulihkan fungsi ekologis sungai. Bagaimana program ini mempengaruhi siklus air?",
        options: [
            "Mempercepat aliran air",
            "Meningkatkan kapasitas infiltrasi dan mengurangi banjir",
            "Membuat air lebih kotor",
            "Tidak ada pengaruh"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "River restoration meningkatkan kapasitas infiltrasi, mengurangi banjir, dan memperbaiki kualitas air dalam siklus air."
    },
    {
        question: "Apa yang dimaksud dengan grey water dalam manajemen air?",
        options: [
            "Air yang berwarna abu-abu",
            "Air limbah rumah tangga yang tidak mengandung tinja",
            "Air hujan",
            "Air laut"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Grey water adalah air limbah rumah tangga yang tidak mengandung tinja, seperti air cucian dan mandi."
    },
    {
        question: "Bagaimana teknologi desalinasi mempengaruhi siklus air?",
        options: [
            "Mengurangi air laut",
            "Menyediakan air bersih dari air laut tanpa mengganggu siklus alami",
            "Membuat air laut lebih asin",
            "Menghentikan siklus air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Desalinasi menyediakan air bersih dari air laut tanpa mengganggu siklus air alami, meskipun memerlukan energi."
    },
    {
        question: "Cerita: Sekolah Menengah Atas 'Eco School' mengimplementasikan sistem 'Rainwater Harvesting' dan 'Grey Water Recycling'. Siswa belajar bahwa sistem ini dapat mengurangi penggunaan air bersih hingga 40%. Bagaimana kedua sistem ini berkontribusi pada konservasi air?",
        options: [
            "Membuat air lebih mahal",
            "Mengurangi tekanan pada sumber air bersih dan meningkatkan efisiensi penggunaan air",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Kedua sistem mengurangi tekanan pada sumber air bersih dan meningkatkan efisiensi penggunaan air dalam siklus air."
    },
    {
        question: "Apa yang dimaksud dengan water stress?",
        options: [
            "Tekanan air",
            "Kondisi ketika permintaan air melebihi ketersediaan air",
            "Air yang berat",
            "Air yang panas"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water stress adalah kondisi ketika permintaan air melebihi ketersediaan air dalam periode tertentu."
    },
    {
        question: "Mengapa daerah pegunungan penting dalam siklus air global?",
        options: [
            "Karena udara segar",
            "Karena berfungsi sebagai 'water towers' yang menyediakan air untuk daerah hilir",
            "Karena pemandangan indah",
            "Karena suhu dingin"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Daerah pegunungan berfungsi sebagai 'water towers' yang menyediakan air untuk daerah hilir melalui sungai dan air tanah."
    },
    {
        question: "Cerita: Perusahaan 'Green Tech Solutions' mengembangkan teknologi 'Smart Water Management' untuk kota-kota besar. Sistem ini menggunakan sensor IoT untuk memantau kualitas dan kuantitas air real-time. Bagaimana teknologi ini membantu mengoptimalkan siklus air perkotaan?",
        options: [
            "Membuat air lebih mahal",
            "Meningkatkan efisiensi distribusi air dan mengurangi kebocoran",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Smart Water Management meningkatkan efisiensi distribusi air, mengurangi kebocoran, dan mengoptimalkan siklus air perkotaan."
    },
    {
        question: "Apa yang dimaksud dengan blue water dalam siklus hidrologi?",
        options: [
            "Air yang berwarna biru",
            "Air permukaan dan air tanah yang dapat diambil langsung",
            "Air laut",
            "Air hujan"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Blue water adalah air permukaan dan air tanah yang dapat diambil langsung untuk kebutuhan manusia."
    },
    {
        question: "Bagaimana deforestasi mempengaruhi siklus air?",
        options: [
            "Tidak ada pengaruh",
            "Mengurangi transpirasi, meningkatkan runoff, dan menurunkan infiltrasi",
            "Meningkatkan transpirasi",
            "Membuat air lebih bersih"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Deforestasi mengurangi transpirasi, meningkatkan aliran permukaan, dan menurunkan infiltrasi air ke tanah."
    },
    {
        question: "Cerita: Program 'Integrated Water Resources Management (IWRM)' di DAS Brantas melibatkan berbagai stakeholders. Mereka menerapkan prinsip 'water as an economic good' dan 'water as a social good'. Apa tujuan utama IWRM?",
        options: [
            "Membuat air lebih mahal",
            "Mengelola air secara terintegrasi untuk kepentingan ekonomi, sosial, dan lingkungan",
            "Mengurangi akses air",
            "Tidak ada tujuan"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "IWRM bertujuan mengelola air secara terintegrasi untuk menyeimbangkan kepentingan ekonomi, sosial, dan lingkungan."
    },
    {
        question: "Apa yang dimaksud dengan green water dalam siklus hidrologi?",
        options: [
            "Air yang berwarna hijau",
            "Air hujan yang tersimpan dalam tanah dan digunakan oleh tumbuhan",
            "Air laut",
            "Air sungai"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Green water adalah air hujan yang tersimpan dalam tanah dan digunakan oleh tumbuhan melalui proses evapotranspirasi."
    },
    {
        question: "Mengapa daerah khatulistiwa memiliki pola siklus air yang unik?",
        options: [
            "Karena bentuk bumi",
            "Karena suhu tinggi dan kelembaban tinggi yang konstan",
            "Karena angin kencang",
            "Karena tekanan udara rendah"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Daerah khatulistiwa memiliki suhu tinggi dan kelembaban tinggi yang konstan, menciptakan pola siklus air yang unik."
    },
    {
        question: "Cerita: Lembaga 'Water Research Institute' melakukan studi tentang 'Virtual Water Trade' dalam konteks globalisasi. Mereka menemukan bahwa Indonesia mengimpor 'virtual water' melalui produk pertanian. Apa yang dimaksud dengan virtual water?",
        options: [
            "Air yang tidak terlihat",
            "Volume air yang digunakan untuk memproduksi barang yang diperdagangkan",
            "Air hujan",
            "Air buatan"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Virtual water adalah volume air yang digunakan untuk memproduksi barang yang diperdagangkan secara internasional."
    },
    {
        question: "Apa yang dimaksud dengan water-energy nexus?",
        options: [
            "Hubungan antara air dan energi",
            "Keterkaitan antara penggunaan air dan energi dalam berbagai sektor",
            "Air yang mengandung energi",
            "Energi dari air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water-energy nexus adalah keterkaitan antara penggunaan air dan energi dalam berbagai sektor ekonomi."
    },
    {
        question: "Bagaimana urbanisasi mempengaruhi water cycle?",
        options: [
            "Tidak ada pengaruh",
            "Mengubah aliran air, mengurangi infiltrasi, dan meningkatkan runoff",
            "Meningkatkan infiltrasi",
            "Membuat air lebih bersih"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Urbanisasi mengubah aliran air, mengurangi infiltrasi, dan meningkatkan aliran permukaan melalui sistem drainase."
    },
    {
        question: "Cerita: Program 'Community-Based Water Management' di Desa Mandiri Air melibatkan masyarakat dalam pengelolaan sumber air. Mereka menerapkan sistem 'water user association' dan 'water pricing'. Bagaimana pendekatan ini meningkatkan sustainability siklus air?",
        options: [
            "Membuat air lebih mahal",
            "Meningkatkan partisipasi masyarakat dan efisiensi penggunaan air",
            "Mengurangi akses air",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Community-based management meningkatkan partisipasi masyarakat dan efisiensi penggunaan air untuk sustainability siklus air."
    },
    {
        question: "Apa yang dimaksud dengan water governance?",
        options: [
            "Pemerintahan air",
            "Sistem pengaturan dan pengelolaan air yang melibatkan berbagai aktor",
            "Air yang diatur",
            "Pemerintah air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water governance adalah sistem pengaturan dan pengelolaan air yang melibatkan berbagai aktor dan institusi."
    },
    {
        question: "Mengapa daerah arid memiliki strategi siklus air yang berbeda?",
        options: [
            "Karena bentuk tanah",
            "Karena ketersediaan air terbatas dan curah hujan rendah",
            "Karena suhu rendah",
            "Karena angin kencang"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Daerah arid memiliki strategi khusus karena ketersediaan air terbatas dan curah hujan yang rendah."
    },
    {
        question: "Cerita: Teknologi 'Artificial Intelligence for Water Management' digunakan untuk memprediksi pola curah hujan dan mengoptimalkan distribusi air. Sistem ini dapat mengurangi water loss hingga 25%. Bagaimana AI berkontribusi pada efisiensi siklus air?",
        options: [
            "Membuat air lebih mahal",
            "Meningkatkan akurasi prediksi dan efisiensi manajemen air",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "AI meningkatkan akurasi prediksi cuaca dan efisiensi manajemen air dalam siklus hidrologi."
    },
    {
        question: "Apa yang dimaksud dengan water security?",
        options: [
            "Keamanan air",
            "Akses yang dapat diandalkan terhadap air bersih dalam jumlah yang cukup",
            "Air yang aman",
            "Perlindungan air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water security adalah akses yang dapat diandalkan terhadap air bersih dalam jumlah yang cukup untuk kehidupan."
    },
    {
        question: "Bagaimana teknologi drip irrigation mempengaruhi siklus air pertanian?",
        options: [
            "Membuat air lebih banyak",
            "Meningkatkan efisiensi penggunaan air dengan mengurangi evaporasi",
            "Membuat air lebih kotor",
            "Tidak ada pengaruh"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Drip irrigation meningkatkan efisiensi penggunaan air dengan mengurangi evaporasi dan runoff."
    },
    {
        question: "Cerita: Program 'Circular Water Economy' di Kawasan Industri Hijau menerapkan prinsip 'reduce, reuse, recycle' dalam pengelolaan air. Mereka berhasil mengurangi water footprint industri hingga 60%. Bagaimana circular economy meningkatkan sustainability siklus air?",
        options: [
            "Membuat air lebih mahal",
            "Mengurangi tekanan pada sumber air alami dan meningkatkan efisiensi siklus air",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Circular water economy mengurangi tekanan pada sumber air alami dan meningkatkan efisiensi siklus air industri."
    },
    {
        question: "Apa yang dimaksud dengan water equity dalam konteks global?",
        options: [
            "Air yang sama",
            "Distribusi air yang adil dan akses yang merata untuk semua",
            "Air yang berwarna sama",
            "Air yang jumlahnya sama"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water equity adalah distribusi air yang adil dan akses yang merata untuk semua orang tanpa diskriminasi."
    },
    {
        question: "Mengapa daerah delta memiliki dinamika siklus air yang kompleks?",
        options: [
            "Karena bentuk delta",
            "Karena pertemuan air tawar dan air asin, serta pengaruh pasang surut",
            "Karena suhu tinggi",
            "Karena angin kencang"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Daerah delta memiliki dinamika kompleks karena pertemuan air tawar dan air asin, serta pengaruh pasang surut."
    },
    {
        question: "Cerita: Program 'Transboundary Water Cooperation' antara Indonesia dan Malaysia untuk pengelolaan Sungai Batang Hari melibatkan berbagai aspek hukum internasional. Mereka menerapkan prinsip 'equitable and reasonable utilization'. Apa tantangan utama dalam transboundary water management?",
        options: [
            "Kurangnya teknologi",
            "Koordinasi antar negara, perbedaan regulasi, dan konflik kepentingan",
            "Kurangnya air",
            "Kurangnya dana"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Tantangan utama adalah koordinasi antar negara, perbedaan regulasi, dan konflik kepentingan dalam pengelolaan air lintas batas."
    },
    {
        question: "Apa yang dimaksud dengan water resilience?",
        options: [
            "Air yang elastis",
            "Kemampuan sistem air untuk pulih dari gangguan dan beradaptasi dengan perubahan",
            "Air yang kuat",
            "Air yang fleksibel"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water resilience adalah kemampuan sistem air untuk pulih dari gangguan dan beradaptasi dengan perubahan lingkungan."
    },
    {
        question: "Bagaimana teknologi blockchain dapat meningkatkan transparansi dalam water governance?",
        options: [
            "Membuat air lebih mahal",
            "Menyediakan rekam jejak yang transparan dan tidak dapat diubah",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Blockchain menyediakan rekam jejak yang transparan dan tidak dapat diubah untuk transaksi dan pengelolaan air."
    },
    {
        question: "Cerita: Program 'Nature-Based Solutions for Water' menggunakan ekosistem alami untuk mengelola air. Mereka mengimplementasikan constructed wetlands, green roofs, dan permeable pavements. Bagaimana nature-based solutions meningkatkan sustainability siklus air perkotaan?",
        options: [
            "Membuat air lebih mahal",
            "Mengurangi runoff, meningkatkan infiltrasi, dan meningkatkan kualitas air",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Nature-based solutions mengurangi runoff, meningkatkan infiltrasi, dan meningkatkan kualitas air dalam siklus air perkotaan."
    },
    {
        question: "Apa yang dimaksud dengan water diplomacy?",
        options: [
            "Diplomasi air",
            "Penggunaan diplomasi untuk menyelesaikan konflik air dan meningkatkan kerjasama",
            "Air untuk diplomasi",
            "Diplomasi tentang air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Water diplomacy adalah penggunaan diplomasi untuk menyelesaikan konflik air dan meningkatkan kerjasama internasional."
    },
    {
        question: "Mengapa daerah karst memiliki siklus air yang unik?",
        options: [
            "Karena bentuk batuan",
            "Karena batuan kapur yang mudah larut dan membentuk sistem drainase bawah tanah",
            "Karena suhu tinggi",
            "Karena angin kencang"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Daerah karst memiliki siklus air unik karena batuan kapur yang mudah larut dan membentuk sistem drainase bawah tanah."
    },
    {
        question: "Cerita: Program 'Water-Energy-Food Nexus' mengintegrasikan pengelolaan tiga sumber daya penting. Mereka menemukan bahwa 70% air tawar digunakan untuk pertanian, 20% untuk industri, dan 10% untuk rumah tangga. Bagaimana pendekatan nexus meningkatkan efisiensi siklus air?",
        options: [
            "Membuat air lebih mahal",
            "Mengoptimalkan penggunaan air lintas sektor dan mengurangi konflik penggunaan",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Nexus approach mengoptimalkan penggunaan air lintas sektor dan mengurangi konflik penggunaan dalam siklus air."
    },
    {
        question: "Apa yang dimaksud dengan water stewardship dalam konteks korporasi?",
        options: [
            "Penjaga air",
            "Tanggung jawab korporasi dalam pengelolaan air yang berkelanjutan",
            "Air untuk perusahaan",
            "Perusahaan air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Corporate water stewardship adalah tanggung jawab korporasi dalam pengelolaan air yang berkelanjutan dan bertanggung jawab."
    },
    {
        question: "Bagaimana perubahan pola konsumsi mempengaruhi global water cycle?",
        options: [
            "Tidak ada pengaruh",
            "Mengubah permintaan air dan pola distribusi dalam siklus global",
            "Membuat air lebih bersih",
            "Menghentikan siklus air"
        ],
        correctAnswer: 1,
        type: "umum",
        explanation: "Perubahan pola konsumsi mengubah permintaan air dan pola distribusi dalam siklus air global."
    },
    {
        question: "Cerita: Program 'Digital Water Management' menggunakan IoT, big data, dan machine learning untuk mengoptimalkan siklus air. Sistem ini dapat memprediksi kebocoran pipa dengan akurasi 95%. Bagaimana digitalisasi meningkatkan efisiensi water cycle management?",
        options: [
            "Membuat air lebih mahal",
            "Meningkatkan akurasi monitoring, prediksi, dan optimisasi siklus air",
            "Membuat air lebih kotor",
            "Tidak ada manfaat"
        ],
        correctAnswer: 1,
        type: "literasi",
        explanation: "Digitalisasi meningkatkan akurasi monitoring, prediksi, dan optimisasi manajemen siklus air melalui teknologi canggih."
    }
];

// Export untuk digunakan di script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        questionsClass4,
        questionsClass5,
        questionsClass6
    };
}
