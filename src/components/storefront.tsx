"use client";

import { useEffect, useRef, useState } from "react";
import {
  categories,
  products,
  type Category,
  type Product,
} from "@/data/products";
import { ProductCard } from "./product-card";
import { ProductModal } from "./product-modal";

function CategoryNavigation({
  active,
  onSelect,
}: {
  active: Category;
  onSelect: (category: Category) => void;
}) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      setHidden(window.scrollY > lastY);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      aria-label="Danh mục sản phẩm"
      className={`categories ${hidden ? "hide" : ""}`}
    >
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          className={`category-btn ${active === category.id ? "active" : ""}`}
          aria-pressed={active === category.id}
          onClick={() => onSelect(category.id)}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );
}

export function Storefront() {
  const [active, setActive] = useState<Category>("home");
  const [selected, setSelected] = useState<Product | null>(null);
  const productSection = useRef<HTMLElement>(null);
  const shouldScroll = useRef(false);
  function selectCategory(category: Category) {
    shouldScroll.current = true;
    setActive(category);
    if (category === active) scrollToCategory(category);
  }
  function scrollToCategory(category: Category) {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "instant"
      : "smooth";
    if (category === "home") window.scrollTo({ top: 0, behavior });
    else productSection.current?.scrollIntoView({ behavior });
  }
  useEffect(() => {
    if (shouldScroll.current) {
      scrollToCategory(active);
      shouldScroll.current = false;
    }
  }, [active]);
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo_%C4%91en.png" alt="my_logo" className="logo-hinh" />
          <img src="/ttp_%C4%91en.png" alt="ttp" className="logo-chu" />
        </div>
        <nav className="nav">
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      <CategoryNavigation active={active} onSelect={selectCategory} />

      <section className="bia-trang-dau">
        <img src="/b%C3%ACa-x%C3%A1m.png" alt="bia" className="anh-bia" />
      </section>

      <section className="hero">
        <div className="hero-content">
          <h1>Cửa hàng Nội thất Tân Tuấn Phát xin chào!</h1>
          <p>
            Đây là trang web trưng bày các mặt hàng mẫu. Không có chức năng mua
            bán, chỉ dùng để giới thiệu sản phẩm.
          </p>
        </div>
      </section>

      <section className="container" id="contact">
        <div className="hero-content">
          <h1>Liên hệ mua hàng</h1>
        </div>
        <p>
          <b>Email:</b> nhan682005@gmail.com
        </p>
        <p>
          <b>Điện thoại:</b> 0914 072 797 (Thuy Ngo)
        </p>
        <p>
          <strong>Zalo:</strong>
          <a
            className="zalo-link"
            href="https://zalo.me/84914072797"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ấn vào là vô thẳng Zalo Thủy Ngô lun!
          </a>
        </p>
        <p>
          <strong>Địa chỉ:</strong>
          <a
            className="map-link"
            href="https://maps.app.goo.gl/4VGBee8u1BjUqpoK7"
            target="_blank"
            rel="noopener noreferrer"
          >
            121 Hai Bà Trưng, phường Buôn Ma Thuột, tỉnh Đắk Lắk (Google Map)
          </a>
        </p>
      </section>

      {active === "home" && (
        <section id="featured-section" className="container">
          <h2 className="section-title">
            <span className="line-san">Sản</span>
            <span className="line-pham">Phẩm</span>
            <span className="line-noibat">Nổi Bật</span>
          </h2>
          <div className="featured-grid">
            {products
              .filter((p) => p.featured)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelected}
                />
              ))}
          </div>
        </section>
      )}

      <section className="container" id="productsposter" ref={productSection}>
        {active !== "home" && (
          <>
            <h2 className="section-title" id="SP">
              <span className="line-sp">SẢN PHẨM</span>
            </h2>
            <div className="product-grid">
              {products
                .filter(
                  (p) =>
                    !p.featured &&
                    (active === "all" || p.categories.includes(active)),
                )
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelected}
                  />
                ))}
            </div>
          </>
        )}
      </section>

      <section className="poster">
        <div className="poster1st">
          <img src="/poster/ghebanh.png" alt="poster1" className="ghebanh" />
          <img src="/poster/ghenho.png" alt="poster2" className="ghenho" />
        </div>
      </section>

      <section className="poster2">
        <div className="poster2nd">
          <img src="/poster/ghedai.png" alt="poster3" className="ghedai" />
        </div>
      </section>

      <section className="posterkinh">
        <div className="posterk">
          <img src="/poster/posterkinh.png" alt="poster4" />
        </div>
      </section>

      <footer className="footer">
        <p>© since 2006 TanTuanPhat. Buon Ma Thuot.</p>
      </footer>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
