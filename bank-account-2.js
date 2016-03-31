// 1. create account function, to add new accounts
// 2. account object, balance and username
// 3. push onto accounts arrray, and return the account

//1. create get account


var accounts = [];

var account2 = {
  balance: 0,
  username: 'account2',
};

var account3 = {
  balance: 0,
  username: 'account3',
};

function createAccount(account){
  accounts.push(account);
  return account;
}

function getAccount(username){
  var matchedAccount;
  console.log('getting account with username ' + username);
  accounts.forEach(function(account){
    console.log('currently checking ' + account.username);
    console.log('searching for ' + username);
    if(account.username === username){
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

function deposit(account , amount){
  console.log('Depositing ' + amount + ' into ' + account.username);
  account.balance = account.balance + amount;
  console.log('Deposit sucessful, new balance is ' + account.balance);
}


function withdraw(account , amount){

  console.log('Withdraw ' + amount + ' from ' + account.username);
  account.balance = account.balance - amount;
  console.log('Withdraw sucessful, new balance is ' + account.balance);

}

function getBalance(account){
  console.log('Account balance is ' + account.balance);
}


var mo = createAccount({
  balance: 0,
  username: 'mo'
});

deposit(mo, 1000);
withdraw(mo, 50);
getBalance(mo);

var existingAccount = getAccount('mo');

console.log(existingAccount);
