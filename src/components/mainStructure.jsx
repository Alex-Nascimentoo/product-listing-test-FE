import '../css/mainStructure.css'
import Button from './button'

function MainStructure(props) {
  return (
    <>
      <header className="container row">
        <div className="col">
          <h1>{ props.pageTitle }</h1>
        </div>
        <div className="col row buttons">
          <Button
           className="single-button"
           link={ props.link1 }
           onClick={ props.onClick1 }
          >{ props.button1 }</Button>

          <Button
           className="single-button"
           id={ props.id }
           link={ props.link2 }
           onClick={ props.onClick2 }
          >{ props.button2 }</Button>
          
        </div>
      </header>

      <main className="container">
        <hr />

        { props.children }
      </main>

      <div className="container">
        <footer className="container">
          <hr />
          <h4>Scandiweb Assignment test - Alex Nascimento</h4>
        </footer>
      </div>
    </>
  )
}

export default MainStructure