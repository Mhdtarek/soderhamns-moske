import { t as text, e as error } from "../../../../chunks/index.js";
import { d as dateToDayAndMonth, a as getMonthPrayerTime, m as monthToJsonFile } from "../../../../chunks/index3.js";
import { createCanvas } from "canvas";
function GET({ url, params }) {
  const today = dateToDayAndMonth(/* @__PURE__ */ new Date());
  const month = today.month.toString();
  try {
    let dataArray = getMonthPrayerTime(monthToJsonFile, month);
    const tableWidth = 600;
    const tableHeight = (dataArray.length + 2) * 50;
    const canvas = createCanvas(tableWidth, tableHeight);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const headerHeight = 50;
    const months = [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December"
    ];
    const currentDate = /* @__PURE__ */ new Date();
    const currentMonth = months[currentDate.getMonth()];
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, tableWidth, headerHeight * 2);
    ctx.fillStyle = "#ffffff";
    ctx.font = "16px Arial";
    ctx.fillText(
      `Söderhamns bönetider ${currentMonth}`,
      tableWidth * 0.5,
      headerHeight * 0.25
    );
    ctx.fillText(
      "Swish nummer: 1234019146",
      tableWidth * 0.5,
      headerHeight * 0.75
    );
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, headerHeight, tableWidth, headerHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Date", tableWidth * 0.1, headerHeight * 1.5);
    ctx.fillText("Fajr", tableWidth * 0.3, headerHeight * 1.5);
    ctx.fillText("Shuruk", tableWidth * 0.45, headerHeight * 1.5);
    ctx.fillText("Dhohr", tableWidth * 0.6, headerHeight * 1.5);
    ctx.fillText("Asr", tableWidth * 0.75, headerHeight * 1.5);
    ctx.fillText("Maghrib", tableWidth * 0.9, headerHeight * 1.5);
    ctx.fillStyle = "#f8f8f8";
    ctx.font = "12px Arial";
    dataArray.forEach(
      (data, index) => {
        const rowY = (index + 2) * 50;
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, rowY, tableWidth, 50);
        ctx.fillStyle = "#000000";
        ctx.fillText(data.Dat, tableWidth * 0.1, rowY + 25);
        ctx.fillText(data.Fajr, tableWidth * 0.3, rowY + 25);
        ctx.fillText(data.Shuruk, tableWidth * 0.45, rowY + 25);
        ctx.fillText(data.Dhohr, tableWidth * 0.6, rowY + 25);
        ctx.fillText(data.Asr, tableWidth * 0.75, rowY + 25);
        ctx.fillText(data.Maghrib, tableWidth * 0.9, rowY + 25);
      }
    );
    const buffer = canvas.toDataURL();
    return text(buffer);
  } catch (err) {
    throw error(400, err.message);
  }
}
export {
  GET
};
