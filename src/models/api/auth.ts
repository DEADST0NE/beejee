interface LoginResponse {
  accessToken: string;
}

interface LoginRequest {
  login: string;
  password: string;
}

export type { LoginResponse, LoginRequest };
