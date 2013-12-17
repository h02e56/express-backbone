define([
'backbone',
'application',
'modules/notes'
], function(Backbone, APP){
    //shortcuts
    var _slice = Array.prototype.slice;



    APP.Router = Backbone.Router.extend({
        routes:{
            "notes": "notes",
            "*other": "homepage"///default page
           
        },

        homepage:function () {
            // body...
            
            console.log("home");
        },

        notes: function(){
            var noteModule = APP.modules["Notes"],
            collection = new noteModule.Collection();
        
            //this.navigate('/notes', {trigger:true});

            collection.fetch({
                success: function(data){
                    var view = new noteModule.ViewCollection({collection:data});                    
                    $("#notes").append(view.render());                    
                }
            });
        }
    });
    return APP;
});