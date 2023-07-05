import { json, error, text } from "@sveltejs/kit";
import {
  monthToJsonFile,
  getMonthPrayerTime,
  dateToDayAndMonth,
} from "$lib/prayerutils";
import { createCanvas } from "canvas";
// @ts-ignore
export function GET({ url, params }) {
  const today = dateToDayAndMonth(new Date());
  const month = today.month.toString();

  try {
    let dataArray = getMonthPrayerTime(monthToJsonFile, month);

    // Calculate table dimensions
    const tableWidth = 600;
    const tableHeight = (dataArray.length + 2) * 50; // Rows + header row + additional row

    // Create a canvas with the table dimensions
    const canvas = createCanvas(tableWidth, tableHeight);
    const ctx = canvas.getContext("2d");

    // Set table styles
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Calculate header height
    const headerHeight = 50;

    // Get the current month in Swedish
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
      "December",
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];

    // Display additional information

    // Display additional information
    ctx.fillStyle = "#000000"; // Set the fill style to black
    ctx.fillRect(0, 0, tableWidth, headerHeight * 2); // Fill a rectangle to set the background
    ctx.fillStyle = "#ffffff"; // Set the fill style for the text
    ctx.font = "16px Arial";
    ctx.fillText(
      `Söderhamns bönetider ${currentMonth}`,
      tableWidth * 0.5,
      headerHeight * 0.25
    );
    ctx.fillText(
      "Swish number: 1234019146",
      tableWidth * 0.5,
      headerHeight * 0.75
    );

    // Draw table header
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, headerHeight, tableWidth, headerHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Date", tableWidth * 0.1, headerHeight * 1.5);
    ctx.fillText("Fajr", tableWidth * 0.3, headerHeight * 1.5);
    ctx.fillText("Shuruk", tableWidth * 0.45, headerHeight * 1.5);
    ctx.fillText("Dhohr", tableWidth * 0.6, headerHeight * 1.5);
    ctx.fillText("Asr", tableWidth * 0.75, headerHeight * 1.5);
    ctx.fillText("Magrib", tableWidth * 0.9, headerHeight * 1.5);

    // Draw table rows
    ctx.fillStyle = "#f8f8f8";
    ctx.font = "12px Arial";
    dataArray.forEach(
      (
        /** @type {{ Dat: string; Fajr: string; Shuruk: string; Dhohr: string; Asr: string; Magrib: string; }} */ data,
        /** @type {number} */ index
      ) => {
        const rowY = (index + 2) * 50;
        ctx.fillStyle = "#f8f8f8"; // Reset font color for each row
        ctx.fillRect(0, rowY, tableWidth, 50);
        ctx.fillStyle = "#000000"; // Set font color for each row
        ctx.fillText(data.Dat, tableWidth * 0.1, rowY + 25);
        ctx.fillText(data.Fajr, tableWidth * 0.3, rowY + 25);
        ctx.fillText(data.Shuruk, tableWidth * 0.45, rowY + 25);
        ctx.fillText(data.Dhohr, tableWidth * 0.6, rowY + 25);
        ctx.fillText(data.Asr, tableWidth * 0.75, rowY + 25);
        ctx.fillText(data.Magrib, tableWidth * 0.9, rowY + 25);
      }
    );

    // Save the canvas as an image file
    const buffer = canvas.toDataURL();
    return text(buffer);
  } catch (err) {
    // @ts-ignore
    throw error(400, err.message);
  }
}
