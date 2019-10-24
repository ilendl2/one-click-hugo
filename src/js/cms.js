import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import AboutPreview from "./cms-preview-templates/about";
import BlogPreview from "./cms-preview-templates/blog";
import ContactPreview from "./cms-preview-templates/contact";
import EventsPreview from "./cms-preview-templates/events";
import MinistriesPreview from "./cms-preview-templates/ministries";
import WorshipPreview from "./cms-preview-templates/worship";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("events", EventsPreview);
CMS.registerPreviewTemplate("ministries", MinistriesPreview);
CMS.registerPreviewTemplate("worship", WorshipPreview);
CMS.init();
