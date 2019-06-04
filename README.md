# DRMAX Common widget

Base upon which other widgets are built.

It provides:

* mounting template to specified root element
* helper for getting info from meta tags
* LOGni wrapper that prepends specified widget type

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

    // Use LOGni
    this.logniWrapper = this.commonWidget.getLogniWrapper()
    this.logniWrapper.info('My Widget is READY')
  }
}
```

## Usage of LOGni

Place following code in your HTML where widgets will be present:

```
<!-- LOGni -->
<script>
    window.logniMask = '__LOGNI_MASK__'
    window.logniLogUrl = '__URL_LOGNILOG__'
    window.logniStdErr = '__LOGNI_STDERR__'
    window.logniRelease = '__VERSION__'
    window.logniEnvironment = '__ENV__'
    window.logniName = 'drmax-cz'
</script>
```

In case LOGni is not initialized yet, widgets will init LOGni
with this config.

In case when even no config is present, widget will use
hardcoded fallback config (basically develop environment).
