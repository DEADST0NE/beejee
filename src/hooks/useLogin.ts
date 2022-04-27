import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import storage, { JWT_KEY } from '../storage';

import { beeJeeService } from '../api';
import { openErrorNotification } from '../components/Notification';
import { LoginResponse, LoginRequest } from '../models/api';

interface LoginRequestVariables {
  data: LoginRequest;
}

const errorHandler = (error: unknown) => {
  const theError = error as any;
  const message =
    theError?.response?.data?.message ||
    theError?.response?.data?.details ||
    theError?.message;
  openErrorNotification(message);
};

const useLogin = () => {
  const history = useNavigate();
  const {
    status,
    error,
    mutateAsync: login,
  } = useMutation<LoginResponse, any, LoginRequestVariables>(
    (variables: LoginRequestVariables) => beeJeeService.login(variables.data),
    {
      onSuccess: (data) => {
        storage.set(JWT_KEY, data.accessToken);
        history('/');
      },
      onError: errorHandler,
    }
  );

  return {
    loading: status === 'loading',
    login,
    error,
  };
};

export default useLogin;
