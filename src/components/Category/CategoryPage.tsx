import { useParams } from "react-router";
import { ProductList } from "../Store/ProductList";
import { useEffect, useState } from "react";
import { productsOnSale, type StoreProduct } from "../Store/Store";
import { Spinner } from "../ui/shadcn-io/spinner";

export const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState<StoreProduct[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
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
  }, [category]);

  if (isLoading) return <Spinner />;

  if (!category || isError)
    return (
      <div>
        <h3>Error fetching store items</h3>
      </div>
    );

  return (
    <div>
      <ProductList
        products={items}
        discounts={productsOnSale}
        header={category.charAt(0).toUpperCase() + category.slice(1)}
      />
    </div>
  );
};
