console.log('Before Loading');
// getUser(1,(user)=>{
//     getRepositories(user.gitHubUsername, (repos)=>{
//         getCommits(repos[0], (commits)=>{
//             console.log(commits);
//         })
//     })
// });

// const p = getUser(1);
// p.then(user=> console.log(user));

// getUser(1).then(user=>getRepositories(user.gitHubUsername))
// .then(repos=>getCommits(repos[0]))
// .then(commits=>console.log('commits',commits))
// .catch(err => console.log('Error:', err.message));

async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log('commits',commits);
    }
    catch(err){
        console.log('Error:', err.message);
    }    
}
displayCommits(); 

console.log('After Loading');

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('Reading a user from database...');
            resolve({id:id, gitHubUsername:'zheng'});         
        },2000);  
    });   
}

//function getUser(id,callback){
    // setTimeout(() => {
    //     console.log('Reading a user from database...');
    //     callback({id:id, gitHubUsername:'zheng'});
    // }, 2000);
//};

function getRepositories(username){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Reading repositories from gitHub...');
            //resolve(['repo1','repo2','repo3']);
            reject(new Error('something is wrong'));
        }, 2000);   
    });   
}

// function getRepositories(username,callback){
//     setTimeout(() => {
//         console.log('Reading repositories from gitHub...');
//         callback(['repo1','repo2','repo3']);
//     }, 2000);    
// }

function getCommits(repo){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling gitHub API...');
            resolve(['commit1']);
        }, 2000); 
    });
}

// function getCommits(repo,callback){
//     setTimeout(() => {
//         console.log('Calling gitHub API...');
//         callback(['commit1']);
//     }, 2000); 
// }
