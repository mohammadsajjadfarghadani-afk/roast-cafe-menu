/*
  ROAST CAFE
  Digital Menu
  ------------------------------
  فعلاً قیمت‌ها وارد نشده‌اند.
  بعداً قیمت هر محصول را می‌توانیم همین‌جا اضافه کنیم.
*/

const cafeInfo = {
    openingHours: "ساعت کاری به‌زودی اعلام می‌شود.",
    address: "آدرس کافه به‌زودی اضافه می‌شود."
};


const menuData = [

    // ☕ COFFEE | قهوه
    {
        id: "coffee",
        title: "☕ COFFEE | قهوه",
        products: [

            { name: "اسپرسو سینگل", price: null },
            { name: "اسپرسو دبل", price: null },

            { name: "لاته سینگل", price: null },
            { name: "لاته دبل", price: null },

            { name: "لاته کاراملی", price: null },
            { name: "لاته توت‌فرنگی", price: null },
            { name: "لاته وانیل", price: null },
            { name: "لاته فندق", price: null },

            { name: "موکا", price: null },
            { name: "کارامل ماکیاتو", price: null },
            { name: "کاپوچینو", price: null },

            { name: "هات چاکلت", price: null },
            { name: "وایت چاکلت", price: null },

            { name: "آمریکانو سینگل / دبل", price: null }

        ]
    },


    // 🧊 COLD COFFEE | قهوه سرد
    {
        id: "cold-coffee",
        title: "🧊 COLD COFFEE | قهوه سرد",
        products: [

            { name: "آیس لاته", price: null },
            { name: "آیس موکا", price: null },
            { name: "آیس آمریکانو", price: null },

            { name: "آیس لاته وانیل", price: null },
            { name: "آیس لاته فندق", price: null },
            { name: "آیس لاته توت‌فرنگی", price: null },

            { name: "آیس کارامل ماکیاتو", price: null },
            { name: "آفوگاتو", price: null }

        ]
    },


    // 🫖 TEA | چای
    {
        id: "tea",
        title: "🫖 TEA | چای",
        products: [

            { name: "چای سیاه", price: null },
            { name: "چای انگلیسی", price: null },
            { name: "چای زعفران", price: null },
            { name: "چای ترش", price: null },
            { name: "چای ماسالا", price: null },
            { name: "چای کرک", price: null }

        ]
    },


    // 🌿 دمنوش
    {
        id: "herbal-tea",
        title: "🌿 دمنوش",
        products: [

            { name: "دمنوش گل گاوزبان", price: null },
            { name: "دمنوش پونه", price: null },
            { name: "دمنوش میکس", price: null },
            { name: "دمنوش بهارنارنج", price: null },
            { name: "دمنوش بابونه", price: null }

        ]
    },


    // 🍰 CAKES | کیک
    {
        id: "cakes",
        title: "🍰 CAKES | کیک",
        products: [

            { name: "چیزکیک شکلاتی", price: null },
            { name: "چیزکیک کاراملی", price: null },
            { name: "چیزکیک توت‌فرنگی", price: null },
            { name: "چیزکیک لوتوس", price: null },

            { name: "کیک خامه‌ای موزی", price: null },
            { name: "کیک خیس شکلاتی", price: null },
            { name: "کیک هویج گردو", price: null },
            { name: "رولت", price: null }

        ]
    }

];


const numberFormatter = new Intl.NumberFormat("fa-IR");

const categoryNav = document.getElementById("categoryNav");
const menuContent = document.getElementById("menuContent");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const focusSearch = document.getElementById("focusSearch");
const backToTop = document.getElementById("backToTop");


// اطلاعات کافه
document.getElementById("openingHours").textContent =
    cafeInfo.openingHours;

document.getElementById("address").textContent =
    cafeInfo.address;


// نمایش قیمت
function formatPrice(price) {

    if (
        price === null ||
        price === undefined ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        return "";
    }

    return `
        ${numberFormatter.format(price)}
        <span class="unit">تومان</span>
    `;
}


// جلوگیری از ورود HTML ناخواسته
function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ساخت دسته‌بندی‌ها
function renderCategories(activeId = "all") {

    const allButton = `
        <button
            class="category-button ${activeId === "all" ? "active" : ""}"
            data-category="all"
        >
            همه
        </button>
    `;


    const buttons = menuData
        .map(category => {

            return `
                <button
                    class="category-button ${
                        activeId === category.id ? "active" : ""
                    }"
                    data-category="${escapeHtml(category.id)}"
                >
                    ${escapeHtml(category.title)}
                </button>
            `;

        })
        .join("");


    categoryNav.innerHTML =
        allButton + buttons;
}


// جستجو
function productMatches(product, query) {

    if (!query) {
        return true;
    }

    const text = `
        ${product.name}
    `.toLocaleLowerCase("fa");


    return text.includes(
        query.toLocaleLowerCase("fa")
    );
}


// ساخت منو
function renderMenu(categoryId = "all", query = "") {

    const normalizedQuery =
        query.trim();


    const categories =
        categoryId === "all"
            ? menuData
            : menuData.filter(
                category =>
                    category.id === categoryId
            );


    let visibleProducts = 0;


    menuContent.innerHTML = categories
        .map(category => {

            const products =
                category.products.filter(
                    product =>
                        productMatches(
                            product,
                            normalizedQuery
                        )
                );


            if (!products.length) {
                return "";
            }


            visibleProducts +=
                products.length;


            return `
                <section
                    class="category-block"
                    id="category-${escapeHtml(category.id)}"
                >

                    <div class="category-heading">

                        <h3>
                            ${escapeHtml(category.title)}
                        </h3>

                        <div class="line"></div>

                        <small>
                            ${numberFormatter.format(products.length)}
                            آیتم
                        </small>

                    </div>


                    <div class="products-grid">

                        ${products
                            .map(product => {

                                const price =
                                    formatPrice(
                                        product.price
                                    );


                                return `
                                    <article
                                        class="product-card"
                                    >

                                        <div class="product-top">

                                            <h4
                                                class="product-name"
                                            >
                                                ${escapeHtml(
                                                    product.name
                                                )}
                                            </h4>

                                            ${
                                                price
                                                    ? `
                                                        <div
                                                            class="product-price"
                                                        >
                                                            ${price}
                                                        </div>
                                                    `
                                                    : ""
                                            }

                                        </div>

                                    </article>
                                `;

                            })
                            .join("")}

                    </div>

                </section>
            `;

        })
        .join("");


    noResults.hidden =
        visibleProducts !== 0;
}


// فعال کردن دسته‌بندی
function setActiveCategory(categoryId) {

    categoryNav
        .querySelectorAll(".category-button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === categoryId
            );

        });
}


// کلیک روی دسته‌بندی
categoryNav.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".category-button"
            );


        if (!button) {
            return;
        }


        const categoryId =
            button.dataset.category;


        setActiveCategory(categoryId);


        renderMenu(
            categoryId,
            searchInput.value
        );


        if (categoryId !== "all") {

            const target =
                document.getElementById(
                    `category-${categoryId}`
                );


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        } else {

            document
                .getElementById("menu")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }

    }
);


// جستجوی محصول
searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value;


        setActiveCategory("all");


        renderMenu(
            "all",
            query
        );

    }
);


// دکمه جستجو
focusSearch.addEventListener(
    "click",
    () => {

        searchInput.focus();


        searchInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


// دکمه بازگشت به بالا
window.addEventListener(
    "scroll",
    () => {

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 450
        );

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// اجرای اولیه
renderCategories();
renderMenu();
