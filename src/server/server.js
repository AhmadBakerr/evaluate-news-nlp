const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 8081;

app.post('/analyze', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "❌ الرابط مفقود!" });
    }

    console.log("📡 استلام طلب لتحليل:", url);

    // استدعاء API الخارجي (مثل MeaningCloud)
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.json({
            subject: data.subjectivity || "غير متوفر",
            confidence: data.confidence || "0%",
        });
    } catch (error) {
        console.error("❌ خطأ أثناء تحليل النص:", error);
        res.status(500).json({ error: "❌ فشل تحليل الرابط." });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});
