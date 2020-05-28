export default ({ apiUrl, get, post, put }) => {
  const currentUser = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/users/current',
      contentType: 'application/json',
      sessionToken,
    });

  const fetchUsers = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/users',
      contentType: 'application/json',
      sessionToken,
    });

  const fetchRoles = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/security/roles',
      contentType: 'application/json',
      sessionToken,
    });

  const createUser = (payload, sessionToken) =>
    post({
      url: apiUrl,
      endPoint: '/users',
      contentType: 'application/json',
      data: { user: payload },
      sessionToken,
    });

  const editUser = (payload, username, sessionToken) =>
    put({
      url: apiUrl,
      endPoint: `/users/${username}`,
      contentType: 'application/json',
      data: { user: payload },
      sessionToken,
    });

  return { currentUser, createUser, editUser, fetchUsers, fetchRoles };
};
