"use strict";

/* =========================================================
   ROAST CAFE
   Digital Menu
   ========================================================= */


/* =========================================================
   CAFE INFORMATION
   ========================================================= */

const cafeInfo = {
    openingHours: "ساعت کاری به‌زودی اعلام می‌شود.",
    address: "آدرس کافه به‌زودی اضافه می‌شود."
};


/* =========================================================
   MENU DATA
   برای تغییر نام، دسته‌بندی یا قیمت محصولات
   فقط همین بخش را ویرایش کنید.
   ========================================================= */

const menuData = [
    {
        id: "coffee",
        title: "قهوه",
        englishTitle: "COFFEE",
        icon: "☕",
        products: [
            {
                id: "espresso-single",
                name: "اسپرسو سینگل",
                price: null
            },
            {
                id: "espresso-double",
                name: "اسپرسو دبل",
                price: null
            },
            {
                id: "latte-single",
                name: "لاته سینگل",
                price: null
            },
            {
                id: "latte-double",
                name: "لاته دبل",
                price: null
            },
            {
                id: "caramel-latte",
                name: "لاته کاراملی",
                price: null
            },
            {
                id: "strawberry-latte",
                name: "لاته توت‌فرنگی",
                price: null
            },
            {
                id: "vanilla-latte",
                name: "لاته وانیل",
                price: null
            },
            {
                id: "hazelnut-latte",
                name: "لاته فندق",
                price: null
            },
            {
                id: "mocha",
                name: "موکا",
                price: null
            },
            {
                id: "caramel-macchiato",
                name: "کارامل ماکیاتو",
                price: null
            },
            {
                id: "cappuccino",
                name: "کاپوچینو",
                price: null
            },
            {
                id: "hot-chocolate",
                name: "هات چاکلت",
                price: null
            },
            {
                id: "white-chocolate",
                name: "وایت چاکلت",
                price: null
            },
            {
                id: "americano-single",
                name: "آمریکانو سینگل",
                price: null
            },
            {
                id: "americano-double",
                name: "آمریکانو دبل",
                price: null
            }
        ]
    },

    {
        id: "cold-coffee",
        title: "قهوه سرد",
        englishTitle: "COLD COFFEE",
        icon: "🧊",
        products: [
            {
                id: "iced-latte",
                name: "آیس لاته",
                price: null
            },
            {
                id: "iced-mocha",
                name: "آیس موکا",
                price: null
            },
            {
                id: "iced-americano",
                name: "آیس آمریکانو",
                price: null
            },
            {
                id: "iced-vanilla-latte",
                name: "آیس لاته وانیل",
                price: null
            },
            {
                id: "iced-hazelnut-latte",
                name: "آیس لاته فندق",
                price: null
            },
            {
                id: "iced-strawberry-latte",
                name: "آیس لاته توت‌فرنگی",
                price: null
            },
            {
                id: "iced-caramel-macchiato",
                name: "آیس کارامل ماکیاتو",
                price: null
            },
            {
                id: "affogato",
                name: "آفوگاتو",
                price: null
            }
        ]
    },

    {
        id: "tea",
        title: "چای",
        englishTitle: "TEA",
        icon: "🫖",
        products: [
            {
                id: "black-tea",
                name: "چای سیاه",
                price: null
            },
            {
                id: "english-tea",
                name: "چای انگلیسی",
                price: null
            },
            {
                id: "saffron-tea",
                name: "چای زعفران",
                price: null
            },
            {
                id: "sour-tea",
                name: "چای ترش",
                price: null
            },
            {
                id: "masala-tea",
                name: "چای ماسالا",
                price: null
            },
            {
                id: "karak-tea",
                name: "چای کرک",
                price: null
            }
        ]
    },

    {
        id: "herbal-tea",
        title: "دمنوش",
        englishTitle: "HERBAL TEA",
        icon: "🌿",
        products: [
            {
                id: "gol-gavzaban",
                name: "دمنوش گل گاوزبان",
                price: null
            },
            {
                id: "puneh",
                name: "دمنوش پونه",
                price: null
            },
            {
                id: "mix-herbal-tea",
                name: "دمنوش میکس",
                price: null
            },
            {
                id: "bahar-narenj",
                name: "دمنوش بهارنارنج",
                price: null
            },
            {
                id: "chamomile",
                name: "دمنوش بابونه",
                price: null
            }
        ]
    },

    {
        id: "cakes",
        title: "کیک",
        englishTitle: "CAKES",
        icon: "🍰",
        products: [
            {
                id: "chocolate-cheesecake",
                name: "چیزکیک شکلاتی",
                price: null
            },
            {
                id: "caramel-cheesecake",
                name: "چیزکیک کاراملی",
                price: null
            },
            {
                id: "strawberry-cheesecake",
                name: "چیزکیک توت‌فرنگی",
                price: null
            },
            {
                id: "lotus-cheesecake",
                name: "چیزکیک لوتوس",
                price: null
            },
            {
                id: "banana-cream-cake",
                name: "کیک خامه‌ای موزی",
                price: null
            },
            {
                id: "wet-chocolate-cake",
                name: "کیک خیس شکلاتی",
                price: null
            },
            {
                id: "carrot-walnut-cake",
                name: "کیک هویج گردو",
                price: null
            },
            {
                id: "roulade",
                name: "رولت",
                price: null
            }
        ]
    }
];


