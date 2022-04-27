import { useMutation, useQueryClient } from 'react-query';

import { beeJeeService } from '../api';
import {
  openErrorNotification,
  openNotification,
} from '../components/Notification';
import { TaskResponse, PostTaskRequest } from '../models/api';

interface CreateTaskRequestVariables {
  data: PostTaskRequest;
}

const errorHandler = (error: unknown) => {
  const theError = error as any;
  const message =
    theError?.response?.data?.message ||
    theError?.response?.data?.details ||
    theError?.message;
  openErrorNotification(message);
};

const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { status, mutateAsync: createTask } = useMutation<
    TaskResponse,
    unknown,
    CreateTaskRequestVariables
  >(
    (variables: CreateTaskRequestVariables) => {
      return beeJeeService.postTask(variables.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks']);
        openNotification('Задача добавлена успешно');
      },
      onError: errorHandler,
    }
  );

  return {
    loading: status === 'loading',
    createTask,
    isSuccess: status === 'success',
  };
};

export default useCreateTask;
