import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function connectWallet() {
    const { ethereum } = window;
    if (!ethereum){
        toast.warn("Make sure you have MetaMask Connected", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return
    }
    const accounts = await ethereum.request({
        method: "eth_requestAccounts",
    });
    return(accounts[0] || "");
}

//Create useState "set to false" for connect wallet.

export function disconnectWallet() {
    return {walletConnected: false}
}
