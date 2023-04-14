import mockPosts from './mock_data/posts.json'

const MOCK_POSTS = false;

const getPosts = async onDataRetrieved => {
    let posts = [];
    if (MOCK_POSTS) {
        posts = mockPosts;
    } else {
        // Retrieve data from API.
        const raw = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await raw.json();
        posts = json;
    }
    onDataRetrieved(posts);
};

export { getPosts };
