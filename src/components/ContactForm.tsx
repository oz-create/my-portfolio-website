import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Mesajınız başarıyla gönderildi! 💌");
        e.target.reset();
      } else {
        setStatus("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("Sunucuya ulaşılamadı. Daha sonra tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">İletişim</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          required
          className="border p-2 rounded focus:outline-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta adresiniz"
          required
          className="border p-2 rounded focus:outline-blue-500"
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          rows={5}
          required
          className="border p-2 rounded focus:outline-blue-500"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
      {status && (
        <p className="text-center mt-4 text-sm text-gray-600">{status}</p>
      )}
    </section>
  );
}
