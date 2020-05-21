export default ({ apiUrl, get, post, put }) => {
  const fetchMessages = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/messages',
      contentType: 'application/json',
      sessionToken,
    });

  const fetchProjects = sessionToken =>
    get({
      url: apiUrl,
      endPoint: '/projects',
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

  const createProject = (payload, sessionToken) =>
    post({
      url: apiUrl,
      endPoint: '/projects',
      contentType: 'application/json',
      data: { project: payload },
      sessionToken,
    });

  const editProject = (payload, project, sessionToken) =>
    put({
      url: apiUrl,
      endPoint: `/projects/${project}`,
      contentType: 'application/json',
      data: { project: payload },
      sessionToken,
    });

  return {
    fetchMessages,
    fetchProjects,
    createMessage,
    createProject,
    editProject,
  };
};
