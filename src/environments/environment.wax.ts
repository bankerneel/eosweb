const chain = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
export const environment = {
    production: true,
    appName: 'ALAweb',
    network: {
        blockchain: 'ala',
        host: 'wax.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Ala: {
        httpEndpoint: 'https://wax.cryptolions.io',
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
       logo: '/assets/images/aladin.png',
       name: {
          big: 'Aladin',
          small: 'Explorer'
       },
       nets: [{ name: 'Mainnet', url: 'https://aladinnetwork.org', active: false },
              { name: 'Jungle', url: 'https://jungle.aladinnetwork.org', active: false },
              { name: 'Europechain', url: 'https://xec.aladinnetwork.org', active: false },
              { name: 'ALA', url: 'https://wax.aladinnetwork.org', active: true }],
       disableNets: false,
       voteDonationAcc: 'lonprdcr',
       disableVoteDonation: false,
       version: '1.0.0',
       producers: 1000,
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