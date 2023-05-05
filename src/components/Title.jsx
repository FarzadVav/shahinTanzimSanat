export default function Title(props) {
  return (
    <div className="w-full flex justify-center items-center gap-3 sm:justify-start">
      {props.svg}
      <h3 className='text-slate-700 text-xl irsB sm:text-3xl'>{props.title}</h3>
    </div>
  )
}