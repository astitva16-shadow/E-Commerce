export const categories = [
  { id: 1, name: 'All Products', slug: 'all' },
  { id: 2, name: 'Rings', slug: 'rings' },
  { id: 3, name: 'Necklaces', slug: 'necklaces' },
  { id: 4, name: 'Earrings', slug: 'earrings' },
  { id: 5, name: 'Bracelets', slug: 'bracelets' }
]

export const products = [
  {
    id: 1,
    name: 'Diamond Eternity Ring',
    category: 'Rings',
    price: 2499,
    originalPrice: 2999,
    description: 'Stunning diamond eternity ring with 18K white gold band',
    longDescription: 'This exquisite diamond eternity ring features a continuous circle of brilliant-cut diamonds set in 18K white gold. Each diamond is carefully selected for its exceptional clarity and brilliance. The timeless design symbolizes eternal love and commitment.\n\nPerfect for engagements, anniversaries, or as a special gift. Comes with a certificate of authenticity and lifetime warranty.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 124,
    stock: 15,
    featured: true,
    tags: ['bestseller', 'new']
  },
  {
    id: 2,
    name: 'Pearl Pendant Necklace',
    category: 'Necklaces',
    price: 1899,
    description: 'Elegant freshwater pearl pendant with sterling silver chain',
    longDescription: 'A classic pearl pendant necklace featuring a lustrous freshwater pearl suspended from a delicate sterling silver chain. The pearl\'s natural iridescence catches the light beautifully.\n\nPerfect for both casual and formal occasions. Includes adjustable chain length.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 89,
    stock: 22,
    featured: true,
    tags: ['bestseller']
  },
  {
    id: 3,
    name: 'Sapphire Stud Earrings',
    category: 'Earrings',
    price: 1599,
    originalPrice: 1999,
    description: 'Blue sapphire studs set in 14K yellow gold',
    longDescription: 'These beautiful sapphire stud earrings feature deep blue natural sapphires set in 14K yellow gold. The classic four-prong setting ensures security while showcasing the gemstones\' brilliance.\n\nHypoallergenic and suitable for sensitive ears. Comes with secure butterfly backs.',
    images: [
      'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 67,
    stock: 30,
    featured: true,
    tags: ['new']
  },
  {
    id: 4,
    name: 'Gold Tennis Bracelet',
    category: 'Bracelets',
    price: 3299,
    description: 'Classic tennis bracelet with diamonds in 18K gold',
    longDescription: 'This luxurious tennis bracelet features a stunning row of round brilliant diamonds set in 18K yellow gold. The flexible design ensures comfort while the secure clasp provides peace of mind.\n\nA timeless piece that adds elegance to any outfit.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 156,
    stock: 8,
    featured: true,
    tags: ['luxury', 'bestseller']
  },
  {
    id: 5,
    name: 'Emerald Cut Ring',
    category: 'Rings',
    price: 4599,
    description: 'Emerald cut diamond ring with baguette side stones',
    longDescription: 'An Art Deco-inspired masterpiece featuring a stunning emerald cut diamond flanked by tapered baguette side stones. Set in platinum for maximum brilliance and durability.\n\nThis statement ring is perfect for those who appreciate vintage-inspired designs.',
    images: [
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop'
    ],
    rating: 5.0,
    reviews: 43,
    stock: 5,
    featured: false,
    tags: ['luxury', 'limited']
  },
  {
    id: 6,
    name: 'Rose Gold Chain Necklace',
    category: 'Necklaces',
    price: 899,
    description: 'Delicate rose gold chain perfect for layering',
    longDescription: 'A minimalist rose gold chain necklace that works beautifully on its own or layered with other pieces. Made from 14K rose gold with a secure lobster clasp.\n\nAvailable in multiple lengths to suit your style.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop'
    ],
    rating: 4.6,
    reviews: 234,
    stock: 45,
    featured: false,
    tags: ['everyday']
  },
  {
    id: 7,
    name: 'Diamond Hoop Earrings',
    category: 'Earrings',
    price: 2199,
    description: 'Classic diamond hoop earrings in white gold',
    longDescription: 'Timeless diamond hoop earrings featuring pave-set diamonds on the front face. Crafted in 14K white gold with secure hinge closures.\n\nThese versatile hoops transition seamlessly from day to night.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 178,
    stock: 18,
    featured: false,
    tags: ['bestseller']
  },
  {
    id: 8,
    name: 'Charm Bracelet',
    category: 'Bracelets',
    price: 1299,
    description: 'Sterling silver charm bracelet with customizable charms',
    longDescription: 'Create your own story with this beautiful sterling silver charm bracelet. Comes with three starter charms and can accommodate up to 15 charms total.\n\nA perfect gift that can be personalized and treasured for years to come.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 312,
    stock: 27,
    featured: false,
    tags: ['gift', 'customizable']
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'Absolutely stunning jewelry! The quality exceeded my expectations and the customer service was exceptional. I\'ve received so many compliments!',
    product: 'Diamond Eternity Ring'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'I bought the sapphire earrings for my wife and she was thrilled! The packaging was beautiful and shipping was fast. Highly recommend!',
    product: 'Sapphire Stud Earrings'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'The pearl necklace is even more beautiful in person. The craftsmanship is impeccable. I\'ll definitely be shopping here again!',
    product: 'Pearl Pendant Necklace'
  }
]

export const reviews = [
  {
    id: 1,
    productId: 1,
    userName: 'Amanda Wilson',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '2024-10-15',
    title: 'Absolutely Perfect!',
    comment: 'This ring exceeded all my expectations. The diamonds sparkle beautifully and the craftsmanship is exceptional. Worth every penny!',
    verified: true
  },
  {
    id: 2,
    productId: 1,
    userName: 'James Miller',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    date: '2024-10-10',
    title: 'Great Anniversary Gift',
    comment: 'Bought this as an anniversary gift for my wife. She was thrilled! Beautiful packaging and fast shipping too.',
    verified: true
  },
  {
    id: 3,
    productId: 1,
    userName: 'Lisa Anderson',
    userAvatar: 'https://i.pravatar.cc/150?img=10',
    rating: 4,
    date: '2024-09-28',
    title: 'Beautiful but pricey',
    comment: 'Gorgeous ring, though I wish it came at a lower price point. Quality is undeniable though.',
    verified: true
  }
]
