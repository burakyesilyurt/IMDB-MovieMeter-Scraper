const axios = require("axios");
const { JSDOM } = require("jsdom");
const { writeFile } = require("node:fs/promises");
const { join } = require("node:path");
const { scrapeDatas } = require("./imdbScrape");

const file_name = join(__dirname, "imdbData.json");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://www.imdb.com/chart/moviemeter/",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
  },
};

const fetchImdb = async () => {
  const response = await axios.request(config);
  const dom = new JSDOM(response.data);
  const document = dom.window.document;
  const imdbDatas = scrapeDatas(document);
  return imdbDatas;
};

const writeJSONFile = async () => {
  const movies = await fetchImdb();
  await writeFile(file_name, JSON.stringify(movies, null, 4), "utf8");
};

writeJSONFile();
