import {useCallback, useEffect, useState} from 'react';

interface Pagination<T> {
  data: T[];
  nextPage: () => void;
}
export const usePagination = <T>(
  initialData: T[],
  pageSize: number,
): Pagination<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedData, setRenderedData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const pagination = useCallback(
    (database: T[], page: number): T[] => {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      if (startIndex >= database.length) {
        return [];
      }

      return database.slice(startIndex, endIndex);
    },
    [pageSize],
  );

  useEffect(() => {
    setIsLoading(true);

    const getInitialData = pagination(initialData, 1);
    setRenderedData(getInitialData);

    setIsLoading(false);
  }, [pagination, initialData]);

  const nextPage = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const nextPageData = pagination(initialData, currentPage + 1);

    if (nextPageData.length > 0) {
      setCurrentPage(currentPage + 1);
      setRenderedData(prevData => [...prevData, ...nextPageData]);
    }

    setIsLoading(false);
  };

  return {data: renderedData, nextPage};
};
