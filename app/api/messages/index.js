export default ({ apiUrl, get, post }) => {
  const fetchMessage = () =>
    get({
      url: apiUrl,
      endPoint: '/messages',
    });

  const createMessage = payload =>
    post({
      url: apiUrl,
      endPoint: '/messages',
      contentType: 'application/json',
      data: payload,
    });

  return { createMessage, fetchMessage };
};
