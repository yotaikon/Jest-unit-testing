export function truncate(str: string, length: number): string {
    if (length <= 0) return "";
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
}
