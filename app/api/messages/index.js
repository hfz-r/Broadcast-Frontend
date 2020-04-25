export default ({ apiUrl, get, post }) => {
  const fetchMessages = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/messages',
      contentType: 'application/json',
      sessionToken,
    });

  const createMessage = (payload, sessionToken) =>
    post({
      url: apiUrl,
      endPoint: '/messages',
      contentType: 'application/json',
      data: { message: payload },
      sessionToken,
    });

  const fetchMessage = ({ slug, sessionToken }) =>
    get({
      url: apiUrl,
      endPoint: `/messages/${slug}`,
      contentType: 'application/json',
      sessionToken,
    });

  return { fetchMessages, createMessage, fetchMessage };
};
