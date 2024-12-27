// to tarek next year here is the code to gen

const fetchMonthData = async (month) => {
  const response = await fetch(
    "https://www.islamiskaforbundet.se/wp-content/plugins/bonetider/Bonetider_Widget.php",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,sv;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://www.islamiskaforbundet.se/bonetider/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `ifis_bonetider_page_city=S%C3%B6derhamn%2C+SE&ifis_bonetider_page_month=${month}`,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    }
  );
  return response.text();
};

const parseTableData = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const rows = doc.querySelectorAll("#ifis_bonetider tr");
  const result = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length === 7) {
      result.push({
        Dat: cells[0].textContent.trim(),
        Fajr: cells[1].textContent.trim(),
        Shuruk: cells[2].textContent.trim(),
        Dhohr: cells[3].textContent.trim(),
        Asr: cells[4].textContent.trim(),
        Maghrib: cells[5].textContent.trim(),
        Isha: cells[6].textContent.trim(),
      });
    }
  });

  return result;
};

const fetchAllMonths = async () => {
  for (let month = 14; month <= 25; month++) {
    console.log(`Fetching data for month ${month - 13}...`);
    try {
      const htmlString = await fetchMonthData(month);
      const data = parseTableData(htmlString);
      console.log(`Month ${month - 13}:`, data);
    } catch (error) {
      console.error(`Error fetching data for month ${month - 13}:`, error);
    }
  }
};

fetchAllMonths();
