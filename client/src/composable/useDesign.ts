const PREFIX = 'dev'
/**
 * Used for localizing style in all vue files.
 * @param scope - The first (and only) input
 * @returns A string that prefixed with 'dev'
 */
export const useDesign = (scope: string): string => {
    return `${PREFIX}-${scope}`
}