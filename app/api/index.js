import httpService from './http';
import auth from './auth';
import messages from './messages';
import users from './users';

export default ({ apiKey } = {}) => {
  const http = httpService(apiKey);
  const apiUrl = process.env.API_URL;
  return {
    ...auth({ apiUrl, ...http }),
    ...messages({ apiUrl, ...http }),
    ...users({ apiUrl, ...http }),
  };
};
