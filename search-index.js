var N=null,E="",T="t",U="u",searchIndex={};
var R=["NoCipher","erasedpwbox","result","pwbox","Scrypt","Returns \"light\" `scrypt` parameters as used in Ethereum…","KEY_LEN","DeriveKey","Cipher","NONCE_LEN","Returns the byte size of the encrypted data stored in this…","open_into","Decrypts the box into the specified container.","Decrypts the box and returns its contents. The returned…","try_from","borrow_mut","try_into","type_id","to_owned","clone_into","borrow","typeid","to_string","pwbox::rcrypto","initialize","pwbox::sodium","seal_or_open","add_ciphers_and_kdfs","salt_len","derive_key","Works as follows:","Returns the \"interactive\" `scrypt` parameters as defined…","default","aes128gcm","xsalsa20poly1305","formatter","backtrace","option","serialize","deserialize","Byte size of a key for this cipher.","Byte size of a nonce (aka initialization vector, IV) for…","Byte size of a MAC key.","MAC_LEN","Byte size of the MAC output.","build_box","Initializes a `PwBoxBuilder` with the recommended cipher…","pwboxbuilder","Byte size of a key.","Byte size of a nonce (aka initialization vector, or IV).","Byte size of a message authentication code (MAC).","CipherOutput","EraseError","ErasedPwBox","UnauthenticatedCipher","RestoredPwBox","PwBoxBuilder","CipherWithMac","SensitiveData","Aes128Gcm","Aes128Ctr","Keccak256","RustCrypto","XSalsa20Poly1305"];

