import { useMemo, useState } from 'react'
import { Search, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const services = [
  { title: 'Website Development', category: 'Business websites', description: 'Responsive websites built around your goals.' },
  { title: 'Educational Platforms', category: 'Learning', description: 'A structured home for lessons and learners.' },
  { title: 'Business Sites', category: 'Business websites', description: 'A clear, compelling web presence for your business.' },
  { title: 'E-commerce', category: 'Online stores', description: 'Product experiences and storefronts tailored to you.' },
  { title: 'Web Apps', category: 'Custom development', description: 'Purpose-built tools for your workflow.' },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const navigate = useNavigate()
  const suggestions = useMemo(() => {
    const term = query.trim().toLowerCase()
    return term ? services.filter((service) => `${service.title} ${service.category} ${service.description}`.toLowerCase().includes(term)) : services.slice(0, 3)
  }, [query])
  const search = (value = query) => {
    const term = value.trim()
    if (!term) return
    setFocused(false)
    navigate(`/services?search=${encodeURIComponent(term)}`)
  }

  return (
    <form className="hero-search" role="search" onSubmit={(event) => { event.preventDefault(); search() }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div className="hero-search__field">
        <Search size={19} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          type="search"
          placeholder="What service are you looking for today?"
          aria-label="Search HIGH5 services"
          aria-autocomplete="list"
          aria-expanded={focused && suggestions.length > 0}
          aria-controls="hero-search-suggestions"
        />
        <button type="submit" aria-label="Search services"><Search size={18} /><span>Search</span></button>
      </div>
      {focused && suggestions.length > 0 && (
        <ul className="hero-search__suggestions" id="hero-search-suggestions" role="listbox">
          {suggestions.map((service) => (
            <li key={service.title} role="option" aria-selected="false">
              <button type="button" onClick={() => { setQuery(service.title); search(service.title) }}>
                <span><strong>{service.title}</strong><small>{service.description}</small></span><ArrowUpRight size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}
