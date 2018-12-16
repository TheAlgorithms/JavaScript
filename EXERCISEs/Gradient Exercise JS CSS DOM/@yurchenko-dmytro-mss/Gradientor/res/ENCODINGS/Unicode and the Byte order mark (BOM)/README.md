# Unicode and the Byte order mark (BOM)
The byte order mark (BOM) is a Unicode character(`U+FEFF`) at the start of a text stream/file to signify the endianness and encoding used to a high level of confidence.

## Examples

```sh
# utf-8
$ hexdump -C utf-8-bom.txt
00000000  ef bb bf 54 65 73 74 20  73 74 72 69 6e 67 20 e2  |...Test string .|
00000010  98 ba 0a                                          |...|
00000013

# utf-16 - big endian
$ hexdump -C utf-16be-bom.txt
00000000  fe ff 00 54 00 65 00 73  00 74 00 20 00 73 00 74  |...T.e.s.t. .s.t|
00000010  00 72 00 69 00 6e 00 67  00 20 26 3a 00 0a        |.r.i.n.g. &:..|
0000001e

# utf-16 - little endian
$ hexdump -C utf-16le-bom.txt
00000000  ff fe 54 00 65 00 73 00  74 00 20 00 73 00 74 00  |..T.e.s.t. .s.t.|
00000010  72 00 69 00 6e 00 67 00  20 00 3a 26 0a 00        |r.i.n.g. .:&..|
0000001e
```

Therefore, byte order marks are:
- `UTF-8`: `ef,bb,bf`
- `UTF-16-BE`: `fe,ff`
- `UTF-16-LE`: `ff,fe`

## Reference
- https://en.wikipedia.org/wiki/Byte_order_mark
- https://docs.python.org/2/library/codecs.html#standard-encodings
- https://en.wikipedia.org/wiki/Endianness
