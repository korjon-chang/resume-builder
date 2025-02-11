export interface Education {
	school: string;
	degree: string;
	graduationDate: string;
}

export interface Experience {
	company: string;
	position: string;
	startDate: string;
	endDate: string;
	country: string;
	city: string;
	description: string[];
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
	skillCategory: string;
	skillList: string[];
}

export interface FormData {
	personalInfo: PersonalInfo;
	education: Education[];
	experience: Experience[];
	skills: Skills[];
}
