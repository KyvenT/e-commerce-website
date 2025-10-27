import { useEffect, useState } from "react";
import { StoreProductBtn } from "./StoreProduct";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Spinner } from "../ui/shadcn-io/spinner";

export type StoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

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

  return (
    <div>
      <h2>Store</h2>
      {isLoading && <Spinner />}
      {isError && (
        <div>
          <h3>Error fetching store items</h3>
        </div>
      )}
      {!isLoading && !isError && (
        <ScrollArea className="w-full whitespace-nowrap">
          <ul className="flex w-max h-[300px]">
            {items.map((item) => (
              <li>
                <StoreProductBtn item={item} />
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};
