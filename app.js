//app.js
import { Token } from 'utils/token.js';
import { Config } from 'utils/config.js';
App({
  onLaunch: function () {
      var token = new Token();
      token.verify();
  },

  onShow:function(){
  
  },
  data: {
    servsers: Config.imgUrl
  }  
})