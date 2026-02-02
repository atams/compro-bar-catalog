export interface CatalogItem {
   id: number;
   title: string;
   price: string;
   ingredients: string[];
   description: string;
   image: string;
}

export interface ClientConfig {
   slug?: string;       // The URL path segment (e.g. "monkey-king")
   name: string;        // e.g. "MIDNIGHT" or "MONKEY KING"
   tagline: string;     // e.g. "The Art of Mixology"
   location: string;    // e.g. "Senopati Suites, Jakarta Selatan"
   hours: string;       // e.g. "19:00 — Late"
   catalog?: CatalogItem[]; // Optional custom menu
}

export const defaultClient: ClientConfig = {
   name: "MIDNIGHT",
   tagline: "The Art of Mixology",
   location: "Senopati Suites, \nJakarta Selatan",
   hours: "19:00 — Late",
};

export const clients: Record<string, ClientConfig> = {
   "monkey-king": {
      name: "MONKEY KING",
      tagline: "Restaurant, Bar & KTV",
      location: "Gading Serpong Blvd,\nTangerang",
      hours: "18:00 — 03:00",
      catalog: [
         {
            id: 1,
            title: "Monkey's Share",
            price: "IDR 150K",
            ingredients: ["Rum", "Bali Banana", "Coconut Cream"],
            description: "A tropical creamy delight inspired by the jungle kings.",
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2600&auto=format&fit=crop", // Tropical/Fruity
         },
         {
            id: 2,
            title: "Emperor's Tea",
            price: "IDR 135K",
            ingredients: ["Gin", "Oolong Infusion", "Yuzu", "Honey"],
            description: "Sophisticated asian botanicals served in a ceramic pot.",
            image: "https://images.unsplash.com/photo-1542849187-5ec942475576?q=80&w=2600&auto=format&fit=crop", // Elegant/Dark
         },
         {
            id: 3,
            title: "Red Lantern",
            price: "IDR 145K",
            ingredients: ["Vodka", "Pomegranate", "Ginger", "Lime"],
            description: "A fiery red cocktail that lights up your night.",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2600&auto=format&fit=crop", // Working Red
         },
         {
            id: 4,
            title: "Golden Palace",
            price: "IDR 1.2M",
            ingredients: ["Gold Label", "Saffron", "Edible Gold"],
            description: "For the VVIPs. Served with flair and fireworks.",
            image: "https://images.unsplash.com/photo-1560512823-8db03e1b0949?q=80&w=2600&auto=format&fit=crop", // Gold/Premium
         },
      ]
   },
   "as-bar": {
      name: "AS BAR",
      tagline: "Resto & Lounge",
      location: "Arcadia Grande,\nGading Serpong",
      hours: "17:00 — 02:00",
      catalog: [
         {
            id: 1,
            title: "Ace of Spades",
            price: "IDR 160K",
            ingredients: ["Black Vodka", "Blackberry Liqueur", "Lime", "Edible Silver"],
            description: "Dark, mysterious, and winning. A blackberry infusion with a metallic finish.",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 2,
            title: "Royal Flush",
            price: "IDR 180K",
            ingredients: ["Champagne", "Hibiscus Syrup", "Gin", "Lemon Twist"],
            description: "A sparkling floral celebration for the high roller.",
            image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 3,
            title: "The Dealer",
            price: "IDR 140K",
            ingredients: ["Whiskey", "Amaro", "Smoked Maple", "Bitters"],
            description: "Serious and smoky. You play the hand you're dealt.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 4,
            title: "All In",
            price: "IDR 200K",
            ingredients: ["Tequila Reposado", "Mezcal", "Agave", "Chili Rim"],
            description: "A spicy, smoky bet that pays off big.",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2600&auto=format&fit=crop",
         }
      ]
   },
   "the-pub": {
      name: "THE PUB",
      tagline: "Bar & Lounge",
      location: "Maggiore Junction,\nGading Serpong",
      hours: "18:00 — Late",
      catalog: [
         {
            id: 1,
            title: "Publican's Pint",
            price: "IDR 125K",
            ingredients: ["Stout Reduction", "Espresso", "Vodka", "Vanilla"],
            description: "A rich, creamy stout-based espresso martini. The perfect pick-me-up.",
            image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 2,
            title: "Old Chap",
            price: "IDR 135K",
            ingredients: ["Gin", "Earl Grey Syrup", "Lemon", "Egg White"],
            description: "Proper and polite. A tea-infused sour for the gentlemen.",
            image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2600&auto=format&fit=crop", // Gin Sour
         },
         {
            id: 3,
            title: "Sunday Roast",
            price: "IDR 140K",
            ingredients: ["Vodka", "Tomato Juice", "Worcestershire", "Beef Jerky", "Celery"],
            description: "A savory Bloody Mary that drinks like a meal.",
            image: "https://images.unsplash.com/photo-1541546366886-665a3962b088?q=80&w=2600&auto=format&fit=crop", // Bloody Mary
         },
         {
            id: 4,
            title: "Last Call",
            price: "IDR 180K",
            ingredients: ["Absinthe", "Cognac", "Rye", "Peychaud's"],
            description: "Strong, anise-forward, and definitive. The night ends here.",
            image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
         }
      ]
   },
   "clique": {
      name: "CLIQUE",
      tagline: "Kitchen & Bar",
      location: "Gading Serpong Blvd,\nTangerang",
      hours: "10:00 — Late",
      catalog: [
         {
            id: 1,
            title: "The Inner Circle",
            price: "IDR 155K",
            ingredients: ["Pink Gin", "Rose Syrup", "Lychee", "Sparkling Water"],
            description: "Sweet, floral, and exclusive. For those in the know.",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 2,
            title: "Squad Goals",
            price: "IDR 145K",
            ingredients: ["White Rum", "Blue Curacao", "Pineapple", "Coconut"],
            description: "Electric blue and tropical. Perfect for the group selfie.",
            image: "https://images.unsplash.com/photo-1563223771-3343b0ce26d8?q=80&w=2600&auto=format&fit=crop", // Blue Cocktail
         },
         {
            id: 3,
            title: "VIP Pass",
            price: "IDR 190K",
            ingredients: ["Vodka", "Passion Fruit", "Vanilla", "Champagne Sidecar"],
            description: "A pornstar martini served with a side of luxury.",
            image: "https://images.unsplash.com/photo-1536935338788-843e699df602?q=80&w=2600&auto=format&fit=crop", // Passion Fruit
         },
         {
            id: 4,
            title: "Unlisted Number",
            price: "IDR 175K",
            ingredients: ["Mezcal", "Charcoal", "Lime", "Secret Liqueur"],
            description: "Smoky, dark, and off the menu.",
            image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
         }
      ]
   },
   "speakout": {
      name: "SPEAKOUT",
      tagline: "Cafe & Lounge",
      location: "Daan Mogot Rd No.62,\nTangerang",
      hours: "10:00 — Late",
      catalog: [
         {
            id: 1,
            title: "Lounge Lizard",
            price: "IDR 135K",
            ingredients: ["Melon Liqueur", "Vodka", "Lemon", "Soda"],
            description: "Bright green and refreshing. A classic lounge staple.",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 2,
            title: "City Lights",
            price: "IDR 145K",
            ingredients: ["Gin", "Blueberry", "Thyme", "Tonic"],
            description: "Inspired by the Tangerang skyline at night.",
            image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 3,
            title: "Acoustic Berry",
            price: "IDR 125K",
            ingredients: ["Strawberry Puree", "Rum", "Basil", "Lime"],
            description: "Sweet notes perfect for live music vibes.",
            image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 4,
            title: "Mic Drop",
            price: "IDR 180K",
            ingredients: ["Whiskey", "Tobacco Smoke", "Honey", "Ginger"],
            description: "A smoky finish that leaves a lasting impression.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop",
         }
      ]
   },
   "wooden-bar": {
      name: "WOODEN BAR",
      tagline: "Serpong",
      location: "Pasar Modern Paramount,\nGading Serpong",
      hours: "17:00 — 02:00",
      catalog: [
         {
            id: 1,
            title: "Timber",
            price: "IDR 130K",
            ingredients: ["Bourbon", "Oak Chip Infusion", "Maple", "Bitters"],
            description: "Woody and warm. The essence of the bar itself.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 2,
            title: "Forest Floor",
            price: "IDR 140K",
            ingredients: ["Gin", "Pine Liqueur", "Rosemary", "Cucumber"],
            description: "Fresh, herbal, and earthy.",
            image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 3,
            title: "Carpenter's Nail",
            price: "IDR 150K",
            ingredients: ["Scotch", "Drambuie", "Lemon Twist"],
            description: "A rusty nail twist that hits hard.",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 4,
            title: "Sawdust",
            price: "IDR 125K",
            ingredients: ["Vodka", "Hazelnut", "Cream", "Nutmeg"],
            description: "Nutty, creamy, and smooth.",
            image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=2600&auto=format&fit=crop",
         }
      ]
   },
   "borders": {
      name: "BORDERS",
      tagline: "Bar & Grill",
      location: "Aniva Junction,\nGading Serpong",
      hours: "11:00 — Late",
      catalog: [
         {
            id: 1,
            title: "The Crossing",
            price: "IDR 140K",
            ingredients: ["Tequila", "Jalapeno", "Cilantro", "Lime"],
            description: "A spicy margarita that bridges the gap.",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 2,
            title: "Grill Master",
            price: "IDR 150K",
            ingredients: ["Mezcal", "Grilled Pineapple", "Agave", "Lime"],
            description: "Smoky and sweet, pairing perfectly with steak.",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 3,
            title: "No Man's Land",
            price: "IDR 160K",
            ingredients: ["Absinthe", "Gin", "Lillet Blanc", "Lemon"],
            description: "A strong corporation revitalizer.",
            image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2600&auto=format&fit=crop",
         },
         {
            id: 4,
            title: "Checkpoint",
            price: "IDR 135K",
            ingredients: ["Rum", "Coffee Liqueur", "Cold Brew"],
            description: "Keep moving with this caffeinated kick.",
            image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=2600&auto=format&fit=crop",
         }
      ]
   }
};

export const getClientConfig = (slug?: string): ClientConfig => {
   if (!slug || !clients[slug]) return defaultClient;
   return { ...defaultClient, ...clients[slug], slug };
};
