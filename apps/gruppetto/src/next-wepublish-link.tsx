import {Link as BuilderLink} from '@wepublish/ui'
import {BuilderLinkProps} from '@wepublish/website'
import NextLink from 'next/link'
import {forwardRef} from 'react'

export const NextWepublishLink = forwardRef<HTMLAnchorElement, BuilderLinkProps>(
  function NextWepublishLink({children, href, ...props}, ref) {
    return (
      <NextLink href={href ?? ''} passHref legacyBehavior>
        <BuilderLink {...props} ref={ref}>
          {children}
        </BuilderLink>
      </NextLink>
    )
  }
)
