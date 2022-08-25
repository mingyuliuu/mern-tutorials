// OS (Operating System) Module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

/* 
{
  uid: 501,
  gid: 20,
  username: 'mingyuliu',
  homedir: '/Users/mingyuliu',
  shell: '/bin/zsh'
}
*/

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

/*
{
  name: 'Darwin',
  release: '21.2.0',
  totalMem: 8589934592,
  freeMem: 25436160
}
*/
