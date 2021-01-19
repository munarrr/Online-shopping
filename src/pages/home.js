import Hero from '../components/hero/index.js';
import Reviews from '../components/reviews/index.js';
import Headline from '../components/headline/index.js';
import Blog from '../components/blog/index.js';
import { reviewsData } from '../components/reviews/const.js';

const Home = () => {
  const homePage = document.createElement('main');

  homePage.className = 'home';

  homePage.innerHTML = `
  ${Hero}
  ${Reviews(reviewsData)}
  ${Headline()}
  ${Blog()}
	`;

  return homePage;
};

export default Home;
