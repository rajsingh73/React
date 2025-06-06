import react from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const Elementm=react.createElement(
  'a',
  {href:'https://www.google.com/',target:'_blank'},
  'See you on next site'
)
createRoot(document.getElementById('root')).render(
    Elementm
)
