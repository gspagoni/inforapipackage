/**
 *  NPM PACKAGE : inforApiPackage
 *  
 *  Author  : Giampaolo Spagoni
 *  Title   : Senior Solution Architect (Infor OS Service)
 *  Company : Infor (Koch)
 *  Date    : 31st October 2020
 * 
 *  DESCRIPTION:
 *  check if the 'ionapi' is a valid file downloaded from ION API Gateway
  * if all test are passed return status = OK
 *  if all test are NOT passed return status = KO
 * 
 */
const fs = require('fs')
const path = require('path'); 

var ionapi = "";
var retObj = {
    "ionapi":"",
    "status":"",
    "message":""
}

exports.initializeApiFile = function()
{

    try{
        this.ionapi = fs.readFileSync(path.join(__dirname,"ionapi",ionapiFile), {encoding: 'utf8'})
        if(!this.ionapi.includes('ti') && !this.ionapi.includes('cn') && !this.ionapi.includes('ci') && !this.ionapi.includes('cs'))
        {
            msgText = "Wrong file type. Select a correct <file>.ionapi file..."
            retObj.status = "KO";
            retObj.message = msgText;
            return retObj;        
            }
        if(!this.ionapi.includes('saak') && !this.ionapi.includes('sask'))
        {
            msgText = "Wrong file type. Select a Backend Service <file>.ionapi file..."
            retObj.status = "KO";
            retObj.message = msgText;
            return retObj;        
            }
        // format the response in JSON
        this.ionapi = JSON.parse(this.ionapi)

    }catch(e){
        retObj.status = "KO";
        retObj.message = e;
        return retObj;        
    }

    // return an object with 2 properties 
    /**
     *  {
     *      "status":"OK",
     *      "message": "All check passed",
     *  }
     */
    retObj.status = "OK";
    retObj.message = "All checks passed";
    ionapi = this.ionapi;
    return retObj;
}
