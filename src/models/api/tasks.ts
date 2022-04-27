enum SortTasksEnum {
  'UP_NAME' = 'UP_NAME',
  'DOWN_NAME' = 'DOWN_NAME',
  'UP_EMAIL' = 'UP_EMAIL',
  'DOWN_EMAIL' = 'DOWN_EMAIL',
  'UP_DESCRIPTION' = 'UP_DESCRIPTION',
  'DOWN_DESCRIPTION' = 'DOWN_DESCRIPTION',
  'UP_DONE' = 'UP_DONE',
  'DOWN_DONE' = 'DOWN_DONE',
}

interface TaskResponse {
  id: string;
  email: string;
  isDone: boolean;
  userName: string;
  description: string;
  isDescriptionEdit: boolean;
}

interface ResPagination {
  page: number;
  limit: number;
  length: number;
}

interface GetTasksResponse {
  data: TaskResponse[];
  pagination: ResPagination;
}

interface GetTasksRequest {
  page?: number;
  limit?: number;
  sort?: SortTasksEnum;
}

interface PostTaskRequest {
  userName: string;
  email: string;
  description: string;
}

interface PatchTaskRequest {
  id: string;
  email?: string;
  isDone?: boolean;
  userName?: string;
  description?: string;
  isDescriptionEdit?: boolean;
}

export type {
  GetTasksResponse,
  GetTasksRequest,
  TaskResponse,
  PostTaskRequest,
  PatchTaskRequest,
};

export { SortTasksEnum };
