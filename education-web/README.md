# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

### 开发要注意

***本地为了跨域使用代理，将前缀设置为/api,并在代理中去掉，Mock需要生效则也需要加上/api前缀***

1. 在.umirc.local.ts中，将地址设置为"/api"
2. 在统一请求类，/src/utils/request.ts中,每个请求都加上前缀
3. 在mock中，增加"/api"