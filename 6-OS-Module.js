const os = require ('os');

//info about current user

const user = os.userInfo();
console.log(user);


//uptime of your system

console.log('Uptime of system in seconds: ', os.uptime());

const CurrentOS = {
    name: os.type(),
    release: os.release(),
    free_memory: os.freemem(),
    total_memory: os.totalmem()
}

console.log(CurrentOS);
