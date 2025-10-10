// File: netlify/functions/get-ai-idea.js

exports.handler = async function(event) {
  // Hanya izinkan metode POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { destination } = JSON.parse(event.body);
    // Ambil API Key dari Environment Variable yang aman di Netlify
    const apiKey = process.env.GEMINI_API_KEY;

    // Validasi
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Kunci API Gemini belum diatur di Netlify.' }) };
    }
    if (!destination) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Destinasi diperlukan.' }) };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    
    // Konfigurasi prompt untuk AI
    const systemPrompt = "Anda adalah perencana perjalanan kreatif dari HARJAMUKTI TRANS. Buatlah satu ide perjalanan atau mini-itinerary yang unik dan menarik untuk satu hari di kota tujuan, dalam format Markdown. Gunakan heading (###), list (menggunakan -), dan tebal (**) untuk membuat teks mudah dibaca. Jaga agar tetap singkat, padat, dan inspiratif.";
    const userPrompt = `Berikan saya satu ide perjalanan unik untuk satu hari di ${destination}.`;

    const payload = {
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents: [{ parts: [{ text: userPrompt }] }],
    };

    // Panggil API Gemini dari server
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API Error:', errorText);
        return { statusCode: geminiResponse.status, body: JSON.stringify({ error: `Error dari Gemini API: ${errorText}` }) };
    }
    
    const result = await geminiResponse.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
        return { statusCode: 500, body: JSON.stringify({ error: "Tidak ada konten yang dihasilkan oleh API Gemini." }) };
    }
    
    // Kirim kembali hasilnya ke website Anda
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text.trim() }),
    };

  } catch (error) {
    console.error('Serverless function error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
