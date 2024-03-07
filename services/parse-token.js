export async function parseToken(token) {
    const parse = await JSON.parse(atob(token.split(".")[1]));

    return parse;
}
