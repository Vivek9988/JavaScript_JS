const promiseOne= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('hello')
        resolve()
    }, 2000);
})


promiseOne
.then(()=>promiseOne)
.then(() => promiseOne)
// async function vivek() {
//     await promiseOne;
//     // console.log('first')
//     await promiseOne;
//     // console.log('second')
    
// }

// vivek()