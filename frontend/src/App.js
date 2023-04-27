import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractAddress from "./contracts/contract-address.json"
import contractArtifact from "./contracts/contract-artifact.json";

function App() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState("");

  async function getWallet() {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }
  }
  
  async function connectAccount() {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(acc);
    
    getContract();
  }

  function getContract() {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const appContract = new ethers.Contract(contractAddress.address, contractArtifact.abi, signer);
 
    setContract(appContract);
  }

  async function getCart() {
    if (contract) {
      setCart(await contract.getCart());
    }
  }

  async function handleAdd() {
    if (contract) {
      let tx = await contract.addItem(input);
      await tx.wait();
      getCart();
    }
    setInput("");
  }

  async function handleDelete() {
    if (contract) {
      let tx = await contract.deleteLastItem();
      await tx.wait();
      getCart();
    }
  }

  function displayUI() {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    getCart();

    return (
      <div>
        <p>Your Metamask wallet: {account}</p>

        <input 
          type="text" 
          placeholder="Enter your item" 
          value={input} 
          onChange={e => setInput(e.target.value)}
          style={{marginTop:"50px", marginBottom:"20px"}}
          ></input>
        <button onClick={handleAdd}>Add item</button>
        <button onClick={handleDelete} style={{marginLeft:"50px"}}>Delete last item</button>

        <h3>Your cart:</h3>
        {cart.map(item => <p>{item}</p>)}
        
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Add items to your cart below!</h1>
      {displayUI()}
    </div>
  );
}

export default App;
