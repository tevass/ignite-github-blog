import { useFormContext } from 'react-hook-form'
import { SearchFormData } from '../Content'

import {
  SearchFormContainer,
  SearchFormContent,
  // eslint-disable-next-line prettier/prettier
  SearchFormHeader
} from './styles'

interface SearchFormProps {
  postsAmount: number
}

export function SearchForm({ postsAmount }: SearchFormProps) {
  const { register } = useFormContext<SearchFormData>()

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h2>Publicações</h2>
        <span>
          {' '}
          {postsAmount} {postsAmount > 1 ? 'publicações' : 'publicação'}{' '}
        </span>
      </SearchFormHeader>
      <SearchFormContent>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContent>
    </SearchFormContainer>
  )
}
