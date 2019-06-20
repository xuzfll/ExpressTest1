
const p = new Promise((resolve)=>{
    setTimeout(() => {       
        resolve({id:1,name:'ABC'});          
    }, 1000);  
});

p.then(result => console.log(result));

const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async Operation 3...');
        //resolve(2);  
        reject(new Error('something is wrong'));  
    }, 2000);
 });

const P2 =Promise.reject(new Error('some reason error'));
 P2.catch(error => console.log(error)); 

 //Promise.all([p,p3])  'until all fulfilled
 Promise.race([p,p3])   //any one fulfilled'
 .then(result=> console.log(result))
 .catch(err => console.log('Error1:',err));

