import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../ui/shadcn-io/spinner";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export const ProductPage = () => {
  const { productId } = useParams();
  const [productData, setData] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch(
          "https://fakestoreapi.com/products/" + productId
        );
        if (!data.ok) {
          throw new Error("Error fetching items");
        }
        const result = await data.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (error)
    return (
      <div className="h-full">
        Error fetching product. Verify product id? {error}
      </div>
    );

  if (isLoading) return <Spinner />;

  return (
    <div className="h-full relative">
      {/* breadcrumbs here, but for now just the h3*/ }
      <h3 className="text-neutral-800 dark:text-neutral-300 text-sm">{productData?.category}</h3>
       {/* product card, for now it will be 1 column with vertical scroll, but on larger screen sizes switch to a 2 column grid */} 
        <section className="grid grid-cols-1 md:grid-cols-2">
          <h1 className="text-3xl">Product {productId} {productData?.title}</h1>
          <h2 className="text-xl">{productData?.price}</h2>
          <img src={productData?.image} className="left-0 top-0"></img>
          <p className="text-neutral-800 text-sm">{productData?.description}</p>
        </section>
    </div>
  );
};
