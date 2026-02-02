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
      <h2 className="pb-2 text-lg">{header}</h2>
      <ul className="h-fit flex flex-wrap justify-center w-full gap-8">
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
