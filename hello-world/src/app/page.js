"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [error, setError] = useState(""); // State untuk pesan error

  function handleSubmit(e) {
    e.preventDefault();

    // Menghitung jumlah huruf tanpa spasi (melanjutkan ide kode kamu)
    const jumlahHuruf = nama.replaceAll(" ", "").length;

    // Latihan 1: Cek jika hanya spasi atau kurang dari 3 karakter
    if (jumlahHuruf < 3) {
      setError("Nama harus terdiri dari minimal 3 karakter (bukan spasi)!");
      return; // Hentikan proses agar tidak pindah halaman
    }

    setError(""); // Kosongkan error jika valid
    const namaBersih = nama.trim().replace(/\s+/g, " ");
    router.push(
      `/${"Kesehatan/PenghitungBMI/" + encodeURIComponent(namaBersih)}`
    );
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Hai, perkenalkan dirimu</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label>
          <span>Nama lengkap</span>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        {/* Menampilkan pesan error di bawah input jika ada */}
        {error && (
          <p style={{ color: "red", fontSize: 14, margin: 0 }}>{error}</p>
        )}

        <button type="submit" style={{ padding: 8 }}>
          Lanjut
        </button>
      </form>
    </main>
  );
}