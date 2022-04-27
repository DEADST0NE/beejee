import { useMutation, useQueryClient } from 'react-query';

import { beeJeeService } from '../api';
import {
  openErrorNotification,
  openNotification,
} from '../components/Notification';
import { TaskResponse, PatchTaskRequest } from '../models/api';

interface CreateTaskRequestVariables {
  data: PatchTaskRequest;
}

const errorHandler = (error: unknown) => {
  const theError = error as any;
  const message =
    theError?.response?.data?.message ||
    theError?.response?.data?.details ||
    theError?.message;
  openErrorNotification(message);
};

const useEditTask = () => {
  const queryClient = useQueryClient();
  const { status, mutateAsync: patchTask } = useMutation<
    TaskResponse,
    unknown,
    CreateTaskRequestVariables
  >(
    (variables: CreateTaskRequestVariables) => {
      return beeJeeService.patchTask(variables.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks']);
        openNotification('Задача изменена успешно');
      },
      onError: errorHandler,
    }
  );

  return {
    loading: status === 'loading',
    patchTask,
    isSuccess: status === 'success',
  };
};

export default useEditTask;
