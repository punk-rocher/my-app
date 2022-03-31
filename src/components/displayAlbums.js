import React, { useState, useEffect } from "react";
import "../App.css";
import { useLocation } from "react-router-dom";

const DisplayAlbums = () => {
	const [state, setState] = useState({});
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const location = useLocation();

	useEffect(() => {
		setState({
			id: location.state.detail,
		});
	}, [location]);

	useEffect(() => {
		if (data && state.id) {
			let test = data.json?.filter((row) => row.albumId === state.id);
			setFilteredData(test);
		}
	}, [data, state]);

	useEffect(() => {
		handleFetch();
	}, []);

	const handleFetch = async () => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((res) => res.json())
			.then((json) => {
				setData({
					json,
				});
			});
	};
	return (
		<div className="App">
			{/* <div class="bg_image"></div> */}
			<ul class="Album">
				{/* {state.map((item) => (
					<div></div>
				))} */}
			</ul>
		</div>
	);
};

export default DisplayAlbums;
