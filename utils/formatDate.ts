export function formatDate(date: string): string {
    const dateObject = date.split('-')
    
    return `${dateObject[2]}/${dateObject[1]}/${dateObject[0]}`;
}