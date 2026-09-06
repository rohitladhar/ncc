const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const MARKETING_API_ENDPOINT = process.env.NEXT_PUBLIC_API_MARKETING_ENDPOINT;

export function sendContactForm(formData) {
  return fetch(API_ENDPOINT + "/addcontact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function sendQuoteForm(formData) {
  return fetch(API_ENDPOINT + "/addonlinequote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function sendCareerForm(formData) {
  return fetch(API_ENDPOINT + "/addcareer", {
    method: "POST",
    body: formData,
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function sendMarketingEmail(email) {
  return fetch(MARKETING_API_ENDPOINT + "/add-marketing-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email:email}),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}
