export default ({ apiUrl, get, post }) => {
  const fetchMessages = () =>
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

  const fetchMessage = ({ slug }) =>
    get({
      url: apiUrl,
      endPoint: `/messages/${slug}`,
      contentType: 'application/json',
    });

  return { fetchMessages, createMessage, fetchMessage };
};
