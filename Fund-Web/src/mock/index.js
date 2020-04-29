import mock from 'mockjs'

const numCode={
    verifytype:'123456',
    code:'0000'
}
const userMsg={
    username:'13112192418',
    password:'dlkj123456',
    code:'0000'
}

mock.mock('/dlmiddleware/account-service/6.0/serve/mobileauthcode','post',numCode)
mock.mock('/dlmiddleware/account-service/6.0/serve/login','post',userMsg)
export default{
    mock
}