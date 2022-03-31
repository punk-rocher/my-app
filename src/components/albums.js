import React, { useState, useEffect } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

const Albums = () => {
	let history = useHistory();
	const [state, setState] = useState({});

	useEffect(() => {
		handleFetch();
	}, []);

	const handleFetch = async () => {
		fetch("https://jsonplaceholder.typicode.com/albums")
			.then((res) => res.json())
			.then((json) => {
				setState({
					json,
				});
			});
	};
	const handleNavigate = (data) => {
		history.push({
			pathname: "/displayAlbums",
			state: { detail: data },
		});
	};
	return (
		<div className="App">
			{/* <div class="bg_image"></div> */}
			<ul class="Album">
				{state?.json?.map((item) => (
					<li key={item.id} onClick={() => handleNavigate(item.id)}>
						Album: {item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Albums;
