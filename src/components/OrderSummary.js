import { StyledModal } from "../StyledComponents/Modal.styled";
import { useState } from "react";
import reactDom from "react-dom";
import "../switch.css"

export const OrderSummary = (props)=>{
  const show_ = "close";
  const handleModalHide = ()=>{
    props.tModal(show_)
    setChecked(false)
  }
  const [pay, setPay] = useState("Pay Now");
  const handlePay = ()=>{
    setInterval(()=>{
      console.log("wait");
    }, 90000)
    setPay("Processing...");
  }

  const [checked, setChecked] = useState(false);
  const onCheck = ()=>{
    checked ? setChecked(false) : setChecked(true)
  }
    return reactDom.createPortal(
      <div className={` bg-1 ${props.hide}`}>
        <StyledModal>
        <p className="close-btn" onClick={handleModalHide}>X</p>
        <h2>Order Summary</h2>
        <div className="flex bg-1"><p className="text-muted">Ticket Type</p> <p>{props.type}</p></div>
        <div className="flex"><p className="text-muted">Ticket Cost</p> <p>${props.amount}</p></div>
        <div className="">
          <div className="flex"><p className="text-muted">No. of Ticket</p> <p>{props.num}</p></div>
          <div className="flex">
            <p className="allowance"><span className="text-muted" >Allowance</span> <span className="toolTip-icon" data-toolTip={!checked ? "Only the exact amount is allowed to be transferred. You will need to reapprove for subsequent transaction." : "Be aware of the riskes of giving infinite approval to smart contract address."}>&#8505;</span></p> 
            <p className="switch">
              <small>{!checked ? "Exact Amount" : "Infinite"}</small>
              <input type="checkbox" className="allowance-checkbox"  checked={checked} id="checkboxToggler"/>
              <label htmlFor="checkboxToggler" onClick={onCheck}></label>
            </p>
          </div>
          <div className="flex"><h4>Total Amount</h4><h4>${props.amount*props.num}</h4></div>
        </div>
        <div className="mt-5"><a href="/coming" className="btn" onClick={handlePay}>{pay}</a></div>
      </StyledModal>
      </div>, document.querySelector("body")
    )
}