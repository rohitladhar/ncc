const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export function sendContactForm(formData) {
  return fetch(API_ENDPOINT+'/contact', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw new Error(err.message || "Failed to submit form");
        });
      }
      return response.json();
    });
}

export function sendQuoteForm(formData) {
  console.log(formData)
  return fetch(API_ENDPOINT+'/onlinequote', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw new Error(err.message || "Failed to submit form");
        });
      }
      return response.json();
    });
}

export function sendCareerForm(formData) {
  return fetch(API_ENDPOINT+'/career', { 
    method: "POST",
    headers: {
      "x-api-key": API_KEY
    },
    body:formData,
    credentials: 'include',
  })
    .then((response) => {
   
      if (!response.ok) {
        return response.json().then((err) => {
         
          throw new Error(err.message || "Failed to submit form");
        });
      }
      return response.json();
    });
}