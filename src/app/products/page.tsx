import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '../../service/products';
import clothesImage from '../../../public/images/clothes.jpg';
import Link from 'next/link';
import Image from 'next/image';

// export const revalidate = 3;

export default async function ProductsPage() {
    // throw new Error();
    const products = await getProducts();

    return (
        <>
            <h1>제품 소개 페이지</h1>
            <Image src={clothesImage} alt="clothes" />
            <ul>
                {products.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle />
        </>
    );
}
