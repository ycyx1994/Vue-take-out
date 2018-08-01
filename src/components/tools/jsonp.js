import axios from 'axios';

axios.jsonp = (url, params, callback) => {
  // 1. 根据 URL和 params 拼接字符串
  url += '?';
  for (let k in params) {
    // url += k + '=' + params[k] + '&';
    url += k + '=' + params[k] + '&'
  };

  // 动态创建 script 标签
  const JSONP = document.createElement('script');
  JSONP.type = 'text/javascript';
  JSONP.src = url + `callback=jsonCallback`;
  document.head.appendChild(JSONP);
  return new Promise((resolve, reject) => {
    window['jsonCallback'] = function (data) {
      // data 就是 JSONP接口返回的数据
      // 调用resolve获取数据
      resolve(data)
      // 删除掉添加给window的属性
      delete window['jsonCallback']
      // 移除 script 标签
      document.head.removeChild(JSONP)
    }
  })
  // callback()
}
