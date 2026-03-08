// Sample product data
const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 99.99,
        originalPrice: 129.99,
        discount: "23% off",
        rating: 4.5,
        image: "images/WirelessHeadphones.jpg",
        category: "electronics",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        id: 2,
        title: "Smart Watch",
        price: 199.99,
        originalPrice: 249.99,
        discount: "20% off",
        rating: 4.7,
        image: "images/smartwatch.jpg",
        category: "electronics",
        description: "Feature-packed smart watch with health tracking."
    },
    {
        id: 3,
        title: "Running Shoes",
        price: 79.99,
        originalPrice: 99.99,
        discount: "20% off",
        rating: 4.3,
        image: "images/runningshoes.jpg",
        category: "sports",
        description: "Comfortable running shoes for all terrains."
    },
    {
        id: 4,
        title: "Coffee Maker",
        price: 49.99,
        originalPrice: 69.99,
        discount: "29% off",
        rating: 4.2,
        image: "images/CoffeeMaker.jpg",
        category: "home",
        description: "Automatic coffee maker for perfect brew every time."
    },
    {
        id: 5,
        title: "T-Shirt",
        price: 19.99,
        originalPrice: 29.99,
        discount: "33% off",
        rating: 4.0,
        image: "images/TShirt.jpeg",
        category: "fashion",
        description: "Comfortable cotton t-shirt in various colors."
    },
    {
        id: 6,
        title: "Novel Book",
        price: 14.99,
        originalPrice: 19.99,
        discount: "25% off",
        rating: 4.6,
        image: "images/novelbook.jpg",
        category: "books",
        description: "Bestselling novel by a renowned author."
    }
];

// Flash sale deals data
const flashSaleDeals = [
    {
        id: 101,
        title: "Wireless Bluetooth Headphones",
        originalPrice: 89.99,
        price: 49.99,
        discount: "44% OFF",
        image: "images/WirelessHeadphones.jpg",
        rating: 4.5,
        timeLeft: "02:15:30"
    },
    {
        id: 102,
        title: "Smart Fitness Watch",
        originalPrice: 199.99,
        price: 129.99,
        discount: "35% OFF",
        image: "images/SmartFitnessWatch.jpg",
        rating: 4.7,
        timeLeft: "01:45:20"
    },
    {
        id: 103,
        title: "Gaming Mechanical Keyboard",
        originalPrice: 149.99,
        price: 99.99,
        discount: "33% OFF",
        image: "images/GamingKeyboard.jpg",
        rating: 4.6,
        timeLeft: "03:20:15"
    }
];

// All deals data
const allDeals = [
    {
        id: 201,
        title: "4K Ultra HD Monitor",
        originalPrice: 399.99,
        price: 299.99,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
        rating: 4.8,
        category: "Electronics"
    },
    {
        id: 202,
        title: "Ergonomic Office Chair",
        originalPrice: 299.99,
        price: 199.99,
        discount: "33% OFF",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
        rating: 4.4,
        category: "Furniture"
    },
    {
        id: 203,
        title: "Wireless Charging Pad",
        originalPrice: 39.99,
        price: 24.99,
        discount: "38% OFF",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
        rating: 4.3,
        category: "Accessories"
    },
    {
        id: 204,
        title: "Portable Power Bank",
        originalPrice: 49.99,
        price: 34.99,
        discount: "30% OFF",
        image: "https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        rating: 4.5,
        category: "Electronics"
    },
    {
        id: 205,
        title: "LED Desk Lamp",
        originalPrice: 79.99,
        price: 49.99,
        discount: "38% OFF",
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        rating: 4.2,
        category: "Home & Garden"
    },
    {
        id: 206,
        title: "Bluetooth Speaker",
        originalPrice: 99.99,
        price: 69.99,
        discount: "30% OFF",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
        rating: 4.6,
        category: "Electronics"
    },
    // Additional sample deals to match filter categories
    {
        id: 207,
        title: "Designer Handbag",
        originalPrice: 129.99,
        price: 79.99,
        discount: "38% OFF",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        rating: 4.7,
        category: "Fashion"
    },
    {
        id: 208,
        title: "Yoga Mat Set",
        originalPrice: 49.99,
        price: 29.99,
        discount: "40% OFF",
        image: "https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        rating: 4.5,
        category: "Sports"
    },
    {
        id: 209,
        title: "Science Fiction Novel",
        originalPrice: 24.99,
        price: 14.99,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop",
        rating: 4.8,
        category: "Books"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartCount();
    alert('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            renderCart();
        }
    }
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
    });

    const shipping = subtotal > 50 ? 0 : 9.99;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function renderProducts(productList = products) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="product-detail.html?id=${product.id}">
                <img src="${product.image}" alt="${product.title}">
            </a>
            <div class="product-info">
                <h3 class="product-title"><a href="product-detail.html?id=${product.id}">${product.title}</a></h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} (${product.rating})</div>
                <span class="discount-badge">${product.discount}</span>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter')?.value;
    const priceFilter = document.getElementById('price-filter')?.value;

    let filtered = products;

    if (categoryFilter) {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }

    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(v => parseFloat(v));
        filtered = filtered.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            } else {
                return p.price >= min;
            }
        });
    }

    renderProducts(filtered);
}

