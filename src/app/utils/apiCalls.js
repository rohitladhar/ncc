const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export function sendContactForm(formData) {
  return fetch(API_ENDPOINT+'/addcontact', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
   
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      return response.json()
    }).catch((error)=>console.log(error))
}

export function sendQuoteForm(formData) {
  return fetch(API_ENDPOINT+'/addonlinequote', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      return response.json()
    }).catch((error)=>console.log(error))
}

export function sendCareerForm(formData) {
  return fetch(API_ENDPOINT+'/addcareer', { 
    method: "POST",
    body:formData,
    credentials: 'include',
  })
    .then((response) => {
      return response.json()
    }).catch((error)=>console.log(error))
}