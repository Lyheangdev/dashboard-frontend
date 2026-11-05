export interface IAuthUser {
  id: number;
  full_name?: string;
  email?: string;
  bio?: string;
  profile_url?: string;
  role: string;
  isBanned: boolean;
  status: number;
  code: string;
  permissions: string[];
  resources: string[];
  views: string[];
  created_at: string;
  updated_at: string;
}

export interface IUserStore {
  id?: number;
  full_name?: string;
  email?: string;
  bio?: string;
  profile_url?: string;
  role?: string;
  code?: string;
  isBanned?: boolean;
  status?: number;
  permissions?: string[];
  views?: string[];
  resources?: string[];
  created_at: string;
}
