import { AxiosRequestConfig } from 'axios';
import BeeJeeService from './beeJeeService';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BEEJEE_HOST,
};

const beeJeeService = BeeJeeService.getInstance(config);

export { beeJeeService };
export type { BeeJeeService };
