# Type Express Rest Server

## 프로젝트 환경

-   Node.js 12.18.3
-   Express 4
-   TypeScript 4
-   Webpack 4 + Babel 7
-   MySQL 5.7
-   TypeORM

<br>

## 프로젝트 실행

```shell
npm install
npm run dev
```

<br>

## 프로젝트 Webpack 설정 정리

### target

어떤 환경에서 사용할 것인지 지정해준다. (default = web)
서버 코드는 Node.js 환경에서 실행할 것이라서 'node'로 설정.

[webpack-target](https://webpack.js.org/configuration/target/)

<br>

### node

node.js의 global객체와 일부 모듈을 polyfill 하거나 mocking한다.

default 설정시 `__dirname : '/'`, `__filename : 'index.js'` 같이 웹 환경에 맞춰 polyfill 되기 때문에 false로 설정하였다.

<br>

### externals

백엔드용 모듈과 관련된 webpack 트리쉐이킹 오류 방지를 위한 설정

[TypeORM과 Webpack 연동 `Critical dependency: the request of a dependency is an expression` 오류 해결](https://changheedev.github.io/posts/TypeORM%EA%B3%BC-Webpack-%EC%97%B0%EB%8F%99%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0/)

<br>

### resolve

**extensions**

모듈을 import 할때 확장자를 생략하더라도 extensions에 설정한 확장자를 사용해 파일을 연결해준다.

**modules**

모듈을 해석 할 때 어떤 디렉토리를 검색해야하는지 웹팩에 알려준다.

**plugins**

-   TsconfigPathsPlugin : tsconfig.js 파일에 설정한 paths를 웹팩의 alias로 복제하기 위한 플러그인

<br>

### optimization

-   TerserPlugin
    -   terserOptions.compress.drop_console: 번들파일에 console로 출력하는 코드(console.log, console.error...)를 포함하지 않도록 설정
