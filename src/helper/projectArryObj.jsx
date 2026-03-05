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
    { id: 5, name: "সিলেট", path: "/cities/sylhet" }
  ],

  categories: [
    { id: 1, name: "সবজি", path: "/categories/vegetables" },
    { id: 2, name: "মুদির সামগ্রী", path: "/categories/grocery-staples" },
    { id: 3, name: "সকালের খাবার ও দুগ্ধজাত", path: "/categories/breakfast-dairy" },
    { id: 4, name: "সফট ড্রিঙ্কস", path: "/categories/soft-drinks" },
    { id: 5, name: "বিস্কুট ও কুকিজ", path: "/categories/biscuits-cookies" }
  ],

  aboutUs: [
    { id: 1, name: "কোম্পানির তথ্য", path: "/about/company-information" },
    { id: 2, name: "ক্যারিয়ার", path: "/about/careers" },
    { id: 3, name: "স্টোরের অবস্থান", path: "/about/store-location" },
    { id: 4, name: "অ্যাফিলিয়েট প্রোগ্রাম", path: "/about/affiliate-program" },
    { id: 5, name: "কপিরাইট", path: "/about/copyright" }
  ]
};

export { navItems,siteData };
