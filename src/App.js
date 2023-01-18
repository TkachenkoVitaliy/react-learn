import React from 'react'
import './App.css'
import ProductList from './components/productList/ProductList'
import Header from './components/header/Header'


const products = [
	{
		id: 1,
		name: "товар1",
		price: "50",
	},
	{
		id: 2,
		name: "товар2",
		price: "100",
	},
	{
		id: 3,
		name: "товар3",
		price: "150",
	},
	{
		id: 4,
		name: "товар4",
		price: "200",
	},
	{
		id: 5,
		name: "товар5",
		price: "250",
	},
	{
		id: 6,
		name: "товар6",
		price: "300",
	},
	{
		id: 7,
		name: "товар7",
		price: "350",
	},
	{
		id: 8,
		name: "товар8",
		price: "400",
	},
	{
		id: 9,
		name: "товар9",
		price: "450",
	},
	{
		id: 10,
		name: "товар10",
		price: "500",
	},
]


function App() {
  return (
    <div className="App">
	  <Header/>
	  <ProductList items={products}/>
    </div>
  )
}

export default App
