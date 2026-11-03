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
  created_at: string;
  updated_at: string;
}
