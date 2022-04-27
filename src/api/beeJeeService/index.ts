import { AxiosRequestConfig } from 'axios';

import HttpClient from '../httpClient';
import {
  LoginResponse,
  LoginRequest,
  TaskResponse,
  PatchTaskRequest,
  PostTaskRequest,
  GetTasksRequest,
} from '../../models/api';

class BeeJeeService extends HttpClient {
  private static instance: BeeJeeService;

  private constructor(config: AxiosRequestConfig) {
    super(config);
  }

  public static getInstance(config: AxiosRequestConfig): BeeJeeService {
    if (!this.instance) {
      this.instance = new BeeJeeService(config);
    }
    return this.instance;
  }

  private post = async <S, T>(
    endpoint: string,
    data: S,
    config?: AxiosRequestConfig<any>
  ) => {
    const response = await this.instance.post<T>(endpoint, data, config);
    return response.data;
  };

  private put = async <S, T>(endpoint: string, data: S) => {
    const response = await this.instance.put<T>(endpoint, data);
    return response.data;
  };

  private patch = async <S, T>(endpoint: string, data: S) => {
    const response = await this.instance.patch<T>(endpoint, data);
    return response.data;
  };

  private get = async <S, T>(endpoint: string, data?: S) => {
    const response = await this.instance.get<T>(endpoint, { params: data });
    return response.data;
  };

  // private delete = <S, T>(endpoint: string) => {
  //   return this.instance.delete<T>(endpoint);
  // };

  public login = (data: LoginRequest): Promise<LoginResponse> =>
    this.post<LoginRequest, LoginResponse>('/auth/login', data, {
      withCredentials: true,
    });

  public getTasks = (data?: GetTasksRequest) =>
    this.get<any, TaskResponse[]>('/tasks', data);

  public patchTask = (data: PatchTaskRequest) =>
    this.patch<PatchTaskRequest, TaskResponse>(`/tasks`, data);

  public postTask = (data: PostTaskRequest) =>
    this.post<PostTaskRequest, TaskResponse>(`/tasks`, data);
}

export default BeeJeeService;
