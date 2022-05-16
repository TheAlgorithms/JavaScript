/**
 * @description - function that takes 10 digits and returns a string of the formatted phone number e.g.: 1234567890 -> (123) 456-7890
 * @param {string} phoneNumber
 * @returns {string} - Format to (XXX) XXX-XXXX pattern
 */
const formatPhoneNumber = (phoneNumber) => {
  if ((phoneNumber.length !== 10) || isNaN(phoneNumber)) {
    // return "Invalid phone number."
    throw new TypeError('Invalid phone number!')
  }

  let index = 0
  return '(XXX) XXX-XXXX'.replace(/X/g, () => phoneNumber[index++])
}

export default formatPhoneNumber
