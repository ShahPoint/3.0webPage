var pcrFormControls = {
  "StateRequiredElement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eState.01",
    "NemsisName": "State Required Element",
    "ElementTitle": "State Required Element",
    "ngModel": "StateRequiredElement",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indicates which elements are required by the state",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "StateRequiredElement",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "TIMESTAMP"
    ]
  },
  "CustomDataElementTitle": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.01",
    "NemsisName": "Custom Data Element Title",
    "ElementTitle": "Custom Data Element Title",
    "ngModel": "CustomDataElementTitle",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "This is the title of the custom data element created to collect information that is not defined formally in NEMSIS Version 3.",
    "Usage": "Mandatory",
    "V3Changes": "Added to allow customized data elements to be inserted and collected from within the NEMSIS Version 3 standard.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CustomTitle",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "nemsisElement"
    ]
  },
  "CustomDefinition": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.02",
    "NemsisName": "Custom Definition",
    "ElementTitle": "Custom Definition",
    "ngModel": "CustomDefinition",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The definition of the custom element and how it should be used.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CustomDefinition",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "0",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "CustomDataType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.03",
    "NemsisName": "Custom Data Type",
    "ElementTitle": "Custom Data Type",
    "ngModel": "CustomDataType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The data type of the custom element.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CustomDataType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9902001",
        "text": "Binary"
      },
      {
        "id": "9902003",
        "text": "Date/Time"
      },
      {
        "id": "9902005",
        "text": "Integer/Number"
      },
      {
        "id": "9902007",
        "text": "Other"
      },
      {
        "id": "9902009",
        "text": "Text/String"
      },
      {
        "id": "9902011",
        "text": "Boolean"
      }
    ],
    "attributes": []
  },
  "CustomDataElementRecurrence": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.04",
    "NemsisName": "Custom Data Element Recurrence",
    "ElementTitle": "Custom Data Element Recurrence",
    "ngModel": "CustomDataElementRecurrence",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indication if the data element will accept multiple values.",
    "Usage": "Mandatory",
    "V3Changes": "Added to allow customized data elements to be inserted and collected from within the NEMSIS Version 3 standard.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "CustomDataElementUsage": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.05",
    "NemsisName": "Custom Data Element Usage",
    "ElementTitle": "Custom Data Element Usage",
    "ngModel": "CustomDataElementUsage",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Usage (Mandatory, Required, Recommended or Optional) for the Custom Data Element.",
    "Usage": "Mandatory",
    "V3Changes": "Added to allow customized data elements to be inserted and collected from within the NEMSIS Version 3 standard.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ElementUsage",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9903001",
        "text": "Mandatory"
      },
      {
        "id": "9903003",
        "text": "Required"
      },
      {
        "id": "9903005",
        "text": "Recommended"
      },
      {
        "id": "9903007",
        "text": "Optional"
      }
    ],
    "attributes": []
  },
  "CustomDataElementPotentialValues": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.06",
    "NemsisName": "Custom Data Element Potential Values",
    "ElementTitle": "Custom Data Element Potential Values",
    "ngModel": "CustomDataElementPotentialValues",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The values which are associated with the Custom Data Element. Values would be the choices provided to the user when they document the Custom Data Element",
    "Usage": "Optional",
    "V3Changes": "Added to allow customized data elements to be inserted and collected from within the NEMSIS Version 3 standard.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "CustomValue",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "nemsisCode",
      "customValueDescription"
    ]
  },
  "CustomDataElementPotentialNOTValues(NV)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.07",
    "NemsisName": "Custom Data Element Potential NOT Values (NV)",
    "ElementTitle": "Custom Data Element Potential NOT Values (NV)",
    "ngModel": "CustomDataElementPotentialNOTValues(NV)",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "NOT Values (NV) associated with the custom element",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "NV",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "7701001",
        "text": "Not Applicable"
      },
      {
        "id": "7701003",
        "text": "Not Recorded"
      },
      {
        "id": "7701005",
        "text": "Not Reporting"
      }
    ],
    "attributes": []
  },
  "CustomDataElementPotentialPertinentNegativeValues(PN)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.08",
    "NemsisName": "Custom Data Element Potential Pertinent Negative Values (PN)",
    "ElementTitle": "Custom Data Element Potential Pertinent Negative Values (PN)",
    "ngModel": "CustomDataElementPotentialPertinentNegativeValues(PN)",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Pertinent Negative Values (PN) associated with the custom element",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PN",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "8801001",
        "text": "Contraindication Noted"
      },
      {
        "id": "8801003",
        "text": "Denied By Order"
      },
      {
        "id": "8801005",
        "text": "Exam Finding Not Present"
      },
      {
        "id": "8801007",
        "text": "Medication Allergy"
      },
      {
        "id": "8801009",
        "text": "Medication Already Taken"
      },
      {
        "id": "8801013",
        "text": "No Known Drug Allergy"
      },
      {
        "id": "8801015",
        "text": "None Reported"
      },
      {
        "id": "8801017",
        "text": "Not Performed by EMS"
      },
      {
        "id": "8801019",
        "text": "Refused"
      },
      {
        "id": "8801021",
        "text": "Unresponsive"
      },
      {
        "id": "8801023",
        "text": "Unable to Complete"
      }
    ],
    "attributes": []
  },
  "CustomDataElementGroupingID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomConfiguration.09",
    "NemsisName": "Custom Data Element Grouping ID",
    "ElementTitle": "Custom Data Element Grouping ID",
    "ngModel": "CustomDataElementGroupingID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "ID for custom element grouping.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CorrelationID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "0",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSAgencyUniqueStateID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.01",
    "NemsisName": "EMS Agency Unique State ID",
    "ElementTitle": "EMS Agency Unique State ID",
    "ngModel": "EMSAgencyUniqueStateID",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The unique ID assigned to the EMS Agency which is associated with all state licensure numbers and information.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSAgencyStateID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSAgencyNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.01",
    "NemsisName": "EMS Agency Number",
    "ElementTitle": "EMS Agency Number",
    "ngModel": "EMSAgencyNumber",
    "V2Number": "E02_01",
    "National": "National",
    "State": "State",
    "Definition": "The state-assigned provider number of the responding agency",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSAgencyNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "15",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSAgencyName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.02",
    "NemsisName": "EMS Agency Name",
    "ElementTitle": "EMS Agency Name",
    "ngModel": "EMSAgencyName",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "EMS Agency Name",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMSAgencyName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSAgencyState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.04",
    "NemsisName": "EMS Agency State",
    "ElementTitle": "EMS Agency State",
    "ngModel": "EMSAgencyState",
    "V2Number": "D01_03",
    "National": "National",
    "State": "State",
    "Definition": "The state/territory which assigned the EMS agency number.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "EMSAgencyServiceAreaStates": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.05",
    "NemsisName": "EMS Agency Service Area States",
    "ElementTitle": "EMS Agency Service Area States",
    "ngModel": "EMSAgencyServiceAreaStates",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The states in which the EMS Agency provides services including the state associated with the EMS Agency Number.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "EMSAgencyServiceAreaCounty(ies)": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.06",
    "NemsisName": "EMS Agency Service Area County(ies)",
    "ElementTitle": "EMS Agency Service Area County(ies)",
    "ngModel": "EMSAgencyServiceAreaCounty(ies)",
    "V2Number": "D01_04",
    "National": "National",
    "State": "State",
    "Definition": "The county(ies) within each state for which the agency formally provides service.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "ANSICountyCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSAgencyCensusTracts": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.07",
    "NemsisName": "EMS Agency Census Tracts",
    "ElementTitle": "EMS Agency Census Tracts",
    "ngModel": "EMSAgencyCensusTracts",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The US census tracts in which the EMS agency formally provides service.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "CensusTracts",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{11}",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "EMSAgencyServiceAreaZIPCodes": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.08",
    "NemsisName": "EMS Agency Service Area ZIP Codes",
    "ElementTitle": "EMS Agency Service Area ZIP Codes",
    "ngModel": "EMSAgencyServiceAreaZIPCodes",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The ZIP codes for the EMS Agency's service area.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ZIP",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": [
      "CorrelationID",
      "NV"
    ]
  },
  "PrimaryTypeofService": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.09",
    "NemsisName": "Primary Type of Service",
    "ElementTitle": "Primary Type of Service",
    "ngModel": "PrimaryTypeofService",
    "V2Number": "D01_05",
    "National": "National",
    "State": "State",
    "Definition": "The primary service type provided by the agency.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TypeOfService",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9920001",
        "text": "911 Response (Scene) with Transport Capability"
      },
      {
        "id": "9920003",
        "text": "911 Response (Scene) without Transport Capability"
      },
      {
        "id": "9920005",
        "text": "Air Medical"
      },
      {
        "id": "9920007",
        "text": "ALS Intercept"
      },
      {
        "id": "9920011",
        "text": "Hazmat"
      },
      {
        "id": "9920013",
        "text": "Medical Transport (Convalescent, Interfacility Transfer Hospital and Nursing Home)"
      },
      {
        "id": "9920015",
        "text": "Rescue"
      },
      {
        "id": "9920017",
        "text": "Community Paramedicine"
      },
      {
        "id": "9920019",
        "text": "Critical Care (Ground)"
      }
    ],
    "attributes": []
  },
  "OtherTypesofService": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.10",
    "NemsisName": "Other Types of Service",
    "ElementTitle": "Other Types of Service",
    "ngModel": "OtherTypesofService",
    "V2Number": "D01_06",
    "National": "",
    "State": "State",
    "Definition": "The other service type(s) which are provided by the agency.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "TypeOfService",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9920001",
        "text": "911 Response (Scene) with Transport Capability"
      },
      {
        "id": "9920003",
        "text": "911 Response (Scene) without Transport Capability"
      },
      {
        "id": "9920005",
        "text": "Air Medical"
      },
      {
        "id": "9920007",
        "text": "ALS Intercept"
      },
      {
        "id": "9920011",
        "text": "Hazmat"
      },
      {
        "id": "9920013",
        "text": "Medical Transport (Convalescent, Interfacility Transfer Hospital and Nursing Home)"
      },
      {
        "id": "9920015",
        "text": "Rescue"
      },
      {
        "id": "9920017",
        "text": "Community Paramedicine"
      },
      {
        "id": "9920019",
        "text": "Critical Care (Ground)"
      }
    ],
    "attributes": [
      "CorrelationID",
      "NV"
    ]
  },
  "LevelofService": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.11",
    "NemsisName": "Level of Service",
    "ElementTitle": "Level of Service",
    "ngModel": "LevelofService",
    "V2Number": "D01_07",
    "National": "National",
    "State": "State",
    "Definition": "The level of service which the agency provides EMS care for every request for service (the minimum certification level). This may be the license level granted by the state EMS office.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StateCertificationLicensureLevels",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9917001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9917003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9917005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9917007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9917009",
        "text": "First Responder"
      },
      {
        "id": "9917011",
        "text": "EMT-Basic"
      },
      {
        "id": "9917013",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9917015",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9917019",
        "text": "Physician"
      },
      {
        "id": "9917021",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9917023",
        "text": "Community Paramedicine"
      },
      {
        "id": "9917025",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9917027",
        "text": "Physician Assistant"
      },
      {
        "id": "9917029",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9917031",
        "text": "Registered Nurse"
      }
    ],
    "attributes": []
  },
  "OrganizationStatus": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.12",
    "NemsisName": "Organization Status",
    "ElementTitle": "Organization Status",
    "ngModel": "OrganizationStatus",
    "V2Number": "D01_09",
    "National": "National",
    "State": "State",
    "Definition": "The primary organizational status of the agency. The definition of Volunteer or Non-Volunteer is based on state or local definitions.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OrganizationStatus",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1016001",
        "text": "Mixed"
      },
      {
        "id": "1016003",
        "text": "Non-Volunteer"
      },
      {
        "id": "1016005",
        "text": "Volunteer"
      }
    ],
    "attributes": []
  },
  "OrganizationalType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.13",
    "NemsisName": "Organizational Type",
    "ElementTitle": "Organizational Type",
    "ngModel": "OrganizationalType",
    "V2Number": "D01_08",
    "National": "National",
    "State": "State",
    "Definition": "The organizational structure from which EMS services are delivered (fire, hospital, county, etc.)",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OrganizationalType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9912001",
        "text": "Fire Department"
      },
      {
        "id": "9912003",
        "text": "Governmental, Non-Fire"
      },
      {
        "id": "9912005",
        "text": "Hospital"
      },
      {
        "id": "9912007",
        "text": "Private, Nonhospital"
      },
      {
        "id": "9912009",
        "text": "Tribal"
      }
    ],
    "attributes": []
  },
  "EMSAgencyOrganizationalTaxStatus": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.14",
    "NemsisName": "EMS Agency Organizational Tax Status",
    "ElementTitle": "EMS Agency Organizational Tax Status",
    "ngModel": "EMSAgencyOrganizationalTaxStatus",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The EMS Agencies business/corporate organizational tax status",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "AgencyOrganizationalTaxStatus",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1018001",
        "text": "For Profit"
      },
      {
        "id": "1018003",
        "text": "Other (e.g., Government)"
      },
      {
        "id": "1018005",
        "text": "Not For Profit"
      }
    ],
    "attributes": []
  },
  "StatisticalCalendarYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.15",
    "NemsisName": "Statistical Calendar Year",
    "ElementTitle": "Statistical Calendar Year",
    "ngModel": "StatisticalCalendarYear",
    "V2Number": "D01_10",
    "National": "National",
    "State": "State",
    "Definition": "The calendar year to which the information pertains for the EMS Agency and the specific EMS Agency Number (dAgency.02).",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Year",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900",
    "maxInclusive": "2050",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TotalPrimaryServiceAreaSize": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.16",
    "NemsisName": "Total Primary Service Area Size",
    "ElementTitle": "Total Primary Service Area Size",
    "ngModel": "TotalPrimaryServiceAreaSize",
    "V2Number": "D01_12",
    "National": "National",
    "State": "State",
    "Definition": "The total square miles in the agency's service area.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "TotalServiceAreaPopulation": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.17",
    "NemsisName": "Total Service Area Population",
    "ElementTitle": "Total Service Area Population",
    "ngModel": "TotalServiceAreaPopulation",
    "V2Number": "D01_13",
    "National": "National",
    "State": "State",
    "Definition": "The total population in the agency's service area based if possible on year 2010 census data.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "911EMSCallCenterVolumeperYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.18",
    "NemsisName": "911 EMS Call Center Volume per Year",
    "ElementTitle": "911 EMS Call Center Volume per Year",
    "ngModel": "911EMSCallCenterVolumeperYear",
    "V2Number": "D01_14",
    "National": "National",
    "State": "State",
    "Definition": "The number of 911 calls received by the call center during the last calendar year",
    "Usage": "Required",
    "V3Changes": "Name Clarified with \"Call Center\"",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSDispatchVolumeperYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.19",
    "NemsisName": "EMS Dispatch Volume per Year",
    "ElementTitle": "EMS Dispatch Volume per Year",
    "ngModel": "EMSDispatchVolumeperYear",
    "V2Number": "D01_15",
    "National": "National",
    "State": "State",
    "Definition": "The number of EMS dispatches during the last calendar year",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPatientTransportVolumeperYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.20",
    "NemsisName": "EMS Patient Transport Volume per Year",
    "ElementTitle": "EMS Patient Transport Volume per Year",
    "ngModel": "EMSPatientTransportVolumeperYear",
    "V2Number": "D01_16",
    "National": "National",
    "State": "State",
    "Definition": "The number of EMS transports per year based on last calendar year.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPatientContactVolumeperYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.21",
    "NemsisName": "EMS Patient Contact Volume per Year",
    "ElementTitle": "EMS Patient Contact Volume per Year",
    "ngModel": "EMSPatientContactVolumeperYear",
    "V2Number": "D01_17",
    "National": "National",
    "State": "State",
    "Definition": "The number of EMS patient contacts per year based on last calendar year.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSBillableCallsperYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.22",
    "NemsisName": "EMS Billable Calls per Year",
    "ElementTitle": "EMS Billable Calls per Year",
    "ngModel": "EMSBillableCallsperYear",
    "V2Number": "D01_18",
    "National": "",
    "State": "State",
    "Definition": "The number of EMS patient encounters which are billable based on the last calendar year.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AnnualAgencyStatistics",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "4000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSAgencyTimeZone": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.23",
    "NemsisName": "EMS Agency Time Zone",
    "ElementTitle": "EMS Agency Time Zone",
    "ngModel": "EMSAgencyTimeZone",
    "V2Number": "D01_19",
    "National": "",
    "State": "",
    "Definition": "The time zone for the EMS Agency.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSAgencyTimeZone",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1027001",
        "text": "All other time zones"
      },
      {
        "id": "1027003",
        "text": "GMT-04:00 Atlantic Time"
      },
      {
        "id": "1027005",
        "text": "GMT-05:00 Eastern Time"
      },
      {
        "id": "1027007",
        "text": "GMT-06:00 Central Time"
      },
      {
        "id": "1027009",
        "text": "GMT-07:00 Mountain Time"
      },
      {
        "id": "1027011",
        "text": "GMT-08:00 Pacific Time"
      },
      {
        "id": "1027013",
        "text": "GMT-09:00 Alaska"
      },
      {
        "id": "1027015",
        "text": "GMT-10:00 Hawaii"
      },
      {
        "id": "1027017",
        "text": "GMT-11:00 Midway Island, Samoa"
      }
    ],
    "attributes": []
  },
  "EMSAgencyDaylightSavingsTimeUse": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.24",
    "NemsisName": "EMS Agency Daylight Savings Time Use",
    "ElementTitle": "EMS Agency Daylight Savings Time Use",
    "ngModel": "EMSAgencyDaylightSavingsTimeUse",
    "V2Number": "D01_20",
    "National": "",
    "State": "",
    "Definition": "Indicate if the EMS Agency conforms to Daylight Savings Time.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "NationalProviderIdentifier": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.25",
    "NemsisName": "National Provider Identifier",
    "ElementTitle": "National Provider Identifier",
    "ngModel": "NationalProviderIdentifier",
    "V2Number": "D01_21",
    "National": "National",
    "State": "State",
    "Definition": "The National Provider Identifier issued by CMS.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "NationalProviderIdentifier",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "10",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "FireDepartmentIDNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dAgency.26",
    "NemsisName": "Fire Department ID Number",
    "ElementTitle": "Fire Department ID Number",
    "ngModel": "FireDepartmentIDNumber",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The state assigned Fire Department ID Number for EMS Agency(ies) operating within a Fire Department.",
    "Usage": "Required",
    "V3Changes": "Added to better associate Fire and EMS licensure and operational identifiers.",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "FireDepartmentIDNumber",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "20",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "AgencyContactType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.01",
    "NemsisName": "Agency Contact Type",
    "ElementTitle": "Agency Contact Type",
    "ngModel": "AgencyContactType",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The contact type within the EMS agency.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AgencyContactType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1101001",
        "text": "Administrative Assistant"
      },
      {
        "id": "1101003",
        "text": "EMS Agency Director/Chief/Lead Administrator/CEO"
      },
      {
        "id": "1101005",
        "text": "EMS Assistant Agency Director/Chief/Administrator/CEO"
      },
      {
        "id": "1101007",
        "text": "EMS Assistant Medical Director"
      },
      {
        "id": "1101009",
        "text": "EMS IT/Data Specialist"
      },
      {
        "id": "1101011",
        "text": "EMS Medical Director"
      },
      {
        "id": "1101013",
        "text": "EMS Quality/Performance Improvement Specialist"
      },
      {
        "id": "1101015",
        "text": "EMS Training/Education Specialist"
      },
      {
        "id": "1101017",
        "text": "Other"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "AgencyContactLastName": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.02",
    "NemsisName": "Agency Contact Last Name",
    "ElementTitle": "Agency Contact Last Name",
    "ngModel": "AgencyContactLastName",
    "V2Number": "D02_01",
    "National": "",
    "State": "State",
    "Definition": "The Last Name of the agency's primary contact.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonLastName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgencyContactFirstName": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.03",
    "NemsisName": "Agency Contact First Name",
    "ElementTitle": "Agency Contact First Name",
    "ngModel": "AgencyContactFirstName",
    "V2Number": "D02_03",
    "National": "",
    "State": "State",
    "Definition": "The first name of the agency's primary contact.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonFirstName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgencyContactMiddleName/Initial": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.04",
    "NemsisName": "Agency Contact Middle Name/Initial",
    "ElementTitle": "Agency Contact Middle Name/Initial",
    "ngModel": "AgencyContactMiddleName/Initial",
    "V2Number": "D02_02",
    "National": "",
    "State": "",
    "Definition": "The middle name or initial of the agency's primary contact.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonMiddleName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "AgencyContactAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.05",
    "NemsisName": "Agency Contact Address",
    "ElementTitle": "Agency Contact Address",
    "ngModel": "AgencyContactAddress",
    "V2Number": "D02_04",
    "National": "",
    "State": "State",
    "Definition": "The street address of the agency contact's mailing address.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "StreetAddress",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "StreetAddress2"
    ]
  },
  "AgencyContactCity": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.06",
    "NemsisName": "Agency Contact City",
    "ElementTitle": "Agency Contact City",
    "ngModel": "AgencyContactCity",
    "V2Number": "D02_05",
    "National": "",
    "State": "State",
    "Definition": "The city of the EMS contact's mailing address.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CityGnisCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgencyContactState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.07",
    "NemsisName": "Agency Contact State",
    "ElementTitle": "Agency Contact State",
    "ngModel": "AgencyContactState",
    "V2Number": "D02_06",
    "National": "",
    "State": "State",
    "Definition": "The state of the Agency contact's mailing address.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSIStateCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgencyContactZIPCode": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.08",
    "NemsisName": "Agency Contact ZIP Code",
    "ElementTitle": "Agency Contact ZIP Code",
    "ngModel": "AgencyContactZIPCode",
    "V2Number": "D02_07",
    "National": "",
    "State": "State",
    "Definition": "The ZIP code of the Agency's contact's mailing address.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ZIP",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgencyContactCountry": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.09",
    "NemsisName": "Agency Contact Country",
    "ElementTitle": "Agency Contact Country",
    "ngModel": "AgencyContactCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Country code of the Agency's contact's mailing address.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCodesCAMXUS",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "CA",
        "text": "Canada"
      },
      {
        "id": "MX",
        "text": "Mexico"
      },
      {
        "id": "US",
        "text": "United States"
      }
    ],
    "attributes": []
  },
  "AgencyContactPhoneNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.10",
    "NemsisName": "Agency Contact Phone Number",
    "ElementTitle": "Agency Contact Phone Number",
    "ngModel": "AgencyContactPhoneNumber",
    "V2Number": "D02_08",
    "National": "",
    "State": "State",
    "Definition": "Agency contact phone number.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "PhoneNumber",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID",
      "NV"
    ]
  },
  "AgencyContactEmailAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.11",
    "NemsisName": "Agency Contact Email Address",
    "ElementTitle": "Agency Contact Email Address",
    "ngModel": "AgencyContactEmailAddress",
    "V2Number": "D02_10",
    "National": "",
    "State": "State",
    "Definition": "The primary email address of the Agency contact.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EmailAddress",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "3",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": ".+@.+",
    "options": [],
    "attributes": [
      "NV",
      "EmailAddressType",
      "CorrelationID"
    ]
  },
  "EMSAgencyContactWebAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.12",
    "NemsisName": "EMS Agency Contact Web Address",
    "ElementTitle": "EMS Agency Contact Web Address",
    "ngModel": "EMSAgencyContactWebAddress",
    "V2Number": "D02_11",
    "National": "",
    "State": "State",
    "Definition": "The primary website address of the agency.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "WebAddress",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "3",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgencyMedicalDirectorDegree": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.13",
    "NemsisName": "Agency Medical Director Degree",
    "ElementTitle": "Agency Medical Director Degree",
    "ngModel": "AgencyMedicalDirectorDegree",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The medical school degree type of the EMS Medical Director.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AgencyMedicalDirectorDegree",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1113001",
        "text": "Doctor of Medicine"
      },
      {
        "id": "1113003",
        "text": "Doctor of Osteopathy"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "AgencyMedicalDirectorBoardCertificationType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.14",
    "NemsisName": "Agency Medical Director Board Certification Type",
    "ElementTitle": "Agency Medical Director Board Certification Type",
    "ngModel": "AgencyMedicalDirectorBoardCertificationType",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "Documentation of the type of board certification of the EMS Agency Medical Director.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "AgencyMedicalDirectorBoardCertificationType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1114001",
        "text": "Allergy and Immunology"
      },
      {
        "id": "1114003",
        "text": "Anesthesiology"
      },
      {
        "id": "1114005",
        "text": "Colon and Rectal Surgery"
      },
      {
        "id": "1114007",
        "text": "Dermatology"
      },
      {
        "id": "1114009",
        "text": "Emergency Medicine"
      },
      {
        "id": "1114011",
        "text": "Family Medicine"
      },
      {
        "id": "1114013",
        "text": "Internal Medicine"
      },
      {
        "id": "1114015",
        "text": "Neurological Surgery"
      },
      {
        "id": "1114017",
        "text": "Neurology"
      },
      {
        "id": "1114019",
        "text": "None (Not Board Certified)"
      },
      {
        "id": "1114021",
        "text": "Obstetrics and Gynecology"
      },
      {
        "id": "1114023",
        "text": "Ophthalmology"
      },
      {
        "id": "1114025",
        "text": "Orthopedic Surgery"
      },
      {
        "id": "1114027",
        "text": "Otolaryngology"
      },
      {
        "id": "1114029",
        "text": "Pediatrics"
      },
      {
        "id": "1114031",
        "text": "Physical Medicine and Rehabilitation"
      },
      {
        "id": "1114033",
        "text": "Plastic Surgery"
      },
      {
        "id": "1114035",
        "text": "Psychiatry"
      },
      {
        "id": "1114037",
        "text": "Surgery"
      },
      {
        "id": "1114039",
        "text": "Thoracic Surgery"
      },
      {
        "id": "1114041",
        "text": "Urology"
      },
      {
        "id": "1114043",
        "text": "Vascular Surgery"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "MedicalDirectorCompensation": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.15",
    "NemsisName": "Medical Director Compensation",
    "ElementTitle": "Medical Director Compensation",
    "ngModel": "MedicalDirectorCompensation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indication of Medical Director's Compensation.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "MedicalDirectorCompensation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1115001",
        "text": "Compensated"
      },
      {
        "id": "1115003",
        "text": "Non-Compensated"
      }
    ],
    "attributes": []
  },
  "EMSMedicalDirectorFellowshipTrainedStatus": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dContact.16",
    "NemsisName": "EMS Medical Director Fellowship Trained Status",
    "ElementTitle": "EMS Medical Director Fellowship Trained Status",
    "ngModel": "EMSMedicalDirectorFellowshipTrainedStatus",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indication if the EMS Medical Director is Fellowship trained.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "StateAssociatedwiththeCertification/LicensureLevels": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.01",
    "NemsisName": "State Associated with the Certification/Licensure Levels",
    "ElementTitle": "State Associated with the Certification/Licensure Levels",
    "ngModel": "StateAssociatedwiththeCertification/LicensureLevels",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The state associated with the state certification/licensure levels.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "StateCertification/LicensureLevels": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.02",
    "NemsisName": "State Certification/Licensure Levels",
    "ElementTitle": "State Certification/Licensure Levels",
    "ngModel": "StateCertification/LicensureLevels",
    "V2Number": "D04_01",
    "National": "National",
    "State": "State",
    "Definition": "All of the potential levels of certification/licensure for EMS personnel recognized by the state.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "LicensureLevels",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9911001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9911003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9911005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9911007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9911009",
        "text": "EMT-Basic"
      },
      {
        "id": "9911011",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9911013",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9911015",
        "text": "First Responder"
      },
      {
        "id": "9911019",
        "text": "Other"
      },
      {
        "id": "9911021",
        "text": "Physician"
      },
      {
        "id": "9911023",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9911025",
        "text": "Community Paramedicine"
      },
      {
        "id": "9911027",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9911029",
        "text": "Physician Assistant"
      },
      {
        "id": "9911031",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9911033",
        "text": "Registered Nurse"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "ProceduresPermittedbytheState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.03",
    "NemsisName": "Procedures Permitted by the State",
    "ElementTitle": "Procedures Permitted by the State",
    "ngModel": "ProceduresPermittedbytheState",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "A list of all of the procedures permitted by the EMS Agency's licensing state.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "snomed",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "100000",
    "maxInclusive": "1000000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "MedicationsPermittedbytheState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.04",
    "NemsisName": "Medications Permitted by the State",
    "ElementTitle": "Medications Permitted by the State",
    "ngModel": "MedicationsPermittedbytheState",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "A list of all of the medications permitted by the state to be used by each EMS state certification/licensure level.",
    "Usage": "Required",
    "V3Changes": "State EMS systems which have regulatory authority to identify medications to be administered within the state may identify specific RxNorm codes based on medical direction and their own need. \t\t\t\t\t\t\t\t\t\t<br/><br/>List of medications based on RxNorm (RXCUI) code.  \t\t\t\t\t\t\t\t\t\t<br/><br/>Reference the NEMSIS Suggested Lists at: http://nemsis.org/v3/resources.html\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t<br/><br/>RxNorm \t\t\t\t\t\t\t\t\t\t<br/>Website - http://uts.nlm.nih.gov \t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t<br/><br/>Product - UMLS Metathesaurus \t\t\t\t\t\t\t\t\t\t<br/>Website - http://www.nlm.nih.gov/research/umls/rxnorm/docs/rxnormfiles.html \t\t\t\t\t\t\t\t\t\t<br/>Product - RxNorm Full Monthly Release",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "Medication",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "7",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "ProtocolsPermittedbytheState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.05",
    "NemsisName": "Protocols Permitted by the State",
    "ElementTitle": "Protocols Permitted by the State",
    "ngModel": "ProtocolsPermittedbytheState",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "A list of all of the protocols permitted by the state.",
    "Usage": "Required",
    "V3Changes": "Added to better identify states with statewide protocols and define state EMS capability and care.",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ProtocolsUsed",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9914001",
        "text": "Airway"
      },
      {
        "id": "9914003",
        "text": "Airway-Failed"
      },
      {
        "id": "9914005",
        "text": "Airway-Obstruction/Foreign Body"
      },
      {
        "id": "9914007",
        "text": "Airway-Rapid Sequence Induction (RSI-Paralytic)"
      },
      {
        "id": "9914009",
        "text": "Airway-Sedation Assisted (Non-Paralytic)"
      },
      {
        "id": "9914011",
        "text": "Cardiac Arrest-Asystole"
      },
      {
        "id": "9914013",
        "text": "Cardiac Arrest-Hypothermia-Therapeutic"
      },
      {
        "id": "9914015",
        "text": "Cardiac Arrest-Pulseless Electrical Activity"
      },
      {
        "id": "9914017",
        "text": "Cardiac Arrest-Ventricular Fibrillation/ Pulseless Ventricular Tachycardia"
      },
      {
        "id": "9914019",
        "text": "Cardiac Arrest-Post Resuscitation Care"
      },
      {
        "id": "9914021",
        "text": "Environmental-Altitude Sickness"
      },
      {
        "id": "9914023",
        "text": "Environmental-Cold Exposure"
      },
      {
        "id": "9914025",
        "text": "Environmental-Frostbite/Cold Injury"
      },
      {
        "id": "9914027",
        "text": "Environmental-Heat Exposure/Exhaustion"
      },
      {
        "id": "9914029",
        "text": "Environmental-Heat Stroke/Hyperthermia"
      },
      {
        "id": "9914031",
        "text": "Environmental-Hypothermia"
      },
      {
        "id": "9914033",
        "text": "Exposure-Airway/Inhalation Irritants"
      },
      {
        "id": "9914035",
        "text": "Exposure-Biological/Infectious"
      },
      {
        "id": "9914037",
        "text": "Exposure-Blistering Agents"
      },
      {
        "id": "9914041",
        "text": "Exposure-Chemicals to Eye"
      },
      {
        "id": "9914043",
        "text": "Exposure-Cyanide"
      },
      {
        "id": "9914045",
        "text": "Exposure-Explosive/ Blast Injury"
      },
      {
        "id": "9914047",
        "text": "Exposure-Nerve Agents"
      },
      {
        "id": "9914049",
        "text": "Exposure-Radiologic Agents"
      },
      {
        "id": "9914051",
        "text": "General-Back Pain"
      },
      {
        "id": "9914053",
        "text": "General-Behavioral/Patient Restraint"
      },
      {
        "id": "9914055",
        "text": "General-Cardiac Arrest"
      },
      {
        "id": "9914057",
        "text": "General-Dental Problems"
      },
      {
        "id": "9914059",
        "text": "General-Epistaxis"
      },
      {
        "id": "9914061",
        "text": "General-Fever"
      },
      {
        "id": "9914063",
        "text": "General-Individualized Patient Protocol"
      },
      {
        "id": "9914065",
        "text": "General-Indwelling Medical Devices/Equipment"
      },
      {
        "id": "9914067",
        "text": "General-IV Access"
      },
      {
        "id": "9914069",
        "text": "General-Medical Device Malfunction"
      },
      {
        "id": "9914071",
        "text": "General-Pain Control"
      },
      {
        "id": "9914073",
        "text": "General-Spinal Immobilization/Clearance"
      },
      {
        "id": "9914075",
        "text": "General-Universal Patient Care/ Initial Patient Contact"
      },
      {
        "id": "9914077",
        "text": "Injury-Amputation"
      },
      {
        "id": "9914079",
        "text": "Injury-Bites and Envenomations-Land"
      },
      {
        "id": "9914081",
        "text": "Injury-Bites and Envenomations-Marine"
      },
      {
        "id": "9914083",
        "text": "Injury-Bleeding/ Hemorrhage Control"
      },
      {
        "id": "9914085",
        "text": "Injury-Burns-Thermal"
      },
      {
        "id": "9914087",
        "text": "Injury-Cardiac Arrest"
      },
      {
        "id": "9914089",
        "text": "Injury-Crush Syndrome"
      },
      {
        "id": "9914091",
        "text": "Injury-Diving Emergencies"
      },
      {
        "id": "9914093",
        "text": "Injury-Drowning/Near Drowning"
      },
      {
        "id": "9914095",
        "text": "Injury-Electrical Injuries"
      },
      {
        "id": "9914097",
        "text": "Injury-Extremity"
      },
      {
        "id": "9914099",
        "text": "Injury-Eye"
      },
      {
        "id": "9914101",
        "text": "Injury-Head"
      },
      {
        "id": "9914103",
        "text": "Injury-Impaled Object"
      },
      {
        "id": "9914105",
        "text": "Injury-Multisystem"
      },
      {
        "id": "9914107",
        "text": "Injury-Spinal Cord"
      },
      {
        "id": "9914109",
        "text": "Medical-Abdominal Pain"
      },
      {
        "id": "9914111",
        "text": "Medical-Allergic Reaction/Anaphylaxis"
      },
      {
        "id": "9914113",
        "text": "Medical-Altered Mental Status"
      },
      {
        "id": "9914115",
        "text": "Medical-Bradycardia"
      },
      {
        "id": "9914117",
        "text": "Medical-Cardiac Chest Pain"
      },
      {
        "id": "9914119",
        "text": "Medical-Diarrhea"
      },
      {
        "id": "9914121",
        "text": "Medical-Hyperglycemia"
      },
      {
        "id": "9914123",
        "text": "Medical-Hypertension"
      },
      {
        "id": "9914125",
        "text": "Medical-Hypoglycemia/Diabetic Emergency"
      },
      {
        "id": "9914127",
        "text": "Medical-Hypotension/Shock (Non-Trauma)"
      },
      {
        "id": "9914129",
        "text": "Medical-Influenza-Like Illness/ Upper Respiratory Infection"
      },
      {
        "id": "9914131",
        "text": "Medical-Nausea/Vomiting"
      },
      {
        "id": "9914133",
        "text": "Medical-Newborn/ Neonatal Resuscitation"
      },
      {
        "id": "9914135",
        "text": "General-Overdose/Poisoning/Toxic Ingestion"
      },
      {
        "id": "9914137",
        "text": "Medical-Pulmonary Edema/CHF"
      },
      {
        "id": "9914139",
        "text": "Medical-Respiratory Distress/Asthma/COPD/Reactive Airway"
      },
      {
        "id": "9914141",
        "text": "Medical-Seizure"
      },
      {
        "id": "9914143",
        "text": "Medical-ST-Elevation Myocardial Infarction (STEMI)"
      },
      {
        "id": "9914145",
        "text": "Medical-Stroke/TIA"
      },
      {
        "id": "9914147",
        "text": "Medical-Supraventricular Tachycardia (Including Atrial Fibrillation)"
      },
      {
        "id": "9914149",
        "text": "Medical-Syncope"
      },
      {
        "id": "9914151",
        "text": "Medical-Ventricular Tachycardia (With Pulse)"
      },
      {
        "id": "9914153",
        "text": "Not Done"
      },
      {
        "id": "9914155",
        "text": "OB/GYN-Childbirth/Labor/Delivery"
      },
      {
        "id": "9914157",
        "text": "OB/GYN-Eclampsia"
      },
      {
        "id": "9914159",
        "text": "OB/GYN-Gynecologic Emergencies"
      },
      {
        "id": "9914161",
        "text": "OB/GYN-Pregnancy Related Emergencies"
      },
      {
        "id": "9914163",
        "text": "OB/GYN-Post-partum Hemorrhage"
      },
      {
        "id": "9914165",
        "text": "Other"
      },
      {
        "id": "9914167",
        "text": "Exposure-Carbon Monoxide"
      },
      {
        "id": "9914169",
        "text": "Cardiac Arrest-Do Not Resuscitate"
      },
      {
        "id": "9914171",
        "text": "Cardiac Arrest-Special Resuscitation Orders"
      },
      {
        "id": "9914173",
        "text": "Exposure-Smoke Inhalation"
      },
      {
        "id": "9914175",
        "text": "General-Community Paramedicine / Mobile Integrated Healthcare"
      },
      {
        "id": "9914177",
        "text": "General-Exception Protocol"
      },
      {
        "id": "9914179",
        "text": "General-Extended Care Guidelines"
      },
      {
        "id": "9914181",
        "text": "General-Interfacility Transfers"
      },
      {
        "id": "9914183",
        "text": "General-Law Enforcement - Blood for Legal Purposes"
      },
      {
        "id": "9914185",
        "text": "General-Law Enforcement - Assist with Law Enforcement Activity"
      },
      {
        "id": "9914187",
        "text": "General-Neglect or Abuse Suspected"
      },
      {
        "id": "9914189",
        "text": "General-Refusal of Care"
      },
      {
        "id": "9914191",
        "text": "Injury-Mass/Multiple Casualties"
      },
      {
        "id": "9914193",
        "text": "Injury-Thoracic"
      },
      {
        "id": "9914195",
        "text": "Medical-Adrenal Insufficiency"
      },
      {
        "id": "9914197",
        "text": "Medical-Apparent Life Threatening Event (ALTE)"
      },
      {
        "id": "9914199",
        "text": "Medical-Tachycardia"
      },
      {
        "id": "9914201",
        "text": "Cardiac Arrest-Determination of Death / Withholding Resuscitative Efforts"
      },
      {
        "id": "9914203",
        "text": "Injury-Conducted Electrical Weapon (e.g., Taser)"
      },
      {
        "id": "9914205",
        "text": "Injury-Facial Trauma"
      },
      {
        "id": "9914207",
        "text": "Injury-General Trauma Management"
      },
      {
        "id": "9914209",
        "text": "Injury-Lightning/Lightning Strike"
      },
      {
        "id": "9914211",
        "text": "Injury-SCUBA Injury/Accidents"
      },
      {
        "id": "9914213",
        "text": "Injury-Topical Chemical Burn"
      },
      {
        "id": "9914215",
        "text": "Medical-Beta Blocker Poisoning/Overdose"
      },
      {
        "id": "9914217",
        "text": "Medical-Calcium Channel Blocker Poisoning/Overdose"
      },
      {
        "id": "9914219",
        "text": "Medical-Opioid Poisoning/Overdose"
      },
      {
        "id": "9914221",
        "text": "Medical-Respiratory Distress-Bronchiolitis"
      },
      {
        "id": "9914223",
        "text": "Medical-Respiratory Distress-Croup"
      },
      {
        "id": "9914225",
        "text": "Medical-Stimulant Poisoning/Overdose"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "EMSCertificationLevelsPermittedtoPerformEachProcedure": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.06",
    "NemsisName": "EMS Certification Levels Permitted to Perform Each Procedure",
    "ElementTitle": "EMS Certification Levels Permitted to Perform Each Procedure",
    "ngModel": "EMSCertificationLevelsPermittedtoPerformEachProcedure",
    "V2Number": "D04_05",
    "National": "National",
    "State": "State",
    "Definition": "EMS certification levels which are permitted to perform the procedure listed in dConfiguration.07.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StateCertificationLicensureLevels",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9917001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9917003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9917005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9917007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9917009",
        "text": "First Responder"
      },
      {
        "id": "9917011",
        "text": "EMT-Basic"
      },
      {
        "id": "9917013",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9917015",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9917019",
        "text": "Physician"
      },
      {
        "id": "9917021",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9917023",
        "text": "Community Paramedicine"
      },
      {
        "id": "9917025",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9917027",
        "text": "Physician Assistant"
      },
      {
        "id": "9917029",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9917031",
        "text": "Registered Nurse"
      }
    ],
    "attributes": []
  },
  "EMSAgencyProcedures": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.07",
    "NemsisName": "EMS Agency Procedures",
    "ElementTitle": "EMS Agency Procedures",
    "ngModel": "EMSAgencyProcedures",
    "V2Number": "D04_04",
    "National": "National",
    "State": "State",
    "Definition": "A list of all procedures that the agency has implemented and available for use by any/all EMS certification levels.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "snomed",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "100000",
    "maxInclusive": "1000000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSCertificationLevelsPermittedtoAdministerEachMedication": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.08",
    "NemsisName": "EMS Certification Levels Permitted to Administer Each Medication",
    "ElementTitle": "EMS Certification Levels Permitted to Administer Each Medication",
    "ngModel": "EMSCertificationLevelsPermittedtoAdministerEachMedication",
    "V2Number": "D04_07",
    "National": "National",
    "State": "State",
    "Definition": "All EMS certification levels which are permitted to administer the medications listed in dConfiguration.09 (EMS Agency Medications).",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StateCertificationLicensureLevels",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9917001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9917003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9917005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9917007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9917009",
        "text": "First Responder"
      },
      {
        "id": "9917011",
        "text": "EMT-Basic"
      },
      {
        "id": "9917013",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9917015",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9917019",
        "text": "Physician"
      },
      {
        "id": "9917021",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9917023",
        "text": "Community Paramedicine"
      },
      {
        "id": "9917025",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9917027",
        "text": "Physician Assistant"
      },
      {
        "id": "9917029",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9917031",
        "text": "Registered Nurse"
      }
    ],
    "attributes": []
  },
  "EMSAgencyMedications": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.09",
    "NemsisName": "EMS Agency Medications",
    "ElementTitle": "EMS Agency Medications",
    "ngModel": "EMSAgencyMedications",
    "V2Number": "D04_06",
    "National": "National",
    "State": "State",
    "Definition": "A list of all medications the agency has implemented and have available for use.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "Medication",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "7",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSAgencyProtocols": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.10",
    "NemsisName": "EMS Agency Protocols",
    "ElementTitle": "EMS Agency Protocols",
    "ngModel": "EMSAgencyProtocols",
    "V2Number": "D04_08",
    "National": "National",
    "State": "State",
    "Definition": "A list of all of the EMS field protocols that the agency has in place and available for use.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "ProtocolsUsed",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9914001",
        "text": "Airway"
      },
      {
        "id": "9914003",
        "text": "Airway-Failed"
      },
      {
        "id": "9914005",
        "text": "Airway-Obstruction/Foreign Body"
      },
      {
        "id": "9914007",
        "text": "Airway-Rapid Sequence Induction (RSI-Paralytic)"
      },
      {
        "id": "9914009",
        "text": "Airway-Sedation Assisted (Non-Paralytic)"
      },
      {
        "id": "9914011",
        "text": "Cardiac Arrest-Asystole"
      },
      {
        "id": "9914013",
        "text": "Cardiac Arrest-Hypothermia-Therapeutic"
      },
      {
        "id": "9914015",
        "text": "Cardiac Arrest-Pulseless Electrical Activity"
      },
      {
        "id": "9914017",
        "text": "Cardiac Arrest-Ventricular Fibrillation/ Pulseless Ventricular Tachycardia"
      },
      {
        "id": "9914019",
        "text": "Cardiac Arrest-Post Resuscitation Care"
      },
      {
        "id": "9914021",
        "text": "Environmental-Altitude Sickness"
      },
      {
        "id": "9914023",
        "text": "Environmental-Cold Exposure"
      },
      {
        "id": "9914025",
        "text": "Environmental-Frostbite/Cold Injury"
      },
      {
        "id": "9914027",
        "text": "Environmental-Heat Exposure/Exhaustion"
      },
      {
        "id": "9914029",
        "text": "Environmental-Heat Stroke/Hyperthermia"
      },
      {
        "id": "9914031",
        "text": "Environmental-Hypothermia"
      },
      {
        "id": "9914033",
        "text": "Exposure-Airway/Inhalation Irritants"
      },
      {
        "id": "9914035",
        "text": "Exposure-Biological/Infectious"
      },
      {
        "id": "9914037",
        "text": "Exposure-Blistering Agents"
      },
      {
        "id": "9914041",
        "text": "Exposure-Chemicals to Eye"
      },
      {
        "id": "9914043",
        "text": "Exposure-Cyanide"
      },
      {
        "id": "9914045",
        "text": "Exposure-Explosive/ Blast Injury"
      },
      {
        "id": "9914047",
        "text": "Exposure-Nerve Agents"
      },
      {
        "id": "9914049",
        "text": "Exposure-Radiologic Agents"
      },
      {
        "id": "9914051",
        "text": "General-Back Pain"
      },
      {
        "id": "9914053",
        "text": "General-Behavioral/Patient Restraint"
      },
      {
        "id": "9914055",
        "text": "General-Cardiac Arrest"
      },
      {
        "id": "9914057",
        "text": "General-Dental Problems"
      },
      {
        "id": "9914059",
        "text": "General-Epistaxis"
      },
      {
        "id": "9914061",
        "text": "General-Fever"
      },
      {
        "id": "9914063",
        "text": "General-Individualized Patient Protocol"
      },
      {
        "id": "9914065",
        "text": "General-Indwelling Medical Devices/Equipment"
      },
      {
        "id": "9914067",
        "text": "General-IV Access"
      },
      {
        "id": "9914069",
        "text": "General-Medical Device Malfunction"
      },
      {
        "id": "9914071",
        "text": "General-Pain Control"
      },
      {
        "id": "9914073",
        "text": "General-Spinal Immobilization/Clearance"
      },
      {
        "id": "9914075",
        "text": "General-Universal Patient Care/ Initial Patient Contact"
      },
      {
        "id": "9914077",
        "text": "Injury-Amputation"
      },
      {
        "id": "9914079",
        "text": "Injury-Bites and Envenomations-Land"
      },
      {
        "id": "9914081",
        "text": "Injury-Bites and Envenomations-Marine"
      },
      {
        "id": "9914083",
        "text": "Injury-Bleeding/ Hemorrhage Control"
      },
      {
        "id": "9914085",
        "text": "Injury-Burns-Thermal"
      },
      {
        "id": "9914087",
        "text": "Injury-Cardiac Arrest"
      },
      {
        "id": "9914089",
        "text": "Injury-Crush Syndrome"
      },
      {
        "id": "9914091",
        "text": "Injury-Diving Emergencies"
      },
      {
        "id": "9914093",
        "text": "Injury-Drowning/Near Drowning"
      },
      {
        "id": "9914095",
        "text": "Injury-Electrical Injuries"
      },
      {
        "id": "9914097",
        "text": "Injury-Extremity"
      },
      {
        "id": "9914099",
        "text": "Injury-Eye"
      },
      {
        "id": "9914101",
        "text": "Injury-Head"
      },
      {
        "id": "9914103",
        "text": "Injury-Impaled Object"
      },
      {
        "id": "9914105",
        "text": "Injury-Multisystem"
      },
      {
        "id": "9914107",
        "text": "Injury-Spinal Cord"
      },
      {
        "id": "9914109",
        "text": "Medical-Abdominal Pain"
      },
      {
        "id": "9914111",
        "text": "Medical-Allergic Reaction/Anaphylaxis"
      },
      {
        "id": "9914113",
        "text": "Medical-Altered Mental Status"
      },
      {
        "id": "9914115",
        "text": "Medical-Bradycardia"
      },
      {
        "id": "9914117",
        "text": "Medical-Cardiac Chest Pain"
      },
      {
        "id": "9914119",
        "text": "Medical-Diarrhea"
      },
      {
        "id": "9914121",
        "text": "Medical-Hyperglycemia"
      },
      {
        "id": "9914123",
        "text": "Medical-Hypertension"
      },
      {
        "id": "9914125",
        "text": "Medical-Hypoglycemia/Diabetic Emergency"
      },
      {
        "id": "9914127",
        "text": "Medical-Hypotension/Shock (Non-Trauma)"
      },
      {
        "id": "9914129",
        "text": "Medical-Influenza-Like Illness/ Upper Respiratory Infection"
      },
      {
        "id": "9914131",
        "text": "Medical-Nausea/Vomiting"
      },
      {
        "id": "9914133",
        "text": "Medical-Newborn/ Neonatal Resuscitation"
      },
      {
        "id": "9914135",
        "text": "General-Overdose/Poisoning/Toxic Ingestion"
      },
      {
        "id": "9914137",
        "text": "Medical-Pulmonary Edema/CHF"
      },
      {
        "id": "9914139",
        "text": "Medical-Respiratory Distress/Asthma/COPD/Reactive Airway"
      },
      {
        "id": "9914141",
        "text": "Medical-Seizure"
      },
      {
        "id": "9914143",
        "text": "Medical-ST-Elevation Myocardial Infarction (STEMI)"
      },
      {
        "id": "9914145",
        "text": "Medical-Stroke/TIA"
      },
      {
        "id": "9914147",
        "text": "Medical-Supraventricular Tachycardia (Including Atrial Fibrillation)"
      },
      {
        "id": "9914149",
        "text": "Medical-Syncope"
      },
      {
        "id": "9914151",
        "text": "Medical-Ventricular Tachycardia (With Pulse)"
      },
      {
        "id": "9914153",
        "text": "Not Done"
      },
      {
        "id": "9914155",
        "text": "OB/GYN-Childbirth/Labor/Delivery"
      },
      {
        "id": "9914157",
        "text": "OB/GYN-Eclampsia"
      },
      {
        "id": "9914159",
        "text": "OB/GYN-Gynecologic Emergencies"
      },
      {
        "id": "9914161",
        "text": "OB/GYN-Pregnancy Related Emergencies"
      },
      {
        "id": "9914163",
        "text": "OB/GYN-Post-partum Hemorrhage"
      },
      {
        "id": "9914165",
        "text": "Other"
      },
      {
        "id": "9914167",
        "text": "Exposure-Carbon Monoxide"
      },
      {
        "id": "9914169",
        "text": "Cardiac Arrest-Do Not Resuscitate"
      },
      {
        "id": "9914171",
        "text": "Cardiac Arrest-Special Resuscitation Orders"
      },
      {
        "id": "9914173",
        "text": "Exposure-Smoke Inhalation"
      },
      {
        "id": "9914175",
        "text": "General-Community Paramedicine / Mobile Integrated Healthcare"
      },
      {
        "id": "9914177",
        "text": "General-Exception Protocol"
      },
      {
        "id": "9914179",
        "text": "General-Extended Care Guidelines"
      },
      {
        "id": "9914181",
        "text": "General-Interfacility Transfers"
      },
      {
        "id": "9914183",
        "text": "General-Law Enforcement - Blood for Legal Purposes"
      },
      {
        "id": "9914185",
        "text": "General-Law Enforcement - Assist with Law Enforcement Activity"
      },
      {
        "id": "9914187",
        "text": "General-Neglect or Abuse Suspected"
      },
      {
        "id": "9914189",
        "text": "General-Refusal of Care"
      },
      {
        "id": "9914191",
        "text": "Injury-Mass/Multiple Casualties"
      },
      {
        "id": "9914193",
        "text": "Injury-Thoracic"
      },
      {
        "id": "9914195",
        "text": "Medical-Adrenal Insufficiency"
      },
      {
        "id": "9914197",
        "text": "Medical-Apparent Life Threatening Event (ALTE)"
      },
      {
        "id": "9914199",
        "text": "Medical-Tachycardia"
      },
      {
        "id": "9914201",
        "text": "Cardiac Arrest-Determination of Death / Withholding Resuscitative Efforts"
      },
      {
        "id": "9914203",
        "text": "Injury-Conducted Electrical Weapon (e.g., Taser)"
      },
      {
        "id": "9914205",
        "text": "Injury-Facial Trauma"
      },
      {
        "id": "9914207",
        "text": "Injury-General Trauma Management"
      },
      {
        "id": "9914209",
        "text": "Injury-Lightning/Lightning Strike"
      },
      {
        "id": "9914211",
        "text": "Injury-SCUBA Injury/Accidents"
      },
      {
        "id": "9914213",
        "text": "Injury-Topical Chemical Burn"
      },
      {
        "id": "9914215",
        "text": "Medical-Beta Blocker Poisoning/Overdose"
      },
      {
        "id": "9914217",
        "text": "Medical-Calcium Channel Blocker Poisoning/Overdose"
      },
      {
        "id": "9914219",
        "text": "Medical-Opioid Poisoning/Overdose"
      },
      {
        "id": "9914221",
        "text": "Medical-Respiratory Distress-Bronchiolitis"
      },
      {
        "id": "9914223",
        "text": "Medical-Respiratory Distress-Croup"
      },
      {
        "id": "9914225",
        "text": "Medical-Stimulant Poisoning/Overdose"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSAgencySpecialtyServiceCapability": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.11",
    "NemsisName": "EMS Agency Specialty Service Capability",
    "ElementTitle": "EMS Agency Specialty Service Capability",
    "ngModel": "EMSAgencySpecialtyServiceCapability",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Special training or services provided by the EMS Agency and available to the EMS service area/community.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "AgencySpecialtyServiceCapability",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1211001",
        "text": "Air Rescue"
      },
      {
        "id": "1211003",
        "text": "CBRNE"
      },
      {
        "id": "1211005",
        "text": "Community Health Medicine"
      },
      {
        "id": "1211007",
        "text": "Disaster Medical Assistance Team (DMAT)"
      },
      {
        "id": "1211009",
        "text": "Disaster Mortuary (DMORT)"
      },
      {
        "id": "1211011",
        "text": "Dive Rescue"
      },
      {
        "id": "1211013",
        "text": "Farm Rescue"
      },
      {
        "id": "1211015",
        "text": "High Angle Rescue"
      },
      {
        "id": "1211017",
        "text": "Machinery Disentanglement"
      },
      {
        "id": "1211019",
        "text": "None"
      },
      {
        "id": "1211021",
        "text": "Ski / Snow Rescue"
      },
      {
        "id": "1211023",
        "text": "Tactical EMS"
      },
      {
        "id": "1211025",
        "text": "Trench / Confined Space Rescue"
      },
      {
        "id": "1211027",
        "text": "Urban Search and Rescue (USAR)"
      },
      {
        "id": "1211029",
        "text": "Vehicle Extrication"
      },
      {
        "id": "1211031",
        "text": "Veterinary Medical Assistance Team (VMAT)"
      },
      {
        "id": "1211033",
        "text": "Water or Ice Related Rescue (Incl Swift Water)"
      },
      {
        "id": "1211035",
        "text": "Wilderness Search and Rescue"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "BillingStatus": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.12",
    "NemsisName": "Billing Status",
    "ElementTitle": "Billing Status",
    "ngModel": "BillingStatus",
    "V2Number": "D04_10",
    "National": "",
    "State": "",
    "Definition": "Indication of whether the EMS agency routinely bills for any segment of the patient population.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "EmergencyMedicalDispatch(EMD)ProvidedtoEMSAgencyServiceArea": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.13",
    "NemsisName": "Emergency Medical Dispatch (EMD) Provided to EMS Agency Service Area",
    "ElementTitle": "Emergency Medical Dispatch (EMD) Provided to EMS Agency Service Area",
    "ngModel": "EmergencyMedicalDispatch(EMD)ProvidedtoEMSAgencyServiceArea",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Indication as to whether Emergency Medical Dispatch is provided to the EMS Agency's service area.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMDtoAgencyServiceArea",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1213001",
        "text": "No"
      },
      {
        "id": "1213003",
        "text": "Yes, 100% of the EMS Agency's Service Area"
      },
      {
        "id": "1213005",
        "text": "Yes, Less than 100% of the EMS Agency's Service Area"
      }
    ],
    "attributes": []
  },
  "EMDVendor": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.14",
    "NemsisName": "EMD Vendor",
    "ElementTitle": "EMD Vendor",
    "ngModel": "EMDVendor",
    "V2Number": "D04_17",
    "National": "",
    "State": "State",
    "Definition": "The vendor or company associated with the EMD Card set and algorithms.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMDVendorType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "PatientMonitoringCapability(ies)": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.15",
    "NemsisName": "Patient Monitoring Capability(ies)",
    "ElementTitle": "Patient Monitoring Capability(ies)",
    "ngModel": "PatientMonitoringCapability(ies)",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The EMS Agency's patient monitoring capability which can be provided to any/all patients presenting to EMS.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PatientMonitoringCapability",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1215001",
        "text": "Capnography-Numeric"
      },
      {
        "id": "1215003",
        "text": "Capnography-Waveform"
      },
      {
        "id": "1215005",
        "text": "ECG-12 Lead or Greater"
      },
      {
        "id": "1215007",
        "text": "ECG-Less than 12 Lead (Cardiac Monitor)"
      },
      {
        "id": "1215009",
        "text": "Oximetry-Carbon Monoxide"
      },
      {
        "id": "1215011",
        "text": "Oximetry-Oxygen"
      },
      {
        "id": "1215013",
        "text": "Pressure Measurement-Invasive (Arterial, CVP, Swan, etc.)"
      },
      {
        "id": "1215015",
        "text": "Pressure Measurement-Non-Invasive (Blood Pressure, etc.)"
      },
      {
        "id": "1215017",
        "text": "Ventilator-Transport"
      },
      {
        "id": "1215019",
        "text": "Vital Sign Monitoring"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "CrewCallSign": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.16",
    "NemsisName": "Crew Call Sign",
    "ElementTitle": "Crew Call Sign",
    "ngModel": "CrewCallSign",
    "V2Number": "D04_02",
    "National": "National",
    "State": "State",
    "Definition": "The EMS crew call sign used to dispatch and communicate with the unit.  This may be the same as the EMS Unit/Vehicle Number in many agencies.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "AgencyCallSign",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "DispatchCenter(CAD)NameorID": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dConfiguration.17",
    "NemsisName": "Dispatch Center (CAD) Name or ID",
    "ElementTitle": "Dispatch Center (CAD) Name or ID",
    "ngModel": "DispatchCenter(CAD)NameorID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The name or ID of the dispatch center (Primary or Secondary Service Answering Point - PSAP) that dispatches the EMS agency.",
    "Usage": "Optional",
    "V3Changes": "Added to the dataset to assist in identifying the CAD / dispatch center providing information to the EMS agency and ePCR when there are multiple dispatch centers sending resources to the same EMS incident.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "DispatchCenterCADNameorID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSLocationType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.01",
    "NemsisName": "EMS Location Type",
    "ElementTitle": "EMS Location Type",
    "ngModel": "EMSLocationType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of EMS Location which could be a fixed station or a pre-determined staging area.",
    "Usage": "Optional",
    "V3Changes": "Added to allow multiple locations to be documented for an EMS Agency.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "LocationType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1301001",
        "text": "EMS Agency Headquarters"
      },
      {
        "id": "1301003",
        "text": "EMS Staging Area"
      },
      {
        "id": "1301005",
        "text": "EMS Station"
      },
      {
        "id": "1301007",
        "text": "Other"
      }
    ],
    "attributes": []
  },
  "EMSLocationName": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.02",
    "NemsisName": "EMS Location Name",
    "ElementTitle": "EMS Location Name",
    "ngModel": "EMSLocationName",
    "V2Number": "D05_01",
    "National": "",
    "State": "",
    "Definition": "The name of the EMS Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StationName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSLocationNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.03",
    "NemsisName": "EMS Location Number",
    "ElementTitle": "EMS Location Number",
    "ngModel": "EMSLocationNumber",
    "V2Number": "D05_02",
    "National": "",
    "State": "",
    "Definition": "The ID number of the EMS Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StationNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSLocationGPS": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.04",
    "NemsisName": "EMS Location GPS",
    "ElementTitle": "EMS Location GPS",
    "ngModel": "EMSLocationGPS",
    "V2Number": "D05_04",
    "National": "",
    "State": "",
    "Definition": "The GPS coordinate of  the EMS location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GPSLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(\\+|-)?(90(\\.[0]{1,6})?|([1-8][0-9]|[0-9])(\\.[0-9]{1,6})?),(\\+|-)?(180(\\.[0]{1,6})?|(1[0-7][0-9]|[1-9][0-9]|[0-9])(\\.[0-9]{1,6})?)",
    "options": [],
    "attributes": []
  },
  "EMSLocationUSNationalGridCoordinates": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.05",
    "NemsisName": "EMS Location US National Grid Coordinates",
    "ElementTitle": "EMS Location US National Grid Coordinates",
    "ngModel": "EMSLocationUSNationalGridCoordinates",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The US National Grid Coordinates of the EMS location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "USNG",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[1][0-9][RSTU][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV][0-9]{8}",
    "options": [],
    "attributes": []
  },
  "EMSLocationAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.06",
    "NemsisName": "EMS Location Address",
    "ElementTitle": "EMS Location Address",
    "ngModel": "EMSLocationAddress",
    "V2Number": "D05_05",
    "National": "",
    "State": "",
    "Definition": "The address of the EMS Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "EMSLocationCity": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.07",
    "NemsisName": "EMS Location City",
    "ElementTitle": "EMS Location City",
    "ngModel": "EMSLocationCity",
    "V2Number": "D05_06",
    "National": "",
    "State": "",
    "Definition": "The city of the EMS location type (e.g., Fixed station, sub-station, staging area, etc.).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSLocationState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.08",
    "NemsisName": "EMS Location State",
    "ElementTitle": "EMS Location State",
    "ngModel": "EMSLocationState",
    "V2Number": "D05_07",
    "National": "",
    "State": "",
    "Definition": "The state of the EMS Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "EMSStationorLocationZIPCode": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.09",
    "NemsisName": "EMS Station or Location ZIP Code",
    "ElementTitle": "EMS Station or Location ZIP Code",
    "ngModel": "EMSStationorLocationZIPCode",
    "V2Number": "D05_08",
    "National": "",
    "State": "",
    "Definition": "The ZIP code of the EMS Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ZIP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": []
  },
  "EMSLocationCounty": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.10",
    "NemsisName": "EMS Location County",
    "ElementTitle": "EMS Location County",
    "ngModel": "EMSLocationCounty",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The county of the EMS Location",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountyCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}",
    "options": [],
    "attributes": []
  },
  "EMSLocationCountry": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.11",
    "NemsisName": "EMS Location Country",
    "ElementTitle": "EMS Location Country",
    "ngModel": "EMSLocationCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country of the EMS location.",
    "Usage": "Optional",
    "V3Changes": "Added to improve international implementations.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCodesCAMXUS",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "CA",
        "text": "Canada"
      },
      {
        "id": "MX",
        "text": "Mexico"
      },
      {
        "id": "US",
        "text": "United States"
      }
    ],
    "attributes": []
  },
  "EMSLocationPhoneNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dLocation.12",
    "NemsisName": "EMS Location Phone Number",
    "ElementTitle": "EMS Location Phone Number",
    "ngModel": "EMSLocationPhoneNumber",
    "V2Number": "D05_09",
    "National": "",
    "State": "",
    "Definition": "The phone number of the EMS Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID"
    ]
  },
  "Unit/VehicleNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.01",
    "NemsisName": "Unit/Vehicle Number",
    "ElementTitle": "Unit/Vehicle Number",
    "ngModel": "Unit/VehicleNumber",
    "V2Number": "D06_01",
    "National": "",
    "State": "State",
    "Definition": "The unique ID number for the unit which is specific for each vehicle. This ID number may be the state's vehicle's permit number.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "VehicleNumber",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "25",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "VehicleIdentificationNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.02",
    "NemsisName": "Vehicle Identification Number",
    "ElementTitle": "Vehicle Identification Number",
    "ngModel": "VehicleIdentificationNumber",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The manufacturer's VIN associated with the vehicle.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "VehicleIdentificationNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "17",
    "maxLength": "17",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSUnitCallSign": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.14",
    "NemsisName": "EMS Unit Call Sign",
    "ElementTitle": "EMS Unit Call Sign",
    "ngModel": "EMSUnitCallSign",
    "V2Number": "E02_12",
    "National": "National",
    "State": "State",
    "Definition": "The EMS unit number used to dispatch and communicate with the unit. This may be the same as the EMS Unit/Vehicle Number in many agencies.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSUnitCallSign",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "VehicleType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.04",
    "NemsisName": "Vehicle Type",
    "ElementTitle": "Vehicle Type",
    "ngModel": "VehicleType",
    "V2Number": "D06_03",
    "National": "",
    "State": "State",
    "Definition": "The vehicle type of the unit (ambulance, fire, truck, etc.).",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "VehicleType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1404001",
        "text": "Ambulance"
      },
      {
        "id": "1404003",
        "text": "ATV"
      },
      {
        "id": "1404005",
        "text": "Bicycle"
      },
      {
        "id": "1404007",
        "text": "Fire Apparatus"
      },
      {
        "id": "1404009",
        "text": "Fixed Wing"
      },
      {
        "id": "1404011",
        "text": "Motorcycle"
      },
      {
        "id": "1404013",
        "text": "Other"
      },
      {
        "id": "1404015",
        "text": "Personal Vehicle"
      },
      {
        "id": "1404017",
        "text": "Quick Response Vehicle (Non-Transport Vehicle other than Fire Apparatus)"
      },
      {
        "id": "1404019",
        "text": "Rescue"
      },
      {
        "id": "1404021",
        "text": "Rotor Craft"
      },
      {
        "id": "1404023",
        "text": "Snow Vehicle"
      },
      {
        "id": "1404025",
        "text": "Watercraft"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "CrewStateCertification/LicensureLevels": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.05",
    "NemsisName": "Crew State Certification/Licensure Levels",
    "ElementTitle": "Crew State Certification/Licensure Levels",
    "ngModel": "CrewStateCertification/LicensureLevels",
    "V2Number": "D06_04",
    "National": "",
    "State": "",
    "Definition": "The certification/licensure level of the ambulance by the state or the certification/licensure level at which the vehicle is most commonly staffed.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StateCertificationLicensureLevels",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9917001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9917003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9917005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9917007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9917009",
        "text": "First Responder"
      },
      {
        "id": "9917011",
        "text": "EMT-Basic"
      },
      {
        "id": "9917013",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9917015",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9917019",
        "text": "Physician"
      },
      {
        "id": "9917021",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9917023",
        "text": "Community Paramedicine"
      },
      {
        "id": "9917025",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9917027",
        "text": "Physician Assistant"
      },
      {
        "id": "9917029",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9917031",
        "text": "Registered Nurse"
      }
    ],
    "attributes": []
  },
  "NumberofEachEMSPersonnelLevelonNormal911AmbulanceResponse": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.06",
    "NemsisName": "Number of Each EMS Personnel Level on Normal 911 Ambulance Response",
    "ElementTitle": "Number of Each EMS Personnel Level on Normal 911 Ambulance Response",
    "ngModel": "NumberofEachEMSPersonnelLevelonNormal911AmbulanceResponse",
    "V2Number": "D06_05",
    "National": "",
    "State": "",
    "Definition": "The number of each personnel level associated with the vehicle crew.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "NumberofPersonnel",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "12",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "NumberofEachEMSPersonnelLevelonNormal911Response(Non-Transport)Vehicle": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.07",
    "NemsisName": "Number of Each EMS Personnel Level on Normal 911 Response (Non-Transport) Vehicle",
    "ElementTitle": "Number of Each EMS Personnel Level on Normal 911 Response (Non-Transport) Vehicle",
    "ngModel": "NumberofEachEMSPersonnelLevelonNormal911Response(Non-Transport)Vehicle",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The number of each personnel level for your EMS Agency's Medical (Non-911) Non-Transport Ambulance.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "NumberofPersonnel",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "12",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "NumberofEachEMSPersonnelLevelonNormalMedical(Non-911)TransportAmbulance": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.08",
    "NemsisName": "Number of Each EMS Personnel Level on Normal Medical (Non-911) Transport Ambulance",
    "ElementTitle": "Number of Each EMS Personnel Level on Normal Medical (Non-911) Transport Ambulance",
    "ngModel": "NumberofEachEMSPersonnelLevelonNormalMedical(Non-911)TransportAmbulance",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The number of each personnel level for your EMS Agency's Medical (Non-911) Transport Ambulance.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "NumberofPersonnel",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "12",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "VehicleInitialCost": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.09",
    "NemsisName": "Vehicle Initial Cost",
    "ElementTitle": "Vehicle Initial Cost",
    "ngModel": "VehicleInitialCost",
    "V2Number": "D06_06",
    "National": "",
    "State": "",
    "Definition": "Initial costs of vehicles held by agency excluding all medical and other equipment not associated with the vehicle. This cost should be inclusive of all sources of funding including grants, donations, and any other capital.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "VehicleInitialCost",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "10000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "VehicleModelYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.10",
    "NemsisName": "Vehicle Model Year",
    "ElementTitle": "Vehicle Model Year",
    "ngModel": "VehicleModelYear",
    "V2Number": "D06_07",
    "National": "",
    "State": "State",
    "Definition": "The year the vehicle was manufactured.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Year",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900",
    "maxInclusive": "2050",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "YearMiles/KilometersHoursAccrued": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.11",
    "NemsisName": "Year Miles/Kilometers Hours Accrued",
    "ElementTitle": "Year Miles/Kilometers Hours Accrued",
    "ngModel": "YearMiles/KilometersHoursAccrued",
    "V2Number": "D06_08",
    "National": "",
    "State": "",
    "Definition": "The year the hours and miles/kilometers were accumulated.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Year",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900",
    "maxInclusive": "2050",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "AnnualVehicleHours": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.12",
    "NemsisName": "Annual Vehicle Hours",
    "ElementTitle": "Annual Vehicle Hours",
    "ngModel": "AnnualVehicleHours",
    "V2Number": "D06_09",
    "National": "",
    "State": "",
    "Definition": "The number of hours the vehicle was in service for the agency for the defined year.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "VehicleHours",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "10000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "AnnualVehicleMiles/Kilometers": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dVehicle.13",
    "NemsisName": "Annual Vehicle Miles/Kilometers",
    "ElementTitle": "Annual Vehicle Miles/Kilometers",
    "ngModel": "AnnualVehicleMiles/Kilometers",
    "V2Number": "D06_10",
    "National": "",
    "State": "",
    "Definition": "The number of miles/kilometers the vehicle accumulated in service for the agency for the defined year (Odometer Reading).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "AnnualOdometerReading",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "7",
    "fractionDigits": "1",
    "pattern": "",
    "options": [],
    "attributes": [
      "DistanceUnit"
    ]
  },
  "EMSPersonnel'sLastName": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.01",
    "NemsisName": "EMS Personnel's Last Name",
    "ElementTitle": "EMS Personnel's Last Name",
    "ngModel": "EMSPersonnel'sLastName",
    "V2Number": "D08_01",
    "National": "",
    "State": "State",
    "Definition": "The last name of the personnel.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonLastName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sFirstName": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.02",
    "NemsisName": "EMS Personnel's First Name",
    "ElementTitle": "EMS Personnel's First Name",
    "ngModel": "EMSPersonnel'sFirstName",
    "V2Number": "D08_03",
    "National": "",
    "State": "State",
    "Definition": "The first name of the personnel.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonFirstName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sMiddleName/Initial": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.03",
    "NemsisName": "EMS Personnel's Middle Name/Initial",
    "ElementTitle": "EMS Personnel's Middle Name/Initial",
    "ngModel": "EMSPersonnel'sMiddleName/Initial",
    "V2Number": "D08_02",
    "National": "",
    "State": "State",
    "Definition": "The middle name or initial of the personnel.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonMiddleName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sMailingAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.04",
    "NemsisName": "EMS Personnel's Mailing Address",
    "ElementTitle": "EMS Personnel's Mailing Address",
    "ngModel": "EMSPersonnel'sMailingAddress",
    "V2Number": "D08_04",
    "National": "",
    "State": "",
    "Definition": "The Street or PO Box of the personnel's mailing address.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "EMSPersonnel'sCityofResidence": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.05",
    "NemsisName": "EMS Personnel's City of Residence",
    "ElementTitle": "EMS Personnel's City of Residence",
    "ngModel": "EMSPersonnel'sCityofResidence",
    "V2Number": "D08_05",
    "National": "",
    "State": "",
    "Definition": "The city of the personnel's mailing address.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.06",
    "NemsisName": "EMS Personnel's State",
    "ElementTitle": "EMS Personnel's State",
    "ngModel": "EMSPersonnel'sState",
    "V2Number": "D08_06",
    "National": "",
    "State": "",
    "Definition": "The state of the personnel's mailing address.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sZIPCode": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.07",
    "NemsisName": "EMS Personnel's ZIP Code",
    "ElementTitle": "EMS Personnel's ZIP Code",
    "ngModel": "EMSPersonnel'sZIPCode",
    "V2Number": "D08_07",
    "National": "",
    "State": "",
    "Definition": "The ZIP code of the personnel's mailing address.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ZIP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sCountry": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.08",
    "NemsisName": "EMS Personnel's Country",
    "ElementTitle": "EMS Personnel's Country",
    "ngModel": "EMSPersonnel'sCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country of the personnel mailing address.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCodesCAMXUS",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "CA",
        "text": "Canada"
      },
      {
        "id": "MX",
        "text": "Mexico"
      },
      {
        "id": "US",
        "text": "United States"
      }
    ],
    "attributes": []
  },
  "EMSPersonnel'sPhoneNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.09",
    "NemsisName": "EMS Personnel's Phone Number",
    "ElementTitle": "EMS Personnel's Phone Number",
    "ngModel": "EMSPersonnel'sPhoneNumber",
    "V2Number": "D08_08",
    "National": "",
    "State": "",
    "Definition": "The phone number for the personnel.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sEmailAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.10",
    "NemsisName": "EMS Personnel's Email Address",
    "ElementTitle": "EMS Personnel's Email Address",
    "ngModel": "EMSPersonnel'sEmailAddress",
    "V2Number": "D08_10",
    "National": "",
    "State": "",
    "Definition": "The primary email address of the personnel.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "EmailAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "3",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": ".+@.+",
    "options": [],
    "attributes": [
      "EmailAddressType",
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sDateofBirth": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.11",
    "NemsisName": "EMS Personnel's Date of Birth",
    "ElementTitle": "EMS Personnel's Date of Birth",
    "ngModel": "EMSPersonnel'sDateofBirth",
    "V2Number": "D08_11",
    "National": "",
    "State": "State",
    "Definition": "The personnel's date of birth.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sGender": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.12",
    "NemsisName": "EMS Personnel's Gender",
    "ElementTitle": "EMS Personnel's Gender",
    "ngModel": "EMSPersonnel'sGender",
    "V2Number": "D08_12",
    "National": "",
    "State": "State",
    "Definition": "The personnel's gender.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Gender",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9906001",
        "text": "Female"
      },
      {
        "id": "9906003",
        "text": "Male"
      },
      {
        "id": "9906005",
        "text": "Unknown (Unable to Determine)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sRace": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.13",
    "NemsisName": "EMS Personnel's Race",
    "ElementTitle": "EMS Personnel's Race",
    "ngModel": "EMSPersonnel'sRace",
    "V2Number": "D08_13",
    "National": "",
    "State": "State",
    "Definition": "The personnel's race as defined by the OMB (US Office of Management and Budget).",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "DemographicRace",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1513001",
        "text": "American Indian or Alaska Native"
      },
      {
        "id": "1513003",
        "text": "Asian"
      },
      {
        "id": "1513005",
        "text": "Black or African American"
      },
      {
        "id": "1513007",
        "text": "Hispanic or Latino"
      },
      {
        "id": "1513009",
        "text": "Native Hawaiian or Other Pacific Islander"
      },
      {
        "id": "1513011",
        "text": "White"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sCitizenship": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.14",
    "NemsisName": "EMS Personnel's Citizenship",
    "ElementTitle": "EMS Personnel's Citizenship",
    "ngModel": "EMSPersonnel'sCitizenship",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The documentation of the personnel's citizenship.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sHighestEducationalDegree": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.15",
    "NemsisName": "EMS Personnel's Highest Educational Degree",
    "ElementTitle": "EMS Personnel's Highest Educational Degree",
    "ngModel": "EMSPersonnel'sHighestEducationalDegree",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The highest educational degree completed by the personnel.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonnelHighestEducationalDegree",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1515001",
        "text": "No Schooling Completed"
      },
      {
        "id": "1515003",
        "text": "Nursery School to 4th Grade"
      },
      {
        "id": "1515005",
        "text": "5th Grade or 6th Grade"
      },
      {
        "id": "1515007",
        "text": "7th Grade or 8th Grade"
      },
      {
        "id": "1515009",
        "text": "9th Grade"
      },
      {
        "id": "1515011",
        "text": "10th Grade"
      },
      {
        "id": "1515013",
        "text": "11th Grade"
      },
      {
        "id": "1515015",
        "text": "12th Grade, No Diploma"
      },
      {
        "id": "1515017",
        "text": "High School Graduate-Diploma or the Equivalent (GED)"
      },
      {
        "id": "1515019",
        "text": "Some College Credit, but Less than 1 Year"
      },
      {
        "id": "1515021",
        "text": "1 or More Years of College, No Degree"
      },
      {
        "id": "1515023",
        "text": "Associate Degree"
      },
      {
        "id": "1515025",
        "text": "Bachelor's Degree"
      },
      {
        "id": "1515027",
        "text": "Master's Degree"
      },
      {
        "id": "1515029",
        "text": "Professional Degree (i.e. MD, DDS, DVM, LLB, JD)"
      },
      {
        "id": "1515031",
        "text": "Doctorate Degree (i.e. PhD, EdD)"
      }
    ],
    "attributes": []
  },
  "EMSPersonnel'sDegreeSubject/FieldofStudy": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.16",
    "NemsisName": "EMS Personnel's Degree Subject/Field of Study",
    "ElementTitle": "EMS Personnel's Degree Subject/Field of Study",
    "ngModel": "EMSPersonnel'sDegreeSubject/FieldofStudy",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The area of the personnel's post high-school (post-secondary) degree.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PersonnelDegreeFieldofStudy",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1516001",
        "text": "Agriculture and Natural Resources"
      },
      {
        "id": "1516003",
        "text": "Architecture and Related Services"
      },
      {
        "id": "1516005",
        "text": "Area, Ethnic, Cultural, and Gender Studies"
      },
      {
        "id": "1516007",
        "text": "Biological and Biomedical Sciences"
      },
      {
        "id": "1516009",
        "text": "Business"
      },
      {
        "id": "1516011",
        "text": "Communication, Journalism, and Related Programs"
      },
      {
        "id": "1516013",
        "text": "Communications Technologies"
      },
      {
        "id": "1516015",
        "text": "Computer and Information Sciences"
      },
      {
        "id": "1516017",
        "text": "Education"
      },
      {
        "id": "1516019",
        "text": "Emergency Medical Services"
      },
      {
        "id": "1516021",
        "text": "Engineering"
      },
      {
        "id": "1516023",
        "text": "Engineering Technologies"
      },
      {
        "id": "1516025",
        "text": "English Language and Literature/Letters"
      },
      {
        "id": "1516027",
        "text": "Family and Consumer Sciences/Human Sciences"
      },
      {
        "id": "1516029",
        "text": "Fire Science"
      },
      {
        "id": "1516031",
        "text": "Foreign Languages, Literatures, and Linguistics"
      },
      {
        "id": "1516033",
        "text": "Health Professions and Related Clinical Sciences, Not Including Emergency Medical Services"
      },
      {
        "id": "1516035",
        "text": "Legal Professions and Studies"
      },
      {
        "id": "1516037",
        "text": "Liberal Arts and Sciences, General Studies, and Humanities"
      },
      {
        "id": "1516039",
        "text": "Library Science"
      },
      {
        "id": "1516041",
        "text": "Mathematics and Statistics"
      },
      {
        "id": "1516043",
        "text": "Military Technologies"
      },
      {
        "id": "1516045",
        "text": "Multi/Interdisciplinary Studies"
      },
      {
        "id": "1516047",
        "text": "Not Classified by Field of Study"
      },
      {
        "id": "1516049",
        "text": "None"
      },
      {
        "id": "1516051",
        "text": "Parks, Recreation, Leisure and Fitness Studies"
      },
      {
        "id": "1516053",
        "text": "Philosophy and Religious Studies"
      },
      {
        "id": "1516055",
        "text": "Physical Sciences and Science Technologies"
      },
      {
        "id": "1516057",
        "text": "Precision Production"
      },
      {
        "id": "1516059",
        "text": "Psychology"
      },
      {
        "id": "1516061",
        "text": "Public Administration and Social Services"
      },
      {
        "id": "1516063",
        "text": "Security and Protective Services, Not Including Fire Science"
      },
      {
        "id": "1516065",
        "text": "Social Sciences and History"
      },
      {
        "id": "1516067",
        "text": "Theology and Religious Vocations"
      },
      {
        "id": "1516069",
        "text": "Transportation and Materials Moving"
      },
      {
        "id": "1516071",
        "text": "Visual and Performing Arts"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sMotorVehicleLicenseType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.17",
    "NemsisName": "EMS Personnel's Motor Vehicle License Type",
    "ElementTitle": "EMS Personnel's Motor Vehicle License Type",
    "ngModel": "EMSPersonnel'sMotorVehicleLicenseType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of motor vehicle license (i.e. Class A, B, Pilot, etc.) of the EMS personnel.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PersonnelVehicleLicenseType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1517001",
        "text": "All-Terrain Vehicle (ATV)"
      },
      {
        "id": "1517003",
        "text": "Commercial Class A"
      },
      {
        "id": "1517005",
        "text": "Commercial Class B"
      },
      {
        "id": "1517007",
        "text": "Commercial Class C"
      },
      {
        "id": "1517009",
        "text": "Motorcycle-Class M"
      },
      {
        "id": "1517011",
        "text": "None"
      },
      {
        "id": "1517013",
        "text": "Operator Class D (Normal)"
      },
      {
        "id": "1517015",
        "text": "Other"
      },
      {
        "id": "1517017",
        "text": "Pilot-Rotor Wing Air"
      },
      {
        "id": "1517019",
        "text": "Pilot-Fixed Wing Air"
      },
      {
        "id": "1517021",
        "text": "Snowmobile"
      },
      {
        "id": "1517023",
        "text": "Taxi and Livery Class E"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sImmunizationStatus": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.18",
    "NemsisName": "EMS Personnel's Immunization Status",
    "ElementTitle": "EMS Personnel's Immunization Status",
    "ngModel": "EMSPersonnel'sImmunizationStatus",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of immunization status.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ImmunizationType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9910001",
        "text": "Anthrax"
      },
      {
        "id": "9910003",
        "text": "Cholera"
      },
      {
        "id": "9910005",
        "text": "DPT / TDaP (Diphtheria, Pertussis, Tetanus)"
      },
      {
        "id": "9910007",
        "text": "Hemophilus Influenza B"
      },
      {
        "id": "9910009",
        "text": "Hepatitis A"
      },
      {
        "id": "9910011",
        "text": "Hepatitis B"
      },
      {
        "id": "9910013",
        "text": "Human Papilloma Virus (HPV)"
      },
      {
        "id": "9910015",
        "text": "Influenza-H1N1"
      },
      {
        "id": "9910017",
        "text": "Influenza-Other"
      },
      {
        "id": "9910019",
        "text": "Influenza-Seasonal (In past 12 months)"
      },
      {
        "id": "9910021",
        "text": "Lyme Disease"
      },
      {
        "id": "9910023",
        "text": "Meningococcus"
      },
      {
        "id": "9910025",
        "text": "MMR (Measles, Mumps, Rubella)"
      },
      {
        "id": "9910027",
        "text": "Other-Not Listed"
      },
      {
        "id": "9910029",
        "text": "Plague"
      },
      {
        "id": "9910031",
        "text": "Pneumococcal (Pneumonia)"
      },
      {
        "id": "9910033",
        "text": "Polio"
      },
      {
        "id": "9910035",
        "text": "Rabies"
      },
      {
        "id": "9910037",
        "text": "Rotavirus"
      },
      {
        "id": "9910039",
        "text": "Shingles"
      },
      {
        "id": "9910041",
        "text": "Small Pox"
      },
      {
        "id": "9910043",
        "text": "Tetanus"
      },
      {
        "id": "9910045",
        "text": "Tuberculosis"
      },
      {
        "id": "9910047",
        "text": "Typhoid"
      },
      {
        "id": "9910049",
        "text": "Varicella (Chickenpox)"
      },
      {
        "id": "9910051",
        "text": "Yellow Fever"
      }
    ],
    "attributes": []
  },
  "EMSPersonnel'sImmunizationYear": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.19",
    "NemsisName": "EMS Personnel's Immunization Year",
    "ElementTitle": "EMS Personnel's Immunization Year",
    "ngModel": "EMSPersonnel'sImmunizationYear",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The year associated with each immunization type.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Year",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900",
    "maxInclusive": "2050",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sForeignLanguageAbility": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.20",
    "NemsisName": "EMS Personnel's Foreign Language Ability",
    "ElementTitle": "EMS Personnel's Foreign Language Ability",
    "ngModel": "EMSPersonnel'sForeignLanguageAbility",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The languages spoken (other than English) by the personnel with at least an elementary level of proficiency.",
    "Usage": "Optional",
    "V3Changes": "Added to better describe the EMS workforce.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PersonnelForeignLanguageAbility",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "amh",
        "text": "Amharic"
      },
      {
        "id": "ara",
        "text": "Arabic"
      },
      {
        "id": "arm",
        "text": "Armenian"
      },
      {
        "id": "ben",
        "text": "Bengali"
      },
      {
        "id": "crp",
        "text": "Cajun (Creole and Pidgins)"
      },
      {
        "id": "chi",
        "text": "Chinese"
      },
      {
        "id": "hrv",
        "text": "Croatian"
      },
      {
        "id": "cze",
        "text": "Czech"
      },
      {
        "id": "dan",
        "text": "Danish"
      },
      {
        "id": "dut",
        "text": "Dutch"
      },
      {
        "id": "fin",
        "text": "Finnish"
      },
      {
        "id": "tai",
        "text": "Formosan"
      },
      {
        "id": "fre",
        "text": "French"
      },
      {
        "id": "cpf",
        "text": "French Creole"
      },
      {
        "id": "ger",
        "text": "German"
      },
      {
        "id": "gre",
        "text": "Greek"
      },
      {
        "id": "guj",
        "text": "Gujarati"
      },
      {
        "id": "heb",
        "text": "Hebrew"
      },
      {
        "id": "hin",
        "text": "Hindi (Urdu)"
      },
      {
        "id": "hun",
        "text": "Hungarian"
      },
      {
        "id": "ilo",
        "text": "Ilocano"
      },
      {
        "id": "itl",
        "text": "Italian"
      },
      {
        "id": "jpn",
        "text": "Japanese"
      },
      {
        "id": "kor",
        "text": "Korean"
      },
      {
        "id": "kro",
        "text": "Kru"
      },
      {
        "id": "lit",
        "text": "Lithuanian"
      },
      {
        "id": "mal",
        "text": "Malayalam"
      },
      {
        "id": "hmn",
        "text": "Miao (Hmong)"
      },
      {
        "id": "mkh",
        "text": "Mon-Khmer (Cambodian)"
      },
      {
        "id": "nav",
        "text": "Navaho"
      },
      {
        "id": "nno",
        "text": "Norwegian"
      },
      {
        "id": "pan",
        "text": "Panjabi"
      },
      {
        "id": "gem",
        "text": "Pennsylvania Dutch (Germanic Other)"
      },
      {
        "id": "per",
        "text": "Persian"
      },
      {
        "id": "pol",
        "text": "Polish"
      },
      {
        "id": "por",
        "text": "Portuguese"
      },
      {
        "id": "rum",
        "text": "Romanian"
      },
      {
        "id": "rus",
        "text": "Russian"
      },
      {
        "id": "smo",
        "text": "Samoan"
      },
      {
        "id": "srp",
        "text": "Serbo-Croatian"
      },
      {
        "id": "slo",
        "text": "Slovak"
      },
      {
        "id": "spa",
        "text": "Spanish"
      },
      {
        "id": "swe",
        "text": "Swedish"
      },
      {
        "id": "syr",
        "text": "Syriac"
      },
      {
        "id": "tgl",
        "text": "Tagalog"
      },
      {
        "id": "tha",
        "text": "Thai (Laotian)"
      },
      {
        "id": "tur",
        "text": "Turkish"
      },
      {
        "id": "ukr",
        "text": "Ukrainian"
      },
      {
        "id": "vie",
        "text": "Vietnamese"
      },
      {
        "id": "yid",
        "text": "Yiddish"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sAgencyIDNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.21",
    "NemsisName": "EMS Personnel's Agency ID Number",
    "ElementTitle": "EMS Personnel's Agency ID Number",
    "ngModel": "EMSPersonnel'sAgencyIDNumber",
    "V2Number": "D07_01",
    "National": "",
    "State": "",
    "Definition": "The local agency ID number for the personnel.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonnelAgencyIDNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sStateofLicensure": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.22",
    "NemsisName": "EMS Personnel's State of Licensure",
    "ElementTitle": "EMS Personnel's State of Licensure",
    "ngModel": "EMSPersonnel'sStateofLicensure",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The state of the certification/licensure ID number assigned to the personnel member.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSIStateCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sState'sLicensureIDNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.23",
    "NemsisName": "EMS Personnel's State's Licensure ID Number",
    "ElementTitle": "EMS Personnel's State's Licensure ID Number",
    "ngModel": "EMSPersonnel'sState'sLicensureIDNumber",
    "V2Number": "D07_02",
    "National": "",
    "State": "State",
    "Definition": "The state's licensure/certification ID number for the personnel.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "StateLicensureID",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sStateEMSCertificationLicensureLevel": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.24",
    "NemsisName": "EMS Personnel's State EMS Certification Licensure Level",
    "ElementTitle": "EMS Personnel's State EMS Certification Licensure Level",
    "ngModel": "EMSPersonnel'sStateEMSCertificationLicensureLevel",
    "V2Number": "D08_15",
    "National": "",
    "State": "State",
    "Definition": "The personnel's state EMS certification level.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "MemberLevel",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9925001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9925003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9925005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9925007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9925013",
        "text": "First Responder"
      },
      {
        "id": "9925015",
        "text": "EMT-Basic"
      },
      {
        "id": "9925017",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9925019",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9925023",
        "text": "Other Healthcare Professional"
      },
      {
        "id": "9925025",
        "text": "Other Non-Healthcare Professional"
      },
      {
        "id": "9925027",
        "text": "Physician"
      },
      {
        "id": "9925029",
        "text": "Respiratory Therapist"
      },
      {
        "id": "9925031",
        "text": "Student"
      },
      {
        "id": "9925033",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9925035",
        "text": "Community Paramedicine"
      },
      {
        "id": "9925037",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9925039",
        "text": "Physician Assistant"
      },
      {
        "id": "9925041",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9925043",
        "text": "Registered Nurse"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sStateEMSCurrentCertificationDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.25",
    "NemsisName": "EMS Personnel's State EMS Current Certification Date",
    "ElementTitle": "EMS Personnel's State EMS Current Certification Date",
    "ngModel": "EMSPersonnel'sStateEMSCurrentCertificationDate",
    "V2Number": "D08_17",
    "National": "",
    "State": "",
    "Definition": "The date of the personnel's current EMS certification/licensure.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sInitialState'sLicensureIssueDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.26",
    "NemsisName": "EMS Personnel's Initial State's Licensure Issue Date",
    "ElementTitle": "EMS Personnel's Initial State's Licensure Issue Date",
    "ngModel": "EMSPersonnel'sInitialState'sLicensureIssueDate",
    "V2Number": "D08_18",
    "National": "",
    "State": "",
    "Definition": "The date on which the EMS personnel's state's EMS certification/licensure was originally issued. This is the date of the first certification/licensure for the EMS level.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sCurrentState'sLicensureExpirationDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.27",
    "NemsisName": "EMS Personnel's Current State's Licensure Expiration Date",
    "ElementTitle": "EMS Personnel's Current State's Licensure Expiration Date",
    "ngModel": "EMSPersonnel'sCurrentState'sLicensureExpirationDate",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date on which the EMS personnel's (highest) state EMS certification/licensure expires.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sNationalRegistryNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.28",
    "NemsisName": "EMS Personnel's National Registry Number",
    "ElementTitle": "EMS Personnel's National Registry Number",
    "ngModel": "EMSPersonnel'sNationalRegistryNumber",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The National Registry number associated with the level of certification/licensure obtained through NREMT.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "NationalRegistryNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[A-Z][A-Z0-9][0-9]{6}",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sNationalRegistryCertificationLevel": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.29",
    "NemsisName": "EMS Personnel's National Registry Certification Level",
    "ElementTitle": "EMS Personnel's National Registry Certification Level",
    "ngModel": "EMSPersonnel'sNationalRegistryCertificationLevel",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The level of the current National Registry of Emergency Medical Technicians (NREMT) certification.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "NationalRegistryCertificationLevel",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1529001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "1529003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "1529005",
        "text": "2009 Emergency Medical Technician"
      },
      {
        "id": "1529007",
        "text": "2009 Paramedic"
      },
      {
        "id": "1529009",
        "text": "EMT-Basic"
      },
      {
        "id": "1529011",
        "text": "EMT-Intermediate"
      },
      {
        "id": "1529013",
        "text": "EMT-Paramedic"
      },
      {
        "id": "1529015",
        "text": "First Responder"
      }
    ],
    "attributes": []
  },
  "EMSPersonnel'sCurrentNationalRegistryExpirationDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.30",
    "NemsisName": "EMS Personnel's Current National Registry Expiration Date",
    "ElementTitle": "EMS Personnel's Current National Registry Expiration Date",
    "ngModel": "EMSPersonnel'sCurrentNationalRegistryExpirationDate",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date on which the EMS Personnel's National Registry of EMTs certification/licensure expires",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sEmploymentStatus": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.31",
    "NemsisName": "EMS Personnel's Employment Status",
    "ElementTitle": "EMS Personnel's Employment Status",
    "ngModel": "EMSPersonnel'sEmploymentStatus",
    "V2Number": "D07_03",
    "National": "",
    "State": "State",
    "Definition": "The personnel's primary employment status for this agency.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EmploymentStatus",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1531001",
        "text": "Full Time Paid Employee"
      },
      {
        "id": "1531003",
        "text": "Part Time Paid Employee"
      },
      {
        "id": "1531005",
        "text": "Volunteer"
      },
      {
        "id": "1531007",
        "text": "Neither an Employee Nor a Volunteer"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sEmploymentStatusDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.32",
    "NemsisName": "EMS Personnel's Employment Status Date",
    "ElementTitle": "EMS Personnel's Employment Status Date",
    "ngModel": "EMSPersonnel'sEmploymentStatusDate",
    "V2Number": "D07_04",
    "National": "",
    "State": "State",
    "Definition": "The personnel's employment status date.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sHireDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.33",
    "NemsisName": "EMS Personnel's Hire Date",
    "ElementTitle": "EMS Personnel's Hire Date",
    "ngModel": "EMSPersonnel'sHireDate",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date the employee was hired by the EMS agency for this current job.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sPrimaryEMSJobRole": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.34",
    "NemsisName": "EMS Personnel's Primary EMS Job Role",
    "ElementTitle": "EMS Personnel's Primary EMS Job Role",
    "ngModel": "EMSPersonnel'sPrimaryEMSJobRole",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The individuals primary/main EMS role at the EMS agency. This is the function which is performed the majority of the time for the EMS personnel.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "JobResponsibilities",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1534001",
        "text": "Administrator/Manager"
      },
      {
        "id": "1534003",
        "text": "Driver/Pilot"
      },
      {
        "id": "1534005",
        "text": "Educator/Preceptor"
      },
      {
        "id": "1534007",
        "text": "Fire Suppression"
      },
      {
        "id": "1534009",
        "text": "First-Line Supervisor"
      },
      {
        "id": "1534011",
        "text": "Law Enforcement"
      },
      {
        "id": "1534013",
        "text": "Other"
      },
      {
        "id": "1534015",
        "text": "Patient Care Provider"
      },
      {
        "id": "1534017",
        "text": "Rescue"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "EMSPersonnel'sOtherJobResponsibilities": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.35",
    "NemsisName": "EMS Personnel's Other Job Responsibilities",
    "ElementTitle": "EMS Personnel's Other Job Responsibilities",
    "ngModel": "EMSPersonnel'sOtherJobResponsibilities",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The EMS personnel's other job responsibilities at the agency beyond their primary role documented in dPersonnel.34 (EMS Personnel's Primary EMS Job Role).",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "JobResponsibilities",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1534001",
        "text": "Administrator/Manager"
      },
      {
        "id": "1534003",
        "text": "Driver/Pilot"
      },
      {
        "id": "1534005",
        "text": "Educator/Preceptor"
      },
      {
        "id": "1534007",
        "text": "Fire Suppression"
      },
      {
        "id": "1534009",
        "text": "First-Line Supervisor"
      },
      {
        "id": "1534011",
        "text": "Law Enforcement"
      },
      {
        "id": "1534013",
        "text": "Other"
      },
      {
        "id": "1534015",
        "text": "Patient Care Provider"
      },
      {
        "id": "1534017",
        "text": "Rescue"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "EMSPersonnel'sTotalLengthofServiceinYears": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.36",
    "NemsisName": "EMS Personnel's Total Length of Service in Years",
    "ElementTitle": "EMS Personnel's Total Length of Service in Years",
    "ngModel": "EMSPersonnel'sTotalLengthofServiceinYears",
    "V2Number": "D08_19",
    "National": "",
    "State": "",
    "Definition": "The personnel's total length of EMS service at any level (years).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TotalService",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "80",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sDateLengthofServiceDocumented": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.37",
    "NemsisName": "EMS Personnel's Date Length of Service Documented",
    "ElementTitle": "EMS Personnel's Date Length of Service Documented",
    "ngModel": "EMSPersonnel'sDateLengthofServiceDocumented",
    "V2Number": "D08_20",
    "National": "",
    "State": "",
    "Definition": "The date which the length of EMS service was documented.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EMSPersonnel'sPracticeLevel": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.38",
    "NemsisName": "EMS Personnel's Practice Level",
    "ElementTitle": "EMS Personnel's Practice Level",
    "ngModel": "EMSPersonnel'sPracticeLevel",
    "V2Number": "D07_05",
    "National": "",
    "State": "",
    "Definition": "The EMS certification level at which the individual is providing patient care services for the EMS agency.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "MemberLevel",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9925001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9925003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9925005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9925007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9925013",
        "text": "First Responder"
      },
      {
        "id": "9925015",
        "text": "EMT-Basic"
      },
      {
        "id": "9925017",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9925019",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9925023",
        "text": "Other Healthcare Professional"
      },
      {
        "id": "9925025",
        "text": "Other Non-Healthcare Professional"
      },
      {
        "id": "9925027",
        "text": "Physician"
      },
      {
        "id": "9925029",
        "text": "Respiratory Therapist"
      },
      {
        "id": "9925031",
        "text": "Student"
      },
      {
        "id": "9925033",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9925035",
        "text": "Community Paramedicine"
      },
      {
        "id": "9925037",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9925039",
        "text": "Physician Assistant"
      },
      {
        "id": "9925041",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9925043",
        "text": "Registered Nurse"
      }
    ],
    "attributes": []
  },
  "DateofPersonnel'sCertificationorLicensureforAgency": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dPersonnel.39",
    "NemsisName": "Date of Personnel's Certification or Licensure for Agency",
    "ElementTitle": "Date of Personnel's Certification or Licensure for Agency",
    "ngModel": "DateofPersonnel'sCertificationorLicensureforAgency",
    "V2Number": "D07_06",
    "National": "",
    "State": "",
    "Definition": "The date that the Certification/Licensure was achieved for the local EMS agency.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceSerialNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.01",
    "NemsisName": "Medical Device Serial Number",
    "ElementTitle": "Medical Device Serial Number",
    "ngModel": "MedicalDeviceSerialNumber",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The unique manufacturer's serial number associated with a medical device.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DeviceSerialNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceNameorID": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dDevice.02",
    "NemsisName": "Medical Device Name or ID",
    "ElementTitle": "Medical Device Name or ID",
    "ngModel": "MedicalDeviceNameorID",
    "V2Number": "D09_02",
    "National": "",
    "State": "",
    "Definition": "The local number or configurable Name/ID of the medical device.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DeviceNameorID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceType": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dDevice.03",
    "NemsisName": "Medical Device Type",
    "ElementTitle": "Medical Device Type",
    "ngModel": "MedicalDeviceType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of medical device.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "MedicalDeviceType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1603001",
        "text": "Capnography-Numeric"
      },
      {
        "id": "1603003",
        "text": "Capnography-Waveform"
      },
      {
        "id": "1603005",
        "text": "Chemistry Measurement-Blood or Serum"
      },
      {
        "id": "1603007",
        "text": "Chemistry Measurement-Glucometer"
      },
      {
        "id": "1603009",
        "text": "Chemistry Measurement-Urine"
      },
      {
        "id": "1603011",
        "text": "CPR-External Device"
      },
      {
        "id": "1603013",
        "text": "Defibrillator-Automated"
      },
      {
        "id": "1603015",
        "text": "Defibrillator-Manual"
      },
      {
        "id": "1603017",
        "text": "ECG-12 Lead or Greater"
      },
      {
        "id": "1603019",
        "text": "ECG-Less than 12 Lead (Cardiac Monitor)"
      },
      {
        "id": "1603021",
        "text": "Medication Infusion Pump"
      },
      {
        "id": "1603023",
        "text": "Other"
      },
      {
        "id": "1603025",
        "text": "Oximetry-Carbon Monoxide"
      },
      {
        "id": "1603027",
        "text": "Oximetry-Oxygen"
      },
      {
        "id": "1603029",
        "text": "Pressure Monitors-Invasive"
      },
      {
        "id": "1603031",
        "text": "Pressure Monitors-Non-Invasive"
      },
      {
        "id": "1603033",
        "text": "Respirator (BLS)"
      },
      {
        "id": "1603035",
        "text": "Ventilator (ALS)"
      },
      {
        "id": "1603037",
        "text": "Ventilator Assistance-BiPAP"
      },
      {
        "id": "1603039",
        "text": "Ventilator Assistance-CPAP"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "MedicalDeviceManufacturer": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dDevice.04",
    "NemsisName": "Medical Device Manufacturer",
    "ElementTitle": "Medical Device Manufacturer",
    "ngModel": "MedicalDeviceManufacturer",
    "V2Number": "D09_03",
    "National": "",
    "State": "",
    "Definition": "The manufacturer of the medical device.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DeviceManufacturer",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceModelNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dDevice.05",
    "NemsisName": "Medical Device Model Number",
    "ElementTitle": "Medical Device Model Number",
    "ngModel": "MedicalDeviceModelNumber",
    "V2Number": "D09_04",
    "National": "",
    "State": "",
    "Definition": "The specific manufacturer's model number associated with medical device.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ModelNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDevicePurchaseDate": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dDevice.06",
    "NemsisName": "Medical Device Purchase Date",
    "ElementTitle": "Medical Device Purchase Date",
    "ngModel": "MedicalDevicePurchaseDate",
    "V2Number": "D09_05",
    "National": "",
    "State": "",
    "Definition": "The date the device was purchased or placed in service by the EMS agency.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TypeofFacility": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.01",
    "NemsisName": "Type of Facility",
    "ElementTitle": "Type of Facility",
    "ngModel": "TypeofFacility",
    "V2Number": "D04_15",
    "National": "",
    "State": "",
    "Definition": "The type of facility (healthcare or other) that the EMS agency transports patients to or from.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TypeOfFacility",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1701001",
        "text": "Assisted Living Facility"
      },
      {
        "id": "1701003",
        "text": "Clinic"
      },
      {
        "id": "1701005",
        "text": "Hospital"
      },
      {
        "id": "1701007",
        "text": "Nursing Home"
      },
      {
        "id": "1701009",
        "text": "Other"
      },
      {
        "id": "1701011",
        "text": "Urgent Care"
      },
      {
        "id": "1701013",
        "text": "Rehabilitation Facility"
      },
      {
        "id": "1701015",
        "text": "Mental Health Facility"
      },
      {
        "id": "1701017",
        "text": "Dialysis Center"
      }
    ],
    "attributes": []
  },
  "FacilityName": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.02",
    "NemsisName": "Facility Name",
    "ElementTitle": "Facility Name",
    "ngModel": "FacilityName",
    "V2Number": "D04_11",
    "National": "",
    "State": "",
    "Definition": "The name of the facility.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "FacilityName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FacilityLocationCode": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.03",
    "NemsisName": "Facility Location Code",
    "ElementTitle": "Facility Location Code",
    "ngModel": "FacilityLocationCode",
    "V2Number": "D04_12",
    "National": "",
    "State": "",
    "Definition": "The code of the facility as assigned by the state or the EMS agency.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "FacilityCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "HospitalDesignations": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.04",
    "NemsisName": "Hospital Designations",
    "ElementTitle": "Hospital Designations",
    "ngModel": "HospitalDesignations",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The designation(s) associated with the hospital (e.g., Trauma, STEMI, Peds, etc.)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "HospitalDesignation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9908001",
        "text": "Behavioral Health"
      },
      {
        "id": "9908003",
        "text": "Burn Center"
      },
      {
        "id": "9908005",
        "text": "Critical Access Hospital"
      },
      {
        "id": "9908007",
        "text": "Hospital (General)"
      },
      {
        "id": "9908009",
        "text": "Neonatal Center"
      },
      {
        "id": "9908011",
        "text": "Pediatric Center"
      },
      {
        "id": "9908017",
        "text": "Stroke Center"
      },
      {
        "id": "9908019",
        "text": "Rehab Center"
      },
      {
        "id": "9908021",
        "text": "Trauma Center Level 1"
      },
      {
        "id": "9908023",
        "text": "Trauma Center Level 2"
      },
      {
        "id": "9908025",
        "text": "Trauma Center Level 3"
      },
      {
        "id": "9908027",
        "text": "Trauma Center Level 4"
      },
      {
        "id": "9908029",
        "text": "Trauma Center Level 5"
      },
      {
        "id": "9908031",
        "text": "Cardiac-STEMI/PCI Capable"
      },
      {
        "id": "9908033",
        "text": "Cardiac-STEMI/PCI Capable (24/7)"
      },
      {
        "id": "9908035",
        "text": "Cardiac-STEMI/Non-PCI Capable"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "FacilityNationalProviderIdentifier": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.05",
    "NemsisName": "Facility National Provider Identifier",
    "ElementTitle": "Facility National Provider Identifier",
    "ngModel": "FacilityNationalProviderIdentifier",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The facility National Provider Identifier associated with National Provider System (NPS).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "NationalProviderIdentifier",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "10",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FacilityRoom,Suite,orApartment": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.06",
    "NemsisName": "Facility Room, Suite, or Apartment",
    "ElementTitle": "Facility Room, Suite, or Apartment",
    "ngModel": "FacilityRoom,Suite,orApartment",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The number of the specific room, suite, or apartment of the facility.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "FacilityRoom",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "15",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FacilityStreetAddress": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.07",
    "NemsisName": "Facility Street Address",
    "ElementTitle": "Facility Street Address",
    "ngModel": "FacilityStreetAddress",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The address where the facility is located.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "FacilityCity": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.08",
    "NemsisName": "Facility City",
    "ElementTitle": "Facility City",
    "ngModel": "FacilityCity",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The city where the facility is located (physical address).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FacilityState": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.09",
    "NemsisName": "Facility State",
    "ElementTitle": "Facility State",
    "ngModel": "FacilityState",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The state where the facility is located.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "FacilityZIPCode": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.10",
    "NemsisName": "Facility ZIP Code",
    "ElementTitle": "Facility ZIP Code",
    "ngModel": "FacilityZIPCode",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The zip code where the facility is located.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ZIP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": []
  },
  "FacilityCounty": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.11",
    "NemsisName": "Facility County",
    "ElementTitle": "Facility County",
    "ngModel": "FacilityCounty",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The county where the facility is located.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountyCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}",
    "options": [],
    "attributes": []
  },
  "FacilityCountry": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.12",
    "NemsisName": "Facility Country",
    "ElementTitle": "Facility Country",
    "ngModel": "FacilityCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country where the facility is located.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCodesCAMXUS",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "CA",
        "text": "Canada"
      },
      {
        "id": "MX",
        "text": "Mexico"
      },
      {
        "id": "US",
        "text": "United States"
      }
    ],
    "attributes": []
  },
  "FacilityGPSLocation": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.13",
    "NemsisName": "Facility GPS Location",
    "ElementTitle": "Facility GPS Location",
    "ngModel": "FacilityGPSLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The facility GPS Coordinates.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GPSLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(\\+|-)?(90(\\.[0]{1,6})?|([1-8][0-9]|[0-9])(\\.[0-9]{1,6})?),(\\+|-)?(180(\\.[0]{1,6})?|(1[0-7][0-9]|[1-9][0-9]|[0-9])(\\.[0-9]{1,6})?)",
    "options": [],
    "attributes": []
  },
  "FacilityUSNationalGridCoordinates": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.14",
    "NemsisName": "Facility US National Grid Coordinates",
    "ElementTitle": "Facility US National Grid Coordinates",
    "ngModel": "FacilityUSNationalGridCoordinates",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Facility US National Grid Coordinates",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "USNG",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[1][0-9][RSTU][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV][0-9]{8}",
    "options": [],
    "attributes": []
  },
  "FacilityPhoneNumber": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dFacility.15",
    "NemsisName": "Facility Phone Number",
    "ElementTitle": "Facility Phone Number",
    "ngModel": "FacilityPhoneNumber",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Facility phone number.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID"
    ]
  },
  "CustomDataElementResult": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomResults.01",
    "NemsisName": "Custom Data Element Result",
    "ElementTitle": "Custom Data Element Result",
    "ngModel": "CustomDataElementResult",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The actual value or values chosen (if values listed in eCustomConfiguration.06) or result (free text, Date/Time, or number) documented for the Custom Data Element",
    "Usage": "Mandatory",
    "V3Changes": "Added to allow customized data elements to be inserted and collected from within the NEMSIS Version 3 standard.",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "CustomResults",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "100000",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "CustomElementIDReferenced": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomResults.02",
    "NemsisName": "Custom Element ID Referenced",
    "ElementTitle": "Custom Element ID Referenced",
    "ngModel": "CustomElementIDReferenced",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "References the CustomElementID attribute for eCustomConfiguration.CustomGroup",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CorrelationID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "0",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "CorrelationIDofDemographicReportElementorGroup": {
    "DatasetName": "DEMDataSet",
    "DatasetType": "element",
    "NemsisNumber": "dCustomResults.03",
    "NemsisName": "CorrelationID of DemographicReport Element or Group",
    "ElementTitle": "CorrelationID of DemographicReport Element or Group",
    "ngModel": "CorrelationIDofDemographicReportElementorGroup",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "References the CorrelationID attribute of an element or group in the DemographicReport section",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CorrelationID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "0",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PatientCareReportNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eRecord.01",
    "NemsisName": "Patient Care Report Number",
    "ElementTitle": "Patient Care Report Number",
    "ngModel": "PatientCareReportNumber",
    "V2Number": "E01_01",
    "National": "National",
    "State": "State",
    "Definition": "The unique number automatically assigned by the EMS agency for each Patient Care Report (PCR). This should be a unique number for the EMS agency for all of time.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PatientCareReportNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "3",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SoftwareCreator": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eRecord.02",
    "NemsisName": "Software Creator",
    "ElementTitle": "Software Creator",
    "ngModel": "SoftwareCreator",
    "V2Number": "E01_02",
    "National": "National",
    "State": "State",
    "Definition": "The name of the vendor, manufacturer, and developer who designed the application that created this record.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SoftwareCreator",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SoftwareName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eRecord.03",
    "NemsisName": "Software Name",
    "ElementTitle": "Software Name",
    "ngModel": "SoftwareName",
    "V2Number": "E01_03",
    "National": "National",
    "State": "State",
    "Definition": "The name of the application used to create this record.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SoftwareName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SoftwareVersion": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eRecord.04",
    "NemsisName": "Software Version",
    "ElementTitle": "Software Version",
    "ngModel": "SoftwareVersion",
    "V2Number": "E01_04",
    "National": "National",
    "State": "State",
    "Definition": "The version of the application used to create this record.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SoftwareVersion",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "IncidentNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.03",
    "NemsisName": "Incident Number",
    "ElementTitle": "Incident Number",
    "ngModel": "IncidentNumber",
    "V2Number": "E02_02",
    "National": "National",
    "State": "State",
    "Definition": "The incident number assigned by the 911 Dispatch System",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMSIncidentNumber",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "3",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "EMSResponseNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.04",
    "NemsisName": "EMS Response Number",
    "ElementTitle": "EMS Response Number",
    "ngModel": "EMSResponseNumber",
    "V2Number": "E02_03",
    "National": "National",
    "State": "State",
    "Definition": "The internal EMS response number which is unique for each EMS Vehicle's (Unit) response to an incident within an EMS Agency.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMSResponseNumber",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "3",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "TypeofServiceRequested": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.05",
    "NemsisName": "Type of Service Requested",
    "ElementTitle": "Type of Service Requested",
    "ngModel": "TypeofServiceRequested",
    "V2Number": "E02_04",
    "National": "National",
    "State": "State",
    "Definition": "The type of service or category of service requested of the EMS Agency responding for this specific EMS event",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSServiceCat",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2205001",
        "text": "911 Response (Scene)"
      },
      {
        "id": "2205003",
        "text": "Intercept"
      },
      {
        "id": "2205005",
        "text": "Interfacility Transport"
      },
      {
        "id": "2205007",
        "text": "Medical Transport"
      },
      {
        "id": "2205009",
        "text": "Mutual Aid"
      },
      {
        "id": "2205011",
        "text": "Public Assistance/Other Not Listed"
      },
      {
        "id": "2205013",
        "text": "Standby"
      }
    ],
    "attributes": []
  },
  "StandbyPurpose": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.06",
    "NemsisName": "Standby Purpose",
    "ElementTitle": "Standby Purpose",
    "ngModel": "StandbyPurpose",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The main reason the EMS Unit is on Standby as the Primary Type of Service for the EMS event.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSStandByReason",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2206001",
        "text": "Disaster Event-Drill/Exercise"
      },
      {
        "id": "2206003",
        "text": "Disaster Event-Live Staging"
      },
      {
        "id": "2206005",
        "text": "Education"
      },
      {
        "id": "2206007",
        "text": "EMS Staging-Improve Coverage"
      },
      {
        "id": "2206009",
        "text": "Fire Support-Rehab"
      },
      {
        "id": "2206011",
        "text": "Fire Support-Standby"
      },
      {
        "id": "2206013",
        "text": "Mass Gathering-Concert/Entertainment Event"
      },
      {
        "id": "2206015",
        "text": "Mass Gathering-Fair/Community Event"
      },
      {
        "id": "2206017",
        "text": "Mass Gathering-Sporting Event"
      },
      {
        "id": "2206019",
        "text": "Other"
      },
      {
        "id": "2206021",
        "text": "Public Safety Support"
      }
    ],
    "attributes": []
  },
  "PrimaryRoleoftheUnit": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.07",
    "NemsisName": "Primary Role of the Unit",
    "ElementTitle": "Primary Role of the Unit",
    "ngModel": "PrimaryRoleoftheUnit",
    "V2Number": "E02_05",
    "National": "National",
    "State": "State",
    "Definition": "The primary role of the EMS Unit which responded to this specific EMS event",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PrimaryRoleOfUnit",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2207003",
        "text": "Ground Transport"
      },
      {
        "id": "2207005",
        "text": "Non-Transport Administrative (e.g., Supervisor)"
      },
      {
        "id": "2207007",
        "text": "Non-Transport Assistance"
      },
      {
        "id": "2207009",
        "text": "Non-Transport Rescue"
      },
      {
        "id": "2207011",
        "text": "Air Transport-Helicopter"
      },
      {
        "id": "2207013",
        "text": "Air Transport-Fixed Wing"
      }
    ],
    "attributes": []
  },
  "TypeofDispatchDelay": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.08",
    "NemsisName": "Type of Dispatch Delay",
    "ElementTitle": "Type of Dispatch Delay",
    "ngModel": "TypeofDispatchDelay",
    "V2Number": "E02_06",
    "National": "National",
    "State": "State",
    "Definition": "The dispatch delays, if any, associated with the dispatch of the EMS unit to the EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMSDispatchDelayReason",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2208001",
        "text": "Caller (Uncooperative)"
      },
      {
        "id": "2208003",
        "text": "Diversion/Failure (of previous unit)"
      },
      {
        "id": "2208005",
        "text": "High Call Volume"
      },
      {
        "id": "2208007",
        "text": "Language Barrier"
      },
      {
        "id": "2208009",
        "text": "Location (Inability to Obtain)"
      },
      {
        "id": "2208011",
        "text": "No EMS Vehicles (Units) Available"
      },
      {
        "id": "2208013",
        "text": "None/No Delay"
      },
      {
        "id": "2208015",
        "text": "Other"
      },
      {
        "id": "2208017",
        "text": "Technical Failure (Computer, Phone etc.)"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TypeofResponseDelay": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.09",
    "NemsisName": "Type of Response Delay",
    "ElementTitle": "Type of Response Delay",
    "ngModel": "TypeofResponseDelay",
    "V2Number": "E02_07",
    "National": "National",
    "State": "State",
    "Definition": "The response delays, if any, of the EMS unit associated with the EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMSUnitDelayReason",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2209001",
        "text": "Crowd"
      },
      {
        "id": "2209003",
        "text": "Directions/Unable to Locate"
      },
      {
        "id": "2209005",
        "text": "Distance"
      },
      {
        "id": "2209007",
        "text": "Diversion (Different Incident)"
      },
      {
        "id": "2209009",
        "text": "HazMat"
      },
      {
        "id": "2209011",
        "text": "None/No Delay"
      },
      {
        "id": "2209013",
        "text": "Other"
      },
      {
        "id": "2209015",
        "text": "Rendezvous Transport Unavailable"
      },
      {
        "id": "2209017",
        "text": "Route Obstruction (e.g., Train)"
      },
      {
        "id": "2209019",
        "text": "Scene Safety (Not Secure for EMS)"
      },
      {
        "id": "2209021",
        "text": "Staff Delay"
      },
      {
        "id": "2209023",
        "text": "Traffic"
      },
      {
        "id": "2209025",
        "text": "Vehicle Crash Involving this Unit"
      },
      {
        "id": "2209027",
        "text": "Vehicle Failure of this Unit"
      },
      {
        "id": "2209029",
        "text": "Weather"
      },
      {
        "id": "2209031",
        "text": "Mechanical Issue-Unit, Equipment, etc."
      },
      {
        "id": "2209033",
        "text": "Flight Planning"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TypeofSceneDelay": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.10",
    "NemsisName": "Type of Scene Delay",
    "ElementTitle": "Type of Scene Delay",
    "ngModel": "TypeofSceneDelay",
    "V2Number": "E02_08",
    "National": "National",
    "State": "State",
    "Definition": "The scene delays, if any, of the EMS unit associated with the EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMSSceneUnitDelayReason",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2210001",
        "text": "Awaiting Air Unit"
      },
      {
        "id": "2210003",
        "text": "Awaiting Ground Unit"
      },
      {
        "id": "2210005",
        "text": "Crowd"
      },
      {
        "id": "2210007",
        "text": "Directions/Unable to Locate"
      },
      {
        "id": "2210009",
        "text": "Distance"
      },
      {
        "id": "2210011",
        "text": "Extrication"
      },
      {
        "id": "2210013",
        "text": "HazMat"
      },
      {
        "id": "2210015",
        "text": "Language Barrier"
      },
      {
        "id": "2210017",
        "text": "None/No Delay"
      },
      {
        "id": "2210019",
        "text": "Other"
      },
      {
        "id": "2210021",
        "text": "Patient Access"
      },
      {
        "id": "2210023",
        "text": "Safety-Crew/Staging"
      },
      {
        "id": "2210025",
        "text": "Safety-Patient"
      },
      {
        "id": "2210027",
        "text": "Staff Delay"
      },
      {
        "id": "2210029",
        "text": "Traffic"
      },
      {
        "id": "2210031",
        "text": "Triage/Multiple Patients"
      },
      {
        "id": "2210033",
        "text": "Vehicle Crash Involving this Unit"
      },
      {
        "id": "2210035",
        "text": "Vehicle Failure of this Unit"
      },
      {
        "id": "2210037",
        "text": "Weather"
      },
      {
        "id": "2210039",
        "text": "Mechanical Issue-Unit, Equipment, etc."
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TypeofTransportDelay": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.11",
    "NemsisName": "Type of Transport Delay",
    "ElementTitle": "Type of Transport Delay",
    "ngModel": "TypeofTransportDelay",
    "V2Number": "E02_09",
    "National": "National",
    "State": "State",
    "Definition": "The transport delays, if any, of the EMS unit associated with the EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMSTransportUnitDelayReason",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2211001",
        "text": "Crowd"
      },
      {
        "id": "2211003",
        "text": "Directions/Unable to Locate"
      },
      {
        "id": "2211005",
        "text": "Distance"
      },
      {
        "id": "2211007",
        "text": "Diversion"
      },
      {
        "id": "2211009",
        "text": "HazMat"
      },
      {
        "id": "2211011",
        "text": "None/No Delay"
      },
      {
        "id": "2211013",
        "text": "Other"
      },
      {
        "id": "2211015",
        "text": "Rendezvous Transport Unavailable"
      },
      {
        "id": "2211017",
        "text": "Route Obstruction (e.g., Train)"
      },
      {
        "id": "2211019",
        "text": "Safety"
      },
      {
        "id": "2211021",
        "text": "Staff Delay"
      },
      {
        "id": "2211023",
        "text": "Traffic"
      },
      {
        "id": "2211025",
        "text": "Vehicle Crash Involving this Unit"
      },
      {
        "id": "2211027",
        "text": "Vehicle Failure of this Unit"
      },
      {
        "id": "2211029",
        "text": "Weather"
      },
      {
        "id": "2211031",
        "text": "Patient Condition Change (e.g., Unit Stopped)"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TypeofTurn-AroundDelay": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.12",
    "NemsisName": "Type of Turn-Around Delay",
    "ElementTitle": "Type of Turn-Around Delay",
    "ngModel": "TypeofTurn-AroundDelay",
    "V2Number": "E02_10",
    "National": "National",
    "State": "State",
    "Definition": "The turn-around delays, if any, of EMS unit associated with the EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMSTurnaroundUnitDelayReason",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2212001",
        "text": "Clean-up"
      },
      {
        "id": "2212003",
        "text": "Decontamination"
      },
      {
        "id": "2212005",
        "text": "Distance"
      },
      {
        "id": "2212007",
        "text": "Documentation"
      },
      {
        "id": "2212009",
        "text": "ED Overcrowding / Transfer of Care"
      },
      {
        "id": "2212011",
        "text": "Equipment Failure"
      },
      {
        "id": "2212013",
        "text": "Equipment/Supply Replenishment"
      },
      {
        "id": "2212015",
        "text": "None/No Delay"
      },
      {
        "id": "2212017",
        "text": "Other"
      },
      {
        "id": "2212019",
        "text": "Rendezvous Transport Unavailable"
      },
      {
        "id": "2212021",
        "text": "Route Obstruction (e.g., Train)"
      },
      {
        "id": "2212023",
        "text": "Staff Delay"
      },
      {
        "id": "2212025",
        "text": "Traffic"
      },
      {
        "id": "2212027",
        "text": "Vehicle Crash of this Unit"
      },
      {
        "id": "2212029",
        "text": "Vehicle Failure of this Unit"
      },
      {
        "id": "2212031",
        "text": "Weather"
      },
      {
        "id": "2212033",
        "text": "EMS Crew Accompanies Patient for Facility Procedure"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "EMSVehicle(Unit)Number": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.13",
    "NemsisName": "EMS Vehicle (Unit) Number",
    "ElementTitle": "EMS Vehicle (Unit) Number",
    "ngModel": "EMSVehicle(Unit)Number",
    "V2Number": "E02_11",
    "National": "National",
    "State": "State",
    "Definition": "The unique physical vehicle number of the responding unit.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSVehicleNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "25",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "LevelofCareofThisUnit": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.15",
    "NemsisName": "Level of Care of This Unit",
    "ElementTitle": "Level of Care of This Unit",
    "ngModel": "LevelofCareofThisUnit",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The level of care (BLS or ALS) the unit is able to provide based on the units' treatment capabilities for this EMS response.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "UnitLevelOfCare",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2215001",
        "text": "BLS-First Responder/EMR"
      },
      {
        "id": "2215003",
        "text": "BLS-Basic /EMT"
      },
      {
        "id": "2215005",
        "text": "BLS-AEMT"
      },
      {
        "id": "2215007",
        "text": "BLS-Intermediate"
      },
      {
        "id": "2215023",
        "text": "BLS-Community Paramedicine"
      },
      {
        "id": "2215009",
        "text": "ALS-AEMT"
      },
      {
        "id": "2215011",
        "text": "ALS-Intermediate"
      },
      {
        "id": "2215013",
        "text": "ALS-Paramedic"
      },
      {
        "id": "2215015",
        "text": "ALS-Community Paramedicine"
      },
      {
        "id": "2215017",
        "text": "ALS-Nurse"
      },
      {
        "id": "2215019",
        "text": "ALS-Physician"
      },
      {
        "id": "2215021",
        "text": "Specialty Critical Care"
      }
    ],
    "attributes": []
  },
  "VehicleDispatchLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.16",
    "NemsisName": "Vehicle Dispatch Location",
    "ElementTitle": "Vehicle Dispatch Location",
    "ngModel": "VehicleDispatchLocation",
    "V2Number": "E02_13",
    "National": "",
    "State": "",
    "Definition": "The EMS location or healthcare facility representing the geographic location of the unit or crew at the time of dispatch.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "VehicleDispatchLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "VehicleDispatchGPSLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.17",
    "NemsisName": "Vehicle Dispatch GPS Location",
    "ElementTitle": "Vehicle Dispatch GPS Location",
    "ngModel": "VehicleDispatchGPSLocation",
    "V2Number": "E02_15",
    "National": "",
    "State": "",
    "Definition": "The GPS coordinates associated with the EMS unit at the time of dispatch documented in decimal degrees.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GPSLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(\\+|-)?(90(\\.[0]{1,6})?|([1-8][0-9]|[0-9])(\\.[0-9]{1,6})?),(\\+|-)?(180(\\.[0]{1,6})?|(1[0-7][0-9]|[1-9][0-9]|[0-9])(\\.[0-9]{1,6})?)",
    "options": [],
    "attributes": []
  },
  "VehicleDispatchLocationUSNationalGridCoordinates": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.18",
    "NemsisName": "Vehicle Dispatch Location US National Grid Coordinates",
    "ElementTitle": "Vehicle Dispatch Location US National Grid Coordinates",
    "ngModel": "VehicleDispatchLocationUSNationalGridCoordinates",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The US National Grid Coordinates for the EMS Vehicle's Dispatch Location.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "USNG",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[1][0-9][RSTU][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV][0-9]{8}",
    "options": [],
    "attributes": []
  },
  "BeginningOdometerReadingofRespondingVehicle": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.19",
    "NemsisName": "Beginning Odometer Reading of Responding Vehicle",
    "ElementTitle": "Beginning Odometer Reading of Responding Vehicle",
    "ngModel": "BeginningOdometerReadingofRespondingVehicle",
    "V2Number": "E02_16",
    "National": "",
    "State": "State",
    "Definition": "The mileage (counter or odometer reading) of the vehicle at the beginning of the call (when the wheels begin moving). If EMS vehicle/unit is via water or air travel document the number in \"hours\" as it relates to the documentation of Boat, Fixed Wing, or Rotor Craft in eDisposition.16 (EMS Transport Method)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSMileageOdometer",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "8",
    "fractionDigits": "2",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "On-SceneOdometerReadingofRespondingVehicle": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.20",
    "NemsisName": "On-Scene Odometer Reading of Responding Vehicle",
    "ElementTitle": "On-Scene Odometer Reading of Responding Vehicle",
    "ngModel": "On-SceneOdometerReadingofRespondingVehicle",
    "V2Number": "E02_17",
    "National": "",
    "State": "State",
    "Definition": "The mileage (counter or odometer reading) of the vehicle when it arrives at the scene. If EMS vehicle/unit is via water or air travel document the number in \"hours\" as it relates to the documentation of Boat, Fixed Wing, or Rotor Craft in eDisposition.16 (EMS Transport Method)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSMileageOdometer",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "8",
    "fractionDigits": "2",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PatientDestinationOdometerReadingofRespondingVehicle": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.21",
    "NemsisName": "Patient Destination Odometer Reading of Responding Vehicle",
    "ElementTitle": "Patient Destination Odometer Reading of Responding Vehicle",
    "ngModel": "PatientDestinationOdometerReadingofRespondingVehicle",
    "V2Number": "E02_18",
    "National": "",
    "State": "State",
    "Definition": "The mileage (counter or odometer reading) of the vehicle when it arrives at the patient's destination. If EMS vehicle/unit is via water or air travel document the number in \"hours\" as it relates to the documentation of Boat, Fixed Wing, or Rotor Craft in eDisposition.16 (EMS Transport Method)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSMileageOdometer",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "8",
    "fractionDigits": "2",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EndingOdometerReadingofRespondingVehicle": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.22",
    "NemsisName": "Ending Odometer Reading of Responding Vehicle",
    "ElementTitle": "Ending Odometer Reading of Responding Vehicle",
    "ngModel": "EndingOdometerReadingofRespondingVehicle",
    "V2Number": "E02_19",
    "National": "",
    "State": "State",
    "Definition": "If using a counter, this is the mileage traveled beginning with dispatch through the transport of the patient to their destination and ending when back in service, starting from 0. If EMS vehicle/unit is via water or air travel document the number in \"hours\" as it relates to the documentation of boat, Fixed Wing, or Rotor Craft in eDisposition.16",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSMileageOdometer",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "8",
    "fractionDigits": "2",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ResponseModetoScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.23",
    "NemsisName": "Response Mode to Scene",
    "ElementTitle": "Response Mode to Scene",
    "ngModel": "ResponseModetoScene",
    "V2Number": "E02_20",
    "National": "National",
    "State": "State",
    "Definition": "The indication whether the response was emergent or non-emergent. An emergent response is an immediate response (typically using lights and sirens).",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSResponseMode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2223001",
        "text": "Emergent (Immediate Response)"
      },
      {
        "id": "2223003",
        "text": "Emergent Downgraded to Non-Emergent"
      },
      {
        "id": "2223005",
        "text": "Non-Emergent"
      },
      {
        "id": "2223007",
        "text": "Non-Emergent Upgraded to Emergent"
      }
    ],
    "attributes": []
  },
  "AdditionalResponseModeDescriptors": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eResponse.24",
    "NemsisName": "Additional Response Mode Descriptors",
    "ElementTitle": "Additional Response Mode Descriptors",
    "ngModel": "AdditionalResponseModeDescriptors",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The documentation of response mode techniques used for this EMS response.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "EMSAdditionalResponseMode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2224001",
        "text": "Intersection Navigation-Against Normal Light  Patterns"
      },
      {
        "id": "2224003",
        "text": "Intersection Navigation-With Automated Light Changing Technology"
      },
      {
        "id": "2224005",
        "text": "Intersection Navigation-With Normal Light Patterns"
      },
      {
        "id": "2224007",
        "text": "Scheduled"
      },
      {
        "id": "2224009",
        "text": "Speed-Enhanced per Local Policy"
      },
      {
        "id": "2224011",
        "text": "Speed-Normal Traffic"
      },
      {
        "id": "2224013",
        "text": "Unscheduled"
      },
      {
        "id": "2224015",
        "text": "Lights and Sirens"
      },
      {
        "id": "2224017",
        "text": "Lights and No Sirens"
      },
      {
        "id": "2224019",
        "text": "No Lights or Sirens"
      },
      {
        "id": "2224021",
        "text": "Initial No Lights or Sirens, Upgraded to Lights and Sirens"
      },
      {
        "id": "2224023",
        "text": "Initial Lights and Sirens, Downgraded to No Lights or Sirens"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "ComplaintReportedbyDispatch": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDispatch.01",
    "NemsisName": "Complaint Reported by Dispatch",
    "ElementTitle": "Complaint Reported by Dispatch",
    "ngModel": "ComplaintReportedbyDispatch",
    "V2Number": "E03_01",
    "National": "National",
    "State": "State",
    "Definition": "The complaint dispatch reported to the responding unit.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ComplaintReportedByDispatch",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2301001",
        "text": "Abdominal Pain/Problems"
      },
      {
        "id": "2301003",
        "text": "Allergic Reaction/Stings"
      },
      {
        "id": "2301005",
        "text": "Animal Bite"
      },
      {
        "id": "2301007",
        "text": "Assault"
      },
      {
        "id": "2301009",
        "text": "Automated Crash Notification"
      },
      {
        "id": "2301011",
        "text": "Back Pain (Non-Traumatic)"
      },
      {
        "id": "2301013",
        "text": "Breathing Problem"
      },
      {
        "id": "2301015",
        "text": "Burns/Explosion"
      },
      {
        "id": "2301017",
        "text": "Carbon Monoxide/Hazmat/Inhalation/CBRN"
      },
      {
        "id": "2301019",
        "text": "Cardiac Arrest/Death"
      },
      {
        "id": "2301021",
        "text": "Chest Pain (Non-Traumatic)"
      },
      {
        "id": "2301023",
        "text": "Choking"
      },
      {
        "id": "2301025",
        "text": "Convulsions/Seizure"
      },
      {
        "id": "2301027",
        "text": "Diabetic Problem"
      },
      {
        "id": "2301029",
        "text": "Electrocution/Lightning"
      },
      {
        "id": "2301031",
        "text": "Eye Problem/Injury"
      },
      {
        "id": "2301033",
        "text": "Falls"
      },
      {
        "id": "2301035",
        "text": "Fire"
      },
      {
        "id": "2301037",
        "text": "Headache"
      },
      {
        "id": "2301039",
        "text": "Healthcare Professional/Admission"
      },
      {
        "id": "2301041",
        "text": "Heart Problems/AICD"
      },
      {
        "id": "2301043",
        "text": "Heat/Cold Exposure"
      },
      {
        "id": "2301045",
        "text": "Hemorrhage/Laceration"
      },
      {
        "id": "2301047",
        "text": "Industrial Accident/Inaccessible Incident/Other Entrapments (Non-Vehicle)"
      },
      {
        "id": "2301049",
        "text": "Medical Alarm"
      },
      {
        "id": "2301051",
        "text": "No Other Appropriate Choice"
      },
      {
        "id": "2301053",
        "text": "Overdose/Poisoning/Ingestion"
      },
      {
        "id": "2301055",
        "text": "Pandemic/Epidemic/Outbreak"
      },
      {
        "id": "2301057",
        "text": "Pregnancy/Childbirth/Miscarriage"
      },
      {
        "id": "2301059",
        "text": "Psychiatric Problem/Abnormal Behavior/Suicide Attempt"
      },
      {
        "id": "2301061",
        "text": "Sick Person"
      },
      {
        "id": "2301063",
        "text": "Stab/Gunshot Wound/Penetrating Trauma"
      },
      {
        "id": "2301065",
        "text": "Standby"
      },
      {
        "id": "2301067",
        "text": "Stroke/CVA"
      },
      {
        "id": "2301069",
        "text": "Traffic/Transportation Incident"
      },
      {
        "id": "2301071",
        "text": "Transfer/Interfacility/Palliative Care"
      },
      {
        "id": "2301073",
        "text": "Traumatic Injury"
      },
      {
        "id": "2301075",
        "text": "Well Person Check"
      },
      {
        "id": "2301077",
        "text": "Unconscious/Fainting/Near-Fainting"
      },
      {
        "id": "2301079",
        "text": "Unknown Problem/Person Down"
      },
      {
        "id": "2301081",
        "text": "Drowning/Diving/SCUBA Accident"
      },
      {
        "id": "2301083",
        "text": "Airmedical Transport"
      }
    ],
    "attributes": []
  },
  "EMDPerformed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDispatch.02",
    "NemsisName": "EMD Performed",
    "ElementTitle": "EMD Performed",
    "ngModel": "EMDPerformed",
    "V2Number": "E03_02",
    "National": "National",
    "State": "State",
    "Definition": "Indication of whether Emergency Medical Dispatch was performed for this EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMDPerformed",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2302001",
        "text": "No"
      },
      {
        "id": "2302003",
        "text": "Yes, With Pre-Arrival Instructions"
      },
      {
        "id": "2302005",
        "text": "Yes, Without Pre-Arrival Instructions"
      },
      {
        "id": "2302007",
        "text": "Yes, Unknown if Pre-Arrival Instructions Given"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "EMDCardNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDispatch.03",
    "NemsisName": "EMD Card Number",
    "ElementTitle": "EMD Card Number",
    "ngModel": "EMDCardNumber",
    "V2Number": "E03_03",
    "National": "",
    "State": "",
    "Definition": "The EMD card number reported by dispatch, consisting of the card number, dispatch level, and dispatch mode",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMDCardNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "10",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "DispatchCenterNameorID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDispatch.04",
    "NemsisName": "Dispatch Center Name or ID",
    "ElementTitle": "Dispatch Center Name or ID",
    "ngModel": "DispatchCenterNameorID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The name or ID of the dispatch center providing electronic data to the PCR for the EMS agency, if applicable.",
    "Usage": "Optional",
    "V3Changes": "Added to the dataset to assist in identifying the CAD / dispatch center providing information to the EMS agency and ePCR when there are multiple dispatch centers sending resources to the same EMS incident.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ComputerAidedDispatchCADNameorID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "DispatchPriority(PatientAcuity)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDispatch.05",
    "NemsisName": "Dispatch Priority (Patient Acuity)",
    "ElementTitle": "Dispatch Priority (Patient Acuity)",
    "ngModel": "DispatchPriority(PatientAcuity)",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The actual, apparent, or potential acuity of the patient's condition as determined through information obtained during the EMD process.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DispatchPriority",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2305001",
        "text": "Critical"
      },
      {
        "id": "2305003",
        "text": "Emergent"
      },
      {
        "id": "2305005",
        "text": "Lower Acuity"
      },
      {
        "id": "2305007",
        "text": "Non-Acute [e.g., Scheduled Transfer  or Standby]"
      }
    ],
    "attributes": []
  },
  "UnitDispatchedCADRecordID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDispatch.06",
    "NemsisName": "Unit Dispatched CAD Record ID",
    "ElementTitle": "Unit Dispatched CAD Record ID",
    "ngModel": "UnitDispatchedCADRecordID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The unique ID assigned by the CAD system for the specific unit response.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "UnitDispatchedCADRecordID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "3",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "CrewMemberID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.07",
    "NemsisName": "Crew Member ID",
    "ElementTitle": "Crew Member ID",
    "ngModel": "CrewMemberID",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The statewide assigned ID number of the EMS crew member confirming the airway placement.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CrewMemberID",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "CrewMemberLevel": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCrew.02",
    "NemsisName": "Crew Member Level",
    "ElementTitle": "Crew Member Level",
    "ngModel": "CrewMemberLevel",
    "V2Number": "E04_03",
    "National": "",
    "State": "State",
    "Definition": "The functioning level of the crew member ID during this EMS patient encounter.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "MemberLevel",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9925001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9925003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9925005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9925007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9925013",
        "text": "First Responder"
      },
      {
        "id": "9925015",
        "text": "EMT-Basic"
      },
      {
        "id": "9925017",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9925019",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9925023",
        "text": "Other Healthcare Professional"
      },
      {
        "id": "9925025",
        "text": "Other Non-Healthcare Professional"
      },
      {
        "id": "9925027",
        "text": "Physician"
      },
      {
        "id": "9925029",
        "text": "Respiratory Therapist"
      },
      {
        "id": "9925031",
        "text": "Student"
      },
      {
        "id": "9925033",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9925035",
        "text": "Community Paramedicine"
      },
      {
        "id": "9925037",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9925039",
        "text": "Physician Assistant"
      },
      {
        "id": "9925041",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9925043",
        "text": "Registered Nurse"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "CrewMemberResponseRole": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCrew.03",
    "NemsisName": "Crew Member Response Role",
    "ElementTitle": "Crew Member Response Role",
    "ngModel": "CrewMemberResponseRole",
    "V2Number": "E04_02",
    "National": "",
    "State": "State",
    "Definition": "The role(s) of the role member during response, at scene treatment, and/or transport.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "CrewMemberRoles",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2403001",
        "text": "Driver/Pilot-Response"
      },
      {
        "id": "2403003",
        "text": "Driver/Pilot-Transport"
      },
      {
        "id": "2403005",
        "text": "Other"
      },
      {
        "id": "2403007",
        "text": "Other Patient Caregiver-At Scene"
      },
      {
        "id": "2403009",
        "text": "Other Patient Caregiver-Transport"
      },
      {
        "id": "2403011",
        "text": "Primary Patient Caregiver-At Scene"
      },
      {
        "id": "2403013",
        "text": "Primary Patient Caregiver-Transport"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "PSAPCallDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.01",
    "NemsisName": "PSAP Call Date/Time",
    "ElementTitle": "PSAP Call Date/Time",
    "ngModel": "PSAPCallDate/Time",
    "V2Number": "E05_02",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the phone rings (911 call to public safety answering point or other designated entity) requesting EMS services.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DispatchNotifiedDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.02",
    "NemsisName": "Dispatch Notified Date/Time",
    "ElementTitle": "Dispatch Notified Date/Time",
    "ngModel": "DispatchNotifiedDate/Time",
    "V2Number": "E05_03",
    "National": "",
    "State": "",
    "Definition": "The date/time dispatch was notified by the 911 call taker (if a separate entity).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "UnitNotifiedbyDispatchDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.03",
    "NemsisName": "Unit Notified by Dispatch Date/Time",
    "ElementTitle": "Unit Notified by Dispatch Date/Time",
    "ngModel": "UnitNotifiedbyDispatchDate/Time",
    "V2Number": "E05_04",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the responding unit was notified by dispatch.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "DispatchAcknowledgedDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.04",
    "NemsisName": "Dispatch Acknowledged Date/Time",
    "ElementTitle": "Dispatch Acknowledged Date/Time",
    "ngModel": "DispatchAcknowledgedDate/Time",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date/time the dispatch was acknowledged by the EMS Unit.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "UnitEnRouteDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.05",
    "NemsisName": "Unit En Route Date/Time",
    "ElementTitle": "Unit En Route Date/Time",
    "ngModel": "UnitEnRouteDate/Time",
    "V2Number": "E05_05",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the unit responded; that is, the time the vehicle started moving.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "UnitArrivedonSceneDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.06",
    "NemsisName": "Unit Arrived on Scene Date/Time",
    "ElementTitle": "Unit Arrived on Scene Date/Time",
    "ngModel": "UnitArrivedonSceneDate/Time",
    "V2Number": "E05_06",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the responding unit arrived on the scene; that is, the time the vehicle stopped moving at the scene.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ArrivedatPatientDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.07",
    "NemsisName": "Arrived at Patient Date/Time",
    "ElementTitle": "Arrived at Patient Date/Time",
    "ngModel": "ArrivedatPatientDate/Time",
    "V2Number": "E05_07",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the responding unit arrived at the patient's side.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "TransferofEMSPatientCareDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.08",
    "NemsisName": "Transfer of EMS Patient Care Date/Time",
    "ElementTitle": "Transfer of EMS Patient Care Date/Time",
    "ngModel": "TransferofEMSPatientCareDate/Time",
    "V2Number": "E05_08",
    "National": "",
    "State": "State",
    "Definition": "The date/time the patient was transferred from this EMS agency to another EMS agency for care.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "UnitLeftSceneDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.09",
    "NemsisName": "Unit Left Scene Date/Time",
    "ElementTitle": "Unit Left Scene Date/Time",
    "ngModel": "UnitLeftSceneDate/Time",
    "V2Number": "E05_09",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the responding unit left the scene with a patient (started moving).",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ArrivalatDestinationLandingAreaDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.10",
    "NemsisName": "Arrival at Destination Landing Area Date/Time",
    "ElementTitle": "Arrival at Destination Landing Area Date/Time",
    "ngModel": "ArrivalatDestinationLandingAreaDate/Time",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date/time the Air Medical vehicle arrived at the destination landing area.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "PatientArrivedatDestinationDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.11",
    "NemsisName": "Patient Arrived at Destination Date/Time",
    "ElementTitle": "Patient Arrived at Destination Date/Time",
    "ngModel": "PatientArrivedatDestinationDate/Time",
    "V2Number": "E05_10",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the responding unit arrived with the patient at the destination or transfer point.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DestinationPatientTransferofCareDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.12",
    "NemsisName": "Destination Patient Transfer of Care Date/Time",
    "ElementTitle": "Destination Patient Transfer of Care Date/Time",
    "ngModel": "DestinationPatientTransferofCareDate/Time",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The date/time that patient care was transferred to the destination healthcare facilities staff.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "UnitBackinServiceDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.13",
    "NemsisName": "Unit Back in Service Date/Time",
    "ElementTitle": "Unit Back in Service Date/Time",
    "ngModel": "UnitBackinServiceDate/Time",
    "V2Number": "E05_11",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the unit back was back in service and available for response (finished with call, but not necessarily back in home location).",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "UnitCanceledDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.14",
    "NemsisName": "Unit Canceled Date/Time",
    "ElementTitle": "Unit Canceled Date/Time",
    "ngModel": "UnitCanceledDate/Time",
    "V2Number": "E05_12",
    "National": "",
    "State": "State",
    "Definition": "The date/time the unit was canceled.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "UnitBackatHomeLocationDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.15",
    "NemsisName": "Unit Back at Home Location Date/Time",
    "ElementTitle": "Unit Back at Home Location Date/Time",
    "ngModel": "UnitBackatHomeLocationDate/Time",
    "V2Number": "E05_13",
    "National": "",
    "State": "",
    "Definition": "The date/time the responding unit was back in their service area. With agencies who utilized Agency Status Management, home location means the service area as assigned through the agency status management protocol.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "EMSCallCompletedDate/Time": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eTimes.16",
    "NemsisName": "EMS Call Completed Date/Time",
    "ElementTitle": "EMS Call Completed Date/Time",
    "ngModel": "EMSCallCompletedDate/Time",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date/time the responding unit completed all tasks associated with the event including transfer of the patient, and such things as cleaning and restocking.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "EMSPatientID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.01",
    "NemsisName": "EMS Patient ID",
    "ElementTitle": "EMS Patient ID",
    "ngModel": "EMSPatientID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The unique ID for the patient within the Agency",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PatientID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "LastName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.02",
    "NemsisName": "Last Name",
    "ElementTitle": "Last Name",
    "ngModel": "LastName",
    "V2Number": "E06_01",
    "National": "",
    "State": "State",
    "Definition": "The patient's last (family) name",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonLastName",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "FirstName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.03",
    "NemsisName": "First Name",
    "ElementTitle": "First Name",
    "ngModel": "FirstName",
    "V2Number": "E06_02",
    "National": "",
    "State": "State",
    "Definition": "The patient's first (given) name",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PersonFirstName",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "MiddleInitial/Name": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.04",
    "NemsisName": "Middle Initial/Name",
    "ElementTitle": "Middle Initial/Name",
    "ngModel": "MiddleInitial/Name",
    "V2Number": "E06_03",
    "National": "",
    "State": "",
    "Definition": "The patient's middle name, if any",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonMiddleName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Patient'sHomeAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.05",
    "NemsisName": "Patient's Home Address",
    "ElementTitle": "Patient's Home Address",
    "ngModel": "Patient'sHomeAddress",
    "V2Number": "E06_04",
    "National": "",
    "State": "State",
    "Definition": "Patient's address of residence",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "Patient'sHomeCity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.06",
    "NemsisName": "Patient's Home City",
    "ElementTitle": "Patient's Home City",
    "ngModel": "Patient'sHomeCity",
    "V2Number": "E06_05",
    "National": "",
    "State": "State",
    "Definition": "The patient's primary city or township of residence.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Patient'sHomeCounty": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.07",
    "NemsisName": "Patient's Home County",
    "ElementTitle": "Patient's Home County",
    "ngModel": "Patient'sHomeCounty",
    "V2Number": "E06_06",
    "National": "National",
    "State": "State",
    "Definition": "The patient's home county or parish of residence.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSICountyCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Patient'sHomeState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.08",
    "NemsisName": "Patient's Home State",
    "ElementTitle": "Patient's Home State",
    "ngModel": "Patient'sHomeState",
    "V2Number": "E06_07",
    "National": "National",
    "State": "State",
    "Definition": "The state, territory, or province where the patient resides.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSIStateCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Patient'sHomeZIPCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.09",
    "NemsisName": "Patient's Home ZIP Code",
    "ElementTitle": "Patient's Home ZIP Code",
    "ngModel": "Patient'sHomeZIPCode",
    "V2Number": "E06_08",
    "National": "National",
    "State": "State",
    "Definition": "The patient's ZIP code of residence.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ZIP",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Patient'sCountryofResidence": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.10",
    "NemsisName": "Patient's Country of Residence",
    "ElementTitle": "Patient's Country of Residence",
    "ngModel": "Patient'sCountryofResidence",
    "V2Number": "E06_09",
    "National": "",
    "State": "State",
    "Definition": "The country of residence of the patient.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PatientHomeCensusTract": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.11",
    "NemsisName": "Patient Home Census Tract",
    "ElementTitle": "Patient Home Census Tract",
    "ngModel": "PatientHomeCensusTract",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The census tract in which the patient lives",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CensusTracts",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{11}",
    "options": [],
    "attributes": []
  },
  "SocialSecurityNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.12",
    "NemsisName": "Social Security Number",
    "ElementTitle": "Social Security Number",
    "ngModel": "SocialSecurityNumber",
    "V2Number": "E06_10",
    "National": "",
    "State": "",
    "Definition": "The patient's social security number",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SocialSecurityNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{9}",
    "options": [],
    "attributes": []
  },
  "Gender": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.13",
    "NemsisName": "Gender",
    "ElementTitle": "Gender",
    "ngModel": "Gender",
    "V2Number": "E06_11",
    "National": "National",
    "State": "State",
    "Definition": "The Patient's Gender",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Gender",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9906001",
        "text": "Female"
      },
      {
        "id": "9906003",
        "text": "Male"
      },
      {
        "id": "9906005",
        "text": "Unknown (Unable to Determine)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Race": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.14",
    "NemsisName": "Race",
    "ElementTitle": "Race",
    "ngModel": "Race",
    "V2Number": "E06_12",
    "National": "National",
    "State": "State",
    "Definition": "The patient's race as defined by the OMB (US Office of Management and Budget)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "Race",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2514001",
        "text": "American Indian or Alaska Native"
      },
      {
        "id": "2514003",
        "text": "Asian"
      },
      {
        "id": "2514005",
        "text": "Black or African American"
      },
      {
        "id": "2514007",
        "text": "Hispanic or Latino"
      },
      {
        "id": "2514009",
        "text": "Native Hawaiian or Other Pacific Islander"
      },
      {
        "id": "2514011",
        "text": "White"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "Age": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.15",
    "NemsisName": "Age",
    "ElementTitle": "Age",
    "ngModel": "Age",
    "V2Number": "E06_14",
    "National": "National",
    "State": "State",
    "Definition": "The patient's age (either calculated from date of birth or best approximation)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Age",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "120",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AgeUnits": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.16",
    "NemsisName": "Age Units",
    "ElementTitle": "Age Units",
    "ngModel": "AgeUnits",
    "V2Number": "E06_15",
    "National": "National",
    "State": "State",
    "Definition": "The unit used to define the patient's age",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AgeUnits",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2516001",
        "text": "Days"
      },
      {
        "id": "2516003",
        "text": "Hours"
      },
      {
        "id": "2516005",
        "text": "Minutes"
      },
      {
        "id": "2516007",
        "text": "Months"
      },
      {
        "id": "2516009",
        "text": "Years"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "DateofBirth": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.17",
    "NemsisName": "Date of Birth",
    "ElementTitle": "Date of Birth",
    "ngModel": "DateofBirth",
    "V2Number": "E06_16",
    "National": "",
    "State": "State",
    "Definition": "The patient's date of birth",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateOfBirth",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1890-01-01",
    "maxInclusive": "2050-01-01",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "Patient'sPhoneNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.18",
    "NemsisName": "Patient's Phone Number",
    "ElementTitle": "Patient's Phone Number",
    "ngModel": "Patient'sPhoneNumber",
    "V2Number": "E06_17",
    "National": "",
    "State": "",
    "Definition": "The patient's phone number",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID"
    ]
  },
  "Patient'sEmailAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.19",
    "NemsisName": "Patient's Email Address",
    "ElementTitle": "Patient's Email Address",
    "ngModel": "Patient'sEmailAddress",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The email address of the patient",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "EmailAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "3",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": ".+@.+",
    "options": [],
    "attributes": [
      "EmailAddressType",
      "CorrelationID"
    ]
  },
  "StateIssuingDriver'sLicense": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.20",
    "NemsisName": "State Issuing Driver's License",
    "ElementTitle": "State Issuing Driver's License",
    "ngModel": "StateIssuingDriver'sLicense",
    "V2Number": "E06_18",
    "National": "",
    "State": "",
    "Definition": "The state that issued the drivers license",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "Driver'sLicenseNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePatient.21",
    "NemsisName": "Driver's License Number",
    "ElementTitle": "Driver's License Number",
    "ngModel": "Driver'sLicenseNumber",
    "V2Number": "E06_19",
    "National": "",
    "State": "",
    "Definition": "The patient's drivers license number",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DriversLicenseNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PrimaryMethodofPayment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.01",
    "NemsisName": "Primary Method of Payment",
    "ElementTitle": "Primary Method of Payment",
    "ngModel": "PrimaryMethodofPayment",
    "V2Number": "E07_01",
    "National": "National",
    "State": "State",
    "Definition": "The primary method of payment or type of insurance associated with this EMS encounter",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PrimaryMethodOfPayment",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2601001",
        "text": "Insurance"
      },
      {
        "id": "2601003",
        "text": "Medicaid"
      },
      {
        "id": "2601005",
        "text": "Medicare"
      },
      {
        "id": "2601007",
        "text": "Not Billed (for any reason)"
      },
      {
        "id": "2601009",
        "text": "Other Government"
      },
      {
        "id": "2601011",
        "text": "Self Pay"
      },
      {
        "id": "2601013",
        "text": "Workers Compensation"
      },
      {
        "id": "2601015",
        "text": "Payment by Facility"
      },
      {
        "id": "2601017",
        "text": "Contracted Payment"
      },
      {
        "id": "2601019",
        "text": "Community Network"
      },
      {
        "id": "2601021",
        "text": "No Insurance Identified"
      },
      {
        "id": "2601023",
        "text": "Other Payment Option"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "PhysicianCertificationStatement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.02",
    "NemsisName": "Physician Certification Statement",
    "ElementTitle": "Physician Certification Statement",
    "ngModel": "PhysicianCertificationStatement",
    "V2Number": "E07_02",
    "National": "",
    "State": "",
    "Definition": "Indication of whether a physician certification statement (PCS) is available documenting the medical necessity or the EMS encounter.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoUnkValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9922001",
        "text": "No"
      },
      {
        "id": "9922003",
        "text": "Unknown"
      },
      {
        "id": "9922005",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "DatePhysicianCertificationStatementSigned": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.03",
    "NemsisName": "Date Physician Certification Statement Signed",
    "ElementTitle": "Date Physician Certification Statement Signed",
    "ngModel": "DatePhysicianCertificationStatementSigned",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date the Physician Certification Statement was signed",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "ReasonforPhysicianCertificationStatement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.04",
    "NemsisName": "Reason for Physician Certification Statement",
    "ElementTitle": "Reason for Physician Certification Statement",
    "ngModel": "ReasonforPhysicianCertificationStatement",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The reason for EMS transport noted on the Physician Certification Statement",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "Reason",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2604001",
        "text": "Bed Confined"
      },
      {
        "id": "2604003",
        "text": "Cardiac/Hemodynamic monitoring required during transport"
      },
      {
        "id": "2604005",
        "text": "Confused, combative, lethargic, comatose"
      },
      {
        "id": "2604007",
        "text": "Contractures"
      },
      {
        "id": "2604009",
        "text": "Danger to self or others-monitoring"
      },
      {
        "id": "2604011",
        "text": "Danger to self or others-seclusion (flight risk)"
      },
      {
        "id": "2604013",
        "text": "DVT requires elevation of lower extremity"
      },
      {
        "id": "2604015",
        "text": "IV medications/fluids required during transport"
      },
      {
        "id": "2604017",
        "text": "Moderate to severe pain on movement"
      },
      {
        "id": "2604019",
        "text": "Morbid Obesity requires additional personnel/equipment to handle"
      },
      {
        "id": "2604021",
        "text": "Non-healing fractures"
      },
      {
        "id": "2604023",
        "text": "Orthopedic device (backboard, halo, use of pins in traction, etc.) requiring special handling in transit"
      },
      {
        "id": "2604025",
        "text": "Restraints (Physical or Chemical) anticipated or used during transport"
      },
      {
        "id": "2604027",
        "text": "Risk of falling off wheelchair or stretcher while in motion (not related to obesity)"
      },
      {
        "id": "2604029",
        "text": "Severe Muscular weakness and de-conditioned state precludes any significant physical activity"
      },
      {
        "id": "2604031",
        "text": "Special handling en route-Isolation"
      },
      {
        "id": "2604033",
        "text": "Third Party assistance/attendant required to apply, administer, or regulate or adjust oxygen en route"
      },
      {
        "id": "2604035",
        "text": "Unable to maintain erect sitting position in a chair for time needed to transport, due to moderate muscular weakness and de-conditioning."
      },
      {
        "id": "2604037",
        "text": "Unable to sit in chair or wheelchair due to Grade II or greater decubitus ulcers on buttocks."
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "HealthcareProviderTypeSigningPhysicianCertificationStatement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.05",
    "NemsisName": "Healthcare Provider Type Signing Physician Certification Statement",
    "ElementTitle": "Healthcare Provider Type Signing Physician Certification Statement",
    "ngModel": "HealthcareProviderTypeSigningPhysicianCertificationStatement",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of healthcare provider who signed the Physician Certification Statement",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "HealthcareProviderType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2605001",
        "text": "Clinical Nurse Specialist"
      },
      {
        "id": "2605003",
        "text": "Discharge Planner"
      },
      {
        "id": "2605005",
        "text": "Physician (MD or DO)"
      },
      {
        "id": "2605007",
        "text": "Physician Assistant"
      },
      {
        "id": "2605009",
        "text": "Registered Nurse"
      },
      {
        "id": "2605011",
        "text": "Registered Nurse Practitioner"
      }
    ],
    "attributes": []
  },
  "LastNameofIndividualSigningPhysicianCertificationStatement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.06",
    "NemsisName": "Last Name of Individual Signing Physician Certification Statement",
    "ElementTitle": "Last Name of Individual Signing Physician Certification Statement",
    "ngModel": "LastNameofIndividualSigningPhysicianCertificationStatement",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The last name of the healthcare provider who signed the Physician Certification Statement.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonLastName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FirstNameofIndividualSigningPhysicianCertificationStatement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.07",
    "NemsisName": "First Name of Individual Signing Physician Certification Statement",
    "ElementTitle": "First Name of Individual Signing Physician Certification Statement",
    "ngModel": "FirstNameofIndividualSigningPhysicianCertificationStatement",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The first name of the healthcare provider who signed the Physician Certification Statement.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonFirstName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PatientResidesinServiceArea": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.08",
    "NemsisName": "Patient Resides in Service Area",
    "ElementTitle": "Patient Resides in Service Area",
    "ngModel": "PatientResidesinServiceArea",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "An indication of whether the patient's current residence is within the EMS agency service area.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ResidencyStatusOfThePatient",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2608001",
        "text": "Resident Within EMS Service Area"
      },
      {
        "id": "2608003",
        "text": "Not a Resident Within EMS Service Area"
      }
    ],
    "attributes": []
  },
  "InsuranceCompanyID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.09",
    "NemsisName": "Insurance Company ID",
    "ElementTitle": "Insurance Company ID",
    "ngModel": "InsuranceCompanyID",
    "V2Number": "E07_03",
    "National": "",
    "State": "",
    "Definition": "The ID Number of the patient's insurance company.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "InsuranceCompanyID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "InsuranceCompanyName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.10",
    "NemsisName": "Insurance Company Name",
    "ElementTitle": "Insurance Company Name",
    "ngModel": "InsuranceCompanyName",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The name of the patient's insurance company.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "InsuranceCompanyName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "InsuranceCompanyBillingPriority": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.11",
    "NemsisName": "Insurance Company Billing Priority",
    "ElementTitle": "Insurance Company Billing Priority",
    "ngModel": "InsuranceCompanyBillingPriority",
    "V2Number": "E07_04",
    "National": "",
    "State": "",
    "Definition": "The billing priority or order for the insurance company.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "InsuranceCompanyBillingPriority",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2611001",
        "text": "Other"
      },
      {
        "id": "2611003",
        "text": "Primary"
      },
      {
        "id": "2611005",
        "text": "Secondary"
      },
      {
        "id": "2611007",
        "text": "Tertiary"
      },
      {
        "id": "2611009",
        "text": "Payer Responsibility Four"
      },
      {
        "id": "2611011",
        "text": "Payer Responsibility Five"
      },
      {
        "id": "2611013",
        "text": "Payer Responsibility Six"
      },
      {
        "id": "2611015",
        "text": "Payer Responsibility Seven"
      },
      {
        "id": "2611017",
        "text": "Payer Responsibility Eight"
      },
      {
        "id": "2611019",
        "text": "Payer Responsibility Nine"
      },
      {
        "id": "2611021",
        "text": "Payer Responsibility Ten"
      },
      {
        "id": "2611023",
        "text": "Payer Responsibility Eleven"
      },
      {
        "id": "2611025",
        "text": "Unknown"
      }
    ],
    "attributes": []
  },
  "InsuranceCompanyAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.12",
    "NemsisName": "Insurance Company Address",
    "ElementTitle": "Insurance Company Address",
    "ngModel": "InsuranceCompanyAddress",
    "V2Number": "E07_05",
    "National": "",
    "State": "",
    "Definition": "The mailing address of the Insurance Company",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "InsuranceCompanyCity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.13",
    "NemsisName": "Insurance Company City",
    "ElementTitle": "Insurance Company City",
    "ngModel": "InsuranceCompanyCity",
    "V2Number": "E07_06",
    "National": "",
    "State": "",
    "Definition": "The insurance company's city or township used for mailing purposes.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCodePayment",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "InsuranceCompanyState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.14",
    "NemsisName": "Insurance Company State",
    "ElementTitle": "Insurance Company State",
    "ngModel": "InsuranceCompanyState",
    "V2Number": "E07_07",
    "National": "",
    "State": "",
    "Definition": "The insurance company's state, territory, or province, or District of Columbia.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "InsuranceCompanyZIPCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.15",
    "NemsisName": "Insurance Company ZIP Code",
    "ElementTitle": "Insurance Company ZIP Code",
    "ngModel": "InsuranceCompanyZIPCode",
    "V2Number": "E07_08",
    "National": "",
    "State": "",
    "Definition": "The insurance company's ZIP Code",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ZIP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": []
  },
  "InsuranceCompanyCountry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.16",
    "NemsisName": "Insurance Company Country",
    "ElementTitle": "Insurance Company Country",
    "ngModel": "InsuranceCompanyCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The insurance company's country",
    "Usage": "Optional",
    "V3Changes": "Added to better document international addresses.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "InsuranceGroupID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.17",
    "NemsisName": "Insurance Group ID",
    "ElementTitle": "Insurance Group ID",
    "ngModel": "InsuranceGroupID",
    "V2Number": "E07_09",
    "National": "",
    "State": "",
    "Definition": "The ID number of the patient's insurance group.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "InsuranceGroupID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "InsurancePolicyIDNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.18",
    "NemsisName": "Insurance Policy ID Number",
    "ElementTitle": "Insurance Policy ID Number",
    "ngModel": "InsurancePolicyIDNumber",
    "V2Number": "E07_10",
    "National": "",
    "State": "",
    "Definition": "The ID number of the patient's insurance policy",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "InsurancePolicyIDNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "LastNameoftheInsured": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.19",
    "NemsisName": "Last Name of the Insured",
    "ElementTitle": "Last Name of the Insured",
    "ngModel": "LastNameoftheInsured",
    "V2Number": "E07_11",
    "National": "",
    "State": "",
    "Definition": "The last (family) name of the person insured by the insurance company.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonLastName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FirstNameoftheInsured": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.20",
    "NemsisName": "First Name of the Insured",
    "ElementTitle": "First Name of the Insured",
    "ngModel": "FirstNameoftheInsured",
    "V2Number": "E07_12",
    "National": "",
    "State": "",
    "Definition": "The first (given) name of the person insured by the insurance company",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonFirstName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MiddleInitial/NameoftheInsured": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.21",
    "NemsisName": "Middle Initial/Name of the Insured",
    "ElementTitle": "Middle Initial/Name of the Insured",
    "ngModel": "MiddleInitial/NameoftheInsured",
    "V2Number": "E07_13",
    "National": "",
    "State": "",
    "Definition": "The middle name, if any, of the person insured by the insurance company.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonMiddleName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "RelationshiptotheInsured": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.22",
    "NemsisName": "Relationship to the Insured",
    "ElementTitle": "Relationship to the Insured",
    "ngModel": "RelationshiptotheInsured",
    "V2Number": "E07_14",
    "National": "",
    "State": "",
    "Definition": "The relationship of the patient to the primary insured person",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "RelationshipToInsured",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2622001",
        "text": "Self"
      },
      {
        "id": "2622003",
        "text": "Spouse"
      },
      {
        "id": "2622005",
        "text": "Child/Dependent"
      },
      {
        "id": "2622009",
        "text": "Cadaver Donor"
      },
      {
        "id": "2622011",
        "text": "Employee"
      },
      {
        "id": "2622013",
        "text": "Life/Domestic Partner"
      },
      {
        "id": "2622015",
        "text": "Organ Donor"
      },
      {
        "id": "2622017",
        "text": "Unknown"
      },
      {
        "id": "2622019",
        "text": "Other Relationship"
      }
    ],
    "attributes": []
  },
  "InsuranceGroupName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.58",
    "NemsisName": "Insurance Group Name",
    "ElementTitle": "Insurance Group Name",
    "ngModel": "InsuranceGroupName",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The name of the patient's insurance group.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "InsuranceGroupName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianLastName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.23",
    "NemsisName": "Closest Relative/Guardian Last Name",
    "ElementTitle": "Closest Relative/Guardian Last Name",
    "ngModel": "ClosestRelative/GuardianLastName",
    "V2Number": "E07_18",
    "National": "",
    "State": "",
    "Definition": "The last (family) name of the patient's closest relative or guardian",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonLastName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianFirstName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.24",
    "NemsisName": "Closest Relative/ Guardian First Name",
    "ElementTitle": "Closest Relative/ Guardian First Name",
    "ngModel": "ClosestRelative/GuardianFirstName",
    "V2Number": "E07_19",
    "National": "",
    "State": "",
    "Definition": "The first (given) name of the patient's closest relative or guardian",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonFirstName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianMiddleInitial/Name": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.25",
    "NemsisName": "Closest Relative/ Guardian Middle Initial/Name",
    "ElementTitle": "Closest Relative/ Guardian Middle Initial/Name",
    "ngModel": "ClosestRelative/GuardianMiddleInitial/Name",
    "V2Number": "E07_20",
    "National": "",
    "State": "",
    "Definition": "The middle name/initial, if any, of the closest patient's relative or guardian.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonMiddleName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianStreetAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.26",
    "NemsisName": "Closest Relative/ Guardian Street Address",
    "ElementTitle": "Closest Relative/ Guardian Street Address",
    "ngModel": "ClosestRelative/GuardianStreetAddress",
    "V2Number": "E07_21",
    "National": "",
    "State": "",
    "Definition": "The street address of the residence of the patient's closest relative or guardian.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "ClosestRelative/GuardianCity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.27",
    "NemsisName": "Closest Relative/ Guardian City",
    "ElementTitle": "Closest Relative/ Guardian City",
    "ngModel": "ClosestRelative/GuardianCity",
    "V2Number": "E07_22",
    "National": "",
    "State": "",
    "Definition": "The primary city or township of residence of the patient's closest relative or guardian.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCodePayment",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.28",
    "NemsisName": "Closest Relative/ Guardian State",
    "ElementTitle": "Closest Relative/ Guardian State",
    "ngModel": "ClosestRelative/GuardianState",
    "V2Number": "E07_23",
    "National": "",
    "State": "",
    "Definition": "The state of residence of the patient's closest relative or guardian.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianZIPCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.29",
    "NemsisName": "Closest Relative/ Guardian ZIP Code",
    "ElementTitle": "Closest Relative/ Guardian ZIP Code",
    "ngModel": "ClosestRelative/GuardianZIPCode",
    "V2Number": "E07_24",
    "National": "",
    "State": "",
    "Definition": "The ZIP Code of the residence of the patient's closest relative or guardian.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ZIP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianCountry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.30",
    "NemsisName": "Closest Relative/ Guardian Country",
    "ElementTitle": "Closest Relative/ Guardian Country",
    "ngModel": "ClosestRelative/GuardianCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country of residence of the patient's closest relative or guardian.",
    "Usage": "Optional",
    "V3Changes": "Added to improve international compatibility.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ClosestRelative/GuardianPhoneNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.31",
    "NemsisName": "Closest Relative/ Guardian Phone Number",
    "ElementTitle": "Closest Relative/ Guardian Phone Number",
    "ngModel": "ClosestRelative/GuardianPhoneNumber",
    "V2Number": "E07_25",
    "National": "",
    "State": "",
    "Definition": "The phone number of the patient's closest relative or guardian",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID"
    ]
  },
  "ClosestRelative/GuardianRelationship": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.32",
    "NemsisName": "Closest Relative/ Guardian Relationship",
    "ElementTitle": "Closest Relative/ Guardian Relationship",
    "ngModel": "ClosestRelative/GuardianRelationship",
    "V2Number": "E07_26",
    "National": "",
    "State": "",
    "Definition": "The relationship of the patient's closest relative or guardian",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ClosestRelativeGuardianRelationship",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2632001",
        "text": "Appointed Guardian"
      },
      {
        "id": "2632003",
        "text": "Child/Dependent"
      },
      {
        "id": "2632005",
        "text": "Father"
      },
      {
        "id": "2632007",
        "text": "Mother"
      },
      {
        "id": "2632009",
        "text": "Other (Non-Relative)"
      },
      {
        "id": "2632011",
        "text": "Other (Relative)"
      },
      {
        "id": "2632013",
        "text": "Sibling"
      },
      {
        "id": "2632015",
        "text": "Spouse"
      },
      {
        "id": "2632017",
        "text": "Employee"
      },
      {
        "id": "2632019",
        "text": "Life/Domestic Partner"
      },
      {
        "id": "2632021",
        "text": "Unknown"
      }
    ],
    "attributes": []
  },
  "Patient'sEmployer": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.33",
    "NemsisName": "Patient's Employer",
    "ElementTitle": "Patient's Employer",
    "ngModel": "Patient'sEmployer",
    "V2Number": "E07_27",
    "National": "",
    "State": "",
    "Definition": "The patient's employers Name",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EmployerName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Patient'sEmployer'sAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.34",
    "NemsisName": "Patient's Employer's Address",
    "ElementTitle": "Patient's Employer's Address",
    "ngModel": "Patient'sEmployer'sAddress",
    "V2Number": "E07_28",
    "National": "",
    "State": "",
    "Definition": "The street address of the patient's employer",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "Patient'sEmployer'sCity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.35",
    "NemsisName": "Patient's Employer's City",
    "ElementTitle": "Patient's Employer's City",
    "ngModel": "Patient'sEmployer'sCity",
    "V2Number": "E07_29",
    "National": "",
    "State": "",
    "Definition": "The city or township of the patient's employer used for mailing purposes.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCodePayment",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Patient'sEmployer'sState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.36",
    "NemsisName": "Patient's Employer's State",
    "ElementTitle": "Patient's Employer's State",
    "ngModel": "Patient'sEmployer'sState",
    "V2Number": "E07_30",
    "National": "",
    "State": "",
    "Definition": "The state of the patient's employer",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSIStateCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "Patient'sEmployer'sZIPCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.37",
    "NemsisName": "Patient's Employer's ZIP Code",
    "ElementTitle": "Patient's Employer's ZIP Code",
    "ngModel": "Patient'sEmployer'sZIPCode",
    "V2Number": "E07_31",
    "National": "",
    "State": "",
    "Definition": "The ZIP Code of the patient's employer",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ZIP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": []
  },
  "Patient'sEmployer'sCountry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.38",
    "NemsisName": "Patient's Employer's Country",
    "ElementTitle": "Patient's Employer's Country",
    "ngModel": "Patient'sEmployer'sCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country of the patient's employer",
    "Usage": "Optional",
    "V3Changes": "Added to improve international compatibility.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Patient'sEmployer'sPrimaryPhoneNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.39",
    "NemsisName": "Patient's Employer's Primary Phone Number",
    "ElementTitle": "Patient's Employer's Primary Phone Number",
    "ngModel": "Patient'sEmployer'sPrimaryPhoneNumber",
    "V2Number": "E07_32",
    "National": "",
    "State": "",
    "Definition": "The employer's primary phone number.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType"
    ]
  },
  "ResponseUrgency": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.40",
    "NemsisName": "Response Urgency",
    "ElementTitle": "Response Urgency",
    "ngModel": "ResponseUrgency",
    "V2Number": "E07_33",
    "National": "",
    "State": "",
    "Definition": "The urgency in which the EMS agency began to mobilize resources for this EMS encounter.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ResponseUrgency",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2640001",
        "text": "Immediate"
      },
      {
        "id": "2640003",
        "text": "Non-Immediate"
      }
    ],
    "attributes": []
  },
  "PatientTransportAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.41",
    "NemsisName": "Patient Transport Assessment",
    "ElementTitle": "Patient Transport Assessment",
    "ngModel": "PatientTransportAssessment",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Documentation of the patient's transport need based on mobility and/or physical capability.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "TransportAssessment",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2641001",
        "text": "Unable to sit without assistance"
      },
      {
        "id": "2641003",
        "text": "Unable to stand without assistance"
      },
      {
        "id": "2641005",
        "text": "Unable to walk without assistance"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "SpecialtyCareTransportCareProvider": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.42",
    "NemsisName": "Specialty Care Transport Care Provider",
    "ElementTitle": "Specialty Care Transport Care Provider",
    "ngModel": "SpecialtyCareTransportCareProvider",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Documentation to show the patient care provided to the patient met the Specialty Care Transport Base Rate requirements.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "TransportCareProvider",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2642001",
        "text": "Advanced EMT-Paramedic"
      },
      {
        "id": "2642003",
        "text": "Nurse"
      },
      {
        "id": "2642005",
        "text": "Nurse Practitioner"
      },
      {
        "id": "2642007",
        "text": "Physician (MD, DO)"
      },
      {
        "id": "2642009",
        "text": "Physician Assistant"
      },
      {
        "id": "2642011",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "2642013",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "2642015",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "2642017",
        "text": "2009 Paramedic"
      },
      {
        "id": "2642019",
        "text": "First Responder"
      },
      {
        "id": "2642021",
        "text": "EMT-Basic"
      },
      {
        "id": "2642023",
        "text": "EMT-Intermediate"
      },
      {
        "id": "2642025",
        "text": "EMT-Paramedic"
      },
      {
        "id": "2642027",
        "text": "Other Healthcare Professional"
      },
      {
        "id": "2642029",
        "text": "Other Non-Healthcare Professional"
      },
      {
        "id": "2642031",
        "text": "Respiratory Therapist"
      },
      {
        "id": "2642033",
        "text": "Student"
      },
      {
        "id": "2642035",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "2642037",
        "text": "Community Paramedicine"
      },
      {
        "id": "2642039",
        "text": "Registered Nurse"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "AmbulanceTransportReasonCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.44",
    "NemsisName": "Ambulance Transport Reason Code",
    "ElementTitle": "Ambulance Transport Reason Code",
    "ngModel": "AmbulanceTransportReasonCode",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The CMS Ambulance Transport Reason Code for the transport.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "AmbulanceReasonCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "A",
        "text": "Patient was transported to the nearest facility for care of symptoms, complaints, or both"
      },
      {
        "id": "B",
        "text": "Patient was transported for the benefit of a preferred physician"
      },
      {
        "id": "C",
        "text": "Patient was transported for the nearness of family members"
      },
      {
        "id": "D",
        "text": "Patient was transported for the care of a specialist or for availability of equipment"
      },
      {
        "id": "E",
        "text": "Patient was transferred to a Rehabilitation Facility"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "RoundTripPurposeDescription": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.45",
    "NemsisName": "Round Trip Purpose Description",
    "ElementTitle": "Round Trip Purpose Description",
    "ngModel": "RoundTripPurposeDescription",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Free text description providing the purpose of the round trip EMS transport based on CR109 field for CMS.",
    "Usage": "Optional",
    "V3Changes": "Added to improve billing with electronic claims using X12",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TripPurposeDesciption",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "80",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "StretcherPurposeDescription": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.46",
    "NemsisName": "Stretcher Purpose Description",
    "ElementTitle": "Stretcher Purpose Description",
    "ngModel": "StretcherPurposeDescription",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Free Text Documentation providing the reason for use of a stretcher in the EMS patient transport.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StretcherPurposeDesciption",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "80",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "AmbulanceConditionsIndicator": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.47",
    "NemsisName": "Ambulance Conditions Indicator",
    "ElementTitle": "Ambulance Conditions Indicator",
    "ngModel": "AmbulanceConditionsIndicator",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Documentation of the CRC03 through CRC07 requirements for CMS billing using X12 transactions.",
    "Usage": "Optional",
    "V3Changes": "Added to improve billing with electronic claims using X12. The Codes and Descriptors updated Sept 2013 to meet the X12 5010 standard.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "AmbulanceConditionsIndicator",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "01",
        "text": "Patient was admitted to a hospital"
      },
      {
        "id": "04",
        "text": "Patient was moved by stretcher"
      },
      {
        "id": "05",
        "text": "Patient was unconscious or in shock"
      },
      {
        "id": "06",
        "text": "Patient was transported in an emergency situation"
      },
      {
        "id": "07",
        "text": "Patient had to be physically restrained"
      },
      {
        "id": "08",
        "text": "Patient had visible hemorrhaging"
      },
      {
        "id": "09",
        "text": "Ambulance service was medically necessary"
      },
      {
        "id": "12",
        "text": "Patient is confined to a bed or chair (Use code 12 to indicate patient was bedridden during transport.)"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "MileagetoClosestHospitalFacility": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.48",
    "NemsisName": "Mileage to Closest Hospital Facility",
    "ElementTitle": "Mileage to Closest Hospital Facility",
    "ngModel": "MileagetoClosestHospitalFacility",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The mileage to the closest hospital facility from the scene. Documented only if the patient was transported to a facility farther away than the closest hospital.",
    "Usage": "Optional",
    "V3Changes": "Added for improved billing documentation.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Mileage",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "1000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "2",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ALSAssessmentPerformedandWarranted": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.49",
    "NemsisName": "ALS Assessment Performed and Warranted",
    "ElementTitle": "ALS Assessment Performed and Warranted",
    "ngModel": "ALSAssessmentPerformedandWarranted",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Documentation that the patient required an ALS assessment and it was performed.",
    "Usage": "Optional",
    "V3Changes": "Added to improve billing justification",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "CMSServiceLevel": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.50",
    "NemsisName": "CMS Service Level",
    "ElementTitle": "CMS Service Level",
    "ngModel": "CMSServiceLevel",
    "V2Number": "E07_34",
    "National": "National",
    "State": "State",
    "Definition": "The CMS service level for this EMS encounter.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CMSServiceLevel",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2650001",
        "text": "ALS, Level 1"
      },
      {
        "id": "2650003",
        "text": "ALS, Level 1 Emergency"
      },
      {
        "id": "2650005",
        "text": "ALS, Level 2"
      },
      {
        "id": "2650007",
        "text": "BLS"
      },
      {
        "id": "2650009",
        "text": "BLS, Emergency"
      },
      {
        "id": "2650011",
        "text": "Fixed Wing (Airplane)"
      },
      {
        "id": "2650013",
        "text": "Paramedic Intercept"
      },
      {
        "id": "2650015",
        "text": "Specialty Care Transport"
      },
      {
        "id": "2650017",
        "text": "Rotary Wing (Helicopter)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "EMSConditionCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.51",
    "NemsisName": "EMS Condition Code",
    "ElementTitle": "EMS Condition Code",
    "ngModel": "EMSConditionCode",
    "V2Number": "E07_35",
    "National": "",
    "State": "",
    "Definition": "The condition code associated with the CMS EMS negotiated rule-making process.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "icd10Code",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[A-Z][0-9][0-9A-Z]((\\.[0-9A-Z]{1,3})?)",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "CMSTransportationIndicator": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.52",
    "NemsisName": "CMS Transportation Indicator",
    "ElementTitle": "CMS Transportation Indicator",
    "ngModel": "CMSTransportationIndicator",
    "V2Number": "E07_37",
    "National": "",
    "State": "",
    "Definition": "The CMS Ambulance Fee Schedule Transportation and Air Medical Transportation Indicators are used to better describe why it was necessary for the patient to be transported in a particular way or circumstance.",
    "Usage": "Optional",
    "V3Changes": "Name changed from Condition Code Modifier to CMS Transportation Indicator",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "CMSTransportationIndicator",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "C1",
        "text": "Interfacility Transport (Requires Higher level of care)"
      },
      {
        "id": "C2",
        "text": "Interfacility Transport (service not available)"
      },
      {
        "id": "C3",
        "text": "Emergency Trauma Dispatch Condition Code (Major Incident or Mechanism of Injury)"
      },
      {
        "id": "C4",
        "text": "Medically Necessary Transport (Facility on Divert or Services Unavailable)"
      },
      {
        "id": "C5",
        "text": "BLS Transport of ALS Patient (ALS not available)"
      },
      {
        "id": "C6",
        "text": "ALS Response (Based on Dispatch Info) to BLS Patient (Condition)"
      },
      {
        "id": "C7",
        "text": "IV Medications required en route (ALS)"
      },
      {
        "id": "D1",
        "text": "Long Distance-patient's condition requires rapid transportation over a long distance"
      },
      {
        "id": "D2",
        "text": "Rare Circumstances, Traffic Patterns Precludes Ground Transport"
      },
      {
        "id": "D3",
        "text": "Time to the closest appropriate hospital due to the patient's condition precludes ground transport; maximize clinical benefits"
      },
      {
        "id": "D4",
        "text": "Pick up Point not Accessible by Ground Transport"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "TransportAuthorizationCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.53",
    "NemsisName": "Transport Authorization Code",
    "ElementTitle": "Transport Authorization Code",
    "ngModel": "TransportAuthorizationCode",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Prior authorization code provided by the insurance carrier/payer.",
    "Usage": "Optional",
    "V3Changes": "Added to improve billing documentation.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "AuthorizationCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PriorAuthorizationCodePayer": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.54",
    "NemsisName": "Prior Authorization Code Payer",
    "ElementTitle": "Prior Authorization Code Payer",
    "ngModel": "PriorAuthorizationCodePayer",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Payer who has provided the Prior Authorization Code.",
    "Usage": "Optional",
    "V3Changes": "Added to improve billing documentation.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SupplyItemUsedName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.55",
    "NemsisName": "Supply Item Used Name",
    "ElementTitle": "Supply Item Used Name",
    "ngModel": "SupplyItemUsedName",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The name of the supply used on the patient by the EMS Crew during the EMS event.",
    "Usage": "Optional",
    "V3Changes": "Added to track EMS supplies for billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SupplyUsed",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "80",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "NumberofSupplyItem(s)Used": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.56",
    "NemsisName": "Number of Supply Item(s) Used",
    "ElementTitle": "Number of Supply Item(s) Used",
    "ngModel": "NumberofSupplyItem(s)Used",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The number of the specific supply item used on the patient by the EMS Crew during the EMS event.",
    "Usage": "Optional",
    "V3Changes": "Added to track EMS supplies for billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SupplyCount",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "100000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PayerType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "ePayment.57",
    "NemsisName": "Payer Type",
    "ElementTitle": "Payer Type",
    "ngModel": "PayerType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Payer type according to X12 standard.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PayerType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "11",
        "text": "Other Non-Federal Programs"
      },
      {
        "id": "12",
        "text": "Preferred Provider Organization (PPO)"
      },
      {
        "id": "13",
        "text": "Point of Service (POS)"
      },
      {
        "id": "14",
        "text": "Exclusive Provider Organization (EPO)"
      },
      {
        "id": "15",
        "text": "Indemnity Insurance"
      },
      {
        "id": "16",
        "text": "Health Maintenance Organization (HMO) Medicare Risk"
      },
      {
        "id": "17",
        "text": "Dental Maintenance Organization"
      },
      {
        "id": "AM",
        "text": "Automobile Medical"
      },
      {
        "id": "BL",
        "text": "Blue Cross/Blue Shield"
      },
      {
        "id": "CH",
        "text": "Champus"
      },
      {
        "id": "CI",
        "text": "Commercial Insurance Co."
      },
      {
        "id": "DS",
        "text": "Disability"
      },
      {
        "id": "FI",
        "text": "Federal Employees Program"
      },
      {
        "id": "HM",
        "text": "Health Maintenance Organization"
      },
      {
        "id": "LM",
        "text": "Liability Medical"
      },
      {
        "id": "MA",
        "text": "Medicare Part A"
      },
      {
        "id": "MB",
        "text": "Medicare Part B"
      },
      {
        "id": "MC",
        "text": "Medicaid"
      },
      {
        "id": "OF",
        "text": "Other Federal Program"
      },
      {
        "id": "TV",
        "text": "Title V"
      },
      {
        "id": "VA",
        "text": "Veteran Affairs Plan"
      },
      {
        "id": "WC",
        "text": "Workers' Compensation Health Claim"
      },
      {
        "id": "ZZ",
        "text": "Mutually Defined"
      }
    ],
    "attributes": []
  },
  "FirstEMSUnitonScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.01",
    "NemsisName": "First EMS Unit on Scene",
    "ElementTitle": "First EMS Unit on Scene",
    "ngModel": "FirstEMSUnitonScene",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Documentation that this EMS Unit was the first EMS Unit for the EMS Agency on the Scene",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "OtherEMSorPublicSafetyAgenciesatScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.02",
    "NemsisName": "Other EMS or Public Safety Agencies at Scene",
    "ElementTitle": "Other EMS or Public Safety Agencies at Scene",
    "ngModel": "OtherEMSorPublicSafetyAgenciesatScene",
    "V2Number": "E08_01",
    "National": "",
    "State": "",
    "Definition": "Other EMS agency names that were at the scene, if any",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OtherEMSAgenciesAtScene",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "OtherEMSorPublicSafetyAgencyIDNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.03",
    "NemsisName": "Other EMS or Public Safety Agency ID Number",
    "ElementTitle": "Other EMS or Public Safety Agency ID Number",
    "ngModel": "OtherEMSorPublicSafetyAgencyIDNumber",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The ID number for the EMS Agency or Other Public Safety listed in eScene.02",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EMSAgencyID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "25",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TypeofOtherServiceatScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.04",
    "NemsisName": "Type of Other Service at Scene",
    "ElementTitle": "Type of Other Service at Scene",
    "ngModel": "TypeofOtherServiceatScene",
    "V2Number": "E08_02",
    "National": "",
    "State": "",
    "Definition": "The type of public safety or EMS service associated with Other Agencies on Scene",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OtherServicesAtScene",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2704001",
        "text": "EMS Mutual Aid"
      },
      {
        "id": "2704003",
        "text": "Fire"
      },
      {
        "id": "2704005",
        "text": "First Responder"
      },
      {
        "id": "2704007",
        "text": "Hazmat"
      },
      {
        "id": "2704009",
        "text": "Law"
      },
      {
        "id": "2704011",
        "text": "Other"
      },
      {
        "id": "2704013",
        "text": "Other EMS Agency"
      },
      {
        "id": "2704015",
        "text": "Other Health Care Provider"
      },
      {
        "id": "2704017",
        "text": "Rescue"
      },
      {
        "id": "2704019",
        "text": "Utilities"
      }
    ],
    "attributes": []
  },
  "Date/TimeInitialResponderArrivedonScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.05",
    "NemsisName": "Date/Time Initial Responder Arrived on Scene",
    "ElementTitle": "Date/Time Initial Responder Arrived on Scene",
    "ngModel": "Date/TimeInitialResponderArrivedonScene",
    "V2Number": "E08_04",
    "National": "",
    "State": "",
    "Definition": "The time that the initial responder arrived on the scene, if applicable.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "NumberofPatientsatScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.06",
    "NemsisName": "Number of Patients at Scene",
    "ElementTitle": "Number of Patients at Scene",
    "ngModel": "NumberofPatientsatScene",
    "V2Number": "E08_05",
    "National": "National",
    "State": "State",
    "Definition": "Indicator of how many total patients were at the scene",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "NumberOfPatientsAtScene",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2707001",
        "text": "Multiple"
      },
      {
        "id": "2707003",
        "text": "None"
      },
      {
        "id": "2707005",
        "text": "Single"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "MassCasualtyIncident": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.07",
    "NemsisName": "Mass Casualty Incident",
    "ElementTitle": "Mass Casualty Incident",
    "ngModel": "MassCasualtyIncident",
    "V2Number": "E08_06",
    "National": "National",
    "State": "State",
    "Definition": "Indicator if this event would be considered a mass casualty incident (overwhelmed existing EMS resources)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "TriageClassificationforMCIPatient": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.08",
    "NemsisName": "Triage Classification for MCI Patient",
    "ElementTitle": "Triage Classification for MCI Patient",
    "ngModel": "TriageClassificationforMCIPatient",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The color associated with the initial triage assessment/classification of the MCI patient.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TriageClassification",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2708001",
        "text": "Red - Immediate"
      },
      {
        "id": "2708003",
        "text": "Yellow - Delayed"
      },
      {
        "id": "2708005",
        "text": "Green - Minimal (Minor)"
      },
      {
        "id": "2708007",
        "text": "Gray - Expectant"
      },
      {
        "id": "2708009",
        "text": "Black - Deceased"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "IncidentLocationType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.09",
    "NemsisName": "Incident Location Type",
    "ElementTitle": "Incident Location Type",
    "ngModel": "IncidentLocationType",
    "V2Number": "E08_07",
    "National": "National",
    "State": "State",
    "Definition": "The kind of location where the incident happened",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "IncidentLocationType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "Y92\\.[0-9]{1,3}",
    "options": [
        { id: "0123456789", text: "Some ICD10 Code" }
    ],
    "attributes": [
      "NV"
    ]
  },
  "IncidentFacilityCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.10",
    "NemsisName": "Incident Facility Code",
    "ElementTitle": "Incident Facility Code",
    "ngModel": "IncidentFacilityCode",
    "V2Number": "E08_08",
    "National": "",
    "State": "State",
    "Definition": "The state, regulatory, or other unique number (code) associated with the facility if the Incident is a Healthcare Facility.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "IncidentFacilityCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "SceneGPSLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.11",
    "NemsisName": "Scene GPS Location",
    "ElementTitle": "Scene GPS Location",
    "ngModel": "SceneGPSLocation",
    "V2Number": "E08_10",
    "National": "",
    "State": "State",
    "Definition": "The GPS coordinates associated with the Scene.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GPSLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(\\+|-)?(90(\\.[0]{1,6})?|([1-8][0-9]|[0-9])(\\.[0-9]{1,6})?),(\\+|-)?(180(\\.[0]{1,6})?|(1[0-7][0-9]|[1-9][0-9]|[0-9])(\\.[0-9]{1,6})?)",
    "options": [],
    "attributes": []
  },
  "SceneUSNationalGridCoordinates": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.12",
    "NemsisName": "Scene US National Grid Coordinates",
    "ElementTitle": "Scene US National Grid Coordinates",
    "ngModel": "SceneUSNationalGridCoordinates",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The US National Grid Coordinates for the Scene.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "USNG",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[1][0-9][RSTU][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV][0-9]{8}",
    "options": [],
    "attributes": []
  },
  "IncidentFacilityorLocationName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.13",
    "NemsisName": "Incident Facility or Location Name",
    "ElementTitle": "Incident Facility or Location Name",
    "ngModel": "IncidentFacilityorLocationName",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The name of the facility, business, building, etc. associated with the scene of the EMS event.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "IncidentFacilityName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MilePostorMajorRoadway": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.14",
    "NemsisName": "Mile Post or Major Roadway",
    "ElementTitle": "Mile Post or Major Roadway",
    "ngModel": "MilePostorMajorRoadway",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The mile post or major roadway associated with the incident locations",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "MilePostOrMajorRoadway",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "35",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "IncidentStreetAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.15",
    "NemsisName": "Incident Street Address",
    "ElementTitle": "Incident Street Address",
    "ngModel": "IncidentStreetAddress",
    "V2Number": "E08_11",
    "National": "",
    "State": "State",
    "Definition": "The street address where the patient was found, or, if no patient, the address to which the unit responded.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "StreetAddress",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "StreetAddress2"
    ]
  },
  "IncidentApartment,Suite,orRoom": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.16",
    "NemsisName": "Incident Apartment, Suite, or Room",
    "ElementTitle": "Incident Apartment, Suite, or Room",
    "ngModel": "IncidentApartment,Suite,orRoom",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The number of the specific apartment, suite, or room where the incident occurred.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "SceneApartment",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "15",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "IncidentCity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.17",
    "NemsisName": "Incident City",
    "ElementTitle": "Incident City",
    "ngModel": "IncidentCity",
    "V2Number": "E08_12",
    "National": "",
    "State": "State",
    "Definition": "The city or township (if applicable) where the patient was found or to which the unit responded (or best approximation)",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CityGnisCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "IncidentState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.18",
    "NemsisName": "Incident State",
    "ElementTitle": "Incident State",
    "ngModel": "IncidentState",
    "V2Number": "E08_14",
    "National": "National",
    "State": "State",
    "Definition": "The state, territory, or province where the patient was found or to which the unit responded (or best approximation)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSIStateCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "IncidentZIPCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.19",
    "NemsisName": "Incident ZIP Code",
    "ElementTitle": "Incident ZIP Code",
    "ngModel": "IncidentZIPCode",
    "V2Number": "E08_15",
    "National": "National",
    "State": "State",
    "Definition": "The ZIP code of the incident location",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ZIP",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "SceneCrossStreetorDirections": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.20",
    "NemsisName": "Scene Cross Street or Directions",
    "ElementTitle": "Scene Cross Street or Directions",
    "ngModel": "SceneCrossStreetorDirections",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The nearest cross street to the incident address or directions from a recognized landmark or the second street name of an intersection.",
    "Usage": "Recommended",
    "V3Changes": "Added to better locate/document the scene (incident) location.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "SceneCrossStreet",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "IncidentCounty": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.21",
    "NemsisName": "Incident County",
    "ElementTitle": "Incident County",
    "ngModel": "IncidentCounty",
    "V2Number": "E08_13",
    "National": "National",
    "State": "State",
    "Definition": "The county or parish where the patient was found or to which the unit responded (or best approximation)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSICountyCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "IncidentCountry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.22",
    "NemsisName": "Incident Country",
    "ElementTitle": "Incident Country",
    "ngModel": "IncidentCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country of the incident location.",
    "Usage": "Optional",
    "V3Changes": "Added for international compatibility.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "IncidentCensusTract": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eScene.23",
    "NemsisName": "Incident Census Tract",
    "ElementTitle": "Incident Census Tract",
    "ngModel": "IncidentCensusTract",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The census tract in which the incident occurred.",
    "Usage": "Optional",
    "V3Changes": "Added to improve the ability to use census and other demographic information within EMS research.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CensusTracts",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{11}",
    "options": [],
    "attributes": []
  },
  "Date/TimeofSymptomOnset": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.01",
    "NemsisName": "Date/Time of Symptom Onset",
    "ElementTitle": "Date/Time of Symptom Onset",
    "ngModel": "Date/TimeofSymptomOnset",
    "V2Number": "E05_01",
    "National": "National",
    "State": "State",
    "Definition": "The date and time the symptom began (or was discovered) as it relates to this EMS event. This is described or estimated by the patient, family, and/or healthcare professionals.",
    "Usage": "Required",
    "V3Changes": "Added to better define the EMS patient event.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "PossibleInjury": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.02",
    "NemsisName": "Possible Injury",
    "ElementTitle": "Possible Injury",
    "ngModel": "PossibleInjury",
    "V2Number": "E09_04",
    "National": "National",
    "State": "State",
    "Definition": "Indication whether or not there was an injury",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoUnkValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9922001",
        "text": "No"
      },
      {
        "id": "9922003",
        "text": "Unknown"
      },
      {
        "id": "9922005",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ComplaintType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.03",
    "NemsisName": "Complaint Type",
    "ElementTitle": "Complaint Type",
    "ngModel": "ComplaintType",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The type of patient healthcare complaint being documented.",
    "Usage": "Recommended",
    "V3Changes": "Added to improve data integrity.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ComplaintType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2803001",
        "text": "Chief (Primary)"
      },
      {
        "id": "2803003",
        "text": "Other"
      },
      {
        "id": "2803005",
        "text": "Secondary"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Complaint": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.04",
    "NemsisName": "Complaint",
    "ElementTitle": "Complaint",
    "ngModel": "Complaint",
    "V2Number": "E09_05",
    "National": "",
    "State": "State",
    "Definition": "The statement of the problem by the patient or the history provider.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Complaint",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DurationofComplaint": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.05",
    "NemsisName": "Duration of Complaint",
    "ElementTitle": "Duration of Complaint",
    "ngModel": "DurationofComplaint",
    "V2Number": "E09_06",
    "National": "",
    "State": "State",
    "Definition": "The duration of the complaint",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DurationComplaint",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "365",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "TimeUnitsofDurationofComplaint": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.06",
    "NemsisName": "Time Units of Duration of Complaint",
    "ElementTitle": "Time Units of Duration of Complaint",
    "ngModel": "TimeUnitsofDurationofComplaint",
    "V2Number": "E09_07",
    "National": "",
    "State": "State",
    "Definition": "The time units of the duration of the patient's complaint",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TimeUnitsOfChiefComplaint",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2806001",
        "text": "Seconds"
      },
      {
        "id": "2806003",
        "text": "Minutes"
      },
      {
        "id": "2806005",
        "text": "Hours"
      },
      {
        "id": "2806007",
        "text": "Days"
      },
      {
        "id": "2806009",
        "text": "Weeks"
      },
      {
        "id": "2806011",
        "text": "Months"
      },
      {
        "id": "2806013",
        "text": "Years"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ChiefComplaintAnatomicLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.07",
    "NemsisName": "Chief Complaint Anatomic Location",
    "ElementTitle": "Chief Complaint Anatomic Location",
    "ngModel": "ChiefComplaintAnatomicLocation",
    "V2Number": "E09_11",
    "National": "National",
    "State": "State",
    "Definition": "The primary anatomic location of the chief complaint as identified by EMS personnel",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ComplaintAnatomicLocation",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2807001",
        "text": "Abdomen"
      },
      {
        "id": "2807003",
        "text": "Back"
      },
      {
        "id": "2807005",
        "text": "Chest"
      },
      {
        "id": "2807007",
        "text": "Extremity-Lower"
      },
      {
        "id": "2807009",
        "text": "Extremity-Upper"
      },
      {
        "id": "2807011",
        "text": "General/Global"
      },
      {
        "id": "2807013",
        "text": "Genitalia"
      },
      {
        "id": "2807015",
        "text": "Head"
      },
      {
        "id": "2807017",
        "text": "Neck"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ChiefComplaintOrganSystem": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.08",
    "NemsisName": "Chief Complaint Organ System",
    "ElementTitle": "Chief Complaint Organ System",
    "ngModel": "ChiefComplaintOrganSystem",
    "V2Number": "E09_12",
    "National": "National",
    "State": "State",
    "Definition": "The primary organ system of the patient injured or medically affected.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ComplaintOrganSystem",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2808001",
        "text": "Behavioral/Psychiatric"
      },
      {
        "id": "2808003",
        "text": "Cardiovascular"
      },
      {
        "id": "2808005",
        "text": "CNS/Neuro"
      },
      {
        "id": "2808007",
        "text": "Endocrine/Metabolic"
      },
      {
        "id": "2808009",
        "text": "GI"
      },
      {
        "id": "2808011",
        "text": "Global/General"
      },
      {
        "id": "2808013",
        "text": "Lymphatic/Immune"
      },
      {
        "id": "2808015",
        "text": "Musculoskeletal/Skin"
      },
      {
        "id": "2808017",
        "text": "Reproductive"
      },
      {
        "id": "2808019",
        "text": "Pulmonary"
      },
      {
        "id": "2808021",
        "text": "Renal"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "PrimarySymptom": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.09",
    "NemsisName": "Primary Symptom",
    "ElementTitle": "Primary Symptom",
    "ngModel": "PrimarySymptom",
    "V2Number": "E09_13",
    "National": "National",
    "State": "State",
    "Definition": "The primary sign and symptom present in the patient or observed by EMS personnel",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AssociatedSymptoms",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(R[0-6][0-9](\\.[0-9]{1,4})?|(R73\\.9)|(R99))|([A-QSTZ][0-9][0-9A-Z])((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "OtherAssociatedSymptoms": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.10",
    "NemsisName": "Other Associated Symptoms",
    "ElementTitle": "Other Associated Symptoms",
    "ngModel": "OtherAssociatedSymptoms",
    "V2Number": "E09_14",
    "National": "National",
    "State": "State",
    "Definition": "Other symptoms identified by the patient or observed by EMS personnel",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "AssociatedSymptoms",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(R[0-6][0-9](\\.[0-9]{1,4})?|(R73\\.9)|(R99))|([A-QSTZ][0-9][0-9A-Z])((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "Provider'sPrimaryImpression": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.11",
    "NemsisName": "Provider's Primary Impression",
    "ElementTitle": "Provider's Primary Impression",
    "ngModel": "Provider'sPrimaryImpression",
    "V2Number": "E09_15",
    "National": "National",
    "State": "State",
    "Definition": "The EMS personnel's impression of the patient's primary problem or most significant condition which led to the management given to the patient (treatments, medications, or procedures).",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ProvidersImpression",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(R[0-6][0-9](\\.[0-9]{1,4})?|(R73\\.9)|(R99))|([A-QSTZ][0-9][0-9A-Z])((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Provider'sSecondaryImpressions": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.12",
    "NemsisName": "Provider's Secondary Impressions",
    "ElementTitle": "Provider's Secondary Impressions",
    "ngModel": "Provider'sSecondaryImpressions",
    "V2Number": "E09_16",
    "National": "National",
    "State": "State",
    "Definition": "The EMS personnel's impression of the patient's secondary problem or most significant condition which led to the management given to the patient (treatments, medications, or procedures).",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ProvidersImpression",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(R[0-6][0-9](\\.[0-9]{1,4})?|(R73\\.9)|(R99))|([A-QSTZ][0-9][0-9A-Z])((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "InitialPatientAcuity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.13",
    "NemsisName": "Initial Patient Acuity",
    "ElementTitle": "Initial Patient Acuity",
    "ngModel": "InitialPatientAcuity",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The acuity of the patient's condition upon EMS arrival at the scene.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "InitialPatientAcuity",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2813001",
        "text": "Critical (Red)"
      },
      {
        "id": "2813003",
        "text": "Emergent (Yellow)"
      },
      {
        "id": "2813005",
        "text": "Lower Acuity (Green)"
      },
      {
        "id": "2813007",
        "text": "Dead without Resuscitation Efforts (Black)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Work-RelatedIllness/Injury": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.14",
    "NemsisName": "Work-Related Illness/Injury",
    "ElementTitle": "Work-Related Illness/Injury",
    "ngModel": "Work-RelatedIllness/Injury",
    "V2Number": "E07_15",
    "National": "",
    "State": "State",
    "Definition": "Indication of whether or not the illness or injury is work related.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoUnkValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9922001",
        "text": "No"
      },
      {
        "id": "9922003",
        "text": "Unknown"
      },
      {
        "id": "9922005",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Patient'sOccupationalIndustry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.15",
    "NemsisName": "Patient's Occupational Industry",
    "ElementTitle": "Patient's Occupational Industry",
    "ngModel": "Patient'sOccupationalIndustry",
    "V2Number": "E07_16",
    "National": "",
    "State": "",
    "Definition": "The occupational industry of the patient's work.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OccupationIndustry",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2815001",
        "text": "Accommodation and Food Services"
      },
      {
        "id": "2815003",
        "text": "Administrative and Support and Waste Management and Remediation Services"
      },
      {
        "id": "2815005",
        "text": "Agriculture, Forestry, Fishing and Hunting"
      },
      {
        "id": "2815007",
        "text": "Arts, Entertainment, and Recreation"
      },
      {
        "id": "2815009",
        "text": "Construction"
      },
      {
        "id": "2815011",
        "text": "Educational Services"
      },
      {
        "id": "2815013",
        "text": "Finance and Insurance"
      },
      {
        "id": "2815015",
        "text": "Health Care and Social Assistance"
      },
      {
        "id": "2815017",
        "text": "Information"
      },
      {
        "id": "2815019",
        "text": "Management of Companies and Enterprises"
      },
      {
        "id": "2815021",
        "text": "Manufacturing"
      },
      {
        "id": "2815023",
        "text": "Mining, Quarrying, and Oil and Gas Extraction"
      },
      {
        "id": "2815025",
        "text": "Other Services (except Public Administration)"
      },
      {
        "id": "2815027",
        "text": "Professional, Scientific, and Technical Services"
      },
      {
        "id": "2815029",
        "text": "Public Administration"
      },
      {
        "id": "2815031",
        "text": "Real Estate and Rental and Leasing"
      },
      {
        "id": "2815033",
        "text": "Retail Trade"
      },
      {
        "id": "2815035",
        "text": "Transportation and Warehousing"
      },
      {
        "id": "2815037",
        "text": "Utilities"
      },
      {
        "id": "2815039",
        "text": "Wholesale Trade"
      }
    ],
    "attributes": []
  },
  "Patient'sOccupation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.16",
    "NemsisName": "Patient's Occupation",
    "ElementTitle": "Patient's Occupation",
    "ngModel": "Patient'sOccupation",
    "V2Number": "E07_17",
    "National": "",
    "State": "",
    "Definition": "The occupation of the patient.",
    "Usage": "Optional",
    "V3Changes": "Added to better describe work related injury.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PatientsOccupation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2816001",
        "text": "Architecture and Engineering Occupations"
      },
      {
        "id": "2816003",
        "text": "Arts, Design, Entertainment, Sports, and Media Occupations"
      },
      {
        "id": "2816005",
        "text": "Building and Grounds Cleaning and Maintenance Occupations"
      },
      {
        "id": "2816007",
        "text": "Business and Financial Operations Occupations"
      },
      {
        "id": "2816009",
        "text": "Community and Social Services Occupations"
      },
      {
        "id": "2816011",
        "text": "Computer and Mathematical Occupations"
      },
      {
        "id": "2816013",
        "text": "Construction and Extraction Occupations"
      },
      {
        "id": "2816015",
        "text": "Education, Training, and Library Occupations"
      },
      {
        "id": "2816017",
        "text": "Farming, Fishing and Forestry Occupations"
      },
      {
        "id": "2816019",
        "text": "Food Preparation and Serving Related Occupations"
      },
      {
        "id": "2816021",
        "text": "Healthcare Practitioners and Technical Occupations"
      },
      {
        "id": "2816023",
        "text": "Healthcare Support Occupations"
      },
      {
        "id": "2816025",
        "text": "Installation, Maintenance, and Repair Occupations"
      },
      {
        "id": "2816027",
        "text": "Legal Occupations"
      },
      {
        "id": "2816029",
        "text": "Life, Physical, and Social Science Occupations"
      },
      {
        "id": "2816031",
        "text": "Management Occupations"
      },
      {
        "id": "2816033",
        "text": "Military Specific Occupations"
      },
      {
        "id": "2816035",
        "text": "Office and Administrative Support Occupations"
      },
      {
        "id": "2816037",
        "text": "Personal Care and Service Occupations"
      },
      {
        "id": "2816039",
        "text": "Production Occupations"
      },
      {
        "id": "2816041",
        "text": "Protective Service Occupations"
      },
      {
        "id": "2816043",
        "text": "Sales and Related Occupations"
      },
      {
        "id": "2816045",
        "text": "Transportation and Material Moving Occupations"
      }
    ],
    "attributes": []
  },
  "PatientActivity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.17",
    "NemsisName": "Patient Activity",
    "ElementTitle": "Patient Activity",
    "ngModel": "PatientActivity",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The activity the patient was involved in at the time the patient experienced the onset of symptoms or experienced an injury.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "icd10Activity",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "Y93\\.[A-Za-z0-9]{1,4}",
    "options": [],
    "attributes": [
      "CorrelationID",
      "NV"
    ]
  },
  "Date/TimeLastKnownWell": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eSituation.18",
    "NemsisName": "Date/Time Last Known Well",
    "ElementTitle": "Date/Time Last Known Well",
    "ngModel": "Date/TimeLastKnownWell",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The estimated date and time the patient was last known to be well or in their usual state of health. This is described or estimated by the patient, family, and/or bystanders.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "CauseofInjury": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.01",
    "NemsisName": "Cause of Injury",
    "ElementTitle": "Cause of Injury",
    "ngModel": "CauseofInjury",
    "V2Number": "E10_01",
    "National": "National",
    "State": "State",
    "Definition": "The category of the reported/suspected external cause of the injury.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "icd10CodeInjury",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "([TV-Y][0-9]{2})((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "MechanismofInjury": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.02",
    "NemsisName": "Mechanism of Injury",
    "ElementTitle": "Mechanism of Injury",
    "ngModel": "MechanismofInjury",
    "V2Number": "E10_03",
    "National": "",
    "State": "State",
    "Definition": "The mechanism of the event which caused the injury",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "MechanismOfInjury",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2902001",
        "text": "Blunt"
      },
      {
        "id": "2902003",
        "text": "Burn"
      },
      {
        "id": "2902005",
        "text": "Other"
      },
      {
        "id": "2902007",
        "text": "Penetrating"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TraumaCenterCriteria": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.03",
    "NemsisName": "Trauma Center Criteria",
    "ElementTitle": "Trauma Center Criteria",
    "ngModel": "TraumaCenterCriteria",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Field Triage Criteria for transport to a trauma center as defined by the Centers for Disease Control and Prevention and the American College of Surgeons-Committee on Trauma.",
    "Usage": "Required",
    "V3Changes": "Added to better evaluate the CDC-ACS 2011 Guidelines for the Field Triage of Injured Patients. <br/>Website: http://www.cdc.gov/FieldTriage/",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "TraumaCenterCriteria",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2903001",
        "text": "Amputation proximal to wrist or ankle"
      },
      {
        "id": "2903003",
        "text": "Crushed, degloved, mangled, or pulseless extremity"
      },
      {
        "id": "2903005",
        "text": "Chest wall instability or deformity (e.g., flail chest)"
      },
      {
        "id": "2903007",
        "text": "Glasgow Coma Score <= 13"
      },
      {
        "id": "2903009",
        "text": "Open or depressed skull fracture"
      },
      {
        "id": "2903011",
        "text": "Paralysis"
      },
      {
        "id": "2903013",
        "text": "Pelvic fractures"
      },
      {
        "id": "2903015",
        "text": "All penetrating injuries to  head, neck, torso, and extremities proximal to elbow or knee"
      },
      {
        "id": "2903017",
        "text": "Respiratory Rate  <10 or >29 breaths per minute (<20 in infants aged <1 year) or need for ventilatory support"
      },
      {
        "id": "2903019",
        "text": "Systolic Blood Pressure <90 mmHg"
      },
      {
        "id": "2903021",
        "text": "Two or more proximal long-bone fractures"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "Vehicular,Pedestrian,orOtherInjuryRiskFactor": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.04",
    "NemsisName": "Vehicular, Pedestrian, or Other Injury Risk Factor",
    "ElementTitle": "Vehicular, Pedestrian, or Other Injury Risk Factor",
    "ngModel": "Vehicular,Pedestrian,orOtherInjuryRiskFactor",
    "V2Number": "E10_04",
    "National": "National",
    "State": "State",
    "Definition": "Field Triage Criteria for transport to a trauma center as defined by the Centers for Disease Control and Prevention and the American College of Surgeons-Committee on Trauma.",
    "Usage": "Required",
    "V3Changes": "Added to better evaluate the CDC-ACS 2011 Guidelines for the Field Triage of Injured Patients.  \t\t\t\t\t\t\t<br/>Website: http://www.cdc.gov/FieldTriage/",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "VehicularInjuryIndicators",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2904001",
        "text": "Auto v. Pedestrian/Bicyclist Thrown, Run Over, or > 20 MPH Impact"
      },
      {
        "id": "2904003",
        "text": "Fall Adults: > 20 ft. (one story is equal to 10 ft.)"
      },
      {
        "id": "2904005",
        "text": "Fall Children: > 10 ft. or 2-3 times the height of the child"
      },
      {
        "id": "2904007",
        "text": "Crash Death in Same Passenger Compartment"
      },
      {
        "id": "2904009",
        "text": "Crash Ejection (partial or complete) from automobile"
      },
      {
        "id": "2904011",
        "text": "Crash Intrusion, including roof: > 12 in. occupant site; > 18 in. any site"
      },
      {
        "id": "2904013",
        "text": "Crash Vehicle Telemetry Data (AACN) Consistent with High Risk of Injury"
      },
      {
        "id": "2904015",
        "text": "Motorcycle Crash > 20 MPH"
      },
      {
        "id": "2904017",
        "text": "SBP < 110 for age > 65"
      },
      {
        "id": "2904019",
        "text": "Anticoagulants and Bleeding Disorders"
      },
      {
        "id": "2904021",
        "text": "Pregnancy > 20 weeks"
      },
      {
        "id": "2904023",
        "text": "EMS Provider Judgment"
      },
      {
        "id": "2904025",
        "text": "Burn, without other trauma"
      },
      {
        "id": "2904027",
        "text": "Burn, with trauma mechanism"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "MainAreaoftheVehicleImpactedbytheCollision": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.05",
    "NemsisName": "Main Area of the Vehicle Impacted by the Collision",
    "ElementTitle": "Main Area of the Vehicle Impacted by the Collision",
    "ngModel": "MainAreaoftheVehicleImpactedbytheCollision",
    "V2Number": "E10_05",
    "National": "",
    "State": "State",
    "Definition": "The area or location of initial impact on the vehicle based on 12-point clock diagram.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "AreaOfVehicleImpact",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "12",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "LocationofPatientinVehicle": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.06",
    "NemsisName": "Location of Patient in Vehicle",
    "ElementTitle": "Location of Patient in Vehicle",
    "ngModel": "LocationofPatientinVehicle",
    "V2Number": "E10_06",
    "National": "",
    "State": "State",
    "Definition": "The seat row location of the vehicle at the time of the crash with the front seat numbered as 1",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SeatRowLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2906001",
        "text": "Front Seat-Left Side (or motorcycle driver)"
      },
      {
        "id": "2906003",
        "text": "Front Seat-Middle"
      },
      {
        "id": "2906005",
        "text": "Front Seat-Right Side"
      },
      {
        "id": "2906007",
        "text": "Passenger in other enclosed passenger or cargo area (non-trailing unit such as a bus, etc.)"
      },
      {
        "id": "2906009",
        "text": "Passenger in unenclosed passenger or cargo area (non-trailing unit such as a pickup, etc.)"
      },
      {
        "id": "2906011",
        "text": "Riding on Vehicle Exterior (non-trailing unit)"
      },
      {
        "id": "2906013",
        "text": "Second Seat-Left Side (or motorcycle passenger)"
      },
      {
        "id": "2906015",
        "text": "Second Seat-Middle"
      },
      {
        "id": "2906017",
        "text": "Second Seat-Right Side"
      },
      {
        "id": "2906019",
        "text": "Sleeper Section of Cab (truck)"
      },
      {
        "id": "2906021",
        "text": "Third Row-Left Side (or motorcycle passenger)"
      },
      {
        "id": "2906023",
        "text": "Third Row-Middle"
      },
      {
        "id": "2906025",
        "text": "Third Row-Right Side"
      },
      {
        "id": "2906027",
        "text": "Trailing Unit"
      },
      {
        "id": "2906029",
        "text": "Unknown"
      }
    ],
    "attributes": []
  },
  "UseofOccupantSafetyEquipment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.07",
    "NemsisName": "Use of Occupant Safety Equipment",
    "ElementTitle": "Use of Occupant Safety Equipment",
    "ngModel": "UseofOccupantSafetyEquipment",
    "V2Number": "E10_08",
    "National": "",
    "State": "State",
    "Definition": "Safety equipment in use by the patient at the time of the injury",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "UseOfOccupantSafetyEquipment",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2907001",
        "text": "Child Booster Seat"
      },
      {
        "id": "2907003",
        "text": "Eye Protection"
      },
      {
        "id": "2907005",
        "text": "Helmet Worn"
      },
      {
        "id": "2907007",
        "text": "Infant Car Seat Forward Facing"
      },
      {
        "id": "2907009",
        "text": "Infant Car Seat Rear Facing"
      },
      {
        "id": "2907015",
        "text": "None"
      },
      {
        "id": "2907017",
        "text": "Other"
      },
      {
        "id": "2907019",
        "text": "Personal Floatation Device"
      },
      {
        "id": "2907021",
        "text": "Protective Clothing"
      },
      {
        "id": "2907023",
        "text": "Protective Non-Clothing Gear"
      },
      {
        "id": "2907027",
        "text": "Shoulder and Lap Belt Used"
      },
      {
        "id": "2907029",
        "text": "Lap Belt Only Used"
      },
      {
        "id": "2907031",
        "text": "Shoulder Belt Only Used"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "AirbagDeployment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.08",
    "NemsisName": "Airbag Deployment",
    "ElementTitle": "Airbag Deployment",
    "ngModel": "AirbagDeployment",
    "V2Number": "E10_09",
    "National": "",
    "State": "State",
    "Definition": "Indication of Airbag Deployment",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "AirbagDeployment",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2908001",
        "text": "Airbag Deployed Front"
      },
      {
        "id": "2908003",
        "text": "Airbag Deployed Side"
      },
      {
        "id": "2908005",
        "text": "Airbag Deployed Other (knee, air belt, etc.)"
      },
      {
        "id": "2908007",
        "text": "No Airbag Deployed"
      },
      {
        "id": "2908009",
        "text": "No Airbag Present"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "HeightofFall(feet)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.09",
    "NemsisName": "Height of Fall (feet)",
    "ElementTitle": "Height of Fall (feet)",
    "ngModel": "HeightofFall(feet)",
    "V2Number": "E10_10",
    "National": "",
    "State": "State",
    "Definition": "The distance in feet the patient fell, measured from the lowest point of the patient to the ground",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "HeightOfFall",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "10000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "OSHAPersonalProtectiveEquipmentUsed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.10",
    "NemsisName": "OSHA Personal Protective Equipment Used",
    "ElementTitle": "OSHA Personal Protective Equipment Used",
    "ngModel": "OSHAPersonalProtectiveEquipmentUsed",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Documentation of the use of OSHA required protective equipment used by the patient at the time of injury.",
    "Usage": "Optional",
    "V3Changes": "Added to better document personal protection equipment used by the patient associated with an injury.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "EquipmentUsed",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2910001",
        "text": "Eye and Face Protection"
      },
      {
        "id": "2910003",
        "text": "Foot Protection"
      },
      {
        "id": "2910005",
        "text": "Head Protection"
      },
      {
        "id": "2910007",
        "text": "Hearing Protection"
      },
      {
        "id": "2910009",
        "text": "Respiratory Protection"
      },
      {
        "id": "2910011",
        "text": "Safety Belts, lifelines, and lanyards"
      },
      {
        "id": "2910013",
        "text": "Safety Nets"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "ACNSystem/CompanyProvidingACNData": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.11",
    "NemsisName": "ACN System/Company Providing ACN Data",
    "ElementTitle": "ACN System/Company Providing ACN Data",
    "ngModel": "ACNSystem/CompanyProvidingACNData",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The agency providing the Automated Collision Notification (ACN) Data.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Company",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "30",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.12",
    "NemsisName": "ACN Incident ID",
    "ElementTitle": "ACN Incident ID",
    "ngModel": "ACNIncidentID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Incident ID.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "IncidentID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNCallBackPhoneNumber": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.13",
    "NemsisName": "ACN Call Back Phone Number",
    "ElementTitle": "ACN Call Back Phone Number",
    "ngModel": "ACNCallBackPhoneNumber",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Call Back Phone Number (US Only).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PhoneNumber",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[2-9][0-9][0-9]-[2-9][0-9][0-9]-[0-9][0-9][0-9][0-9]",
    "options": [],
    "attributes": [
      "PhoneNumberType",
      "CorrelationID"
    ]
  },
  "Date/TimeofACNIncident": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.14",
    "NemsisName": "Date/Time of ACN Incident",
    "ElementTitle": "Date/Time of ACN Incident",
    "ngModel": "Date/TimeofACNIncident",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Incident Date and Time.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "ACNIncidentLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.15",
    "NemsisName": "ACN Incident Location",
    "ElementTitle": "ACN Incident Location",
    "ngModel": "ACNIncidentLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification GPS Location.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GPSLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(\\+|-)?(90(\\.[0]{1,6})?|([1-8][0-9]|[0-9])(\\.[0-9]{1,6})?),(\\+|-)?(180(\\.[0]{1,6})?|(1[0-7][0-9]|[1-9][0-9]|[0-9])(\\.[0-9]{1,6})?)",
    "options": [],
    "attributes": []
  },
  "ACNIncidentVehicleBodyType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.16",
    "NemsisName": "ACN Incident Vehicle Body Type",
    "ElementTitle": "ACN Incident Vehicle Body Type",
    "ngModel": "ACNIncidentVehicleBodyType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Vehicle Body Type.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "BodyType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentVehicleManufacturer": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.17",
    "NemsisName": "ACN Incident Vehicle Manufacturer",
    "ElementTitle": "ACN Incident Vehicle Manufacturer",
    "ngModel": "ACNIncidentVehicleManufacturer",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Vehicle Manufacturer (e.g., General Motors, Ford, BMW, etc.).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Manufacturer",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentVehicleMake": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.18",
    "NemsisName": "ACN Incident Vehicle Make",
    "ElementTitle": "ACN Incident Vehicle Make",
    "ngModel": "ACNIncidentVehicleMake",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Vehicle Make (e.g., Cadillac, Ford, BMW, etc.).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Make",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentVehicleModel": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.19",
    "NemsisName": "ACN Incident Vehicle Model",
    "ElementTitle": "ACN Incident Vehicle Model",
    "ngModel": "ACNIncidentVehicleModel",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Vehicle Model (e.g., Escalade, Taurus, X6M, etc.).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Model",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentVehicleModelYear": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.20",
    "NemsisName": "ACN Incident Vehicle Model Year",
    "ElementTitle": "ACN Incident Vehicle Model Year",
    "ngModel": "ACNIncidentVehicleModelYear",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Vehicle Model Year (e.g., 2010).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Year",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900",
    "maxInclusive": "2050",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentMultipleImpacts": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.21",
    "NemsisName": "ACN Incident Multiple Impacts",
    "ElementTitle": "ACN Incident Multiple Impacts",
    "ngModel": "ACNIncidentMultipleImpacts",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Indication of Multiple Impacts associated with the collision.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "ACNIncidentDeltaVelocity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.22",
    "NemsisName": "ACN Incident Delta Velocity",
    "ElementTitle": "ACN Incident Delta Velocity",
    "ngModel": "ACNIncidentDeltaVelocity",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Delta Velocity (Delta V) force associated with the crash.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "DeltaVelocity",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "999",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "DeltaVelocityOrdinal",
      "VelocityUnit",
      "CorrelationID"
    ]
  },
  "ACNHighProbabilityofInjury": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.23",
    "NemsisName": "ACN High Probability of Injury",
    "ElementTitle": "ACN High Probability of Injury",
    "ngModel": "ACNHighProbabilityofInjury",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification of the High Probability of Injury.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "ACNIncidentPDOF": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.24",
    "NemsisName": "ACN Incident PDOF",
    "ElementTitle": "ACN Incident PDOF",
    "ngModel": "ACNIncidentPDOF",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Principal Direction of Force (PDOF).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PDOF",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "12",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ACNIncidentRollover": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.25",
    "NemsisName": "ACN Incident Rollover",
    "ElementTitle": "ACN Incident Rollover",
    "ngModel": "ACNIncidentRollover",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Indication that the Vehicle Rolled Over.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ACNYesNoType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "Y",
        "text": "Yes"
      },
      {
        "id": "N",
        "text": "No"
      }
    ],
    "attributes": []
  },
  "ACNVehicleSeatLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.26",
    "NemsisName": "ACN Vehicle Seat Location",
    "ElementTitle": "ACN Vehicle Seat Location",
    "ngModel": "ACNVehicleSeatLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Indication of the Occupant(s) Seat Location(s) within the vehicle.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SeatLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "2926001",
        "text": "Driver Front Seat"
      },
      {
        "id": "2926003",
        "text": "Front Row Middle Seat"
      },
      {
        "id": "2926005",
        "text": "Passenger Front Seat"
      },
      {
        "id": "2926007",
        "text": "Second Row Left Seat"
      },
      {
        "id": "2926009",
        "text": "Second Row Middle Seat"
      },
      {
        "id": "2926011",
        "text": "Second Row Right Seat"
      },
      {
        "id": "2926013",
        "text": "Third Row Left Seat"
      },
      {
        "id": "2926015",
        "text": "Third Row Middle Seat"
      },
      {
        "id": "2926017",
        "text": "Third Row Right Seat"
      }
    ],
    "attributes": []
  },
  "SeatOccupied": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.27",
    "NemsisName": "Seat Occupied",
    "ElementTitle": "Seat Occupied",
    "ngModel": "SeatOccupied",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indication if seat is occupied based on seat sensor data.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ACNYesNoType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "Y",
        "text": "Yes"
      },
      {
        "id": "N",
        "text": "No"
      }
    ],
    "attributes": []
  },
  "ACNIncidentSeatbeltUse": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.28",
    "NemsisName": "ACN Incident Seatbelt Use",
    "ElementTitle": "ACN Incident Seatbelt Use",
    "ngModel": "ACNIncidentSeatbeltUse",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Indication of Seatbelt use by the occupant(s).",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ACNYesNoType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "Y",
        "text": "Yes"
      },
      {
        "id": "N",
        "text": "No"
      }
    ],
    "attributes": []
  },
  "ACNIncidentAirbagDeployed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eInjury.29",
    "NemsisName": "ACN Incident Airbag Deployed",
    "ElementTitle": "ACN Incident Airbag Deployed",
    "ngModel": "ACNIncidentAirbagDeployed",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Automated Collision Notification Indication of Airbag Deployment.",
    "Usage": "Optional",
    "V3Changes": "Added to better incorporate advanced automated collision notification information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ACNYesNoType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "Y",
        "text": "Yes"
      },
      {
        "id": "N",
        "text": "No"
      }
    ],
    "attributes": []
  },
  "CardiacArrest": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.01",
    "NemsisName": "Cardiac Arrest",
    "ElementTitle": "Cardiac Arrest",
    "ngModel": "CardiacArrest",
    "V2Number": "E11_01",
    "National": "National",
    "State": "State",
    "Definition": "Indication of the presence of a cardiac arrest at any time during this EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CardiacArrest",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3001001",
        "text": "No"
      },
      {
        "id": "3001003",
        "text": "Yes, Prior to EMS Arrival"
      },
      {
        "id": "3001005",
        "text": "Yes, After EMS Arrival"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "CardiacArrestEtiology": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.02",
    "NemsisName": "Cardiac Arrest Etiology",
    "ElementTitle": "Cardiac Arrest Etiology",
    "ngModel": "CardiacArrestEtiology",
    "V2Number": "E11_02",
    "National": "National",
    "State": "State",
    "Definition": "Indication of the etiology or cause of the cardiac arrest (classified as cardiac, non-cardiac, etc.)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CardiacArrestEtiology",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3002001",
        "text": "Cardiac (Presumed)"
      },
      {
        "id": "3002003",
        "text": "Drowning/Submersion"
      },
      {
        "id": "3002005",
        "text": "Drug Overdose"
      },
      {
        "id": "3002007",
        "text": "Electrocution"
      },
      {
        "id": "3002009",
        "text": "Exsanguination"
      },
      {
        "id": "3002011",
        "text": "Other"
      },
      {
        "id": "3002013",
        "text": "Respiratory/Asphyxia"
      },
      {
        "id": "3002015",
        "text": "Trauma"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ResuscitationAttemptedByEMS": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.03",
    "NemsisName": "Resuscitation Attempted By EMS",
    "ElementTitle": "Resuscitation Attempted By EMS",
    "ngModel": "ResuscitationAttemptedByEMS",
    "V2Number": "E11_03",
    "National": "National",
    "State": "State",
    "Definition": "Indication of an attempt to resuscitate the patient who is in cardiac arrest (attempted, not attempted due to DNR, etc.)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ResuscitationAttempted",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3003001",
        "text": "Attempted Defibrillation"
      },
      {
        "id": "3003003",
        "text": "Attempted Ventilation"
      },
      {
        "id": "3003005",
        "text": "Initiated Chest Compressions"
      },
      {
        "id": "3003007",
        "text": "Not Attempted-Considered Futile"
      },
      {
        "id": "3003009",
        "text": "Not Attempted-DNR Orders"
      },
      {
        "id": "3003011",
        "text": "Not Attempted-Signs of Circulation"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "ArrestWitnessedBy": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.04",
    "NemsisName": "Arrest Witnessed By",
    "ElementTitle": "Arrest Witnessed By",
    "ngModel": "ArrestWitnessedBy",
    "V2Number": "E11_04",
    "National": "National",
    "State": "State",
    "Definition": "Indication of who the cardiac arrest was witnessed by",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ArrestWitnessedBy",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3004001",
        "text": "Not Witnessed"
      },
      {
        "id": "3004003",
        "text": "Witnessed by Family Member"
      },
      {
        "id": "3004005",
        "text": "Witnessed by Healthcare Provider"
      },
      {
        "id": "3004007",
        "text": "Witnessed by Lay Person"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "CPRCareProvidedPriortoEMSArrival": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.05",
    "NemsisName": "CPR Care Provided Prior to EMS Arrival",
    "ElementTitle": "CPR Care Provided Prior to EMS Arrival",
    "ngModel": "CPRCareProvidedPriortoEMSArrival",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Documentation of the CPR provided prior to EMS arrival",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "WhoProvidedCPRPriortoEMSArrival": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.06",
    "NemsisName": "Who Provided CPR Prior to EMS Arrival",
    "ElementTitle": "Who Provided CPR Prior to EMS Arrival",
    "ngModel": "WhoProvidedCPRPriortoEMSArrival",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "Documentation of who performed CPR prior to this EMS unit's arrival.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "WhoProvided",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3006001",
        "text": "Family Member"
      },
      {
        "id": "3006003",
        "text": "First Responder (Fire, Law, EMS)"
      },
      {
        "id": "3006005",
        "text": "Healthcare Professional (Non-EMS)"
      },
      {
        "id": "3006007",
        "text": "Lay Person (Non-Family)"
      },
      {
        "id": "3006009",
        "text": "Other EMS Professional (not part of dispatched response)"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "AEDUsePriortoEMSArrival": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.07",
    "NemsisName": "AED Use Prior to EMS Arrival",
    "ElementTitle": "AED Use Prior to EMS Arrival",
    "ngModel": "AEDUsePriortoEMSArrival",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Documentation of AED use Prior to EMS Arrival",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "AEDUse",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3007001",
        "text": "No"
      },
      {
        "id": "3007003",
        "text": "Yes, Applied without Defibrillation"
      },
      {
        "id": "3007005",
        "text": "Yes, With Defibrillation"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "WhoUsedAEDPriortoEMSArrival": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.08",
    "NemsisName": "Who Used AED Prior to EMS Arrival",
    "ElementTitle": "Who Used AED Prior to EMS Arrival",
    "ngModel": "WhoUsedAEDPriortoEMSArrival",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "Documentation of who used the AED prior to this EMS unit's arrival.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "WhoUsedAED",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3008001",
        "text": "Family Member"
      },
      {
        "id": "3008003",
        "text": "First Responder (Fire, Law, EMS)"
      },
      {
        "id": "3008005",
        "text": "Healthcare Professional (Non-EMS)"
      },
      {
        "id": "3008007",
        "text": "Lay Person (Non-Family)"
      },
      {
        "id": "3008009",
        "text": "Other EMS Professional (not part of dispatched response)"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "TypeofCPRProvided": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.09",
    "NemsisName": "Type of CPR Provided",
    "ElementTitle": "Type of CPR Provided",
    "ngModel": "TypeofCPRProvided",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Documentation of the type/technique of CPR used by EMS.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "CPRType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3009001",
        "text": "Compressions-Continuous"
      },
      {
        "id": "3009003",
        "text": "Compressions-External Band Type Device"
      },
      {
        "id": "3009005",
        "text": "Compressions-External Plunger Type Device"
      },
      {
        "id": "3009007",
        "text": "Compressions-External Thumper Type Device"
      },
      {
        "id": "3009009",
        "text": "Compressions-Intermittent with Ventilation"
      },
      {
        "id": "3009011",
        "text": "Compressions-Other Device"
      },
      {
        "id": "3009013",
        "text": "Ventilation-Bag Valve Mask"
      },
      {
        "id": "3009015",
        "text": "Ventilation-Impedance Threshold Device"
      },
      {
        "id": "3009017",
        "text": "Ventilation-Mouth to Mouth"
      },
      {
        "id": "3009019",
        "text": "Ventilation-Pocket Mask"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "FirstMonitoredArrestRhythmofthePatient": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.11",
    "NemsisName": "First Monitored Arrest Rhythm of the Patient",
    "ElementTitle": "First Monitored Arrest Rhythm of the Patient",
    "ngModel": "FirstMonitoredArrestRhythmofthePatient",
    "V2Number": "E11_05",
    "National": "National",
    "State": "State",
    "Definition": "Documentation of what the first monitored arrest rhythm which was noted",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "FirstMonitoredRhythm",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3011001",
        "text": "Asystole"
      },
      {
        "id": "3011005",
        "text": "PEA"
      },
      {
        "id": "3011007",
        "text": "Unknown AED Non-Shockable Rhythm"
      },
      {
        "id": "3011009",
        "text": "Unknown AED Shockable Rhythm"
      },
      {
        "id": "3011011",
        "text": "Ventricular Fibrillation"
      },
      {
        "id": "3011013",
        "text": "Ventricular Tachycardia-Pulseless"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "AnyReturnofSpontaneousCirculation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.12",
    "NemsisName": "Any Return of Spontaneous Circulation",
    "ElementTitle": "Any Return of Spontaneous Circulation",
    "ngModel": "AnyReturnofSpontaneousCirculation",
    "V2Number": "E11_06",
    "National": "National",
    "State": "State",
    "Definition": "Indication whether or not there was any return of spontaneous circulation.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ReturnOfSpontaneousCirculation",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3012001",
        "text": "No"
      },
      {
        "id": "3012003",
        "text": "Yes, At Arrival at the ED"
      },
      {
        "id": "3012005",
        "text": "Yes, Prior to Arrival at the ED"
      },
      {
        "id": "3012007",
        "text": "Yes, Sustained for 20 consecutive minutes"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "NeurologicalOutcomeatHospitalDischarge": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.13",
    "NemsisName": "Neurological Outcome at Hospital Discharge",
    "ElementTitle": "Neurological Outcome at Hospital Discharge",
    "ngModel": "NeurologicalOutcomeatHospitalDischarge",
    "V2Number": "E11_07",
    "National": "",
    "State": "",
    "Definition": "The level of cerebral performance of the patient at the time of discharge from the Hospital",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "NeurologicalOutcomeAtDischarge",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3013001",
        "text": "CPC 1 Good Cerebral Performance"
      },
      {
        "id": "3013003",
        "text": "CPC 2 Moderate Cerebral Disability"
      },
      {
        "id": "3013005",
        "text": "CPC 3 Severe Cerebral Disability"
      },
      {
        "id": "3013007",
        "text": "CPC 4 Coma or Vegetative State"
      }
    ],
    "attributes": []
  },
  "Date/TimeofCardiacArrest": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.14",
    "NemsisName": "Date/Time of Cardiac Arrest",
    "ElementTitle": "Date/Time of Cardiac Arrest",
    "ngModel": "Date/TimeofCardiacArrest",
    "V2Number": "E11_08",
    "National": "National",
    "State": "State",
    "Definition": "The date/time of the cardiac arrest (if not known, please estimate).",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Date/TimeResuscitationDiscontinued": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.15",
    "NemsisName": "Date/Time Resuscitation Discontinued",
    "ElementTitle": "Date/Time Resuscitation Discontinued",
    "ngModel": "Date/TimeResuscitationDiscontinued",
    "V2Number": "E11_09",
    "National": "",
    "State": "State",
    "Definition": "The date/time resuscitation was discontinued.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ReasonCPR/ResuscitationDiscontinued": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.16",
    "NemsisName": "Reason CPR/Resuscitation Discontinued",
    "ElementTitle": "Reason CPR/Resuscitation Discontinued",
    "ngModel": "ReasonCPR/ResuscitationDiscontinued",
    "V2Number": "E11_10",
    "National": "National",
    "State": "State",
    "Definition": "The reason that CPR or the resuscitation efforts were discontinued.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ReasonCPRDiscontinued",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3016001",
        "text": "DNR"
      },
      {
        "id": "3016003",
        "text": "Medical Control Order"
      },
      {
        "id": "3016005",
        "text": "Obvious Signs of Death"
      },
      {
        "id": "3016007",
        "text": "Physically Unable to Perform"
      },
      {
        "id": "3016009",
        "text": "Protocol/Policy Requirements Completed"
      },
      {
        "id": "3016011",
        "text": "Return of Spontaneous Circulation (pulse or BP noted)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "CardiacRhythmonArrivalatDestination": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.17",
    "NemsisName": "Cardiac Rhythm on Arrival at Destination",
    "ElementTitle": "Cardiac Rhythm on Arrival at Destination",
    "ngModel": "CardiacRhythmonArrivalatDestination",
    "V2Number": "E11_11",
    "National": "National",
    "State": "State",
    "Definition": "The patient's cardiac rhythm upon delivery or transfer to the destination",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "CardiacRhythm",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9901001",
        "text": "Agonal/Idioventricular"
      },
      {
        "id": "9901003",
        "text": "Asystole"
      },
      {
        "id": "9901005",
        "text": "Artifact"
      },
      {
        "id": "9901007",
        "text": "Atrial Fibrillation"
      },
      {
        "id": "9901009",
        "text": "Atrial Flutter"
      },
      {
        "id": "9901011",
        "text": "AV Block-1st Degree"
      },
      {
        "id": "9901013",
        "text": "AV Block-2nd Degree-Type 1"
      },
      {
        "id": "9901015",
        "text": "AV Block-2nd Degree-Type 2"
      },
      {
        "id": "9901017",
        "text": "AV Block-3rd Degree"
      },
      {
        "id": "9901019",
        "text": "Junctional"
      },
      {
        "id": "9901021",
        "text": "Left Bundle Branch Block"
      },
      {
        "id": "9901023",
        "text": "Non-STEMI Anterior Ischemia"
      },
      {
        "id": "9901025",
        "text": "Non-STEMI Inferior Ischemia"
      },
      {
        "id": "9901027",
        "text": "Non-STEMI Lateral Ischemia"
      },
      {
        "id": "9901029",
        "text": "Non-STEMI Posterior Ischemia"
      },
      {
        "id": "9901031",
        "text": "Other"
      },
      {
        "id": "9901033",
        "text": "Paced Rhythm"
      },
      {
        "id": "9901035",
        "text": "PEA"
      },
      {
        "id": "9901037",
        "text": "Premature Atrial Contractions"
      },
      {
        "id": "9901039",
        "text": "Premature Ventricular Contractions"
      },
      {
        "id": "9901041",
        "text": "Right Bundle Branch Block"
      },
      {
        "id": "9901043",
        "text": "Sinus Arrhythmia"
      },
      {
        "id": "9901045",
        "text": "Sinus Bradycardia"
      },
      {
        "id": "9901047",
        "text": "Sinus Rhythm"
      },
      {
        "id": "9901049",
        "text": "Sinus Tachycardia"
      },
      {
        "id": "9901051",
        "text": "STEMI Anterior Ischemia"
      },
      {
        "id": "9901053",
        "text": "STEMI Inferior Ischemia"
      },
      {
        "id": "9901055",
        "text": "STEMI Lateral Ischemia"
      },
      {
        "id": "9901057",
        "text": "STEMI Posterior Ischemia"
      },
      {
        "id": "9901059",
        "text": "Supraventricular Tachycardia"
      },
      {
        "id": "9901061",
        "text": "Torsades De Points"
      },
      {
        "id": "9901063",
        "text": "Unknown AED Non-Shockable Rhythm"
      },
      {
        "id": "9901065",
        "text": "Unknown AED Shockable Rhythm"
      },
      {
        "id": "9901067",
        "text": "Ventricular Fibrillation"
      },
      {
        "id": "9901069",
        "text": "Ventricular Tachycardia (With Pulse)"
      },
      {
        "id": "9901071",
        "text": "Ventricular Tachycardia (Pulseless)"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "EndofEMSCardiacArrestEvent": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.18",
    "NemsisName": "End of EMS Cardiac Arrest Event",
    "ElementTitle": "End of EMS Cardiac Arrest Event",
    "ngModel": "EndofEMSCardiacArrestEvent",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The patient's outcome at the end of the EMS event.",
    "Usage": "Required",
    "V3Changes": "Added to better identify the outcome of EMS cardiac arrest patients.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CardiacArrestOutcome",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3018001",
        "text": "Expired in ED"
      },
      {
        "id": "3018003",
        "text": "Expired in the Field"
      },
      {
        "id": "3018005",
        "text": "Ongoing Resuscitation in ED"
      },
      {
        "id": "3018007",
        "text": "ROSC in the Field"
      },
      {
        "id": "3018009",
        "text": "ROSC in the ED"
      },
      {
        "id": "3018011",
        "text": "Ongoing Resuscitation by Other EMS"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Date/TimeofInitialCPR": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eArrest.19",
    "NemsisName": "Date/Time of Initial CPR",
    "ElementTitle": "Date/Time of Initial CPR",
    "ngModel": "Date/TimeofInitialCPR",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The initial date and time that CPR was started by anyone.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "BarrierstoPatientCare": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.01",
    "NemsisName": "Barriers to Patient Care",
    "ElementTitle": "Barriers to Patient Care",
    "ngModel": "BarrierstoPatientCare",
    "V2Number": "E12_01",
    "National": "National",
    "State": "State",
    "Definition": "Indication of whether or not there were any patient specific barriers to serving the patient at the scene",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "BarriersToPatientCare",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3101001",
        "text": "Cultural, Custom, Religious"
      },
      {
        "id": "3101003",
        "text": "Developmentally Impaired"
      },
      {
        "id": "3101005",
        "text": "Hearing Impaired"
      },
      {
        "id": "3101007",
        "text": "Language"
      },
      {
        "id": "3101009",
        "text": "None Noted"
      },
      {
        "id": "3101011",
        "text": "Obesity"
      },
      {
        "id": "3101013",
        "text": "Physical Barrier (Unable to Access Patient)"
      },
      {
        "id": "3101015",
        "text": "Physically Impaired"
      },
      {
        "id": "3101017",
        "text": "Physically Restrained"
      },
      {
        "id": "3101019",
        "text": "Psychologically Impaired"
      },
      {
        "id": "3101021",
        "text": "Sight Impaired"
      },
      {
        "id": "3101023",
        "text": "Speech Impaired"
      },
      {
        "id": "3101025",
        "text": "Unattended or Unsupervised (including minors)"
      },
      {
        "id": "3101027",
        "text": "Unconscious"
      },
      {
        "id": "3101029",
        "text": "Uncooperative"
      },
      {
        "id": "3101031",
        "text": "State of Emotional Distress"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "LastNameofPatient'sPractitioner": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.02",
    "NemsisName": "Last Name of Patient's Practitioner",
    "ElementTitle": "Last Name of Patient's Practitioner",
    "ngModel": "LastNameofPatient'sPractitioner",
    "V2Number": "E12_06",
    "National": "",
    "State": "",
    "Definition": "The last name of the patient's practitioner",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonLastName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FirstNameofPatient'sPractitioner": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.03",
    "NemsisName": "First Name of Patient's Practitioner",
    "ElementTitle": "First Name of Patient's Practitioner",
    "ngModel": "FirstNameofPatient'sPractitioner",
    "V2Number": "E12_04",
    "National": "",
    "State": "",
    "Definition": "The first name of the patient's practitioner",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonFirstName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MiddleName/InitialofPatient'sPractitioner": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.04",
    "NemsisName": "Middle Name/Initial of Patient's Practitioner",
    "ElementTitle": "Middle Name/Initial of Patient's Practitioner",
    "ngModel": "MiddleName/InitialofPatient'sPractitioner",
    "V2Number": "E12_05",
    "National": "",
    "State": "",
    "Definition": "The middle name or initial of the patient's practitioner.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonMiddleName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "AdvanceDirectives": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.05",
    "NemsisName": "Advance Directives",
    "ElementTitle": "Advance Directives",
    "ngModel": "AdvanceDirectives",
    "V2Number": "E12_07",
    "National": "",
    "State": "State",
    "Definition": "The presence of a valid DNR form, living will, or document directing end of life or healthcare treatment decisions.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "AdvanceDirectives",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3105001",
        "text": "Family/Guardian request DNR (but no documentation)"
      },
      {
        "id": "3105003",
        "text": "Living Will"
      },
      {
        "id": "3105005",
        "text": "None"
      },
      {
        "id": "3105007",
        "text": "Other"
      },
      {
        "id": "3105009",
        "text": "Other Healthcare Advanced Directive Form"
      },
      {
        "id": "3105011",
        "text": "State EMS DNR or Medical Order Form"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "MedicationAllergies": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.06",
    "NemsisName": "Medication Allergies",
    "ElementTitle": "Medication Allergies",
    "ngModel": "MedicationAllergies",
    "V2Number": "E12_08",
    "National": "",
    "State": "State",
    "Definition": "The patient's medication allergies",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "MedicationAllergies",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.Unresponsive; PN.UnableToComplete; PN.Refused; PN.NoKnownDrugAllergy; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(Z88\\.[0-9])|([a-zA-Z0-9]{2,7})",
    "options": [],
    "attributes": [
      "NV",
      "PN",
      "CodeType",
      "CorrelationID"
    ]
  },
  "Environmental/FoodAllergies": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.07",
    "NemsisName": "Environmental/Food Allergies",
    "ElementTitle": "Environmental/Food Allergies",
    "ngModel": "Environmental/FoodAllergies",
    "V2Number": "E12_09",
    "National": "",
    "State": "",
    "Definition": "The patient's known allergies to food or environmental agents.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "snomed",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "100000",
    "maxInclusive": "1000000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "Medical/SurgicalHistory": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.08",
    "NemsisName": "Medical/Surgical History",
    "ElementTitle": "Medical/Surgical History",
    "ngModel": "Medical/SurgicalHistory",
    "V2Number": "E12_10",
    "National": "",
    "State": "State",
    "Definition": "The patient's pre-existing medical and surgery history of the patient",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "icd10MedSurge",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.Unresponsive; PN.UnableToComplete; PN.Refused; PN.NoneReported; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "([A-QRSTZ][0-9][0-9A-Z])((\\.[0-9A-Z]{1,3})?)|[0-9A-HJ-NP-Z]{3,7}",
    "options": [],
    "attributes": [
      "NV",
      "PN",
      "CorrelationID"
    ]
  },
  "MedicalHistoryObtainedFrom": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.09",
    "NemsisName": "Medical History Obtained From",
    "ElementTitle": "Medical History Obtained From",
    "ngModel": "MedicalHistoryObtainedFrom",
    "V2Number": "E12_11",
    "National": "",
    "State": "",
    "Definition": "Type of person medical history obtained from",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "MedicalHistoryObtainedFrom",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3109001",
        "text": "Bystander/Other"
      },
      {
        "id": "3109003",
        "text": "Family"
      },
      {
        "id": "3109005",
        "text": "Health Care Personnel"
      },
      {
        "id": "3109007",
        "text": "Patient"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "ThePatient'sTypeofImmunization": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.10",
    "NemsisName": "The Patient's Type of Immunization",
    "ElementTitle": "The Patient's Type of Immunization",
    "ngModel": "ThePatient'sTypeofImmunization",
    "V2Number": "E12_12",
    "National": "",
    "State": "",
    "Definition": "The immunization type of the patient.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ImmunizationType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9910001",
        "text": "Anthrax"
      },
      {
        "id": "9910003",
        "text": "Cholera"
      },
      {
        "id": "9910005",
        "text": "DPT / TDaP (Diphtheria, Pertussis, Tetanus)"
      },
      {
        "id": "9910007",
        "text": "Hemophilus Influenza B"
      },
      {
        "id": "9910009",
        "text": "Hepatitis A"
      },
      {
        "id": "9910011",
        "text": "Hepatitis B"
      },
      {
        "id": "9910013",
        "text": "Human Papilloma Virus (HPV)"
      },
      {
        "id": "9910015",
        "text": "Influenza-H1N1"
      },
      {
        "id": "9910017",
        "text": "Influenza-Other"
      },
      {
        "id": "9910019",
        "text": "Influenza-Seasonal (In past 12 months)"
      },
      {
        "id": "9910021",
        "text": "Lyme Disease"
      },
      {
        "id": "9910023",
        "text": "Meningococcus"
      },
      {
        "id": "9910025",
        "text": "MMR (Measles, Mumps, Rubella)"
      },
      {
        "id": "9910027",
        "text": "Other-Not Listed"
      },
      {
        "id": "9910029",
        "text": "Plague"
      },
      {
        "id": "9910031",
        "text": "Pneumococcal (Pneumonia)"
      },
      {
        "id": "9910033",
        "text": "Polio"
      },
      {
        "id": "9910035",
        "text": "Rabies"
      },
      {
        "id": "9910037",
        "text": "Rotavirus"
      },
      {
        "id": "9910039",
        "text": "Shingles"
      },
      {
        "id": "9910041",
        "text": "Small Pox"
      },
      {
        "id": "9910043",
        "text": "Tetanus"
      },
      {
        "id": "9910045",
        "text": "Tuberculosis"
      },
      {
        "id": "9910047",
        "text": "Typhoid"
      },
      {
        "id": "9910049",
        "text": "Varicella (Chickenpox)"
      },
      {
        "id": "9910051",
        "text": "Yellow Fever"
      }
    ],
    "attributes": []
  },
  "ImmunizationYear": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.11",
    "NemsisName": "Immunization Year",
    "ElementTitle": "Immunization Year",
    "ngModel": "ImmunizationYear",
    "V2Number": "E12_13",
    "National": "",
    "State": "",
    "Definition": "The year associated with each immunization type",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Year",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1900",
    "maxInclusive": "2050",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "CurrentMedications": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.12",
    "NemsisName": "Current Medications",
    "ElementTitle": "Current Medications",
    "ngModel": "CurrentMedications",
    "V2Number": "E12_14",
    "National": "",
    "State": "State",
    "Definition": "The medications the patient currently takes",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Medication",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Unresponsive; PN.Refused; PN.NoneReported; ",
    "minLength": "2",
    "maxLength": "7",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "CurrentMedicationDose": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.13",
    "NemsisName": "Current Medication Dose",
    "ElementTitle": "Current Medication Dose",
    "ngModel": "CurrentMedicationDose",
    "V2Number": "E12_15",
    "National": "",
    "State": "",
    "Definition": "The numeric dose or amount of the patient's current medication",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CurrentMedicationDose",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "8",
    "fractionDigits": "2",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "CurrentMedicationDosageUnit": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.14",
    "NemsisName": "Current Medication Dosage Unit",
    "ElementTitle": "Current Medication Dosage Unit",
    "ngModel": "CurrentMedicationDosageUnit",
    "V2Number": "E12_16",
    "National": "",
    "State": "",
    "Definition": "The dosage unit of the patient's current medication",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CurrentMedicationDosageUnit",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3114001",
        "text": "Centimeters (cm)"
      },
      {
        "id": "3114003",
        "text": "Grams (gms)"
      },
      {
        "id": "3114005",
        "text": "Drops (gtts)"
      },
      {
        "id": "3114007",
        "text": "Inches (in)"
      },
      {
        "id": "3114009",
        "text": "International Units (IU)"
      },
      {
        "id": "3114011",
        "text": "Keep Vein Open (kvo)"
      },
      {
        "id": "3114013",
        "text": "Liters Per Minute (l/min [fluid])"
      },
      {
        "id": "3114015",
        "text": "Liters (l)"
      },
      {
        "id": "3114017",
        "text": "Liters Per Minute (LPM [gas])"
      },
      {
        "id": "3114019",
        "text": "Micrograms (mcg)"
      },
      {
        "id": "3114021",
        "text": "Micrograms per Kilogram per Minute (mcg/kg/min)"
      },
      {
        "id": "3114023",
        "text": "Micrograms per Minute (mcg/min)"
      },
      {
        "id": "3114025",
        "text": "Milliequivalents (mEq)"
      },
      {
        "id": "3114027",
        "text": "Metered Dose (MDI)"
      },
      {
        "id": "3114029",
        "text": "Milligrams (mg)"
      },
      {
        "id": "3114031",
        "text": "Milligrams per Kilogram (mg/kg)"
      },
      {
        "id": "3114033",
        "text": "Milligrams per Kilogram Per Minute (mg/kg/min)"
      },
      {
        "id": "3114035",
        "text": "Milligrams per Minute (mg/min)"
      },
      {
        "id": "3114037",
        "text": "Milliliters (ml)"
      },
      {
        "id": "3114039",
        "text": "Milliliters per Hour (ml/hr)"
      },
      {
        "id": "3114041",
        "text": "Other"
      },
      {
        "id": "3114043",
        "text": "Puffs"
      },
      {
        "id": "3114045",
        "text": "Units per Hour (units/hr)"
      },
      {
        "id": "3114047",
        "text": "Micrograms per Kilogram (mcg/kg)"
      },
      {
        "id": "3114049",
        "text": "Units"
      },
      {
        "id": "3114051",
        "text": "Units per Kilogram per Hour (units/kg/hr)"
      },
      {
        "id": "3114053",
        "text": "Units per Kilogram (units/kg)"
      }
    ],
    "attributes": []
  },
  "CurrentMedicationAdministrationRoute": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.15",
    "NemsisName": "Current Medication Administration Route",
    "ElementTitle": "Current Medication Administration Route",
    "ngModel": "CurrentMedicationAdministrationRoute",
    "V2Number": "E12_17",
    "National": "",
    "State": "",
    "Definition": "The administration route (po, SQ, etc.) of the patient's current medication",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CurrentMedicationAdministrationRoute",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9927001",
        "text": "Blow-By"
      },
      {
        "id": "9927003",
        "text": "Buccal"
      },
      {
        "id": "9927005",
        "text": "Endotracheal Tube (ET)"
      },
      {
        "id": "9927007",
        "text": "Gastrostomy Tube"
      },
      {
        "id": "9927009",
        "text": "Inhalation"
      },
      {
        "id": "9927011",
        "text": "Intraarterial"
      },
      {
        "id": "9927013",
        "text": "Intradermal"
      },
      {
        "id": "9927015",
        "text": "Intramuscular (IM)"
      },
      {
        "id": "9927017",
        "text": "Intranasal"
      },
      {
        "id": "9927019",
        "text": "Intraocular"
      },
      {
        "id": "9927021",
        "text": "Intraosseous (IO)"
      },
      {
        "id": "9927023",
        "text": "Intravenous (IV)"
      },
      {
        "id": "9927025",
        "text": "Nasal Cannula"
      },
      {
        "id": "9927027",
        "text": "Nasogastric"
      },
      {
        "id": "9927029",
        "text": "Nasotracheal Tube"
      },
      {
        "id": "9927031",
        "text": "Non-Rebreather Mask"
      },
      {
        "id": "9927033",
        "text": "Ophthalmic"
      },
      {
        "id": "9927035",
        "text": "Oral"
      },
      {
        "id": "9927037",
        "text": "Other/miscellaneous"
      },
      {
        "id": "9927039",
        "text": "Otic"
      },
      {
        "id": "9927041",
        "text": "Re-breather mask"
      },
      {
        "id": "9927043",
        "text": "Rectal"
      },
      {
        "id": "9927045",
        "text": "Subcutaneous"
      },
      {
        "id": "9927047",
        "text": "Sublingual"
      },
      {
        "id": "9927049",
        "text": "Topical"
      },
      {
        "id": "9927051",
        "text": "Tracheostomy"
      },
      {
        "id": "9927053",
        "text": "Transdermal"
      },
      {
        "id": "9927055",
        "text": "Urethral"
      },
      {
        "id": "9927057",
        "text": "Ventimask"
      },
      {
        "id": "9927059",
        "text": "Wound"
      },
      {
        "id": "9927061",
        "text": "Portacath"
      }
    ],
    "attributes": []
  },
  "PresenceofEmergencyInformationForm": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.16",
    "NemsisName": "Presence of Emergency Information Form",
    "ElementTitle": "Presence of Emergency Information Form",
    "ngModel": "PresenceofEmergencyInformationForm",
    "V2Number": "E12_18",
    "National": "",
    "State": "",
    "Definition": "Indication of the presence of the Emergency Information Form associated with patient's with special healthcare needs.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "Alcohol/DrugUseIndicators": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.17",
    "NemsisName": "Alcohol/Drug Use Indicators",
    "ElementTitle": "Alcohol/Drug Use Indicators",
    "ngModel": "Alcohol/DrugUseIndicators",
    "V2Number": "E12_19",
    "National": "National",
    "State": "State",
    "Definition": "Indicators for the potential use of alcohol or drugs by the patient related to the patient's current illness or injury.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "AlcoholDrugUseIndicators",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.NoneReported; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3117001",
        "text": "Alcohol Containers/Paraphernalia at Scene"
      },
      {
        "id": "3117003",
        "text": "Drug Paraphernalia at Scene"
      },
      {
        "id": "3117005",
        "text": "Patient Admits to Alcohol Use"
      },
      {
        "id": "3117007",
        "text": "Patient Admits to Drug Use"
      },
      {
        "id": "3117009",
        "text": "Positive Level known from Law Enforcement or Hospital Record"
      },
      {
        "id": "3117011",
        "text": "Smell of Alcohol on Breath"
      }
    ],
    "attributes": [
      "PN",
      "NV",
      "CorrelationID"
    ]
  },
  "Pregnancy": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.18",
    "NemsisName": "Pregnancy",
    "ElementTitle": "Pregnancy",
    "ngModel": "Pregnancy",
    "V2Number": "E12_20",
    "National": "",
    "State": "",
    "Definition": "Indication of the possibility by the patient's history of current pregnancy.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Pregnancy",
    "NV": "",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3118001",
        "text": "No"
      },
      {
        "id": "3118003",
        "text": "Possible, Unconfirmed"
      },
      {
        "id": "3118005",
        "text": "Yes, Confirmed 12 to 20 Weeks"
      },
      {
        "id": "3118007",
        "text": "Yes, Confirmed Greater Than 20 Weeks"
      },
      {
        "id": "3118009",
        "text": "Yes, Confirmed Less Than 12 Weeks"
      },
      {
        "id": "3118011",
        "text": "Yes, Weeks Unknown"
      }
    ],
    "attributes": [
      "PN"
    ]
  },
  "LastOralIntake": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eHistory.19",
    "NemsisName": "Last Oral Intake",
    "ElementTitle": "Last Oral Intake",
    "ngModel": "LastOralIntake",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Date and Time of last oral intake.",
    "Usage": "Optional",
    "V3Changes": "Added to better document last oral intake.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "PatientCareReportNarrative": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eNarrative.01",
    "NemsisName": "Patient Care Report Narrative",
    "ElementTitle": "Patient Care Report Narrative",
    "ngModel": "PatientCareReportNarrative",
    "V2Number": "E13_01",
    "National": "",
    "State": "State",
    "Definition": "The narrative of the patient care report (PCR).",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PCRNarrative",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "1",
    "maxLength": "10000",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Date/TimeVitalSignsTaken": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.01",
    "NemsisName": "Date/Time Vital Signs Taken",
    "ElementTitle": "Date/Time Vital Signs Taken",
    "ngModel": "Date/TimeVitalSignsTaken",
    "V2Number": "E14_01",
    "National": "National",
    "State": "State",
    "Definition": "The date/time vital signs were taken on the patient.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ObtainedPriortothisUnit'sEMSCare": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.02",
    "NemsisName": "Obtained Prior to this Unit's EMS Care",
    "ElementTitle": "Obtained Prior to this Unit's EMS Care",
    "ngModel": "ObtainedPriortothisUnit'sEMSCare",
    "V2Number": "E14_02",
    "National": "National",
    "State": "State",
    "Definition": "Indicates that the information which is documented was obtained prior to the documenting EMS units care.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "CardiacRhythm/Electrocardiography(ECG)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.03",
    "NemsisName": "Cardiac Rhythm / Electrocardiography (ECG)",
    "ElementTitle": "Cardiac Rhythm / Electrocardiography (ECG)",
    "ngModel": "CardiacRhythm/Electrocardiography(ECG)",
    "V2Number": "E14_03",
    "National": "National",
    "State": "State",
    "Definition": "The cardiac rhythm / ECG and other electrocardiography findings of the patient as interpreted by EMS personnel.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "CardiacRhythm",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9901001",
        "text": "Agonal/Idioventricular"
      },
      {
        "id": "9901003",
        "text": "Asystole"
      },
      {
        "id": "9901005",
        "text": "Artifact"
      },
      {
        "id": "9901007",
        "text": "Atrial Fibrillation"
      },
      {
        "id": "9901009",
        "text": "Atrial Flutter"
      },
      {
        "id": "9901011",
        "text": "AV Block-1st Degree"
      },
      {
        "id": "9901013",
        "text": "AV Block-2nd Degree-Type 1"
      },
      {
        "id": "9901015",
        "text": "AV Block-2nd Degree-Type 2"
      },
      {
        "id": "9901017",
        "text": "AV Block-3rd Degree"
      },
      {
        "id": "9901019",
        "text": "Junctional"
      },
      {
        "id": "9901021",
        "text": "Left Bundle Branch Block"
      },
      {
        "id": "9901023",
        "text": "Non-STEMI Anterior Ischemia"
      },
      {
        "id": "9901025",
        "text": "Non-STEMI Inferior Ischemia"
      },
      {
        "id": "9901027",
        "text": "Non-STEMI Lateral Ischemia"
      },
      {
        "id": "9901029",
        "text": "Non-STEMI Posterior Ischemia"
      },
      {
        "id": "9901031",
        "text": "Other"
      },
      {
        "id": "9901033",
        "text": "Paced Rhythm"
      },
      {
        "id": "9901035",
        "text": "PEA"
      },
      {
        "id": "9901037",
        "text": "Premature Atrial Contractions"
      },
      {
        "id": "9901039",
        "text": "Premature Ventricular Contractions"
      },
      {
        "id": "9901041",
        "text": "Right Bundle Branch Block"
      },
      {
        "id": "9901043",
        "text": "Sinus Arrhythmia"
      },
      {
        "id": "9901045",
        "text": "Sinus Bradycardia"
      },
      {
        "id": "9901047",
        "text": "Sinus Rhythm"
      },
      {
        "id": "9901049",
        "text": "Sinus Tachycardia"
      },
      {
        "id": "9901051",
        "text": "STEMI Anterior Ischemia"
      },
      {
        "id": "9901053",
        "text": "STEMI Inferior Ischemia"
      },
      {
        "id": "9901055",
        "text": "STEMI Lateral Ischemia"
      },
      {
        "id": "9901057",
        "text": "STEMI Posterior Ischemia"
      },
      {
        "id": "9901059",
        "text": "Supraventricular Tachycardia"
      },
      {
        "id": "9901061",
        "text": "Torsades De Points"
      },
      {
        "id": "9901063",
        "text": "Unknown AED Non-Shockable Rhythm"
      },
      {
        "id": "9901065",
        "text": "Unknown AED Shockable Rhythm"
      },
      {
        "id": "9901067",
        "text": "Ventricular Fibrillation"
      },
      {
        "id": "9901069",
        "text": "Ventricular Tachycardia (With Pulse)"
      },
      {
        "id": "9901071",
        "text": "Ventricular Tachycardia (Pulseless)"
      }
    ],
    "attributes": [
      "PN",
      "NV",
      "CorrelationID"
    ]
  },
  "ECGType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.04",
    "NemsisName": "ECG Type",
    "ElementTitle": "ECG Type",
    "ngModel": "ECGType",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The type of ECG associated with the cardiac rhythm.",
    "Usage": "Required",
    "V3Changes": "Added to better document ECG results.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ECGType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3304001",
        "text": "3 Lead"
      },
      {
        "id": "3304003",
        "text": "4 Lead"
      },
      {
        "id": "3304005",
        "text": "5 Lead"
      },
      {
        "id": "3304007",
        "text": "12 Lead-Left Sided (Normal)"
      },
      {
        "id": "3304009",
        "text": "12 Lead-Right Sided"
      },
      {
        "id": "3304011",
        "text": "15 Lead"
      },
      {
        "id": "3304013",
        "text": "18 Lead"
      },
      {
        "id": "3304015",
        "text": "Other (AED, Not Listed)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "MethodofECGInterpretation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.05",
    "NemsisName": "Method of ECG Interpretation",
    "ElementTitle": "Method of ECG Interpretation",
    "ngModel": "MethodofECGInterpretation",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The method of ECG interpretation.",
    "Usage": "Required",
    "V3Changes": "Added to better document ECG results.",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ECGMethod",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3305001",
        "text": "Computer Interpretation"
      },
      {
        "id": "3305003",
        "text": "Manual Interpretation"
      },
      {
        "id": "3305005",
        "text": "Transmission with No Interpretation"
      },
      {
        "id": "3305007",
        "text": "Transmission with Remote Interpretation"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "SBP(SystolicBloodPressure)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.06",
    "NemsisName": "SBP (Systolic Blood Pressure)",
    "ElementTitle": "SBP (Systolic Blood Pressure)",
    "ngModel": "SBP(SystolicBloodPressure)",
    "V2Number": "E14_04",
    "National": "National",
    "State": "State",
    "Definition": "The patient's systolic blood pressure.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "SBP",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "500",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "DBP(DiastolicBloodPressure)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.07",
    "NemsisName": "DBP (Diastolic Blood Pressure)",
    "ElementTitle": "DBP (Diastolic Blood Pressure)",
    "ngModel": "DBP(DiastolicBloodPressure)",
    "V2Number": "E14_05",
    "National": "",
    "State": "State",
    "Definition": "The patient's diastolic blood pressure.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DBP",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[5][0][0]|[1-4][0-9][0-9]|[0]|[1-9][0-9]|P|p",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "MethodofBloodPressureMeasurement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.08",
    "NemsisName": "Method of Blood Pressure Measurement",
    "ElementTitle": "Method of Blood Pressure Measurement",
    "ngModel": "MethodofBloodPressureMeasurement",
    "V2Number": "E14_06",
    "National": "National",
    "State": "State",
    "Definition": "Indication of method of blood pressure measurement.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "BloodPressureMethod",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3308001",
        "text": "Arterial Line"
      },
      {
        "id": "3308003",
        "text": "Doppler"
      },
      {
        "id": "3308005",
        "text": "Cuff-Automated"
      },
      {
        "id": "3308007",
        "text": "Cuff-Manual Auscultated"
      },
      {
        "id": "3308009",
        "text": "Cuff-Manual Palpated Only"
      },
      {
        "id": "3308011",
        "text": "Venous Line"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "MeanArterialPressure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.09",
    "NemsisName": "Mean Arterial Pressure",
    "ElementTitle": "Mean Arterial Pressure",
    "ngModel": "MeanArterialPressure",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The patient's mean arterial pressure.",
    "Usage": "Optional",
    "V3Changes": "Added for additional patient monitoring capability.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "MAP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "500",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "HeartRate": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.10",
    "NemsisName": "Heart Rate",
    "ElementTitle": "Heart Rate",
    "ngModel": "HeartRate",
    "V2Number": "E14_07",
    "National": "National",
    "State": "State",
    "Definition": "The patient's heart rate expressed as a number per minute.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "HeartRate",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "500",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "MethodofHeartRateMeasurement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.11",
    "NemsisName": "Method of Heart Rate Measurement",
    "ElementTitle": "Method of Heart Rate Measurement",
    "ngModel": "MethodofHeartRateMeasurement",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The method in which the Heart Rate was measured. Values include auscultated, palpated, electronic monitor).",
    "Usage": "Optional",
    "V3Changes": "This data element was added when Pulse Rate and Electronic Monitor Rate were merged as EVitals.10.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "MethodMeasureHeartRate",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3311001",
        "text": "Auscultated"
      },
      {
        "id": "3311003",
        "text": "Doppler"
      },
      {
        "id": "3311005",
        "text": "Electronic Monitor - Cardiac"
      },
      {
        "id": "3311007",
        "text": "Electronic Monitor - Pulse Oximeter"
      },
      {
        "id": "3311009",
        "text": "Electronic Monitor (Other)"
      },
      {
        "id": "3311011",
        "text": "Palpated"
      }
    ],
    "attributes": []
  },
  "PulseOximetry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.12",
    "NemsisName": "Pulse Oximetry",
    "ElementTitle": "Pulse Oximetry",
    "ngModel": "PulseOximetry",
    "V2Number": "E14_09",
    "National": "National",
    "State": "State",
    "Definition": "The patient's oxygen saturation.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PulseOximetry",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "100",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "PulseRhythm": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.13",
    "NemsisName": "Pulse Rhythm",
    "ElementTitle": "Pulse Rhythm",
    "ngModel": "PulseRhythm",
    "V2Number": "E14_10",
    "National": "",
    "State": "",
    "Definition": "The clinical rhythm of the patient's pulse.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PulseRhythm",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3313001",
        "text": "Irregularly Irregular"
      },
      {
        "id": "3313003",
        "text": "Regular"
      },
      {
        "id": "3313005",
        "text": "Regularly Irregular"
      }
    ],
    "attributes": []
  },
  "RespiratoryRate": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.14",
    "NemsisName": "Respiratory Rate",
    "ElementTitle": "Respiratory Rate",
    "ngModel": "RespiratoryRate",
    "V2Number": "E14_11",
    "National": "National",
    "State": "State",
    "Definition": "The patient's respiratory rate expressed as a number per minute.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "RespiratoryRate",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "300",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "RespiratoryEffort": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.15",
    "NemsisName": "Respiratory Effort",
    "ElementTitle": "Respiratory Effort",
    "ngModel": "RespiratoryEffort",
    "V2Number": "E14_12",
    "National": "",
    "State": "",
    "Definition": "The patient's respiratory effort.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "RespiratoryEffort",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3315001",
        "text": "Apneic"
      },
      {
        "id": "3315003",
        "text": "Labored"
      },
      {
        "id": "3315005",
        "text": "Mechanically Assisted (BVM, CPAP, etc.)"
      },
      {
        "id": "3315007",
        "text": "Normal"
      },
      {
        "id": "3315009",
        "text": "Rapid"
      },
      {
        "id": "3315011",
        "text": "Shallow"
      },
      {
        "id": "3315013",
        "text": "Weak/Agonal"
      }
    ],
    "attributes": []
  },
  "EndTidalCarbonDioxide(ETCO2)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.16",
    "NemsisName": "End Tidal Carbon Dioxide (ETCO2)",
    "ElementTitle": "End Tidal Carbon Dioxide (ETCO2)",
    "ngModel": "EndTidalCarbonDioxide(ETCO2)",
    "V2Number": "E14_13",
    "National": "National",
    "State": "State",
    "Definition": "The numeric value of the patient's exhaled end tidal carbon dioxide (ETCO2) level measured as a unit of pressure in millimeters of mercury (mmHg).",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CO2",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "200",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "CarbonMonoxide(CO)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.17",
    "NemsisName": "Carbon Monoxide (CO)",
    "ElementTitle": "Carbon Monoxide (CO)",
    "ngModel": "CarbonMonoxide(CO)",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The numeric value of the patient's carbon monoxide level measured as a percentage (%) of carboxyhemoglobin (COHb).",
    "Usage": "Recommended",
    "V3Changes": "Added to allow use of new patient monitoring devices.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CarbonMonoxideLevel",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "100",
    "minExclusive": "",
    "totalDigits": "3",
    "fractionDigits": "1",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "BloodGlucoseLevel": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.18",
    "NemsisName": "Blood Glucose Level",
    "ElementTitle": "Blood Glucose Level",
    "ngModel": "BloodGlucoseLevel",
    "V2Number": "E14_14",
    "National": "National",
    "State": "State",
    "Definition": "The patient's blood glucose level.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "BloodGlucoseLevel",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "2000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "GlasgowComaScore-Eye": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.19",
    "NemsisName": "Glasgow Coma Score-Eye",
    "ElementTitle": "Glasgow Coma Score-Eye",
    "ngModel": "GlasgowComaScore-Eye",
    "V2Number": "E14_15",
    "National": "National",
    "State": "State",
    "Definition": "The patient's Glasgow Coma Score Eye opening.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "GlasgowComaScoreEyes",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1",
        "text": "No eye movement when assessed (All Age Groups)"
      },
      {
        "id": "2",
        "text": "Opens Eyes to painful stimulation (All Age Groups)"
      },
      {
        "id": "3",
        "text": "Opens Eyes to verbal stimulation (All Age Groups)"
      },
      {
        "id": "4",
        "text": "Opens Eyes spontaneously (All Age Groups)"
      }
    ],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "GlasgowComaScore-Verbal": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.20",
    "NemsisName": "Glasgow Coma Score-Verbal",
    "ElementTitle": "Glasgow Coma Score-Verbal",
    "ngModel": "GlasgowComaScore-Verbal",
    "V2Number": "E14_16",
    "National": "National",
    "State": "State",
    "Definition": "The patient's Glasgow Coma Score Verbal.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "GlasgowComaScoreVerbal",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1",
        "text": "No verbal/vocal response (All Age Groups)"
      },
      {
        "id": "2",
        "text": "Incomprehensible sounds (>2 Years); Inconsolable, agitated"
      },
      {
        "id": "3",
        "text": "Inappropriate words (>2 Years); Inconsistently consolable, moaning"
      },
      {
        "id": "4",
        "text": "Confused (>2 Years); Cries but is consolable, inappropriate interactions"
      },
      {
        "id": "5",
        "text": "Oriented (>2 Years); Smiles, oriented to sounds, follows objects, interacts"
      }
    ],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "GlasgowComaScore-Motor": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.21",
    "NemsisName": "Glasgow Coma Score-Motor",
    "ElementTitle": "Glasgow Coma Score-Motor",
    "ngModel": "GlasgowComaScore-Motor",
    "V2Number": "E14_17",
    "National": "National",
    "State": "State",
    "Definition": "The patient's Glasgow Coma Score Motor",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "GlasgowComaScoreMotor",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "1",
        "text": "No Motor Response (All Age Groups)"
      },
      {
        "id": "2",
        "text": "Extension to pain (All Age Groups)"
      },
      {
        "id": "3",
        "text": "Flexion to pain (All Age Groups)"
      },
      {
        "id": "4",
        "text": "Withdrawal from pain (All Age Groups)"
      },
      {
        "id": "5",
        "text": "Localizing pain (All Age Groups)"
      },
      {
        "id": "6",
        "text": "Obeys commands (>2Years); Appropriate response to stimulation"
      }
    ],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "GlasgowComaScore-Qualifier": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.22",
    "NemsisName": "Glasgow Coma Score-Qualifier",
    "ElementTitle": "Glasgow Coma Score-Qualifier",
    "ngModel": "GlasgowComaScore-Qualifier",
    "V2Number": "E14_18",
    "National": "National",
    "State": "State",
    "Definition": "Documentation of factors which make the GCS score more meaningful.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "GCSScoreQualifier",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3322001",
        "text": "Eye Obstruction Prevents Eye Assessment"
      },
      {
        "id": "3322003",
        "text": "Initial GCS has legitimate values without interventions such as intubation and sedation"
      },
      {
        "id": "3322005",
        "text": "Patient Chemically Paralyzed"
      },
      {
        "id": "3322007",
        "text": "Patient Chemically Sedated"
      },
      {
        "id": "3322009",
        "text": "Patient Intubated"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TotalGlasgowComaScore": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.23",
    "NemsisName": "Total Glasgow Coma Score",
    "ElementTitle": "Total Glasgow Coma Score",
    "ngModel": "TotalGlasgowComaScore",
    "V2Number": "E14_19",
    "National": "",
    "State": "State",
    "Definition": "The patient's total Glasgow Coma Score.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TotalGCS",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "3",
    "maxInclusive": "15",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "Temperature": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.24",
    "NemsisName": "Temperature",
    "ElementTitle": "Temperature",
    "ngModel": "Temperature",
    "V2Number": "E14_20",
    "National": "",
    "State": "State",
    "Definition": "The patient's body temperature in degrees Celsius/centigrade.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "BodyTemperature",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "50",
    "minExclusive": "",
    "totalDigits": "3",
    "fractionDigits": "1",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "TemperatureMethod": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.25",
    "NemsisName": "Temperature Method",
    "ElementTitle": "Temperature Method",
    "ngModel": "TemperatureMethod",
    "V2Number": "E14_21",
    "National": "",
    "State": "",
    "Definition": "The method used to obtain the patient's body temperature.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "MethodBodyTemp",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3325001",
        "text": "Axillary"
      },
      {
        "id": "3325003",
        "text": "Central (Venous or Arterial)"
      },
      {
        "id": "3325005",
        "text": "Esophageal"
      },
      {
        "id": "3325007",
        "text": "Oral"
      },
      {
        "id": "3325009",
        "text": "Rectal"
      },
      {
        "id": "3325011",
        "text": "Temporal Artery"
      },
      {
        "id": "3325013",
        "text": "Tympanic"
      },
      {
        "id": "3325015",
        "text": "Urinary Catheter"
      },
      {
        "id": "3325017",
        "text": "Skin Probe"
      }
    ],
    "attributes": []
  },
  "LevelofResponsiveness(AVPU)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.26",
    "NemsisName": "Level of Responsiveness (AVPU)",
    "ElementTitle": "Level of Responsiveness (AVPU)",
    "ngModel": "LevelofResponsiveness(AVPU)",
    "V2Number": "E14_22",
    "National": "National",
    "State": "State",
    "Definition": "The patient's highest level of responsiveness.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PatientsHighestLevelResponsiveness",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3326001",
        "text": "Alert"
      },
      {
        "id": "3326003",
        "text": "Verbal"
      },
      {
        "id": "3326005",
        "text": "Painful"
      },
      {
        "id": "3326007",
        "text": "Unresponsive"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "PainScaleScore": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.27",
    "NemsisName": "Pain Scale Score",
    "ElementTitle": "Pain Scale Score",
    "ngModel": "PainScaleScore",
    "V2Number": "E14_23",
    "National": "National",
    "State": "State",
    "Definition": "The patient's indication of pain from a scale of 0-10.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "PainScale",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "10",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "PainScaleType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.28",
    "NemsisName": "Pain Scale Type",
    "ElementTitle": "Pain Scale Type",
    "ngModel": "PainScaleType",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The type of pain scale used.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document the patient's pain level.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TypeOfPainScale",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3328001",
        "text": "FLACC (Face, Legs, Activity, Cry, Consolability)"
      },
      {
        "id": "3328003",
        "text": "Numeric (0-10)"
      },
      {
        "id": "3328005",
        "text": "Other"
      },
      {
        "id": "3328007",
        "text": "Wong-Baker (FACES)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "StrokeScaleScore": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.29",
    "NemsisName": "Stroke Scale Score",
    "ElementTitle": "Stroke Scale Score",
    "ngModel": "StrokeScaleScore",
    "V2Number": "E14_24",
    "National": "National",
    "State": "State",
    "Definition": "The findings or results of the Stroke Scale Type (eVitals.30) used to assess the patient exhibiting stroke-like symptoms.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "StrokeScale",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3329001",
        "text": "Negative"
      },
      {
        "id": "3329003",
        "text": "Non-Conclusive"
      },
      {
        "id": "3329005",
        "text": "Positive"
      }
    ],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "StrokeScaleType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.30",
    "NemsisName": "Stroke Scale Type",
    "ElementTitle": "Stroke Scale Type",
    "ngModel": "StrokeScaleType",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The type of stroke pain scale used.",
    "Usage": "Required",
    "V3Changes": "Added to include additional detail on the stroke scale used.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TypeOfStrokeScale",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3330001",
        "text": "Cincinnati"
      },
      {
        "id": "3330003",
        "text": "Los Angeles"
      },
      {
        "id": "3330005",
        "text": "Massachusetts"
      },
      {
        "id": "3330007",
        "text": "Miami Emergency Neurologic Deficit (MEND)"
      },
      {
        "id": "3330009",
        "text": "NIH"
      },
      {
        "id": "3330011",
        "text": "Other Stroke Scale Type"
      },
      {
        "id": "3330013",
        "text": "F.A.S.T. Exam"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ReperfusionChecklist": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.31",
    "NemsisName": "Reperfusion Checklist",
    "ElementTitle": "Reperfusion Checklist",
    "ngModel": "ReperfusionChecklist",
    "V2Number": "E14_25",
    "National": "National",
    "State": "State",
    "Definition": "The results of the patient's Reperfusion Checklist for potential Thrombolysis use.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ReperfusionChecklist",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3331001",
        "text": "Definite Contraindications to Thrombolytic Use"
      },
      {
        "id": "3331003",
        "text": "No Contraindications to Thrombolytic Use"
      },
      {
        "id": "3331005",
        "text": "Possible Contraindications to Thrombolytic Use"
      }
    ],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "APGAR": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.32",
    "NemsisName": "APGAR",
    "ElementTitle": "APGAR",
    "ngModel": "APGAR",
    "V2Number": "E14_26",
    "National": "",
    "State": "",
    "Definition": "The patient's total APGAR score (0-10).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "APGAR",
    "NV": "",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "",
    "PNList": "PN.UnableToComplete; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "10",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN"
    ]
  },
  "RevisedTraumaScore": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eVitals.33",
    "NemsisName": "Revised Trauma Score",
    "ElementTitle": "Revised Trauma Score",
    "ngModel": "RevisedTraumaScore",
    "V2Number": "E14_27",
    "National": "",
    "State": "",
    "Definition": "The patient's Revised Trauma Score.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "RTS",
    "NV": "",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "12",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN"
    ]
  },
  "Date/TimeofLaboratoryorImagingResult": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.01",
    "NemsisName": "Date/Time of Laboratory or Imaging Result",
    "ElementTitle": "Date/Time of Laboratory or Imaging Result",
    "ngModel": "Date/TimeofLaboratoryorImagingResult",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The data and time for the specific laboratory result",
    "Usage": "Optional",
    "V3Changes": "Added to better document patient care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "Study/ResultPriortothisUnit'sEMSCare": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.02",
    "NemsisName": "Study/Result Prior to this Unit's EMS Care",
    "ElementTitle": "Study/Result Prior to this Unit's EMS Care",
    "ngModel": "Study/ResultPriortothisUnit'sEMSCare",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indicates that the laboratory result occurred prior to this EMS units care.",
    "Usage": "Optional",
    "V3Changes": "Added to better document EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "LaboratoryResultType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.03",
    "NemsisName": "Laboratory Result Type",
    "ElementTitle": "Laboratory Result Type",
    "ngModel": "LaboratoryResultType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of the laboratory value.",
    "Usage": "Optional",
    "V3Changes": "Added to provide for the documentation of laboratory results obtained prior to or during and EMS patient encounter.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "LaboratoryResultType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3403001",
        "text": "Alanine Transaminase"
      },
      {
        "id": "3403003",
        "text": "Alcohol-Blood"
      },
      {
        "id": "3403005",
        "text": "Alcohol-Breath"
      },
      {
        "id": "3403007",
        "text": "Alkaline Phosphatase"
      },
      {
        "id": "3403009",
        "text": "Amylase"
      },
      {
        "id": "3403013",
        "text": "Aspartate Transaminase"
      },
      {
        "id": "3403015",
        "text": "B-Type Natriuretic Peptide (BNP)"
      },
      {
        "id": "3403017",
        "text": "Base Excess"
      },
      {
        "id": "3403019",
        "text": "Bilirubin-Direct"
      },
      {
        "id": "3403021",
        "text": "Bilirubin-Total"
      },
      {
        "id": "3403023",
        "text": "BUN"
      },
      {
        "id": "3403025",
        "text": "Calcium-Ionized"
      },
      {
        "id": "3403027",
        "text": "Calcium-Serum"
      },
      {
        "id": "3403029",
        "text": "Carbon Dioxide-Partial Pressure"
      },
      {
        "id": "3403033",
        "text": "Chloride"
      },
      {
        "id": "3403035",
        "text": "Creatine Kinase"
      },
      {
        "id": "3403037",
        "text": "Creatine Kinase-MB"
      },
      {
        "id": "3403039",
        "text": "Creatinine"
      },
      {
        "id": "3403041",
        "text": "Gamma Glutamyl Transpeptidase"
      },
      {
        "id": "3403043",
        "text": "Glucose"
      },
      {
        "id": "3403045",
        "text": "Hematocrit"
      },
      {
        "id": "3403047",
        "text": "Hemoglobin"
      },
      {
        "id": "3403049",
        "text": "Human Chorionic Gonadotropin-Serum"
      },
      {
        "id": "3403051",
        "text": "Human Chorionic Gonadotropin-Urine"
      },
      {
        "id": "3403053",
        "text": "International Normalized Ratio (INR)"
      },
      {
        "id": "3403055",
        "text": "Lactate Dehydrogenase"
      },
      {
        "id": "3403057",
        "text": "Lactate-Arterial"
      },
      {
        "id": "3403059",
        "text": "Lactate-Venous"
      },
      {
        "id": "3403061",
        "text": "Lipase"
      },
      {
        "id": "3403063",
        "text": "Magnesium"
      },
      {
        "id": "3403065",
        "text": "Oxygen-Partial Pressure"
      },
      {
        "id": "3403067",
        "text": "Partial Thromboplastin Time"
      },
      {
        "id": "3403071",
        "text": "pH-ABG"
      },
      {
        "id": "3403073",
        "text": "pH-Venous"
      },
      {
        "id": "3403075",
        "text": "Platelets"
      },
      {
        "id": "3403077",
        "text": "Potassium"
      },
      {
        "id": "3403079",
        "text": "Prothrombin Time"
      },
      {
        "id": "3403081",
        "text": "Red Blood Cells"
      },
      {
        "id": "3403083",
        "text": "Sodium"
      },
      {
        "id": "3403085",
        "text": "Troponin"
      },
      {
        "id": "3403087",
        "text": "White Blood Cells"
      },
      {
        "id": "3403089",
        "text": "Ammonia"
      },
      {
        "id": "3403091",
        "text": "Bicarbonate (HCO3)"
      },
      {
        "id": "3403093",
        "text": "Carboxyhemoglobin"
      },
      {
        "id": "3403095",
        "text": "CO2, Total (Bicarbonate)"
      },
      {
        "id": "3403097",
        "text": "CRP (C-Reactive Protein)"
      },
      {
        "id": "3403099",
        "text": "Dilantin"
      },
      {
        "id": "3403101",
        "text": "Leukocytes"
      },
      {
        "id": "3403103",
        "text": "Nitrates"
      },
      {
        "id": "3403105",
        "text": "Phenobarbital"
      },
      {
        "id": "3403107",
        "text": "Protein"
      },
      {
        "id": "3403109",
        "text": "Salicylate"
      },
      {
        "id": "3403111",
        "text": "Specific Gravity"
      },
      {
        "id": "3403113",
        "text": "Tylenol"
      }
    ],
    "attributes": []
  },
  "LaboratoryResult": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.04",
    "NemsisName": "Laboratory Result",
    "ElementTitle": "Laboratory Result",
    "ngModel": "LaboratoryResult",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The value or result of the laboratory test (Units may vary).",
    "Usage": "Optional",
    "V3Changes": "Added to better document EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "LaboratoryResult",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ImagingStudyType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.05",
    "NemsisName": "Imaging Study Type",
    "ElementTitle": "Imaging Study Type",
    "ngModel": "ImagingStudyType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of x-ray or imaging study.",
    "Usage": "Optional",
    "V3Changes": "Added to better describe the EMS patient care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ImagingStudyType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3405001",
        "text": "CAT Scan"
      },
      {
        "id": "3405003",
        "text": "Magnetic Resonance Imaging (MRI)"
      },
      {
        "id": "3405005",
        "text": "Other"
      },
      {
        "id": "3405007",
        "text": "PET Scan"
      },
      {
        "id": "3405009",
        "text": "Ultrasound"
      },
      {
        "id": "3405011",
        "text": "X-ray"
      },
      {
        "id": "3405013",
        "text": "Angiography"
      }
    ],
    "attributes": []
  },
  "ImagingStudyResults": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.06",
    "NemsisName": "Imaging Study Results",
    "ElementTitle": "Imaging Study Results",
    "ngModel": "ImagingStudyResults",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The description or interpretation of the results of the imaging study.",
    "Usage": "Optional",
    "V3Changes": "Added to better describe the EMS Patient Care",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ImagingStudyResults",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "3",
    "maxLength": "5000",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ImagingStudyFileorWaveformGraphicType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.07",
    "NemsisName": "Imaging Study File or Waveform Graphic Type",
    "ElementTitle": "Imaging Study File or Waveform Graphic Type",
    "ngModel": "ImagingStudyFileorWaveformGraphicType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The description of the image study file or waveform graphic stored in Imaging Study File or Waveform Graphic (eLabs.08).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GraphicType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ImagingStudyFileorWaveformGraphic": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eLabs.08",
    "NemsisName": "Imaging Study File or Waveform Graphic",
    "ElementTitle": "Imaging Study File or Waveform Graphic",
    "ngModel": "ImagingStudyFileorWaveformGraphic",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The imaging study file.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "WaveformGraphic",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EstimatedBodyWeightinKilograms": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.01",
    "NemsisName": "Estimated Body Weight in Kilograms",
    "ElementTitle": "Estimated Body Weight in Kilograms",
    "ngModel": "EstimatedBodyWeightinKilograms",
    "V2Number": "E16_01",
    "National": "",
    "State": "State",
    "Definition": "The patient's body weight in kilograms either measured or estimated",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EstimatedBodyWeight",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0.1",
    "maxInclusive": "999.9",
    "minExclusive": "",
    "totalDigits": "4",
    "fractionDigits": "1",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "LengthBasedTapeMeasure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.02",
    "NemsisName": "Length Based Tape Measure",
    "ElementTitle": "Length Based Tape Measure",
    "ngModel": "LengthBasedTapeMeasure",
    "V2Number": "E16_02",
    "National": "",
    "State": "State",
    "Definition": "The length-based color as taken from the tape.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "BroselowLutenColor",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3502001",
        "text": "Blue"
      },
      {
        "id": "3502003",
        "text": "Green"
      },
      {
        "id": "3502005",
        "text": "Grey"
      },
      {
        "id": "3502007",
        "text": "Orange"
      },
      {
        "id": "3502009",
        "text": "Pink"
      },
      {
        "id": "3502011",
        "text": "Purple"
      },
      {
        "id": "3502013",
        "text": "Red"
      },
      {
        "id": "3502015",
        "text": "White"
      },
      {
        "id": "3502017",
        "text": "Yellow"
      }
    ],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "Date/TimeofAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.03",
    "NemsisName": "Date/Time of Assessment",
    "ElementTitle": "Date/Time of Assessment",
    "ngModel": "Date/TimeofAssessment",
    "V2Number": "E16_03",
    "National": "",
    "State": "",
    "Definition": "The date/time of the assessment",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "SkinAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.04",
    "NemsisName": "Skin Assessment",
    "ElementTitle": "Skin Assessment",
    "ngModel": "SkinAssessment",
    "V2Number": "E16_04",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's skin.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "SkinAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3504001",
        "text": "Clammy"
      },
      {
        "id": "3504003",
        "text": "Cold"
      },
      {
        "id": "3504005",
        "text": "Cyanotic"
      },
      {
        "id": "3504007",
        "text": "Diaphoretic"
      },
      {
        "id": "3504009",
        "text": "Dry"
      },
      {
        "id": "3504011",
        "text": "Flushed"
      },
      {
        "id": "3504013",
        "text": "Hot"
      },
      {
        "id": "3504015",
        "text": "Jaundiced"
      },
      {
        "id": "3504017",
        "text": "Lividity"
      },
      {
        "id": "3504019",
        "text": "Mottled"
      },
      {
        "id": "3504021",
        "text": "Normal"
      },
      {
        "id": "3504023",
        "text": "Not Done"
      },
      {
        "id": "3504025",
        "text": "Pale"
      },
      {
        "id": "3504027",
        "text": "Poor Turgor"
      },
      {
        "id": "3504029",
        "text": "Red (Erythematous)"
      },
      {
        "id": "3504031",
        "text": "Tenting"
      },
      {
        "id": "3504033",
        "text": "Warm"
      },
      {
        "id": "3504035",
        "text": "Capillary Nail Bed Refill less than 2 seconds"
      },
      {
        "id": "3504037",
        "text": "Capillary Nail Bed Refill 2-4 seconds"
      },
      {
        "id": "3504039",
        "text": "Capillary Nail Bed Refill more than 4 seconds"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "HeadAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.05",
    "NemsisName": "Head Assessment",
    "ElementTitle": "Head Assessment",
    "ngModel": "HeadAssessment",
    "V2Number": "E16_05",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's head.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "HeadAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3505001",
        "text": "Abrasion"
      },
      {
        "id": "3505003",
        "text": "Avulsion"
      },
      {
        "id": "3505005",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3505007",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3505009",
        "text": "Burn-Blistering"
      },
      {
        "id": "3505011",
        "text": "Burn-Charring"
      },
      {
        "id": "3505013",
        "text": "Burn-Redness"
      },
      {
        "id": "3505015",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3505017",
        "text": "Decapitation"
      },
      {
        "id": "3505019",
        "text": "Deformity"
      },
      {
        "id": "3505021",
        "text": "Drainage"
      },
      {
        "id": "3505023",
        "text": "Foreign Body"
      },
      {
        "id": "3505029",
        "text": "Laceration"
      },
      {
        "id": "3505031",
        "text": "Mass/Lesion"
      },
      {
        "id": "3505033",
        "text": "Normal"
      },
      {
        "id": "3505035",
        "text": "Not Done"
      },
      {
        "id": "3505037",
        "text": "Pain"
      },
      {
        "id": "3505039",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3505045",
        "text": "Gunshot Wound"
      },
      {
        "id": "3505047",
        "text": "Crush Injury"
      },
      {
        "id": "3505049",
        "text": "Swelling"
      },
      {
        "id": "3505051",
        "text": "Contusion"
      },
      {
        "id": "3505053",
        "text": "Tenderness"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "FaceAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.06",
    "NemsisName": "Face Assessment",
    "ElementTitle": "Face Assessment",
    "ngModel": "FaceAssessment",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's face.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "FaceAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3506001",
        "text": "Abrasion"
      },
      {
        "id": "3506003",
        "text": "Asymmetric Smile or Droop"
      },
      {
        "id": "3506005",
        "text": "Avulsion"
      },
      {
        "id": "3506007",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3506009",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3506011",
        "text": "Burn-Blistering"
      },
      {
        "id": "3506013",
        "text": "Burn-Charring"
      },
      {
        "id": "3506015",
        "text": "Burn-Redness"
      },
      {
        "id": "3506017",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3506021",
        "text": "Deformity"
      },
      {
        "id": "3506023",
        "text": "Drainage"
      },
      {
        "id": "3506025",
        "text": "Foreign Body"
      },
      {
        "id": "3506031",
        "text": "Laceration"
      },
      {
        "id": "3506033",
        "text": "Mass/Lesion"
      },
      {
        "id": "3506035",
        "text": "Normal"
      },
      {
        "id": "3506037",
        "text": "Not Done"
      },
      {
        "id": "3506039",
        "text": "Pain"
      },
      {
        "id": "3506041",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3506047",
        "text": "Gunshot Wound"
      },
      {
        "id": "3506049",
        "text": "Crush Injury"
      },
      {
        "id": "3506051",
        "text": "Tenderness"
      },
      {
        "id": "3506053",
        "text": "Swelling"
      },
      {
        "id": "3506055",
        "text": "Contusion"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "NeckAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.07",
    "NemsisName": "Neck Assessment",
    "ElementTitle": "Neck Assessment",
    "ngModel": "NeckAssessment",
    "V2Number": "E16_06",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's neck.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "NeckAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3507001",
        "text": "Abrasion"
      },
      {
        "id": "3507003",
        "text": "Avulsion"
      },
      {
        "id": "3507005",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3507007",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3507009",
        "text": "Burn-Blistering"
      },
      {
        "id": "3507011",
        "text": "Burn-Charring"
      },
      {
        "id": "3507013",
        "text": "Burn-Redness"
      },
      {
        "id": "3507015",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3507017",
        "text": "Decapitation"
      },
      {
        "id": "3507019",
        "text": "Foreign Body"
      },
      {
        "id": "3507025",
        "text": "JVD"
      },
      {
        "id": "3507027",
        "text": "Laceration"
      },
      {
        "id": "3507029",
        "text": "Normal"
      },
      {
        "id": "3507031",
        "text": "Not Done"
      },
      {
        "id": "3507033",
        "text": "Pain"
      },
      {
        "id": "3507035",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3507037",
        "text": "Stridor"
      },
      {
        "id": "3507039",
        "text": "Subcutaneous Air"
      },
      {
        "id": "3507045",
        "text": "Tracheal Deviation-Left"
      },
      {
        "id": "3507047",
        "text": "Tracheal Deviation-Right"
      },
      {
        "id": "3507049",
        "text": "Gunshot Wound"
      },
      {
        "id": "3507051",
        "text": "Crush Injury"
      },
      {
        "id": "3507053",
        "text": "Swelling"
      },
      {
        "id": "3507055",
        "text": "Contusion"
      },
      {
        "id": "3507057",
        "text": "Deformity"
      },
      {
        "id": "3507059",
        "text": "Tenderness"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "Chest/LungsAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.08",
    "NemsisName": "Chest/Lungs Assessment",
    "ElementTitle": "Chest/Lungs Assessment",
    "ngModel": "Chest/LungsAssessment",
    "V2Number": "E16_07",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's chest/lungs.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "ChestLungsAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3508001",
        "text": "Abrasion"
      },
      {
        "id": "3508003",
        "text": "Avulsion"
      },
      {
        "id": "3508005",
        "text": "Accessory Muscles Used with Breathing"
      },
      {
        "id": "3508007",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3508009",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3508011",
        "text": "Breath Sounds-Absent-Left"
      },
      {
        "id": "3508013",
        "text": "Breath Sounds-Absent-Right"
      },
      {
        "id": "3508015",
        "text": "Breath Sounds-Decreased Left"
      },
      {
        "id": "3508017",
        "text": "Breath Sounds-Decreased Right"
      },
      {
        "id": "3508019",
        "text": "Breath Sounds-Equal"
      },
      {
        "id": "3508021",
        "text": "Breath Sounds-Normal-Left"
      },
      {
        "id": "3508023",
        "text": "Breath Sounds-Normal-Right"
      },
      {
        "id": "3508025",
        "text": "Burn-Blistering"
      },
      {
        "id": "3508027",
        "text": "Burn-Charring"
      },
      {
        "id": "3508029",
        "text": "Burn-Redness"
      },
      {
        "id": "3508031",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3508033",
        "text": "Crush Injury"
      },
      {
        "id": "3508035",
        "text": "Deformity"
      },
      {
        "id": "3508037",
        "text": "Flail Segment-Left"
      },
      {
        "id": "3508039",
        "text": "Flail Segment-Right"
      },
      {
        "id": "3508041",
        "text": "Foreign Body"
      },
      {
        "id": "3508047",
        "text": "Increased Respiratory Effort"
      },
      {
        "id": "3508049",
        "text": "Implanted Device"
      },
      {
        "id": "3508051",
        "text": "Laceration"
      },
      {
        "id": "3508053",
        "text": "Normal"
      },
      {
        "id": "3508055",
        "text": "Not Done"
      },
      {
        "id": "3508057",
        "text": "Pain"
      },
      {
        "id": "3508059",
        "text": "Pain with Inspiration/expiration-Left"
      },
      {
        "id": "3508061",
        "text": "Pain with Inspiration/expiration-Right"
      },
      {
        "id": "3508063",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3508065",
        "text": "Rales-Left"
      },
      {
        "id": "3508067",
        "text": "Rales-Right"
      },
      {
        "id": "3508069",
        "text": "Retraction"
      },
      {
        "id": "3508071",
        "text": "Rhonchi-Left"
      },
      {
        "id": "3508073",
        "text": "Rhonchi-Right"
      },
      {
        "id": "3508075",
        "text": "Rhonchi/Wheezing"
      },
      {
        "id": "3508077",
        "text": "Stridor-Left"
      },
      {
        "id": "3508079",
        "text": "Stridor-Right"
      },
      {
        "id": "3508085",
        "text": "Tenderness-Left"
      },
      {
        "id": "3508087",
        "text": "Tenderness-Right"
      },
      {
        "id": "3508089",
        "text": "Wheezing-Expiratory - Left"
      },
      {
        "id": "3508091",
        "text": "Wheezing-Expiratory - Right"
      },
      {
        "id": "3508093",
        "text": "Wheezing-Inspiratory - Left"
      },
      {
        "id": "3508095",
        "text": "Wheezing-Inspiratory - Right"
      },
      {
        "id": "3508097",
        "text": "Gunshot Wound"
      },
      {
        "id": "3508099",
        "text": "Swelling"
      },
      {
        "id": "3508101",
        "text": "Contusion"
      },
      {
        "id": "3508103",
        "text": "Tenderness-General"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "HeartAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.09",
    "NemsisName": "Heart Assessment",
    "ElementTitle": "Heart Assessment",
    "ngModel": "HeartAssessment",
    "V2Number": "E16_08",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's heart.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "HeartAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3509001",
        "text": "Clicks"
      },
      {
        "id": "3509003",
        "text": "Heart Sounds Decreased"
      },
      {
        "id": "3509005",
        "text": "Murmur-Diastolic"
      },
      {
        "id": "3509007",
        "text": "Murmur-Systolic"
      },
      {
        "id": "3509009",
        "text": "Normal"
      },
      {
        "id": "3509011",
        "text": "Not Done"
      },
      {
        "id": "3509013",
        "text": "Rubs"
      },
      {
        "id": "3509015",
        "text": "S1"
      },
      {
        "id": "3509017",
        "text": "S2"
      },
      {
        "id": "3509019",
        "text": "S3"
      },
      {
        "id": "3509021",
        "text": "S4"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "AbdominalAssessmentFindingLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.10",
    "NemsisName": "Abdominal Assessment Finding Location",
    "ElementTitle": "Abdominal Assessment Finding Location",
    "ngModel": "AbdominalAssessmentFindingLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The location of the patient's abdomen assessment findings.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "AbdominalExamFindingLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3510001",
        "text": "Generalized"
      },
      {
        "id": "3510003",
        "text": "Left Lower Quadrant"
      },
      {
        "id": "3510005",
        "text": "Left Upper Quadrant"
      },
      {
        "id": "3510007",
        "text": "Periumbilical"
      },
      {
        "id": "3510009",
        "text": "Right Lower Quadrant"
      },
      {
        "id": "3510011",
        "text": "Right Upper Quadrant"
      },
      {
        "id": "3510013",
        "text": "Epigastric"
      }
    ],
    "attributes": []
  },
  "AbdomenAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.11",
    "NemsisName": "Abdomen Assessment",
    "ElementTitle": "Abdomen Assessment",
    "ngModel": "AbdomenAssessment",
    "V2Number": "E16_09",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's abdomen.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "AbdomenAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3511001",
        "text": "Abrasion"
      },
      {
        "id": "3511003",
        "text": "Avulsion"
      },
      {
        "id": "3511005",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3511007",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3511009",
        "text": "Bowel Sounds-Absent"
      },
      {
        "id": "3511011",
        "text": "Bowel Sounds-Present"
      },
      {
        "id": "3511013",
        "text": "Burn-Blistering"
      },
      {
        "id": "3511015",
        "text": "Burn-Charring"
      },
      {
        "id": "3511017",
        "text": "Burn-Redness"
      },
      {
        "id": "3511019",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3511021",
        "text": "Distention"
      },
      {
        "id": "3511023",
        "text": "Foreign Body"
      },
      {
        "id": "3511025",
        "text": "Guarding"
      },
      {
        "id": "3511031",
        "text": "Laceration"
      },
      {
        "id": "3511033",
        "text": "Mass/Lesion"
      },
      {
        "id": "3511035",
        "text": "Mass-Pulsating"
      },
      {
        "id": "3511037",
        "text": "Normal"
      },
      {
        "id": "3511039",
        "text": "Not Done"
      },
      {
        "id": "3511041",
        "text": "Pain"
      },
      {
        "id": "3511043",
        "text": "Pregnant-Palpable Uterus"
      },
      {
        "id": "3511045",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3511051",
        "text": "Tenderness"
      },
      {
        "id": "3511053",
        "text": "Gunshot Wound"
      },
      {
        "id": "3511055",
        "text": "Crush Injury"
      },
      {
        "id": "3511057",
        "text": "Swelling"
      },
      {
        "id": "3511059",
        "text": "Contusion"
      },
      {
        "id": "3511061",
        "text": "Deformity"
      },
      {
        "id": "3511063",
        "text": "Rebound Tenderness"
      },
      {
        "id": "3511065",
        "text": "Rigidity"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "Pelvis/GenitourinaryAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.12",
    "NemsisName": "Pelvis/Genitourinary Assessment",
    "ElementTitle": "Pelvis/Genitourinary Assessment",
    "ngModel": "Pelvis/GenitourinaryAssessment",
    "V2Number": "E16_13",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's pelvis/genitourinary.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "GUAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3512001",
        "text": "Abrasion"
      },
      {
        "id": "3512003",
        "text": "Avulsion"
      },
      {
        "id": "3512005",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3512007",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3512009",
        "text": "Bleeding-Rectal"
      },
      {
        "id": "3512011",
        "text": "Bleeding-Urethral"
      },
      {
        "id": "3512013",
        "text": "Bleeding-Vaginal"
      },
      {
        "id": "3512015",
        "text": "Burn-Blistering"
      },
      {
        "id": "3512017",
        "text": "Burn-Charring"
      },
      {
        "id": "3512019",
        "text": "Burn-Redness"
      },
      {
        "id": "3512021",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3512023",
        "text": "Deformity"
      },
      {
        "id": "3512025",
        "text": "Foreign Body"
      },
      {
        "id": "3512027",
        "text": "Genital Injury"
      },
      {
        "id": "3512033",
        "text": "Laceration"
      },
      {
        "id": "3512035",
        "text": "Mass/Lesion"
      },
      {
        "id": "3512037",
        "text": "Normal"
      },
      {
        "id": "3512039",
        "text": "Not Done"
      },
      {
        "id": "3512041",
        "text": "Pain"
      },
      {
        "id": "3512043",
        "text": "Pelvic Fracture"
      },
      {
        "id": "3512045",
        "text": "Pelvic Instability"
      },
      {
        "id": "3512047",
        "text": "Penile Priapism/Erection"
      },
      {
        "id": "3512049",
        "text": "Pregnant-Crowning"
      },
      {
        "id": "3512051",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3512057",
        "text": "Tenderness"
      },
      {
        "id": "3512059",
        "text": "Gunshot Wound"
      },
      {
        "id": "3512061",
        "text": "Crush Injury"
      },
      {
        "id": "3512063",
        "text": "Swelling"
      },
      {
        "id": "3512065",
        "text": "Contusion"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "BackandSpineAssessmentFindingLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.13",
    "NemsisName": "Back and Spine Assessment Finding Location",
    "ElementTitle": "Back and Spine Assessment Finding Location",
    "ngModel": "BackandSpineAssessmentFindingLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The location of the patient's back and spine assessment findings.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "BackAndSpineAssessmentLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3513001",
        "text": "Back-General"
      },
      {
        "id": "3513003",
        "text": "Cervical-Left"
      },
      {
        "id": "3513005",
        "text": "Cervical-Midline"
      },
      {
        "id": "3513007",
        "text": "Cervical-Right"
      },
      {
        "id": "3513009",
        "text": "Lumbar-Left"
      },
      {
        "id": "3513011",
        "text": "Lumbar-Midline"
      },
      {
        "id": "3513013",
        "text": "Lumbar-Right"
      },
      {
        "id": "3513015",
        "text": "Thoracic-Left"
      },
      {
        "id": "3513017",
        "text": "Thoracic-Midline"
      },
      {
        "id": "3513019",
        "text": "Thoracic-Right"
      },
      {
        "id": "3513021",
        "text": "Sacral-Left"
      },
      {
        "id": "3513023",
        "text": "Sacral-Midline"
      },
      {
        "id": "3513025",
        "text": "Sacral-Right"
      }
    ],
    "attributes": []
  },
  "BackandSpineAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.14",
    "NemsisName": "Back and Spine Assessment",
    "ElementTitle": "Back and Spine Assessment",
    "ngModel": "BackandSpineAssessment",
    "V2Number": "E16_14",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's spine (Cervical, Thoracic, Lumbar, and Sacral) and back exam.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "BackAndSpineAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3514001",
        "text": "Abrasion"
      },
      {
        "id": "3514003",
        "text": "Avulsion"
      },
      {
        "id": "3514005",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3514007",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3514009",
        "text": "Burn-Blistering"
      },
      {
        "id": "3514011",
        "text": "Burn-Charring"
      },
      {
        "id": "3514013",
        "text": "Burn-Redness"
      },
      {
        "id": "3514015",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3514017",
        "text": "Deformity"
      },
      {
        "id": "3514019",
        "text": "Foreign Body"
      },
      {
        "id": "3514025",
        "text": "Laceration"
      },
      {
        "id": "3514027",
        "text": "Normal"
      },
      {
        "id": "3514029",
        "text": "Not Done"
      },
      {
        "id": "3514031",
        "text": "Pain"
      },
      {
        "id": "3514033",
        "text": "Pain with Range of Motion"
      },
      {
        "id": "3514035",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3514041",
        "text": "Tenderness Costovertebral Angle"
      },
      {
        "id": "3514043",
        "text": "Tenderness Midline Spinous Process"
      },
      {
        "id": "3514045",
        "text": "Tenderness Paraspinous"
      },
      {
        "id": "3514047",
        "text": "Gunshot Wound"
      },
      {
        "id": "3514049",
        "text": "Crush Injury"
      },
      {
        "id": "3514051",
        "text": "Swelling"
      },
      {
        "id": "3514053",
        "text": "Contusion"
      },
      {
        "id": "3514055",
        "text": "Tenderness"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "ExtremityAssessmentFindingLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.15",
    "NemsisName": "Extremity Assessment Finding Location",
    "ElementTitle": "Extremity Assessment Finding Location",
    "ngModel": "ExtremityAssessmentFindingLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The location of the patient's extremity assessment findings.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ExtremityAssessmentLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3515001",
        "text": "Ankle-Left"
      },
      {
        "id": "3515003",
        "text": "Ankle-Right"
      },
      {
        "id": "3515005",
        "text": "Arm-Upper-Left"
      },
      {
        "id": "3515007",
        "text": "Arm-Upper-Right"
      },
      {
        "id": "3515009",
        "text": "Elbow-Left"
      },
      {
        "id": "3515011",
        "text": "Elbow-Right"
      },
      {
        "id": "3515013",
        "text": "Finger-2nd (Index)-Left"
      },
      {
        "id": "3515015",
        "text": "Finger-2nd (Index)-Right"
      },
      {
        "id": "3515017",
        "text": "Finger-3rd (Middle)-Left"
      },
      {
        "id": "3515019",
        "text": "Finger-3rd (Middle)-Right"
      },
      {
        "id": "3515021",
        "text": "Finger-4th (Ring)-Left"
      },
      {
        "id": "3515023",
        "text": "Finger-4th (Ring)-Right"
      },
      {
        "id": "3515025",
        "text": "Finger-5th (Smallest)-Left"
      },
      {
        "id": "3515027",
        "text": "Finger-5th (Smallest)-Right"
      },
      {
        "id": "3515029",
        "text": "Foot-Dorsal-Left"
      },
      {
        "id": "3515031",
        "text": "Foot-Dorsal-Right"
      },
      {
        "id": "3515033",
        "text": "Foot-Plantar-Left"
      },
      {
        "id": "3515035",
        "text": "Foot-Plantar-Right"
      },
      {
        "id": "3515037",
        "text": "Forearm-Left"
      },
      {
        "id": "3515039",
        "text": "Forearm-Right"
      },
      {
        "id": "3515041",
        "text": "Hand-Dorsal-Left"
      },
      {
        "id": "3515043",
        "text": "Hand-Dorsal-Right"
      },
      {
        "id": "3515045",
        "text": "Hand-Palm-Left"
      },
      {
        "id": "3515047",
        "text": "Hand-Palm-Right"
      },
      {
        "id": "3515049",
        "text": "Hip-Left"
      },
      {
        "id": "3515051",
        "text": "Hip-Right"
      },
      {
        "id": "3515053",
        "text": "Knee-Left"
      },
      {
        "id": "3515055",
        "text": "Knee-Right"
      },
      {
        "id": "3515057",
        "text": "Leg-Lower-Left"
      },
      {
        "id": "3515059",
        "text": "Leg-Lower-Right"
      },
      {
        "id": "3515061",
        "text": "Leg-Upper-Left"
      },
      {
        "id": "3515063",
        "text": "Leg-Upper-Right"
      },
      {
        "id": "3515065",
        "text": "Shoulder-Left"
      },
      {
        "id": "3515067",
        "text": "Shoulder-Right"
      },
      {
        "id": "3515069",
        "text": "Thumb-Left"
      },
      {
        "id": "3515071",
        "text": "Thumb-Right"
      },
      {
        "id": "3515073",
        "text": "Toe-1st (Big)-Left"
      },
      {
        "id": "3515075",
        "text": "Toe-1st (Big)-Right"
      },
      {
        "id": "3515077",
        "text": "Toe-2nd-Left"
      },
      {
        "id": "3515079",
        "text": "Toe-2nd-Right"
      },
      {
        "id": "3515081",
        "text": "Toe-3rd-Left"
      },
      {
        "id": "3515083",
        "text": "Toe-3rd-Right"
      },
      {
        "id": "3515085",
        "text": "Toe-4th-Left"
      },
      {
        "id": "3515087",
        "text": "Toe-4th-Right"
      },
      {
        "id": "3515089",
        "text": "Toe-5th (Smallest)-Left"
      },
      {
        "id": "3515091",
        "text": "Toe-5th (Smallest)-Right"
      },
      {
        "id": "3515093",
        "text": "Wrist-Left"
      },
      {
        "id": "3515095",
        "text": "Wrist-Right"
      }
    ],
    "attributes": []
  },
  "ExtremitiesAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.16",
    "NemsisName": "Extremities Assessment",
    "ElementTitle": "Extremities Assessment",
    "ngModel": "ExtremitiesAssessment",
    "V2Number": "E16_17",
    "National": "",
    "State": "",
    "Definition": "The assessment findings associated with the patient's extremities.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "ExtremitiesAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3516001",
        "text": "Abrasion"
      },
      {
        "id": "3516003",
        "text": "Amputation-Acute"
      },
      {
        "id": "3516005",
        "text": "Amputation-Previous"
      },
      {
        "id": "3516007",
        "text": "Avulsion"
      },
      {
        "id": "3516009",
        "text": "Bleeding Controlled"
      },
      {
        "id": "3516011",
        "text": "Bleeding Uncontrolled"
      },
      {
        "id": "3516013",
        "text": "Burn-Blistering"
      },
      {
        "id": "3516015",
        "text": "Burn-Charring"
      },
      {
        "id": "3516017",
        "text": "Burn-Redness"
      },
      {
        "id": "3516019",
        "text": "Burn-White/Waxy"
      },
      {
        "id": "3516021",
        "text": "Clubbing (of fingers)"
      },
      {
        "id": "3516023",
        "text": "Crush Injury"
      },
      {
        "id": "3516025",
        "text": "Deformity"
      },
      {
        "id": "3516027",
        "text": "Dislocation"
      },
      {
        "id": "3516029",
        "text": "Edema"
      },
      {
        "id": "3516031",
        "text": "Foreign Body"
      },
      {
        "id": "3516033",
        "text": "Fracture-Closed"
      },
      {
        "id": "3516035",
        "text": "Fracture-Open"
      },
      {
        "id": "3516041",
        "text": "Laceration"
      },
      {
        "id": "3516043",
        "text": "Motor Function-Abnormal/Weakness"
      },
      {
        "id": "3516045",
        "text": "Motor Function-Absent"
      },
      {
        "id": "3516047",
        "text": "Motor Function-Normal"
      },
      {
        "id": "3516049",
        "text": "Normal"
      },
      {
        "id": "3516051",
        "text": "Not Done"
      },
      {
        "id": "3516053",
        "text": "Pain"
      },
      {
        "id": "3516055",
        "text": "Paralysis"
      },
      {
        "id": "3516057",
        "text": "Pulse-Abnormal"
      },
      {
        "id": "3516059",
        "text": "Pulse-Absent"
      },
      {
        "id": "3516061",
        "text": "Pulse-Normal"
      },
      {
        "id": "3516063",
        "text": "Puncture/Stab Wound"
      },
      {
        "id": "3516065",
        "text": "Sensation-Abnormal"
      },
      {
        "id": "3516067",
        "text": "Sensation-Absent"
      },
      {
        "id": "3516069",
        "text": "Sensation-Normal"
      },
      {
        "id": "3516075",
        "text": "Tenderness"
      },
      {
        "id": "3516077",
        "text": "Gunshot Wound"
      },
      {
        "id": "3516079",
        "text": "Swelling"
      },
      {
        "id": "3516081",
        "text": "Contusion"
      },
      {
        "id": "3516083",
        "text": "Arm Drift"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "EyeAssessmentFindingLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.17",
    "NemsisName": "Eye Assessment Finding Location",
    "ElementTitle": "Eye Assessment Finding Location",
    "ngModel": "EyeAssessmentFindingLocation",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The location of the patient's eye assessment findings.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EyesAssessmentLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3517001",
        "text": "Bilateral"
      },
      {
        "id": "3517003",
        "text": "Left"
      },
      {
        "id": "3517005",
        "text": "Right"
      }
    ],
    "attributes": []
  },
  "EyeAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.18",
    "NemsisName": "Eye Assessment",
    "ElementTitle": "Eye Assessment",
    "ngModel": "EyeAssessment",
    "V2Number": "E16_21",
    "National": "",
    "State": "",
    "Definition": "The assessment findings of the patient's eye examination.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "EyesAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3518001",
        "text": "1-mm"
      },
      {
        "id": "3518003",
        "text": "2-mm"
      },
      {
        "id": "3518005",
        "text": "3-mm"
      },
      {
        "id": "3518007",
        "text": "4-mm"
      },
      {
        "id": "3518009",
        "text": "5-mm"
      },
      {
        "id": "3518011",
        "text": "6-mm"
      },
      {
        "id": "3518013",
        "text": "7-mm"
      },
      {
        "id": "3518015",
        "text": "8-mm or >"
      },
      {
        "id": "3518017",
        "text": "Blind"
      },
      {
        "id": "3518019",
        "text": "Cataract Present"
      },
      {
        "id": "3518021",
        "text": "Clouded"
      },
      {
        "id": "3518023",
        "text": "Deformity"
      },
      {
        "id": "3518025",
        "text": "Dysconjugate Gaze"
      },
      {
        "id": "3518027",
        "text": "Foreign Body"
      },
      {
        "id": "3518029",
        "text": "Glaucoma Present"
      },
      {
        "id": "3518031",
        "text": "Hyphema"
      },
      {
        "id": "3518033",
        "text": "Jaundiced Sclera"
      },
      {
        "id": "3518035",
        "text": "Missing"
      },
      {
        "id": "3518037",
        "text": "Non-Reactive"
      },
      {
        "id": "3518039",
        "text": "Not Done"
      },
      {
        "id": "3518041",
        "text": "Non-Reactive Prosthetic"
      },
      {
        "id": "3518043",
        "text": "Nystagmus Noted"
      },
      {
        "id": "3518045",
        "text": "Open Globe"
      },
      {
        "id": "3518047",
        "text": "PERRL"
      },
      {
        "id": "3518049",
        "text": "Pupil-Irregular/Teardrop"
      },
      {
        "id": "3518051",
        "text": "Reactive"
      },
      {
        "id": "3518053",
        "text": "Sluggish"
      },
      {
        "id": "3518055",
        "text": "Swelling"
      },
      {
        "id": "3518057",
        "text": "Contusion"
      },
      {
        "id": "3518059",
        "text": "Puncture/Stab Wound"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "MentalStatusAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.19",
    "NemsisName": "Mental Status Assessment",
    "ElementTitle": "Mental Status Assessment",
    "ngModel": "MentalStatusAssessment",
    "V2Number": "E16_23",
    "National": "",
    "State": "",
    "Definition": "The assessment findings of the patient's mental status examination.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "MentalStatusAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3519001",
        "text": "Combative"
      },
      {
        "id": "3519003",
        "text": "Confused"
      },
      {
        "id": "3519005",
        "text": "Hallucinations"
      },
      {
        "id": "3519007",
        "text": "Normal Baseline for Patient"
      },
      {
        "id": "3519009",
        "text": "Not Done"
      },
      {
        "id": "3519011",
        "text": "Oriented-Person"
      },
      {
        "id": "3519013",
        "text": "Oriented-Place"
      },
      {
        "id": "3519015",
        "text": "Oriented-Event"
      },
      {
        "id": "3519017",
        "text": "Oriented-Time"
      },
      {
        "id": "3519019",
        "text": "Pharmacologically Sedated/Paralyzed"
      },
      {
        "id": "3519021",
        "text": "Unresponsive"
      },
      {
        "id": "3519023",
        "text": "Agitation"
      },
      {
        "id": "3519025",
        "text": "Somnolent"
      },
      {
        "id": "3519027",
        "text": "Stupor"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "NeurologicalAssessment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.20",
    "NemsisName": "Neurological Assessment",
    "ElementTitle": "Neurological Assessment",
    "ngModel": "NeurologicalAssessment",
    "V2Number": "E16_24",
    "National": "",
    "State": "",
    "Definition": "The assessment findings of the patient's neurological examination.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "NeurologicalAssessment",
    "NV": "",
    "PN": "PN",
    "PNNill": "",
    "NVList": "",
    "PNList": "PN.ExamFindingNotPresent; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3520001",
        "text": "Aphagia"
      },
      {
        "id": "3520003",
        "text": "Aphasia"
      },
      {
        "id": "3520005",
        "text": "Cerebellar Function-Abnormal"
      },
      {
        "id": "3520007",
        "text": "Cerebellar Function-Normal"
      },
      {
        "id": "3520009",
        "text": "Decerebrate Posturing"
      },
      {
        "id": "3520011",
        "text": "Decorticate Posturing"
      },
      {
        "id": "3520013",
        "text": "Gait-Abnormal"
      },
      {
        "id": "3520015",
        "text": "Gait-Normal"
      },
      {
        "id": "3520017",
        "text": "Hemiplegia-Left"
      },
      {
        "id": "3520019",
        "text": "Hemiplegia-Right"
      },
      {
        "id": "3520021",
        "text": "Normal Baseline for Patient"
      },
      {
        "id": "3520023",
        "text": "Not Done"
      },
      {
        "id": "3520025",
        "text": "Seizures"
      },
      {
        "id": "3520027",
        "text": "Speech Normal"
      },
      {
        "id": "3520029",
        "text": "Speech Slurring"
      },
      {
        "id": "3520031",
        "text": "Strength-Asymmetric"
      },
      {
        "id": "3520033",
        "text": "Strength-Normal"
      },
      {
        "id": "3520035",
        "text": "Strength-Symmetric"
      },
      {
        "id": "3520037",
        "text": "Tremors"
      },
      {
        "id": "3520039",
        "text": "Weakness-Facial Droop-Left"
      },
      {
        "id": "3520041",
        "text": "Weakness-Facial Droop-Right"
      },
      {
        "id": "3520043",
        "text": "Weakness-Left Sided"
      },
      {
        "id": "3520045",
        "text": "Weakness-Right Sided"
      },
      {
        "id": "3520051",
        "text": "Arm Drift-Left"
      },
      {
        "id": "3520053",
        "text": "Arm Drift-Right"
      }
    ],
    "attributes": [
      "CorrelationID",
      "PN"
    ]
  },
  "Stroke/CVASymptomsResolved": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eExam.21",
    "NemsisName": "Stroke/CVA Symptoms Resolved",
    "ElementTitle": "Stroke/CVA Symptoms Resolved",
    "ngModel": "Stroke/CVASymptomsResolved",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "Indication if the Stroke/CVA Symptoms resolved and when.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "StrokeCVASymptomsResolved",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "PNNill",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3521001",
        "text": "No"
      },
      {
        "id": "3521003",
        "text": "Yes-Resolved Prior to EMS Arrival"
      },
      {
        "id": "3521005",
        "text": "Yes-Resolved in EMS Presence"
      }
    ],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "ProtocolsUsed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProtocols.01",
    "NemsisName": "Protocols Used",
    "ElementTitle": "Protocols Used",
    "ngModel": "ProtocolsUsed",
    "V2Number": "E17_01",
    "National": "National",
    "State": "State",
    "Definition": "The protocol used by EMS personnel to direct the clinical care of the patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ProtocolsUsed",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9914001",
        "text": "Airway"
      },
      {
        "id": "9914003",
        "text": "Airway-Failed"
      },
      {
        "id": "9914005",
        "text": "Airway-Obstruction/Foreign Body"
      },
      {
        "id": "9914007",
        "text": "Airway-Rapid Sequence Induction (RSI-Paralytic)"
      },
      {
        "id": "9914009",
        "text": "Airway-Sedation Assisted (Non-Paralytic)"
      },
      {
        "id": "9914011",
        "text": "Cardiac Arrest-Asystole"
      },
      {
        "id": "9914013",
        "text": "Cardiac Arrest-Hypothermia-Therapeutic"
      },
      {
        "id": "9914015",
        "text": "Cardiac Arrest-Pulseless Electrical Activity"
      },
      {
        "id": "9914017",
        "text": "Cardiac Arrest-Ventricular Fibrillation/ Pulseless Ventricular Tachycardia"
      },
      {
        "id": "9914019",
        "text": "Cardiac Arrest-Post Resuscitation Care"
      },
      {
        "id": "9914021",
        "text": "Environmental-Altitude Sickness"
      },
      {
        "id": "9914023",
        "text": "Environmental-Cold Exposure"
      },
      {
        "id": "9914025",
        "text": "Environmental-Frostbite/Cold Injury"
      },
      {
        "id": "9914027",
        "text": "Environmental-Heat Exposure/Exhaustion"
      },
      {
        "id": "9914029",
        "text": "Environmental-Heat Stroke/Hyperthermia"
      },
      {
        "id": "9914031",
        "text": "Environmental-Hypothermia"
      },
      {
        "id": "9914033",
        "text": "Exposure-Airway/Inhalation Irritants"
      },
      {
        "id": "9914035",
        "text": "Exposure-Biological/Infectious"
      },
      {
        "id": "9914037",
        "text": "Exposure-Blistering Agents"
      },
      {
        "id": "9914041",
        "text": "Exposure-Chemicals to Eye"
      },
      {
        "id": "9914043",
        "text": "Exposure-Cyanide"
      },
      {
        "id": "9914045",
        "text": "Exposure-Explosive/ Blast Injury"
      },
      {
        "id": "9914047",
        "text": "Exposure-Nerve Agents"
      },
      {
        "id": "9914049",
        "text": "Exposure-Radiologic Agents"
      },
      {
        "id": "9914051",
        "text": "General-Back Pain"
      },
      {
        "id": "9914053",
        "text": "General-Behavioral/Patient Restraint"
      },
      {
        "id": "9914055",
        "text": "General-Cardiac Arrest"
      },
      {
        "id": "9914057",
        "text": "General-Dental Problems"
      },
      {
        "id": "9914059",
        "text": "General-Epistaxis"
      },
      {
        "id": "9914061",
        "text": "General-Fever"
      },
      {
        "id": "9914063",
        "text": "General-Individualized Patient Protocol"
      },
      {
        "id": "9914065",
        "text": "General-Indwelling Medical Devices/Equipment"
      },
      {
        "id": "9914067",
        "text": "General-IV Access"
      },
      {
        "id": "9914069",
        "text": "General-Medical Device Malfunction"
      },
      {
        "id": "9914071",
        "text": "General-Pain Control"
      },
      {
        "id": "9914073",
        "text": "General-Spinal Immobilization/Clearance"
      },
      {
        "id": "9914075",
        "text": "General-Universal Patient Care/ Initial Patient Contact"
      },
      {
        "id": "9914077",
        "text": "Injury-Amputation"
      },
      {
        "id": "9914079",
        "text": "Injury-Bites and Envenomations-Land"
      },
      {
        "id": "9914081",
        "text": "Injury-Bites and Envenomations-Marine"
      },
      {
        "id": "9914083",
        "text": "Injury-Bleeding/ Hemorrhage Control"
      },
      {
        "id": "9914085",
        "text": "Injury-Burns-Thermal"
      },
      {
        "id": "9914087",
        "text": "Injury-Cardiac Arrest"
      },
      {
        "id": "9914089",
        "text": "Injury-Crush Syndrome"
      },
      {
        "id": "9914091",
        "text": "Injury-Diving Emergencies"
      },
      {
        "id": "9914093",
        "text": "Injury-Drowning/Near Drowning"
      },
      {
        "id": "9914095",
        "text": "Injury-Electrical Injuries"
      },
      {
        "id": "9914097",
        "text": "Injury-Extremity"
      },
      {
        "id": "9914099",
        "text": "Injury-Eye"
      },
      {
        "id": "9914101",
        "text": "Injury-Head"
      },
      {
        "id": "9914103",
        "text": "Injury-Impaled Object"
      },
      {
        "id": "9914105",
        "text": "Injury-Multisystem"
      },
      {
        "id": "9914107",
        "text": "Injury-Spinal Cord"
      },
      {
        "id": "9914109",
        "text": "Medical-Abdominal Pain"
      },
      {
        "id": "9914111",
        "text": "Medical-Allergic Reaction/Anaphylaxis"
      },
      {
        "id": "9914113",
        "text": "Medical-Altered Mental Status"
      },
      {
        "id": "9914115",
        "text": "Medical-Bradycardia"
      },
      {
        "id": "9914117",
        "text": "Medical-Cardiac Chest Pain"
      },
      {
        "id": "9914119",
        "text": "Medical-Diarrhea"
      },
      {
        "id": "9914121",
        "text": "Medical-Hyperglycemia"
      },
      {
        "id": "9914123",
        "text": "Medical-Hypertension"
      },
      {
        "id": "9914125",
        "text": "Medical-Hypoglycemia/Diabetic Emergency"
      },
      {
        "id": "9914127",
        "text": "Medical-Hypotension/Shock (Non-Trauma)"
      },
      {
        "id": "9914129",
        "text": "Medical-Influenza-Like Illness/ Upper Respiratory Infection"
      },
      {
        "id": "9914131",
        "text": "Medical-Nausea/Vomiting"
      },
      {
        "id": "9914133",
        "text": "Medical-Newborn/ Neonatal Resuscitation"
      },
      {
        "id": "9914135",
        "text": "General-Overdose/Poisoning/Toxic Ingestion"
      },
      {
        "id": "9914137",
        "text": "Medical-Pulmonary Edema/CHF"
      },
      {
        "id": "9914139",
        "text": "Medical-Respiratory Distress/Asthma/COPD/Reactive Airway"
      },
      {
        "id": "9914141",
        "text": "Medical-Seizure"
      },
      {
        "id": "9914143",
        "text": "Medical-ST-Elevation Myocardial Infarction (STEMI)"
      },
      {
        "id": "9914145",
        "text": "Medical-Stroke/TIA"
      },
      {
        "id": "9914147",
        "text": "Medical-Supraventricular Tachycardia (Including Atrial Fibrillation)"
      },
      {
        "id": "9914149",
        "text": "Medical-Syncope"
      },
      {
        "id": "9914151",
        "text": "Medical-Ventricular Tachycardia (With Pulse)"
      },
      {
        "id": "9914153",
        "text": "Not Done"
      },
      {
        "id": "9914155",
        "text": "OB/GYN-Childbirth/Labor/Delivery"
      },
      {
        "id": "9914157",
        "text": "OB/GYN-Eclampsia"
      },
      {
        "id": "9914159",
        "text": "OB/GYN-Gynecologic Emergencies"
      },
      {
        "id": "9914161",
        "text": "OB/GYN-Pregnancy Related Emergencies"
      },
      {
        "id": "9914163",
        "text": "OB/GYN-Post-partum Hemorrhage"
      },
      {
        "id": "9914165",
        "text": "Other"
      },
      {
        "id": "9914167",
        "text": "Exposure-Carbon Monoxide"
      },
      {
        "id": "9914169",
        "text": "Cardiac Arrest-Do Not Resuscitate"
      },
      {
        "id": "9914171",
        "text": "Cardiac Arrest-Special Resuscitation Orders"
      },
      {
        "id": "9914173",
        "text": "Exposure-Smoke Inhalation"
      },
      {
        "id": "9914175",
        "text": "General-Community Paramedicine / Mobile Integrated Healthcare"
      },
      {
        "id": "9914177",
        "text": "General-Exception Protocol"
      },
      {
        "id": "9914179",
        "text": "General-Extended Care Guidelines"
      },
      {
        "id": "9914181",
        "text": "General-Interfacility Transfers"
      },
      {
        "id": "9914183",
        "text": "General-Law Enforcement - Blood for Legal Purposes"
      },
      {
        "id": "9914185",
        "text": "General-Law Enforcement - Assist with Law Enforcement Activity"
      },
      {
        "id": "9914187",
        "text": "General-Neglect or Abuse Suspected"
      },
      {
        "id": "9914189",
        "text": "General-Refusal of Care"
      },
      {
        "id": "9914191",
        "text": "Injury-Mass/Multiple Casualties"
      },
      {
        "id": "9914193",
        "text": "Injury-Thoracic"
      },
      {
        "id": "9914195",
        "text": "Medical-Adrenal Insufficiency"
      },
      {
        "id": "9914197",
        "text": "Medical-Apparent Life Threatening Event (ALTE)"
      },
      {
        "id": "9914199",
        "text": "Medical-Tachycardia"
      },
      {
        "id": "9914201",
        "text": "Cardiac Arrest-Determination of Death / Withholding Resuscitative Efforts"
      },
      {
        "id": "9914203",
        "text": "Injury-Conducted Electrical Weapon (e.g., Taser)"
      },
      {
        "id": "9914205",
        "text": "Injury-Facial Trauma"
      },
      {
        "id": "9914207",
        "text": "Injury-General Trauma Management"
      },
      {
        "id": "9914209",
        "text": "Injury-Lightning/Lightning Strike"
      },
      {
        "id": "9914211",
        "text": "Injury-SCUBA Injury/Accidents"
      },
      {
        "id": "9914213",
        "text": "Injury-Topical Chemical Burn"
      },
      {
        "id": "9914215",
        "text": "Medical-Beta Blocker Poisoning/Overdose"
      },
      {
        "id": "9914217",
        "text": "Medical-Calcium Channel Blocker Poisoning/Overdose"
      },
      {
        "id": "9914219",
        "text": "Medical-Opioid Poisoning/Overdose"
      },
      {
        "id": "9914221",
        "text": "Medical-Respiratory Distress-Bronchiolitis"
      },
      {
        "id": "9914223",
        "text": "Medical-Respiratory Distress-Croup"
      },
      {
        "id": "9914225",
        "text": "Medical-Stimulant Poisoning/Overdose"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ProtocolAgeCategory": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProtocols.02",
    "NemsisName": "Protocol Age Category",
    "ElementTitle": "Protocol Age Category",
    "ngModel": "ProtocolAgeCategory",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The age group the protocol is written to address",
    "Usage": "Required",
    "V3Changes": "Added to better document protocol use.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ProtocolAgeCategory",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3602001",
        "text": "Adult Only"
      },
      {
        "id": "3602003",
        "text": "General"
      },
      {
        "id": "3602005",
        "text": "Pediatric Only"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Date/TimeMedicationAdministered": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.01",
    "NemsisName": "Date/Time Medication Administered",
    "ElementTitle": "Date/Time Medication Administered",
    "ngModel": "Date/TimeMedicationAdministered",
    "V2Number": "E18_01",
    "National": "National",
    "State": "State",
    "Definition": "The date/time medication administered to the patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "MedicationAdministeredPriortothisUnit'sEMSCare": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.02",
    "NemsisName": "Medication Administered Prior to this Unit's EMS Care",
    "ElementTitle": "Medication Administered Prior to this Unit's EMS Care",
    "ngModel": "MedicationAdministeredPriortothisUnit'sEMSCare",
    "V2Number": "E18_02",
    "National": "National",
    "State": "State",
    "Definition": "Indicates that the medication administration which is documented was administered prior to this EMS units care",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "MedicationGiven": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.03",
    "NemsisName": "Medication Given",
    "ElementTitle": "Medication Given",
    "ngModel": "MedicationGiven",
    "V2Number": "E18_03",
    "National": "National",
    "State": "State",
    "Definition": "The medication given to the patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Medication",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.MedicationAlreadyTaken; PN.MedicationAllergy; PN.DeniedByOrder; PN.ContraindicationNoted; ",
    "minLength": "2",
    "maxLength": "7",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "PN",
      "NV"
    ]
  },
  "MedicationAdministeredRoute": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.04",
    "NemsisName": "Medication Administered Route",
    "ElementTitle": "Medication Administered Route",
    "ngModel": "MedicationAdministeredRoute",
    "V2Number": "E18_04",
    "National": "",
    "State": "State",
    "Definition": "The route medication was administered to the patient",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CurrentMedicationAdministrationRoute",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9927001",
        "text": "Blow-By"
      },
      {
        "id": "9927003",
        "text": "Buccal"
      },
      {
        "id": "9927005",
        "text": "Endotracheal Tube (ET)"
      },
      {
        "id": "9927007",
        "text": "Gastrostomy Tube"
      },
      {
        "id": "9927009",
        "text": "Inhalation"
      },
      {
        "id": "9927011",
        "text": "Intraarterial"
      },
      {
        "id": "9927013",
        "text": "Intradermal"
      },
      {
        "id": "9927015",
        "text": "Intramuscular (IM)"
      },
      {
        "id": "9927017",
        "text": "Intranasal"
      },
      {
        "id": "9927019",
        "text": "Intraocular"
      },
      {
        "id": "9927021",
        "text": "Intraosseous (IO)"
      },
      {
        "id": "9927023",
        "text": "Intravenous (IV)"
      },
      {
        "id": "9927025",
        "text": "Nasal Cannula"
      },
      {
        "id": "9927027",
        "text": "Nasogastric"
      },
      {
        "id": "9927029",
        "text": "Nasotracheal Tube"
      },
      {
        "id": "9927031",
        "text": "Non-Rebreather Mask"
      },
      {
        "id": "9927033",
        "text": "Ophthalmic"
      },
      {
        "id": "9927035",
        "text": "Oral"
      },
      {
        "id": "9927037",
        "text": "Other/miscellaneous"
      },
      {
        "id": "9927039",
        "text": "Otic"
      },
      {
        "id": "9927041",
        "text": "Re-breather mask"
      },
      {
        "id": "9927043",
        "text": "Rectal"
      },
      {
        "id": "9927045",
        "text": "Subcutaneous"
      },
      {
        "id": "9927047",
        "text": "Sublingual"
      },
      {
        "id": "9927049",
        "text": "Topical"
      },
      {
        "id": "9927051",
        "text": "Tracheostomy"
      },
      {
        "id": "9927053",
        "text": "Transdermal"
      },
      {
        "id": "9927055",
        "text": "Urethral"
      },
      {
        "id": "9927057",
        "text": "Ventimask"
      },
      {
        "id": "9927059",
        "text": "Wound"
      },
      {
        "id": "9927061",
        "text": "Portacath"
      }
    ],
    "attributes": []
  },
  "MedicationDosage": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.05",
    "NemsisName": "Medication Dosage",
    "ElementTitle": "Medication Dosage",
    "ngModel": "MedicationDosage",
    "V2Number": "E18_05",
    "National": "National",
    "State": "State",
    "Definition": "The dose or amount of the medication given to the patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "MedicationDosage",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "9",
    "fractionDigits": "3",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "MedicationDosageUnits": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.06",
    "NemsisName": "Medication Dosage Units",
    "ElementTitle": "Medication Dosage Units",
    "ngModel": "MedicationDosageUnits",
    "V2Number": "E18_06",
    "National": "National",
    "State": "State",
    "Definition": "The unit of medication dosage given to patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "MedicationDosageUnits",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3706001",
        "text": "Grams (gms)"
      },
      {
        "id": "3706003",
        "text": "Inches (in)"
      },
      {
        "id": "3706005",
        "text": "International Units (IU)"
      },
      {
        "id": "3706007",
        "text": "Keep Vein Open (kvo)"
      },
      {
        "id": "3706009",
        "text": "Liters (l)"
      },
      {
        "id": "3706011",
        "text": "Liters Per Minute (l/min [fluid])"
      },
      {
        "id": "3706013",
        "text": "Metered Dose (MDI)"
      },
      {
        "id": "3706015",
        "text": "Micrograms (mcg)"
      },
      {
        "id": "3706017",
        "text": "Micrograms per Kilogram per Minute (mcg/kg/min)"
      },
      {
        "id": "3706019",
        "text": "Milliequivalents (mEq)"
      },
      {
        "id": "3706021",
        "text": "Milligrams (mg)"
      },
      {
        "id": "3706023",
        "text": "Milligrams per Kilogram Per Minute (mg/kg/min)"
      },
      {
        "id": "3706025",
        "text": "Milliliters (ml)"
      },
      {
        "id": "3706027",
        "text": "Milliliters per Hour (ml/hr)"
      },
      {
        "id": "3706029",
        "text": "Other"
      },
      {
        "id": "3706031",
        "text": "Centimeters (cm)"
      },
      {
        "id": "3706033",
        "text": "Drops (gtts)"
      },
      {
        "id": "3706035",
        "text": "Liters Per Minute (LPM [gas])"
      },
      {
        "id": "3706037",
        "text": "Micrograms per Minute (mcg/min)"
      },
      {
        "id": "3706039",
        "text": "Milligrams per Kilogram (mg/kg)"
      },
      {
        "id": "3706041",
        "text": "Milligrams per Minute (mg/min)"
      },
      {
        "id": "3706043",
        "text": "Puffs"
      },
      {
        "id": "3706045",
        "text": "Units per Hour (units/hr)"
      },
      {
        "id": "3706047",
        "text": "Micrograms per Kilogram (mcg/kg)"
      },
      {
        "id": "3706049",
        "text": "Units"
      },
      {
        "id": "3706051",
        "text": "Units per Kilogram per Hour (units/kg/hr)"
      },
      {
        "id": "3706053",
        "text": "Units per Kilogram (units/kg)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ResponsetoMedication": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.07",
    "NemsisName": "Response to Medication",
    "ElementTitle": "Response to Medication",
    "ngModel": "ResponsetoMedication",
    "V2Number": "E18_07",
    "National": "National",
    "State": "State",
    "Definition": "The patient's response to the medication",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Response",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9916001",
        "text": "Improved"
      },
      {
        "id": "9916003",
        "text": "Unchanged"
      },
      {
        "id": "9916005",
        "text": "Worse"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "MedicationComplication": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.08",
    "NemsisName": "Medication Complication",
    "ElementTitle": "Medication Complication",
    "ngModel": "MedicationComplication",
    "V2Number": "E18_08",
    "National": "National",
    "State": "State",
    "Definition": "Any complication (abnormal effect on the patient) associated with the administration of the medication to the patient by EMS",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "MedicationComplication",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3708001",
        "text": "Altered Mental Status"
      },
      {
        "id": "3708003",
        "text": "Apnea"
      },
      {
        "id": "3708005",
        "text": "Bleeding"
      },
      {
        "id": "3708007",
        "text": "Bradycardia"
      },
      {
        "id": "3708009",
        "text": "Bradypnea"
      },
      {
        "id": "3708011",
        "text": "Diarrhea"
      },
      {
        "id": "3708013",
        "text": "Extravasation"
      },
      {
        "id": "3708015",
        "text": "Hypertension"
      },
      {
        "id": "3708017",
        "text": "Hyperthermia"
      },
      {
        "id": "3708019",
        "text": "Hypotension"
      },
      {
        "id": "3708021",
        "text": "Hypothermia"
      },
      {
        "id": "3708023",
        "text": "Hypoxia"
      },
      {
        "id": "3708025",
        "text": "Injury"
      },
      {
        "id": "3708029",
        "text": "Nausea"
      },
      {
        "id": "3708031",
        "text": "None"
      },
      {
        "id": "3708033",
        "text": "Other"
      },
      {
        "id": "3708035",
        "text": "Respiratory Distress"
      },
      {
        "id": "3708037",
        "text": "Tachycardia"
      },
      {
        "id": "3708039",
        "text": "Tachypnea"
      },
      {
        "id": "3708041",
        "text": "Vomiting"
      },
      {
        "id": "3708043",
        "text": "Itching"
      },
      {
        "id": "3708045",
        "text": "Urticaria"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "MedicationCrew(HealthcareProfessionals)ID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.09",
    "NemsisName": "Medication Crew (Healthcare Professionals) ID",
    "ElementTitle": "Medication Crew (Healthcare Professionals) ID",
    "ngModel": "MedicationCrew(HealthcareProfessionals)ID",
    "V2Number": "E18_09",
    "National": "",
    "State": "State",
    "Definition": "The statewide assigned ID number of the EMS crew member giving the treatment to the patient",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CrewMemberID",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Role/TypeofPersonAdministeringMedication": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.10",
    "NemsisName": "Role/Type of Person Administering Medication",
    "ElementTitle": "Role/Type of Person Administering Medication",
    "ngModel": "Role/TypeofPersonAdministeringMedication",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The type (level) of EMS or Healthcare Professional Administering the Medication. For medications administered prior to EMS arrival, this may be a non-EMS healthcare professional.",
    "Usage": "Required",
    "V3Changes": "Added to better document the type of healthcare professional who administered the medication.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMSCaregiverLevel",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9905001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9905003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9905005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9905007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9905009",
        "text": "EMT-Basic"
      },
      {
        "id": "9905011",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9905013",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9905015",
        "text": "First Responder"
      },
      {
        "id": "9905019",
        "text": "Other Healthcare Professional"
      },
      {
        "id": "9905021",
        "text": "Other Non-Healthcare Professional"
      },
      {
        "id": "9905023",
        "text": "Patient/Lay Person"
      },
      {
        "id": "9905025",
        "text": "Physician"
      },
      {
        "id": "9905027",
        "text": "Respiratory Therapist"
      },
      {
        "id": "9905029",
        "text": "Student"
      },
      {
        "id": "9905031",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9905033",
        "text": "Community Paramedicine"
      },
      {
        "id": "9905035",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9905037",
        "text": "Physician Assistant"
      },
      {
        "id": "9905039",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9905041",
        "text": "Registered Nurse"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "MedicationAuthorization": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.11",
    "NemsisName": "Medication Authorization",
    "ElementTitle": "Medication Authorization",
    "ngModel": "MedicationAuthorization",
    "V2Number": "E18_10",
    "National": "",
    "State": "",
    "Definition": "The type of treatment authorization obtained",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TxAuthorization",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9918001",
        "text": "On-Line (Remote Verbal Order)"
      },
      {
        "id": "9918003",
        "text": "On-Scene"
      },
      {
        "id": "9918005",
        "text": "Protocol (Standing Order)"
      },
      {
        "id": "9918007",
        "text": "Written Orders (Patient Specific)"
      }
    ],
    "attributes": []
  },
  "MedicationAuthorizingPhysician": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eMedications.12",
    "NemsisName": "Medication Authorizing Physician",
    "ElementTitle": "Medication Authorizing Physician",
    "ngModel": "MedicationAuthorizingPhysician",
    "V2Number": "E18_11",
    "National": "",
    "State": "",
    "Definition": "The name of the authorizing physician ordering the medication administration if the order was provided by any manner other than protocol (standing order) in EMedications.11",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Date/TimeProcedurePerformed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.01",
    "NemsisName": "Date/Time Procedure Performed",
    "ElementTitle": "Date/Time Procedure Performed",
    "ngModel": "Date/TimeProcedurePerformed",
    "V2Number": "E19_01",
    "National": "National",
    "State": "State",
    "Definition": "The date/time the procedure was performed on the patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ProcedurePerformedPriortothisUnit'sEMSCare": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.02",
    "NemsisName": "Procedure Performed Prior to this Unit's EMS Care",
    "ElementTitle": "Procedure Performed Prior to this Unit's EMS Care",
    "ngModel": "ProcedurePerformedPriortothisUnit'sEMSCare",
    "V2Number": "E19_02",
    "National": "National",
    "State": "State",
    "Definition": "Indicates that the procedure which was performed and documented was performed prior to this EMS units care.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Procedure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.03",
    "NemsisName": "Procedure",
    "ElementTitle": "Procedure",
    "ngModel": "Procedure",
    "V2Number": "E19_03",
    "National": "National",
    "State": "State",
    "Definition": "The procedure performed on the patient.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "snomed",
    "NV": "NV",
    "PN": "PN",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "PN.UnableToComplete; PN.Refused; PN.DeniedByOrder; PN.ContraindicationNoted; ",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "100000",
    "maxInclusive": "1000000000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV",
      "PN"
    ]
  },
  "SizeofProcedureEquipment": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.04",
    "NemsisName": "Size of Procedure Equipment",
    "ElementTitle": "Size of Procedure Equipment",
    "ngModel": "SizeofProcedureEquipment",
    "V2Number": "E19_04",
    "National": "",
    "State": "",
    "Definition": "The size of the equipment used in the procedure on the patient",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SizeOfProcedureEquipment",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "20",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "NumberofProcedureAttempts": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.05",
    "NemsisName": "Number of Procedure Attempts",
    "ElementTitle": "Number of Procedure Attempts",
    "ngModel": "NumberofProcedureAttempts",
    "V2Number": "E19_05",
    "National": "National",
    "State": "State",
    "Definition": "The number of attempts taken to complete a procedure or intervention regardless of success.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "NumberOfProcedureAttempts",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "10",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ProcedureSuccessful": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.06",
    "NemsisName": "Procedure Successful",
    "ElementTitle": "Procedure Successful",
    "ngModel": "ProcedureSuccessful",
    "V2Number": "E19_06",
    "National": "National",
    "State": "State",
    "Definition": "Indicates that this individual procedure attempt which was performed on the patient was successful.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ProcedureComplication": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.07",
    "NemsisName": "Procedure Complication",
    "ElementTitle": "Procedure Complication",
    "ngModel": "ProcedureComplication",
    "V2Number": "E19_07",
    "National": "National",
    "State": "State",
    "Definition": "Any complication (abnormal effect on the patient) associated with the performance of the procedure on the patient",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ProcedureComplication",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3907001",
        "text": "Altered Mental Status"
      },
      {
        "id": "3907003",
        "text": "Apnea"
      },
      {
        "id": "3907005",
        "text": "Bleeding"
      },
      {
        "id": "3907007",
        "text": "Bradypnea"
      },
      {
        "id": "3907009",
        "text": "Diarrhea"
      },
      {
        "id": "3907011",
        "text": "Esophageal Intubation-immediately"
      },
      {
        "id": "3907013",
        "text": "Esophageal Intubation-other"
      },
      {
        "id": "3907015",
        "text": "Extravasation"
      },
      {
        "id": "3907017",
        "text": "Hypertension"
      },
      {
        "id": "3907019",
        "text": "Hyperthermia"
      },
      {
        "id": "3907021",
        "text": "Hypotension"
      },
      {
        "id": "3907023",
        "text": "Hypothermia"
      },
      {
        "id": "3907025",
        "text": "Hypoxia"
      },
      {
        "id": "3907027",
        "text": "Injury"
      },
      {
        "id": "3907031",
        "text": "Nausea"
      },
      {
        "id": "3907033",
        "text": "None"
      },
      {
        "id": "3907035",
        "text": "Other"
      },
      {
        "id": "3907039",
        "text": "Respiratory Distress"
      },
      {
        "id": "3907041",
        "text": "Tachycardia"
      },
      {
        "id": "3907043",
        "text": "Tachypnea"
      },
      {
        "id": "3907045",
        "text": "Vomiting"
      },
      {
        "id": "3907047",
        "text": "Bradycardia"
      },
      {
        "id": "3907049",
        "text": "Itching"
      },
      {
        "id": "3907051",
        "text": "Urticaria"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "ResponsetoProcedure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.08",
    "NemsisName": "Response to Procedure",
    "ElementTitle": "Response to Procedure",
    "ngModel": "ResponsetoProcedure",
    "V2Number": "E19_08",
    "National": "National",
    "State": "State",
    "Definition": "The patient's response to the procedure",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "Response",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9916001",
        "text": "Improved"
      },
      {
        "id": "9916003",
        "text": "Unchanged"
      },
      {
        "id": "9916005",
        "text": "Worse"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ProcedureCrewMembersID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.09",
    "NemsisName": "Procedure Crew Members ID",
    "ElementTitle": "Procedure Crew Members ID",
    "ngModel": "ProcedureCrewMembersID",
    "V2Number": "E19_09",
    "National": "",
    "State": "State",
    "Definition": "The statewide assigned ID number of the EMS crew member performing the procedure on the patient",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CrewMemberID",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Role/TypeofPersonPerformingtheProcedure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.10",
    "NemsisName": "Role/Type of Person Performing the Procedure",
    "ElementTitle": "Role/Type of Person Performing the Procedure",
    "ngModel": "Role/TypeofPersonPerformingtheProcedure",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The type (level) of EMS or Healthcare Professional performing the procedure. For procedures performed prior to EMS arrival, this may be a non-EMS healthcare professional.",
    "Usage": "Required",
    "V3Changes": "Added to document the type of healthcare professional performing the procedure.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMSCaregiverLevel",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9905001",
        "text": "2009 Advanced Emergency Medical Technician (AEMT)"
      },
      {
        "id": "9905003",
        "text": "2009 Emergency Medical Responder (EMR)"
      },
      {
        "id": "9905005",
        "text": "2009 Emergency Medical Technician (EMT)"
      },
      {
        "id": "9905007",
        "text": "2009 Paramedic"
      },
      {
        "id": "9905009",
        "text": "EMT-Basic"
      },
      {
        "id": "9905011",
        "text": "EMT-Intermediate"
      },
      {
        "id": "9905013",
        "text": "EMT-Paramedic"
      },
      {
        "id": "9905015",
        "text": "First Responder"
      },
      {
        "id": "9905019",
        "text": "Other Healthcare Professional"
      },
      {
        "id": "9905021",
        "text": "Other Non-Healthcare Professional"
      },
      {
        "id": "9905023",
        "text": "Patient/Lay Person"
      },
      {
        "id": "9905025",
        "text": "Physician"
      },
      {
        "id": "9905027",
        "text": "Respiratory Therapist"
      },
      {
        "id": "9905029",
        "text": "Student"
      },
      {
        "id": "9905031",
        "text": "Critical Care Paramedic"
      },
      {
        "id": "9905033",
        "text": "Community Paramedicine"
      },
      {
        "id": "9905035",
        "text": "Nurse Practitioner"
      },
      {
        "id": "9905037",
        "text": "Physician Assistant"
      },
      {
        "id": "9905039",
        "text": "Licensed Practical Nurse (LPN)"
      },
      {
        "id": "9905041",
        "text": "Registered Nurse"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ProcedureAuthorization": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.11",
    "NemsisName": "Procedure Authorization",
    "ElementTitle": "Procedure Authorization",
    "ngModel": "ProcedureAuthorization",
    "V2Number": "E19_10",
    "National": "",
    "State": "",
    "Definition": "The type of treatment authorization obtained",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TxAuthorization",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9918001",
        "text": "On-Line (Remote Verbal Order)"
      },
      {
        "id": "9918003",
        "text": "On-Scene"
      },
      {
        "id": "9918005",
        "text": "Protocol (Standing Order)"
      },
      {
        "id": "9918007",
        "text": "Written Orders (Patient Specific)"
      }
    ],
    "attributes": []
  },
  "ProcedureAuthorizingPhysician": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.12",
    "NemsisName": "Procedure Authorizing Physician",
    "ElementTitle": "Procedure Authorizing Physician",
    "ngModel": "ProcedureAuthorizingPhysician",
    "V2Number": "E19_11",
    "National": "",
    "State": "",
    "Definition": "The name of the authorizing physician ordering the procedure, if the order was provided by any manner other than protocol (standing order) in eProcedures.11",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "VascularAccessLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eProcedures.13",
    "NemsisName": "Vascular Access Location",
    "ElementTitle": "Vascular Access Location",
    "ngModel": "VascularAccessLocation",
    "V2Number": "E19_12",
    "National": "",
    "State": "State",
    "Definition": "The location of the vascular access site attempt on the patient, if applicable.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "VascularAccessLocation",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "3913001",
        "text": "Antecubital-Left"
      },
      {
        "id": "3913003",
        "text": "Antecubital-Right"
      },
      {
        "id": "3913005",
        "text": "External Jugular-Left"
      },
      {
        "id": "3913007",
        "text": "External Jugular-Right"
      },
      {
        "id": "3913009",
        "text": "Femoral-Left IV"
      },
      {
        "id": "3913011",
        "text": "Femoral-Right IV"
      },
      {
        "id": "3913013",
        "text": "Foot-Right"
      },
      {
        "id": "3913015",
        "text": "Foot-Left"
      },
      {
        "id": "3913017",
        "text": "Forearm-Left"
      },
      {
        "id": "3913019",
        "text": "Forearm-Right"
      },
      {
        "id": "3913021",
        "text": "Hand-Left"
      },
      {
        "id": "3913023",
        "text": "Hand-Right"
      },
      {
        "id": "3913025",
        "text": "Internal Jugular-Left"
      },
      {
        "id": "3913027",
        "text": "Internal Jugular-Right"
      },
      {
        "id": "3913029",
        "text": "IO-Iliac Crest-Left"
      },
      {
        "id": "3913031",
        "text": "IO-Iliac Crest-Right"
      },
      {
        "id": "3913033",
        "text": "IO-Femoral-Left Distal"
      },
      {
        "id": "3913035",
        "text": "IO-Femoral-Right Distal"
      },
      {
        "id": "3913037",
        "text": "IO-Humeral-Left"
      },
      {
        "id": "3913039",
        "text": "IO-Humeral-Right"
      },
      {
        "id": "3913041",
        "text": "IO-Tibia-Left Distal"
      },
      {
        "id": "3913043",
        "text": "IO-Sternum"
      },
      {
        "id": "3913045",
        "text": "IO-Tibia-Right Distal"
      },
      {
        "id": "3913047",
        "text": "IO-Tibia-Left Proximal"
      },
      {
        "id": "3913049",
        "text": "IO-Tibia-Right Proximal"
      },
      {
        "id": "3913051",
        "text": "Lower Extremity-Left"
      },
      {
        "id": "3913053",
        "text": "Lower Extremity-Right"
      },
      {
        "id": "3913055",
        "text": "Other Peripheral"
      },
      {
        "id": "3913057",
        "text": "Other Central (PICC, Portacath, etc.)"
      },
      {
        "id": "3913059",
        "text": "Scalp"
      },
      {
        "id": "3913061",
        "text": "Subclavian-Left"
      },
      {
        "id": "3913063",
        "text": "Subclavian-Right"
      },
      {
        "id": "3913065",
        "text": "Umbilical"
      },
      {
        "id": "3913067",
        "text": "Venous Cutdown-Left Lower Extremity"
      },
      {
        "id": "3913069",
        "text": "Venous Cutdown-Right Lower Extremity"
      },
      {
        "id": "3913071",
        "text": "Upper Arm-Left"
      },
      {
        "id": "3913073",
        "text": "Upper Arm-Right"
      },
      {
        "id": "3913075",
        "text": "Radial-Left"
      },
      {
        "id": "3913077",
        "text": "Radial-Right"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "IndicationsforInvasiveAirway": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.01",
    "NemsisName": "Indications for Invasive Airway",
    "ElementTitle": "Indications for Invasive Airway",
    "ngModel": "IndicationsforInvasiveAirway",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The clinical indication for performing invasive airway management.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "AirwayIndications",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4001001",
        "text": "Adequate Airway Reflexes/Effort, Potential for Compromise"
      },
      {
        "id": "4001003",
        "text": "Airway Reflex Compromised"
      },
      {
        "id": "4001005",
        "text": "Apnea or Agonal Respirations"
      },
      {
        "id": "4001007",
        "text": "Illness Involving Airway"
      },
      {
        "id": "4001009",
        "text": "Injury Involving Airway"
      },
      {
        "id": "4001011",
        "text": "Other"
      },
      {
        "id": "4001013",
        "text": "Ventilatory Effort Compromised"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "Date/TimeAirwayDevicePlacementConfirmation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.02",
    "NemsisName": "Date/Time Airway Device Placement Confirmation",
    "ElementTitle": "Date/Time Airway Device Placement Confirmation",
    "ngModel": "Date/TimeAirwayDevicePlacementConfirmation",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The date and time the airway device placement was confirmed.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "AirwayDeviceBeingConfirmed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.03",
    "NemsisName": "Airway Device Being Confirmed",
    "ElementTitle": "Airway Device Being Confirmed",
    "ngModel": "AirwayDeviceBeingConfirmed",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The airway device in which placement is being confirmed.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management. SAD means Supraglottic Airway  Device.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DeviceBeingConfirmed",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4003001",
        "text": "Cricothyrotomy Tube"
      },
      {
        "id": "4003003",
        "text": "Endotracheal Tube"
      },
      {
        "id": "4003005",
        "text": "Other-Invasive Airway"
      },
      {
        "id": "4003007",
        "text": "SAD-Combitube"
      },
      {
        "id": "4003009",
        "text": "SAD-King"
      },
      {
        "id": "4003011",
        "text": "SAD-LMA"
      },
      {
        "id": "4003013",
        "text": "SAD-Other"
      },
      {
        "id": "4003015",
        "text": "Tracheostomy Tube"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "AirwayDevicePlacementConfirmedMethod": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.04",
    "NemsisName": "Airway Device Placement Confirmed Method",
    "ElementTitle": "Airway Device Placement Confirmed Method",
    "ngModel": "AirwayDevicePlacementConfirmedMethod",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The method used to confirm the airway device placement.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "DeviceConfirmedMethods",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4004001",
        "text": "Auscultation"
      },
      {
        "id": "4004003",
        "text": "Bulb/Syringe Aspiration"
      },
      {
        "id": "4004005",
        "text": "Colorimetric ETCO2"
      },
      {
        "id": "4004007",
        "text": "Condensation in Tube"
      },
      {
        "id": "4004009",
        "text": "Digital (Numeric) ETCO2"
      },
      {
        "id": "4004011",
        "text": "Direct Re-Visualization of Tube in Place"
      },
      {
        "id": "4004013",
        "text": "Endotracheal Tube Whistle (BAAM, etc.)"
      },
      {
        "id": "4004015",
        "text": "Other"
      },
      {
        "id": "4004017",
        "text": "Visualization of Vocal Cords"
      },
      {
        "id": "4004019",
        "text": "Waveform ETCO2"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "TubeDepth": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.05",
    "NemsisName": "Tube Depth",
    "ElementTitle": "Tube Depth",
    "ngModel": "TubeDepth",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The measurement at the patient's teeth/lip of the tube depth in centimeters (cm) of the invasive airway placed.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TubeDepth",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "8",
    "maxInclusive": "32",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TypeofIndividualConfirmingAirwayDevicePlacement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.06",
    "NemsisName": "Type of Individual Confirming Airway Device Placement",
    "ElementTitle": "Type of Individual Confirming Airway Device Placement",
    "ngModel": "TypeofIndividualConfirmingAirwayDevicePlacement",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The type of individual who confirmed the airway device placement.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "IndividualDetails",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4006001",
        "text": "Another Person on the Same Crew"
      },
      {
        "id": "4006003",
        "text": "Other"
      },
      {
        "id": "4006005",
        "text": "Person Performing Intubation"
      },
      {
        "id": "4006007",
        "text": "Receiving Air Medical/EMS Crew"
      },
      {
        "id": "4006009",
        "text": "Receiving Hospital Team"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "AirwayComplicationsEncountered": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.08",
    "NemsisName": "Airway Complications Encountered",
    "ElementTitle": "Airway Complications Encountered",
    "ngModel": "AirwayComplicationsEncountered",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The airway management complications encountered during the patient care episode.",
    "Usage": "Recommended",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ComplicationsEncountered",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4008001",
        "text": "Adverse Event from Facilitating Drugs"
      },
      {
        "id": "4008003",
        "text": "Bradycardia (<50)"
      },
      {
        "id": "4008005",
        "text": "Cardiac Arrest"
      },
      {
        "id": "4008007",
        "text": "Esophageal Intubation-Delayed Detection (After Tube Secured)"
      },
      {
        "id": "4008009",
        "text": "Esophageal Intubation-Detected in Emergency Department"
      },
      {
        "id": "4008011",
        "text": "Failed Intubation Effort"
      },
      {
        "id": "4008013",
        "text": "Injury or Trauma to Patient from Airway Management Effort"
      },
      {
        "id": "4008015",
        "text": "Other"
      },
      {
        "id": "4008017",
        "text": "Oxygen Desaturation (<90%)"
      },
      {
        "id": "4008019",
        "text": "Patient Vomiting/Aspiration"
      },
      {
        "id": "4008021",
        "text": "Tube Dislodged During Transport/Patient Care"
      },
      {
        "id": "4008023",
        "text": "Tube Was Not in Correct Position when EMS Crew/Team Assumed Care of the Patient"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "SuspectedReasonsforFailedAirwayManagement": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.09",
    "NemsisName": "Suspected Reasons for Failed Airway Management",
    "ElementTitle": "Suspected Reasons for Failed Airway Management",
    "ngModel": "SuspectedReasonsforFailedAirwayManagement",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The reason(s) the airway was unable to be successfully managed.",
    "Usage": "Optional",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "ReasonsForFailure",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4009001",
        "text": "Difficult Patient Airway Anatomy"
      },
      {
        "id": "4009003",
        "text": "ETI Attempted, but Arrived At Destination Facility Before Accomplished"
      },
      {
        "id": "4009005",
        "text": "Facial or Oral Trauma"
      },
      {
        "id": "4009007",
        "text": "Inability to Expose Vocal Cords"
      },
      {
        "id": "4009009",
        "text": "Inadequate Patient Relaxation/Presence of Protective Airway Reflexes"
      },
      {
        "id": "4009011",
        "text": "Jaw Clenched (Trismus)"
      },
      {
        "id": "4009013",
        "text": "Other"
      },
      {
        "id": "4009015",
        "text": "Poor Patient Access"
      },
      {
        "id": "4009017",
        "text": "Secretions/Blood/Vomit"
      },
      {
        "id": "4009019",
        "text": "Unable to Position or Access Patient"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "Date/TimeDecisiontoManagethePatientwithanInvasiveAirway": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.10",
    "NemsisName": "Date/Time Decision to Manage the Patient with an Invasive Airway",
    "ElementTitle": "Date/Time Decision to Manage the Patient with an Invasive Airway",
    "ngModel": "Date/TimeDecisiontoManagethePatientwithanInvasiveAirway",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date and time the decision was made to manage the patient's airway with an invasive airway device.",
    "Usage": "Optional",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "Date/TimeInvasiveAirwayPlacementAttemptsAbandoned": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eAirway.11",
    "NemsisName": "Date/Time Invasive Airway Placement Attempts Abandoned",
    "ElementTitle": "Date/Time Invasive Airway Placement Attempts Abandoned",
    "ngModel": "Date/TimeInvasiveAirwayPlacementAttemptsAbandoned",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date and time that the invasive airway attempts were abandoned for the patient.",
    "Usage": "Optional",
    "V3Changes": "Added to better document airway management.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "Date/TimeofEvent(perMedicalDevice)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.02",
    "NemsisName": "Date/Time of Event (per Medical Device)",
    "ElementTitle": "Date/Time of Event (per Medical Device)",
    "ngModel": "Date/TimeofEvent(perMedicalDevice)",
    "V2Number": "E21_01",
    "National": "",
    "State": "",
    "Definition": "The time of the event recorded by the device's internal clock",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceEventType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.03",
    "NemsisName": "Medical Device Event Type",
    "ElementTitle": "Medical Device Event Type",
    "ngModel": "MedicalDeviceEventType",
    "V2Number": "E21_02",
    "National": "",
    "State": "",
    "Definition": "The type of event documented by the medical device.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "MedicalDeviceEventType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4103001",
        "text": "12-Lead ECG"
      },
      {
        "id": "4103003",
        "text": "Analysis (Button Pressed)"
      },
      {
        "id": "4103005",
        "text": "CO2"
      },
      {
        "id": "4103007",
        "text": "Date Transmitted"
      },
      {
        "id": "4103009",
        "text": "Defibrillation"
      },
      {
        "id": "4103011",
        "text": "ECG-Monitor"
      },
      {
        "id": "4103013",
        "text": "Heart Rate"
      },
      {
        "id": "4103015",
        "text": "Invasive Pressure 1"
      },
      {
        "id": "4103017",
        "text": "Invasive Pressure 2"
      },
      {
        "id": "4103019",
        "text": "No Shock Advised"
      },
      {
        "id": "4103021",
        "text": "Non-Invasive BP"
      },
      {
        "id": "4103023",
        "text": "Other"
      },
      {
        "id": "4103025",
        "text": "Pacing Electrical Capture"
      },
      {
        "id": "4103027",
        "text": "Pacing Started"
      },
      {
        "id": "4103029",
        "text": "Pacing Stopped"
      },
      {
        "id": "4103031",
        "text": "Patient Connected"
      },
      {
        "id": "4103033",
        "text": "Power On"
      },
      {
        "id": "4103035",
        "text": "Pulse Oximetry"
      },
      {
        "id": "4103037",
        "text": "Pulse Rate"
      },
      {
        "id": "4103039",
        "text": "Respiratory Rate"
      },
      {
        "id": "4103041",
        "text": "Shock Advised"
      },
      {
        "id": "4103043",
        "text": "Sync Off"
      },
      {
        "id": "4103045",
        "text": "Sync On"
      },
      {
        "id": "4103047",
        "text": "Temperature 1"
      },
      {
        "id": "4103049",
        "text": "Temperature 2"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "MedicalDeviceWaveformGraphicType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.04",
    "NemsisName": "Medical Device Waveform Graphic Type",
    "ElementTitle": "Medical Device Waveform Graphic Type",
    "ngModel": "MedicalDeviceWaveformGraphicType",
    "V2Number": "E21_03",
    "National": "",
    "State": "",
    "Definition": "The description of the waveform file stored in Waveform Graphic (eDevice.05).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GraphicType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceWaveformGraphic": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.05",
    "NemsisName": "Medical Device Waveform Graphic",
    "ElementTitle": "Medical Device Waveform Graphic",
    "ngModel": "MedicalDeviceWaveformGraphic",
    "V2Number": "E21_04",
    "National": "",
    "State": "",
    "Definition": "The graphic waveform file.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "WaveformGraphic",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "MedicalDeviceMode(Manual,AED,Pacing,CO2,O2,etc)": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.06",
    "NemsisName": "Medical Device Mode (Manual, AED, Pacing, CO2, O2, etc)",
    "ElementTitle": "Medical Device Mode (Manual, AED, Pacing, CO2, O2, etc)",
    "ngModel": "MedicalDeviceMode(Manual,AED,Pacing,CO2,O2,etc)",
    "V2Number": "E21_05",
    "National": "",
    "State": "",
    "Definition": "The mode of operation the device is operating in during the defibrillation, pacing, or rhythm analysis by the device (if appropriate for the event)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "AEDPacingOrCO2Mode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4106001",
        "text": "Advisory"
      },
      {
        "id": "4106003",
        "text": "Automated"
      },
      {
        "id": "4106005",
        "text": "Demand"
      },
      {
        "id": "4106007",
        "text": "Manual"
      },
      {
        "id": "4106009",
        "text": "Mid-Stream"
      },
      {
        "id": "4106011",
        "text": "Sensing"
      },
      {
        "id": "4106013",
        "text": "Side-Stream"
      }
    ],
    "attributes": []
  },
  "MedicalDeviceECGLead": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.07",
    "NemsisName": "Medical Device ECG Lead",
    "ElementTitle": "Medical Device ECG Lead",
    "ngModel": "MedicalDeviceECGLead",
    "V2Number": "E21_06",
    "National": "",
    "State": "",
    "Definition": "The lead or source which the medical device used to obtain the rhythm (if appropriate for the event)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "ECGLead",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4107001",
        "text": "I"
      },
      {
        "id": "4107003",
        "text": "II"
      },
      {
        "id": "4107005",
        "text": "III"
      },
      {
        "id": "4107007",
        "text": "AVR"
      },
      {
        "id": "4107009",
        "text": "AVL"
      },
      {
        "id": "4107011",
        "text": "AVF"
      },
      {
        "id": "4107013",
        "text": "Paddle"
      },
      {
        "id": "4107015",
        "text": "Pads"
      },
      {
        "id": "4107017",
        "text": "V1"
      },
      {
        "id": "4107019",
        "text": "V2"
      },
      {
        "id": "4107021",
        "text": "V3"
      },
      {
        "id": "4107023",
        "text": "V3r"
      },
      {
        "id": "4107025",
        "text": "V4"
      },
      {
        "id": "4107027",
        "text": "V4r"
      },
      {
        "id": "4107029",
        "text": "V5"
      },
      {
        "id": "4107031",
        "text": "V5r"
      },
      {
        "id": "4107033",
        "text": "V6"
      },
      {
        "id": "4107035",
        "text": "V6r"
      },
      {
        "id": "4107037",
        "text": "V7"
      },
      {
        "id": "4107039",
        "text": "V8"
      },
      {
        "id": "4107041",
        "text": "V9"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "MedicalDeviceECGInterpretation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.08",
    "NemsisName": "Medical Device ECG Interpretation",
    "ElementTitle": "Medical Device ECG Interpretation",
    "ngModel": "MedicalDeviceECGInterpretation",
    "V2Number": "E21_07",
    "National": "",
    "State": "",
    "Definition": "The interpretation of the rhythm by the device (if appropriate for the event)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ECGInterpretation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "2000",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TypeofShock": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.09",
    "NemsisName": "Type of Shock",
    "ElementTitle": "Type of Shock",
    "ngModel": "TypeofShock",
    "V2Number": "E21_08",
    "National": "",
    "State": "",
    "Definition": "The type of shock used by the device for the defibrillation (if appropriate for the event)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TypeOfShock",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4109001",
        "text": "Biphasic"
      },
      {
        "id": "4109003",
        "text": "Monophasic"
      }
    ],
    "attributes": []
  },
  "ShockorPacingEnergy": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.10",
    "NemsisName": "Shock or Pacing Energy",
    "ElementTitle": "Shock or Pacing Energy",
    "ngModel": "ShockorPacingEnergy",
    "V2Number": "E21_09",
    "National": "",
    "State": "",
    "Definition": "The energy (in joules) used for the shock or pacing (if appropriate for the event)",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ShockOrPacingEnergy",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "9000",
    "minExclusive": "",
    "totalDigits": "5",
    "fractionDigits": "1",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TotalNumberofShocksDelivered": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.11",
    "NemsisName": "Total Number of Shocks Delivered",
    "ElementTitle": "Total Number of Shocks Delivered",
    "ngModel": "TotalNumberofShocksDelivered",
    "V2Number": "E21_10",
    "National": "",
    "State": "",
    "Definition": "The number of times the patient was defibrillated, if the patient was defibrillated during the patient encounter.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TotalNumberOfShocks",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "100",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "PacingRate": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDevice.12",
    "NemsisName": "Pacing Rate",
    "ElementTitle": "Pacing Rate",
    "ngModel": "PacingRate",
    "V2Number": "E21_11",
    "National": "",
    "State": "",
    "Definition": "The rate the device was calibrated to pace during the event, if appropriate.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PacingRate",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "1000",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Destination/TransferredTo,Name": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.01",
    "NemsisName": "Destination/Transferred To, Name",
    "ElementTitle": "Destination/Transferred To, Name",
    "ngModel": "Destination/TransferredTo,Name",
    "V2Number": "E20_01",
    "National": "",
    "State": "State",
    "Definition": "The destination the patient was delivered or transferred to.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DestinationTransferredToName",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Destination/TransferredTo,Code": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.02",
    "NemsisName": "Destination/Transferred To, Code",
    "ElementTitle": "Destination/Transferred To, Code",
    "ngModel": "Destination/TransferredTo,Code",
    "V2Number": "E20_02",
    "National": "",
    "State": "State",
    "Definition": "The code of the destination the patient was delivered or transferred to.",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DestinationTransferredToCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DestinationStreetAddress": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.03",
    "NemsisName": "Destination Street Address",
    "ElementTitle": "Destination Street Address",
    "ngModel": "DestinationStreetAddress",
    "V2Number": "E20_03",
    "National": "",
    "State": "State",
    "Definition": "The street address of the destination the patient was delivered or transferred to.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "StreetAddress",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "StreetAddress2"
    ]
  },
  "DestinationCity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.04",
    "NemsisName": "Destination City",
    "ElementTitle": "Destination City",
    "ngModel": "DestinationCity",
    "V2Number": "E20_04",
    "National": "",
    "State": "State",
    "Definition": "The city of the destination the patient was delivered or transferred to (physical address).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CityGnisCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "DestinationState": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.05",
    "NemsisName": "Destination State",
    "ElementTitle": "Destination State",
    "ngModel": "DestinationState",
    "V2Number": "E20_05",
    "National": "National",
    "State": "State",
    "Definition": "The state of the destination the patient was delivered or transferred to.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSIStateCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DestinationCounty": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.06",
    "NemsisName": "Destination County",
    "ElementTitle": "Destination County",
    "ngModel": "DestinationCounty",
    "V2Number": "E20_06",
    "National": "National",
    "State": "State",
    "Definition": "The destination county in which  the patient was delivered or transferred to.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ANSICountyCode",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DestinationZIPCode": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.07",
    "NemsisName": "Destination ZIP Code",
    "ElementTitle": "Destination ZIP Code",
    "ngModel": "DestinationZIPCode",
    "V2Number": "E20_07",
    "National": "National",
    "State": "State",
    "Definition": "The destination ZIP code in which  the patient was delivered or transferred to.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "ZIP",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{5}|[0-9]{5}-[0-9]{4}|[0-9]{5}-[0-9]{5}|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DestinationCountry": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.08",
    "NemsisName": "Destination Country",
    "ElementTitle": "Destination Country",
    "ngModel": "DestinationCountry",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The country of the destination.",
    "Usage": "Optional",
    "V3Changes": "Added for improved international compatibility.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ANSICountryCode",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "2",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "DestinationGPSLocation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.09",
    "NemsisName": "Destination GPS Location",
    "ElementTitle": "Destination GPS Location",
    "ngModel": "DestinationGPSLocation",
    "V2Number": "E20_08",
    "National": "",
    "State": "",
    "Definition": "The destination GPS Coordinates to which  the patient was delivered or transferred to.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GPSLocation",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "(\\+|-)?(90(\\.[0]{1,6})?|([1-8][0-9]|[0-9])(\\.[0-9]{1,6})?),(\\+|-)?(180(\\.[0]{1,6})?|(1[0-7][0-9]|[1-9][0-9]|[0-9])(\\.[0-9]{1,6})?)",
    "options": [],
    "attributes": []
  },
  "DestinationLocationUSNationalGridCoordinates": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.10",
    "NemsisName": "Destination Location US National Grid Coordinates",
    "ElementTitle": "Destination Location US National Grid Coordinates",
    "ngModel": "DestinationLocationUSNationalGridCoordinates",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The US National Grid Coordinates for the Destination Location. This may be the Healthcare Facility US National Grid Coordinates.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "USNG",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[1][0-9][RSTU][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV][0-9]{8}",
    "options": [],
    "attributes": []
  },
  "NumberofPatientsTransportedinthisEMSUnit": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.11",
    "NemsisName": "Number of Patients Transported in this EMS Unit",
    "ElementTitle": "Number of Patients Transported in this EMS Unit",
    "ngModel": "NumberofPatientsTransportedinthisEMSUnit",
    "V2Number": "",
    "National": "",
    "State": "State",
    "Definition": "The number of patients transported by this EMS crew and unit.",
    "Usage": "Recommended",
    "V3Changes": "Added to document multiple patients being transported with the same vehicle and crew.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "NumberOfPatients",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "100",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "Incident/PatientDisposition": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.12",
    "NemsisName": "Incident/Patient Disposition",
    "ElementTitle": "Incident/Patient Disposition",
    "ngModel": "Incident/PatientDisposition",
    "V2Number": "E20_10",
    "National": "National",
    "State": "State",
    "Definition": "Type of disposition treatment and/or transport of the patient by this EMS Unit.",
    "Usage": "Mandatory",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "IncidentPatientDisposition",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4212001",
        "text": "Assist, Agency"
      },
      {
        "id": "4212003",
        "text": "Assist, Public"
      },
      {
        "id": "4212005",
        "text": "Assist, Unit"
      },
      {
        "id": "4212007",
        "text": "Canceled (Prior to Arrival At Scene)"
      },
      {
        "id": "4212009",
        "text": "Canceled on Scene (No Patient Contact)"
      },
      {
        "id": "4212011",
        "text": "Canceled on Scene (No Patient Found)"
      },
      {
        "id": "4212013",
        "text": "Patient Dead at Scene-No Resuscitation Attempted (With Transport)"
      },
      {
        "id": "4212015",
        "text": "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)"
      },
      {
        "id": "4212017",
        "text": "Patient Dead at Scene-Resuscitation Attempted (With Transport)"
      },
      {
        "id": "4212019",
        "text": "Patient Dead at Scene-Resuscitation Attempted (Without Transport)"
      },
      {
        "id": "4212021",
        "text": "Patient Evaluated, No Treatment/Transport Required"
      },
      {
        "id": "4212023",
        "text": "Patient Refused Evaluation/Care (With Transport)"
      },
      {
        "id": "4212025",
        "text": "Patient Refused Evaluation/Care (Without Transport)"
      },
      {
        "id": "4212027",
        "text": "Patient Treated, Released (AMA)"
      },
      {
        "id": "4212029",
        "text": "Patient Treated, Released (per protocol)"
      },
      {
        "id": "4212031",
        "text": "Patient Treated, Transferred Care to Another EMS Unit"
      },
      {
        "id": "4212033",
        "text": "Patient Treated, Transported by this EMS Unit"
      },
      {
        "id": "4212035",
        "text": "Patient Treated, Transported by Law Enforcement"
      },
      {
        "id": "4212037",
        "text": "Patient Treated, Transported by Private Vehicle"
      },
      {
        "id": "4212039",
        "text": "Standby-No Services or Support Provided"
      },
      {
        "id": "4212041",
        "text": "Standby-Public Safety, Fire, or EMS Operational Support Provided"
      },
      {
        "id": "4212043",
        "text": "Transport Non-Patient, Organs, etc."
      }
    ],
    "attributes": []
  },
  "HowPatientWasMovedtoAmbulance": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.13",
    "NemsisName": "How Patient Was Moved to Ambulance",
    "ElementTitle": "How Patient Was Moved to Ambulance",
    "ngModel": "HowPatientWasMovedtoAmbulance",
    "V2Number": "E20_11",
    "National": "",
    "State": "",
    "Definition": "The method the patient was moved to the ambulance from the scene",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "HowPatientWasMovedToFromAmbulance",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9909001",
        "text": "Assisted/Walk"
      },
      {
        "id": "9909003",
        "text": "Backboard"
      },
      {
        "id": "9909005",
        "text": "Chair"
      },
      {
        "id": "9909007",
        "text": "Carried"
      },
      {
        "id": "9909009",
        "text": "Other"
      },
      {
        "id": "9909011",
        "text": "Stairchair"
      },
      {
        "id": "9909013",
        "text": "Stretcher"
      },
      {
        "id": "9909015",
        "text": "Wheelchair"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "PositionofPatientDuringTransport": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.14",
    "NemsisName": "Position of Patient During Transport",
    "ElementTitle": "Position of Patient During Transport",
    "ngModel": "PositionofPatientDuringTransport",
    "V2Number": "E20_12",
    "National": "",
    "State": "",
    "Definition": "The position of the patient during transport from the scene",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PositionOfPatientDuringTransport",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4214001",
        "text": "Car Seat"
      },
      {
        "id": "4214003",
        "text": "Fowlers (Semi-Upright Sitting)"
      },
      {
        "id": "4214005",
        "text": "Lateral Left"
      },
      {
        "id": "4214007",
        "text": "Lateral Right"
      },
      {
        "id": "4214009",
        "text": "Other"
      },
      {
        "id": "4214011",
        "text": "Prone"
      },
      {
        "id": "4214013",
        "text": "Semi-Fowlers"
      },
      {
        "id": "4214015",
        "text": "Sitting"
      },
      {
        "id": "4214017",
        "text": "Supine"
      },
      {
        "id": "4214019",
        "text": "Trendelenburg"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "HowPatientWasTransportedFromAmbulance": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.15",
    "NemsisName": "How Patient Was Transported From Ambulance",
    "ElementTitle": "How Patient Was Transported From Ambulance",
    "ngModel": "HowPatientWasTransportedFromAmbulance",
    "V2Number": "E20_13",
    "National": "",
    "State": "",
    "Definition": "The method the patient was moved from the ambulance to the destination",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "HowPatientWasMovedToFromAmbulance",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9909001",
        "text": "Assisted/Walk"
      },
      {
        "id": "9909003",
        "text": "Backboard"
      },
      {
        "id": "9909005",
        "text": "Chair"
      },
      {
        "id": "9909007",
        "text": "Carried"
      },
      {
        "id": "9909009",
        "text": "Other"
      },
      {
        "id": "9909011",
        "text": "Stairchair"
      },
      {
        "id": "9909013",
        "text": "Stretcher"
      },
      {
        "id": "9909015",
        "text": "Wheelchair"
      }
    ],
    "attributes": []
  },
  "EMSTransportMethod": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.16",
    "NemsisName": "EMS Transport Method",
    "ElementTitle": "EMS Transport Method",
    "ngModel": "EMSTransportMethod",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Transport method by this EMS Unit.",
    "Usage": "Required",
    "V3Changes": "Added to better describe Air and Ground Transport methods.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EMSTransportMethod",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4216001",
        "text": "Air Medical-Fixed Wing"
      },
      {
        "id": "4216003",
        "text": "Air Medical-Rotor Craft"
      },
      {
        "id": "4216005",
        "text": "Ground-Ambulance"
      },
      {
        "id": "4216007",
        "text": "Ground-ATV or Rescue Vehicle"
      },
      {
        "id": "4216009",
        "text": "Ground-Bariatric"
      },
      {
        "id": "4216011",
        "text": "Ground-Other Not Listed"
      },
      {
        "id": "4216013",
        "text": "Ground-Mass Casualty Bus/Vehicle"
      },
      {
        "id": "4216015",
        "text": "Ground-Wheelchair Van"
      },
      {
        "id": "4216017",
        "text": "Water-Boat"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "TransportModefromScene": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.17",
    "NemsisName": "Transport Mode from Scene",
    "ElementTitle": "Transport Mode from Scene",
    "ngModel": "TransportModefromScene",
    "V2Number": "E20_14",
    "National": "National",
    "State": "State",
    "Definition": "Indication whether the transport was emergent or non-emergent.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TransportModeFromScene",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4217001",
        "text": "Emergent (Immediate Response)"
      },
      {
        "id": "4217003",
        "text": "Emergent Downgraded to Non-Emergent"
      },
      {
        "id": "4217005",
        "text": "Non-Emergent"
      },
      {
        "id": "4217007",
        "text": "Non-Emergent Upgraded to Emergent"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "AdditionalTransportModeDescriptors": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.18",
    "NemsisName": "Additional Transport Mode Descriptors",
    "ElementTitle": "Additional Transport Mode Descriptors",
    "ngModel": "AdditionalTransportModeDescriptors",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The documentation of transport mode techniques for this EMS response.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "AdditionalTransportModeDescriptors",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4218001",
        "text": "Intersection Navigation-Against Normal Light Patterns"
      },
      {
        "id": "4218003",
        "text": "Intersection Navigation-With Automated Light Changing Technology"
      },
      {
        "id": "4218005",
        "text": "Intersection Navigation-With Normal Light Patterns"
      },
      {
        "id": "4218007",
        "text": "Speed-Enhanced per Local Policy"
      },
      {
        "id": "4218009",
        "text": "Speed-Normal Traffic"
      },
      {
        "id": "4218011",
        "text": "Lights and Sirens"
      },
      {
        "id": "4218013",
        "text": "Lights and No Sirens"
      },
      {
        "id": "4218015",
        "text": "No Lights or Sirens"
      },
      {
        "id": "4218017",
        "text": "Initial No Lights or Sirens, Upgraded to Lights and Sirens"
      },
      {
        "id": "4218019",
        "text": "Initial Lights and Sirens, Downgraded to No Lights or Sirens"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "FinalPatientAcuity": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.19",
    "NemsisName": "Final Patient Acuity",
    "ElementTitle": "Final Patient Acuity",
    "ngModel": "FinalPatientAcuity",
    "V2Number": "E20_15",
    "National": "National",
    "State": "State",
    "Definition": "The acuity of the patient's condition after EMS care.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "FinalPatientAcuity",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4219001",
        "text": "Critical (Red)"
      },
      {
        "id": "4219003",
        "text": "Emergent (Yellow)"
      },
      {
        "id": "4219005",
        "text": "Lower Acuity (Green)"
      },
      {
        "id": "4219007",
        "text": "Dead without Resuscitation Efforts (Black)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ReasonforChoosingDestination": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.20",
    "NemsisName": "Reason for Choosing Destination",
    "ElementTitle": "Reason for Choosing Destination",
    "ngModel": "ReasonforChoosingDestination",
    "V2Number": "E20_16",
    "National": "National",
    "State": "State",
    "Definition": "The reason the unit chose to deliver or transfer the patient to the destination",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "ReasonForChoosingDestination",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4220001",
        "text": "Closest Facility"
      },
      {
        "id": "4220003",
        "text": "Diversion"
      },
      {
        "id": "4220005",
        "text": "Family Choice"
      },
      {
        "id": "4220007",
        "text": "Insurance Status/Requirement"
      },
      {
        "id": "4220009",
        "text": "Law Enforcement Choice"
      },
      {
        "id": "4220011",
        "text": "On-Line/On-Scene Medical Direction"
      },
      {
        "id": "4220013",
        "text": "Other"
      },
      {
        "id": "4220015",
        "text": "Patient's Choice"
      },
      {
        "id": "4220017",
        "text": "Patient's Physician's Choice"
      },
      {
        "id": "4220019",
        "text": "Protocol"
      },
      {
        "id": "4220021",
        "text": "Regional Specialty Center"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "TypeofDestination": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.21",
    "NemsisName": "Type of Destination",
    "ElementTitle": "Type of Destination",
    "ngModel": "TypeofDestination",
    "V2Number": "E20_17",
    "National": "National",
    "State": "State",
    "Definition": "The type of destination the patient was delivered or transferred to",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "TypeOfDestination",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4221001",
        "text": "Home"
      },
      {
        "id": "4221003",
        "text": "Hospital-Emergency Department"
      },
      {
        "id": "4221005",
        "text": "Hospital-Non-Emergency Department Bed"
      },
      {
        "id": "4221007",
        "text": "Medical Office/Clinic"
      },
      {
        "id": "4221009",
        "text": "Morgue/Mortuary"
      },
      {
        "id": "4221011",
        "text": "Nursing Home/Assisted Living Facility"
      },
      {
        "id": "4221013",
        "text": "Other"
      },
      {
        "id": "4221015",
        "text": "Other EMS Responder (air)"
      },
      {
        "id": "4221017",
        "text": "Other EMS Responder (ground)"
      },
      {
        "id": "4221019",
        "text": "Police/Jail"
      },
      {
        "id": "4221021",
        "text": "Urgent Care"
      },
      {
        "id": "4221023",
        "text": "Freestanding Emergency Department"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "HospitalIn-PatientDestination": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.22",
    "NemsisName": "Hospital In-Patient Destination",
    "ElementTitle": "Hospital In-Patient Destination",
    "ngModel": "HospitalIn-PatientDestination",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The location within the hospital that the patient was taken directly by EMS (e.g., Cath Lab, ICU, etc.).",
    "Usage": "Required",
    "V3Changes": "Added to identify the location within the hospital that the patient was directly taken to by EMS.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "HospitalInPatientDestination",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4222001",
        "text": "Hospital-Burn"
      },
      {
        "id": "4222003",
        "text": "Hospital-Cath Lab"
      },
      {
        "id": "4222005",
        "text": "Hospital-CCU"
      },
      {
        "id": "4222007",
        "text": "Hospital-Endoscopy"
      },
      {
        "id": "4222009",
        "text": "Hospital-Hospice"
      },
      {
        "id": "4222011",
        "text": "Hospital-Hyperbaric Oxygen Treatment"
      },
      {
        "id": "4222013",
        "text": "Hospital-ICU"
      },
      {
        "id": "4222015",
        "text": "Hospital-Labor &amp; Delivery"
      },
      {
        "id": "4222017",
        "text": "Hospital-Med/Surg"
      },
      {
        "id": "4222019",
        "text": "Hospital-Mental Health"
      },
      {
        "id": "4222021",
        "text": "Hospital-MICU"
      },
      {
        "id": "4222023",
        "text": "Hospital-NICU"
      },
      {
        "id": "4222025",
        "text": "Hospital-Nursery"
      },
      {
        "id": "4222027",
        "text": "Hospital-Peds (General)"
      },
      {
        "id": "4222029",
        "text": "Hospital-Peds ICU"
      },
      {
        "id": "4222031",
        "text": "Hospital-OR"
      },
      {
        "id": "4222033",
        "text": "Hospital-Orthopedic"
      },
      {
        "id": "4222035",
        "text": "Hospital-Other"
      },
      {
        "id": "4222037",
        "text": "Hospital-Out-Patient Bed"
      },
      {
        "id": "4222039",
        "text": "Hospital-Radiology Services - MRI"
      },
      {
        "id": "4222041",
        "text": "Hospital-Radiology Services - CT/PET"
      },
      {
        "id": "4222043",
        "text": "Hospital-Radiology Services - X-Ray"
      },
      {
        "id": "4222045",
        "text": "Hospital-Radiation"
      },
      {
        "id": "4222047",
        "text": "Hospital-Rehab"
      },
      {
        "id": "4222049",
        "text": "Hospital-SICU"
      },
      {
        "id": "4222051",
        "text": "Hospital-Oncology"
      },
      {
        "id": "4222053",
        "text": "Hospital-Outpatient Surgery"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "HospitalCapability": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.23",
    "NemsisName": "Hospital Capability",
    "ElementTitle": "Hospital Capability",
    "ngModel": "HospitalCapability",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The primary hospital capability associated with the patient's condition for this transport (e.g., Trauma, STEMI, Peds, etc.).",
    "Usage": "Required",
    "V3Changes": "Added to aid in determining if patients are transported to the appropriate hospital based on provider impression, assessment, and treatment.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "HospitalDesignation",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9908001",
        "text": "Behavioral Health"
      },
      {
        "id": "9908003",
        "text": "Burn Center"
      },
      {
        "id": "9908005",
        "text": "Critical Access Hospital"
      },
      {
        "id": "9908007",
        "text": "Hospital (General)"
      },
      {
        "id": "9908009",
        "text": "Neonatal Center"
      },
      {
        "id": "9908011",
        "text": "Pediatric Center"
      },
      {
        "id": "9908017",
        "text": "Stroke Center"
      },
      {
        "id": "9908019",
        "text": "Rehab Center"
      },
      {
        "id": "9908021",
        "text": "Trauma Center Level 1"
      },
      {
        "id": "9908023",
        "text": "Trauma Center Level 2"
      },
      {
        "id": "9908025",
        "text": "Trauma Center Level 3"
      },
      {
        "id": "9908027",
        "text": "Trauma Center Level 4"
      },
      {
        "id": "9908029",
        "text": "Trauma Center Level 5"
      },
      {
        "id": "9908031",
        "text": "Cardiac-STEMI/PCI Capable"
      },
      {
        "id": "9908033",
        "text": "Cardiac-STEMI/PCI Capable (24/7)"
      },
      {
        "id": "9908035",
        "text": "Cardiac-STEMI/Non-PCI Capable"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "DestinationTeamPre-ArrivalAlertorActivation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.24",
    "NemsisName": "Destination Team Pre-Arrival Alert or Activation",
    "ElementTitle": "Destination Team Pre-Arrival Alert or Activation",
    "ngModel": "DestinationTeamPre-ArrivalAlertorActivation",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "Indication that an alert (or activation) was called by EMS to the appropriate destination healthcare facility team. The alert (or activation) should occur prior to the EMS Unit arrival at the destination with the patient.",
    "Usage": "Required",
    "V3Changes": "Added to better document performance measure for acute time dependent illness and injury systems of care.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DestinationPrearrivalActivation",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4224001",
        "text": "No"
      },
      {
        "id": "4224003",
        "text": "Yes-Adult Trauma"
      },
      {
        "id": "4224005",
        "text": "Yes-Cardiac Arrest"
      },
      {
        "id": "4224007",
        "text": "Yes-Obstetrics"
      },
      {
        "id": "4224009",
        "text": "Yes-Other"
      },
      {
        "id": "4224011",
        "text": "Yes-Pediatric Trauma"
      },
      {
        "id": "4224013",
        "text": "Yes-STEMI"
      },
      {
        "id": "4224015",
        "text": "Yes-Stroke"
      },
      {
        "id": "4224017",
        "text": "Yes-Trauma (General)"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "Date/TimeofDestinationPrearrivalAlertorActivation": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.25",
    "NemsisName": "Date/Time of Destination Prearrival Alert or Activation",
    "ElementTitle": "Date/Time of Destination Prearrival Alert or Activation",
    "ngModel": "Date/TimeofDestinationPrearrivalAlertorActivation",
    "V2Number": "",
    "National": "National",
    "State": "State",
    "Definition": "The Date/Time EMS alerted, notified, or activated the Destination Healthcare Facility prior to EMS arrival. The EMS assessment identified the patient as acutely ill or injured based on exam and possibly specified alert criteria.",
    "Usage": "Required",
    "V3Changes": "Added to better document performance measure for acute time dependent illness and injury systems of care.",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "DateTimeType",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "DispositionInstructionsProvided": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eDisposition.26",
    "NemsisName": "Disposition Instructions Provided",
    "ElementTitle": "Disposition Instructions Provided",
    "ngModel": "DispositionInstructionsProvided",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Information provided to patient during disposition for patients not transported or treated.",
    "Usage": "Optional",
    "V3Changes": "Added to better document instructions given to patients not transported by EMS.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "DispositionInstruction",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4226001",
        "text": "Contact 911 or see your Doctor if problem returns"
      },
      {
        "id": "4226003",
        "text": "Contact 911 or see your Doctor if problem worsens"
      },
      {
        "id": "4226005",
        "text": "Other Not Listed (Described in Narrative)"
      },
      {
        "id": "4226007",
        "text": "Problem Specific Instructions Provided"
      },
      {
        "id": "4226009",
        "text": "See Your Doctor or the Emergency Department immediately"
      },
      {
        "id": "4226011",
        "text": "See Your Doctor or the Emergency Department in the next 24 hours"
      },
      {
        "id": "4226013",
        "text": "See Your Doctor or the Emergency Department in the next 4 hours"
      },
      {
        "id": "4226015",
        "text": "See Your Doctor within the next one week"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EmergencyDepartmentDisposition": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.01",
    "NemsisName": "Emergency Department Disposition",
    "ElementTitle": "Emergency Department Disposition",
    "ngModel": "EmergencyDepartmentDisposition",
    "V2Number": "E22_01",
    "National": "National",
    "State": "State",
    "Definition": "The known disposition of the patient from the Emergency Department (ED)",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "EmergencyDepartmentDisposition",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "01",
        "text": "Discharged to home or self care (routine discharge)"
      },
      {
        "id": "02",
        "text": "Discharged/transferred to another short term general hospital for inpatient care"
      },
      {
        "id": "03",
        "text": "Discharged/transferred to a skilled nursing facility (SNF)"
      },
      {
        "id": "04",
        "text": "Discharged/transferred to an intermediate care facility (ICF)"
      },
      {
        "id": "05",
        "text": "Discharged/transferred to another type of institution not defined elsewhere in this code list"
      },
      {
        "id": "06",
        "text": "Discharged/transferred to home under care of organized home health service organization in anticipation of covered skills care"
      },
      {
        "id": "07",
        "text": "Left against medical advice or discontinued care"
      },
      {
        "id": "09",
        "text": "Admitted as an inpatient to this hospital."
      },
      {
        "id": "20",
        "text": "Deceased/Expired (or did not recover - Religious Non Medical Health Care Patient)"
      },
      {
        "id": "21",
        "text": "Discharged/transferred to court/law enforcement"
      },
      {
        "id": "30",
        "text": "Still a patient or expected to return for outpatient services."
      },
      {
        "id": "43",
        "text": "Discharged/transferred to a Federal Health Care Facility (e.g., VA or federal health care facility)"
      },
      {
        "id": "50",
        "text": "Discharged/transferred to Hospice - home."
      },
      {
        "id": "51",
        "text": "Discharged/transferred to Hospice - medical facility"
      },
      {
        "id": "61",
        "text": "Discharged/transferred within this institution to a hospital based Medicare approved swing bed."
      },
      {
        "id": "62",
        "text": "Discharged/transferred to a inpatient rehabilitation facility including distinct part units of a hospital."
      },
      {
        "id": "63",
        "text": "Discharged/transferred to long term care hospitals"
      },
      {
        "id": "64",
        "text": "Discharged/transferred to a nursing facility certified under Medicaid but not certified under Medicare"
      },
      {
        "id": "65",
        "text": "Discharged/transferred to a psychiatric hospital or psychiatric distinct part unit of a hospital."
      },
      {
        "id": "66",
        "text": "Discharged/transferred to a Critical Access Hospital (CAH)."
      },
      {
        "id": "70",
        "text": "Discharged/transferred to another type of health care institution not defined elsewhere in the code list."
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "HospitalDisposition": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.02",
    "NemsisName": "Hospital Disposition",
    "ElementTitle": "Hospital Disposition",
    "ngModel": "HospitalDisposition",
    "V2Number": "E22_02",
    "National": "National",
    "State": "State",
    "Definition": "The known disposition of the patient from the hospital, if admitted.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "HospitalDisposition",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "01",
        "text": "Discharged to home or self care (routine discharge)"
      },
      {
        "id": "02",
        "text": "Discharged/transferred to another short term general hospital for inpatient care"
      },
      {
        "id": "03",
        "text": "Discharged/transferred to a skilled nursing facility (SNF)"
      },
      {
        "id": "04",
        "text": "Discharged/transferred to an intermediate care facility (ICF)"
      },
      {
        "id": "05",
        "text": "Discharged/transferred to another type of institution not defined elsewhere in this code list"
      },
      {
        "id": "06",
        "text": "Discharged/transferred to home under care of organized home health service organization in anticipation of covered skills care"
      },
      {
        "id": "07",
        "text": "Left against medical advice or discontinued care"
      },
      {
        "id": "20",
        "text": "Deceased/Expired (or did not recover - Religious Non Medical Health Care Patient)"
      },
      {
        "id": "21",
        "text": "Discharged/transferred to court/law enforcement"
      },
      {
        "id": "30",
        "text": "Still a patient or expected to return for outpatient services."
      },
      {
        "id": "43",
        "text": "Discharged/transferred to a Federal Health Care Facility (e.g., VA or federal health care facility)"
      },
      {
        "id": "50",
        "text": "Discharged/transferred to Hospice - home."
      },
      {
        "id": "51",
        "text": "Discharged/transferred to Hospice - medical facility"
      },
      {
        "id": "61",
        "text": "Discharged/transferred within this institution to a hospital based Medicare approved swing bed."
      },
      {
        "id": "62",
        "text": "Discharged/transferred to a inpatient rehabilitation facility including distinct part units of a hospital."
      },
      {
        "id": "63",
        "text": "Discharged/transferred to long term care hospitals"
      },
      {
        "id": "64",
        "text": "Discharged/transferred to a nursing facility certified under Medicaid but not certified under Medicare"
      },
      {
        "id": "65",
        "text": "Discharged/transferred to a psychiatric hospital or psychiatric distinct part unit of a hospital."
      },
      {
        "id": "66",
        "text": "Discharged/transferred to a Critical Access Hospital (CAH)."
      },
      {
        "id": "70",
        "text": "Discharged/transferred to another type of health care institution not defined elsewhere in the code list."
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "ExternalReportID/NumberType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.03",
    "NemsisName": "External Report ID/Number Type",
    "ElementTitle": "External Report ID/Number Type",
    "ngModel": "ExternalReportID/NumberType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The Type of External Report or Record associated with the Report/ID Number.",
    "Usage": "Optional",
    "V3Changes": "Added to allow documentation of external record and identification numbers.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ExternalReportIDType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4303001",
        "text": "Disaster Tag"
      },
      {
        "id": "4303003",
        "text": "Fire Incident Report"
      },
      {
        "id": "4303005",
        "text": "Hospital-Receiving"
      },
      {
        "id": "4303007",
        "text": "Hospital-Transferring"
      },
      {
        "id": "4303009",
        "text": "Law Enforcement Report"
      },
      {
        "id": "4303011",
        "text": "Other"
      },
      {
        "id": "4303013",
        "text": "Other Registry"
      },
      {
        "id": "4303015",
        "text": "Other Report"
      },
      {
        "id": "4303017",
        "text": "Patient ID"
      },
      {
        "id": "4303019",
        "text": "Prior EMS Patient Care Report"
      },
      {
        "id": "4303021",
        "text": "STEMI Registry"
      },
      {
        "id": "4303023",
        "text": "Stroke Registry"
      },
      {
        "id": "4303025",
        "text": "Trauma Registry"
      }
    ],
    "attributes": []
  },
  "ExternalReportID/Number": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.04",
    "NemsisName": "External Report ID/Number",
    "ElementTitle": "External Report ID/Number",
    "ngModel": "ExternalReportID/Number",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The ID or Number of the external report or record in eOutcome.03.",
    "Usage": "Optional",
    "V3Changes": "Added to allow documentation of external record and identification numbers.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ExternalReportID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "OtherReportRegistryType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.05",
    "NemsisName": "Other Report Registry Type",
    "ElementTitle": "Other Report Registry Type",
    "ngModel": "OtherReportRegistryType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The type of external report/registry that was documented as \"other\" in eOutcome.03",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OtherReportRegistryType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EmergencyDepartmentChiefComplaint": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.06",
    "NemsisName": "Emergency Department Chief Complaint",
    "ElementTitle": "Emergency Department Chief Complaint",
    "ngModel": "EmergencyDepartmentChiefComplaint",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The patient's reason for seeking care or attention, expressed in the terms as close as possible to those used by the patient or responsible informant.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS patient care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "EmergencyDepartmentChiefComplaint",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "100",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FirstEDSystolicBloodPressure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.07",
    "NemsisName": "First ED Systolic Blood Pressure",
    "ElementTitle": "First ED Systolic Blood Pressure",
    "ngModel": "FirstEDSystolicBloodPressure",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The first recorded Emergency Department Systolic Blood Pressure.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate the outcome of EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SBP",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "0",
    "maxInclusive": "500",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "EmergencyDepartmentRecordedCauseofInjury": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.08",
    "NemsisName": "Emergency Department Recorded Cause of Injury",
    "ElementTitle": "Emergency Department Recorded Cause of Injury",
    "ngModel": "EmergencyDepartmentRecordedCauseofInjury",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The documented cause of injury from the emergency department record.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "icd10CodeInjury",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "([TV-Y][0-9]{2})((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": []
  },
  "EmergencyDepartmentProcedures": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.09",
    "NemsisName": "Emergency Department Procedures",
    "ElementTitle": "Emergency Department Procedures",
    "ngModel": "EmergencyDepartmentProcedures",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The procedures performed on the patient during the emergency department visit.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "icd10CodeOutcomeProcedures",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9A-HJ-NP-Z]{3,7}",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EmergencyDepartmentDiagnosis": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.10",
    "NemsisName": "Emergency Department Diagnosis",
    "ElementTitle": "Emergency Department Diagnosis",
    "ngModel": "EmergencyDepartmentDiagnosis",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The practitioner's description of the condition or problem for which Emergency Department services were provided.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "icd10Code",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[A-Z][0-9][0-9A-Z]((\\.[0-9A-Z]{1,3})?)",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "Date/TimeofHospitalAdmission": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.11",
    "NemsisName": "Date/Time of Hospital Admission",
    "ElementTitle": "Date/Time of Hospital Admission",
    "ngModel": "Date/TimeofHospitalAdmission",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date and time the patient was admitted to the hospital.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "HospitalProcedures": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.12",
    "NemsisName": "Hospital Procedures",
    "ElementTitle": "Hospital Procedures",
    "ngModel": "HospitalProcedures",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Hospital Procedures performed on the patient during the hospital admission.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "icd10CodeOutcomeProcedures",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9A-HJ-NP-Z]{3,7}",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "HospitalDiagnosis": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.13",
    "NemsisName": "Hospital Diagnosis",
    "ElementTitle": "Hospital Diagnosis",
    "ngModel": "HospitalDiagnosis",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The hospital diagnosis of the patient associated with the hospital admission.",
    "Usage": "Optional",
    "V3Changes": "Added to better evaluate EMS care.",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "icd10CodeOutcomeDiagnosis",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[A-Z][0-9][0-9A-Z]((\\.[0-9A-Z]{1,4})?)",
    "options": [],
    "attributes": [
      "CorrelationID"
    ]
  },
  "TotalICULengthofStay": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.14",
    "NemsisName": "Total ICU Length of Stay",
    "ElementTitle": "Total ICU Length of Stay",
    "ngModel": "TotalICULengthofStay",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The total number of patient days in any ICU (including all ICU episodes).",
    "Usage": "Optional",
    "V3Changes": "Added to better measure patient outcomes.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "LengthOfStay",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "400",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TotalVentilatorDays": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.15",
    "NemsisName": "Total Ventilator Days",
    "ElementTitle": "Total Ventilator Days",
    "ngModel": "TotalVentilatorDays",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The total number of patient days spend on a mechanical ventilator (excluding time in the operating room).",
    "Usage": "Optional",
    "V3Changes": "Added to better measure and define patient outcome.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "TotalVentilatorDays",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1",
    "maxInclusive": "400",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Date/TimeofHospitalDischarge": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.16",
    "NemsisName": "Date/Time of Hospital Discharge",
    "ElementTitle": "Date/Time of Hospital Discharge",
    "ngModel": "Date/TimeofHospitalDischarge",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date the patient was discharged from the hospital.",
    "Usage": "Optional",
    "V3Changes": "Added to better measure patient outcome.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "OutcomeatHospitalDischarge": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOutcome.17",
    "NemsisName": "Outcome at Hospital Discharge",
    "ElementTitle": "Outcome at Hospital Discharge",
    "ngModel": "OutcomeatHospitalDischarge",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The patient's functional status at time of hospital discharge.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "OutcomeAtHospitalDischarge",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4317001",
        "text": "No Symptoms At All"
      },
      {
        "id": "4317003",
        "text": "No significant disability despite symptoms; able to carry out all usual duties and activities"
      },
      {
        "id": "4317005",
        "text": "Slight disability; unable to carry out all previous activities, but able to look after own affairs without assistance"
      },
      {
        "id": "4317007",
        "text": "Moderate disability; requiring some help, but able to walk without assistance"
      },
      {
        "id": "4317009",
        "text": "Moderately severe disability; unable to walk without assistance and unable to attend to own bodily needs without assistance"
      },
      {
        "id": "4317011",
        "text": "Severe disability; bedridden, incontinent and requiring constant nursing care and attention"
      },
      {
        "id": "4317013",
        "text": "Dead"
      }
    ],
    "attributes": []
  },
  "CorrelationIDofPatientCareReportElementorGroup": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eCustomResults.03",
    "NemsisName": "CorrelationID of PatientCareReport Element or Group",
    "ElementTitle": "CorrelationID of PatientCareReport Element or Group",
    "ngModel": "CorrelationIDofPatientCareReportElementorGroup",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "References the CorrelationID attribute of an element or group in the PatientCareReport section",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CorrelationID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "0",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "ReviewRequested": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.01",
    "NemsisName": "Review Requested",
    "ElementTitle": "Review Requested",
    "ngModel": "ReviewRequested",
    "V2Number": "E23_01",
    "National": "",
    "State": "",
    "Definition": "Indication of whether the PCR needs review by anyone.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "YesNoValues",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": []
  },
  "PotentialSystemofCare/Specialty/RegistryPatient": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.02",
    "NemsisName": "Potential System of Care/Specialty/Registry Patient",
    "ElementTitle": "Potential System of Care/Specialty/Registry Patient",
    "ngModel": "PotentialSystemofCare/Specialty/RegistryPatient",
    "V2Number": "E23_02",
    "National": "",
    "State": "",
    "Definition": "An indication if the patient may meet the entry criteria for an injury or illness specific registry",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PotentialRegistryCandidate",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4502001",
        "text": "Airway"
      },
      {
        "id": "4502003",
        "text": "Burn"
      },
      {
        "id": "4502005",
        "text": "Cardiac/MI"
      },
      {
        "id": "4502007",
        "text": "CVA/Stroke"
      },
      {
        "id": "4502009",
        "text": "Drowning"
      },
      {
        "id": "4502011",
        "text": "Other"
      },
      {
        "id": "4502013",
        "text": "Spinal Cord Injury"
      },
      {
        "id": "4502015",
        "text": "STEMI/Acute Cardiac"
      },
      {
        "id": "4502017",
        "text": "Trauma"
      },
      {
        "id": "4502019",
        "text": "Traumatic Brain Injury"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "PersonalProtectiveEquipmentUsed": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.03",
    "NemsisName": "Personal Protective Equipment Used",
    "ElementTitle": "Personal Protective Equipment Used",
    "ngModel": "PersonalProtectiveEquipmentUsed",
    "V2Number": "E23_03",
    "National": "",
    "State": "",
    "Definition": "The personal protective equipment which was used by EMS personnel during this EMS patient contact.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "PersonalProtectiveEquipmentUsed",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4503001",
        "text": "Eye Protection"
      },
      {
        "id": "4503003",
        "text": "Gloves"
      },
      {
        "id": "4503005",
        "text": "Helmet"
      },
      {
        "id": "4503007",
        "text": "Level A Suit"
      },
      {
        "id": "4503009",
        "text": "Level B Suit"
      },
      {
        "id": "4503011",
        "text": "Level C Suit"
      },
      {
        "id": "4503013",
        "text": "Level D Suit (Turn out gear)"
      },
      {
        "id": "4503015",
        "text": "Mask-N95"
      },
      {
        "id": "4503017",
        "text": "Mask-Surgical (Non-Fitted)"
      },
      {
        "id": "4503019",
        "text": "Other"
      },
      {
        "id": "4503021",
        "text": "PAPR"
      },
      {
        "id": "4503023",
        "text": "Reflective Vest"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "EMSProfessional(CrewMember)ID": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.04",
    "NemsisName": "EMS Professional (Crew Member) ID",
    "ElementTitle": "EMS Professional (Crew Member) ID",
    "ngModel": "EMSProfessional(CrewMember)ID",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The ID number of the EMS Crew Member associated with eOther.03, eOther.05, eOther.06.",
    "Usage": "Optional",
    "V3Changes": "Added to better document EMS workplace health and safety issues.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "CrewMemberID",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SuspectedEMSWorkRelatedExposure,Injury,orDeath": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.05",
    "NemsisName": "Suspected EMS Work Related Exposure, Injury, or Death",
    "ElementTitle": "Suspected EMS Work Related Exposure, Injury, or Death",
    "ngModel": "SuspectedEMSWorkRelatedExposure,Injury,orDeath",
    "V2Number": "E23_05",
    "National": "National",
    "State": "State",
    "Definition": "Indication of an EMS work related exposure, injury, or death associated with this EMS event.",
    "Usage": "Required",
    "V3Changes": "",
    "MinOccurs": "1",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "YesNoValues",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "9923001",
        "text": "No"
      },
      {
        "id": "9923003",
        "text": "Yes"
      }
    ],
    "attributes": [
      "NV"
    ]
  },
  "TheTypeofWork-RelatedInjury,DeathorSuspectedExposure": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.06",
    "NemsisName": "The Type of Work-Related Injury, Death or Suspected Exposure",
    "ElementTitle": "The Type of Work-Related Injury, Death or Suspected Exposure",
    "ngModel": "TheTypeofWork-RelatedInjury,DeathorSuspectedExposure",
    "V2Number": "E23_06",
    "National": "",
    "State": "State",
    "Definition": "The type of exposure or unprotected contact with blood or body fluids",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "Nillable",
    "DataType": "TypeOfSuspectedExposureToBodilyFluids",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4506001",
        "text": "Death-Cardiac Arrest"
      },
      {
        "id": "4506003",
        "text": "Death-Injury Related"
      },
      {
        "id": "4506005",
        "text": "Death-Other"
      },
      {
        "id": "4506007",
        "text": "Exposure-Airborne Respiratory/Biological/Aerosolized Secretions"
      },
      {
        "id": "4506009",
        "text": "Exposure-Body Fluid Contact to Broken Skin"
      },
      {
        "id": "4506011",
        "text": "Exposure-Body Fluid Contact with Eye"
      },
      {
        "id": "4506013",
        "text": "Exposure-Body Fluid Contact with Intact Skin"
      },
      {
        "id": "4506015",
        "text": "Exposure-Body Fluid Contact with Mucosal Surface"
      },
      {
        "id": "4506017",
        "text": "Exposure-Needle Stick with Body Fluid Injection"
      },
      {
        "id": "4506019",
        "text": "Exposure-Needle Stick without Body Fluid Injection"
      },
      {
        "id": "4506021",
        "text": "Exposure-Toxin/Chemical/Hazmat"
      },
      {
        "id": "4506023",
        "text": "Injury-Lifting/Back/Musculoskeletal"
      },
      {
        "id": "4506025",
        "text": "Injury-Other"
      },
      {
        "id": "4506027",
        "text": "None"
      },
      {
        "id": "4506029",
        "text": "Other"
      }
    ],
    "attributes": [
      "NV",
      "CorrelationID"
    ]
  },
  "Natural,Suspected,Intentional,orUnintentionalDisaster": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.07",
    "NemsisName": "Natural, Suspected, Intentional, or Unintentional Disaster",
    "ElementTitle": "Natural, Suspected, Intentional, or Unintentional Disaster",
    "ngModel": "Natural,Suspected,Intentional,orUnintentionalDisaster",
    "V2Number": "E23_04",
    "National": "",
    "State": "",
    "Definition": "Event caused by natural forces or Suspected and Intentional/Unintentional Disasters (terrorism).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "SuspectedIntentionalOrUnintentionalDisaster",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4507001",
        "text": "Biologic Agent"
      },
      {
        "id": "4507003",
        "text": "Building Failure"
      },
      {
        "id": "4507005",
        "text": "Chemical Agent"
      },
      {
        "id": "4507007",
        "text": "Explosive Device"
      },
      {
        "id": "4507009",
        "text": "Fire"
      },
      {
        "id": "4507011",
        "text": "Hostage Event"
      },
      {
        "id": "4507013",
        "text": "Mass Gathering"
      },
      {
        "id": "4507015",
        "text": "Mass Illness"
      },
      {
        "id": "4507017",
        "text": "Nuclear Agent"
      },
      {
        "id": "4507019",
        "text": "Radioactive Device"
      },
      {
        "id": "4507021",
        "text": "Secondary Destructive Device"
      },
      {
        "id": "4507023",
        "text": "Shooting/Sniper"
      },
      {
        "id": "4507025",
        "text": "Vehicular"
      },
      {
        "id": "4507027",
        "text": "Weather"
      }
    ],
    "attributes": [
      "CorrelationID"
    ]
  },
  "CrewMemberCompletingthisReport": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.08",
    "NemsisName": "Crew Member Completing this Report",
    "ElementTitle": "Crew Member Completing this Report",
    "ngModel": "CrewMemberCompletingthisReport",
    "V2Number": "E23_10",
    "National": "",
    "State": "State",
    "Definition": "The statewide assigned ID number of the EMS crew member which completed this patient care report",
    "Usage": "Recommended",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "Nillable",
    "DataType": "CrewMemberID",
    "NV": "NV",
    "PN": "",
    "PNNill": "",
    "NVList": "NV.NotReporting; NV.NotRecorded; NV.NotApplicable; ",
    "PNList": "",
    "minLength": "2",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": [
      "NV"
    ]
  },
  "ExternalElectronicDocumentType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.09",
    "NemsisName": "External Electronic Document Type",
    "ElementTitle": "External Electronic Document Type",
    "ngModel": "ExternalElectronicDocumentType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Document type which has been electronically stored with PCR.",
    "Usage": "Optional",
    "V3Changes": "Added to allow an improved implementation of electronic healthcare records.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "ExternalElectronicDocuments",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4509001",
        "text": "Other Audio Recording"
      },
      {
        "id": "4509003",
        "text": "Billing Information"
      },
      {
        "id": "4509005",
        "text": "Diagnostic Image (CT, X-ray, US, etc.)"
      },
      {
        "id": "4509007",
        "text": "DNR/Living Will"
      },
      {
        "id": "4509009",
        "text": "ECG/Lab Results"
      },
      {
        "id": "4509011",
        "text": "Guardianship/Power of Attorney"
      },
      {
        "id": "4509013",
        "text": "Other Healthcare Record"
      },
      {
        "id": "4509015",
        "text": "Other"
      },
      {
        "id": "4509017",
        "text": "Patient Identification"
      },
      {
        "id": "4509019",
        "text": "Patient Refusal Sheet"
      },
      {
        "id": "4509021",
        "text": "Other Picture/Graphic"
      },
      {
        "id": "4509025",
        "text": "Other Video/Movie"
      }
    ],
    "attributes": []
  },
  "FileAttachmentType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.10",
    "NemsisName": "File Attachment Type",
    "ElementTitle": "File Attachment Type",
    "ngModel": "FileAttachmentType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The description of the file attachment stored in File Attachment Image (eOther.11).",
    "Usage": "Optional",
    "V3Changes": "Added to allow an improved implementation of electronic healthcare records.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GraphicType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "FileAttachmentImage": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.11",
    "NemsisName": "File Attachment Image",
    "ElementTitle": "File Attachment Image",
    "ngModel": "FileAttachmentImage",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The file that is attached electronically to the patient care report.",
    "Usage": "Optional",
    "V3Changes": "Added to allow an improved implementation of electronic healthcare records.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "FileImage",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "TypeofPersonSigning": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.12",
    "NemsisName": "Type of Person Signing",
    "ElementTitle": "Type of Person Signing",
    "ngModel": "TypeofPersonSigning",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The individual's signature associated with eOther.15 (Signature Status).",
    "Usage": "Optional",
    "V3Changes": "Added to better document disposition and billing information.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SignatureType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4512001",
        "text": "EMS Crew Member (Other)"
      },
      {
        "id": "4512003",
        "text": "EMS Primary Care Provider (for this event)"
      },
      {
        "id": "4512005",
        "text": "Healthcare Provider"
      },
      {
        "id": "4512007",
        "text": "Medical Director"
      },
      {
        "id": "4512009",
        "text": "Non-Healthcare Provider"
      },
      {
        "id": "4512011",
        "text": "Online Medical Control Healthcare Practitioner"
      },
      {
        "id": "4512013",
        "text": "Other"
      },
      {
        "id": "4512015",
        "text": "Patient"
      },
      {
        "id": "4512017",
        "text": "Patient Representative"
      },
      {
        "id": "4512019",
        "text": "Witness"
      }
    ],
    "attributes": []
  },
  "SignatureReason": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.13",
    "NemsisName": "Signature Reason",
    "ElementTitle": "Signature Reason",
    "ngModel": "SignatureReason",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The reason for the individuals signature.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "M",
    "IsNillable": "",
    "DataType": "SignatureReason",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4513001",
        "text": "HIPAA acknowledgement/Release"
      },
      {
        "id": "4513003",
        "text": "Permission to Treat"
      },
      {
        "id": "4513005",
        "text": "Release for Billing"
      },
      {
        "id": "4513007",
        "text": "Transfer of Patient Care"
      },
      {
        "id": "4513009",
        "text": "Refusal of Care"
      },
      {
        "id": "4513011",
        "text": "Controlled Substance, Administration"
      },
      {
        "id": "4513013",
        "text": "Controlled Substance, Waste"
      },
      {
        "id": "4513015",
        "text": "Airway Verification"
      },
      {
        "id": "4513017",
        "text": "Patient Belongings (Receipt)"
      },
      {
        "id": "4513019",
        "text": "Permission to Transport"
      },
      {
        "id": "4513021",
        "text": "Refusal of Transport"
      },
      {
        "id": "4513023",
        "text": "Other"
      }
    ],
    "attributes": []
  },
  "TypeOfPatientRepresentative": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.14",
    "NemsisName": "Type Of Patient Representative",
    "ElementTitle": "Type Of Patient Representative",
    "ngModel": "TypeOfPatientRepresentative",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "If Patient Representative is chosen as the owner of the signature, this documents the relationship of the individual signing to the patient.",
    "Usage": "Optional",
    "V3Changes": "Added to improve documentation on disposition and billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "RelationshipSignature",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4514001",
        "text": "Aunt"
      },
      {
        "id": "4514003",
        "text": "Brother"
      },
      {
        "id": "4514005",
        "text": "Daughter"
      },
      {
        "id": "4514007",
        "text": "Discharge Planner"
      },
      {
        "id": "4514009",
        "text": "Domestic Partner"
      },
      {
        "id": "4514011",
        "text": "Father"
      },
      {
        "id": "4514013",
        "text": "Friend"
      },
      {
        "id": "4514015",
        "text": "Grandfather"
      },
      {
        "id": "4514017",
        "text": "Grandmother"
      },
      {
        "id": "4514019",
        "text": "Guardian"
      },
      {
        "id": "4514021",
        "text": "Husband"
      },
      {
        "id": "4514023",
        "text": "Law Enforcement"
      },
      {
        "id": "4514025",
        "text": "MD/DO"
      },
      {
        "id": "4514027",
        "text": "Mother"
      },
      {
        "id": "4514029",
        "text": "Nurse (RN)"
      },
      {
        "id": "4514031",
        "text": "Nurse Practitioner (NP)"
      },
      {
        "id": "4514033",
        "text": "Other Care Provider (Home health, hospice, etc.)"
      },
      {
        "id": "4514035",
        "text": "Other"
      },
      {
        "id": "4514037",
        "text": "Physician's Assistant (PA)"
      },
      {
        "id": "4514039",
        "text": "Power of Attorney"
      },
      {
        "id": "4514041",
        "text": "Other Relative"
      },
      {
        "id": "4514043",
        "text": "Self"
      },
      {
        "id": "4514045",
        "text": "Sister"
      },
      {
        "id": "4514047",
        "text": "Son"
      },
      {
        "id": "4514049",
        "text": "Uncle"
      },
      {
        "id": "4514051",
        "text": "Wife"
      }
    ],
    "attributes": []
  },
  "SignatureStatus": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.15",
    "NemsisName": "Signature Status",
    "ElementTitle": "Signature Status",
    "ngModel": "SignatureStatus",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "Indication that a patient or patient representative signature has been collected or attempted to be collected.",
    "Usage": "Optional",
    "V3Changes": "Added to better document disposition and billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "SignatureStatus",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [
      {
        "id": "4515001",
        "text": "Not Signed - Crew Called out to another call"
      },
      {
        "id": "4515003",
        "text": "Not Signed - Deceased"
      },
      {
        "id": "4515005",
        "text": "Not Signed - Due to Distress Level"
      },
      {
        "id": "4515007",
        "text": "Not Signed - Equipment Failure"
      },
      {
        "id": "4515009",
        "text": "Not Signed - In Law Enforcement Custody"
      },
      {
        "id": "4515011",
        "text": "Not Signed - Language Barrier"
      },
      {
        "id": "4515013",
        "text": "Not Signed - Mental Status/Impaired"
      },
      {
        "id": "4515015",
        "text": "Not Signed - Minor/Child"
      },
      {
        "id": "4515017",
        "text": "Not Signed - Physical Impairment of Extremities"
      },
      {
        "id": "4515019",
        "text": "Not Signed - Refused"
      },
      {
        "id": "4515021",
        "text": "Not Signed - Transferred Care/No Access to Obtain Signature"
      },
      {
        "id": "4515023",
        "text": "Not Signed - Unconscious"
      },
      {
        "id": "4515025",
        "text": "Not Signed -Visually Impaired"
      },
      {
        "id": "4515027",
        "text": "Physical Signature/Paper Copy Obtained"
      },
      {
        "id": "4515029",
        "text": "Refused"
      },
      {
        "id": "4515031",
        "text": "Signed"
      },
      {
        "id": "4515033",
        "text": "Signed-Not Patient"
      }
    ],
    "attributes": []
  },
  "SignatureFileName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.16",
    "NemsisName": "Signature File Name",
    "ElementTitle": "Signature File Name",
    "ngModel": "SignatureFileName",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The name of the graphic file for the signature.",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "FileName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SignatureFileType": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.17",
    "NemsisName": "Signature File Type",
    "ElementTitle": "Signature File Type",
    "ngModel": "SignatureFileType",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The description of the file attachment stored in Signature Graphic (eOther.18).",
    "Usage": "Optional",
    "V3Changes": "",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "GraphicType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "255",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SignatureGraphic": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.18",
    "NemsisName": "Signature Graphic",
    "ElementTitle": "Signature Graphic",
    "ngModel": "SignatureGraphic",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The graphic file for the signature.",
    "Usage": "Optional",
    "V3Changes": "Added to better document disposition and billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "Graphic",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "Date/TimeofSignature": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.19",
    "NemsisName": "Date/Time of Signature",
    "ElementTitle": "Date/Time of Signature",
    "ngModel": "Date/TimeofSignature",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The date and time the signature was captured.",
    "Usage": "Optional",
    "V3Changes": "Added to better document disposition and billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "DateTimeType",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "",
    "maxLength": "",
    "length": "",
    "minInclusive": "1950-01-01T00:00:00-00:00",
    "maxInclusive": "2050-01-01T00:00:00-00:00",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.\\d+)?(\\+|-)[0-9]{2}:[0-9]{2}",
    "options": [],
    "attributes": []
  },
  "SignatureLastName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.20",
    "NemsisName": "Signature Last Name",
    "ElementTitle": "Signature Last Name",
    "ngModel": "SignatureLastName",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The last name of the individual who signed the associated signature.",
    "Usage": "Optional",
    "V3Changes": "Added to better document disposition and billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonLastName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "60",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  },
  "SignatureFirstName": {
    "DatasetName": "EMSDataSet",
    "DatasetType": "element",
    "NemsisNumber": "eOther.21",
    "NemsisName": "Signature First Name",
    "ElementTitle": "Signature First Name",
    "ngModel": "SignatureFirstName",
    "V2Number": "",
    "National": "",
    "State": "",
    "Definition": "The first name of the individual associated with the signature.",
    "Usage": "Optional",
    "V3Changes": "Added to better document disposition and billing.",
    "MinOccurs": "0",
    "MaxOccurs": "1",
    "IsNillable": "",
    "DataType": "PersonFirstName",
    "NV": "",
    "PN": "",
    "PNNill": "",
    "NVList": "",
    "PNList": "",
    "minLength": "1",
    "maxLength": "50",
    "length": "",
    "minInclusive": "",
    "maxInclusive": "",
    "minExclusive": "",
    "totalDigits": "",
    "fractionDigits": "",
    "pattern": "",
    "options": [],
    "attributes": []
  }
}