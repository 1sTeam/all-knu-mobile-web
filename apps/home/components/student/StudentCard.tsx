interface StudentCardProps {
  student: { name: string; id: string; major: string };
}

const StudentCard = ({ student: { name, id, major } }: StudentCardProps) => {
  return (
    <>
      <div>image</div>
      <div>
        <p className="text-cyan-500">{major}</p>
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </>
  );
};

export default StudentCard;
