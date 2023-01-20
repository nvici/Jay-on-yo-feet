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
        'black and white shoe with green outline with Nike symbol',
      image: 'bendandjerrys.png',
      category: category[0]._id,
      price: 1500,
      quantity: 10
    },
    {
      name: 'Denim Wash Air Jordan 1',
      description:
        'Denim washed color shoes with Nike symbol',
      image: 'denimwash.png',
      category: category[0]._id,
      price: 1850,
      quantity: 10
    },
    {
      name: 'Dior Air Jordan 1',
      description:
        'Dior branded shoes color grey and white with Nike symbol',
      image: 'dior.png',
      category: category[0]._id,
      price: 15000,
      quantity: 2
    },
    {
      name: 'Green Air Jordan 1',
      category: category[0]._id,
      description:
        'green and white shoes with Nike symbol',
      image: 'green.png',
      price: 140,
      quantity: 100
    },
    {
      name: 'Off White Air Jordan 1',
      category: category[0]._id,
      description:
        'All white shoes with orange laces and with Nike symbol ',
      image: 'offwhite.png',
      price: 500,
      quantity: 75
    },
    {
      name: 'Polkadots Air Jordan 1',
      category: category[0]._id,
      description:
        'white and plack shoes with polkadots and with Nike symbol',
      image:'polkadots.png',
      price: 350,
      quantity: 30
    },
    {
      name: 'Snakeskin Air Jordan 1',
      category: category[0]._id,
      description:
        'rainbow colored shoes in snake style skin with Nike symbol',
      image: 'snakeskin.png',
      price: 295,
      quantity: 30
    },
    {
      name: 'Voodoo Air Jordan 1',
      category: category[0]._id,
      description:
        'new yeezy',
      image: 'neutral colored shoe in brown with Nike symbol',
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