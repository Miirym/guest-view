import { Product } from './product';

export const PRODUCTS: Product[] = [
 
  { 
    id: 1, title: "Pizza Margherita",
    description: "Everyone knows and loves it – pizza margherita is a universally praised pizza for a reason. Originating in Naples, the margherita pizza has an interesting history supposedly rooted in a visit by Queen Margherita to Naples. The iconic pizza margherita is also known for representing the colours of the Italian flag: red tomato sauce, white mozzarella, and green basil. The combination of these ingredients creates a delicious pizza which has withstood the test of time",
    price: 6.80,
    category: [1, 3],
    allergens: ["A", "B", "C"],
    status: "available",
    likes_count: 2,
    dislikes_count: 1
  },
  {
    id: 2,
    title: "Marinara",
description: "Like the margherita pizza, pizza marinara also originated in Naples. This simple pizza is topped with plain marinara sauce, oregano and garlic. Essentially, it is very similar to the margherita pizza but lacks the cheese and basil. Apparently, back in the 1700s and 1800s, pizza marinara was popular with poor sailors and made on their ships as the ingredients used to make it were easily preserved.",
    price: 7.80,
    category: [1],
    allergens: ["A", "B", "C", "D", "E", "F"],
    status: "available",
    likes_count: 5,
    dislikes_count: 2
  }
  ,
  {
    id: 3,
    title: "PIZZA PUGLIESE",
    description: "Originating in the Italian region of Apulia, pizza pugliese is generally topped with tomato, onion and mozzarella. However, there are many different variations of the pizza pugliese with some versions using oregano, capers and olives. Some recipes call for different cheeses to be used, such as mozzarella, provolone and pecorino and some even suggest that the tomato sauce be omitted completely. <br>Basically, you can mix and match the aforementioned ingredients to suit your own tastes and create your own perfect pizza pugliese.",
    price: 7.80,
    category: [1],
    allergens: ["A", "B", "C", "D", "E", "F"],
    status: "available",
    likes_count: 1,
    dislikes_count: 1
  }

];