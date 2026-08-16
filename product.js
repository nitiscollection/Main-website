// =====================================================
// NITI'S ONLINE STORE
// PRODUCT PAGE
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // PRODUCT DATA
    // Temporary frontend database
    // Later this will come from Supabase
    // =================================================

    const products = {

        "elegant-pearl-earrings": {

            name: "Elegant Pearl Earrings",

            category: "JEWELLERY",

            price: 349,

            oldPrice: 499,

            discount: "30% OFF",

            rating: "★★★★★",

            reviews: "4.9 (18 Reviews)",

            image: "💎",

            background: "jewellery",

            badge: "New",

            description:
                "Simple and elegant pearl earrings designed for everyday wear and special occasions.",

            details: {

                "Material": "Premium Artificial Jewellery",

                "Colour": "Pearl White",

                "Style": "Elegant",

                "Occasion": "Daily & Party Wear",

                "Care": "Keep away from water",

                "Availability": "In Stock"

            }

        },


        "handmade-rose": {

            name: "Handmade Rose",

            category: "HANDMADE FLOWERS",

            price: 149,

            oldPrice: 199,

            discount: "25% OFF",

            rating: "★★★★★",

            reviews: "5.0 (9 Reviews)",

            image: "🌹",

            background: "flowers",

            badge: "Popular",

            description:
                "A beautiful handmade rose carefully crafted for gifting, decoration and special occasions.",

            details: {

                "Material": "Handmade",

                "Colour": "Red",

                "Type": "Decorative Flower",

                "Occasion": "Gifting & Decoration",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "pearl-bracelet": {

            name: "Pearl Bracelet",

            category: "JEWELLERY",

            price: 299,

            oldPrice: 399,

            discount: "25% OFF",

            rating: "★★★★★",

            reviews: "4.8 (12 Reviews)",

            image: "📿",

            background: "jewellery",

            badge: "Popular",

            description:
                "A timeless pearl bracelet that adds a graceful touch to both traditional and modern outfits.",

            details: {

                "Material": "Artificial Pearls",

                "Colour": "White",

                "Style": "Classic",

                "Occasion": "Daily & Party Wear",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "handmade-flower-bouquet": {

            name: "Handmade Flower Bouquet",

            category: "HANDMADE FLOWERS",

            price: 499,

            oldPrice: 649,

            discount: "23% OFF",

            rating: "★★★★★",

            reviews: "5.0 (15 Reviews)",

            image: "💐",

            background: "flowers",

            badge: "Popular",

            description:
                "A beautiful handmade flower bouquet created specially for gifting and celebrations.",

            details: {

                "Material": "Handmade",

                "Flowers": "Multiple",

                "Colour": "Mixed",

                "Occasion": "Birthday & Gifting",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "elegant-designer-saree": {

            name: "Elegant Designer Saree",

            category: "SAREES",

            price: 1499,

            oldPrice: 1899,

            discount: "21% OFF",

            rating: "★★★★★",

            reviews: "4.8 (12 Reviews)",

            image: "👗",

            background: "saree",

            badge: "New",

            description:
                "A graceful designer saree with an elegant look, perfect for festive occasions, celebrations and special gatherings.",

            details: {

                "Fabric": "Premium Silk",

                "Saree Length": "5.5 Metres",

                "Blouse": "Included",

                "Occasion": "Festive & Party",

                "Care": "Dry Clean",

                "Availability": "In Stock"

            }

        },


        "handmade-flower-set": {

            name: "Handmade Flower Set",

            category: "HANDMADE FLOWERS",

            price: 399,

            oldPrice: 499,

            discount: "20% OFF",

            rating: "★★★★★",

            reviews: "4.9 (8 Reviews)",

            image: "🌷",

            background: "flowers",

            badge: "New",

            description:
                "A colourful collection of handmade flowers perfect for decoration and gifting.",

            details: {

                "Material": "Handmade",

                "Flowers": "Mixed",

                "Colour": "Multiple",

                "Occasion": "Decoration & Gifting",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "traditional-necklace-set": {

            name: "Traditional Necklace Set",

            category: "JEWELLERY",

            price: 699,

            oldPrice: 899,

            discount: "22% OFF",

            rating: "★★★★★",

            reviews: "4.8 (11 Reviews)",

            image: "✨",

            background: "jewellery",

            badge: "Popular",

            description:
                "A beautiful traditional necklace set designed to complement festive and ethnic outfits.",

            details: {

                "Material": "Artificial Jewellery",

                "Colour": "Gold Tone",

                "Style": "Traditional",

                "Occasion": "Festive & Wedding",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "festive-collection-saree": {

            name: "Festive Collection Saree",

            category: "SAREES",

            price: 1899,

            oldPrice: 2299,

            discount: "17% OFF",

            rating: "★★★★★",

            reviews: "4.9 (7 Reviews)",

            image: "🌺",

            background: "saree",

            badge: "New",

            description:
                "An elegant saree designed for festive celebrations, family functions and special occasions.",

            details: {

                "Fabric": "Silk Blend",

                "Saree Length": "5.5 Metres",

                "Blouse": "Included",

                "Occasion": "Festive",

                "Care": "Dry Clean",

                "Availability": "In Stock"

            }

        },


        "classic-ring": {

            name: "Classic Ring",

            category: "JEWELLERY",

            price: 249,

            oldPrice: 299,

            discount: "17% OFF",

            rating: "★★★★★",

            reviews: "4.7 (6 Reviews)",

            image: "💍",

            background: "jewellery",

            badge: "",

            description:
                "A simple and elegant ring designed for everyday styling.",

            details: {

                "Material": "Artificial Jewellery",

                "Colour": "Gold Tone",

                "Style": "Classic",

                "Occasion": "Everyday",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "traditional-saree": {

            name: "Traditional Saree",

            category: "SAREES",

            price: 1299,

            oldPrice: 1599,

            discount: "19% OFF",

            rating: "★★★★★",

            reviews: "4.8 (9 Reviews)",

            image: "👗",

            background: "saree",

            badge: "Popular",

            description:
                "A timeless traditional saree perfect for festive occasions and family celebrations.",

            details: {

                "Fabric": "Cotton Silk",

                "Saree Length": "5.5 Metres",

                "Blouse": "Included",

                "Occasion": "Festive & Traditional",

                "Care": "Dry Clean",

                "Availability": "In Stock"

            }

        },


        "decorative-flower-bunch": {

            name: "Decorative Flower Bunch",

            category: "HANDMADE FLOWERS",

            price: 299,

            oldPrice: 399,

            discount: "25% OFF",

            rating: "★★★★★",

            reviews: "5.0 (10 Reviews)",

            image: "🌸",

            background: "flowers",

            badge: "Popular",

            description:
                "Handmade decorative flowers for home decoration, gifting and special occasions.",

            details: {

                "Material": "Handmade",

                "Colour": "Mixed",

                "Type": "Flower Bunch",

                "Occasion": "Decoration & Gifting",

                "Care": "Keep dry",

                "Availability": "In Stock"

            }

        },


        "special-gift-hamper": {

            name: "Special Gift Hamper",

            category: "GIFTS",

            price: 799,

            oldPrice: 999,

            discount: "20% OFF",

            rating: "★★★★★",

            reviews: "4.9 (14 Reviews)",

            image: "🎁",

            background: "gift",

            badge: "Popular",

            description:
                "A thoughtful collection of beautiful items packed specially for gifting.",

            details: {

                "Type": "Gift Hamper",

                "Contents": "Multiple Items",

                "Colour": "Custom",

                "Occasion": "Birthday & Gifting",

                "Packaging": "Gift Packed",

                "Availability": "In Stock"

            }

        }

    };


    // =================================================
    // READ PRODUCT ID FROM URL
    // =================================================

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        urlParams.get("product");


    // =================================================
    // FIND PRODUCT
    // =================================================

    const product =
        products[productId];


    // =================================================
    // INVALID PRODUCT
    // =================================================

    if (!product) {

        document.title =
            "Product Not Found | Niti's Online Store";

        const productPage =
            document.querySelector(".product-page");

        if (productPage) {

            productPage.innerHTML = `

                <div class="product-not-found">

                    <div class="not-found-icon">
                        🛍️
                    </div>

                    <h1>
                        Product Not Found
                    </h1>

                    <p>
                        Sorry, we couldn't find the
                        product you're looking for.
                    </p>

                    <a
                        href="shop.html"
                        class="btn btn-primary">

                        Back to Shop

                    </a>

                </div>

            `;

        }

        return;

    }


    // =================================================
    // HELPER
    // =================================================

    function element(selector) {

        return document.querySelector(selector);

    }


    // =================================================
    // UPDATE PAGE TITLE
    // =================================================

    document.title =
        `${product.name} | Niti's Online Store`;


    // =================================================
    // PRODUCT NAME
    // =================================================

    element(".product-details h1")
        .textContent =
        product.name;


    // =================================================
    // CATEGORY
    // =================================================

    element(".product-category-label")
        .textContent =
        product.category;


    // =================================================
    // RATING
    // =================================================

    element(".stars")
        .textContent =
        product.rating;


    element(".product-rating a")
        .textContent =
        product.reviews;


    // =================================================
    // PRICE
    // =================================================

    element(".product-price strong")
        .textContent =
        `₹${product.price.toLocaleString("en-IN")}`;


    element(".old-price")
        .textContent =
        `₹${product.oldPrice.toLocaleString("en-IN")}`;


    element(".discount")
        .textContent =
        product.discount;


    // =================================================
    // DESCRIPTION
    // =================================================

    element(".product-short-description")
        .textContent =
        product.description;


    // =================================================
    // MAIN IMAGE
    // =================================================

    const mainImage =
        element(".main-product-image");


    mainImage.classList.remove(
        "jewellery",
        "flowers",
        "saree",
        "gift"
    );


    mainImage.classList.add(
        product.background
    );


    mainImage.querySelector(
        "span:first-child"
    ).textContent =
        product.image;


    // =================================================
    // BADGE
    // =================================================

    const badge =
        element(".product-page-badge");


    if (product.badge) {

        badge.textContent =
            product.badge;

        badge.style.display =
            "block";

    } else {

        badge.style.display =
            "none";

    }


    // =================================================
    // PRODUCT DETAILS
    // =================================================

    const detailsGrid =
        document.querySelector(
            ".details-grid"
        );


    detailsGrid.innerHTML = "";


    Object.entries(
        product.details
    ).forEach(
        ([key, value]) => {

            const detail =
                document.createElement(
                    "div"
                );

            detail.className =
                "detail-item";

            detail.innerHTML = `

                <span>
                    ${key}
                </span>

                <strong>
                    ${value}
                </strong>

            `;

            detailsGrid.appendChild(
                detail
            );

        }
    );


    // =================================================
    // QUANTITY
    // =================================================

    const decreaseButton =
        document.getElementById(
            "decrease"
        );

    const increaseButton =
        document.getElementById(
            "increase"
        );

    const quantityElement =
        document.getElementById(
            "quantity"
        );


    let quantity = 1;


    decreaseButton.addEventListener(
        "click",
        () => {

            if (quantity > 1) {

                quantity--;

                quantityElement.textContent =
                    quantity;

            }

        }
    );


    increaseButton.addEventListener(
        "click",
        () => {

            if (quantity < 10) {

                quantity++;

                quantityElement.textContent =
                    quantity;

            }

        }
    );


    // =================================================
    // ADD TO CART
    // =================================================

    const addToCart =
        document.getElementById(
            "addToCart"
        );


    addToCart.addEventListener(
        "click",
        () => {

            alert(
                `${product.name} added to cart (${quantity})`
            );

        }
    );


    // =================================================
    // BUY NOW
    // =================================================

    const buyNow =
        document.querySelector(
            ".buy-now-btn"
        );


    buyNow.addEventListener(
        "click",
        () => {

            alert(
                `Buy Now: ${product.name}`
            );

        }
    );


    // =================================================
    // WISHLIST
    // =================================================

    const wishlist =
        document.querySelector(
            ".product-wishlist"
        );


    wishlist.addEventListener(
        "click",
        () => {

            wishlist.classList.toggle(
                "active"
            );

            wishlist.textContent =
                wishlist.classList.contains(
                    "active"
                )
                    ? "♥"
                    : "♡";

        }
    );

});