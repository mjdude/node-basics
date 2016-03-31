// Account object
var account = {
  balance : 0,
  name: '',
};

function deposit(account , amount){
  console.log('Depositing ' + amount + ' into ' + account.name);
  account.balance = account.balance + amount;
  console.log('Deposit sucessful, new balance is ' + account.balance);
}


function withdraw(account , amount){

  console.log('Withdraw ' + amount + ' from ' + account.name);
  account.balance = account.balance - amount;
  console.log('Withdraw sucessful, new balance is ' + account.balance);

}

function getBalance(account){
  console.log('Account balance is ' + account.balance);
}

function openAccount (){

}

deposit(account , 1000);
getBalance(account);
withdraw(account, 121);
getBalance(account);
