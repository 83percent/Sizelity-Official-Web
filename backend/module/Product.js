const ProductModel = require("../lib/models/ProductModel");
const ShopUserModel = require("../lib/models/ShopUserModel");

const _getCount = 15;

async function set(id, data) {
   
}

async function search(id, value, number) {
    const Shop = await ShopUserModel.findById(id, ["domain"]);
    if(!Shop) return null;

    const Products = await ProductModel.find({'praw.domain' : Shop.domain, 'info.pname': {$regex:value, $options:'i'}}).skip(number).limit(_getCount);
    return Products;
    // console.log(`${Shop.domain} 의 ${value} 검색`);
    // console.log(Products);
} // search


/*
    getOfType
    @param domain :String   쇼핑몰 도메인명
    @param type :String     검색하려는 상품 타입
    @param number :Number   불러올 시작 넘버

    @return null            Server Error
*/
async function getOfType(domain, type, number) {
    try {
        const Products = await ProductModel.find({'praw.domain' : domain, 'info.ptype' : type}).skip(number).limit(_getCount);
        return Products;
    } catch(err) {
        console.log(err);
        return null;
    }

    /* console.log(`${domain}의 ${type} 상품 검색`);
    console.log(Products); */
}  

module.exports = {
    set,
    search,
    getOfType
}