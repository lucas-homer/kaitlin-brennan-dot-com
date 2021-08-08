export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  // You probably want to uncomment the next line once you've made a siteSettings document in the Studio. This will remove the settings document type from the create-menus.
  // __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "heroButton",
      title: "Hero Button",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
};
