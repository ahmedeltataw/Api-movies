
export async function fetchDataFromAPI(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzkzYmYxYzZiZTFhNTg5OTA4NmM3MTlkY2ZmNGM5MCIsInN1YiI6IjY1MWY3NjMwZjA0ZDAxMDBmZmVlM2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RI47bg-GFuAxe4PclvqxwsgvhPWMZ42whboBUmQoXo0' ,
                
            },
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
} 
