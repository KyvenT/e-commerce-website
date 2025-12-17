import { Link } from "react-router";
import type { ProductSaleList, StoreProduct } from "./Store";
import { StoreProductBtn } from "./StoreProduct";

type ProductListProps = {
  products: StoreProduct[];
  discounts: ProductSaleList;
  header: string;
};

export const ProductList = ({
  products,
  discounts,
  header,
}: ProductListProps) => {
  return (
    <section className="p-4 text-center">
      <h2 className="text-lg pb-2">{header}</h2>
      <ul className="flex justify-center w-full h-fit gap-8 flex-wrap">
        {products.map((item) => (
          <li>
            <Link to={`/store/product/${item.id}`}>
              <StoreProductBtn
                item={item}
                discount={discounts[item.id]?.discount}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
