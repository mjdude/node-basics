var accounts = [];

function createAccount(account){
  accounts.push(account);
  return account;
}

function getAccount(username){
  var matchedAccount;

  for (var i = 0 ; i < accounts.length ; i++ ){
    if(accounts[i].username === username)
    matchedAccount = account;
  }

  return matchedAccount;
}

function deposit(account , amount){

  if( typeof amount === 'number'){
    console.log('Depositing ' + amount + ' into ' + account.username);
    account.balance = account.balance + amount;
    console.log('Deposit sucessful, new balance is ' + account.balance);
  }
  else{
    console.log('Deposit not accepted, amount was not a number');
  }

}


function withdraw(account , amount){

  if(typeof amount ==='number'){
    console.log('Withdraw ' + amount + ' from ' + account.username);
    account.balance = account.balance - amount;
    console.log('Withdraw sucessful, new balance is ' + account.balance);
  }
  else{
    console.log('Withdrawal not accepted, amount was not a number');
  }

}

function getBalance(account){
  return account.balance;
}


function createBalanceGetter(account){
  return function(){
    return account.balance;
  };
}
