'use client';

import { useProductList } from './hooks';
import * as styles from './styles';
import { currency } from './utils';

export const ProductList = () => {
  const { products, isLoading, isError } = useProductList();

  if (isLoading) return <p className="p-6">Loading products…</p>;

  if (isError)
    return <p className="p-6 text-red-600">Failed to load products.</p>;

  return (
    <section className={styles.container}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Products</h2>
      </div>
      <ul className={styles.list}>
        {products.map((p) => (
          <li key={p.id} className={styles.item}>
            <span>{p.name}</span>
            <span className="tabular-nums">{currency(p.price)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
