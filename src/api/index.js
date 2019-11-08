import ajax from './ajax'
//根据唯独获取位置
export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)
//获取食物分类列表
export const reqFoodTypes=()=>ajax('/index_category')
//获取商家列表
export const reqShops=(longitude,latitude)=>ajax('/shops',{longitude,latitude})
