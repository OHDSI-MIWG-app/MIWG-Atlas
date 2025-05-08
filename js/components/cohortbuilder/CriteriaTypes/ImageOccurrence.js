define([
  'knockout',
  './Criteria',
  '../InputTypes/Range',
  'conceptpicker/InputTypes/Concept',
  '../InputTypes/ConceptSetSelection',
  '../InputTypes/DateAdjustment',
  '../CriteriaGroup',
], function (
  ko,
  Criteria,
  Range,
  Concept,
  ConceptSetSelection,
  DateAdjustment,
  CriteriaGroup
) {
  function ImageOccurrence(data, conceptSets) {
    var self = this;
    data = data || {};

    Criteria.call(this, data, conceptSets);

    // set up subscription to update CodesetId and ImageOccurrenceSourceConcept if the item is removed from conceptSets
    conceptSets.subscribe(
      function (changes) {
        changes.forEach(function (change) {
          if (change.status === 'deleted') {
            if (ko.utils.unwrapObservable(self.CodesetId) == change.value.id)
              self.CodesetId(null);
          }
        });
      },
      null,
      'arrayChange'
    );
    self.CodesetId = ko.observable(data.CodesetId);
    // Fields from template
    self.DateAdjustment = ko.observable(
      data.DateAdjustment && new DateAdjustment(data.DateAdjustment)
    );
    self.FirstDiagnosis = ko.observable(
      data.FirstDiagnosis &&
        new ConceptSetSelection(data.FirstDiagnosis, conceptSets)
    );
    self.Age = ko.observable(data.Age && new Range(data.Age));
    self.Gender = ko.observable(
      data.Gender &&
        ko.observableArray(
          data.Gender.map(function (d) {
            return new Concept(d);
          })
        )
    );
    self.GenderCS = ko.observable(
      data.GenderCS && new ConceptSetSelection(data.GenderCS, conceptSets)
    );
    self.OccurrenceStartDate = ko.observable(
      data.OccurrenceStartDate && new Range(data.OccurrenceStartDate)
    );
    self.Visit = ko.observable(
      data.Visit &&
        ko.observableArray(
          data.Visit.map(function (d) {
            return new Concept(d);
          })
        )
    );
    self.VisitCS = ko.observable(
      data.VisitCS && new ConceptSetSelection(data.VisitCS, conceptSets)
    );
    self.ProcedureOccurrence = ko.observable(
      data.ProcedureOccurrence && new Concept(data.ProcedureOccurrence)
    );
    self.AnatomicSiteCS = ko.observable(
      data.AnatomicSiteCS &&
        new ConceptSetSelection(data.AnatomicSiteCS, conceptSets)
    );
    self.ModalityCS = ko.observable(
      data.ModalityCS && new ConceptSetSelection(data.ModalityCS, conceptSets)
    );
    self.Nested = ko.observable(
      data.Nested && new CriteriaGroup(data.Nested, conceptSets)
    );
  }

  ImageOccurrence.prototype = new Criteria();
  ImageOccurrence.prototype.constructor = ImageOccurrence;
  ImageOccurrence.prototype.toJSON = function () {
    return this;
  };

  return ImageOccurrence;
});
