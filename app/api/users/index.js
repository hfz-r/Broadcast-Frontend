export default ({ apiUrl, get }) => {
  const currentUser = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/users/current',
      contentType: 'application/json',
      sessionToken,
    });

  return { currentUser };
};
