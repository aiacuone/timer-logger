export enum Time_enum {
	Today = 'today',
	Yesterday = 'yesterday',
	Date = 'date'
}

export interface Option_int {
	name: Time_enum;
	href: string;
}

export interface SpaceData_int {
	spaces: string[];
	times: Array<Option_int>;
	space: string;
	date: string;
}

export interface Log_int {
	id: string;
	date: Date;
	title?: string;
	content?: string;
	reference?: string;
	time?: number;
	type: LogType_enum;
	space: string;
	priority?: number;
	importance?: number;
	isCompleted?: boolean;
	bullets?: string[];
	lastUpdated?: Date;
	question?: string;
	answer?: string;
}

export enum LogType_enum {
	time = 'time',
	todo = 'todo',
	important = 'important',
	question = 'question'
}

export const allLogs = Object.keys(LogType_enum).map((key) => key);

export interface LogBase_int<T = string> {
	id: string;
	date: Date;
	content: T;
}
export interface TimeLog_int extends LogBase_int<string[]> {
	title: string;
	reference: string;
	time: number;
	type: LogType_enum.time;
}

export interface Todo_int extends LogBase_int {
	isCompleted: boolean;
	priority: 1 | 2 | 3;
	type: LogType_enum.todo;
}

export interface Important_int extends LogBase_int {
	importance: 1 | 2 | 3;
	type: LogType_enum.important;
}
export interface Question_int extends LogBase_int {
	importance: 1 | 2 | 3;
	type: LogType_enum.question;
}

export enum LogInput_enum {
	title = 'title',
	reference = 'reference',
	time = 'time',
	priority = 'priority',
	question = 'question',
	answer = 'answer',
	content = 'content'
}

export const searchableInputs = [
	LogInput_enum.title,
	LogInput_enum.reference,
	LogInput_enum.question,
	LogInput_enum.answer,
	LogInput_enum.content
];

export const allLogInputs = Object.keys(LogInput_enum).map((key) => key as LogInput_enum);