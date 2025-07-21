// style-dictionary.config.js
import StyleDictionary from 'style-dictionary';

export default {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "tokens/",
      files: [{
        destination: "variables.css",
        format: "css/variables"
      }]
    }
  }
};
