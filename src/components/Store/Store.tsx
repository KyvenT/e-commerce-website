import { useEffect, useState } from "react";
import { Spinner } from "../ui/shadcn-io/spinner";
import { ProductList } from "./ProductList";

export type StoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductSaleList = Record<number, { discount: number }>;

export const productsOnSale: ProductSaleList = {
  2: { discount: 0.9 },
  5: { discount: 0.75 },
  9: { discount: 0.8 },
  13: { discount: 0.85 },
  17: { discount: 0.65 },
  20: { discount: 0.5 },
};

export const popularProductIds = [1, 4, 7, 12, 15, 18];

export const Store = () => {
  const [items, setItems] = useState<StoreProduct[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        if (!data.ok) {
          throw new Error("Error fetching items");
        }
        const result = await data.json();
        setItems(result);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const saleProducts = items.filter((item) => !!productsOnSale[item.id]);
  const popularProducts = items.filter(
    (item) => !!popularProductIds.find((val) => val === item.id)
  );

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div>
        <h3>Error fetching store items</h3>
      </div>
    );

  return (
    <div className="border border-black ">
      <ProductList
        products={saleProducts}
        discounts={productsOnSale}
        header="Sale"
      />
      <ProductList
        products={popularProducts}
        discounts={productsOnSale}
        header="Popular"
      />
      <ProductList
        products={items}
        discounts={productsOnSale}
        header="Shop All"
      />
    </div>
  );
};
