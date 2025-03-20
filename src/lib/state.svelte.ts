import type { FormData } from "./helpers/types";
export const formState = $state<FormData>({
	personalInfo: {
		firstName: '',
		lastName: '',
		summary: undefined,
		email: '',
		phoneNumber: '',
		linkedin: undefined,
		portfolio: undefined
	},
	education: [],
	experience: [],
	skills: []
});


