import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>ReactGenie Developer Study</span>,
  project: {
    link: 'https://github.com/shiyt0313/ReactGenieDeveloperStudy',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/shiyt0313/ReactGenieDeveloperStudy',
  footer: {
    text: 'ReactGenie for Developer',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – ReactGenieDEV'
    }
  },
  
}

export default config
