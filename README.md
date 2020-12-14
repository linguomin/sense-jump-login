# sense-jump-login

描述：根据请求返回的状态码跳转登录页

## 使用方法

### 安装

```install
npm install sense-jump-login
```

### 开发环境

npm start
启动服务

### 编译

npm run build

### 组件内引入

```import
import jumpLogin from 'sense-jump-login';
```

axios.get().then().catch((err)=>{
  jumpLogin(err); //刷新当前页面
  jumpLogin(err, true); // 跳转登录页
})

***插件如有bug请联系linguomin_sam@163.com***
