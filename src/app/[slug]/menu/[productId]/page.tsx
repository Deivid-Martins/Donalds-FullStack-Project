import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductsHeader from "./components/products-header";

interface ProductPageProps {
  params: Promise<{ slug: string, productId: string }>
}

export default async function ProductPage ({ params }: ProductPageProps) {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({ where: { id: productId } });
  if(product == null) {
    return notFound();
  }
  
  return (
    <>
      <ProductsHeader product={product} />
      <h1>Product Page</h1>
      {slug}
      {productId}
    </>
  );
}
