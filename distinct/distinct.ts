function uniq (array: string[]): string[] {
    const uniqValues = new Set<string>()
    for (const element of array) {
        uniqValues.add(String(element))
    }
    return Array.from(uniqValues)
}
export function distinct (originalString: string): string {
    return uniq(originalString.split(',')).join(',')
}