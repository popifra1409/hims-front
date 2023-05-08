import React from "react";
import { TextField } from "@material-ui/core";
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

    const [field, meta] = useField(name);
    //default config
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField {...configTextfield} onChange={handleChange} />
    )
}
export default TextFieldWrapper;