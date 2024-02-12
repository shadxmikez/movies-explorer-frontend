import { useCallback, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import {
	VALIDATE_NAME,
	VALIDATE_EMAIL,
	NAME_CONSTANTS,
	EMAIL_CONSTANTS,
	FORM_CONSTANTS
} from '../utils/constants';

export function useValidateForm(startingValues = {}) {
	const [values, setValues] = useState(startingValues);
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);

	const handleChange = useCallback((evt) => {
		const target = evt.target;
		const { name, value } = target;

		if (name === NAME_CONSTANTS && target.validity.patternMismatch) {
			target.setCustomValidity(VALIDATE_NAME)
		} else {
			target.setCustomValidity('');
		}

		if (name === EMAIL_CONSTANTS) {
			if (!isEmail(value)) {
				target.setCustomValidity(VALIDATE_EMAIL);
			} else {
				target.setCustomValidity('');
			}
		}

		setValues((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
		setIsFormValid(target.closest(FORM_CONSTANTS).checkValidity());
	}, []);

	const resetForm = useCallback(
		(modernValues = startingValues, modernErrors = {}, modernIsValid = false) => {
			setValues(modernValues);
			setErrors(modernErrors);
			setIsFormValid(modernIsValid);
		},
		[startingValues],
	);

	const reset = useCallback((data = {}) => {
		setValues(data)
	}, [])

	return { handleChange, resetForm, values, errors, isFormValid, reset };
}