/* =========================================================
   HELPERS
   ========================================================= */

function formatPrice(price) {
    if (
        price === null ||
        price === undefined ||
        price === "" ||
        Number(price) <= 0
    ) {
        return "";
    }

    return `${Number(price).toLocaleString("fa-IR")} تومان`;
}


function normalizeText(text) {
    return String(text || "")
        .trim()
        .toLowerCase()
        .replace(/ي/g, "ی")
        .replace(/ك/g, "ک");
}


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const categoryNav = document.getElementById("categoryNav");
const menuSection = document.getElementById("menuSection");

const searchInput = document.getElementById("searchInput");
const clearSearchButton = document.getElementById("clearSearchButton");

const viewMenuButton = document.getElementById("viewMenuButton");
const searchButton = document.getElementById("searchButton");

const backToTopButton = document.getElementById("backToTop");

const openingHoursElement = document.getElementById("openingHours");
const cafeAddressElement = document.getElementById("cafeAddress");


/* =========================================================
   RENDER CATEGORY NAVIGATION
   ========================================================= */

function renderCategoryNavigation() {
    if (!categoryNav) {
        return;
    }

    categoryNav.innerHTML = "";

    menuData.forEach((category) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "category-button";

        button.dataset.category = category.id;

        button.innerHTML = `
            <span>${category.icon}</span>
            <span>${category.title}</span>
        `;

        button.addEventListener("click", () => {
            scrollToCategory(category.id);
        });

        categoryNav.appendChild(button);
    });
}


/* =========================================================
   RENDER MENU
   ========================================================= */

