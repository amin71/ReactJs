import React, {useState} from 'react'
import { editMessage } from '../../action/conversation'
const [editMode, seteditMode] =useState(false)
    const [selectedMessage, setselectedMessage] =useState(-1)
class MessagesBox extends React.Component {
  constructor () {
    super()
    
    this.state = {
      
    }
  }

  handleEdit (e, index) {
    this.props.dispatch(editMessage(e.target.value, index))
    seteditMode(true)
  }

  render () {
    console.log('propsss:', this.props)
    return (
      <div className='messages-box'>
        {
          this.props.messageList.map((message, index) => {
            if (message.sender === 1) {
              if (!({editMode} && {selectedMessage} === index)) {
                return (
                  <div key={index} className='sender' >
                    <span
                      style={{ fontSize: '10px' }}
                      onClick={() =>(seteditMode(true), setselectedMessage(index)}
                    >edit</span>
                    <span>{message.text}</span>
                  </div>
                )
              } else {
                return (
                  <input
                    key={index}
                    value={message.text}
                    onChange={(e) => this.handleEdit(e, index)}
                    onBlur={() => seteditMode( false )}
                  />
                )
              }
            } else {
              return (
                <div key={index} className='receiver' ><span>{message.text}</span></div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default MessagesBox
