import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
    title: 'title | 전체 제품 확인',
    description: 'description2'
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/products/women">여성</Link>
                <Link href="/products/man">남성</Link>
            </nav>
            <section className={styles.product}>{children}</section>
        </>
    );
}
