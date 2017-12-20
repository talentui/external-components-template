export function getQueryString (){
    //获取Url上的参数，以{}返回
    let hash = location.hash;
    let queryObject = {};
    let markIndex = hash.indexOf("?");
    // contain query string in fragments
    if (markIndex > -1) {
        // build query object
        let queryString = hash.slice(markIndex + 1);
        let queryArray = queryString.split('&');
        for (let i = 0; i < queryArray.length; i++) {
            let queryPair = queryArray[i].split('=');
            if (queryPair[0] !== '_k') {
                queryObject[queryPair[0]] = decodeURIComponent(queryPair[1]);
            }
        }
    }
    return queryObject;
}