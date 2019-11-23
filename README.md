# DRMAX Common widget

Base upon which other widgets are built.

It provides:

* mounting template to specified root element
* helper for getting info from meta tags

## Usage

### Package

In your `package.json`:

```
  "devDependencies": {
    "drmax-common-widget": "github:drmaxgit/drmax-lib-js-common-widget#develop",
  }
```

### Code

Use helper for meta tags:

```
export class MyWidget {
  constructor () {
    // Get <meta> tag values
    const metaTags = CommonWidget.getMetaConstants()
    const { myMetaTagValue } = metaTags
    
    // Define template
    this.htmlTemplate = `<div>Simple template with my value ${myMetaTagValue}</div>`
    
    // Create widget
    this.commonWidget = new CommonWidget('my-widget-root-id', this.htmlTemplate, 'my-widget-type')
  }
}
```

In case when even no config is present, widget will use
hardcoded fallback config (basically develop environment).
