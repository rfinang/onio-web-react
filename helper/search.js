export const checkKeywordSearch = (keyword) => {

    if (!keyword) {
        return true
    }

    if (keyword.length > 30) {
        return false
    }

    if (keyword.includes('ezk888.cn')) {
        return false
    }

    if (keyword.includes('.')) {
        return false
    }

    if (keyword.includes('phim')) {
        return false
    }

    return true

}