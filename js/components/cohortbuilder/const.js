define(['knockout'], function (ko) {
  const criteria = {
    addConditionEra: {
      title: 'const.eventsList.addConditionEra.title',
      defaultTitle: 'Add Condition Era',
      descriptionInitial: 'const.eventsList.addConditionEra.desc_initial',
      defaultDescriptionInitial: 'Find patients with specific diagosis era.',
      descriptionCensoring: 'const.eventsList.addConditionEra.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on diagosis era.',
      descriptionGroup: 'const.eventsList.addConditionEra.desc_group',
      defaultDescriptionGroup: 'Find patients with specific condition era.',
    },
    addConditionOccurrence: {
      title: 'const.eventsList.addConditionOccurrence.title',
      defaultTitle: 'Add Condition Occurrence',
      descriptionInitial:
        'const.eventsList.addConditionOccurrence.desc_initial',
      defaultDescriptionInitial: 'Find patients with specific diagnoses.',
      descriptionCensoring:
        'const.eventsList.addConditionOccurrence.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on diagnoses.',
      descriptionGroup: 'const.eventsList.addConditionOccurrence.desc_group',
      defaultDescriptionGroup: 'Find patients with specific conditions.',
    },
    addDeath: {
      title: 'const.eventsList.addDeath.title',
      defaultTitle: 'Add Death',
      descriptionInitial: 'const.eventsList.addDeath.desc_initial',
      defaultDescriptionInitial: 'Find patients based on death.',
      descriptionCensoring: 'const.eventsList.addDeath.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on  death.',
      descriptionGroup: 'const.eventsList.addDeath.desc_group',
      defaultDescriptionGroup: 'Find patients based on death.',
    },
    addDeviceExposure: {
      title: 'const.eventsList.addDeviceExposure.title',
      defaultTitle: 'Add Device Exposure',
      descriptionInitial: 'const.eventsList.addDeviceExposure.desc_initial',
      defaultDescriptionInitial: 'Find patients based on device exposure.',
      descriptionCensoring: 'const.eventsList.addDeviceExposure.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on  device exposure.',
      descriptionGroup: 'const.eventsList.addDeviceExposure.desc_group',
      defaultDescriptionGroup: 'Find patients based on device exposure.',
    },
    addDoseEra: {
      title: 'const.eventsList.addDoseEra.title',
      defaultTitle: 'Add Dose Era',
      descriptionInitial: 'const.eventsList.addDoseEra.desc_initial',
      defaultDescriptionInitial: 'Find patients with dose eras.',
      descriptionCensoring: 'const.eventsList.addDoseEra.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on dose eras.',
      descriptionGroup: 'const.eventsList.addDoseEra.desc_group',
      defaultDescriptionGroup: 'Find patients with dose eras.',
    },
    addDrugEra: {
      title: 'const.eventsList.addDrugEra.title',
      defaultTitle: 'Add Drug Era',
      descriptionInitial: 'const.eventsList.addDrugEra.desc_initial',
      defaultDescriptionInitial:
        'Find patients with with exposure to drugs over time.',
      descriptionCensoring: 'const.eventsList.addDrugEra.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on drugs over time.',
      descriptionGroup: 'const.eventsList.addDrugEra.desc_group',
      defaultDescriptionGroup: 'Find patients with drug eras.',
    },
    addDrugExposure: {
      title: 'const.eventsList.addDrugExposure.title',
      defaultTitle: 'Add Drug Exposure',
      descriptionInitial: 'const.eventsList.addDrugExposure.desc_initial',
      defaultDescriptionInitial:
        'Find patients with exposure to specific drugs or drug classes.',
      descriptionCensoring: 'const.eventsList.addDrugExposure.desc_censoring',
      defaultDescriptionCensoring:
        'Exit cohort based on exposure to specific drugs or drug classes.',
      descriptionGroup: 'const.eventsList.addDrugExposure.desc_group',
      defaultDescriptionGroup:
        'Find patients with exposure to specific drugs or drug classes.',
    },
    addMeasurement: {
      title: 'const.eventsList.addMeasurement.title',
      defaultTitle: 'Add Measurement',
      descriptionInitial: 'const.eventsList.addMeasurement.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Measurement.',
      descriptionCensoring: 'const.eventsList.addMeasurement.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on Measurement.',
      descriptionGroup: 'const.eventsList.addMeasurement.desc_group',
      defaultDescriptionGroup: 'Find patients based on measurements.',
    },
    addObservation: {
      title: 'const.eventsList.addObservation.title',
      defaultTitle: 'Add Observation',
      descriptionInitial: 'const.eventsList.addObservation.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Observation Period.',
      descriptionCensoring: 'const.eventsList.addObservation.desc_censoring',
      defaultDescriptionCensoring:
        'Exit cohort based on lab tests or other observations.',
      descriptionGroup: 'const.eventsList.addObservation.desc_group',
      defaultDescriptionGroup: 'Find patients based on observations.',
    },
    addObservationPeriod: {
      title: 'const.eventsList.addObservationPeriod.title',
      defaultTitle: 'Add Observation Period',
      descriptionInitial: 'const.eventsList.addObservationPeriod.desc_initial',
      defaultDescriptionInitial: 'Find patients based on observation period.',
      descriptionCensoring:
        'const.eventsList.addObservationPeriod.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on observaton period.',
      descriptionGroup: 'const.eventsList.addObservationPeriod.desc_group',
      defaultDescriptionGroup: 'Find patients based on observation periods.',
    },
    addPayerPlanPeriod: {
      title: 'const.eventsList.addPayerPlanPeriod.title',
      defaultTitle: 'Add Payer Plan Period',
      descriptionInitial: 'const.eventsList.addPayerPlanPeriod.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Payer Plan Period.',
      descriptionCensoring:
        'const.eventsList.addPayerPlanPeriod.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on Payer Plan Period.',
      descriptionGroup: 'const.eventsList.addPayerPlanPeriod.desc_group',
      defaultDescriptionGroup: 'Find patients based on Payer Plan Period.',
    },
    addProcedureOccurrence: {
      title: 'const.eventsList.addProcedureOccurrence.title',
      defaultTitle: 'Add Procedure Occurrence',
      descriptionInitial:
        'const.eventsList.addProcedureOccurrence.desc_initial',
      defaultDescriptionInitial:
        'Find patients that experienced a specific procedure.',
      descriptionCensoring:
        'const.eventsList.addProcedureOccurrence.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on procedures.',
      descriptionGroup: 'const.eventsList.addProcedureOccurrence.desc_group',
      defaultDescriptionGroup:
        'Find patients that experienced a specific procedure.',
      titleImageoccurrence:
        'const.eventsList.addProcedureoccurrence.title_imageOccurrence',
      defaultTitleImageoccurrence: 'Add Procedure Occurrence Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addProcedureoccurrence.desc_imageOccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences based on procedure occurrence of image.',
    },
    addSpecimen: {
      title: 'const.eventsList.addSpecimen.title',
      defaultTitle: 'Add Specimen',
      descriptionInitial: 'const.eventsList.addSpecimen.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Specimen.',
      descriptionCensoring: 'const.eventsList.addSpecimen.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on Specimen.',
      descriptionGroup: 'const.eventsList.addSpecimen.desc_group',
      defaultDescriptionGroup: 'Find patients based on visit information.',
    },
    addVisit: {
      title: 'const.eventsList.addVisit.title',
      defaultTitle: 'Add Visit occurrence',
      descriptionInitial: 'const.eventsList.addVisit.desc_initial',
      defaultDescriptionInitial: 'Find patients based on visit information.',
      descriptionCensoring: 'const.eventsList.addVisit.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on visit information.',
      descriptionGroup: 'const.eventsList.addVisit.desc_group',
      defaultDescriptionGroup: 'Find patients based on visit information.',
      titleOccurrence: 'const.eventsList.addVisit.title_occurrence',
      defaultTitleOccurrence: 'Add Visit Occurrence',
      descriptionOccurrence: 'const.eventsList.addVisit.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on visit occurrence of diagnosis.',
      titleDevice: 'const.eventsList.addVisit.title_deviceexposure',
      defaultTitleDevice: 'Add Visit Criteria',
      descriptionDevice: 'const.eventsList.addVisit.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures based on visit occurrence of exposure.',
      titleDrugexposure: 'const.eventsList.addVisit.title_drugexposure',
      defaultTitleDrugexposure: 'Add Visit Criteria',
      descriptionDrugexposure: 'const.eventsList.addVisit.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures based on visit occurrence of drug exposure.',
      titleMeasurement: 'const.eventsList.addVisit.title_measurement',
      defaultTitleMeasurement: 'Add Visit Criteria',
      descriptionMeasurement: 'const.eventsList.addVisit.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements based on visit occurrence of measurement.',
      titleObservation: 'const.eventsList.addVisit.title_observation',
      defaultTitleObservation: 'Add Visit Criteria',
      descriptionObservation: 'const.eventsList.addVisit.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations based on visit occurrence of observation.',
      titleProcedureoccurrence:
        'const.eventsList.addVisit.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Visit Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addVisit.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on visit occurrence of procedure.',
      titleImageoccurrence: 'const.eventsList.addVisit.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Visit Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addVisit.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences based on visit occurrence of image.',
    },
    addVisitDetail: {
      title: 'const.eventsList.addVisitDetail.title',
      defaultTitle: 'Add Visit Detail',
      descriptionInitial: 'const.eventsList.addVisitDetail.desc_initial',
      defaultDescriptionInitial:
        'Find patients based on visit detail information.',
      descriptionCensoring: 'const.eventsList.addVisitDetail.desc_censoring',
      defaultDescriptionCensoring:
        'Exit cohort based on visit detail information.',
      descriptionGroup: 'const.eventsList.addVisitDetail.desc_group',
      defaultDescriptionGroup:
        'Find patients based on visit detail information.',
      titleVisitDetails: 'const.eventsList.addVisitDetail.title_visit_detail',
      defaultTitleVisitDetails: 'Add Visit Detail',
      descriptionVisitDetails:
        'const.eventsList.addVisitDetail.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on visit detail of diagnosis.',
      titleDevice: 'const.eventsList.addVisitDetail.title_deviceexposure',
      defaultTitleDevice: 'Add Visit Detail Criteria',
      descriptionDevice: 'const.eventsList.addVisitDetail.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures based on visit detail of exposure.',
      titleDrugexposure: 'const.eventsList.addVisit.title_drugexposure',
      defaultTitleDrugexposure: 'Add Visit Detail Criteria',
      descriptionDrugexposure:
        'const.eventsList.addVisitDetail.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures based on visit detail of drug exposure.',
      titleMeasurement: 'const.eventsList.addVisitDetail.title_measurement',
      defaultTitleMeasurement: 'Add Visit Detail Criteria',
      descriptionMeasurement:
        'const.eventsList.addVisitDetail.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements based on visit detail of measurement.',
      titleObservation: 'const.eventsList.addVisitDetail.title_observation',
      defaultTitleObservation: 'Add Visit Detail Criteria',
      descriptionObservation:
        'const.eventsList.addVisitDetail.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations based on visit detail of observation.',
      titleProcedureoccurrence:
        'const.eventsList.addVisitDetail.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Visit Detail Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addVisitDetail.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on visit detail of procedure.',
    },
    // attributes
    addFirstDiagnosis: {
      titleEra: 'const.eventsList.addFirstDiagnosis.title_era',
      defaultTitleEra: 'Add First Diagnosis Criteria',
      descriptionEra: 'const.eventsList.addFirstDiagnosis.desc_era',
      defaultDescriptionEra:
        'Limit Condition Eras to first diagnosis era in history.',
      titleOccurrence: 'const.eventsList.addFirstDiagnosis.title_occurrence',
      defaultTitleOccurrence: 'Add First Diagnosis',
      descriptionOccurrence:
        'const.eventsList.addFirstDiagnosis.desc_occurrence',
      defaultDescriptionOccurrence:
        'Limit Condition Occurrences to new diagnosis.',
      titleDevice: 'const.eventsList.addFirstDiagnosis.title_deviceexposure',
      defaultTitleDevice: 'Add First Exposure Criteria',
      descriptionDevice:
        'const.eventsList.addFirstDiagnosis.desc_deviceexposure',
      defaultDescriptionDevice:
        'Limit Device Exposures to first exposure in history.',
      titleDose: 'const.eventsList.addFirstDiagnosis.title_dose',
      defaultTitleDose: 'Add First Exposure Criteria',
      descriptionDose: 'const.eventsList.addFirstDiagnosis.desc_dose',
      defaultDescriptionDose: 'Limit Dose Era to new exposure.',
      titleDrug: 'const.eventsList.addFirstDiagnosis.title_drug',
      defaultTitleDrug: 'Add First Exposure Criteria',
      descriptionDrug: 'const.eventsList.addFirstDiagnosis.desc_drug',
      defaultDescriptionDrug: 'Limit Drug Eras to first exposure in history.',
      titleDrugexposure:
        'const.eventsList.addFirstDiagnosis.title_drugexposure',
      defaultTitleDrugexposure: 'Add First Exposure Criteria',
      descriptionDrugexposure:
        'const.eventsList.addFirstDiagnosis.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Limit Drug Exposures to the first exposure in history.',
      titleMeasurement: 'const.eventsList.addFirstDiagnosis.title_measurement',
      defaultTitleMeasurement: 'Add First Measure Criteria',
      descriptionMeasurement:
        'const.eventsList.addFirstDiagnosis.desc_measurement',
      defaultDescriptionMeasurement:
        'Limit Measures to first occurrence in history.',
      titleObservation: 'const.eventsList.addFirstDiagnosis.title_observation',
      defaultTitleObservation: 'Add First Observation Criteria',
      descriptionObservation:
        'const.eventsList.addFirstDiagnosis.desc_observation',
      defaultDescriptionObservation:
        'Limit Observations to the first occurrence.',
      titleObservationperiod:
        'const.eventsList.addFirstDiagnosis.title_observationperiod',
      defaultTitleObservationperiod: 'First Observation Period Criteria',
      descriptionObservationperiod:
        'const.eventsList.addFirstDiagnosis.desc_observationperiod',
      defaultDescriptionObservationperiod:
        'Limit Observation Period to first period in history.',
      titlePayerplan: 'const.eventsList.addFirstDiagnosis.title_payerplan',
      defaultTitlePayerplan: 'First Payer Plan Period Criteria',
      descriptionPayerplan: 'const.eventsList.addFirstDiagnosis.desc_payerplan',
      defaultDescriptionPayerplan:
        'Limit Payer Plan Period to first period in history.',
      titleProcedureoccurrence:
        'const.eventsList.addFirstDiagnosis.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add First Procedure Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addFirstDiagnosis.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Limit Procedure Occurrences to first procedure in history.',
      titleSpecimen: 'const.eventsList.addFirstDiagnosis.title_specimen',
      defaultTitleSpecimen: 'Add First Occurrence Criteria',
      descriptionSpecimen: 'const.eventsList.addFirstDiagnosis.desc_specimen',
      defaultDescriptionSpecimen:
        'Limit Specimen to the first occurrence in history.',
      titleVisit: 'const.eventsList.addFirstDiagnosis.title_visit',
      defaultTitleVisit: 'Add First Visit Criteria',
      descriptionVisit: 'const.eventsList.addFirstDiagnosis.desc_visit',
      defaultDescriptionVisit: 'Limit Visit Occurrences to the first visit.',
      titleVisitdetail: 'const.eventsList.addFirstDiagnosis.title_visitDetail',
      defaultTitleVisitdetail: 'Add First Visit Detail Criteria',
      descriptionVisitdetail:
        'const.eventsList.addFirstDiagnosis.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Limit Visit Detail to the first visit.',
      titleImageoccurrence:
        'const.eventsList.addFirstDiagnosis.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add First Image Occurrence Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addFirstDiagnosis.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Limit Image Occurrences to the first occurrence in history.',
    },
    addAge: {
      titleOccurrence: 'const.eventsList.addAge.title_occurrence',
      defaultTitleOccurrence: 'Add Age at Occurrence',
      descriptionOccurrence: 'const.eventsList.addAge.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences by age at occurrence.',
      titleDeath: 'const.eventsList.addAge.title_death',
      defaultTitleDeath: 'Add Age at Occurrence Criteria',
      descriptionDeath: 'const.eventsList.addAge.desc_death',
      defaultDescriptionDeath: 'Filter by age at death.',
      titleDevice: 'const.eventsList.addAge.title_deviceexposure',
      defaultTitleDevice: 'Add Age at Occurrence Criteria',
      descriptionDevice: 'const.eventsList.addAge.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by age at occurrence.',
      titleDrugexposure: 'const.eventsList.addAge.title_drugexposure',
      defaultTitleDrugexposure: 'Add Age at Occurrence Criteria',
      descriptionDrugexposure: 'const.eventsList.addAge.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures by age at occurrence.',
      titleMeasurement: 'const.eventsList.addAge.title_measurement',
      defaultTitleMeasurement: 'Add Age at Occurrence Criteria',
      descriptionMeasurement: 'const.eventsList.addAge.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by age at occurrence.',
      titleObservation: 'const.eventsList.addAge.title_observation',
      defaultTitleObservation: 'Add Age at Occurrence Criteria',
      descriptionObservation: 'const.eventsList.addAge.desc_observation',
      defaultDescriptionObservation:
        'Filter Condition Occurrences by age at occurrence.',
      titleProcedureoccurrence:
        'const.eventsList.addAge.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Age at Occurrence Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addAge.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences by age at occurrence.',
      titleSpecimen: 'const.eventsList.addAge.title_specimen',
      defaultTitleSpecimen: 'Add Age at Occurrence Criteria',
      descriptionSpecimen: 'const.eventsList.addAge.desc_specimen',
      defaultDescriptionSpecimen: 'Filter specimens by age at occurrence.',
      titleVisit: 'const.eventsList.addAge.title_visit',
      defaultTitleVisit: 'Add Age at Occurrence Criteria',
      descriptionVisit: 'const.eventsList.addAge.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by age at occurrence.',
      titleVisitdetail: 'const.eventsList.addAge.title_visitDetail',
      defaultTitleVisitdetail: 'Add Age at Visit detail Criteria',
      descriptionVisitdetail: 'const.eventsList.addAge.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit Detail by age at occurrence.',
      titleDemographic: 'const.eventsList.addAge.title_demographic',
      defaultTitleDemographic: 'Add Age Criteria',
      descriptionDemographic: 'const.eventsList.addAge.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on age.',
      titleImageoccurrence: 'const.eventsList.addAge.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Age at Image Occurrence Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addAge.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences by age at occurrence.',
    },
    addAgeAtStart: {
      titleEra: 'const.eventsList.addAgeAtStart.title_era',
      defaultTitleEra: 'Add Age at Era Start Criteria',
      descriptionEra: 'const.eventsList.addAgeAtStart.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by age at era start.',
      titleDose: 'const.eventsList.addAgeAtStart.title_dose',
      defaultTitleDose: 'Add Age at Era Start Criteria',
      descriptionDose: 'const.eventsList.addAgeAtStart.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras by age at era start.',
      titleDrug: 'const.eventsList.addAgeAtStart.title_drug',
      defaultTitleDrug: 'Add Age at Era Start Criteria',
      descriptionDrug: 'const.eventsList.addAgeAtStart.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by age at era start.',
      titleObservationperiod:
        'const.eventsList.addAgeAtStart.title_observationperiod',
      defaultTitleObservationperiod: 'Add Age at Start Criteria',
      descriptionObservationperiod:
        'const.eventsList.addAgeAtStart.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Periods by Age at Start.',
      titlePayerplan: 'const.eventsList.addAgeAtStart.title_payerplan',
      defaultTitlePayerplan: 'Add Age at Start Criteria',
      descriptionPayerplan: 'const.eventsList.addAgeAtStart.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Periods by Age at Start.',
    },
    addAgeAtEnd: {
      titleEra: 'const.eventsList.addAgeAtEnd.title_era',
      defaultTitleEra: 'Add Age at Era End Criteria',
      descriptionEra: 'const.eventsList.addAgeAtEnd.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by age at era end.',
      titleDose: 'const.eventsList.addAgeAtEnd.title_dose',
      defaultTitleDose: 'Add Age at Era End Criteria',
      descriptionDose: 'const.eventsList.addAgeAtEnd.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras by age at era end.',
      titleDrug: 'const.eventsList.addAgeAtEnd.title_drug',
      defaultTitleDrug: 'Add Age at Era End Criteria',
      descriptionDrug: 'const.eventsList.addAgeAtEnd.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by age at era end.',
      titleObservationperiod:
        'const.eventsList.addAgeAtEnd.title_observationperiod',
      defaultTitleObservationperiod: 'Add Age at End Criteria',
      descriptionObservationperiod:
        'const.eventsList.addAgeAtEnd.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Periods by age at End.',
      titlePayerplan: 'const.eventsList.addAgeAtEnd.title_payerplan',
      defaultTitlePayerplan: 'Add Age at End Criteria',
      descriptionPayerplan: 'const.eventsList.addAgeAtEnd.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Periods by Age at End.',
    },
    addGender: {
      titleEra: 'const.eventsList.addGender.title_era',
      defaultTitleEra: 'Add Gender Criteria',
      descriptionEra: 'const.eventsList.addGender.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras based on Gender.',
      titleOccurrence: 'const.eventsList.addGender.title_occurrence',
      defaultTitleOccurrence: 'Add Gender',
      descriptionOccurrence: 'const.eventsList.addGender.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on Gender.',
      titleDeath: 'const.eventsList.addGender.title_death',
      defaultTitleDeath: 'Add Gender Criteria',
      descriptionDeath: 'const.eventsList.addGender.desc_death',
      defaultDescriptionDeath: 'Filter Deaths based on Gender.',
      titleDevice: 'const.eventsList.addGender.title_deviceexposure',
      defaultTitleDevice: 'Add Gender Criteria',
      descriptionDevice: 'const.eventsList.addGender.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures based on Gender.',
      titleDose: 'const.eventsList.addGender.title_dose',
      defaultTitleDose: 'Add Gender Criteria',
      descriptionDose: 'const.eventsList.addGender.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras based on Gender.',
      titleDrug: 'const.eventsList.addGender.title_drug',
      defaultTitleDrug: 'Add Gender Criteria',
      descriptionDrug: 'const.eventsList.addGender.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras based on Gender.',
      titleDrugexposure: 'const.eventsList.addGender.title_drugexposure',
      defaultTitleDrugexposure: 'Add Gender Criteria',
      descriptionDrugexposure: 'const.eventsList.addGender.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures based on Gender.',
      titleMeasurement: 'const.eventsList.addGender.title_measurement',
      defaultTitleMeasurement: 'Add Gender Criteria',
      descriptionMeasurement: 'const.eventsList.addGender.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements based on Gender.',
      titleObservation: 'const.eventsList.addGender.title_observation',
      defaultTitleObservation: 'Add Gender Criteria',
      descriptionObservation: 'const.eventsList.addGender.desc_observation',
      defaultDescriptionObservation: 'Filter Observations based on Gender.',
      titlePayerplan: 'const.eventsList.addGender.title_payerplan',
      defaultTitlePayerplan: 'Add Gender Criteria',
      descriptionPayerplan: 'const.eventsList.addGender.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods based on Gender.',
      titleProcedureoccurrence:
        'const.eventsList.addGender.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Gender Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addGender.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on Gender.',
      titleSpecimen: 'const.eventsList.addGender.title_specimen',
      defaultTitleSpecimen: 'Add Gender Criteria',
      descriptionSpecimen: 'const.eventsList.addGender.desc_specimen',
      defaultDescriptionSpecimen: 'Filter specimens based on Gender.',
      titleVisit: 'const.eventsList.addGender.title_visit',
      defaultTitleVisit: 'Add Gender Criteria',
      descriptionVisit: 'const.eventsList.addGender.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on Gender.',
      titleVisitdetail: 'const.eventsList.addGender.title_visitDetail',
      defaultTitleVisitdetail: 'Add Gender Criteria',
      descriptionVisitdetail: 'const.eventsList.addGender.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit Detail based on Gender.',
      titleDemographic: 'const.eventsList.addGender.title_demographic',
      defaultTitleDemographic: 'Add Gender Criteria',
      descriptionDemographic: 'const.eventsList.addGender.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on Gender.',
      titleImageoccurrence: 'const.eventsList.addGender.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Gender Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addGender.desc_imageoccurrence',
      defaultDescriptionImageoccurrence: 'Filter Image Occurrences by Gender.',
    },
    addGenderCS: {
      titleEra: 'const.eventsList.addGenderCS.title_era',
      defaultTitleEra: 'Add Gender Criteria',
      descriptionEra: 'const.eventsList.addGenderCS.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras based on Gender.',
      titleOccurrence: 'const.eventsList.addGenderCS.title_occurrence',
      defaultTitleOccurrence: 'Add Gender',
      descriptionOccurrence: 'const.eventsList.addGenderCS.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on Gender.',
      titleDeath: 'const.eventsList.addGenderCS.title_death',
      defaultTitleDeath: 'Add Gender Criteria',
      descriptionDeath: 'const.eventsList.addGenderCS.desc_death',
      defaultDescriptionDeath: 'Filter Deaths based on Gender.',
      titleDevice: 'const.eventsList.addGenderCS.title_deviceexposure',
      defaultTitleDevice: 'Add Gender Criteria',
      descriptionDevice: 'const.eventsList.addGenderCS.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures based on Gender.',
      titleDose: 'const.eventsList.addGenderCS.title_dose',
      defaultTitleDose: 'Add Gender Criteria',
      descriptionDose: 'const.eventsList.addGenderCS.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras based on Gender.',
      titleDrug: 'const.eventsList.addGenderCS.title_drug',
      defaultTitleDrug: 'Add Gender Criteria',
      descriptionDrug: 'const.eventsList.addGenderCS.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras based on Gender.',
      titleDrugexposure: 'const.eventsList.addGenderCS.title_drugexposure',
      defaultTitleDrugexposure: 'Add Gender Criteria',
      descriptionDrugexposure: 'const.eventsList.addGenderCS.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures based on Gender.',
      titleMeasurement: 'const.eventsList.addGenderCS.title_measurement',
      defaultTitleMeasurement: 'Add Gender Criteria',
      descriptionMeasurement: 'const.eventsList.addGenderCS.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements based on Gender.',
      titleObservation: 'const.eventsList.addGenderCS.title_observation',
      defaultTitleObservation: 'Add Gender Criteria',
      descriptionObservation: 'const.eventsList.addGenderCS.desc_observation',
      defaultDescriptionObservation: 'Filter Observations based on Gender.',
      titlePayerplan: 'const.eventsList.addGenderCS.title_payerplan',
      defaultTitlePayerplan: 'Add Gender Criteria',
      descriptionPayerplan: 'const.eventsList.addGenderCS.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods based on Gender.',
      titleProcedureoccurrence:
        'const.eventsList.addGenderCS.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Gender Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addGenderCS.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on Gender.',
      titleSpecimen: 'const.eventsList.addGenderCS.title_specimen',
      defaultTitleSpecimen: 'Add Gender Criteria',
      descriptionSpecimen: 'const.eventsList.addGenderCS.desc_specimen',
      defaultDescriptionSpecimen: 'Filter specimens based on Gender.',
      titleVisit: 'const.eventsList.addGenderCS.title_visit',
      defaultTitleVisit: 'Add Gender Criteria',
      descriptionVisit: 'const.eventsList.addGenderCS.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on Gender.',
      titleVisitdetail: 'const.eventsList.addGenderCS.title_visitDetail',
      defaultTitleVisitdetail: 'Add Gender Criteria',
      descriptionVisitdetail: 'const.eventsList.addGenderCS.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit Detail based on Gender.',
      titleDemographic: 'const.eventsList.addGenderCS.title_demographic',
      defaultTitleDemographic: 'Add Gender Criteria',
      descriptionDemographic: 'const.eventsList.addGenderCS.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on Gender.',
      titleImageoccurrence:
        'const.eventsList.addGenderCS.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Gender Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addGenderCS.desc_imageoccurrence',
      defaultDescriptionImageoccurrence: 'Filter Image Occurrences by Gender.',
    },
    addDate: {
      titleDeath: 'const.eventsList.addDate.title_death',
      defaultTitleDeath: 'Add Death Date Criteria',
      descriptionDeath: 'const.eventsList.addDate.desc_death',
      defaultDescriptionDeath: 'Filter Death by Date.',
      titleMeasurement: 'const.eventsList.addDate.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Date Criteria',
      descriptionMeasurement: 'const.eventsList.addDate.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Date.',
      titleObservation: 'const.eventsList.addDate.title_observation',
      defaultTitleObservation: 'Add Observation Date Criteria',
      descriptionObservation: 'const.eventsList.addDate.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Date.',
      titleProcedureoccurrence:
        'const.eventsList.addDate.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Start Date Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addDate.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences by the Procedure Start Date.',
      titleSpecimen: 'const.eventsList.addDate.title_specimen',
      defaultTitleSpecimen: 'Add Specimen Date Criteria',
      descriptionSpecimen: 'const.eventsList.addDate.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimen by Date.',
      titleImageoccurrence: 'const.eventsList.addDate.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Image Occurrence Date Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addDate.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences by the Image Occurrence Date.',
    },
    addStartDate: {
      titleEra: 'const.eventsList.addStartDate.title_era',
      defaultTitleEra: 'Add Start Date Criteria',
      descriptionEra: 'const.eventsList.addStartDate.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Era Start Date.',
      titleOccurrence: 'const.eventsList.addStartDate.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Start Date',
      descriptionOccurrence: 'const.eventsList.addStartDate.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences by the Condition Start Date.',
      titleDevice: 'const.eventsList.addStartDate.title_deviceexposure',
      defaultTitleDevice: 'Add Start Date Criteria',
      descriptionDevice: 'const.eventsList.addStartDate.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures by the Exposure Start Date.',
      titleDose: 'const.eventsList.addStartDate.title_dose',
      defaultTitleDose: 'Add Era Start Date Criteria',
      descriptionDose: 'const.eventsList.addStartDate.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the Era Start Date.',
      titleDrug: 'const.eventsList.addStartDate.title_drug',
      defaultTitleDrug: 'Add Era Start Date Criteria',
      descriptionDrug: 'const.eventsList.addStartDate.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by the Era Start Date.',
      titleDrugexposure: 'const.eventsList.addStartDate.title_drugexposure',
      defaultTitleDrugexposure: 'Add Start Date Criteria',
      descriptionDrugexposure:
        'const.eventsList.addStartDate.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures by the Drug Exposure Start Date.',
      titleObservationperiod:
        'const.eventsList.addStartDate.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Start Date Criteria',
      descriptionObservationperiod:
        'const.eventsList.addStartDate.desc_observationperiod',
      defaultDescriptionObservationperiod:
        'Filter Observation Periods by Start Date.',
      titlePayerplan: 'const.eventsList.addStartDate.title_payerplan',
      defaultTitlePayerplan: 'Add Period Start Date Criteria',
      descriptionPayerplan: 'const.eventsList.addStartDate.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Start Date.',
      titleVisit: 'const.eventsList.addStartDate.title_visit',
      defaultTitleVisit: 'Add Start Date Criteria',
      descriptionVisit: 'const.eventsList.addStartDate.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences by the Condition Start Date.',
      titleVisitdetail: 'const.eventsList.addStartDate.title_visitDetail',
      defaultTitleVisitdetail: 'Add Start Date Criteria',
      descriptionVisitdetail: 'const.eventsList.addStartDate.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit details by the Start Date.',
      titleDemographic: 'const.eventsList.addStartDate.title_demographic',
      defaultTitleDemographic: 'Add Start Date Criteria',
      descriptionDemographic: 'const.eventsList.addStartDate.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based by Start Date.',
    },
    addEndDate: {
      titleEra: 'const.eventsList.addEndDate.title_era',
      defaultTitleEra: 'Add End Date Criteria',
      descriptionEra: 'const.eventsList.addEndDate.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Era End Date.',
      titleOccurrence: 'const.eventsList.addEndDate.title_occurrence',
      defaultTitleOccurrence: 'Add Condition End Date',
      descriptionOccurrence: 'const.eventsList.addEndDate.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences by the Condition End Date.',
      titleDevice: 'const.eventsList.addEndDate.title_deviceexposure',
      defaultTitleDevice: 'Add End Date Criteria',
      descriptionDevice: 'const.eventsList.addEndDate.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures by the Exposure End Date.',
      titleDose: 'const.eventsList.addEndDate.title_dose',
      defaultTitleDose: 'Add Era End Date Criteria',
      descriptionDose: 'const.eventsList.addEndDate.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras  by the Era End Date',
      titleDrug: 'const.eventsList.addEndDate.title_drug',
      defaultTitleDrug: 'Add Era End Date Criteria',
      descriptionDrug: 'const.eventsList.addEndDate.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras  by the Era End Date.',
      titleDrugexposure: 'const.eventsList.addEndDate.title_drugexposure',
      defaultTitleDrugexposure: 'Add End Date Criteria',
      descriptionDrugexposure: 'const.eventsList.addEndDate.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures  by the Drug Exposure End Date.',
      titleObservationperiod:
        'const.eventsList.addEndDate.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period End Date Criteria',
      descriptionObservationperiod:
        'const.eventsList.addEndDate.desc_observationperiod',
      defaultDescriptionObservationperiod:
        'Filter Observation Periods by End Date.',
      titlePayerplan: 'const.eventsList.addEndDate.title_payerplan',
      defaultTitlePayerplan: 'Add Period End Date Criteria',
      descriptionPayerplan: 'const.eventsList.addEndDate.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by End Date.',
      titleVisit: 'const.eventsList.addEndDate.title_visit',
      defaultTitleVisit: 'Add End Date Criteria',
      descriptionVisit: 'const.eventsList.addEndDate.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences  by the Condition End Date.',
      titleVisitdetail: 'const.eventsList.addEndDate.title_visitDetail',
      defaultTitleVisitdetail: 'Add End Date Criteria',
      descriptionVisitdetail: 'const.eventsList.addEndDate.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit details  by the End Date.',
      titleDemographic: 'const.eventsList.addEndDate.title_demographic',
      defaultTitleDemographic: 'Add Event End Date Criteria',
      descriptionDemographic: 'const.eventsList.addEndDate.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based by End Date.',
    },
    addDateAdjustment: {
      title: 'const.eventsList.addDateAdjust.title',
      defaultTitle: 'Modify Event Start/End',
      description: 'const.eventsList.addDateAdjust.description',
      defaultDescription:
        'Modify the start and end date of the event by a specified offset.',
    },
    addUnit: {
      titleDose: 'const.eventsList.addUnit.title_dose',
      defaultTitleDose: 'Add Dose Unit Criteria',
      descriptionDose: 'const.eventsList.addUnit.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the Unit.',
      titleDrugexposure: 'const.eventsList.addUnit.title_drugexposure',
      defaultTitleDrugexposure: 'Add Dose Unit Criteria',
      descriptionDrugexposure: 'const.eventsList.addUnit.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Dose Unit.',
      titleMeasurement: 'const.eventsList.addUnit.title_measurement',
      defaultTitleMeasurement: 'Add Unit Criteria',
      descriptionMeasurement: 'const.eventsList.addUnit.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Unit.',
      titleObservation: 'const.eventsList.addUnit.title_observation',
      defaultTitleObservation: 'Add Unit Criteria',
      descriptionObservation: 'const.eventsList.addUnit.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Unit.',
      titleSpecimen: 'const.eventsList.addUnit.title_specimen',
      defaultTitleSpecimen: 'Add Unit Criteria',
      descriptionSpecimen: 'const.eventsList.addUnit.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by Unit.',
    },
    addUnitCS: {
      titleDose: 'const.eventsList.addUnitCS.title_dose',
      defaultTitleDose: 'Add Dose Unit Concept Set Criteria',
      descriptionDose: 'const.eventsList.addUnitCS.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the Unit.',
      titleDrugexposure: 'const.eventsList.addUnitCS.title_drugexposure',
      defaultTitleDrugexposure: 'Add Dose Unit Concept Set Criteria',
      descriptionDrugexposure: 'const.eventsList.addUnitCS.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Dose Unit.',
      titleMeasurement: 'const.eventsList.addUnitCS.title_measurement',
      defaultTitleMeasurement: 'Add Unit Concept Set Criteria',
      descriptionMeasurement: 'const.eventsList.addUnitCS.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Unit.',
      titleObservation: 'const.eventsList.addUnitCS.title_observation',
      defaultTitleObservation: 'Add Unit Concept Set Criteria',
      descriptionObservation: 'const.eventsList.addUnitCS.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Unit.',
      titleSpecimen: 'const.eventsList.addUnitCS.title_specimen',
      defaultTitleSpecimen: 'Add Unit Concept Set Criteria',
      descriptionSpecimen: 'const.eventsList.addUnitCS.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by Unit.',
    },
    addConditonCount: {
      titleEra: 'const.eventsList.addConditonCount.title_era',
      defaultTitleEra: 'Add Era Conditon Count Criteria',
      descriptionEra: 'const.eventsList.addConditonCount.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Condition Count.',
      titleDrug: 'const.eventsList.addConditonCount.title_drug',
      defaultTitleDrug: 'Add Era Exposure Count Criteria',
      descriptionDrug: 'const.eventsList.addConditonCount.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by the Exposure Count.',
    },
    addLength: {
      titleEra: 'const.eventsList.addLength.title_era',
      defaultTitleEra: 'Add Era Length Criteria',
      descriptionEra: 'const.eventsList.addLength.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Era duration.',
      titleDose: 'const.eventsList.addLength.title_dose',
      defaultTitleDose: 'Add Dose Value Criteria',
      descriptionDose: 'const.eventsList.addLength.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the dose value.',
      titleDrug: 'const.eventsList.addLength.title_drug',
      defaultTitleDrug: 'Add Era Length Criteria',
      descriptionDrug: 'const.eventsList.addLength.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by the Era duration.',
      titleObservationperiod:
        'const.eventsList.addLength.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Length Criteria',
      descriptionObservationperiod:
        'const.eventsList.addLength.desc_observationperiod',
      defaultDescriptionObservationperiod:
        'Filter Observation Periods by duration.',
      titlePayerplan: 'const.eventsList.addLength.title_payerplan',
      defaultTitlePayerplan: 'Add Period Length Criteria',
      descriptionPayerplan: 'const.eventsList.addLength.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by duration.',
      titleVisit: 'const.eventsList.addLength.title_visit',
      defaultTitleVisit: 'Add Visit Length Criteria',
      descriptionVisit: 'const.eventsList.addLength.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by duration.',
      titleVisitdetail: 'const.eventsList.addLength.title_visitDetail',
      defaultTitleVisitdetail: 'Add Visit detail Length Criteria',
      descriptionVisitdetail: 'const.eventsList.addLength.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit detail by duration.',
    },
    addValue: {
      titleDose: 'const.eventsList.addValue.title_dose',
      defaultTitleDose: 'Add Dose Value Criteria',
      descriptionDose: 'const.eventsList.addValue.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the dose value.',
      titleMeasurement: 'const.eventsList.addValue.title_measurement',
      defaultTitleMeasurement: 'Add Value as Number Criteria',
      descriptionMeasurement: 'const.eventsList.addValue.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Value as Number.',
      titleObservation: 'const.eventsList.addValue.title_observation',
      defaultTitleObservation: 'Add Value As Number Criteria',
      descriptionObservation: 'const.eventsList.addValue.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations  by the Value As Number.',
    },
    addNested: {
      titleEra: 'const.eventsList.addNested.title_era',
      defaultTitleEra: 'Add Nested Criteria...',
      descriptionEra: 'const.eventsList.addNested.desc_era',
      defaultDescriptionEra:
        'Apply criteria using the condition era as the index event.',
      titleOccurrence: 'const.eventsList.addNested.title_occurrence',
      defaultTitleOccurrence: 'Add Nested Criteria...',
      descriptionOccurrence: 'const.eventsList.addNested.desc_occurrence',
      defaultDescriptionOccurrence:
        'Apply criteria using the condition occurrence as the index event.',
      titleDeath: 'const.eventsList.addNested.title_death',
      defaultTitleDeath: 'Add Nested Criteria...',
      descriptionDeath: 'const.eventsList.addNested.desc_death',
      defaultDescriptionDeath:
        'Apply criteria using the death occurrence as the index event.',
      titleDevice: 'const.eventsList.addNested.title_deviceexposure',
      defaultTitleDevice: 'Add Nested Criteria...',
      descriptionDevice: 'const.eventsList.addNested.desc_deviceexposure',
      defaultDescriptionDevice:
        'Apply criteria using the device exposure as the index event.',
      titleDose: 'const.eventsList.addNested.title_dose',
      defaultTitleDose: 'Add Nested Criteria...',
      descriptionDose: 'const.eventsList.addNested.desc_dose',
      defaultDescriptionDose:
        'Apply criteria using the dose era as the index event.',
      titleDrug: 'const.eventsList.addNested.title_drug',
      defaultTitleDrug: 'Add Nested Criteria...',
      descriptionDrug: 'const.eventsList.addNested.desc_drug',
      defaultDescriptionDrug:
        'Apply criteria using the drug exposure as the index event.',
      titleDrugexposure: 'const.eventsList.addNested.title_drugexposure',
      defaultTitleDrugexposure: 'Add Nested Criteria...',
      descriptionDrugexposure: 'const.eventsList.addNested.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures based on provider specialty.',
      titleMeasurement: 'const.eventsList.addNested.title_measurement',
      defaultTitleMeasurement: 'Add Nested Criteria...',
      descriptionMeasurement: 'const.eventsList.addNested.desc_measurement',
      defaultDescriptionMeasurement:
        'Apply criteria using the measurement as the index event.',
      titleObservation: 'const.eventsList.addNested.title_observation',
      defaultTitleObservation: 'Add Nested Criteria...',
      descriptionObservation: 'const.eventsList.addNested.desc_observation',
      defaultDescriptionObservation:
        'Apply criteria using the observation as the index event.',
      titleObservationperiod:
        'const.eventsList.addNested.title_observationperiod',
      defaultTitleObservationperiod: 'Add Nested Criteria...',
      descriptionObservationperiod:
        'const.eventsList.addNested.desc_observationperiod',
      defaultDescriptionObservationperiod:
        'Apply criteria using the observation period as the index event.',
      titlePayerplan: 'const.eventsList.addNested.title_payerplan',
      defaultTitlePayerplan: 'Add Nested Criteria...',
      descriptionPayerplan: 'const.eventsList.addNested.desc_payerplan',
      defaultDescriptionPayerplan:
        'Apply criteria using the payer plan period as the index event.',
      titleProcedureoccurrence:
        'const.eventsList.addNested.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Nested Criteria...',
      descriptionProcedureoccurrence:
        'const.eventsList.addNested.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Apply criteria using the procedure occurrence as the index event.',
      titleSpecimen: 'const.eventsList.addNested.title_specimen',
      defaultTitleSpecimen: 'Add Nested Criteria...',
      descriptionSpecimen: 'const.eventsList.addNested.desc_specimen',
      defaultDescriptionSpecimen:
        'Apply criteria using the specimen as the index event.',
      titleVisit: 'const.eventsList.addNested.title_visit',
      defaultTitleVisit: 'Add Nested Criteria...',
      descriptionVisit: 'const.eventsList.addNested.desc_visit',
      defaultDescriptionVisit:
        'Apply criteria using the visit occurrence as the index event',
      titleVisitdetail: 'const.eventsList.addNested.title_visitDetail',
      defaultTitleVisitdetail: 'Add Nested Criteria...',
      descriptionVisitdetail: 'const.eventsList.addNested.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Apply criteria using the visit detail as the index event',
      titleImageoccurrence: 'const.eventsList.addNested.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Nested Criteria...',
      descriptionImageoccurrence:
        'const.eventsList.addNested.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Apply criteria using the image occurrence as the index event.',
    },
    addType: {
      titleOccurrence: 'const.eventsList.addType.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Type',
      descriptionOccurrence: 'const.eventsList.addType.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences  by the Condition Type.',
      titleDeath: 'const.eventsList.addType.title_death',
      defaultTitleDeath: 'Add Death Type Criteria',
      descriptionDeath: 'const.eventsList.addType.desc_death',
      defaultDescriptionDeath: 'Filter by Death Type.',
      titleDevice: 'const.eventsList.addType.title_deviceexposure',
      defaultTitleDevice: 'Add Device Type Criteria',
      descriptionDevice: 'const.eventsList.addType.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by the Exposure Type.',
      titleDrugexposure: 'const.eventsList.addType.title_drugexposure',
      defaultTitleDrugexposure: 'Add Drug Type Criteria',
      descriptionDrugexposure: 'const.eventsList.addType.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by the Drug Type.',
      titleMeasurement: 'const.eventsList.addType.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Type Criteria',
      descriptionMeasurement: 'const.eventsList.addType.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by the Measurement Type.',
      titleObservation: 'const.eventsList.addType.title_observation',
      defaultTitleObservation: 'Add Observation Type Criteria',
      descriptionObservation: 'const.eventsList.addType.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by the Type.',
      titleObservationperiod:
        'const.eventsList.addType.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Type Criteria',
      descriptionObservationperiod:
        'const.eventsList.addType.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Obsevation Periods by Type.',
      titleProcedureoccurrence:
        'const.eventsList.addType.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Procedure Type Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addType.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences  by the Procedure Type.',
      titleSpecimen: 'const.eventsList.addType.title_specimen',
      defaultTitleSpecimen: 'Add Specimen Type Criteria',
      descriptionSpecimen: 'const.eventsList.addType.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimen by the Type.',
      titleVisit: 'const.eventsList.addType.title_visit',
      defaultTitleVisit: 'Add Visit Type Criteria',
      descriptionVisit: 'const.eventsList.addType.desc_visit',
      defaultDescriptionVisit:
        'Filter Condition Occurrences  by the Condition Type.',
      titleVisitdetail: 'const.eventsList.addType.title_visitDetail',
      defaultTitleVisitdetail: 'Add Visit detail Type Criteria',
      descriptionVisitdetail: 'const.eventsList.addType.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit details  by the Visit Type.',
    },
    addTypeCS: {
      titleOccurrence: 'const.eventsList.addTypeCS.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Type Concept Set',
      descriptionOccurrence: 'const.eventsList.addTypeCS.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences  by the Condition Type.',
      titleDeath: 'const.eventsList.addTypeCS.title_death',
      defaultTitleDeath: 'Add Death Type Concept Set Criteria',
      descriptionDeath: 'const.eventsList.addTypeCS.desc_death',
      defaultDescriptionDeath: 'Filter by Death Type.',
      titleDevice: 'const.eventsList.addTypeCS.title_deviceexposure',
      defaultTitleDevice: 'Add Device Type Concept Set Criteria',
      descriptionDevice: 'const.eventsList.addTypeCS.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by the Exposure Type.',
      titleDrugexposure: 'const.eventsList.addTypeCS.title_drugexposure',
      defaultTitleDrugexposure: 'Add Drug Type Concept Set Criteria',
      descriptionDrugexposure: 'const.eventsList.addTypeCS.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by the Drug Type.',
      titleMeasurement: 'const.eventsList.addTypeCS.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Type Concept Set Criteria',
      descriptionMeasurement: 'const.eventsList.addTypeCS.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by the Measurement Type.',
      titleObservation: 'const.eventsList.addTypeCS.title_observation',
      defaultTitleObservation: 'Add Observation Type Concept Set Criteria',
      descriptionObservation: 'const.eventsList.addTypeCS.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by the Type.',
      titleObservationperiod:
        'const.eventsList.addTypeCS.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Type Concept Set Criteria',
      descriptionObservationperiod:
        'const.eventsList.addTypeCS.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Obsevation Periods by Type.',
      titleProcedureoccurrence:
        'const.eventsList.addTypeCS.title_procedureoccurrence',
      defaultTitleProcedureoccurrence:
        'Add Procedure Type Concept Set Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addTypeCS.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences  by the Procedure Type.',
      titleSpecimen: 'const.eventsList.addTypeCS.title_specimen',
      defaultTitleSpecimen: 'Add Specimen Type Concept Set Criteria',
      descriptionSpecimen: 'const.eventsList.addTypeCS.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimen by the Type.',
      titleVisit: 'const.eventsList.addTypeCS.title_visit',
      defaultTitleVisit: 'Add Visit Type Concept Set Criteria',
      descriptionVisit: 'const.eventsList.addTypeCS.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by the Visit Type.',
      titleVisitdetail: 'const.eventsList.addTypeCS.title_visitDetail',
      defaultTitleVisitdetail: 'Add Visit detail Type Concept Set Criteria',
      descriptionVisitdetail: 'const.eventsList.addTypeCS.desc_visitDetail',
      defaultDescriptionVisitdetail: 'Filter Visit details  by the Visit Type.',
    },
    addUserDefined: {
      titleObservationperiod:
        'const.eventsList.addUserDefined.title_observationperiod',
      defaultTitleObservationperiod: '"Specify Start and End Dates',
      descriptionObservationperiod:
        'const.eventsList.addUserDefined.desc_observationperiod',
      defaultDescriptionObservationperiod:
        'Specify start and end date to use for the Observation Period.',
    },
    addStopReason: {
      titleOccurrence: 'const.eventsList.addStopReason.title_occurrence',
      defaultTitleOccurrence: 'Add Stop Reason',
      descriptionOccurrence: 'const.eventsList.addStopReason.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences  by the Stop Reason.',
      titleDrugexposure: 'const.eventsList.addStopReason.title_drugexposure',
      defaultTitleDrugexposure: 'Add Stop Reason Criteria',
      descriptionDrugexposure:
        'const.eventsList.addStopReason.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures by the Stop Reason.',
    },
    addSourceConcept: {
      titleOccurrence: 'const.eventsList.addSourceConcept.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Source Concept',
      descriptionOccurrence:
        'const.eventsList.addSourceConcept.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences  by the Condition Source Concept.',
      titleDeath: 'const.eventsList.addSourceConcept.title_death',
      defaultTitleDeath: 'Add Cause of Death Source Concept Criteria',
      descriptionDeath: 'const.eventsList.addSourceConcept.desc_death',
      defaultDescriptionDeath: 'Filter Death by the Death Source Concept.',
      titleDevice: 'const.eventsList.addSourceConcept.title_deviceexposure',
      defaultTitleDevice: 'Add Device Source Concept Criteria',
      descriptionDevice:
        'const.eventsList.addSourceConcept.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures by the Device Source Concept.',
      titleMeasurement: 'const.eventsList.addSourceConcept.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Source Concept Criteria',
      descriptionMeasurement:
        'const.eventsList.addSourceConcept.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by the Measurement Source Concept.',
      titleObservation: 'const.eventsList.addSourceConcept.title_observation',
      defaultTitleObservation: 'Add Observation Source Concept Criteria',
      descriptionObservation:
        'const.eventsList.addSourceConcept.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations by the Source Concept.',
      titleProcedureoccurrence:
        'const.eventsList.addSourceConcept.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Procedure Source Concept Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addSourceConcept.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences  by the Procedure Source Concept.',
      titleVisit: 'const.eventsList.addSourceConcept.title_visit',
      defaultTitleVisit: 'Add Visit Source Concept Criteria',
      descriptionVisit: 'const.eventsList.addSourceConcept.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences by the Visit Source Concept.',
      titleVisitdetail: 'const.eventsList.addSourceConcept.title_visitDetail',
      defaultTitleVisitdetail: 'Add Visit detail Source Concept Criteria',
      descriptionVisitdetail:
        'const.eventsList.addSourceConcept.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit detail by the Visit detail  Source Concept.',
    },
    addProviderSpecialty: {
      titleOccurrence: 'const.eventsList.addProviderSpecialty.title_occurrence',
      defaultTitleOccurrence: 'Add Provider Specialty',
      descriptionOccurrence:
        'const.eventsList.addProviderSpecialty.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on provider specialty.',
      titleDevice: 'const.eventsList.addProviderSpecialty.title_deviceexposure',
      defaultTitleDevice: 'Add Provider Specialty Criteria',
      descriptionDevice:
        'const.eventsList.addProviderSpecialty.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures based on provider specialty.',
      titleDrugexposure:
        'const.eventsList.addProviderSpecialty.title_drugexposure',
      defaultTitleDrugexposure: 'Add Provider Specialty Criteria',
      descriptionDrugexposure:
        'const.eventsList.addProviderSpecialty.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures based on provider specialty.',
      titleMeasurement:
        'const.eventsList.addProviderSpecialty.title_measurement',
      defaultTitleMeasurement: 'Add Provider Specialty Criteria',
      descriptionMeasurement:
        'const.eventsList.addProviderSpecialty.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements based on provider specialty.',
      titleObservation:
        'const.eventsList.addProviderSpecialty.title_observation',
      defaultTitleObservation: 'Add Provider Specialty Criteria',
      descriptionObservation:
        'const.eventsList.addProviderSpecialty.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations based on provider specialty.',
      titleProcedureoccurrence:
        'const.eventsList.addProviderSpecialty.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Provider Specialty Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addProviderSpecialty.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on provider specialty.',
      titleVisit: 'const.eventsList.addProviderSpecialty.title_visit',
      defaultTitleVisit: 'Add Provider Specialty Criteria',
      descriptionVisit: 'const.eventsList.addProviderSpecialty.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences based on provider specialty.',
      titleVisitdetail:
        'const.eventsList.addProviderSpecialty.title_visitDetail',
      defaultTitleVisitdetail: 'Add Provider Specialty Criteria',
      descriptionVisitdetail:
        'const.eventsList.addProviderSpecialty.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit detail based on provider specialty.',
    },
    addProviderSpecialtyCS: {
      titleOccurrence:
        'const.eventsList.addProviderSpecialtyCS.title_occurrence',
      defaultTitleOccurrence: 'Add Provider Specialty Concept Set',
      descriptionOccurrence:
        'const.eventsList.addProviderSpecialtyCS.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on provider specialty Concept Set.',
      titleDevice:
        'const.eventsList.addProviderSpecialtyCS.title_deviceexposure',
      defaultTitleDevice: 'Add Provider Specialty Concept Set Criteria',
      descriptionDevice:
        'const.eventsList.addProviderSpecialtyCS.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures based on provider specialty.',
      titleDrugexposure:
        'const.eventsList.addProviderSpecialtyCS.title_drugexposure',
      defaultTitleDrugexposure: 'Add Provider Specialty Concept Set Criteria',
      descriptionDrugexposure:
        'const.eventsList.addProviderSpecialtyCS.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures based on provider specialty.',
      titleMeasurement:
        'const.eventsList.addProviderSpecialtyCS.title_measurement',
      defaultTitleMeasurement: 'Add Provider Specialty Concept Set Criteria',
      descriptionMeasurement:
        'const.eventsList.addProviderSpecialtyCS.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements based on provider specialty.',
      titleObservation:
        'const.eventsList.addProviderSpecialtyCS.title_observation',
      defaultTitleObservation: 'Add Provider Specialty Concept Set Criteria',
      descriptionObservation:
        'const.eventsList.addProviderSpecialtyCS.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations based on provider specialty.',
      titleProcedureoccurrence:
        'const.eventsList.addProviderSpecialtyCS.title_procedureoccurrence',
      defaultTitleProcedureoccurrence:
        'Add Provider Specialty Concept Set Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addProviderSpecialtyCS.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on provider specialty.',
      titleVisit: 'const.eventsList.addProviderSpecialtyCS.title_visit',
      defaultTitleVisit: 'Add Provider Specialty Concept Set Criteria',
      descriptionVisit: 'const.eventsList.addProviderSpecialtyCS.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences based on provider specialty.',
      titleVisitdetail:
        'const.eventsList.addProviderSpecialtyCS.title_visitDetail',
      defaultTitleVisitdetail: 'Add Provider Specialty Concept Set Criteria',
      descriptionVisitdetail:
        'const.eventsList.addProviderSpecialtyCS.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit detail based on provider specialty.',
    },
    addConditionStatus: {
      titleOccurrence: 'const.eventsList.addConditionStatus.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Status',
      descriptionOccurrence:
        'const.eventsList.addConditionStatus.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on condition status.',
    },
    addConditionStatusCS: {
      titleOccurrence: 'const.eventsList.addConditionStatusCS.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Status Concept Set',
      descriptionOccurrence:
        'const.eventsList.addConditionStatus.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on condition status.',
    },
    addPlaceService: {
      titleVisit: 'const.eventsList.addPlaceService.title_visit',
      defaultTitleVisit: 'Add Place of Service Criteria',
      descriptionVisit: 'const.eventsList.addPlaceService.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences based on Place of Service.',
    },
    addPlaceServiceCS: {
      titleVisit: 'const.eventsList.addPlaceServiceCS.title_visit',
      defaultTitleVisit: 'Add Place of Service Concept Set Criteria',
      descriptionVisit: 'const.eventsList.addPlaceServiceCS.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences based on Place of Service.',
      titleVisitdetail: 'const.eventsList.addPlaceServiceCS.title_visitDetail',
      defaultTitleVisitdetail: 'Add Place of Service Concept Set Criteria',
      descriptionVisitdetail:
        'const.eventsList.addPlaceServiceCS.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit detail based on Place of Service.',
    },
    addPlaceServiceLocation: {
      titleVisit: 'const.eventsList.addPlaceServiceLocation.title_visit',
      defaultTitleVisit: 'Add Place of Service Location Criteria',
      descriptionVisit: 'const.eventsList.addPlaceServiceLocation.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences based on where Place of Service is located.',
      titleVisitdetail:
        'const.eventsList.addPlaceServiceLocation.title_visitDetail',
      defaultTitleVisitdetail: 'Add Place of Service Location Criteria',
      descriptionVisitdetail:
        'const.eventsList.addPlaceServiceLocation.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit detail based on where Place of Service is located.',
    },
    addPlaceServiceDistance: {
      titleVisit: 'const.eventsList.addPlaceServiceDistance.title_visit',
      defaultTitleVisit: 'Add Place of Service Location Criteria',
      descriptionVisit: 'const.eventsList.addPlaceServiceDistance.desc_visit',
      defaultDescriptionVisit:
        'Filter Visit Occurrences based on distance from Place of Service to Patient.',
      titleVisitdetail:
        'const.eventsList.addPlaceServiceDistance.title_visitDetail',
      defaultTitleVisitdetail: 'Add Place of Service Location Criteria',
      descriptionVisitdetail:
        'const.eventsList.addPlaceServiceDistance.desc_visitDetail',
      defaultDescriptionVisitdetail:
        'Filter Visit Detail based on distance from Place of Service to Patient.',
    },
    addUniqueId: {
      titleDevice: 'const.eventsList.addUniqueId.title_deviceexposure',
      defaultTitleDevice: 'Add Unique Id Criteria',
      descriptionDevice: 'const.eventsList.addUniqueId.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by Device Unique Id.',
    },
    addQuantity: {
      titleDevice: 'const.eventsList.addQuantity.title_deviceexposure',
      defaultTitleDevice: 'Add Quantity Criteria',
      descriptionDevice: 'const.eventsList.addQuantity.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by Quantity.',
      titleDrugexposure: 'const.eventsList.addQuantity.title_drugexposure',
      defaultTitleDrugexposure: 'Add Quantity Criteria',
      descriptionDrugexposure: 'const.eventsList.addQuantity.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Quantity.',
      titleProcedureoccurrence:
        'const.eventsList.addQuantity.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Quantity Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addQuantity.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences  by Quantity.',
      titleSpecimen: 'const.eventsList.addQuantity.title_specimen',
      defaultTitleSpecimen: 'Add Quantity Criteria',
      descriptionSpecimen: 'const.eventsList.addQuantity.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Observations  by the Quantity.',
    },
    addRefills: {
      titleDrugexposure: 'const.eventsList.addRefills.title_drugexposure',
      defaultTitleDrugexposure: '',
      descriptionDrugexposure: 'const.eventsList.addRefills.desc_drugexposure',
      defaultDescriptionDrugexposure: '',
    },
    addDaysSupply: {
      titleDrugexposure: 'const.eventsList.addDaysSupply.title_drugexposure',
      defaultTitleDrugexposure: 'Add Days Supply Criteria',
      descriptionDrugexposure:
        'const.eventsList.addDaysSupply.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Days Supply.',
    },
    addRoute: {
      titleDrugexposure: 'const.eventsList.addRoute.title_drugexposure',
      defaultTitleDrugexposure: 'Add Route Criteria',
      descriptionDrugexposure: 'const.eventsList.addRoute.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Route.',
    },
    addRouteCS: {
      titleDrugexposure: 'const.eventsList.addRouteCS.title_drugexposure',
      defaultTitleDrugexposure: 'Add Route Concept Set Criteria',
      descriptionDrugexposure: 'const.eventsList.addRouteCS.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Route.',
    },
    addEffective: {
      titleDrugexposure: 'const.eventsList.addEffective.title_drugexposure',
      defaultTitleDrugexposure: 'Add Effective Dose Criteria',
      descriptionDrugexposure:
        'const.eventsList.addEffective.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures by Effective Dose.',
    },
    addLotNumber: {
      titleDrugexposure: 'const.eventsList.addLotNumber.title_drugexposure',
      defaultTitleDrugexposure: 'Add Lot Number Criteria',
      descriptionDrugexposure:
        'const.eventsList.addLotNumber.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Lot Number.',
    },
    addSource: {
      titleDrugexposure: 'const.eventsList.addSource.title_drugexposure',
      defaultTitleDrugexposure: 'Add Drug Source Concept Criteria',
      descriptionDrugexposure: 'const.eventsList.addSource.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures by the Drug Source Concept.',
    },
    addOperator: {
      titleMeasurement: 'const.eventsList.addOperator.title_measurement',
      defaultTitleMeasurement: 'Add Operator Criteria',
      descriptionMeasurement: 'const.eventsList.addOperator.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Operator.',
    },
    addOperatorCS: {
      titleMeasurement: 'const.eventsList.addOperatorCS.title_measurement',
      defaultTitleMeasurement: 'Add Operator Concept Set Criteria',
      descriptionMeasurement: 'const.eventsList.addOperatorCS.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Operator.',
    },
    addValueAsString: {
      titleObservation: 'const.eventsList.addValueAsString.title_observation',
      defaultTitleObservation: 'Add Value As String Criteria',
      descriptionObservation:
        'const.eventsList.addValueAsString.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations by the Value As String.',
    },
    addValueAsConcept: {
      titleMeasurement: 'const.eventsList.addValueAsConcept.title_measurement',
      defaultTitleMeasurement: 'Add Value as Concept Criteria',
      descriptionMeasurement:
        'const.eventsList.addValueAsConcept.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Value as Concept.',
      titleObservation: 'const.eventsList.addValueAsConcept.title_observation',
      defaultTitleObservation: 'Add Value as Concept Criteria',
      descriptionObservation:
        'const.eventsList.addValueAsConcept.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations by the Value As Concept.',
    },
    addValueAsConceptCS: {
      titleMeasurement:
        'const.eventsList.addValueAsConceptCS.title_measurement',
      defaultTitleMeasurement: 'Add Value as Concept Set Criteria',
      descriptionMeasurement:
        'const.eventsList.addValueAsConceptCS.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Value as Concept.',
      titleObservation:
        'const.eventsList.addValueAsConceptCS.title_observation',
      defaultTitleObservation: 'Add Value as Concept Set Criteria',
      descriptionObservation:
        'const.eventsList.addValueAsConceptCS.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations by the Value As Concept.',
    },
    addAbnormal: {
      titleMeasurement: 'const.eventsList.addAbnormal.title_measurement',
      defaultTitleMeasurement: 'Add Abnormal Result Criteria',
      descriptionMeasurement: 'const.eventsList.addAbnormal.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements to include those which fall outside of normal range.',
    },
    addQualifier: {
      titleObservation: 'const.eventsList.addQualifier.title_observation',
      defaultTitleObservation: 'Add Qualifier Criteria',
      descriptionObservation: 'const.eventsList.addQualifier.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Qualifier.',
    },
    addQualifierCS: {
      titleObservation: 'const.eventsList.addQualifierCS.title_observation',
      defaultTitleObservation: 'Add Qualifier Concept Set Criteria',
      descriptionObservation:
        'const.eventsList.addQualifierCS.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Qualifier.',
    },
    addRangeLow: {
      titleMeasurement: 'const.eventsList.addRangeLow.title_measurement',
      defaultTitleMeasurement: 'Add Low Range Criteria',
      descriptionMeasurement: 'const.eventsList.addRangeLow.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements Low Range.',
    },
    addRangeHigh: {
      titleMeasurement: 'const.eventsList.addRangeHigh.title_measurement',
      defaultTitleMeasurement: 'Add High Range Criteria',
      descriptionMeasurement: 'const.eventsList.addRangeHigh.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by the Measurement Type.',
    },
    addRangeLowRatio: {
      titleMeasurement: 'const.eventsList.addRangeLowRatio.title_measurement',
      defaultTitleMeasurement: 'Add Low Range Ratio Criteria',
      descriptionMeasurement:
        'const.eventsList.addRangeLowRatio.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by the Ratio of Value as Number to Range Low.',
    },
    addRangeHighRatio: {
      titleMeasurement: 'const.eventsList.addRangeHighRatio.title_measurement',
      defaultTitleMeasurement: 'Add High Range Ratio Criteria',
      descriptionMeasurement:
        'const.eventsList.addRangeHighRatio.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements by the Ratio of Value as Number to Range High.',
    },
    addPayerConcept: {
      titlePayerplan: 'const.eventsList.addPayerConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Payer Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addPayerConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Payer Concept.',
    },
    addPlanConcept: {
      titlePayerplan: 'const.eventsList.addPlanConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Plan Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addPlanConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Plan Concept.',
    },
    addSponsorConcept: {
      titlePayerplan: 'const.eventsList.addSponsorConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Sponsor Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addSponsorConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Sponsor Concept.',
    },
    addStopReasonConcept: {
      titlePayerplan: 'const.eventsList.addStopReasonConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Stop Reason Concept Criteria',
      descriptionPayerplan:
        'const.eventsList.addStopReasonConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Stop Reason Concept.',
    },
    addPayerSourceConcept: {
      titlePayerplan: 'const.eventsList.addPayerSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Payer Source Concept Criteria',
      descriptionPayerplan:
        'const.eventsList.addPayerSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Payer Source Concept.',
    },
    addPlanSourceConcept: {
      titlePayerplan: 'const.eventsList.addPlanSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Plan Source Concept Criteria',
      descriptionPayerplan:
        'const.eventsList.addPlanSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Plan Source Concept.',
    },
    addSponsorSourceConcept: {
      titlePayerplan:
        'const.eventsList.addSponsorSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Sponsor Source Concept Criteria',
      descriptionPayerplan:
        'const.eventsList.addSponsorSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Sponsor Source Concept.',
    },
    addStopReasonSourceConcept: {
      titlePayerplan:
        'const.eventsList.addStopReasonSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Stop Reason Source Concept Criteria',
      descriptionPayerplan:
        'const.eventsList.addStopReasonSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan:
        'Filter Payer Plan Periods by Stop Reason Source Concept.',
    },
    addModifier: {
      titleProcedureoccurrence:
        'const.eventsList.addModifier.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Modifier Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addModifier.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences  by the Modifier.',
    },
    addModifierCS: {
      titleProcedureoccurrence:
        'const.eventsList.addModifierCS.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Modifier Concept Set Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addModifierCS.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences  by the Modifier.',
    },
    addAnatomicSite: {
      titleSpecimen: 'const.eventsList.addAnatomicSite.title_specimen',
      defaultTitleSpecimen: 'Add Anatomic Site Criteria',
      descriptionSpecimen: 'const.eventsList.addAnatomicSite.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Anatomic Site.',
    },
    addAnatomicSiteCS: {
      titleSpecimen: 'const.eventsList.addAnatomicSiteCS.title_specimen',
      defaultTitleSpecimen: 'Add Anatomic Site Concept Set Criteria',
      descriptionSpecimen: 'const.eventsList.addAnatomicSiteCS.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Anatomic Site.',
      titleImageoccurrence:
        'const.eventsList.addAnatomicSiteCS.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Anatomic Site Concept Set Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addAnatomicSiteCS.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences by the Anatomic Site.',
    },
    addDiseaseStatus: {
      titleSpecimen: 'const.eventsList.addDiseaseStatus.title_specimen',
      defaultTitleSpecimen: 'Add Disease Status Criteria',
      descriptionSpecimen: 'const.eventsList.addDiseaseStatus.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Disease Status.',
    },
    addDiseaseStatusCS: {
      titleSpecimen: 'const.eventsList.addDiseaseStatusCS.title_specimen',
      defaultTitleSpecimen: 'Add Disease Status Concept Set Criteria',
      descriptionSpecimen: 'const.eventsList.addDiseaseStatusCS.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Disease Status.',
    },
    addSourceId: {
      titleSpecimen: 'const.eventsList.addSourceId.title_specimen',
      defaultTitleSpecimen: 'Add Source ID Criteria',
      descriptionSpecimen: 'const.eventsList.addSourceId.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Source ID.',
    },
    addRace: {
      titleDemographic: 'const.eventsList.addRace.title_demographic',
      defaultTitleDemographic: 'Add Race Criteria',
      descriptionDemographic: 'const.eventsList.addRace.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on Race.',
    },
    addRaceCS: {
      titleDemographic: 'const.eventsList.addRaceCS.title_demographic',
      defaultTitleDemographic: 'Add Race Concept Set Criteria',
      descriptionDemographic: 'const.eventsList.addRace.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on Race.',
    },
    addEthnicity: {
      titleDemographic: 'const.eventsList.addEthnicity.title_demographic',
      defaultTitleDemographic: 'Add Ethnicity Criteria',
      descriptionDemographic: 'const.eventsList.addEthnicity.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on Ethnicity.',
    },
    addEthnicityCS: {
      titleDemographic: 'const.eventsList.addEthnicityCS.title_demographic',
      defaultTitleDemographic: 'Add Ethnicity Concept Set Criteria',
      descriptionDemographic: 'const.eventsList.addEthnicity.desc_demographic',
      defaultDescriptionDemographic: 'Filter events based on Ethnicity.',
    },
    addGroup: {
      title: 'const.eventsList.addGroup.title',
      defaultTitle: 'Add Group',
      descriptionGroup: 'const.eventsList.addGroup.desc_group',
      defaultDescriptionGroup:
        'Add a group to combine criteria using and/or relationships.',
    },
    fromReusable: {
      title: 'const.eventsList.fromReusable.title',
      defaultTitle: 'From Reusable',
      descriptionGroup: 'const.eventsList.fromReusable.desc_group',
      defaultDescriptionGroup: 'Add a group from list of reusables',
      descriptionInitial: 'const.eventsList.fromReusable.desc_initial',
      defaultDescriptionInitial: 'Add criteria from list of reusables',
      descriptionCensoring: 'const.eventsList.fromReusable.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort from list of reusables',
    },
    addDemographic: {
      title: 'const.eventsList.addDemographic.title',
      defaultTitle: 'Add Demographic',
      descriptionGroup: 'const.eventsList.addDemographic.desc_group',
      defaultDescriptionGroup: 'Filter events based on demographic criteria.',
    },
    addLocationRegion: {
      title: 'const.eventsList.addLocationRegion.title',
      defaultTitle: 'Add Location Region',
      descriptionGroup: 'const.eventsList.addLocationRegion.desc_group',
      defaultDescriptionGroup: 'Find patients within geographical area.',
    },
    addVisitCS: {
      titleOccurrence: 'const.eventsList.addVisitCS.title_occurrence',
      defaultTitleOccurrence: 'Add Visit Occurrence Concept Set',
      descriptionOccurrence: 'const.eventsList.addVisitCS.desc_occurrence',
      defaultDescriptionOccurrence:
        'Filter Condition Occurrences based on visit occurrence of diagnosis.',
      titleDevice: 'const.eventsList.addVisitCS.title_deviceexposure',
      defaultTitleDevice: 'Add Visit Concept Set Criteria',
      descriptionDevice: 'const.eventsList.addVisitCS.desc_deviceexposure',
      defaultDescriptionDevice:
        'Filter Device Exposures based on visit occurrence of exposure.',
      titleDrugexposure: 'const.eventsList.addVisitCS.title_drugexposure',
      defaultTitleDrugexposure: 'Add Visit Concept Set Criteria',
      descriptionDrugexposure: 'const.eventsList.addVisitCS.desc_drugexposure',
      defaultDescriptionDrugexposure:
        'Filter Drug Exposures based on visit occurrence of drug exposure.',
      titleMeasurement: 'const.eventsList.addVisitCS.title_measurement',
      defaultTitleMeasurement: 'Add Visit Concept Set Criteria',
      descriptionMeasurement: 'const.eventsList.addVisitCS.desc_measurement',
      defaultDescriptionMeasurement:
        'Filter Measurements based on visit occurrence of measurement.',
      titleObservation: 'const.eventsList.addVisitCS.title_observation',
      defaultTitleObservation: 'Add Visit Concept Set Criteria',
      descriptionObservation: 'const.eventsList.addVisitCS.desc_observation',
      defaultDescriptionObservation:
        'Filter Observations based on visit occurrence of observation.',
      titleProcedureoccurrence:
        'const.eventsList.addVisitCS.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Visit Concept Set Criteria',
      descriptionProcedureoccurrence:
        'const.eventsList.addVisitCS.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence:
        'Filter Procedure Occurrences based on visit occurrence of procedure.',
      titleImageoccurrence: 'const.eventsList.addVisitCS.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Visit Concept Set Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addVisitCS.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences based on visit occurrence of image.',
    },
    addModalityCS: {
      titleImageoccurrence:
        'const.eventsList.addModalityCS.title_imageoccurrence',
      defaultTitleImageoccurrence: 'Add Modality Concept Set Criteria',
      descriptionImageoccurrence:
        'const.eventsList.addModalityCS.desc_imageoccurrence',
      defaultDescriptionImageoccurrence:
        'Filter Image Occurrences by the Modality.',
    },
    addImageOccurrence: {
      title: 'const.eventsList.addImageOccurrence.title',
      defaultTitle: 'Add Image Occurrence',
      descriptionInitial: 'const.eventsList.addImageOccurrence.desc_initial',
      defaultDescriptionInitial: 'Find patients based on image occurrence.',
      descriptionCensoring:
        'const.eventsList.addImageOccurrence.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on image occurrence.',
      descriptionGroup: 'const.eventsList.addImageOccurrence.desc_group',
      defaultDescriptionGroup: 'Find patients based on image occurrence.',
    },
  };

  function setCriteria(criteria) {
    return (list = [], descriptionAttr = '', titleAttr = '') => {
      const flatList = {};
      list.map((elem) => {
        const criteriaItem = criteria[elem];
        let attrT = titleAttr
          .toLowerCase()
          .replace(titleAttr.charAt(0), titleAttr.charAt(0).toUpperCase());
        let attrD = descriptionAttr
          .toLowerCase()
          .replace(
            descriptionAttr.charAt(0),
            descriptionAttr.charAt(0).toUpperCase()
          );
        flatList[elem] = {
          title:
            criteriaItem[`title${attrT ? attrT : ''}`] || criteriaItem['title'],
          defaultTitle:
            criteriaItem[`defaultTitle${attrT ? attrT : ''}`] ||
            criteriaItem['defaultTitle'],
          description:
            criteriaItem[`description${attrD ? attrD : ''}`] ||
            criteriaItem['description'],
          defaultDescription:
            criteriaItem[`defaultDescription${attrD ? attrD : ''}`] ||
            criteriaItem['defaultDescription'],
        };
      });

      return flatList;
    };
  }

  const initialEventList = [
    'addConditionEra',
    'addConditionOccurrence',
    'addDeath',
    'addDeviceExposure',
    'addDoseEra',
    'addDrugEra',
    'addDrugExposure',
    'addMeasurement',
    'addObservation',
    'addObservationPeriod',
    'addPayerPlanPeriod',
    'addProcedureOccurrence',
    'addSpecimen',
    'addVisit',
    'addVisitDetail',
    'fromReusable',
    'addImageOccurrence',
  ];
  const censoringEventList = [
    'addConditionEra',
    'addConditionOccurrence',
    'addDeath',
    'addDeviceExposure',
    'addDoseEra',
    'addDrugEra',
    'addDrugExposure',
    'addMeasurement',
    'addObservation',
    'addObservationPeriod',
    'addPayerPlanPeriod',
    'addProcedureOccurrence',
    'addSpecimen',
    'addVisit',
    'addVisitDetail',
    'fromReusable',
    'addImageOccurrence',
  ];
  const groupAttributesList = [
    'addDemographic',
    'addConditionEra',
    'addConditionOccurrence',
    'addDeath',
    'addDeviceExposure',
    'addDoseEra',
    'addDrugEra',
    'addDrugExposure',
    'addLocationRegion',
    'addMeasurement',
    'addObservation',
    'addObservationPeriod',
    'addPayerPlanPeriod',
    'addProcedureOccurrence',
    'addSpecimen',
    'addVisit',
    'addVisitDetail',
    'addGroup',
    'fromReusable',
    'addImageOccurrence',
  ];
  const eraAttributesList = [
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addDateAdjustment',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addConditonCount',
    'addLength',
    'addNested',
  ];
  const occurrenceAttributesList = [
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addGenderCS',
    'addConditionStatus',
    'addConditionStatusCS',
    'addStartDate',
    'addEndDate',
    'addDateAdjustment',
    'addType',
    'addTypeCS',
    'addVisit',
    'addVisitCS',
    'addStopReason',
    'addSourceConcept',
    'addProviderSpecialty',
    'addProviderSpecialtyCS',
    'addNested',
  ];
  const deathAttributesList = [
    'addDateAdjustment',
    'addAge',
    'addGender',
    'addGenderCS',
    'addDate',
    'addType',
    'addTypeCS',
    'addSourceConcept',
    'addNested',
  ];
  const deviceAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addType',
    'addTypeCS',
    'addVisit',
    'addVisitCS',
    'addUniqueId',
    'addQuantity',
    'addProviderSpecialty',
    'addSourceConcept',
    'addProviderSpecialtyCS',
    'addNested',
  ];
  const doseAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addUnit',
    'addUnitCS',
    'addLength',
    'addValue',
    'addNested',
  ];
  const drugAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addLength',
    'addConditonCount',
    'addNested',
  ];
  const measurementAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addGenderCS',
    'addDate',
    'addType',
    'addTypeCS',
    'addVisit',
    'addVisitCS',
    'addOperator',
    'addOperatorCS',
    'addValue',
    'addValueAsConcept',
    'addValueAsConceptCS',
    'addUnit',
    'addUnitCS',
    'addAbnormal',
    'addRangeLow',
    'addRangeHigh',
    'addRangeLowRatio',
    'addRangeHighRatio',
    'addProviderSpecialty',
    'addProviderSpecialtyCS',
    'addSourceConcept',
    'addNested',
  ];
  const drugexposureAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addType',
    'addTypeCS',
    'addVisit',
    'addVisitCS',
    'addStopReason',
    'addRefills',
    'addQuantity',
    'addDaysSupply',
    'addRoute',
    'addRouteCS',
    'addEffective',
    'addUnit',
    'addUnitCS',
    'addLotNumber',
    'addSource',
    'addProviderSpecialty',
    'addProviderSpecialtyCS',
    'addNested',
  ];
  const observationAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addGenderCS',
    'addDate',
    'addType',
    'addTypeCS',
    'addVisit',
    'addVisitCS',
    'addValue',
    'addValueAsString',
    'addValueAsConcept',
    'addValueAsConceptCS',
    'addQualifier',
    'addQualifierCS',
    'addUnit',
    'addUnitCS',
    'addSourceConcept',
    'addProviderSpecialty',
    'addProviderSpecialtyCS',
    'addNested',
  ];
  const observationPeriodAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addUserDefined',
    'addStartDate',
    'addEndDate',
    'addType',
    'addTypeCS',
    'addLength',
    'addNested',
  ];
  const payerPlanAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addLength',
    'addGender',
    'addGenderCS',
    'addUserDefined',
    'addStartDate',
    'addEndDate',
    'addPayerConcept',
    'addPlanConcept',
    'addSponsorConcept',
    'addStopReasonConcept',
    'addPayerSourceConcept',
    'addPlanSourceConcept',
    'addSponsorSourceConcept',
    'addStopReasonSourceConcept',
    'addNested',
  ];
  const procedureOccurrenceAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addVisit',
    'addVisitCS',
    'addGender',
    'addGenderCS',
    'addAge',
    'addType',
    'addTypeCS',
    'addSourceConcept',
    'addProviderSpecialty',
    'addProviderSpecialtyCS',
    'addDate',
    'addQuantity',
    'addModifier',
    'addModifierCS',
    'addNested',
  ];
  const specimenAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addGender',
    'addGenderCS',
    'addNested',
    'addAge',
    'addType',
    'addTypeCS',
    'addDate',
    'addQuantity',
    'addUnit',
    'addUnitCS',
    'addAnatomicSite',
    'addAnatomicSiteCS',
    'addDiseaseStatus',
    'addDiseaseStatusCS',
    'addSourceId',
  ];
  const visitAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addLength',
    'addAge',
    'addType',
    'addTypeCS',
    'addSourceConcept',
    'addProviderSpecialty',
    'addProviderSpecialtyCS',
    'addPlaceService',
    'addPlaceServiceCS',
    'addPlaceServiceLocation',
    'addNested',
  ];
  const visitDetailAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addLength',
    'addAge',
    'addTypeCS',
    'addSourceConcept',
    'addProviderSpecialtyCS',
    'addPlaceServiceCS',
    'addPlaceServiceLocation',
    'addNested',
  ];
  const demographicAttributesList = [
    'addAge',
    'addGender',
    'addGenderCS',
    'addStartDate',
    'addEndDate',
    'addRace',
    'addRaceCS',
    'addEthnicity',
    'addEthnicityCS',
  ];
  const windowedpAttributesList = [
    'addDemographic',
    'addConditionEra',
    'addConditionOccurrence',
    'addDeath',
    'addDeviceExposure',
    'addDoseEra',
    'addDrugEra',
    'addDrugExposure',
    'addLocationRegion',
    'addMeasurement',
    'addObservation',
    'addObservationPeriod',
    'addPayerPlanPeriod',
    'addProcedureOccurrence',
    'addSpecimen',
    'addVisit',
  ];
  const imageOccurrenceAttributesList = [
    'addDateAdjustment',
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addGenderCS',
    'addDate',
    'addVisit',
    'addVisitCS',
    'addProcedureOccurrence',
    'addAnatomicSiteCS',
    'addModalityCS',
    'addNested',
  ];

  const CriteriaTypes = {
    addDemographic: 'Demographic',
    addConditionEra: 'ConditionEra',
    addConditionOccurrence: 'ConditionOccurrence',
    addDeath: 'Death',
    addDeviceExposure: 'DeviceExposure',
    addDoseEra: 'DoseEra',
    addDrugEra: 'DrugEra',
    addDrugExposure: 'DrugExposure',
    addLocationRegion: 'LocationRegion',
    addMeasurement: 'Measurement',
    addObservation: 'Observation',
    addObservationPeriod: 'ObservationPeriod',
    addPayerPlanPeriod: 'PayerPlanPeriod',
    addProcedureOccurrence: 'ProcedureOccurrence',
    addSpecimen: 'Specimen',
    addVisit: 'VisitOccurrence',
    addVisitDetail: 'VisitDetail',
    addGroup: 'Group',
    addImageOccurrence: 'ImageOccurrence',
  };

  const getListCriteria = setCriteria(criteria);

  return {
    CriteriaTypes,
    initialEventList: getListCriteria(initialEventList, 'initial'),
    censoringEventList: getListCriteria(censoringEventList, 'censoring'),
    groupAttributes: getListCriteria(groupAttributesList, 'group'),
    windowedAttributes: getListCriteria(windowedpAttributesList, 'group'),
    eraAttributes: getListCriteria(eraAttributesList, 'era', 'era'),
    occurrenceAttributes: getListCriteria(
      occurrenceAttributesList,
      'occurrence',
      'occurrence'
    ),
    deathAttributes: getListCriteria(deathAttributesList, 'death', 'death'),
    deviceAttributes: getListCriteria(deviceAttributesList, 'device', 'device'),
    doseAttributes: getListCriteria(doseAttributesList, 'dose', 'dose'),
    drugAttributes: getListCriteria(drugAttributesList, 'drug', 'drug'),
    drugexposureAttributes: getListCriteria(
      drugexposureAttributesList,
      'drugexposure',
      'drugexposure'
    ),
    measurementAttributes: getListCriteria(
      measurementAttributesList,
      'measurement',
      'measurement'
    ),
    observationAttributes: getListCriteria(
      observationAttributesList,
      'observation',
      'observation'
    ),
    observationPeriodAttributes: getListCriteria(
      observationPeriodAttributesList,
      'observationperiod',
      'observationperiod'
    ),
    payerPlanAttributes: getListCriteria(
      payerPlanAttributesList,
      'payerplan',
      'payerplan'
    ),
    procedureOccurrenceAttributes: getListCriteria(
      procedureOccurrenceAttributesList,
      'procedureoccurrence',
      'procedureoccurrence'
    ),
    specimenAttributes: getListCriteria(
      specimenAttributesList,
      'specimen',
      'specimen'
    ),
    visitAttributes: getListCriteria(visitAttributesList, 'visit', 'visit'),
    visitDetailAttributes: getListCriteria(
      visitDetailAttributesList,
      'visitdetail',
      'visitdetail'
    ),
    demographicAttributes: getListCriteria(
      demographicAttributesList,
      'demographic',
      'demographic'
    ),
    imageOccurrenceAttributes: getListCriteria(
      imageOccurrenceAttributesList,
      'imageoccurrence',
      'imageoccurrence'
    ),
  };
});

