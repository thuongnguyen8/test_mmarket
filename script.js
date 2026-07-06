// Mock Data
const mockProducts = [
  {
    id: 1,
    name: "Cơm chiên dương châu",
    category: "food",
    price: "50.000đ",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23FFF3E0' width='230' height='230'/%3E%3Ccircle cx='115' cy='115' r='70' fill='%23FF9800'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='%23FFF' text-anchor='middle' dominant-baseline='central'%3E🍲%3C/text%3E%3C/svg%3E",
    seller: "Linh Nguyễn",
    dept: "Product",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%23FF5F8A' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3EL%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "Laptop cũ HP 15 inch",
    category: "goods",
    price: "2.500.000đ",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23E3F2FD' width='230' height='230'/%3E%3Crect x='30' y='40' width='170' height='110' fill='%231976D2' rx='8'/%3E%3Crect x='35' y='45' width='160' height='100' fill='%232196F3'/%3E%3Crect x='30' y='150' width='170' height='20' fill='%231976D2'/%3E%3Ccircle cx='115' cy='160' r='5' fill='%23FFF'/%3E%3C/svg%3E",
    seller: "Minh Trần",
    dept: "Engineering",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%232196F3' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3EM%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "Thiết kế web + SEO",
    category: "service",
    price: "Thảo luận",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23F3E5F5' width='230' height='230'/%3E%3Crect x='20' y='30' width='190' height='170' fill='%239C27B0' rx='4'/%3E%3Crect x='30' y='50' width='50' height='130' fill='%23AB47BC'/%3E%3Crect x='90' y='50' width='50' height='130' fill='%23BA68C8'/%3E%3Crect x='150' y='50' width='50' height='130' fill='%23CE93D8'/%3E%3C/svg%3E",
    seller: "Hiền Designer",
    dept: "Marketing",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%239C27B0' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3EH%3C/text%3E%3C/svg%3E"
  },
  {
    id: 4,
    name: "Cơ hội đầu tư startup",
    category: "investment",
    price: "Tối thiểu 100M",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23E8F5E9' width='230' height='230'/%3E%3Cpath d='M60 150 L90 80 L120 110 L150 40 L180 120' stroke='%234CAF50' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='60' cy='150' r='4' fill='%234CAF50'/%3E%3Ccircle cx='90' cy='80' r='4' fill='%234CAF50'/%3E%3Ccircle cx='120' cy='110' r='4' fill='%234CAF50'/%3E%3Ccircle cx='150' cy='40' r='4' fill='%234CAF50'/%3E%3Ccircle cx='180' cy='120' r='4' fill='%234CAF50'/%3E%3C/svg%3E",
    seller: "Hùng CEO",
    dept: "Business",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%234CAF50' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3EH%3C/text%3E%3C/svg%3E"
  },
  {
    id: 5,
    name: "Bánh quy handmade",
    category: "food",
    price: "100.000đ/hộp",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23FCEAA3' width='230' height='230'/%3E%3Ccircle cx='75' cy='75' r='35' fill='%23D4A574'/%3E%3Ccircle cx='155' cy='75' r='35' fill='%23D4A574'/%3E%3Ccircle cx='75' cy='155' r='35' fill='%23D4A574'/%3E%3Ccircle cx='155' cy='155' r='35' fill='%23D4A574'/%3E%3Ccircle cx='75' cy='75' r='8' fill='%23C4914C'/%3E%3Ccircle cx='155' cy='75' r='8' fill='%23C4914C'/%3E%3Ccircle cx='75' cy='155' r='8' fill='%23C4914C'/%3E%3Ccircle cx='155' cy='155' r='8' fill='%23C4914C'/%3E%3C/svg%3E",
    seller: "Thanh Ngọc",
    dept: "HR",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%23FF9800' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3ET%3C/text%3E%3C/svg%3E"
  },
  {
    id: 6,
    name: "iPhone 12 máy ít dùng",
    category: "goods",
    price: "8.000.000đ",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23F5F5F5' width='230' height='230'/%3E%3Crect x='50' y='20' width='130' height='190' fill='%23333' rx='16'/%3E%3Crect x='60' y='35' width='110' height='150' fill='%23FFF'/%3E%3Ccircle cx='155' cy='45' r='8' fill='%23555'/%3E%3Ccircle cx='165' cy='55' r='3' fill='%23333'/%3E%3Cline x1='50' y1='195' x2='180' y2='195' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E",
    seller: "Duy Hoàng",
    dept: "Finance",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%23607D8B' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3ED%3C/text%3E%3C/svg%3E"
  },
  {
    id: 7,
    name: "Tập yoga online",
    category: "service",
    price: "200k/tháng",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23FCE4EC' width='230' height='230'/%3E%3Ccircle cx='115' cy='50' r='20' fill='%23E91E63'/%3E%3Crect x='95' y='70' width='40' height='60' fill='%23E91E63'/%3E%3Cpath d='M95 130 L70 180 M135 130 L160 180' stroke='%23E91E63' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E",
    seller: "Lan Anh",
    dept: "Wellness",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%23E91E63' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3EL%3C/text%3E%3C/svg%3E"
  },
  {
    id: 8,
    name: "Sofa da cũ 2 chỗ",
    category: "goods",
    price: "Pass",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23D7CCC8' width='230' height='230'/%3E%3Crect x='20' y='80' width='190' height='100' fill='%235D4037' rx='8'/%3E%3Crect x='30' y='60' width='50' height='40' fill='%234E342E'/%3E%3Crect x='150' y='60' width='50' height='40' fill='%234E342E'/%3E%3C/svg%3E",
    seller: "Phương Anh",
    dept: "Operations",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%235D4037' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3EP%3C/text%3E%3C/svg%3E"
  }
];

