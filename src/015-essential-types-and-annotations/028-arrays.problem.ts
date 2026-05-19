// CODE

// How do we type 'items' in the ShoppingCart?
type ShoppingCart = {
  userId: string;
  items: string[];
/*
 or
 items: Array<string>
*/
};

// TESTS

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
  console.log(cart.userId);
  console.log(cart.items);
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});
