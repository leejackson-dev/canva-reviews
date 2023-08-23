import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { trustpilotAPI } from '../api/api';

export default function useReviews() {
  const [reviews, setReviewsData] = useState([]);
  const [error, setError] = useState<React.ErrorInfo | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getReviews() {
    // Set loading to true so the loading spinner is displayed
    setIsLoading(true);
    // Start the try catch
    try {
      const endpoint = 'reviews';
      const params = {
        stars: '4,5',
        language: 'en',
        perPage: 10,
        // This is default, but as a precaution incase it ever changes
        orderBy: 'createdat.desc',
      };

      // Get the response and store it
      const response: AxiosResponse<any, any> | undefined | string =
        await trustpilotAPI(endpoint, params);

      // If the response is a string it is not the data object, but the error from the try catch
      if (typeof response === 'string') {
        switch (response) {
          case 'ERR_BAD_REQUEST':
            throw new Error(
              "Something went wrong. The 'Business Unit ID' cannot be found."
            );
          case 'ERR_NETWORK':
            throw new Error(
              "We can't load the reviews right now. We are having trouble connecting to Trustpilot. Please try again later."
            );
          default:
            throw new Error('An unknown error occured.');
        }
      }

      // Update the stats state to store the response data
      setReviewsData(response?.data.reviews);

      // There were no errors so set to null
      setError(null);
    } catch (error) {
      // There was an error, so set it to the error state
      setError(error);
    } finally {
      // Set loading to false now we have the data
      setIsLoading(false);
    }
  }

  return {
    // Variables
    reviews,
    error,
    isLoading,
    // Methods
    getReviews: getReviews,
  };
}
