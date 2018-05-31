const {
    MongoClient,
} = require('mongodb');

const connectionString = 'mongodb://localhost';

const run = async () => {
    const client = await MongoClient.connect(connectionString);
    const db = client.db('BooksDB');
    const booksCollection = db.collection('books');
    const books = await booksCollection.find({
        $or: [{
                title: {
                    $regex: '.*magic.*',
                },
            },
            {
                description: {
                    $regex: '.*magic.*',
                },
            },
        ],
    });

    books.forEach((book) => console.log(book));
    console.log('-'.repeat(20));
};

const run1 = async () => {
    const client = await MongoClient.connect(connectionString);
    const db = client.db('BooksDB');
    const booksCollection = db.collection('books');
    const books = await booksCollection.find({
        categories: 'Fantasy',
    });

    books.forEach((book) => console.log(book));
    console.log('-'.repeat(20));
};

const run2 = async () => {
    const client = await MongoClient.connect(connectionString);
    const db = client.db('BooksDB');
    const booksCollection = db.collection('books');
    const books = await booksCollection.find({
        $and: [{
                categories: {
                    $regex: '.*Fantasy.*',
                },
            },
            {
                categories: {
                    $regex: '.*Magic.*',
                },
            },
        ],
    });

    books.forEach((book) => console.log(book));
    console.log('-'.repeat(20));
};

run();
run1();
run2();

