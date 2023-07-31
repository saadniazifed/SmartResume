export const personalDetailsInput = [
  {
    label: "Full Name",
    name: "fullName",
    placeholder: "Enter your full name",
    type: "text",
    id: 1,
    required: true,
    errorMessage:
      "Full Name Should Not Contain Any Numbers Or Special Characters. Max Limit is 25 words.",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    id: 2,
    required: true,
    errorMessage: "It Should Be A Valid Email Address. Please Try Again.",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    placeholder: "Enter your phone number",
    type: "number",
    required: true,
    id: 3,
    errorMessage: "It Should Be A Valid Phone Number. Please Try Again.",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "Enter your address",
    type: "text",
    id: 4,
    required: true,
    errorMessage: "It Should Be A Valid Address. Max Word Limit is 30.",
  },
];
