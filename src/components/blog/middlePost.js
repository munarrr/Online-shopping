const MiddlePost = () => {
     const div = document.createElement('div');
     div.className = MiddlePost;
     MiddlePost.innerHTML = `
             <div class="middle-post__item">
                <img class="middle-post__background" src="https://by-sea.ru/wp-content/uploads/2015/10/Image_007.jpg" />
                  <span class="middle-post__tips tips">Vegetable</span>
                  <div class="middle-post__info">
                       <h3 class="middle-post__title">Which vegetable your family will love and want’s eat each day</h3>
                            <span class="middle-post__author">Author</span>
                            <time class="middle-post__date">17. 6. 2020</time>
                  </div>
             </div>
        `;
     return div.outerHTML;

};
     export default MiddlePost ;