// Search functionality
function searchProducts(query) {
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Render products on product pages
    if (document.getElementById('product-grid')) {
        renderProducts();
    }

    // Render cart on cart page
    if (document.getElementById('cart-items')) {
        renderCart();
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchProducts(query);
            } else {
                renderProducts();
            }
        });
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Filters
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }

    // Product detail page
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        const product = products.find(p => p.id == productId);
        if (product) {
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('current-price').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('original-price').textContent = `$${product.originalPrice.toFixed(2)}`;
            document.getElementById('discount').textContent = product.discount;
            document.getElementById('rating').innerHTML = `${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} (${product.rating})`;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('main-image').src = product.image;
            document.getElementById('add-to-cart').onclick = () => addToCart(product.id);
        }
    }
});

// Filter deals function
function filterDeals() {
    const category = document.getElementById('deal-category-filter')?.value || '';
    const discount = document.getElementById('discount-filter')?.value || '';

    let filtered = allDeals;

    if (category) {
        // some categories contain spaces or uppercase, so use includes for flexibility
        filtered = filtered.filter(deal => deal.category.toLowerCase().includes(category));
    }

    if (discount) {
        const minDiscount = parseInt(discount);
        filtered = filtered.filter(deal => {
            const dealDiscount = Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100);
            return dealDiscount >= minDiscount;
        });
    }

    renderAllDeals(filtered);
}

// Render flash sale deals into the flash sales section
function renderFlashSales() {
    const container = document.getElementById('flash-sales-container');
    if (!container) return;
    container.innerHTML = '';
    flashSaleDeals.forEach(deal => {
        const card = document.createElement('div');
        card.className = 'flash-deal-card';
        card.innerHTML = `
            <img src="${deal.image}" alt="${deal.title}">
            <h3>${deal.title}</h3>
            <div class="price-section">
                <span class="current-price">$${deal.price.toFixed(2)}</span>
                <span class="original-price">$${deal.originalPrice.toFixed(2)}</span>
            </div>
            <p class="discount">${deal.discount}</p>
            <p class="rating">${'★'.repeat(Math.floor(deal.rating))}${'☆'.repeat(5 - Math.floor(deal.rating))}</p>
            <p class="time-left">Ends in: ${deal.timeLeft}</p>
            <button class="btn btn-primary">Shop Now</button>
        `;
        container.appendChild(card);
    });
}

