const chain = 'f778f7d2f124b110e0a71245b310c1d0ac1a0edd21f131c5ecb2e2bc03e8fe2e';
export const environment = {
    production: true,
    appName: 'XECweb',
    network: {
        blockchain: 'ala',
        host: 'api.xec.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Ala: {
        httpEndpoint: 'https://api.xec.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'XEC',
       bp: 'xec.json',
       tokenContract: 'alaio.token',
       totalBalance: 'XEC',
       convertToUSD: false,
       customBalance: false,
       logo: '/assets/images/xec.png',
       name: {
          big: 'Aladin',
          small: 'Explorer'
       },
       nets: [{ name: 'Mainnet', url: 'https://aladinnetwork.org', active: false },
              { name: 'Jungle', url: 'https://jungle.aladinnetwork.org', active: false },
              { name: 'Europechain', url: 'https://xec.aladinnetwork.org', active: true },
              { name: 'ALA', url: 'https://wax.aladinnetwork.org', active: false }],
       disableNets: false,
       voteDonationAcc: 'aladinexplorernetbp1',
       disableVoteDonation: true,
       version: '1.0.0',
       producers: 100,
       social: [
         { link: '', icon: 'fa-facebook' },
         { link: '', icon: 'fa-reddit-alien' },
         { link: 'https://github.com/Europechain', icon: 'fa-github' },
         { link: 'https://medium.com/europechain', icon: 'fa-medium' },
         { link: 'https://twitter.com/europechain_', icon: 'fa-twitter' },
         { link: 'https://t.me/europechain', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};