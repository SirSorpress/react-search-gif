
export const getGifs = async(category) => {
    try {
        const apiKey = 'Xbdqkb0Yn4CFbpYsL8dyhhIlbN6aCpRg';
    
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

        const response = await fetch(url);

        const {data}= await response.json();

        const gifs = data.map(({id, title, images}) =>({
            id: id,
            title: title,
            url: images.downsized_medium.url,
        }));
        
        return gifs

    } catch (error) {
        console.log(error);
    }
}