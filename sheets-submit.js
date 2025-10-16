// Helper to submit quiz results to Google Sheets via Apps Script Web App
// Replace the placeholder URL with your deployed Web App URL ending with /exec
const WEB_APP_URL = 'PASTE_URL_WEB_APP_EXEC_KAMU';

/**
 * Kirim data hasil kuis ke Google Sheets
 * @param {string} nama - Nama siswa
 * @param {string} kelas - Kelas siswa
 * @param {string} asalSekolah - Asal sekolah
 * @param {number} skor - Skor akhir
 */
function kirimDataKeSheets(nama, kelas, asalSekolah, skor) {
	const payload = {
		nama: nama,
		kelas: kelas,
		asalSekolah: asalSekolah,
		skor: skor
	};

	console.log('Mengirim data ke spreadsheet...', payload);

	return fetch(WEB_APP_URL, {
		method: 'POST',
		mode: 'no-cors',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	})
	.then(() => {
		console.log('Data berhasil dikirim ke Google Sheets!');
		try { alert('Data berhasil disimpan!'); } catch (_) {}
	})
	.catch((err) => {
		console.error('Gagal mengirim data:', err);
	});
}

// Contoh penggunaan: panggil ini setelah siswa menyelesaikan kuis
// kirimDataKeSheets(namaSiswa, kelasSiswa, asalSekolah, nilaiAkhir);
