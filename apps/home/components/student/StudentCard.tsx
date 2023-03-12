interface StudentCardProps {
  student: { name: string; id: string; major: string };
}

const StudentCard = ({ student: { name, id, major } }: StudentCardProps) => {
  return (
    <>
      <div>image</div>
      <div>
        <p>{major}</p>
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </>
  );
};

export default StudentCard;
