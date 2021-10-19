module.exports = {
  query: `
   productsCount(where:JSON): Int!
  `,
  resolver: {
    Query: {
      productsCount: {
        description: "Return the count of Products",
        resolverOf: "application::product.product.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api.product.services.product.count(
            options.where || {}
          );
        },
      },
    },
  },
};
