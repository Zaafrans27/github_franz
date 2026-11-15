"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { hitungBMI } from "@/lib/bmi";

export default function Page() {
  const params = useParams();
  const namaLengkap = params?.namalengkap || "";
  const nama = namaLengkap
    ? decodeURIComponent(namaLengkap).replaceAll("-", " ")
    : "";

  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
  }

  function handleReset() {
    setBerat("");
    setTinggi("");
    setHasil(null);
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Halo, {nama}</h1>

      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Bukan kamu? Ganti nama
      </Link>

      <p style={{ marginTop: 16 }}>
        Silakan masukkan berat badan dan tinggi kamu!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label htmlFor="berat">
          Berat (kg)
          <input
            type="number"
            step="any"
            min="1"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        <label htmlFor="tinggi">
          Tinggi (cm)
          <input
            type="number"
            step="any"
            min="1"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        <button type="submit" style={{ padding: 8 }}>
          Hitung
        </button>

        <button type="button" onClick={handleReset} style={{ padding: 8 }}>
          Reset
        </button>
      </form>

      {hasil && (
        <p style={{ marginTop: 16, color: hasil.warna }}>
          BMI kamu: <strong>{hasil.bmi}</strong> ({hasil.kategori})
        </p>
      )}
    </main>
  );
}