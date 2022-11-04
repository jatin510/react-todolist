export default function Todo(props: any) {
  const { todoDetails } = props;
  return (
    <>
      <p>{todoDetails.task}</p>
    </>
  );
}
