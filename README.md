# Prerequisites
- Must use Node 18.18.x (See: ts-node issue [#1997](https://github.com/TypeStrong/ts-node/issues/1997#issuecomment-1974168425))

# Getting Started

```bash
git clone ...
cd ./kin-challenge
npm install
npm start
# optional CLI args
npm start --output_size=50 --verbose_mocks
```

# Testing
```bash
npm run test
```

# Notes
- I highly recommend enabling rendering of whitespaces (in VSCode, `ctrl` + `,` to open Settings, select `all` under "Render Whitespace")
- Functions are written as individual utility methods, similar to how I'd implement them into a larger service. If I were to implement this as a packaged library, I'd expose the default exports as modules.
