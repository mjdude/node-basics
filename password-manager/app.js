console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();


function createAccount(account){
    var accounts = storage.getItemSync('accounts');
    if(typeof accounts === 'undefined'){
      accounts = [];
    };
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('accounts');
  var mactchAccount;

  // for( var i=0 ; i < accounts.length ; i++ ){
  //   if(accounts[i].name === accountName){
  //     mactchAccount = accounts[i];
  //   }
  // }

  accounts.forEach(function (account){
    if(account.name === accountName){
      mactchAccount = account;
    }
  });

  return mactchAccount;
}

// test functions

// console.log(createAccount({
//   name: 'facebook',
//   username: 'mo',
//   password: 'password',
// }));

console.log(getAccount('facebook'));
