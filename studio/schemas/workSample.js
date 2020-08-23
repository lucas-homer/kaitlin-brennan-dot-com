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
      name: "pdfUpload",
      title: "PDF Upload",
      type: "file",
      validation: Rule => Rule.required()
    }
  ]
};
