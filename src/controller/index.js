const index = (req, res) => {
  const response = {
    routes: {
      '/newspaper': {
        'get': 'To get a newspaper',
        'post': 'To add newspaper'
      },
      '/newspaper/:id': {
        'get': 'To get only one newspaper',
        'delete': 'To delete a newspaper',
        'put': 'Update a mewspaper'
      }
    },
    message: 'Please make sure that you are readed the README.md'
  }
  res.json(response);
};

export {index};