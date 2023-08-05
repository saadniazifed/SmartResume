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

export const educationDetailsInput = [
  {
    label: "School",
    name: "school",
    placeholder: "Enter your school",
    type: "text",
    id: 1,
    required: true,
    errorMessage: "School name is required.",
  },
  {
    label: "Title of Study",
    name: "titleOfStudy",
    placeholder: "Enter your title of study",
    type: "text",
    id: 2,
    required: true,
    errorMessage: "Title of study is required.",
  },
  {
    label: "Start Date",
    name: "startDate",
    placeholder: "Enter start date",
    type: "date",
    id: 3,
    required: true,
    errorMessage: "Start date is required.",
  },
  {
    label: "End Date",
    name: "endDate",
    placeholder: "Enter end date",
    type: "date",
    id: 4,
    required: true,
    errorMessage: "End date is required.",
  },
];

export const workExperienceDetailsInput = [
  {
    label: "Company",
    name: "company",
    placeholder: "Enter the company name",
    type: "text",
    id: 1,
    required: true,
    errorMessage: "Company name is required.",
  },
  {
    label: "Job Title",
    name: "jobTitle",
    placeholder: "Enter your job title",
    type: "text",
    id: 2,
    required: true,
    errorMessage: "Job title is required.",
  },
  {
    label: "Start Date",
    name: "startDate",
    placeholder: "Enter start date",
    type: "date",
    id: 3,
    required: true,
    errorMessage: "Start date is required.",
  },
  {
    label: "End Date",
    name: "endDate",
    placeholder: "Enter end date",
    type: "date",
    id: 4,
    required: true,
    errorMessage: "End date is required.",
  },
];
