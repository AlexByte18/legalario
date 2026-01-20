
import { usersApi } from '../../../core/api/users-api';
import type { User } from './../../../core/interfaces/user.interface';
import { isAxiosError } from "axios";

interface GetUsersParams {
  limit?: number;
  search?: string;
}

export const getUsers = async ({ limit = 15, search }: GetUsersParams = {}) => {
  try { 
    const { data } = await usersApi.get<User[]>('/users', {
      params: { 
        limit,
        search: search || undefined
      }
    });

    console.log("getUsers ~ data:", data)
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error;
      console.error("Axios Error:", {
        status: axiosError.response?.status,
        statusText: axiosError.response?.statusText,
        url: axiosError.config?.url,
        message: axiosError.message,
        data: axiosError.response?.data,
      });
    } else {
      console.error("Non-Axios error:", error);
    }

    const message = isAxiosError(error) ? error.message : String(error);
    throw new Error(`Error fetching users: ${message}`);
  }
};
