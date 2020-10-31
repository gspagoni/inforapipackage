# inforapipackage

this package is meant to handle ionapi file of type backend service

# Installation

` npm install inforapipackege -D `

it is composed by 4 functions

- InitializeApiFile(filename)
- Status
- Message
- RetunrTokenObj

<hr>

## InitializeApiFile(filename)
this function analyzes the filename checking if it is of type ionapi and 
if it is of type backend service
if all checks are passed, set the Status to 'OK' and the Message with the text
'All checks passed', on the contrary if there are errors, it set the Status
to 'KO' and the Message to the error message

```
const infor = require('inforapipackage');
......
app.listen(3000, () => {
    infor.InitializeApiFile('./filename.ionapi');
    if(infor.Status() == 'KO'){
        console.log(infor.Message())
        exit(1)
    }else{
        console.log('Server running at http://localhost:3000')
    }
})
```

## Status
this function return the status setted by the InitializeApiFile function

values:
- OK : all checks passed
- KO : errors

```
    if(infor.Status() == 'KO'){
        console.log(infor.Message())
        exit(1)
    }else{
        console.log('Server running at http://localhost:3000')
    }
```

## Message
this function print the message setted by the InitializeApiFile function
if the check of the file fail, then the Message function print the error message
if the check of the file pass, then the Message function print the text 'All checks passed'

```
    console.log(infor.Message())
```

## RetunrTokenObj
this function return an object that contains the token
you can use in an async function or as a promise

```
async

app.get('/', async (req,res) =>{
    const RTO = await infor.ReturnTokenObj();
    const token = RTO.access_token
    makeApiCall(token...)
})

promise

    infor.ReturnTokenObj()
    .then(rto => console.log(rto.access_token))
    .catch(e => console.error(e))
```

![image](https://user-images.githubusercontent.com/22134155/97788174-39f11c80-1bb7-11eb-8fd7-725c48b5b87d.png)
