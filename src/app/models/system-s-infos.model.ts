export class SystemsInfoModel {
	type: SystemsInfoType;
	message: string;
}

export enum SystemsInfoType {
	Success,
	Error,
	Info,
	Warning
}