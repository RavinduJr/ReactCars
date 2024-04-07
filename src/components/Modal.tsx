import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function (props: Props) {
  return (
    <>
    <div></div>
    <dialog>
        {props.children}
    </dialog>
    </>
  )
}
