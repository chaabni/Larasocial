!function(){function e(){var e=$(this),a=e.prop("action"),t=e.find('input[name="_method"]').val()||"POST",s=e.serialize();return $.ajax({type:t,url:a,data:s}).done(function(a){if("success"==a.response)switch(e.prop("class")){case"message-form":$(".center-alert").html(a.message).fadeIn(300).delay(2500).fadeOut(300),e.find("textarea").val("");break;case"message-response-form":$(".message-response-list").prepend('<div class="media listed-object-close"><div class="pull-left"><a href="#"><img class="media-object avatar small-avatar"src="'+userProfileImage+'" alt="'+userFirstname+'"></a></div><div class="media-body"><p><span class="text-muted">Just now you wrote:</span><a href="#"><span></span></a></p><div>'+e.find("textarea").val()+"</div></div></div>"),e.find("textarea").val("");break;case"feed-form":var t=$(".feeds-count").text(),s=parseInt(t)+1;$(".feeds-count").text(s),$(".feed-list").prepend('<div id="feedid" class="media listed-object"><div class="pull-left"><img class="media-object avatar medium-avatar" src="'+a.userProfileImage+'" alt="'+a.userFirstname+'"></div><div class="media-body"><h4 class="media-heading">'+a.userFirstname+"</h4><p>Just now</p>"+a.feedBody+"</div></div>"),e.find("textarea").val(""),$(".no-feeds-info").hide()}else if("failed"==a.response){switch(e.prop("class")){case"message-form":$(".center-alert").html("Your message is empty").fadeIn(300).delay(2e3).fadeOut(300);break;case"message-response-form":$(".center-alert").html("Your message is empty").fadeIn(300).delay(2e3).fadeOut(300)}e.find("textarea").val("")}}).fail(function(){return alert("something went wrong. Please try again.")}),!1}function a(){var e=$(this),a=e.attr("data-userid"),t=e.attr("href"),s=e.attr("data-method")||"POST",i=e.attr("class"),d=e.closest(".listed-object-close").find(".avatar").attr("src")||e.closest("#profile-card").find(".avatar").attr("src"),n=e.closest(".listed-object-close").find(".avatar").attr("alt")||e.closest("#profile-card").find(".avatar").attr("alt");return $.ajax({type:s,url:t,data:{userId:a}}).done(function(t){if("success"==t.response)switch(i){case"btn btn-primary friend-request-button btn-sm":e.attr("disabled","disabled").text("Requested");break;case"btn btn-primary add-friend-button btn-sm":e.attr("disabled","disabled").text("Friend added"),$("#no-friend-chat-alert").hide(),$("#friend-list").append('<div id="friend-side-list" class="list-group"><a href="#" class="list-group-item side-list disabled" data-userid = "'+a+'"><div class="media"><div class="pull-left"><img class="media-object avatar small-avatar" src="'+d+'" alt="'+n+'"></div><div class="media-body">'+n+' <span class="glyphicon glyphicon-flash text-success"></span></div></div></a></div>');break;case"btn btn-primary add-friend-button-2 btn-sm":e.closest(".listed-object-close").slideUp(),0==t.count&&$(".users-list").append('<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friend requests.</div>'),$("#no-friend-chat-alert").hide(),$("#friend-list").append('<div id="friend-side-list" class="list-group"><a href="#" class="list-group-item side-list disabled" data-userid = "'+a+'"><div class="media"><div class="pull-left"><img class="media-object avatar small-avatar" src="'+d+'" alt="'+n+'"></div><div class="media-body">'+n+' <span class="glyphicon glyphicon-flash text-success"></span></div></div></a></div>');var s=$(".friends-count").text(),r=parseInt(s)+1;$(".friends-count").text(r);break;case"btn btn-primary unfriend-button btn-sm":0==t.count&&($("#friend-side-list").hide(),$("#friend-list").append('<div id="no-friend-chat-alert" class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friends.</div>'));var s=$(".friends-count").text(),r=parseInt(s)-1;$(".friends-count").text(r),$("#chat-list-user-"+a).hide("slide",{direction:"right"},300),e.attr("disabled","disabled").text("Removed");break;case"btn btn-primary unfriend-button-2 btn-sm":e.closest(".listed-object-close").slideUp(),0==t.count&&$(".users-list").append('<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friend requests.</div>');break;case"btn btn-primary unfriend-button-3 btn-sm":e.closest(".listed-object-close").slideUp(),$("a[data-userid="+e.attr("data-userid")+"]").hide("slide",{direction:"right"},300),0==t.count&&($(".users-list").append('<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friends.</div>'),$("#friend-side-list").hide(),$("#friend-list").append('<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friends.</div>'));var s=$(".friends-count").text(),r=parseInt(s)-1;$(".friends-count").text(r);break;case"logout-link":$("#no-friend-chat-alert").is(":visible")?window.location.replace("/"):($(".side-list").each(function(){var e=$(this).attr("data-userid");sessionStorage.removeItem("conversation-with-"+e)}),window.location.replace("/"))}else"failed"==t.response?$(".center-alert").html(t.message).fadeIn(300).delay(2500).fadeOut(300):alert("Something went wrong. Please try again later.")}).fail(function(){return alert("something went wrong. Please try again.")}),!1}function t(e){if(localStorage){var a=[];return a=JSON.parse(sessionStorage.getItem("conversation-with-"+e))}}function s(e){var a=t(e.friendId);a?(a.messages.push(e.message),sessionStorage.setItem("conversation-with-"+e.friendId,JSON.stringify(a))):sessionStorage.setItem("conversation-with-"+e.friendId,JSON.stringify({messages:[e.message]}))}function d(e){var a=e.friendProfileImage,t=e.friendName,s=e.friendId,i="";i=$(".chat-room").length?parseInt($(".chat-room").last().css("margin-left").slice(0,-2))+273:0,819>i&&$("#chat-container").append(n(a,t,s,i))}function n(e,a,t,d){var n=$("<div></div>").attr("id","chatwithuser"+t).css("margin-left",d+".px").addClass("chat-room chat-full col-md-3"),r=$("<div></div>").addClass("media").appendTo(n),o=$("<div></div>").addClass("media-left").appendTo(r),l=($("<img/>",{"class":"media-object avatar small-avatar",src:e,alt:a}).appendTo(o),$("<div></div>").addClass("media-body").appendTo(r)),c=$("<p></p>").addClass("media-heading").text(a).appendTo(l),p=$("<a/>",{href:"#",click:function(){return $(this).closest("#chatwithuser"+t).hide(),!1}}).appendTo(c),f=($("<span></span>").addClass("glyphicon glyphicon-remove").appendTo(p),$("<a/>",{href:"#",click:function(){return $(this).children("span").hasClass("glyphicon-chevron-down")?$(this).children("span").switchClass("glyphicon-chevron-down","glyphicon-chevron-up"):$(this).children("span").hasClass("glyphicon-chevron-up")&&$(this).children("span").switchClass("glyphicon-chevron-up","glyphicon-chevron-down"),$(this).closest("#chatwithuser"+t).find(".chat-body-form").toggle("slide",{direction:"down"}),!1}}).appendTo(c)),h=($("<span></span>").addClass("glyphicon glyphicon-chevron-down").appendTo(f),$("<div></div>").addClass("chat-body-form").appendTo(l)),u=$("<div></div>").addClass("chat-body").appendTo(h),m=$("<ul></lu>").addClass("messages").appendTo(u),g=[];if(g=JSON.parse(sessionStorage.getItem("conversation-with-"+t)))for(i=0;i<g.messages.length;i++){$("<li></li>").text(g.messages[i]).appendTo(m)}{var v=$("<form/>",{submit:function(){return parentDiv=$(this).closest("#chatwithuser"+t),messageBody=parentDiv.find("ul"),textField=$(this).find("textarea"),message=textField.val(),""==message?!1:(textField.val(""),$.ajax({type:"POST",url:"/chat",data:{receiverId:t,message:userFirstname+": "+message}}).done(function(e){1==e.availableToChat?(messageBody.append($("<li>").text(userFirstname+": "+message)),s({friendId:t,message:userFirstname+": "+message})):messageBody.append($("<li>").text(a+" is offline").css("color","red"))}).fail(function(){return alert("something went wrong. Please try again.")}),!1)}}).appendTo(h),b=$("<div></div>").addClass("form-group form-group-sm").appendTo(v);$("<textarea></textarea>").addClass("form-control").attr("placeholder","Enter message").attr("rows","1").attr("name","body").appendTo(b),$("<button/>",{type:"submit","class":"btn btn-default",text:"Submit"}).appendTo(v)}return n}$(".welcome-alert").fadeIn(300).delay(3500).fadeOut(300);var r=io.connect("http://larasocial.info:1337");r.emit("register",{userId:userId}),r.on(userId,function(e){if(21==e.clientcode)e.relatedToId==userId?1==e.message?($("#friend-list .wrapper-2").hide(),$("#friend-list .wrapper").hide()):($("#friend-list .wrapper-2").hide(),$("#friend-list .wrapper").show()):1==e.message?(console.log(e.relatedToId),$("a[data-userid="+e.relatedToId+"]").removeClass("disabled")):(console.log(e.relatedToId),$("a[data-userid="+e.relatedToId+"]").addClass("disabled"));else if(22==e.clientcode)0==e.message&&$("a[data-userid="+e.relatedToId+"]").addClass("disabled");else if(23==e.clientcode){var a=$('input[name="chatStatus"]').is(":checked")?!0:!1;if(!a)return a;var t=$("a[data-userid = "+e.relatedToId+"]");if(t.hasClass("disabled"))return!1;if(s({friendId:e.relatedToId,message:e.message}),$("#chatwithuser"+e.relatedToId).length)$("#chatwithuser"+e.relatedToId).find("ul").append("<li>"+e.message+"</li>"),$("#chatwithuser"+e.relatedToId).show(),console.log("opened already created chat object");else{var i=t.find(".avatar").attr("src"),n=t.find(".avatar").attr("alt");d({friendProfileImage:i,friendName:n,friendId:e.relatedToId}),console.log("created new chat box object")}}else if(24==e.clientcode)if(e.message){var r=$(".friends-count").text(),o=parseInt(r)-1;$(".friends-count").text(o),$("#chat-list-user-"+e.relatedToId).hide("slide",{direction:"right"},300),"/friends"==$(location).attr("href")?$("a[data-userid = "+e.relatedToId+"]").closest(".listed-object-close").hide():"/users"==$(location).attr("href")?$("a[data-userid = "+e.relatedToId+"]").attr("disabled","disabled").text("Removed"):$(location).attr("href")=="/users/"+e.relatedToId&&$("a[data-userid = "+e.relatedToId+"]").attr("disabled","disabled").text("Removed")}else{$("#friend-side-list").hide(),$("#friend-list").append('<div id="no-friend-chat-alert" class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friends.</div>');var r=$(".friends-count").text(),o=parseInt(r)-1;$(".friends-count").text(o),"/friends"==$(location).attr("href")?($(".users-list").hide(),$("#center-column").append('<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> You don\'t have any friends.</div>')):"/users"==$(location).attr("href")?$("a[data-userid = "+e.relatedToId+"]").attr("disabled","disabled").text("Removed"):$(location).attr("href")=="/users/"+e.relatedToId&&$("a[data-userid = "+e.relatedToId+"]").attr("disabled","disabled").text("Removed")}}),$(".message-form").submit(e),$(".message-response-form").submit(e),$(".feed-form").submit(e),$(".friend-request-button").click(a),$(".add-friend-button").click(a),$(".add-friend-button-2").click(a),$(".unfriend-button").click(a),$(".unfriend-button-2").click(a),$(".unfriend-button-3").click(a),$(".logout-link").click(a),$(".open-message").click(function(){var e=$(this).attr("data-message-response-id"),a=1;$.ajax({type:"put",url:"/message-response",data:{openValue:a,messageResponseId:e}}).done(function(){return!1}).fail(function(){return alert("something went wrong. Please try again.")})}),$(".delete-message").click(function(){$(this).closest($(".listed-object-close")).slideUp();var e=$(this).attr("data-message-id");return $.ajax({type:"delete",url:"/message-delete",data:{messageId:e}}).done(function(e){var a=$(".message-count").text(),t=a-1;$(".message-count").text(t),0==e.count&&$(".message-list").append('<div class="alert alert-info" role="alert"><span class="glyphicon glyphicon-info-sign"></span> Your inbox is empty.</div>')}).fail(function(){return alert("something went wrong. Please try again.")}),!1}),$(".glyphicon-chevron-down").first().switchClass("glyphicon-chevron-down","glyphicon-chevron-up"),$(".message-body").first().css("display","block"),$(".expand-message").click(function(){return $(this).hasClass("glyphicon-chevron-down")?$(this).switchClass("glyphicon-chevron-down","glyphicon-chevron-up"):$(this).hasClass("glyphicon-chevron-up")&&$(this).switchClass("glyphicon-chevron-up","glyphicon-chevron-down"),$(this).closest(".media-body").find($(".message-body")).toggle("slide",{direction:"up"}),!1});var o=$('input[name="chatStatus"]').bootstrapSwitch();o.on("switchChange.bootstrapSwitch",function(e,a){$.post("/chatstatus",{chatStatus:Number(a)})}),$("a",$("#friend-list")).click(function(){if(!$(this).hasClass("disabled")){var e=$(this).attr("data-profileimage"),a=$(this).attr("data-firstname"),t=$(this).attr("data-userid");$("#chatwithuser"+t).length?$("#chatwithuser"+t).show():d({friendProfileImage:e,friendName:a,friendId:t})}return!1}),"http://larasocial.info/feeds"==$(location).attr("href")&&$(window).scroll(function(){if($(window).scrollTop()+$(window).height()>=$(document).height()-850?$("#go-up").show():$("#go-up").hide(),$(window).scrollTop()+$(window).height()>=$(document).height()-300){var e=$(".listed-object").length;if(10>=e&&(e=10),!(e<$(".feed-list").attr("data-feedcount")))return!1;$("#loader").fadeIn("slow",function(){$.ajax({url:"feeds/more",data:{skipQty:e}}).done(function(e){$("#loader").fadeOut("slow",function(){var a="";$.each(e.feeds,function(e,t){return 0!=$("#feedid"+t.id).length?!1:void(a+='<div id="feedid'+t.id+'" class="media listed-object"><div class="pull-left"><img class="media-object avatar medium-avatar" src="'+t.poster_profile_image+'" alt="'+t.poster_firstname+'"></div><div class="media-body"><h4 class="media-heading">'+t.poster_firstname+"</h4><p>"+$.timeago(t.created_at)+"</p>"+t.body+"</div></div>")}),$(".feed-list").append(a)})}).fail(function(){return alert("something went wrong. Please try again.")})})}}),$("body").scrollspy({target:"#go-up"})}();