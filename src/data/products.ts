export type ProductCategory = "ban" | "ketu" | "ghe" | "xichdu" | "hot";
export type Category = "home" | "all" | ProductCategory;
export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  categories: ProductCategory[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "product-1",
    name: "Kệ tủ sọc 3 cánh",
    image: "/sp/spnb/spnb1-ketu.jpg",
    description:
      "Kệ tủ đừng giày dép hoặc đồ gia dụng với thiết kế hiện đại kết hợp tone màu gỗ trầm.",
    categories: [],
    featured: true,
  },
  {
    id: "product-2",
    name: "Tủ Hoàng Gia",
    image: "/sp/spnb/spnb2-ketu.jpg",
    description:
      "Tủ đựng đồ 3 hộc chắc chắn với chất liệu gỗ dày và màu gỗ thiên hướng Hoàng Gia đặc trưng.",
    categories: [],
    featured: true,
  },
  {
    id: "product-3",
    name: "Ghế bập bênh Puff",
    image: "/sp/spnb/spnb3-ghe.jpg",
    description:
      "Ghế lười bập bênh ngồi thư giãn nghỉ ngơi với thiết kế đệm êm và độ dài ghế có thể điều chỉnh giúp linh hoạt cho không gian ngôi nhà của bạn.",
    categories: [],
    featured: true,
  },
  {
    id: "product-4",
    name: "Ghế bập bênh Baegel",
    image: "/sp/spnb/spnb4-ghe.jpg",
    description:
      "Ghế lười bập bênh với thiết hình chữ nhật đứng rộng rãi và dễ chịu.",
    categories: [],
    featured: true,
  },
  {
    id: "product-5",
    name: "Ghế lưới lưng đứng",
    image: "/sp/spnb/spnb5-ghe.jpg",
    description:
      "Ghế lưới chắc chắn với thiết kế hiện đại, có thể dùng trong nhà và ngoài trời đều được.",
    categories: [],
    featured: true,
  },
  {
    id: "product-6",
    name: "Kệ Tivi Roco",
    image: "/sp/ketu/sp1-ketu.jpg",
    description:
      "Kệ TV dài với thiết kế gỗ hiện đại, hộc tủ cửa hai cánh và hai hộc đựng được rất nhiều đồ.",
    categories: ["ketu", "hot"],
    featured: false,
  },
  {
    id: "product-7",
    name: "Ghế bập bênh Vành",
    image: "/sp/ghe/sp1-ghe.jpg",
    description:
      "Ghế bập bênh với nệm dày rất êm và kèm theo đôn gác chân tạo cảm giác thoải mái và thư giản khi ngồi.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-8",
    name: "Ghế bập bênh Baegel",
    image: "/sp/ghe/sp2-ghe.jpg",
    description:
      "Ghế lười bập bênh với thiết hình chữ nhật đứng rộng rãi và dễ chịu.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-9",
    name: "Bàn tròn lưới",
    image: "/sp/ban/sp1-ban.jpg",
    description:
      "Bàn tròn lưới thường kết hợp với ghế lưới thành một bộ, mặt kính sang trọng, có thể để ngoài trời lẫn trong nhà.",
    categories: ["ban", "hot"],
    featured: false,
  },
  {
    id: "product-10",
    name: "Tủ đầu giường Squar",
    image: "/sp/ketu/sp2-ketu.jpg",
    description:
      "Tủ để đầu giường đơn giản nhưng sang trọng với màu gỗ độc lạ.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-11",
    name: "Kệ tủ Lux",
    image: "/sp/ketu/sp3-ketu.jpg",
    description:
      "Kệ tủ với kích thước vừa đủ, cửa mặt kính có thể thấy bên trong rất phù hợp để trang trí.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-12",
    name: "Bộ ghế vải cafe Mono",
    image: "/sp/ghe/sp3-ghe.jpg",
    description:
      "Ghế cafe thịnh hành với thiết kế và màu sắc không bao giờ lỗi thời.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-13",
    name: "Kệ góc Rose",
    image: "/sp/ketu/sp4-ketu.jpg",
    description: "Kệ góc cao tầng với thiết kế vintage phù hợp để trang trí.",
    categories: ["ketu", "hot"],
    featured: false,
  },
  {
    id: "product-14",
    name: "Sofa đơn 4X",
    image: "/sp/ghe/sp4-ghe.jpg",
    description: "Sofa đơn với chất liệu gỗ chắc chắn và nệm vải êm vô cùng.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-15",
    name: "Kệ góc Duki",
    image: "/sp/ketu/sp5-ketu.jpg",
    description:
      "Kệ góc vô cùng chắc chắn, nhiều ngăn và tầng với màu gỗ tự nhiên sáng bừng.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-16",
    name: "Ghế lưới lưng đứng",
    image: "/sp/ghe/sp5-ghe.jpg",
    description:
      "Ghế lưới chắc chắn với thiết kế hiện đại, có thể dùng trong nhà và ngoài trời đều được.",
    categories: ["ghe", "hot"],
    featured: false,
  },
  {
    id: "product-17",
    name: "Kệ Tivi Amaili",
    image: "/sp/ketu/sp6-ketu.jpg",
    description:
      "Kệ TV gỗ chắc chắn, bền với tone màu gỗ kết hợp trắng vô cùng sang trọng.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-18",
    name: "Ghế lưới bầu",
    image: "/sp/ghe/sp6-ghe.jpg",
    description:
      "Kế lưới bầu ngồi rộng và thoải mái hơn, dùng trong nhà hay ngoài trời đều được.",
    categories: ["ghe", "hot"],
    featured: false,
  },
  {
    id: "product-19",
    name: "Ghế bành",
    image: "/sp/ghe/sp7-ghe.jpg",
    description: "Ghế bành nệm bọc da vô cùng xịn sò và chắc chắn.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-20",
    name: "Ghế dài",
    image: "/sp/ghe/sp8-ghe.jpg",
    description: "Ghế dài nệm bọc da hiện đại và tiện lợi.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-21",
    name: "Bộ bàn ghế Nato",
    image: "/sp/ban/sp2-ban.jpg",
    description: "Bộ bàn gỗ chắc chắn bọc nệm êm, bàn và ghế có bán lẻ.",
    categories: ["ban"],
    featured: false,
  },
  {
    id: "product-22",
    name: "Tủ quần áo sồi",
    image: "/sp/ketu/sp7-ketu.jpg",
    description:
      "Tủ quần áo gỗ sồi đẳng cấp sử dụng không biết khi nào mới hư, tủ cửa hai cánh và ba cánh đều có.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-23",
    name: "Tủ quần áo đa ngăn",
    image: "/sp/ketu/sp8-ketu.jpg",
    description: "Tủ quần áo đa ngăn đồ gì cũng bỏ được.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-24",
    name: "Xích đu",
    image: "/sp/xichdu/sp1-xichdu.jpg",
    description:
      "Xích đu to và chắc chắn, khung sắt để ngoài trời không sợ hư.",
    categories: ["xichdu"],
    featured: false,
  },
  {
    id: "product-25",
    name: "Ghế Voco",
    image: "/sp/ghe/sp9-ghe.jpg",
    description:
      "Ghế ngồi bàn ăn rất thích hợp, với thiết kế ôm lưng và cột rất mát.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-26",
    name: "Ghế Nego",
    image: "/sp/ghe/sp10-ghe.jpg",
    description: "Ghế ngồi chơi thư giãn với tấm nệm dày.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-27",
    name: "Kệ tủ Buqi",
    image: "/sp/ketu/sp9-ketu.jpg",
    description: "Kệ tủ nhỏ gọn dùng để đựng đồ linh tinh.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-28",
    name: "Kệ tủ Yosu",
    image: "/sp/ketu/sp10-ketu.jpg",
    description: "Kệ tủ gỗ chắc chắn và nhiều ngăn.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-29",
    name: "Ghế nhựa Dolo",
    image: "/sp/ghe/sp11-ghe.jpg",
    description: "Ghế nhựa đầy đủ màu sắc.",
    categories: ["ghe"],
    featured: false,
  },
  {
    id: "product-30",
    name: "Ghế nệm văn phòng",
    image: "/sp/ghe/sp12-ghe.jpg",
    description: "Ghế nệm văn phòng nhiều mẫu mã từ bình dân đến cao cấp.",
    categories: ["ghe", "hot"],
    featured: false,
  },
  {
    id: "product-31",
    name: "Kệ tủ Pica",
    image: "/sp/ketu/sp11-ketu.jpg",
    description:
      "Kệ tủ gỗ trắng vô cùng chắc chắn, dễ đựng đồ, quần áo, đồ gia dụng linh tinh.",
    categories: ["ketu"],
    featured: false,
  },
  {
    id: "product-32",
    name: "Kệ tủ Hanut",
    image: "/sp/ketu/sp12-ketu.jpg",
    description: "Kệ tủ gỗ phong cách và chắc chắn.",
    categories: ["ketu"],
    featured: false,
  },
];

export const categories: { id: Category; label: string }[] = [
  { id: "home", label: "Trang chủ" },
  { id: "all", label: "Tất cả" },
  { id: "hot", label: "Bán chạy nhất" },
  { id: "ban", label: "Bàn" },
  { id: "ketu", label: "Kệ Tủ" },
  { id: "ghe", label: "Ghế" },
  { id: "xichdu", label: "Xích đu" },
];
