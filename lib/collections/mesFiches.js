Fiches = new Mongo.Collection("fiches");
Meteor.methods({
	ficheCollIns:function(f){
		Fiches.insert(f)
	}
});