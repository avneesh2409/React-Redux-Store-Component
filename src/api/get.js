export const fetchUsers = async (url) => {
    const res = await fetch(url);
    return res.json();
}

