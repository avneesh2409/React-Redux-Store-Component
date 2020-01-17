export const fetchUsers = async (url) => {
    const res = await fetch(url).then(response => response.json());
    return res
}

