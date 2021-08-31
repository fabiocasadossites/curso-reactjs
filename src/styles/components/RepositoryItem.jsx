export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Defaut"}</strong>
      <p>{props.repository.description ?? "Defaut"}</p>
      <a href={props.repository.link ?? "Defaut"}>Acessar repositório</a>
    </li>
  );
}
