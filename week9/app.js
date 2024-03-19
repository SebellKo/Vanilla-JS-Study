import getYoutubeList from './modules/youtubeApi.js';
import addIntervalEffect from './modules/addIntervalEffect.js';
import appendVideoList from './modules/appendVideoList.js';

const country = document.querySelector('h1');
const button = document.querySelector('button');
const video = document.querySelector('video');
const videoList = document.querySelector('ul');

const { data: countryData } = await axios.get('./data.json');
const countryNames = countryData.map((country) => country.name);

button.addEventListener('click', async () => {
  videoList.style.display = 'none';
  button.innerText = 'Wait..';

  await addIntervalEffect(country, countryNames);

  const currentName = country.innerText;
  const youtubeList = await getYoutubeList(currentName);

  video.src = countryData.find((data) => data.name === currentName).src;

  setTimeout(() => {
    videoList.style.display = 'flex';
    appendVideoList(youtubeList, videoList);
    button.innerText = 'Click';
  }, 2000);
});
