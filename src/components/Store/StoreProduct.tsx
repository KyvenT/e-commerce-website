import type { StoreProduct } from "./Store";
import { Card } from "../ui/card";

type StoreProductProps = {
  item: StoreProduct;
};

export const StoreProductBtn = ({ item }: StoreProductProps) => {
  return (
    <Card>
      <div className="w-[200px] flex flex-col items-center">
        <h4 className="text-l text-center text-wrap">{item.title}</h4>
        <img src={item.image} className="h-[100px]" />
        <h2 className="text-3xl">${item.price}</h2>
        <p>{item.category}</p>
      </div>
    </Card>
  );
};
