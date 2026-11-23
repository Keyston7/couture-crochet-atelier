/* =====================================================================
   PRODUCTS — one block { ... } per piece.
   Best practice: show 6 pieces (never more than 9). A small, curated
   collection converts better than a crowded grid. Retire sold-out
   pieces by setting  available: false  (they show as "Sold — can be
   made to order") or delete the block.

   To add a piece: copy one whole block from {  to  }, paste it below,
   change the id (lowercase, dashes, no spaces) and the details.
   Photos: put files in  images/products/  and list them in "images".
   stripeLink: create a Payment Link in Stripe and paste it here.
   ===================================================================== */
window.PRODUCTS = [
  {
    id: "heirloom-shell-wrap",
    name: "The Heirloom Shell Wrap",
    price: 185,
    available: true,
    featured: true,
    images: ["images/products/wrap-1.svg", "images/products/wrap-2.svg"],
    summary: "An airy shell-stitch wrap with a softly scalloped edge.",
    description: "Worked row by row in a classic shell stitch, this wrap drapes over the shoulders like lace but keeps you warm on cool evenings. A piece to pass down.",
    material: "100% Peruvian Pima cotton",
    size: "72 in × 22 in (183 × 56 cm)",
    colors: "Ivory",
    care: "Hand wash cold, lay flat to dry.",
    madeIn: "About 40 hours, hand-crocheted",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "cable-cardigan",
    name: "The Fireside Cable Cardigan",
    price: 340,
    available: true,
    featured: true,
    images: ["images/products/cardigan-1.svg", "images/products/cardigan-2.svg"],
    summary: "A relaxed, hand-knit cable cardigan with horn buttons.",
    description: "Traditional twisted cables run the length of this relaxed cardigan. Knit in one natural wool that softens with every wear.",
    material: "100% merino wool, natural horn buttons",
    size: "S/M (chest 40 in) · L/XL (chest 46 in) — made to order in your size",
    colors: "Oatmeal, Charcoal",
    care: "Hand wash cool with wool wash, reshape, dry flat.",
    madeIn: "About 60 hours, hand-knit",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "lace-shawl",
    name: "The Sunday Lace Shawl",
    price: 145,
    available: true,
    featured: true,
    images: ["images/products/shawl-1.svg"],
    summary: "A triangular lace shawl, light enough for every season.",
    description: "A fine pineapple-lace pattern worked from the center out. Light enough for spring, layered for fall.",
    material: "Alpaca–silk blend (70/30)",
    size: "60 in wingspan × 28 in depth (152 × 71 cm)",
    colors: "Dove Grey",
    care: "Hand wash cold, block gently to dry.",
    madeIn: "About 30 hours, hand-crocheted",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "classic-beret",
    name: "The Classic Beret",
    price: 68,
    available: true,
    featured: true,
    images: ["images/products/beret-1.svg"],
    summary: "A softly slouched beret in textured stitch.",
    description: "A timeless beret worked in a textured moss stitch with a fitted ribbed band.",
    material: "Merino–cashmere blend (90/10)",
    size: "One size — fits 21–23 in head circumference",
    colors: "Camel, Black, Cream",
    care: "Hand wash cold, dry flat over a plate to keep its shape.",
    madeIn: "About 8 hours, hand-crocheted",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "keepsake-throw",
    name: "The Keepsake Throw",
    price: 295,
    available: true,
    featured: true,
    images: ["images/products/throw-1.svg"],
    summary: "A generous textured throw for the end of the bed.",
    description: "A waffle-textured throw with a simple border, sized to cover a sofa or the foot of a queen bed.",
    material: "Organic cotton",
    size: "50 in × 60 in (127 × 152 cm)",
    colors: "Natural, Sage",
    care: "Machine wash gentle cold, lay flat to dry.",
    madeIn: "About 50 hours, hand-crocheted",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  },
  {
    id: "market-bag",
    name: "The Market Bag",
    price: 58,
    available: false,
    featured: true,
    images: ["images/products/bag-1.svg"],
    summary: "An open-mesh market bag with leather handles.",
    description: "Strong, washable and endlessly useful — a mesh tote that stretches to hold the whole farmers' market.",
    material: "Recycled cotton, vegetable-tanned leather handles",
    size: "14 in × 15 in, 10 in handle drop (stretches to ~20 in)",
    colors: "Natural",
    care: "Spot clean handles; hand wash body.",
    madeIn: "About 6 hours, hand-crocheted",
    stripeLink: "https://buy.stripe.com/REPLACE_ME"
  }
];
