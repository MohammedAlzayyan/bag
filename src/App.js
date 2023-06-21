// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
// import Test from './components/test/Test'
// import Quiz from './components/quiz/Quiz'

function App() {
  const dataCart = [
    {
      id: 0,
      name: 'Samsung Galaxy S8',
      price: 399.99,
      quantity: 3,
      image:
        'https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png',
    },
    {
      id: 1,
      name: 'Google Pixel',
      price: 499.99,
      quantity: 1,
      image:
        'https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png',
    },
    {
      id: 2,
      name: 'Xiaomi Redmi Note 2',
      price: 699.99,
      quantity: 1,
      image:
        'https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S7',
      price: 599.99,
      quantity: 1,
      image:
        'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
    },
  ]

  const dataProducts = [
    {
      id: 0,
      name: 'Samsung Galaxy S8',
      price: 399.99,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      quantity: 18,
      image:
        'https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png',
      avaliable: 'Avaliable',
    },
    {
      id: 1,
      name: 'Google Pixel',
      price: 499.99,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      quantity: 0,
      image:
        'https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png',
      avaliable: 'Not Avaliable',
    },
    {
      id: 2,
      name: 'Xiaomi Redmi Note 2',
      price: 699.99,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      quantity: 21,
      image:
        'https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png',
      avaliable: 'Avaliable',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S7',
      price: 599.99,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      quantity: 0,
      image:
        'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
      avaliable: 'Not Avaliable',
    },
    {
      id: 4,
      name: 'iphone',
      price: 999.99,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      quantity: 5,
      image:
        'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
      avaliable: 'Avaliable',
    },
  ]

  return (
    <div className="App">
      <Home dataProducts={dataProducts} dataCart={dataCart} />
      {/* <Test /> */}
      {/* <Quiz /> */}
    </div>
  )
}

export default App
