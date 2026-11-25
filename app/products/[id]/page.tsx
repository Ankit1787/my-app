import SortSelect from "@/app/features/products/components/SortSelect"
import { fetchAPI } from "@/app/lib/api";
import { ApiResponse } from "@/app/users/page";

type Props = {
    params: Promise<{
        id: string,
    }>,
    searchParams: Promise<{
        name?: string,
        value?: string,
    }>
}
type Data = Record<string, string | undefined>

export type Product = { 
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
}
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return [
    { id: "101" },
    { id: "102" },
    { id: "103" },
  ];
}
export async function generateMetadata({ params, searchParams }: Props) {
       const {id} = await params;
       const  res= await fetchAPI(`/products/${id}`);
       const product = res as Product;
         return {
          title: product.title,
          description: product.description,
        };
}

const ProductPage = async ({ params, searchParams }: Props) => {
    const [{ id }, { name = '', value = '' }] = await Promise.all([params, searchParams])
    const data: Data = { id, name, value }
    console.log('data', data)
    return (
        <div className="p-4">
           <div>
            <SortSelect />
            </div>
            <div>
                ProductPage {id} 
                </div> 
                <div className="mt-4 font-bold text-lg" >
{name} {value}
                </div>
        </div>
    )
}

export default ProductPage