// Render a list of all deals into the "All Current Deals" section
function renderAllDeals(dealsList = allDeals) {
    const container = document.getElementById('all-deals-container');
    if (!container) return;
    container.innerHTML = '';
    dealsList.forEach(deal => {
        const card = document.createElement('div');
        card.className = 'deal-card';
        card.innerHTML = `
            <img class="deal-image" src="${deal.image}" alt="${deal.title}">
            <h3>${deal.title}</h3>
            <div class="price-section">
                <span class="current-price">$${deal.price.toFixed(2)}</span>
                <span class="original-price">$${deal.originalPrice.toFixed(2)}</span>
                <span class="discount">${deal.discount}</span>
            </div>
            <button class="btn btn-primary">Shop Now</button>
        `;
        container.appendChild(card);
    });
}

// ============================================
// NEW PAGES FUNCTIONALITY
// ============================================

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Validate required fields
        if (!formObject.name || !formObject.email || !formObject.subject || !formObject.message) {
            showFormMessage('error', 'Please fill in all required fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formObject.email)) {
            showFormMessage('error', 'Please enter a valid email address.');
            return;
        }

        // Simulate form submission (in a real app, this would send to a server)
        console.log('Contact form submitted:', formObject);

        // Show success message
        showFormMessage('success', 'Thank you for your message! We\'ll get back to you within 24 hours.');

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            hideFormMessages();
        }, 5000);
    });
}

function showFormMessage(type, message) {
    hideFormMessages();

    const messageElement = type === 'success' ?
        document.getElementById('form-success') :
        document.getElementById('form-error');

    if (messageElement) {
        messageElement.querySelector('p').textContent = message;
        messageElement.style.display = 'block';
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function hideFormMessages() {
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';
}

// Apply for job
function applyForJob(jobTitle) {
    alert(`Thank you for your interest in the ${jobTitle} position!\n\nPlease send your resume and cover letter to careers@aicart.com`);
}

// Setup apply buttons for careers page
function setupCareerButtons() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const jobCard = this.closest('.job-card');
            const jobTitle = jobCard.querySelector('h3').textContent;
            applyForJob(jobTitle);
        });
    });
}

// Setup request exchange button
function setupReturnButtons() {
    const exchangeBtn = document.querySelector('button[onclick*="exchange"]');
    if (exchangeBtn) {
        exchangeBtn.addEventListener('click', () => {
            alert('Please contact our returns team at returns@aicart.com to initiate an exchange.');
        });
    }
}

// Setup help center features
function setupHelpCenter() {
    // Handle FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        if (summary) {
            summary.addEventListener('click', () => {
                // HTML5 <details> element handles this natively
            });
        }
    });

    // Handle help category links
    const helpLinks = document.querySelectorAll('.help-category a');
    helpLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real app, this would navigate to the specific help article
            e.preventDefault();
            alert('This help article is available. In a production site, this would load the full article.');
        });
    });
}

// Newsletter subscription
function subscribeNewsletter(email) {
    if (!email) {
        alert('Please enter a valid email address');
        return;
    }
    alert(`Thank you for subscribing with ${email}!\n\nYou will receive updates about our latest deals and news.`);
}

// Setup newsletter forms
function setupNewsletters() {
    const newsletterForms = document.querySelectorAll('.newsletter-form, .deals-newsletter-form');
    newsletterForms.forEach(form => {
        const input = form.querySelector('input[type="email"], input[type="text"]');
        const button = form.querySelector('button');

        if (button && input) {
            button.addEventListener('click', () => {
                subscribeNewsletter(input.value);
                input.value = '';
            });

            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    subscribeNewsletter(input.value);
                    input.value = '';
                }
            });
        }
    });
}

// Setup contact form handlers
function setupContactForms() {
    const contactLinks = document.querySelectorAll('a[href="contact.html"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real app, this would navigate to contact page
            // For now, we can show a message
            if (!document.querySelector('form[name="contact-form"]')) {
                // We're not on the contact page yet
            }
        });
    });
}

