import LoginForm from '../components/LoginForm'
import { withFormik } from 'formik'
import validationFunc from 'utils/validation'




export default withFormik({

    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validate: values => {

        let errors = {}

        validationFunc({ isAuth: true, values, errors })

        return errors
    },
    handleSubmit: (values, { setSunmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSunmitting(false);
        }, 1000)

    },
    displayName: 'LoginForm'
})(LoginForm);

