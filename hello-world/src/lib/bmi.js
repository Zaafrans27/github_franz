export function hitungBMI(beratKg, tinggiCm) {
  const m = tinggiCm / 100;
  const bmi = beratKg / (m * m);

  let kategori;
  let warna;

  // Latihan 3: Menentukan kategori sekaligus warnanya
  if (bmi < 18.5) {
    kategori = "Berat badan kurang";
    warna = "blue"; // Biru untuk kurang
  } else if (bmi < 25) {
    kategori = "Normal";
    warna = "green"; // Hijau untuk normal
  } else if (bmi < 30) {
    kategori = "Berat badan berlebih";
    warna = "#d97706"; // Kuning tua/oranye agar jelas terbaca di background putih
  } else {
    kategori = "Obesitas";
    warna = "red"; // Merah untuk obesitas
  }

  return { bmi: bmi.toFixed(1), kategori, warna };
}