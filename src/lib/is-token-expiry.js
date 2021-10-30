const isTokenExpiry = (expiryDate, tokenId) => {
    if (!tokenId)
        return true
    const now = new Date().getTime()
    if (expiryDate > now) return false
    return true
}
export default isTokenExpiry