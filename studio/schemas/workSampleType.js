export default {
  name: "sampleType",
  title: "Work Sample Type",
  type: "document",
  // You probably want to uncomment the next line once you've made a siteSettings document in the Studio. This will remove the settings document type from the create-menus.
  // __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    }
  ]
};
