Router.configure({
	layoutTemplate: "layout"
});

Router.route("/", {name: "accueil"});
Router.route("/page1", {name: "page1"});
Router.route("/page2", {name: "page2"});
Router.route("/page2/:_id",{
	name:"formulaireEdit",
	data:function(){ var retour = Fiches.findOne(this.params._id); // a creuser, le findOne et params
		console.log(retour);
		return retour;}
})