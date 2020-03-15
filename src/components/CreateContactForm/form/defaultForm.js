const defaultForm = [
  {
    heading: "Contact Information",
    fields: [
      {
        type: "select",
        label: "Name Title",
        name: "nameTitle",
        value: "",
        options: ["Mr", "Mrs", "Miss", "Ms", "Sir", "Dr", "Prof"],
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "First Name",
        name: "firstName",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Last Name",
        name: "lastName",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Account Name",
        name: "accountName",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Company Name (optional)",
        name: "companyName",
        value: "",
        isRequired: false,
        error: null
      },
      {
        type: "text",
        label: "Phone",
        name: "phone",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Fax (optional)",
        name: "fax",
        value: "",
        isRequired: false,
        error: null
      },
      {
        type: "text",
        label: "Title (optional)",
        name: "title",
        value: "",
        isRequired: false,
        error: null
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "checkbox",
        label: "Email Opt Out",
        name: "emailOptOut",
        value: false,
        isRequired: false,
        error: null
      }
    ]
  },
  {
    heading: "Address Information",
    fields: [
      {
        type: "text",
        label: "Street",
        name: "street",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "City",
        name: "city",
        value: "",
        isRequired: true,
        error: null
      },
      {
        type: "datalist",
        label: "State",
        name: "state",
        value: "",
        options: [
          "New South Wales",
          "Victoria",
          "Queensland",
          "Western Australia",
          "South Australia",
          "Tasmania"
        ],
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Postcode",
        name: "postcode",
        value: "",
        isRequired: true,
        error: null
      }
    ]
  },
  {
    heading: "Description Information",
    fields: [
      {
        type: "textarea",
        label: "Description",
        name: "description",
        value: "",
        isRequired: true,
        error: null
      }
    ]
  }
];

export default defaultForm;
