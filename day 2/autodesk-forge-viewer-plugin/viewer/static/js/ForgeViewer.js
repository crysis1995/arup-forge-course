var viewer;
const urn = location.pathname.slice(1,-1)

function launchViewer() {
var options = {
  env: 'AutodeskProduction',
  api: 'derivativeV2', // for svf only!
  getAccessToken: async function(onTokenReady) {
    const res = await (await fetch("http://localhost:3000/")).json();
    onTokenReady(res.access_token, res.expires_in);
    }
  };  

Autodesk.Viewing.Initializer(options, () => {
  var config3d = {
    extensions: [MyAwesomeExtension.name]
  };


  viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer'), config3d);
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

function onClickButton(){
  let extenstions = viewer.loadedExtensions
  let extension;

  if(!MyAwesomeExtension.name in extenstions){
    alert("Extension not found!")
  }

  extension = extenstions[MyAwesomeExtension.name]
  console.log(extension)
}