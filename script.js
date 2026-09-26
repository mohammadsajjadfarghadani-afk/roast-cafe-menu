document.addEventListener("DOMContentLoaded", () => {
  const categories = [...document.querySelectorAll(".menu-category")];
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const resultText = document.getElementById("resultText");
  const emptyState = document.getElementById("emptyState");

  // Accordion: all sections start closed.
  categories.forEach((category) => {
    const button = category.querySelector(".category-header");
    const content = category.querySelector(".category-content");

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Close the other sections.
      categories.forEach((other) => {
        if (other !== category) {
          const otherButton = other.querySelector(".category-header");
          otherButton.setAttribute("aria-expanded", "false");
        }
      });

      button.setAttribute("aria-expanded", String(!isOpen));

      if (!isOpen) {
        setTimeout(() => {
          category.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
      }
    });
  });

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/ي/g, "ی")
      .replace(/ى/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/\s+/g, " ")
      .trim();
  }

  function runSearch() {
    const query = normalize(searchInput.value);
    clearSearch.hidden = query.length === 0;

    let visibleCategories = 0;
    let totalMatches = 0;

    categories.forEach((category) => {
      const items = [...category.querySelectorAll("li")];
      const categoryText = normalize(category.dataset.category || "");
      const matches = items.filter((item) =>
        normalize(item.textContent).includes(query)
      );

      if (!query) {
        category.classList.remove("search-hidden", "search-match");
        items.forEach((item) => item.hidden = false);
        category.querySelector(".category-header").setAttribute("aria-expanded", "false");
        return;
      }

      const categoryMatches = categoryText.includes(query);

      if (categoryMatches || matches.length > 0) {
        category.classList.remove("search-hidden");
        category.classList.add("search-match");
        visibleCategories++;
        totalMatches += matches.length;

        items.forEach((item) => {
          item.hidden = !categoryMatches && !normalize(item.textContent).includes(query);
        });

        category.querySelector(".category-header").setAttribute("aria-expanded", "true");
      } else {
        category.classList.add("search-hidden");
        category.classList.remove("search-match");
      }
    });

    if (!query) {
      resultText.textContent = "";
      emptyState.hidden = true;
      return;
    }

    resultText.textContent = totalMatches
      ? `${totalMatches} مورد در ${visibleCategories} بخش پیدا شد`
      : "";

    emptyState.hidden = visibleCategories !== 0;
  }

  searchInput.addEventListener("input", runSearch);

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    runSearch();
  });
});
