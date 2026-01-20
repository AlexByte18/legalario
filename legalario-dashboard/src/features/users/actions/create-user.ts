import { usersApi } from '../../../core/api/users-api';
import { isAxiosError } from "axios";
import { type User } from "../../../core/interfaces/user.interface";

export const createUser = async (data: User) => {
  try { 
    const response = await usersApi.post<User>('/users', { ...data });

    return response;
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
      if (axiosError.response?.status === 422 && axiosError.response?.data) {
        throw axiosError.response.data;
      }
    } else {
      console.error("Non-Axios error:", error);
    }

    const message = isAxiosError(error) ? error.message : String(error);
    throw new Error(`Error creating user: ${message}`);
  }
};
