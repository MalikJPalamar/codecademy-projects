// import products
import products from './products';

// define first variables for logic
const productName: string = products[0].name
const shippingAddress: string = 'New York'

// define product object as interface
interface Product {
  name: string;
  price: string;
  preOrder: string
};

// define the remaining variables for amount calculation and receipt
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

// function for finding ordered prouct name and print shipping policy
const product: Product | undefined = products.find(product => product.name === productName);

if (product) {
  if (product.preOrder === 'true')  {
    console.log(`Thanks for pre-ordering ${productName}. We will notify you when your order is ready for shipping`);
  }
  if (Number(product.price) >= 25) {
    shipping = 0;
    console.log('Since your order is over $25 we provide free shipping');
  } else {
    shipping = 5;
  }
  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = .05;
  }

  // calculate taxes and total amount
  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price) + taxTotal + shipping;

  // print receipt
  console.log(
    `Here is your receipt:
    Product name: ${productName}
    Shipping address: ${shippingAddress}
    Product price: ${product.price}
    Tax total: ${taxTotal}
    Shipping: ${shipping}
    Total amount: ${total}`
  );
} else {
  console.log('Product not found.');
}
