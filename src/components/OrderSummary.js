import { StyledModal } from "../StyledComponents/Modal.styled";
import { useState } from "react";
import reactDom from "react-dom";

export const OrderSummary = (props)=>{
  const show_ = "close";
  const handleModalHide = ()=>{
    props.tModal(show_)
  }
  const [pay, setPay] = useState("Pay Now");
  const handlePay = ()=>{
    setInterval(()=>{
      console.log("wait");
    }, 90000)
    setPay("Processing...");
  }
    return reactDom.createPortal(
      <div className={` bg-1 ${props.hide}`}>
        <StyledModal>
        <p className="close-btn" onClick={handleModalHide}>X</p>
        <h2>Order Summary</h2>
        <div className="flex bg-1"><p className="text-muted">Ticket Type</p> <p>{props.type}</p></div>
        <div className="flex"><p className="text-muted">Ticket Cost</p> <p>${props.amount}</p></div>
        <div className="mt-5">
          <div className="flex"><p className="text-muted">No. of Ticket</p> <p>{props.num}</p></div>
          <div className="flex"><h4>Total Amount</h4><h4>${props.amount*props.num}</h4></div>
        </div>
        <div className="mt-5"><a href="/coming" className="btn" onClick={handlePay}>{pay}</a></div>
      </StyledModal>
      </div>, document.querySelector("body")
    )
}