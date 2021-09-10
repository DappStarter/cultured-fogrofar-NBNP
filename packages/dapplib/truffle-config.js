require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain social guess nature sunset seminar'; 
let testAccounts = [
"0x9f7a4809b629da549d0633b01aa98d5652875b92abff2a399853cf37361cda32",
"0xfb473ae024588d7a6168dca7fbae60ea2924503473d3adbf94660f6135adda92",
"0xe067c1f3813d003fd891682616c184002bf25ca2ee313109b498fe63fa971f90",
"0x2cdb8a7b71a9c331f2bd982cdb69efaf787c21a572cc990ee167fa3ddbf28360",
"0x7539e1314fa8ba34e771da62534581cf56eaafc395ed7bb231e14f4ff5e69b27",
"0x994f58dcb520f02c24d0b78cbf9b0fa9333fb8037dc9a8345cd211c950522f73",
"0x847af88d5f96d5f7464600cb065bfd04fe523d93091ba4f6b3c059c8c2cc58f7",
"0x4f188a107b8ab0ae482d9f00fe9d24f024ee2d251290102b4e84b4060e47bbff",
"0x846f48255e33b0de04fa7109b3ddf1adb3f1397df2622e0418f55814a658e048",
"0xc80889eb377139225b60ea87a39468dc8136e6d2682a38887274a215f434c085"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

