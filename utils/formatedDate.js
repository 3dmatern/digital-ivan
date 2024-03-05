export function getConcatDMY(date) {
    const currentDate = new Date(date);
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${day}.${month}.${year}`;
}
