import HYRequest from "..";

export function gethomeGoodPriceInfo() {
    return HYRequest.get({
        url: "/home/goodprice"
    })
}


export function getHomeHighscoreDate() {
    return HYRequest.get(
        {
            url: "/home/highscore"
        }
    )
}

export function getHomeDiscountDate() {
    return HYRequest.get(
        {
            url: "/home/discount"
        }
    )
}

export function getHomeHotRecommenddest() {
    return HYRequest.get({
        url: "/home/hotrecommenddest"
    })
}
