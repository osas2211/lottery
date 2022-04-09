import React from 'react'
import "../styles/prizepot.css"
import RoundTickets from './RoundTickets';
import WinningCategory from './WinningCategory';

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
                    <WinningCategory />
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
