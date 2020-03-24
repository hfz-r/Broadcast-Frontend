import httpService from './http';
import messages from './messages';

export default ({ apiKey }) => {
  const http = httpService(apiKey);
  const apiUrl = process.env.API_URL;
  return {
    ...messages({ apiUrl, ...http }),
  };
};
