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
        className="place-content-center-safe flex p-5"
      >
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
      {/*product information container */}
      <section className="lg:grid-cols-2 lg:grid-rows-1 lg:pb-20 lg:px-20 relative grid p-5 pt-5 pb-10">
        <div className="justify-center-safe lg:justify-end static flex pr-5 align-middle">
          <img
            src={productData?.image}
            className="sm:mb-3 min-w-2/5 max-w-3/5 border-neutral-200 p-1 border rounded-sm shadow-sm"
          ></img>
        </div>
        {/* text content */}
        <div className="relative **:py-0.5 flex flex-col pt-10 lg:pt-0 justify-center-safe align-middle px-2">
          <h1 className="lg:text-balance text-3xl">
            Product {productId}: {productData?.title}
          </h1>
          {/* in theory, don't use the dollar sign and actually get a preferred currency, but for now this is what i'm doing */}
          <h2 className="text-2xl text-left">{"$" + productData?.price}</h2>
          <p className="text-neutral-800 lg:text-balance lg:mr-30 mb-2">
            {productData?.description}
          </p>
          {/* button container*/}
          <div className="justify-center-safe lg:justify-start flex flex-row items-stretch gap-2 align-middle">
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
              className="hover:bg-teal-700 hover:text-neutral-50 text-neutral-50 bg-teal-500"
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
