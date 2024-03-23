i have 2 arrays of objcets and 3 variables,

const network = 'aptos'
const ownerAddress
const collectionId
 const ALL_PRODUCTS = [
     {
         id: '123',
         name: 'abang',
         nfts: [
            {
                provider: "move",
                network: "Aptos",
                chainId: "",
                address: "0x",
                model_type: "skyblaze mock A",
                // supply
             },
             {
                provider: "evm",
                network: "goerli",
                chainId: "",
                address: "0x",
                model_type: "skyblaze mock A",
                // supply
              },
         ],
        // ...etc
    },
     {
         id: '2',
         name: 'second',
         nfts: []
    },
  ]

const x = [
    {
test:'abcd',
        current_token_data: {
            token_name: 'MODEL_123_LOKDQWDQWD'
        }
    },
    {
        current_token_data: {
            token_name: 'XASD_D_MODEL_123_LOKDQWDQWD'
        }
    },
    {
        current_token_data: {
            token_name: 'XASD_D_MODEL123_LOKDQWDQWD'
        }
    },
 {
        current_token_data: {
            token_name: 'MODEL_1123_LOKDQWDQWD'
        }
    },
]

i want you to filter and return the object with token_name with pattern of something. 
basically we are restructuring the XPathResult.
the token_name string structure will be  MODEL_NUMBER_IDENTITY___ETC

1. now i want you to to get the NUMBER here, because it's the id of product. so for e.g:
MODEL_123_ABCDERANDOM_BLABLA
the id of product will be 123

2. once you get the id product, i want you to find the object with product id from ALL_PRODUCTS.
since it's id 123 then the product is 'abang" right? 

so return with new object isntead, dont mutable it again. 

and include the object from x too then you need to find the objects of matched nfts from ALL_PRODUCTS, find the same network of nfts using the varible network above. 

so  FROM THE examples above of x and ALL_PRODUCTS, some of objects in X have weird strucutre of token_name, then ignore it. only get with the pattern i decide which is MODEL_NUMBER

and even if it's pattern correct, sometimes there's no matched product with those id and that's fine, ignore it. 

so the result  from example should be 
[    {
        
        id: '123',
        name: 'abang',
    minted: {
        // this data we get from nfts array. and find the match one
        //   ...item?.nfts?.find(o => o?.network.toLowerCase()  === network.toLowerCase() ) // 
            provider: "move",
            network: "Aptos",
            chainId: "",
            address: "0x",
            model_type: "skyblaze mock A",
            ///
            test:'abcd',
            current_token_data: {
                token_name: 'MODEL_123_LOKDQWDQWD'
            },
        }
    },
    {
        
        id: '123',
        name: 'abang',
            minted: {
       // this data we get from nfts array. and find the match one
        //   ...item?.nfts?.find(o => o?.network.toLowerCase() === network.toLowerCase() ) // 
        provider: "move",
        network: "Aptos",
        chainId: "",
        address: "0x",
        model_type: "skyblaze mock A",
        ///
            current_token_data: {
                token_name: 'XASD_D_MODEL_123_LOKDQWDQWD'
            },
        }
    },
]

look, the object is combined, so objects from x is now in minted: combining one of the "nfts" array that matched
which since the network intended is Aptos


why not the result be like:

result.push({
    ...product,
    minted: {
        ...matchedNft,
        ...tokenObj
    }
});