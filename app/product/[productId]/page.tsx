import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
import { products } from "@/utils/products";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log(params);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={products.find(product => product.id === params.productId)}/>
      </Container>
    </div>
  );
};

export default Product;
