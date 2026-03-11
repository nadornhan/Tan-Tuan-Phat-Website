// Lấy tất cả nút danh mục
const categoryBtns = document.querySelectorAll(".category-btn");

// Lấy tất cả sản phẩm CHỈ TRONG GRID CHÍNH
const products = document.querySelectorAll(".product-grid .product-card");

// Lưới sản phẩm chính
const productGrid = document.querySelector(".product-grid");

// Section sản phẩm nổi bật
const featuredSection = document.getElementById("featured-section");

const SPsectiontitle = document.getElementById("SP")

const productSection = document.getElementById("productsposter");

// Gắn sự kiện click cho từng nút
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Bỏ active cũ
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    // 🌟 1. TRANG CHỦ
    if (category === "home") {
      featuredSection.style.display = "block";   // hiện featured
      productGrid.style.display = "none";        // ẩn grid chính
      SPsectiontitle.style.display = "none"

      window.scrollTo({
      top: 0,
      behavior: "smooth"
      })
      
      return;
    }

    // 🌟 2. Mục khác
    featuredSection.style.display = "none";      // ẩn featured
    productGrid.style.display = "grid";         // hiện grid sản phẩm
    SPsectiontitle.style.display = "block"
    productSection.scrollIntoView({
    behavior: "smooth"
    });

    // TẤT CẢ
    if (category === "all") {
      products.forEach((p) => p.style.display = "block");
      return;
    }

    // LỌC
    products.forEach((p) => {
      const categories = p.dataset.category.split(",");
      if (categories.includes(category)) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });
  });
});

let lastScrollY = window.scrollY;
const categories = document.querySelector(".categories");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroll xuống → Ẩn categories
    categories.classList.add("hide");
  } else {
    // Scroll lên → Hiện categories
    categories.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});

const modal = document.getElementById("product-modal");
const overlay = document.getElementById("modal-overlay");

const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");

const productCards = document.querySelectorAll(".product-card");

// CLICK VÀO SẢN PHẨM → HIỆN MODAL
productCards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const name = card.querySelector(".product-name").innerText;
    const price = card.querySelector(".product-price").innerText;
    const desc = card.querySelector(".product-description").innerText;

    // Gán thông tin vào modal
    modalImage.src = img;
    modalName.innerText = name;
    modalPrice.innerText = price;
    modalDescription.innerText = desc;

    // Hiện modal + overlay
    modal.style.display = "block";
    overlay.style.display = "block";

    // Cho animation bắt đầu
    requestAnimationFrame(() => {
      modal.classList.add("show");
      overlay.classList.add("show");
    });
  });
});


// CLICK RA NGOÀI → TẮT MODAL
overlay.addEventListener("click", () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");

  modal.style.display = "none";
  overlay.style.display = "none";
});

// --- TRẠNG THÁI MẶC ĐỊNH KHI LOAD TRANG ---
window.addEventListener("DOMContentLoaded", () => {
  featuredSection.style.display = "block";
  productGrid.style.display = "none";
  SPsectiontitle.style.display = "none";

  document.querySelector('.category-btn[data-category="home"]').classList.add("active");
});

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    if (category === "home") {
      featuredSection.style.display = "block";
      productGrid.style.display = "none";
      SPsectiontitle.style.display = "none";
      return;
    }

    featuredSection.style.display = "none";
    productGrid.style.display = "grid";
    SPsectiontitle.style.display = "block";

    if (category === "all") {
      products.forEach((p) => p.style.display = "block");
      return;
    }

    products.forEach((p) => {
      const categories = p.dataset.category.split(",");
      p.style.display = categories.includes(category) ? "block" : "none";
    });

  });
});

