/// <reference path='./webviewer.d.ts'/>

WebViewer({
    path: './WebViewer/lib',
    initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
  }, document.getElementById('viewer')).then(function(instance) {
    // Call all the APIs and enjoy the power of static type checking and auto-fill
    // some namespaces from the definition file:
    var Annotations = instance.Annotations
    var Actions = instance.Actions
    var Tools = instance.Tools

    instance.setTheme('dark')
});