import "./rating-badge.css";

const RatingBadge = ({ description }: { description: string }) => {
  return <p className="rating-badge">{description}</p>;
};

export default RatingBadge;
