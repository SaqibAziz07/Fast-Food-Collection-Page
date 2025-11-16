export const products = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL962dGgqkXn-8CbHOExzOYkoYsrUCa3NU-Q&s",
    title: "Burger1",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 100,
    category: "Burger",
    rating: 5,
  },
  {
    id: 2,
    image: "https://img.freepik.com/premium-psd/shawarma-social-media-promotion-instagram-facebook-banner-post-design-template_1046369-4.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Shawarma1",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 200,
    category: "Shawarma",
    rating: 4,
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3obPBo7-hRt_37sfcxV5NyjlLru4-QGxkw&s",
    title: "Pizza1",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 300,
    category: "Pizza",
    rating: 3,
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL962dGgqkXn-8CbHOExzOYkoYsrUCa3NU-Q&s",
    title: "Burger2",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 400,
    category: "Burger",
    rating: 2,
  },
  {
    id: 5,
    image: "https://img.freepik.com/premium-psd/shawarma-social-media-promotion-instagram-facebook-banner-post-design-template_1046369-4.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Shawarma2",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 500,
    category: "Shawarma",
    rating: 1,
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3obPBo7-hRt_37sfcxV5NyjlLru4-QGxkw&s",
    title: "Pizza2",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 600,
    category: "Pizza",
    rating: 5,
  },
  {
    id: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL962dGgqkXn-8CbHOExzOYkoYsrUCa3NU-Q&s",
    title: "Burger3",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 700,
    category: "Burger",
    rating: 4,
  },
  {
    id: 8,
    image: "https://img.freepik.com/premium-psd/shawarma-social-media-promotion-instagram-facebook-banner-post-design-template_1046369-4.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Shawarma3",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 800,
    category: "Shawarma",
    rating: 3,
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3obPBo7-hRt_37sfcxV5NyjlLru4-QGxkw&s",
    title: "Pizza3",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 900,
    category: "Pizza",
    rating: 2,
  },
];

const findRange = () => {
  let min = products[0].price;
  let max = 0;

  products.forEach((product) => {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  });

  return { min, max };
};

export const priceRange = findRange();