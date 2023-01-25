const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const category = await Category.insertMany([    
    { name: 'Shoes' }
  ]);

  console.log('category seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Ben and Jerrys Air Jordan 1',
      description:
        'Drawing inspiration from Ben & Jerry’s colorful ice cream pint packaging, this release goes beyond a simple new colorway and features unique detailing that has never been used on the Dunk Low silhouette.',
      image: 'bendandjerrys.png',
      category: category[0]._id,
      price: 1500,
      quantity: 10
    },
    {
      name: 'Denim Wash Air Jordan 1',
      description:
        'This model is made up of a bright royal blue sole and a classic white midsole. The base is also white, covered in a pattern that features splashes of black, gray, blue, and white. The Nike swoosh symbol can be seen on the side of the shoe in blue.',
      image: 'denimwash.png',
      category: category[0]._id,
      price: 1850,
      quantity: 10
    },
    {
      name: 'Dior Air Jordan 1',
      description:
        'Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro Low Dior.This is the first time that Jordan has collaborated with a legacy fashion label like Dior, making this release one for the books. This release was limited to only 4,700 pairs, each pair individually numbered.',
      image: 'dior.png',
      category: category[0]._id,
      price: 15000,
      quantity: 2
    },
    {
      name: 'Green Air Jordan 1',
      category: category[0]._id,
      description:
        'The Jordan 1 Low Pine Green features a white leather upper with Pine Green overlays and visible stitching. From there, a black Nike swoosh and a perforated toe cap complete the design.',
      image: 'green.png',
      price: 140,
      quantity: 100
    },
    {
      name: 'Off White Air Jordan 1',
      category: category[0]._id,
      description:
        'This Off-White x Nike Dunk Low is taken from the ‘Dear Summer’ collection, a sprawling follow-up to Virgil Abloh’s first Nike Dunk collaboration from 2019. The low-top makes use of a white leather upper with soft grey suede overlays, along with Virgil Abloh’s calling-card flourishes, which include a plastic zip tie and printed Helvetica text. ',
      image: 'offwhite.png',
      price: 500,
      quantity: 75
    },
    {
      name: 'Polkadots Air Jordan 1',
      category: category[0]._id,
      description:
        'In 2008, the Air Jordan 1 Retro Low OG Black / White polka dot was a component of the Countdown Pack celebrating the Air Jordan 23 sneaker launch. In limited-edition packaging, the Countdown Pack included retros of all past Air Jordan shoes.',
      image:'polkadots.png',
      price: 350,
      quantity: 30
    },
    {
      name: 'Snakeskin Air Jordan 1',
      category: category[0]._id,
      description:
        'The Air Jordan 1 Low ‘Multi Snakeskin’ features an opulent design, highlighted by a black tumbled leather upper with multi-colored snakeskin overlays. The vibrant hues are complemented by metallic gold detailing on the Nike Swoosh, Jumpman logo atop the tongue, and Jordan Wings embroidery on the heel.',
      image: 'snakeskin.png',
      price: 295,
      quantity: 30
    },
    {
      name: 'Voodoo Air Jordan 1',
      category: category[0]._id,
      description:
        'new yeezy',
      image: 'This Retro Low Air Jordan features a brown suede toe box and a beige suede quarter paneling. The brown upper is contrasted with some rough overlays that come in pale brown, fossil, and oil-green hues. The lateral heel of this shoe features a stitching voodoo doll. There are Zion and voodoo images beneath the heel tabs of this sneaker.',
      price: 323,
      quantity: 50
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'john',
    lastName: 'smith',
    email: 'jsmith@test.com',
    password: 'pw12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'jane',
    lastName: 'doe',
    email: 'jdoe@test.com',
    password: 'pw12345'
  });

  console.log('users seeded');

  process.exit();
});