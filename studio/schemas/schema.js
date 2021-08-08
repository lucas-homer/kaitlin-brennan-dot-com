// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import blockText from "./blockText";
import category from "./category";
import mainImage from "./mainImage";

import post from "./post";
import author from "./author";
import siteSettings from "./siteSettings";
import workSample from "./workSample";
import sampleType from "./workSampleType";
import service from "./service";
import skillset from "./skillset";

// some schemas for customizing copy in a few pages
import aboutPage from "./aboutPage";
import landingPage from "./landingPage";
import workSamplesPage from "./workSamplesPage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    blockText,
    mainImage,
    siteSettings,
    workSample,
    sampleType,
    service,
    skillset,
    aboutPage,
    landingPage,
    workSamplesPage
  ])
});
