export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  type: 'veg' | 'non-veg' | 'beverage' | 'dessert' | 'bread';
  image?: string;
}

export const menuData: MenuItem[] = [
  // Starters (Veg)
  { id: 'v1', category: 'Starters (Veg)', type: 'veg', name: 'Veg Pakora', description: 'Crispy mixed vegetable fritters', price: 120, image: '/Vag Pakora.png' },
  { id: 'v2', category: 'Starters (Veg)', type: 'veg', name: 'Paneer Pakora', description: 'Crispy cottage cheese fritters', price: 220, image: '/Paneer Pakora.png' },
  { id: 'v3', category: 'Starters (Veg)', type: 'veg', name: 'Hara Bhara Kabab', description: 'Spinach & peas patties', price: 180, image: '/Hara bhara kabab.png' },
  { id: 'v4', category: 'Starters (Veg)', type: 'veg', name: 'Chilli Paneer', description: 'Indo-Chinese spicy paneer', price: 240, image: '/Chilli Paneer.png' },
  
  // Starters (Non-Veg)
  { id: 'nv1', category: 'Starters (Non-Veg)', type: 'non-veg', name: 'Chicken Pakora', description: 'Deep fried spicy chicken bites', price: 180, image: '/Chicken pakora .png' },
  { id: 'nv2', category: 'Starters (Non-Veg)', type: 'non-veg', name: 'Chicken Tikka', description: 'Tandoori grilled chicken', price: 260, image: '/Chicken Tikka.png' },
  { id: 'nv3', category: 'Starters (Non-Veg)', type: 'non-veg', name: 'Chilli Chicken', description: 'Spicy Indo-Chinese chicken', price: 250, image: '/chili chicken.png' },
  { id: 'nv4', category: 'Starters (Non-Veg)', type: 'non-veg', name: 'Fish Fry (Rohu)', description: 'Bengali-style fried fish', price: 200, image: '/Fish fry.png' },

  // Main Course (Veg)
  { id: 'mcv1', category: 'Main Course (Veg)', type: 'veg', name: 'Paneer Butter Masala', description: 'Creamy tomato gravy paneer', price: 260, image: '/Paneer butter masala.jpg' },
  { id: 'mcv2', category: 'Main Course (Veg)', type: 'veg', name: 'Shahi Paneer', description: 'Rich cashew gravy paneer', price: 270, image: '/Shahi Paneer.png' },
  { id: 'mcv3', category: 'Main Course (Veg)', type: 'veg', name: 'Mix Veg Curry', description: 'Seasonal vegetables curry', price: 200, image: '/Mixed Veg.png' },
  { id: 'mcv4', category: 'Main Course (Veg)', type: 'veg', name: 'Dal Tadka', description: 'Yellow dal with tempering', price: 160, image: '/Dal Tadka.png' },
  { id: 'mcv5', category: 'Main Course (Veg)', type: 'veg', name: 'Aloo Dum', description: 'Spicy potato curry', price: 150, image: '/Aloo Dum.png' },

  // Main Course (Non-Veg)
  { id: 'mcnv1', category: 'Main Course (Non-Veg)', type: 'non-veg', name: 'Chicken Curry', description: 'Traditional Bengali style', price: 280, image: '/Chicken Curry.png' },
  { id: 'mcnv2', category: 'Main Course (Non-Veg)', type: 'non-veg', name: 'Butter Chicken', description: 'Creamy tomato chicken', price: 300, image: '/Butter Chicken.png' },
  { id: 'mcnv3', category: 'Main Course (Non-Veg)', type: 'non-veg', name: 'Egg Curry', description: 'Boiled eggs in gravy', price: 180, image: '/Egg Curry.png' },
  { id: 'mcnv4', category: 'Main Course (Non-Veg)', type: 'non-veg', name: 'Fish Curry (Katla)', description: 'Bengali fish curry', price: 260, image: '/Fish curry.png' },
  { id: 'mcnv5', category: 'Main Course (Non-Veg)', type: 'non-veg', name: 'Mutton Curry', description: 'Spicy mutton gravy', price: 380, image: '/mutton curry.png' },

  // Rice & Biryani
  { id: 'r1', category: 'Rice & Biryani', type: 'veg', name: 'Plain Rice', description: 'Steamed basmati rice', price: 80, image: '/Plain Rice.png' },
  { id: 'r2', category: 'Rice & Biryani', type: 'veg', name: 'Jeera Rice', description: 'Cumin flavored rice', price: 120, image: '/jeera rice.png' },
  { id: 'r3', category: 'Rice & Biryani', type: 'veg', name: 'Veg Fried Rice', description: 'Indo-Chinese rice', price: 180, image: '/veg fried rice.png' },
  { id: 'r4', category: 'Rice & Biryani', type: 'non-veg', name: 'Chicken Biryani', description: 'Aromatic biryani with chicken', price: 280, image: '/chicken biryani.png' },
  { id: 'r5', category: 'Rice & Biryani', type: 'non-veg', name: 'Mutton Biryani', description: 'Rich mutton biryani', price: 350, image: '/mutton biryani.png' },
  { id: 'r6', category: 'Rice & Biryani', type: 'non-veg', name: 'Egg Biryani', description: 'Biryani with boiled eggs', price: 220, image: '/Egg Biryani.png' },

  // Noodles & Chinese
  { id: 'n1', category: 'Noodles & Chinese', type: 'veg', name: 'Veg Chowmein', description: 'Stir-fried noodles', price: 160, image: '/Veg Chowmein.png' },
  { id: 'n2', category: 'Noodles & Chinese', type: 'non-veg', name: 'Egg Chowmein', description: 'Noodles with egg', price: 180, image: '/egg Chowmein.png' },
  { id: 'n3', category: 'Noodles & Chinese', type: 'non-veg', name: 'Chicken Chowmein', description: 'Chicken noodles', price: 220, image: '/Chicken ChowMein.png' },
  { id: 'n4', category: 'Noodles & Chinese', type: 'veg', name: 'Schezwan Noodles', description: 'Spicy noodles', price: 200, image: '/schezwan noodles.png' },

  // Breads
  { id: 'b1', category: 'Breads', type: 'bread', name: 'Tandoori Roti', description: 'Whole wheat bread', price: 20, image: '/Tandoori Roti.png' },
  { id: 'b2', category: 'Breads', type: 'bread', name: 'Butter Roti', description: 'Roti with butter', price: 25, image: '/Butter Roti.png' },
  { id: 'b3', category: 'Breads', type: 'bread', name: 'Plain Naan', description: 'Soft refined bread', price: 40, image: '/plain-naan.jpg' },
  { id: 'b4', category: 'Breads', type: 'bread', name: 'Butter Naan', description: 'Butter naan', price: 50, image: '/butter-naan.png' },
  { id: 'b5', category: 'Breads', type: 'bread', name: 'Garlic Naan', description: 'Naan with garlic', price: 70, image: '/Garlic_Naan.png' },

  // Beverages
  { id: 'bev1', category: 'Beverages', type: 'beverage', name: 'Mineral Water', description: '1L bottle', price: 20, image: '/Water.png' },
  { id: 'bev2', category: 'Beverages', type: 'beverage', name: 'Soft Drinks', description: 'Coke/Pepsi/Sprite', price: 40, image: '/Soft Drinks.png' },
  { id: 'bev3', category: 'Beverages', type: 'beverage', name: 'Lassi (Sweet/Salted)', description: 'Yogurt drink', price: 80, image: '/lassi.png' },
  { id: 'bev4', category: 'Beverages', type: 'beverage', name: 'Cold Coffee', description: 'Chilled coffee', price: 120, image: '/Cold-Coffee.png' },
  { id: 'bev5', category: 'Beverages', type: 'beverage', name: 'Tea', description: 'Indian chai', price: 20, image: '/tea.png' },

  // Desserts
  { id: 'd1', category: 'Desserts', type: 'dessert', name: 'Gulab Jamun', description: 'Sweet syrup balls (2 pcs)', price: 60, image: '/Gulab Jamun.png' },
  { id: 'd2', category: 'Desserts', type: 'dessert', name: 'Rasgulla', description: 'Bengali sweet', price: 50, image: '/rasgulla.png' },
  { id: 'd3', category: 'Desserts', type: 'dessert', name: 'Ice Cream', description: 'Vanilla/Chocolate', price: 80, image: '/Ice Cream.png' },
  { id: 'd4', category: 'Desserts', type: 'dessert', name: 'Mishti Doi', description: 'Sweet curd', price: 70, image: '/Mishti Doi.png' },
];
