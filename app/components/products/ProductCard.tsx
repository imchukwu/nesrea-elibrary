"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCart: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-spac-1
    cursor-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition hover:scle-105
    text-center
    text-sm"
    >
      <div
        className="
      flex
      flex-col
      item-center
      w-full
      gap-1"
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.image}
            alt={data.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4 font-bold">{truncateText(data.title)}</div>
        <div>{data.author}</div>
      </div>
    </div>
  );
};

export default ProductCart;
