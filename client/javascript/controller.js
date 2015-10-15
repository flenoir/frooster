


Template.liste.helpers({
mesFiches: function(){
	var mesFi=Fiches.find();
	return mesFi;
}
});

Template.formulaire.events({
"submit #monFormulaire": function(e){
	e.preventDefault();
	var perso={nomUser:$("#nom").val(),prenomUser:$("#prenom").val(),photoUser:$("#photo").val()}
	$("#nom").val("");
	$("#prenom").val("");
	$("#photo").val("");
	Meteor.call("ficheCollIns",perso);
}
});

Template.liste.events({
	'click .delete': function() {
if (confirm("Etes vous sûr ?")){
	Fiches.remove(this._id);
}
}
});

Template.formulaireEdit.events({
"submit #monFormulaireEdit": function(e){
	e.preventDefault();
	var currentFicheId = this._id; //recupezration de l'id de la fiche a éditer
	var perso={nomUser:$("#nom").val(),prenomUser:$("#prenom").val(),photoUser:$("#photo").val()} //récupération des valeurs à poster
	$("#nom").val("");
	$("#prenom").val("");
	$("#photo").val("");
	

	  Fiches.update(currentFicheId, {$set: perso}, function(error) {
      if (error) {
        // affiche l'erreur à l'utilisateur
        alert(error.reason);
      } else {
        Router.go('page1', {_id: currentFicheId});
      }
    });
  
}
});