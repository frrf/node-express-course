const {writeFile} = require('fs').promises
const os = require('os')
const {singleVariable} = require('./practice2')

const start = async () => {
  try {
    await writeFile(
      './content/practice.txt'
      ,singleVariable, 
      {flag: "a"}
    )
    console.log('sentence written');
    await writeFile(
      './content/practice.txt',
      os.userInfo().username,
      {flag: "a"}
    )
    console.log('username written');
  } catch (error) {
    console.log(error);
  }
}

start();