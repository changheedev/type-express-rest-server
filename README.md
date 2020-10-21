## TypeScript

```
npm install -g typescript
```

```
npm install express
npm install -D @types/express @types/node nodemon ts-node typescript
```

### Compile Options

참고

[https://typescript-kr.github.io/pages/compiler-options.html](https://typescript-kr.github.io/pages/compiler-options.html)

<br>

## TypeORM

```
npm install typeorm reflect-metadata mysql2
```

`tsconfig.json`:

```
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

### 연결 설정

TypeORM은 연결 설정 정보를 루트 디렉토리에 위치한 다음 파일에서 읽어온다.

-   ormconfig.[json/js/yml/xml]

-   .env



## References

### TypeORM

[https://typeorm.io/#/](https://typeorm.io/#/)
