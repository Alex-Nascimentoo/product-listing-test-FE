function Button(props) {
  return (
    <a
    id={ props.id }
    className={ props.className }
    href={ props.link }
    onClick={ props.onClick }
    >
      { props.children }
    </a>
  )
}

export default Button