"use strict";(self.webpackChunkinteractive_comments_section=self.webpackChunkinteractive_comments_section||[]).push([[542],{542:(A,c,r)=>{r.r(c),r.d(c,{CommentsModule:()=>w});var s=r(583),a=r(353),e=r(639);const i_currentUser={image:{png:"assets/images/avatars/image-juliusomo.png",webp:"assets/images/avatars/image-juliusomo.webp"},username:"juliusomo"},i_comments=[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:{png:"assets/images/avatars/image-amyrobson.png",webp:"assets/images/avatars/image-amyrobson.webp"},username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:{png:"assets/images/avatars/image-maxblagun.png",webp:"assets/images/avatars/image-maxblagun.webp"},username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:{png:"assets/images/avatars/image-ramsesmiron.png",webp:"assets/images/avatars/image-ramsesmiron.webp"},username:"ramsesmiron"}},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:{png:"assets/images/avatars/image-juliusomo.png",webp:"assets/images/avatars/image-juliusomo.webp"},username:"juliusomo"}}]}];let u=(()=>{class t{constructor(){}getComments(){return i_comments}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();function p(t,o){1&t&&(e.TgZ(0,"button",14),e._UZ(1,"i",15),e._uU(2,"Reply"),e.qZA())}function l(t,o){1&t&&(e.TgZ(0,"button",16),e._UZ(1,"i",17),e._uU(2,"Delete"),e.qZA())}function g(t,o){1&t&&(e.TgZ(0,"button",18),e._UZ(1,"i",19),e._uU(2,"Edit"),e.qZA())}function d(t,o){if(1&t&&e._UZ(0,"app-comment",22),2&t){const n=o.$implicit,m=e.oxw(2);e.Q6J("comment",n)("currentUser",m.currentUser)}}function C(t,o){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,d,1,2,"app-comment",21),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.comment.replies)}}const b=function(t){return{"background-image":t}};let f=(()=>{class t{constructor(){}ngOnInit(){console.log("comment",this.comment)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comment"]],inputs:{comment:"comment",currentUser:"currentUser"},decls:22,vars:11,consts:[[1,"comment"],[1,"comment-header"],[1,"comment-user-avatar",3,"ngStyle"],[1,"comment-username"],[1,"comment-time"],[1,"comment-body"],["role","group","aria-label","Score it",1,"comment-score"],["type","button",1,"button","comment-score-btn"],[1,"comment-score-text"],[1,"comment-tools"],["class","button button-reply","type","button",4,"ngIf"],["class","button button-delete","type","button",4,"ngIf"],["class","button button-edit","type","button",4,"ngIf"],["class","comment-replies-container",4,"ngIf"],["type","button",1,"button","button-reply"],[1,"icon","reply"],["type","button",1,"button","button-delete"],[1,"icon","delete"],["type","button",1,"button","button-edit"],[1,"icon","edit"],[1,"comment-replies-container"],[3,"comment","currentUser",4,"ngFor","ngForOf"],[3,"comment","currentUser"]],template:function(n,m){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"span",3),e._uU(4),e.qZA(),e.TgZ(5,"span",4),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"button",7),e._uU(12,"+"),e.qZA(),e.TgZ(13,"span",8),e._uU(14),e.qZA(),e.TgZ(15,"button",7),e._uU(16,"-"),e.qZA(),e.qZA(),e.TgZ(17,"div",9),e.YNc(18,p,3,0,"button",10),e.YNc(19,l,3,0,"button",11),e.YNc(20,g,3,0,"button",12),e.qZA(),e.qZA(),e.YNc(21,C,2,1,"div",13)),2&n&&(e.xp6(2),e.Q6J("ngStyle",e.VKq(9,b,m.comment.user.image.png?"url("+m.comment.user.image.png+")":null)),e.xp6(2),e.Oqu(m.comment.user.username),e.xp6(2),e.Oqu(m.comment.createdAt),e.xp6(3),e.hij(" ",m.comment.content," "),e.xp6(5),e.Oqu(m.comment.score),e.xp6(4),e.Q6J("ngIf",m.currentUser.username!==m.comment.user.username),e.xp6(1),e.Q6J("ngIf",m.currentUser.username===m.comment.user.username),e.xp6(1),e.Q6J("ngIf",m.currentUser.username===m.comment.user.username),e.xp6(1),e.Q6J("ngIf",m.comment.replies))},directives:[s.PC,s.O5,s.sg,t],styles:["[_nghost-%COMP%]{display:block}"]}),t})();const v=function(t){return{"background-image":t}};let y=(()=>{class t{constructor(){}ngOnInit(){console.log(this.currentUser)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comments-box"]],inputs:{currentUser:"currentUser"},decls:7,vars:3,consts:[[1,"comment-box"],[1,"comment-user-avatar",3,"ngStyle"],[1,"input-area"],["name","content","rows","3","id","content","placeholder","Add a comment..."],[1,"comment-tools",2,"float","right"],["type","button",1,"button","button-send"]],template:function(n,m){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"textarea",3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"button",5),e._uU(6,"Send"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngStyle",e.VKq(1,v,m.currentUser.image.png?"url("+m.currentUser.image.png+")":null)))},directives:[s.PC],styles:["[_nghost-%COMP%]{display:block}"]}),t})();function _(t,o){if(1&t&&e._UZ(0,"app-comment",3),2&t){const n=o.$implicit,m=e.oxw();e.Q6J("comment",n)("currentUser",m.currentUser)}}function Z(t,o){if(1&t&&e._UZ(0,"app-comments-box",4),2&t){const n=e.oxw();e.Q6J("currentUser",n.currentUser)}}let U=(()=>{class t{constructor(){this.comments=[],this.currentUser=i_currentUser}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comments-container"]],inputs:{comments:"comments"},decls:3,vars:2,consts:[[1,"comments-container"],[3,"comment","currentUser",4,"ngFor","ngForOf"],[3,"currentUser",4,"ngIf"],[3,"comment","currentUser"],[3,"currentUser"]],template:function(n,m){1&n&&(e.TgZ(0,"div",0),e.YNc(1,_,1,2,"app-comment",1),e.YNc(2,Z,1,1,"app-comments-box",2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",m.comments),e.xp6(1),e.Q6J("ngIf",m.currentUser))},directives:[s.sg,s.O5,f,y],styles:["[_nghost-%COMP%]{display:block}"]}),t})();const h=[{path:"",component:(()=>{class t{constructor(n){this.commentsService=n,this.comments=[],this.comments=this.commentsService.getComments()}ngOnInit(){console.log("comments",this.comments)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comments"]],decls:2,vars:1,consts:[[1,"comments"],[3,"comments"]],template:function(n,m){1&n&&(e.TgZ(0,"section",0),e._UZ(1,"app-comments-container",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("comments",m.comments))},directives:[U],styles:["[_nghost-%COMP%]{display:block}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[u],imports:[[s.ez,T]]}),t})()}}]);