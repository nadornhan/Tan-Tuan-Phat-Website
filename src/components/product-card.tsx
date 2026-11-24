import type { Product } from "@/data/products";

export function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  return (
    <article
      className={`product-card ${product.featured ? "featured-product" : ""}`}
    >
      <button
        type="button"
        className="product-trigger"
        onClick={() => onSelect(product)}
        aria-label={`Xem chi tiết ${product.name}`}
      >
        <img
          src={encodeURI(product.image)}
          alt={product.name}
          className={
            product.featured ? "product-image-feature" : "product-image"
          }
          loading="lazy"
        />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
        </div>
      </button>
    </article>
  );
}
