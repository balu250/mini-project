import { createContext, Dispatch, SetStateAction } from "react";

export interface UserDetail {
  id?: number;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

export interface UserDetailContextType {
  userDetail: UserDetail | null;
  setUserDetail: Dispatch<SetStateAction<UserDetail | null>>;
}

export const UserDetailContext = createContext<UserDetailContextType | null>(null);