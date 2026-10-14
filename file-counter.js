import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputPath = process.argv[2];

const printError = (message) => {
	console.error(`error: ${message}`);
	process.exitCode = 1;
};

if (inputPath) {
	try {
		const file = await fs.readFile(inputPath, "utf-8");

		const chars = file.length;
		const lines = file.length ? file.split(/\r?\n/).length : 0;
		const words = file.length ? file.split(/\s+/).filter(Boolean).length : 0;

		console.log("File:", path.basename(inputPath));
		console.log("Lines:", lines);
		console.log("Words:", words);
		console.log("Characters:", chars);
	} catch (error) {
		printError(`could not read file: ${inputPath}`);
	}
} else {
	printError("please provide a file path");
}
