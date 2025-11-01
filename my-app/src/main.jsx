import React, { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>Custom App | Chai</h1>
        </div>
    )
}

 //   const ReactElement = {
 //       type: 'a',
 //       props: {
 //           href: 'https://google.com',
 //           target: '_blank'
 //       },
 //       children: 'click me to visit google' 
 //   }

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = "chai aur react"
const reactElement = createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click met to visit google',
    anotherUser

)

createRoot(document.getElementById('root')).render(
 
    reactElement
    
  
)
 