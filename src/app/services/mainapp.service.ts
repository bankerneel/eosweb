import { Injectable, EventEmitter, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class MainService {

  //alaRateReady: EventEmitter<any> = new EventEmitter();
  alaRateReady = {};
  votesToRemove;

  WINDOW: any = window;

  alaConfig = {
    chainId: "",
    httpEndpoint: "",
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    /*logger: {
      log: console.log,
      error: console.error
    }*/
  };
  ungerKey = "ALA1111111111111111111111111111111114T1Anm";
  liveTXHide = localStorage.getItem('liveTXHide') ? true : false;
  frontConfig = environment.frontConfig;

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
      this.messageSource.next(message)
  }

  constructor() {}

  setAlaPrice(data){
      this.alaRateReady = data;
  }
  getAlaPrice(){
      return this.alaRateReady;
  }

  sortArray(data) {
      if(!data){
        return;
      }
      let result = [];
      data.sort((a, b) => {
          return b.total_votes - a.total_votes;
      }).forEach((elem, index) => {
          if (elem.producer_key === this.ungerKey){
              return;
          }
          let ala_votes = Math.floor(this.calculateAlaFromVotes(elem.total_votes));
          elem.all_votes = elem.total_votes;
          elem.total_votes = Number(ala_votes).toLocaleString();
          
          result.push(elem);
      });
      return result;
  }

  countRate(data, totalProducerVoteWeight){
      if(!data){
        return;
      }
      this.votesToRemove = data.reduce((acc, cur) => {
            const percentageVotes = cur.all_votes / totalProducerVoteWeight * 100;
            if (percentageVotes * 200 < 100) {
              acc += parseFloat(cur.all_votes);
            }
            return acc;
      }, 0);
      data.forEach((elem, index) => {
        elem.index   = index + 1;
        elem.rate    = (!totalProducerVoteWeight) ? 0 : (elem.all_votes / totalProducerVoteWeight * 100).toLocaleString();
        elem.rewards = (!totalProducerVoteWeight) ? 0 : this.countRewards(elem.all_votes, elem.index, totalProducerVoteWeight);
      });
      
      return data;
  }

  countRewards(total_votes, index, totalProducerVoteWeight){
    let position = index;
    let reward = 0;
    let percentageVotesRewarded = total_votes / (totalProducerVoteWeight - this.votesToRemove) * 100;
     
     if (position < 22) {
       reward = (this.frontConfig.coin === 'ALA') ? reward + 443 : 4909;
     }
     if (this.frontConfig.coin === 'ALA'){
       reward += percentageVotesRewarded * 200;
     }
     if (reward < 100) {
       reward = 0;
     }
     return Math.floor(reward).toLocaleString();
  }

  calculateAlaFromVotes(votes){
      let date = +new Date() / 1000 - 946684800; // 946... start timestamp
      if (this.frontConfig.coin === 'ALA'){
        let weight = parseInt(`${ date / (86400 * 7) }`, 10) / 13;
        return votes / (2 ** weight) / 100000000;
      }
      let weight = parseInt(`${ date / (86400 * 7) }`, 10) / 52; // 86400 = seconds per day 24*3600
      return votes / (2 ** weight) / 10000;
  };
 

  getGlobalNetConfig(){
    if (!this.getCookie("netsConf")){
      this.alaConfig.chainId = "6c74c33ba4a0b34c9bdcbdb9a4ca6a0e35137432bda6ceebb422e3c37ce38c86";
      this.alaConfig.httpEndpoint = "http://bp.cryptolions.io";
      return this.WINDOW.Ala(this.alaConfig);
    }
      let cookie = JSON.parse(this.getCookie("netsConf"));
      let net = localStorage.getItem("netName") || "mainNet";
      this.alaConfig.chainId = cookie[net].chainId;
      this.alaConfig.httpEndpoint = cookie[net].httpEndpoint;
      return this.WINDOW.Ala(this.alaConfig);
  }

  getCookie(name) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  sortBlocks(data){
       if (!data){
           return null;
       }
       data.sort((a, b) => {
           if (a.block_num < b.block_num){
               return 1;
           } else {
               return -1;
           }
       });
       return data;
  }

// end service export
}