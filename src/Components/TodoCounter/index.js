import './TodoCounter.css'

function TodoCounter ({ completed, total}) {
  return (
    <>
    <div className='counter-container'>
      <div className='counter'>
        <p className=''>Completados:</p>
        <span>{completed}</span>
      </div>

      <div className='counter'>
          <p className=''>Total:</p>
          <span> {total}</span>
      </div>
    </div>

    </>
  );
}

export { TodoCounter };