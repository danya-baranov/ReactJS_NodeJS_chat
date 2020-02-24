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
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000)

    },
    displayName: 'RegisterForm'
})(RegisterForm);

