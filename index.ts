/// <reference path='./types.d.ts'/>

WebViewer({
    path: './WebViewer/lib',
    initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
  }, document.getElementById('viewer')).then((instance) => {
    // Call all the APIs and enjoy the power of static type checking and auto-fill
    // some namespaces from the definition file:
    var Annotations = instance.Core.Annotations;
    var Actions = instance.Core.Actions;
    var Tools = instance.Core.Tools;

    instance.UI.setTheme('dark');
});