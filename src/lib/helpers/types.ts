export interface Education {
	school: string;
	degree: string;
	endYear: string;
}

export interface Experience {
	company: string;
	position: string;
	startDate: string;
	endDate: string;
	country: string;
	city: string;
	desciption: string[];
}

/** Type for the personal information section */
export interface PersonalInfo {
	firstName: string;
	lastName: string;
	summary?: string; // Optional
	email: string;
	phoneNumber: string;
	linkedin?: string; // Optional
	portfolio?: string; // Optional
}

export interface Skills {
	skillType: string;
	skillList: string[];
}

export interface FormData {
	personalInfo: PersonalInfo;
	education: Education[];
	experience: Experience[];
	skills: Skills[];
}
