# file-counter

CLI that counts lines, words, and characters in a text file. Built for the [roadmap.sh File Counter](https://roadmap.sh/projects/nodejs-file-counter) project.

Requires Node.js 20 or newer.

## Usage

```bash
node file-counter.js sample.txt
```

```
File: sample.txt
Lines: 2
Words: 9
Characters: 52
```

## Errors

Errors go to stderr and the process exits with code 1.

```bash
node file-counter.js
# error: please provide a file path

node file-counter.js missing.txt
# error: could not read file: missing.txt
```
