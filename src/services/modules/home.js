import HYRequest from "..";

export function gethomeGoodPriceInfo(){
    return HYRequest.get({
        url:"/home/goodprice"
    })
}

