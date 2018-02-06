/* eslint-disable */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1122',
    'A1B12C11D2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ------------------------------------

const decode = (encoded, decoded, ciphers, decodedMessages) => {
    if (encoded.length === 0) {
        decodedMessages.push(decoded);
    }
    for (const letter in ciphers) {
        const cipher = ciphers[letter];
        if (encoded.startsWith(cipher)) {
            decode(encoded.substring(cipher.length), decoded + letter, ciphers, decodedMessages);
        }
    }
};

const encoded = gets();
const ciphers = {};
const decodedMessages = [];
const regex = new RegExp(/(\D\d+)/);

gets().split(regex).map((x) => {
    if (x !== '') {
        const letter = x.match(/\D/);
        const cipher = x.match(/\d+/);
        ciphers[letter[0]] = cipher[0];
    }
});

decode(encoded, '', ciphers, decodedMessages);

print(decodedMessages.length);
decodedMessages.sort().forEach(m => print(m));
/* eslint-enable */