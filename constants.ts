import { Product, NavItem, PriceItem } from './types.ts';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Tooted', href: '#products' },
  { label: 'Hinnakiri', href: '#pricelist' },
  { label: 'Meist', href: '#about' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: '2 kommiga karp "kingitus"',
    description: 'Armas väike kingitus.',
    price: 3.00,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708902/zkplc9vwgqogzqn5khp1.jpg'
  },
  {
    id: 2,
    name: '3 kommiga karp "kuldne liblikas"',
    description: 'Kaunis kuldse liblikaga kinkekarp.',
    price: 4.00,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708905/t7fzkfttvm6qbthwjqyy.jpg'
  },
  {
    id: 3,
    name: '4 kommiga assortiikarp',
    description: 'Väike ja elegantne assortii.',
    price: 5.50,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708897/odjmzkbfoojr8euedaxm.jpg'
  },
  {
    id: 4,
    name: '6 kommiga assortiikarp',
    description: 'Täiuslik kingitus igaks sündmuseks.',
    price: 7.50,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708898/e9rbgi0n2ljzr5g2xjrx.jpg'
  },
  {
    id: 5,
    name: '8 kommiga kuldne assortiikarp',
    description: 'Elegantne kuldne karp valitud kommidega.',
    price: 11.00,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708906/ttvakdh3pnkglultfua5.jpg'
  },
  {
    id: 6,
    name: '10 kommiga assortiikarp',
    description: 'Luksuslik valik erinevaid käsitöökomme.',
    price: 13.00,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708907/nq40fwklauagr0n6vwmk.jpg'
  },
  {
    id: 7,
    name: '10 trühvliga lilleine karp',
    description: 'Õrn lilleline karp maitsva trühvlitega.',
    price: 12.00,
    image: 'https://res.cloudinary.com/effichat/image/upload/v1764708913/arnvnxpduaqtmccccbzz.jpg'
  }
];

export const PRICES: PriceItem[] = [
  { name: '2 kommiga karp "kingitus"', price: '3 €' },
  { name: '3 kommiga karp "kuldne liblikas"', price: '4 €' },
  { name: '4 kommiga assortiikarp', price: '5,50 €' },
  { name: '6 kommiga assortiikarp', price: '7,50 €' },
  { name: '8 kommiga kuldne assortiikarp', price: '11 €' },
  { name: '10 kommiga assortiikarp', price: '13 €' },
  { name: '10 trühvliga lilleine karp', price: '12 €' },
];

export const HERO_IMAGES = [
  'https://res.cloudinary.com/effichat/image/upload/v1764708913/arnvnxpduaqtmccccbzz.jpg',
  'https://res.cloudinary.com/effichat/image/upload/v1764708911/zcnzchytowddgcgxxwkd.jpg'
];