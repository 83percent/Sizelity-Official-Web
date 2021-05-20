const ShopUserModel = require('../lib/models/ShopUserModel');
/*
    유저의 기본 정보를 불러온다 (password x)
    @params id :String      유저고유 코드
*/
async function get(id) {
    const {_id, info, status, domain} = await ShopUserModel.findById(id);
    if(!_id) return null;
    else return {info, status, domain};
}

module.exports = {get}