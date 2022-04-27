import { useState } from 'react';
import { useQuery } from 'react-query';

import { beeJeeService } from '../api';
import { openErrorNotification } from '../components/Notification';
import { GetTasksResponse, GetTasksRequest } from '../models/api';

const defaultAddress: GetTasksResponse = {
  data: [],
  pagination: {
    page: 1,
    limit: 3,
    length: 3,
  },
};

const errorHandler = (error: unknown) => {
  const theError = error as any;
  const message =
    theError?.response?.data?.message ||
    theError?.response?.data?.details ||
    theError?.message;
  openErrorNotification(message);
};

export const useTasks = (params?: GetTasksRequest) => {
  const [tasks, setTasks] = useState<GetTasksResponse>(defaultAddress);
  const { isLoading, isError } = useQuery(
    ['tasks', params],
    () => beeJeeService.getTasks(params),
    {
      onSuccess: (data: GetTasksResponse) => {
        setTasks(data);
      },
      onError: errorHandler,
      keepPreviousData: true,
    }
  );

  return { loading: isLoading, isError, tasks };
};

export default useTasks;
