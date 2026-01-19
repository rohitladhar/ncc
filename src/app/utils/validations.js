export const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (!/^[a-zA-Z\s]+$/.test(name))
      return "Name should contain only letters and spaces";
    return "";
};

export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email format";
    return "";
};

export const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone is required";
    if (!/^\d{10,15}$/.test(phone)) return "Phone number must be 10-15 digits";
    return "";
};

export  const checkEmpty = (fieldValue, fieldName) => {
    if (!fieldValue.trim()) {
      return `${fieldName} is required`;
    }
    return "";
};