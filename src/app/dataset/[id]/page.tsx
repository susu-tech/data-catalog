export default function DatasetById({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <p>This is ID: {id}</p>
    </>
  );
}
