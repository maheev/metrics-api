import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// === ВАШИ ДАННЫЕ ДЛЯ ДАШБОРДА (янв–июн + stores.byChain) ===
const DATA = {
  year: 2025,
  costMonthly: [
    { month: "2025-01", ok: 10043047, kn: 2397485 },
    { month: "2025-02", ok: 10654267, kn: 2635759 },
    { month: "2025-03", ok: 11087804, kn: 2354356 },
    { month: "2025-04", ok: 8561384,  kn: 2209797 },
    { month: "2025-05", ok: 6848834,  kn: 2044227 },
    { month: "2025-06", ok: 4320010,  kn: 1492254 },
  ],
  offtakeMonthly: [
    { month: "2025-01", ok: 297119626, kn: 74651334 },
    { month: "2025-02", ok: 312996952, kn: 76659526 },
    { month: "2025-03", ok: 272978273, kn: 65214576 },
    { month: "2025-04", ok: 298700669, kn: 87999265 },
    { month: "2025-05", ok: 287379733, kn: 86891913 },
    { month: "2025-06", ok: 231942503, kn: 78510433 },
  ],
  // По сетям (опционально; фронт сможет фильтровать)
  byChain: {},

  // Точки мерча (ME) и размер сети (Всего ТТ) — важно для «Покрытия»
  stores: {
    byChain: {
      "Ашан": { totalTT: 101, monthly: [
        { month: "2025-01", me: 97 }, { month: "2025-02", me: 97 }, { month: "2025-03", me: 97 },
        { month: "2025-04", me: 70 }, { month: "2025-05", me: 73 }, { month: "2025-06", me: 70 },
      ] },
      "Лента": { totalTT: 375, monthly: [
        { month: "2025-01", me: 352 }, { month: "2025-02", me: 352 }, { month: "2025-03", me: 352 },
        { month: "2025-04", me: 369 }, { month: "2025-05", me: 322 }, { month: "2025-06", me: 249 },
      ] },
      "Метро": { totalTT: 98, monthly: [
        { month: "2025-01", me: 94 }, { month: "2025-02", me: 93 }, { month: "2025-03", me: 93 },
        { month: "2025-04", me: 89 }, { month: "2025-05", me: 77 }, { month: "2025-06", me: 63 },
      ] },
      "Окей": { totalTT: 96, monthly: [
        { month: "2025-01", me: 29 }, { month: "2025-02", me: 29 }, { month: "2025-03", me: 29 },
        { month: "2025-04", me: 77 }, { month: "2025-05", me: 77 }, { month: "2025-06", me: 66 },
      ] },
      "Перекресток": { totalTT: 900, monthly: [
        { month: "2025-01", me: 109 }, { month: "2025-02", me: 110 }, { month: "2025-03", me: 115 },
        { month: "2025-04", me: 120 }, { month: "2025-05", me: 130 }, { month: "2025-06", me: 140 },
      ] },
      "Пятерочка": { totalTT: 22000, monthly: [
        { month: "2025-01", me: 1306 }, { month: "2025-02", me: 1322 }, { month: "2025-03", me: 1535 },
        { month: "2025-04", me: 1451 }, { month: "2025-05", me: 1260 }, { month: "2025-06", me: 1122 },
      ] },
      "Магнит ГМ": { totalTT: 450, monthly: [
        { month: "2025-01", me: 216 }, { month: "2025-02", me: 216 }, { month: "2025-03", me: 216 },
        { month: "2025-04", me: 174 }, { month: "2025-05", me: 146 }, { month: "2025-06", me: 128 },
      ] },
      "Магнит ММ": { totalTT: 26000, monthly: [
        { month: "2025-01", me: 759 }, { month: "2025-02", me: 761 }, { month: "2025-03", me: 765 },
        { month: "2025-04", me: 610 }, { month: "2025-05", me: 643 }, { month: "2025-06", me: 565 },
      ] },
    },
  },
};

app.get("/api/metrics", (_req, res) => res.json(DATA));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("API listening on " + port));
