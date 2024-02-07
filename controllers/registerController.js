module.exports = (req, res) => {

    let email = ""
    let password = ""
    let confirmpassword = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined") {
        email = data.email
        password = data.password
        confirmpassword = data.confirmpassword
    }

    res.render('register', {
        errors: req.flash('validationErrors'),
        email: email,
        password: password,
        confirmpassword: confirmpassword
    })
}