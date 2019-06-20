const p = new Promise((resolve,reject) => {
    setTimeout(()=>{
        //resolve(1);
        reject(new Error('something is wrong'));
    },2000);  
});

//next consume
p
.then(result=>{
    console.log('result', result );
})
.catch(err=> console.log('Error:',err.message));
