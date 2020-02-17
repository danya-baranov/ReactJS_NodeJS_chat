import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik'
import validationFunc from 'utils/validation'




export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        fullName: "",
        password: "",
        password_2: "",

    }),

    validate: values => {

        let errors = {}

        validationFunc({ isAuth: false, values, errors })

        return errors
    },
    handleSubmit: (values, { setSunmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSunmitting(false);
        }, 1000)

    },
    displayName: 'RegisterForm'
})(RegisterForm);

