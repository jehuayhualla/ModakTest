import {useQuery} from '@tanstack/react-query';
import {fetchEvents} from '@app/libs/api';

export const useEvents = (limit: number) => {
  const {data, isLoading, isError, isSuccess, refetch} = useQuery({
    queryKey: ['leads'],
    queryFn: () => fetchEvents(limit),
  });

  return {isLoading, isError, data, isSuccess, refetch};
};