function renderMenu(categories = menuData) {
    if (!menuSection) {
        return;
    }

    menuSection.innerHTML = "";

    if (!categories.length) {
        renderEmptyState();
        return;
    }

    categories.forEach((category) => {
        if (!category.products || !category.products.length) {
            return;
        }

        const categorySection = document.createElement("section");

        categorySection.className = "menu-category";
        categorySection.id = `category-${category.id}`;

        categorySection.innerHTML = `
            <div class="category-header">
                <h2 class="category-title">
                    <span class="category-title-icon">
                        ${category.icon}
                    </span>

                    <span>
                        ${category.title}
                    </span>
                </h2>
            </div>

            <div class="products-grid">
                ${category.products
                    .map((product) => createProductCard(product))
                    .join("")}
            </div>
        `;

        menuSection.appendChild(categorySection);
    });
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {
    const priceText = formatPrice(product.price);

    return `
        <article class="product-card">

            <div>
                <h3 class="product-name">
                    ${escapeHtml(product.name)}
                </h3>
            </div>

            <div class="product-bottom">

                ${
                    priceText
                        ? `
                            <span class="product-price">
                                ${priceText}
                            </span>
                        `
                        : `
                            <span class="product-price empty">
                                قیمت به‌زودی
                            </span>
                        `
                }

            </div>

        </article>
    `;
}


/* =========================================================
   EMPTY SEARCH STATE
   ========================================================= */

function renderEmptyState() {
    menuSection.innerHTML = `
        <div class="empty-state">

            <div class="empty-state-icon">
                ☕
            </div>

            <div class="empty-state-title">
                محصولی پیدا نشد
            </div>

            <div class="empty-state-text">
                عبارت جستجو را تغییر دهید و دوباره امتحان کنید.
            </div>

        </div>
    `;
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchProducts(query) {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
        renderMenu(menuData);
        return;
    }

    const filteredCategories = [];

    menuData.forEach((category) => {
        const filteredProducts = category.products.filter((product) => {
            return normalizeText(product.name).includes(normalizedQuery);
        });

        if (filteredProducts.length > 0) {
            filteredCategories.push({
                ...category,
                products: filteredProducts
            });
        }
    });

    renderMenu(filteredCategories);
}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

if (searchInput) {
    searchInput.addEventListener("input", () => {
        searchProducts(searchInput.value);
    });
}


if (clearSearchButton) {
    clearSearchButton.addEventListener("click", () => {

        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }

        renderMenu(menuData);
    });
}


/* =========================================================
   SCROLL TO MENU
   ========================================================= */

if (viewMenuButton) {
    viewMenuButton.addEventListener("click", () => {

        const menu = document.getElementById("menuSection");

        if (menu) {
            menu.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}


/* =========================================================
   FOCUS SEARCH
   ========================================================= */

if (searchButton) {
    searchButton.addEventListener("click", () => {

        const searchSection = document.getElementById("searchSection");

        if (searchSection) {
            searchSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        setTimeout(() => {
            if (searchInput) {
                searchInput.focus();
            }
        }, 500);
    });
}


/* =========================================================
   CATEGORY SCROLL
   ========================================================= */

function scrollToCategory(categoryId) {
    const target = document.getElementById(
        `category-${categoryId}`
    );

    if (!target) {
        return;
    }

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   ACTIVE CATEGORY
   ========================================================= */

function updateActiveCategory() {
    const categoryButtons = document.querySelectorAll(
        ".category-nav button"
    );

    const categorySections = document.querySelectorAll(
        ".menu-category"
    );

    if (!categoryButtons.length || !categorySections.length) {
        return;
    }

    let currentCategory = "";

    categorySections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
            currentCategory = section.id.replace(
                "category-",
                ""
            );
        }
    });

    categoryButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.category === currentCategory
        );
    });
}


window.addEventListener("scroll", updateActiveCategory);


/* =========================================================
   BACK TO TOP
   ========================================================= */

function updateBackToTop() {
    if (!backToTopButton) {
        return;
    }

    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}


window.addEventListener("scroll", updateBackToTop);


if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


/* =========================================================
   CAFE INFORMATION
   ========================================================= */

function renderCafeInfo() {

    if (openingHoursElement) {
        openingHoursElement.textContent =
            cafeInfo.openingHours;
    }

    if (cafeAddressElement) {
        cafeAddressElement.textContent =
            cafeInfo.address;
    }
}


/* =========================================================
   HTML SAFETY
   ========================================================= */

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeMenu() {
    renderCategoryNavigation();
    renderMenu();
    renderCafeInfo();

    updateBackToTop();
    updateActiveCategory();
}


document.addEventListener(
    "DOMContentLoaded",
    initializeMenu
);
