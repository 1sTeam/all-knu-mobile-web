interface CafetriaItemProps {
  title: string;
  menu: string[];
}

const CafetriaItem = ({ menu, title }: CafetriaItemProps) => {
  const convertTitle =
    title === "breakfast" ? "아침" : title === "lunch" ? "점심" : "저녁";
  return (
    <div>
      <h4>{convertTitle}</h4>
      <div>
        {menu.map((m) => (
          <p>{m}</p>
        ))}
      </div>
    </div>
  );
};

export default CafetriaItem;
