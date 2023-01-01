class Book {
    constructor( title,size,theme,used,isInShelf) {
    this.title = title;
    this.size = size;
    this.theme = theme;
    this.used = used;
    this.isInShelf = isInShelf;
    }
    updateInShelf(place) {
      let isInShelfStatus =  place === shelf;
      this.isInShelf = isInShelfStatus;
    }
  }
  
  export default Book;