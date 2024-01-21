export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white text-center p-4">
      Lillestortinget &copy; {year}
    </footer>
  );
}
