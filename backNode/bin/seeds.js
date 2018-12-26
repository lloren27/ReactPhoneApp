require('dotenv').config();
const mongoose = require('mongoose');
const Phone = require('../models/phone');

mongoose.connect('mongodb://localhost/backnode');

const phones = [
  {
    brand: "Xiaomi",
    name: "Mi A8",
    image: 'https://www.tuimeilibre.com/974-large_default/xiaomi-mi-8-6gb-64gb--black-global-version.jpg',
    color: 'Black',
    price: '520 €'
  },
  {
    brand: "Huawei",
    name: "P20 Pro ",
    image: "https://images-na.ssl-images-amazon.com/images/I/61z8ytoOVoL._SX569_.jpg",
    color: 'Blue',
    price: '700 €'
  },
  {
    brand: "Iphone",
    name: "XS 64 GB",
    image: "https://static.k-tuin.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/i/p/iphone-xs-gold.jpg",
    color: 'White',
    price: '1000 €'
  },
  {
    brand: "One Plus",
    name: "6T",
    image: "https://clubtech.es/wp-content/uploads/2018/10/OnePlus-6T-1-1200x731.jpg",
    color: 'Red',
    price: '599 €'
  },
]
Phone.collection.drop();

Phone.create(phones, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${phones.length} phones`)
  mongoose.disconnect();
});