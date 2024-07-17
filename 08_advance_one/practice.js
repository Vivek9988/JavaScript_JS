let data = new Promise (function(resolve,reject){
    console.log("hello vivek");
 resolve("ss");
    

})

async function user(){
    let vivek = await data;
    console.log(vivek)
    //console.log("hello")

}

async function user2(){
    try{
        const response = await data;
        console.log(response);

    }
    catch (error){
        console.log(error)
    }
}
user();
user2();

