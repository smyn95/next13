import { getProducts } from '../../service/products';
import Link from 'next/link';

// export const revalidate = 3;

export default async function ProductsPage() {
    const products = await getProducts();
    const res = await fetch('https://meowfacts.herokuapp.com/', {
        next: { revalidate: 3 }
    });
    const data = await res.json();
    const factText = data.data[0];

    // const response = await fetch('https://meowfacts.herokuapp.com', {
    //     next: { revalidate: 3 }
    // })
    //     .then((res) => res.json())
    //     .then(({ data }) => data[0]);

    return (
        <>
            <h1>제품 소개 페이지</h1>
            <ul>
                {products.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <article>{factText}</article>
        </>
    );
}
