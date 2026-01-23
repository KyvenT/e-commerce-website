import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import { Spinner } from "../ui/shadcn-io/spinner";
import { Button } from "../ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


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
        <nav aria-label="Breadcrumbs" className="static">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/Store">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{productData?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <section className="relative grid md:grid-cols-2 md:grid-rows-1 p-5 md:p-10">
          <img src={productData?.image} className="min-w-1/5 max-w-2/5 justify-self-center"></img>
          {/* product information container */}
          <div className="relative **:py-0.5">
            <h1 className="text-3xl">Product {productId} {productData?.title}</h1>
            {/* in theory, don't use the dollar sign and actually get a preferred currency, but for now this is what i'm doing */}
            <h2 className="text-2xl">{"$" + productData?.price}</h2>
            <p className="text-neutral-800 text-base">{productData?.description}</p>
            {/* button container*/}
            <div className="grid place-content-evenly md:place-content-start gap-y-2 my-2"> 
              <Button variant="outline">
                <NavLink
                className="flex items-center gap-1 text-base font-normal"
                to="/cart"
                >
                Add to cart
                </NavLink>
              </Button>
              <Button variant="outline" className="bg-teal-500 hover:bg-teal-700 hover:text-neutral-50 text-neutral-50">
                <NavLink
                  className="flex items-center gap-1 text-base font-normal"
                  to="/login"
                >
                Buy now
                </NavLink>
              </Button>
            </div> 
          </div>
        </section>
    </div>
  );
};


