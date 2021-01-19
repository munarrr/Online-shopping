import BigPost from './bigPost.js';
import MiddlePost from './middlePost.js';

const Blog = () => {
  const section = document.createElement('section');

  section.className = 'blog';

  section.innerHTML = `
		<div class="container">
			<h2 class="blog__title">Read our Blog posts</h2>
			<div class="row">
				${BigPost('col-5')}
               </div>
               <div>
               ${MiddlePost}
               </div>
		</div>
	`;
  return section.outerHTML;
};

export default Blog;
