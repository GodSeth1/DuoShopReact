const products = [
{
  id: 1,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/346793468.jpg",
    "https://img.ktc.ua/img/base/1_505/0/656180.jpg",
    "https://img.ktc.ua/img/base/1_505/6/656176.jpg"
  ],
  name: "Ноутбук Lenovo IdeaPad 5",
  price: 22999,
  category: "Laptops"
},
{
  id: 2,
  images: [
    "https://mazohub.com/products/philips-hd2582-90-daily-collection-toaster.jpg",
    "https://cdn.27.ua/sc--media--prod/default/1a/3a/e3/1a3ae32e-1a5c-4bd5-813a-94a1cb086e7c.jpg",
    "https://img.ktc.ua/img/base/1_505/3/655783.jpg"
  ],
  name: "Смартфон Samsung Galaxy A34",
  price: 11999,
  category: "Smartphones"
},
{
  id: 3,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/322431431.jpg",
    "https://img.ktc.ua/img/base/1_505/8/656188.jpg",
    "https://img.ktc.ua/img/base/1_505/5/656185.jpg"
  ],
  name: "Навушники Sony WH-CH520",
  price: 2199,
  category: "Audio"
},
{
  id: 4,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/345021297.jpg",
    "https://img.ktc.ua/img/base/1_505/9/656189.jpg",
    "https://img.ktc.ua/img/base/1_505/2/656182.jpg"
  ],
  name: "Монітор LG 24MP60G-B",
  price: 4999,
  category: "Monitors"
},
{
  id: 5,
  images: [
    "https://content1.rozetka.com.ua/goods/images/big_tile/318939837.jpg",
    "https://img.ktc.ua/img/base/1_505/0/656150.jpg",
    "https://img.ktc.ua/img/base/1_505/3/656153.jpg"
  ],
  name: "Планшет Apple iPad 9 10.2\" Wi-Fi 64GB",
  price: 14899,
  category: "Tablets"
},
{
  id: 6,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/325839018.jpg",
    "https://img.ktc.ua/img/base/1_505/4/656154.jpg",
    "https://img.ktc.ua/img/base/1_505/6/656156.jpg"
  ],
  name: "Ігрова мишка Logitech G502 HERO",
  price: 2399,
  category: "Peripherals"
},
{
  id: 7,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/297783968.jpg",
    "https://img.ktc.ua/img/base/1_505/7/656157.jpg",
    "https://img.ktc.ua/img/base/1_505/1/656151.jpg"
  ],
  name: "Клавіатура Redragon Kumara K552 RGB",
  price: 1699,
  category: "Peripherals"
},
{
  id: 8,
  images: [
    "https://content1.rozetka.com.ua/goods/images/big_tile/313898911.jpg",
    "https://img.ktc.ua/img/base/1_505/9/656159.jpg",
    "https://img.ktc.ua/img/base/1_505/2/656152.jpg"
  ],
  name: "Гарнітура Razer Kraken X",
  price: 2199,
  category: "Audio"
},
{
  id: 9,
  images: [
    "https://content1.rozetka.com.ua/goods/images/big_tile/345701821.jpg",
    "https://img.ktc.ua/img/base/1_505/1/656161.jpg",
    "https://img.ktc.ua/img/base/1_505/3/656163.jpg"
  ],
  name: "Пилосос Xiaomi Mi G10",
  price: 7999,
  category: "Home appliances"
},
{
  id: 10,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/330254645.jpg",
    "https://img.ktc.ua/img/base/1_505/4/656164.jpg",
    "https://img.ktc.ua/img/base/1_505/6/656166.jpg"
  ],
  name: "Смарт-годинник Amazfit Bip 3",
  price: 2499,
  category: "Gadgets"
},
{
  id: 11,
  images: [
    "https://content1.rozetka.com.ua/goods/images/big_tile/291535164.jpg",
    "https://img.ktc.ua/img/base/1_505/7/656167.jpg",
    "https://img.ktc.ua/img/base/1_505/2/656172.jpg"
  ],
  name: "Мікрофон Fifine K669B",
  price: 1599,
  category: "Peripherals"
},
{
  id: 12,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/325541123.jpg",
    "https://img.ktc.ua/img/base/1_505/4/656174.jpg",
    "https://img.ktc.ua/img/base/1_505/5/656175.jpg"
  ],
  name: "Ноутбук ASUS VivoBook 15",
  price: 19999,
  category: "Laptops"
},
{
  id: 13,
  images: [
    "https://content1.rozetka.com.ua/goods/images/big_tile/341020512.jpg",
    "https://img.ktc.ua/img/base/1_505/8/656178.jpg",
    "https://img.ktc.ua/img/base/1_505/0/656180.jpg"
  ],
  name: "Тостер Philips HD2582/90",
  price: 999,
  category: "Kitchen appliances"
},
{
  id: 14,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/339934690.jpg",
    "https://img.ktc.ua/img/base/1_505/6/656186.jpg",
    "https://img.ktc.ua/img/base/1_505/3/656183.jpg"
  ],
  name: "Електрочайник Bosch TWK3A011",
  price: 899,
  category: "Kitchen appliances"
},
{
  id: 15,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/345542968.jpg",
    "https://img.ktc.ua/img/base/1_505/9/656189.jpg",
    "https://img.ktc.ua/img/base/1_505/1/656191.jpg"
  ],
  name: "Кавоварка DeLonghi Magnifica S",
  price: 8999,
  category: "Kitchen appliances"
},
{
  id: 16,
  images: [
    "https://content1.rozetka.com.ua/goods/images/big_tile/334774129.jpg",
    "https://img.ktc.ua/img/base/1_505/5/656195.jpg",
    "https://img.ktc.ua/img/base/1_505/2/656192.jpg"
  ],
  name: "Телевізор Samsung UE43CU7172U",
  price: 12999,
  category: "TVs"
},
{
  id: 17,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/345127186.jpg",
    "https://img.ktc.ua/img/base/1_505/3/656193.jpg",
    "https://img.ktc.ua/img/base/1_505/6/656196.jpg"
  ],
  name: "Холодильник LG GA-B509SEUM",
  price: 19999,
  category: "Home appliances"
},
{
  id: 18,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/341105939.jpg",
    "https://img.ktc.ua/img/base/1_505/0/656190.jpg",
    "https://img.ktc.ua/img/base/1_505/9/656189.jpg"
  ],
  name: "Пральна машина Bosch WAN24200BY",
  price: 18999,
  category: "Home appliances"
},
{
  id: 19,
  images: [
    "https://content.rozetka.com.ua/goods/images/big_tile/340268494.jpg",
    "https://img.ktc.ua/img/base/1_505/8/656188.jpg",
    "https://img.ktc.ua/img/base/1_505/7/656187.jpg"
  ],
  name: "Варильна поверхня Electrolux EHH6240ISK",
  price: 8499,
  category: "Kitchen appliances"
},
{
  id: 20,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/328883682.jpg",
    "https://img.ktc.ua/img/base/1_505/4/656184.jpg",
    "https://img.ktc.ua/img/base/1_505/2/656182.jpg"
  ],
  name: "Мультиварка Moulinex MK707832",
  price: 3499,
  category: "Kitchen appliances"
},
{
  id: 21,
  images: [
    "https://content2.rozetka.com.ua/goods/images/big_tile/320433664.jpg",
    "https://img.ktc.ua/img/base/1_505/3/656183.jpg",
    "https://img.ktc.ua/img/base/1_505/5/656185.jpg"
  ],
  name: "Смартфон iPhone 13 128GB",
  price: 29999,
  category: "Smartphones"
},
{ 
  id: 22, name: "Монітор Samsung 24''", price: 4999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/349123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/349123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/349123456_2.jpg"] },
{ 
  id: 23, name: "Смартфон Samsung Galaxy S21", price: 19999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/350123789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/350123789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/350123789_2.jpg"] },
{ 
  id: 24, name: "Навушники Sony WH-1000XM4", price: 8999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/351456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/351456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/351456123_2.jpg"] },
{ 
  id: 25, name: "Планшет Apple iPad 10.2", price: 14999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/352789456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/352789456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/352789456_2.jpg"] },
{ 
  id: 26, name: "Ноутбук ASUS VivoBook 14", price: 21999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/353123654.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/353123654_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/353123654_2.jpg"] },
{ 
  id: 27, name: "Монітор LG 27'' UltraWide", price: 8999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/354987321.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/354987321_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/354987321_2.jpg"] },
{ 
  id: 28, name: "Смартфон iPhone 14", price: 32999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/355321987.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/355321987_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/355321987_2.jpg"] },
{ 
  id: 29, name: "Навушники Apple AirPods Pro", price: 7999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/356123789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/356123789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/356123789_2.jpg"] },
{ 
  id: 30, name: "Планшет Samsung Galaxy Tab S7", price: 19999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/357456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/357456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/357456123_2.jpg"] },
{ 
  id: 31, name: "Ноутбук HP Pavilion 15", price: 25999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/358789456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/358789456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/358789456_2.jpg"] },
{ 
  id: 32, name: "Монітор AOC 24'' Gaming", price: 5999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/359123654.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/359123654_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/359123654_2.jpg"] },
{ 
  id: 33, name: "Смартфон Xiaomi Mi 11", price: 14999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/360456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/360456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/360456123_2.jpg"] },
{ 
  id: 34, name: "Навушники JBL Tune 500BT", price: 2499, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/361789321.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/361789321_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/361789321_2.jpg"] },
{ 
  id: 35, name: "Планшет Lenovo Tab P11", price: 9999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/362123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/362123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/362123456_2.jpg"] },
{ 
  id: 36, name: "Ноутбук Dell Inspiron 15", price: 24999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/363456789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/363456789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/363456789_2.jpg"] },
{ 
  id: 37, name: "Монітор BenQ 27''", price: 7499, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/364789123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/364789123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/364789123_2.jpg"] },
{ 
  id: 38, name: "Смартфон Google Pixel 7", price: 22999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/365123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/365123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/365123456_2.jpg"] },
{ 
  id: 39, name: "Навушники Bose QuietComfort 45", price: 10999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/366456789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/366456789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/366456789_2.jpg"] },
{ 
  id: 40, name: "Планшет Huawei MatePad 11", price: 12999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/367789123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/367789123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/367789123_2.jpg"] },
{ 
  id: 41, name: "Ноутбук MSI Modern 14", price: 26999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/368123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/368123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/368123456_2.jpg"] },
{ 
  id: 42, name: "Монітор Dell 24''", price: 5999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/369456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/369456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/369456123_2.jpg"] },
{ 
  id: 43, name: "Смартфон OnePlus 10 Pro", price: 27999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/370789456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/370789456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/370789456_2.jpg"] },
{ 
  id: 44, name: "Навушники Sony MDR-ZX110", price: 799, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/371123789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/371123789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/371123789_2.jpg"] },
{ 
  id: 45, name: "Планшет Amazon Fire HD 10", price: 6999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/372456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/372456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/372456123_2.jpg"] },
{ 
  id: 46, name: "Ноутбук Lenovo Legion 5", price: 34999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/373789456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/373789456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/373789456_2.jpg"] },
{ 
  id: 47, name: "Монітор LG 32'' UltraWide", price: 12999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/374123789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/374123789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/374123789_2.jpg"] },
{ 
  id: 48, name: "Смартфон Xiaomi Redmi Note 12", price: 9999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/375456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/375456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/375456123_2.jpg"] },
{ 
  id: 49, name: "Навушники JBL Live 660NC", price: 4999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/376789456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/376789456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/376789456_2.jpg"] },
{ 
  id: 50, name: "Планшет Samsung Galaxy Tab A8", price: 8999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/377123789.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/377123789_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/377123789_2.jpg"] },
{ 
  id: 51, name: "Ноутбук ASUS ROG Strix G15", price: 41999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/378456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/378456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/378456123_2.jpg"] },
{ 
  id: 52, name: "Монітор Acer Nitro 27''", price: 8999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/379123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/379123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/379123456_2.jpg"] },
{ 
  id: 53, name: "Смартфон iPhone 14 Pro", price: 41999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/380456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/380456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/380456123_2.jpg"] },
{ 
  id: 54, name: "Навушники Beats Studio3", price: 9999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/381123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/381123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/381123456_2.jpg"] },
{ 
  id: 55, name: "Планшет Lenovo Yoga Tab 13", price: 17999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/382456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/382456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/382456123_2.jpg"] },
{ 
  id: 56, name: "Ноутбук HP Omen 16", price: 45999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/383123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/383123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/383123456_2.jpg"] },
{ 
  id: 57, name: "Монітор Samsung Odyssey 32''", price: 15999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/384456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/384456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/384456123_2.jpg"] },
{ 
  id: 58, name: "Смартфон Google Pixel 8", price: 24999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/385123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/385123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/385123456_2.jpg"] },
{ 
  id: 59, name: "Навушники Sennheiser HD 450BT", price: 5999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/386456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/386456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/386456123_2.jpg"] },
{ 
id: 60, 
name: "Планшет Huawei MatePad Pro", 
price: 21999, 
category: "Tablets", 
images: [
  "https://content2.rozetka.com.ua/goods/images/big_tile/387123456.jpg",
  "https://content2.rozetka.com.ua/goods/images/big_tile/387123456_1.jpg",
  "https://content2.rozetka.com.ua/goods/images/big_tile/387123456_2.jpg"
] 
},
{ 
  id: 61, name: "Ноутбук Acer Predator Helios 300", price: 48999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/388456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/388456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/388456123_2.jpg"] },
{ 
  id: 62, name: "Монітор LG UltraGear 27''", price: 12999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/389123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/389123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/389123456_2.jpg"] },
{ 
  id: 63, name: "Смартфон Samsung Galaxy Z Flip 4", price: 34999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/390456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/390456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/390456123_2.jpg"] },
{ 
  id: 64, name: "Навушники Sony WH-XB910N", price: 7499, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/391123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/391123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/391123456_2.jpg"] },
{ 
  id: 65, name: "Планшет Apple iPad Air 5", price: 25999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/392456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/392456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/392456123_2.jpg"] },
{ 
  id: 66, name: "Ноутбук MSI Stealth 15M", price: 47999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/393123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/393123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/393123456_2.jpg"] },
{ 
  id: 67, name: "Монітор BenQ EX3501R 35''", price: 21999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/394456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/394456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/394456123_2.jpg"] },
{ 
  id: 68, name: "Смартфон OnePlus Nord 3", price: 13999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/395123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/395123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/395123456_2.jpg"] },
{ 
  id: 69, name: "Навушники JBL Quantum 800", price: 5999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/396456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/396456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/396456123_2.jpg"] },
{ 
  id: 70, name: "Планшет Samsung Galaxy Tab S8", price: 22999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/397123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/397123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/397123456_2.jpg"] },
{ 
  id: 71, name: "Ноутбук Dell XPS 15", price: 52999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/398456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/398456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/398456123_2.jpg"] },
{ 
  id: 72, name: "Монітор ASUS TUF Gaming 27''", price: 11999, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/399123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/399123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/399123456_2.jpg"] },
{ 
  id: 73, name: "Смартфон Xiaomi 13 Pro", price: 32999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/400456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/400456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/400456123_2.jpg"] },
{ 
  id: 74, name: "Навушники Beats Solo3", price: 6999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/401123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/401123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/401123456_2.jpg"] },
{ 
  id: 75, name: "Планшет Lenovo Tab P12 Pro", price: 26999, category: "Tablets", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/402456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/402456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/402456123_2.jpg"] },
{ 
  id: 76, name: "Ноутбук ASUS ZenBook 14", price: 31999, category: "Laptops", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/403123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/403123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/403123456_2.jpg"] },
{ 
  id: 77, name: "Монітор AOC 27G2 27''", price: 8499, category: "Monitors", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/404456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/404456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/404456123_2.jpg"] },
{ 
  id: 78, name: "Смартфон Google Pixel 8 Pro", price: 36999, category: "Smartphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/405123456.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/405123456_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/405123456_2.jpg"] },
{ 
  id: 79, name: "Навушники Sennheiser Momentum 4", price: 11999, category: "Headphones", images: ["https://content2.rozetka.com.ua/goods/images/big_tile/406456123.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/406456123_1.jpg","https://content2.rozetka.com.ua/goods/images/big_tile/406456123_2.jpg"] },
{ 
id: 80, 
name: "Планшет Apple iPad Pro 11''", 
price: 42999, 
category: "Tablets", 
images: [
  "https://content2.rozetka.com.ua/goods/images/big_tile/407123456.jpg",
  "https://content2.rozetka.com.ua/goods/images/big_tile/407123456_1.jpg",
  "https://content2.rozetka.com.ua/goods/images/big_tile/407123456_2.jpg"
] 
}
]
export default products;