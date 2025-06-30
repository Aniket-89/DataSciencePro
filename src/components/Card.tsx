import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard";

const Card = (children: Element[]) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      {children}
    </SpotlightCard>
  );
};

export default Card;
