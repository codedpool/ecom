// product.js:

const products = [
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/850/1000/kpydrbk0/shirt/g/9/p/s-black-5-jai-textiles-original-imag42m5hcfue7np.jpeg?q=90&crop=false",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://jssshop.in/wp-content/uploads/2024/10/71j8jgqYbzL._SX569_.jpg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 35,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy Blue", "Burgundy"],
    collections: "Formal Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/1/_/1_mfs-14881-02-white.jpg",
        altText: "Slim-Fit Stretch Shirt Front View",
      },
      {
        url: "https://cdn09.nnnow.com/web-images/large/styles/Y7GX2HXO84V/1677650459825/5.jpg",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Casual Denim Shirt",
    description:
      "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 15,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    brand: "Street Style",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Wash"],
    collections: "Casual Wear",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://estilocus.com/cdn/shop/files/estilocus_vudu2364.png?v=1737807662",
        altText: "Casual Denim Shirt Front View",
      },
      {
        url: "https://estilocus.com/cdn/shop/files/estilocus_vudu2329.png?v=1737807662",
        altText: "Casual Denim Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Printed Resort Shirt",
    description:
      "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    price: 29.99,
    discountPrice: 22.99,
    countInStock: 25,
    sku: "PRNT-RES-004",
    category: "Top Wear",
    brand: "Beach Breeze",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Tropical Print", "Navy Palms"],
    collections: "Vacation Wear",
    material: "Viscose",
    gender: "Men",
    images: [
      {
        url: "https://www.jiomart.com/images/product/original/rvo9aozhvy/men-s-half-sleeves-printed-resort-shirt-product-images-rvo9aozhvy-0-202307260349.jpg?im=Resize=(500,630)",
        altText: "Printed Resort Shirt Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/91v7-Ikpb4L._AC_UY1100_.jpg",
        altText: "Printed Resort Shirt Back View",
      },
    ],
    rating: 4.4,
    numReviews: 10,
  },
  {
    name: "Slim-Fit Easy-Iron Shirt",
    description:
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 30,
    sku: "SLIM-EIR-005",
    category: "Top Wear",
    brand: "Urban Chic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Gray"],
    collections: "Business Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2Ff2%2F4af25c326eefe8072ccb6a85883dca9ea6ddef96.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20231108/TaOi/654aa2bbafa4cf41f57c79f9/-473Wx593H-410385573-001-MODEL2.jpg",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
    ],
    rating: 5,
    numReviews: 14,
  },
  {
    name: "Polo T-Shirt with Ribbed Collar",
    description:
      "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    price: 24.99,
    discountPrice: 19.99,
    countInStock: 50,
    sku: "POLO-TSH-006",
    category: "Top Wear",
    brand: "Polo Classics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Red"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://media-uk.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/lifestyle/1000012715292-Mustard-Yellow-1000012715292_01-2100.jpg",
        altText: "Polo T-Shirt Front View",
      },
      {
        url: "https://cdn02.nnnow.com/web-images/large/styles/BPQ1AAGMJOC/1632400333848/4.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: "Oversized Graphic T-Shirt",
    description:
      "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    price: 19.99,
    discountPrice: 15.99,
    countInStock: 40,
    sku: "OVS-GRF-007",
    category: "Top Wear",
    brand: "Street Vibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    collections: "Streetwear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309",
        altText: "Oversized Graphic T-Shirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Regular-Fit Henley Shirt",
    description:
      "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    price: 22.99,
    discountPrice: 18.99,
    countInStock: 35,
    sku: "REG-HEN-008",
    category: "Top Wear",
    brand: "Heritage Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Heather Gray", "Olive", "Black"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20230623/gqHk/64958b75eebac147fcd7b93e/-473Wx593H-464865165-grey-MODEL.jpg",
        altText: "Regular-Fit Henley Shirt Front View",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Long-Sleeve Thermal Tee",
    description:
      "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    price: 27.99,
    discountPrice: 22.99,
    countInStock: 20,
    sku: "LST-THR-009",
    category: "Top Wear",
    brand: "Winter Basics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Dark Green", "Navy"],
    collections: "Winter Essentials",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/713UjhkyfZL._AC_UY1100_.jpg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: "V-Neck Classic T-Shirt",
    description:
      "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    price: 14.99,
    discountPrice: 11.99,
    countInStock: 60,
    sku: "VNECK-CLS-010",
    category: "Top Wear",
    brand: "Everyday Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    collections: "Basics",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/41tQLyfYVeL._AC_UY1100_.jpg",
        altText: "V-Neck Classic T-Shirt Front View",
      },
    ],
    rating: 4.7,
    numReviews: 28,
  },
  {
    name: "Slim Fit Joggers",
    description:
      "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-001",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://cavaathleisure.com/cdn/shop/products/Black-Slim-Fit-Jogger-CAVA-athleisure-1679098831.jpg?v=1737544787&width=1080",
        altText: "Slim Fit Joggers Front View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Cargo Joggers",
    description:
      "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    price: 45,
    discountPrice: 40,
    countInStock: 15,
    sku: "BW-002",
    category: "Bottom Wear",
    brand: "UrbanStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20230315/p0g7/6411d7eeaeb26924e3c3eeeb/-473Wx593H-469471006-olive-MODEL4.jpg",
        altText: "Cargo Joggers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Tapered Sweatpants",
    description:
      "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    price: 35,
    discountPrice: 30,
    countInStock: 25,
    sku: "BW-003",
    category: "Bottom Wear",
    brand: "ChillZone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Charcoal", "Blue"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71q8aBTtUJL._AC_UY1100_.jpg",
        altText: "Tapered Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: "Denim Jeans",
    description:
      "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://www.mumkins.in/cdn/shop/products/denim-jeans-for-kids-bl0612345-darkblue-1.jpg?v=1649143010&width=1080",
        altText: "Denim Jeans Front View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: "Chino Pants",
    description:
      "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    price: 55,
    discountPrice: 48,
    countInStock: 40,
    sku: "BW-005",
    category: "Bottom Wear",
    brand: "CasualLook",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Black"],
    collections: "Smart Casual Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://www.urbanofashion.com/cdn/shop/files/chino-beige-1.jpg?v=1714034684",
        altText: "Chino Pants Front View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Track Pants",
    description:
      "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-006",
    category: "Bottom Wear",
    brand: "SportX",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "Blue"],
    collections: "Activewear Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://www.jiomart.com/images/product/original/441139592_jetblack/men-track-pants-with-insert-pockets-model-441139592_jetblack-0-202408061915.jpg?im=Resize=(1000,1000)",
        altText: "Track Pants Front View",
      },
    ],
    rating: 4.2,
    numReviews: 17,
  },
  {
    name: "Slim Fit Trousers",
    description:
      "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    price: 65,
    discountPrice: 55,
    countInStock: 15,
    sku: "BW-007",
    category: "Bottom Wear",
    brand: "ExecutiveStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Gray", "Black"],
    collections: "Office Wear",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77000579_08.jpg?imwidth=2048&imdensity=1&ts=1717607056001",
        altText: "Slim Fit Trousers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: "Cargo Pants",
    description:
      "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    price: 50,
    discountPrice: 45,
    countInStock: 25,
    sku: "BW-008",
    category: "Bottom Wear",
    brand: "StreetWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Brown", "Black"],
    collections: "Street Style Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000013705376-Beige-BEIGE-1000013705376_01-2100.jpg",
        altText: "Cargo Pants Front View",
      },
    ],
    rating: 4.5,
    numReviews: 13,
  },
  {
    name: "Relaxed Fit Sweatpants",
    description:
      "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    price: 35,
    discountPrice: 30,
    countInStock: 35,
    sku: "BW-009",
    category: "Bottom Wear",
    brand: "LoungeWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://image.hm.com/assets/hm/fd/89/fd899f78ad10cff9c646403adcd29615433d9639.jpg?imwidth=768",
        altText: "Relaxed Fit Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 14,
  },
  {
    name: "Formal Dress Pants",
    description:
      "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    price: 70,
    discountPrice: 60,
    countInStock: 20,
    sku: "BW-010",
    category: "Bottom Wear",
    brand: "ElegantStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/616evE3EBIL._AC_UY1100_.jpg",
        altText: "Formal Dress Pants Front View",
      },
    ],
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "High-Waist Skinny Jeans",
    description:
      "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-001",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://freakins.com/cdn/shop/files/Aniwarya01525-Edit_54ec0cce-3005-4ec8-abfb-c6781cb95cad.jpg?v=1718094249",
        altText: "High-Waist Skinny Jeans",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Wide-Leg Trousers",
    description:
      "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "BW-W-002",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "White"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://offduty.in/cdn/shop/files/SHEIN_Tall_Pantalon_droit_unicolore_franais_taille_longue_avec_fermeture__glissire__Mode_en_ligne__SHEIN_FRANCE_main_4_1080x.jpg?v=1726647321",
        altText: "Wide-Leg Trousers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Stretch Leggings",
    description:
      "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
    price: 25,
    discountPrice: 20,
    countInStock: 40,
    sku: "BW-W-003",
    category: "Bottom Wear",
    brand: "ComfyFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Activewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71+EkrxWwEL._AC_UY1100_.jpg",
        altText: "Stretch Leggings Front View",
      },
    ],
    rating: 4.5,
    numReviews: 30,
  },
  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    price: 55,
    discountPrice: 50,
    countInStock: 20,
    sku: "BW-W-004",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Navy", "Black"],
    collections: "Spring Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24705308/2023/11/10/f952dced-ccae-4224-90c0-473d834f58951699600512217MANGOSolidAccordionPleatedSatinMidiSkirt1.jpg",
        altText: "Pleated Midi Skirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Flared Palazzo Pants",
    description:
      "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "BW-W-005",
    category: "Bottom Wear",
    brand: "BreezyVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Beige", "Light Blue"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Women",
    images: [
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20230621/8XHv/649290e742f9e729d7696ffa/-473Wx593H-464188204-pink-MODEL.jpg",
        altText: "Flared Palazzo Pants Front View",
      },
    ],
    rating: 4.4,
    numReviews: 22,
  },
  {
    name: "High-Rise Joggers",
    description:
      "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    price: 40,
    discountPrice: 35,
    countInStock: 30,
    sku: "BW-W-006",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Gray", "Pink"],
    collections: "Loungewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://styleunion.in/cdn/shop/files/WATHL00008BLACK_1.jpg?v=1731331982&width=1200",
        altText: "High-Rise Joggers Front View",
      },
    ],
    rating: 4.3,
    numReviews: 25,
  },
  {
    name: "Paperbag Waist Shorts",
    description:
      "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    price: 35,
    discountPrice: 30,
    countInStock: 20,
    sku: "BW-W-007",
    category: "Bottom Wear",
    brand: "SunnyStyle",
    sizes: ["S", "M", "L"],
    colors: ["White", "Khaki", "Blue"],
    collections: "Summer Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000013716044-Green-GREEN-1000013716044_01-2100.jpg",
        altText: "Paperbag Waist Shorts Front View",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Stretch Denim Shorts",
    description:
      "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "BW-W-008",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "White"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61X3I8YsrTL._AC_UY1100_.jpg",
        altText: "Stretch Denim Shorts Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Culottes",
    description:
      "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-009",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Olive"],
    collections: "Casual Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://images.bestsellerclothing.in/data/only/04-april-2024/284964402_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
        altText: "Culottes Front View",
      },
    ],
    rating: 4.6,
    numReviews: 23,
  },
  {
    name: "Classic Pleated Trousers",
    description:
      "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    price: 70,
    discountPrice: 65,
    countInStock: 25,
    sku: "BW-W-010",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"],
    collections: "Formal Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28579412/2024/4/29/0b6ea153-eff3-4e01-83a0-c38928f7ecd01714374336157-Louis-Philippe-Men-Trousers-981714374335463-1.jpg",
        altText: "Classic Pleated Trousers Front View",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Knitted Cropped Top",
    description:
      "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "White"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUwjT6ZsRc9OQ9vTZJiAUlCG-ZkCgxX6ryw&s",
        altText: "Knitted Cropped Top",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Boho Floral Blouse",
    description:
      "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-002",
    category: "Top Wear",
    brand: "BohoVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Pink"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81NhQwSlHmL._AC_UY1100_.jpg",
        altText: "Boho Floral Blouse",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Casual T-Shirt",
    description:
      "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    price: 25,
    discountPrice: 20,
    countInStock: 50,
    sku: "TW-W-003",
    category: "Top Wear",
    brand: "ComfyTees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    collections: "Essentials",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64wURtQb_Lzrx4NaEpvkSz9iLGaobqXnbPg&s",
        altText: "Casual T-Shirt",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Off-Shoulder Top",
    description:
      "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "TW-W-004",
    category: "Top Wear",
    brand: "Elegance",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Blue"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://d1it09c4puycyh.cloudfront.net/catalog/product/K/2/K2522K-WHITE_1.jpg",
        altText: "Off-Shoulder Top",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: "Lace-Trimmed Cami Top",
    description:
      "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
    price: 35,
    discountPrice: 30,
    countInStock: 40,
    sku: "TW-W-005",
    category: "Top Wear",
    brand: "DelicateWear",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    collections: "Lingerie-Inspired",
    material: "Silk Blend",
    gender: "Women",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eJS9l7gNet4Ibao3jpC7Y-EEOiPOG735ng&s",
        altText: "Lace-Trimmed Cami Top",
      },
    ],
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: "Graphic Print Tee",
    description:
      "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    price: 30,
    discountPrice: 25,
    countInStock: 45,
    sku: "TW-W-006",
    category: "Top Wear",
    brand: "StreetStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021100504_437Wx649H_202402100636041.jpeg",
        altText: "Graphic Print Tee",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Ribbed Long-Sleeve Top",
    description:
      "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    price: 55,
    discountPrice: 50,
    countInStock: 30,
    sku: "TW-W-007",
    category: "Top Wear",
    brand: "ComfortFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Pink", "Brown"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20230623/uxqX/6495c871a9b42d15c9ca0908/-473Wx593H-466246303-orange-MODEL.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "Ruffle-Sleeve Blouse",
    description:
      "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 20,
    sku: "TW-W-008",
    category: "Top Wear",
    brand: "FeminineWear",
    sizes: ["S", "M", "L"],
    colors: ["White", "Navy", "Lavender"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://images-static.nykaa.com/media/catalog/product/8/9/899f34bASS23LIKB011_1.jpg",
        altText: "Ruffle-Sleeve Blouse",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Classic Button-Up Shirt",
    description:
      "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "TW-W-009",
    category: "Top Wear",
    brand: "ClassicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Black"],
    collections: "Office Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81b-J1gmBJL._AC_UY350_.jpg",
        altText: "Classic Button-Up Shirt",
      },
    ],
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: "V-Neck Wrap Top",
    description:
      "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-010",
    category: "Top Wear",
    brand: "ChicWrap",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Black", "White"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://assets.ajio.com/medias/sys_master/root/20220730/mjjt/62e4aef2aeb26921afb01b4b/-473Wx593H-462863838-black-MODEL.jpg",
        altText: "V-Neck Wrap Top",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
];

module.exports = products;