export default function SnackList() {
  const snacks = [
    { name: 'Reeses', rank: 3 },
    { name: 'Cheez-Its', rank: 2 },
    { name: 'Black Plums', rank: 1 },
  ];

  return (
    <ul>
      {snacks
        .toSorted((a, b) => a.rank - b.rank)
        .map((snack) => (
          <li key={snack.name}>
            {snack.rank}. {snack.name}
          </li>
        ))}
    </ul>
  );
}
