var viewer;
var token = "" //paste you token here
var timeInSeconds = 3600; // Use value provided by Forge Authentication (OAuth) API
var urn = "" //paste your urn code here

function launchViewer() {
var options = {
  env: 'AutodeskProduction',
  api: 'derivativeV2',
  getAccessToken: function(onTokenReady) {
      
      onTokenReady(token, timeInSeconds);
  }
  };  

Autodesk.Viewing.Initializer(options, () => {
  viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer'), { });
  viewer.start();
  
  
  var documentId = 'urn:' + urn;
  Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
});
}

function onDocumentLoadSuccess(doc) {
  var viewables = doc.getRoot().getDefaultGeometry();
  viewer.loadDocumentNode(doc, viewables).then(i => {
    // documented loaded, any action?
  });
}

function onDocumentLoadFailure(viewerErrorCode, viewerErrorMsg) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode + '\n- errorMessage:' + viewerErrorMsg);
}


launchViewer()