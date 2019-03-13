localPhoneNumbers = [
    "2########",
    "91#######",
    "93#######",
    "96#######"
];

module["exports"] = {
    local: localPhoneNumbers,
    international: localPhoneNumbers.map( function(num) { return "+351"+num; } )
};