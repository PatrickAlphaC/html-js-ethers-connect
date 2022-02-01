const { ethers } = require("ethers");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

async function execute() {
  if (typeof window.ethereum !== "undefined") {
    contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_favoriteNumber",
            type: "uint256",
          },
        ],
        name: "addPerson",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        name: "nameToFavoriteNumber",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "people",
        outputs: [
          {
            internalType: "uint256",
            name: "favoriteNumber",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "retrieve",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_favoriteNumber",
            type: "uint256",
          },
        ],
        name: "store",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.store(42);
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}

module.exports = {
  connect,
  execute,
};
