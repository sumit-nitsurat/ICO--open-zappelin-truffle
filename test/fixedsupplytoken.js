var Token = artifacts.require("Sample");

contract('Sample', function(accounts) {
  it("should assert true for total supply", function() {
    var token;
    return Token.deployed().then(function(instance){
     token = instance;
     return token.totalSupply.call();
    }).then(function(result){
     assert.equal(result.toNumber(), 1000, 'total supply is wrong');
    })
  });
});

contract('Sample', function(accounts) {
  it("should transfer right token", function() {
    var token;
    return Token.deployed().then(function(instance){
      token = instance;
      return token.transfer(accounts[1], .5);
    }).then(function(){
      return token.balanceOf.call(accounts[0]);
    }).then(function(result){
      assert.equal(result.toNumber(),1000 - .5, 'accounts[0] balance is wrong');
      return token.balanceOf.call(accounts[1]);
    }).then(function(result){
      assert.equal(result.toNumber(), .5, 'accounts[1] balance is wrong');
    })
  });
});

