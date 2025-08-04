export default function ProductSearch({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Пошук товару..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}