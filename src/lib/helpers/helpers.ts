export const saveForm = (formState: any): void => {
	localStorage.setItem('formState', JSON.stringify(formState));
};
