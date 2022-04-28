const hre = require("hardhat");

const { VAT,
    SPOT,
    aBNBc,
    REAL_ABNBC,
    USB,
    UsbJoin,
    aBNBcJoin,
    REALaBNBcJoin,
    Oracle,
    REALOracle,
    JUG,
} = require('../../addresses.json');
const {ethers} = require("hardhat");
const {BN} = require("@openzeppelin/test-helpers");

async function main() {
    console.log('Running deploy script');

    let wad = "000000000000000000", // 18 Decimals
        ray = "000000000000000000000000000", // 27 Decimals
        rad = "000000000000000000000000000000000000000000000"; // 45 Decimals

    let collateral = ethers.utils.formatBytes32String("aBNBc");
    let collateral2 = ethers.utils.formatBytes32String("aBNBc2");

    this.Vat = await hre.ethers.getContractFactory("Vat");
    this.Spot = await hre.ethers.getContractFactory("Spotter");
    this.Usb = await hre.ethers.getContractFactory("Usb");
    this.GemJoin = await hre.ethers.getContractFactory("GemJoin");
    this.UsbJoin = await hre.ethers.getContractFactory("UsbJoin");
    this.Oracle = await hre.ethers.getContractFactory("Oracle");
    this.Interaction = await hre.ethers.getContractFactory("DAOInteraction");
    this.Jug = await hre.ethers.getContractFactory("Jug");

    console.log("Setting permissions");

    let oracle = this.Oracle.attach(Oracle);
    let oracle2 = this.Oracle.attach(REALOracle);
    await oracle.setPrice("400" + wad); // 2$, mat = 80%, 2$ * 80% = 1.6$ With Safety Margin
    await oracle2.setPrice("300" + wad); // 400$, mat = 80%, 400$ * 80% = 320$ With Safety Margin

    console.log("Vat...");

    let vat = this.Vat.attach(VAT);
    await vat.rely(aBNBcJoin);
    await vat.rely(SPOT);
    await vat.rely(UsbJoin);
    await vat.rely(JUG);

    await vat["file(bytes32,uint256)"](ethers.utils.formatBytes32String("Line"), "500000" + rad);
    await vat["file(bytes32,bytes32,uint256)"](collateral, ethers.utils.formatBytes32String("line"), "50000" + rad);
    await vat["file(bytes32,bytes32,uint256)"](collateral, ethers.utils.formatBytes32String("dust"), "1" + rad);
    await vat["file(bytes32,bytes32,uint256)"](collateral2, ethers.utils.formatBytes32String("line"), "50000" + rad);
    await vat["file(bytes32,bytes32,uint256)"](collateral2, ethers.utils.formatBytes32String("dust"), "1" + rad);

    console.log("Spot...");
    let spot = this.Spot.attach(SPOT);
    await spot["file(bytes32,bytes32,address)"](collateral, ethers.utils.formatBytes32String("pip"), oracle.address);
    await spot["file(bytes32,bytes32,uint256)"](collateral, ethers.utils.formatBytes32String("mat"), "1250000000000000000000000000"); // Liquidation Ratio

    await spot["file(bytes32,bytes32,address)"](collateral2, ethers.utils.formatBytes32String("pip"), oracle2.address);
    await spot["file(bytes32,bytes32,uint256)"](collateral2, ethers.utils.formatBytes32String("mat"), "1250000000000000000000000000"); // Liquidation Ratio

    await spot["file(bytes32,uint256)"](ethers.utils.formatBytes32String("par"), "1" + ray); // It means pegged to 1$
    await spot.poke(collateral);
    await spot.poke(collateral2);

    console.log("Jug...");
    let BR = new BN("1000000003022266000000000000").toString(); //10% APY
    let jug = this.Jug.attach(JUG);
    await jug["file(bytes32,uint256)"](ethers.utils.formatBytes32String("base"), BR); // 1% Yearly

    await jug["file(bytes32,address)"](ethers.utils.formatBytes32String("vow"), vat.address); //FIXME

    console.log("Usb...");
    let usb = this.Usb.attach(USB);
    await usb.rely(UsbJoin);

    console.log('Finished');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });