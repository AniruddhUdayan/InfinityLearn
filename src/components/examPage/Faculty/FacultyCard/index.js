import Image from "next/image";

const FacultyCard = ({ ref2, name, image, headline, subject, usp }) => {
	return (
		<div ref={ref2} className="fc-wrapper">
			<div className="fc-main">
				<Image src={image} alt={name} width={350} height={0} className="fc-img" />
				<div className="fc-name">{name}</div>
				<div className="fc-headline">{headline}</div>
				<div className="fc-flex">
					<div className="fc-pt-1">{subject}</div>
					<div className="fc-pt-2">{usp}</div>
				</div>
			</div>
		</div>
	)
}

export default FacultyCard;