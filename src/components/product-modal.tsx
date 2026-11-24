"use client";
import { useEffect, useRef } from "react";
import type { Product } from "@/data/products";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!product || !element) return;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [product]);
  return (
    <dialog
      ref={dialog}
      className="product-dialog"
      aria-labelledby="modal-name"
      onCancel={onClose}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            onClose();
        }
      }}
    >
      {product && (
        <>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            autoFocus
            aria-label="Đóng chi tiết sản phẩm"
          >
            Đóng
          </button>
          <div className="modal-content">
            <div className="modal-left">
              <img src={encodeURI(product.image)} alt={product.name} />
            </div>
            <div className="modal-right">
              <h2 id="modal-name">{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
