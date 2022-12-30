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
