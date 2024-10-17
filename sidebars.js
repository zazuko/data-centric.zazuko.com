/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  aboutSidebar: [{ type: 'autogenerated', dirName: 'about' }],
  rdfjsSidebar: [{ type: 'autogenerated', dirName: 'rdfjs' }],
  workflowsSidebar: [{ type: 'autogenerated', dirName: 'workflows' }],
  apisSidebar: [{ type: 'autogenerated', dirName: 'apis' }],
  cubesSidebar: [{ type: 'autogenerated', dirName: 'cubes' }],
  appsSidebar: [{ type: 'autogenerated', dirName: 'apps' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
