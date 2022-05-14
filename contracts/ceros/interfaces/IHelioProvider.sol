// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

interface IHelioProvider {
    /**
     * Events
     */

    event Deposit(address indexed account, uint256 amount);

    event Claim(address indexed recipient, uint256 amount);

    event Withdrawal(
        address indexed owner,
        address indexed recipient,
        uint256 amount
    );

    event ChangeVault(address vault);

    event ChangeDex(address dex);

    event ChangePool(address pool);

    event ChangeDao(address dao);

    event ChangeCeToken(address ceToken);

    event ChangeCeTokenJoin(address ceTokenJoin);

    event ChangeCertToken(address certToken);

    event ChangeCollateralToken(address collateralToken);

    /**
     * Deposit
     */

    // in BNB
    function provide() external payable returns (uint256);

    // in aBNBc
    function provideInABNBc(uint256 amount) external returns (uint256);

    /**
     * Claim
     */

    // claim in aBNBc
    function claimInABNBc(address recipient) external returns (uint256);

    /**
     * Withdrawal
     */

    // BNB
    function release(address recipient, uint256 amount)
        external
        returns (uint256);

    // aBNBc
    function releaseInABNBc(address recipient, uint256 amount)
        external
        returns (uint256);
}
