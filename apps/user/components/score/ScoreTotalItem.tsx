interface ScoreTotalItemProps {
  title: string;
  value: number | string;
}

const ScoreTotalItem = ({ title, value }: ScoreTotalItemProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default ScoreTotalItem;
