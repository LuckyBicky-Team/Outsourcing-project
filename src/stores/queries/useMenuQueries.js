import { useInfiniteQuery } from '@tanstack/react-query';
import isEmpty from 'lodash/isEmpty';
import { fetchAllMenus, fetchCategoryMenus } from '@/supabase/menu';
import { QUERY_KEYS } from './constants';

export const useInfiniteFetchMenus = (category, limit) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.MENUS(category),
    getNextPageParam: (lastPage, allPages) => {
      if (isEmpty(lastPage)) return undefined;
      return allPages.length * limit;
    },
    queryFn: ({ pageParam }) => {
      if (category === 'all') return fetchAllMenus({ pageParam, limit });
      return fetchCategoryMenus({ category, pageParam, limit });
    },
    select: (data) => data.pages.flat(),
    enabled: !!category,
    staleTime: 3600 * 1000,
    cacheTime: 3600 * 1000
  });
};