// ScrollToTop functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add scroll-to-top button
function setupScrollToTop() {
    if (window.scrollY > 300) {
        let scrollTopBtn = document.getElementById('scroll-to-top');
        if (!scrollTopBtn) {
            scrollTopBtn = document.createElement('button');
            scrollTopBtn.id = 'scroll-to-top';
            scrollTopBtn.innerHTML = '↑';
            scrollTopBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #0B3C5D;
                color: white;
                border: none;
                padding: 15px;
                border-radius: 50%;
                cursor: pointer;
                display: none;
                z-index: 100;
                font-size: 18px;
                font-weight: bold;
                transition: all 0.3s ease;
            `;
            scrollTopBtn.addEventListener('click', scrollToTop);
            document.body.appendChild(scrollTopBtn);
        }

        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        }
    }
}

// Handle window scroll events
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// ============================================
// SHOP NOW PAGE FUNCTIONALITY
// ============================================

// Shop now page variables
let currentView = 'grid';
let currentSort = 'featured';
let productsPerPage = 12;
let currentPage = 1;
let filteredProducts = [...products];

// Initialize shop now page
function initShopNow() {
    const shopNowContainer = document.getElementById('products-container');
    if (!shopNowContainer) return;

    // Set initial view
    setView('grid');

    // Load initial products
    loadProducts();

    // Setup event listeners
    setupShopNowEventListeners();
}

function setupShopNowEventListeners() {
    // View toggle buttons
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    if (gridViewBtn) {
        gridViewBtn.addEventListener('click', () => setView('grid'));
    }
    if (listViewBtn) {
        listViewBtn.addEventListener('click', () => setView('list'));
    }

    // Filter and sort controls
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', applySorting);
    }

    // Load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }
}

function setView(view) {
    currentView = view;
    const container = document.getElementById('products-container');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    if (!container) return;

    // Update button states
    if (gridViewBtn) gridViewBtn.classList.toggle('active', view === 'grid');
    if (listViewBtn) listViewBtn.classList.toggle('active', view === 'list');

    // Update container class
    container.className = view === 'grid' ? 'products-grid' : 'products-list';

    // Re-render products with new view
    renderShopProducts();
}

function applyFilters() {
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const priceFilter = document.getElementById('price-filter')?.value || '';

    filteredProducts = [...products];

    // Apply category filter
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    // Apply price filter
    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(v => parseFloat(v));
        filteredProducts = filteredProducts.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                return product.price >= min;
            }
        });
    }

    // Reset to first page and re-render
    currentPage = 1;
    renderShopProducts();
}

function applySorting() {
    const sortValue = document.getElementById('sort-filter')?.value || 'featured';

    currentSort = sortValue;

    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'featured':
        default:
            // Keep original order for featured
            filteredProducts = [...products];
            applyFilters(); // Re-apply filters without sorting
            return;
    }

    // Reset to first page and re-render
    currentPage = 1;
    renderShopProducts();
}

function loadProducts() {
    // For demo purposes, we'll use the existing products array
    // In a real app, this would make an API call to load products
    filteredProducts = [...products];
    renderShopProducts();
}

function loadMoreProducts() {
    currentPage++;
    renderShopProducts();
}

function renderShopProducts() {
    const container = document.getElementById('products-container');
    const loadMoreBtn = document.getElementById('load-more-btn');

    if (!container) return;

    const startIndex = 0;
    const endIndex = currentPage * productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    // Clear container
    container.innerHTML = '';

    // Render products
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });

    // Update load more button
    if (loadMoreBtn) {
        if (endIndex >= filteredProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = currentView === 'grid' ? 'product-card' : 'product-card-list';

    const ratingStars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

    if (currentView === 'grid') {
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">${ratingStars} (${product.rating})</div>
                <span class="product-category">${product.category}</span>
                <div class="product-actions">
                    <button class="btn btn-secondary" onclick="window.location.href='product-detail.html?id=${product.id}'">View Details</button>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">${ratingStars} (${product.rating})</div>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn btn-secondary" onclick="window.location.href='product-detail.html?id=${product.id}'">View Details</button>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    }

    return card;
}

// ============================================
// ACCOUNT PAGE FUNCTIONALITY
// ============================================

// Account page functionality
function initAccountPage() {
    loadUserProfile();
    setupAccountEventListeners();
}

function loadUserProfile() {
    // Load user data from localStorage (in a real app, this would come from a server)
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567'
    };

    const userAddresses = JSON.parse(localStorage.getItem('userAddresses')) || [
        {
            type: 'shipping',
            name: 'John Doe',
            address: '123 Main St, Apt 4B',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'USA'
        },
        {
            type: 'billing',
            name: 'John Doe',
            address: '123 Main St, Apt 4B',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'USA'
        }
    ];

    // Populate profile form
    const nameField = document.getElementById('profile-name');
    const emailField = document.getElementById('profile-email');
    const phoneField = document.getElementById('profile-phone');

    if (nameField) nameField.value = userProfile.name;
    if (emailField) emailField.value = userProfile.email;
    if (phoneField) phoneField.value = userProfile.phone;

    // Populate address sections
    populateAddresses(userAddresses);
}

function populateAddresses(addresses) {
    const shippingAddress = addresses.find(addr => addr.type === 'shipping');
    const billingAddress = addresses.find(addr => addr.type === 'billing');

    if (shippingAddress) {
        document.getElementById('shipping-name').textContent = shippingAddress.name;
        document.getElementById('shipping-address').textContent = `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zip}, ${shippingAddress.country}`;
    }

    if (billingAddress) {
        document.getElementById('billing-name').textContent = billingAddress.name;
        document.getElementById('billing-address').textContent = `${billingAddress.address}, ${billingAddress.city}, ${billingAddress.state} ${billingAddress.zip}, ${billingAddress.country}`;
    }
}

function setupAccountEventListeners() {
    // Profile edit form
    const profileForm = document.getElementById('profile-edit-form');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileUpdate);
    }

    // Address edit buttons
    const editShippingBtn = document.getElementById('edit-shipping-btn');
    const editBillingBtn = document.getElementById('edit-billing-btn');

    if (editShippingBtn) {
        editShippingBtn.addEventListener('click', () => showAddressForm('shipping'));
    }
    if (editBillingBtn) {
        editBillingBtn.addEventListener('click', () => showAddressForm('billing'));
    }

    // Address form
    const addressForm = document.getElementById('address-edit-form');
    if (addressForm) {
        addressForm.addEventListener('submit', handleAddressUpdate);
        // Cancel button
        const cancelBtn = addressForm.querySelector('.btn-secondary');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', hideAddressForm);
        }
    }
}

function handleProfileUpdate(e) {
    e.preventDefault();

    const name = document.getElementById('profile-name').value.trim();
    const email = document.getElementById('profile-email').value.trim();
    const phone = document.getElementById('profile-phone').value.trim();

    // Basic validation
    if (!name || !email || !phone) {
        showAccountMessage('error', 'Please fill in all fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAccountMessage('error', 'Please enter a valid email address.');
        return;
    }

    // Save to localStorage
    const userProfile = { name, email, phone };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    showAccountMessage('success', 'Profile updated successfully!');
    setTimeout(() => hideAccountMessages(), 3000);
}

function showAddressForm(type) {
    const form = document.getElementById('address-edit-form');
    const title = document.getElementById('address-form-title');

    if (!form || !title) return;

    // Set form title
    title.textContent = `Edit ${type === 'shipping' ? 'Shipping' : 'Billing'} Address`;

    // Load current address data
    const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    const address = addresses.find(addr => addr.type === type);

    if (address) {
        document.getElementById('address-name').value = address.name;
        document.getElementById('address-street').value = address.address;
        document.getElementById('address-city').value = address.city;
        document.getElementById('address-state').value = address.state;
        document.getElementById('address-zip').value = address.zip;
        document.getElementById('address-country').value = address.country;
    }

    // Store current type
    form.dataset.addressType = type;

    // Show form
    form.style.display = 'block';
    form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideAddressForm() {
    const form = document.getElementById('address-edit-form');
    if (form) {
        form.style.display = 'none';
    }
}

function handleAddressUpdate(e) {
    e.preventDefault();

    const type = e.target.dataset.addressType;
    const name = document.getElementById('address-name').value.trim();
    const street = document.getElementById('address-street').value.trim();
    const city = document.getElementById('address-city').value.trim();
    const state = document.getElementById('address-state').value.trim();
    const zip = document.getElementById('address-zip').value.trim();
    const country = document.getElementById('address-country').value.trim();

    // Basic validation
    if (!name || !street || !city || !state || !zip || !country) {
        showAccountMessage('error', 'Please fill in all address fields.');
        return;
    }

    // Load existing addresses
    let addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];

    // Update or add address
    const existingIndex = addresses.findIndex(addr => addr.type === type);
    const addressData = {
        type,
        name,
        address: street,
        city,
        state,
        zip,
        country
    };

    if (existingIndex >= 0) {
        addresses[existingIndex] = addressData;
    } else {
        addresses.push(addressData);
    }

    // Save to localStorage
    localStorage.setItem('userAddresses', JSON.stringify(addresses));

    // Update display
    populateAddresses(addresses);

    // Hide form and show success message
    hideAddressForm();
    showAccountMessage('success', `${type === 'shipping' ? 'Shipping' : 'Billing'} address updated successfully!`);
    setTimeout(() => hideAccountMessages(), 3000);
}

function showAccountMessage(type, message) {
    hideAccountMessages();

    const messageElement = document.getElementById(`account-${type}-message`);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.display = 'block';
    }
}

function hideAccountMessages() {
    const successMsg = document.getElementById('account-success-message');
    const errorMsg = document.getElementById('account-error-message');

    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';
}

// Initialize all new page features
document.addEventListener('DOMContentLoaded', () => {
    // Contact form setup
    setupContactForm();

    // Careers page setup
    setupCareerButtons();

    // Help center setup
    setupHelpCenter();

    // Newsletter setup
    setupNewsletters();

    // Contact forms setup
    setupContactForms();

    // Setup scroll to top
    setupScrollToTop();

    // Mobile navigation toggler
    const headerContainer = document.querySelector('.header .container');
    if (headerContainer) {
        let menuToggle = document.getElementById('menu-toggle');
        if (!menuToggle) {
            menuToggle = document.createElement('div');
            menuToggle.id = 'menu-toggle';
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '&#9776;';
            const searchBar = headerContainer.querySelector('.search-bar');
            if (searchBar) headerContainer.insertBefore(menuToggle, searchBar);
            else headerContainer.appendChild(menuToggle);
        }

        const navElem = document.querySelector('.nav');
        menuToggle.addEventListener('click', () => {
            if (navElem) navElem.classList.toggle('open');
        });

        // close mobile menu when link clicked
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (navElem && navElem.classList.contains('open')) {
                    navElem.classList.remove('open');
                }
            });
        });
    }

    // Deals page: populate sections and wire filters
    renderFlashSales();
    renderAllDeals(allDeals);
    const dealCategoryFilter2 = document.getElementById('deal-category-filter');
    const discountFilter2 = document.getElementById('discount-filter');
    if (dealCategoryFilter2) dealCategoryFilter2.addEventListener('change', filterDeals);
    if (discountFilter2) discountFilter2.addEventListener('change', filterDeals);

    // Shipping table sorting (if needed)
    const shippingTable = document.querySelector('.shipping-table');
    if (shippingTable) {
        // Table is functional as-is
    }

    // Returns page - request exchange
    setupReturnButtons();

    // Shop now page initialization
    initShopNow();

    // Account page initialization
    initAccountPage();

    // Setup any smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
