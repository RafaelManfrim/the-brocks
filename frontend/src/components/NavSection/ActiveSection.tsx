import { cloneElement, ReactElement } from 'react'
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'

interface ActiveSectionProps extends NavLinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
  isNavigateLink?: boolean
}

export function ActiveSection({
  children,
  shouldMatchExactHref = false,
  isNavigateLink = false,
  ...rest
}: ActiveSectionProps) {
  const { pathname } = useLocation()
  let isActive = false

  if (shouldMatchExactHref && pathname === rest.to) {
    isActive = true
  }

  if (!shouldMatchExactHref && pathname.startsWith(String(rest.to))) {
    isActive = true
  }

  return isNavigateLink ? (
    <NavLink {...rest}>
      {cloneElement(children, {
        color: isActive ? 'purple.500' : 'base.text',
        borderStartWidth: 4,
        borderStyle: 'solid',
        borderColor: isActive ? 'purple.500' : 'transparent',
      })}
    </NavLink>
  ) : (
    cloneElement(children, {
      color: isActive ? 'purple.500' : 'base.text',
      borderStartWidth: 4,
      borderStyle: 'solid',
      borderColor: isActive ? 'purple.500' : 'transparent',
    })
  )
}
