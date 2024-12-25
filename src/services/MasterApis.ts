import axios from 'axios';
import { BaseURl } from './Auth.Apis';
import { toast } from 'react-toastify';

export const GetFilledChecklist = async (data: any) => {
  try {
    const response = await axios.post(`${BaseURl}/get-transactions`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

//get membersall
export const GetAllMembers = async () => {
  try {
    const response = await axios.get(`${BaseURl}/get-Users`);
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

//get the questions
export const GetAllQuestions = async (data: any) => {
  try {
    const response = await axios.post(`${BaseURl}/all-questions`, data);
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

//edit member
export const EditMember = async (data: any) => {
  try {
    const response = await axios.put(`${BaseURl}/update-users`, data);
    if (response.status === 200 ) {
      toast.success(response.data.message);
      return response.data;      
    }
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
