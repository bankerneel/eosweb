const chain = 'd4a9ba5d83e8b94c0aa2bb5c7da9ffa8b03330206c6f572557e995af00d031a9';
export const environment = {
    production: true,
    appName: 'AladinWeb',
    network: {
        blockchain: 'eos',
        host: 'bp.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'https://bp.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'ALA',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'ALA',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/eosweb.png',
       name: {
          big: 'Aladin',
          small: 'Explorer'
       },
       nets: [{ name: 'Mainnet', url: 'https://aladinnetwork.org', active: true },
              { name: 'Jungle', url: 'https://jungle.aladinnetwork.org', active: false },
              { name: 'Europechain', url: 'https://xec.aladinnetwork.org', active: false },
              { name: 'ALA', url: 'https://wax.aladinnetwork.org', active: false }],
       disableNets: false,
       voteDonationAcc: 'eoswebnetbp1',
       disableVoteDonation: false,
       version: '2.2.8',
       producers: 1000,
       social: [
         { link: 'https://github.com/ALADINIO/', icon: 'fa-github' },
         { link: 'https://www.facebook.com/EOSwebnet-199076424068961', icon: 'fa-facebook' },
         { link: 'https://www.reddit.com/user/eosweb', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/@EoswebN', icon: 'fa-medium' },
         { link: 'https://twitter.com/EoswebN', icon: 'fa-twitter' },
         { link: 'https://t.me/eoswebdevchat', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};