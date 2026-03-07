import allImages from "./imageProvider";

//for images
const {categoryImages}  = allImages

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
    image: categoryImages[0].img,
    bgColor: "#FDE2E2",
    slug: "rice",
    description: "B ভিটামিন ও শক্তি",
    price: "৳70-90 / কেজি",
  },
  {
    id: 2,
    name: "ডাল",
    image: categoryImages[1].img,
    bgColor: "#FFF0F5",
    slug: "lentils",
    description: "প্রোটিন ও ফাইবার",
    price: "৳110-140 / কেজি",
  },
  {
    id: 3,
    name: "শাকসবজি",
    image: categoryImages[2].img,
    bgColor: "#E6F7E6",
    slug: "vegetables",
    description: "ভিটামিন A, C, আয়রন",
    price: "৳40-80 / কেজি",
  },
  {
    id: 4,
    name: "ফলমূল",
    image: categoryImages[3].img,
    bgColor: "#FFF9E6",
    slug: "fruits",
    description: "ভিটামিন C, অ্যান্টি-অক্সিডেন্ট",
    price: "৳120-200 / কেজি",
  },
  {
    id: 5,
    name: "মাছ",
    image: categoryImages[4].img,
    bgColor: "#E0F7FF",
    slug: "fish",
    description: "ওমেগা-৩ ও প্রোটিন",
    price: "৳220-350 / কেজি",
  },
  {
    id: 6,
    name: "মাংস",
    image: categoryImages[5].img,
    bgColor: "#FFE6E6",
    slug: "meat",
    description: "প্রোটিন ও আয়রন",
    price: "৳650-750 / কেজি",
  },
  {
    id: 7,
    name: "ডিম",
    image: categoryImages[6].img,
    bgColor: "#FFF8E6",
    slug: "eggs",
    description: "প্রোটিন, D ভিটামিন",
    price: "৳130-150 / ডজন",
  },
  {
    id: 8,
    name: "দুধ ও দুগ্ধজাত",
    image: categoryImages[7].img,
    bgColor: "#E8F4FF",
    slug: "milk-dairy",
    description: "ক্যালসিয়াম ও D ভিটামিন",
    price: "৳80-100 / লিটার",
  },
  {
    id: 9,
    name: "ভোজ্য তেল",
    image: categoryImages[8].img,
    bgColor: "#FFF5E6",
    slug: "edible-oil",
    description: "স্বাস্থ্যকর ফ্যাট",
    price: "৳170-200 / লিটার",
  },
  {
    id: 10,
    name: "মসলা",
    image: categoryImages[9].img,
    bgColor: "#FFF0E6",
    slug: "spices",
    description: "অ্যান্টি-অক্সিডেন্ট",
    price: "৳400-900 / কেজি",
  },
  {
    id: 11,
    name: "আটা ও ময়দা",
    image: categoryImages[10].img,
    bgColor: "#FFFDF0",
    slug: "flour",
    description: "ফাইবার, B ভিটামিন",
    price: "৳55-70 / কেজি",
  },
  {
    id: 12,
    name: "চিনি",
    image: categoryImages[11].img,
    bgColor: "#FFF5F5",
    slug: "sugar",
    description: "দ্রুত শক্তি",
    price: "৳120-140 / কেজি",
  },
  {
    id: 13,
    name: "লবণ",
    image: categoryImages[12].img,
    bgColor: "#F0F0F0",
    slug: "salt",
    description: "সোডিয়াম, শরীর নিয়ন্ত্রণ",
    price: "৳35-45 / কেজি",
  },
  {
    id: 14,
    name: "চা ও কফি",
    image: categoryImages[13].img,
    bgColor: "#FFF3E6",
    slug: "tea-coffee",
    description: "অ্যান্টি-অক্সিডেন্ট, সতর্কতা",
    price: "৳450-900 / কেজি",
  },
  {
    id: 15,
    name: "পেঁয়াজ ও রসুন",
    image: categoryImages[14].img,
    bgColor: "#FFEFE6",
    slug: "onion-garlic",
    description: "অ্যান্টি-ব্যাকটেরিয়াল",
    price: "৳80-120 / কেজি",
  },
  {
    id: 16,
    name: "আলু",
    image: categoryImages[15].img,
    bgColor: "#FFFDE6",
    slug: "potato",
    description: "ভিটামিন C ও শক্তি",
    price: "৳30-40 / কেজি",
  },
];
export { navItems, siteData, categoriesItemsHeadings, categoriesItems };
