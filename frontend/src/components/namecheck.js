export default function isValidName(newName) {
    // Regular expression to match alphabetic characters, spaces, and some special characters
    var nameRegex = /^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF' -]+$/;
    return nameRegex.test(newName);
}