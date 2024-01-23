import axios from '@app/libs/axios';
import {AxiosResponse} from 'axios';
import {ComposeEventResponse} from './types';

export const fetchEvents = async (limit: number) => {
  const response: AxiosResponse<ComposeEventResponse> = await axios.get(
    `/api/v1/events?limit=${limit}`,
  );
  return response.data;
};