searchIndex[R[3]]={"doc":"Password-based encryption and decryption for Rust.","i":[[3,R[57],R[3],"Authenticated cipher constructed from an ordinary…",N,N],[3,R[53],E,"Password-encrypted box suitable for (de)serialization.",N,N],[3,"Eraser",E,"Helper structure to convert password-encrypted boxes to a…",N,N],[3,R[51],E,"Output of a `Cipher`.",N,N],[12,"ciphertext",E,"Encrypted data. Has the same size as the original data.",0,N],[12,"mac",E,"Message authentication code for the `ciphertext`.",0,N],[3,R[58],E,"Container for data obtained after opening a `PwBox`.",N,N],[3,"PwBox",E,"Password-encrypted data.",N,N],[3,R[55],E,"Password-encrypted box restored after deserialization.",N,N],[3,R[56],E,"Builder for `PwBox`es.",N,N],[4,R[52],E,"Errors occurring during erasing a `PwBox`.",N,N],[13,"NoKdf",E,"KDF used in the box is not registered with the `Eraser`.",1,N],[13,R[0],E,"Cipher used in the box is not registered with the `Eraser`.",1,N],[13,"SerializeKdf",E,"Error serializing KDF params.",1,N],[4,"Error",E,"Errors occurring during `PwBox` operations.",N,N],[13,R[0],E,"A cipher with the specified name is not registered.",2,N],[13,"NoKdf",E,"A key derivation function with the specified name is not…",2,N],[13,"KdfParams",E,"Failed to parse KDF parameters.",2,N],[13,"NonceLen",E,"Incorrect nonce length encountered.",2,N],[13,"MacLen",E,"Incorrect MAC length encountered.",2,N],[13,"SaltLen",E,"Incorrect salt length encountered.",2,N],[13,"MacMismatch",E,"Failed to verify MAC code.",2,N],[13,R[7],E,"Error during KDF invocation.",2,N],[11,"len",E,R[10],3,[[["self"]],["usize"]]],[11,"new",E,"Creates an `Eraser` with no ciphers or KDFs.",4,[[],["self"]]],[11,"add_cipher",E,"Adds a cipher.",4,[[["self"],["str"]],["self"]]],[11,"add_kdf",E,"Adds a key derivation function.",4,[[["self"],["str"]],["self"]]],[11,"add_suite",E,"Adds all KDFs and ciphers from the specified `Suite`.",4,[[["self"]],["self"]]],[11,"erase",E,"Converts a `pwbox` into serializable form.",4,[[["self"],[R[3]]],[R[2],[R[1],"eraseerror"]]]],[11,"restore",E,"Restores a `PwBox` from the serialized form.",4,[[["self"],[R[1]]],[R[2],["restoredpwbox","error"]]]],[0,"rcrypto",E,"`rust-crypto` cryptographic backend.",N,N],[3,R[4],R[23],"`Scrypt` key derivation function parameterized as per the…",N,N],[3,R[59],E,"AES-128 cipher in GCM mode.",N,N],[4,R[60],E,"AES-128 cipher in CTR mode.",N,N],[4,R[61],E,"MAC construction based on Keccak256 hash function.",N,N],[4,R[62],E,"Suite for password-based encryption provided by…",N,N],[11,"light",E,R[5],5,[[],["self"]]],[11,"custom",E,"Creates custom parameters for scrypt KDF.",5,[[["u8"],["u32"]],["self"]]],[0,"sodium",R[3],"Crypto primitives based on `libsodium`.",N,N],[3,R[4],R[25],"`Scrypt` key derivation function parameterized as per…",N,N],[12,"opslimit",E,"Parameter determining the computational hardness of the KDF.",6,N],[12,"memlimit",E,"Parameter determining the RAM consumption of the KDF. The…",6,N],[3,R[63],E,"`xsalsa20` symmetric cipher with `poly1305` MAC.",N,N],[4,"Sodium",E,"Suite for password-based encryption provided by `libsodium`.",N,N],[11,"interactive",E,R[31],6,[[],["self"]]],[11,"light",E,R[5],6,[[],["self"]]],[11,"sensitive",E,"Returns the \"sensitive\" `scrypt` parameters as defined in…",6,[[],["self"]]],[8,"Mac",R[3],"Message authentication code.",N,N],[18,R[6],E,R[42],7,N],[18,R[43],E,R[44],7,N],[10,"digest",E,"Digests a message under the specified key.",7,N],[8,R[54],E,"Symmetric cipher without built-in authentication.",N,N],[18,R[6],E,R[40],8,N],[18,R[9],E,R[41],8,N],[10,R[26],E,"Encrypts or decrypts `message` in place, given the `nonce`…",8,N],[8,"Suite",E,"Cryptographic suite providing ciphers and KDFs for…",N,N],[16,R[8],E,"Recommended cipher for this suite.",9,N],[16,R[7],E,"Recommended KDF for this suite.",9,N],[11,R[45],E,R[46],9,[[["r"]],[R[47]]]],[10,R[27],E,"Adds ciphers and KDFs from this suite into the specified…",9,[[["eraser"]]]],[8,R[8],E,"Authenticated symmetric cipher.",N,N],[18,R[6],E,R[48],10,N],[18,R[9],E,R[49],10,N],[18,R[43],E,R[50],10,N],[10,"seal",E,"Encrypts `message` with the provided `key` and `nonce`.",10,N],[10,"open",E,"Decrypts `encrypted` message with the provided `key` and…",10,N],[8,R[7],E,"Key derivation function (KDF).",N,N],[10,R[28],E,"Returns byte size of salt supplied to the KDF.",11,[[["self"]],["usize"]]],[10,R[29],E,"Derives a key from the given password and salt.",11,N],[11,"new",E,"Creates a new box by using default settings of the…",12,N],[11,"len",E,R[10],12,[[["self"]],["usize"]]],[11,R[11],E,R[12],12,N],[11,"open",E,R[13],12,N],[11,"len",E,R[10],13,[[["self"]],["usize"]]],[11,R[11],E,R[12],13,N],[11,"open",E,R[13],13,N],[11,"new",E,"Initializes the builder with a random number generator.",14,[[["r"]],["self"]]],[11,"kdf",E,"Sets up a custom KDF.",14,[[["self"],["k"]],["self"]]],[11,"seal",E,"Creates a new `PwBox` with the specified password and…",14,N],[11,"from",E,E,15,[[[T]],[T]]],[11,"into",E,E,15,[[["self"]],[U]]],[11,R[14],E,E,15,[[[U]],[R[2]]]],[11,R[20],E,E,15,[[["self"]],[T]]],[11,R[17],E,E,15,[[["self"]],[R[21]]]],[11,R[15],E,E,15,[[["self"]],[T]]],[11,R[16],E,E,15,[[["self"]],[R[2]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[19],E,E,3,N],[11,R[14],E,E,3,[[[U]],[R[2]]]],[11,R[20],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,[[["self"]],[R[21]]]],[11,R[15],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[R[2]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[14],E,E,4,[[[U]],[R[2]]]],[11,R[20],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,[[["self"]],[R[21]]]],[11,R[15],E,E,4,[[["self"]],[T]]],[11,R[16],E,E,4,[[["self"]],[R[2]]]],[11,"clear",E,E,4,N],[11,R[24],E,E,4,N],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[19],E,E,0,N],[11,R[14],E,E,0,[[[U]],[R[2]]]],[11,R[20],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,[[["self"]],[R[21]]]],[11,R[15],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[R[2]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[["self"]],[U]]],[11,R[18],E,E,16,[[["self"]],[T]]],[11,R[19],E,E,16,N],[11,R[14],E,E,16,[[[U]],[R[2]]]],[11,R[20],E,E,16,[[["self"]],[T]]],[11,R[17],E,E,16,[[["self"]],[R[21]]]],[11,R[15],E,E,16,[[["self"]],[T]]],[11,R[16],E,E,16,[[["self"]],[R[2]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[["self"]],[U]]],[11,R[14],E,E,12,[[[U]],[R[2]]]],[11,R[20],E,E,12,[[["self"]],[T]]],[11,R[17],E,E,12,[[["self"]],[R[21]]]],[11,R[15],E,E,12,[[["self"]],[T]]],[11,R[16],E,E,12,[[["self"]],[R[2]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[["self"]],[U]]],[11,R[14],E,E,13,[[[U]],[R[2]]]],[11,R[20],E,E,13,[[["self"]],[T]]],[11,R[17],E,E,13,[[["self"]],[R[21]]]],[11,R[15],E,E,13,[[["self"]],[T]]],[11,R[16],E,E,13,[[["self"]],[R[2]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[["self"]],[U]]],[11,R[14],E,E,14,[[[U]],[R[2]]]],[11,R[20],E,E,14,[[["self"]],[T]]],[11,R[17],E,E,14,[[["self"]],[R[21]]]],[11,R[15],E,E,14,[[["self"]],[T]]],[11,R[16],E,E,14,[[["self"]],[R[2]]]],[11,R[22],E,E,1,[[["self"]],["string"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[14],E,E,1,[[[U]],[R[2]]]],[11,R[20],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,[[["self"]],[R[21]]]],[11,R[15],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[R[2]]]],[11,"as_fail",E,E,1,[[["self"]],["fail"]]],[11,R[22],E,E,2,[[["self"]],["string"]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[14],E,E,2,[[[U]],[R[2]]]],[11,R[20],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,[[["self"]],[R[21]]]],[11,R[15],E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[R[2]]]],[11,"as_fail",E,E,2,[[["self"]],["fail"]]],[11,"from",R[23],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[19],E,E,5,N],[11,R[14],E,E,5,[[[U]],[R[2]]]],[11,R[20],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,[[["self"]],[R[21]]]],[11,R[15],E,E,5,[[["self"]],[T]]],[11,R[16],E,E,5,[[["self"]],[R[2]]]],[11,"clear",E,E,5,N],[11,R[24],E,E,5,N],[11,"from",E,E,17,[[[T]],[T]]],[11,"into",E,E,17,[[["self"]],[U]]],[11,R[18],E,E,17,[[["self"]],[T]]],[11,R[19],E,E,17,N],[11,R[14],E,E,17,[[[U]],[R[2]]]],[11,R[20],E,E,17,[[["self"]],[T]]],[11,R[17],E,E,17,[[["self"]],[R[21]]]],[11,R[15],E,E,17,[[["self"]],[T]]],[11,R[16],E,E,17,[[["self"]],[R[2]]]],[11,"clear",E,E,17,N],[11,R[24],E,E,17,N],[11,"from",E,E,18,[[[T]],[T]]],[11,"into",E,E,18,[[["self"]],[U]]],[11,R[14],E,E,18,[[[U]],[R[2]]]],[11,R[20],E,E,18,[[["self"]],[T]]],[11,R[17],E,E,18,[[["self"]],[R[21]]]],[11,R[15],E,E,18,[[["self"]],[T]]],[11,R[16],E,E,18,[[["self"]],[R[2]]]],[11,"from",E,E,19,[[[T]],[T]]],[11,"into",E,E,19,[[["self"]],[U]]],[11,R[14],E,E,19,[[[U]],[R[2]]]],[11,R[20],E,E,19,[[["self"]],[T]]],[11,R[17],E,E,19,[[["self"]],[R[21]]]],[11,R[15],E,E,19,[[["self"]],[T]]],[11,R[16],E,E,19,[[["self"]],[R[2]]]],[11,"from",E,E,20,[[[T]],[T]]],[11,"into",E,E,20,[[["self"]],[U]]],[11,R[14],E,E,20,[[[U]],[R[2]]]],[11,R[20],E,E,20,[[["self"]],[T]]],[11,R[17],E,E,20,[[["self"]],[R[21]]]],[11,R[15],E,E,20,[[["self"]],[T]]],[11,R[16],E,E,20,[[["self"]],[R[2]]]],[11,"from",R[25],E,6,[[[T]],[T]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[19],E,E,6,N],[11,R[14],E,E,6,[[[U]],[R[2]]]],[11,R[20],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,[[["self"]],[R[21]]]],[11,R[15],E,E,6,[[["self"]],[T]]],[11,R[16],E,E,6,[[["self"]],[R[2]]]],[11,"clear",E,E,6,N],[11,R[24],E,E,6,N],[11,"from",E,E,21,[[[T]],[T]]],[11,"into",E,E,21,[[["self"]],[U]]],[11,R[18],E,E,21,[[["self"]],[T]]],[11,R[19],E,E,21,N],[11,R[14],E,E,21,[[[U]],[R[2]]]],[11,R[20],E,E,21,[[["self"]],[T]]],[11,R[17],E,E,21,[[["self"]],[R[21]]]],[11,R[15],E,E,21,[[["self"]],[T]]],[11,R[16],E,E,21,[[["self"]],[R[2]]]],[11,"clear",E,E,21,N],[11,R[24],E,E,21,N],[11,"from",E,E,22,[[[T]],[T]]],[11,"into",E,E,22,[[["self"]],[U]]],[11,R[14],E,E,22,[[[U]],[R[2]]]],[11,R[20],E,E,22,[[["self"]],[T]]],[11,R[17],E,E,22,[[["self"]],[R[21]]]],[11,R[15],E,E,22,[[["self"]],[T]]],[11,R[16],E,E,22,[[["self"]],[R[2]]]],[11,R[26],R[23],E,18,N],[11,"digest",E,E,19,N],[11,R[27],E,E,20,[[["eraser"]]]],[11,R[27],R[25],E,22,[[["eraser"]]]],[11,R[28],R[23],E,5,[[["self"]],["usize"]]],[11,R[29],E,E,5,N],[11,R[28],R[25],E,6,[[["self"]],["usize"]]],[11,R[29],E,E,6,N],[11,"seal",R[3],R[30],15,N],[11,"open",E,R[30],15,N],[11,"seal",R[23],E,17,N],[11,"open",E,E,17,N],[11,"seal",R[25],E,21,N],[11,"open",E,E,21,N],[11,R[32],R[3],E,4,[[],["self"]]],[11,R[32],R[23],R[31],5,[[],["self"]]],[11,R[32],E,E,17,[[],[R[33]]]],[11,R[32],R[25],R[31],6,[[],["self"]]],[11,R[32],E,E,21,[[],[R[34]]]],[11,"clone",R[3],E,3,[[["self"]],[R[1]]]],[11,"clone",E,E,0,[[["self"]],["cipheroutput"]]],[11,"clone",E,E,16,[[["self"]],["sensitivedata"]]],[11,"clone",R[23],E,5,[[["self"]],["scrypt"]]],[11,"clone",E,E,17,[[["self"]],[R[33]]]],[11,"clone",R[25],E,6,[[["self"]],["scrypt"]]],[11,"clone",E,E,21,[[["self"]],[R[34]]]],[11,"drop",R[3],E,16,[[["self"]]]],[11,"fmt",E,E,1,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,2,[[["self"],[R[35]]],[R[2]]]],[11,"deref",E,E,16,N],[11,"fmt",E,E,15,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,3,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,1,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,4,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,0,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,16,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",R[23],E,18,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,19,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,5,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,17,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,20,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",R[25],E,6,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,21,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,22,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",R[3],E,2,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,12,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,13,[[["self"],[R[35]]],[R[2]]]],[11,"fmt",E,E,14,[[["self"],[R[35]]],[R[2]]]],[11,"name",E,E,1,[[["self"]],[R[37],["str"]]]],[11,"cause",E,E,1,[[["self"]],[R[37],["fail"]]]],[11,R[36],E,E,1,[[["self"]],[R[37],[R[36]]]]],[11,"name",E,E,2,[[["self"]],[R[37],["str"]]]],[11,"cause",E,E,2,[[["self"]],[R[37],["fail"]]]],[11,R[36],E,E,2,[[["self"]],[R[37],[R[36]]]]],[11,R[38],E,E,3,[[["self"],["__s"]],[R[2]]]],[11,R[38],E,E,0,[[["self"],["__s"]],[R[2]]]],[11,R[38],R[23],E,5,[[["self"],["__s"]],[R[2]]]],[11,R[38],R[25],E,6,[[["self"],["__s"]],[R[2]]]],[11,R[39],R[3],E,3,[[["__d"]],[R[2]]]],[11,R[39],E,E,0,[[["__d"]],[R[2]]]],[11,R[39],R[23],E,5,[[["__d"]],[R[2]]]],[11,R[39],R[25],E,6,[[["__d"]],[R[2]]]],[18,R[6],R[3],R[40],8,N],[18,R[9],E,R[41],8,N],[18,R[6],E,R[42],7,N],[18,R[43],E,R[44],7,N],[11,R[45],E,R[46],9,[[["r"]],[R[47]]]],[18,R[6],E,R[48],10,N],[18,R[9],E,R[49],10,N],[18,R[43],E,R[50],10,N]],"p":[[3,R[51]],[4,R[52]],[4,"Error"],[3,R[53]],[3,"Eraser"],[3,R[4]],[3,R[4]],[8,"Mac"],[8,R[54]],[8,"Suite"],[8,R[8]],[8,R[7]],[3,"PwBox"],[3,R[55]],[3,R[56]],[3,R[57]],[3,R[58]],[3,R[59]],[4,R[60]],[4,R[61]],[4,R[62]],[3,R[63]],[4,"Sodium"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);