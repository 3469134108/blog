var posts=["2023/12/09/欢迎来这里！/","2023/12/09/玩客云折腾--搭建网站并在外网访问/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };