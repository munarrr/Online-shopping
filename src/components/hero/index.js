import Sidebar from '../sidebar/index.js';
import { menuData, img1, img2, products } from './const.js';
import Card from './Card.js';
import ProductCard from './productCard.js';

const Hero = () => {
  const heroSection = document.createElement('section');

  heroSection.className = 'hero';

  heroSection.innerHTML = `
	<div class="container">
		<div class="row hero__row">
			${Sidebar(menuData[0].title, menuData[0].listItems, menuData[0].btnText)}
			<div class="hero__content row col-9 banner__row">${Card(img1)}${Card(img2)}</div>
		</div>
		<div class="row hero__row">
			<div class="col-3">
				${Sidebar(menuData[1].title, menuData[1].listItems, menuData[1].btnText, '')}
				${Sidebar(menuData[1].title, menuData[1].listItems, menuData[1].btnText, 'pt-120')}
			</div>
			<div class="hero__content row col-9 product__row">
				${products.map((item) => ProductCard(item)).join('')}
			</div>
		</div>
	</div>
	`;
  return heroSection.outerHTML;
};

export default Hero();
