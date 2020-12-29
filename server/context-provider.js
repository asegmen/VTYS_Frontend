/* eslint-disable import/no-unresolved */
import { SheetsRegistry } from 'jss';

// A theme with custom primary and secondary color.
// It's optional.

function createPageContext() {
  return {
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
  };
}

export default function getPageContext() {
  return createPageContext();
}
