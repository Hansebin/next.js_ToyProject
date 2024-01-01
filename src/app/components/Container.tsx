export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="w-container mx-auto">{children}</section>
    </>
  );
}
