import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createGallery = createGaleryMarkup (galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', createGallery)



function createGaleryMarkup (galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}" /> 
            </a>           
        </div>
        `;}).join('');
   
};

galleryEl.addEventListener('click', galleryItemsClick);

function galleryItemsClick(event){
    event.preventDefault();
    const clickedImage = event.target;
    
    if(clickedImage.nodeName ==='IMG'){
        openImageInModal(clickedImage.dataset.source);
    }
}

function openImageInModal(modalImage) {
    const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${modalImage}" width="800" height="600">`).show();

    window.addEventListener('keydown', function onEscPressed(event) {
        if (event.code ==='Escape') {
            window.removeEventListener('keydown', onEscPressed);
            closeModalHandler();
        }
    });
}

function closeModalHandler(event) {
    const openedModal = document.querySelector('div.basicLightbox');
    openedModal.classList.remove('basicLightbox--visible');
    setTimeout(() => {
        document.body.removeChild(openedModal)
    }, 410);
}
// ------------------------------------------------------------
// galleryContainer.addEventListener('click', onGalleryItemsClick);

// function onGalleryItemsClick(event) {
//     event.preventDefault();
//     const clickedImage = event.target;

//     if (clickedImage.nodeName === 'IMG') {
//         openImageInModal(clickedImage.dataset.source);
//     }
// }

// function openImageInModal(imageSource) {
//     const instance = basicLightbox.create(`<img src="${imageSource}" width="800" height="600">`);
//     instance.show();
    
//     window.addEventListener('keydown', function onEscButtonPressed(event) {
//         if (event.code === 'Escape') {
//         window.removeEventListener('keydown', onEscButtonPressed);
//         instance.close();
//         }
//     });
// }



// function onEscButtonPressed(event) {
//     if (event.code === 'Escape') {
//         window.removeEventListener('keydown', onEscButtonPressed);
//         closeModalHandler();
//     }
// }

// function closeModalHandler() {
//     const openedModal = document.querySelector('div.basicLightbox');
//     openedModal.classList.remove('basicLightbox--visible');
//     setTimeout(() => {
//         document.body.removeChild(openedModal)
//     }, 410);
// }
