//Init
import React, { useState } from "react";

// Controller
import { handleInput, handleSubmit } from "../controllers/portfolio";

// Style
import Nav from "./Nav";

//Style
import "../style/Portfolio.css";

function Portfolio() {
	//Initializing State
	let [portfolio, setPortfolio] = useState({
		title: "",
		heading: "",
		thumbnail: "",
		cover: "",
		skills: "",
		category: "",
		copyright: "",
		weburl: "",
		description: "",
	});
	let [submit, setSubmit] = useState("");

	// Image Progress States
	let [thumbnailProgress, setThumbnailProgress] = useState(0);
	let [coverProgress, setCoverProgress] = useState(0);

	//Rendering Component
	return (
		<>
			{/* Navbar */}
			<Nav />

			{/* Portfolio Form */}
			<div className="form-container portfolio">
				<form
					onSubmit={(e) =>
						handleSubmit(
							e,
							portfolio,
							setPortfolio,
							setSubmit,
							setThumbnailProgress,
							setCoverProgress
						)
					}
				>
					<h2>Add New Portfolio</h2>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={portfolio.title}
						onChange={(e) => handleInput(e, setPortfolio)}
						required
					/>
					<input
						type="text"
						name="heading"
						placeholder="Heading"
						value={portfolio.heading}
						onChange={(e) => handleInput(e, setPortfolio)}
						required
					/>
					<label className="file portal-thumbnail">
						<input
							type="file"
							id="file"
							name="thumbnail"
							aria-label="File browser example"
							onChange={(e) =>
								handleInput(
									e,
									setPortfolio,
									setThumbnailProgress
								)
							}
							required
						/>
						<span class="file-custom"></span>
						<progress
							value={thumbnailProgress}
							max="100"
						></progress>
					</label>
					<label className="file portal-cover">
						<input
							type="file"
							id="file"
							name="cover"
							aria-label="File browser example"
							onChange={(e) =>
								handleInput(e, setPortfolio, setCoverProgress)
							}
							required
						/>
						<span class="file-custom"></span>
						<progress value={coverProgress}></progress>
					</label>
					<input
						type="text"
						name="skills"
						placeholder="Skills"
						value={portfolio.skills}
						onChange={(e) => handleInput(e, setPortfolio)}
						required
					/>
					<input
						type="text"
						name="category"
						placeholder="Category"
						value={portfolio.category}
						onChange={(e) => handleInput(e, setPortfolio)}
						required
					/>
					<input
						type="text"
						name="copyright"
						placeholder="Copyright"
						value={portfolio.copyright}
						onChange={(e) => handleInput(e, setPortfolio)}
						required
					/>
					<input
						type="text"
						name="weburl"
						placeholder="Website URL"
						value={portfolio.weburl}
						onChange={(e) => handleInput(e, setPortfolio)}
						required
					/>
					<textarea
						name="description"
						cols="30"
						rows="6"
						placeholder="Description"
						onChange={(e) => handleInput(e, setPortfolio)}
						required
						value={portfolio.description}
					></textarea>

					{submit ? submit : <button type="submit">Publish</button>}
				</form>
			</div>
		</>
	);
}

//Export
export default Portfolio;
