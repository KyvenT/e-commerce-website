import type { StoreProduct } from "./Store";
import { Card } from "../ui/card";

type StoreProductProps = {
  item: StoreProduct;
  discount?: number;
};

export const StoreProductBtn = ({ item, discount }: StoreProductProps) => {
  return (
    <Card className="p-0 rounded-none">
      <div className="aspect-square h-[400px] p-4 flex flex-col justify-between text-center">
        <h4 className="text-l text-wrap pb-2">{item.title}</h4>
        <div className="flex-1 min-h-0 m-auto">
          <img src={item.image} className="object-contain w-full h-full" />
        </div>
        {discount ? (
          <>
            <h2 className="text-3xl">
              <s>${item.price}</s>
            </h2>
            <h2 className="text-3xl">${item.price * discount}</h2>
          </>
        ) : (
          <h2 className="text-3xl">${item.price}</h2>
        )}
        <p>{item.category}</p>
      </div>
    </Card>
  );
};
