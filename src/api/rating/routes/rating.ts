export default {
  routes: [
    {
     method: 'GET',
     path: '/rating',
     handler: 'rating.ratings',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
