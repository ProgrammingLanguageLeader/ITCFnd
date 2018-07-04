const fetchStoresData = async (offset=0, limit=8) => {
    let storesDataPromises = await fetchStoresUUIDs(offset, limit)
        .then(uuids => {
            let storesData = uuids.map(uuid => {
                return fetchStoreData(uuid);
            });
            return storesData;
        })
    return await Promise.all(storesDataPromises);
}

const fetchStoresUUIDs = (offset=0, limit=8) => {
    const url = `https://itc-web1-server.now.sh/stores?limit=${limit}&offset=${offset}`;
    return fetch(url)
        .then(response => {
            if (response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(data => {
            const UUIDs = [];
            data.payload.stores.forEach(store => {
                UUIDs.push(store.uuid);
            });
            return UUIDs;
        });
}

const fetchStoreData = (uuid) => {
    const url = `https://itc-web1-server.now.sh/store?uuid=${uuid}`;
    return fetch(url)
        .then(response => {
            if (response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(data => {
            return data.payload;
        });
}

export { fetchStoresData };