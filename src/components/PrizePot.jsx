import React from 'react'
import "../prizepot.css"
import RoundTickets from './RoundTickets';

export default function PrizePot() {
    const [active, setActive] = React.useState(false);
    const [ticketModal, setTicketModal] = React.useState(false)
    const handleActive = ()=>{
        active ? setActive(false): setActive(true)
    }
    const handleTicketModal = (e)=>{
        e.preventDefault()
        ticketModal ? setTicketModal(false) : setTicketModal(true)
    }
  return (
    <div className=''>
        <div className="prizepot">
            <div className="prizepot-header">
                <h3>Next Draw</h3>
            </div>

            <div className="prizepot-profit">
                <h2>Prize Pot</h2>
                <div>
                   <p> ~$246,858</p>
                   <small>26,575 CAKE</small>
                </div>
            </div>

            <div className="your-tickets">
                <h2>Your Tickets</h2>
                <div>
                    <p>You have 0 ticket this round</p>
                    <a href="" style={{color: "var(--main-color)" }} onClick={handleTicketModal}>View your tickets</a>
                </div>
            </div>

            { ticketModal && <RoundTickets setTicketModal={setTicketModal}/>}

            <div className="prizes">
                <div className={active ? "prizes-active": "prizes-hidden"}>
                    <div className="winning-category">
                        <div className="winner1">
                            <p className="winner-head">Match first 1</p>
                            <p className="winner-amount">500 cake</p>
                            <small>~$4000</small>
                        </div>
                        <div className="winner2">
                            <p className="winner-head">Match first 2</p>
                            <p className="winner-amount">750 cake</p>
                            <small>~$7211</small>
                        </div>
                        <div className="winner3">
                            <p className="winner-head">Match first 3</p>
                            <p className="winner-amount">1200 cake</p>
                            <small>~$12000</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-btn" onClick={handleActive}>
                {!active ? <>
                    <span>Details</span> <span>&#9660;</span>
                </>: 
                    <>
                        <span>Hide</span> <span>&#9650;</span>
                    </>
                }
            </div>
            
        </div>

        
    </div>
  )
}
