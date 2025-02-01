import type { FormData } from "./types";

const saveForm = (formState: FormData): void => {
	localStorage.setItem('formState', JSON.stringify(formState));
};

export const saveAndNext = (formState: FormData): void => {
	saveForm(formState);
}
