import { useQuery } from '@tanstack/react-query';

import productListMock from './mock';
import { ProductSearchResponse, UseProductsQueryProps } from './types';

import { query } from '@/libs/api/axios';

export const useProductsQuery = ({
  category,
  minPrice,
  page,
  pageSize,
}: UseProductsQueryProps = {}) => {
  return useQuery({
    queryKey: [productListMock.tags],
    queryFn: () =>
      query<ProductSearchResponse>(productListMock.path, {
        category,
        minPrice,
        page,
        pageSize,
      }),
  });
};
