import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import { Spinner } from "../ui/shadcn-io/spinner";
import { Button } from "../ui/button";
import { Footer } from "../custom/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
          "https://fakestoreapi.com/products/" + productId,
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
  }, [productId]);

  if (error)
    return (
      <div className="h-full">
        Error fetching product. Verify product id? {error}
      </div>
    );

  if (isLoading) return <Spinner />;

  return (
    <div className="relative h-full">
      <nav
        aria-label="Breadcrumbs"
        className="flex px-5 pt-5 place-content-center-safe bg-neutral-50"
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="md:text-base">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/Store" className="md:text-base">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-neutral-800 md:text-base">{productData?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      {/*product information container */}
      <section className="relative grid p-5 lg:grid-cols-2 lg:grid-rows-1 lg:pb-30 lg:px-20 md:py-10 bg-neutral-50">
        <div className="static flex pr-5 align-middle justify-center-safe lg:justify-end">
          <img
            title={productData?.title}
            src={productData?.image}
            className="p-1 transition-transform bg-white border rounded-sm shadow-sm aspect-auto sm:mb-3 min-w-2/5 max-w-3/5 border-neutral-200 hover:scale-105"
          ></img>
        </div>
        {/* text content */}
        <div className="relative **:py-0.5 flex flex-col pt-10 lg:pt-0 justify-center-safe align-middle px-2 gap-y-1">
          <h1 className="mx-2 text-3xl lg:text-balance">
            Product {productId}: {productData?.title}
          </h1>
          {/* in theory, don't use the dollar sign and actually get a preferred currency, but for now this is what i'm doing */}
          <h2 className="mx-2 text-2xl font-semibold text-left text-teal-600">{"$" + productData?.price}</h2>
          <p className="flex flex-col mx-2 text-neutral-800 lg:text-balance lg:mr-30">
            {productData?.description}
          </p>
          {/* button container*/}
          <div className="flex flex-row items-stretch gap-2 align-middle justify-center-safe lg:justify-start">
            <Button variant="outline">
              <NavLink
                className="flex items-center gap-1 text-base font-normal"
                to="/cart"
              >
                Add to cart
              </NavLink>
            </Button>
            <Button
              variant="outline"
              className="bg-teal-500 hover:bg-teal-700 hover:text-neutral-50 text-neutral-50"
            >
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
      <Footer />
    </div>
  );
};
