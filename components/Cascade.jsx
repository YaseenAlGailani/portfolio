import {Children, cloneElement} from 'react'

export default function Cascade({children,className, before}){
  if(Children.count(children) > 1){
    throw new Error('Cascade component cannot have more than one child')
  }

  return (
    <div className={`relative ${className}`}>
      {cloneElement(children, {
        className:
          children.props.className +
          ` relative z-[3] text-palette-blue-900 dark:text-palette-yellow before:content-['${before}'] before:text-neutral-300 before:absolute before:-top-[1.1em] before:text-2xl`,
      })}
      {cloneElement(children, {
        className:
          children.props.className +
          " absolute top-[0.04em] -left-[0.04em] z-[2] text-palette-yellow dark:text-palette-blue-900",
        "aria-hidden": true,
      })}
      {cloneElement(children, {
        className:
          children.props.className +
          " absolute top-[0.1em] -left-[0.1em] z-[1] text-palette-grey dark:text-slate-900",
        "aria-hidden": true,
      })}
    </div>
  );
}