export default ({ isAuth, values, errors }) => {

    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = "Input email";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Invalid email address";
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = "Input password";
            } else if ( !isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                errors.password = "Very easy password";
            }
        },
        password_2: (value) => {
            if (!isAuth && value !== values.password) {
                errors.password_2 = "Пароли не совпадают";
            }
        },
        fullName: value => {
            if (!isAuth && !value) {
                errors.fullName = "Укажите свое имя и фамилию";
            }
        }
    }


    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );
}