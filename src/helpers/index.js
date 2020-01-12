export const user = {
    first_name: 'John',
    last_name: 'Lilly',
    job_title: 'Software Engineer'
};

export const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
}