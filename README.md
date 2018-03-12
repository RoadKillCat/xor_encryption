# XOR Encryption

Use it [**here**](http://joeiddon.me/xor_encryption).

This method of encryption [is pretty poor](https://stackoverflow.com/questions/1135186/whats-wrong-with-xor-encryption), but it serves well as [one-time pad](https://en.wikipedia.org/wiki/One-time_pad) due to the easy of computaiton.

The eXclusive OR gate is *true* if only one of the bits are on. It has the neat funcitonality of being reversible - to decrypt the text, you can merely XOR it with the *same* key.

Here is an example of some bits being XORed with a repeating key (if the key is not the same length as the plaintext, it is repeated, however this is much less secure).

Text      | 01101101 | 01100101 | 01101111 | 01110111
Key       | 00110011 | 01010101 | 00110011 | 01010101
Encrypted | 01011110 | 00110000 | 01011100 | 00100010

And then this encrypted text can be XORed with the *same* key to get back tot he original plaintext.

Encrypted | 01011110 | 00110000 | 01011100 | 00100010
Key       | 00110011 | 01010101 | 00110011 | 01010101
Text      | 01101101 | 01100101 | 01101111 | 01110111
