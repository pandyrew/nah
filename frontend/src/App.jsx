import "./App.css";
import axios from 'axios';
import React, { useEffect } from 'react';
import { Hero } from '../components/hero';



function App() {
	const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const message = event.target.elements.message.value;
        const response = await axios.post('/api/quote', { name, message });
        // handle response here
    };
	useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/quote');
            console.log(response.data);
        };
        fetchData();
    }, []);
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<Hero></Hero>

			<h2>Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				<p>Peter Anteater</p>
				<p>Zot Zot Zot!</p>
				<p>Every day</p>
			</div>
		</div>
	);
}

export default App;
