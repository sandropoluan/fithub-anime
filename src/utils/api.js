const memo = {};

export async function getAnimeList(filterParams) {
    const key = JSON.stringify(filterParams);
    if(key in memo) return memo[key];

    const keys = Object.keys(filterParams);
    let params = '';
    if (keys.length) {
        params += '?';
        for (let key of keys) {
            if (filterParams[key]) params += `${key}=${filterParams[key]}&`;
        }
    }
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime${params}`);
        const json = await res.json();
        memo[key] = json;
        return json;
    } catch (e) {
        throw (e)
    }
}

const memoDetail = {};

export async function getAnimeDetail(id) {
    if(id in memoDetail) return memoDetail[id];

    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const json = await res.json();
        memoDetail[id] = json;
        return json;
    } catch (e) {
        throw (e)
    }
}