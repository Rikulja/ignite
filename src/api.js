require("dotenv").config();

const BASE_URL = `https://api.rawg.io/api/`;

//Get  Dates

const getDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};

const lastYear = getDate().slice(0, 4) - 1;
const currentYear = new Date().getFullYear();
const nextYear = getDate().slice(0, 4) + 1;
const currentDate = getDate();

//Popular Games
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const popularGamesURL = () => `${BASE_URL}${popularGames}`;
console.log(popularGamesURL());
