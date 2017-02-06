/**
 *  安装 babel CLI  
 *  sudo npm install babel-cli -g --registry=https://registry.npm.taobao.org
 * 
 */


let numbers = [1,2,3];
let doublenumbers = numbers.map((number)=> number*2);

console.log(doublenumbers);


/**
 * 编译 代码
 * babel index.js  -o  compiled.js
 * 
 */


/**
 * babel 配置
 * babel 是通过 插件或者预设来编译代码的
 * 安装插件
 * npm install  --save-dev  babel-preset-es2015 --registry=https://registry.npm.taobao.org
 *  修改配文件
 *  "presets":["es2015"],
 */


