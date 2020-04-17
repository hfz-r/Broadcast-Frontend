export default ({ apiUrl, get, post }) => {
  const generateSession = guid =>
    get({
      url: apiUrl,
      endPoint: `/auth/${guid}`,
      contentType: 'application/json',
    });

  const login = (username, password) =>
    post({
      url: apiUrl,
      endPoint: '/auth',
      contentType: 'application/json',
      data: { username, password },
    });

  return { generateSession, login };
};
