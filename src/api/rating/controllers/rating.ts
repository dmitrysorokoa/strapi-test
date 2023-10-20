/**
 * A set of functions called "actions" for `rating`
 */

export default {
  async ratings(ctx, next) {
    try {
      const data = await strapi
        .service("api::rating.rating")
        .ratings();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
