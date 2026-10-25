export function Skeleton({ className = '' }) {
  return <span className={`skeleton ${className}`} aria-hidden="true" />
}

export function CardSkeleton({ kind = 'service' }) {
  return (
    <div className={`card-skeleton card-skeleton--${kind}`} role="status" aria-label={`Loading ${kind} card`}>
      <Skeleton className="skeleton--short" />
      <Skeleton className="skeleton--heading" />
      <Skeleton className="skeleton--line" />
      <Skeleton className="skeleton--line skeleton--medium" />
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="page-skeleton section-wrap" role="status" aria-label="Loading page">
      <Skeleton className="skeleton--short" />
      <Skeleton className="skeleton--heading" />
      <Skeleton className="skeleton--line" />
      <Skeleton className="skeleton--line skeleton--medium" />
    </div>
  )
}

export function TeamCardSkeleton() {
  return <CardSkeleton kind="team" />
}

export function ServiceCardSkeleton() {
  return <CardSkeleton kind="service" />
}

export function FormLoading({ children = 'Submitting…' }) {
  return <span className="form-loading"><span className="form-loading__spinner" aria-hidden="true" />{children}</span>
}
