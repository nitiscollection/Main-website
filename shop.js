// =====================================================
// NITI'S ONLINE STORE
// SHOP PAGE JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const productGrid =
        document.querySelector(".shop-product-grid");

    const products =
        Array.from(
            document.querySelectorAll(".shop-product-card")
        );

    const productCount =
        document.querySelector(".product-count strong");

    const sortSelect =
        document.querySelector("#sort");


    let currentCategory = "All";


    // =================================================
    // GET PRODUCT PRICE
    // =================================================

    function getPrice(product) {

        const priceElement =
            product.querySelector(
                ".shop-product-bottom strong"
            );

        if (!priceElement) {
            return 0;
        }

        return Number(
            priceElement.textContent
                .replace("₹", "")
                .replace(/,/g, "")
                .trim()
        ) || 0;

    }


    // =================================================
    // GET PRODUCT CATEGORY
    // =================================================

    function getCategory(product) {

        const element =
            product.querySelector(
                ".shop-product-category"
            );

        return element
            ? element.textContent.trim()
            : "";

    }


    // =================================================
    // FILTER + SORT
    // =================================================

    function updateProducts() {

        let visibleProducts =
            products.filter(product => {

                if (currentCategory === "All") {
                    return true;
                }

                return (
                    getCategory(product).toLowerCase() ===
                    currentCategory.toLowerCase()
                );

            });


        // =============================================
        // SORT
        // =============================================

        const sortValue =
            sortSelect.value;


        if (sortValue === "low") {

            visibleProducts.sort(
                (a, b) =>
                    getPrice(a) - getPrice(b)
            );

        }

        else if (sortValue === "high") {

            visibleProducts.sort(
                (a, b) =>
                    getPrice(b) - getPrice(a)
            );

        }

        else if (sortValue === "new") {

            visibleProducts.sort(
                (a, b) => {

                    const aNew =
                        a.querySelector(
                            ".product-badge"
                        )?.textContent
                            .trim()
                            .toLowerCase() === "new";

                    const bNew =
                        b.querySelector(
                            ".product-badge"
                        )?.textContent
                            .trim()
                            .toLowerCase() === "new";


                    if (aNew && !bNew) {
                        return -1;
                    }

                    if (!aNew && bNew) {
                        return 1;
                    }

                    return 0;

                }
            );

        }


        // =============================================
        // REBUILD PRODUCT GRID
        // =============================================

        products.forEach(product => {

            product.style.display = "none";

        });


        visibleProducts.forEach(product => {

            product.style.display = "";

            productGrid.appendChild(product);

        });


        // =============================================
        // UPDATE COUNT
        // =============================================

        if (productCount) {

            productCount.textContent =
                visibleProducts.length;

        }

    }


    // =================================================
    // CATEGORY FILTER
    // =================================================

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentCategory =
                    button.textContent.trim();


                filterButtons.forEach(btn => {

                    btn.classList.remove("active");

                });


                button.classList.add("active");


                updateProducts();

            }
        );

    });


    // =================================================
    // SORT
    // =================================================

    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            updateProducts
        );

    }


    // =================================================
    // PRODUCT LINKS
    // =================================================

    const productLinks =
        document.querySelectorAll(
            ".view-product"
        );


    productLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const productCard =
                    link.closest(
                        ".shop-product-card"
                    );


                if (!productCard) {
                    return;
                }


                const productName =
                    productCard
                        .querySelector(
                            ".shop-product-info h3"
                        )
                        ?.textContent
                        .trim();


                if (!productName) {
                    return;
                }


                // Convert product name into URL ID

                const productId =
                    productName
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");


                window.location.href =
                    `product.html?product=${productId}`;

            }
        );

    });


    // =================================================
    // INITIALIZE
    // =================================================

    updateProducts();

});