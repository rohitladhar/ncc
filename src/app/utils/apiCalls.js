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
    .catch((error) => {
      console.log(error);
    });
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
    .catch((error) => {
      console.log(error);
    });
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
    .catch((error) => {
      console.log(error);
    });
}

export function sendMarketingEmail(email) {
  return fetch(MARKETING_API_ENDPOINT + "/add-marketing-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getFeedbackToken(token) {
  const url = `${API_ENDPOINT}/feedback-get-token/${encodeURIComponent(token)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return {
      ...data,
      httpStatus: response.status,
      ok: response.ok,
    };
  } catch (error) {
    return {
      success: false,
      message: "Unable to connect to the server.",
      status: "error",
      httpStatus: 0,
      ok: false,
    };
  }
}

export async function updateFeedbackToken(token, formData) {
  const url = `${API_ENDPOINT}/feedback-update-token/${encodeURIComponent(
    token,
  )}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return {
      ...data,
      httpStatus: response.status,
      ok: response.ok,
    };
  } catch (error) {
    return {
      success: false,
      message: "Unable to connect to the server.",
      status: "error",
      httpStatus: 0,
      ok: false,
    };
  }
}

export function allClientFeedback() {
  return fetch(API_ENDPOINT + "/all-client-feedback", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
   
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
