# Prerequisites
- Must use Node 18.18.x (See: ts-node issue [#1997](https://github.com/TypeStrong/ts-node/issues/1997#issuecomment-1974168425))

# Getting Started

```bash
git clone ...
cd ./kin-challenge
npm install
npm start
```

# Testing
```bash
npm run test
```

# Notes
- I highly recommend enabling rendering of whitespaces (in VSCode, `ctrl` + `,` to open Settings, select `all` under "Render Whitespace")
- This project is organized similar to a backend API, without the backend API. In other words, the functions are written as individual utility methods, similar to how I'd implement them into a larger backend service.
