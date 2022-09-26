import fetch from "node-fetch";


class AutodeskAuth {
    async login(){
        const CLIENT_ID = "Pe3ES6o0tvbPTPEk8Aq8ASy9ziXx13YW";
        const CLIENT_SECRET = "K5Q3LsK2JGgFFNFu"
        var details = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'client_credentials',
            "scope":"bucket:read bucket:create"
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