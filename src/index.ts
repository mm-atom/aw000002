export default interface IAiBrowserPage {
	readonly data: {
		readonly [attr: string]: unknown;
		readonly params: { [key: string]: unknown };
		readonly url: string;
	};
	fire<T>(action: string, ...args: unknown[]): Promise<T>;
	emit<T>(event: string, ...args: unknown[]): Promise<T>;
	// eslint-disable-next-line semi
}
