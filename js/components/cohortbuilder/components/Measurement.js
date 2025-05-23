define([
  'knockout',
  '../options',
  '../utils',
  '../InputTypes/Range',
  '../InputTypes/DateAdjustment',
  '../InputTypes/ConceptSetSelection',
  '../CriteriaGroup',
  'text!./MeasurementTemplate.html',
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
  function MeasurementViewModel(params) {
    var self = this;
    self.expression = ko.utils.unwrapObservable(params.expression);
    self.Criteria = params.criteria.Measurement;
    self.options = options;
    self.addActions = [
      {
        ...constants.measurementAttributes.addFirstDiagnosis,
        selected: false,
        action: function () {
          if (self.Criteria.First() == null) self.Criteria.First(true);
        },
      },
      {
        ...constants.measurementAttributes.addAge,
        selected: false,
        action: function () {
          if (self.Criteria.Age() == null) self.Criteria.Age(new Range());
        },
      },
      {
        ...constants.measurementAttributes.addGender,
        selected: false,
        action: function () {
          if (self.Criteria.Gender() == null)
            self.Criteria.Gender(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addGenderCS,
        selected: false,
        action: function () {
          if (self.Criteria.GenderCS() == null)
            self.Criteria.GenderCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addDate,
        selected: false,
        action: function () {
          if (self.Criteria.OccurrenceStartDate() == null)
            self.Criteria.OccurrenceStartDate(
              new Range({
                Op: 'lt',
              })
            );
        },
      },
      {
        ...constants.measurementAttributes.addDateAdjustment,
        selected: false,
        action: function () {
          if (self.Criteria.DateAdjustment() == null)
            self.Criteria.DateAdjustment(new DateAdjustment());
        },
      },
      {
        ...constants.measurementAttributes.addType,
        selected: false,
        action: function () {
          if (self.Criteria.MeasurementType() == null)
            self.Criteria.MeasurementType(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addTypeCS,
        selected: false,
        action: function () {
          if (self.Criteria.MeasurementTypeCS() == null)
            self.Criteria.MeasurementTypeCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addVisit,
        selected: false,
        action: function () {
          if (self.Criteria.VisitType() == null)
            self.Criteria.VisitType(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addVisitCS,
        selected: false,
        action: function () {
          if (self.Criteria.VisitTypeCS() == null)
            self.Criteria.VisitTypeCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addOperator,
        selected: false,
        action: function () {
          if (self.Criteria.Operator() == null)
            self.Criteria.Operator(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addOperatorCS,
        selected: false,
        action: function () {
          if (self.Criteria.OperatorCS() == null)
            self.Criteria.OperatorCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addValue,
        selected: false,
        action: function () {
          if (self.Criteria.ValueAsNumber() == null)
            self.Criteria.ValueAsNumber(new Range());
        },
      },
      {
        ...constants.measurementAttributes.addValueAsConcept,
        selected: false,
        action: function () {
          if (self.Criteria.ValueAsConcept() == null)
            self.Criteria.ValueAsConcept(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addValueAsConceptCS,
        selected: false,
        action: function () {
          if (self.Criteria.ValueAsConceptCS() == null)
            self.Criteria.ValueAsConceptCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addUnit,
        selected: false,
        action: function () {
          if (self.Criteria.Unit() == null)
            self.Criteria.Unit(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addUnitCS,
        selected: false,
        action: function () {
          if (self.Criteria.UnitCS() == null)
            self.Criteria.UnitCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addAbnormal,
        selected: false,
        action: function () {
          if (self.Criteria.Abnormal() == null) self.Criteria.Abnormal(true);
        },
      },
      {
        ...constants.measurementAttributes.addRangeLow,
        selected: false,
        action: function () {
          if (self.Criteria.RangeLow() == null)
            self.Criteria.RangeLow(new Range());
        },
      },
      {
        ...constants.measurementAttributes.addRangeHigh,
        selected: false,
        action: function () {
          if (self.Criteria.RangeHigh() == null)
            self.Criteria.RangeHigh(new Range());
        },
      },
      {
        ...constants.measurementAttributes.addRangeLowRatio,
        selected: false,
        action: function () {
          if (self.Criteria.RangeLowRatio() == null)
            self.Criteria.RangeLowRatio(new Range());
        },
      },
      {
        ...constants.measurementAttributes.addRangeHighRatio,
        selected: false,
        action: function () {
          if (self.Criteria.RangeHighRatio() == null)
            self.Criteria.RangeHighRatio(new Range());
        },
      },
      {
        ...constants.measurementAttributes.addProviderSpecialty,
        selected: false,
        action: function () {
          if (self.Criteria.ProviderSpecialty() == null)
            self.Criteria.ProviderSpecialty(ko.observableArray());
        },
      },
      {
        ...constants.measurementAttributes.addProviderSpecialtyCS,
        selected: false,
        action: function () {
          if (self.Criteria.ProviderSpecialtyCS() == null)
            self.Criteria.ProviderSpecialtyCS(
              new ConceptSetSelection({}, self.expression.ConceptSets)
            );
        },
      },
      {
        ...constants.measurementAttributes.addSourceConcept,
        selected: false,
        action: function () {
          if (self.Criteria.MeasurementSourceConcept() == null)
            self.Criteria.MeasurementSourceConcept(ko.observable());
        },
      },
      {
        ...constants.measurementAttributes.addNested,
        selected: false,
        action: function () {
          if (self.Criteria.CorrelatedCriteria() == null)
            self.Criteria.CorrelatedCriteria(
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
      'components.conditionMeasurement.indexDataText',
      'The index date refers to the measurement of <%= conceptSetName %>.',
      {
        conceptSetName: ko.pureComputed(() =>
          utils.getConceptSetName(
            self.Criteria.CodesetId,
            self.expression.ConceptSets,
            ko.i18n(
              'components.conditionMeasurement.anyMeasurement',
              'Any Measurement'
            )
          )
        ),
      }
    );
  }

  // return compoonent definition
  return {
    viewModel: MeasurementViewModel,
    template: template,
  };
});
