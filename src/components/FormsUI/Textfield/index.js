import React from "react";
import { TextField } from "@material-ui/core";
<<<<<<< HEAD
import { useField, useFormik, useFormikContext } from "formik";

const TextFieldWrapper = ({
    name,
    value,
    onChange,
    ...otherProps
}) => {
    const formik = useFormik({
         initialValues: {
             [name]: value,
         },
         onChange: (event) => {
             formik.setFieldValue(name, event.target.value);
             if (onChange) {
                 onChange(event.target.value);
             }
         },
         ...otherProps,
     });
 
     const handleChange = (event) => {
         formik.setFieldValue(name, event.target.value);
         if (onChange) {
             onChange(event.target.value);
         }
     };
    
     /* const { setFieldValue } = useFormikContext();

    const handleChange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value)
    }
 */
=======
import { useField, useFormik } from "formik";

const TextFieldWrapper = ({
    name,
    onChange,
    value,
    ...otherProps
}) => {
    const formik = useFormik({
        initialValues: {
            [name]: value,
        },
        onChange: (event) => {
            formik.setFieldValue(name, event.target.value);
            if (onChange) {
                onChange(event.target.value);
            }
        },
        ...otherProps,
    });

    const handleChange = (event) => {
        formik.setFieldValue(name, event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

>>>>>>> f79f3a4bd9ad99cca809a35b0176290a01026f33
    const [field, meta] = useField(name);
    //default config
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
<<<<<<< HEAD
        variant: 'outlined',
        onChange: handleChange
=======
        variant: 'outlined'
>>>>>>> f79f3a4bd9ad99cca809a35b0176290a01026f33
    };

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
<<<<<<< HEAD
        <TextField {...configTextfield} />
=======
        <TextField {...configTextfield} onChange={handleChange} />
>>>>>>> f79f3a4bd9ad99cca809a35b0176290a01026f33
    )
}
export default TextFieldWrapper;