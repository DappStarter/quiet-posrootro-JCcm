require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe strike dash soccer evil hunt phone orange gas'; 
let testAccounts = [
"0xea5ae87916799feefe1c3def15463f0f006e72b15a830837eac6827539240a2d",
"0xe82df1b659ddec0485ed8261e0c3cabc57b932650cb6a66f07e893039f282eb9",
"0xd60ef350b27f8b82c6fc5d0e071a38352c61de2b072c26275f8b023f24112fe3",
"0x614b8c59a861e9183851bd973a3dd1be2aff2206d0b746034cc9a20da0b933be",
"0x367cc7186b1fa7bed72c3b1e603a9109b3cb5d08a1129e2079407d57dc9e887d",
"0x264e67940f4c8b7023a6af8edf768d9a31077e8c673fb0a757a7610fdf87c10c",
"0x9739a9c0e49ab5cd7e623881efb7308bcb6958862c452a7ad363d7d2e9b93b01",
"0x992235642789845c3a04167e2d3ecf4cb0e640c27a5ca4b238a9d3cdc3305a82",
"0x514a876d340c4a1a5b1121d395342bc81f3a3eb43a9ce04d82782354f6cf45e1",
"0x29452defe38b8e149e662538e1a633d005b37e7e721309028aba140f51994110"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

