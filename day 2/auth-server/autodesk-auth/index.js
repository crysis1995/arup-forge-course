import fetch from "node-fetch";


class AutodeskAuth {
    async login(){
        const CLIENT_ID = "g8rxvku2doYCq2NgssfAMWANwaXjP3MP";
        const CLIENT_SECRET = "kvGPq9mNuMxcLdpB"
        var details = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'client_credentials',
            "scope":"bucket:read bucket:create data:read data:write data:create"
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        const response = await fetch("https://developer.api.autodesk.com/authentication/v1/authenticate",{
            method:"POST", 
            body:formBody, 
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        return await response.json()
    }
}

export default AutodeskAuth