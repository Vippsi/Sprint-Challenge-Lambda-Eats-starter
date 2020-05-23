import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(2, 'name must be at least 2 characters long')
    .required('Name is a required field'),

    size: yup.string().required('Size is required'),
    sauce: yup.string().required('Sauce is required'),
    toppings: yup.boolean(),
    instructions: yup.string()
        
})

export default formSchema