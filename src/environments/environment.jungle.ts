const chain = 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473';
export const environment = {
    production: false,
    appName: 'AladinWeb Jungle Testnet',
    network: {
        blockchain: 'ala',
        host: 'jungle2.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Ala: {
        httpEndpoint: 'https://jungle2.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'ALA',
       bp: 'bp.json',
       tokenContract: 'alaio.token',
       totalBalance: 'ALA',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/jungle.png',
       name: {
          big: 'Aladin',
          small: 'Explorer'
       },
       nets: [{ name: 'Mainnet', url: 'https://aladinnetwork.org', active: false },
              { name: 'Jungle', url: 'https://jungle.aladinnetwork.org', active: true },
              { name: 'Europechain', url: 'https://xec.aladinnetwork.org', active: false },
              { name: 'ALA', url: 'https://wax.aladinnetwork.org', active: false }],
       disableNets: false,
       voteDonationAcc: 'lioninjungle',
       disableVoteDonation: false,
       version: '2.2.8',
       producers: 500,
       social: [
         { link: 'https://github.com/ALADINIO/', icon: 'fa-github' },
         { link: 'https://www.facebook.com/ALAwebnet-199076424068961', icon: 'fa-facebook' },
         { link: 'https://www.reddit.com/user/aladinexplorer', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/@AlawebN', icon: 'fa-medium' },
         { link: 'https://twitter.com/AlawebN', icon: 'fa-twitter' },
         { link: 'https://t.me/aladinexplorerdevchat', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};
