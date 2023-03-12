import React from 'react'

function BoxscoreTable({data}) {
  return (
    <tr>
    <td>{data.player}</td>
   {data.mp ?
       <>
   <td>{data.mp}</td>
    <td>{data.fg}</td>
    <td>{data.fga}</td>
    <td>{data.fg_pct}</td>
    <td>{data.fg3}</td>
    <td>{data.fg3a}</td>
    <td>{data.fg3_pct}</td>
    <td>{data.ft}</td>
    <td>{data.fta}</td>
    <td>{data.ft_pct}</td>
    <td>{data.orb}</td>
    <td>{data.drb}</td>
    <td>{data.trb}</td>
    <td>{data.ast}</td>
    <td>{data.stl}</td>
    <td>{data.blk}</td>
    <td>{data.tov}</td>
    <td>{data.pf}</td>
    <td>{data.pts}</td>
    <td>{data.plus_minus}</td>
   </> 
    : <td>Out</td>}
  </tr>
  )
}

export default BoxscoreTable