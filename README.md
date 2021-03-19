# asyncJS
//setTimeout<br/>
setTimeout(func(cb?), timeInMiliSec);

//Promise<br/>
const Promise = new Promise((resolve, reject) => {
    if(error){
        reject('error occurred')
    }else{
        resolve('OK')
    }
});

Promise.then('if OK').catch(error => 'if error occurred')

//Promise.all<br/>
Promise.all([p1, p2, p3]).then(values => console.log(values + 'values = array of promises`responses after they ALL resolve'))

//async/ await<br/>

async function func(){
    await anotherFunc1() // not calling another2 before another1 finishes
    anotherFunc2()
}

//async/ await with fetch<br/>
async function funcWithFetch(){
    const res = await fetch() // not calling data before res finishes
    const data = await res.doSomthing() // not calling another2 before data finishes
    anotherFunc2()
}
