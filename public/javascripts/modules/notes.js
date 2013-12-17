define([
    'backbone',
    'application'
], function(Backbone, APP){
    //code
    var Notes = (function(APP, Notes ){

        Notes.Model = Backbone.Model.extend({
            idAttribute: '_id'
        });

        Notes.Collection = Backbone.Collection.extend({
            model: Notes.Model,
            url: '/notes'
        });

        Notes.View = Backbone.View.extend({
            tagName: "ul",
            template: _.template( $("#note").html() ),

            events:{
                click : function(e){
                    var note = new Notes.viewDetail({model:this.model});
                    console.log(note.model);
                    APP.myRouter.navigate('/notes/' + note.model._id, {trigger:true});

                }
            },

            render: function(){
                this.$el.html( this.template(this.model));
                return this.$el;
            }
        });

        Notes.ViewCollection = Backbone.View.extend({
            el: '#notes',

            render: function(){
                //this.$el.html('');
                this.collection.forEach(function(item){
                    this.renderNote(item.attributes);
                }, this);
                return this;
            },

            renderNote: function(note){
                var noteView = new Notes.View({
                    model: note
                });
                this.$el.append( noteView.render());
                return this.$el;
            }
        });

        Notes.viewDetail = Backbone.View.extend({
            el:"#notes",

            initialize: function(){
                this.render();
            },

            template: _.template( $("#noteDetail").html() ),

            render: function(){
                this.$el.html( this.template(this.model));
                return this.$el;
            }
        });

    })(APP, APP.loadModule("Notes"));

    // What we return here will be used by other modules
    return APP;
});