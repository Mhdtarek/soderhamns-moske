import hijriConverter from "hijri-converter";
const { toHijri } = hijriConverter;
const HIJRI_MONTHS_SV = [
  "Muharram",
  "Safar",
  "Rabi al-awwal",
  "Rabi al-thani",
  "Jumada al-awwal",
  "Jumada al-thani",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qa'da",
  "Dhu al-Hijja"
];
const GREGORIAN_MONTHS_SV = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december"
];
function formatHijriLabel(h) {
  const mName = HIJRI_MONTHS_SV[h.hm - 1] ?? String(h.hm);
  return `${h.hd} ${mName} ${h.hy} e.h.`;
}
function formatGregorianLabelSv(year, month, day) {
  return `${day} ${GREGORIAN_MONTHS_SV[month - 1] ?? month} ${year}`;
}
function enrichPrayerTimesCalendar(row, year, month, day) {
  const h = toHijri(year, month, day);
  return {
    ...row,
    month: Number(month),
    hijri: {
      hd: h.hd,
      hm: h.hm,
      hy: h.hy,
      label: formatHijriLabel(h)
    },
    gregorianLabel: formatGregorianLabelSv(year, month, day)
  };
}
export {
  enrichPrayerTimesCalendar as e
};
