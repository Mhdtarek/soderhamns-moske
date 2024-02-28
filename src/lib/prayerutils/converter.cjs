const fs = require("fs");
const moment = require("moment-hijri");

// Function to convert Arabic numerals to Latin numerals
function convertArabicToLatin(arabicNumerals) {
  const arabicToLatinMap = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };

  return arabicNumerals.replace(/[٠-٩]/g, (digit) => arabicToLatinMap[digit]);
}

// Function to add Hijri properties to each object in the array
function addHijriProperties(data, month) {
  return data.map((entry) => {
    const gregorianDate = `2024-${String(month).padStart(2, "0")}-${String(
      entry.Dat
    ).padStart(2, "0")}`;
    const hijriDateArabic = moment(gregorianDate, "YYYY-MM-DD").format(
      "iYYYY-iM-iD"
    );
    const hijriDateLatin = convertArabicToLatin(hijriDateArabic);
    const [hiYear, hiMonth, hiDay] = hijriDateLatin.split("-").map(Number);
    return { ...entry, hiDa: hiDay, HiMo: hiMonth };
  });
}

// Loop through each month file
for (let i = 1; i <= 12; i++) {
  const filename = `${i}.json`;
  const rawData = fs.readFileSync(filename);
  const jsonData = JSON.parse(rawData);

  // Add Hijri properties to the data
  const dataWithHijri = addHijriProperties(jsonData, i);

  // Write the updated data back to the file
  fs.writeFileSync(filename, JSON.stringify(dataWithHijri, null, 2));

  console.log(`Updated ${filename} with Hijri properties.`);
}
