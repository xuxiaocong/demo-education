export default {
    'GET /api/user/login': (req: any, res: any) => {
        const { name, password } = req.query;
        if (name === 'laowang' && password === '123456') {
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW1lbmdzYW5xaWFuLWVkdWNhdGlvbi13ZWIiLCJhdWQiOiIxIiwiaXNzIjoiZGFtZW5nc2FucWlhbi1lZHVjYXRpb24iLCJleHAiOjE1OTk5MTIyNjQsImlhdCI6MTU5OTg5MDY2NH0.Xw3SOV24kuJqBO0JNTQfhvpD8QWufJdzlS_KWmsWeEM';
            const user = {
                name: "laowang",
            };
            res.send({ token, user });
        } else {
            res.status(400).send({ message: '账号或密码错误' });
        }
    },
    'POST /api': (req: any, res: any) => {
        //todo:POST示例代码，
        const { name, password } = req.body;
        res.send({ message: '信息' });
        res.status(401).send({ message: '失败提示' });
    }
}