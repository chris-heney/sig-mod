const AuthCheck = async () => {
    // @TODO: Incorporate auth check response into the mod
    const resp = await fetch('https://chrisheney.com/auth-check.php', {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify(window.uData)
    })

    const result = await resp.text()

    return result === 'unauthorized' ? false : true
}

export default AuthCheck