export const TransactionDetails = (props)=>{
    return (
        <tr>
            <td>{props.time}</td>
            <td>{props.date}</td>
            <td>{props.type}</td>
            <td className="address"><a href="">{props.address.slice(0,8)+"..."}</a></td>
            <td>{props.ticket}</td>
        </tr>
        
    )
}