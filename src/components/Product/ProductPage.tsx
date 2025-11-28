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
      <h1>
        Product {productId} {productData?.title}
      </h1>
      <h3>{productData?.category}</h3>
      <h2>{productData?.price}</h2>
      <p>{productData?.description}</p>
      <img src={productData?.image} className="left-0 top-0"></img>
    </div>
  );
};
