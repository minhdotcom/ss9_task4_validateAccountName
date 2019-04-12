function validate_account_name(accountName) {
    var regexp = /[a-z0-9\_]{6}/;
    return regexp.test(accountName)? true : false;
}