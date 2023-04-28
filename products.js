const data = {
    products: [
        {
            image: {
                src: 'img/product-1.jpg',
                alt: 'product description',
                height: 420
            },
            title: 'ellery x m\'o capsule',
            description: `Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda
              Operandi.`,
            price: '52.00',
            color: 'Black',
            size: 'XS'
        },
        {
            image: {
                src: 'img/product-2.jpg',
                alt: 'product description',
                height: 420
            },
            title: 'ellery x m\'o capsule',
            description: `Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda
              Operandi.`,
            price: '52.00',
            color: 'Red',
            size: 'XXL'
        },
        {
            image: {
                src: 'img/product-3.jpg',
                alt: 'product description',
                height: 420
            },
            title: 'ellery x m\'o capsule',
            description: `Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda
              Operandi.`,
            price: '52.00',
            color: 'Black',
            size: 'XL'
        },
        {
            image: {
                src: 'img/product-4.jpg',
                alt: 'product description',
                height: 420
            },
            title: 'ellery x m\'o capsule',
            description: `Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda
              Operandi.`,
            price: '52.00',
            color: 'Red',
            size: 'M'
        },{
            image: {
                src: 'img/product-5.jpg',
                alt: 'product description',
                height: 420
            },
            title: 'ellery x m\'o capsule',
            description: `Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda
              Operandi.`,
            price: '52.00',
            color: 'Black',
            size: 'S'
        },
        {
            image: {
                src: 'img/product-6.jpg',
                alt: 'product description',
                height: 420
            },
            title: 'ellery x m\'o capsule',
            description: `Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda
              Operandi.`,
            price: '52.00',
            color: 'Red',
            size: 'L'
        }
    ],
    header: 'Fetured Items',
    description: 'Shop for items based on what we featured in this week'
};

const body = document.querySelector('body');
const footer = document.querySelector('.page-footer');
const main = document.createElement('main');
main.classList.add('products');
const productHeader = document.createElement('h2');
const productParagraph = document.createElement('p');
productHeader.textContent = data.header;
productHeader.classList.add('products-title');
productParagraph.textContent = data.description;
productParagraph.classList.add('products-txt');
const ul = document.createElement('ul');
ul.classList.add('products-list');
main.appendChild(productHeader);
main.appendChild(productParagraph);
main.appendChild(ul);

const subscribe = document.querySelector('.subscribe-wrp');
const basket = document.createElement('section');
basket.classList.add('cart-items-section-wrp');
const cartItemsHeader = document.createElement('h2');
cartItemsHeader.classList.add('products-title');
cartItemsHeader.classList.add('cart-item-header');
cartItemsHeader.textContent = 'Cart Items';

const basketList = document.createElement('ul');
basketList.classList.add('cart-items-list');

let basketItems = [];

const getBasketCartItem = (basketItem) => {
    const cartWrp = document.createElement('li');
    cartWrp.classList.add('cart-item');
    cartWrp.dataset.cartWrpId = basketItem.src;

    const cartImg = document.createElement('img');
    cartImg.classList.add('cart-item-img');
    cartImg.setAttribute('src', basketItem.src);

    const basketDetail = document.createElement('section');
    basketDetail.classList.add('cart-item-detail');

    const basketTitle = document.createElement('h2');
    basketTitle.classList.add('cart-item-title');
    basketTitle.textContent = basketItem.title;

    const basketPriceSpan = `<span class="basket-detail-item basket-price-item" data-basket-price-id="${basketItem.src}">$${basketItem.price}</span>`;

    const basketPrice = document.createElement('p');
    basketPrice.textContent = 'Price:';
    basketPrice.insertAdjacentHTML('beforeend', basketPriceSpan);
    basketPrice.classList.add('basket-detail-item');

    const basketColor = document.createElement('p');
    basketColor.classList.add('basket-detail-item');
    basketColor.textContent = `Color: ${basketItem.color}`;

    const basketSize = document.createElement('p');
    basketSize.classList.add('basket-detail-item');
    basketSize.textContent = `Size: ${basketItem.size}`;

    const basketQuantityInput = `<span><input type="number" min="1" class="basket-quantity-item" data-basket-quantity-value="${basketItem.src}" value="${basketItem.quantity}"/></span>`;

    const basketQuantity = document.createElement('p');
    basketQuantity.textContent = `Quantity: `;
    basketQuantity.dataset.basketQuantityId = basketItem.src;
    basketQuantity.classList.add('basket-detail-item');
    basketQuantity.insertAdjacentHTML('beforeend', basketQuantityInput);

    const basketRemove = document.createElement('a');
    basketRemove.classList.add('cart-list-close-btn');
    basketRemove.setAttribute('href', '#');
    basketRemove.dataset.basketRemoveId = basketItem.src;

    cartWrp.appendChild(cartImg);
    cartWrp.appendChild(basketDetail);
    cartWrp.appendChild(basketRemove);
    basketDetail.appendChild(basketTitle);
    basketDetail.appendChild(basketPrice);
    basketDetail.appendChild(basketColor);
    basketDetail.appendChild(basketSize);
    basketDetail.appendChild(basketQuantity);

    return cartWrp;
};

const getBasketProductBySrc = (product) => basketItems.find(item => item.src === product.image.src);

