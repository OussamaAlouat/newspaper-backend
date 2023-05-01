const index = (req, res) => {
  const response = {
    routes: {
      '/newspaper/': {
        post: "Create a new newspaper"
      },
      '/newspaper/title?': {
        'get': 'To get all newspaper that starts with the provided "title"'
      },
      '/newspaper/all': {
        'get': 'To get a newspaper',
      },

      '/newspaper/:id': {
        'delete': 'To delete a newspaper',
        'put': 'Update a mewspaper'
      },

      '/newspaper/id/:id': {
        'get': 'To get only one newspaper',

      }
    },
    message: 'Please make sure that you are readed the README.md'
  }
  res.json(response);
};

export {index};