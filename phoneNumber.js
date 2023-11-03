// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

function testPhoneNumber(phoneNumber) {
    let checkPhoneNumber = /^(\()?[0-9]{3}(\))?(\.)?([-\s])?[0-9]{3}([-\s])?(\.)?[0-9]{4}$/;
    //console.log(checkPhoneNumber.test(phoneNumber));
    if (checkPhoneNumber.test(phoneNumber)) {
        console.log(parsePhoneNumber(phoneNumber));
        console.log(parsePhoneNumber('(222) 422-5353'));
        // returns {areaCode: '206', phoneNumber: '3334444'}
    } else {
        console.log("Sorry you entered wrong number, Please enter correct number.")
    }
}


// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444'));   // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
function parsePhoneNumber(phoneNumber) {
    //console.log(phoneNumber);
    let regex1 = RegExp('[0-9]{1}', 'g');
    const str1 = phoneNumber;
    let array1;
    let x = 0;
    let cleanNumber = "";
    const returnedObject = {};

    while ((array1 = regex1.exec(str1)) !== null) {
        //console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
        cleanNumber = cleanNumber + array1[0];
    }
    //return typeof cleanNumber;
    let areaCode = cleanNumber.substring(0, 3);
    let phoneNumberLastDigits = cleanNumber.substring(3, cleanNumber.length)

    returnedObject.areaCode = areaCode;
    returnedObject.phoneNumber = phoneNumberLastDigits;
    //console.log(cleanNumber.substring(0, 3), cleanNumber.substring(3, cleanNumber.length));

    return (returnedObject);
}
