## 项目说明

服务端，前后端分离，提供如用户登录、问卷管理等服务。

### 使用

1. 进入当前路径

```shell
cd education
```

2. 安装依赖包

```shell
mvnw clean install
```

3. 运行

```shell
mvnw clean spring-boot:run

# 多环境
mvnw clean spring-boot:run -P beta
mvnw clean spring-boot:run -P dev
```

4. 打包
```shell
mvnw clean package

# 多环境
mvnw clean package -P beta
mvnw clean package -P dev
```

## 恰饭
大梦三千官网 [damengsanqian](http://www.damengsanqian.com/)