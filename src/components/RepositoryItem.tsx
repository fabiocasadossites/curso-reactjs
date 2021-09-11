interface RepositoryItemPropos {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemPropos) {
  return (
    <li>
      <strong>{props.repository.name ?? "Defaut"}</strong>
      <p>{props.repository.description ?? "Defaut"}</p>
      <a href={props.repository.html_url ?? "Defaut"}>Acessar repositório</a>
    </li>
  );
}