data.products.forEach(product => {
    const li = document.createElement('li');
    li.classList.add('products-item');
    const brandSection = document.createElement('section');
    brandSection.classList.add('brand-products-item');
    const figure = document.createElement('figure');
    figure.classList.add('products-item-photo-wrp');
    const a = document.createElement('a');
    a.classList.add('products-item-link');
    a.setAttribute('href', '#');
    const img = document.createElement('img');
    img.classList.add('products-item-photo');
    img.setAttribute('src', product.image.src);
    img.setAttribute('alt', product.image.alt);
    img.style.height = `${product.image.height}px`;
    a.appendChild(img);
    figure.appendChild(a);

    const productSection = document.createElement('section');
    productSection.classList.add('products-item-txt-wrp');
    const title = document.createElement('h3');
    title.classList.add('products-item-title');
    title.classList.add('txt');
    title.textContent = product.title;
    const description = document.createElement('p');
    description.classList.add('products-item-txt');
    description.classList.add('txt');
    description.textContent = product.description;
    const price = document.createElement('p');
    price.classList.add('products-item-price');
    price.classList.add('txt');
    price.textContent = product.price;
    productSection.appendChild(title);
    productSection.appendChild(description);
    productSection.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('products-item-btn');
    addToCartButton.classList.add('txt');
    addToCartButton.setAttribute('type', 'button');
    const svg = `<svg width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"/>
            </svg>`;
    const cartSpan = document.createElement('span');
    cartSpan.textContent = 'Add to Cart';
    addToCartButton.appendChild(cartSpan);
    cartSpan.insertAdjacentHTML('beforebegin', svg);

    brandSection.appendChild(figure);
    brandSection.appendChild(productSection);
    brandSection.appendChild(addToCartButton);

    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(basketItems.length === 0) {
            basket.classList.add('cart-items-section-visible');
            basket.appendChild(cartItemsHeader);
            basket.appendChild(basketList);
        }

        const currentBasketItem = {
            price: product.price,
            color: product.color,
            size: product.size,
            quantity: 1,
            src: product.image.src,
            title: product.title.toUpperCase(),
        };
        const addProduct = getBasketProductBySrc(product);

        if(!addProduct) {
            const cartWrp = getBasketCartItem(currentBasketItem);

            basketItems.push(currentBasketItem);

            basketList.appendChild(cartWrp);

            //test
            // const testBasketItemsElement = document.createElement('div');
            // testBasketItemsElement.style.height = '50px';
            // testBasketItemsElement.style.width = '50px';
            // testBasketItemsElement.style.backgroundColor = 'black';
            // basketList.appendChild(testBasketItemsElement);
            // testBasketItemsElement.addEventListener('click', () => console.log(basketItems));

            const quantityElement = document.querySelector(`[data-basket-quantity-value="${currentBasketItem.src}"]`);
            const priceElement = document.querySelector(`[data-basket-price-id="${currentBasketItem.src}"]`);
            const basketRemoveElement = document.querySelector(`[data-basket-remove-id="${currentBasketItem.src}"]`);

            basketRemoveElement.addEventListener('click', (event) => {
                event.preventDefault();
                const removeProduct = getBasketProductBySrc(product);
                removeProduct.quantity = removeProduct.quantity - 1;
                removeProduct.price = `${+product.price * removeProduct.quantity}`;

                if(removeProduct.quantity === 0) {
                    const cartWrpElement = document.querySelector(`[data-cart-wrp-id="${removeProduct.src}"]`);

                    cartWrpElement.remove();
                    basketItems = basketItems.filter(basketItem => basketItem.src !== removeProduct.src);
                } else {
                    const quantityElement = document.querySelector(`[data-basket-quantity-value="${removeProduct.src}"]`);
                    quantityElement.value = `${removeProduct.quantity}`;
                    const priceElement = document.querySelector(`[data-basket-price-id="${removeProduct.src}"]`);
                    priceElement.textContent = `$${removeProduct.price}`;
                }

                if(basketItems.length === 0) {
                    cartItemsHeader.remove();
                    basket.classList.remove('cart-items-section-visible');
                }
            });



            quantityElement.addEventListener('input', (event) => {
                event.preventDefault();
                const quantityProduct = getBasketProductBySrc(product);
                const target = event.target;

                if(target.value) {
                    quantityProduct.quantity = +target.value;
                    quantityProduct.price =`${+product.price * quantityProduct.quantity}`;
                    priceElement.textContent = `$${quantityProduct.price}`;
                }
            })

            quantityElement.addEventListener('blur', (event) => {
                event.preventDefault();
                const target = event.target;
                const quantityProduct = getBasketProductBySrc(product);

                if(!target.value || target.value === '0') {
                    target.value = "1";
                    quantityProduct.quantity = +target.value;
                    quantityProduct.price =`${+product.price * quantityProduct.quantity}`;
                    priceElement.textContent = `$${quantityProduct.price}`;
                }
            })
        } else {
            const quantityElement = document.querySelector(`[data-basket-quantity-value="${currentBasketItem.src}"]`);
            const priceElement = document.querySelector(`[data-basket-price-id="${currentBasketItem.src}"]`);
            addProduct.quantity = addProduct.quantity + 1;
            addProduct.price = `${+product.price * addProduct.quantity}`;
            quantityElement.value = `${addProduct.quantity}`;
            priceElement.textContent = `$${addProduct.price}`;
        }
    });

    li.appendChild(brandSection);
    ul.appendChild(li);
});

footer.insertBefore(basket, subscribe);
body.insertBefore(main, footer);
