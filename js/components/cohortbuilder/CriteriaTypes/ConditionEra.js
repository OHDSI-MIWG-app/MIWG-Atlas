define(['knockout', './Criteria', '../InputTypes/Range', 'conceptpicker/InputTypes/Concept', '../InputTypes/ConceptSetSelection'], function (ko, Criteria, Range, Concept, ConceptSetSelection) {

	function ConditionEra(data, conceptSets) {
		var self = this;
		data = data || {};

		Criteria.call(this, data, conceptSets);
		
		// set up subscription to update CodesetId if the item is removed from conceptSets
		conceptSets.subscribe(function (changes) {
			changes.forEach(function(change) {
					if (change.status === 'deleted') {
					  if (ko.utils.unwrapObservable(self.CodesetId) == change.value.id)
							self.CodesetId(null);
					}
			});
		}, null, "arrayChange");
		
		// General Condition Occurence Criteria

		// Verbatim fields
		self.CodesetId = ko.observable(data.CodesetId);

		self.EraStartDate = ko.observable(data.EraStartDate && new Range(data.EraStartDate));
		self.EraEndDate = ko.observable(data.EraEndDate && new Range(data.EraEndDate));
		self.OccurrenceCount = ko.observable(data.OccurrenceCount && new Range(data.OccurrenceCount));
		self.EraLength = ko.observable(data.EraLength && new Range(data.EraLength));

		// Derived Fields
		self.First = ko.observable(data.First || null);
		self.AgeAtStart = ko.observable(data.AgeAtStart && new Range(data.AgeAtStart));
		self.AgeAtEnd = ko.observable(data.AgeAtEnd && new Range(data.AgeAtEnd));

		// Linked Fields
		self.Gender = ko.observable(data.Gender && ko.observableArray(data.Gender.map(function (d) {
			return new Concept(d);
		})));
		self.GenderCS = ko.observable(data.GenderCS && new ConceptSetSelection(data.GenderCS, conceptSets));

	}

	ConditionEra.prototype = new Criteria();
	ConditionEra.prototype.constructor = ConditionEra;
	ConditionEra.prototype.toJSON = function () {
		return this;
	}
	
	return ConditionEra;
});