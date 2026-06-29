const express = require('express');
const app = express();

app.get('/', (req , res)=> {
    res.send("Server is ready");

});

app.get('/api/jokes', (req , res)=> {
    
    const jokes = [
        {
            id : 1 , 
            title : 'Full stack is very easy '
        }
    ]

    res.send(jokes);
});


const port = process.env.PORT || 3000 ;

app.listen(port , ()=>{
    console.log(`Server at http://localhost:${port}`);
})