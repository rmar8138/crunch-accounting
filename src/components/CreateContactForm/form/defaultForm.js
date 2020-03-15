const defaultForm = [
  {
    heading: "Contact Information",
    fields: [
      {
        type: "selectText",
        selectName: "nameTitle",
        selectValue: "",
        options: ["- None", "Mr", "Mrs", "Miss", "Ms", "Sir", "Dr", "Prof"],
        textLabel: "First Name",
        textName: "firstName",
        textValue: "",
        placeholder: "John",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Last Name",
        name: "lastName",
        value: "",
        placeholder: "Smith",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Account Name",
        name: "accountName",
        value: "",
        placeholder: "John's Joinery",
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
        type: "number",
        label: "Phone",
        name: "phone",
        value: "",
        placeholder: "02 123 456 78",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Fax (optional)",
        name: "fax",
        value: "",
        placeholder: "John's Joinery",
        isRequired: false,
        error: null
      },
      {
        type: "text",
        label: "Title (optional)",
        name: "title",
        value: "",
        placeholder: "Owner",
        isRequired: false,
        error: null
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        value: "",
        placeholder: "sample@email.com",
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
        placeholder: "1, Elizabeth Street",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "City",
        name: "city",
        value: "",
        placeholder: "Sydney",
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
        placeholder: "New South Wales",
        isRequired: true,
        error: null
      },
      {
        type: "text",
        label: "Postcode",
        name: "postcode",
        value: "",
        placeholder: "2000",
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
