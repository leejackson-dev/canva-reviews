import axios, { AxiosResponse, AxiosError } from 'axios';
import { BUSINESS_UNIT_ID } from '../constants/constants';

// Set up the config interface
interface Config {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  headers: {
    apikey: string;
    'Content-Type': 'application/json';
  };
  params?: {};
}

export const trustpilotAPI = async (
  endpoint: string,
  params?: {}
): Promise<AxiosResponse<any, any> | undefined | string> => {
  const businessUnitId = BUSINESS_UNIT_ID;

  // API Configuration
  const config: Config = {
    method: 'get',
    url:
      // If it is useReviews making the request, include the Business Unit ID
      endpoint === 'reviews'
        ? `https://api.trustpilot.com/v1/business-units/${businessUnitId}/reviews`
        : `https://api.trustpilot.com/v1/business-units/${endpoint}`,
    headers: {
      // Get the API Key from the .env file
      apikey: import.meta.env.VITE_API_KEY,
      'Content-Type': 'application/json',
    },
    // Include the parameters sent from the custom hooks
    params: params,
  };

  // Try catch to make the request
  try {
    const response = await axios(config);
    // Return the response
    return response;
  } catch (error) {
    // Return the error code
    return (error as AxiosError).code;
  }
};