const categories = [
  { value: "all", label: "Tất cả" },
  { value: "food", label: "🍜 Đồ ăn" },
  { value: "goods", label: "👜 Đồ cũ" },
  { value: "service", label: "💼 Dịch vụ" },
  { value: "investment", label: "💰 Đầu tư" }
];

// State
let currentCategory = "all";
let searchQuery = "";
let products = [...mockProducts];

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const categoryBtns = document.querySelectorAll(".cat-btn");
const searchInput = document.getElementById("searchInput");
const userBtn = document.getElementById("userBtn");
const userMenu = document.getElementById("userMenu");
const postBtn = document.getElementById("postBtn");
const postModal = document.getElementById("postModal");
const modalOverlay = document.getElementById("modalOverlay");
const closePostBtn = document.getElementById("closePostBtn");
const postForm = document.getElementById("postForm");
const toast = document.getElementById("toast");
const logoutBtn = document.getElementById("logoutBtn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Category filtering
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      renderProducts();
    });
  });

  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
  });

  // User menu
  userBtn.addEventListener("click", () => {
    userMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.classList.remove("active");
    }
  });

  // Post modal
  postBtn.addEventListener("click", openPostModal);
  closePostBtn.addEventListener("click", closePostModal);
  modalOverlay.addEventListener("click", closePostModal);
  postForm.addEventListener("submit", handlePostSubmit);

  // Logout
  logoutBtn.addEventListener("click", () => {
    showToast("Đăng xuất thành công!");
    userMenu.classList.remove("active");
  });
}

// Render Products
function renderProducts() {
  let filtered = mockProducts.filter(p => {
    const matchCategory = currentCategory === "all" || p.category === currentCategory;
    const matchSearch = searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.seller.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productsGrid.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  productsGrid.style.display = "grid";
  emptyState.style.display = "none";

  productsGrid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="showProductDetail(${p.id})">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}">
        <span class="product-tag ${p.category}">${getCategoryLabel(p.category)}</span>
      </div>
      <div class="product-info">
        <div class="product-seller">
          <img src="${p.avatar}" alt="${p.seller}" class="seller-avatar">
          <span class="seller-name">${p.seller} · ${p.dept}</span>
        </div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price}</div>
        <button class="btn-chat" onclick="openChat(event, ${p.id})">Chat ngay</button>
      </div>
    </div>
  `).join("");
}

function getCategoryLabel(cat) {
  const labels = {
    food: "🍜 Đồ ăn",
    goods: "👜 Đồ cũ",
    service: "💼 Dịch vụ",
    investment: "💰 Đầu tư"
  };
  return labels[cat] || cat;
}

// Modal
function openPostModal() {
  postModal.classList.add("active");
}

function closePostModal() {
  postModal.classList.remove("active");
  postForm.reset();
}

function handlePostSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const category = document.getElementById("productCategory").value;
  const price = document.getElementById("productPrice").value;

  if (!name || !category || !price) {
    showToast("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const newProduct = {
    id: mockProducts.length + 1,
    name,
    category,
    price,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 230 230'%3E%3Crect fill='%23E0E0E0' width='230' height='230'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='%23999' text-anchor='middle' dominant-baseline='central'%3E📸%3C/text%3E%3C/svg%3E",
    seller: "Thuộng Nguyễn",
    dept: "Product",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle fill='%23FF5F8A' cx='20' cy='20' r='20'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3ETN%3C/text%3E%3C/svg%3E"
  };

  mockProducts.unshift(newProduct);
  closePostModal();
  renderProducts();
  showToast("✓ Đăng bán thành công!");
}

// Toast
function showToast(message) {
  toast.innerHTML = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 2500);
}

// Actions
function showProductDetail(id) {
  const product = mockProducts.find(p => p.id === id);
  showToast(`Xem chi tiết: ${product.name}`);
}

function openChat(event, id) {
  event.stopPropagation();
  const product = mockProducts.find(p => p.id === id);
  showToast(`💬 Mở chat với ${product.seller}`);
}
