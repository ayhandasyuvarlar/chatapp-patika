import React from 'react'
import './styles.css'
export default function MessageItem({item}) {
  return (
    <div className={`chatItem ${item.fromMe ? 'right' : ''}`}>{item.message}</div>
  )
}
