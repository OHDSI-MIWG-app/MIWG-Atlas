define([
  'knockout',
  '../options',
  '../utils',
  '../InputTypes/Range',
  '../InputTypes/DateAdjustment',
  '../InputTypes/ConceptSetSelection',
  '../CriteriaGroup',
  'text!./ImageOccurrenceTemplate.html',
  '../const',
], function (
  ko,
  options,
  utils,
  Range,
  DateAdjustment,
  ConceptSetSelection,
  CriteriaGroup,
  template,
  constants
) {
  function ImageOccurrenceViewModel(params) {
    var self = this;

    self.expression = ko.utils.unwrapObservable(params.expression);
    self.Criteria = params.criteria.ImageOccurrence;

    self.options = options;

    self.addActions = [
      {
        ...constants.imageOccurrenceAttributes.addDateAdjustment,
        selected: false,
        action: function () {
          if (self.Criteria.DateAdjustment() == null)
            self.Criteria.DateAdjustment(new DateAdjustment());
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addFirstDiagnosis,
        selected: false,
        action: function () {
          if (self.Criteria.FirstDiagnosis() == null)
            self.Criteria.FirstDiagnosis(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addAge,
        selected: false,
        action: function () {
          if (self.Criteria.Age() == null) self.Criteria.Age(new Range());
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addGender,
        selected: false,
        action: function () {
          if (self.Criteria.Gender() == null)
            self.Criteria.Gender(ko.observableArray());
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addGenderCS,
        selected: false,
        action: function () {
          if (self.Criteria.GenderCS() == null)
            self.Criteria.GenderCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addDate,
        selected: false,
        action: function () {
          if (self.Criteria.OccurrenceStartDate() == null)
            self.Criteria.OccurrenceStartDate(new Range());
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addVisit,
        selected: false,
        action: function () {
          if (self.Criteria.Visit() == null)
            self.Criteria.Visit(ko.observableArray());
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addVisitCS,
        selected: false,
        action: function () {
          if (self.Criteria.VisitCS() == null)
            self.Criteria.VisitCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addProcedureOccurrence,
        selected: false,
        action: function () {
          if (self.Criteria.ProcedureOccurrence() == null)
            self.Criteria.ProcedureOccurrence(ko.observable());
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addAnatomicSiteCS,
        selected: false,
        action: function () {
          if (self.Criteria.AnatomicSiteCS() == null)
            self.Criteria.AnatomicSiteCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addModalityCS,
        selected: false,
        action: function () {
          if (self.Criteria.ModalityCS() == null)
            self.Criteria.ModalityCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.imageOccurrenceAttributes.addNested,
        selected: false,
        action: function () {
          if (self.Criteria.Nested() == null)
            self.Criteria.Nested(
              new CriteriaGroup(null, self.expression.ConceptSets)
            );
        },
      },
    ];
    console.log('addActions:', self.addActions); //undefined

    self.removeCriterion = function (propertyName) {
      self.Criteria[propertyName](null);
    };

    self.indexMessage = ko.pureComputed(() => {
      var conceptSetName = utils.getConceptSetName(
        self.Criteria.CodesetId,
        self.expression.ConceptSets,
        ''
      );
      return `${conceptSetName}.`;
    });

    self.indexMessage = ko.i18nformat(
      'components.imageOccurrence.indexDataText',
      'The index date refers to the image occurrence of <%= conceptSetName %>.',
      {
        conceptSetName: ko.pureComputed(() =>
          utils.getConceptSetName(
            self.Criteria.CodesetId,
            self.expression.ConceptSets,
            ko.i18n('components.imageOccurrence.anyImage', 'Any Image')
          )
        ),
      }
    );
  }

  return {
    viewModel: ImageOccurrenceViewModel,
    template: template,
  };
});
