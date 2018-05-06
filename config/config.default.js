'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525598065651_742';
  // config.security= {
  //   csrf: {
  //     enable: false,
  //   }
  // },
  // add your config here
  config.middleware = [  ];
  
  config.cors={
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials:true
    
  }

  return config;
};


