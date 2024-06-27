export const bookCover = (item) => item.volumeInfo?.imageLinks?.thumbnail || 'default-image-url.jpg';
export const bookTitle = (item) => item.volumeInfo?.title || 'Unknown Title';
export const authors = (item) => item.volumeInfo?.authors || ['Unknown Author'];
export const categories = (item) => item.volumeInfo?.categories || ['Uncategorized'];