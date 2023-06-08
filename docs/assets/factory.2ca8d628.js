import{NFTStorage as c}from"https://cdn.jsdelivr.net/npm/nft.storage/dist/bundle.esm.min.js";import{g as u}from"./db.6824b741.js";let g=async n=>{let t=await u("api_key").getItem("key");if(!t)throw new Error;let a=t;const e=new c({token:a}),s=await e.storeBlob(n);console.log("cid",s);const p=JSON.stringify({image:"ipfs://"+s}),d=new TextEncoder().encode(p),l=new Blob([d],{type:"application/json;charset=utf-8"}),i=await e.storeBlob(l);return console.log("metacid",i),i};const m=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"address",name:"collection",type:"address"}],name:"CollectionAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"_receiver",type:"address"},{internalType:"address",name:"_collection",type:"address"}],name:"addCollection",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiver",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{components:[{internalType:"string",name:"placeholder",type:"string"},{internalType:"string",name:"base",type:"string"},{internalType:"uint64",name:"supply",type:"uint64"},{internalType:"bool",name:"permanent",type:"bool"}],internalType:"struct F0.Config",name:"config",type:"tuple"}],name:"genesis",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"payable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],f=[{inputs:[{internalType:"address",name:"collection",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"get",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"royalty",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint32",name:"amount",type:"uint32"},{internalType:"bool",name:"permanent",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"collection",type:"address"},{components:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint32",name:"amount",type:"uint32"},{internalType:"bool",name:"permanent",type:"bool"}],internalType:"struct Royalty.Royaltydef",name:"def",type:"tuple"}],name:"set",outputs:[],stateMutability:"nonpayable",type:"function"}],y={v1:{rinkeby:{factory:"0x21163B50A0AC9a597C246e192764276cc994F936",royalty:"0x956cf692C90E50460BCAE282c36a18807F4A8fCC"},mainnet:{factory:"0xABbA052502321dcB789c90cAeFFe86CA4601bEb3",royalty:"0xF0Ec83A355eCa8539d6B4aD1066c3Bc6eA9ef6c3"}},v2:{rinkeby:{factory:"0xB4051d6205f6B98e5CB1238DaA279D8b875BF144",royalty:"0x956cf692C90E50460BCAE282c36a18807F4A8fCC"},mainnet:{factory:"0x4d70631664f1CEc37D33f289A3293662D70741C3",royalty:"0xF0Ec83A355eCa8539d6B4aD1066c3Bc6eA9ef6c3"},goerli:{factory:"0x45368836342D6544f98FF4bA0A136C0508E3ac90",royalty:"0xB8F3bC8998c13c4428d72c8b507257C7396772E0"},sepolia:{factory:"0x5b35121E32849438A47803F30f985293E64F41Ba",royalty:"0x1c907D5f6fD95777793571eB5560A94Bf097B39F"}}},o={4:"rinkeby",1:"mainnet",5:"goerli", 11155111:"sepolia"};let w=async(n,r)=>{let t=await n.eth.getChainId();console.log("chainId",t);let a=o[t],e=new n.eth.Contract(m,y[r][a].factory);return e.$chainId=t,e.$network=a,e},C=async(n,r)=>{let t=await n.eth.getChainId(),a=o[t],e=new n.eth.Contract(f,y[r][a].royalty);return e.$chainId=t,e.$network=a,e};export{w as f,C as r,g as u};
