/**
 * rating service
 */

export default () => ({
  ratings: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::meetup.meetup",
        {
          fields: ["subject"],
          populate: {
            author: {
              fields: ["username"],
            },
          },
        }
      );

      // reduce the data to the format we want to return
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          console.log(item)
          acc = acc || [];
          acc.push({
            id: item.id,
            subject: item.subject || "",
            authorName: item.author.username || "",
          });
          return acc;
        }, []);
      }

      // return the reduced data
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
});
