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
        return;
    }

    for (const letter in ciphers) {
        if (encoded.startsWith(ciphers[letter])) {
            decode(encoded.substring(ciphers[letter].length), decoded + letter, ciphers, decodedMessages);
        }
    }

}
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
print(decodedMessages.sort().join('\n'));