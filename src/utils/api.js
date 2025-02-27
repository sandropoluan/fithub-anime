export async function getAnimeList(filterParams) {
    const keys = Object.keys(filterParams);
    let params = '';
    if (keys.length) {
        params += '?';
        for (let key of keys) {
            params += `${key}=${filterParams[key]}&`;
        }
    }
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime+${params}`);
        const json = await res.json();
        return json;
    } catch (e) {
        throw (e)
    }
}