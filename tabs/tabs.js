class Tabs {
  constructor(options) {
    let defaultOptions = {
      element: '',
      navSelector: '[data-role="tabs-nav"]',
      panesSelector: '[data-role="tabse-panels"]',
      activeClassName: 'active',
    }
    this.options = Object.assign({}, defaultOptions, options)
  }

  bindEvents() {
    
  }

  setDefaultTab() {
  }
}
