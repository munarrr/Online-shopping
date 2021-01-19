const BigPost = (className) => {
     const column = document.createElement('div');
   
     column.className = className;
   
     column.innerHTML = `
             <div class="middle-post__item">
                  <span class="middle-post__tips tips">Dinner Tips</span>
                  <img class="middle-post__background" src="https://by-sea.ru/wp-content/uploads/2015/10/Image_007.jpg" />
                  <div class="middle-post__info">
                       <h3 class="middle-post__title">Our chef tips for a great and tasty dinner ready in 20 minutes</h3>
                       <div class="row middle-post__row">
                            <img class="middle-post__avatar" src="https://c0.klipartz.com/pngpicture/178/419/gratis-png-hombre-ilustracion-iconos-de-computadora-avatar-inicio-de-sesion-usuario-avatar-thumbnail.png"/>
                            <span class="middle-post__author">Author</span>
                            <time class="middle-post__date">17. 6. 2020</time>
                       </div>
                  </div>
             </div>
        `;
   
     return column.outerHTML;
   };
   
   export default BigPost;
