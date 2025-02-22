import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetails from "./components/product-details";
import ProductsHeader from "./components/products-header";

interface ProductPageProps {
  params: Promise<{ slug: string, productId: string }>
}

export default async function ProductPage ({ params }: ProductPageProps) {
  const { slug, productId } = await params;
  
  const product = await db.product.findUnique({ where: { id: productId },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
          slug: true
        }
      }
    }});

  if(product == null) {
    return notFound();
  }
  
  if(product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }

  return (
    <div className="flex h-full flex-col">
      <ProductsHeader product={product} />
      <ProductDetails product={product} />
    </div>
  );
}
