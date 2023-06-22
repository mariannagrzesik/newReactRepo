import { ChangeEvent } from "react";

type SearchFormProps = {
  searchTerm: string;
  handleSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = ({searchTerm, handleSearchTerm}: SearchFormProps) => (
  <input type="text" value={searchTerm} onChange={handleSearchTerm} />
)