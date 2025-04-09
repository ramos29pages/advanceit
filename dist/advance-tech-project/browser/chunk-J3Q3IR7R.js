import{a as R,b as B,d as H,e as k,f as q,g as U,h as Y,l as z,m as j,n as K,o as Q,p as J,r as X}from"./chunk-G44AAQX3.js";import{a as O}from"./chunk-H2AYGHIH.js";import"./chunk-CMP2H2SQ.js";import{a as I}from"./chunk-BO2KBVDL.js";import{a as A}from"./chunk-E36DOFVW.js";import{a as G}from"./chunk-KA2BKXIT.js";import{Ba as F,Ia as L,t as P,z as V}from"./chunk-SMRGLSST.js";import"./chunk-3KYDQIWA.js";import{d as W,e as D}from"./chunk-OHR55TIM.js";import{i as S,m as C}from"./chunk-YA2IYRUJ.js";import{$a as h,Ab as E,Db as p,Eb as c,Fb as f,Ga as a,Qa as y,Va as w,Z as d,_ as m,eb as t,fb as i,gb as b,jb as M,nb as N,xb as v,yb as o,zb as T}from"./chunk-VC6KCMQN.js";function ne(s,g){if(s&1&&(t(0,"option",26),o(1),i()),s&2){let r=g.$implicit;h("value",r),a(),T(r)}}var _=class s{email="";firstName="";lastName="";companyName="";solution="";phone="";state="";referral="";dataProtection=!1;solutions=["Consulting","Outsourcing","Development","Support"];onSubmit(){console.log("Form submitted:",{email:this.email,firstName:this.firstName,lastName:this.lastName,companyName:this.companyName,solution:this.solution,phone:this.phone,state:this.state,referral:this.referral,dataProtection:this.dataProtection}),alert("Thank you! Your form has been submitted.")}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=y({type:s,selectors:[["app-growth-efforts"]],decls:52,vars:11,consts:[["growthForm","ngForm"],[1,"bg-purple-700","py-16","px-4","text-white"],[1,"max-w-6xl","mx-auto","grid","grid-cols-1","md:grid-cols-2","gap-8","items-start"],[1,"text-2xl","md:text-3xl","font-extrabold","uppercase","mb-6"],[1,"space-y-3","text-base","leading-relaxed","list-disc","list-inside"],[1,"bg-white","rounded-lg","shadow-lg","p-6","text-gray-800"],[1,"text-xl","md:text-2xl","font-extrabold","uppercase","text-gray-800","mb-2"],[1,"text-sm","text-gray-600","mb-4"],["href","#",1,"text-blue-600","font-semibold"],[1,"space-y-4",3,"ngSubmit"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["type","email","name","email","placeholder","Company Email*","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["type","text","name","firstName","placeholder","First name*","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["type","text","name","lastName","placeholder","Last name*","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["type","text","name","companyName","placeholder","Company name*","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["name","solution","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","name","phone","placeholder","Phone number*","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["type","text","name","state","placeholder","State*","required","",1,"border","border-gray-300","rounded","p-2","focus:outline-none",3,"ngModelChange","ngModel"],["type","text","name","referral","placeholder","How did you hear about us?",1,"border","border-gray-300","rounded","p-2","focus:outline-none","md:col-span-2",3,"ngModelChange","ngModel"],[1,"flex","items-center","space-x-2","text-sm","text-gray-700","mt-2"],["type","checkbox","name","dataProtection","required","",1,"w-4","h-4",3,"ngModelChange","ngModel"],["for","dataProtection",1,"text-gray-600"],[1,"bg-gray-100","p-4","rounded","mt-2","text-xs","text-gray-500"],["type","submit",1,"bg-purple-700","text-white","px-6","py-2","rounded","shadow","mt-4","hover:bg-purple-800","transition",3,"disabled"],[3,"value"]],template:function(r,n){if(r&1){let l=M();t(0,"section",1)(1,"div",2)(2,"div")(3,"h2",3),o(4," HOW CAN OUR SDRS HELP YOU? "),i(),t(5,"ul",4)(6,"li"),o(7,"Qualifying leads"),i(),t(8,"li"),o(9,"Driving lead generation"),i(),t(10,"li"),o(11,"Handling expert communications (via email, chat, or social media)"),i(),t(12,"li"),o(13,"Data Analysis to optimize reach"),i(),t(14,"li"),o(15,"Prospect Nurturing"),i(),t(16,"li"),o(17,"Meeting/exceeding sales quotas"),i(),t(18,"li"),o(19,"Placing all notations in your CMS or systems"),i()()(),t(20,"div",5)(21,"h3",6),o(22," Are you interested in supercharging your growth efforts? "),i(),t(23,"p",7),o(24," If you want to discuss a career with Lean Solutions Group "),t(25,"a",8),o(26,"Click Here."),i()(),t(27,"form",9,0),N("ngSubmit",function(){return d(l),m(n.onSubmit())}),t(29,"div",10)(30,"input",11),f("ngModelChange",function(e){return d(l),c(n.email,e)||(n.email=e),m(e)}),i(),t(31,"input",12),f("ngModelChange",function(e){return d(l),c(n.firstName,e)||(n.firstName=e),m(e)}),i(),t(32,"input",13),f("ngModelChange",function(e){return d(l),c(n.lastName,e)||(n.lastName=e),m(e)}),i(),t(33,"input",14),f("ngModelChange",function(e){return d(l),c(n.companyName,e)||(n.companyName=e),m(e)}),i(),t(34,"select",15),f("ngModelChange",function(e){return d(l),c(n.solution,e)||(n.solution=e),m(e)}),t(35,"option",16),o(36,"Select solution*"),i(),w(37,ne,2,2,"option",17),i(),t(38,"input",18),f("ngModelChange",function(e){return d(l),c(n.phone,e)||(n.phone=e),m(e)}),i(),t(39,"input",19),f("ngModelChange",function(e){return d(l),c(n.state,e)||(n.state=e),m(e)}),i(),t(40,"input",20),f("ngModelChange",function(e){return d(l),c(n.referral,e)||(n.referral=e),m(e)}),i()(),t(41,"div",21)(42,"input",22),f("ngModelChange",function(e){return d(l),c(n.dataProtection,e)||(n.dataProtection=e),m(e)}),i(),t(43,"label",23),o(44," I read and accept the "),t(45,"a",8),o(46,"data protection policy"),i(),o(47,"* "),i()(),t(48,"div",24),o(49," protected by reCAPTCHA "),i(),t(50,"button",25),o(51," LET'S TALK "),i()()()()()}if(r&2){let l=v(28);a(30),p("ngModel",n.email),a(),p("ngModel",n.firstName),a(),p("ngModel",n.lastName),a(),p("ngModel",n.companyName),a(),p("ngModel",n.solution),a(3),h("ngForOf",n.solutions),a(),p("ngModel",n.phone),a(),p("ngModel",n.state),a(),p("ngModel",n.referral),a(2),p("ngModel",n.dataProtection),a(8),h("disabled",!l.valid)}},dependencies:[C,S,X,Y,j,K,B,R,z,H,k,Q,J,U,q],encapsulation:2})};function ie(s,g){if(s&1&&(t(0,"div",5)(1,"div",6),b(2,"fa-icon",7),i(),t(3,"h3",8),o(4),i(),t(5,"p",9),o(6),i()()),s&2){let r=g.$implicit;a(2),h("icon",r.icon),a(2),E(" ",r.title," "),a(2),E(" ",r.description," ")}}var x=class s{faChalkboardTeacher=F;faUserFriends=V;faBullseye=P;faAward=L;differences=[{icon:this.faChalkboardTeacher,title:"Customized Training",description:"SDRs become experts in your business, fast."},{icon:this.faUserFriends,title:"Social Selling Pros Training",description:"Turn LinkedIn into a lead generation machine."},{icon:this.faBullseye,title:"AI-Powered Targeting",description:"Find the perfect prospects, every time."},{icon:this.faAward,title:"Top Talent, Day 1 Results",description:"Get bilingual, college-educated professionals driving sales immediately."}];static \u0275fac=function(r){return new(r||s)};static \u0275cmp=y({type:s,selectors:[["app-sdr-differences"]],decls:6,vars:1,consts:[[1,"py-16","px-4","bg-white","text-center"],[1,"max-w-6xl","mx-auto"],[1,"text-2xl","md:text-3xl","font-extrabold","uppercase","text-purple-700","mb-12"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-8"],["class","bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-3",4,"ngFor","ngForOf"],[1,"bg-white","shadow-md","rounded-lg","p-6","flex","flex-col","items-center","space-y-3"],[1,"w-12","h-12","bg-purple-100","text-purple-700","rounded","flex","items-center","justify-center"],[1,"text-xl",3,"icon"],[1,"text-lg","font-semibold","text-gray-800","mt-2"],[1,"text-sm","text-gray-600"]],template:function(r,n){r&1&&(t(0,"section",0)(1,"div",1)(2,"h2",2),o(3," What Makes Our SDRs Different? "),i(),t(4,"div",3),w(5,ie,7,3,"div",4),i()()()),r&2&&(a(5),h("ngForOf",n.differences))},dependencies:[C,S,D,W],encapsulation:2})};var ee=class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=y({type:s,selectors:[["app-sales"]],decls:6,vars:0,consts:[["backgroundImage","https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63b2e98a6095cb46ef32e3f2_LSG_WebAsset_Hero_BusinessDevelopment_DSC00063.avif","title","HIRE SALES DEVELOPMENT REPS TO FUEL YOUR GROWTH AND INCREASE REVENUE","subtitle","Every business aspires for growth, but achieving it requires the right talent in the right roles. When it comes to accelerating sales and building a robust pipeline, Sales Development Reps (SDRs) are your secret weapon."],["backgroundImage","https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg","imageSrc","https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63b2e8a1b3e375875a59c97e_LSG_Assets_LeanSales_Business-26.avif","description",`Over 10 years of experience in the industry
  Structured training programs
  Established vetting and hiring process
  Landed the Inc.5000 list for fastest-growing companies in America for four years in a row
  97% retention rate`,"title","WHY TRUST LEAN SOLUTIONS GROUP FOR GROWTH?"]],template:function(r,n){r&1&&b(0,"app-hero-header",0)(1,"app-simple-title-section")(2,"app-growth-efforts")(3,"app-sdr-differences")(4,"app-feature-section",1)(5,"app-footer")},dependencies:[I,O,_,A,G,x],encapsulation:2})};export{ee as SalesComponent};
