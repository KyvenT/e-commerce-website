import { useEffect, useState } from "react";
import { Card } from "./ui/card";

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
      {items.map((item) => (
        <li>
          <Card>
            <h4>{item.title}</h4>
          </Card>
        </li>
      ))}
    </div>
  );
};
