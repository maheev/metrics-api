import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/metrics", async (_req, res) => {
  try {
    const url = process.env.N8N_WEBHOOK_URL; // если настроишь n8n — укажем здесь
    if (url) {
      const r = await fetch(url, { headers: { "x-api-key": process.env.N8N_API_KEY || "" } });
      if (!r.ok) throw new Error("n8n upstream error");
      return res.json(await r.json());
    }
    // fallback-данные в нужном формате
    return res.json({
      year: 2025,
      costMonthly: [{ month: "2025-01", ok: 10043047, kn: 2397485 }],
      offtakeMonthly: [{ month: "2025-01", ok: 297119626, kn: 74651334 }],
      byChain: {},
      stores: { byChain: {} }
    });
  } catch (e) {
    console.error(e);
    res.status(502).json({ error: "upstream failed" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("API listening on " + port));
