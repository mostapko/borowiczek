export interface User {
  id: string,
  username: string,
  email: string,
  isAuthenticated: boolean,
  token: string,
}

export interface UserLoginCredentials {
  identifier: string,
  password: string
}

