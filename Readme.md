<h1 align="center">Ctrlv AI</h1>
<div align="center">
  <h3>
    Shimmer Wallet
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

- Coming Soon
- Coming Soon

### Built With

- [React Native](https://reactnative.dev/)
- [NFC](https://nfc-forum.org/)

## Features

TBD. Watch this space.

- Coming Soon
- Coming Soon
  Requirements

- Download and Install [Rust] (https://www.rust-lang.org/tools/install)

- Install the Chocolatey and Packages (run Command Terminal/Powershell on Administrator mode)

```bash
# Install the Chocolatey
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
# Install the packages via Chocolatey
> choco install visualstudio2022buildtools visualstudio2022-workload-vctools rust-ms msys2 llvm
```

- Download and Install [LLVM-11.0.1-win64] (https://github.com/llvm/llvm-project/releases/download/llvmorg-11.0.1/LLVM-11.0.1-win64.exe)
  - During installation select "Add LLVM to the PATH for all users/current user"
  - If you encountered this error (set LIBCLANG_PATH in windows env variables)
  ```bash
  > npm ERR!   thread 'main' panicked at 'Unable to find libclang: "couldn't find any valid shared libraries matching: ['clang.dll', 'libclang.dll'], set the `LIBCLANG_PATH` environment variable to a path where one of these files can be found (invalid: [])"', C:\Users\New User\.cargo\registry\src\github.com-1ecc6299db9ec823\bindgen-0.64.0\./lib.rs:2393:31
  ```
- Now install the iota wallet package, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install the Iota wallet package
> npm install npm i @iota/wallet@2.0.3-rc.27

```

## Resources

- [@iota/wallet] (https://www.npmjs.com/package/@iota/wallet/v/2.0.3-rc.27)
- Iota Getting Started (rust is required to before following node package instruction)
  - [Rust] (https://wiki.iota.org/shimmer/wallet.rs/getting_started/rust/)
  - [NodeJS] (https://wiki.iota.org/shimmer/wallet.rs/getting_started/nodejs/)

## Contact

- Coming Soon
- Coming Soon
