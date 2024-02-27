"use client";

import Button from "@/app/components/Button";
import Image from "next/image";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

// function readEBook(url: string) {
//   var pdfURL = url;
//   var link = document.createElement('a');
//   link.href = pdfURL;
//   link.target = "_blank";
//   link.click();
// }

// function downloadFile(url: string, fileName: string) {
//   var anchor = document.createElement("a");
//   anchor.href = url;
//   anchor.download = fileName;
//   document.body.appendChild(anchor);
//   anchor.click();
//   document.body.removeChild(anchor);
// }

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        className="
      grid grid-cols-6 gap-2 h-full max-h-[500px]
      min-h-[300px] sm:min-h-[400px]"
      >
        <div className="col-span-5 relative aspect-square">
          <Image
            src={product.image}
            alt="Product Image"
            fill
            className="object-Container"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.title}</h2>
        <div>Author: {product.author}</div>
        <div>ISBN: {product.isbn}</div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div className="max-w-[500px]">
          <Button outline label="Read E-Book" pdfLink={product.content} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
