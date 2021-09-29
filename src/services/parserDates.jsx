export const parserFromUnixToLocalDate = (unix)=>{
    const date = new Date(unix);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const today = `${dd}/${mm}/${yyyy}`;
    return today;
}