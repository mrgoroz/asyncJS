//setTimeout
setTimeout(func(cb), timeInMiliSec);

const func = (cb) => {
    if('error'){
        return ('error', undefined)
    }else{
        return (undefined, cb())
    }
};

const cb = (err, res) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
};

//Promise
const Promise = new Promise((resolve, reject) => {
    if(error){
        reject('error occurred')
    }else{
        resolve('OK')
    }
});

Promise.then('if OK').catch(error => 'if error occurred')

//Promise.all
Promise.all([p1, p2, p3]).then(values => console.log(values + 'values = array of promises`responses after they ALL resolve'))

//fetch json
fetch('URL').then(res => {return res.json()}).then(resInJsonFormat => {
    console.log(resInJsonFormat)
});

//async/ await

const asyncFunc = async () => {
    const res = await fetch('URL');
    if(res.status !== 200){
        throw new Error('err');
    }
    const data = await res.json();
} // now asyncFunc is a PROMISE

async function func(){
    await anotherFunc1() // not calling another2 before another1 finishes
    anotherFunc2()
}

//async/ await with fetch
async function funcWithFetch(){
    const res = await fetch() // not calling data before res finishes
    const data = await res.doSomthing() // not calling another2 before data finishes
    anotherFunc2()
}

//callback hell
//solve it with chaining promises, async await or promise.all

//chaining promises
Promise.then({
    return anotherPromise()
}).then().catch(err=>{})