interface MileageRankProps {
  score?: number;
}

const MileageRank = ({ score }: MileageRankProps) => {
  const { rank, color } = score
    ? score < 1000
      ? { rank: "U", color: "#F38D8D" }
      : score >= 1000 && score < 2000
      ? { rank: "C", color: "#F48C2C" }
      : score >= 2000 && score < 3000
      ? { rank: "B", color: "#F2CA50" }
      : score >= 3000
      ? { rank: "A", color: "#27AE60" }
      : { rank: "N", color: "#2D9CDB" }
    : { rank: "N", color: "#2D9CDB" };

  return <div>{rank}</div>;
};

export default MileageRank;
