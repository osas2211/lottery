import React from 'react'

export default function RoundTickets({ setTicketModal}) {
    const handleTicketModal = ()=>{
        setTicketModal(false)
    }
  return (
    <>
        <div className='round-tickets'>
            <div className="prizepot-header d-flex"><h3>Round 495</h3> <span onClick={handleTicketModal}>X</span></div>
            <div className="content">
                <p>Your Ticket</p>
                <small>#3</small>
                <p className='num'>481117</p>
                <p className='num'>481117</p>
                <p className='num'>481117</p>
                
                <a href="#" className="btn-3">Buy Tickets</a>
            </div>
        </div>
    </>
  )
}
