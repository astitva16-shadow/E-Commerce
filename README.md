# 🛍️ Astitva - Handcrafted Jewelry E-Commerce Website

A modern, fully responsive e-commerce website built with React, Tailwind CSS, and Framer Motion. This elegant online store specializes in handcrafted jewelry with a beautiful user interface and smooth animations.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.0-FF0080)

## ✨ Features

### 🏠 Homepage
- **Hero Section** - Eye-catching landing section with animated elements
- **Featured Products** - Showcase of handpicked jewelry pieces
- **Promotional Banner** - Dynamic sale announcements with countdown timer
- **Customer Testimonials** - Social proof from satisfied customers
- **Trust Badges** - Quality guarantees and service highlights

### 🛒 Shopping Experience
- **Product Grid** - Beautiful product display with hover effects
- **Advanced Filtering** - Filter by category, price range
- **Search Functionality** - Quick product search
- **Sorting Options** - Sort by popularity, price, rating, newest
- **Product Details** - Comprehensive product information with image gallery
- **Customer Reviews** - Rating system and customer feedback
- **Related Products** - Smart product recommendations

### 🛍️ Cart & Checkout
- **Shopping Cart** - Add, remove, update quantities
- **Cart Summary** - Real-time price calculations with shipping and tax
- **Free Shipping** - Automatic free shipping on orders over $100
- **Secure Checkout** - Complete checkout form with validation
- **Order Confirmation** - Professional order confirmation page

### 👤 User Features
- **Authentication** - Login and signup functionality
- **User Profile** - Manage account information
- **Order History** - Track past orders
- **Saved Addresses** - Store delivery addresses
- **Wishlist** - Save favorite items (UI ready)

### 🎨 Design & UX
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Clean, minimalistic design with Tailwind CSS
- **Custom Color Palette** - Purple and pink gradient theme
- **Typography** - Professional fonts (Inter & Playfair Display)
- **Accessibility** - Semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Frontend Framework:** React 18.2.0
- **Routing:** React Router DOM 6.20.0
- **Styling:** Tailwind CSS 3.3.6
- **Animations:** Framer Motion 10.16.0
- **Icons:** React Icons 4.12.0
- **Build Tool:** Vite 5.0.0
- **State Management:** React Context API
- **Local Storage:** Browser localStorage for cart and auth persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/astitva16-shadow/E-Commerce.git
   cd E-Commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📁 Project Structure

```
E-commerce/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Button.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── PromoBanner.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── shop/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── FilterSidebar.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── cart/
│   │   │   ├── CartItem.jsx
│   │   │   └── CartSummary.jsx
│   │   └── user/
│   │       ├── LoginForm.jsx
│   │       └── SignupForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Profile.jsx
│   │   └── OrderConfirmation.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── placeholderData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Color Palette

```css
Primary:   #8b5cf6 (Purple)
Secondary: #ec4899 (Pink)
Accent:    #f59e0b (Amber)
Dark:      #1f2937 (Gray)
```

## 🌟 Key Components

### Context Providers
- **AuthContext** - Manages user authentication state
- **CartContext** - Handles shopping cart operations

### Reusable Components
- **ProductCard** - Displays product with add to cart functionality
- **Button** - Customizable button with variants
- **Navbar** - Responsive navigation with cart count
- **Footer** - Site footer with links and newsletter

## 💡 Features in Detail

### Shopping Cart
- Add products with customizable quantities
- Update quantities directly in cart
- Remove items
- Automatic total calculation
- Shipping cost calculation (free over $100)
- Tax calculation (10%)
- Persistent cart using localStorage

### Product Filtering
- Filter by category (All, Rings, Necklaces, Earrings, Bracelets)
- Filter by price range
- Sort by popularity, price (low/high), newest, rating
- Real-time search functionality
- Dynamic product count display

### User Authentication
- Email/password login
- New user registration
- Persistent sessions with localStorage
- Protected routes for user profile
- Logout functionality

## 🔮 Future Enhancements

- [ ] Backend integration with Node.js/Express
- [ ] Real payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced admin panel
- [ ] Multi-currency support
- [ ] Product comparison feature
- [ ] Live chat support
- [ ] Social media integration

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Astitva**
- GitHub: [@astitva16-shadow](https://github.com/astitva16-shadow)

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com)
- Design inspiration from modern e-commerce platforms

## 📞 Support

For support, email your-email@example.com or open an issue in the GitHub repository.

---

⭐ If you like this project, please give it a star on GitHub! ⭐
