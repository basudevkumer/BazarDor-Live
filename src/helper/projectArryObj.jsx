const navItems = [
  { id: 1, name: "হোম", path: "/" },
  { id: 2, name: "বাজার দর", path: "/market-prices" },
  { id: 3, name: "বাজার সংবাদ", path: "/market-news" },
  { id: 4, name: "মূল্য জমা দিন", path: "/submit-price" },
  { id: 5, name: "ব্লগ", path: "/blog" },
  { id: 6, name: "সাধারণ প্রশ্ন", path: "/faq" },
  { id: 7, name: "আমাদের সম্পর্কে", path: "/about" },
];

const siteData = {
  topCities: [
    { id: 1, name: "ঢাকা", path: "/cities/dhaka" },
    { id: 2, name: "চট্টগ্রাম", path: "/cities/chattogram" },
    { id: 3, name: "খুলনা", path: "/cities/khulna" },
    { id: 4, name: "রাজশাহী", path: "/cities/rajshahi" },
    { id: 5, name: "সিলেট", path: "/cities/sylhet" },
  ],

  categories: [
    { id: 1, name: "সবজি", path: "/categories/vegetables" },
    { id: 2, name: "মুদির সামগ্রী", path: "/categories/grocery-staples" },
    {
      id: 3,
      name: "সকালের খাবার ও দুগ্ধজাত",
      path: "/categories/breakfast-dairy",
    },
    { id: 4, name: "সফট ড্রিঙ্কস", path: "/categories/soft-drinks" },
    { id: 5, name: "বিস্কুট ও কুকিজ", path: "/categories/biscuits-cookies" },
  ],

  aboutUs: [
    { id: 1, name: "কোম্পানির তথ্য", path: "/about/company-information" },
    { id: 2, name: "ক্যারিয়ার", path: "/about/careers" },
    { id: 3, name: "স্টোরের অবস্থান", path: "/about/store-location" },
    { id: 4, name: "অ্যাফিলিয়েট প্রোগ্রাম", path: "/about/affiliate-program" },
    { id: 5, name: "কপিরাইট", path: "/about/copyright" },
  ],
};
const categoriesItemsHeadings = [
  { id: 1, name: "সব পণ্য", slug: "all" },

  { id: 2, name: "চাল", slug: "rice" },

  { id: 3, name: "ডাল", slug: "lentils" },

  { id: 4, name: "শাকসবজি", slug: "vegetables" },

  { id: 5, name: "ফলমূল", slug: "fruits" },

  { id: 6, name: "মাছ", slug: "fish" },

  { id: 7, name: "মাংস", slug: "meat" },

  { id: 8, name: "ডিম", slug: "eggs" },

  { id: 9, name: "দুধ ও দুগ্ধজাত", slug: "milk-dairy" },

  { id: 10, name: "ভোজ্য তেল", slug: "edible-oil" },
];
const categoriesItems = [
  {
    id: 1,
    name: "চাল",
    image: "assets/images/rice.png",
    bgColor: "#FDE2E2",
    slug: "rice",
    description: "B ভিটামিন ও শক্তি",
  },
  {
    id: 2,
    name: "ডাল",
    image: "assets/images/lentils.png",
    bgColor: "#FFF0F5",
    slug: "lentils",
    description: "প্রোটিন ও ফাইবার",
  },
  {
    id: 3,
    name: "শাকসবজি",
    image: "assets/images/vegetables.png",
    bgColor: "#E6F7E6",
    slug: "vegetables",
    description: "ভিটামিন A, C, আয়রন",
  },
  {
    id: 4,
    name: "ফলমূল",
    image: "assets/images/fruits.png",
    bgColor: "#FFF9E6",
    slug: "fruits",
    description: "ভিটামিন C, অ্যান্টি-অক্সিডেন্ট",
  },
  {
    id: 5,
    name: "মাছ",
    image: "assets/images/fish.png",
    bgColor: "#E0F7FF",
    slug: "fish",
    description: "ওমেগা-৩ ও প্রোটিন",
  },
  {
    id: 6,
    name: "মাংস",
    image: "assets/images/meat.png",
    bgColor: "#FFE6E6",
    slug: "meat",
    description: "প্রোটিন ও আয়রন",
  },
  {
    id: 7,
    name: "ডিম",
    image: "assets/images/eggs.png",
    bgColor: "#FFF8E6",
    slug: "eggs",
    description: "প্রোটিন, D ভিটামিন",
  },
  {
    id: 8,
    name: "দুধ ও দুগ্ধজাত",
    image: "assets/images/milk.png",
    bgColor: "#E8F4FF",
    slug: "milk-dairy",
    description: "ক্যালসিয়াম ও D ভিটামিন",
  },
  {
    id: 9,
    name: "ভোজ্য তেল",
    image: "assets/images/oil.png",
    bgColor: "#FFF5E6",
    slug: "edible-oil",
    description: "স্বাস্থ্যকর ফ্যাট",
  },
  {
    id: 10,
    name: "মসলা",
    image: "assets/images/spices.png",
    bgColor: "#FFF0E6",
    slug: "spices",
    description: "অ্যান্টি-অক্সিডেন্ট",
  },
  {
    id: 11,
    name: "আটা ও ময়দা",
    image: "assets/images/flour.png",
    bgColor: "#FFFDF0",
    slug: "flour",
    description: "ফাইবার, B ভিটামিন",
  },
  {
    id: 12,
    name: "চিনি",
    image: "assets/images/sugar.png",
    bgColor: "#FFF5F5",
    slug: "sugar",
    description: "দ্রুত শক্তি",
  },
  {
    id: 13,
    name: "লবণ",
    image: "assets/images/salt.png",
    bgColor: "#F0F0F0",
    slug: "salt",
    description: "সোডিয়াম, শরীর নিয়ন্ত্রণ",
  },
  {
    id: 14,
    name: "চা ও কফি",
    image: "assets/images/tea.png",
    bgColor: "#FFF3E6",
    slug: "tea-coffee",
    description: "অ্যান্টি-অক্সিডেন্ট, সতর্কতা",
  },
  {
    id: 15,
    name: "পেঁয়াজ ও রসুন",
    image: "assets/images/onion.png",
    bgColor: "#FFEFE6",
    slug: "onion-garlic",
    description: "অ্যান্টি-ব্যাকটেরিয়াল",
  },
  {
    id: 16,
    name: "আলু",
    image: "assets/images/potato.png",
    bgColor: "#FFFDE6",
    slug: "potato",
    description: "ভিটামিন C ও শক্তি",
  },
];
export { navItems, siteData, categoriesItemsHeadings, categoriesItems };
