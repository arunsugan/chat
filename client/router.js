Router.map( function() {
   this.route('home', {
        path: "/"    
   });
   
   this.route('chat', {
        path: '/chat/:chatId'   
   });
});