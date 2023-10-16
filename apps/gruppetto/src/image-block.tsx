import {styled, css} from '@mui/material'
import {BuilderImageBlockProps, useWebsiteBuilder} from '@wepublish/website/builder'
import {ImageBlock} from '@wepublish/website/'

declare module 'react' {
  interface HTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto'
  }
}


export const GruppettoImageBlock = styled(ImageBlock)`
margin: 0;
max-width: 50%;
`

