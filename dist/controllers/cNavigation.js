define("#mix/sln/0.1.0/controllers/cNavigation",["mix/core/0.3.0/base/reset","mix/core/0.3.0/base/class","mix/core/0.3.0/url/navigate","mix/sln/0.1.0/modules/page"],function(a){a("mix/core/0.3.0/base/reset");var d=window,f=(d.document,a("mix/core/0.3.0/base/class")),g=a("mix/core/0.3.0/url/navigate").singleton,h=a("mix/sln/0.1.0/modules/page"),i={},j=h.STATUS,k=f.create({initialize:function(a){var b=this,c=a.name.split(".");b.appName=c[0],b.routeName=c[1],b.state=a},getParameter:function(a){return this.state.params[a]},getArgument:function(a){return this.state.args[a]},getData:function(a){return this.state.datas[a]},push:function(a,b){g.forward(a,b)},pull:function(){g.backward()},fill:function(a,b){function d(){c.renderTemplate(a,function(a){app.fillViewport(a),b&&b()})}var c=i[this.appName];c.compiledTemplate?d():c.once("compiled",d)},ready:function(){var a=i[this.appName];a.status<j.READY&&(a.status=j.READY,a.trigger("ready",this))},compile:function(){function b(){a.status<j.COMPILED&&(a.status=j.COMPILED,a.trigger("compiled"))}var a=i[this.appName];a.compiledTemplate?b():a.loadTemplate(function(c){a.compileTemplate(c,function(){b()})})},unload:function(){var a=this,b=i[a.appName];b.status>j.UNLOADED&&(b.status=j.UNLOADED,b.trigger("unloaded"))}});return k.addPage=function(a){var b=a.name,c=a.route;Object.isTypeof(c,"string")&&(c={name:"anonymous",text:c}),g.addRoute(b+"."+c.name,c.text,c),i[b]=a},k.getPage=function(a){return i[a]},k.listen=function(a){g.on("forward backward",a)},k});