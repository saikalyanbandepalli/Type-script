var Organization = /** @class */ (function () {
    function Organization(name, contact, address) {
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    Organization.prototype.personDetails = function () {
        return "Name:".concat(this.pName, " Contact:").concat(this.pContact);
    };
    return Organization;
}());
var OrganizationObj = new Organization("varun", 12345, "pune");
console.log(OrganizationObj.personDetails());
