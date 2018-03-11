function ajax(url) {
    return fetch(url)
        .then(response => {
            if (response.status != 200) {
                return null;
            }
            return response.json();
        })
        .then(data => {
            return data.data.children;
        });
}

function fetchPosts() {
    const url = 'https://www.reddit.com/top.json';
    return ajax(url);
}
