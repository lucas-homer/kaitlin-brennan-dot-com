export default {
  name: "workSample",
  title: "Work Sample",
  type: "document",
  // You probably want to uncomment the next line once you've made a siteSettings document in the Studio. This will remove the settings document type from the create-menus.
  // __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "sampleType",
      title: "Work Sample Type",
      type: "reference",
      to: { type: "sampleType" },
      validation: Rule => Rule.required()
    },
    {
      name: "fileUpload",
      title: "File Upload",
      type: "file",
      validation: Rule =>
        Rule.custom((fileUpload, context) => {
          const urlExists = context.document.url?.length;
          if (!urlExists && !fileUpload) {
            return "Either File Upload OR a URL is required to create a work sample record";
          }
          if (urlExists && fileUpload) {
            return "You can't have a File Upload AND a URL.";
          }

          return true;
        })
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      validation: Rule =>
        Rule.custom((url, context) => {
          const urlExists = url?.length;
          if (!urlExists && !context.document.fileUpload) {
            return "Either File Upload OR a URL is required to create a work sample record";
          }
          if (urlExists && context.document.fileUpload) {
            return "You can't have a File Upload AND a URL.";
          }

          return true;
        })
    }
  ]
};
